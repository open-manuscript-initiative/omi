import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

const ALL_LOCALES = [
  'bg','cs','da','de','el','en','es','et','fi','fr','ga','hr','hu','it','lt','lv','mt','nl','pl','pt','ro','sk','sl','sv',
];
const SOURCE_LOCALE = 'en';
const HAND_MAINTAINED = new Set(['en','hu','de']);
const DOCS_ROOT = path.resolve('docs');
const I18N_ROOT = path.resolve('i18n');
const STATE_PATH = path.resolve('.deepl', 'i18n-state.json');
const DOCS_PLUGIN_PATH = path.join('docusaurus-plugin-content-docs', 'current');
const BATCH_SIZE = 25;
const PROTECTED_TERMS = [
  'Open Manuscript Initiative','Open Manuscript Studio','OMI Studio','WebAuthn','SHA-256','ORCID','ROR','DOI','OJS','OMP','DOCX','IDML','JATS','CSL','OMI','CSS','HTML','PDF','EPUB','XTG','MIF','SLA','LaTeX','GitHub','Docusaurus','API','OAuth','JSON','XML','YAML','Markdown','MDX','JavaScript','TypeScript','React','Node.js','npm','@page','passkey',
].sort((a,b)=>b.length-a.length);

class DeepLQuotaError extends Error {}

const args = process.argv.slice(2);
const write = args.includes('--write');
const force = args.includes('--force');

if (args.includes('--test-markup-protection')) {
  const samples = [
    '[Download](https://example.com/release.zip)',
    '[`omi-manuscript-0.2.schema.json`](/schemas/omi-manuscript-0.2.schema.json)',
    '[`vargaijanos`](https://github.com/vargaijanos)',
  ];
  for (const sample of samples) {
    const restored = unprotectMarkup(protectMarkup(sample));
    if (restored !== sample) {
      throw new Error(`Markup protection round trip failed: ${sample} -> ${restored}`);
    }
  }
  const frontmatter = renderTranslatedSegment(
    { prefix: 'description: ', frontmatter: true },
    'Translated summary: with punctuation',
  );
  if (frontmatter !== 'description: "Translated summary: with punctuation"') {
    throw new Error(`Front matter escaping failed: ${frontmatter}`);
  }
  console.log(`Markup protection round trip passed for ${samples.length} samples.`);
  process.exit(0);
}

const requested = readListArg('--locales=') ?? ALL_LOCALES;
const locales = requested.filter((locale) => locale !== SOURCE_LOCALE);

if (!locales.length) {
  console.log('No target locales selected.');
  process.exit(0);
}

const sourceDocs = await listFiles(DOCS_ROOT, (file) => /\.mdx?$/.test(file));
const sourceDocRelatives = new Set(sourceDocs.map((file) => path.relative(DOCS_ROOT, file)));
const state = await loadState();

console.log(`Source docs: ${sourceDocs.length}`);
console.log(`Target locales: ${locales.join(', ')}`);
console.log(`Mode: ${write ? 'WRITE' : 'DRY RUN'}`);
console.log(`State: ${await exists(STATE_PATH) ? path.relative(process.cwd(), STATE_PATH) : 'new'}`);

for (const locale of locales) {
  const localeRoot = path.join(I18N_ROOT, locale);
  const docsRoot = path.join(localeRoot, DOCS_PLUGIN_PATH);
  const localeExists = await exists(localeRoot);
  const translatedDocs = localeExists && await exists(docsRoot)
    ? await listFiles(docsRoot, (file) => /\.mdx?$/.test(file))
    : [];
  const missing = sourceDocs.length - translatedDocs.filter((file) => sourceDocRelatives.has(path.relative(docsRoot, file))).length;
  console.log(`${locale}: ${localeExists ? 'locale exists' : 'locale missing'}, docs ${translatedDocs.length}/${sourceDocs.length}, missing ${Math.max(0, missing)}`);
}

if (!write) {
  console.log('\nDry run complete. No DeepL request was sent and no file was changed.');
  process.exit(0);
}

const authKey = process.env.DEEPL_API_KEY?.trim();
if (!authKey) throw new Error('DEEPL_API_KEY is required in --write mode.');
const apiBase = resolveApiBase(authKey);
const supportedTargets = await fetchSupportedTargetLanguages(apiBase, authKey);

try {
  for (const locale of locales) {
    const targetLang = resolveTargetLanguageCode(locale, supportedTargets);
    if (!targetLang) {
      console.warn(`Skipping ${locale}: DeepL account does not report a compatible target language.`);
      continue;
    }

    const localeRoot = path.join(I18N_ROOT, locale);
    const wasMissing = !(await exists(localeRoot));
    const isHandMaintained = HAND_MAINTAINED.has(locale);
    const localeState = getLocaleState(locale);

    if (wasMissing) {
      console.log(`\nScaffolding Docusaurus locale ${locale}...`);
      runDocusaurusWriteTranslations(locale, false);
    }

    console.log(`\nSynchronizing site locale ${locale} -> ${targetLang}${isHandMaintained ? ' (hand-maintained)' : ' (incremental)'}`);

    if (wasMissing || !isHandMaintained) {
      await syncJsonLocale(locale, targetLang, authKey, apiBase, localeState, {
        force: force && !isHandMaintained,
        preserveExisting: !wasMissing,
      });
    }

    await syncDocsLocale(locale, targetLang, authKey, apiBase, localeState, {
      force: force && !isHandMaintained,
      handMaintained: isHandMaintained,
    });

    await saveState();
  }
} catch (error) {
  await saveState();
  if (error instanceof DeepLQuotaError) {
    console.error(`\nDeepL quota exceeded. Partial translations and incremental state were saved: ${error.message}`);
    process.exitCode = 75;
  } else {
    throw error;
  }
}

if (!process.exitCode) {
  console.log('\nTranslation synchronization complete. Unchanged segments were reused without DeepL API calls.');
}

function readListArg(prefix) {
  const arg = args.find((value) => value.startsWith(prefix));
  return arg ? arg.slice(prefix.length).split(',').map((v)=>v.trim().toLowerCase()).filter(Boolean) : null;
}

function resolveApiBase(key) {
  const configured = process.env.DEEPL_API_URL?.trim();
  if (configured) return configured.replace(/\/$/, '');
  return key.endsWith(':fx') ? 'https://api-free.deepl.com' : 'https://api.deepl.com';
}

async function fetchSupportedTargetLanguages(apiBase, authKey) {
  const response = await fetch(`${apiBase}/v2/languages?type=target`, {
    headers: { Authorization: `DeepL-Auth-Key ${authKey}` },
  });
  if (!response.ok) throw await deeplError('Unable to read DeepL target languages', response);
  const payload = await response.json();
  return new Set(payload.map((item) => String(item.language).toUpperCase()));
}

function resolveTargetLanguageCode(locale, supported) {
  const candidates = locale === 'pt' ? ['PT-PT','PT-BR','PT'] : [locale.toUpperCase()];
  return candidates.find((candidate) => supported.has(candidate)) ?? null;
}

function runDocusaurusWriteTranslations(locale, override) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const commandArgs = ['run','write-translations','--','--locale',locale];
  if (override) commandArgs.push('--override');
  const result = spawnSync(npm, commandArgs, { stdio: 'inherit' });
  if (result.status !== 0) throw new Error(`Docusaurus write-translations failed for ${locale}.`);
}

async function syncJsonLocale(locale, targetLang, authKey, apiBase, localeState, options) {
  const localeRoot = path.join(I18N_ROOT, locale);
  const existingTree = options.preserveExisting ? await readJsonTree(localeRoot) : new Map();

  if (options.preserveExisting) {
    runDocusaurusWriteTranslations(locale, true);
  }

  const sourceTree = await readJsonTree(localeRoot);
  if (options.preserveExisting) {
    for (const [relative, value] of existingTree) {
      await writeJson(path.join(localeRoot, relative), value);
    }
  }

  for (const [relative, originalSourceValue] of sourceTree) {
    const file = path.join(localeRoot, relative);
    const sourceValue = structuredClone(originalSourceValue);
    const existingValue = existingTree.get(relative);
    const entries = collectJsonStrings(sourceValue);
    const pending = new Map();

    for (const entry of entries) {
      const key = `${relative}#${entry.path.join('/')}`;
      const sourceHash = hashText(entry.text);
      let stateEntry = localeState.json[key];
      const priorTarget = getAtPath(existingValue, entry.path);
      const priorTargetIsValid = typeof priorTarget === 'string' && !hasUnresolvedMarkupToken(priorTarget);

      if (hasUnresolvedMarkupToken(stateEntry?.translation)) {
        delete localeState.json[key];
        stateEntry = undefined;
      }

      if (!options.force && stateEntry?.sourceHash === sourceHash) {
        let translation = stateEntry.translation;
        if (priorTargetIsValid && priorTarget !== entry.text && priorTarget !== stateEntry.translation) {
          translation = priorTarget;
          stateEntry.translation = priorTarget;
        }
        setAtPath(sourceValue, entry.path, translation);
        continue;
      }

      if (!options.force && !stateEntry && priorTargetIsValid && priorTarget !== entry.text) {
        localeState.json[key] = { sourceHash, translation: priorTarget };
        setAtPath(sourceValue, entry.path, priorTarget);
        continue;
      }

      if (!pending.has(sourceHash)) pending.set(sourceHash, { text: entry.text, keys: [] });
      pending.get(sourceHash).keys.push({ key, path: entry.path });
    }

    await writeJson(file, sourceValue);
    await saveState();

    const pendingItems = [...pending.entries()];
    for (let offset = 0; offset < pendingItems.length; offset += BATCH_SIZE) {
      const batch = pendingItems.slice(offset, offset + BATCH_SIZE);
      const translated = await translateBatch(batch.map(([, item]) => item.text), targetLang, authKey, apiBase);
      batch.forEach(([sourceHash, item], index) => {
        const translation = translated[index];
        for (const ref of item.keys) {
          localeState.json[ref.key] = { sourceHash, translation };
          setAtPath(sourceValue, ref.path, translation);
        }
      });
      await writeJson(file, sourceValue);
      await saveState();
    }

    console.log(`  JSON: ${path.relative(process.cwd(), file)} (${entries.length} strings, ${pendingItems.length} translated)`);
  }
}

async function syncDocsLocale(locale, targetLang, authKey, apiBase, localeState, options) {
  const targetRoot = path.join(I18N_ROOT, locale, DOCS_PLUGIN_PATH);
  await mkdir(targetRoot, { recursive: true });

  if (!options.handMaintained) {
    const existingTargets = await listFiles(targetRoot, (file) => /\.mdx?$/.test(file));
    for (const targetFile of existingTargets) {
      const relative = path.relative(targetRoot, targetFile);
      if (!sourceDocRelatives.has(relative)) {
        await rm(targetFile, { force: true });
        delete localeState.docs[relative];
        console.log(`  DELETE DOC: ${relative}`);
      }
    }
  }

  for (const sourceFile of sourceDocs) {
    const relative = path.relative(DOCS_ROOT, sourceFile);
    const targetFile = path.join(targetRoot, relative);
    const targetExists = await exists(targetFile);
    if (options.handMaintained && targetExists) continue;

    const source = await readFile(sourceFile, 'utf8');
    const model = parseMarkdown(source);
    const docState = localeState.docs[relative] ?? { segments: {} };
    localeState.docs[relative] = docState;

    const activeHashes = new Set(model.segments.map((segment) => segment.hash));
    if (!options.force) {
      docState.segments = Object.fromEntries(
        Object.entries(docState.segments).filter(
          ([hash, translation]) => activeHashes.has(hash) && !hasUnresolvedMarkupToken(translation),
        ),
      );
    } else {
      docState.segments = {};
    }

    const pending = new Map();
    for (const segment of model.segments) {
      if (!docState.segments[segment.hash]) {
        pending.set(segment.hash, segment.text);
      }
    }

    await mkdir(path.dirname(targetFile), { recursive: true });
    await renderMarkdownToFile(model, docState, targetFile);
    await saveState();

    const pendingItems = [...pending.entries()];
    for (let offset = 0; offset < pendingItems.length; offset += BATCH_SIZE) {
      const batch = pendingItems.slice(offset, offset + BATCH_SIZE);
      const translated = await translateBatch(batch.map(([, text]) => text), targetLang, authKey, apiBase);
      batch.forEach(([hash], index) => {
        docState.segments[hash] = translated[index];
      });
      await renderMarkdownToFile(model, docState, targetFile);
      await saveState();
    }

    console.log(`  DOC: ${relative} (${model.segments.length} segments, ${pendingItems.length} translated)`);
  }
}

function parseMarkdown(source) {
  const lines = source.split(/\r?\n/);
  const segments = [];
  let fenced = false;
  let frontmatter = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (i === 0 && line.trim() === '---') { frontmatter = true; continue; }
    if (frontmatter && line.trim() === '---') { frontmatter = false; continue; }
    if (/^\s*```/.test(line) || /^\s*~~~/.test(line)) { fenced = !fenced; continue; }
    if (fenced || !line.trim()) continue;

    if (frontmatter) {
      const match = line.match(/^(\s*)(title|sidebar_label|description):\s*(.+)$/);
      if (!match) continue;
      const raw = match[3].trim();
      const quote = ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) ? raw[0] : '';
      const text = quote ? raw.slice(1, -1) : raw;
      segments.push({ index: i, prefix: `${match[1]}${match[2]}: `, quote, text, hash: hashText(text), frontmatter: true });
      continue;
    }

    if (/^\s*(import|export)\b/.test(line) || /^\s*<\/?[A-Z][^>]*>\s*$/.test(line)) continue;
    if (/^\s*\{.*\}\s*$/.test(line)) continue;

    const { prefix, body } = splitMarkdownPrefix(line);
    if (!body || !/[A-Za-z]/.test(body)) continue;
    segments.push({ index: i, prefix, quote: '', text: body, hash: hashText(body) });
  }

  return { lines, segments };
}

async function renderMarkdownToFile(model, docState, targetFile) {
  const lines = [...model.lines];
  for (const segment of model.segments) {
    const translated = docState.segments[segment.hash] ?? segment.text;
    lines[segment.index] = renderTranslatedSegment(segment, translated);
  }
  await writeFile(targetFile, lines.join('\n'), 'utf8');
}

function renderTranslatedSegment(segment, translated) {
  return segment.frontmatter
    ? `${segment.prefix}${JSON.stringify(translated)}`
    : `${segment.prefix}${segment.quote}${translated}${segment.quote}`;
}

function splitMarkdownPrefix(line) {
  const match = line.match(/^(\s*(?:#{1,6}\s+|[-*+]\s+|\d+[.)]\s+|>\s*)?)(.*)$/);
  return { prefix: match?.[1] ?? '', body: match?.[2] ?? line };
}

function collectJsonStrings(value, currentPath = [], out = []) {
  if (typeof value === 'string') {
    const lastKey = currentPath[currentPath.length - 1];
    if (lastKey !== 'description') out.push({ path: currentPath, text: value });
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectJsonStrings(item, [...currentPath, index], out));
    return out;
  }
  if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      collectJsonStrings(item, [...currentPath, key], out);
    }
  }
  return out;
}

function getAtPath(value, parts) {
  let current = value;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = current[part];
  }
  return current;
}

function setAtPath(value, parts, next) {
  let current = value;
  for (let i = 0; i < parts.length - 1; i += 1) {
    current = current[parts[i]];
  }
  current[parts.at(-1)] = next;
}

async function readJsonTree(root) {
  const map = new Map();
  const files = await listFiles(root, (file) => file.endsWith('.json'));
  for (const file of files) {
    try {
      map.set(path.relative(root, file), JSON.parse(await readFile(file, 'utf8')));
    } catch {
      // Ignore malformed/non-JSON files; Docusaurus will validate them later.
    }
  }
  return map;
}

async function writeJson(file, value) {
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

async function translateBatch(texts, targetLang, authKey, apiBase) {
  if (!texts.length) return [];
  const body = new URLSearchParams();
  for (const text of texts) body.append('text', protectMarkup(text));
  body.set('source_lang', 'EN');
  body.set('target_lang', targetLang);
  body.set('tag_handling', 'xml');
  body.set('tag_handling_version', 'v2');
  body.set('ignore_tags', 'keep');
  body.set('preserve_formatting', '1');

  const response = await fetch(`${apiBase}/v2/translate`, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${authKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (response.status === 456) {
    throw new DeepLQuotaError('HTTP 456 — quota exceeded');
  }
  if (!response.ok) throw await deeplError(`DeepL translation failed for ${targetLang}`, response);

  const payload = await response.json();
  return payload.translations.map((item) => unprotectMarkup(String(item.text)));
}

function protectMarkup(text) {
  const tokens = [];
  let value = text;
  const patterns = [
    /\[[^\]]+\]\([^)]*\)/g,
    /`[^`]+`/g,
    /<\/?[A-Za-z][^>]*>/g,
    /\{[^{}]+\}/g,
    /https?:\/\/[^\s)]+/g,
    new RegExp(PROTECTED_TERMS.map(escapeRegExp).join('|'), 'g'),
  ];

  for (const pattern of patterns) {
    value = value.replace(pattern, (match) => {
      const id = tokens.push(match) - 1;
      return `XQZTOKEN${id}END`;
    });
  }

  value = escapeXml(value);
  value = value.replace(/XQZTOKEN(\d+)END/g, (_, index) => `<keep>${escapeXml(tokens[Number(index)])}</keep>`);
  return `<root>${value}</root>`;
}

function unprotectMarkup(text) {
  let value = text.replace(/^\s*<root>/, '').replace(/<\/root>\s*$/, '');
  value = value.replace(/<keep>([\s\S]*?)<\/keep>/g, (_, inner) => decodeXml(inner));
  value = decodeXml(value);
  if (hasUnresolvedMarkupToken(value)) {
    throw new Error(`DeepL markup protection left an unresolved placeholder: ${value.slice(0, 200)}`);
  }
  return value;
}

function hasUnresolvedMarkupToken(value) {
  return typeof value === 'string' && /XQZTOKEN\d+END/.test(value);
}

function hashText(value) {
  return createHash('sha256').update(value, 'utf8').digest('hex');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function decodeXml(value) {
  return value.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
}

async function deeplError(prefix, response) {
  const detail = await response.text().catch(() => '');
  return new Error(`${prefix}: HTTP ${response.status}${detail ? ` — ${detail.slice(0, 500)}` : ''}`);
}

function getLocaleState(locale) {
  state.locales[locale] ??= { json: {}, docs: {} };
  state.locales[locale].json ??= {};
  state.locales[locale].docs ??= {};
  return state.locales[locale];
}

async function loadState() {
  try {
    const parsed = JSON.parse(await readFile(STATE_PATH, 'utf8'));
    if (parsed?.version === 1 && parsed.locales && typeof parsed.locales === 'object') return parsed;
  } catch {
    // Start a new state file.
  }
  return { version: 1, locales: {} };
}

async function saveState() {
  await mkdir(path.dirname(STATE_PATH), { recursive: true });
  await writeFile(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`, 'utf8');
}

async function listFiles(root, predicate) {
  if (!(await exists(root))) return [];
  const out = [];
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (predicate(full)) out.push(full);
    }
  }
  await walk(root);
  return out.sort();
}

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

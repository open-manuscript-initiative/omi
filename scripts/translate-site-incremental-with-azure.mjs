import http from 'node:http';
import { spawn } from 'node:child_process';
import process from 'node:process';

const ENGINE_PATH = 'scripts/translate-site-incremental-with-deepl.mjs';
const DEFAULT_ENDPOINT = 'https://api.cognitive.microsofttranslator.com';
const args = process.argv.slice(2);

if (args.includes('--test-adapter')) {
  runAdapterTests();
  process.exit(0);
}

if (!args.includes('--write')) {
  const code = await runEngine(args, null);
  process.exitCode = code;
  process.exit();
}

const apiKey = process.env.AZURE_TRANSLATOR_KEY?.trim();
if (!apiKey) {
  throw new Error('AZURE_TRANSLATOR_KEY is required in --write mode.');
}

const region = process.env.AZURE_TRANSLATOR_REGION?.trim() ?? '';
const endpoint = (process.env.AZURE_TRANSLATOR_ENDPOINT?.trim() || DEFAULT_ENDPOINT).replace(/\/+$/, '');

const server = http.createServer((request, response) => {
  handleProxyRequest(request, response).catch((error) => {
    console.error(`Azure Translator adapter error: ${error.stack || error.message}`);
    if (!response.headersSent) {
      response.writeHead(500, { 'content-type': 'application/json; charset=utf-8' });
    }
    response.end(JSON.stringify({ message: error.message }));
  });
});

await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});

const address = server.address();
if (!address || typeof address === 'string') {
  throw new Error('Unable to determine local Azure Translator adapter address.');
}

const proxyBase = `http://127.0.0.1:${address.port}`;
console.log(`Azure Translator adapter active via ${proxyBase}.`);
console.log('The existing incremental translation engine and .deepl/i18n-state.json are reused for compatibility.');

try {
  const code = await runEngine(args, proxyBase);
  process.exitCode = code;
} finally {
  await new Promise((resolve) => server.close(resolve));
}

async function runEngine(engineArgs, proxyBase) {
  const env = { ...process.env };
  if (proxyBase) {
    env.DEEPL_API_KEY = 'azure-translator-adapter:fx';
    env.DEEPL_API_URL = proxyBase;
  }

  const child = spawn(process.execPath, [ENGINE_PATH, ...engineArgs], {
    env,
    stdio: ['inherit', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (chunk) => {
    process.stdout.write(rebrandEngineOutput(chunk));
  });
  child.stderr.on('data', (chunk) => {
    process.stderr.write(rebrandEngineOutput(chunk));
  });

  return await new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('close', (code, signal) => {
      if (signal) {
        console.error(`Translation engine terminated by signal ${signal}.`);
        resolve(1);
        return;
      }
      resolve(code ?? 1);
    });
  });
}

function rebrandEngineOutput(chunk) {
  return String(chunk)
    .replaceAll('DeepL', 'Azure Translator')
    .replaceAll('DEEPL_API_KEY', 'AZURE_TRANSLATOR_KEY');
}

async function handleProxyRequest(request, response) {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1');

  if (request.method === 'GET' && url.pathname === '/v2/languages') {
    await handleLanguages(response);
    return;
  }

  if (request.method === 'POST' && url.pathname === '/v2/translate') {
    await handleTranslate(request, response);
    return;
  }

  response.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify({ message: 'Unsupported Azure Translator adapter route.' }));
}

async function handleLanguages(response) {
  const url = `${endpoint}/languages?api-version=3.0&scope=translation`;
  const upstream = await fetch(url, {
    headers: azureHeaders(false),
  });

  if (!upstream.ok) {
    await proxyAzureError(response, upstream, 'Unable to read Azure Translator languages');
    return;
  }

  const payload = await upstream.json();
  const languages = Object.entries(payload.translation ?? {}).map(([language, metadata]) => ({
    language: language.toUpperCase(),
    name: metadata?.name ?? language,
  }));

  response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(languages));
}

async function handleTranslate(request, response) {
  const rawBody = await readRequestBody(request);
  const form = new URLSearchParams(rawBody);
  const texts = form.getAll('text');
  const sourceLang = normalizeAzureLanguage(form.get('source_lang') || 'en');
  const targetLang = normalizeAzureLanguage(form.get('target_lang') || '');

  if (!texts.length || !targetLang) {
    response.writeHead(400, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ message: 'Missing text or target language.' }));
    return;
  }

  const translated = await translateWithAzure(texts, sourceLang, targetLang, response);
  if (!translated) return;

  response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify({
    translations: translated.map((text) => ({ text })),
  }));
}

async function translateWithAzure(texts, sourceLang, targetLang, response) {
  const query = new URLSearchParams({
    'api-version': '3.0',
    from: sourceLang,
    to: targetLang,
    textType: 'html',
  });

  const upstream = await fetch(`${endpoint}/translate?${query}`, {
    method: 'POST',
    headers: azureHeaders(true),
    body: JSON.stringify(texts.map((text) => ({ Text: deepLProtectedXmlToAzureHtml(text) }))),
  });

  if (!upstream.ok) {
    await proxyAzureError(response, upstream, `Azure Translator request failed for ${targetLang}`);
    return null;
  }

  const payload = await upstream.json();
  if (!Array.isArray(payload) || payload.length !== texts.length) {
    response.writeHead(502, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({
      message: `Azure Translator returned ${Array.isArray(payload) ? payload.length : 'an invalid number of'} results for ${texts.length} source texts.`,
    }));
    return null;
  }

  return payload.map((item, index) => {
    const text = item?.translations?.[0]?.text;
    if (typeof text !== 'string') {
      throw new Error(`Azure Translator response item ${index} does not contain translated text.`);
    }
    return azureHtmlToDeepLProtectedXml(text);
  });
}

function azureHeaders(includeContentType) {
  const headers = {
    'Ocp-Apim-Subscription-Key': apiKey,
  };
  if (region) headers['Ocp-Apim-Subscription-Region'] = region;
  if (includeContentType) headers['Content-Type'] = 'application/json; charset=UTF-8';
  return headers;
}

async function proxyAzureError(response, upstream, prefix) {
  const detail = await upstream.text().catch(() => '');
  const quotaLike = upstream.status === 429;
  const status = quotaLike ? 456 : upstream.status;

  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify({
    message: `${prefix}: HTTP ${upstream.status}${detail ? ` — ${detail.slice(0, 500)}` : ''}`,
  }));
}

function normalizeAzureLanguage(language) {
  return language.trim().toLowerCase();
}

function deepLProtectedXmlToAzureHtml(value) {
  let inner = value.trim();
  inner = inner.replace(/^<root>/, '').replace(/<\/root>$/, '');
  inner = inner.replace(/<keep>/g, '<span class="notranslate">');
  inner = inner.replace(/<\/keep>/g, '</span>');
  return inner;
}

function azureHtmlToDeepLProtectedXml(value) {
  let inner = value.trim();
  inner = inner.replace(
    /<span\b[^>]*\bclass=(["'])notranslate\1[^>]*>/gi,
    '<keep>',
  );
  inner = inner.replace(/<\/span>/gi, '</keep>');
  return `<root>${inner}</root>`;
}

async function readRequestBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

function runAdapterTests() {
  const samples = [
    '<root>Hello <keep>Open Manuscript Initiative</keep>.</root>',
    '<root>See <keep>&lt;a href=&quot;https://example.org&quot;&gt;link&lt;/a&gt;</keep>.</root>',
    '<root>Use <keep>`npm run build`</keep> before publishing.</root>',
  ];

  for (const sample of samples) {
    const html = deepLProtectedXmlToAzureHtml(sample);
    const restored = azureHtmlToDeepLProtectedXml(html);
    if (restored !== sample) {
      throw new Error(`Azure adapter markup round trip failed: ${sample} -> ${restored}`);
    }
  }

  if (normalizeAzureLanguage('PT-PT') !== 'pt-pt') {
    throw new Error('Azure language normalization failed.');
  }

  console.log(`Azure Translator adapter tests passed for ${samples.length} markup samples.`);
}

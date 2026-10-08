import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const specificationPath = join(root, 'docs/specifications/file-format.md');
const coveragePath = join(root, 'docs/specifications/file-format-requirement-coverage.md');
const manifestPath = join(root, 'static/examples/omi-spec-320/0.2.0/manifest.json');
const [specification, coverage, manifestSource] = await Promise.all([
  readFile(specificationPath, 'utf8'),
  readFile(coveragePath, 'utf8'),
  readFile(manifestPath, 'utf8'),
]);
const manifest = JSON.parse(manifestSource);

const requirements = [...specification.matchAll(/\*\*REQ-FMT-(\d{3}):\*\*/g)]
  .map((match) => `REQ-FMT-${match[1]}`);
const rows = [...coverage.matchAll(/^\|\s*`(REQ-FMT-\d{3})`\s*\|\s*(tested|partial|untested)\s*\|\s*([^|]+)\|/gm)]
  .map((match) => ({ requirement: match[1], status: match[2], evidence: match[3].trim() }));
const expected = new Set(requirements);
const mapped = new Set(rows.map(({ requirement }) => requirement));
const duplicates = rows.map(({ requirement }) => requirement)
  .filter((requirement, index, all) => all.indexOf(requirement) !== index);
const missing = [...expected].filter((requirement) => !mapped.has(requirement));
const unknown = [...mapped].filter((requirement) => !expected.has(requirement));
const evidenceMissing = rows
  .filter(({ status, evidence }) => status !== 'untested' && (evidence === '—' || evidence.length === 0))
  .map(({ requirement }) => requirement);
const fixtureMappingsUnknown = (manifest.fixtures ?? [])
  .flatMap((fixture) => fixture.requirements ?? [])
  .filter((requirement) => !expected.has(requirement));

if (duplicates.length || missing.length || unknown.length || evidenceMissing.length || fixtureMappingsUnknown.length) {
  throw new Error([
    duplicates.length ? `duplicate coverage rows: ${duplicates.join(', ')}` : '',
    missing.length ? `requirements without coverage rows: ${missing.join(', ')}` : '',
    unknown.length ? `coverage rows without normative requirements: ${unknown.join(', ')}` : '',
    evidenceMissing.length ? `covered requirements without evidence: ${evidenceMissing.join(', ')}` : '',
    fixtureMappingsUnknown.length ? `fixture mappings without normative requirements: ${fixtureMappingsUnknown.join(', ')}` : '',
  ].filter(Boolean).join('\n'));
}

console.log(`Mapped all ${requirements.length} normative REQ-FMT requirements; ${rows.filter(({ status }) => status === 'tested').length} tested, ${rows.filter(({ status }) => status === 'partial').length} partial, ${rows.filter(({ status }) => status === 'untested').length} untested.`);

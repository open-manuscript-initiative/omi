import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';
import { validateCoreSnapshot } from '../static/tools/core-snapshot-validator-0.1.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export async function verifyCoreReview() {
  const folder = join(root, 'static/examples/omi-core/0.1.0');
  const manifestBytes = await readFile(join(folder, 'manifest.json'));
  const manifest = JSON.parse(manifestBytes);
  const schema = JSON.parse(await readFile(join(root, 'static/schemas/omi-core-snapshot-0.1.schema.json'), 'utf8'));
  const ajv = new Ajv2020({ strict: true, allErrors: true });
  const structural = ajv.compile(schema);
  if (manifest.approved !== false || schema.$id !== manifest.schema) throw new Error('Unexpected profile approval or schema identity.');
  const paths = {
    'OMI-SPEC-000': 'docs/foundations/core-principles.md',
    'OMI-SPEC-100': 'docs/specifications/document-model.md',
    'OMI-SPEC-120': 'docs/specifications/core/scholarly-object-model.md',
    'OMI-SPEC-140': 'docs/specifications/metadata-model.md',
  };
  const requirements = [];
  for (const [id, path] of Object.entries(paths)) {
    const text = await readFile(join(root, path), 'utf8');
    if (!text.includes(`| Version | \`${manifest.specifications[id]}\` |`)) throw new Error(`Wrong version for ${id}`);
    requirements.push(...[...text.matchAll(/\*\*(REQ-(?:PRI|DOC|OBJ|MET)-\d{3}):\*\*/g)].map(match => match[1]));
    for (let section = 1; section <= 23; section++) if (!text.includes(`## ${section}. `)) throw new Error(`Missing template section ${section} in ${id}`);
  }
  const mapped = manifest.requirements.map(item => item.id);
  if (new Set(requirements).size !== requirements.length || new Set(mapped).size !== mapped.length
    || requirements.length !== mapped.length || requirements.some(id => !mapped.includes(id))) throw new Error('Incomplete or duplicate normative requirement inventory.');
  const cases = new Set();
  const results = [];
  for (const fixture of manifest.fixtures) {
    if (!/^[a-z0-9-]+\.json$/.test(fixture.path) || cases.has(fixture.id)) throw new Error('Unsafe or duplicate fixture.');
    cases.add(fixture.id);
    const bytes = await readFile(join(folder, fixture.path));
    if (createHash('sha256').update(bytes).digest('hex') !== fixture.sha256) throw new Error(`Fixture integrity mismatch: ${fixture.id}`);
    const document = JSON.parse(bytes), before = JSON.stringify(document);
    const schemaValid = structural(document);
    const result = validateCoreSnapshot(document, { mode: fixture.mode });
    const repeated = validateCoreSnapshot(document, { mode: fixture.mode });
    const codes = [...new Set(result.diagnostics.map(item => item.code))].sort();
    const pass = schemaValid === fixture.schemaValid && result.outcome === fixture.expectedOutcome
      && JSON.stringify(codes) === JSON.stringify(fixture.expectedDiagnostics)
      && JSON.stringify(result) === JSON.stringify(repeated) && JSON.stringify(document) === before;
    if (!pass) throw new Error(`Core fixture failed: ${fixture.id}; schema=${schemaValid}, outcome=${result.outcome}, codes=${codes.join(',')}`);
    if (fixture.requirements.some(id => !mapped.includes(id))) throw new Error('Unknown requirement mapping.');
    results.push({ id: fixture.id, digest: fixture.sha256, status: 'pass' });
  }
  for (const item of manifest.requirements) {
    const expected = manifest.fixtures.filter(fixture => fixture.requirements.includes(item.id)).map(fixture => fixture.id);
    if (!['partial', 'untested'].includes(item.status) || JSON.stringify(expected) !== JSON.stringify(item.fixtures)
      || (item.status === 'partial') !== (item.fixtures.length > 0)) throw new Error(`Invalid coverage: ${item.id}`);
  }
  return { profile: manifest.profile, suiteVersion: manifest.suiteVersion, approved: false,
    suiteDigest: createHash('sha256').update(manifestBytes).digest('hex'), runner: 'core-review-0.1.0',
    environment: `${process.version}/${process.platform}/${process.arch}`, createdAt: new Date().toISOString(),
    results, requirements: manifest.requirements, coverage: 'incomplete', outcome: 'indeterminate', independent: false };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const report = await verifyCoreReview();
  console.log(`Core review: ${report.results.length} fixtures pass; ${report.requirements.length} requirements accounted for; normative conformance remains ${report.outcome}.`);
  const reportIndex = process.argv.indexOf('--report');
  if (reportIndex !== -1) {
    const destination = resolve(process.argv[reportIndex + 1]);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, `${JSON.stringify(report, null, 2)}\n`);
  }
}

import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { verifyCoreReview } from './validate-core-review.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const suites = {
  'studio-core-identity-reference-0.1.0': ['OMI-SPEC-000', 'OMI-SPEC-100', 'OMI-SPEC-120'],
  'studio-core-export-privacy-0.1.0': ['OMI-SPEC-000', 'OMI-SPEC-140'],
  'studio-core-metadata-0.1.0': ['OMI-SPEC-000', 'OMI-SPEC-120', 'OMI-SPEC-140'],
  'studio-core-localized-conversion-0.1.0': ['OMI-SPEC-000', 'OMI-SPEC-140'],
  'studio-core-extensions-0.1.0': ['OMI-SPEC-000', 'OMI-SPEC-100', 'OMI-SPEC-120', 'OMI-SPEC-140'],
};

export function inspectStudioCoreEvidence(implementation, requirements, sourceCommit) {
  assert.equal(implementation.format, 'omi-studio-core-implementation-evidence');
  assert.equal(implementation.repository, 'https://github.com/open-manuscript-initiative/open-manuscript-studio');
  assert.ok(Object.hasOwn(suites, implementation.suite), 'Unknown implementation evidence suite');
  assert.match(implementation.sourceCommit, /^[a-f0-9]{40}$/);
  assert.equal(implementation.sourceCommit, sourceCommit);
  assert.equal(implementation.approved, false);
  assert.equal(implementation.independent, false);
  assert.equal(implementation.coverage, 'incomplete');
  assert.equal(implementation.outcome, 'indeterminate');
  const versions = Object.fromEntries(suites[implementation.suite].map(id => [id, requirements.find(item => item.specification === id)?.version]));
  assert.deepEqual(implementation.specifications, versions);
  assert.equal(implementation.results.length, 12);
  assert.equal(new Set(implementation.results.map(item => item.id)).size, implementation.results.length);
  const known = new Set(requirements.map(item => item.id));
  for (const result of implementation.results) {
    assert.equal(result.status, 'pass');
    assert.ok(result.requirements.length > 0);
    assert.equal(new Set(result.requirements).size, result.requirements.length);
    for (const id of result.requirements) assert.ok(known.has(id), `Unknown requirement: ${id}`);
  }
  const covered = [...new Set(implementation.results.flatMap(item => item.requirements))].sort();
  assert.deepEqual(implementation.requirements.map(item => item.id), covered);
  for (const item of implementation.requirements) {
    assert.equal(item.status, 'partial');
    assert.deepEqual(item.cases, implementation.results.filter(result => result.requirements.includes(item.id)).map(result => result.id));
  }
  assert.ok(implementation.sourceFiles.length > 0);
  assert.equal(new Set(implementation.sourceFiles.map(item => item.path)).size, implementation.sourceFiles.length);
  for (const item of implementation.sourceFiles) {
    assert.ok(/^(src|scripts|tests)\//.test(item.path) && !item.path.split('/').includes('..'));
    assert.match(item.sha256, /^[a-f0-9]{64}$/);
  }
  return covered;
}

export async function verifyCoreImplementationEvidence() {
  // Validator checks execute here; Studio suites remain explicitly archived observations.
  const validator = await verifyCoreReview();
  const index = JSON.parse(await readFile(join(root, 'static/evidence/core-extensions-2026-11-05.json'), 'utf8'));
  assert.equal(index.format, 'omi-combined-core-evidence-index');
  assert.equal(validator.suiteDigest, index.validatorManifestSha256, 'validator baseline integrity');
  assert.equal(sha256(await readFile(join(root, 'scripts/validate-file-format-fixtures.mjs'))), index.fileFormatValidatorSha256);
  assert.equal(index.studioEvidence.length, Object.keys(suites).length);
  assert.equal(new Set(index.studioEvidence.map(item => item.suite)).size, Object.keys(suites).length);
  assert.ok(Object.hasOwn(suites, index.newSuite));
  const implementations = [], records = [], covered = new Set();
  for (const entry of index.studioEvidence) {
    assert.ok(/^static\/evidence\/studio-(?:(?:identity-reference|export-privacy|metadata|localized-conversion)-2026-11-04|extensions-2026-11-05)\.json$/.test(entry.path));
    const bytes = await readFile(join(root, entry.path));
    assert.equal(sha256(bytes), entry.sha256, 'Studio evidence integrity');
    const implementation = JSON.parse(bytes);
    assert.equal(implementation.suite, entry.suite);
    for (const id of inspectStudioCoreEvidence(implementation, validator.requirements, entry.sourceCommit)) covered.add(id);
    records.push(implementation);
    implementations.push({ execution: 'archived-reference-implementation-run', suite: implementation.suite,
      repository: implementation.repository, sourceCommit: implementation.sourceCommit,
      artifactPath: entry.path, sha256: sha256(bytes), cases: implementation.results.length });
  }
  const requirements = validator.requirements.map(item => ({ ...item,
    status: covered.has(item.id) ? 'partial' : item.status,
    implementationCases: records.flatMap(implementation => implementation.results
      .filter(result => result.requirements.includes(item.id))
      .map(result => ({ suite: implementation.suite, caseId: result.id }))),
  }));
  const counts = { requirements: requirements.length,
    validatorPartial: validator.requirements.filter(item => item.status === 'partial').length,
    combinedPartial: requirements.filter(item => item.status === 'partial').length,
    untested: requirements.filter(item => item.status === 'untested').length,
    fullyEvidenced: 0,
  };
  const oldCoverage = new Set(validator.requirements.filter(item => item.status === 'partial').map(item => item.id));
  for (const record of records.filter(item => item.suite !== index.newSuite)) {
    for (const item of record.requirements) oldCoverage.add(item.id);
  }
  assert.deepEqual(index.newPartialRequirements, [...covered].filter(id => !oldCoverage.has(id)).sort());
  assert.deepEqual(index.counts, counts);
  assert.equal(index.approved, false);
  assert.equal(index.independent, false);
  assert.deepEqual(index.lifecyclePromotions, []);
  return { format: 'omi-combined-core-evidence', version: '0.5.0', createdAt: new Date().toISOString(),
    counts, requirements, validator: { execution: 'local', suiteVersion: validator.suiteVersion,
      suiteDigest: validator.suiteDigest, fixtures: validator.results.length, behaviors: validator.behavioralResults.length },
    implementations, approved: false, independent: false, coverage: 'incomplete', outcome: 'indeterminate',
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const report = await verifyCoreImplementationEvidence();
  console.log(`Combined core evidence: ${report.counts.combinedPartial} partial / ${report.counts.untested} untested / 0 fully evidenced; Studio cases are archived commit-pinned observations, not re-executed by this command.`);
  const index = process.argv.indexOf('--report');
  if (index !== -1) {
    if (!process.argv[index + 1]) throw new Error('Missing --report destination.');
    const path = resolve(process.argv[index + 1]);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, `${JSON.stringify(report, null, 2)}\n`);
  }
}

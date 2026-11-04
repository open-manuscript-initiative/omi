import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { inspectStudioCoreEvidence, verifyCoreImplementationEvidence } from '../scripts/validate-core-implementation-evidence.mjs';

test('combines executed validator evidence with explicit archived Studio observations', async () => {
  const report = await verifyCoreImplementationEvidence();
  assert.deepEqual(report.counts, { requirements: 66, validatorPartial: 25, combinedPartial: 32, untested: 34, fullyEvidenced: 0 });
  assert.equal(report.implementation.execution, 'archived-reference-implementation-run');
  assert.equal(report.validator.execution, 'local');
  assert.equal(report.implementation.cases, 12);
  assert.equal(report.outcome, 'indeterminate');
  assert.equal(report.independent, false);
  assert.equal(report.approved, false);
});

test('failed, duplicated, misversioned or overstated archived results cannot increase coverage', async () => {
  const evidence = JSON.parse(await readFile(new URL('../static/evidence/studio-identity-reference-2026-11-04.json', import.meta.url)));
  const manifest = JSON.parse(await readFile(new URL('../static/examples/omi-core/0.1.0/manifest.json', import.meta.url)));
  const mutations = [
    value => { value.results[0].status = 'fail'; },
    value => { value.results[1].id = value.results[0].id; },
    value => { value.specifications['OMI-SPEC-100'] = '0.1.0'; },
    value => { value.requirements[0].status = 'complete'; },
    value => { value.results[0].requirements.push('REQ-UNKNOWN-999'); },
  ];
  for (const mutate of mutations) {
    const broken = structuredClone(evidence);
    mutate(broken);
    assert.throws(() => inspectStudioCoreEvidence(broken, manifest.requirements, evidence.sourceCommit));
  }
});

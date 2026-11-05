import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { inspectStudioCoreEvidence, verifyCoreImplementationEvidence } from '../scripts/validate-core-implementation-evidence.mjs';

test('combines executed validator evidence with explicit archived Studio observations', async () => {
  const report = await verifyCoreImplementationEvidence();
  assert.deepEqual(report.counts, { requirements: 66, validatorPartial: 25, combinedPartial: 52, untested: 14, fullyEvidenced: 0 });
  assert.equal(report.implementations.length, 7);
  assert.ok(report.implementations.every(item => item.execution === 'archived-reference-implementation-run'));
  assert.equal(report.validator.execution, 'local');
  assert.ok(report.implementations.every(item => item.cases === 12));
  assert.equal(report.outcome, 'indeterminate');
  assert.equal(report.independent, false);
  assert.equal(report.approved, false);
});

test('metadata evidence preserves partial status and exact source/model bindings', async () => {
  const evidence = JSON.parse(await readFile(new URL('../static/evidence/studio-metadata-2026-11-04.json', import.meta.url)));
  const manifest = JSON.parse(await readFile(new URL('../static/examples/omi-core/0.1.0/manifest.json', import.meta.url)));
  assert.deepEqual(inspectStudioCoreEvidence(evidence, manifest.requirements, evidence.sourceCommit), [
    'REQ-MET-001', 'REQ-MET-005', 'REQ-MET-010', 'REQ-MET-012', 'REQ-MET-018', 'REQ-OBJ-014',
  ]);
  for (const mutate of [
    value => { value.requirements[0].status = 'complete'; },
    value => { value.specifications['OMI-SPEC-120'] = '0.2.0'; },
    value => { value.results[0].status = 'fail'; },
  ]) {
    const broken = structuredClone(evidence); mutate(broken);
    assert.throws(() => inspectStudioCoreEvidence(broken, manifest.requirements, evidence.sourceCommit));
  }
});

test('export/privacy observations also require exact target revisions and conservative claims', async () => {
  const evidence = JSON.parse(await readFile(new URL('../static/evidence/studio-export-privacy-2026-11-04.json', import.meta.url)));
  const manifest = JSON.parse(await readFile(new URL('../static/examples/omi-core/0.1.0/manifest.json', import.meta.url)));
  assert.deepEqual(inspectStudioCoreEvidence(evidence, manifest.requirements, evidence.sourceCommit), ['REQ-MET-013', 'REQ-MET-018', 'REQ-PRI-003', 'REQ-PRI-009']);
  for (const mutate of [
    value => { value.results[0].status = 'fail'; },
    value => { value.specifications['OMI-SPEC-140'] = '0.1.0'; },
    value => { value.independent = true; },
    value => { value.suite = 'unrecognized-suite'; },
  ]) {
    const broken = structuredClone(evidence); mutate(broken);
    assert.throws(() => inspectStudioCoreEvidence(broken, manifest.requirements, evidence.sourceCommit));
  }
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


test('localized conversion evidence cannot overstate mapping completeness or versions', async () => {
  const evidence = JSON.parse(await readFile(new URL('../static/evidence/studio-localized-conversion-2026-11-04.json', import.meta.url)));
  const manifest = JSON.parse(await readFile(new URL('../static/examples/omi-core/0.1.0/manifest.json', import.meta.url)));
  assert.deepEqual(inspectStudioCoreEvidence(evidence, manifest.requirements, evidence.sourceCommit), [
    'REQ-MET-011', 'REQ-MET-017', 'REQ-MET-018', 'REQ-PRI-008',
  ]);
  for (const mutate of [
    value => { value.coverage = 'complete'; },
    value => { value.requirements[0].status = 'complete'; },
    value => { value.specifications['OMI-SPEC-140'] = '0.1.0'; },
    value => { value.independent = true; },
  ]) {
    const broken = structuredClone(evidence); mutate(broken);
    assert.throws(() => inspectStudioCoreEvidence(broken, manifest.requirements, evidence.sourceCommit));
  }
});


test('extension evidence keeps exact profiles and bounded preservation claims', async () => {
  const evidence = JSON.parse(await readFile(new URL('../static/evidence/studio-extensions-2026-11-05.json', import.meta.url)));
  const manifest = JSON.parse(await readFile(new URL('../static/examples/omi-core/0.1.0/manifest.json', import.meta.url)));
  assert.deepEqual(inspectStudioCoreEvidence(evidence, manifest.requirements, evidence.sourceCommit), [
    'REQ-DOC-014', 'REQ-MET-014', 'REQ-MET-015', 'REQ-MET-018', 'REQ-OBJ-013', 'REQ-PRI-008',
  ]);
  for (const mutate of [
    value => { value.specifications['OMI-SPEC-100'] = '0.1.0'; },
    value => { value.results[0].status = 'fail'; },
    value => { value.requirements[0].status = 'complete'; },
    value => { value.independent = true; },
  ]) {
    const broken = structuredClone(evidence); mutate(broken);
    assert.throws(() => inspectStudioCoreEvidence(broken, manifest.requirements, evidence.sourceCommit));
  }
});


test('local authoring evidence retains bounded editor claims and exact target versions', async () => {
  const evidence = JSON.parse(await readFile(new URL('../static/evidence/studio-local-authoring-2026-11-05.json', import.meta.url)));
  const manifest = JSON.parse(await readFile(new URL('../static/examples/omi-core/0.1.0/manifest.json', import.meta.url)));
  assert.deepEqual(inspectStudioCoreEvidence(evidence, manifest.requirements, evidence.sourceCommit), [
    'REQ-DOC-010', 'REQ-DOC-011', 'REQ-PRI-007',
  ]);
  assert.equal(evidence.observationProfile, 'studio-local-model-authoring-0.1');
  for (const mutate of [
    value => { value.specifications['OMI-SPEC-100'] = '0.1.0'; },
    value => { value.requirements[0].status = 'complete'; },
    value => { value.results[0].status = 'fail'; },
    value => { value.independent = true; },
  ]) {
    const broken = structuredClone(evidence); mutate(broken);
    assert.throws(() => inspectStudioCoreEvidence(broken, manifest.requirements, evidence.sourceCommit));
  }
});


test('authority boundary evidence binds real server sources and discloses persistence doubles', async () => {
  const evidence = JSON.parse(await readFile(new URL('../static/evidence/studio-authority-2026-11-05.json', import.meta.url)));
  const manifest = JSON.parse(await readFile(new URL('../static/examples/omi-core/0.1.0/manifest.json', import.meta.url)));
  assert.deepEqual(inspectStudioCoreEvidence(evidence, manifest.requirements, evidence.sourceCommit), [
    'REQ-MET-008', 'REQ-MET-009', 'REQ-PRI-006', 'REQ-PRI-013',
  ]);
  assert.equal(evidence.observationProfile, 'studio-authority-boundaries-0.1');
  assert.equal(evidence.persistence, 'in-memory-test-double; real service and policy modules');
  for (const name of ['collaborationPolicy', 'collaborationTicketService', 'verifiedFederatedIdentity']) {
    assert.ok(evidence.sourceFiles.some(item => item.path === `server/src/services/${name}.ts`));
  }
  for (const mutate of [
    value => { value.sourceFiles[0].path = 'server/../private'; },
    value => { value.specifications['OMI-SPEC-140'] = '0.1.0'; },
    value => { value.requirements[0].status = 'complete'; },
    value => { value.independent = true; },
  ]) {
    const broken = structuredClone(evidence); mutate(broken);
    assert.throws(() => inspectStudioCoreEvidence(broken, manifest.requirements, evidence.sourceCommit));
  }
});

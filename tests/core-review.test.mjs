import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateCoreSnapshot } from '../static/tools/core-snapshot-validator-0.1.mjs';
import { verifyCoreReview } from '../scripts/validate-core-review.mjs';
const snapshot = () => ({ id: 'm', title: '', locale: 'hu', createdAt: '2026-10-31T00:00:00Z', updatedAt: '2026-10-31T00:00:00Z', sections: [{ id: 's', title: '', blocks: [{ id: 'b', type: 'paragraph', content: 'text' }] }] });

test('all fixture digests, requirements, schemas, deterministic diagnostics and nonmutation are verified', async () => {
  const report = await verifyCoreReview();
  assert.equal(report.results.length, 22);
  assert.equal(report.requirements.length, 66);
  assert.equal(report.outcome, 'indeterminate');
  assert.equal(report.approved, false);
});
test('JSON cycle and bounded depth/size never become complete validity', () => {
  const cyclic = snapshot(); cyclic.extensions = { self: cyclic };
  assert.equal(validateCoreSnapshot(cyclic).outcome, 'invalid');
  for (const options of [{ maxNodes: 2 }, { maxDepth: 1 }]) {
    const report = validateCoreSnapshot(snapshot(), options);
    assert.equal(report.complete, false);
    assert.equal(report.outcome, 'indeterminate');
    assert.ok(report.diagnostics.some(item => item.code === 'RESOURCE_LIMIT'));
  }
});
test('truncated diagnostics retain invalid outcome and disclose missing coverage', () => {
  const document = snapshot(); document.locale = 'bad_'; document.createdAt = 'bad';
  const report = validateCoreSnapshot(document, { maxDiagnostics: 1 });
  assert.equal(report.outcome, 'invalid'); assert.equal(report.complete, false); assert.equal(report.diagnostics.length, 1);
});
test('null, non-JSON values and invalid options are rejected without throwing on manuscript data', () => {
  for (const value of [null, [], 1]) assert.equal(validateCoreSnapshot(value).outcome, 'invalid');
  const document = snapshot(); document.extensions = { value: NaN };
  assert.equal(validateCoreSnapshot(document).outcome, 'invalid');
  for (const options of [{ mode: 'unknown' }, { maxNodes: -1 }, { maxDepth: Infinity }]) assert.throws(() => validateCoreSnapshot(snapshot(), options), TypeError);
});
test('identifier comparison preserves case and Unicode normalization distinctions', () => {
  const document = snapshot(); document.sections[0].blocks = ['é', 'e\u0301', 'B', 'b'].map(id => ({ id, type: 'paragraph', content: '' }));
  assert.equal(validateCoreSnapshot(document).outcome, 'valid');
});
test('calendar validity checks actual leap days and timezone offsets', () => {
  for (const timestamp of ['2024-02-29T12:00:00+01:00', '2000-02-29T00:00:00Z']) {
    const document = snapshot(); document.createdAt = timestamp;
    assert.equal(validateCoreSnapshot(document).outcome, 'valid');
  }
  for (const timestamp of ['2025-02-29T00:00:00Z', '1900-02-29T00:00:00Z', '2026-10-31T24:00:00Z', '2026-10-31T00:00:00+25:00']) {
    const document = snapshot(); document.createdAt = timestamp;
    assert.equal(validateCoreSnapshot(document).outcome, 'invalid');
  }
});

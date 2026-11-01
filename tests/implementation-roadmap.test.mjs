import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { auditRefactoringPlan, expectedPhaseCounts } from '../scripts/validate-implementation-roadmap.mjs';

const path = new URL('../docs/governance/studio-1.0-architecture/refactoring-pr-plan.md', import.meta.url);
const document = readFileSync(path, 'utf8');

test('Studio 1.0 planning matrix has the complete, nonduplicated 54-unit A–F set', () => {
  const result = auditRefactoringPlan(document);
  assert.equal(Object.values(expectedPhaseCounts).reduce((a,b)=>a+b,0), 54);
  assert.equal(result.units.length, 54);
  assert.deepEqual(result.errors, []);
  assert.equal(result.passed, true);
});

test('planned unit deletion or silent renumbering fails the roadmap gate', () => {
  const broken = document.replace(/^\| A10 \|.*\n/m, '');
  const result = auditRefactoringPlan(broken);
  assert.equal(result.passed, false);
  assert.match(result.errors.join(' '), /Missing planned unit A10/);
});

test('unknown prerequisite fails rather than silently deferring a dependency', () => {
  const broken = document.replace(/(\| B01 \|[^\n]*?\|) A10 \|/, '$1 A99 |');
  const result = auditRefactoringPlan(broken);
  assert.equal(result.passed, false);
  assert.match(result.errors.join(' '), /B01: unknown prerequisite A99/);
});

test('the narrative must agree with the derived unit count', () => {
  const broken = document.replace('define **54 planned PR units**', 'define **53 planned PR units**');
  const result = auditRefactoringPlan(broken);
  assert.equal(result.passed, false);
  assert.match(result.errors.join(' '), /narrative total does not match/);
});

test('missing required evidence or invalid risk classification is not release-ready planning', () => {
  const broken = document.replace(
    /^(\| A01 \|[^\n]*?\|[^\n]*?\|) [^|]+ \| low \|/m,
    '$1  | none |',
  );
  const result = auditRefactoringPlan(broken);
  assert.equal(result.passed, false);
  assert.match(result.errors.join(' '), /A01: missing goal, evidence, or valid risk/);
});

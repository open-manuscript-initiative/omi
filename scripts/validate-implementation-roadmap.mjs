import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const planPath = 'docs/governance/studio-1.0-architecture/refactoring-pr-plan.md';
export const expectedPhaseCounts = Object.freeze({ A: 10, B: 13, C: 15, D: 8, E: 5, F: 3 });

/** Check the original A01–F03 planning matrix; later dated checkpoints are informative. */
export function auditRefactoringPlan(source, phaseCounts = expectedPhaseCounts) {
  const errors = [];
  const start = source.indexOf('## 3. Phase A');
  const end = source.indexOf('## 9. Dependency register');
  if (start < 0 || end <= start) {
    return { passed: false, errors: ['Missing Phase A–F planning section or dependency register'], units: [] };
  }
  const section = source.slice(start, end);
  const units = [];
  for (const [index, line] of section.split('\n').entries()) {
    const cells = line.split('|').slice(1, -1).map(x => x.trim());
    if (!/^[A-F][0-9]{2}$/.test(cells[0] ?? '')) continue;
    const [id, goal, prerequisites, evidence, risk] = cells;
    units.push({ id, goal, prerequisites, evidence, risk, line: index + 1 });
    if (!goal || !evidence || !risk || !/\b(low|medium|high)\b/i.test(risk)) {
      errors.push(id + ': missing goal, evidence, or valid risk classification');
    }
  }
  const ids = new Set(units.map(u => u.id));
  for (const [phase, count] of Object.entries(phaseCounts)) {
    const matching = units.filter(u => u.id.startsWith(phase));
    if (matching.length !== count) errors.push(phase + ': expected ' + count + ' units, found ' + matching.length);
    for (let n = 1; n <= count; n++) {
      const key = phase + String(n).padStart(2, '0');
      if (!ids.has(key)) errors.push('Missing planned unit ' + key);
    }
  }
  if (ids.size !== units.length) errors.push('Duplicate planned A–F unit IDs');
  for (const item of units) {
    for (const dependency of item.prerequisites.match(/[A-F][0-9]{2}/g) ?? []) {
      if (!ids.has(dependency)) errors.push(item.id + ': unknown prerequisite ' + dependency);
      if (dependency === item.id) errors.push(item.id + ': self-dependency');
    }
  }
  const actualCount = units.length;
  if (!source.includes('define **' + actualCount + ' planned PR units**')) {
    errors.push('The narrative total does not match the ' + actualCount + ' A–F units');
  }
  return { passed: errors.length === 0, errors, units };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const source = readFileSync(resolve(root, planPath), 'utf8');
  const result = auditRefactoringPlan(source);
  if (!result.passed) {
    result.errors.forEach(error => console.error('Studio 1.0 roadmap: ' + error));
    process.exitCode = 1;
  } else {
    console.log('Studio 1.0 implementation plan: PASS (' + result.units.length +
      ' unique, evidenced A01–F03 units and all dependencies resolvable).');
  }
}

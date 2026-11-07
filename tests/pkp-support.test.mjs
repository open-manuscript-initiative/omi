import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const support = JSON.parse(read('src/pkpSupport.json'));
const folder = 'governance/studio-1.0-architecture/';

test('public PKP inventory preserves older supported targets, adds -6 and keeps OMP Preview', () => {
  assert.deepEqual(support.targets.map(target => target.platform), ['OJS', 'OMP']);
  for (const target of support.targets) {
    assert.deepEqual(target.versions, ['3.5.0-4', '3.5.0-5', '3.5.0-6']);
    assert.equal(target.tier, target.platform === 'OJS' ? 'Stable' : 'Preview');
    assert.deepEqual(target.manualGates, target.platform === 'OJS'
      ? target.versions.map(version => `ojs-${version}`) : []);
  }
  assert.match(read('src/pages/studio.tsx'), /<PkpSupportStatus\s*\/>/);
  assert.match(read('src/components/PkpSupportStatus/index.tsx'), /support\.targets\.map/);
});

test('EN/HU/DE acceptance pages agree with the public support inventory and fourteen-gate scope', () => {
  for (const locale of ['en', 'hu', 'de']) {
    const base = locale === 'en' ? 'docs/' : `i18n/${locale}/docusaurus-plugin-content-docs/current/`;
    const page = read(`${base}${folder}pkp-support-2026-11-07.md`);
    for (const target of support.targets) {
      const row = page.split('\n').find(line => line.startsWith(`| ${target.platform} |`));
      assert.ok(row, `${locale}: missing ${target.platform}`);
      for (const version of target.versions) assert.ok(row.includes(version), `${locale}: ${version}`);
      assert.ok(row.includes(target.tier), `${locale}: wrong tier for ${target.platform}`);
      for (const gate of target.manualGates) assert.ok(page.includes('`' + gate + '`'), `${locale}: ${gate}`);
    }
    assert.match(page, /\*\*14\*\*/);
    assert.ok(page.includes('ADR-010') && page.includes('ADR-019'));
  }
});

test('all five architecture baselines point to the current EN/HU support decision', () => {
  for (const base of ['docs/', 'i18n/hu/docusaurus-plugin-content-docs/current/']) {
    for (const name of ['target-architecture', 'gap-analysis', 'refactoring-pr-plan', 'adr-register', 'executive-summary']) {
      const page = read(`${base}${folder}${name}.md`);
      assert.ok(page.includes('/pkp-support-2026-11-07/'), `${base}${name}: missing policy`);
      assert.ok(page.includes('`ojs-3.5.0-6`'), `${base}${name}: missing manual target`);
    }
  }
});

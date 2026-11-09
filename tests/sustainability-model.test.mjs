import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';

const source = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const support = source('src/pages/support.tsx');
const model = source('src/model/supportModel.ts');
const docs = [
  source('docs/governance/sustainability-model.md'),
  source('i18n/hu/docusaurus-plugin-content-docs/current/governance/sustainability-model.md'),
  source('i18n/de/docusaurus-plugin-content-docs/current/governance/sustainability-model.md'),
];

test('EUR institutional service planning values are centralized and kept separate from contributions', () => {
  assert.match(model, /deploymentEur:\s*\[690, 1490, 2990\]/);
  assert.match(model, /annualCareEur:\s*\[390, 990, 1990\]/);
  assert.match(model, /institutionalAnnualEur:\s*\[330, 660, 1650\]/);
  assert.match(support, /supportModel\.deploymentEur\[index\]/);
  assert.match(support, /supportModel\.annualCareEur\[index\]/);
  assert.match(support, /supportModel\.institutionalAnnualEur\.map/);
});

test('three site languages present free self-hosting, optional paid installation and annual care', () => {
  for (const key of ['freeDeploymentTitle', 'freeDeploymentText', 'servicesTitle',
    'servicePricing', 'careTitle', 'carePricing', 'fromPrefix', 'fromSuffix']) {
    assert.equal((support.match(new RegExp('    ' + key + ':', 'g')) || []).length, 3, key);
  }
  assert.match(support, /Install it yourself/);
  assert.match(support, /Önálló szervertelepítés/);
  assert.match(support, /Eigeninstallation/);
  assert.doesNotMatch(support, /serviceAmount|servicesHuf|monthlyCareHuf|additionalHourlyHuf/);
  assert.doesNotMatch(model, /servicesHuf|monthlyCareHuf|additionalHourlyHuf/);
});

test('all governance translations distinguish no-charge self-hosting from commissioned services', () => {
  for (const doc of docs) {
    assert.match(doc, /690\s*€|€690/);
    assert.match(doc, /1[.,]490\s*€|1\s*490\s*€|€1,490/);
    assert.match(doc, /2[.,]990\s*€|2\s*990\s*€|€2,990/);
    assert.match(doc, /390\s*€|€390/);
    assert.match(doc, /990\s*€|€990/);
    assert.match(doc, /1[.,]990\s*€|1\s*990\s*€|€1,990/);
    assert.match(doc, /OJS\/OMP/);
    assert.match(doc, /8 November 2026|november 8|8. November 2026/);
    assert.match(doc, /9 November 2026|november 9|9. November 2026/);
    assert.doesNotMatch(doc, /HUF service planning examples|HUF-Rechenbeispiele für Leistungen|forintban megadott szolgáltatási számítási példák/);
  }
});

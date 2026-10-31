import { readFile } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const inventory = JSON.parse(await readFile(join(root, 'static/evidence/readiness-2026-10-31.json'), 'utf8'));
const registry = await readFile(join(root, 'docs/governance/specification-registry.md'), 'utf8');
const rows = [...registry.matchAll(/^\| `(OMI-SPEC-\d+)` \| ([^|]+) \| Active \| Draft \| ([^|]+) \| `([^`]+)` \|/gm)];
if (rows.length !== 24 || inventory.models.length !== rows.length || new Set(inventory.models.map(item => item.id)).size !== rows.length) throw new Error('Missing or duplicate readiness models.');
for (const [, id, , version, path] of rows) {
  const item = inventory.models.find(item => item.id === id);
  if (!item || item.version !== version.trim() || item.canonicalPath !== path || item.status !== 'Draft' || item.promotion !== 'not-requested') throw new Error(`Registry/inventory drift: ${id}`);
  const text = await readFile(join(root, path), 'utf8');
  const sourceVersion = /\| Version \| `?([0-9.]+)`? \|/.exec(text)?.[1]
    ?? /\*\*Version:\*\*\s*([0-9.]+)/.exec(text)?.[1]
    ?? /^Version:\s*([0-9.]+)/m.exec(text)?.[1];
  if (sourceVersion !== item.version) throw new Error(`Registry/source version drift: ${id}: ${sourceVersion} vs ${item.version}`);
  if (!item.evidence.length || item.evidence.some(evidence => !/^[a-f0-9]{64}$/.test(evidence.sha256) || evidence.path.startsWith('/') || evidence.path.includes('..'))) throw new Error(`Invalid pinned evidence: ${id}`);
}
const manifest = JSON.parse(await readFile(join(root, 'static/examples/omi-core/0.1.0/manifest.json'), 'utf8'));
if (inventory.coreReview.requirements !== manifest.requirements.length || inventory.coreReview.fixtures !== manifest.fixtures.length
  || inventory.coreReview.partial !== manifest.requirements.filter(item => item.status === 'partial').length
  || inventory.coreReview.untested !== manifest.requirements.filter(item => item.status === 'untested').length
  || inventory.lifecyclePromotions.length !== 0 || inventory.coreReview.approved !== false) throw new Error('Invalid core evidence summary or unauthorized promotion.');
console.log(`Readiness inventory: all ${rows.length} source/registry versions and pinned evidence records are consistent; no lifecycle promotions.`);

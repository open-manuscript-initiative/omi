import assert from 'node:assert/strict';
import { mock } from 'node:test';
import http from 'node:http';
import https from 'node:https';
import { validateCoreSnapshot } from '../static/tools/core-snapshot-validator-0.1.mjs';

const snapshot = () => ({
  id: 'm', title: 'Árvíztűrő 中文', locale: 'hu',
  createdAt: '2026-10-31T00:00:00Z', updatedAt: '2026-10-31T00:00:00Z',
  sections: [{ id: 's', title: 'Szakasz', blocks: [{ id: 'b', type: 'paragraph', content: 'Szöveg' }] }],
  keywords: ['történelem'],
  extensions: { localized: { hu: 'Cím', de: 'Titel' }, provenance: { status: 'asserted', source: 'author' } },
});

function freezeGraph(value, seen = new WeakSet()) {
  if (!value || typeof value !== 'object' || seen.has(value)) return value;
  seen.add(value);
  Object.values(value).forEach(child => freezeGraph(child, seen));
  return Object.freeze(value);
}

function inspectUnchanged(document, options) {
  const before = structuredClone(document);
  freezeGraph(document);
  const report = validateCoreSnapshot(document, options);
  assert.deepEqual(document, before, 'validation must preserve the complete input graph');
  assert.deepEqual(validateCoreSnapshot(document, options), report, 'diagnostics must be deterministic');
  return report;
}

function jsonSize(value, depth = 0) {
  let nodes = 1, maxDepth = depth;
  if (value && typeof value === 'object') for (const child of Object.values(value)) {
    const size = jsonSize(child, depth + 1);
    nodes += size.nodes;
    maxDepth = Math.max(maxDepth, size.maxDepth);
  }
  return { nodes, maxDepth };
}

// Each case is executed by both the CLI evidence runner and node:test.
// Mappings deliberately remain partial: editor locks and full import/export are outside this scope.
export const coreValidationBehaviors = [
  {
    id: 'frozen-valid-input', requirements: ['REQ-OBJ-018', 'REQ-MET-018'],
    run() {
      for (const mode of ['authoring', 'exchange']) {
        const report = inspectUnchanged(snapshot(), { mode });
        assert.equal(report.outcome, 'valid');
        assert.equal(report.complete, true);
        assert.deepEqual(report.diagnostics, []);
      }
    },
  },
  {
    id: 'frozen-invalid-input', requirements: ['REQ-OBJ-018', 'REQ-MET-018', 'REQ-DOC-012'],
    run() {
      const document = snapshot();
      document.locale = 'hu_HU';
      document.sections[0].blocks[0].content = 42;
      const report = inspectUnchanged(document);
      assert.equal(report.outcome, 'invalid');
      assert.deepEqual(report.diagnostics, [
        { code: 'INVALID_LANGUAGE', path: '/locale', severity: 'error' },
        { code: 'INVALID_CONTENT', path: '/sections/0/blocks/0/content', severity: 'error' },
      ]);
    },
  },
  {
    id: 'frozen-incomplete-input', requirements: ['REQ-OBJ-018', 'REQ-MET-018'],
    run() {
      const document = snapshot();
      document.sections[0].blocks[0].type = 'urn:example:unknown:1';
      assert.equal(inspectUnchanged(document).outcome, 'indeterminate');
      const limited = inspectUnchanged(snapshot(), { maxNodes: 2 });
      assert.equal(limited.outcome, 'indeterminate');
      assert.equal(limited.complete, false);
    },
  },
  {
    id: 'detached-report', requirements: ['REQ-OBJ-018', 'REQ-MET-018'],
    run() {
      const document = freezeGraph(snapshot()), before = structuredClone(document);
      const report = validateCoreSnapshot(document);
      report.specifications['OMI-SPEC-100'] = 'changed-by-consumer';
      report.diagnostics.push({ code: 'injected', path: '', severity: 'error' });
      report.exclusions.length = 0;
      assert.deepEqual(document, before);
      const fresh = validateCoreSnapshot(document);
      assert.equal(fresh.specifications['OMI-SPEC-100'], '0.2.0');
      assert.deepEqual(fresh.diagnostics, []);
      assert.ok(fresh.exclusions.length > 0);
    },
  },
  {
    id: 'stable-escaped-diagnostic-location', requirements: ['REQ-DOC-012'],
    run() {
      const document = snapshot();
      document.extensions['a~/b'] = { text: '\uD800' };
      const report = inspectUnchanged(document);
      assert.equal(report.outcome, 'invalid');
      assert.deepEqual(report.diagnostics, [{
        code: 'INVALID_UNICODE', path: '/extensions/a~0~1b/text', severity: 'error',
      }]);
      assert.ok(report.diagnostics.every(item => !('message' in item) && !('excerpt' in item)));
    },
  },
  {
    id: 'exact-node-limit', requirements: ['REQ-DOC-013'],
    run() {
      const document = snapshot(), { nodes } = jsonSize(document);
      assert.equal(inspectUnchanged(document, { maxNodes: nodes }).outcome, 'valid');
      const limited = inspectUnchanged(document, { maxNodes: nodes - 1 });
      assert.equal(limited.outcome, 'indeterminate');
      assert.equal(limited.complete, false);
      assert.deepEqual(limited.diagnostics, [{ code: 'RESOURCE_LIMIT', path: '/extensions/provenance', severity: 'warning' }]);
    },
  },
  {
    id: 'exact-depth-limit', requirements: ['REQ-DOC-013'],
    run() {
      const document = snapshot(), { maxDepth } = jsonSize(document);
      assert.equal(inspectUnchanged(document, { maxDepth }).outcome, 'valid');
      const limited = inspectUnchanged(document, { maxDepth: maxDepth - 1 });
      assert.equal(limited.outcome, 'indeterminate');
      assert.equal(limited.complete, false);
      assert.ok(limited.diagnostics.some(item => item.code === 'RESOURCE_LIMIT'));
    },
  },
  {
    id: 'exact-diagnostic-limit', requirements: ['REQ-DOC-013', 'REQ-DOC-012'],
    run() {
      const document = snapshot(); document.locale = 'bad_'; document.createdAt = 'bad';
      const full = inspectUnchanged(document, { maxDiagnostics: 2 });
      assert.equal(full.outcome, 'invalid');
      assert.equal(full.complete, true);
      assert.equal(full.diagnostics.length, 2);
      const truncated = inspectUnchanged(document, { maxDiagnostics: 1 });
      assert.equal(truncated.outcome, 'invalid');
      assert.equal(truncated.complete, false);
      assert.deepEqual(truncated.diagnostics, full.diagnostics.slice(0, 1));
    },
  },
  {
    id: 'invalid-over-incomplete', requirements: ['REQ-DOC-013'],
    run() {
      const document = snapshot();
      document.title = '\uD800';
      const report = inspectUnchanged(document, { maxNodes: 3 });
      assert.equal(report.outcome, 'invalid');
      assert.equal(report.complete, false);
      assert.deepEqual(report.diagnostics.map(item => item.code), ['INVALID_UNICODE', 'RESOURCE_LIMIT']);
    },
  },
  {
    id: 'cycles-and-shared-values', requirements: ['REQ-OBJ-018', 'REQ-DOC-013'],
    run() {
      const cyclic = snapshot(); cyclic.extensions.self = cyclic;
      const report = inspectUnchanged(cyclic);
      assert.equal(report.outcome, 'invalid');
      assert.ok(report.diagnostics.some(item => item.code === 'SHARED_OR_CYCLIC_OBJECT'));
      const shared = snapshot(); shared.extensions.alias = shared.extensions.localized;
      assert.equal(inspectUnchanged(shared).outcome, 'valid');
    },
  },
  {
    id: 'invalid-limit-options', requirements: ['REQ-DOC-013'],
    run() {
      const document = freezeGraph(snapshot()), before = structuredClone(document);
      for (const key of ['maxNodes', 'maxDepth', 'maxDiagnostics']) {
        for (const value of [0, -1, 1.5, Infinity, NaN, '10', Number.MAX_SAFE_INTEGER + 1]) {
          assert.throws(() => validateCoreSnapshot(document, { [key]: value }), TypeError);
        }
      }
      assert.throws(() => validateCoreSnapshot(document, { mode: 'repair' }), TypeError);
      assert.deepEqual(document, before);
    },
  },
  {
    id: 'inert-asset-references', requirements: ['REQ-OBJ-015'],
    run() {
      const document = snapshot();
      document.assets = [
        { id: 'remote', url: 'https://example.invalid/asset.svg' },
        { id: 'local', url: 'file:///nonexistent/omi-test-only' },
        { id: 'script', url: 'javascript:globalThis.__omiAssetExecuted=true' },
        { id: 'data', url: 'data:text/javascript,globalThis.__omiAssetExecuted=true' },
      ];
      const calls = [];
      const forbidden = (...args) => { calls.push(args); throw new Error('Asset reference was dereferenced'); };
      const spies = [mock.method(globalThis, 'fetch', forbidden)];
      for (const transport of [http, https]) for (const method of ['request', 'get']) spies.push(mock.method(transport, method, forbidden));
      const sentinel = Object.getOwnPropertyDescriptor(globalThis, '__omiAssetExecuted');
      try {
        Object.defineProperty(globalThis, '__omiAssetExecuted', { configurable: true, set: forbidden });
        assert.equal(inspectUnchanged(document).outcome, 'valid');
        assert.deepEqual(calls, []);
      } finally {
        spies.forEach(spy => spy.mock.restore());
        if (sentinel) Object.defineProperty(globalThis, '__omiAssetExecuted', sentinel);
        else delete globalThis.__omiAssetExecuted;
      }
    },
  },
];

export async function runCoreValidationBehaviors() {
  const results = [];
  for (const item of coreValidationBehaviors) {
    await item.run();
    results.push({ id: item.id, requirements: [...item.requirements], status: 'pass' });
  }
  return results;
}

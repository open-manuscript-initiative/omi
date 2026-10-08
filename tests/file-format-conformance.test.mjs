import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { parseUniqueJson } from '../scripts/parse-unique-json.mjs';
import { validateDocument, validateRawDocument } from '../scripts/validate-file-format-fixtures.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fixtureRoot = join(root, 'static/examples/omi-spec-320/0.2.0');

test('accepts valid UTF-8 JSON and preserves Unicode, ordering, and numeric values', () => {
  const source = Buffer.from('{"text":"árvíztűrő 😀","values":[true,null,-12.5]}', 'utf8');
  assert.deepEqual(parseUniqueJson(source), {
    text: 'árvíztűrő 😀',
    values: [true, null, -12.5],
  });
});

test('rejects malformed UTF-8 bytes before replacement decoding can alter the input', () => {
  const bytes = Uint8Array.from([0x7b, 0x22, 0x74, 0x22, 0x3a, 0x22, 0xc3, 0x28, 0x22, 0x7d]);
  assert.throws(
    () => parseUniqueJson(bytes),
    (error) => error.code === 'INVALID_UTF8' && error.pointer === '/',
  );
  assert.deepEqual(validateRawDocument(bytes).map(({ code, instancePath, requirement }) => ({ code, instancePath, requirement })), [{
    code: 'FMT-INVALID-UTF8',
    instancePath: '/',
    requirement: 'REQ-FMT-006',
  }]);
});

test('rejects duplicate decoded member names and reports an RFC 6901 escaped pointer', () => {
  assert.throws(
    () => parseUniqueJson('{"items":[{"a/b~c":1,"a\\u002fb~c":2}]}'),
    (error) => error.code === 'DUPLICATE_KEY'
      && error.pointer === '/items/0/a~1b~0c',
  );
});

test('allows repeated names in separate objects and preserves __proto__ as inert data', () => {
  const value = parseUniqueJson('{"left":{"id":"a"},"right":{"id":"b"},"__proto__":{"polluted":true}}');
  assert.equal(value.left.id, 'a');
  assert.equal(value.right.id, 'b');
  assert.equal(Object.hasOwn(value, '__proto__'), true);
  assert.equal(Object.getPrototypeOf(value), Object.prototype);
  assert.equal({}.polluted, undefined);
});

test('rejects malformed JSON, unpaired surrogates, non-finite values, and unsafe integers', () => {
  for (const source of ['{"a":', '{"a":1} trailing', '{"a":NaN}', '[1,]']) {
    assert.throws(() => parseUniqueJson(source), SyntaxError, source);
  }
  assert.throws(() => parseUniqueJson('{"text":"\\ud800"}'), (error) => error.code === 'INVALID_UNICODE');
  assert.equal(parseUniqueJson('{"text":"\\ud83d\\ude00"}').text, '😀');
  assert.throws(() => parseUniqueJson('{"n":1e400}'), (error) => error.code === 'NON_FINITE_NUMBER');
  assert.throws(() => parseUniqueJson('{"n":9007199254740992}'), (error) => error.code === 'UNSAFE_INTEGER');
  assert.equal(parseUniqueJson('{"n":9007199254740991}').n, Number.MAX_SAFE_INTEGER);
});

test('returns stable diagnostic codes and pointers without mutating validated documents', async () => {
  const valid = parseUniqueJson(await readFile(join(fixtureRoot, 'valid-minimal.omi.json')));
  const before = structuredClone(valid);
  assert.deepEqual(validateDocument(valid), []);
  assert.deepEqual(valid, before);

  const invalid = parseUniqueJson(await readFile(join(fixtureRoot, 'invalid-unresolved-reference.omi.json')));
  const first = validateDocument(invalid);
  const second = validateDocument(invalid);
  assert.deepEqual(first, second);
  assert.deepEqual(first.map(({ code, instancePath, requirement }) => ({ code, instancePath, requirement })), [{
    code: 'FMT-UNRESOLVED-REFERENCE',
    instancePath: '/annotations/0/targetBlockId',
    requirement: 'REQ-FMT-032',
  }]);
});

test('orders multiple diagnostics by JSON Pointer, then code and requirement', async () => {
  const document = parseUniqueJson(await readFile(join(fixtureRoot, 'valid-minimal.omi.json')));
  const firstSection = document.sections[0];
  document.updatedAt = '2026-01-01T00:00:00Z';
  document.accessToken = 'synthetic-secret';
  firstSection.blocks[0].id = firstSection.id;

  const diagnostics = validateDocument(document);
  assert.deepEqual(diagnostics.map(({ code, instancePath }) => ({ code, instancePath })), [
    { code: 'FMT-FORBIDDEN-SECRET', instancePath: '/accessToken' },
    { code: 'FMT-DUPLICATE-ID', instancePath: '/sections/0/blocks/0/id' },
    { code: 'FMT-TIMESTAMP-ORDER', instancePath: '/updatedAt' },
  ]);
  assert.deepEqual(diagnostics, validateDocument(document));
});

test('keeps schema references local so validation needs no network lookup', async () => {
  const schema = JSON.parse(await readFile(join(root, 'static/schemas/omi-manuscript-0.2.schema.json'), 'utf8'));
  const refs = [];
  const pending = [schema];
  while (pending.length) {
    const current = pending.pop();
    if (!current || typeof current !== 'object') continue;
    for (const [key, value] of Object.entries(current)) {
      if (key === '$ref') refs.push(value);
      else if (value && typeof value === 'object') pending.push(value);
    }
  }
  assert.ok(refs.length > 0);
  assert.ok(refs.every((ref) => ref.startsWith('#/')));
});

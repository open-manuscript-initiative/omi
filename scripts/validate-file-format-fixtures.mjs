import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { parseUniqueJson } from './parse-unique-json.mjs';

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const schemaPath = join(
  repositoryRoot,
  'static/schemas/omi-manuscript-0.2.schema.json',
);
const fixtureRoot = join(
  repositoryRoot,
  'static/examples/omi-spec-320/0.2.0',
);
const manifestPath = join(fixtureRoot, 'manifest.json');

const [schema, manifest] = await Promise.all([
  readJson(schemaPath),
  readJson(manifestPath),
]);

const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  validateFormats: true,
});
addFormats(ajv);
const validateStructure = ajv.compile(schema);

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
if (
  manifest.specification !== 'OMI-SPEC-320@0.2.0' ||
  manifest.schema !== schema.$id ||
  manifest.suiteVersion !== '0.2.0-draft.3'
) {
  throw new Error('Fixture manifest does not match the pinned OMI-SPEC-320 schema or suite.');
}
if (!Array.isArray(manifest.fixtures) || manifest.fixtures.length === 0) {
  throw new Error('Fixture manifest must contain at least one test case.');
}
const fixturePaths = new Set();
for (const fixture of manifest.fixtures) {
  if (!fixture.path || fixturePaths.has(fixture.path)) {
    throw new Error('Fixture paths must be present and unique.');
  }
  fixturePaths.add(fixture.path);
  if (
    !Array.isArray(fixture.requirements) ||
    fixture.requirements.length === 0 ||
    fixture.requirements.some((id) => !/^REQ-FMT-\d{3}$/.test(id))
  ) {
    throw new Error('Every fixture must map to one or more REQ-FMT-NNN requirements.');
  }
  if (!Array.isArray(fixture.expectedDiagnostics)) {
    throw new Error('Every fixture must declare expected diagnostic codes.');
  }
}

let failures = 0;

for (const fixture of manifest.fixtures) {
  const fixturePath = join(fixtureRoot, fixture.path);
  const diagnostics = await validateFixture(fixturePath);
  const actualValid = !diagnostics.some(({ severity }) => severity === 'error');
  const actualCodes = new Set(diagnostics.map(({ code }) => code));
  const expectedCodes = new Set(fixture.expectedDiagnostics);
  const codesMatch =
    actualCodes.size === expectedCodes.size &&
    [...expectedCodes].every((code) => actualCodes.has(code));
  const passed = actualValid === fixture.valid && codesMatch;

  if (passed) {
    console.log(`✓ ${fixture.path}`);
    continue;
  }

  failures += 1;
  console.error(`✗ ${fixture.path}`);
  console.error(
    `  expected valid=${fixture.valid}, diagnostics=${JSON.stringify([...expectedCodes])}`,
  );
  console.error(
    `  actual valid=${actualValid}, diagnostics=${JSON.stringify([...actualCodes])}`,
  );
  for (const diagnostic of diagnostics) {
    console.error(
      `  ${diagnostic.severity} ${diagnostic.code} ${diagnostic.instancePath}: ${diagnostic.message}`,
    );
  }
}

if (failures > 0) {
  throw new Error(`${failures} OMI-SPEC-320 fixture expectation(s) failed.`);
}

console.log(
  `Validated ${manifest.fixtures.length} OMI-SPEC-320@0.2.0 fixtures against structural and semantic rules.`,
);
}

async function validateFixture(path) {
  return validateRawDocument(await readFile(path));
}

export function validateRawDocument(source) {
  try {
    return validateDocument(parseUniqueJson(source));
  } catch (error) {
    const diagnostics = {
      DUPLICATE_KEY: ['FMT-DUPLICATE-JSON-MEMBER', 'REQ-FMT-007', 'JSON object contains a duplicate member name.'],
      INVALID_UTF8: ['FMT-INVALID-UTF8', 'REQ-FMT-006', 'Input is not valid UTF-8.'],
      INVALID_UNICODE: ['FMT-INVALID-UNICODE', 'REQ-FMT-009', 'String contains an unpaired UTF-16 surrogate.'],
      NON_FINITE_NUMBER: ['FMT-NONFINITE-NUMBER', 'REQ-FMT-010', 'Number is not finite in the interoperable JSON model.'],
      UNSAFE_INTEGER: ['FMT-UNSAFE-INTEGER', 'REQ-FMT-011', 'Integer is outside the interoperable JSON range.'],
    };
    const [code, requirement, message] = diagnostics[error?.code]
      ?? ['FMT-INVALID-JSON', 'REQ-FMT-006', 'Fixture is not valid JSON.'];
    return [{
      code,
      severity: 'error',
      instancePath: error?.pointer ?? '/',
      requirement,
      message,
    }];
  }
}

export function validateDocument(document) {
  const diagnostics = [];

  if (!validateStructure(document)) {
    for (const error of validateStructure.errors ?? []) {
      diagnostics.push({
        code: 'FMT-SCHEMA',
        severity: 'error',
        instancePath: error.instancePath || '/',
        requirement: 'REQ-FMT-018',
        message: `${error.keyword}: ${error.message ?? 'schema validation failed'}`,
      });
    }
  }

  if (!document || typeof document !== 'object' || Array.isArray(document)) {
    return sortDiagnostics(diagnostics);
  }

  validateTimestampOrder(document, diagnostics);
  const indexes = indexAddressableObjects(document, diagnostics);
  validateReferences(document, indexes, diagnostics);
  validateHistory(document, indexes, diagnostics);
  validateForbiddenSecrets(document, diagnostics);

  return sortDiagnostics(diagnostics);
}

function sortDiagnostics(diagnostics) {
  return diagnostics.sort((left, right) =>
    compareCodePoints(left.instancePath, right.instancePath)
      || compareCodePoints(left.code, right.code)
      || compareCodePoints(left.requirement, right.requirement),
  );
}

function compareCodePoints(left, right) {
  const leftPoints = Array.from(left, (character) => character.codePointAt(0));
  const rightPoints = Array.from(right, (character) => character.codePointAt(0));
  const sharedLength = Math.min(leftPoints.length, rightPoints.length);
  for (let index = 0; index < sharedLength; index += 1) {
    if (leftPoints[index] !== rightPoints[index]) return leftPoints[index] - rightPoints[index];
  }
  return leftPoints.length - rightPoints.length;
}

function validateTimestampOrder(document, diagnostics) {
  if (
    typeof document.createdAt === 'string' &&
    typeof document.updatedAt === 'string' &&
    Date.parse(document.updatedAt) < Date.parse(document.createdAt)
  ) {
    diagnostics.push({
      code: 'FMT-TIMESTAMP-ORDER',
      severity: 'error',
      instancePath: '/updatedAt',
      requirement: 'REQ-FMT-019',
      message: 'updatedAt precedes createdAt.',
    });
  }
}

function indexAddressableObjects(document, diagnostics) {
  const all = new Map();
  const blocks = new Map();
  const agents = new Map();
  const bibliographicRecords = new Map();
  const citations = new Map();
  const revisions = new Map();

  addObject(document, '/', all, diagnostics);

  for (const [collectionName, targetIndex] of [
    ['agents', agents],
    ['contributions', null],
    ['tombstones', null],
    ['annotations', null],
    ['bibliographicRecords', bibliographicRecords],
    ['citations', citations],
    ['citationClusters', null],
    ['crossReferences', null],
    ['assets', null],
    ['publicationCorrections', null],
  ]) {
    for (const [index, value] of asArray(document[collectionName]).entries()) {
      const path = `/${collectionName}/${index}`;
      addObject(value, path, all, diagnostics);
      addObject(value, path, targetIndex, null);
    }
  }

  function visitSection(section, path) {
    addObject(section, path, all, diagnostics);
    for (const [index, block] of asArray(section?.blocks).entries()) {
      visitBlock(block, `${path}/blocks/${index}`);
    }
    for (const [index, child] of asArray(section?.children).entries()) {
      visitSection(child, `${path}/children/${index}`);
    }
  }

  function visitBlock(block, path) {
    addObject(block, path, all, diagnostics);
    addObject(block, path, blocks, null);
    for (const [index, child] of asArray(block?.children).entries()) {
      visitBlock(child, `${path}/children/${index}`);
    }
  }

  for (const [index, section] of asArray(document.sections).entries()) {
    visitSection(section, `/sections/${index}`);
  }

  for (const [index, revision] of asArray(document.revisionHistory?.revisions).entries()) {
    const path = `/revisionHistory/revisions/${index}`;
    addObject(revision, path, all, diagnostics);
    addObject(revision, path, revisions, null);
  }

  return { all, blocks, agents, bibliographicRecords, citations, revisions };
}

function addObject(value, path, targetIndex, diagnostics) {
  if (!targetIndex || !value || typeof value.id !== 'string') {
    return;
  }

  if (targetIndex.has(value.id)) {
    if (diagnostics) {
      diagnostics.push({
        code: 'FMT-DUPLICATE-ID',
        severity: 'error',
        instancePath: `${path}/id`,
        requirement: 'REQ-FMT-016',
        message: `Identifier ${value.id} is already used at ${targetIndex.get(value.id)}.`,
      });
    }
    return;
  }

  targetIndex.set(value.id, path);
}

function validateReferences(document, indexes, diagnostics) {
  for (const [index, contribution] of asArray(document.contributions).entries()) {
    requireReference(
      contribution?.agentId,
      indexes.agents,
      `/contributions/${index}/agentId`,
      'contribution agent',
      diagnostics,
    );
  }

  for (const [index, annotation] of asArray(document.annotations).entries()) {
    requireReference(
      annotation?.targetBlockId,
      indexes.blocks,
      `/annotations/${index}/targetBlockId`,
      'annotation target block',
      diagnostics,
    );
    if (annotation?.creatorAgentId !== undefined) {
      requireReference(
        annotation.creatorAgentId,
        indexes.agents,
        `/annotations/${index}/creatorAgentId`,
        'annotation creator agent',
        diagnostics,
      );
    }
  }

  for (const [index, citation] of asArray(document.citations).entries()) {
    requireReference(
      citation?.targetBlockId,
      indexes.blocks,
      `/citations/${index}/targetBlockId`,
      'citation target block',
      diagnostics,
    );
    requireReference(
      citation?.target,
      indexes.bibliographicRecords,
      `/citations/${index}/target`,
      'citation bibliographic target',
      diagnostics,
    );
  }

  for (const [index, cluster] of asArray(document.citationClusters).entries()) {
    requireReference(
      cluster?.targetBlockId,
      indexes.blocks,
      `/citationClusters/${index}/targetBlockId`,
      'citation-cluster target block',
      diagnostics,
    );
    for (const [citationIndex, citationId] of asArray(cluster?.citationIds).entries()) {
      requireReference(
        citationId,
        indexes.citations,
        `/citationClusters/${index}/citationIds/${citationIndex}`,
        'citation-cluster member',
        diagnostics,
      );
    }
  }

  for (const [index, reference] of asArray(document.crossReferences).entries()) {
    requireReference(
      reference?.sourceBlockId,
      indexes.blocks,
      `/crossReferences/${index}/sourceBlockId`,
      'cross-reference source block',
      diagnostics,
    );
    requireReference(
      reference?.targetId,
      indexes.all,
      `/crossReferences/${index}/targetId`,
      'cross-reference target',
      diagnostics,
    );
  }
}

function validateHistory(document, indexes, diagnostics) {
  const history = document.revisionHistory;
  if (!history || typeof history !== 'object') {
    return;
  }

  if (
    typeof document.headRevisionId === 'string' &&
    document.headRevisionId !== history.headRevisionId
  ) {
    diagnostics.push({
      code: 'FMT-HISTORY-HEAD-MISMATCH',
      severity: 'error',
      instancePath: '/revisionHistory/headRevisionId',
      requirement: 'REQ-FMT-036',
      message: 'Root and history head revision identifiers do not agree.',
    });
  }

  requireReference(
    history.rootRevisionId,
    indexes.revisions,
    '/revisionHistory/rootRevisionId',
    'history root revision',
    diagnostics,
  );
  requireReference(
    history.headRevisionId,
    indexes.revisions,
    '/revisionHistory/headRevisionId',
    'history head revision',
    diagnostics,
  );

  for (const [index, revision] of asArray(history.revisions).entries()) {
    for (const [parentIndex, parentId] of asArray(revision?.parentRevisionIds).entries()) {
      if (
        history.completeness === 'complete' ||
        indexes.revisions.has(parentId)
      ) {
        requireReference(
          parentId,
          indexes.revisions,
          `/revisionHistory/revisions/${index}/parentRevisionIds/${parentIndex}`,
          'parent revision',
          diagnostics,
        );
      }
    }
    if (revision?.actorAgentId !== undefined) {
      requireReference(
        revision.actorAgentId,
        indexes.agents,
        `/revisionHistory/revisions/${index}/actorAgentId`,
        'revision actor agent',
        diagnostics,
      );
    }
  }
}

function requireReference(value, targetIndex, instancePath, label, diagnostics) {
  if (typeof value === 'string' && targetIndex.has(value)) {
    return;
  }

  diagnostics.push({
    code: 'FMT-UNRESOLVED-REFERENCE',
    severity: 'error',
    instancePath,
    requirement: 'REQ-FMT-032',
    message: `${label} ${String(value)} does not resolve in the manuscript.`,
  });
}

function validateForbiddenSecrets(value, diagnostics, path = '') {
  if (!value || typeof value !== 'object') {
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      validateForbiddenSecrets(item, diagnostics, `${path}/${index}`),
    );
    return;
  }

  const forbidden = /^(?:password|accessToken|refreshToken|sessionToken|clientSecret|privateKey)$/i;
  for (const [key, child] of Object.entries(value)) {
    const childPath = `${path}/${escapeJsonPointerToken(key)}`;
    if (forbidden.test(key)) {
      diagnostics.push({
        code: 'FMT-FORBIDDEN-SECRET',
        severity: 'error',
        instancePath: childPath,
        requirement: 'REQ-FMT-020',
        message: `Portable manuscripts must not contain credential field ${key}.`,
      });
    }
    validateForbiddenSecrets(child, diagnostics, childPath);
  }
}

function escapeJsonPointerToken(value) {
  return value.replaceAll('~', '~0').replaceAll('/', '~1');
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

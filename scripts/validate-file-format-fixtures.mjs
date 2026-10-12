import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { parseUniqueJson } from './parse-unique-json.mjs';

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const schemaPath = join(
  repositoryRoot,
  'static/schemas/omi-manuscript-0.3.schema.json',
);
const fixtureRoot = join(
  repositoryRoot,
  'static/examples/omi-spec-320/0.3.0',
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
  manifest.specification !== 'OMI-SPEC-320@0.3.0' ||
  manifest.schema !== schema.$id ||
  manifest.suiteVersion !== '0.3.0-draft.1'
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
  `Validated ${manifest.fixtures.length} OMI-SPEC-320@0.3.0 fixtures against structural and semantic rules.`,
);
}

async function validateFixture(path) {
  return validateRawDocument(await readFile(path));
}

export function validateRawDocument(source, options = {}) {
  try {
    return validateDocument(parseUniqueJson(source, options.parserLimits), {
      maxDiagnostics: options.maxDiagnostics,
    });
  } catch (error) {
    const diagnostics = {
      DUPLICATE_KEY: ['FMT-DUPLICATE-JSON-MEMBER', 'REQ-FMT-007', 'JSON object contains a duplicate member name.'],
      INVALID_UTF8: ['FMT-INVALID-UTF8', 'REQ-FMT-006', 'Input is not valid UTF-8.'],
      INVALID_UNICODE: ['FMT-INVALID-UNICODE', 'REQ-FMT-009', 'String contains an unpaired UTF-16 surrogate.'],
      NON_FINITE_NUMBER: ['FMT-NONFINITE-NUMBER', 'REQ-FMT-010', 'Number is not finite in the interoperable JSON model.'],
      UNSAFE_INTEGER: ['FMT-UNSAFE-INTEGER', 'REQ-FMT-011', 'Integer is outside the interoperable JSON range.'],
      RESOURCE_LIMIT: ['FMT-RESOURCE-LIMIT', 'REQ-FMT-040', 'Configured parser resource limit exceeded.'],
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

export function validateDocument(document, { maxDiagnostics = 1_000 } = {}) {
  const diagnostics = [];

  if (!validateStructure(document)) {
    for (const error of validateStructure.errors ?? []) {
      diagnostics.push({
        code: 'FMT-SCHEMA',
        severity: 'error',
        instancePath: error.instancePath || '/',
      requirement: schemaRequirement(error),
        message: `${error.keyword}: ${error.message ?? 'schema validation failed'}`,
      });
    }
  }

  if (!document || typeof document !== 'object' || Array.isArray(document)) {
    return boundDiagnostics(diagnostics, maxDiagnostics);
  }

  validateTimestampOrder(document, diagnostics);
  validateLanguageTags(document, diagnostics);
  validateAbsoluteAssetUris(document, diagnostics);
  const indexes = indexAddressableObjects(document, diagnostics);
  validateReferences(document, indexes, diagnostics);
  validateHistory(document, indexes, diagnostics);
  validateForbiddenSecrets(document, diagnostics);

  return boundDiagnostics(diagnostics, maxDiagnostics);
}

function validateLanguageTags(document, diagnostics) {
  const grandfathered = new Set([
    'art-lojban', 'cel-gaulish', 'en-gb-oed', 'i-ami', 'i-bnn', 'i-default',
    'i-enochian', 'i-hak', 'i-klingon', 'i-lux', 'i-mingo', 'i-navajo',
    'i-pwn', 'i-tao', 'i-tay', 'i-tsu', 'no-bok', 'no-nyn', 'sgn-be-fr',
    'sgn-be-nl', 'sgn-ch-de', 'zh-guoyu', 'zh-hakka', 'zh-min',
    'zh-min-nan', 'zh-xiang',
  ]);
  const valid = (tag) => {
    if (typeof tag !== 'string') return true;
    const lower = tag.toLowerCase();
    if (grandfathered.has(lower)) return true;
    if (/^x(?:-[a-z0-9]{1,8})+$/i.test(tag)) return true;

    const parts = tag.split('-');
    let index = 0;
    const language = parts[index++];
    if (!language || !/^[a-z]{2,8}$/i.test(language)) return false;

    if (language.length <= 3) {
      let extlangs = 0;
      while (extlangs < 3 && /^[a-z]{3}$/i.test(parts[index] ?? '')) {
        index += 1;
        extlangs += 1;
      }
    }
    if (/^[a-z]{4}$/i.test(parts[index] ?? '')) index += 1;
    if (/^(?:[a-z]{2}|[0-9]{3})$/i.test(parts[index] ?? '')) index += 1;

    while (/^(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3})$/i.test(parts[index] ?? '')) {
      index += 1;
    }
    while (/^[0-9a-wy-z]$/i.test(parts[index] ?? '')) {
      index += 1;
      let extensionSubtags = 0;
      while (/^[a-z0-9]{2,8}$/i.test(parts[index] ?? '')) {
        index += 1;
        extensionSubtags += 1;
      }
      if (extensionSubtags === 0) return false;
    }
    if (/^x$/i.test(parts[index] ?? '')) {
      index += 1;
      let privateSubtags = 0;
      while (/^[a-z0-9]{1,8}$/i.test(parts[index] ?? '')) {
        index += 1;
        privateSubtags += 1;
      }
      if (privateSubtags === 0) return false;
    }
    return index === parts.length;
  };

  const check = (tag, path) => {
    if (tag !== undefined && !valid(tag)) {
      diagnostics.push({
        code: 'FMT-LANGUAGE-TAG',
        severity: 'error',
        instancePath: path,
        requirement: 'REQ-FMT-014',
        message: 'Language tag is not well-formed BCP 47.',
      });
    }
  };
  check(document.locale, '/locale');

  function visitSections(sections, path) {
    for (const [index, section] of asArray(sections).entries()) {
      const sectionPath = `${path}/${index}`;
      check(section?.language, `${sectionPath}/language`);
      for (const [blockIndex, block] of asArray(section?.blocks).entries()) {
        visitBlock(block, `${sectionPath}/blocks/${blockIndex}`);
      }
      visitSections(section?.children, `${sectionPath}/children`);
    }
  }
  function visitBlock(block, path) {
    check(block?.language, `${path}/language`);
    for (const [index, child] of asArray(block?.children).entries()) {
      visitBlock(child, `${path}/children/${index}`);
    }
  }
  visitSections(document.sections, '/sections');
}

function validateAbsoluteAssetUris(document, diagnostics) {
  for (const [index, asset] of asArray(document.assets).entries()) {
    if (typeof asset?.uri !== 'string' || /^[A-Za-z][A-Za-z0-9+.-]*:/.test(asset.uri)) {
      continue;
    }
    diagnostics.push({
      code: 'FMT-URI',
      severity: 'error',
      instancePath: `/assets/${index}/uri`,
      requirement: 'REQ-FMT-015',
      message: 'Asset URI must be absolute unless its governing profile explicitly permits a relative reference.',
    });
  }
}

function schemaRequirement(error) {
  const path = error.instancePath || '/';
  const missing = error.keyword === 'required' ? error.params?.missingProperty : undefined;
  const target = missing ? `${path}/${escapeJsonPointerToken(missing)}` : path;

  if (target === '/schema') return 'REQ-FMT-022';
  if (target === '/omi/format' || target === '/omi/version') return 'REQ-FMT-023';
  if (target === '/omi/profiles') return 'REQ-FMT-024';
  if (target.startsWith('/omi/specifications')) return 'REQ-FMT-025';
  if (target === '/locale' || target.endsWith('/language')) return 'REQ-FMT-014';
  if (target === '/createdAt' || target === '/updatedAt') return 'REQ-FMT-013';
  if (target === '/title') return 'REQ-FMT-012';
  if (target.endsWith('/uri') || target === '/schema') return 'REQ-FMT-015';
  if (target.endsWith('/id') || target === '/id') return 'REQ-FMT-016';
  return 'REQ-FMT-018';
}

function sortDiagnostics(diagnostics) {
  return diagnostics.sort((left, right) =>
    compareCodePoints(left.instancePath, right.instancePath)
      || compareCodePoints(left.code, right.code)
      || compareCodePoints(left.requirement, right.requirement),
  );
}

function boundDiagnostics(diagnostics, maxDiagnostics) {
  const sorted = sortDiagnostics(diagnostics);
  if (sorted.length <= maxDiagnostics) return sorted;
  return [
    ...sorted.slice(0, Math.max(0, maxDiagnostics - 1)),
    {
      code: 'FMT-RESOURCE-LIMIT',
      severity: 'error',
      instancePath: '/',
      requirement: 'REQ-FMT-040',
      message: 'Configured aggregate diagnostic limit exceeded.',
    },
  ];
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
    addObject(revision, path, all, diagnostics, 'REQ-FMT-037');
    addObject(revision, path, revisions, null);
  }

  return { all, blocks, agents, bibliographicRecords, citations, revisions };
}

function addObject(value, path, targetIndex, diagnostics, duplicateRequirement = 'REQ-FMT-016') {
  if (!targetIndex || !value || typeof value.id !== 'string') {
    return;
  }

  if (targetIndex.has(value.id)) {
    if (diagnostics) {
      diagnostics.push({
        code: 'FMT-DUPLICATE-ID',
        severity: 'error',
        instancePath: `${path}/id`,
        requirement: duplicateRequirement,
        message: 'Identifier is already used in this manuscript.',
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
    'REQ-FMT-036',
  );
  requireReference(
    history.headRevisionId,
    indexes.revisions,
    '/revisionHistory/headRevisionId',
    'history head revision',
    diagnostics,
    'REQ-FMT-036',
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
          'REQ-FMT-037',
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

function requireReference(value, targetIndex, instancePath, label, diagnostics, requirement = 'REQ-FMT-032') {
  if (typeof value === 'string' && targetIndex.has(value)) {
    return;
  }

  diagnostics.push({
    code: 'FMT-UNRESOLVED-REFERENCE',
    severity: 'error',
    instancePath,
    requirement,
    message: `${label} does not resolve in the manuscript.`,
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

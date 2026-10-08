# OMI-SPEC-320 Conformance Profile

**Specification under test:** `OMI-SPEC-320@0.2.0`  
**Status:** Draft conformance profile; review required  
**Canonical schema:** [OMI manuscript 0.2 JSON Schema](/schemas/omi-manuscript-0.2.schema.json)  
**Fixture manifest:** [0.2.0 fixture manifest](/examples/omi-spec-320/0.2.0/manifest.json)  
**Reference command:** `npm run test:file-format`

## Purpose and scope

This profile defines how the OMI website repository checks the current
OMI-SPEC-320 Draft. The version-pinned JSON Schema is the structural authority.
The reference validator adds the semantic checks that JSON Schema cannot
express. The fixture manifest defines expected validity, stable diagnostic
codes, and the requirement identifiers exercised by each case.

A run is bound to the exact specification version, schema URI, fixture
manifest, validator source, and Git revision. It does not select a newer schema
or fetch a schema named by an input document.

The profile is not an OMI 1.0 conformance claim. These fixtures are an initial
review corpus for the Draft. A green run proves only the behaviours represented
by the cases.

## Validator behaviour

For every manifest entry, the runner:

1. checks that the manifest identifies OMI-SPEC-320@0.2.0 and the schema's
   exact `$id`;
2. rejects duplicate/missing fixture paths, absent requirement mappings, and
   malformed expected-diagnostic declarations;
3. detects duplicate JSON object member names before `JSON.parse`;
4. reports malformed JSON with `FMT-INVALID-JSON`;
5. validates parsed values with Draft 2020-12/Ajv and format checking;
6. applies timestamp-order, identifier uniqueness, reference, history-head,
   and credential-exclusion checks;
7. compares validity and the exact set of diagnostic codes with the manifest.

The runner exits non-zero for missing files, invalid manifest structure, parse
errors, or any expectation mismatch.

## Current fixture inventory

The versioned corpus is under
`static/examples/omi-spec-320/0.2.0/`. Requirement mappings are maintained in
`manifest.json` and validated by the runner.

| Fixture | Expected result | Behaviour exercised |
|---|---|---|
| `valid-minimal.omi.json` | Valid | Core Snapshot with ordered section and block |
| `valid-history-extension.omi.json` | Valid | History Exchange, declared profiles, resolved references, namespaced extension |
| `invalid-missing-version.omi.json` | `FMT-SCHEMA` | Required OMI format version |
| `invalid-duplicate-id.omi.json` | `FMT-DUPLICATE-ID` | Duplicate addressable identifier |
| `invalid-unresolved-reference.omi.json` | `FMT-UNRESOLVED-REFERENCE` | Missing in-document reference target |
| `invalid-timestamp-order.omi.json` | `FMT-TIMESTAMP-ORDER` | Update instant earlier than creation |
| `invalid-history-head-mismatch.omi.json` | `FMT-HISTORY-HEAD-MISMATCH` | Snapshot/history head disagreement |
| `invalid-forbidden-secret.omi.json` | `FMT-FORBIDDEN-SECRET` | Credential exclusion |
| `invalid-root-array.omi.json` | `FMT-SCHEMA` | Non-object top-level JSON value |
| `invalid-duplicate-json-member.omi.json` | `FMT-DUPLICATE-JSON-MEMBER` | Duplicate object member name |
| `invalid-malformed-json.omi.json` | `FMT-INVALID-JSON` | JSON syntax failure |
| `invalid-schema-uri-mismatch.omi.json` | `FMT-SCHEMA` | Schema URI does not match the pinned version |
| `invalid-unsupported-format-version.omi.json` | `FMT-SCHEMA` | Version not accepted by the 0.2.0 schema |

A changed expected outcome requires a reviewed update to the fixture,
manifest, validator, and this profile as applicable.

## Running and CI

Run locally from the repository root:

```bash
npm ci
npm run test:file-format
```

The dedicated **File-format conformance** workflow runs the command on relevant
pull requests and pushes. The website build runs the same command. This makes
the fixture suite an automated gate for both schema changes and site releases.

## Coverage limits and pre-1.0 release gates

The corpus exercises the behaviours above but does not cover every normative
requirement. The remaining gates include:

- approved requirement coverage for every applicable `REQ-FMT-NNN`, with
  tested, not-applicable, and untested states;
- malformed UTF-8, duplicate member names with escaped-equivalent keys, and
  configured resource limits;
- unsupported-major-version quarantine/read-only behaviour in a consumer;
- broader optional/null/empty-value, BCP 47, timestamp, URI, and nested-content
  boundaries;
- reference target-type rules, revision-history boundary/uniqueness cases, and
  all profile-specific constraints;
- lossless import/export round trips and preservation of unknown fields;
- deterministic machine-readable reports and diagnostic ordering;
- interoperability evidence from an independent producer or consumer;
- maintainer approval and an immutable schema release process.

Do not describe this Draft profile as fully conformant until these gates have
evidence and the specification maturity status advances under the published
governance process.

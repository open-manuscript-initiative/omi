# OMI-SPEC-320 Conformance Profile

**Specification under test:** `OMI-SPEC-320@0.2.0`  
**Status:** Draft conformance profile; review required  
**Canonical schema:** [OMI manuscript 0.2 JSON Schema](../../static/schemas/omi-manuscript-0.2.schema.json)  
**Fixture manifest:** [0.2.0 fixture manifest](../../static/examples/omi-spec-320/0.2.0/manifest.json)  
**Reference command:** `npm run test:file-format`

## Purpose and scope

This profile defines how the OMI website repository checks the current
OMI-SPEC-320 Draft. The file-format JSON Schema is the structural authority.
The reference validator adds the semantic checks that JSON Schema cannot
express. The fixture manifest defines expected validity and diagnostic codes.

A test result is tied to the exact specification version, schema URI, fixture
manifest, validator source, and Git revision. The profile does not silently
select a newer schema or fetch a schema named by an input document.

The profile is not yet an OMI 1.0 conformance claim. The fixture set is the
initial review corpus for this Draft. A green run proves only the behaviours
represented by its cases.

## Conformance classes in scope

The current runner exercises a limited subset of the **conforming validator**
class. It checks:

1. structural validity with the Draft 2020-12 schema and Ajv format validation;
2. manuscript timestamp order;
3. addressable identifier uniqueness;
4. in-document references for contributions, annotations, citations,
   citation clusters, cross-references, and revision history;
5. root/revision-history head agreement;
6. forbidden credential fields.

It does not yet prove complete producer, consumer, migrator, or lossless
processor conformance. It does not test Studio's import/export round-trip.

## Current fixture inventory

All fixtures live under
`static/examples/omi-spec-320/0.2.0/`. Their expected outcomes are normative
for this draft corpus; each case is checked for both validity and the exact set
of diagnostic codes.

| Fixture | Expected result | Behaviour exercised |
|---|---|---|
| `valid-minimal.omi.json` | Valid | Small Core Snapshot with an ordered section and block |
| `valid-history-extension.omi.json` | Valid | History Exchange, Lossless Round Trip declaration, references, namespaced extension |
| `invalid-missing-version.omi.json` | `FMT-SCHEMA` | Required OMI format version |
| `invalid-duplicate-id.omi.json` | `FMT-DUPLICATE-ID` | Duplicate addressable identifier |
| `invalid-unresolved-reference.omi.json` | `FMT-UNRESOLVED-REFERENCE` | Required in-document target resolution |
| `invalid-timestamp-order.omi.json` | `FMT-TIMESTAMP-ORDER` | `updatedAt` earlier than `createdAt` |
| `invalid-history-head-mismatch.omi.json` | `FMT-HISTORY-HEAD-MISMATCH` | Snapshot and history head consistency |
| `invalid-forbidden-secret.omi.json` | `FMT-FORBIDDEN-SECRET` | Credential exclusion from portable content |

The manifest also states the purpose of every fixture. A validator change that
changes an expected result must update the fixture or validator and this
profile in the same reviewed change.

## Running and CI

Run locally from the repository root:

```bash
npm ci
npm run test:file-format
```

The dedicated **File-format conformance** workflow runs this command on pull
requests and pushes that affect the schema, normative file-format text,
fixtures, runner, or package scripts. The website build also runs the same
command, so a documentation build cannot pass with a failing fixture suite.

The runner exits non-zero if a fixture is missing, cannot be parsed, or differs
from its expected validity or diagnostic-code set. Reviewers should inspect
both the workflow result and the changed fixture/manifest entries.

## Current coverage limits and pre-1.0 gates

The current corpus does **not** yet cover every normative requirement. The
following work remains before this can be treated as a complete pre-1.0
conformance suite:

- an approved requirement-to-test matrix for all applicable `REQ-FMT-NNN`
  identifiers, with explicit tested, not-applicable, and untested states;
- parser-level tests for malformed UTF-8/JSON, duplicate JSON member names,
  top-level non-objects, and resource limits;
- explicit tests for schema URI/version disagreement and unsupported major
  versions, including safe quarantine behaviour;
- broader structural boundaries for optional/null/empty values, BCP 47 tags,
  timestamps, URIs, extension namespaces, and nested sections/blocks;
- semantic cases for reference target types, revision parent boundaries,
  revision-ID uniqueness, and profile-specific requirements;
- round-trip and unknown-field preservation tests for Lossless Round Trip;
- deterministic machine-readable diagnostic reports and ordering;
- independently implemented producer/consumer interoperability evidence;
- maintainer approval of the fixture corpus and immutable schema release
  process.

Do not describe this Draft profile as “fully conformant” until these gates have
evidence and the specification's maturity status has advanced through the
published governance process.

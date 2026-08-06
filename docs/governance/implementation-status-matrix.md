---
id: implementation-status-matrix
title: OMI Implementation Status Matrix
sidebar_label: Implementation Status Matrix
description: Evidence-based status of OMI specifications, schemas, examples, reference implementation support, validation, and conformance testing.
keywords:
  - Open Manuscript Initiative
  - OMI
  - implementation status
  - conformance
  - Open Manuscript Studio
  - roadmap
---

# Open Manuscript Initiative Implementation Status Matrix

## Document metadata

| Field | Value |
|---|---|
| Document type | Governance status report |
| Status | Draft |
| Version | 0.2.1 |
| Normative language | English |
| Last updated | 2026-08-06 |
| Coverage | Every identifier in the OMI Specification Registry |
| Evidence baseline | `main` branches of the OMI and Open Manuscript Studio repositories reviewed on 2026-08-06 |
| Authority | Informative; the Specification Registry and individual specifications remain authoritative |

## 1. Purpose

This document records the current implementation and verification status of every specification identifier allocated by the Open Manuscript Initiative.

It separates five questions that must not be conflated:

1. Does a canonical specification document exist?
2. Has that document been migrated to the current OMI Specification Template?
3. Are machine-readable artefacts and conformance fixtures published?
4. Does Open Manuscript Studio implement identifiable parts of the specification?
5. Has the behaviour been validated, tested for conformance, or demonstrated independently?

The matrix is intended to expose gaps between prose specifications and executable evidence, prevent experimental code from being mistaken for normative conformance, provide a planning baseline, identify the next evidence required for each specification, and support future release-readiness decisions.

## 2. Authority and interpretation

The [OMI Specification Registry](./specification-registry.md) is authoritative for permanent identifiers, official titles, allocation states, lifecycle states, exact versions, and canonical paths. Individual specification documents are authoritative for their normative requirements.

This matrix is informative. It does not change lifecycle state, assign conformance, make an unpublished schema authoritative, replace a validator or test suite, or guarantee that experimental implementation code is aligned with the latest normative text.

A specification may be mature without an implementation. An implementation may be substantial while its specification remains Draft. These are independent dimensions.

## 3. Status vocabulary

### 3.1 Specification and artefact states

| State | Meaning |
|---|---|
| **Active Draft** | A canonical specification exists and is registered with Draft lifecycle status. |
| **Reserved** | The identifier and subject are allocated, but no accepted Draft exists. |
| **Current template** | The specification was created or comprehensively rewritten using the current Specification Template. |
| **Migration required** | The active document predates the canonical template or lacks required metadata and evidence sections. |
| **Not published** | The relevant canonical schema, fixture set, report format, or other machine-readable artefact is not published authoritatively. |
| **Not started** | No substantive repository evidence was verified for the stated dimension. |
| **Not applicable** | The dimension is not required for the specification in its current role. |

### 3.2 Implementation-evidence states

| State | Meaning |
|---|---|
| **Exploratory** | Related types, fields, UI concepts, or workflows exist, but they are incomplete, implementation-specific, or not demonstrably aligned. |
| **Partial** | An identifiable subset of the specification is represented or usable, but major requirements, validation, interoperability, or lifecycle behaviour remain absent. |
| **Implemented** | Applicable normative behaviour is implemented and mapped to an exact specification version, but formal conformance testing is incomplete. |
| **Tested** | Automated evidence covers applicable normative requirements for a declared version using versioned fixtures and reproducible results. |
| **Conformant** | The implementation satisfies a published conformance class using an approved conformance suite. |
| **Not verified** | Evidence may exist outside the reviewed repositories but was not verified for this baseline. |

The terms **Implemented**, **Tested**, and **Conformant** are intentionally strict and must not be inferred from similarly named code or ordinary unit tests alone.

## 4. Evidence baseline

The baseline review used the public OMI specification repository and the current Open Manuscript Studio `main` branch.

Verified Studio evidence includes:

- manuscript, annotation, citation, block, section, agent, and contribution types in `src/types/omi.ts` and `src/model/identity.ts`;
- account-to-agent separation in `src/model/user.ts`;
- identity migration in `src/document/migrateIdentityModel.ts`;
- contributor editing and manuscript mutations in `src/app/useStudioStore.ts`;
- `OMI-SPEC-160@0.1.0` revision, change-set, change-event, snapshot, history-completeness, commit, validation, and revert semantics in `src/model/versioning.ts`;
- timestamp-only history migration in `src/document/migrateVersioningModel.ts`;
- a multilingual revision-history interface in `src/components/HistoryPanel.tsx`;
- canonical `.omi.json` export containing version history while excluding legacy embedded `authors`;
- identity tests in `tests/identity-model.test.ts`;
- versioning tests in `tests/versioning-model.test.ts` covering immutable roots, immutable parents, linear ancestry, atomic change sets, reverts, shallow migration, validation, and export;
- workspace roles, permissions, invitations, reviewer and translator roles in `src/model/workspace.ts`;
- local browser workspace persistence in `src/store/workspaceStore.ts`.

The reference-implementation change was merged to Open Manuscript Studio as PR #2 with merge commit `65f3a2f4fa9eaf6adf370f4bae5eec1e98521db2`.

The review did not find authoritative OMI repository artefacts for:

- a canonical versioned JSON Schema set;
- a machine-readable validation-report format;
- formal conformance fixtures;
- a validator reference implementation;
- an official conformance test suite;
- independently verified implementations.

Open Manuscript Studio still refers to `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`. Until an authoritative schema is published, that URI remains an implementation placeholder rather than validation evidence.

## 5. Aggregate snapshot

| Measure | Current baseline |
|---|---:|
| Registered specification identifiers | 23 |
| Active Draft specifications | 17 |
| Reserved specifications | 6 |
| Active specifications using the current template | 2 |
| Active specifications requiring template migration | 15 |
| Canonical machine-readable specification artefact sets published | 0 verified |
| Published formal conformance fixture sets | 0 verified |
| Validator implementations | 0 verified |
| Formal conformance test suites | 0 verified |
| Independent implementations | 0 verified |
| Studio status: Partial | 8 specifications |
| Studio status: Exploratory | 6 specifications |
| Studio status: Not started | 8 specifications |
| Studio status: Not applicable | 1 specification |

These counts describe evidence categories, not percentage completion or specification quality.

## 6. Specification readiness matrix

### 6.1 Foundations and core semantic models

| Identifier | Specification | Registry state | Version | Template | Machine-readable artefacts | Conformance fixtures |
|---|---|---|---|---|---|---|
| `OMI-SPEC-000` | [Core Principles](../foundations/core-principles.md) | Active Draft | 0.1.0 | Migration required | Not applicable | Not published |
| `OMI-SPEC-100` | [Document Model](../specifications/document-model.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-110` | [Anchor Model](../specifications/anchor-model.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-120` | [Scholarly Object Model](../specifications/core/scholarly-object-model.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-130` | [Annotation Model](../specifications/annotation-model.md) | Active Draft | 0.2.0 | Migration required | Not published | Not published |
| `OMI-SPEC-140` | [Metadata Model](../specifications/metadata-model.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-150` | [Identity and Contributor Model](../specifications/identity-contributor-model.md) | Active Draft | 0.1.0 | Current template | Not published | Not published |
| `OMI-SPEC-160` | [Versioning and Change Model](../specifications/versioning-change-model.md) | Active Draft | 0.1.0 | Current template | Not published | Not published |
| `OMI-SPEC-170` | Translation Model | Reserved | — | Not applicable | Not started | Not started |
| `OMI-SPEC-180` | Validation Model | Reserved | — | Not applicable | Not started | Not started |
| `OMI-SPEC-190` | Collaboration and Permission Model | Reserved | — | Not applicable | Not started | Not started |

### 6.2 Scholarly workflow, references, and publishing

| Identifier | Specification | Registry state | Version | Template | Machine-readable artefacts | Conformance fixtures |
|---|---|---|---|---|---|---|
| `OMI-SPEC-200` | [Review Model](../specifications/review-model.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-210` | [Citation Model](../specifications/citation-model.md) | Active Draft | 0.2.0 | Migration required | Not published | Not published |
| `OMI-SPEC-220` | [Bibliographic Record Model](../specifications/bibliographic-record-model.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-221` | [Reference Library and Registry Architecture](../specifications/reference-library-registry.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-230` | [Publishing Model](../specifications/publishing-model.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-240` | Rendering and Publication Profile Model | Reserved | — | Not applicable | Not started | Not started |

### 6.3 Platform, exchange, and conformance

| Identifier | Specification | Registry state | Version | Template | Machine-readable artefacts | Conformance fixtures |
|---|---|---|---|---|---|---|
| `OMI-SPEC-300` | [Plugin Architecture](../specifications/plugin-architecture.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-310` | [Platform API](../specifications/api.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-320` | [File Format](../specifications/file-format.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-330` | [Container Architecture](../specifications/container-architecture.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-340` | Import and Export Model | Reserved | — | Not applicable | Not started | Not started |
| `OMI-SPEC-350` | Capability and Conformance Model | Reserved | — | Not applicable | Not started | Not started |

## 7. Open Manuscript Studio implementation evidence

No row currently qualifies as **Implemented**, **Tested**, or **Conformant** under the strict definitions above. Focused unit tests are valuable implementation evidence, but they do not substitute for a published normative requirement map, canonical fixtures, and an accepted conformance suite.

### 7.1 Foundations and core semantic models

| Identifier | Studio status | Verified evidence | Primary gap before stronger status |
|---|---|---|---|
| `OMI-SPEC-000` | Not applicable | Principles guide architecture rather than defining a directly executable component. | Convert principles into traceable requirements and review criteria. |
| `OMI-SPEC-100` | Partial | `OmiManuscript` contains sections and blocks; the Studio edits blocks and creates sections. | Canonical schema, invariants, block semantics, extension rules, validation, and requirement mapping. |
| `OMI-SPEC-110` | Exploratory | Annotations can refer to `targetBlockId` and optional `targetText`. | Stable anchor identity, selectors, resolution, mutation behaviour, ambiguity handling, and tests. |
| `OMI-SPEC-120` | Partial | A typed manuscript aggregate contains agents, contributions, sections, blocks, annotations, citations, identifiers, timestamps, and revision history. | Align all object boundaries and lifecycles with the specification; publish schema and validation evidence. |
| `OMI-SPEC-130` | Partial | `OmiAnnotation` represents identifiers, types, block targets, target text, body, and rendering hints. | Canonical targets, motivations, authorship, lifecycle, threading, permissions, validation, and interchange. |
| `OMI-SPEC-140` | Partial | Manuscript state represents locale, title, subtitle, abstract, keywords, identifiers, agents, contributions, and timestamps. | Metadata provenance, controlled terms, cardinalities, profiles, validation, and external mappings. |
| `OMI-SPEC-150` | Partial | Studio declares `OMI-SPEC-150@0.1.0`, separates accounts from agents, represents names, identifiers, affiliations and contributions, migrates legacy authors, exposes a multilingual contributor editor, and includes focused tests. | Canonical schema, complete visibility/provenance processing, additional agent types, reconciliation, backend persistence, requirement mapping, and conformance fixtures. |
| `OMI-SPEC-160` | Partial | Studio declares `OMI-SPEC-160@0.1.0`; creates immutable root and child revisions with linear parent relationships; records semantic change sets and events for manuscript and contributor mutations; stores complete or shallow snapshots; performs non-destructive reverts as new revisions; resolves actor attribution conservatively; exposes multilingual history UI; exports revision history; and includes focused unit tests. | Working-state batching and checkpoint commits; tombstone semantics; integrity/state digests; explicit `REQ-VCH-*` mapping; canonical schemas and fixtures; branching and merge support; persistence hardening; formal conformance tests. |
| `OMI-SPEC-170` | Exploratory | Manuscripts have a locale; user and workspace models include working languages and a translator role. | Translation objects, source-target relationships, equivalence, divergence, synchronisation, and provenance. |
| `OMI-SPEC-180` | Not started | No canonical validator or validation-report model was verified. | Draft the Validation Model and publish report semantics and fixtures. |
| `OMI-SPEC-190` | Exploratory | Workspace code defines roles, permissions, members, invitations, reviewer and translator roles, with local persistence. | Write the specification; add server-enforced authorization, manuscript-scoped permissions, auditability, and conformance tests. |

### 7.2 Scholarly workflow, references, and publishing

| Identifier | Studio status | Verified evidence | Primary gap before stronger status |
|---|---|---|---|
| `OMI-SPEC-200` | Exploratory | Workspace roles include reviewer and members may create annotations. | Review objects, assignments, rounds, states, decisions, confidentiality, disclosure, and event history. |
| `OMI-SPEC-210` | Partial | `OmiCitation` and the manuscript citation array represent citation keys, labels, source types, and dates. | Separate citation occurrences from bibliographic records; anchor occurrences and define rendering-independent semantics. |
| `OMI-SPEC-220` | Exploratory | The citation type contains a small set of record-like fields. | Dedicated record identity, contributors, titles, containers, identifiers, provenance, merging, and validation. |
| `OMI-SPEC-221` | Not started | No manuscript-level reference library or external registry integration was verified. | Library membership, record reuse, lookup, reconciliation, caching, provenance, and deduplication. |
| `OMI-SPEC-230` | Not started | The editor can manipulate and export manuscript data, but no specification-aligned publishing pipeline was verified. | Publication jobs, profiles, transformations, output provenance, failure handling, and semantic-source preservation. |
| `OMI-SPEC-240` | Not started | No rendering or publication-profile declaration was verified. | Draft the specification and define profile identity, requirements, inheritance, output constraints, and validation. |

### 7.3 Platform, exchange, and conformance

| Identifier | Studio status | Verified evidence | Primary gap before stronger status |
|---|---|---|---|
| `OMI-SPEC-300` | Not started | No plugin manifest, extension API, capability boundary, or isolation mechanism was verified. | Define and implement plugin identity, lifecycle, permissions, extension points, compatibility, and failure containment. |
| `OMI-SPEC-310` | Not started | The current alpha is primarily client-side; no implementation claiming the registered Platform API was verified. | Versioned API contract, authentication, authorization, resources, events, errors, pagination, and tests. |
| `OMI-SPEC-320` | Partial | Studio exports `.omi.json`, carries an OMI schema URI, omits deprecated `authors`, and now includes portable revision history. | Publish the canonical schema; define parsing, serialization, unknown-field handling, validation, history packaging, and version migration. |
| `OMI-SPEC-330` | Not started | No OMI container package, manifest, asset graph, integrity record, or packaging workflow was verified. | Implement package layout, manifest, media handling, checksums, signatures, extraction safety, and preservation rules. |
| `OMI-SPEC-340` | Exploratory | Manuscript JSON export, identity migration, and version-history migration exist; no general import UI or round-trip evidence was verified. | Write the specification; add import/export mappings, loss reports, unsupported-content handling, and round-trip fixtures. |
| `OMI-SPEC-350` | Not started | No capability declaration, implementation-claim format, or conformance runner was verified. | Define conformance classes, capability statements, test manifests, result reports, and claim-verification rules. |

## 8. Cross-cutting findings and known deviations

### 8.1 Specification-template migration

`OMI-SPEC-150` and `OMI-SPEC-160` were created directly from the canonical Specification Template. The other 15 active specifications require controlled migration that preserves identifiers, routes, and change histories.

### 8.2 Unpublished schema reference

The Studio manuscript type names a schema URI, but no authoritative schema artefact was verified in the OMI repository. It remains an implementation placeholder rather than validation evidence.

### 8.3 Implementation-specific models

Studio types are useful design evidence but are not automatically the normative OMI model. Differences must be documented and resolved through specification or implementation changes.

### 8.4 Local collaboration persistence

The workspace store still uses local browser persistence and explicitly anticipates authenticated backend APIs. It demonstrates domain exploration, not server-enforced collaboration conformance.

### 8.5 Citation and record separation

The current citation representation still mixes occurrence-oriented and record-oriented information. Citation and bibliographic-record separation remains necessary.

### 8.6 Versioning and change history

The first portable linear revision ledger is now implemented in Studio. It covers immutable revisions, parent ancestry, semantic change sets and events, snapshots, shallow-history disclosure, conservative actor attribution, non-destructive reverts, history UI, export, and focused tests.

The implementation deliberately remains **Partial**. Existing editor controls commit at their current update granularity, so rich-text and text-field editing may create overly fine-grained revisions. Working-state batching and explicit checkpoint semantics are the next implementation requirement before extending the model toward branching and merge behaviour.

Tombstones, state digests, stronger persistence, formal requirement-to-code mapping, branching, merge bases, conflicts, resolution records, and conformance evidence also remain outstanding.

### 8.7 Unit tests versus conformance evidence

The Studio now has focused identity and versioning unit tests. These tests increase confidence in the reference implementation but do not move any row to **Tested** under this matrix because no approved OMI conformance fixture set or requirement-mapped conformance runner exists yet.

### 8.8 Validation and conformance

No implementation status can advance to **Tested** or **Conformant** until the project publishes exact normative requirements, declared conformance classes, canonical schemas and fixtures where applicable, a validator or conformance runner, and reproducible results tied to exact specification versions.

## 9. Evidence required for status advancement

### 9.1 Exploratory to Partial

A feature may move from **Exploratory** to **Partial** when a distinct implementation component exists, its relationship to a registered specification is documented, the implemented subset and omissions are explicit, and the behaviour is usable beyond placeholder data or naming similarity.

### 9.2 Partial to Implemented

A feature may move to **Implemented** only when the specification is active, the implementation declares an exact specification version, applicable normative requirements are mapped to code or documented behaviour, required error and persistence semantics are present, known deviations are recorded, and applicable machine-readable artefacts are used.

### 9.3 Implemented to Tested

A feature may move to **Tested** only when automated tests cover applicable normative requirements, valid and invalid fixtures are versioned, results are reproducible, and the suite identifies exact specification and artefact versions.

### 9.4 Tested to Conformant

A feature may move to **Conformant** only when an approved conformance class exists, the accepted conformance suite passes, optional behaviour and limitations are declared, and the claim is published in a verifiable implementation report.

## 10. Maintenance procedure

This matrix should be updated whenever a pull request creates or reserves a specification, changes lifecycle state or version, publishes a schema or fixture, adds substantive Studio support, records independent implementation evidence, changes a known deviation, or publishes a conformance claim.

Every status-changing update should identify evidence such as a canonical path, immutable commit, test run, implementation PR, exact specification version, or declared conformance class. Status must be downgraded when evidence becomes stale, incompatible, withdrawn, or no longer reproducible.

The complete matrix should be reviewed before each OMI release and at every transition to Review Candidate, Implementation Candidate, or Stable.

## 11. Immediate evidence programme

The next evidence-producing work should proceed in this order:

1. add working-state batching and explicit checkpoint commits to the Studio `OMI-SPEC-160` implementation so ordinary typing does not create excessively fine-grained committed revisions;
2. map the implemented Core Revision History subset to the normative `REQ-VCH-*` requirements and record explicit deviations;
3. add tombstone and integrity/state-digest behaviour required by the selected versioning profile;
4. publish canonical manuscript, identity, and versioning schemas with minimal valid and invalid fixtures;
5. migrate the remaining active core specifications to the canonical Specification Template;
6. define `OMI-SPEC-180`, Validation Model, and its machine-readable validation-report format;
7. establish automated schema and conformance checks;
8. draft `OMI-SPEC-170`, Translation Model, using the revision ledger as its version-aware foundation;
9. record known deviations as linked issues;
10. seek an independently developed parser, validator, or interoperability prototype.

## 12. Change history

| Version | Date | Summary |
|---|---|---|
| 0.2.1 | 2026-08-06 | Promoted Studio support for `OMI-SPEC-160` from Exploratory to Partial after the immutable linear revision ledger merged; recorded revision/change-set/snapshot/revert/history-export evidence and focused tests; advanced the next evidence priority to working-state batching, checkpoint commits, and requirement mapping. |
| 0.2.0 | 2026-08-06 | Activated `OMI-SPEC-160`, recorded two current-template specifications, updated Studio evidence after the `OMI-SPEC-150` integration, and advanced the evidence programme to a linear revision ledger. |
| 0.1.1 | 2026-08-06 | Activated `OMI-SPEC-150` in the readiness matrix, recorded it as the first specification using the current template, and updated the immediate evidence programme. |
| 0.1.0 | 2026-08-06 | Initial evidence-based matrix covering all 23 registered identifiers, current specification artefacts, Open Manuscript Studio support, validation, testing, deviations, and status-advancement rules. |

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
| Version | 0.3.0 |
| Normative language | English |
| Last updated | 2026-09-05 |
| Coverage | Every identifier in the OMI Specification Registry |
| Evidence baseline | Full `main`-branch review from 2026-08-06, supplemented by OMI-SPEC-320 specification, schema, fixture, validator, and current Studio `.omi.json` export evidence reviewed on 2026-09-05 |
| Authority | Informative; the Specification Registry and individual specifications remain authoritative |

## 1. Purpose

This document records the current implementation and verification status of every specification identifier allocated by the Open Manuscript Initiative.

It separates five questions that must not be conflated:

1. Does a canonical specification document exist?
2. Has that document been migrated to the current OMI Specification Template?
3. Are machine-readable artefacts and conformance fixtures published?
4. Does Open Manuscript Studio implement identifiable parts of the specification?
5. Has the behaviour been validated, tested for conformance, or demonstrated independently?

The matrix is intended to:

- expose gaps between prose specifications and executable evidence;
- prevent experimental implementation code from being mistaken for normative conformance;
- provide a baseline for planning and review;
- identify the next evidence required for each specification;
- support future release-readiness decisions.

## 2. Authority and interpretation

The [OMI Specification Registry](./specification-registry.md) is authoritative for:

- permanent specification identifiers;
- official titles;
- allocation states;
- lifecycle states;
- exact versions;
- canonical paths.

Individual specification documents are authoritative for their normative requirements.

This matrix is an informative evidence report. It does not:

- change a specification lifecycle state;
- assign conformance to an implementation;
- make an unpublished schema authoritative;
- replace a specification, validator, test suite, or implementation report;
- guarantee that every experimental feature is aligned with the latest specification text.

A specification may be a mature document without an implementation. An implementation may contain substantial functionality while the related specification remains Draft. These are independent dimensions.

## 3. Status vocabulary

### 3.1 Specification and artefact states

| State | Meaning |
|---|---|
| **Active Draft** | A canonical specification document exists and is registered with Draft lifecycle status. |
| **Reserved** | The identifier and subject are allocated, but no accepted Draft specification exists. |
| **Current template** | The active specification was created or comprehensively rewritten using the current Specification Template. |
| **Migration required** | The active document predates the canonical Specification Template or does not yet contain all required metadata, conformance, compatibility, evidence, and change-history sections. |
| **Draft artefact published** | A versioned machine-readable artefact is present at an authoritative location but remains subject to incompatible change before Stable. |
| **Initial fixtures published** | Versioned positive and negative examples exist, but they do not yet constitute a complete formal conformance suite. |
| **Not published** | The relevant canonical schema, fixture set, report format, or other machine-readable artefact is not present at an authoritative repository location. |
| **Not started** | No repository evidence of substantive work was verified for the stated dimension. |
| **Not applicable** | The stated dimension is not required for the specification in its current role. |

### 3.2 Implementation-evidence states

| State | Meaning |
|---|---|
| **Exploratory** | Related types, fields, UI concepts, or workflows exist, but they are incomplete, implementation-specific, or not demonstrably aligned with the canonical specification. |
| **Partial** | An identifiable subset of the specification domain is represented or usable, but major requirements, validation, interoperability, or lifecycle behaviour are absent. |
| **Implemented** | Applicable normative behaviour is implemented and mapped to a declared specification version, but formal conformance testing is not complete. |
| **Tested** | The implementation has automated evidence covering applicable normative requirements for a declared version. |
| **Conformant** | The implementation satisfies a published conformance class using the approved conformance suite and records any permitted limitations. |
| **Not verified** | Evidence may exist outside the reviewed repositories, but it was not verified for this baseline. |

The words **implemented**, **tested**, and **conformant** are intentionally strict. They must not be inferred from the existence of similarly named classes, interfaces, pages, or examples.

## 4. Evidence baseline

The baseline review used the public OMI specification repository and the current Open Manuscript Studio repository.

Verified Studio evidence includes:

- the alpha scope declared in `README.md`;
- the manuscript, annotation, citation, block, section, agent, and contribution interfaces in `src/types/omi.ts` and `src/model/identity.ts`;
- manuscript editing and contributor actions in `src/app/useStudioStore.ts`;
- legacy author migration in `src/document/migrateIdentityModel.ts`;
- account-to-agent separation in `src/model/user.ts`;
- workspace roles, permissions, invitations, reviewer and translator roles in `src/model/workspace.ts`;
- the current local-storage workspace implementation in `src/store/workspaceStore.ts`;
- identity and contributor unit tests in `tests/identity-model.test.ts`;
- the `OMI-SPEC-160@0.1.0` revision, change-set, change-event, snapshot, history-completeness, commit, validation, and revert model in `src/model/versioning.ts`;
- timestamp-only revision-history migration in `src/document/migrateVersioningModel.ts`;
- the multilingual revision-history interface in `src/components/HistoryPanel.tsx`;
- versioning unit tests in `tests/versioning-model.test.ts` covering immutable roots, parent preservation, linear history, atomic change sets, reverts, shallow migration, validation, and export.

The current versioning implementation was merged to Open Manuscript Studio in PR #2 with merge commit `65f3a2f4fa9eaf6adf370f4bae5eec1e98521db2`.

The 2026-08-06 full review did not find authoritative OMI repository artefacts for:

- a machine-readable validation-report format;
- a formal conformance test suite;
- independently verified implementations.

The 2026-09-05 OMI-SPEC-320 update adds the first canonical versioned manuscript JSON Schema, an initial eight-document positive and negative fixture set, and a reference fixture validator. These artefacts cover structural validation and selected semantic checks; they are not a complete OMI schema set or formal conformance suite.

Open Manuscript Studio currently refers to the URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json` in its TypeScript manuscript type. The existence of that URI in source code is not evidence that a canonical schema is published or that the implementation validates against it.

## 5. Aggregate snapshot

| Measure | Current baseline |
|---|---:|
| Registered specification identifiers | 23 |
| Active Draft specifications | 17 |
| Reserved specifications | 6 |
| Active specifications using the current template | 3 |
| Active specifications requiring template migration | 14 |
| Canonical machine-readable specification artefact sets published | 1 Draft set verified |
| Published conformance fixture sets | 1 initial set verified |
| Validator implementations | 1 reference fixture validator verified |
| Formal conformance test suites | 0 verified |
| Independent implementations | 0 verified |
| Studio status: Partial | 8 specifications |
| Studio status: Exploratory | 6 specifications |
| Studio status: Not started | 8 specifications |
| Studio status: Not applicable | 1 specification |

These counts describe the evidence categories used in this document. They do not measure percentage completion or specification quality.

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
| `OMI-SPEC-320` | [File Format](../specifications/file-format.md) | Active Draft | 0.2.0 | Current template | [Draft schema](/schemas/omi-manuscript-0.2.schema.json) | [Initial fixtures](/examples/omi-spec-320/0.2.0/manifest.json) |
| `OMI-SPEC-330` | [Container Architecture](../specifications/container-architecture.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-340` | Import and Export Model | Reserved | — | Not applicable | Not started | Not started |
| `OMI-SPEC-350` | Capability and Conformance Model | Reserved | — | Not applicable | Not started | Not started |

## 7. Open Manuscript Studio implementation evidence

No row in this section currently qualifies as **Implemented**, **Tested**, or **Conformant** under the strict definitions above.

The OMI repository now contains a reference fixture validator for `OMI-SPEC-320@0.2.0`. No Studio implementation uses that validator yet, and no formal conformance tests or independent implementation evidence were verified for any specification. Those dimensions are therefore summarized for the complete baseline rather than repeated in every row.

### 7.1 Foundations and core semantic models

| Identifier | Studio status | Verified evidence | Primary gap before stronger status |
|---|---|---|---|
| `OMI-SPEC-000` | Not applicable | Principles guide architecture rather than defining a directly executable component. | Convert cross-suite principles into traceable requirements and review criteria. |
| `OMI-SPEC-100` | Partial | `OmiManuscript` contains sections and blocks; the Studio store selects sections, edits blocks, and adds sections. | Canonical schema, invariants, block semantics, extension rules, validation, and requirement mapping. |
| `OMI-SPEC-110` | Exploratory | Annotations can refer to `targetBlockId` and optional `targetText`. | Stable anchor identity, selectors, resolution, mutation behaviour, ambiguity handling, and tests. |
| `OMI-SPEC-120` | Partial | A typed manuscript aggregate contains agents, contributions, sections, blocks, annotations, citations, identifiers, timestamps, and revision history. | Align object boundaries and lifecycles with the specification; publish schema and validation evidence. |
| `OMI-SPEC-130` | Partial | `OmiAnnotation` defines an identifier, type, target block, optional target text, body, and rendering hint; annotations are exposed in manuscript state. | Canonical targets, motivations, authorship, lifecycle, threading, permissions, validation, and interchange. |
| `OMI-SPEC-140` | Partial | Manuscript state represents locale, title, subtitle, abstract, keywords, identifiers, agents, contributions, and timestamps. | Metadata provenance, controlled terms, cardinalities, profiles, validation, and external mappings. |
| `OMI-SPEC-150` | Partial | The Studio declares `OMI-SPEC-150@0.1.0`, separates accounts from agents, represents name forms, identifier and affiliation assertions, contextual contributions, roles, order and corresponding status, migrates legacy authors, exposes a multilingual contributor editor, and includes focused unit tests. | Canonical schema, complete visibility and provenance processing, additional agent types, reconciliation, backend persistence, requirement mapping, and conformance fixtures. |
| `OMI-SPEC-160` | Partial | The Studio declares `OMI-SPEC-160@0.1.0`; creates immutable root and child revisions with one-parent linear ancestry; records semantic change sets and events for manuscript and contributor mutations; stores complete or shallow snapshots; performs non-destructive reverts as new revisions; resolves actor attribution conservatively; exposes multilingual history UI; exports revision history; and includes focused unit tests. | Working-state batching and checkpoint commits, tombstones, integrity/state digests, explicit `REQ-VCH-*` mapping, canonical schemas and fixtures, branching and merge support, persistence hardening, and formal conformance tests. |
| `OMI-SPEC-170` | Exploratory | Manuscripts have a locale; user and workspace models include working languages and a translator role. | Translation objects, source-target relationships, equivalence, divergence, synchronization, and provenance. |
| `OMI-SPEC-180` | Not started | No canonical validator or validation-report model was verified. | Draft the Validation Model and publish machine-readable report semantics and test fixtures. |
| `OMI-SPEC-190` | Exploratory | Workspace code defines roles, permissions, members, invitations, reviewer and translator roles, with local persistence. | Write the specification; add server-enforced authorization, manuscript-scoped permissions, auditability, and conformance tests. |

### 7.2 Scholarly workflow, references, and publishing

| Identifier | Studio status | Verified evidence | Primary gap before stronger status |
|---|---|---|---|
| `OMI-SPEC-200` | Exploratory | Workspace roles include reviewer and members may be allowed to create annotations. | Review objects, assignments, rounds, states, decisions, confidentiality, identity disclosure, and event history. |
| `OMI-SPEC-210` | Partial | `OmiCitation` and the manuscript citation array represent citation keys, labels, source types, and dates. | Separate citation occurrences from bibliographic records; anchor occurrences and define rendering-independent semantics. |
| `OMI-SPEC-220` | Exploratory | The current citation type contains a small set of record-like fields. | Dedicated bibliographic record identity, contributors, titles, containers, identifiers, provenance, merging, and validation. |
| `OMI-SPEC-221` | Not started | No manuscript-level reference library or external registry integration was verified. | Library membership, record reuse, lookup, reconciliation, caching, provenance, and deduplication behaviour. |
| `OMI-SPEC-230` | Not started | The alpha editor can manipulate and export manuscript data, but no specification-aligned publishing pipeline was verified. | Publication jobs, profiles, transformations, output provenance, failure handling, and semantic-source preservation. |
| `OMI-SPEC-240` | Not started | No rendering or publication-profile declaration was verified. | Draft the specification and define profile identity, requirements, inheritance, output constraints, and validation. |

### 7.3 Platform, exchange, and conformance

| Identifier | Studio status | Verified evidence | Primary gap before stronger status |
|---|---|---|---|
| `OMI-SPEC-300` | Not started | No plugin manifest, extension API, capability boundary, or isolation mechanism was verified. | Define and implement plugin identity, lifecycle, permissions, extension points, compatibility, and failure containment. |
| `OMI-SPEC-310` | Not started | Current alpha state is primarily client-side; no implementation claiming the registered Platform API was verified. | Versioned API contract, authentication, authorization, resources, events, errors, pagination, and tests. |
| `OMI-SPEC-320` | Partial | The Studio exports `.omi.json` as `application/vnd.openmanuscript+json`, carries the precursor `0.1` schema URI, omits the deprecated embedded `authors` field from canonical exports, and includes portable revision history. | Adopt the `0.2.0` envelope and schema; implement version negotiation, duplicate-member detection, layered validation, unknown-field preservation, migration and loss reporting; map behaviour to `REQ-FMT-*`. |
| `OMI-SPEC-330` | Not started | No OMI container package, manifest, asset graph, integrity record, or packaging workflow was verified. | Implement package layout, manifest, media handling, checksums, signatures, extraction safety, and preservation rules. |
| `OMI-SPEC-340` | Exploratory | Export of a manuscript JSON representation plus identity and version-history migration paths exist; no general import UI or round-trip evidence was verified. | Write the specification; add import, export, mapping, loss reports, unsupported-content handling, and round-trip fixtures. |
| `OMI-SPEC-350` | Not started | No capability declaration, implementation claim format, or conformance runner was verified. | Define conformance classes, capability statements, test manifests, result reports, and claim-verification rules. |

## 8. Cross-cutting findings and known deviations

### 8.1 Specification-template migration

`OMI-SPEC-150` and `OMI-SPEC-160` were created directly from the canonical Specification Template. `OMI-SPEC-320` was comprehensively rewritten against it in version `0.2.0`. The other 14 active specifications require controlled migration that preserves permanent identifiers, canonical routes, and change histories while adding the required metadata and evidence sections.

### 8.2 Draft schema and legacy placeholder reference

The authoritative Draft schema for `OMI-SPEC-320@0.2.0` is published at `https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json`. The Studio manuscript type still names the earlier `https://openmanuscript.org/schemas/omi-manuscript-0.1.json` URI. No authoritative `0.1` schema is published, so that earlier URI remains an implementation placeholder and does not establish `0.2.0` conformance.

### 8.3 Implementation-specific models

The Studio types are useful design evidence but are not automatically the normative OMI data model. Differences must be documented and resolved through specification issues or implementation changes.

### 8.4 Local collaboration persistence

The current workspace store explicitly uses local browser persistence and states that production multi-user behaviour requires authenticated backend APIs. It therefore demonstrates domain exploration, not server-enforced collaboration conformance.

### 8.5 Citation and record separation

The current Studio citation representation contains both occurrence-oriented and record-oriented information. The Citation Model and Bibliographic Record Model require a clearer separation before either implementation can be considered complete.

### 8.6 Versioning and change history

`OMI-SPEC-160` now has a first portable reference implementation in Studio. The merged implementation provides immutable linear revisions, one-parent ancestry, semantic change sets and events, complete or shallow snapshots, conservative actor attribution, non-destructive reverts, a multilingual history view, portable history export, and focused unit tests.

The implementation remains **Partial**. Existing editor controls commit at their current update granularity, so rich-text and text-field editing may create overly fine-grained revisions. Working-state batching and explicit checkpoint commits are therefore the next implementation step before branching and merge behaviour is attempted. Tombstones, state digests, stronger persistence, explicit `REQ-VCH-*` mapping, canonical fixtures, branching, merge bases, conflicts, and formal conformance evidence remain outstanding.

The focused unit tests do not by themselves qualify the implementation as **Tested** under this matrix because no approved OMI conformance fixture set or requirement-mapped conformance runner exists yet.

### 8.7 Validation and conformance

The OMI-SPEC-320 schema, initial fixtures, and reference validator establish the first executable evidence baseline. They do not yet cover every `REQ-FMT-*` requirement, duplicate-name byte parsing, resource limits, migration, or cross-implementation round trips, and therefore do not qualify any implementation as **Tested** or **Conformant**.

Advancement for each specification still requires, as applicable:

- exact normative requirements;
- declared conformance classes;
- canonical schemas and fixtures where applicable;
- a validator or conformance runner;
- machine-readable test results tied to exact specification versions.

## 9. Evidence required for status advancement

### 9.1 Exploratory to Partial

A feature may move from **Exploratory** to **Partial** when:

- a distinct implementation component exists;
- its relationship to a registered specification is documented;
- the implemented subset and known omissions are explicit;
- the behaviour is usable beyond placeholder data or naming similarity.

### 9.2 Partial to Implemented

A feature may move to **Implemented** only when:

- the relevant specification is an active document;
- the implementation declares the exact specification version;
- applicable normative requirements are mapped to code or documented behaviour;
- required error handling and persistence semantics are present;
- known deviations are recorded;
- applicable machine-readable artefacts are used.

### 9.3 Implemented to Tested

A feature may move to **Tested** only when:

- automated tests cover applicable normative requirements;
- valid and invalid fixtures are versioned;
- test results are reproducible;
- the test suite identifies the exact specification and artefact versions.

### 9.4 Tested to Conformant

A feature may move to **Conformant** only when:

- an approved conformance class exists;
- the official or accepted conformance suite passes;
- permitted optional behaviour and limitations are declared;
- the claim is published in a verifiable implementation report.

## 10. Maintenance procedure

This matrix should be updated whenever a pull request:

- creates or reserves a specification;
- changes a specification lifecycle state or version;
- publishes or replaces a schema, vocabulary, fixture set, validator, or test suite;
- adds substantive Studio support;
- records an independent implementation;
- changes a known deviation;
- publishes a conformance claim.

Every status-changing update should identify evidence such as:

- a canonical document or artefact path;
- an immutable commit;
- a test run or result report;
- an implementation issue or pull request;
- an exact specification version;
- a declared conformance class.

Status must be downgraded when evidence becomes stale, incompatible, withdrawn, or no longer reproducible.

The complete matrix should be reviewed before each OMI release and at every lifecycle transition to Review Candidate, Implementation Candidate, or Stable.

## 11. Immediate evidence programme

The next evidence-producing work should proceed in this order:

1. add working-state batching and explicit checkpoint commits to the Studio `OMI-SPEC-160` implementation so ordinary typing does not create excessively fine-grained committed revisions;
2. map the implemented Core Revision History subset to the normative `REQ-VCH-*` requirements and record explicit deviations;
3. add tombstone and integrity/state-digest behaviour required by the selected versioning profile;
4. adopt `OMI-SPEC-320@0.2.0` in Studio and add requirement-mapped parser, serializer, migration, and round-trip evidence;
5. publish canonical identity and versioning schemas with minimal valid and invalid fixtures;
6. migrate the remaining active core specifications to the canonical Specification Template;
7. define the Validation Model and validation-report format;
8. establish automated cross-specification schema and conformance checks;
9. draft `OMI-SPEC-170`, Translation Model, using the revision ledger as its version-aware foundation;
10. record known deviations as linked issues and seek an independently developed parser, validator, or interoperability prototype.

## 12. Change history

| Version | Date | Summary |
|---|---|---|
| 0.3.0 | 2026-09-05 | Recorded the template-complete `OMI-SPEC-320@0.2.0`, first canonical Draft manuscript schema, initial fixtures and reference validator; updated Studio's remaining adoption gap and aggregate evidence counts. |
| 0.2.1 | 2026-08-06 | Promoted Studio support for `OMI-SPEC-160` from Exploratory to Partial after the immutable linear revision ledger merged; recorded revision, change-set, snapshot, revert, history-export, and focused-test evidence; advanced the next evidence priority to working-state batching, checkpoint commits, and requirement mapping. |
| 0.2.0 | 2026-08-06 | Activated `OMI-SPEC-160`, recorded two current-template specifications, updated Studio evidence after the `OMI-SPEC-150` integration, and advanced the evidence programme to a linear revision ledger. |
| 0.1.1 | 2026-08-06 | Activated `OMI-SPEC-150` in the readiness matrix, recorded it as the first specification using the current template, and updated the immediate evidence programme. |
| 0.1.0 | 2026-08-06 | Initial evidence-based matrix covering all 23 registered identifiers, current specification artefacts, Open Manuscript Studio support, validation, testing, deviations, and status-advancement rules. |

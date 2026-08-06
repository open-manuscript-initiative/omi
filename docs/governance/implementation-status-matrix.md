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
| Version | 0.1.0 |
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
| **Migration required** | The active document predates the canonical Specification Template or does not yet contain all required metadata, conformance, compatibility, evidence, and change-history sections. |
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
- the `OmiManuscript`, `OmiPerson`, `OmiAnnotation`, `OmiCitation`, block, and section interfaces in `src/types/omi.ts`;
- manuscript editing state in `src/app/useStudioStore.ts`;
- user, professional-profile, ORCID, external-identity, and language concepts in `src/model/user.ts`;
- workspace roles, permissions, invitations, reviewer and translator roles in `src/model/workspace.ts`;
- the current local-storage workspace implementation in `src/store/workspaceStore.ts`.

The review did not find authoritative OMI repository artefacts for:

- a canonical versioned JSON Schema set;
- a machine-readable validation-report format;
- conformance fixtures;
- a validator reference implementation;
- a formal conformance test suite;
- independently verified implementations.

Open Manuscript Studio currently refers to the URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json` in its TypeScript manuscript type. The existence of that URI in source code is not evidence that a canonical schema is published or that the implementation validates against it.

## 5. Aggregate snapshot

| Measure | Current baseline |
|---|---:|
| Registered specification identifiers | 23 |
| Active Draft specifications | 15 |
| Reserved specifications | 8 |
| Active specifications requiring template migration | 15 |
| Canonical machine-readable specification artefact sets published | 0 verified |
| Published conformance fixture sets | 0 verified |
| Validator implementations | 0 verified |
| Formal conformance test suites | 0 verified |
| Independent implementations | 0 verified |
| Studio status: Partial | 6 specifications |
| Studio status: Exploratory | 8 specifications |
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
| `OMI-SPEC-150` | Identity and Contributor Model | Reserved | — | Not applicable | Not started | Not started |
| `OMI-SPEC-160` | Versioning and Change Model | Reserved | — | Not applicable | Not started | Not started |
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
| `OMI-SPEC-310` | [Platform API](../specifications/platform-api.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-320` | [File Format](../specifications/file-format.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-330` | [Container Architecture](../specifications/container-architecture.md) | Active Draft | 0.1.0 | Migration required | Not published | Not published |
| `OMI-SPEC-340` | Import and Export Model | Reserved | — | Not applicable | Not started | Not started |
| `OMI-SPEC-350` | Capability and Conformance Model | Reserved | — | Not applicable | Not started | Not started |

## 7. Open Manuscript Studio implementation evidence

No row in this section currently qualifies as **Implemented**, **Tested**, or **Conformant** under the strict definitions above.

No validator support, formal conformance tests, or independent implementation evidence was verified for any specification. Those dimensions are therefore recorded once for the complete baseline rather than repeated in every row.

### 7.1 Foundations and core semantic models

| Identifier | Studio status | Verified evidence | Primary gap before stronger status |
|---|---|---|---|
| `OMI-SPEC-000` | Not applicable | Principles guide architecture rather than defining a directly executable component. | Convert cross-suite principles into traceable requirements and review criteria. |
| `OMI-SPEC-100` | Partial | `OmiManuscript` contains sections and blocks; the Studio store selects sections, edits blocks, and adds sections. | Canonical schema, invariants, block semantics, extension rules, validation, and requirement mapping. |
| `OMI-SPEC-110` | Exploratory | Annotations can refer to `targetBlockId` and optional `targetText`. | Stable anchor identity, selectors, resolution, mutation behaviour, ambiguity handling, and tests. |
| `OMI-SPEC-120` | Partial | A typed manuscript aggregate contains persons, sections, blocks, annotations, citations, identifiers, and timestamps. | Align object boundaries and lifecycles with the specification; publish schema and validation evidence. |
| `OMI-SPEC-130` | Partial | `OmiAnnotation` defines an identifier, type, target block, optional target text, body, and rendering hint; annotations are exposed in manuscript state. | Canonical targets, motivations, authorship, lifecycle, threading, permissions, validation, and interchange. |
| `OMI-SPEC-140` | Partial | Manuscript state represents locale, title, subtitle, abstract, keywords, authors, identifiers, and timestamps. | Metadata provenance, controlled terms, cardinalities, profiles, validation, and external mappings. |
| `OMI-SPEC-150` | Exploratory | `OmiPerson` and the Studio `User` model represent names, affiliation, ORCID, external identities, preferences, and working languages. | Write the specification; distinguish accounts, agents, contributors, roles, assertions, and manuscript attribution. |
| `OMI-SPEC-160` | Exploratory | Manuscripts contain a version string plus creation and update timestamps. | Immutable revisions, change sets, events, authorship, provenance, branching, merge semantics, and compatibility rules. |
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
| `OMI-SPEC-320` | Partial | The Studio README declares `.omi.json` export and the TypeScript manuscript type carries an OMI schema URI. | Publish the canonical schema; define parsing, serialization, unknown-field handling, validation, and version migration. |
| `OMI-SPEC-330` | Not started | No OMI container package, manifest, asset graph, integrity record, or packaging workflow was verified. | Implement package layout, manifest, media handling, checksums, signatures, extraction safety, and preservation rules. |
| `OMI-SPEC-340` | Exploratory | Export of a manuscript JSON representation is declared; no equivalent import or round-trip evidence was verified. | Write the specification; add import, export, mapping, loss reports, unsupported-content handling, and round-trip fixtures. |
| `OMI-SPEC-350` | Not started | No capability declaration, implementation claim format, or conformance runner was verified. | Define conformance classes, capability statements, test manifests, result reports, and claim-verification rules. |

## 8. Cross-cutting findings and known deviations

### 8.1 Specification-template migration

All 15 active specifications existed before publication of the canonical Specification Template. Each requires a controlled migration that preserves its permanent identifier, canonical route, and change history while adding the required metadata and evidence sections.

### 8.2 Unpublished schema reference

The Studio manuscript type names a schema URI, but no authoritative schema artefact was verified in the OMI repository. Until a canonical schema is published and versioned, this URI must be treated as an implementation placeholder rather than validation evidence.

### 8.3 Implementation-specific models

The Studio types are useful design evidence but are not automatically the normative OMI data model. Differences must be documented and resolved through specification issues or implementation changes.

### 8.4 Local collaboration persistence

The current workspace store explicitly uses local browser persistence and states that production multi-user behaviour requires authenticated backend APIs. It therefore demonstrates domain exploration, not server-enforced collaboration conformance.

### 8.5 Citation and record separation

The current Studio citation representation contains both occurrence-oriented and record-oriented information. The Citation Model and Bibliographic Record Model require a clearer separation before either implementation can be considered complete.

### 8.6 Versioning and change history

A mutable version string and update timestamp do not constitute a versioning and change model. No immutable revision graph, change-event model, authorship trail, or merge semantics were verified.

### 8.7 Validation and conformance

No implementation status in this baseline can advance to **Tested** or **Conformant** until the project publishes:

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

1. create `OMI-SPEC-150`, Identity and Contributor Model;
2. create `OMI-SPEC-160`, Versioning and Change Model;
3. migrate the active core specifications to the canonical Specification Template;
4. publish the first canonical manuscript schema and minimal valid and invalid fixtures;
5. define the Validation Model and validation-report format;
6. map Studio types and behaviours to exact specification requirements;
7. establish automated schema and conformance checks;
8. record known deviations as linked issues;
9. seek an independently developed parser, validator, or interoperability prototype.

## 12. Change history

| Version | Date | Summary |
|---|---|---|
| 0.1.0 | 2026-08-06 | Initial evidence-based matrix covering all 23 registered identifiers, current specification artefacts, Open Manuscript Studio support, validation, testing, deviations, and status-advancement rules. |

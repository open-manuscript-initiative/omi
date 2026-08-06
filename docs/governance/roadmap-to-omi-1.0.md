---
title: Roadmap to OMI 1.0
sidebar_position: 2
description: Current programme, completed foundations, active priorities, and release criteria for Open Manuscript Initiative 1.0.
---

# Roadmap to OMI 1.0

## Building an Open Standard for Scholarly Publishing

## Document metadata

| Field | Value |
|---|---|
| Document type | Governance and planning |
| Status | Draft |
| Version | 0.3.1 |
| Normative language | English |
| Last updated | 2026-08-06 |
| Planning horizon | OMI 1.0 |
| Authoritative identifier source | [OMI Specification Registry](./specification-registry.md) |

## 1. Purpose

This roadmap defines the work required to transform the Open Manuscript Initiative from an evolving project architecture into a coherent, implementable, testable, and governable open standard for scholarly manuscripts.

It records completed work, the current specification architecture, remaining governance and documentation tasks, the sequence of model/schema/interoperability/conformance work, and the evidence required before OMI 1.0 can be declared Stable.

The roadmap is a planning document. The [OMI Specification Registry](./specification-registry.md) is authoritative for specification identifiers, titles, canonical paths, allocation states, lifecycle states, and versions.

## 2. Strategic direction

OMI is not intended to become only another manuscript editor, journal platform, or publishing workflow. Its long-term objective is to define an implementation-independent semantic standard that can be adopted by authors, research groups, journals, publishers, repositories, preservation services, universities, libraries, editorial systems, conversion tools, validators, renderers, and independently developed scholarly software.

Open Manuscript Studio is the primary reference implementation. It tests and demonstrates OMI specifications, but it does not define their normative meaning.

## 3. Progress summary

The programme has moved beyond documentation architecture into active specification-to-implementation feedback.

| Programme area | Status | Summary |
|---|---|---|
| Documentation audit | Completed | The original English documentation was inventoried and assessed. |
| Governance foundation | Largely completed | Charter, lifecycle, versioning, style, terminology, registry, documentation architecture, and specification template are published. |
| Implementation evidence baseline | Published and maintained | The Implementation Status Matrix covers all 23 registered identifiers and tracks specification maturity separately from implementation evidence. |
| Identifier migration | Completed for active specifications | Active specifications use the canonical `OMI-SPEC-000`, `100–240`, and `300–350` architecture where allocated. |
| Structural refactoring | Largely completed | Sidebar reorganisation, duplicate consolidation, and legacy routing are in place. |
| Navigation internationalisation | Completed | English, Hungarian, and German navigation labels are aligned. |
| Core semantic models | In progress | `OMI-SPEC-150` and `OMI-SPEC-160` are active, template-aligned Drafts; translation, validation, and collaboration models remain reserved. |
| Reference implementation | In progress | Studio partially implements both `OMI-SPEC-150` and the Core Revision History subset of `OMI-SPEC-160`. |
| Workflow and bibliography models | Partially completed | Review, citation, bibliographic record, reference-library, and publishing drafts exist. |
| Platform and exchange models | Partially completed | Plugin, API, file-format, and container drafts exist. |
| Schemas and formal conformance tests | Not yet completed | Canonical schemas, fixtures, validator behaviour, and accepted conformance suites remain future work. |
| Full official translations | Not started | Navigation is translated; normative document bodies remain English. |

## 4. Completed foundation work

Published governance and architecture deliverables include:

- [OMI Charter](./charter.md);
- [Architecture Audit](./architecture-audit.md);
- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [OMI Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md);
- [OMI Specification Template](./specification-template.md);
- [OMI Implementation Status Matrix](./implementation-status-matrix.md).

The documentation site also has a six-category canonical sidebar, explicit active-document registration, stable retained routes, a supersession notice for duplicate Scholarly Object Model material, and aligned English/Hungarian/German navigation.

## 5. Current specification architecture

### 5.1 Foundations and core semantic models

| Identifier | Specification | Allocation | Current state |
|---|---|---|---|
| `OMI-SPEC-000` | Core Principles | Active | Draft |
| `OMI-SPEC-100` | Document Model | Active | Draft |
| `OMI-SPEC-110` | Anchor Model | Active | Draft |
| `OMI-SPEC-120` | Scholarly Object Model | Active | Draft |
| `OMI-SPEC-130` | Annotation Model | Active | Draft |
| `OMI-SPEC-140` | Metadata Model | Active | Draft |
| `OMI-SPEC-150` | Identity and Contributor Model | Active | Draft |
| `OMI-SPEC-160` | Versioning and Change Model | Active | Draft |
| `OMI-SPEC-170` | Translation Model | Reserved | Next semantic model after revision batching/checkpoint work |
| `OMI-SPEC-180` | Validation Model | Reserved | Planned |
| `OMI-SPEC-190` | Collaboration and Permission Model | Reserved | Planned |

### 5.2 Scholarly workflow, references, and publishing

| Identifier | Specification | Allocation | Current state |
|---|---|---|---|
| `OMI-SPEC-200` | Review Model | Active | Draft |
| `OMI-SPEC-210` | Citation Model | Active | Draft |
| `OMI-SPEC-220` | Bibliographic Record Model | Active | Draft |
| `OMI-SPEC-221` | Reference Library and Registry Architecture | Active | Draft |
| `OMI-SPEC-230` | Publishing Model | Active | Draft |
| `OMI-SPEC-240` | Rendering and Publication Profile Model | Reserved | Planned |

### 5.3 Platform, exchange, and conformance

| Identifier | Specification | Allocation | Current state |
|---|---|---|---|
| `OMI-SPEC-300` | Plugin Architecture | Active | Draft |
| `OMI-SPEC-310` | Platform API | Active | Draft |
| `OMI-SPEC-320` | File Format | Active | Draft |
| `OMI-SPEC-330` | Container Architecture | Active | Draft |
| `OMI-SPEC-340` | Import and Export Model | Reserved | Planned |
| `OMI-SPEC-350` | Capability and Conformance Model | Reserved | Planned |

The registry remains authoritative when this summary and the registry differ.

## 6. Objectives for OMI 1.0

OMI 1.0 aims to:

1. maintain a stable specification hierarchy;
2. preserve one canonical document and route for each normative concept;
3. use permanent identifiers consistently across prose, schemas, examples, and tests;
4. complete missing semantic, identity, change, validation, collaboration, and translation models;
5. migrate active Drafts to the canonical specification structure;
6. publish canonical machine-readable schemas and controlled vocabularies;
7. provide valid, invalid, minimal, comprehensive, multilingual, and discipline-sensitive examples;
8. define explicit conformance classes and testable requirements;
9. document compatibility, migration, error handling, and information-loss behaviour;
10. validate specifications through reference and independent implementations;
11. publish a stable normative English suite before full official translations;
12. maintain governance capable of sustaining the standard after 1.0.

## 7. Programme phases

### Phase 1 — Documentation audit

**Status:** Completed

Completed deliverables include the English documentation inventory, classification of duplicate/obsolete/missing material, identification of identifier and terminology conflicts, the architecture audit, and migration recommendations.

Exit evidence: [Architecture Audit](./architecture-audit.md).

### Phase 2 — Governance foundation

**Status:** Largely completed

Completed: Charter, Specification Lifecycle, Versioning Policy, Style Guide, Terminology, authoritative Registry, Documentation Architecture, Specification Template, and Implementation Status Matrix.

Remaining:

- Contribution and Decision Process;
- Implementation and Conformance Policy;
- explicit maintainer/reviewer responsibilities;
- formal change-approval rules for later lifecycle transitions.

Exit criterion:

> Specification proposals can be authored, reviewed, versioned, approved, deprecated, and superseded through a documented and accountable process.

### Phase 3 — Structural refactoring

**Status:** Largely completed

Completed: six-category documentation sidebar, explicit active-document registration, consolidation of duplicate Scholarly Object Model content, legacy-route notice, canonical identifier migration, and aligned multilingual navigation.

Remaining:

- reconcile legacy identifier examples and path inconsistencies;
- migrate earlier Drafts to the canonical Specification Template;
- normalise visible metadata, conformance sections, dependencies, and change histories;
- add automated checks for broken links, duplicate identifiers, stale sidebar keys, and invalid front matter.

Exit criterion:

> Each active concept has one canonical document, one canonical route, one permanent identifier, and internally consistent metadata.

### Phase 4 — Core model completion

**Status:** In progress

Existing Draft specifications:

- `OMI-SPEC-000` Core Principles;
- `OMI-SPEC-100` Document Model;
- `OMI-SPEC-110` Anchor Model;
- `OMI-SPEC-120` Scholarly Object Model;
- `OMI-SPEC-130` Annotation Model;
- `OMI-SPEC-140` Metadata Model;
- `OMI-SPEC-150` Identity and Contributor Model;
- `OMI-SPEC-160` Versioning and Change Model.

Reference-implementation milestones completed:

- account/agent and contextual contribution separation for `OMI-SPEC-150`;
- multilingual contributor editing and legacy author migration;
- first `OMI-SPEC-160` Core Revision History subset in Studio;
- immutable root and child revisions with one-parent linear ancestry;
- semantic change sets/events for manuscript and contributor mutations;
- complete versus shallow snapshot disclosure;
- conservative actor attribution through the account-to-agent relationship;
- non-destructive revert as a new revision;
- revision-history UI and portable `.omi.json` history export;
- focused unit tests for identity and versioning behaviour.

Priority deliverables:

- working-state batching so ordinary typing does not create one committed revision per low-level editor update;
- explicit checkpoint-commit semantics for meaningful user-visible revisions;
- `REQ-VCH-*` requirement-to-implementation mapping and deviation tracking;
- tombstone semantics and integrity/state digests;
- canonical manuscript, identity, and versioning schemas and valid/invalid fixtures;
- explicit object identity and lifecycle rules;
- model dependency map maintenance;
- template consolidation of earlier core Drafts;
- branching and merge implementation only after the linear/checkpoint model is stable.

Exit criterion:

> A minimum semantic manuscript, its objects, contributors, identifiers, versions, and changes can be represented without relying on undocumented implementation behaviour.

### Phase 5 — Workflow and scholarly interaction models

**Status:** Partially started

Existing Drafts: `OMI-SPEC-130` Annotation Model and `OMI-SPEC-200` Review Model.

Remaining priorities:

- `OMI-SPEC-170` Translation Model;
- `OMI-SPEC-190` Collaboration and Permission Model;
- audit and change-event relationships;
- review-state transitions;
- contributor permissions and role boundaries;
- multilingual equivalence, divergence, and synchronisation rules.

Exit criterion:

> Collaboration, review, annotation, permission, and multilingual relationships are representable as structured, version-aware scholarly objects.

### Phase 6 — Bibliography and citation completion

**Status:** Partially completed

Existing Drafts: `OMI-SPEC-210`, `OMI-SPEC-220`, and `OMI-SPEC-221`.

Remaining: source provenance, deduplication, identifier reconciliation, common-format mappings, resolution examples, validation for ambiguous records, and later citation-intent/graph evaluation.

Exit criterion:

> A work can be added once to a manuscript-level library and cited repeatedly through distinct citation occurrences without duplicating the bibliographic record.

### Phase 7 — Validation, rendering, and publication models

**Status:** Planned

Deliverables include `OMI-SPEC-180`, machine-readable validation reports, `OMI-SPEC-240`, Publishing Model consolidation, profile requirements, error/warning classes, and semantic-source preservation rules.

Exit criterion:

> Implementations can determine whether a manuscript satisfies a declared profile and generate publication outputs without silently changing the semantic source.

### Phase 8 — Canonical schemas and examples

**Status:** Planned

Deliverables include a versioned canonical JSON Schema set, stable schema URLs, prose/schema authority rules, minimal and comprehensive examples, multilingual and reference-rich examples, version-history examples, invalid fixtures, and schema migration rules.

Exit criterion:

> Independent implementations validate the same fixtures and obtain equivalent structural results.

### Phase 9 — Import, export, and interoperability mappings

**Status:** Planned

Deliverables include `OMI-SPEC-340`, mappings to JATS XML, CSL JSON, BibTeX, RIS, Crossref, and DataCite where applicable, explicit loss reporting, round-trip expectations, partial-history exchange, unsupported-content handling, preservation guidance, and mapping fixtures.

Exit criterion:

> Transformation behaviour, unsupported constructs, omitted history, and information loss are explicit, testable, and reportable rather than silent.

### Phase 10 — Capability and conformance testing

**Status:** Started

Completed: initial and maintained [Implementation Status Matrix](./implementation-status-matrix.md), including repository-backed evidence for the first Studio identity and revision-history implementations.

Remaining:

- `OMI-SPEC-350` Capability and Conformance Model;
- named conformance classes;
- validator reference implementation;
- formal conformance suite;
- requirement-mapped Studio results;
- independent implementation or interoperability prototype;
- documented deviations and specification corrections.

Focused Studio unit tests are implementation evidence but do not yet satisfy the definition of formal OMI conformance testing.

Exit criterion:

> OMI 1.0 behaviour has been demonstrated through executable evidence rather than prose alone.

### Phase 11 — Review Candidate and public review

**Status:** Planned

Deliverables: complete Review Candidate suite, public normative review, resolved/accepted/deferred comments, migration guidance, release notes, and compatibility statement.

Exit criterion:

> No unresolved issue is known to prevent interoperable implementation of the defined OMI 1.0 core.

### Phase 12 — OMI 1.0 release

**Status:** Planned

Deliverables: Stable specification suite, canonical schemas/examples, conformance test release, versioned website publication, archived reproducible release package, implementation-status report, and 1.x governance plan.

Exit criterion:

> The governing process formally approves the suite as Stable and publishes a reproducible OMI 1.0 release.

### Phase 13 — Official translations

**Status:** Navigation completed; full document translation deferred

Completed: Hungarian and German navigation labels plus translated category titles/descriptions.

Deferred until the normative English suite is sufficiently stable: full Hungarian and German specification translations, translation revision metadata, source-version synchronisation, approved terminology lists, and translation-drift checks.

Official translations remain informative unless a later governance decision explicitly assigns normative authority.

## 8. Immediate priorities

The next programme sequence is:

1. implement working-state batching in Open Manuscript Studio so low-level typing updates are grouped before they become committed `OMI-SPEC-160` revisions;
2. add explicit checkpoint commits and clear commit boundaries for title, abstract, rich-text, contributor, and structural editing;
3. map the implemented Core Revision History subset to `REQ-VCH-*` and record deviations;
4. add tombstone and integrity/state-digest behaviour required by the selected versioning profile;
5. publish canonical manuscript, identity, and versioning schemas with valid and invalid fixtures;
6. draft `OMI-SPEC-170`, **Translation Model**;
7. draft `OMI-SPEC-190`, **Collaboration and Permission Model**;
8. migrate earlier foundational Drafts to the canonical Specification Template;
9. define the Contribution and Decision Process and Implementation and Conformance Policy.

These priorities stabilise meaningful revision semantics before branching, merge, or real-time collaboration is introduced.

## 9. Implementation status matrix

The [OMI Implementation Status Matrix](./implementation-status-matrix.md) covers every registered specification identifier and is maintained whenever specification, schema, implementation, validator, test, or independent evidence changes.

Specification maturity remains separate from implementation completeness: a substantial implementation of a Draft does not make the specification Stable, and ordinary unit tests do not by themselves establish OMI conformance.

## 10. Repository and publication strategy

OMI separates responsibilities:

- **OMI specifications** define normative models, schemas, conformance rules, and examples;
- **Open Manuscript Studio** provides reference implementation and implementation feedback;
- **the OMI website** publishes public documentation and project information.

Any future repository split must preserve authoritative versioning, permanent identifiers, canonical URLs, release automation, archived publication sets, and cross-repository traceability.

## 11. Release criteria for OMI 1.0

OMI 1.0 must not be declared Stable until:

- the OMI 1.0 core specification set is explicitly defined;
- every normative specification has a permanent identifier and exact version;
- terminology and metadata are internally consistent;
- canonical schemas and examples are published at stable locations;
- conformance classes and requirements are testable;
- validation and error behaviour are defined;
- compatibility and migration rules are documented;
- revision, change, checkpoint, revert, and partial-history behaviour are explicit;
- import, export, and information-loss behaviour are explicit;
- security, privacy, accessibility, internationalisation, and preservation considerations have been reviewed;
- Open Manuscript Studio has been tested against the conformance suite;
- independent implementation or interoperability evidence exists for central behaviour;
- all known critical interoperability issues are resolved or explicitly scoped out;
- governance and maintenance procedures are active;
- the release is archived, reproducible, and publicly citable.

## 12. Operational maintenance

Routine dependency updates, security advisories, build-system maintenance, and deployment repairs are necessary operations but are not independent roadmap phases. The project should maintain automated dependency monitoring, prompt advisory review, reproducible lockfiles, build/link validation, documented Node.js/Docusaurus support, and separation of operational maintenance from normative changes.

## 13. Work after 1.0

Potential post-1.0 work includes discipline-specific profiles, citation-intent and citation-graph models, richer research-object packaging, collaborative event protocols, preservation certification profiles, additional official translations, extension/capability registries, and broader independent implementation testing.

## 14. Long-term goal

OMI aims to provide a common semantic language for scholarly manuscripts across the research lifecycle. Success is measured by whether independent applications and organisations can exchange, validate, review, publish, and preserve manuscripts without repeatedly reconstructing their meaning and structure.

## 15. Change history

| Version | Date | Summary |
|---|---|---|
| 0.3.1 | 2026-08-06 | Recorded the merged Studio `OMI-SPEC-160` immutable linear revision ledger as Partial implementation evidence and advanced the immediate implementation priority to working-state batching, checkpoint commits, requirement mapping, tombstones, and integrity evidence. |
| 0.3.0 | 2026-08-06 | Activated `OMI-SPEC-160` as a template-aligned Draft, recorded the partial Studio implementation of `OMI-SPEC-150`, and advanced the immediate programme to a linear revision ledger, history export, schemas, and the Translation Model. |
| 0.2.2 | 2026-08-06 | Activated `OMI-SPEC-150` as a Draft, recorded the first specification authored on the canonical template, and advanced the next priority to `OMI-SPEC-160` and implementation alignment. |
| 0.2.1 | 2026-08-06 | Recorded publication of the initial Implementation Status Matrix, marked Phase 10 as started, and advanced the immediate programme priorities to the Identity and Contributor and Versioning and Change models. |
| 0.2.0 | 2026-08-06 | Replaced provisional identifiers with the canonical registry architecture; recorded completed governance, identifier migration, structural refactoring, and navigation translation work; added phase statuses, immediate priorities, operational maintenance, and updated OMI 1.0 release criteria. |
| 0.1.0 | 2026-08-06 | Initial roadmap defining the OMI 1.0 work programme. |

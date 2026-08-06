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
| Version | 0.2.1 |
| Normative language | English |
| Last updated | 2026-08-06 |
| Planning horizon | OMI 1.0 |
| Authoritative identifier source | [OMI Specification Registry](./specification-registry.md) |

## 1. Purpose

This roadmap defines the work required to transform the Open Manuscript Initiative from an evolving project architecture into a coherent, implementable, testable, and governable open standard for scholarly manuscripts.

It records:

- the work already completed;
- the current specification architecture;
- the remaining governance and documentation tasks;
- the sequence of model, schema, interoperability, and conformance work;
- the evidence required before OMI 1.0 can be declared Stable.

The roadmap is a planning document. The [OMI Specification Registry](./specification-registry.md) is authoritative for specification identifiers, titles, canonical paths, allocation states, lifecycle states, and versions.

## 2. Strategic direction

OMI is not intended to become only another manuscript editor, journal platform, or publishing workflow.

Its long-term objective is to define an implementation-independent semantic standard that can be adopted by:

- authors and research groups;
- journals and publishers;
- repositories and preservation services;
- universities and libraries;
- editorial and peer-review systems;
- conversion, validation, and rendering tools;
- independently developed scholarly software.

Open Manuscript Studio is the primary reference implementation. It tests and demonstrates OMI specifications, but it does not define their normative meaning.

## 3. Progress summary

The programme has moved beyond the initial documentation-audit stage. The governance foundation, identifier system, documentation architecture, and first active specification family are now established.

| Programme area | Status | Summary |
|---|---|---|
| Documentation audit | Completed | The original English documentation was inventoried and assessed. |
| Governance foundation | Largely completed | Charter, lifecycle, versioning, style, terminology, registry, documentation architecture, and specification template are published. |
| Implementation evidence baseline | Published | The initial Implementation Status Matrix covers all 23 registered identifiers and separates specification maturity from implementation, validation, and conformance evidence. |
| Identifier migration | Completed for active specifications | Active specifications use the canonical `OMI-SPEC-000`, `100–240`, and `300–350` architecture where allocated. |
| Structural refactoring | Largely completed | The sidebar was reorganised, duplicate Scholarly Object Model material was consolidated, and legacy routing was retained. |
| Navigation internationalisation | Completed | English, Hungarian, and German navigation labels are aligned. |
| Core semantic models | In progress | Several active Draft models exist; important reserved models remain to be written. |
| Workflow and bibliography models | Partially completed | Review, citation, bibliographic record, reference-library, and publishing drafts exist. |
| Platform and exchange models | Partially completed | Plugin, API, file-format, and container drafts exist. |
| Schemas and conformance tests | Not yet completed | Canonical schemas, fixtures, validator behaviour, and conformance suites remain future work. |
| Full official translations | Not started | Navigation is translated; normative document bodies remain English. |

## 4. Completed foundation work

The following governance and architecture deliverables are already present:

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

The documentation site also has:

- a six-category canonical sidebar architecture;
- explicit registration of active documents;
- stable routes for retained documents;
- a supersession notice for the duplicate Scholarly Object Model route;
- Hungarian and German navigation translations;
- concise, language-specific sidebar labels that do not overload navigation with permanent identifiers.

## 5. Current specification architecture

The canonical specification family is organised by permanent identifier range.

### 5.1 Foundations and core semantic models

| Identifier | Specification | Allocation | Current state |
|---|---|---|---|
| `OMI-SPEC-000` | Core Principles | Active | Draft |
| `OMI-SPEC-100` | Document Model | Active | Draft |
| `OMI-SPEC-110` | Anchor Model | Active | Draft |
| `OMI-SPEC-120` | Scholarly Object Model | Active | Draft |
| `OMI-SPEC-130` | Annotation Model | Active | Draft |
| `OMI-SPEC-140` | Metadata Model | Active | Draft |
| `OMI-SPEC-150` | Identity and Contributor Model | Reserved | Next-priority specification |
| `OMI-SPEC-160` | Versioning and Change Model | Reserved | Planned |
| `OMI-SPEC-170` | Translation Model | Reserved | Planned |
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

The registry remains the authoritative source when this summary and the registry differ.

## 6. Objectives for OMI 1.0

The OMI 1.0 programme has the following objectives:

1. maintain a stable and understandable specification hierarchy;
2. preserve one canonical document and route for each normative concept;
3. use permanent identifiers consistently across prose, schemas, examples, and tests;
4. complete the missing semantic, identity, change, validation, collaboration, and translation models;
5. migrate active Draft specifications to the canonical specification structure;
6. publish canonical machine-readable schemas and controlled vocabularies;
7. provide valid, invalid, minimal, comprehensive, multilingual, and discipline-sensitive examples;
8. define explicit conformance classes and testable requirements;
9. document compatibility, migration, error handling, and information-loss behaviour;
10. validate the specifications through reference and independent implementations;
11. publish a stable normative English suite before full official translations;
12. establish governance capable of maintaining the standard after version 1.0.

## 7. Programme phases

### Phase 1 — Documentation audit

**Status:** Completed

Completed deliverables:

- inventory of the English documentation;
- classification of current, partial, duplicate, obsolete, and missing material;
- identification of identifier conflicts and terminology inconsistencies;
- architecture audit report;
- recommended canonical locations and migration priorities.

Completion evidence:

- the [Architecture Audit](./architecture-audit.md) records the initial findings;
- later governance documents supersede its provisional identifier plan where necessary.

### Phase 2 — Governance foundation

**Status:** Largely completed

Completed deliverables:

- OMI Charter;
- Specification Lifecycle;
- Versioning Policy;
- Specification Style Guide;
- Terminology and Definitions;
- authoritative Specification Registry;
- Documentation Architecture;
- canonical Specification Template;
- initial Implementation Status Matrix.

Remaining deliverables:

- Contribution and Decision Process;
- Implementation and Conformance Policy;
- explicit maintainer and reviewer responsibilities;
- formal change-approval rules for Review Candidate, Implementation Candidate, and Stable transitions.

Exit criterion:

> Specification proposals can be authored, reviewed, versioned, approved, deprecated, and superseded through a documented and accountable process.

### Phase 3 — Structural refactoring

**Status:** Largely completed

Completed deliverables:

- coherent six-category documentation sidebar;
- explicit active-document registration;
- consolidation of duplicate Scholarly Object Model content;
- stable legacy-route notice;
- canonical identifier migration for active specifications;
- concise and aligned English, Hungarian, and German navigation labels.

Remaining deliverables:

- reconcile old identifier examples in historical governance documents;
- reconcile any registry paths that no longer match actual canonical filenames;
- migrate active Draft specifications to the canonical Specification Template structure;
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
- `OMI-SPEC-140` Metadata Model.

Priority deliverables:

- `OMI-SPEC-150` Identity and Contributor Model;
- `OMI-SPEC-160` Versioning and Change Model;
- explicit object identity and lifecycle rules;
- provenance and change-event semantics;
- model dependency map;
- template-based consolidation of all active core Drafts.

Exit criterion:

> A minimum semantic manuscript, its objects, contributors, identifiers, versions, and changes can be represented without relying on undocumented implementation behaviour.

### Phase 5 — Workflow and scholarly interaction models

**Status:** Partially started

Existing Draft specifications:

- `OMI-SPEC-130` Annotation Model;
- `OMI-SPEC-200` Review Model.

Remaining priority deliverables:

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

Existing Draft specifications:

- `OMI-SPEC-210` Citation Model;
- `OMI-SPEC-220` Bibliographic Record Model;
- `OMI-SPEC-221` Reference Library and Registry Architecture.

Remaining deliverables:

- source-provenance and deduplication rules;
- identifier reconciliation behaviour;
- import and export mappings for common bibliographic formats;
- reference-resolution examples;
- validation rules for unresolved, ambiguous, or conflicting records;
- later evaluation of citation-intent and citation-graph extensions.

Exit criterion:

> A work can be added once to a manuscript-level library and cited repeatedly through distinct citation occurrences without duplicating the bibliographic record.

### Phase 7 — Validation, rendering, and publication models

**Status:** Planned

Deliverables:

- `OMI-SPEC-180` Validation Model;
- machine-readable validation-report format;
- `OMI-SPEC-240` Rendering and Publication Profile Model;
- consolidation of `OMI-SPEC-230` Publishing Model;
- profile-specific requirements;
- error and warning classifications;
- semantic-source preservation requirements.

Exit criterion:

> Implementations can determine whether a manuscript satisfies a declared profile and can generate publication outputs without silently changing the semantic source.

### Phase 8 — Canonical schemas and examples

**Status:** Planned

Deliverables:

- versioned canonical JSON Schema set;
- stable schema identifiers and publication URLs;
- schema-to-prose authority rules;
- minimal valid manuscript;
- full scholarly article example;
- multilingual example;
- reference-rich example;
- invalid fixtures for conformance testing;
- schema compatibility and migration rules.

Exit criterion:

> Independent implementations validate the same fixtures and obtain equivalent structural results.

### Phase 9 — Import, export, and interoperability mappings

**Status:** Planned

Deliverables:

- `OMI-SPEC-340` Import and Export Model;
- mappings to JATS XML, CSL JSON, BibTeX, RIS, Crossref, and DataCite where applicable;
- import-loss and export-loss reporting rules;
- round-trip expectations;
- treatment of unsupported and extension content;
- preservation-package guidance;
- mapping fixtures and compatibility reports.

Exit criterion:

> Transformation behaviour, unsupported constructs, and information loss are explicit, testable, and reportable rather than silent.

### Phase 10 — Capability and conformance testing

**Status:** Started

Completed deliverables:

- initial [Implementation Status Matrix](./implementation-status-matrix.md) covering all registered identifiers and the current evidence baseline.

Remaining deliverables:

- `OMI-SPEC-350` Capability and Conformance Model;
- named conformance classes;
- validator reference implementation;
- conformance test suite;
- test results from Open Manuscript Studio;
- at least one independent implementation or interoperability prototype where feasible;
- documented deviations and specification corrections;
- continuing evidence-based maintenance of the matrix.

Exit criterion:

> OMI 1.0 behaviour has been demonstrated through executable evidence rather than prose alone.

### Phase 11 — Review Candidate and public review

**Status:** Planned

Deliverables:

- complete Review Candidate specification suite;
- public issue process for normative review;
- identified review milestones;
- resolved, accepted, or explicitly deferred substantive comments;
- migration guidance from pre-1.0 Drafts;
- release notes and compatibility statement.

Exit criterion:

> No unresolved issue is known to prevent interoperable implementation of the defined OMI 1.0 core.

### Phase 12 — OMI 1.0 release

**Status:** Planned

Deliverables:

- Stable specification suite;
- canonical schemas and examples;
- conformance test release;
- versioned website publication;
- archived and reproducible release package;
- implementation-status report;
- governance and maintenance plan for the 1.x series.

Exit criterion:

> The governing process formally approves the suite as Stable and publishes a reproducible OMI 1.0 release.

### Phase 13 — Official translations

**Status:** Navigation completed; full document translation deferred

Completed:

- Hungarian navigation labels;
- German navigation labels;
- translated category titles and descriptions.

Deferred until the normative English suite is sufficiently stable:

- full Hungarian specification translations;
- full German specification translations;
- translation revision metadata;
- source-version synchronisation status;
- approved language-specific terminology lists;
- translation-drift checks.

Official translations remain informative unless a later governance decision explicitly assigns normative authority.

## 8. Immediate priorities

The next programme sequence is:

1. draft `OMI-SPEC-150`, **Identity and Contributor Model**;
2. draft `OMI-SPEC-160`, **Versioning and Change Model**;
3. reconcile remaining legacy identifier examples and canonical-path inconsistencies in governance documents;
4. migrate the active foundational Drafts to the canonical Specification Template;
5. define the Contribution and Decision Process;
6. define the Implementation and Conformance Policy;
7. begin publishing canonical schemas, fixtures, and requirement-to-implementation mappings identified by the Implementation Status Matrix.

These priorities complete the missing governance bridge between the current Draft suite and systematic model development.

## 9. Implementation status matrix

The initial [OMI Implementation Status Matrix](./implementation-status-matrix.md) is published and covers every registered specification identifier.

It records:

- identifier, version, lifecycle, and allocation state;
- specification-template migration status;
- machine-readable artefact and fixture status;
- Open Manuscript Studio implementation evidence;
- validator and conformance-test status;
- known deviations and primary gaps;
- independent implementation evidence;
- rules for advancing implementation-status claims.

The baseline distinguishes the following implementation states:

- not started;
- exploratory;
- partial;
- implemented;
- tested;
- conformant;
- not applicable;
- not verified.

The matrix must be updated when specification, schema, implementation, validator, test, or independent evidence changes. Specification maturity remains separate from implementation completeness: a complete implementation of a Draft does not make the specification Stable.

## 10. Repository and publication strategy

OMI maintains a separation of responsibilities:

- **OMI specifications** define normative models, schemas, conformance rules, and examples;
- **Open Manuscript Studio** provides a reference implementation and implementation feedback;
- **the OMI website** publishes public documentation and project information.

A future repository split should occur only when it reduces maintenance risk and preserves:

- authoritative versioning;
- permanent identifiers;
- canonical URLs;
- release automation;
- archived publication sets;
- cross-repository traceability.

## 11. Release criteria for OMI 1.0

OMI 1.0 must not be declared Stable until all of the following are true:

- the OMI 1.0 core specification set is explicitly defined;
- every normative specification has a permanent identifier and exact version;
- all active specifications use internally consistent terminology and metadata;
- canonical schemas and examples are published at stable locations;
- conformance classes and requirements are testable;
- validation and error behaviour are defined;
- compatibility and migration rules are documented;
- import, export, and information-loss behaviour are explicit;
- security, privacy, accessibility, internationalisation, and preservation considerations have been reviewed;
- Open Manuscript Studio has been tested against the conformance suite;
- independent implementation or interoperability evidence exists for the central behaviour;
- all known critical interoperability issues are resolved or explicitly scoped out;
- governance and maintenance procedures are active;
- the release is archived, reproducible, and publicly citable.

## 12. Operational maintenance

Routine dependency updates, security advisories, build-system maintenance, and deployment repairs are necessary project operations but are not independent roadmap phases.

The project should maintain:

- automated dependency monitoring;
- prompt review of security advisories;
- reproducible dependency lockfiles;
- build and link validation;
- documented supported Node.js and Docusaurus versions;
- separation of security maintenance from normative specification changes.

Operational maintenance must not silently alter OMI normative behaviour.

## 13. Work after 1.0

Potential post-1.0 work includes:

- discipline-specific profiles;
- citation-intent and citation-graph models;
- richer research-object packaging;
- collaborative event protocols;
- preservation certification profiles;
- additional official translations;
- extension and capability registries;
- broader independent implementation testing.

Post-1.0 development must preserve the compatibility commitments of the 1.x series or identify incompatible work as a future major version.

## 14. Long-term goal

The Open Manuscript Initiative aims to provide a common semantic language for scholarly manuscripts that can be implemented independently and used across the full research lifecycle.

Success will not be measured by whether every institution uses one OMI application. It will be measured by whether different applications and organisations can exchange, validate, review, publish, and preserve scholarly manuscripts without repeatedly reconstructing their meaning and structure.

## 15. Change history

| Version | Date | Summary |
|---|---|---|
| 0.2.1 | 2026-08-06 | Recorded publication of the initial Implementation Status Matrix, marked Phase 10 as started, and advanced the immediate programme priorities to the Identity and Contributor and Versioning and Change models. |
| 0.2.0 | 2026-08-06 | Replaced provisional identifiers with the canonical registry architecture; recorded completed governance, identifier migration, structural refactoring, and navigation translation work; added phase statuses, immediate priorities, operational maintenance, and updated OMI 1.0 release criteria. |
| 0.1.0 | 2026-08-06 | Initial roadmap defining the OMI 1.0 work programme. |

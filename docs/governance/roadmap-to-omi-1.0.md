---
title: Roadmap to OMI 1.0
sidebar_position: 2
description: Current programme, completed foundations, reference-implementation progress, active priorities, and release criteria for Open Manuscript Initiative 1.0.
---

# Roadmap to OMI 1.0

## Building an Open Standard for Scholarly Publishing

## Document metadata

| Field | Value |
|---|---|
| Document type | Governance and planning |
| Status | Draft |
| Version | 0.4.0 |
| Normative language | English |
| Last updated | 2026-08-18 |
| Planning horizon | OMI 1.0 |
| Authoritative identifier source | [OMI Specification Registry](./specification-registry.md) |
| Product implementation baseline | [Studio Implementation Status](./studio-implementation-status.md) |
| Integration implementation baseline | [Integration Implementation Status](../integrations/implementation-status.md) |

## 1. Purpose

This roadmap defines the work required to transform the Open Manuscript Initiative from an evolving project architecture into a coherent, implementable, testable and governable open standard for scholarly manuscripts.

It records both specification progress and reference-implementation evidence. These two dimensions are deliberately kept separate: a Studio feature may be operational before the corresponding OMI specification is conformant, and a specification may be mature before every reference feature is implemented.

The [OMI Specification Registry](./specification-registry.md) is authoritative for specification identifiers, titles, canonical paths, allocation states, lifecycle states and versions.

## 2. Strategic direction

OMI is not intended to become only another manuscript editor, journal platform or publishing workflow. Its objective is an implementation-independent semantic standard that can be adopted by authors, journals, publishers, repositories, libraries, editorial systems, conversion services and independently developed scholarly software.

Open Manuscript Studio is the primary reference implementation. It tests specifications in real author, reviewer, editor and publishing workflows, but it does not define normative meaning.

## 3. Progress summary

The programme has moved well beyond the initial documentation-audit stage. Governance, identifiers, documentation architecture and the first specification families are established, while the Studio now exercises substantially more of the intended lifecycle than the August 6 baseline recorded.

| Programme area | Status | Current summary |
|---|---|---|
| Documentation audit | **Completed** | Original English documentation was inventoried, classified and reorganised. |
| Governance foundation | **Largely completed** | Charter, lifecycle, versioning, style, terminology, registry, documentation architecture, specification template and code-signing policy are published. |
| Website/product synchronization | **Active and maintained** | The public Studio page and dated Studio status report now track implemented product capabilities separately from normative conformance. |
| Identifier migration | **Completed for active specifications** | Active specifications use the canonical `OMI-SPEC-*` allocation architecture. |
| Core semantic models | **In progress** | Identity/contributor and versioning/change models have substantive reference implementation evidence; validation, translation and collaboration remain incomplete at specification level. |
| Reference implementation | **Advanced alpha** | Structured editing, multilingual UI/help, server-backed accounts, peer review, OJS integration, imports/exports, publisher profiles, search, desktop builds and updater flow are present. |
| Peer review | **Operational implementation** | Double-blind review foundations, reviewer workspaces, editor review dashboard and externally assigned review handling are implemented. Formal specification conformance remains future work. |
| OJS integration | **Operational / configuration-dependent** | Signed launch, assignment context, metadata/file transfer, manuscript import and review hand-off are implemented. Full profile coverage and conformance remain incomplete. |
| OMP integration | **Specification only** | OMP Integration Profile v1 is documented; a complete production connector remains to be implemented and tested. |
| Identity integrations | **Configuration-dependent** | ORCID OAuth deployment infrastructure and ROR/bibliographic identity foundations exist. Production configuration is deployment-specific. |
| Integration platform | **Foundation implemented** | Integrations catalog, provider registry, provider authentication modes and DeepL configuration scaffolding are present. DeepL translation execution is not yet complete. |
| Multilingual product support | **Operational implementation** | Studio exposes 24 supported interface languages with localized help and reviewed translation overlays. Normative specification bodies remain English. |
| Import/export | **Substantive implementation** | DOCX import and broad publication/export targets are implemented, including JATS, HTML, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX-oriented outputs. |
| Desktop distribution | **Operational alpha** | Windows, Linux and macOS packages are built automatically; desktop update notification/installer flow is implemented. Code-signing work remains in progress. |
| Canonical schemas and conformance | **Not completed** | Versioned normative schemas, approved fixtures, validator behaviour and formal conformance suites remain major pre-1.0 deliverables. |
| Independent implementations | **Not yet verified** | Interoperability evidence beyond the primary reference implementation remains required for OMI 1.0 confidence. |

## 4. Completed foundation work

Published governance and architecture foundations include:

- [OMI Charter](./charter.md);
- [Architecture Audit](./architecture-audit.md);
- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [OMI Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md);
- [OMI Specification Template](./specification-template.md);
- [OMI Implementation Status Matrix](./implementation-status-matrix.md);
- [Studio Implementation Status](./studio-implementation-status.md);
- [Code Signing Policy](./code-signing-policy.md);
- [Integration Implementation Status](../integrations/implementation-status.md).

The documentation site also provides a canonical sidebar architecture, stable documentation routes, English/Hungarian/German site navigation and explicit separation between normative specification status and product implementation status.

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
| `OMI-SPEC-150` | Identity and Contributor Model | Active | Draft |
| `OMI-SPEC-160` | Versioning and Change Model | Active | Draft |
| `OMI-SPEC-170` | Translation Model | Reserved | Planned |
| `OMI-SPEC-180` | Validation Model | Reserved | Planned |
| `OMI-SPEC-190` | Collaboration and Permission Model | Reserved | Planned |

### 5.2 Scholarly workflow, references and publishing

| Identifier | Specification | Allocation | Current state |
|---|---|---|---|
| `OMI-SPEC-200` | Review Model | Active | Draft |
| `OMI-SPEC-210` | Citation Model | Active | Draft |
| `OMI-SPEC-220` | Bibliographic Record Model | Active | Draft |
| `OMI-SPEC-221` | Reference Library and Registry Architecture | Active | Draft |
| `OMI-SPEC-230` | Publishing Model | Active | Draft |
| `OMI-SPEC-240` | Rendering and Publication Profile Model | Reserved | Planned |

### 5.3 Platform, exchange and conformance

| Identifier | Specification | Allocation | Current state |
|---|---|---|---|
| `OMI-SPEC-300` | Plugin Architecture | Active | Draft |
| `OMI-SPEC-310` | Platform API | Active | Draft |
| `OMI-SPEC-320` | File Format | Active | Draft |
| `OMI-SPEC-330` | Container Architecture | Active | Draft |
| `OMI-SPEC-340` | Import and Export Model | Reserved | Planned |
| `OMI-SPEC-350` | Capability and Conformance Model | Reserved | Planned |

The registry remains authoritative when this summary and the registry differ.

## 6. Reference implementation baseline

Open Manuscript Studio now provides evidence across much more of the scholarly workflow than the initial alpha editor baseline.

### 6.1 Authoring and document handling

Current implementation evidence includes structured rich-text editing, semantic manuscript sections and blocks, stable identifiers, revision history, notes/citations, document navigation, structured search/replace, DOCX import and portable/local-first desktop storage.

### 6.2 Identity and accounts

Server-backed account and profile infrastructure exists alongside OMI agent/contributor separation. ORCID OAuth deployment support and ROR-related affiliation/identity foundations are present, subject to deployment configuration.

### 6.3 Multilingual operation

The Studio supports 24 interface languages, localized help and multilingual manuscript workflows. This is product implementation evidence; it does not mean the full normative OMI specification suite has official translations.

### 6.4 Review and editorial workflow

Double-blind peer review foundations are implemented with authenticated review APIs, anonymity projections, reviewer workspaces, editor-facing review dashboards and support for externally assigned review contexts. These capabilities materially advance the reference implementation beyond the earlier exploratory review baseline.

### 6.5 Publishing-platform integration

OJS integration is the most mature external workflow integration. It includes signed launch assertions, external assignment context, metadata/file access, manuscript import and review workflow hand-off. OJS remains authoritative for journal workflow, while Studio remains authoritative for Studio-native manuscript and review state.

OMP has a documented v1 profile but does not yet have equivalent verified end-to-end implementation status.

### 6.6 Publishing outputs

The Studio supports multiple publication-oriented outputs and profiles, including JATS XML, HTML5, DOCX, EPUB, PDF and several DTP-oriented formats. This implementation must still be mapped to formal import/export and conformance requirements before OMI 1.0.

### 6.7 Desktop distribution

Tauri desktop builds are produced for Windows, Linux and macOS. The desktop updater flow is implemented. Windows code-signing preparation is underway; unsigned or not-yet-reputation-established builds may still trigger platform warnings.

## 7. OMI 1.0 objectives

The OMI 1.0 programme must:

1. maintain a stable and understandable specification hierarchy;
2. preserve one canonical document and route for each normative concept;
3. use permanent identifiers consistently across prose, schemas, examples and tests;
4. complete missing translation, validation, collaboration and rendering models;
5. migrate active Draft specifications to the canonical specification structure;
6. publish canonical machine-readable schemas and controlled vocabularies;
7. provide valid, invalid, minimal, comprehensive, multilingual and discipline-sensitive examples;
8. define explicit conformance classes and testable requirements;
9. document compatibility, migration, error handling and information-loss behaviour;
10. map substantive Studio behaviour to specification requirements without treating implementation as normative authority;
11. validate specifications through reference and independent implementations;
12. establish governance capable of maintaining the standard after version 1.0.

## 8. Programme phases

### Phase 1 — Documentation audit

**Status:** Completed

The original documentation was inventoried, classified and reorganised. Identifier conflicts, duplicates and missing areas were identified and documented.

### Phase 2 — Governance foundation

**Status:** Largely completed

Core governance, lifecycle, versioning, terminology, registry, style and documentation architecture are published.

Remaining priorities include a more explicit contribution/decision process, implementation/conformance policy and formal approval rules for later lifecycle transitions.

### Phase 3 — Structural refactoring and status hygiene

**Status:** Largely completed; continuous maintenance required

Canonical routes, specification identifiers and documentation categories are established. Product implementation status, integration status and normative specification status are now documented separately.

Remaining work includes automated checks for stale status dates, broken links, duplicate identifiers and registry/path drift.

### Phase 4 — Core model completion

**Status:** In progress

Identity/contributor and versioning/change implementation evidence is substantial. Next specification work should consolidate requirements for working-state batching, checkpoint semantics, tombstones, state digests, stable anchoring, validation and explicit requirement mapping.

Exit criterion: a minimum semantic manuscript, its objects, contributors, identifiers, versions and changes can be represented and validated without relying on undocumented implementation behaviour.

### Phase 5 — Workflow, permissions and multilingual semantics

**Status:** Implementation ahead of specification in several areas

Peer review, roles and multilingual product behaviour now exist in Studio, while Translation and Collaboration/Permission specifications remain incomplete or reserved.

Priority: use implementation evidence to draft precise, implementation-independent requirements for review anonymity, role boundaries, translation relationships, divergence/synchronization and auditability.

Exit criterion: collaboration, review, annotation, permission and multilingual relationships are representable as structured, version-aware scholarly objects.

### Phase 6 — Bibliography and citation completion

**Status:** Partially completed

Citation and bibliographic models exist and Studio contains citation/bibliographic lookup foundations.

Priority: separate citation occurrences from bibliographic records, define source provenance, identifier reconciliation, deduplication, caching and reference-library reuse.

Exit criterion: a work can be added once to a manuscript-level library and cited repeatedly without duplicating the bibliographic record.

### Phase 7 — Validation, rendering and publication profiles

**Status:** Product implementation partially ahead of specification

Publishing profiles and broad export behaviour exist in Studio, while formal Validation and Rendering/Publication Profile specifications remain incomplete.

Priority: define machine-readable validation reports, profile identity/inheritance, semantic-source preservation, errors/warnings and deterministic output requirements.

Exit criterion: implementations can determine whether a manuscript satisfies a declared profile and generate outputs without silently changing the semantic source.

### Phase 8 — Canonical schemas and examples

**Status:** Planned / critical pre-1.0 work

Deliverables include versioned canonical JSON Schemas, stable schema identifiers, authority rules, valid/invalid fixtures, multilingual examples, reference-rich examples and version-history examples.

Exit criterion: independent implementations validate the same fixtures and obtain equivalent structural results.

### Phase 9 — Import, export and interoperability mappings

**Status:** Reference implementation active; normative model incomplete

Studio already exercises DOCX import and multiple publishing exports. `OMI-SPEC-340` must convert this practical experience into explicit transformation rules, loss reporting, round-trip expectations and mapping fixtures.

Priority mappings include JATS XML, HTML, DOCX, EPUB, CSL JSON/BibTeX/RIS where applicable, Crossref/DataCite metadata, OJS exchange and preservation packages.

Exit criterion: unsupported constructs, omitted history and information loss are explicit and testable rather than silent.

### Phase 10 — Integration profiles and interoperability

**Status:** OJS operational; OMP and other profiles incomplete

The platform-neutral integration architecture and OJS/OMP profiles exist. OJS has substantive real implementation evidence; OMP remains specification-first.

Priorities:

- harden OJS round-trip and review integration;
- implement and test OMP end to end;
- define capability discovery/version negotiation;
- formalize provider authentication modes;
- mature cloud, identity, translation and repository adapters;
- preserve strict no-cross-database coupling.

Exit criterion: at least two independently meaningful external workflow integrations demonstrate the same platform-neutral OMI principles.

### Phase 11 — Capability and conformance testing

**Status:** Started at evidence-report level; formal suite not yet available

The Implementation Status Matrix and Studio status reports provide evidence baselines, but focused unit tests do not constitute OMI conformance testing.

Deliverables include `OMI-SPEC-350`, named conformance classes, validator reference implementation, formal test suite, requirement-mapped results and documented deviations.

Exit criterion: OMI 1.0 behaviour is demonstrated through executable, versioned evidence rather than prose alone.

### Phase 12 — Independent implementation and public review

**Status:** Planned

The project should seek external implementers, PKP/community review and interoperability prototypes before declaring OMI 1.0 stable.

Deliverables include Review Candidate documents, public normative review, resolved substantive comments, migration guidance and implementation reports.

### Phase 13 — OMI 1.0 release

**Status:** Planned

Deliverables:

- Stable specification suite;
- canonical schemas and examples;
- conformance test release;
- versioned website publication;
- archived and reproducible release package;
- implementation-status report;
- governance and maintenance plan for the 1.x series.

Exit criterion: the governing process formally approves the suite as Stable and publishes a reproducible OMI 1.0 release.

### Phase 14 — Official translations

**Status:** Product localization advanced; normative document translation deferred

Studio interface/help localization and website navigation demonstrate multilingual implementation capability. Full official translations of normative specifications should follow stabilization of the English 1.0 suite to avoid maintaining divergent normative texts during rapid Draft evolution.

## 9. Immediate priorities

The highest-value next steps are:

1. finish production hardening of server-side persistence and the remaining database integration work;
2. map operational peer-review behaviour back to `OMI-SPEC-200` requirements;
3. harden OJS synchronization and document verified compatibility boundaries;
4. implement the OMP connector against the published profile;
5. complete Translation, Validation and Collaboration/Permission specification work;
6. publish the first canonical versioned schema/fixture set;
7. formalize Import/Export and Rendering/Profile semantics from the existing Studio implementation;
8. complete Windows release-signing integration after signing-service approval;
9. continue integration-provider work while keeping vendor credentials and authentication models isolated;
10. recruit at least one independent implementation or interoperability prototype before OMI 1.0.

## 10. Release criteria for OMI 1.0

OMI 1.0 MUST NOT be declared Stable merely because Open Manuscript Studio is feature-rich.

A 1.0 release requires, at minimum:

- a complete defined core specification scope;
- stable permanent identifiers and canonical routes;
- canonical machine-readable schemas;
- explicit versioning and compatibility rules;
- validation semantics and conformance classes;
- normative import/export behaviour for declared mappings;
- executable conformance fixtures and tests;
- documented implementation evidence from Studio;
- meaningful independent implementation or interoperability evidence;
- public review with no unresolved issue known to prevent interoperable implementation;
- reproducible release artifacts and post-1.0 governance.

## 11. Status maintenance policy

This roadmap should be updated when programme priorities or release criteria change. Fast-moving product details should primarily be updated in [Studio Implementation Status](./studio-implementation-status.md) and [Integration Implementation Status](../integrations/implementation-status.md), then reflected here when they materially affect the OMI 1.0 programme.

This separation is intentional: the roadmap describes where the standard is going, while the dated status reports describe what the current reference implementation can actually do.

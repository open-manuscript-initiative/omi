---
title: OMI Architecture Audit
description: Audit of the current Open Manuscript Initiative specification set and documentation architecture.
sidebar_position: 3
---

# Open Manuscript Initiative Architecture Audit

## Document status

| Field | Value |
| --- | --- |
| Document type | Governance / architecture audit |
| Status | Draft |
| Version | 0.1 |
| Scope | English normative and technical documentation |
| Intended audience | Specification editors, implementers, reviewers, and contributors |

## Executive summary

The Open Manuscript Initiative already contains the foundations of a substantial scholarly-document standard. The repository includes conceptual foundations, semantic models, workflow models, exchange specifications, publishing concepts, and implementation-oriented material.

The principal weakness is no longer a lack of ideas. It is architectural fragmentation.

The documentation has grown incrementally, and several problems now limit its use as a coherent specification suite:

- only a small subset of existing documents is exposed in the website navigation;
- specification identifiers, versions, and lifecycle states are inconsistent;
- the relationship between normative specifications and informative guidance is not always explicit;
- some documents overlap or duplicate one another;
- dependencies between models are rarely declared;
- multiple required models remain implicit rather than formally specified;
- the relationship between the OMI standard and Open Manuscript Studio is not systematically documented;
- no canonical schema and conformance framework yet binds the prose specifications to machine-verifiable behaviour.

The recommended next phase is a controlled specification refactoring programme. Existing material should be preserved where valid, but reorganised into a stable hierarchy with permanent identifiers, common metadata, explicit dependencies, implementation status, and normative schemas.

## Audit objectives

This audit has five objectives:

1. inventory the present documentation;
2. distinguish existing, partial, duplicated, obsolete, and missing material;
3. define a target specification architecture;
4. identify blocking work for OMI 1.0;
5. establish a safe migration sequence that avoids breaking published links and ongoing implementation work.

## Audit principles

The audit applies the following principles.

### Preserve useful work

Existing documents should not be discarded merely because their structure is inconsistent. Valid concepts should be consolidated into canonical specifications.

### Separate semantics from implementation

The OMI specification defines interoperable scholarly objects and behaviours. Open Manuscript Studio demonstrates one implementation but must not become the normative definition of the standard.

### Prefer stable identifiers over file paths

A specification identifier must remain stable even if a filename, title, or navigation category changes.

### Make conformance testable

Normative prose should eventually map to schemas, validation rules, examples, and conformance tests.

### Refactor before translating

The English specification suite should be stabilised before complete Hungarian and German translations are produced.

## Current documentation inventory

The current repository contains material in several functional groups.

### Foundations

Known foundational documents include:

- Vision
- Core Principles
- Architecture Map
- Scholarly Object Model

These documents establish the purpose and general architecture of OMI. They are essential, but their normative status and relationships require clarification.

### Core semantic specifications

Current core material includes:

- Document Model
- Metadata Model
- Anchor Model
- Annotation Model
- Citation Model
- Bibliographic Record Model
- Reference Library and Registry Architecture

Together these describe a substantial portion of the semantic manuscript model.

### Workflow and scholarly-process specifications

Existing or partially developed material includes:

- Review Model
- Publishing Model
- collaboration concepts embodied in Open Manuscript Studio
- translation concepts embodied in the multilingual architecture

The Review Model exists as a document, while collaboration and translation require formal standalone specifications.

### Exchange and packaging specifications

Existing documents include:

- File Format
- Container Architecture
- API

These provide an initial basis for interchange and integration but require alignment with the canonical object model and future JSON Schema.

### Extensibility specifications

Existing documents include:

- Plugin Architecture

A Capability Model is still needed to define how implementations advertise optional and required support.

### Governance material

Governance work now includes or is planned to include:

- OMI Charter
- Roadmap to OMI 1.0
- this Architecture Audit
- Specification Lifecycle
- Versioning Policy
- Specification Style Guide
- Terminology and Glossary

## Findings

## 1. Navigation exposes only a fraction of the specification set

The website sidebar currently presents only a small core of the documents stored in the repository. Several existing specifications cannot be reached through normal documentation navigation.

This creates three risks:

- contributors may assume that hidden documents are obsolete;
- readers may receive an incomplete picture of the architecture;
- duplicate work may be created because existing material is difficult to discover.

### Required action

After content review, the sidebar should be reorganised around stable architectural categories rather than a flat list of files.

## 2. The Scholarly Object Model is duplicated

The repository contains two Scholarly Object Model paths:

- `docs/specifications/scholarly-object-model.md`
- `docs/specifications/core/scholarly-object-model.md`

The coexistence of two apparently canonical documents creates ambiguity about which model governs implementations.

### Required action

The two documents must be compared section by section. Valid content should be merged into one canonical `OMI-SPEC-001` document. The retired path should either redirect to the canonical page or contain an explicit supersession notice until redirects are safely established.

## 3. Specification identifiers are incomplete and potentially unstable

Some documents already use identifiers such as `OMI-SPEC-005`, while others do not. Without a registry, identifier reuse or accidental renumbering is possible.

### Required action

Create a specification registry that permanently assigns identifiers. Identifiers must never be silently reused, even when a specification is withdrawn.

A provisional series is:

| Identifier | Specification | Current state |
| --- | --- | --- |
| OMI-SPEC-001 | Scholarly Object Model | Existing, duplicated; consolidation required |
| OMI-SPEC-002 | Document Model | Existing; review required |
| OMI-SPEC-003 | Metadata Model | Existing; review required |
| OMI-SPEC-004 | Anchor Model | Existing; review required |
| OMI-SPEC-005 | Citation Model | Existing; revision in progress |
| OMI-SPEC-006 | Bibliographic Record Model | Draft prepared |
| OMI-SPEC-007 | Reference Library and Registry Architecture | Draft prepared |
| OMI-SPEC-008 | Validation Model | Missing |
| OMI-SPEC-009 | Versioning and Change Model | Missing |
| OMI-SPEC-010 | Identity and Contributor Model | Missing |
| OMI-SPEC-011 | Collaboration and Permission Model | Missing |
| OMI-SPEC-012 | Translation Model | Missing |
| OMI-SPEC-013 | Rendering and Publication Profile Model | Missing |
| OMI-SPEC-014 | Import and Export Model | Missing |
| OMI-SPEC-015 | Capability and Conformance Model | Missing |

This numbering is provisional until the registry is formally adopted.

## 4. Lifecycle states are not governed

Documents use labels such as `Draft`, but the meaning of those labels is not defined. It is therefore unclear whether a draft is exploratory prose, an implementable candidate, or a document awaiting editorial review.

### Required action

Adopt a common lifecycle:

1. Exploratory
2. Draft
3. Review Candidate
4. Implementation Candidate
5. Stable
6. Deprecated
7. Superseded

Each state must have entry and exit criteria.

## 5. Normative and informative content are mixed

Several documents combine architectural requirements, examples, future ideas, explanatory prose, and implementation suggestions without marking their authority.

### Required action

Each specification must clearly distinguish:

- normative requirements;
- informative explanation;
- non-binding examples;
- deferred future work;
- implementation notes.

Normative requirements should use consistent terms such as MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY, with meanings defined by the specification style guide.

## 6. Dependencies are implicit

The model suite forms a dependency graph, but those dependencies are not systematically recorded.

For example:

- Citation Model depends on Scholarly Object Model, Anchor Model, and Bibliographic Record Model;
- Annotation Model depends on Anchor Model;
- Review Model depends on Annotation Model, Identity and Contributor Model, and Collaboration and Permission Model;
- Publishing Model depends on Document Model, Metadata Model, Citation Model, Rendering Profiles, and Validation Model.

### Required action

Every specification should declare:

- Depends on
- Used by
- Related specifications
- Supersedes
- Superseded by

A machine-readable specification registry may later generate these relationships automatically.

## 7. Validation is referenced but not centrally defined

Many documents mention validation, but there is no shared Validation Model defining error classes, validation phases, reports, profiles, or conformance levels.

### Required action

Create `OMI-SPEC-008: Validation Model` covering:

- schema validation;
- structural validation;
- metadata validation;
- identifier validation;
- bibliographic validation;
- cross-object integrity;
- publication-profile validation;
- errors, warnings, and informational messages;
- machine-readable validation reports;
- extensible validation rule identifiers.

## 8. Versioning and change semantics are missing

The repository and Studio both imply versioned scholarly objects, but no normative model defines revisions, branches, accepted changes, published states, or object-level provenance.

### Required action

Create `OMI-SPEC-009: Versioning and Change Model` covering:

- manuscript versions;
- object revisions;
- change operations;
- authorship and timestamps;
- comparisons and diffs;
- accepted and rejected changes;
- immutable published snapshots;
- migration between schema versions.

## 9. Identity and contributor semantics are incomplete

Metadata can name contributors, but a reusable identity model is required for persons, organisations, identifiers, affiliations, roles, and historical name forms.

### Required action

Create `OMI-SPEC-010: Identity and Contributor Model` covering:

- persons and organisations;
- ORCID and ROR;
- local identities;
- names and name variants;
- affiliations with validity periods;
- contributor order;
- CRediT and extensible roles;
- corresponding-author status;
- editorial and translation contributions.

## 10. Collaboration concepts exist in code but not in the standard

Open Manuscript Studio already contains workspace roles and invitations, but these concepts are not yet formalised as implementation-independent OMI semantics.

### Required action

Create `OMI-SPEC-011: Collaboration and Permission Model` covering:

- workspaces;
- membership;
- owner, editor, co-author, reviewer, translator, and viewer roles;
- invitations;
- permission scopes;
- object-level and section-level access;
- audit events;
- separation of authentication from manuscript portability.

## 11. Multilingual manuscripts require a Translation Model

The website and Studio support multiple languages, but the relationship between an original text and translated scholarly objects is not yet normatively described.

### Required action

Create `OMI-SPEC-012: Translation Model` covering:

- source and target languages;
- aligned objects and anchors;
- translation status;
- stale-translation detection;
- translator notes;
- multiple target languages;
- partial translations;
- publication of parallel and independent language versions.

## 12. Rendering and publication profiles are not sufficiently separated

The architecture correctly treats semantics and presentation as separate layers, but a formal profile model is required to specify how journals and publishers map semantic content to outputs.

### Required action

Create `OMI-SPEC-013: Rendering and Publication Profile Model` covering:

- publication profiles;
- output targets;
- citation and note rendering;
- typographic and layout rules;
- required and optional sections;
- journal and publisher extensions;
- accessible HTML, PDF, EPUB, and XML output;
- deterministic rendering inputs.

## 13. Import and export behaviour is underspecified

The File Format and Publishing Model do not alone define transformation quality, unsupported content, round trips, or conversion reports.

### Required action

Create `OMI-SPEC-014: Import and Export Model` covering:

- DOCX, Markdown, JATS, HTML, CSL JSON, BibTeX, and RIS mappings;
- lossless and lossy transformations;
- conversion warnings;
- unsupported elements;
- source provenance;
- round-trip expectations;
- extension preservation;
- export profiles.

## 14. Conformance levels and advertised capabilities are missing

Not every implementation will support every optional model or output. A common mechanism is needed to declare support without fragmenting the standard.

### Required action

Create `OMI-SPEC-015: Capability and Conformance Model` covering:

- core conformance;
- optional capabilities;
- profile conformance;
- extension declarations;
- schema versions;
- import and export capabilities;
- validation capabilities;
- machine-readable implementation manifests.

## 15. The prose specifications are not yet bound to a canonical schema

OMI cannot become reliably interoperable while the data structure exists only in prose and examples.

### Required action

Develop a versioned canonical schema suite, beginning with JSON Schema. The schema work should include:

- stable schema identifiers;
- reusable definitions;
- strict and extension-aware validation modes;
- minimal examples;
- complete examples;
- invalid fixtures;
- migration fixtures;
- automated conformance tests.

## 16. Implementation status is not visible

Readers cannot easily determine whether a model is conceptual, partially implemented, or exercised by production code.

### Required action

Create an Implementation Status page with evidence-based labels:

- Not started
- Exploratory
- Partial
- Implemented experimentally
- Implemented in reference software
- Conformance tested

The matrix must avoid claiming conformance where only a similarly named feature exists.

## 17. Terminology requires central governance

Terms such as manuscript, document, scholarly object, reference, citation, bibliographic record, annotation, revision, and publication may be interpreted differently across disciplines and software systems.

### Required action

Create a normative terminology and glossary document. Specifications should link to shared definitions rather than redefine central terms inconsistently.

## Target documentation architecture

The recommended documentation structure is:

```text
Introduction
├── Vision
├── Core Principles
└── Architecture Map

Foundations
├── Terminology and Glossary
├── Scholarly Object Model
├── Document Model
├── Metadata Model
└── Identity and Contributor Model

Editing and Collaboration
├── Anchor Model
├── Annotation Model
├── Review Model
├── Collaboration and Permission Model
├── Versioning and Change Model
└── Translation Model

Bibliography and Citations
├── Bibliographic Record Model
├── Citation Model
├── Reference Library and Registry Architecture
└── Citation Graph (future)

Publishing and Validation
├── Validation Model
├── Rendering and Publication Profile Model
└── Publishing Model

Exchange and Packaging
├── File Format
├── Container Architecture
├── Import and Export Model
└── API

Extensibility and Conformance
├── Plugin Architecture
├── Capability and Conformance Model
└── Implementation Status

Governance
├── OMI Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Specification Registry
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Translation Policy
```

## Standard specification metadata

Every normative specification should include a common metadata block.

Minimum fields:

```text
Identifier
Title
Version
Status
Document type
Editors
Last updated
Normative language
Depends on
Used by
Related specifications
Implementation status
Schema reference
Supersedes
Superseded by
```

Docusaurus front matter should support navigation and presentation, but the stable specification metadata should also appear visibly in the document.

## Repository restructuring strategy

A large file move should not be performed until the content audit and identifier registry are accepted. Premature movement would create broken links and merge conflicts without resolving conceptual ambiguity.

The recommended sequence is:

### Phase 1 — Governance foundation

- merge the Charter;
- merge the Roadmap to OMI 1.0;
- adopt this Architecture Audit;
- create the Specification Lifecycle, Versioning Policy, Style Guide, and Terminology documents.

### Phase 2 — Canonical inventory

- assign permanent identifiers;
- identify canonical and superseded documents;
- consolidate the duplicated Scholarly Object Model;
- document redirects and retained aliases.

### Phase 3 — Navigation refactoring

- reorganise the sidebar;
- expose reviewed existing specifications;
- add status labels where useful;
- preserve stable public URLs wherever possible.

### Phase 4 — Missing core models

- Validation Model;
- Versioning and Change Model;
- Identity and Contributor Model;
- Collaboration and Permission Model;
- Translation Model.

### Phase 5 — Publishing and exchange completion

- Rendering and Publication Profile Model;
- Import and Export Model;
- Capability and Conformance Model;
- review and align File Format, Container Architecture, API, Publishing Model, and Plugin Architecture.

### Phase 6 — Schema and conformance

- canonical JSON Schema;
- example corpus;
- invalid fixtures;
- automated validation;
- implementation capability manifests;
- conformance test suite.

### Phase 7 — Internationalisation

- freeze an English release candidate;
- generate translation catalogues and document copies;
- translate into Hungarian and German;
- publish translation status and divergence warnings;
- establish a process for synchronising later changes.

## Priority classification

### Critical before OMI 1.0

- canonical Scholarly Object Model;
- specification registry and lifecycle;
- Document, Metadata, Anchor, Annotation, Citation, and Bibliographic models aligned;
- Validation Model;
- Versioning and Change Model;
- Identity and Contributor Model;
- canonical JSON Schema;
- conformance definitions;
- complete normative examples.

### High priority

- Collaboration and Permission Model;
- Translation Model;
- Rendering and Publication Profile Model;
- Import and Export Model;
- implementation status matrix;
- terminology and glossary.

### Important but may follow an initial implementation candidate

- Citation Graph;
- advanced distributed registry protocols;
- discipline-specific profiles;
- formal extension registry;
- additional official translations beyond Hungarian and German.

## Risks

### Scope expansion

OMI covers a broad scholarly lifecycle. Without staged release criteria, the project could indefinitely postpone a stable core.

**Mitigation:** define a minimal OMI 1.0 conformance core and place optional capabilities into profiles.

### Documentation-code divergence

Studio development may evolve faster than the prose specifications.

**Mitigation:** require implementation-status updates and conformance fixtures with significant model changes.

### Identifier instability

Renaming documents before adopting a registry could make external citations unreliable.

**Mitigation:** assign permanent identifiers first and preserve redirects or aliases.

### Translation drift

Translating unstable specifications would multiply maintenance work and create contradictory language versions.

**Mitigation:** translate only after an English review candidate is frozen, and visibly mark translation versions.

### Over-centralisation of registries

A reference library architecture could accidentally imply that OMI requires a single central bibliographic authority.

**Mitigation:** retain federated resolution, source provenance, offline records, and implementation independence as explicit architectural principles.

## Completion criteria for the refactoring programme

The architecture refactoring phase is complete when:

- every active specification has one canonical location;
- every normative specification has a permanent identifier;
- lifecycle states and version rules are adopted;
- the sidebar represents the complete reviewed architecture;
- dependencies and related specifications are declared;
- duplicated specifications are consolidated;
- missing core models are drafted;
- canonical schemas and examples exist;
- implementation status is documented without unsupported claims;
- English documentation reaches a review candidate suitable for translation.

## Recommended immediate next documents

Following this audit, the next governance documents should be produced in this order:

1. Specification Lifecycle
2. Specification Versioning Policy
3. Specification Style Guide
4. Terminology and Glossary
5. Specification Registry

Once those are adopted, the duplicate model consolidation and complete sidebar refactoring can proceed safely.

## Conclusion

The Open Manuscript Initiative has progressed beyond an exploratory collection of ideas. It already contains the basis of a comprehensive scholarly manuscript architecture.

The next challenge is disciplined consolidation.

A stable OMI 1.0 requires a governed specification suite, not merely additional documents. Permanent identifiers, explicit lifecycle states, canonical models, machine-verifiable schemas, declared dependencies, and transparent implementation status are therefore the immediate architectural priorities.

This audit provides the working plan for that transition.

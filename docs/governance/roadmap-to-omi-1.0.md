---
title: Roadmap to OMI 1.0
sidebar_position: 2
---

# Roadmap to OMI 1.0

## Building an Open Standard for Scholarly Publishing

| Field | Value |
| --- | --- |
| Status | Draft |
| Version | 0.1 |
| Document type | Governance and planning |
| Normative language | English |

## Purpose

This roadmap defines the work required to transform the Open Manuscript Initiative from an evolving project architecture into a coherent, implementable, and governable open standard for scholarly manuscripts.

The roadmap separates the standard from its implementations, identifies the principal specification groups, establishes the expected maturity path, and defines the deliverables required before OMI 1.0 can be considered stable.

## Strategic direction

OMI is not intended to become only another manuscript editor, journal platform, or publishing workflow. Its long-term objective is to define an implementation-independent semantic standard that can be adopted by journals, publishers, repositories, universities, libraries, preservation services, and software vendors.

Open Manuscript Studio is the primary reference implementation. It tests and demonstrates the specifications, but it does not define them.

## Current state

The project already contains foundational work in areas including:

- scholarly objects and manuscript structure;
- metadata and stable anchors;
- annotations and review concepts;
- citations and bibliographic records;
- manuscript-level reference libraries;
- publishing, file-format, container, API, and plugin concepts;
- a multilingual documentation website;
- an early reference implementation in Open Manuscript Studio.

The documentation has grown organically. Before OMI 1.0, it requires consolidation, stable identifiers, consistent terminology, explicit conformance rules, machine-readable schemas, examples, and implementation testing.

## Objectives

The OMI 1.0 programme has the following objectives:

1. establish a stable and understandable specification hierarchy;
2. remove duplicate, obsolete, and contradictory documentation;
3. assign permanent identifiers to normative specifications;
4. define a common specification lifecycle and versioning policy;
5. standardise terminology and normative language;
6. define missing core models and cross-model dependencies;
7. publish canonical machine-readable schemas;
8. provide valid, invalid, and discipline-specific examples;
9. define conformance and interoperability expectations;
10. validate the specifications through independent or reference implementations;
11. publish stable English documentation before translating the full suite;
12. establish governance capable of maintaining the standard after version 1.0.

## Target specification architecture

### Foundations

Foundational documents explain the problem space, design principles, and overall architecture.

Planned documents include:

- Vision;
- Core Principles;
- Architecture Map;
- Terminology and Conceptual Model.

### Core models

Core models define the stable semantic foundation shared by all conforming implementations.

Planned specifications include:

- OMI-SPEC-001: Scholarly Object Model;
- OMI-SPEC-002: Document Model;
- OMI-SPEC-003: Metadata Model;
- Identity and Contributor Model;
- Versioning and Provenance Model.

### Editing and scholarly interaction

These specifications define addressability and interaction during the manuscript lifecycle.

Planned specifications include:

- Anchor Model;
- Annotation Model;
- Review Model;
- Collaboration and Permission Model;
- Translation Model.

### Bibliography and citations

These specifications define cited works and citation occurrences without reducing them to formatted strings.

Planned specifications include:

- Citation Model;
- Bibliographic Record Model;
- Reference Library and Registry Architecture;
- future Citation Intent and Citation Graph models.

### Validation and publishing

These specifications define how manuscripts are checked and transformed for publication.

Planned specifications include:

- Validation Model;
- Rendering Profile Model;
- Publishing Model;
- Publication and Preservation Package profiles.

### Exchange and packaging

These specifications define portable representation and interoperability.

Planned specifications include:

- canonical OMI File Format;
- Container Architecture;
- Import and Export Model;
- API and event interfaces;
- mappings to external formats and standards.

### Extensibility and platform integration

These specifications define controlled extension without fragmenting the core standard.

Planned specifications include:

- Plugin Architecture;
- Capability Model;
- Extension namespaces and registration rules.

### Governance

Governance documents define how the specification suite is maintained.

Planned documents include:

- OMI Charter;
- Specification Lifecycle;
- Versioning Policy;
- Specification Style Guide;
- Terminology Policy;
- Contribution and Decision Process;
- Implementation and Conformance Policy.

## Permanent identifiers

Every normative specification receives a permanent identifier in the form:

```text
OMI-SPEC-NNN
```

An identifier remains stable even if the specification title, filename, or documentation location changes. An identifier must not be reassigned to an unrelated specification.

The final identifier registry will be published as part of the governance documentation. Existing provisional identifiers will be audited before the registry is frozen.

## Specification lifecycle

Each specification progresses through the lifecycle defined by the OMI Charter:

1. Exploratory;
2. Draft;
3. Review Candidate;
4. Implementation Candidate;
5. Stable;
6. Deprecated;
7. Superseded.

Moving a specification to a later stage requires increasingly strong evidence of completeness, internal consistency, implementability, and interoperability.

## Common specification structure

Each normative specification should contain, where applicable:

- permanent identifier and title;
- version and lifecycle status;
- editors or maintainers;
- normative or informative classification;
- abstract and scope;
- terminology;
- requirements expressed with consistent normative keywords;
- data model and invariants;
- dependencies and related specifications;
- conformance requirements;
- schema references;
- examples and counterexamples;
- import, export, or mapping considerations;
- accessibility, privacy, security, and preservation considerations;
- implementation status;
- unresolved issues and future work;
- change history.

## Work programme

### Phase 1 — Documentation audit

Deliverables:

- complete inventory of English documentation;
- classification of each document as current, partial, obsolete, duplicate, or missing;
- identification of conflicting terminology and specification identifiers;
- list of broken or missing internal references;
- recommended canonical location for every retained document;
- architecture audit report.

Exit criterion: every existing English document has a recorded disposition.

### Phase 2 — Governance foundation

Deliverables:

- OMI Charter;
- specification lifecycle policy;
- versioning and compatibility policy;
- normative writing and style guide;
- permanent identifier registry;
- contribution and decision process.

Exit criterion: future specifications can be reviewed and advanced through a documented process.

### Phase 3 — Structural refactoring

Deliverables:

- coherent repository and sidebar hierarchy;
- removal or redirection of duplicate documents;
- consolidation of the duplicate Scholarly Object Model files;
- consistent front matter and metadata;
- corrected internal cross-references;
- specification index.

Exit criterion: each concept has one canonical document and one canonical route.

### Phase 4 — Core model completion

Deliverables:

- stable drafts of the Scholarly Object, Document, Metadata, Anchor, and Identity models;
- explicit object identifiers and extension rules;
- versioning and provenance model;
- model dependency map.

Exit criterion: the minimum semantic manuscript can be represented without relying on undocumented implementation behaviour.

### Phase 5 — Workflow and interaction models

Deliverables:

- Annotation Model;
- Review Model;
- Collaboration and Permission Model;
- Translation Model;
- audit and change-event concepts.

Exit criterion: collaboration, review, and multilingual relationships are representable as structured objects.

### Phase 6 — Bibliography and citation completion

Deliverables:

- Citation Model;
- Bibliographic Record Model;
- Reference Library and Registry Architecture;
- deduplication and source-provenance rules;
- import and export mappings for common bibliographic formats;
- reference-resolution examples.

Exit criterion: a work can be added once to a manuscript library and cited repeatedly through distinct citation occurrences.

### Phase 7 — Validation and publication models

Deliverables:

- Validation Model;
- machine-readable validation report format;
- Rendering Profile Model;
- Publishing Model;
- profile-specific requirements and error classifications.

Exit criterion: implementations can determine whether a manuscript satisfies a declared profile and can generate publication outputs without changing the semantic source.

### Phase 8 — Canonical schema and examples

Deliverables:

- versioned canonical JSON Schema;
- stable schema URLs;
- minimal valid manuscript;
- full scholarly article example;
- multilingual example;
- reference-rich example;
- invalid examples for conformance testing;
- schema compatibility and migration rules.

Exit criterion: independent implementations can validate the same examples and obtain equivalent results.

### Phase 9 — Interoperability mappings

Deliverables:

- documented mappings to JATS XML, CSL JSON, BibTeX, RIS, Crossref, and DataCite where applicable;
- import-loss and export-loss reporting rules;
- round-trip expectations;
- treatment of unsupported or extension content;
- preservation package guidance.

Exit criterion: transformation behaviour and information loss are explicit rather than silent.

### Phase 10 — Implementation and conformance testing

Deliverables:

- conformance test suite;
- validator reference implementation;
- implementation matrix;
- test results from Open Manuscript Studio;
- at least one independent implementation or independently developed interoperability prototype where feasible;
- documented deviations and specification corrections.

Exit criterion: OMI 1.0 behaviour has been tested outside prose alone.

### Phase 11 — Review Candidate and public review

Deliverables:

- complete Review Candidate specification suite;
- public issue tracker for normative review;
- resolved or explicitly deferred review comments;
- migration guidance from pre-1.0 drafts;
- release notes.

Exit criterion: no unresolved issue is known to prevent interoperable implementation of the core standard.

### Phase 12 — OMI 1.0 release

Deliverables:

- stable specification suite;
- canonical schemas and examples;
- conformance test release;
- versioned website publication;
- archived release package;
- implementation status report;
- governance plan for maintenance releases.

Exit criterion: the governing process formally approves the release as Stable.

### Phase 13 — Official translations

After the normative English suite is stable, official translations will be prepared initially in:

- Hungarian;
- German.

Translations must preserve identifiers, headings, normative keywords, internal references, examples, and version metadata. A translation-status mechanism should show whether each translation matches the current normative version.

## Repository and publication strategy

OMI should maintain a clear separation of responsibilities:

- **OMI specifications** define normative models, schemas, conformance rules, and examples;
- **Open Manuscript Studio** provides a reference implementation and implementation feedback;
- **the OMI website** publishes the public documentation and project information.

These responsibilities may remain in the current repositories during early development. A future repository split should occur only when it reduces maintenance risk and preserves authoritative versioning, links, and release automation.

## Implementation matrix

The project will publish an implementation matrix showing, for every specification:

- lifecycle status;
- schema status;
- Studio implementation status;
- validator support;
- API support;
- import/export support;
- test coverage;
- known deviations.

Statuses should distinguish at least: not started, exploratory, partial, implemented, tested, and conformant.

## Release criteria for OMI 1.0

OMI 1.0 should not be declared Stable until all of the following are true:

- the core specification set is complete and internally consistent;
- every normative specification has a permanent identifier and declared version;
- the canonical schema and examples are published at stable locations;
- conformance requirements are testable;
- validation behaviour is defined;
- compatibility and migration rules are documented;
- at least the reference implementation has been tested against the conformance suite;
- all known critical interoperability issues are resolved or explicitly scoped out;
- governance and maintenance procedures are active;
- the release is archived and reproducible.

## Work after 1.0

Potential post-1.0 work includes:

- discipline-specific profiles;
- citation-intent and citation-graph models;
- richer research-object packaging;
- collaborative event protocols;
- preservation certification profiles;
- additional official translations;
- registries for extensions and capabilities;
- broader independent implementation testing.

Post-1.0 development must preserve the stability commitments of the 1.x series or clearly identify incompatible work as a future major version.

## Long-term goal

The Open Manuscript Initiative aims to provide a common semantic language for scholarly manuscripts that can be implemented independently and used across the full research lifecycle.

Success will not be measured by whether every institution uses one OMI application. It will be measured by whether different applications and organisations can exchange, validate, review, publish, and preserve scholarly manuscripts without repeatedly reconstructing their meaning and structure.

---
title: OMI Documentation Architecture
sidebar_label: Documentation Architecture
sidebar_position: 4
description: Defines the information architecture, navigation rules, canonical placement, and maintenance requirements for the Open Manuscript Initiative documentation suite.
---

# Open Manuscript Initiative Documentation Architecture

## Document metadata

| Field | Value |
|---|---|
| Document type | Governance policy |
| Status | Draft |
| Version | 0.1.0 |
| Normative language | English |
| Applies to | OMI website documentation, specifications, governance documents, generated category pages, and translations |

## 1. Purpose

This document defines the information architecture of the Open Manuscript Initiative documentation suite.

It establishes:

- the top-level documentation categories;
- the canonical placement of each active document;
- the relationship between conceptual, normative, implementation, and governance material;
- the rules used by the Docusaurus sidebar;
- category landing-page behavior;
- the treatment of legacy, superseded, and migration-only pages;
- URL-stability and localization requirements;
- maintenance and review criteria for future documentation changes.

The documentation architecture is intended to make the OMI standard understandable to several audiences without duplicating normative content.

These audiences include:

- authors and editors evaluating the OMI vision;
- standards contributors developing specifications;
- implementers building compatible software;
- publishers and repositories integrating OMI workflows;
- translators maintaining localized documentation;
- reviewers assessing specification maturity and conformance.

## 2. Architectural principles

The OMI documentation suite follows these principles.

### 2.1 One canonical location

Every active document MUST have one canonical source file and one canonical sidebar location.

A document MAY be linked from other pages, but it SHOULD NOT be registered as a duplicate document item in the same sidebar.

This rule prevents:

- ambiguous ownership;
- duplicated maintenance;
- inconsistent navigation labels;
- conflicting translations;
- Docusaurus duplicate-document errors;
- uncertainty about which page is normative.

### 2.2 Architecture before chronology

Documents are grouped by architectural role, not by the date on which they were written.

A newly created foundational specification belongs in the Foundations or Core Semantic Specifications category even when it was created after a platform specification.

### 2.3 Stable public routes

Documentation refactoring SHOULD preserve established public URLs whenever possible.

Moving a source file is not required merely to change its sidebar category.

When a route must change, the old route SHOULD remain available through:

- a redirect;
- a migration notice;
- or a retained legacy page that points to the canonical document.

### 2.4 Separation of normative and explanatory material

The sidebar MUST distinguish between:

- vision and orientation;
- foundational concepts;
- normative semantic specifications;
- workflow and publishing specifications;
- platform and exchange specifications;
- governance and standards-process documents.

Conceptual introductions MUST NOT silently replace normative specifications.

Normative specifications SHOULD identify their dependencies and lifecycle state explicitly.

### 2.5 Complete discoverability

Every active OMI specification and governance document intended for public review MUST be reachable from the primary sidebar.

Legacy migration pages, internal notes, generated artifacts, and obsolete drafts MAY remain outside the sidebar.

### 2.6 Progressive disclosure

The navigation SHOULD allow readers to move from general concepts to detailed requirements.

The expected progression is:

```text
Vision
  ↓
Architecture overview
  ↓
Foundational concepts
  ↓
Core semantic models
  ↓
Workflow and publishing models
  ↓
Platform and exchange specifications
  ↓
Governance and standards process
```

Readers are not required to follow this sequence, but the ordering SHOULD communicate the dependency structure.

## 3. Top-level navigation architecture

The primary OMI documentation sidebar contains six top-level categories.

```text
Introduction
Foundations
Core Semantic Specifications
Scholarly Workflow and Publishing
Platform and Exchange
Governance
```

Each category has a generated landing page that summarizes its purpose and lists its documents.

## 4. Introduction

The Introduction category explains why OMI exists and how the overall architecture is organized.

It contains:

1. **Vision**
2. **Architecture Overview**

The Architecture Overview is provided by the existing Architecture Map document. Its sidebar label MAY be simplified without changing the document title or source path.

The Introduction category is explanatory. It does not define detailed conformance requirements except where an included document explicitly declares normative content.

## 5. Foundations

The Foundations category contains cross-cutting concepts required to understand the specification suite.

It contains:

1. **OMI-SPEC-000 — Core Principles**
2. **OMI-SPEC-120 — Scholarly Object Model**
3. **Terminology and Definitions**

The Scholarly Object Model is located here because it defines the common abstraction used by the specialized models.

Terminology and Definitions has one canonical sidebar location in this category. Governance documents and specifications SHOULD link to it rather than registering it a second time in the sidebar.

## 6. Core Semantic Specifications

This category contains the principal models that define the semantic structure of an OMI manuscript.

It contains:

1. **OMI-SPEC-100 — Document Model**
2. **OMI-SPEC-110 — Anchor Model**
3. **OMI-SPEC-130 — Annotation Model**
4. **OMI-SPEC-140 — Metadata Model**

The order reflects the primary dependency direction:

```text
Scholarly Object Model
        ↓
Document Model
        ↓
Anchor Model
        ↓
Annotation Model

Metadata Model applies across these layers.
```

Reserved specifications such as Identity and Contributor Model, Versioning and Change Model, Translation Model, Validation Model, and Collaboration and Permission Model MUST NOT appear as active documents until their canonical files exist.

## 7. Scholarly Workflow and Publishing

This category contains specifications that model scholarly work performed with or around the manuscript.

It contains:

1. **OMI-SPEC-200 — Review Model**
2. **OMI-SPEC-210 — Citation Model**
3. **OMI-SPEC-220 — Bibliographic Record Model**
4. **OMI-SPEC-221 — Reference Library and Registry Architecture**
5. **OMI-SPEC-230 — Publishing Model**

The category combines workflow and publication concerns because these specifications operate on the semantic models rather than defining the foundational object structure itself.

Within the citation subsystem:

- the Citation Model defines individual citation occurrences;
- the Bibliographic Record Model defines cited resources;
- the Reference Library and Registry Architecture defines discovery, storage, reconciliation, reuse, and exchange.

## 8. Platform and Exchange

This category contains specifications governing extensibility, programmatic interaction, packaging, and interchange.

It contains:

1. **OMI-SPEC-300 — Plugin Architecture**
2. **OMI-SPEC-310 — Platform API**
3. **OMI-SPEC-320 — File Format**
4. **OMI-SPEC-330 — Container Architecture**

These documents MUST remain distinct from the semantic models.

An implementation may use different internal technologies while conforming to the semantic and exchange requirements defined by the OMI specifications.

## 9. Governance

The Governance category contains documents that control the development, maintenance, maturity, identity, and publication of the OMI standard.

It contains:

1. **Charter**
2. **Roadmap to OMI 1.0**
3. **Architecture Audit**
4. **Documentation Architecture**
5. **Specification Lifecycle**
6. **Versioning Policy**
7. **Specification Style Guide**
8. **Specification Registry**

The Specification Registry is authoritative for specification identifiers and canonical paths.

The Architecture Audit remains available as a record of the consolidation programme, even after its immediate recommendations have been implemented.

## 10. Category landing pages

Each top-level category SHOULD expose a generated index page.

Generated index pages SHOULD include:

- a concise title;
- a category description;
- automatically generated document cards;
- a stable category slug.

Generated pages are preferred over manually maintained category index documents when the page only needs to list category contents.

This reduces duplication and ensures that the landing page follows sidebar changes automatically.

The current category slugs are:

| Category | Slug |
|---|---|
| Introduction | `/introduction` |
| Foundations | `/foundations` |
| Core Semantic Specifications | `/core-semantic-specifications` |
| Scholarly Workflow and Publishing | `/scholarly-workflow-publishing` |
| Platform and Exchange | `/platform-exchange` |
| Governance | `/governance` |

These slugs SHOULD remain stable after publication.

## 11. Sidebar item rules

### 11.1 Explicit registration

The primary sidebar uses explicit document registration rather than unrestricted filesystem autogeneration.

Explicit registration is required because the repository contains:

- legacy migration pages;
- documents stored outside their conceptual category;
- governance documents with different filesystem and navigation orders;
- specifications whose architectural ordering differs from alphabetical ordering.

### 11.2 Labels

A sidebar label MAY be shorter than the page title.

For example:

```text
Page title: OMI Architecture Map
Sidebar label: Architecture Overview
```

A label MUST NOT alter the identity or normative scope of a document.

### 11.3 Ordering

Specification ordering SHOULD follow the canonical identifier and dependency architecture rather than filename order.

Governance ordering SHOULD follow the reader's standards-process workflow:

```text
constitutional authority
→ roadmap and audit
→ documentation architecture
→ lifecycle
→ versioning
→ authoring rules
→ registry
```

### 11.4 Category state

Top-level categories SHOULD be collapsible and initially expanded while the documentation suite remains relatively small.

The default collapsed state MAY be reconsidered when the number of documents grows significantly.

## 12. Legacy and superseded pages

A legacy page MUST NOT appear in the primary sidebar when a canonical successor exists.

The legacy page at:

```text
docs/specifications/scholarly-object-model.md
```

is retained only to preserve the earlier public route and direct readers to:

```text
docs/specifications/core/scholarly-object-model.md
```

The canonical document is **OMI-SPEC-120 — Scholarly Object Model**.

Legacy pages SHOULD:

- identify the canonical successor;
- explain the identifier migration;
- avoid presenting obsolete content as current normative text;
- remain excluded from generated category indexes and the primary sidebar.

## 13. File paths and conceptual categories

The sidebar category does not have to match the source directory exactly.

For example:

- `docs/foundations/architecture-map.md` appears under Introduction;
- `docs/specifications/core/scholarly-object-model.md` appears under Foundations;
- `docs/governance/terminology.md` appears under Foundations.

This is intentional.

Filesystem refactoring SHOULD occur only when it provides a clear maintenance benefit and can preserve public routes safely.

## 14. Document identifiers

Docusaurus document identifiers MUST remain unique.

A document identifier SHOULD be stable after the document becomes publicly referenced.

When front matter declares an explicit `id`, the sidebar MUST use the resolved Docusaurus document identifier rather than assuming the filename alone.

The sidebar refactoring MUST NOT change OMI specification identifiers such as `OMI-SPEC-120`. Docusaurus document IDs and OMI specification IDs are separate namespaces.

## 15. Internal links

Documents SHOULD use relative Markdown links when linking to nearby repository documents.

Sidebar organization MUST NOT be treated as a substitute for explicit normative references.

A specification dependency SHOULD be declared in the specification even when both documents appear next to each other in the sidebar.

Internal-link review SHOULD verify:

- the target file exists;
- the target is canonical;
- the displayed identifier matches the Specification Registry;
- the link does not point to a migration-only page unless migration is the subject;
- localized pages do not accidentally link to a different language without a clear reason.

## 16. Localization

English remains the normative source language unless a document states otherwise.

The Hungarian and German documentation structures SHOULD mirror the English conceptual hierarchy.

Sidebar category labels and generated-index text MUST be included in the normal Docusaurus translation workflow.

A translation SHOULD preserve:

- document identity;
- OMI specification identifier;
- version;
- lifecycle state;
- dependency declarations;
- canonical English source reference.

A translated page MUST NOT receive a separate OMI specification identifier.

When an English document changes, translation freshness SHOULD be tracked according to the Versioning Policy and Terminology and Definitions document.

## 17. Adding a new document

Before a new document is added to the sidebar, its author MUST determine:

1. whether the document is normative, informative, implementation-specific, or governance-related;
2. whether an existing document already covers the subject;
3. whether a specification identifier is required;
4. whether the identifier has been reserved or registered;
5. which top-level category is canonical;
6. which direct dependencies must be declared;
7. whether the document should be public in its current lifecycle state;
8. whether translations or translation placeholders are required;
9. whether adding the document changes a generated category page;
10. whether public routes or legacy aliases must be preserved.

A new normative specification MUST be entered in the Specification Registry before it is presented as having a permanent OMI-SPEC identifier.

## 18. Removing or replacing a document

An active document MUST NOT simply disappear from the sidebar and repository without an archival decision.

Replacement requires:

- a named canonical successor;
- a lifecycle decision such as Deprecated, Superseded, or Withdrawn;
- a registry update when the document is a specification;
- a migration notice or redirect where practical;
- updated internal references;
- updated translations;
- release notes or change history.

## 19. Validation checklist

A documentation-architecture change is ready for review when:

- every sidebar document ID resolves;
- every active specification appears exactly once;
- every public governance document appears exactly once unless intentionally excluded;
- generated-index slugs are unique;
- the legacy Scholarly Object Model page is not listed;
- the canonical Scholarly Object Model is listed under Foundations;
- specification labels match the Specification Registry;
- category descriptions accurately describe their contents;
- no existing source file is moved without a route-preservation plan;
- localization impact is documented;
- Docusaurus configuration syntax is valid;
- the documentation build completes without broken-link or duplicate-ID errors.

## 20. Current migration result

The initial sidebar migration produces the following public hierarchy:

```text
Introduction
├── Vision
└── Architecture Overview

Foundations
├── OMI-SPEC-000 — Core Principles
├── OMI-SPEC-120 — Scholarly Object Model
└── Terminology and Definitions

Core Semantic Specifications
├── OMI-SPEC-100 — Document Model
├── OMI-SPEC-110 — Anchor Model
├── OMI-SPEC-130 — Annotation Model
└── OMI-SPEC-140 — Metadata Model

Scholarly Workflow and Publishing
├── OMI-SPEC-200 — Review Model
├── OMI-SPEC-210 — Citation Model
├── OMI-SPEC-220 — Bibliographic Record Model
├── OMI-SPEC-221 — Reference Library and Registry Architecture
└── OMI-SPEC-230 — Publishing Model

Platform and Exchange
├── OMI-SPEC-300 — Plugin Architecture
├── OMI-SPEC-310 — Platform API
├── OMI-SPEC-320 — File Format
└── OMI-SPEC-330 — Container Architecture

Governance
├── Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Documentation Architecture
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Specification Registry
```

## 21. Future expansion

The architecture is designed to accept additional categories when justified by a substantial body of material.

Possible future categories include:

- Implementation Guides;
- Profiles and Extensions;
- Schemas and Examples;
- Conformance and Testing;
- Community and Contribution.

A new top-level category SHOULD NOT be created for a single document unless the category represents a durable architectural distinction.

Implementation-specific documentation SHOULD remain clearly separated from normative OMI specifications.

## 22. Maintenance

The documentation architecture SHOULD be reviewed when:

- a new specification family is registered;
- a specification is split or merged;
- a document reaches Stable status;
- translations are reorganized;
- schemas and conformance tests become public;
- the sidebar becomes difficult to scan;
- public routes are changed;
- a new implementation-guide layer is introduced.

Changes to this document and `sidebars.js` SHOULD normally be reviewed together when the conceptual hierarchy changes.

## 23. Adoption

This Draft becomes the working documentation architecture when accepted into the main repository.

Existing active documents are organized according to this structure without changing their normative maturity.

Adoption of this architecture does not promote any Draft specification to Review Candidate, Implementation Candidate, or Stable.

## 24. Summary

The OMI documentation suite is organized as a governed standards system rather than a chronological collection of pages.

The architecture provides:

- one canonical location for each document;
- a clear progression from vision to implementation-facing standards;
- complete discovery of active specifications and governance documents;
- stable generated category pages;
- explicit handling of legacy routes;
- localization-compatible navigation;
- room for future schemas, profiles, conformance tests, and implementation guides.

This structure makes the OMI standard easier to read, review, implement, translate, and maintain.
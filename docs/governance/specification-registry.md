---
title: OMI Specification Registry
sidebar_label: Specification Registry
sidebar_position: 60
description: Authoritative registry of Open Manuscript Initiative specification identifiers, titles, canonical locations, lifecycle states, and legacy aliases.
---

# Open Manuscript Initiative Specification Registry

## Document metadata

| Field | Value |
|---|---|
| Document type | Governance registry |
| Status | Draft |
| Version | 0.3.0 |
| Normative language | English |
| Registry namespace | `OMI-SPEC` |
| Applies to | Normative OMI specifications and reserved specification identifiers |
| Last updated | 2026-08-06 |

## 1. Purpose

This document is the authoritative registry of Open Manuscript Initiative specification identifiers.

It defines:

- the permanent identifier assigned to each OMI specification;
- the official specification title;
- the canonical source path;
- the lifecycle status and current version;
- the architectural category;
- normative dependencies;
- legacy and provisional identifiers that must be migrated;
- the rules for allocating, reserving, deprecating, superseding, and preserving identifiers.

The registry exists because earlier OMI documents were created under several provisional numbering schemes. Some identifiers were assigned to more than one document. A stable standards suite cannot retain ambiguous identifiers.

Once an identifier is registered by this document, it MUST NOT be reassigned to another specification.

## 2. Authority

The identifiers listed in the **Canonical specification registry** section are the official OMI specification identifiers.

When another OMI document conflicts with this registry regarding an identifier, title, canonical path, or lifecycle state, this registry governs until the conflicting document is corrected through the normal review process.

This registry does not make every listed specification stable. It assigns identity independently from maturity. A specification may be Reserved, Exploratory, Draft, Review Candidate, Implementation Candidate, Stable, Deprecated, or Superseded.

## 3. Identifier syntax

A registered OMI specification identifier has the form:

```text
OMI-SPEC-NNN
```

where `NNN` is a three-digit decimal number.

Examples:

```text
OMI-SPEC-000
OMI-SPEC-120
OMI-SPEC-221
OMI-SPEC-350
```

The numerical component is an identifier, not a version number and not a priority rank.

A specification version is declared separately:

```text
OMI-SPEC-210, version 0.2.0
```

## 4. Numbering architecture

OMI uses category-based number ranges.

| Range | Category |
|---|---|
| `000–099` | Foundational principles and cross-suite constitutional specifications |
| `100–199` | Core semantic, identity, document, annotation, validation, and collaboration models |
| `200–299` | Scholarly workflow, bibliography, citation, review, rendering, and publishing models |
| `300–399` | Platform, extensibility, API, packaging, exchange, import/export, and conformance specifications |
| `400–899` | Reserved for future OMI specification families |
| `900–999` | Reserved for future experimental allocation policy; not available for unilateral use |

Numbers are intentionally not required to be consecutive. Related specifications may use adjacent numbers or a local subseries.

Example:

- `OMI-SPEC-220` defines bibliographic records;
- `OMI-SPEC-221` defines manuscript reference libraries and registry interaction.

## 5. Registry states

A registry entry has one of the following allocation states.

### Reserved

The identifier and title are allocated, but the canonical specification document has not yet been created or accepted as a Draft.

A Reserved identifier MUST NOT be assigned to a different subject.

### Active

A canonical specification document exists and participates in the OMI lifecycle.

The lifecycle status is recorded separately.

### Deprecated

The specification remains valid for existing implementations but is not recommended for new work.

### Superseded

A named successor formally replaces the specification.

### Withdrawn

Development ended before the specification became Stable. The identifier remains permanently unavailable for reuse.

## 6. Canonical specification registry

### 6.1 Foundations and core semantic models

| Identifier | Official title | Allocation | Lifecycle | Version | Canonical path |
|---|---|---|---|---|---|
| `OMI-SPEC-000` | Core Principles | Active | Draft | 0.1.0 | `docs/foundations/core-principles.md` |
| `OMI-SPEC-100` | Document Model | Active | Draft | 0.1.0 | `docs/specifications/document-model.md` |
| `OMI-SPEC-110` | Anchor Model | Active | Draft | 0.1.0 | `docs/specifications/anchor-model.md` |
| `OMI-SPEC-120` | Scholarly Object Model | Active | Draft | 0.1.0 | `docs/specifications/core/scholarly-object-model.md` |
| `OMI-SPEC-130` | Annotation Model | Active | Draft | 0.2.0 | `docs/specifications/annotation-model.md` |
| `OMI-SPEC-140` | Metadata Model | Active | Draft | 0.1.0 | `docs/specifications/metadata-model.md` |
| `OMI-SPEC-150` | Identity and Contributor Model | Active | Draft | 0.1.0 | `docs/specifications/identity-contributor-model.md` |
| `OMI-SPEC-160` | Versioning and Change Model | Active | Draft | 0.1.0 | `docs/specifications/versioning-change-model.md` |
| `OMI-SPEC-170` | Translation Model | Reserved | — | — | `docs/specifications/translation-model.md` |
| `OMI-SPEC-180` | Validation Model | Reserved | — | — | `docs/specifications/validation-model.md` |
| `OMI-SPEC-190` | Collaboration and Permission Model | Reserved | — | — | `docs/specifications/collaboration-permission-model.md` |

### 6.2 Scholarly workflow, references, and publishing

| Identifier | Official title | Allocation | Lifecycle | Version | Canonical path |
|---|---|---|---|---|---|
| `OMI-SPEC-200` | Review Model | Active | Draft | 0.1.0 | `docs/specifications/review-model.md` |
| `OMI-SPEC-210` | Citation Model | Active | Draft | 0.2.0 | `docs/specifications/citation-model.md` |
| `OMI-SPEC-220` | Bibliographic Record Model | Active | Draft | 0.1.0 | `docs/specifications/bibliographic-record-model.md` |
| `OMI-SPEC-221` | Reference Library and Registry Architecture | Active | Draft | 0.1.0 | `docs/specifications/reference-library-registry.md` |
| `OMI-SPEC-230` | Publishing Model | Active | Draft | 0.1.0 | `docs/specifications/publishing-model.md` |
| `OMI-SPEC-240` | Rendering and Publication Profile Model | Reserved | — | — | `docs/specifications/rendering-publication-profile-model.md` |

### 6.3 Platform, exchange, and conformance

| Identifier | Official title | Allocation | Lifecycle | Version | Canonical path |
|---|---|---|---|---|---|
| `OMI-SPEC-300` | Plugin Architecture | Active | Draft | 0.1.0 | `docs/specifications/plugin-architecture.md` |
| `OMI-SPEC-310` | Platform API | Active | Draft | 0.1.0 | `docs/specifications/api.md` |
| `OMI-SPEC-320` | File Format | Active | Draft | 0.1.0 | `docs/specifications/file-format.md` |
| `OMI-SPEC-330` | Container Architecture | Active | Draft | 0.1.0 | `docs/specifications/container-architecture.md` |
| `OMI-SPEC-340` | Import and Export Model | Reserved | — | — | `docs/specifications/import-export-model.md` |
| `OMI-SPEC-350` | Capability and Conformance Model | Reserved | — | — | `docs/specifications/capability-conformance-model.md` |

## 7. Dependency registry

The dependency list records direct normative dependencies expected for the canonical specification architecture. A Draft may refine these dependencies before reaching Review Candidate.

| Identifier | Direct dependencies |
|---|---|
| `OMI-SPEC-000` | None |
| `OMI-SPEC-100` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-110` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-120` |
| `OMI-SPEC-120` | `OMI-SPEC-000` |
| `OMI-SPEC-130` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120` |
| `OMI-SPEC-140` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-150` | `OMI-SPEC-120`, `OMI-SPEC-140` |
| `OMI-SPEC-160` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-170` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-180` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-130`, `OMI-SPEC-140` |
| `OMI-SPEC-190` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-200` | `OMI-SPEC-110`, `OMI-SPEC-130`, `OMI-SPEC-150`, `OMI-SPEC-160`, `OMI-SPEC-190` |
| `OMI-SPEC-210` | `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-220`, `OMI-SPEC-221` |
| `OMI-SPEC-220` | `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-221` | `OMI-SPEC-140`, `OMI-SPEC-210`, `OMI-SPEC-220` |
| `OMI-SPEC-230` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-210`, `OMI-SPEC-240`, `OMI-SPEC-320` |
| `OMI-SPEC-240` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-210` |
| `OMI-SPEC-300` | `OMI-SPEC-000`, `OMI-SPEC-350` |
| `OMI-SPEC-310` | `OMI-SPEC-100`, `OMI-SPEC-150`, `OMI-SPEC-190`, `OMI-SPEC-350` |
| `OMI-SPEC-320` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| `OMI-SPEC-330` | `OMI-SPEC-320` |
| `OMI-SPEC-340` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-220`, `OMI-SPEC-320` |
| `OMI-SPEC-350` | `OMI-SPEC-000`, `OMI-SPEC-300`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |

Dependencies MUST NOT be inferred solely from this table when implementing a particular released version. The exact versioned specification and suite manifest govern released conformance.

## 8. Legacy identifier migration

### 8.1 Reason for migration

Before this registry, OMI documentation used two incompatible numbering approaches:

1. a short sequential series such as `OMI-SPEC-001` through `OMI-SPEC-012`;
2. a category-based series such as `OMI-SPEC-100`, `OMI-SPEC-110`, and `OMI-SPEC-120`.

The short sequence contains collisions:

- `OMI-SPEC-003` was used by both the Anchor Model and Annotation Model;
- `OMI-SPEC-006` was used by both the Review Model and Bibliographic Record Model;
- `OMI-SPEC-007` was used by both the Publishing Model and Reference Library and Registry Architecture.

A colliding identifier cannot be permanent because it does not identify one unambiguous specification.

The category-based series is therefore adopted as the canonical registry system. It already appears in the OMI Architecture Map and in the canonical core Scholarly Object Model.

### 8.2 Legacy alias table

The following identifiers are historical or provisional aliases. They MUST NOT be used for new normative references.

| Legacy or provisional identifier | Historical use | Canonical identifier | Migration action |
|---|---|---|---|
| `OMI-SPEC-001` | Document Model | `OMI-SPEC-100` | Replace identifier; preserve old URL where practical |
| `OMI-SPEC-002` | Referenced informally as Anchor Model | `OMI-SPEC-110` | Replace dependency references |
| `OMI-SPEC-003` | Anchor Model | `OMI-SPEC-110` | Replace identifier |
| `OMI-SPEC-003` | Annotation Model | `OMI-SPEC-130` | Replace identifier |
| `OMI-SPEC-004` | Metadata Model | `OMI-SPEC-140` | Replace identifier |
| `OMI-SPEC-005` | Citation Model | `OMI-SPEC-210` | Replace identifier |
| `OMI-SPEC-006` | Review Model | `OMI-SPEC-200` | Replace identifier |
| `OMI-SPEC-006` | Bibliographic Record Model | `OMI-SPEC-220` | Replace identifier |
| `OMI-SPEC-007` | Publishing Model | `OMI-SPEC-230` | Replace identifier |
| `OMI-SPEC-007` | Reference Library and Registry Architecture | `OMI-SPEC-221` | Replace identifier |
| `OMI-SPEC-008` | Plugin Architecture | `OMI-SPEC-300` | Replace identifier |
| `OMI-SPEC-009` | Earlier Scholarly Object Model | `OMI-SPEC-120` | Consolidate content into canonical document |
| `OMI-SPEC-010` | Platform API | `OMI-SPEC-310` | Replace identifier |
| `OMI-SPEC-011` | File Format | `OMI-SPEC-320` | Replace identifier |
| `OMI-SPEC-012` | Container Architecture | `OMI-SPEC-330` | Replace identifier |

The legacy numbers were never protected by an adopted registry. They are therefore not registered permanent identifiers and MUST NOT be reassigned within the short sequence.

### 8.3 Migration requirements

The documentation-refactoring phase MUST:

- update the visible identifier in every active specification;
- update dependency declarations and cross-references;
- consolidate the duplicate Scholarly Object Model documents under `OMI-SPEC-120`;
- retain redirects or migration notices for replaced public paths where feasible;
- avoid presenting a legacy identifier as an alternative permanent identifier;
- record the migration in each affected document's change history;
- update schemas, examples, manifests, and conformance claims when they begin using registered identifiers.

## 9. Canonical Scholarly Object Model

`OMI-SPEC-120` is assigned to the Scholarly Object Model at:

```text
docs/specifications/core/scholarly-object-model.md
```

The separate document at:

```text
docs/specifications/scholarly-object-model.md
```

is a legacy duplicate associated with the provisional identifier `OMI-SPEC-009`.

Its useful content must be reviewed and merged into the canonical `OMI-SPEC-120` document. After consolidation, the legacy path should become a redirect or an explicit moved/superseded notice rather than a second normative specification.

## 10. Canonical path rules

A canonical path identifies the maintained source document in the repository.

Changing a canonical path does not change the registered identifier. A path change MUST include, where technically feasible:

- an HTTP redirect from the former published route;
- a repository migration notice;
- updated internal links;
- updated registry metadata;
- preservation of version history.

A file path MUST NOT be treated as the specification's permanent identity.

## 11. Title rules

A registered title is the official human-readable name of the specification.

A compatible editorial title change MAY occur without changing the identifier when the scope and normative subject remain the same.

A proposal that changes the subject so substantially that existing references would become misleading requires a new identifier.

Historical titles SHOULD be recorded as aliases when they have appeared in public releases or external citations.

## 12. Version and lifecycle fields

Each Active specification MUST declare both:

- a semantic version;
- a lifecycle status.

Examples:

```text
OMI-SPEC-210
Version: 0.2.0
Status: Draft
```

Version and lifecycle status are independent. The registry MUST NOT infer one from the other.

The status values are governed by the Specification Lifecycle document. Version increments are governed by the Versioning Policy.

## 13. Reserved specifications

A Reserved entry communicates architectural intent but does not create normative requirements.

A Reserved specification becomes Active only after:

1. a canonical document is created;
2. its scope matches the registered title or an approved registry amendment changes the title;
3. required metadata is present;
4. the document reaches at least Draft status;
5. the registry entry is updated through review.

Implementations MUST NOT claim conformance to a Reserved specification.

## 14. Allocation procedure

A proposal for a new identifier MUST include:

- proposed title;
- problem statement and scope;
- proposed number range and identifier;
- relationship to existing specifications;
- expected normative dependencies;
- reason the subject requires a separate specification;
- proposed editor or maintainer;
- initial lifecycle status;
- expected schema, profile, registry, or test artefacts.

Allocation SHOULD occur only when the scope is sufficiently distinct to remain stable.

An identifier MAY be reserved before the full Draft exists when early allocation prevents collisions or coordinates parallel work.

## 15. Prohibition on unilateral allocation

Authors MUST NOT create a new normative `OMI-SPEC-NNN` identifier merely by adding it to a document title or filename.

A new identifier becomes official only when it is entered in this registry through the accepted contribution and review process.

Unregistered numbers appearing in branches, issues, examples, or experimental documents have no permanent status.

## 16. Identifier permanence

After registration, an identifier MUST remain associated with the same conceptual specification lineage.

The identifier MUST NOT change because of:

- a title correction;
- a file move;
- a sidebar reorganisation;
- translation;
- a minor or patch version;
- a new editor;
- deprecation;
- supersession;
- withdrawal.

A withdrawn or superseded identifier remains reserved permanently.

## 17. Splitting and merging specifications

### 17.1 Split

When one specification is divided into independently versioned specifications:

- the original identifier remains with the principal continuing lineage or becomes Superseded;
- each newly independent specification receives a new identifier;
- the registry records the relationship;
- migration guidance identifies which requirements moved.

### 17.2 Merge

When several specifications are merged:

- one identifier MAY continue if its conceptual lineage clearly dominates;
- other identifiers become Superseded;
- a new identifier SHOULD be allocated when no existing identifier accurately represents the merged scope;
- superseded identifiers MUST NOT be reused.

## 18. Deprecation and supersession records

A Deprecated or Superseded registry entry MUST state:

- affected versions;
- effective date or release;
- successor identifier, when one exists;
- migration guidance;
- support and archival status.

The canonical page MUST remain accessible or resolve to an archival landing page.

## 19. Schema, profile, and registry relationships

An OMI specification identifier identifies a prose specification. It does not automatically identify:

- a JSON Schema;
- a publication profile;
- a controlled vocabulary registry;
- an example corpus;
- a conformance test suite;
- a software implementation.

These artefacts require their own identifiers or versioned names under the applicable OMI governance rules.

A registry entry SHOULD link to such artefacts when they exist.

## 20. Implementation status

The registry records specification identity and maturity, not implementation conformance.

The evidence-based [OMI Implementation Status Matrix](./implementation-status-matrix.md) records implementation, schema, fixture, validator, testing, and independent-implementation evidence for every registered identifier.

The existence of similarly named code in Open Manuscript Studio is not sufficient evidence of specification conformance.

## 21. Official translations

Official translations use the same registered identifier as the English source.

Example:

```text
OMI-SPEC-210 — Citation Model
English source version: 0.2.0
Hungarian translation revision: hu-1
```

A translation MUST NOT receive a different `OMI-SPEC` number.

Translation metadata must identify the exact normative source version and synchronization status.

## 22. References to registered specifications

A normative reference SHOULD use both identifier and title at first occurrence:

```text
OMI-SPEC-210, Citation Model
```

Subsequent references MAY use the identifier alone when unambiguous.

A reference to a specific conformance target MUST include the version:

```text
OMI-SPEC-210 version 0.2.0
```

References MUST NOT use a legacy alias after the affected document has been migrated.

## 23. Machine-readable registry

A future machine-readable registry SHOULD be generated from or validated against this document.

A record is expected to contain fields equivalent to:

```yaml
identifier: OMI-SPEC-210
title: Citation Model
allocation: active
status: draft
version: 0.2.0
canonicalPath: docs/specifications/citation-model.md
category: scholarly-references
dependsOn:
  - OMI-SPEC-110
  - OMI-SPEC-120
  - OMI-SPEC-220
  - OMI-SPEC-221
legacyAliases:
  - OMI-SPEC-005
implementationStatus: see-implementation-matrix
```

The machine-readable form MUST NOT silently diverge from the reviewed registry. Automated validation should eventually check:

- identifier uniqueness;
- canonical-path uniqueness;
- dependency existence;
- absence of dependency cycles where cycles are prohibited;
- valid lifecycle values;
- valid semantic versions;
- legacy-alias collisions;
- consistency with specification front matter.

## 24. Governance documents outside the OMI-SPEC namespace

The following documents govern the specification suite but do not themselves receive `OMI-SPEC` identifiers:

| Document | Canonical path |
|---|---|
| Open Manuscript Initiative Charter | `docs/governance/charter.md` |
| Roadmap to OMI 1.0 | `docs/governance/roadmap-to-omi-1.0.md` |
| OMI Architecture Audit | `docs/governance/architecture-audit.md` |
| Specification Lifecycle | `docs/governance/specification-lifecycle.md` |
| Versioning Policy | `docs/governance/versioning-policy.md` |
| Specification Style Guide | `docs/governance/style-guide.md` |
| Terminology and Definitions | `docs/governance/terminology.md` |
| Specification Registry | `docs/governance/specification-registry.md` |
| Specification Template | `docs/governance/specification-template.md` |
| Implementation Status Matrix | `docs/governance/implementation-status-matrix.md` |

These governance documents may contain normative project requirements without becoming implementer-facing data-model specifications.

## 25. Initial migration sequence

After adoption of this registry, the recommended migration order is:

1. update all active specification titles and metadata to registered identifiers;
2. consolidate the two Scholarly Object Model documents under `OMI-SPEC-120`;
3. update dependency declarations and internal references;
4. reorganise the Docusaurus sidebar around the registered architecture;
5. create the remaining Reserved core specifications in dependency order;
6. introduce machine-readable registry validation;
7. maintain the implementation-status matrix;
8. bind schemas, examples, and conformance tests to exact specification versions.

## 26. Change control

Changes to this registry are classified as follows.

### Patch change

- correcting a path typo;
- correcting non-normative wording;
- synchronising an already approved status or version;
- repairing a broken link.

### Minor change

- reserving a new identifier;
- activating a Reserved entry;
- adding a documented alias;
- adding optional registry metadata;
- recording a compatible title refinement.

### Major change

- changing the allocation architecture;
- reassigning a registered identifier;
- altering identifier permanence rules;
- making an incompatible change to the meaning of registry records.

Reassignment of an already registered identifier is prohibited even through a major registry version. A conceptual replacement requires a new identifier and a supersession record.

## 27. Adoption effects

Adoption of this registry has the following immediate effects:

- the category-based three-digit identifiers become canonical;
- the short sequential identifiers become legacy provisional aliases;
- identifier collisions are resolved without reusing ambiguous numbers;
- `docs/specifications/core/scholarly-object-model.md` becomes the canonical source of `OMI-SPEC-120`;
- planned specifications receive protected Reserved identifiers;
- future specification creation must consult and update this registry.

The adoption does not by itself change the lifecycle status of any specification to Stable and does not constitute an implementation conformance claim.

## 28. Change history

| Version | Date | Summary |
|---|---|---|
| 0.3.0 | 2026-08-06 | Activated `OMI-SPEC-160`, Versioning and Change Model, as Draft version 0.1.0. |
| 0.2.0 | 2026-08-06 | Activated `OMI-SPEC-150`, Identity and Contributor Model, as Draft version 0.1.0; linked the implementation matrix and updated governance-document registration. |
| 0.1.0 | 2026-08-06 | Established the canonical OMI specification identifier architecture and initial registry. |

## 29. Summary

The OMI Specification Registry provides one durable identity system for the complete standards suite.

It preserves the category-based architecture already used by the OMI Architecture Map, resolves conflicting provisional identifiers, reserves identifiers for missing models, protects identifiers from reuse, and establishes the basis for reliable cross-references, schemas, releases, translations, and conformance claims.

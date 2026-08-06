---
title: Specification Lifecycle
sidebar_position: 4
---

# Open Manuscript Initiative Specification Lifecycle

**Status:** Draft  
**Version:** 0.1  
**Document type:** Governance policy  
**Normative language:** English

## 1. Purpose

This policy defines how Open Manuscript Initiative specifications are proposed, developed, reviewed, implemented, stabilized, deprecated, and superseded.

The lifecycle exists to prevent unstable design work from being mistaken for a stable standard, while allowing early ideas to be discussed and tested openly.

Every document registered as an OMI specification MUST declare one lifecycle status. Status transitions MUST be recorded in version control and SHOULD be accompanied by a public rationale.

## 2. Lifecycle overview

```text
Exploratory
    ↓
Draft
    ↓
Review Candidate
    ↓
Implementation Candidate
    ↓
Stable
    ↓
Deprecated
    ↓
Superseded
```

A specification does not need to pass through every state when it is withdrawn before publication. A document MAY return to an earlier state when substantial unresolved issues are discovered.

## 3. Normative terminology

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** express requirement levels when written in uppercase.

Normative requirements SHOULD be testable wherever practical.

## 4. Required document metadata

Every registered specification MUST state:

- permanent specification identifier;
- title;
- version;
- lifecycle status;
- normative or informative classification;
- editors or responsible maintainers;
- scope;
- dependencies;
- related specifications;
- implementation status;
- change history or release reference;
- last substantive update.

Specifications that define serializable data SHOULD also identify applicable schemas, examples, and conformance tests.

## 5. Exploratory

### 5.1 Purpose

The Exploratory state is used for early concepts, problem statements, competing designs, and research questions.

An Exploratory document is not an OMI specification and MUST NOT be presented as an implementation requirement.

### 5.2 Entry criteria

A document may enter this state when it:

- identifies a problem relevant to OMI;
- explains why existing specifications are insufficient;
- proposes at least one possible direction;
- identifies important unresolved questions.

### 5.3 Expectations

An Exploratory document MAY:

- contain incomplete terminology;
- present alternative models;
- omit schemas or implementation details;
- change without compatibility guarantees.

It SHOULD clearly separate established requirements from open questions.

### 5.4 Exit criteria

Promotion to Draft requires:

- a defined scope;
- a preferred architectural direction;
- initial terminology;
- identified dependencies;
- evidence that the proposal belongs in the OMI specification suite.

An Exploratory proposal MAY instead be closed as rejected, postponed, or out of scope.

## 6. Draft

### 6.1 Purpose

Draft is the main specification-writing stage. A Draft describes the intended model in sufficient detail for technical review and experimental implementation.

Draft content is unstable and MAY change incompatibly.

### 6.2 Entry criteria

A Draft MUST include:

- a permanent or provisionally reserved OMI-SPEC identifier;
- purpose and scope;
- principal concepts and data structures;
- relationships to other OMI specifications;
- explicit unresolved issues;
- an initial conformance model.

### 6.3 Expectations

A Draft SHOULD include:

- examples;
- validation rules;
- serialization guidance where applicable;
- security and privacy considerations;
- accessibility considerations where applicable;
- migration implications;
- known alternatives and rejected approaches.

Experimental implementations MAY claim support for a Draft only when they identify the exact specification version or commit.

### 6.4 Exit criteria

Promotion to Review Candidate requires:

- no unresolved issue that prevents coherent implementation;
- stable terminology within the document;
- reviewed dependencies;
- internally consistent normative requirements;
- representative examples;
- a documented list of known limitations;
- editorial review for structure and clarity.

## 7. Review Candidate

### 7.1 Purpose

A Review Candidate is considered complete enough for focused public and expert review.

The purpose of this stage is to discover architectural defects, interoperability problems, unclear requirements, and missing use cases before implementations are treated as evidence of stability.

### 7.2 Entry criteria

A Review Candidate MUST:

- satisfy all Draft exit criteria;
- identify a review period or review milestone;
- publish the questions on which feedback is specifically requested;
- include an implementation and testing plan;
- identify expected backward-compatibility implications.

### 7.3 Review requirements

Review SHOULD include perspectives from more than one relevant group, such as:

- authors and researchers;
- editors and publishers;
- librarians and repositories;
- software implementers;
- accessibility specialists;
- preservation specialists;
- metadata and standards experts.

Substantive review comments MUST be resolved, accepted as known limitations, or explicitly deferred with justification.

### 7.4 Exit criteria

Promotion to Implementation Candidate requires:

- closure or documented disposition of substantive review issues;
- a stable conformance model;
- machine-readable schemas where the specification requires them;
- conformance examples or fixtures;
- no known contradiction with another active OMI specification;
- approval through the project’s documented decision process.

A Review Candidate MUST return to Draft when review produces major architectural changes.

## 8. Implementation Candidate

### 8.1 Purpose

An Implementation Candidate tests whether the specification can be implemented independently and interoperably.

Its design is expected to be stable, but changes remain possible when implementation evidence exposes defects.

### 8.2 Entry criteria

An Implementation Candidate MUST provide:

- complete normative requirements;
- implementation guidance;
- schemas or formal definitions where applicable;
- conformance criteria;
- testable examples;
- version and compatibility rules;
- a public issue process for implementation feedback.

### 8.3 Implementation evidence

Before promotion to Stable, the specification SHOULD have at least two meaningfully independent implementations for its central interoperable behavior.

Where two implementations are not yet practical, the project MAY accept one implementation plus an independent validator, converter, test suite, or compatibility demonstration. The exception and its rationale MUST be recorded.

Implementation evidence SHOULD demonstrate:

- successful parsing or processing of shared fixtures;
- consistent interpretation of required semantics;
- round-trip behavior where required;
- error handling and validation;
- compatibility across independently developed components.

The Open Manuscript Studio MAY serve as one reference implementation but MUST NOT be the sole source of normative behavior.

### 8.4 Exit criteria

Promotion to Stable requires:

- sufficient implementation evidence;
- passing conformance tests where available;
- resolution of implementation-blocking defects;
- documented compatibility and migration rules;
- security and privacy review proportional to the specification’s scope;
- approval through the project’s documented decision process;
- publication of a stable versioned release.

A major design correction requires return to Draft or Review Candidate. Smaller corrections MAY retain Implementation Candidate status with a new pre-stable version.

## 9. Stable

### 9.1 Meaning

Stable indicates that the specification is suitable for production implementation and long-term external reference.

Stable does not mean immutable. It means that compatibility, predictable versioning, and migration support are required.

### 9.2 Requirements

A Stable specification MUST have:

- a permanent OMI-SPEC identifier;
- a stable version number;
- complete normative text;
- conformance requirements;
- published schemas and examples where applicable;
- documented dependencies;
- implementation evidence;
- a change history;
- a maintained canonical publication location.

### 9.3 Change control

Changes to a Stable specification are classified as:

- **Editorial correction:** wording, formatting, links, or examples that do not change normative behavior.
- **Compatible clarification:** removes ambiguity without invalidating conforming implementations.
- **Compatible extension:** adds optional or backward-compatible behavior.
- **Breaking change:** alters required semantics or invalidates previously conforming behavior.

Editorial corrections and compatible clarifications MAY be published in patch releases.

Compatible extensions normally require a minor release.

Breaking changes require a new major version and MUST include migration guidance. A breaking redesign MAY be developed as a separate Draft while the current major version remains Stable.

### 9.4 Errata

Confirmed defects in Stable specifications MUST be recorded publicly.

An erratum MUST state:

- affected versions;
- whether the defect is editorial or normative;
- expected implementation impact;
- correction status;
- release in which the correction is incorporated.

## 10. Deprecated

### 10.1 Meaning

Deprecated indicates that a specification remains available and may still be implemented, but new implementations SHOULD prefer a successor or alternative.

Deprecation does not remove the specification or change its historical content.

### 10.2 Deprecation requirements

A deprecation notice MUST identify:

- the reason for deprecation;
- the recommended replacement, when one exists;
- affected versions;
- migration guidance;
- the planned support period, when known;
- whether security, interoperability, or preservation concerns are involved.

Deprecated schemas, namespaces, and canonical URLs SHOULD remain resolvable for long-term preservation.

## 11. Superseded

### 11.1 Meaning

Superseded indicates that another specification or major version formally replaces the document for new implementations.

A Superseded specification remains part of the permanent record.

### 11.2 Requirements

The document MUST identify:

- the superseding specification and version;
- the effective supersession date or release;
- migration guidance;
- compatibility notes;
- any continuing use cases for the older specification.

The superseding document MUST identify what it replaces.

## 12. Additional terminal outcomes

Not every proposal becomes Stable. Governance records MAY also classify work as:

### Rejected

The proposal was considered but not adopted. The decision record SHOULD explain why.

### Withdrawn

The author or editor ended active development before adoption.

### Postponed

Work is potentially valuable but intentionally deferred.

### Merged

The proposal’s content was incorporated into another specification and no longer requires an independent document.

These outcomes are not maturity levels and do not belong in the primary specification lifecycle sequence.

## 13. Status transitions

### 13.1 Promotion request

A request to promote a specification SHOULD include:

- current and proposed status;
- evidence that exit criteria are satisfied;
- unresolved issues;
- implementation evidence, where required;
- compatibility impact;
- links to relevant reviews and decisions.

### 13.2 Decision record

Every promotion to Review Candidate, Implementation Candidate, or Stable MUST have a public decision record.

The record SHOULD identify:

- decision date;
- participants or approving authority;
- evidence reviewed;
- objections and their disposition;
- conditions attached to the promotion.

### 13.3 Regression

A specification MAY return to an earlier status when:

- an architectural contradiction is discovered;
- conformance cannot be implemented consistently;
- a dependency changes incompatibly;
- security or privacy defects require redesign;
- the scope changes substantially.

Regression MUST be documented and MUST NOT rewrite prior release history.

## 14. Versions and lifecycle status

Version and lifecycle status are related but distinct.

Examples:

- `0.2 Draft`
- `0.8 Review Candidate`
- `0.9 Implementation Candidate`
- `1.0 Stable`
- `1.1 Stable`
- `1.0 Deprecated`

Pre-1.0 versions do not automatically imply any specific status. Each document MUST state both values explicitly.

## 15. Conformance claims

Implementations claiming conformance MUST identify:

- the OMI-SPEC identifier;
- the exact version;
- any optional profiles implemented;
- known deviations;
- applicable extension namespaces or capabilities.

Implementations MUST NOT claim unqualified conformance to an Exploratory document.

Conformance to Draft, Review Candidate, or Implementation Candidate versions MUST be described as experimental or pre-stable.

## 16. Dependencies

A specification MUST NOT become Stable if it normatively depends on an unresolved Exploratory document.

A Stable specification MAY depend on:

- another Stable specification;
- a specifically versioned external standard;
- an Implementation Candidate only when the dependency is narrowly scoped and the risk is documented.

When a dependency is deprecated or superseded, affected OMI specifications MUST be reviewed.

## 17. Translation policy

The normative English version determines lifecycle status.

Official translations SHOULD display:

- the status and version of the English source;
- the translation revision date;
- whether the translation is complete;
- a notice that the English specification prevails in case of conflict.

A translation MUST NOT be labeled Stable when it does not correspond to the currently Stable English source.

## 18. Archival requirements

Published Review Candidate, Implementation Candidate, Stable, Deprecated, and Superseded versions SHOULD remain permanently accessible.

The project SHOULD preserve:

- immutable release tags;
- versioned document snapshots;
- schemas and examples associated with each release;
- decision records;
- errata;
- migration guides.

Canonical URLs SHOULD remain stable or redirect to an archival landing page.

## 19. Emergency corrections

A serious security, privacy, data-loss, or interoperability defect MAY require an accelerated correction.

Emergency handling MUST still provide:

- a public issue or advisory when disclosure is safe;
- affected-version information;
- corrected normative text or schema;
- implementation guidance;
- a permanent change record.

Security-sensitive details MAY be withheld temporarily, but the final resolution SHOULD be documented publicly.

## 20. Responsibilities

### Specification editors

Editors are responsible for:

- maintaining coherent normative text;
- tracking issues and decisions;
- preparing status-transition evidence;
- coordinating schemas, examples, and tests;
- preserving change history.

### Implementers

Implementers are encouraged to:

- report ambiguous or inconsistent requirements;
- publish implementation experience;
- contribute interoperable fixtures and tests;
- avoid treating reference implementation behavior as normative when the specification differs.

### Project governance

The project’s governance process is responsible for:

- approving advanced lifecycle transitions;
- protecting permanent identifiers;
- ensuring review diversity;
- preventing incompatible silent changes;
- maintaining the canonical registry.

## 21. Minimum requirements by status

| Requirement | Exploratory | Draft | Review Candidate | Implementation Candidate | Stable |
|---|:---:|:---:|:---:|:---:|:---:|
| Defined problem | Required | Required | Required | Required | Required |
| Defined scope | Recommended | Required | Required | Required | Required |
| Permanent or reserved identifier | Optional | Required | Required | Required | Required |
| Normative requirements | Optional | Partial | Complete | Complete | Complete |
| Examples | Optional | Recommended | Required | Required | Required |
| Schema/formal model where applicable | Optional | Recommended | Required | Required | Required |
| Public review | Optional | Recommended | Required | Required | Completed |
| Implementation evidence | Not required | Optional | Planned | Required | Required |
| Conformance tests | Not required | Optional | Planned | Required where applicable | Maintained |
| Compatibility policy | Not required | Initial | Required | Required | Required |
| Production conformance claim | Prohibited | Experimental | Experimental | Pre-stable | Permitted |

## 22. Adoption

This policy takes effect when accepted by the Open Manuscript Initiative governance process.

Existing documents SHOULD be assigned an accurate lifecycle status during the documentation refactoring programme. No existing document becomes Stable solely because it predates this policy.

## 23. Summary

The OMI specification lifecycle separates exploration, specification writing, review, implementation testing, stable standardization, and retirement.

Its purpose is to make every maturity claim meaningful, provide implementers with predictable expectations, and preserve a transparent technical record as OMI develops into an open scholarly publishing standard.

---
id: specification-template
title: OMI Specification Template
sidebar_label: Specification Template
description: Mandatory starting structure for new Open Manuscript Initiative specifications.
keywords:
  - Open Manuscript Initiative
  - OMI
  - specification template
  - standards development
  - technical writing
  - conformance
---

# Open Manuscript Initiative Specification Template

## Document metadata

| Field | Value |
|---|---|
| Document type | Governance template |
| Status | Draft |
| Version | 0.1.0 |
| Normative language | English |
| Applies to | New and substantially rewritten OMI specifications |
| Responsible group | OMI maintainers |
| Last updated | 2026-08-06 |

## 1. Purpose

This document provides the canonical starting template for Open Manuscript Initiative specifications.

The template converts the requirements of the following governance documents into a reusable authoring structure:

- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md).

A new `OMI-SPEC-*` document MUST begin from this template unless its pull request records and justifies a limited exception.

The template is designed to make each specification:

- identifiable;
- reviewable;
- testable;
- implementation-independent;
- explicit about compatibility and conformance;
- suitable for translation and long-term maintenance.

## 2. When to use this template

This template MUST be used for:

- a newly allocated OMI specification;
- a provisional specification entering Draft status;
- a major rewrite that replaces the structure of an existing specification;
- a specification split from or merged out of another normative document.

The full template is not required for:

- governance policies;
- tutorials and explanatory guides;
- implementation notes;
- unofficial proposals in Exploratory status;
- translation files;
- machine-generated schema documentation.

Profiles, registries, schemas, examples, and mapping documents SHOULD use this template as a base and apply the adaptations described in the “Document-type adaptations” section.

## 3. How to use the template

1. Obtain or reserve the permanent identifier in the OMI Specification Registry.
2. Copy the source template from the “Copy-ready specification source” section.
3. Replace every placeholder enclosed in angle brackets.
4. Delete drafting instructions written inside HTML comments.
5. Remove optional sections only after determining that they are not applicable.
6. Preserve the required section order unless the subject requires a documented exception.
7. Add the new document to the canonical sidebar category.
8. Add or update Hungarian and German navigation translation keys.
9. Validate Markdown, links, examples, identifiers, and schemas before review.
10. Record unresolved design questions explicitly while the document remains pre-Stable.

A placeholder MUST NOT remain in a document proposed for Review Candidate status.

## 4. Placeholder conventions

The copy-ready source uses these placeholder forms:

| Form | Meaning |
|---|---|
| `<OMI-SPEC-NNN>` | Permanent specification identifier |
| `<OFFICIAL TITLE>` | Registered title |
| `<SHORT TITLE>` | Concise sidebar label |
| `<0.1.0>` | Semantic document version |
| `<Draft>` | Lifecycle status |
| `<EDITOR OR GROUP>` | Responsible human editor or editorial group |
| `<YYYY-MM-DD>` | ISO 8601 date |
| `<NONE>` | Explicit statement that no value applies |
| `<TEXT>` | Required author-supplied prose |
| `[OPTIONAL]` | Section or field that may be removed when inapplicable |

Placeholder angle brackets are drafting notation only. They MUST be removed from published documents.

## 5. Required metadata

Every specification MUST expose its normative metadata in the rendered body. Front matter alone is insufficient.

The metadata table MUST include:

| Field | Required content |
|---|---|
| Identifier | Permanent `OMI-SPEC-*` identifier |
| Title | Registered official title |
| Version | `MAJOR.MINOR.PATCH` |
| Status | Lifecycle state |
| Document type | Normative, informative, or mixed |
| Normative language | Normally English |
| Editors | Responsible humans or editorial group |
| Last updated | ISO 8601 date |
| Replaces | Predecessor or `None` |
| Replaced by | Successor or `None` |
| Depends on | Normative dependencies or `None` |
| Used by | Known dependants or `None known` |
| Schemas | Applicable machine-readable artefacts or `None` |
| Profiles | Applicable profiles or `None` |
| Implementation status | Summary or matrix link |
| Issue tracker | Canonical location for issues |

A specification that defines serialised data SHOULD also identify example fixtures, validators, and conformance tests.

## 6. Required section order

The standard section order is:

1. Abstract
2. Status of this document
3. Conformance
4. Scope
5. Terminology
6. Design principles
7. Model overview
8. Data model
9. Processing model
10. Validation and error handling
11. Extensibility
12. Versioning and compatibility
13. Interoperability
14. Security, privacy, and integrity considerations
15. Accessibility considerations
16. Internationalisation considerations
17. Examples
18. Normative references
19. Informative references
20. Implementation status
21. Unresolved issues
22. Change history
23. Acknowledgements

Sections 1–5, 10, 12, 14, 18, and 22 are mandatory for every normative specification.

A mandatory section that has no special considerations MUST remain present and state that the issue was reviewed and that no specification-specific requirements are currently known.

## 7. Normative writing rules embedded in the template

Normative requirements MUST:

- use uppercase requirement terms intentionally;
- identify the responsible implementation role;
- state observable behaviour;
- avoid combining unrelated requirements in one sentence;
- define failure behaviour where non-conformance is possible;
- be testable or objectively reviewable.

Specifications at Review Candidate status or later SHOULD assign stable requirement identifiers using:

```text
REQ-<SPEC-CODE>-<NNN>
```

Example:

```text
REQ-DOC-001
```

Requirement identifiers MUST NOT be reassigned after removal.

## 8. Copy-ready specification source

Copy the complete block below into the new specification file.

````markdown
---
id: <docusaurus-document-id>
title: <OMI-SPEC-NNN — OFFICIAL TITLE>
sidebar_label: <OMI-SPEC-NNN — SHORT TITLE>
description: <ONE-SENTENCE DESCRIPTION>
keywords:
  - Open Manuscript Initiative
  - OMI
  - <PRIMARY SUBJECT>
  - <SECONDARY SUBJECT>
---

# <OMI-SPEC-NNN> — <OFFICIAL TITLE>

## Document metadata

| Field | Value |
|---|---|
| Identifier | `<OMI-SPEC-NNN>` |
| Title | <OFFICIAL TITLE> |
| Version | `<0.1.0>` |
| Status | <Draft> |
| Document type | <Normative / Informative / Mixed> |
| Normative language | English |
| Editors | <EDITOR OR EDITORIAL GROUP> |
| Last updated | <YYYY-MM-DD> |
| Replaces | <NONE OR IDENTIFIER> |
| Replaced by | <NONE OR IDENTIFIER> |
| Depends on | <IDENTIFIERS OR NONE> |
| Used by | <IDENTIFIERS OR NONE KNOWN> |
| Schemas | <LINKS OR NONE> |
| Profiles | <LINKS OR NONE> |
| Implementation status | <SUMMARY OR LINK> |
| Issue tracker | <CANONICAL ISSUE URL OR REPOSITORY LOCATION> |

## 1. Abstract

<!--
Describe in two to four paragraphs:
- what the specification defines;
- why the model or protocol is needed;
- which actors or systems use it;
- what the specification deliberately does not define.
Do not place normative requirements in the abstract.
-->

<TEXT>

## 2. Status of this document

This document is a **<LIFECYCLE STATUS>** specification of the Open Manuscript Initiative.

<!--
State the stability implications of the current lifecycle status.
For Draft, explain that incompatible changes may occur.
For Review Candidate, identify the review milestone.
For Implementation Candidate, identify the implementation-evidence process.
For Stable, identify the stable release and compatibility commitment.
-->

Implementations claiming support MUST identify the exact specification version or immutable commit used.

Discussion and change proposals are tracked at <ISSUE LOCATION>.

## 3. Conformance

### 3.1 Conformance classes

This specification defines the following conformance classes:

- **Conforming producer:** <RESPONSIBILITIES>.
- **Conforming consumer:** <RESPONSIBILITIES>.
- **Conforming validator:** <RESPONSIBILITIES>.
- **[OPTIONAL] Conforming renderer:** <RESPONSIBILITIES>.
- **[OPTIONAL] Conforming preservation processor:** <RESPONSIBILITIES>.

<!-- Remove classes that are not applicable. Add role-specific classes only when needed. -->

### 3.2 General conformance

A conforming implementation MUST satisfy every applicable **MUST** and **MUST NOT** requirement for its declared conformance class.

An optional feature MAY be omitted. When implemented, the feature MUST satisfy every requirement defined for that feature.

A conformance claim SHOULD identify:

- implementation name and version;
- exact specification identifier and version;
- declared conformance class;
- supported profiles;
- known limitations;
- conformance-test version, when available.

### 3.3 Requirement identifiers

<!-- Assign stable identifiers by Review Candidate status. -->

**REQ-<CODE>-001:** <FIRST TESTABLE NORMATIVE REQUIREMENT>.

## 4. Scope

This specification defines:

- <IN-SCOPE ITEM>;
- <IN-SCOPE ITEM>;
- <IN-SCOPE ITEM>.

### 4.1 Out of scope

This specification does not define:

- <OUT-OF-SCOPE ITEM>;
- <OUT-OF-SCOPE ITEM>;
- <OUT-OF-SCOPE ITEM>.

## 5. Terminology

The terminology of the central OMI Terminology and Definitions document applies.

### 5.1 <SPECIALISED TERM>

<CONCISE, NON-CIRCULAR DEFINITION>.

### 5.2 <SPECIALISED TERM>

<CONCISE, NON-CIRCULAR DEFINITION>.

<!--
Define only terms that are specialised by this specification.
Do not silently redefine a central OMI term.
-->

## 6. Design principles

This section is informative.

The specification is guided by:

- **<PRINCIPLE>:** <EXPLANATION>.
- **<PRINCIPLE>:** <EXPLANATION>.
- **<PRINCIPLE>:** <EXPLANATION>.

Design principles explain intent but do not replace testable normative requirements.

## 7. Model overview

<!-- Provide a concise conceptual overview and explain the relationship to other OMI specifications. -->

```text
<CONCEPTUAL DIAGRAM>
```

The diagram is informative. Normative behaviour is defined by the prose requirements in this specification.

## 8. Data model

### 8.1 <ENTITY NAME>

**Purpose:** <TEXT>  
**Identifier:** <IDENTITY RULE>  
**Lifecycle:** <LIFECYCLE RULE>

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable identifier for the entity. |
| `<propertyName>` | <TYPE> | <Yes/No> | `<0..1 / 1 / 0..* / 1..*>` | <DESCRIPTION>. |

#### 8.1.1 Invariants

- **REQ-<CODE>-010:** <TESTABLE INVARIANT>.
- **REQ-<CODE>-011:** <TESTABLE INVARIANT>.

#### 8.1.2 Relationships

<DEFINE CONTAINMENT, REFERENCE, OWNERSHIP, ORDER, OR OTHER RELATIONSHIPS>.

#### 8.1.3 Missing, null, and empty values

<DEFINE THE MEANING OF ABSENCE, `null`, EMPTY STRINGS, EMPTY ARRAYS, UNKNOWN VALUES, WITHHELD VALUES, AND NOT-APPLICABLE VALUES>.

### 8.2 <ADDITIONAL ENTITY NAME>

<REPEAT THE ENTITY STRUCTURE AS NEEDED>.

## 9. Processing model

### 9.1 Inputs

<DEFINE ACCEPTED INPUTS AND PRECONDITIONS>.

### 9.2 Processing steps

A conforming <PROCESSOR ROLE> MUST process the input in this order:

1. <STEP>.
2. <STEP>.
3. <STEP>.

### 9.3 Outputs

<DEFINE OUTPUTS, STATE CHANGES, AND PRESERVATION OBLIGATIONS>.

### 9.4 Determinism and implementation-defined behaviour

<STATE WHICH RESULTS MUST BE DETERMINISTIC AND WHICH CHOICES MAY BE IMPLEMENTATION-DEFINED>.

## 10. Validation and error handling

### 10.1 Validation levels

The specification distinguishes:

- syntax validation;
- structural validation;
- semantic validation;
- reference-integrity validation;
- profile validation.

### 10.2 Error conditions

| Condition | Classification | Required behaviour |
|---|---|---|
| <CONDITION> | Error | <REJECT / REPORT / PRESERVE / RECOVER> |
| <CONDITION> | Warning | <REPORT / CONTINUE / PRESERVE> |
| <CONDITION> | Unsupported feature | <REQUIRED BEHAVIOUR> |
| <CONDITION> | Unknown feature | <REQUIRED BEHAVIOUR> |

### 10.3 Preservation during failure

**REQ-<CODE>-100:** <DEFINE WHETHER UNKNOWN OR INVALID CONTENT IS REJECTED, QUARANTINED, IGNORED, OR PRESERVED>.

## 11. Extensibility

### 11.1 Extension points

<IDENTIFY DECLARED EXTENSION POINTS>.

### 11.2 Unknown extensions

A conforming <CONSUMER ROLE> MUST <REJECT / IGNORE / PRESERVE / EXPOSE> unknown extension content according to <RULE>.

Extensions MUST NOT redefine the semantics of core properties.

### 11.3 Namespace or identifier rules

<DEFINE COLLISION AVOIDANCE, OWNERSHIP, REGISTRATION, AND VERSIONING>.

## 12. Versioning and compatibility

This specification follows the OMI Versioning Policy.

### 12.1 Compatibility dimensions

The following compatibility dimensions apply:

- read compatibility;
- write compatibility;
- round-trip compatibility;
- schema compatibility;
- API or processing compatibility;
- profile compatibility.

### 12.2 Compatible changes

<DEFINE CHANGES THAT MAY OCCUR IN MINOR OR PATCH RELEASES>.

### 12.3 Breaking changes

<DEFINE CHANGES THAT REQUIRE A MAJOR RELEASE OR, BEFORE 1.0, A DOCUMENTED BREAKING MINOR RELEASE>.

### 12.4 Migration

<DEFINE MIGRATION EXPECTATIONS, VERSION DETECTION, AND FAILURE BEHAVIOUR>.

### 12.5 Deprecation

<DEFINE DEPRECATION NOTICE, REPLACEMENT, SUPPORT WINDOW, AND EARLIEST REMOVAL VERSION>.

## 13. Interoperability

### 13.1 External standards

| External standard | Direction | Mapping quality | Notes |
|---|---|---|---|
| <STANDARD> | <Import / Export / Bidirectional> | <Lossless / Conditionally lossless / Lossy / Unsupported> | <NOTES> |

### 13.2 Information preservation

<STATE WHAT IS PRESERVED, TRANSFORMED, OMITTED, GENERATED, OR AMBIGUOUS>.

### 13.3 Round-trip behaviour

<DEFINE WHETHER AND UNDER WHICH CONDITIONS ROUND TRIPS PRESERVE SEMANTICS AND UNKNOWN EXTENSIONS>.

## 14. Security, privacy, and integrity considerations

### 14.1 Threats

This specification has been reviewed for risks involving:

- untrusted input;
- active content;
- external resource retrieval;
- identifier spoofing;
- hidden or restricted content;
- personal information;
- access control;
- denial of service;
- unsafe rendering;
- provenance and signature integrity.

### 14.2 Requirements

- **REQ-<CODE>-200:** <SECURITY OR INTEGRITY REQUIREMENT>.
- **REQ-<CODE>-201:** <PRIVACY OR ACCESS-CONTROL REQUIREMENT>.

<!--
When no specification-specific risk is known, retain this section and state:
“No specification-specific security, privacy, or integrity requirements are currently known beyond the general requirements of the OMI platform and container specifications.”
-->

## 15. Accessibility considerations

<DEFINE ACCESSIBILITY REQUIREMENTS OR STATE WHY THE SPECIFICATION HAS NO USER-FACING ACCESSIBILITY EFFECT>.

User-facing mappings SHOULD preserve semantic structure, labels, alternative descriptions, reading order, keyboard operation, and assistive-technology compatibility where applicable.

## 16. Internationalisation considerations

This specification has been reviewed for:

- Unicode processing;
- BCP 47 language tags;
- bidirectional text;
- script variation;
- localised names;
- transliteration;
- locale-neutral machine values;
- dates, times, time zones, and calendars;
- language-sensitive sorting and comparison.

<DEFINE SPECIFICATION-SPECIFIC REQUIREMENTS>.

## 17. Examples

### 17.1 Minimal valid example

```json
{
  "id": "example-001",
  "type": "<TYPE>"
}
```

Explain why the example is valid and identify the requirements it demonstrates.

### 17.2 Representative valid example

```json
{
  "id": "example-002",
  "type": "<TYPE>",
  "<propertyName>": "<VALUE>"
}
```

### 17.3 Invalid example

```json
{
  "type": "<TYPE>"
}
```

This example is invalid because <REASON AND REQUIREMENT IDENTIFIER>.

### 17.4 [OPTIONAL] Migration example

<SHOW BEFORE, AFTER, AND MIGRATION CONSEQUENCES>.

## 18. Normative references

- Open Manuscript Initiative, *<DEPENDENCY TITLE>*, `<OMI-SPEC-NNN>`, version `<VERSION>`.
- <AUTHORITATIVE EXTERNAL STANDARD AND VERSION>.

## 19. Informative references

- <BACKGROUND OR RELATED MATERIAL>.

## 20. Implementation status

<!--
This section reports evidence; it does not define normative behaviour.
Link to the implementation status matrix when available.
-->

| Implementation | Version | Conformance class | Specification version | Status | Notes |
|---|---|---|---|---|---|
| <IMPLEMENTATION> | <VERSION> | <CLASS> | <VERSION> | <Experimental / Partial / Complete> | <NOTES> |

## 21. Unresolved issues

<!-- Required for Draft and Review Candidate. Remove only when the lifecycle policy permits. -->

| Issue | Impact | Required decision | Tracking link |
|---|---|---|---|
| <ISSUE> | <IMPACT> | <DECISION> | <LINK> |

A Draft MUST NOT conceal unresolved architectural questions in apparently normative prose.

## 22. Change history

| Version | Date | Status | Change classification | Summary |
|---|---|---|---|---|
| `0.1.0` | <YYYY-MM-DD> | Draft | Initial draft | Initial registered version. |

Git history supplements but does not replace this published change history.

## 23. Acknowledgements

[OPTIONAL]

<Acknowledge substantial review, implementation evidence, source standards, or editorial assistance.>

When substantial AI assistance is disclosed, describe its role without attributing authorship or responsibility to the tool. Human editors remain responsible for all normative content.
````

## 9. Section omission and adaptation rules

A section MAY be removed only when:

- it is marked optional in this template;
- the subject genuinely has no corresponding model or behaviour;
- removal does not conceal a required lifecycle or risk review;
- the pull request remains understandable without the section.

The following sections MUST NOT be removed from a normative specification:

- Document metadata;
- Abstract;
- Status of this document;
- Conformance;
- Scope;
- Terminology;
- Validation and error handling;
- Versioning and compatibility;
- Security, privacy, and integrity considerations;
- Normative references;
- Change history.

When a mandatory consideration is inapplicable, the section MUST state why.

## 10. Document-type adaptations

### 10.1 Profile

An `OMI-PROFILE-*` document SHOULD add:

- profiled specifications and exact versions;
- selected conformance classes;
- tightened constraints;
- defaults;
- prohibited optional features;
- extension requirements;
- compatibility with the unprofiled specification.

A profile MUST NOT silently contradict its base specifications.

### 10.2 Registry

An `OMI-REG-*` document SHOULD add:

- allocation authority;
- entry syntax;
- uniqueness rules;
- registration procedure;
- entry lifecycle;
- deprecation and reservation rules;
- machine-readable registry location.

Allocated identifiers MUST NOT be reassigned.

### 10.3 Schema

An `OMI-SCHEMA-*` document SHOULD add:

- canonical `$id` or equivalent identifier;
- schema language and version;
- prose-specification authority relationship;
- generation source;
- validation scope;
- unsupported semantic constraints;
- compatibility policy.

A schema MUST identify the exact prose specification version it formalises.

### 10.4 Example set

An `OMI-EXAMPLE-*` document SHOULD classify each example as:

- normative or informative;
- valid or invalid;
- minimal or representative;
- specification- or profile-specific.

Complete examples SHOULD be stored as separately validated fixtures.

### 10.5 Interoperability mapping

A mapping document SHOULD replace the main data-model section with:

- source model;
- target model;
- mapping direction;
- preconditions;
- field and object mapping tables;
- information-loss analysis;
- reversibility;
- unsupported constructs;
- round-trip tests.

## 11. Lifecycle-specific requirements

### 11.1 Draft

A Draft MUST contain:

- a permanent or provisionally reserved identifier;
- bounded scope;
- principal concepts and data structures;
- dependencies;
- initial conformance model;
- explicit unresolved issues.

Examples, validation, risk review, and migration implications SHOULD already be present.

### 11.2 Review Candidate

Before Review Candidate status:

- placeholders and drafting comments MUST be removed;
- terminology MUST be internally stable;
- representative valid and invalid examples MUST exist;
- applicable requirements SHOULD have stable identifiers;
- dependencies MUST be reviewed;
- substantive unresolved issues MUST be closed or explicitly dispositioned;
- the review period and requested review questions MUST be stated.

### 11.3 Implementation Candidate

Before Implementation Candidate status:

- normative requirements MUST be complete;
- schemas or formal definitions MUST exist where applicable;
- conformance fixtures MUST be available;
- compatibility and migration rules MUST be testable;
- implementation evidence collection MUST be active.

### 11.4 Stable

Before Stable status:

- the version MUST establish a stable compatibility commitment;
- implementation evidence MUST be documented;
- conformance testing MUST be published where applicable;
- implementation-blocking defects MUST be resolved;
- security and privacy review MUST be complete;
- the canonical versioned release MUST be archived.

A Stable document MUST NOT retain an “Unresolved issues” section containing open normative questions.

## 12. Pull-request checklist

A pull request adding a specification SHOULD confirm:

### Identity and registry

- [ ] The identifier is reserved in the Specification Registry.
- [ ] The title matches the registered title.
- [ ] The filename uses lowercase kebab case.
- [ ] The Docusaurus document ID is stable and unique.

### Structure and content

- [ ] Required metadata is visible in the document body.
- [ ] Mandatory sections are present.
- [ ] Scope and out-of-scope boundaries are explicit.
- [ ] Central terminology is used consistently.
- [ ] Normative requirements are testable.
- [ ] Error handling and unknown-extension behaviour are defined.

### Compatibility and risk

- [ ] Version and compatibility effects are documented.
- [ ] Migration requirements are documented.
- [ ] Security, privacy, and integrity have been reviewed.
- [ ] Accessibility has been reviewed.
- [ ] Internationalisation has been reviewed.

### Examples and formal artefacts

- [ ] JSON, XML, or other examples are syntactically valid.
- [ ] At least one valid and one important invalid example are present.
- [ ] Schema and prose authority are stated.
- [ ] Requirement identifiers are unique where used.

### Publication

- [ ] The document is added to the correct sidebar category.
- [ ] Hungarian and German navigation translations are updated.
- [ ] Internal links resolve.
- [ ] The Docusaurus site builds for `en`, `hu`, and `de`.
- [ ] The pull-request description classifies the change and its compatibility impact.

## 13. Maintenance

This template is governed by the Specification Lifecycle, Versioning Policy, and Specification Style Guide.

Changes to the template MUST be evaluated for their effect on:

- existing specifications;
- contributor workflow;
- translations;
- automated validation;
- schemas and fixtures;
- external citations;
- lifecycle promotion criteria.

Existing specifications are not automatically non-conformant when the template changes. A template change SHOULD identify whether existing documents require migration and the expected timeframe.

## 14. Summary

The OMI Specification Template provides one consistent path from an initial Draft to a stable, implementable, and maintainable standard.

It ensures that identity, scope, terminology, conformance, validation, compatibility, interoperability, risk review, examples, implementation evidence, and change history are addressed explicitly rather than reconstructed late in the standardisation process.

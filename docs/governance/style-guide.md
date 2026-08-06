---
title: OMI Specification Style Guide
sidebar_label: Specification Style Guide
sidebar_position: 40
---

# Open Manuscript Initiative Specification Style Guide

## Document metadata

| Field | Value |
|---|---|
| Document type | Governance policy |
| Status | Draft |
| Version | 0.1.0 |
| Normative language | English |
| Applies to | OMI specifications, profiles, registries, schemas, examples, and related technical documentation |

## 1. Purpose

This guide defines the editorial, structural, terminological, and technical conventions used by the Open Manuscript Initiative (OMI).

Its purpose is to ensure that OMI documents are:

- precise;
- internally consistent;
- implementation-independent;
- accessible to readers from different disciplines;
- suitable for normative technical use;
- stable under versioning and translation;
- easy to review, test, cite, and maintain.

Authors and editors of OMI technical documents MUST follow this guide unless a document explicitly records and justifies an exception.

## 2. Scope

This guide applies to:

- documents identified as `OMI-SPEC-*`;
- governance policies;
- implementation profiles;
- registries and controlled vocabularies;
- JSON Schemas and schema documentation;
- conformance requirements;
- example documents and test fixtures;
- interoperability mappings;
- migration guides;
- official translations.

Informal project announcements, tutorials, blog posts, and community discussions SHOULD follow the terminology rules in this guide but are not required to use the full specification template.

## 3. Normative language

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **NOT RECOMMENDED**, **MAY**, and **OPTIONAL** are to be interpreted as normative requirement terms when, and only when, they appear in uppercase.

OMI documents SHOULD prefer the following subset:

- **MUST** and **MUST NOT** for absolute interoperability or conformance requirements;
- **SHOULD** and **SHOULD NOT** for strong recommendations with legitimate exceptions;
- **MAY** for permitted optional behaviour;
- **RECOMMENDED** when prose reads more naturally than **SHOULD**;
- **OPTIONAL** when describing an optional component or field rather than implementation behaviour.

### 3.1 Requirement strength

A **MUST** requirement:

- is necessary for conformance, interoperability, integrity, or safety;
- can be tested or objectively reviewed;
- does not merely express editorial preference.

A **SHOULD** requirement:

- defines expected behaviour;
- permits exceptions only when the consequences are understood;
- SHOULD describe those consequences where practical.

A **MAY** statement:

- grants permission;
- does not imply a recommendation;
- MUST NOT be used to describe uncertain behaviour.

### 3.2 Avoid ambiguous requirement words

Normative documents SHOULD avoid using the following words without qualification:

- normally;
- generally;
- usually;
- appropriate;
- reasonable;
- adequate;
- simple;
- obvious;
- user-friendly;
- efficient;
- secure;
- standard.

When such terms are necessary, the document SHOULD define measurable criteria or explain the decision context.

Bad:

> Implementations should store identifiers appropriately.

Better:

> Implementations MUST preserve identifier values without changing case, punctuation, or percent-encoding unless the identifier specification explicitly defines a canonical transformation.

### 3.3 One requirement per sentence

Normative sentences SHOULD express one independently testable requirement.

Bad:

> An implementation MUST validate the record and display errors and preserve unknown properties.

Better:

> An implementation MUST validate the record against the declared schema.
>
> An implementation MUST report validation failures.
>
> An implementation MUST preserve unknown extension properties during a lossless round trip.

### 3.4 Requirement identifiers

Specifications at **Review Candidate** status or later SHOULD assign stable identifiers to normative requirements.

The recommended format is:

```text
REQ-<SPEC>-<NNN>
```

Example:

```text
REQ-DOC-001
REQ-CIT-014
REQ-VAL-023
```

Requirement identifiers MUST remain stable within a major specification version. If a requirement is removed, its identifier MUST NOT be reassigned to a different requirement.

## 4. Language and voice

### 4.1 Normative language

The normative language of OMI is English.

English specifications SHOULD use internationally understandable technical prose. Authors SHOULD avoid idioms, humour, culture-specific metaphors, and unnecessary rhetorical language.

### 4.2 Voice

Specifications SHOULD use direct declarative sentences.

Preferred:

> A citation occurrence references one library entry.

Avoid:

> It should be noted that a citation occurrence is something that would generally be expected to reference one library entry.

Active voice is preferred when it makes responsibility clear:

> The validator reports the unsupported property.

Passive voice MAY be used when the actor is irrelevant:

> The property is omitted from canonical output.

### 4.3 Tense

Normative behaviour SHOULD be written in the present tense.

Preferred:

> The parser rejects an invalid identifier.

Avoid:

> The parser will reject an invalid identifier.

### 4.4 Person

Specifications SHOULD avoid addressing the reader as “you”. Use the responsible role or component instead:

- author;
- editor;
- implementation;
- processor;
- validator;
- renderer;
- client;
- server;
- repository.

### 4.5 Inclusive and neutral language

OMI documents MUST use respectful, inclusive, and role-based language. Gendered pronouns SHOULD be avoided when the person’s gender is irrelevant.

Examples and sample identities MUST NOT rely on stereotypes or imply that one language, region, discipline, institution type, or publishing model is the default for scholarship.

## 5. Document categories

Every OMI technical document MUST declare its category.

### 5.1 Specification

A specification defines normative structures, behaviours, constraints, or interoperability requirements.

Identifier form:

```text
OMI-SPEC-NNN
```

### 5.2 Profile

A profile selects, constrains, or extends one or more specifications for a defined community, discipline, workflow, or publication context.

Identifier form:

```text
OMI-PROFILE-NNN
```

A profile MUST NOT silently contradict the specification it profiles. Any deliberate incompatibility requires a separate specification version or an explicitly non-conformant extension.

### 5.3 Registry

A registry defines controlled identifiers, values, media types, roles, capabilities, or extension points.

Identifier form:

```text
OMI-REG-NNN
```

Registry entries MUST have stable identifiers and documented lifecycle states.

### 5.4 Schema

A schema is a machine-readable formalisation of part of the OMI data model.

Identifier form:

```text
OMI-SCHEMA-NNN
```

A schema document MUST state which prose specification version it implements.

### 5.5 Example

An official example illustrates conformant or deliberately non-conformant content.

Identifier form:

```text
OMI-EXAMPLE-NNN
```

Examples MUST state whether they are:

- normative;
- informative;
- valid;
- invalid;
- minimal;
- comprehensive;
- profile-specific.

### 5.6 Governance document

A governance document defines project process, authority, lifecycle, versioning, editorial practice, or contribution rules.

Governance documents do not receive `OMI-SPEC` identifiers unless they directly define implementer conformance.

## 6. File and identifier conventions

### 6.1 Filenames

Markdown filenames MUST use lowercase kebab case.

Correct:

```text
bibliographic-record-model.md
reference-library-architecture.md
specification-lifecycle.md
```

Incorrect:

```text
BibliographicRecordModel.md
reference_library.md
Reference Library.md
```

### 6.2 Permanent identifiers

A permanent document identifier MUST NOT change when:

- the title changes;
- the file is moved;
- the sidebar category changes;
- the document is translated;
- a new minor or patch version is published.

### 6.3 Headings and anchors

Heading text SHOULD remain stable after publication because generated anchors may be used externally.

When a heading must change, the site SHOULD preserve a redirect or explicit legacy anchor where supported.

### 6.4 Property names

Machine-readable property names MUST use lower camel case unless another mapping standard requires a different convention.

Examples:

```json
{
  "documentLanguage": "en",
  "bibliographicTargetId": "ref-001",
  "createdAt": "2026-08-06T16:00:00Z"
}
```

Boolean properties SHOULD use affirmative names that describe the `true` state.

Preferred:

```text
isArchived
preserveUnknownProperties
requiresReview
```

Avoid:

```text
notArchived
noPreservation
skipNoReview
```

### 6.5 Enumeration values

Enumeration values SHOULD use lowercase kebab case:

```text
journal-article
co-author
review-candidate
```

Once published in a stable specification, enumeration values MUST NOT be renamed within the same major version.

## 7. Required document metadata

Every specification MUST begin with human-readable metadata containing at least:

| Field | Requirement |
|---|---|
| Identifier | Permanent OMI identifier |
| Title | Official title |
| Version | Document version |
| Status | Lifecycle state |
| Document type | Normative, informative, or mixed |
| Editors | Responsible editors or editorial group |
| Last updated | ISO 8601 date |
| Replaces | Earlier document, when applicable |
| Replaced by | Successor, when applicable |
| Depends on | Normative dependencies |
| Used by | Known dependent specifications |
| Implementation status | Summary or link to implementation matrix |

The Docusaurus front matter SHOULD contain only publication metadata needed by the site, such as title, sidebar label, and ordering. Normative metadata MUST remain visible in the rendered document body.

## 8. Standard specification structure

A normative OMI specification SHOULD use the following structure. Sections MAY be omitted only when they are not applicable.

### 8.1 Abstract

A concise description of what the specification defines and why it exists.

The abstract SHOULD NOT contain normative requirements.

### 8.2 Status of this document

This section states:

- lifecycle status;
- stability expectations;
- whether implementation claims are appropriate;
- whether incompatible change remains possible;
- where issues and revisions are discussed.

### 8.3 Conformance

This section defines:

- classes of conforming implementation;
- mandatory capabilities;
- optional capabilities;
- profile relationships;
- how conformance is tested or declared.

### 8.4 Scope

The scope section defines what the document covers.

It SHOULD also include an explicit **Out of scope** subsection where boundary confusion is likely.

### 8.5 Terminology

The document MUST define specialised terms not already defined by the central OMI terminology document.

Definitions SHOULD be concise and non-circular.

### 8.6 Design principles

This informative section explains the architectural principles that guide the specification.

Design principles MUST NOT substitute for testable normative requirements.

### 8.7 Data model or processing model

The main model section describes entities, properties, relationships, states, and processing behaviour.

The prose specification remains authoritative unless the document explicitly states that a machine-readable artefact is authoritative for a defined subset.

### 8.8 Validation and error handling

The document SHOULD define:

- invalid input;
- unsupported input;
- warnings;
- recoverable and non-recoverable failures;
- error reporting requirements;
- preservation behaviour.

### 8.9 Extensibility

The specification SHOULD identify extension points and define how unknown extensions are handled.

Extensions MUST NOT redefine the meaning of core properties.

### 8.10 Interoperability

This section describes mappings to external standards and distinguishes:

- lossless mappings;
- conditionally lossless mappings;
- lossy mappings;
- unsupported constructs.

### 8.11 Security, privacy, and integrity considerations

Every normative specification MUST consider whether it introduces risks related to:

- active content;
- external resource retrieval;
- identifier spoofing;
- untrusted metadata;
- personal information;
- hidden annotations;
- access control;
- signature or provenance integrity;
- denial of service;
- unsafe rendering.

A statement that no specific considerations are known is acceptable only after explicit review.

### 8.12 Accessibility considerations

Specifications affecting user-facing presentation or interaction SHOULD state accessibility requirements or expected mappings.

### 8.13 Internationalisation considerations

Specifications affecting text, names, dates, sorting, identifiers, or rendering MUST consider:

- Unicode;
- language tags;
- bidirectional text;
- localised names;
- script variation;
- transliteration;
- locale-neutral machine values;
- time zones and calendar representation.

### 8.14 Examples

Examples SHOULD appear near the rule they illustrate. Large complete examples SHOULD be maintained as separate validated files and linked from the specification.

### 8.15 References

References MUST be divided into:

- **Normative references**: required to implement or interpret the specification;
- **Informative references**: background or related material.

### 8.16 Change history

A version history SHOULD summarise substantive changes. Git history alone is not an adequate replacement for a published change history.

## 9. Terminology rules

### 9.1 Central definitions

Terms with cross-specification meaning MUST be defined in the central OMI terminology document.

A specification MAY narrow a term for its own scope but MUST NOT silently assign a conflicting meaning.

### 9.2 Preferred core terms

The following distinctions MUST be preserved.

#### Manuscript

A scholarly work represented as an editable, structured intellectual object across its lifecycle.

#### Document

A concrete structured representation or package of content. A manuscript may have multiple document representations or versions.

#### Scholarly object

An identifiable semantic entity within or associated with a manuscript.

#### Bibliographic record

A structured description of a cited or citable resource, independent of a particular citation occurrence.

#### Reference library

The manuscript-level collection of bibliographic records selected for possible or actual citation.

#### Citation occurrence

A reference from a specific location in a manuscript to a reference-library entry, optionally including locators, prefixes, suffixes, and citation intent.

#### Rendered citation

Presentation text generated from a citation occurrence, bibliographic record, and rendering profile.

#### Anchor

A stable or resolvable reference to a location, range, object, or state within scholarly content.

#### Annotation

A scholarly object that associates a body of commentary or structured information with one or more targets.

#### Profile

A declared set of constraints, defaults, or extensions applied to one or more OMI specifications for a defined purpose.

### 9.3 Capitalisation

Generic concepts use lowercase:

> a manuscript, a citation occurrence, a profile

Official document and component names use title case:

> Citation Model, Open Manuscript Studio, OMI Specification Registry

Property names and literal values MUST be formatted as code:

> The `documentLanguage` property contains a BCP 47 language tag.

### 9.4 Abbreviations

An abbreviation MUST be expanded at first substantive use unless it is universally recognised in the intended technical audience.

Preferred:

> Citation Style Language (CSL)

Subsequent uses MAY use `CSL`.

Acronyms SHOULD NOT be pluralised with an apostrophe.

Correct:

> DOIs, APIs, URLs

## 10. Data model presentation

### 10.1 Entity descriptions

Each entity SHOULD define:

- purpose;
- identifier;
- lifecycle;
- required properties;
- optional properties;
- relationships;
- invariants;
- extension points.

### 10.2 Property tables

Property tables SHOULD use this order:

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|

Additional columns MAY include:

- default;
- constraints;
- source;
- privacy classification;
- version introduced.

### 10.3 Cardinality

Cardinality SHOULD be expressed consistently:

- `0..1` — optional single value;
- `1` — exactly one value;
- `0..*` — zero or more values;
- `1..*` — one or more values.

### 10.4 Null, missing, and empty values

A specification MUST distinguish where relevant between:

- a missing property;
- a property with `null`;
- an empty string;
- an empty array;
- an unknown value;
- a deliberately withheld value;
- a value that does not apply.

These states MUST NOT be treated as equivalent unless the specification explicitly says so.

### 10.5 Dates and times

Machine-readable dates and times MUST use ISO 8601-compatible representations defined by the relevant schema.

An instant SHOULD include a UTC offset. UTC values SHOULD use `Z`.

Example:

```text
2026-08-06T16:10:15Z
```

A date without time MUST NOT be silently interpreted as an instant.

### 10.6 Language tags

Machine-readable language identification MUST use BCP 47 language tags unless a mapping standard imposes another representation.

Examples:

```text
en
hu
de
zh-Hant
sr-Latn
```

## 11. Examples and code blocks

### 11.1 Validity

Code examples claiming conformance MUST be syntactically valid and SHOULD be validated automatically.

Truncated examples MUST contain a visible indication such as a comment or ellipsis and MUST NOT be presented as complete valid documents.

### 11.2 JSON

JSON examples MUST:

- use double quotes;
- use two-space indentation;
- avoid comments in blocks labelled `json`;
- use stable example identifiers;
- avoid real personal data;
- use valid Unicode.

Example:

```json
{
  "id": "citation-001",
  "targetId": "reference-001",
  "locator": {
    "type": "page",
    "value": "24–31"
  }
}
```

### 11.3 XML

XML examples MUST declare namespaces when namespace semantics matter. Prefixes used in examples SHOULD remain consistent across the specification suite.

### 11.4 URLs and identifiers

Examples SHOULD use reserved or clearly fictional values where possible.

Do not use identifiers that could be mistaken for real assigned scholarly identifiers unless the example explicitly cites a real work and the citation is accurate.

### 11.5 Positive and negative examples

Specifications SHOULD include:

- at least one minimal valid example;
- at least one representative valid example;
- invalid examples for important validation rules;
- migration examples when changing existing behaviour.

Invalid examples MUST state why they are invalid.

### 11.6 Example labels

Examples SHOULD be labelled and referenced consistently:

```text
Example 1 — Minimal citation occurrence
Example 2 — Citation with a page locator
Example 3 — Invalid unresolved target
```

## 12. Figures and diagrams

### 12.1 Purpose

A diagram SHOULD clarify relationships, state transitions, architecture, or processing that would be difficult to understand from prose alone.

A diagram MUST NOT be the only normative representation of a requirement.

### 12.2 Accessibility

Every meaningful figure MUST have:

- alternative text;
- a caption;
- an equivalent prose explanation.

Information MUST NOT depend on colour alone.

### 12.3 Diagram source

Editable source for significant diagrams SHOULD be stored in the repository alongside exported assets.

### 12.4 Notation

A specification MUST explain non-obvious notation. UML-like diagrams MUST NOT imply formal UML semantics unless the document explicitly adopts them.

## 13. Tables and lists

Tables SHOULD be used for structured comparison, not as a substitute for long prose sections.

A table MUST have clear column headings. Cells SHOULD contain concise values.

Bulleted lists are appropriate for unordered sets. Numbered lists SHOULD be used only where order or step sequence matters.

Nested lists SHOULD be limited to preserve readability and translation quality.

## 14. Cross-references

### 14.1 Internal references

Normative references to another OMI document MUST use its permanent identifier and SHOULD include its title.

Preferred:

> See OMI-SPEC-006, *Bibliographic Record Model*.

A relative Markdown link MAY accompany the identifier in the source.

### 14.2 Section references

References SHOULD name the section rather than relying only on a section number, because numbers may change during drafting.

Preferred:

> See the “Identifier normalisation” section of OMI-SPEC-006.

### 14.3 External references

External normative references SHOULD point to stable, authoritative sources. A specification SHOULD identify the referenced version or edition when interpretation could change between versions.

### 14.4 Link durability

Documents SHOULD prefer persistent identifiers and canonical documentation URLs over temporary project pages.

## 15. Schema and prose alignment

### 15.1 Authority

Every schema-backed specification MUST state the authority relationship between prose and schema.

Recommended rule:

- prose defines semantics and processing behaviour;
- schema defines machine-checkable structural constraints;
- a conflict is a specification defect that MUST be corrected;
- implementations MUST NOT invent semantics solely from schema mechanics.

### 15.2 Schema descriptions

Schema property descriptions SHOULD use the same terminology as the prose specification and SHOULD link back to the relevant requirement or section where tooling permits.

### 15.3 Defaults

A schema default MUST NOT be treated as an instruction to insert a value unless the prose specification explicitly defines that processing behaviour.

### 15.4 Additional properties

Specifications MUST explicitly define whether unknown properties are:

- rejected;
- ignored;
- preserved;
- exposed to extensions;
- allowed only in declared namespaces.

## 16. Conformance writing

### 16.1 Conformance classes

A specification SHOULD define named conformance classes when not every implementation performs the same role.

Examples:

- conforming producer;
- conforming consumer;
- conforming validator;
- conforming renderer;
- conforming editor;
- conforming preservation processor.

### 16.2 Observable behaviour

Conformance requirements MUST be based on observable input, output, state, or documented capability.

Avoid requirements about internal architecture unless that architecture is necessary for interoperability or security.

Bad:

> Implementations MUST use a relational database.

Better:

> Implementations MUST preserve stable object identifiers across save and reload operations.

### 16.3 Optional features

An optional feature MAY be omitted. If implemented, it MUST satisfy all requirements defined for that feature.

### 16.4 Conformance claims

A conformance claim SHOULD include:

- implementation name and version;
- specification identifier and exact version;
- supported conformance class;
- supported profiles;
- known limitations;
- test-suite version where available.

## 17. Error and warning terminology

OMI documents SHOULD use these terms consistently.

### Error

A condition that violates a normative requirement or prevents the requested operation from completing correctly.

### Warning

A condition that is permitted or recoverable but may cause information loss, reduced interoperability, or unexpected output.

### Unsupported feature

A recognised feature that an implementation does not provide.

### Unknown feature

A feature or extension the implementation does not recognise.

### Invalid value

A value that violates syntax, type, range, cardinality, or semantic constraints.

### Unresolved reference

A reference whose target cannot be identified or accessed in the current processing context.

Specifications SHOULD state whether each condition requires rejection, recovery, preservation, or user notification.

## 18. Interoperability mappings

A mapping document MUST distinguish:

- source model;
- target model;
- mapping direction;
- mapping preconditions;
- preserved information;
- transformed information;
- omitted information;
- generated information;
- ambiguity;
- reversibility.

Mapping tables SHOULD use explicit outcomes such as:

```text
lossless
conditionally lossless
lossy
unsupported
implementation-defined
```

The word “compatible” MUST NOT be used without stating the compatibility dimension.

## 19. Deprecation and supersession language

A deprecated feature remains defined but is no longer recommended for new content or implementations.

Deprecation notices MUST state:

- the deprecated feature;
- the version in which it was deprecated;
- the reason;
- the replacement, when available;
- migration guidance;
- the earliest version in which removal may occur.

A superseded document MUST remain available and MUST identify its successor.

Normative text MUST NOT be silently removed from published stable versions.

## 20. Editorial change classification

Every pull request affecting a specification SHOULD classify changes as one or more of:

- editorial clarification;
- normative clarification;
- compatible normative addition;
- incompatible normative change;
- example correction;
- schema correction;
- security correction;
- translation update;
- deprecation;
- supersession.

The classification SHOULD be consistent with the OMI Versioning Policy.

## 21. Translation guidance

### 21.1 Normative source

Unless explicitly declared otherwise, the English specification is normative and translations are informative.

### 21.2 Source-version binding

Every official translation MUST identify:

- source document identifier;
- exact source version;
- translation version;
- translation status;
- last synchronisation date.

### 21.3 Non-translatable tokens

The following MUST remain unchanged unless a specification defines a localised display label:

- property names;
- enumeration values;
- requirement identifiers;
- schema identifiers;
- media types;
- namespace URIs;
- code;
- literal protocol tokens.

### 21.4 Terminology consistency

Official translations MUST use an approved language-specific terminology list. Translators SHOULD preserve conceptual distinctions even when everyday language tends to merge them.

### 21.5 Normative keywords

Uppercase normative keywords SHOULD remain in English in official translations, accompanied by translated explanation where useful. This avoids ambiguity in legal or technical interpretation.

## 22. AI-assisted editing

AI-assisted tools MAY be used to support drafting, editing, translation, terminology review, example generation, or consistency checking.

### 22.1 Human responsibility

Every published OMI document MUST have a human editor or editorial group responsible for:

- factual accuracy;
- normative correctness;
- consistency with existing specifications;
- intellectual-property compliance;
- security and privacy review;
- final approval.

AI output MUST NOT be treated as authoritative merely because it is fluent or technically styled.

### 22.2 Verification

AI-assisted content MUST be reviewed against:

- the source specification set;
- authoritative external standards;
- schemas and examples;
- implementation behaviour where relevant;
- project terminology.

Generated citations, identifiers, quotations, and external references MUST be independently verified before publication.

### 22.3 Normative changes

An AI-assisted proposal that changes normative behaviour MUST undergo the same lifecycle, review, testing, and versioning requirements as any human-authored proposal.

No normative rule MAY be accepted solely on the basis of an AI recommendation.

### 22.4 Sensitive material

Editors MUST NOT submit confidential manuscripts, personal data, embargoed review material, credentials, private keys, or non-public security information to an AI service unless the service and processing context are explicitly authorised for that information.

### 22.5 Provenance

The project MAY record substantial AI assistance in contribution notes, pull-request descriptions, or editorial metadata. Such disclosure SHOULD describe the role of the tool rather than attributing authorship or responsibility to it.

Example:

> AI-assisted language and consistency review; all normative content verified and approved by the listed editor.

Minor spelling, grammar, search, or formatting assistance does not require document-level disclosure unless project policy or applicable rules require it.

### 22.6 Translation

Machine-generated translations MUST be treated as drafts until reviewed by a competent human translator or subject-matter reviewer.

A machine translation MUST NOT be labelled an official OMI translation without human review and source-version verification.

## 23. Repository and pull-request practices

### 23.1 One coherent concern

A specification pull request SHOULD address one coherent architectural or editorial concern. Unrelated refactoring SHOULD be separated where practical.

### 23.2 Pull-request description

A pull request SHOULD state:

- what changed;
- why it changed;
- whether behaviour is normative;
- compatibility impact;
- affected specifications and schemas;
- validation performed;
- unresolved questions.

### 23.3 Reviewable diffs

Large mechanical reformatting SHOULD be separated from substantive normative changes so reviewers can identify behavioural differences.

### 23.4 Generated files

Generated artefacts SHOULD identify their source and generation command. Generated files MUST NOT be edited manually unless the workflow explicitly permits it.

### 23.5 Validation

Before merge, applicable checks SHOULD include:

- Markdown build;
- internal-link validation;
- JSON and XML syntax validation;
- schema validation;
- example tests;
- terminology checks;
- duplicate identifier checks;
- translation-key checks.

## 24. Accessibility and readability

OMI specifications SHOULD be usable by readers with different devices and access needs.

Authors MUST:

- use a logical heading hierarchy;
- provide descriptive link text;
- provide alternative text for meaningful images;
- avoid conveying meaning by colour alone;
- identify the language of non-English passages where tooling supports it;
- avoid unnecessarily wide tables;
- explain symbols and abbreviations;
- keep paragraphs focused.

Technical precision takes priority over arbitrary readability scores, but unnecessarily complex sentences SHOULD be rewritten.

## 25. Quality checklist

Before a document advances to **Review Candidate**, editors SHOULD confirm all applicable items below.

### 25.1 Identity and scope

- [ ] The document has a stable identifier.
- [ ] Version and lifecycle status are declared.
- [ ] Scope and out-of-scope boundaries are clear.
- [ ] Dependencies and related specifications are listed.

### 25.2 Terminology

- [ ] Terms match the central OMI terminology.
- [ ] New terms are defined.
- [ ] Similar concepts are distinguished consistently.
- [ ] Property names and literal values use code formatting.

### 25.3 Normative quality

- [ ] Normative keywords are used intentionally.
- [ ] Requirements are independently testable.
- [ ] Requirement identifiers are assigned where required.
- [ ] Optional behaviour is explicit.
- [ ] Error handling is defined.
- [ ] Conformance classes are defined where needed.

### 25.4 Models and examples

- [ ] Entities, relationships, and cardinalities are explicit.
- [ ] Missing, null, empty, and unknown states are distinguished.
- [ ] Examples are syntactically valid.
- [ ] Important invalid cases are demonstrated.
- [ ] Examples do not expose personal or confidential data.

### 25.5 Interoperability

- [ ] External mappings state direction and information loss.
- [ ] Unknown extension handling is defined.
- [ ] Version and migration effects are documented.
- [ ] Schema and prose are aligned.

### 25.6 Risk review

- [ ] Security considerations have been reviewed.
- [ ] Privacy and provenance implications have been reviewed.
- [ ] Accessibility considerations are addressed.
- [ ] Internationalisation considerations are addressed.

### 25.7 Publication

- [ ] Internal links resolve.
- [ ] Normative and informative references are separated.
- [ ] Change history is updated.
- [ ] The site builds successfully.
- [ ] Official translations identify the exact source version.

## 26. Exceptions

A specification MAY depart from this guide when the subject requires a different presentation or notation.

An exception MUST:

- be explicit;
- be limited in scope;
- state the reason;
- preserve interoperability and reviewability;
- be approved through the normal review process.

Convenience or legacy formatting alone is not sufficient justification for a permanent exception.

## 27. Maintenance of this guide

This guide is governed by the OMI Specification Lifecycle and Versioning Policy.

Editorial corrections MAY be released as patch versions. Compatible additions MAY be released as minor versions. Changes that invalidate established document structure, identifiers, or interpretation require a major version.

Changes to this guide SHOULD be evaluated against their effect on:

- existing specifications;
- official translations;
- automated tooling;
- schema documentation;
- external citations;
- contributor workflow.

## 28. Summary

OMI specifications must function as more than explanatory prose. They are long-lived technical agreements between authors, editors, publishers, repositories, software developers, preservation systems, and future implementers.

Consistent structure, precise terminology, testable requirements, durable identifiers, verified examples, and accountable editorial review are therefore essential parts of the standard itself.
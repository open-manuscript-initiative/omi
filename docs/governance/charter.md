---
title: Open Manuscript Initiative Charter
sidebar_position: 1
---

# Open Manuscript Initiative Charter

## Establishing an Open Standard for Scholarly Communication

| Field | Value |
| --- | --- |
| Status | Draft |
| Version | 0.1 |
| Document type | Governance |
| Normative language | English |

## Preamble

Scholarly communication has become increasingly dependent on proprietary software, publisher-specific workflows, and incompatible document formats. Authors, editors, reviewers, publishers, libraries, and repositories frequently recreate, reformat, or restructure the same scholarly work to satisfy the technical requirements of different systems.

The Open Manuscript Initiative (OMI) exists to change this paradigm.

OMI does not aim to prescribe one editor, one publishing platform, one repository, or one production workflow. It defines an open, vendor-neutral, semantic foundation for scholarly manuscripts so that independently developed tools and services can exchange, process, publish, and preserve scholarly content without discarding its structure or meaning.

This Charter establishes the mission, values, scope, governance principles, and long-term objectives of the Open Manuscript Initiative.

## Mission

The mission of OMI is to develop, maintain, and promote open specifications for scholarly manuscripts that:

- preserve semantic meaning independently from presentation;
- enable reliable exchange between authoring, editorial, publishing, repository, and preservation systems;
- support diverse scholarly disciplines and publication practices;
- remain independent of individual publishers, vendors, software products, and hosting providers;
- support long-term accessibility, validation, reuse, and preservation of scholarly knowledge;
- permit multiple independent and interoperable implementations.

## Vision

OMI envisions a scholarly communication ecosystem in which:

- researchers can write naturally while producing structured scholarly objects;
- manuscripts remain portable throughout drafting, collaboration, review, publication, dissemination, and preservation;
- software competes through usability and functionality rather than proprietary document lock-in;
- journals, publishers, repositories, and institutions can adopt shared open interfaces and data models;
- scholarly content can be transformed into multiple publication formats from one authoritative source;
- the meaning, provenance, relationships, and version history of scholarly content remain machine-readable.

## Core values

### Openness

OMI specifications, schemas, examples, and governance documents are developed publicly. Anyone may read, discuss, implement, test, and propose improvements to them, subject to the project’s contribution and governance procedures.

### Vendor neutrality

No publisher, software vendor, institution, commercial entity, or implementation controls the specification. OMI is intended to serve the scholarly communication ecosystem as a whole.

### Interoperability

Design decisions should improve the ability of independent systems to exchange and process scholarly content. Compatibility and explicit mappings are preferred over isolated or proprietary conventions.

### Semantic first

The scholarly meaning and relationships of content take precedence over visual formatting. Presentation is treated as a separate, replaceable layer.

### Portability

A conforming manuscript must not depend on one application, database, platform, publisher, or hosting provider for its interpretation.

### Extensibility

OMI should support disciplined extension without requiring every implementation to understand every domain-specific feature. Extension mechanisms must preserve identifiable core semantics and avoid silent incompatibility.

### Transparency

Technical and governance decisions should be documented publicly, version controlled, and attributable. Normative behaviour must be defined by published specifications rather than hidden implementation details.

### Long-term preservation

Scholarly content should remain understandable and processable after the software originally used to create it has changed or disappeared.

### Implementation diversity

The standard must remain independent of any reference implementation. Competing and complementary implementations are encouraged.

## Scope

OMI may specify:

- scholarly object and document models;
- manuscript structure and semantic content types;
- metadata, identities, affiliations, and contributor roles;
- stable anchors, annotations, review objects, and editorial decisions;
- multilingual content and translation relationships;
- bibliographic records, reference libraries, and citation occurrences;
- validation rules and machine-readable validation reports;
- versioning, provenance, and change representation;
- file formats, containers, interchange mappings, and APIs;
- publication, rendering, and preservation profiles;
- extension and capability mechanisms;
- conformance requirements for implementations.

OMI does not prescribe:

- editorial policy or the scholarly merit of submissions;
- peer-review policy, anonymity model, or acceptance criteria;
- publisher branding or visual identity;
- commercial, subscription, or funding models;
- content licences chosen by authors or publishers;
- repository governance or institutional policy;
- a mandatory user interface, programming language, database, or deployment model.

## Relationship between the standard and implementations

The OMI specifications define the standard.

Open Manuscript Studio is a reference implementation used to test, demonstrate, and refine the specifications. Its current behaviour does not automatically become normative. When an implementation and a published normative specification differ, the specification governs conformance unless the specification itself is formally revised.

Alternative implementations are explicitly encouraged, including editors, validators, converters, repository integrations, publishing services, command-line tools, and server platforms.

## Governance principles

OMI follows an open and documented governance model.

Major architectural and normative decisions should be:

- publicly proposed and discussed;
- supported by a documented technical rationale;
- assessed for interoperability, compatibility, and preservation consequences;
- tested through examples or implementations where practical;
- recorded in version control;
- incorporated through an explicit specification lifecycle.

Consensus is preferred. Where consensus cannot be reached, the project must document the decision, alternatives considered, and known objections.

Governance authority must not be derived solely from financial contribution, institutional status, or control of a particular implementation.

## Specification lifecycle

OMI specifications progress through declared lifecycle stages:

1. **Exploratory** — a problem space or architectural proposal under investigation.
2. **Draft** — a structured proposal that may still change substantially.
3. **Review Candidate** — a document considered complete enough for broad technical review.
4. **Implementation Candidate** — a specification intended for implementation testing and interoperability work.
5. **Stable** — a specification with defined conformance expectations and controlled compatibility rules.
6. **Deprecated** — a specification retained for compatibility but no longer recommended for new implementations.
7. **Superseded** — a specification replaced by an identified successor.

Every published specification must declare its identifier, version, status, scope, dependencies, and implementation maturity.

## Versioning and compatibility

OMI uses explicit version identifiers and compatibility rules.

- Major versions may introduce incompatible changes and require migration guidance.
- Minor versions may introduce compatible capabilities or extensions.
- Patch versions may clarify text, correct errors, or improve non-normative examples without changing required behaviour.

Backward compatibility should be preserved whenever technically feasible. Breaking changes require documented justification, impact analysis, and migration guidance.

Permanent specification identifiers remain stable even when titles, filenames, or document locations change.

## Normative language and translations

English is the normative language of the OMI specifications unless a future governance decision explicitly establishes another arrangement.

Official translations may be published in other languages. Translations are informative unless explicitly declared normative. When a translation and the normative English text differ, the normative text governs interpretation.

## Community and participation

OMI welcomes participation from, among others:

- researchers and authors;
- journal and book editors;
- publishers and production specialists;
- librarians, archivists, and repository managers;
- software developers and system architects;
- digital humanities and research-infrastructure specialists;
- metadata, identifier, preservation, and standards experts;
- reviewers, translators, and accessibility specialists.

Contributions should be assessed according to technical merit, evidence, interoperability impact, and alignment with the Charter rather than institutional affiliation.

The project should maintain accessible contribution paths for both technical and non-technical participants.

## Open ecosystem

OMI is intended to complement and interoperate with established scholarly standards, identifiers, vocabularies, and infrastructures. Relevant systems may include JATS, Crossref, DataCite, DOI, ORCID, ROR, CSL, BibTeX, RIS, Dublin Core, schema.org, OpenAlex, library catalogues, repositories, and preservation services.

OMI does not seek to replace these systems where reliable open infrastructure already exists. It seeks to connect them through a coherent manuscript-level semantic model.

## Security, privacy, and research integrity

Specifications must consider security, privacy, provenance, access control, and research-integrity implications where relevant.

OMI must not require public disclosure of private review material, personal data, confidential drafts, or restricted research content. Implementations should support appropriate access control and data-minimisation practices.

Provenance and versioning mechanisms should make significant scholarly and editorial changes attributable and auditable without prescribing one institutional workflow.

## Long-term objectives

The Initiative aims to establish:

- a coherent suite of open scholarly manuscript specifications;
- a stable and extensible scholarly object model;
- canonical machine-readable schemas and validation rules;
- documented import and export mappings;
- reference implementations and conformance tests;
- multiple independent interoperable implementations;
- multilingual explanatory documentation;
- sustainable, transparent community governance;
- broad adoption across scholarly authoring, publishing, repository, and preservation environments.

## Amendment of this Charter

Changes to this Charter require public documentation and explicit approval through the OMI governance process. Proposed amendments must explain their purpose, expected impact, and relationship to the existing mission and values.

Changes must not silently weaken openness, vendor neutrality, interoperability, or the independence of the standard from individual implementations.

## Commitment

The Open Manuscript Initiative is committed to scholarly communication that is open, portable, transparent, interoperable, and durable.

OMI is not merely a software project. It is an effort to establish a common language for scholarly manuscripts—one that allows knowledge to move between systems while preserving its meaning, structure, relationships, provenance, and integrity for future generations.

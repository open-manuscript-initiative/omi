---
id: file-format
title: OMI-SPEC-320 — File Format
sidebar_label: File Format
description: Normative logical JSON representation, parsing, serialization, validation, extension, history-exchange, and migration rules for portable OMI manuscripts.
keywords:
  - Open Manuscript Initiative
  - OMI
  - manuscript file format
  - JSON Schema
  - interoperability
  - preservation
---

# OMI-SPEC-320 — File Format

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-320` |
| Title | File Format |
| Version | `0.2.0` |
| Status | Draft |
| Document type | Normative |
| Normative language | English |
| Editors | OMI maintainers |
| Last updated | 2026-09-05 |
| Legacy identifier | `OMI-SPEC-011` |
| Replaces | `OMI-SPEC-320@0.1.0` |
| Replaced by | None |
| Depends on | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| Used by | `OMI-SPEC-230`, `OMI-SPEC-330`, `OMI-SPEC-340`, `OMI-SPEC-350` |
| Schema | [`omi-manuscript-0.2.schema.json`](/schemas/omi-manuscript-0.2.schema.json) |
| Media type | `application/vnd.openmanuscript+json` (provisional) |
| File extension | `.omi.json` |
| Profiles | Core Snapshot; History Exchange; Lossless Round Trip |
| Implementation status | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue tracker | Open Manuscript Initiative repository issues |

## 1. Abstract

This specification defines the portable logical representation of an Open Manuscript Initiative manuscript. It specifies a UTF-8 JSON document, a versioned identification envelope, required manuscript fields, ordered semantic collections, references, extension data, optional history exchange, parsing and serialization behaviour, layered validation, diagnostics, unknown-field preservation, and migration records.

The format represents scholarly state rather than page layout or an editor's runtime state. An implementation may store the same manuscript in a database, an event log, multiple files, or another internal form, but an exported OMI manuscript conforming to this specification has the same observable JSON semantics.

This specification deliberately does not define the physical `.omi` archive, ZIP entry layout, checksums, compression, or package path rules. Those concerns belong to [OMI-SPEC-330 — Container Architecture](./container-architecture.md). A container may carry a document conforming to this specification as one of its parts.

## 2. Status of this document

This document is a **Draft** specification of the Open Manuscript Initiative.

Version `0.2.0` is the first template-complete File Format draft with a published JSON Schema, conformance fixtures, explicit processing rules, and stable requirement identifiers. It replaces the incomplete `0.1.0` draft, which combined logical-format and physical-container concerns without defining interoperable parsing or validation behaviour.

Property names, profiles, schema constraints, and migration rules may still change incompatibly before version 1.0. A conformance claim MUST identify this exact specification version or an immutable repository revision.

The published schema is normative for structural constraints. Prose requirements govern semantic, processing, security, preservation, and round-trip behaviour that JSON Schema cannot express. When the schema and this document conflict, the conflict is a specification defect and implementations SHOULD report it; until corrected, the prose requirement with the more specific requirement identifier governs.

## 3. Conformance

### 3.1 Normative terms

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHOULD**, **SHOULD NOT**, **MAY**, and **OPTIONAL** are to be interpreted as described by BCP 14 when, and only when, they appear in all capitals.

Every normative requirement in this document has a stable identifier of the form `REQ-FMT-NNN`. A test report, issue, exception, or implementation claim SHOULD cite the applicable identifiers.

### 3.2 Conformance classes

This specification defines five implementation classes:

- **Conforming producer:** creates or exports an OMI manuscript document.
- **Conforming consumer:** parses, imports, presents, indexes, or transforms an OMI manuscript document.
- **Conforming validator:** evaluates a document and returns structured diagnostics.
- **Conforming migrator:** converts a document from one declared format version to another.
- **Conforming lossless processor:** reads and writes a document while preserving every supported and unsupported data item that it does not intentionally change.

An implementation MAY claim more than one class. A conforming implementation MUST satisfy all requirements applicable to its claimed classes and profiles.

### 3.3 Conformance profiles

A conformance claim MUST declare at least one of the following profiles.

#### Core Snapshot

The Core Snapshot profile exchanges one current manuscript state. It requires the root identification envelope, manuscript identity, language, title, section hierarchy, and timestamps. It does not imply that revision ancestry is present.

#### History Exchange

The History Exchange profile exchanges the current state together with portable revision history governed by `OMI-SPEC-160`. It requires an explicit history completeness declaration, a head revision, and internally consistent revision links.

#### Lossless Round Trip

The Lossless Round Trip profile applies to processors that may not understand all extensions or future fields. Such processors preserve unmodified unknown data and report any requested operation that would discard or reinterpret it.

### 3.4 Conformance claim

A conformance claim SHOULD state:

- implementation name and version;
- `OMI-SPEC-320` version;
- implementation class or classes;
- declared profile or profiles;
- supported format-version range;
- supported extension namespaces;
- maximum accepted input size, nesting depth, and collection sizes;
- validation and migration capability;
- fixture-suite or test revision used;
- known data-loss conditions.

**REQ-FMT-001:** A producer MUST emit a top-level JSON object conforming to the identification, data-model, and serialization requirements of this specification.

**REQ-FMT-002:** A consumer MUST determine the declared OMI format and version before interpreting manuscript fields.

**REQ-FMT-003:** A validator MUST evaluate JSON syntax, the version-appropriate schema, applicable semantic constraints, and every declared profile.

**REQ-FMT-004:** A migrator MUST preserve the original input and produce an explicit migration record before exposing a converted document as equivalent to that input.

**REQ-FMT-005:** A lossless processor MUST preserve unknown extension members and unknown unmodified members, or stop and report the exact data that would be lost.

## 4. Scope

This specification defines:

- a single-file JSON representation of logical manuscript state;
- format identification and version negotiation;
- common JSON, string, number, timestamp, language-tag, URI, and identifier rules;
- the root manuscript fields and portable collection conventions;
- ordered section and block structure;
- references among addressable scholarly objects;
- logical asset metadata and references;
- optional inline history exchange;
- producer, consumer, validator, migrator, and lossless-processing behaviour;
- structural, referential, semantic, profile, and policy validation layers;
- machine-readable diagnostic records;
- extension namespaces and unknown-field handling;
- deterministic serialization and optional canonicalization;
- compatibility and migration reporting;
- security, privacy, preservation, accessibility, and internationalization requirements.

### 4.1 Out of scope

This specification does not define:

- the physical `.omi` container or ZIP layout;
- package paths, compression, checksums, signatures, or encryption;
- a database schema or event-store implementation;
- editor component state, selection state, undo stacks, caches, or session data;
- page geometry, pagination, line breaking, or publication styling;
- the complete semantics of sections, blocks, agents, citations, annotations, or revisions;
- a real-time collaboration protocol;
- access-control policy;
- remote asset retrieval policy;
- a universal rich-text editing-tree format;
- PDF, HTML, EPUB, DOCX, JATS XML, Crossref XML, or DataCite XML serialization.

Those concerns are defined by the relevant OMI semantic, workflow, publication, API, or container specifications.

## 5. Terminology

The [OMI Terminology and Definitions](../governance/terminology.md) document applies.

### 5.1 OMI manuscript document

A UTF-8 JSON document whose top-level value is an object, whose `omi.format` value is `manuscript`, and whose declared format version is governed by this specification.

### 5.2 Format version

The semantic version in `omi.version` that selects the File Format rules and schema. It is not the manuscript revision, application version, OMI suite version, container version, or publication edition.

### 5.3 Core member

A JSON object member defined by this specification or by an OMI specification named in `omi.specifications`.

### 5.4 Extension member

A member inside the `extensions` object whose name is an absolute namespace URI or URN and whose value is controlled by that namespace owner.

### 5.5 Unknown member

A member that a particular processor does not understand. A member may be known to the format but unknown to an older implementation.

### 5.6 Addressable object

A manuscript object with an `id` that may be referenced independently, including a section, block, annotation, citation, bibliographic record, asset, agent, contribution, tombstone, or revision.

### 5.7 Snapshot

One represented manuscript state. A snapshot may identify the revision it represents but does not, by itself, imply complete revision ancestry.

### 5.8 Original input

The exact byte sequence accepted by a consumer or migrator before parsing, repair, normalization, or conversion.

### 5.9 Quarantine

A safe state in which an implementation retains a document but does not treat it as a successfully imported, editable, or executable manuscript.

## 6. Design principles

The File Format follows these principles:

1. **Semantic source:** the manuscript is a source for publication outputs, not a record of one rendered page layout.
2. **Explicit identity:** format, schema, manuscript, and addressable-object identities are never inferred from a filename alone.
3. **Inspectable representation:** the core document is ordinary UTF-8 JSON.
4. **Implementation independence:** portable state excludes editor-specific runtime and account state.
5. **Layered validation:** syntax, structure, references, semantics, profiles, and local policy are distinguishable.
6. **Forward-compatible preservation:** unknown data is isolated, retained, and never silently reinterpreted.
7. **Migration with evidence:** conversion is explicit, reproducible, and loss-aware.
8. **Container separation:** logical JSON semantics do not depend on an archive layout.
9. **Stable object identity:** references use identifiers rather than rendered position or array index.
10. **Safe by default:** parsing does not execute content or silently fetch external resources.

## 7. Model overview

An OMI manuscript document consists of five logical areas:

| Area | Representative members | Purpose |
|---|---|---|
| Identification | `schema`, `omi` | Selects this format, version, profiles, and dependent specifications |
| Manuscript state | `id`, `locale`, `title`, `sections` | Represents the current scholarly state |
| Related objects | `agents`, `contributions`, `annotations`, `citations`, `assets` | Holds addressable supporting objects and relations |
| History | `versioningModelVersion`, `headRevisionId`, `revisionHistory` | Optionally exchanges revision evidence |
| Extensions | `extensions` | Carries namespaced non-core data |

The root object is one logical document. A container may externalize selected collections into separate parts only when `OMI-SPEC-330` defines how those parts are reassembled into the same logical model. Reassembly MUST NOT change the meaning of the document.

## 8. Common representation rules

### 8.1 JSON and character encoding

**REQ-FMT-006:** An OMI manuscript document MUST be valid JSON encoded as UTF-8. Producers MUST NOT emit a byte-order mark. Consumers MAY accept a byte-order mark for recovery but MUST issue a warning.

**REQ-FMT-007:** JSON object member names MUST be unique within each object. A consumer MUST detect duplicate names before or during parsing and MUST NOT silently apply a first-wins or last-wins rule.

**REQ-FMT-008:** The top-level JSON value MUST be an object. JSON `null`, arrays, strings, numbers, and booleans are invalid as the top-level value.

**REQ-FMT-009:** Strings MUST contain well-formed Unicode scalar values. Producers MUST NOT emit unpaired UTF-16 surrogate code points.

Object-member order has no semantic meaning. Array order has semantic meaning unless the defining OMI specification explicitly declares the array to be unordered.

### 8.2 Numbers

**REQ-FMT-010:** A producer MUST NOT emit `NaN`, positive or negative infinity, or another non-JSON numeric token.

**REQ-FMT-011:** An integer represented as a JSON number MUST lie in the interoperable range `-(2^53)+1` through `(2^53)-1`. A value requiring greater precision MUST be represented as a string with semantics defined by its governing field.

Exact identifiers, checksums, decimal quantities, page locators, and external numeric codes SHOULD be strings unless their governing specification explicitly requires JSON numbers.

### 8.3 Presence, null, and empty values

**REQ-FMT-012:** Absence means that a value was not supplied or is not applicable. `null` MUST be used only where the governing schema explicitly permits it. An empty string MUST NOT be used as a substitute for an absent required value.

An empty array means a known empty collection. A producer SHOULD emit an empty array for a required collection with no members and SHOULD omit an optional collection whose state is unknown or not represented.

### 8.4 Timestamps

**REQ-FMT-013:** A timestamp field governed by this specification MUST be an RFC 3339 date-time with an explicit UTC designator or numeric offset. A date without a time zone MUST NOT be used for an instant.

Producers SHOULD emit UTC timestamps with uppercase `T` and `Z`. Consumers MUST compare parsed instants rather than raw timestamp strings.

### 8.5 Language tags

**REQ-FMT-014:** A language field MUST use a well-formed BCP 47 language tag. Tags are case-insensitive; producers SHOULD use the recommended casing without changing the tag's meaning.

### 8.6 URIs

**REQ-FMT-015:** A field defined as a URI MUST contain an absolute URI unless the governing field explicitly permits a relative reference. A consumer MUST resolve relative references only against an explicitly declared base URI.

### 8.7 Identifiers

**REQ-FMT-016:** Every addressable object MUST have a non-empty string `id`. The identifier MUST be unique within the manuscript identity scope and MUST remain stable while the scholarly object retains its identity.

**REQ-FMT-017:** An implementation MUST NOT reuse the identifier of a deleted object for a different object. Where deletion traceability is declared, the identifier MUST remain represented by a tombstone or equivalent history evidence.

Identifiers are opaque. A consumer MUST NOT infer object type, ownership, location, revision order, or access rights from identifier spelling.

## 9. Root manuscript object

### 9.1 Required members

The Core Snapshot profile requires the following root members:

| Member | Type | Cardinality | Meaning |
|---|---|---:|---|
| `schema` | string URI | 1 | Immutable schema identifier for this format version |
| `omi` | object | 1 | Format and dependency envelope |
| `id` | string | 1 | Manuscript identity |
| `locale` | string | 1 | Primary BCP 47 language tag |
| `title` | string | 1 | Non-empty manuscript title |
| `sections` | array | 1 | Ordered top-level sections |
| `createdAt` | string | 1 | Creation instant |
| `updatedAt` | string | 1 | Instant represented state was last updated |

**REQ-FMT-018:** A Core Snapshot producer MUST emit every required root member and MUST satisfy the published version-specific schema.

**REQ-FMT-019:** `updatedAt` MUST represent an instant equal to or later than `createdAt`. A validator MUST report a semantic error when it does not.

### 9.2 Recommended and optional members

The following root members are defined for interoperable exchange. Their detailed object semantics belong to their governing OMI specifications.

| Member | Type | Order | Notes |
|---|---|---|---|
| `subtitle` | string | n/a | Optional subtitle |
| `abstract` | string or portable content object | n/a | Abstract without publication layout |
| `keywords` | array of strings | significant | Authorial order when supplied |
| `agents` | array of objects | not authority-bearing | Identity objects from `OMI-SPEC-150` |
| `contributions` | array of objects | significant when role order is declared | Agent-to-object relations |
| `tombstones` | array of objects | not chronological unless declared | Deletion evidence |
| `annotations` | array of objects | significant when presentation order is declared | Annotation objects from `OMI-SPEC-130` |
| `bibliographicRecords` | array of objects | not citation order | Records from `OMI-SPEC-220` |
| `citations` | array of objects | significant where citation order is declared | Occurrences from `OMI-SPEC-210` |
| `citationClusters` | array of objects | significant | Ordered citation groupings |
| `crossReferences` | array of objects | significant where presentation order is declared | Semantic internal references |
| `assets` | array of objects | not rendering order | Logical asset metadata |
| `extensions` | object | n/a | Namespaced extension values |

**REQ-FMT-020:** Portable exports MUST NOT contain passwords, access tokens, refresh tokens, session identifiers, private keys, undisclosed local filesystem paths, or other credentials.

**REQ-FMT-021:** Portable exports MUST NOT treat editor selections, cursors, viewport state, undo stacks, caches, transient validation messages, or account-specific UI preferences as canonical manuscript state.

### 9.3 Example envelope

```json
{
  "schema": "https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json",
  "omi": {
    "format": "manuscript",
    "version": "0.2.0",
    "profiles": ["core-snapshot"],
    "specifications": {
      "OMI-SPEC-100": "0.1.0",
      "OMI-SPEC-120": "0.1.0",
      "OMI-SPEC-140": "0.1.0"
    }
  },
  "id": "urn:uuid:d3c23cd5-ffb8-4f16-8db5-68e32fa78d82",
  "locale": "en",
  "title": "A portable manuscript",
  "sections": [],
  "createdAt": "2026-09-05T08:00:00Z",
  "updatedAt": "2026-09-05T08:00:00Z"
}
```

## 10. Format identification and version negotiation

### 10.1 Schema identifier

For this version, `schema` MUST have the exact value:

```text
https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json
```

**REQ-FMT-022:** A producer MUST emit the immutable canonical schema URI for the exact format version. It MUST NOT emit a moving `latest` URI as the authoritative schema identifier.

A consumer MAY use a trusted local copy of the schema and MUST NOT require network access merely because the document contains an HTTPS schema URI.

### 10.2 OMI envelope

The `omi` object has the following members:

| Member | Type | Cardinality | Rule |
|---|---|---:|---|
| `format` | string | 1 | Exact value `manuscript` |
| `version` | semantic-version string | 1 | Exact File Format version emitted by the producer |
| `profiles` | array of strings | 1 | One or more declared conformance profiles |
| `specifications` | object | 1 | OMI specification identifier to exact version mapping |
| `generator` | object | 0..1 | Non-authoritative producer identification |

The registered profile tokens in version `0.2.0` are:

| Token | Profile |
|---|---|
| `core-snapshot` | Core Snapshot |
| `history-exchange` | History Exchange |
| `lossless-round-trip` | Lossless Round Trip |

**REQ-FMT-023:** `omi.format` MUST equal `manuscript` and `omi.version` MUST equal the exact rules used to serialize the document.

**REQ-FMT-024:** `omi.profiles` MUST contain `core-snapshot`, MUST NOT contain duplicate tokens, and MUST declare every additional profile whose required data the producer claims to provide.

**REQ-FMT-025:** `omi.specifications` MUST map each governing OMI specification used by the document to an exact semantic version. A range, branch name, moving tag, or unversioned identifier MUST NOT be used.

The optional `generator` object MAY contain `name`, `version`, and `uri`. A consumer MUST NOT change validation or trust solely because a particular generator is named.

### 10.3 Version handling

**REQ-FMT-026:** A consumer that supports the declared format version MUST use the schema and rules for that version, not the newest version known to the consumer.

**REQ-FMT-027:** A consumer that does not support the declared major version MUST retain or quarantine the original input and MUST NOT expose the document as a successfully imported editable manuscript.

**REQ-FMT-028:** A consumer encountering a newer minor or patch version MAY continue only when its declared compatibility policy permits it. It MUST preserve unknown data and issue a diagnostic identifying the unverified version.

## 11. Manuscript structure

### 11.1 Sections

`sections` is the ordered sequence of top-level manuscript sections. Each section requires:

- `id`: stable object identifier;
- `title`: section title, which MAY be empty only when the governing document model permits an untitled section;
- `blocks`: ordered content-block array.

A section MAY contain `role`, `language`, `children`, `extensions`, and fields defined by the declared document-model version.

**REQ-FMT-029:** A producer MUST preserve section and block order. A consumer MUST NOT derive authoritative order by sorting identifiers or titles.

### 11.2 Blocks

Each block requires an `id` and `type`. A block MAY contain portable `content`, structured `data`, child blocks, language, addressable anchors, asset references, and namespaced extensions.

This File Format does not make an editor-specific rich-text tree portable merely because it is embedded as a JSON string. A declared document-model specification or extension namespace must define the meaning of `content` and `data`.

**REQ-FMT-030:** A conforming producer MUST serialize scholarly content using the portable representation selected by `omi.specifications` or a declared extension. It MUST NOT require a consumer to execute or instantiate the producer's editor framework to recover the scholarly text and structure.

**REQ-FMT-031:** When a processor does not understand a block `type`, it MUST retain the block identity, order, raw portable value, children, and extensions under the Lossless Round Trip profile. It MUST NOT silently convert the block to an empty paragraph.

### 11.3 Collections and references

Objects in root collections are addressable by `id`. Relationships use identifier fields defined by the governing semantic specification, such as `targetBlockId`, `sourceBlockId`, `targetId`, `citationIds`, `creatorAgentId`, or revision parent identifiers.

**REQ-FMT-032:** A reference that is required to resolve within the same document MUST identify an existing object of an allowed type. A validator MUST report an unresolved or type-incompatible reference.

**REQ-FMT-033:** A reference MUST NOT use an array index, rendered page number, pixel position, or transient editor offset as its sole durable target.

An external reference MAY remain unresolved locally when its governing field allows an absolute external URI and the document declares that external resolution is permitted. Validation MUST NOT fetch that URI by default.

### 11.4 Assets

`assets` contains logical metadata for binary or external resources. An asset should declare, as applicable:

- `id`;
- media type;
- role;
- human-readable label or filename;
- size;
- checksum algorithm and value;
- accessibility metadata such as alternative text or transcript references;
- a container-relative or absolute location permitted by the governing profile.

**REQ-FMT-034:** Binary asset bytes MUST NOT be embedded as unbounded base64 data in the core manuscript document. A producer MUST externalize bytes through `OMI-SPEC-330` or use an explicitly declared extension or profile with size limits.

**REQ-FMT-035:** An asset reference MUST resolve to declared asset metadata or to an explicitly allowed external URI. Consumers MUST NOT automatically fetch an external asset during parsing or validation.

## 12. History exchange

### 12.1 History fields

A document declaring `history-exchange` requires:

- `versioningModelVersion`, identifying an exact `OMI-SPEC-160` version;
- `headRevisionId`, identifying the revision represented by the root snapshot;
- `revisionHistory`, containing the portable history object.

The `revisionHistory` object requires:

| Member | Meaning |
|---|---|
| `completeness` | `complete`, `partial`, or `shallow` |
| `rootRevisionId` | Earliest represented revision or actual root |
| `headRevisionId` | Revision represented by the root snapshot |
| `revisions` | Revision records governed by `OMI-SPEC-160` |

It MAY include `omissionNotice`, branches, change sets, snapshots, integrity evidence, redaction notices, and namespaced extensions.

**REQ-FMT-036:** `headRevisionId`, `revisionHistory.headRevisionId`, and the represented snapshot revision MUST agree.

**REQ-FMT-037:** Every represented revision identifier MUST be unique. Each parent identifier MUST resolve within `revisionHistory.revisions` unless `completeness` is `partial` or `shallow` and the missing boundary is explicitly declared.

**REQ-FMT-038:** A document that omits revision history MUST NOT claim the `history-exchange` profile and MUST NOT imply that the snapshot contains complete provenance.

### 12.2 Externalized history in a container

`OMI-SPEC-330` may store history in a separate container part. In that case, the reconstructed logical document MUST satisfy this section before it is presented as a History Exchange document. The container manifest, not an ad hoc root path string, determines part discovery and integrity.

## 13. Parsing model

A conforming consumer follows these stages in order:

1. retain the original input according to local preservation policy;
2. apply configured byte-size and resource limits;
3. decode UTF-8 and reject malformed byte sequences;
4. tokenize JSON while detecting duplicate object member names;
5. require a top-level object;
6. read only the `schema` and `omi` envelope for format selection;
7. negotiate the declared version and profiles;
8. select a trusted, version-specific schema;
9. perform structural validation;
10. resolve in-document identities and references;
11. perform semantic and profile validation;
12. identify supported and unsupported extensions;
13. expose, quarantine, reject, or migrate the document according to explicit policy.

**REQ-FMT-039:** Parsing MUST be free of content execution. JSON member names, string values, URIs, markup fragments, extension values, and embedded expressions MUST be treated as data unless a later, explicitly authorized processing step defines otherwise.

**REQ-FMT-040:** A parser MUST apply implementation-defined limits for input bytes, nesting depth, object members, array length, string length, and aggregate diagnostics. Exceeding a limit MUST produce a diagnostic and MUST NOT yield an apparently complete manuscript.

**REQ-FMT-041:** Schema selection MUST use a trusted mapping from supported `omi.version` values to schemas. A parser MUST NOT download and execute or trust an arbitrary schema solely because the input names it.

## 14. Serialization model

### 14.1 Required behaviour

**REQ-FMT-042:** A producer MUST emit UTF-8 JSON whose `schema`, `omi.version`, profiles, and dependent specification versions exactly describe the serialized representation.

**REQ-FMT-043:** Serialization MUST preserve semantically significant array order, stable identifiers, reference targets, and the distinction among absent, empty, and explicitly nullable values.

**REQ-FMT-044:** A producer MUST omit implementation-only and secret state described by `REQ-FMT-020` and `REQ-FMT-021`.

Human-readable exports SHOULD use two-space indentation, LF line endings, and one final LF. Consumers MUST NOT treat whitespace, indentation, line endings, or object-member order as semantic.

### 14.2 Determinism and canonicalization

Two serializations can be semantically equivalent while having different bytes. A producer claiming deterministic serialization MUST document how it orders object members and represents equivalent values.

**REQ-FMT-045:** A digest or signature over JSON MUST declare its canonicalization algorithm, algorithm version, character encoding, and covered scope. Implementations MUST NOT compare digests created under different or undeclared canonicalization rules as equivalent.

JSON Canonicalization Scheme (JCS) MAY be used when its input restrictions are satisfied. Ordinary OMI interchange does not require JCS and MUST NOT normalize authorial strings merely to obtain identical bytes.

### 14.3 Unicode preservation

**REQ-FMT-046:** A round-trip processor MUST preserve the Unicode scalar sequence of unmodified scholarly text. It MUST NOT silently apply Unicode normalization, transliteration, case folding, smart-quote replacement, whitespace collapsing, or line-ending conversion inside content values.

A producer MAY normalize newly generated identifiers or machine-controlled tokens when their governing specification defines that normalization.

## 15. Validation and error handling

### 15.1 Validation layers

Validation is layered so that failures remain explainable:

| Layer | Examples | Required result |
|---|---|---|
| Syntax | UTF-8, JSON grammar, duplicate names | Error on failure |
| Envelope | Format, version, schema URI, profiles | Error on unsupported or inconsistent declaration |
| Structural | Types, required fields, patterns | JSON Schema diagnostics |
| Referential | Duplicate IDs, missing targets, wrong target types | Semantic diagnostics |
| Semantic | Timestamp order, history consistency, model invariants | Semantic diagnostics |
| Profile | Missing History Exchange fields | Profile diagnostics |
| Extension/policy | Unknown namespace, local size or privacy rule | Warning or error by declared policy |

**REQ-FMT-047:** A validator MUST NOT report a document as conforming when any applicable layer has an error diagnostic.

**REQ-FMT-048:** Validation MUST be deterministic for the same input, supported schema set, extension capabilities, declared profile, and policy configuration.

The published JSON Schema intentionally permits some unknown members for forward-compatible preservation. Schema success alone is therefore not a complete conformance result.

### 15.2 Diagnostic object

A machine-readable diagnostic SHOULD contain:

| Member | Type | Meaning |
|---|---|---|
| `code` | string | Stable implementation or OMI diagnostic code |
| `severity` | string | `error`, `warning`, or `info` |
| `instancePath` | string | JSON Pointer to the nearest represented value |
| `requirement` | string | Applicable `REQ-FMT-NNN` identifier |
| `message` | string | Human-readable explanation |
| `relatedIds` | array | Relevant manuscript object identifiers |
| `details` | object | Optional structured, non-secret evidence |

Example:

```json
{
  "code": "FMT-UNRESOLVED-REFERENCE",
  "severity": "error",
  "instancePath": "/annotations/0/targetBlockId",
  "requirement": "REQ-FMT-032",
  "message": "Annotation ann-1 targets missing block block-404.",
  "relatedIds": ["ann-1", "block-404"]
}
```

**REQ-FMT-049:** A validator MUST identify the nearest useful instance location and applicable requirement for each error. It MUST NOT include credentials or restricted manuscript content in diagnostics unless explicitly authorized.

### 15.3 Recovery and repair

A consumer MAY offer repair as a separate operation. Repair is not validation.

**REQ-FMT-050:** A repair operation MUST retain the original input, list every applied change, identify the responsible tool and version, and validate the repaired result. A repaired document MUST NOT be presented as byte-identical or provenance-equivalent to its source.

## 16. Extensions and unknown data

### 16.1 Extension object

Any object MAY contain an `extensions` member when its governing schema allows it. `extensions` is a JSON object. Each member name MUST be an absolute HTTPS URI or URN controlled by the extension author.

Example:

```json
{
  "extensions": {
    "https://example.org/omi/extensions/lab-notebook/1": {
      "experimentId": "EXP-42",
      "replicate": 3
    }
  }
}
```

**REQ-FMT-051:** Non-core portable data created by a producer MUST be placed under `extensions` and keyed by an absolute namespace URI or URN. A producer MUST NOT mint an unnamespaced root property that could collide with a future core member.

**REQ-FMT-052:** A consumer MUST NOT assign core OMI semantics to an unknown extension. It MAY ignore the extension for presentation or processing while preserving it.

**REQ-FMT-053:** A validator SHOULD warn about unknown unnamespaced members. It MUST NOT remove them as part of validation.

### 16.2 Lossless handling

**REQ-FMT-054:** Under the Lossless Round Trip profile, a processor MUST preserve the JSON value, containing object, member name, and array position of every unmodified unknown member and extension.

**REQ-FMT-055:** If an edit makes preservation impossible, the processor MUST stop before overwrite or require explicit authorization after presenting a machine-readable loss report.

Byte-for-byte preservation of whitespace and object-member order is not required unless the processor separately claims byte-preserving behaviour. Semantic preservation of the unknown JSON value is required.

## 17. Versioning and migration

### 17.1 Version distinctions

Implementations MUST distinguish:

- File Format version: `omi.version`;
- schema URI: `schema`;
- dependent model versions: `omi.specifications`;
- manuscript or snapshot revision: `headRevisionId` or a model-defined revision field;
- container version: the `OMI-SPEC-330` manifest;
- application version: `omi.generator.version`, when present;
- publication edition or release label: a field defined by the publication model.

**REQ-FMT-056:** A producer MUST NOT use one version field as a substitute for another category in the preceding list.

### 17.2 Migration record

A migration record requires:

| Member | Meaning |
|---|---|
| `sourceFormatVersion` | Exact input `omi.version` |
| `targetFormatVersion` | Exact output `omi.version` |
| `tool` | Migrator name and version |
| `migratedAt` | RFC 3339 instant |
| `sourceDigest` | Optional digest with declared algorithm and canonicalization scope |
| `steps` | Ordered identifiers of transformations applied |
| `warnings` | Non-fatal uncertainties |
| `losses` | Data omitted, approximated, or reinterpreted |
| `extensionsPreserved` | Extension namespaces retained |
| `validation` | Source and target validation summaries |

The record may be stored beside the output, in an authorized provenance extension, or in an OMI container provenance part.

**REQ-FMT-057:** A migrator MUST be explicit and reproducible: the same source, target version, migrator version, options, and extension capabilities SHOULD produce semantically equivalent output and the same ordered migration steps.

**REQ-FMT-058:** A migrator MUST NOT claim lossless conversion when `losses` is non-empty or when unknown source data was discarded.

### 17.3 Migration from `0.1.0`

The `0.1.0` draft did not publish a canonical schema and was implemented experimentally. A `0.1.0` migration therefore begins with implementation-profile detection rather than blind relabelling.

A migrator for the Open Manuscript Studio precursor representation should:

1. retain the original `.omi.json` bytes;
2. recognize the legacy schema URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`;
3. add the `omi` envelope and exact dependency versions;
4. replace the schema URI with the `0.2` immutable URI;
5. remove deprecated embedded author duplicates only after mapping them to agents and contributions or recording loss;
6. distinguish manuscript revision fields from format version;
7. verify section, block, annotation, citation, and history references;
8. move non-core implementation data into a namespaced extension;
9. validate the output against the `0.2` schema and semantic rules;
10. emit a migration record.

**REQ-FMT-059:** Changing only `schema` or `omi.version` does not constitute migration and MUST NOT be represented as successful conversion.

## 18. Container integration

The standalone `.omi.json` representation and the `.omi` container have different media types and responsibilities:

| Representation | Governing specification | Provisional media type | Typical extension |
|---|---|---|---|
| Logical manuscript JSON | `OMI-SPEC-320` | `application/vnd.openmanuscript+json` | `.omi.json` |
| Physical OMI container | `OMI-SPEC-330` | `application/vnd.openmanuscript.omi+zip` | `.omi` |

**REQ-FMT-060:** A container MUST identify the exact `OMI-SPEC-320` version governing its logical manuscript part. A File Format consumer MUST NOT infer package paths or compression rules absent `OMI-SPEC-330` processing.

**REQ-FMT-061:** Externalizing data into container parts MUST preserve the same logical identities, order, references, history completeness, and extension values obtained from the standalone representation.

## 19. Interoperability

### 19.1 Import

An import from DOCX, JATS XML, TEI XML, HTML, Markdown, or another source is a transformation into OMI semantics, not proof that every source feature has an OMI equivalent.

**REQ-FMT-062:** An importer MUST report omitted, approximated, or implementation-specific source features and SHOULD retain source-format provenance. It MUST NOT silently convert unrecognized scholarly content into plain text when doing so changes meaning.

### 19.2 Export

PDF, HTML, EPUB, DOCX, JATS XML, Crossref XML, and DataCite XML are derived outputs. Their generation may use publication profiles, but derived layout MUST NOT become authoritative manuscript semantics merely because it appears in an output.

**REQ-FMT-063:** An exporter MUST preserve the OMI manuscript source or an immutable reference to it when generating a lossy publication format and SHOULD report unsupported target-format features.

### 19.3 API transport

An API MAY transport the logical manuscript JSON directly. HTTP content negotiation, partial updates, authentication, and concurrency belong to `OMI-SPEC-310`. A partial API representation MUST NOT claim to be a complete `.omi.json` document unless it contains every required field and declares the appropriate profile.

## 20. Security, privacy, and integrity

### 20.1 Untrusted input

All input is untrusted. Risks include resource exhaustion, deep nesting, oversized strings, duplicate-name confusion, malicious URIs, active markup, formula injection, path disclosure, credential leakage, extension spoofing, and decompression risks at the container layer.

**REQ-FMT-064:** Consumers MUST treat markup, URLs, formulas, templates, and extension payloads as inert data during parsing. Rendering or activation requires a separate context-appropriate sanitization and authorization step.

**REQ-FMT-065:** Consumers MUST NOT dereference network URIs during validation unless an operator explicitly enables retrieval under a bounded allowlist, timeout, size limit, redirect policy, and privacy policy.

### 20.2 Sensitive data

Manuscripts and history may contain unpublished research, personal data, confidential review, redacted text, location data, or restricted assets.

**REQ-FMT-066:** A producer MUST apply the intended disclosure profile before export and MUST NOT include restricted content merely because it exists in the authoring store or revision history.

**REQ-FMT-067:** Validation and migration logs MUST minimize quoted manuscript content and MUST respect the access policy of the input.

### 20.3 Integrity

The JSON file alone does not prove authorship, authenticity, or freshness. Integrity evidence requires a declared digest and canonicalization scope; authenticated signatures and container checksums are governed by their respective specifications.

**REQ-FMT-068:** A consumer MUST NOT present schema validity, a checksum, or a self-declared generator as proof of trusted authorship.

## 21. Accessibility

The File Format preserves semantic and accessibility information needed by renderers; it does not prescribe a user interface.

**REQ-FMT-069:** A producer MUST preserve language metadata, heading structure, reading order, alternative text, captions, table structure, equation source, transcripts, and other accessibility-relevant data supported by the governing semantic model.

**REQ-FMT-070:** A producer MUST NOT encode meaning only through colour, visual position, font, or page geometry in core manuscript state.

Validators SHOULD diagnose missing accessibility metadata when the object type and selected profile make that metadata required. A diagnostic SHOULD explain how to locate the affected object without reproducing sensitive content.

## 22. Internationalization

OMI manuscripts may contain any Unicode writing system, bidirectional text, combining marks, historic scripts, and multilingual content.

**REQ-FMT-071:** A producer MUST preserve authorial Unicode text and explicit language metadata. A consumer MUST NOT assume Latin script, left-to-right direction, ASCII punctuation, or a single manuscript language.

**REQ-FMT-072:** Locale-sensitive sorting, case conversion, segmentation, date presentation, and number presentation MUST NOT overwrite the stored authorial value unless an authorized scholarly edit requests it.

Direction metadata SHOULD be represented only when it cannot be derived reliably from the declared language and content. Machine-controlled property names and registered tokens remain ASCII.

## 23. Examples and conformance fixtures

Published fixtures for this version are available at [`/examples/omi-spec-320/0.2.0/`](/examples/omi-spec-320/0.2.0/manifest.json).

The fixture manifest identifies:

- the exact specification and schema;
- expected validity;
- expected diagnostic codes for invalid examples;
- the fixture purpose.

The initial set includes:

- a minimal Core Snapshot;
- a representative History Exchange document with a namespaced extension;
- a document missing its format version;
- a document containing a duplicate addressable identifier;
- a document containing an unresolved annotation target;
- a document with reversed creation and update timestamps;
- a document with inconsistent history heads;
- a document containing a forbidden credential field.

The repository reference validator demonstrates schema and selected semantic checks. It is implementation evidence, not yet a complete formal conformance suite. Implementations MUST evaluate the normative requirements in this document in addition to passing the published fixtures.

## 24. Normative references

- [RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels](https://www.rfc-editor.org/rfc/rfc2119)
- [RFC 8174 — Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://www.rfc-editor.org/rfc/rfc8174)
- [RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259)
- [RFC 3339 — Date and Time on the Internet: Timestamps](https://www.rfc-editor.org/rfc/rfc3339)
- [RFC 5646 — Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646)
- [RFC 6901 — JavaScript Object Notation (JSON) Pointer](https://www.rfc-editor.org/rfc/rfc6901)
- [RFC 7493 — The I-JSON Message Format](https://www.rfc-editor.org/rfc/rfc7493)
- [RFC 3986 — Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)
- [JSON Schema Core, Draft 2020-12](https://json-schema.org/draft/2020-12/json-schema-core)
- [JSON Schema Validation, Draft 2020-12](https://json-schema.org/draft/2020-12/json-schema-validation)
- [OMI Specification Registry](../governance/specification-registry.md)
- [OMI Versioning Policy](../governance/versioning-policy.md)
- [OMI-SPEC-160 — Versioning and Change Model](./versioning-change-model.md)
- [OMI-SPEC-180 — Validation Model (Reserved)](../governance/specification-registry.md)
- [OMI-SPEC-330 — Container Architecture](./container-architecture.md)

## 25. Informative references

- [RFC 8785 — JSON Canonicalization Scheme](https://www.rfc-editor.org/rfc/rfc8785)
- [RFC 6838 — Media Type Specifications and Registration Procedures](https://www.rfc-editor.org/rfc/rfc6838)
- [RFC 6839 — Additional Media Type Structured Syntax Suffixes](https://www.rfc-editor.org/rfc/rfc6839)
- [FAIR Guiding Principles](https://www.go-fair.org/fair-principles/)
- [OMI Architecture Map](../foundations/architecture-map.md)
- [OMI Specification Style Guide](../governance/style-guide.md)

## 26. Implementation status

The authoritative implementation evidence is maintained in the [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md).

At publication of this draft:

- the `0.2` JSON Schema is published at the canonical versioned URI;
- an initial fixture set and reference validator are published;
- Open Manuscript Studio exports a precursor `.omi.json` representation using the unpublished `0.1` schema URI;
- Studio does not yet claim `OMI-SPEC-320@0.2.0` conformance;
- no complete third-party validator or formal cross-implementation conformance suite has been verified.

Passing the JSON Schema or reference fixtures alone does not establish full conformance.

## 27. Unresolved issues

The following issues remain open for later drafts:

1. finalize the portable rich-text representation selected by the core document model;
2. align the complete identity, annotation, citation, asset, and history schemas as their governing specifications mature;
3. decide whether the provisional vendor media type should be registered or replaced;
4. define a formal compatibility table for all pre-1.0 minor versions;
5. publish a machine-readable diagnostic schema shared with `OMI-SPEC-180`;
6. add duplicate-member-name and resource-limit byte fixtures that cannot be represented through ordinary JSON serialization;
7. define cross-implementation lossless round-trip tests;
8. determine which extension capabilities may be advertised in the `omi` envelope;
9. align externalized container-part reconstruction with the next `OMI-SPEC-330` draft;
10. define archival fixity and signature profiles without making network resolution mandatory.

## 28. Change history

| Version | Date | Change |
|---|---|---|
| 0.2.0 | 2026-09-05 | Rewrote the draft using the canonical specification template; separated logical format from container architecture; defined conformance classes and profiles, stable requirements, version negotiation, parsing, serialization, validation, extensions, history exchange, migration, security, accessibility, and internationalization; published a JSON Schema and initial fixtures. |
| 0.1.0 | 2026-07-04 | Initial exploratory draft under the canonical `OMI-SPEC-320` identifier, migrated from legacy `OMI-SPEC-011`. |

## 29. Acknowledgements

This specification incorporates implementation evidence from Open Manuscript Studio and the architecture, versioning, validation, identity, document-model, and container work of the Open Manuscript Initiative community.

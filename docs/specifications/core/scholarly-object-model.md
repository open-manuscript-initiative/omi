---
id: scholarly-object-model
title: OMI-SPEC-120 — Scholarly Object Model
sidebar_label: Scholarly Object Model
sidebar_position: 1
description: Defines the common object model for all semantically meaningful entities in the Open Manuscript Initiative.
keywords:
  - Open Manuscript Initiative
  - OMI
  - scholarly object
  - semantic publishing
  - manuscript model
  - structured documents
  - scholarly communication
---

# OMI-SPEC-120 — Scholarly Object Model

**Status:** Draft  
**Version:** 0.2.0  
**Stability:** Experimental  
**Category:** Core Specification  

**Depends on:**

- OMI-SPEC-000 — Core Principles

**Used by:**

- OMI-SPEC-100 — Document Model
- OMI-SPEC-110 — Anchor Model
- OMI-SPEC-130 — Annotation Model
- OMI-SPEC-140 — Metadata Model
- OMI-SPEC-200 — Review Model
- OMI-SPEC-230 — Publishing Model

---

## Abstract

The Scholarly Object Model defines the common semantic foundation for all meaningful entities represented within the Open Manuscript Initiative.

A scholarly manuscript is not treated merely as a sequence of formatted characters. It is represented as a structured graph of identifiable scholarly objects and explicit semantic relationships.

Examples of scholarly objects include manuscripts, sections, paragraphs, figures, tables, equations, citations, bibliographic records, annotations, reviews, datasets, contributors, and supplementary materials.

This specification defines:

- what constitutes a scholarly object;
- the common properties shared by scholarly objects;
- object identity and typing;
- object containment and relationships;
- lifecycle and provenance requirements;
- extension mechanisms;
- conformance expectations.

The Scholarly Object Model does not prescribe visual presentation, storage technology, database structure, or user-interface behavior.

---

# 1. Scope

This specification defines the abstract object model used throughout the OMI ecosystem.

It applies to:

- canonical manuscript content;
- manuscript metadata;
- structural document components;
- semantic relationships;
- annotations;
- review objects;
- publication assets;
- workflow-related scholarly entities;
- externally referenced scholarly resources.

This specification does not define:

- document layout;
- typography;
- page geometry;
- user-interface components;
- database schemas;
- network protocols;
- publication-specific styling;
- a complete serialization format.

Concrete serialization rules may be defined by separate OMI specifications.

---

# 2. Normative language

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** in this document are to be interpreted as normative requirements.

---

# 3. Core concept

A scholarly object is an identifiable semantic entity that participates in scholarly communication.

A scholarly object may represent:

- intellectual content;
- structural organization;
- descriptive metadata;
- a semantic relationship;
- an editorial or review contribution;
- a publication asset;
- an external scholarly resource;
- a workflow-relevant state or decision.

Every scholarly object exists independently of its visual rendering.

```text
Scholarly Object
│
├── Identity
├── Type
├── Semantic content
├── Metadata
├── Relationships
├── Provenance
└── Lifecycle state
```

A scholarly object is not defined by how it appears on a page.

---

# 4. Architectural role

The Scholarly Object Model is the common abstraction beneath the OMI specification family.

```text
OMI-SPEC-000
Core Principles
      │
      ▼
OMI-SPEC-120
Scholarly Object Model
      │
      ├── Document Model
      ├── Anchor Model
      ├── Annotation Model
      ├── Metadata Model
      ├── Review Model
      ├── Citation Model
      └── Publishing Model
```

Other specifications define specialized scholarly object types and relationships.

---

# 5. Object graph model

An OMI manuscript is represented conceptually as a graph.

```text
Scholarly objects
        +
Explicit relationships
        =
Scholarly object graph
```

The graph contains nodes and edges.

- A **node** is a scholarly object.
- An **edge** is a semantic relationship between scholarly objects.

Example:

```text
Manuscript
    │ contains
    ▼
Section
    │ contains
    ▼
Paragraph
    │ cited-by
    ▼
Citation
    │ refers-to
    ▼
Bibliographic Record
```

Relationships MUST remain distinguishable from visual formatting.

---

# 6. Minimal scholarly object

Every scholarly object MUST contain:

- a stable identifier;
- an object type.

Minimal example:

```json
{
  "id": "obj-01J9A6K8P3",
  "type": "paragraph"
}
```

The `id` identifies the object.

The `type` defines its semantic category.

---

# 7. Common object structure

A scholarly object MAY contain the following common properties:

```json
{
  "id": "obj-01J9A6K8P3",
  "type": "paragraph",
  "schemaVersion": "0.1",
  "content": {},
  "metadata": {},
  "relationships": [],
  "provenance": {},
  "status": "active",
  "extensions": {}
}
```

A generic TypeScript representation may be expressed as:

```ts
export interface ScholarlyObject<TContent = unknown> {
  id: string;
  type: string;
  schemaVersion?: string;
  content?: TContent;
  metadata?: Record<string, unknown>;
  relationships?: ScholarlyRelationship[];
  provenance?: ProvenanceRecord;
  status?: ScholarlyObjectStatus;
  extensions?: Record<string, unknown>;
}
```

Concrete object types MAY restrict, require, or extend these properties.

---

# 8. Object identity

## 8.1 Stable identifiers

Every scholarly object MUST have an identifier that is unique within its containing OMI package or repository context.

An identifier SHOULD remain stable during ordinary editing operations.

Examples of ordinary editing include:

- correcting spelling;
- changing wording;
- moving a paragraph within the same manuscript;
- reordering sections;
- changing output format;
- applying a publisher profile;
- converting between supported serializations.

An object MUST NOT receive a new identity solely because its visual representation changes.

---

## 8.2 Identifier opacity

Object identifiers SHOULD be treated as opaque values.

Implementations MUST NOT infer semantic meaning from the internal structure of an identifier unless the identifier scheme explicitly defines such meaning.

Recommended:

```json
{
  "id": "obj-01J9A6K8P3D7M5Q2R"
}
```

Discouraged:

```json
{
  "id": "chapter-2-paragraph-4"
}
```

The second form is fragile because structural reorganization may invalidate the identifier.

---

## 8.3 Identifier scope

An identifier MUST be unique within its declared scope.

Possible scopes include:

- manuscript;
- OMI package;
- repository;
- institutional platform;
- globally resolvable namespace.

A separate specification MAY define global identifier schemes.

---

## 8.4 Identity persistence

When an object is modified without changing its semantic continuity, the identifier SHOULD remain unchanged.

When an object is replaced by a semantically distinct object, a new identifier SHOULD be assigned.

For example:

```text
Typographical correction
→ same object identity

Paragraph moved to another section
→ same object identity

Paragraph divided into two independent arguments
→ original object may be superseded by two new objects
```

Such transformations SHOULD be recorded in provenance or version history.

---

# 9. Object types

## 9.1 Type property

The `type` property identifies the semantic class of an object.

Examples:

```json
{
  "type": "manuscript"
}
```

```json
{
  "type": "figure"
}
```

```json
{
  "type": "review-annotation"
}
```

Object types SHOULD use lowercase, machine-readable names.

Hyphenated names are RECOMMENDED for compound types.

---

## 9.2 Core object categories

OMI recognizes several broad categories of scholarly objects.

```text
Scholarly Object
│
├── Content Object
├── Structural Object
├── Relationship Object
├── Agent Object
├── Asset Object
├── Workflow Object
└── External Resource Object
```

These categories are conceptual and do not necessarily require inheritance in implementation code.

---

# 10. Content objects

Content objects contain intellectual or evidentiary material.

Examples include:

- paragraph;
- heading;
- quotation;
- list;
- list item;
- code block;
- equation;
- theorem;
- definition;
- example;
- transcription;
- bibliography entry;
- glossary entry.

Example:

```json
{
  "id": "paragraph-01",
  "type": "paragraph",
  "content": {
    "children": [
      {
        "type": "text",
        "value": "Scholarly content remains independent of presentation."
      }
    ]
  }
}
```

Content objects SHOULD preserve semantic distinctions that may be relevant to interpretation or rendering.

---

# 11. Structural objects

Structural objects organize scholarly content.

Examples include:

- manuscript;
- part;
- chapter;
- section;
- subsection;
- appendix;
- front matter;
- back matter;
- bibliography;
- figure group;
- table group.

Example:

```json
{
  "id": "section-methods",
  "type": "section",
  "content": {
    "title": "Methods",
    "children": [
      "paragraph-01",
      "paragraph-02",
      "table-01"
    ]
  }
}
```

Containment MUST be represented explicitly.

Visual proximity alone MUST NOT define structural membership.

---

# 12. Asset objects

Asset objects represent files or media associated with scholarly content.

Examples include:

- image;
- audio;
- video;
- dataset;
- source archive;
- supplementary file;
- executable notebook;
- three-dimensional model.

Example:

```json
{
  "id": "asset-figure-01",
  "type": "image",
  "content": {
    "href": "assets/figure-01.png",
    "mediaType": "image/png"
  },
  "metadata": {
    "altText": "Diagram of the OMI semantic layers."
  }
}
```

An asset object SHOULD include:

- media type;
- resource location;
- integrity information where available;
- accessibility metadata where applicable.

---

# 13. Relationship objects

Relationship objects express semantic connections between scholarly objects.

Examples include:

- citation;
- annotation;
- cross-reference;
- derivation;
- translation;
- correction;
- review;
- dependency;
- provenance link;
- source attribution and derivation;
- part-whole relationship.

A relationship object SHOULD identify:

- the relationship type;
- one or more source objects;
- one or more target objects;
- optional relationship metadata;
- optional provenance.

Example:

```json
{
  "id": "rel-citation-01",
  "type": "citation",
  "source": [
    "paragraph-01"
  ],
  "target": [
    "reference-17"
  ]
}
```

Relationships SHOULD NOT be encoded solely through visual markers such as superscript numbers, colours, or indentation.

---

# 14. Agent objects

Agent objects represent participants in scholarly communication.

Examples include:

- person;
- organization;
- editorial group;
- software agent;
- AI system;
- institutional repository;
- publishing platform.

Example:

```json
{
  "id": "agent-author-01",
  "type": "person",
  "metadata": {
    "name": "Example Author",
    "roles": [
      "author"
    ]
  }
}
```

Identity-sensitive information MAY be stored separately from portable content.

Anonymous workflows SHOULD use role-specific or pseudonymous agent references rather than public identity records.

---

# 15. Workflow objects

Workflow objects represent structured scholarly processes or decisions.

Examples include:

- submission;
- review assignment;
- review report;
- editorial decision;
- revision request;
- acceptance;
- correction;
- retraction;
- publication state.

Example:

```json
{
  "id": "decision-01",
  "type": "editorial-decision",
  "content": {
    "decision": "major-revision"
  },
  "status": "completed"
}
```

Workflow objects MAY be portable, restricted, or institution-local depending on their privacy and security requirements.

---

# 16. External resource objects

External resource objects represent scholarly entities that are not stored directly inside the OMI package.

Examples include:

- journal article;
- book;
- archival record;
- dataset;
- ORCID record;
- ROR organization;
- DOI resource;
- web resource;
- controlled vocabulary term.

Example:

```json
{
  "id": "external-resource-01",
  "type": "external-resource",
  "metadata": {
    "identifier": {
      "scheme": "doi",
      "value": "10.0000/example"
    }
  }
}
```

External resource references SHOULD use persistent identifiers when available.

---

# 17. Composite and atomic objects

A scholarly object may be composite or atomic.

## 17.1 Composite object

A composite object contains or references other objects.

Examples include:

- manuscript;
- section;
- figure with caption and media;
- table with rows and cells;
- bibliography;
- review report.

## 17.2 Atomic object

An atomic object is treated as indivisible within a particular model layer.

Examples may include:

- text node;
- mathematical symbol;
- table cell value;
- controlled metadata value.

Atomicity is model-dependent.

An object considered atomic by one specification MAY be decomposed by another specialized specification.

---

# 18. Containment

Containment represents structural inclusion.

Example:

```json
{
  "id": "section-01",
  "type": "section",
  "content": {
    "children": [
      "paragraph-01",
      "figure-01"
    ]
  }
}
```

Containment relationships SHOULD satisfy the following requirements:

1. A child object SHOULD have a determinable parent within a canonical document hierarchy.
2. Circular containment MUST NOT occur.
3. Containment order MUST be explicit when order is semantically significant.
4. Removing an object from one parent MUST NOT automatically destroy its identity.
5. Moving an object between parents SHOULD preserve its identity.

---

# 19. Ordering

Some object collections are ordered.

Examples include:

- sections in a manuscript;
- paragraphs in a section;
- list items;
- table rows;
- authors in a declared contribution order.

Ordering MUST be represented explicitly where it affects meaning or presentation.

Implementations MAY represent order through:

- ordered arrays;
- sequence properties;
- explicit predecessor-successor relationships.

Ordering SHOULD NOT be inferred from storage location or filename.

---

# 20. Relationships

A generic scholarly relationship may be represented as:

```ts
export interface ScholarlyRelationship {
  id?: string;
  type: string;
  source: string[];
  target: string[];
  metadata?: Record<string, unknown>;
  provenance?: ProvenanceRecord;
}
```

Example:

```json
{
  "id": "relationship-01",
  "type": "supports",
  "source": [
    "dataset-01"
  ],
  "target": [
    "claim-01"
  ]
}
```

A relationship MAY connect:

- one object to one object;
- one object to multiple objects;
- multiple objects to one object;
- multiple objects to multiple objects.

---

# 21. Reference by identity

Objects SHOULD refer to other objects by identifier.

Recommended:

```json
{
  "target": "paragraph-01"
}
```

Discouraged:

```json
{
  "target": {
    "sectionNumber": 2,
    "paragraphNumber": 4
  }
}
```

Structural positions MAY be used as fallback selectors but SHOULD NOT replace stable object identity.

The Anchor Model defines more precise target-selection mechanisms.

---

# 22. Metadata

Every scholarly object MAY carry metadata.

Metadata may be:

- descriptive;
- administrative;
- technical;
- structural;
- preservation-related;
- discipline-specific;
- workflow-specific.

Example:

```json
{
  "id": "figure-01",
  "type": "figure",
  "metadata": {
    "label": "Figure 1",
    "language": "en",
    "rights": "CC BY 4.0"
  }
}
```

Metadata that is shared across many object types SHOULD follow OMI-SPEC-140.

---

# 23. Provenance

Provenance records how an object was created, modified, imported, generated, or transformed.

A provenance record MAY include:

```ts
export interface ProvenanceRecord {
  createdAt?: string;
  createdBy?: string;
  modifiedAt?: string;
  modifiedBy?: string;
  generatedBy?: string;
  derivedFrom?: string[];
  activity?: string;
}
```

Example:

```json
{
  "provenance": {
    "createdAt": "2026-07-21T18:30:00Z",
    "createdBy": "agent-author-01",
    "activity": "authoring"
  }
}
```

Meaningful automated transformations SHOULD be recorded.

AI-generated or AI-modified objects MUST be distinguishable from exclusively human-authored objects when such provenance is available.

---

# 24. Object lifecycle

A scholarly object MAY have a lifecycle status.

Recommended core statuses:

```ts
export type ScholarlyObjectStatus =
  | 'draft'
  | 'active'
  | 'superseded'
  | 'deprecated'
  | 'withdrawn'
  | 'deleted';
```

## 24.1 Draft

The object is incomplete or not yet accepted into the canonical manuscript.

## 24.2 Active

The object is currently part of the canonical scholarly record.

## 24.3 Superseded

The object has been replaced by another object but remains available for provenance or version history.

## 24.4 Deprecated

The object remains interpretable but SHOULD NOT be used for new content.

## 24.5 Withdrawn

The object has been intentionally removed from active scholarly use while preserving an audit record.

## 24.6 Deleted

The object is marked for deletion.

Implementations SHOULD distinguish logical deletion from irreversible physical removal.

---

# 25. Immutability and revision

OMI does not require every object to be technically immutable.

However, implementations SHOULD preserve revision history for changes that affect scholarly meaning.

Two approaches may be used:

```text
Mutable object
+
Version history
```

or:

```text
Immutable object versions
+
Stable conceptual identity
```

A versioning specification may define detailed revision semantics.

---

# 26. Object replacement and derivation

When one object is derived from another, the relationship SHOULD be explicit.

Example:

```json
{
  "id": "paragraph-02",
  "type": "paragraph",
  "provenance": {
    "derivedFrom": [
      "paragraph-01"
    ],
    "activity": "revision"
  }
}
```

Possible derivation activities include:

- revision;
- translation;
- normalization;
- import;
- conversion;
- extraction;
- AI-assisted rewriting;
- editorial correction.

---

# 27. Language

A scholarly object MAY declare its language independently of the manuscript-level language.

Example:

```json
{
  "id": "quotation-01",
  "type": "quotation",
  "metadata": {
    "language": "la"
  }
}
```

Language values SHOULD use recognized language identifiers, such as ISO 639 language codes, as defined by the Metadata Model.

---

# 28. Discipline-specific objects

Different scholarly disciplines require specialized object types.

Examples include:

## Humanities

- archival source;
- critical apparatus entry;
- manuscript witness;
- transcription segment;
- editorial emendation.

## Mathematics

- theorem;
- lemma;
- proof;
- corollary;
- mathematical definition.

## Chemistry

- chemical structure;
- compound;
- reaction;
- spectral data.

## Physics

- physical quantity;
- experimental setup;
- measurement;
- uncertainty statement.

## Biology

- specimen;
- taxonomic name;
- sequence;
- protocol.

## Social sciences

- survey instrument;
- variable;
- sample;
- interview segment.

Discipline-specific objects MAY extend the common Scholarly Object Model.

They MUST preserve the required `id` and `type` properties.

---

# 29. Extension model

An implementation MAY introduce extension properties or custom object types.

Extensions SHOULD use a namespaced identifier.

Example:

```json
{
  "id": "object-01",
  "type": "example.org:archival-witness",
  "extensions": {
    "example.org": {
      "shelfmark": "MS 42"
    }
  }
}
```

Namespaced extensions reduce collisions between independent implementations.

---

## 29.1 Extension requirements

An extension:

1. MUST NOT redefine the meaning of a core OMI property.
2. MUST preserve the object's stable identity.
3. SHOULD remain ignorable by implementations that do not understand it.
4. SHOULD provide public documentation.
5. SHOULD define validation rules.
6. MUST NOT make the base object uninterpretable when the extension is absent.

---

# 30. Graceful degradation

An implementation that encounters an unknown object type SHOULD preserve it whenever possible.

It MAY:

- display a generic representation;
- expose the raw semantic content;
- warn the user;
- pass the object through unchanged;
- request a supporting plugin.

It SHOULD NOT silently discard unknown objects.

Example:

```text
Known object type
→ native editing and rendering

Unknown object type
→ preserve, identify, and render generically
```

This principle is essential for long-term extensibility.

---

# 31. Validation

A scholarly object is valid when:

- it contains a valid identifier;
- it contains a valid type;
- its required type-specific properties are present;
- its references resolve within the declared scope or are valid external references;
- its containment does not create cycles;
- its extension data does not redefine core semantics.

Validation MAY occur at several levels:

```text
Syntax validation
        ↓
Schema validation
        ↓
Reference validation
        ↓
Semantic validation
        ↓
Workflow validation
```

A structurally valid object may still produce semantic warnings.

---

# 32. Serialization independence

The Scholarly Object Model is independent of serialization format.

It may be represented using:

- JSON;
- JSON-LD;
- XML;
- CBOR;
- database records;
- graph structures;
- future interoperable formats.

A serialization MUST preserve:

- object identity;
- object type;
- semantic content;
- explicit relationships;
- required metadata;
- provenance where present.

Serialization-specific specifications MAY impose additional constraints.

---

# 33. Rendering independence

A scholarly object MUST NOT depend on one visual rendering.

For example, a note object may be rendered as:

```text
HTML
→ popup or side panel

PDF
→ footnote or endnote

DOCX
→ native Word footnote

JATS XML
→ <fn>

Audio
→ spoken aside
```

The object remains the same.

Only the renderer changes.

---

# 34. Example manuscript graph

```text
Manuscript
│
├── Metadata
│   ├── Title
│   ├── Authors
│   └── Keywords
│
├── Section
│   ├── Heading
│   ├── Paragraph
│   │   ├── Citation
│   │   └── Annotation
│   └── Figure
│       ├── Image Asset
│       └── Caption
│
├── Bibliography
│   └── Bibliographic Record
│
└── Supplementary Dataset
```

The same graph may be rendered into multiple publication formats without changing its underlying semantics.

---

# 35. Example object collection

```json
{
  "objects": [
    {
      "id": "manuscript-01",
      "type": "manuscript",
      "content": {
        "children": [
          "section-01"
        ]
      }
    },
    {
      "id": "section-01",
      "type": "section",
      "content": {
        "title": "Introduction",
        "children": [
          "paragraph-01"
        ]
      }
    },
    {
      "id": "paragraph-01",
      "type": "paragraph",
      "content": {
        "children": [
          {
            "type": "text",
            "value": "A manuscript is a graph of scholarly objects."
          }
        ]
      }
    }
  ]
}
```

This representation is illustrative and not a complete serialization schema.

---

# 36. Example semantic relationship

```json
{
  "id": "annotation-01",
  "type": "annotation",
  "content": {
    "body": {
      "format": "text/plain",
      "value": "This claim requires further evidence."
    }
  },
  "relationships": [
    {
      "type": "targets",
      "source": [
        "annotation-01"
      ],
      "target": [
        "paragraph-01"
      ]
    }
  ]
}
```

The Annotation Model defines more precise targeting through anchors.

---

# 37. Object ownership

OMI does not define legal ownership of scholarly objects.

An object's metadata MAY express:

- rights holder;
- licence;
- copyright statement;
- institutional custody;
- access restrictions.

Ownership, authorship, custody, and technical control are distinct concepts and SHOULD NOT be conflated.

---

# 38. Privacy

A scholarly object MAY contain public, restricted, confidential, or private data.

Privacy classification SHOULD be explicit when relevant.

Example:

```json
{
  "id": "review-01",
  "type": "review",
  "metadata": {
    "access": "confidential"
  }
}
```

Portable anonymous review objects MUST NOT include protected identity mappings.

Privacy policy is further defined by workflow specifications.

---

# 39. Security considerations

Implementations MUST treat scholarly objects as untrusted input when imported from external systems.

They SHOULD protect against:

- executable content embedded in assets;
- unsafe markup;
- path traversal;
- malicious external references;
- schema abuse;
- oversized object graphs;
- cyclic relationships;
- identifier collisions;
- extension namespace conflicts.

Semantic portability MUST NOT require executing embedded code.

---

# 40. Preservation considerations

For long-term preservation:

1. Object identifiers SHOULD remain stable.
2. Core semantic properties SHOULD be self-describing.
3. Unknown extensions SHOULD be retained.
4. External dependencies SHOULD be explicitly identified.
5. Referenced assets SHOULD include integrity information where possible.
6. Proprietary-only representations SHOULD be avoided.
7. Transformations SHOULD preserve provenance.

A preserved OMI package should remain interpretable without the original authoring application.

---

# 41. Accessibility considerations

Scholarly objects SHOULD include semantic and descriptive information required for accessible rendering.

Examples include:

- alternative text for images;
- table header relationships;
- equation descriptions;
- language metadata;
- structural heading levels;
- transcript references for audio or video;
- semantic reading order.

Accessibility belongs to the object model and metadata, not only to the final visual interface.

---

# 42. Conformance

An implementation conforms to this specification if it:

1. recognizes scholarly objects as independently identifiable semantic entities;
2. preserves required object identifiers and types;
3. represents semantic relationships explicitly;
4. does not treat presentation as canonical content;
5. preserves unknown objects and extensions whenever practical;
6. maintains reference integrity;
7. supports validation of object structure;
8. does not silently discard semantically meaningful objects.

---

## 42.1 Authoring implementation

A conforming authoring implementation SHOULD:

- create stable object identifiers;
- preserve identifiers during ordinary editing;
- expose meaningful object types;
- maintain containment and ordering;
- record relevant provenance.

---

## 42.2 Processing implementation

A conforming processing implementation SHOULD:

- preserve object identity;
- preserve unknown properties and extensions;
- avoid lossy transformations;
- report unsupported object types;
- validate references and relationships.

---

## 42.3 Rendering implementation

A conforming renderer SHOULD:

- render according to object semantics;
- preserve semantic distinctions;
- support accessible output;
- avoid changing the canonical object graph.

---

# 43. Design invariants

All implementations SHOULD preserve the following invariants.

## 43.1 Identity invariant

A scholarly object remains identifiable independently of its location or presentation.

## 43.2 Semantic invariant

The meaning of an object is not defined solely by visual formatting.

## 43.3 Relationship invariant

Semantic connections remain explicit and machine-readable.

## 43.4 Portability invariant

Objects remain interpretable outside the creating application.

## 43.5 Extensibility invariant

Unknown extensions do not invalidate the underlying core object.

## 43.6 Preservation invariant

Objects retain sufficient context for future interpretation.

## 43.7 Privacy invariant

Sensitive identity and workflow information remains separable from portable scholarly content.

---

# 44. Relationship to the Document Model

The Scholarly Object Model defines what an object is.

The Document Model defines how scholarly objects are organized into a manuscript.

```text
Scholarly Object Model
→ common object semantics

Document Model
→ manuscript structure and composition
```

---

# 45. Relationship to the Anchor Model

The Anchor Model identifies an entire scholarly object or a precise region within one.

```text
Scholarly Object
        │
        ▼
Anchor
        │
        ▼
Resolvable target
```

Stable scholarly object identity is therefore a prerequisite for reliable anchoring.

---

# 46. Relationship to the Annotation Model

An annotation is itself a scholarly object.

It also participates in a semantic relationship with one or more anchored targets.

```text
Annotation Object
        │
        ▼
Target Relationship
        │
        ▼
Anchor
        │
        ▼
Scholarly Object
```

---

# 47. Relationship to the Review Model

A review report, review comment, recommendation, and editorial decision may all be represented as specialized scholarly objects.

Their visibility, anonymity, identity protection, and workflow rules are defined separately by the Review Model.

---

# 48. Relationship to the Publishing Model

The Publishing Model transforms scholarly objects into output-specific representations.

The object model remains canonical.

```text
Scholarly Object Graph
        │
        ▼
Publisher Profile
        │
        ▼
Renderer
        │
        ├── HTML
        ├── PDF
        ├── DOCX
        ├── EPUB
        └── JATS XML
```

---

# 49. Future work

Future versions of this specification may define:

- canonical core object type registries;
- globally resolvable object identifiers;
- formal relationship vocabularies;
- object capability declarations;
- validation profiles;
- JSON Schema definitions;
- JSON-LD contexts;
- discipline-specific object profiles;
- cryptographic integrity mechanisms;
- object-level access-control vocabularies.

---

# 50. Summary

The Scholarly Object Model establishes a simple but powerful principle:

> Every meaningful component of scholarly communication is an identifiable semantic object.

An OMI manuscript is therefore not merely formatted text.

It is a portable scholarly object graph composed of:

```text
Objects
+
Relationships
+
Metadata
+
Provenance
```

This common model allows manuscripts, annotations, reviews, citations, assets, and future scholarly entities to coexist within a coherent and extensible architecture.

---

> **Write naturally. Structure once. Publish everywhere.**

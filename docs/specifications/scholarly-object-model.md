---
title: Scholarly Object Model
sidebar_position: 18
---

# OMI-SPEC-009: Scholarly Object Model

## Status

**Draft**

Version: 0.1

---

# Purpose

The Scholarly Object Model defines the fundamental building blocks of the Open Manuscript Initiative (OMI).

Rather than treating a manuscript as formatted text, OMI represents it as a collection of interconnected scholarly objects.

Every meaningful element of a manuscript is represented as a first-class semantic object.

---

# Design Principles

The Scholarly Object Model is based on the following principles:

- Everything is an object
- Objects are semantic
- Objects are uniquely identifiable
- Objects are reusable
- Objects are versioned
- Objects are interoperable
- Objects are extensible

---

# What Is a Scholarly Object?

A Scholarly Object represents any meaningful entity within scholarly communication.

Examples include:

- Document
- Section
- Paragraph
- Figure
- Table
- Equation
- Citation
- Bibliographic Record
- Annotation
- Anchor
- Review
- Dataset
- Software
- Author
- Affiliation
- Institution
- Funding
- License

All of these are equal citizens within the OMI ecosystem.

---

# Object Hierarchy

```
Document
│
├── Metadata
├── Sections
│   ├── Paragraphs
│   ├── Figures
│   ├── Tables
│   └── Equations
│
├── Citations
├── Bibliography
├── Annotations
├── Review Layer
└── Discipline Objects
```

The hierarchy describes containment.

Relationships are defined independently.

---

# Object Identity

Every object receives a globally unique identifier.

Example:

```
omi:paragraph:9b2d7c31

omi:citation:4f8912ad

omi:anchor:53fd118a
```

Identifiers remain stable whenever possible.

---

# Object Metadata

Every object contains metadata.

Common fields include:

- Identifier
- Object Type
- Version
- Created
- Modified
- Author
- Status

Individual object types may define additional metadata.

---

# Object Relationships

Objects are connected through semantic relationships.

Examples:

```
Paragraph

↓

Anchor

↓

Annotation
```

```
Citation

↓

Bibliographic Record
```

```
Review Comment

↓

Anchor

↓

Paragraph
```

Relationships are explicit and machine-readable.

---

# Object Lifecycle

Objects evolve over time.

Typical lifecycle:

```
Created

↓

Modified

↓

Reviewed

↓

Published

↓

Archived
```

Lifecycle states may differ between object types.

---

# Object Composition

Objects may contain other objects.

Example:

```
Section

├── Paragraph

├── Figure

├── Table

└── Citation
```

Composition creates document structure while preserving object independence.

---

# Object References

Objects may reference one another without containment.

Examples:

- citation → bibliography
- figure → dataset
- review → paragraph
- author → affiliation
- dataset → software

These references remain valid across publication formats.

---

# Discipline Objects

Discipline Profiles introduce additional object types.

History:

- Archive
- Charter
- Regest
- Historical Event

Mathematics:

- Theorem
- Lemma
- Proof

Medicine:

- Clinical Trial
- Ethics Approval

Physics:

- Experiment
- Physical Constant

Plugins extend the object model without changing the Core.

---

# Object Behaviours

Objects define behaviour in addition to structure.

Examples:

A Citation object may:

- validate identifiers
- resolve bibliography entries
- render different citation styles

An Annotation object may:

- attach to Anchors
- store discussions
- control visibility

Behaviour is defined by object type.

---

# Object Serialization

Every object must support structured serialization.

Future specifications may define mappings to:

- JSON
- YAML
- XML
- RDF

Serialization preserves semantics rather than presentation.

---

# Object Versioning

Objects participate independently in version control.

Changes to one object do not require recreating the entire manuscript.

This enables efficient collaboration and fine-grained history tracking.

---

# Object Permissions

Different object types may define independent permissions.

Examples:

- editable
- read-only
- reviewer-only
- editor-only
- public

Permissions are independent from document layout.

---

# Interoperability

Objects are designed for interoperability.

Mappings may include:

- JATS XML
- Web Annotation
- schema.org
- Crossref
- DataCite
- Dublin Core
- Linked Open Data

---

# Extensibility

Plugins may introduce:

- new object types
- new metadata
- new behaviours
- new relationships

The Core Object Model remains stable.

---

# Future Work

Future specifications will define:

- Object API
- Object Repository
- Object Graph
- Knowledge Graph Integration
- Semantic Query Language

---

# Summary

The Scholarly Object Model defines the conceptual foundation of OMI.

By representing every meaningful entity as a first-class semantic object with its own identity, metadata, relationships, behaviour, and lifecycle, OMI moves beyond document-centric publishing toward a true scholarly knowledge ecosystem.

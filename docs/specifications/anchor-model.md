---
id: anchor-model
title: OMI-SPEC-110 — Anchor Model
sidebar_label: Anchor Model
sidebar_position: 12
---

# OMI-SPEC-110 — Anchor Model

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-003`

---

# Purpose

The Anchor Model defines how semantic objects are attached to scholarly content.

Unlike traditional document models that reference page numbers or character positions, OMI introduces persistent semantic anchors.

Anchors provide stable references that survive editing, publishing, and format conversion.

They form the connective layer of the Open Manuscript Initiative.

---

# Design Principles

The Anchor Model is based on the following principles:

- Semantic persistence
- Layout independence
- Stable identity
- Multiple target support
- Version awareness
- Machine readability
- Long-term preservation

---

# What Is an Anchor?

An Anchor is a persistent semantic reference that identifies one or more targets within a manuscript.

An Anchor does not contain content itself.

Instead, it connects semantic objects to meaningful parts of a manuscript.

---

# Why Anchors?

Traditional publishing relies on page numbers and character positions.

These references break whenever text changes.

OMI Anchors remain attached to the semantic content rather than its visual position.

This enables reliable collaboration throughout the manuscript lifecycle.

---

# Anchor Targets

An Anchor may refer to:

- a character range
- a word
- multiple words
- a sentence
- a paragraph
- multiple paragraphs
- a section
- a figure
- a table
- a formula
- a citation
- a bibliography entry
- metadata
- the entire manuscript

---

# Multiple Targets

One Anchor may reference multiple locations.

Example:

```text
Anchor A

├── Paragraph 2
├── Figure 4
└── Table 1
```

This allows a single semantic object to describe relationships spanning different parts of the manuscript.

---

# Semantic Relationships

Anchors connect scholarly objects.

Examples include:

Annotation
↓

Anchor

↓

Text Range

or

Citation

↓

Anchor

↓

Bibliography Entry

or

Translation

↓

Anchor

↓

Original Paragraph

---

# Objects Using Anchors

Nearly every semantic object within OMI may reference one or more Anchors.

Examples include:

- annotations
- citations
- figures
- tables
- glossary entries
- translations
- reviewer comments
- editorial notes
- AI suggestions
- tasks
- cross references
- hyperlinks

---

# Anchor Metadata

Each Anchor contains:

- Identifier
- Type
- Target
- Creator
- Creation Timestamp
- Modification History
- Status

---

# Stable Identifiers

Every Anchor receives a globally unique identifier.

Example:

```text
anchor:3d91f88f-5d61-4d7e-a857-bf5b44d9f8a1
```

Persistent identifiers ensure reliable references across versions.

---

# Editing Behaviour

Anchors should survive ordinary editing operations.

Examples include:

- inserting text
- deleting text
- moving paragraphs
- splitting sections
- merging sections

The system continuously maintains Anchor integrity.

---

# Anchor Resolution

If the original target changes substantially, the system attempts semantic reattachment.

Possible strategies include:

- exact match
- structural match
- contextual match
- semantic similarity

Implementations may combine multiple strategies.

---

# Visibility

Anchors themselves are invisible.

Users interact with the semantic objects attached to them.

For example:

Footnote

↓

Anchor

↓

Selected Text

---

# Rendering

Different publication formats render Anchor-based objects differently.

Example:

PDF

↓

Footnote

HTML

↓

Tooltip

EPUB

↓

Endnote

JATS XML

↓

Semantic element

The Anchor itself is never rendered.

Only the attached semantic object is displayed.

---

# Versioning

Anchors participate in document version control.

The same Anchor identifier should remain valid across manuscript revisions whenever possible.

This enables reliable comparison between versions.

---

# Interoperability

Future mappings may include:

- Web Annotation Data Model
- W3C Selectors
- JATS XML
- HTML Fragment Identifiers
- DOCX Comments
- PDF Annotations

---

# Plugin Extensions

Plugins may define additional Anchor types.

Examples:

History Profile

- Archival Document
- Charter Fragment

Mathematics Profile

- Proof Step
- Equation Component

Biology Profile

- Gene Sequence
- Taxonomic Node

---

# Future Work

Future specifications will define:

- Anchor Resolution Algorithms
- Cross-document Anchors
- Persistent Global Anchors
- Linked Data Integration
- Collaborative Conflict Resolution

---

# Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-003` to canonical `OMI-SPEC-110`.

---

# Summary

The Anchor Model is the semantic foundation of OMI.

Rather than relying on page numbers or visual positions, Anchors connect scholarly objects directly to meaning.

This allows annotations, citations, peer review, AI assistance, translations, and future scholarly services to remain stable across editing, publishing, and preservation.

Anchors transform a manuscript from a formatted document into an interconnected knowledge object.

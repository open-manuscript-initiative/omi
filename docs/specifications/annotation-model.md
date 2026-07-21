---
id: annotation-model
title: OMI-SPEC-003 — Annotation Model
sidebar_position: 3
description: Semantic annotation architecture for portable scholarly manuscripts.
---

# OMI-SPEC-003 — Annotation Model

**Status:** Draft  
**Version:** 0.2  
**Depends on:** OMI-SPEC-001 (Document Model), OMI-SPEC-002 (Anchor Model)

---

## Abstract

The Annotation Model defines how semantic information is attached to scholarly objects within an Open Manuscript Initiative (OMI) document.

Unlike traditional word processors, annotations are **independent scholarly objects**. They are linked to stable anchors rather than page positions, enabling manuscripts to remain portable, machine-readable, and publication-independent throughout their lifecycle.

This model serves as the foundation for notes, comments, peer review, AI suggestions, editorial instructions, semantic citations, and future annotation types.

---

# 1. Motivation

Traditional document editors treat annotations as formatting artifacts tied to a visual layout.

This approach has significant limitations:

- notes break during editing
- comments are application-specific
- review data cannot easily be exchanged
- AI annotations cannot be preserved
- publication formats require conversion rather than transformation

OMI replaces this model with a semantic architecture.

Annotations are attached to scholarly objects—not to pages.

---

# 2. Design Principles

Annotations SHALL:

- exist independently from document layout
- reference stable anchors
- survive structural editing
- support multiple annotation layers
- remain machine-readable
- remain human-editable
- be portable across publication formats

Annotations NEVER belong to a rendered page.

They belong to semantic objects.

---

# 3. Architecture

```
Manuscript

├── Metadata
├── Sections
├── Blocks
├── Figures
├── Tables
├── Equations
├── References
├── Notes
└── Annotations
```

Annotations form an independent collection.

Document objects never contain embedded annotation data.

---

# 4. Target Model

Every annotation references one or more anchors.

```
Annotation
      │
      ▼
Anchor
      │
      ▼
Scholarly Object
```

Anchors are defined by the Anchor Model and provide stable references even after editing.

---

# 5. Supported Targets

Annotations MAY target:

- manuscript
- section
- subsection
- paragraph
- inline text range
- figure
- figure region
- table
- table cell
- equation
- bibliography entry
- citation
- glossary entry
- metadata field
- author
- review comment
- external resource

Future object types MAY extend this list.

---

# 6. Annotation Types

OMI defines annotations by semantic role rather than presentation.

## Notes

- footnote
- endnote
- author note
- editor note
- translator note

---

## Comments

- comment
- reply
- discussion thread
- resolved comment

---

## Review

- major revision
- minor revision
- question
- recommendation
- approval
- rejection

---

## Citation

- supports claim
- contradicts
- background
- primary source
- secondary source

---

## AI

- rewrite suggestion
- grammar suggestion
- translation
- terminology suggestion
- fact-check
- consistency warning

---

## Publishing

- copyediting
- proofreading
- production instruction
- typesetting instruction
- publisher note

---

# 7. Data Model

Example:

```json
{
  "id": "annotation-001",

  "type": "footnote",

  "target": {
    "anchor": "anchor-15"
  },

  "body": {
    "content": "The original manuscript contains a different reading."
  },

  "creator": "orcid:0000-0002-1234-5678",

  "created": "2026-07-21T12:00:00Z",

  "modified": "2026-07-21T12:10:00Z"
}
```

---

# 8. Multiple Targets

One annotation MAY reference multiple scholarly objects.

Example:

```
Paragraph 2

+

Figure 5

+

Table 3
```

This allows one scholarly explanation to describe several related objects simultaneously.

---

# 9. Rich Annotation Bodies

Annotation bodies are themselves OMI documents.

Therefore annotations MAY contain:

- formatted text
- citations
- mathematical expressions
- figures
- tables
- semantic links
- nested annotations

Annotations are not limited to plain text.

---

# 10. Stable Anchoring

Annotations MUST NOT depend on:

- page numbers
- rendered coordinates
- visual layout

Instead they reference stable anchors defined by OMI-SPEC-002.

---

# 11. Rendering

Presentation is renderer-dependent.

The same annotation may appear as:

| Output | Rendering |
|---------|-----------|
| HTML | Popup |
| PDF | Footnote |
| EPUB | Endnote |
| DOCX | Native footnote |
| JATS XML | `<fn>` |
| Web Review | Sidebar comment |

The manuscript itself never changes.

Only the rendering changes.

---

# 12. Collaboration

Annotations support collaborative workflows.

Each annotation stores its own:

- creator
- timestamps
- revision history
- status
- permissions

This enables:

- collaborative writing
- peer review
- editorial workflows
- AI-assisted editing

---

# 13. Extensibility

Publishers and software MAY introduce additional annotation types.

Examples:

- legal note
- taxonomic annotation
- linguistic analysis
- historical source note
- chemical warning
- clinical observation

Custom annotation types SHOULD declare their semantic role to preserve interoperability.

---

# 14. Relationship to Other Specifications

This specification depends on:

- OMI-SPEC-001 — Document Model
- OMI-SPEC-002 — Anchor Model

and provides the foundation for:

- Review Model
- Collaboration Model
- Citation Model
- AI Assistant Model
- Publishing Model
- Scholarly Object Model

---

# 15. Philosophy

In OMI, annotations are first-class scholarly objects.

A footnote, peer-review remark, editorial instruction, AI suggestion, or semantic citation are all instances of the same concept:

> **A semantic relationship attached to a stable scholarly anchor.**

By separating content, relationships, and presentation, OMI enables truly portable scholarly manuscripts that can evolve throughout writing, review, publication, preservation, and reuse without losing semantic meaning.

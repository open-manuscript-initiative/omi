# Conceptual Document Model

## Purpose

The document model is the conceptual core of the Open Manuscript Initiative (OMI).

Unlike traditional word processors, OMI does not treat a manuscript as formatted text. Instead, a manuscript is represented as a structured scholarly object composed of semantic entities and their relationships.

Presentation (PDF, HTML, JATS XML, EPUB, DOCX, etc.) is always generated from this semantic representation.

---

# Design Principles

The document model is built upon several principles.

## Semantic First

Every element has meaning before appearance.

Formatting is a consequence of semantics, not the other way around.

---

## Separation of Content and Presentation

Scientific content is independent from visual layout.

The same manuscript may be rendered differently depending on publisher requirements without modifying its content.

---

## Persistent Identity

Every meaningful object possesses a persistent internal identifier.

Objects remain identifiable even if they move within the manuscript.

---

## Traceability

Every modification can be traced.

The history of each object forms part of the scholarly record.

---

## Interoperability

The model is designed to map cleanly onto open scholarly standards such as JATS XML and related metadata schemas.

---

# The Manuscript Object

A manuscript is the root object of the document.

It contains:

- metadata
- contributors
- document structure
- scholarly objects
- review information
- publication history
- relationships
- version history

```
Manuscript
│
├── Metadata
├── Contributors
├── Sections
├── References
├── Figures
├── Tables
├── Notes
├── Files
├── Reviews
├── Versions
└── Publication
```

---

# Semantic Objects

The manuscript consists of semantic objects.

Examples include:

- Title
- Subtitle
- Abstract
- Keyword
- Author
- Affiliation
- ORCID
- Section
- Paragraph
- Figure
- Caption
- Table
- Equation
- Citation
- Bibliographic Entry
- Footnote
- Endnote
- Comment
- Review
- Editorial Decision
- Supplementary File

Each object possesses:

- identifier
- type
- content
- metadata
- relationships
- revision history

---

# Relationships

Objects may reference other objects.

Examples:

- citation → bibliography
- author → affiliation
- figure → caption
- paragraph → note
- review → manuscript version

The model therefore represents a graph rather than a simple linear document.

---

# Text as an Object

Text itself is not the primary entity.

Instead, text is composed of semantic blocks.

```
Section

 ├── Heading
 ├── Paragraph
 ├── Paragraph
 ├── Figure
 ├── Paragraph
 ├── Table
 └── Paragraph
```

---

# Anchors

Any semantic object may act as an anchor.

Annotations are attached to anchors rather than positions within rendered text.

Examples include:

- comments
- notes
- citations
- editorial remarks
- AI suggestions

This allows annotations to remain valid even after substantial editing.

---

# Flexible Notes

OMI generalizes the traditional concept of footnotes.

A note may be attached to:

- a word
- a phrase
- a sentence
- multiple sentences
- an entire paragraph
- a figure
- a table
- any semantic object

Rendering as footnotes, endnotes, sidenotes, inline notes, or other publisher-specific styles is determined during export.

---

# References

Citations are independent semantic objects.

A citation references one bibliographic record.

Multiple citations may point to the same record.

Bibliographies are generated automatically.

---

# Figures and Tables

Figures and tables are first-class scholarly objects.

They contain:

- identifier
- caption
- source
- licensing information
- alternative text
- linked files

---

# Review Layer

Reviews are not embedded into the manuscript.

Instead, they form a separate annotation layer.

Different review workflows may expose different subsets of annotations.

---

# Version Model

The manuscript evolves through versions.

```
Draft
    ↓
Submission
    ↓
Review
    ↓
Revision
    ↓
Accepted
    ↓
Published
    ↓
Corrected
```

Every version preserves complete provenance.

---

# Publishing

Publication formats are generated from the semantic document.

Examples include:

- JATS XML
- HTML
- PDF
- EPUB
- DOCX
- Markdown

No publication format is considered canonical.

The semantic manuscript is the canonical source.

---

# AI Interaction

AI systems never modify the manuscript directly.

Instead they create:

- suggestions
- annotations
- metadata proposals
- validation reports

Human approval is required before changes become part of the manuscript.

---

# Future Extensions

The document model is intentionally extensible.

New semantic object types may be introduced without changing the overall architecture.

Examples include:

- research data
- executable notebooks
- interactive figures
- audiovisual material
- software citations
- research protocols

---

# Guiding Principle

The manuscript is not a formatted document.

It is a structured scholarly knowledge object from which every presentation, workflow, and publication format can be derived.

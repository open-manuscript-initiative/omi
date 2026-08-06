---
id: publishing-model
title: OMI-SPEC-230 — Publishing Model
sidebar_label: Publishing Model
sidebar_position: 16
---

# OMI-SPEC-230 — Publishing Model

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-007`

---

# Purpose

The Publishing Model defines how a semantic manuscript is transformed into one or more publication formats.

Unlike traditional publishing workflows, OMI separates scholarly content from presentation.

A manuscript is authored once and rendered many times.

---

# Design Principles

The Publishing Model follows these principles:

- Single source of truth
- Semantic rendering
- Format independence
- Reproducibility
- Interoperability
- Extensibility
- Automation

---

# Publishing Philosophy

Publishing is not document conversion.

Publishing is the process of rendering semantic knowledge into publication-specific representations.

The manuscript never changes.

Only its presentation changes.

---

# Publishing Pipeline

```
Semantic Manuscript

        │

        ▼

Publication Profile

        │

        ▼

Rendering Engine

        │

        ▼

Publication Format
```

Every publication is generated from the same semantic source.

---

# Publication Profiles

A Publication Profile defines how a manuscript should appear for a specific target.

Profiles may define:

- typography
- citation style
- note style
- layout
- metadata mapping
- accessibility requirements
- branding

The manuscript itself remains unchanged.

---

# Supported Outputs

OMI is designed to support multiple publication formats.

Examples include:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Crossref XML
- DataCite XML
- Markdown
- Plain Text

Future formats may be added without changing the manuscript.

---

# Multi-Target Publishing

One manuscript may generate several outputs simultaneously.

Example:

```
Semantic Manuscript

        │

 ┌──────┼──────────────┐

 ▼      ▼              ▼

HTML    PDF       JATS XML

 ▼      ▼              ▼

Website Print     Repository
```

Each output is derived independently.

---

# Rendering Engine

The Rendering Engine interprets semantic objects and applies publication rules.

Examples:

Heading

↓

HTML

```
<h2>
```

↓

PDF

Large Heading

↓

JATS

```
<title>
```

The semantic object remains identical.

---

# Notes

Annotations may be rendered differently.

Examples:

PDF

↓

Footnotes

HTML

↓

Tooltips

EPUB

↓

Endnotes

JATS

↓

Semantic elements

---

# Citations

Citation rendering depends entirely on the publication profile.

Examples:

APA

↓

(Author, Year)

Chicago

↓

Footnote

IEEE

↓

[15]

The Citation Model itself never changes.

---

# Figures

Publication Profiles determine:

- placement
- captions
- numbering
- cross references
- accessibility

---

# Tables

Profiles may define:

- responsive HTML tables
- printable tables
- accessibility metadata
- long table handling

---

# Equations

Supported rendering may include:

- MathML
- LaTeX
- SVG
- PDF vector output

---

# Metadata

Metadata is exported independently for each target.

Examples:

Crossref XML

↓

Crossref Schema

DataCite XML

↓

DataCite Schema

JATS XML

↓

JATS Metadata

No metadata is duplicated manually.

---

# Accessibility

Publishing Profiles should preserve accessibility.

Examples:

- semantic headings
- image descriptions
- table headers
- keyboard navigation
- tagged PDF
- EPUB accessibility metadata

Accessibility requirements should be configurable.

---

# Preservation

Publication formats intended for long-term preservation should maintain semantic integrity.

Preferred preservation formats include:

- JATS XML
- PDF/A
- EPUB
- Markdown

Future mappings may support institutional repository standards.

---

# Automation

Publishing workflows may be fully automated.

Example:

```
Review Completed

↓

Accept

↓

Generate HTML

↓

Generate PDF

↓

Generate JATS XML

↓

Deposit Metadata

↓

Publish
```

No manual document recreation is required.

---

# Plugin Architecture

New publication formats are added through plugins.

Examples:

```
OMI Core

        │

        ├── HTML Renderer

        ├── PDF Renderer

        ├── EPUB Renderer

        ├── JATS Renderer

        ├── DOCX Renderer

        └── Custom Renderer
```

The Core Publishing Model remains unchanged.

---

# Interoperability

Future integrations include:

- Open Journal Systems (OJS)
- Open Monograph Press (OMP)
- Open Preprint Systems (OPS)
- Crossref
- DataCite
- Zenodo
- Institutional Repositories

---

# Versioning

Every publication is reproducible.

A published output should always be traceable to:

- manuscript version
- publication profile
- rendering engine version

This ensures reproducibility and transparency.

---

# Future Work

Future specifications will define:

- Rendering API
- Template Language
- Publication Profiles
- Workflow Automation
- Continuous Publishing
- Dynamic Publications

---

# Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-007` to canonical `OMI-SPEC-230`.

---

# Summary

The OMI Publishing Model transforms a single semantic manuscript into multiple publication formats without altering the original scholarly content.

By separating semantic meaning from presentation, OMI enables automated, reproducible, and interoperable publishing workflows across journals, repositories, and future scholarly communication platforms.

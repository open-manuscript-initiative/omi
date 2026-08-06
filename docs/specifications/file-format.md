---
id: file-format
title: OMI-SPEC-320 — File Format
sidebar_label: File Format
sidebar_position: 20
---

# OMI-SPEC-320 — File Format

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-011`

---

# Purpose

The OMI File Format defines how semantic manuscripts are stored, exchanged, versioned, and preserved.

Unlike traditional document formats, the OMI format represents scholarly knowledge rather than page layout.

The format is designed to remain independent of operating systems, software vendors, and publishing platforms.

---

# Design Principles

The File Format follows these principles:

- Semantic first
- Human readable
- Machine readable
- Platform independent
- Extensible
- Versionable
- Archive friendly
- FAIR compatible

---

# Single Source of Truth

An OMI manuscript is the authoritative source of scholarly content.

Publication formats such as PDF, HTML, EPUB, and JATS XML are generated from the manuscript.

They are not the primary document.

```
OMI Manuscript

      │

      ▼

Publication Profiles

      │

      ├── HTML

      ├── PDF

      ├── EPUB

      ├── DOCX

      ├── JATS XML

      ├── Crossref XML

      └── DataCite XML
```

---

# File Structure

An OMI manuscript is stored as a structured package.

Example:

```
example.omi

├── manifest.json
├── metadata.json
├── document.json
├── annotations.json
├── anchors.json
├── citations.json
├── review.json
├── history.json
├── assets/
│   ├── figures/
│   ├── tables/
│   ├── media/
│   └── datasets/
└── plugins/
```

Implementations may use different internal representations while preserving interoperability.

---

# Manifest

Every manuscript contains a manifest.

Example:

```json
{
  "format": "OMI",
  "version": "1.0",
  "created": "2026-07-04",
  "document": "document.json"
}
```

The manifest identifies the package contents.

---

# Core Components

An OMI manuscript consists of:

- Manifest
- Metadata
- Document Structure
- Scholarly Objects
- Anchors
- Annotations
- Citations
- Review Layer
- Version History
- Assets

Each component may evolve independently.

---

# Assets

Binary resources are stored separately.

Examples:

- Images
- Figures
- Audio
- Video
- Datasets
- Supplementary Files

Assets are referenced through persistent identifiers rather than embedded formatting.

---

# Version History

Every manuscript maintains a complete history.

Examples include:

- creation
- revisions
- peer review
- editorial decisions
- publication

History remains part of the manuscript.

---

# Identifiers

Every scholarly object within the package receives a persistent identifier.

Examples:

```
omi:document

omi:paragraph

omi:citation

omi:anchor

omi:annotation
```

Identifiers remain stable across revisions whenever possible.

---

# Compression

Implementations may distribute manuscripts as compressed archives.

Possible extensions include:

```
.omi

.omiz
```

Compression must not alter semantic content.

---

# Interoperability

The format is designed for interoperability.

Possible mappings include:

- JATS XML
- DOCX
- Markdown
- HTML
- EPUB
- PDF
- Crossref XML
- DataCite XML

Conversion should preserve semantic meaning whenever possible.

---

# Validation

An OMI package should support validation.

Validation includes:

- schema validation
- identifier integrity
- anchor integrity
- metadata consistency
- citation consistency
- asset references

---

# Digital Preservation

The format is intended for long-term preservation.

Design goals include:

- open specification
- no proprietary dependencies
- reproducible rendering
- forward compatibility

---

# Extensibility

Plugins may introduce additional package components.

Examples:

```
plugins/

history/

medicine/

chemistry/

physics/
```

Core readers ignore unknown extensions while preserving them.

---

# Security

Packages may optionally support:

- digital signatures
- integrity verification
- checksums
- trusted provenance

Future versions may define cryptographic profiles.

---

# Future Work

Future specifications will define:

- Package Schema
- Validation Rules
- Digital Signatures
- Incremental Storage
- Distributed Manuscripts

---

# Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-011` to canonical `OMI-SPEC-320`.

---

# Summary

The OMI File Format is a semantic, extensible, and platform-independent container for scholarly manuscripts.

Rather than preserving appearance, it preserves knowledge.

Every publication, export, and rendering originates from the same authoritative semantic manuscript, ensuring long-term interoperability and sustainable scholarly communication.

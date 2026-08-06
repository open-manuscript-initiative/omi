---
id: document-model
title: OMI-SPEC-100 — Document Model
sidebar_label: Document Model
sidebar_position: 10
---

# OMI-SPEC-100 — Document Model

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-001`

---

# Purpose

The Open Manuscript Initiative (OMI) defines a semantic document model designed specifically for scholarly communication.

Unlike traditional word processors, OMI separates scholarly meaning from visual presentation. Authors describe *what* information represents rather than *how* it should appear.

The document model serves as the common foundation for authoring, peer review, publishing, preservation, and machine processing.

---

# Design Principles

The document model is built upon the following principles:

- Semantic first
- Platform independent
- Human readable
- Machine processable
- Extensible
- Interoperable
- Accessible
- Long-term preservable

---

# Layered Architecture

The OMI document model consists of multiple layers.

```text
┌──────────────────────────────────────────────┐
│               Discipline Profiles            │
├──────────────────────────────────────────────┤
│               Scholarly Objects              │
├──────────────────────────────────────────────┤
│              Core Document Model             │
└──────────────────────────────────────────────┘
```

The Core Document Model remains stable across all disciplines.

Higher layers extend, but never replace, the core specification.

---

# Core Document Model

Every OMI manuscript contains a common set of semantic objects.

## Metadata

- Title
- Subtitle
- Authors
- Affiliations
- ORCID
- Abstract
- Keywords
- Language
- License
- Funding
- Persistent Identifiers

---

## Document Structure

- Section
- Subsection
- Paragraph
- Quotation
- List
- Figure
- Table
- Caption
- Equation
- Appendix

---

## Scholarly Objects

- Citation
- Bibliography
- Footnote
- Endnote
- Cross-reference
- Dataset
- Software
- Supplementary Material
- Review Comment
- Annotation

---

# Discipline Profiles

Different scientific disciplines require specialised semantic objects.

OMI extends the Core Document Model through **Discipline Profiles**.

A profile adds new object types, validation rules, metadata, and export behaviour without modifying the underlying document model.

Examples include:

- History
- Theology
- Linguistics
- Mathematics
- Physics
- Chemistry
- Biology
- Medicine
- Computer Science
- Engineering
- Economics
- Law

---

# Example: History Profile

The History profile introduces domain-specific semantic objects such as:

- Archival Source
- Historical Person
- Historical Place
- Historical Event
- Manuscript Source
- Regest
- Critical Apparatus
- Diplomatic Transcription

---

# Example: Mathematics Profile

The Mathematics profile extends the model with:

- Definition
- Axiom
- Theorem
- Lemma
- Corollary
- Proof
- Formula
- Symbol Registry

---

# Example: Physics Profile

Additional semantic objects include:

- Equation
- Physical Constant
- Measurement
- Unit
- Instrument
- Experiment
- Simulation

---

# Example: Chemistry Profile

Additional semantic objects include:

- Molecule
- Compound
- Reaction
- Crystal Structure
- Spectrum
- Chemical Formula

---

# Example: Biology Profile

Additional semantic objects include:

- Species
- Taxonomic Classification
- Gene
- Protein
- DNA Sequence
- Specimen

---

# Example: Medicine Profile

Additional semantic objects include:

- Clinical Trial
- Patient Cohort
- Intervention
- Outcome
- Ethics Approval
- CONSORT Checklist

---

# Multiple Profiles

Scientific research is increasingly interdisciplinary.

An OMI manuscript may therefore use multiple Discipline Profiles simultaneously.

Example:

```text
History
+ Computer Science
+ Linguistics
```

or

```text
Biology
+ Computer Science
+ Statistics
```

Each profile contributes additional semantic objects while remaining fully compatible with the Core Document Model.

---

# Plugin Architecture

Discipline Profiles are implemented as plugins.

```text
OMI Core

    │

    ├── History Profile

    ├── Mathematics Profile

    ├── Physics Profile

    ├── Medicine Profile

    ├── Law Profile

    └── Custom Profile
```

Each plugin may define:

- additional semantic objects
- metadata
- validation rules
- export mappings
- user interface extensions

without modifying the OMI Core.

---

# Object-Oriented Model

An OMI manuscript is composed of semantic objects.

```text
Document
│
├── Metadata
├── Sections
├── Paragraphs
├── Figures
├── Tables
├── Citations
├── Bibliography
├── Annotations
├── Review Layer
└── Discipline Objects
```

Each object has:

- unique identifier
- semantic type
- metadata
- relationships
- version history

---

# Semantic Relationships

Objects may reference one another.

Examples include:

- citation → bibliography entry
- figure → caption
- theorem → proof
- archival source → repository
- person → ORCID
- dataset → DOI

Relationships are explicit and machine-readable.

---

# Extensibility

The document model is designed for long-term evolution.

Future versions may introduce additional object types without breaking existing manuscripts.

Backward compatibility is a fundamental design requirement.

---

# Future Work

Future specifications will define:

- Annotation Model
- Review Model
- Citation Model
- Metadata Model
- Publishing Model
- Plugin API
- File Format Specification

---

# Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-001` to canonical `OMI-SPEC-100`.

---

# Summary

The OMI Document Model is designed to represent scholarly knowledge rather than formatted documents.

A stable Core Document Model combined with extensible Discipline Profiles enables OMI to support every scientific discipline while maintaining interoperability, portability, and long-term sustainability.

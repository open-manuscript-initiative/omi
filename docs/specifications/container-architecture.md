---
id: container-architecture
title: OMI-SPEC-330 — Container Architecture
sidebar_label: Container Architecture
sidebar_position: 21
description: Defines the portable package layout for OMI manuscripts and their associated resources.
---

# OMI-SPEC-330 — Container Architecture

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-012`

**Depends on:** OMI-SPEC-320 (File Format)

---

## Purpose

The Container Architecture defines the portable package structure used to exchange and preserve an OMI manuscript together with its metadata, history, annotations, citations, assets, profiles, and extensions.

The container complements the [File Format](./file-format.md): OMI-SPEC-320 defines the logical manuscript representation, while this specification defines how the related files are assembled into one package.

---

## Recommended Container Layout

The following directory structure is the current recommended layout. It remains provisional while this specification is in Draft status.

```text
paper.omi
├── META-INF/
│   ├── manifest.json
│   ├── mimetype
│   ├── checksums.json
│   └── signatures.json
├── manuscript/
│   ├── document.json
│   ├── metadata.json
│   ├── history.json
│   └── review.json
├── annotations.json
├── citations.json
├── anchors.json
├── provenance.json
├── media/
│   ├── images/
│   ├── figures/
│   ├── assets/
│   └── datasets/
├── profiles/
└── plugins/
```

---

## Package Principles

An OMI container should be:

- self-describing;
- platform independent;
- inspectable with standard archive tools;
- suitable for validation;
- safe for long-term preservation;
- capable of preserving unknown extensions;
- independent of one editor or publishing system.

---

## `META-INF`

The `META-INF` directory contains package-level control information.

### `manifest.json`

The manifest identifies package members, their media types, logical roles, versions, and optional dependencies.

### `mimetype`

The `mimetype` file identifies the package media type. Its exact value and placement requirements will be fixed before Review Candidate status.

### `checksums.json`

Checksums allow implementations to detect accidental modification or corruption.

### `signatures.json`

Digital signatures are optional in the Draft architecture. A future integrity profile will define signature algorithms, canonicalization, trust, and verification requirements.

---

## Manuscript Components

The `manuscript` directory stores the principal structured representations:

- `document.json` — manuscript structure and content;
- `metadata.json` — descriptive, administrative, and preservation metadata;
- `history.json` — version and change history;
- `review.json` — review objects included in the package.

A publication or preservation profile may restrict which components are permitted or required.

---

## Relationship Files

The package may store relationship collections separately:

- `annotations.json`;
- `citations.json`;
- `anchors.json`;
- `provenance.json`.

Separating these collections supports independent processing while preserving stable identifiers between them.

---

## Media and Assets

Binary and externally authored resources belong under `media`.

Implementations must prevent unsafe paths, executable-content confusion, archive traversal, and uncontrolled remote-resource resolution.

Every packaged asset should be referenced by a manifest entry and checksum.

---

## Profiles and Plugins

The `profiles` directory may contain declared publication, discipline, validation, or preservation profiles.

The `plugins` directory may preserve extension data required to interpret plugin-defined objects. Packaging extension data does not imply that every consumer must execute plugin code.

A conforming preservation processor should retain unknown extension resources when it can do so safely.

---

## Compression and Serialization

The physical archive format, compression method, entry ordering, filename encoding, and canonical byte representation will be defined before this specification reaches Implementation Candidate.

A container must not depend on operating-system-specific path syntax.

---

## Validation

Container validation should include:

- required control files;
- manifest completeness;
- unique and safe paths;
- checksum integrity;
- declared media types;
- referenced-file existence;
- identifier consistency;
- unsupported or unknown extensions;
- maximum resource and expansion limits.

---

## Security Considerations

Implementations must treat containers as untrusted input.

Processors should defend against:

- path traversal;
- archive bombs;
- duplicate or ambiguous paths;
- malicious active content;
- unsafe symbolic links;
- misleading media types;
- signature spoofing;
- unbounded decompression or parsing.

Opening a container must not automatically execute packaged code.

---

## Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-012` to canonical `OMI-SPEC-330`; repaired the malformed Markdown structure and expanded the initial package requirements.

---

## Summary

The OMI Container Architecture packages a semantic manuscript and its related resources into a portable, inspectable, and preservable unit.

It defines organization and integrity at the package level while leaving manuscript semantics to the OMI File Format and related model specifications.

---
id: publication-output-validation-provenance
title: Publication Output Validation and Provenance
sidebar_label: Publication Output Validation and Provenance
description: How Open Manuscript Studio validates JATS, generates deterministic PDF/HTML artifacts, records build provenance, and blocks publication when semantic fidelity is not sufficient.
keywords:
  - Open Manuscript Studio
  - JATS 1.4
  - JATS4R
  - Vivliostyle
  - PDF
  - provenance
  - reproducible publishing
  - publication release gate
  - scholarly publishing
---

# Publication Output Validation and Provenance

Open Manuscript Studio treats publication export as a **validated build process**, not as a simple “Save as…” conversion.

The current publishing pipeline separates five questions:

1. **Is the canonical manuscript internally valid?**
2. **Can Studio map its semantics to the target format without silent loss?**
3. **Does the generated artifact satisfy the target format specification?**
4. **Was the artifact produced by the expected renderer and configuration?**
5. **Can the exact output be traced back to the committed manuscript revision?**

This page describes the reference implementation in Studio. It is implementation documentation, not a replacement for the normative OMI specifications.

## Current publication build pipeline

The implemented publication-output path is:

```text
Committed OMI manuscript
        │
        ▼
Resolved publication profile
        │
        ▼
Target renderer
        │
        ├── JATS XML
        ├── semantic HTML package
        └── PDF artifact
        │
        ▼
Format / semantic release gates
        │
        ▼
Artifact + .omi-build.json provenance sidecar
```

The manuscript itself is not rewritten merely to satisfy a renderer.

## JATS 1.4 validation

Studio currently targets **NISO JATS 1.4 Article Authoring** with the **MathML 3** DTD for its validated JATS export path.

Validation uses a pinned local schema package and an offline libxml2-based validation engine. Submitted XML cannot replace the trusted DTD with a remote schema, and input-side entity declarations or internal subsets are rejected before validation.

This gives the export process a deterministic schema boundary and avoids network-dependent validation of unpublished manuscripts.

### DTD validity is necessary, but not sufficient

JATS is broad enough that XML may be technically DTD-valid while still losing source semantics.

Studio therefore runs a separate **semantic-fidelity gate**. Known lossy fallbacks are reported explicitly and can block publication release even when the XML itself is valid.

Examples include:

- unknown rich-text structures;
- unsupported inline semantics;
- rich note content that would otherwise be reduced to plain text;
- note citations that cannot yet be represented structurally;
- chart or music-score fallbacks;
- unsafe or unsupported mathematical representations;
- image references that are not suitable for publication interchange.

The purpose is to prevent a “valid XML” result from being mistaken for a faithful scholarly representation.

## JATS conformance matrix

Studio maintains a machine-readable OMI → JATS capability matrix.

Each capability is classified as one of:

| Status | Meaning |
|---|---|
| **Stable** | Intentional semantic mapping with release evidence. |
| **Conditional** | Supported under documented constraints. |
| **Fallback** | Some information is retained, but not at publication-release fidelity. |
| **Unsupported** | Studio does not claim a supported semantic mapping. |

The matrix also records whether a condition is advisory, mandatory, or blocks release when used.

This makes JATS support auditable at the capability level rather than presenting “JATS export” as one undifferentiated feature.

## Publication release gates

A JATS artifact is released only when all mandatory gates pass.

The current gate sequence includes:

- no error-level renderer or publication-profile diagnostics;
- no active semantic-fidelity blocker;
- the expected JATS 1.4 Article Authoring / MathML 3 target;
- full offline DTD validation;
- publication-build provenance delivery.

The dedicated JATS export interface and the general Studio export interface use the same release decision.

### JATS4R profile layer

A downstream **JATS4R** publication-profile layer is being added on top of the DTD and OMI semantic-fidelity checks.

Its purpose is different from DTD validation: JATS4R focuses on reuse-oriented community recommendations such as accessibility, contributor/affiliation structure, citation quality, permissions/licence metadata, mathematical representation and related best practices.

The Studio implementation is designed to run locally so unpublished manuscript XML does not need to be sent to a public validation service. The implementation is explicitly scoped to the JATS4R rules relevant to Studio’s Article Authoring output; it is not presented as a substitute for the complete official JATS4R Schematron validator.

Crossref, PubMed Central, OJS and custom publisher profiles are natural downstream layers of the same profile mechanism.

## Deterministic PDF artifacts

PDF output is generated as an artifact rather than relying on the browser’s interactive print dialog.

Studio uses a pinned **Vivliostyle CLI** renderer for paged PDF generation. The server validates the renderer version before use and rejects unsafe HTML inputs that could load external resources or execute active content.

The PDF pipeline distinguishes:

- **print/archive PDF** — intended for fixed-layout publication and preservation-oriented use;
- **interactive PDF** — preserves usable scholarly and external links where appropriate.

Publication styles, page geometry, typography, footnotes and other paged-media rules are resolved before the final render.

## Semantic HTML packages

The HTML publication path produces a portable semantic package rather than a visual imitation of printed pages.

Print-only behavior such as fixed paper size, running headers and page numbering is removed from semantic HTML output.

HTML package generation also uses deterministic timestamps derived from the committed manuscript revision rather than the current clock. Rebuilding the same committed source therefore produces stable package bytes when all other build inputs are unchanged.

## Publication build provenance

JATS, HTML and PDF publication artifacts are accompanied by a portable provenance sidecar:

```text
article.xml
article.xml.omi-build.json

article.html.zip
article.html.zip.omi-build.json

article.pdf
article.pdf.omi-build.json
```

The sidecar records information such as:

- committed manuscript revision;
- canonical manuscript state digest;
- resolved publication-profile digest;
- exact artifact byte length;
- SHA-256 artifact digest;
- Studio version, build and commit where available;
- renderer identifier and renderer version;
- deterministic publication-build identifier.

For PDF, Studio also fingerprints the exact self-contained HTML input passed to Vivliostyle. This matters because pagination can depend on resolved publication style, publisher identity, typesetting corrections, hyphenation and embedded assets.

## Reproducibility model

The intended reproducibility chain is:

```text
manuscript revision
+ publication profile
+ renderer input
+ renderer identity/version
        │
        ▼
publication artifact
        │
        ▼
SHA-256 digest
        │
        ▼
.omi-build.json
```

The provenance file does not become part of the scholarly manuscript. It describes the build that produced a publication artifact.

This preserves the architectural separation between **scholarly state** and **publication state**.

## CI and release evidence

The Studio CI pipeline exercises the same publication boundaries used by the application.

Current automated evidence includes:

- JATS renderer tests;
- full JATS 1.4 DTD validation;
- semantic-conformance tests;
- publication release-gate tests;
- a real Vivliostyle PDF smoke render;
- provenance-sidecar tests;
- reproducibility tests for HTML publication packages.

The 1.0 readiness workflow produces machine-readable publication-release evidence alongside the wider release-readiness artifact set.

## Relationship to OMI specifications

The implementation is aligned with the architectural direction of:

- [OMI-SPEC-230 — Publishing Model](/docs/specifications/publishing-model)
- [OMI-SPEC-240 — Rendering and Publication Profile Model](/docs/specifications/rendering-publication-profile-model)
- [Publication Styles and Publisher Profiles](/docs/foundations/publication-styles-and-publisher-profiles)
- [Studio Implementation Status](/docs/governance/studio-implementation-status)

The reference implementation may move faster than the Draft specifications. Implemented behavior therefore does not become normative solely because Studio supports it.

## Current boundary

The current work establishes a reliable publication-output foundation:

**semantic manuscript → validated target mapping → deterministic artifact → release gates → provenance**

The next profile-specific layers can build on that foundation without weakening it. A Crossref, PMC, OJS or journal-specific profile should add constraints to the existing release process rather than bypassing schema validation, semantic-fidelity checks or provenance.

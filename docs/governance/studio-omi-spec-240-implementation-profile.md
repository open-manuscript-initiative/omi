---
title: Open Manuscript Studio — OMI-SPEC-240 Implementation Profile
sidebar_label: Studio OMI-SPEC-240 Profile
sidebar_position: 3
description: Requirement-mapped implementation evidence for Open Manuscript Studio against OMI-SPEC-240 0.1.0 Draft, without making a formal conformance claim.
keywords:
  - Open Manuscript Studio
  - OMI-SPEC-240
  - implementation profile
  - publication profile
  - rendering
  - conformance evidence
---

# Open Manuscript Studio — OMI-SPEC-240 Implementation Profile

## Document metadata

| Field | Value |
|---|---|
| Document type | Reference implementation profile / implementation evidence report |
| Profile version | `0.1.0` |
| Status | Draft |
| Target specification | `OMI-SPEC-240@0.1.0` — Rendering and Publication Profile Model |
| Target specification status | Active Draft |
| Reference implementation | Open Manuscript Studio |
| Studio evidence baseline | `63e391d8a3e0191ec2b24e494664df30d66f43e3` |
| Evidence review date | 2026-09-18 |
| Formal conformance claim | **None** |
| Approved conformance suite | Not published |
| Evidence classification | **Partial implementation** |

## 1. Purpose

This document records how the current Open Manuscript Studio implementation maps to the requirements of
[OMI-SPEC-240 — Rendering and Publication Profile Model](/docs/specifications/rendering-publication-profile-model).

It has three purposes:

1. make the relationship between the Draft specification and the reference implementation auditable;
2. distinguish implemented behaviour from partial or unverified behaviour;
3. define the remaining work required before Studio can make a stronger implementation or conformance statement.

This document is an **implementation profile**, not a publication profile authored under OMI-SPEC-240. It describes the behaviour of one implementation of the specification.

## 2. Conformance boundary

OMI-SPEC-240 is an **Active Draft** specification. It was activated as version `0.1.0` on 2026-09-09.

Open Manuscript Studio implements a substantial subset of its model, including publisher profiles, reusable publication styles, semantic-role-based rendering, print and interactive PDF targets, semantic HTML, IDML style import, publication diagnostics, deterministic build provenance and target-specific rendering.

However, this document does **not** claim that Studio is formally conformant with OMI-SPEC-240.

A formal conformance claim requires, at minimum:

- a declared final conformance class and supported capability set;
- stable machine-readable profile/style schemas where required;
- requirement-mapped fixtures and tests;
- an approved conformance suite and result format;
- closure or explicit permitted treatment of every applicable normative requirement;
- evidence that the tested implementation version is the version being claimed.

Until that framework exists, the strongest statement made here is **Partial implementation with requirement-mapped evidence**.

The presence of a feature in Studio does not make that feature normative, and the presence of a requirement in OMI-SPEC-240 does not prove that Studio implements it.

## 3. Declared implementation surface

### 3.1 Roles

The current Studio implementation provides evidence for the following OMI-SPEC-240 roles:

- **profile producer** — users can select and edit publication profiles and reusable publication styles;
- **profile consumer** — Studio loads profile/style data and applies it during validation and rendering;
- **renderer** — Studio generates presentation-oriented publication output from canonical manuscript state;
- **validator-adjacent implementation** — Studio performs publication-readiness, semantic-fidelity, target and schema checks, although no complete OMI-SPEC-240 conformance validator is claimed.

### 3.2 Output targets

The implementation profile currently covers these rendering targets:

| Target | Studio implementation state | Notes |
|---|---|---|
| Print/archive PDF | Implemented | Pinned server-side Vivliostyle renderer; active hyperlinks removed for the print/archive variant. |
| Interactive PDF | Implemented | Uses the same publication source while retaining usable scholarly and external links. |
| Semantic HTML | Implemented | Script-free semantic HTML package; print-only pagination behaviour is omitted. |
| CSS style export | Implemented interoperability output | Exports style rules, but CSS is not itself the canonical OMI publication-profile model. |
| JATS XML | Adjacent validated publication output | Uses profile-aware publication gates, but JATS semantic mapping is primarily governed by the publishing/export layer rather than being treated as a visual rendering target in this profile. |
| EPUB and DTP-oriented formats | Outside this profile's verified target claim | Studio can export additional formats, but they are not treated here as evidence of complete OMI-SPEC-240 target conformance. |

### 3.3 Architecture

The implemented publication path follows this separation:

```text
Canonical OMI manuscript
        │
        ├── scholarly semantics
        ├── metadata
        └── references / notes / structured objects
        │
        ▼
Publisher / publication profile
        │
        ├── publisher identity and legal display policy
        └── selected reusable publication style
                        │
                        ▼
                  Target adaptation
                        │
             ┌──────────┼──────────┐
             ▼          ▼          ▼
         print PDF  interactive PDF  semantic HTML
             │          │          │
             └──────────┴──────────┘
                        │
                        ▼
          artifact + publication-build provenance
```

Typesetting corrections and presentation overrides are kept separate from canonical scholarly text and are applied in the publication layer.

## 4. Verified implementation evidence

The evidence baseline includes, among other implementation surfaces:

- `src/services/publicationStyleExport.ts` — publication-style loading, semantic rendering and target handling;
- `src/document/publicationStyles/` — reusable style data and the reference journal style;
- `src/components/PublicationStyleEditor.tsx` — named styles, page geometry, typography, paragraph-style inheritance, hyphenation and typesetting controls;
- `src/model/publicationParagraphStyles.ts` — reusable paragraph-style definitions and presentation properties;
- `src/components/PublisherProfileEditor.tsx` — publisher identity and publication policy editing;
- `src/components/PublicationProfilePanel.tsx` — profile, style, HTML, JATS, PDF and publication-artifact surfaces;
- `src/services/idmlPublicationStyleImport.ts` — Adobe IDML style-set import with explicit trust boundaries;
- `src/services/publicationBuildSidecar.ts` — portable publication-build provenance;
- `src/services/printHyphenation.ts` — language-aware print hyphenation;
- `src/services/exportPdf.ts` and the Vivliostyle service path — separate print and interactive PDF behaviour;
- HTML/JATS/PDF publication release-gate tests and provenance tests;
- `docs/architecture/publication-build-provenance.md`;
- `docs/architecture/vivliostyle-pdf-artifacts.md`.

The related OMI implementation documentation is:

- [Publication Styles and Publisher Profiles](/docs/foundations/publication-styles-and-publisher-profiles);
- [Publication Output Validation and Provenance](/docs/foundations/publication-output-validation-provenance);
- [Studio Implementation Status](/docs/governance/studio-implementation-status).

## 5. Requirement mapping

The statuses in this table are evidence classifications for this implementation profile. They are **not** OMI lifecycle states and are **not** conformance results.

- **Implemented** — repository evidence supports the stated requirement for the declared implementation surface.
- **Partial** — relevant behaviour exists, but some required generality, diagnostics, target coverage, or requirement-specific evidence remains incomplete.
- **Not verified** — the review did not establish sufficient evidence for the requirement.
- **Not applicable** — the requirement does not apply to the declared implementation surface. No current requirement is excluded solely to improve the profile status.

### 5.1 Core rendering and profile separation

| Requirement | Status | Studio evidence / limitation |
|---|---|---|
| `REQ-RPP-001` | **Implemented** | Publication rendering derives from canonical manuscript state. Publication styles and typesetting corrections are applied in the publication layer rather than persisted merely to satisfy rendering. |
| `REQ-RPP-002` | **Implemented** | Publisher identity/profile policy and reusable publication-style typography are represented and edited separately. |
| `REQ-RPP-003` | **Not verified** | No general OMI-SPEC-240 unknown-extension round-trip contract has been verified for arbitrary profile/style extension data. |
| `REQ-RPP-004` | **Partial** | JATS/HTML/PDF paths expose diagnostics and release blockers, but generic unsupported publication-style rules are not yet covered by a single complete cross-target diagnostic model. |
| `REQ-RPP-005` | **Partial** | Committed revision digests, profile digests, pinned renderers, deterministic HTML timestamps and renderer-input fingerprints provide reproducibility evidence. Equivalent-result guarantees are not yet formally tested across every declared resource and target combination. |

### 5.2 Publication profile and reusable style

| Requirement | Status | Studio evidence / limitation |
|---|---|---|
| `REQ-RPP-010` | **Implemented** | Studio keeps an active/selected style within the available named style set and retains at least one valid style. |
| `REQ-RPP-011` | **Implemented** | Publisher identity is separated from manuscript contributor/authorship and scholarly metadata state. |
| `REQ-RPP-012` | **Implemented** | Publisher branding, identifiers and legal display data can change independently of canonical manuscript content and reusable typography. |
| `REQ-RPP-013` | **Implemented** | Typography/page geometry are edited in the style layer and do not redefine publisher identity, licence semantics or manuscript metadata. |
| `REQ-RPP-020` | **Implemented** | Rendering maps OMI semantic roles to presentation. IDML names may help mapping but source-application style names are not required as manuscript semantics. |
| `REQ-RPP-021` | **Implemented** | Style application is presentation-oriented and does not intentionally rewrite object identity, contributor identity, citation targets or scholarly values. |
| `REQ-RPP-022` | **Partial** | Paragraph-style `BasedOn` inheritance exists. A complete requirement-specific proof that every inheritance cycle is detected and rejected for all profile/style imports is not yet recorded. |
| `REQ-RPP-023` | **Implemented** | IDML style import uses recognizable external style names as mapping evidence and produces reusable OMI publication-style roles rather than requiring InDesign semantics in the manuscript. |

### 5.3 Targets, resources and cascade

| Requirement | Status | Studio evidence / limitation |
|---|---|---|
| `REQ-RPP-030` | **Implemented** | Print/archive PDF and interactive PDF are distinct target modes because they intentionally differ in hyperlink behaviour. |
| `REQ-RPP-031` | **Implemented** | Semantic HTML omits fixed page size, running headers, page numbers and forced print pagination. |
| `REQ-RPP-040` | **Partial** | Font fallbacks and controlled resources exist, and renderer inputs are fingerprinted. A uniform manifest diagnostic for every materially layout-changing resource substitution is not yet verified. |
| `REQ-RPP-041` | **Implemented** | Commercial fonts are not bundled or redistributed automatically; publication documentation treats missing publisher fonts as external resources. |
| `REQ-RPP-050` | **Partial** | Style/profile/target/override resolution is deterministic in the implemented paths, but a complete property-by-property precedence fixture suite mapped to this requirement has not yet been published. |
| `REQ-RPP-051` | **Implemented** | Typesetting and presentation overrides are explicit, removable publication-layer state and do not intentionally mutate canonical scholarly semantics. |

### 5.4 Citations and notes

| Requirement | Status | Studio evidence / limitation |
|---|---|---|
| `REQ-RPP-060` | **Implemented** | Citation rendering changes presentation while citation targets, locators and scholarly identity remain in the manuscript/reference model. |
| `REQ-RPP-061` | **Partial** | Footnotes/endnotes and their references are semantic objects and target renderers retain note relationships. Complete cross-target requirement fixtures are still needed. |

### 5.5 Failure behaviour and diagnostics

| Requirement | Status | Studio evidence / limitation |
|---|---|---|
| `REQ-RPP-100` | **Implemented** | Rendering is non-destructive. Failed IDML import/render paths do not intentionally partially rewrite the canonical manuscript. |
| `REQ-RPP-101` | **Partial** | Publication release gates and fidelity diagnostics identify known unsupported/fallback conditions, but there is not yet one complete generic RPP diagnostic vocabulary covering every degraded profile/style property. |
| `REQ-RPP-102` | **Not verified** | The review did not establish requirement-specific evidence that every failed profile/style edit preserves the last valid state in all editing/import paths. |

### 5.6 Security, privacy and provenance

| Requirement | Status | Studio evidence / limitation |
|---|---|---|
| `REQ-RPP-200` | **Implemented** | Manuscript, profile and imported IDML/XML values are processed as untrusted data at publication/import boundaries. |
| `REQ-RPP-201` | **Implemented** | Publication import/render paths reject or avoid executing supplied scripts, template code, processing instructions and active content. |
| `REQ-RPP-202` | **Implemented** | IDML/XML trust boundaries reject unsafe declarations/processing instructions; JATS validation uses pinned local resources rather than accepting untrusted remote schema substitution. |
| `REQ-RPP-203` | **Partial** | PDF rendering blocks unsafe external resource loading and uses self-contained input. A single profile-wide external-resource policy covering every future target/resource type is not yet formalized as RPP evidence. |
| `REQ-RPP-204` | **Partial** | Studio has role-aware and double-anonymous review projections, but a dedicated renderer-boundary test matrix proving that every publication target excludes all unauthorized/private objects has not yet been published. |
| `REQ-RPP-205` | **Implemented** | Untrusted IDML/parser errors are isolated from raw DOM rendering and fixed/safe diagnostics are used in the hardened import path. |
| `REQ-RPP-206` | **Partial** | `.omi-build.json` records artifact/manuscript/profile digests and renderer identity. The sidecar is not yet treated here as a separately signed archival attestation, so evidentiary integrity protection remains incomplete. |

### 5.7 Accessibility and internationalisation

| Requirement | Status | Studio evidence / limitation |
|---|---|---|
| `REQ-RPP-220` | **Implemented** | Semantic HTML and publication rendering preserve heading structure and supported accessibility metadata such as image alternative text and table semantics rather than styling them away. |
| `REQ-RPP-221` | **Implemented** | The semantic HTML package emits meaningful document structure instead of flattening the manuscript into generic visual containers. |
| `REQ-RPP-222` | **Not verified** | Studio does not currently make an OMI-SPEC-240 accessible-PDF conformance claim. Tagged-PDF structure and requirement-level evidence remain future work. |
| `REQ-RPP-223` | **Partial** | Interactive HTML/PDF retains usable links where supported. A complete target-specific accessibility test set for link text, destinations and keyboard interaction has not yet been mapped to this requirement. |
| `REQ-RPP-230` | **Partial** | Font fallback chains and system-font handling exist, but a complete missing-glyph detection and diagnostic contract has not been verified. |
| `REQ-RPP-231` | **Implemented** | Language-aware hyphenation is applied during print rendering and typesetting without replacing the canonical manuscript text. |

## 6. Implementation-specific capabilities beyond the minimum mapping

Studio currently contains publication capabilities that are useful implementation evidence but do not, by themselves, establish additional conformance:

- visual publication editing against the current manuscript;
- reusable named publication styles;
- InDesign-like paragraph-style inheritance and next-style behaviour;
- IDML style-set import;
- publisher identity and legal-display configuration;
- separate export and print stylesheets;
- language-aware print hyphenation;
- print/archive and interactive PDF variants;
- semantic HTML packages;
- validated JATS publication output;
- publication-build sidecars with SHA-256 provenance;
- OJS/OMP transfer of provenance-bound publication artifacts.

These features may evolve faster than the Draft specification. Where Studio and OMI-SPEC-240 diverge, the divergence must be resolved explicitly rather than treating implementation behaviour as normative by precedent.

## 7. Gaps before an Implemented or Tested classification

The following work is required before this profile should be promoted beyond **Partial**:

1. publish a canonical machine-readable profile/style schema or an equivalent normative serialization contract;
2. define and test unknown-extension preservation/loss reporting;
3. add generic unsupported-rule and resource-substitution diagnostics to the publication manifest;
4. publish deterministic cascade/precedence fixtures;
5. add inheritance-cycle fixtures for imported and edited style graphs;
6. map note-reference preservation across every declared target;
7. add renderer-boundary authorization/visibility tests;
8. define missing-glyph detection/fallback diagnostics;
9. define the accessible-PDF capability level and, if claimed, add tagged-PDF/read-order tests;
10. publish requirement-mapped OMI-SPEC-240 fixtures and automated result evidence;
11. adopt the future OMI conformance framework when the relevant conformance specification and suite are active.

## 8. Evidence and release policy

A Studio release MUST NOT be described as **OMI-SPEC-240 conformant** solely because:

- the publication-profile UI exists;
- a profile JSON can be exported;
- PDF/HTML/JATS rendering succeeds;
- the implementation profile lists a requirement as Implemented;
- Studio is the OMI reference implementation.

A future conformance statement must identify:

- the exact Studio release/build;
- the exact OMI-SPEC-240 version;
- the claimed conformance class or capability profile;
- the conformance-suite version;
- the test result/report;
- any permitted limitations.

Until then, user-facing language should use formulations such as:

> Studio implementation profile for OMI-SPEC-240@0.1.0 Draft. Implementation coverage is documented separately; this is not a formal conformance claim.

## 9. Relationship to OMI-SPEC-230

OMI-SPEC-230 defines the publication workflow and publication-output lifecycle. OMI-SPEC-240 defines the rendering/profile contract used inside that workflow.

The boundary is:

```text
OMI-SPEC-230
publication job / publication state / output lifecycle
                    │
                    ▼
OMI-SPEC-240
resolved profile + style + target rendering contract
                    │
                    ▼
publication artifact + diagnostics + provenance
```

Studio's publication build pipeline exercises both domains, but evidence for one specification must not be treated automatically as evidence for the other.

## 10. Maintenance

This profile should be reviewed when any of the following changes:

- OMI-SPEC-240 version or lifecycle state;
- publication profile/style data structures;
- rendering targets;
- Vivliostyle or other renderer versions/policies;
- IDML/style import behaviour;
- publication-build provenance format;
- authorization projection in publication rendering;
- accessibility claims;
- formal OMI conformance tooling.

Requirement statuses should be changed only when repository evidence supports the change.

## 11. Change history

- **0.1.0 — 2026-09-18:** Initial Studio implementation profile for `OMI-SPEC-240@0.1.0`; records the declared target surface, requirement-by-requirement implementation evidence, non-conformance boundary and gaps to stronger evidence.

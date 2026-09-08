---
id: rendering-publication-profile-model
title: OMI-SPEC-240 — Rendering and Publication Profile Model
sidebar_label: Rendering and Publication Profiles
sidebar_position: 17
description: Normative model for rendering canonical OMI manuscripts through publisher profiles, reusable publication styles, target-specific rules and deterministic output processing.
keywords:
  - Open Manuscript Initiative
  - OMI
  - rendering
  - publication profile
  - publication style
  - publisher profile
  - typography
  - PDF
  - HTML
---

# OMI-SPEC-240 — Rendering and Publication Profile Model

## Document metadata

| Field | Value |
|---|---|
| Identifier | `OMI-SPEC-240` |
| Title | Rendering and Publication Profile Model |
| Version | `0.1.0` |
| Status | Draft |
| Document type | Normative with informative examples |
| Normative language | English |
| Editors | Open Manuscript Initiative maintainers |
| Last updated | 2026-09-09 |
| Replaces | None |
| Replaced by | None |
| Depends on | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-210` |
| Used by | `OMI-SPEC-230` |
| Schemas | None in this Draft |
| Profiles | This specification defines the profile model; registered profile vocabularies are future work |
| Implementation status | Partial reference implementation in Open Manuscript Studio; see the implementation-status documents |
| Issue tracker | `open-manuscript-initiative/omi` GitHub issues |

## 1. Abstract

This specification defines the OMI model for transforming the semantic structure of a canonical manuscript into presentation-oriented publication output without changing the manuscript's scholarly meaning. It defines publication profiles, reusable publication styles, output targets, render contexts, presentation rules, resource bindings, rule precedence, target adaptation, deterministic rendering requirements, validation behaviour and loss reporting.

The model separates publisher identity and publication policy from reusable typography and layout. A single publication profile may therefore reference multiple named publication styles, while a publication style may be reused across manuscripts and editions. Target-specific variants may adapt the same style to print, interactive PDF, HTML, EPUB or other media without inserting pagination or visual artefacts into the canonical manuscript.

This specification does not define the overall publishing workflow, file packaging, renderer plug-in API, or the complete serialisation schema. Those concerns belong to other OMI specifications. It defines the semantic contract that such implementations must honour.

## 2. Status of this document

This document is a **Draft** specification of the Open Manuscript Initiative. Incompatible changes may occur before Review Candidate status as the property vocabulary, schemas, fixtures and conformance suite are completed.

Implementations claiming support MUST identify the exact `OMI-SPEC-240` version or immutable commit used.

A feature implemented by Open Manuscript Studio does not become normative merely because it exists in the reference implementation. Normative behaviour is defined by this document and future approved schemas and profiles.

## 3. Conformance

### 3.1 Conformance classes

This specification defines four conformance classes:

- **Conforming profile producer:** creates or edits publication profiles and publication styles and preserves the distinctions defined by this specification.
- **Conforming profile consumer:** reads profiles and styles, resolves references and exposes unsupported or invalid rules according to this specification.
- **Conforming renderer:** applies a resolved profile and style to a canonical OMI manuscript for a declared output target.
- **Conforming validator:** validates structural, semantic, reference-integrity and target-capability constraints without silently rewriting the canonical manuscript.

An implementation MAY claim more than one class.

### 3.2 General conformance

A conforming implementation MUST satisfy every applicable **MUST** and **MUST NOT** requirement for its declared class.

An optional feature MAY be omitted. If implemented, it MUST satisfy all requirements defined for that feature.

A conformance claim SHOULD identify:

- implementation name and version;
- exact specification version;
- declared conformance classes;
- supported output targets;
- supported property vocabulary or profile vocabulary version;
- known limitations and fallback behaviour;
- conformance-test version, when available.

### 3.3 Core requirements

**REQ-RPP-001:** A conforming renderer MUST treat the canonical OMI manuscript as semantic source data and MUST NOT persist presentation-derived structure into that manuscript solely to satisfy a rendering requirement.

**REQ-RPP-002:** A conforming profile producer MUST keep publisher/profile policy distinguishable from reusable publication-style presentation rules.

**REQ-RPP-003:** A conforming consumer MUST preserve unknown extension data that it can safely round-trip, or MUST report that the data cannot be preserved.

**REQ-RPP-004:** A conforming renderer MUST report unsupported rules that can materially change the intended publication result; it MUST NOT silently claim full fidelity.

**REQ-RPP-005:** The same immutable manuscript version, resolved profile/style versions, declared resources, output-target configuration and renderer version MUST produce semantically equivalent output under the renderer's documented deterministic environment.

## 4. Scope

This specification defines:

- the distinction between manuscript semantics, publication profile and publication style;
- the abstract entities required to represent publication presentation;
- semantic-role-based rule selection;
- reusable named publication styles;
- publisher identity, legal and branding presentation policy;
- output targets and target-specific variants;
- typography, page/layout, generated-content and note/citation presentation rules;
- resource and font bindings;
- rule inheritance, precedence and explicit overrides;
- renderer capability declarations and fallbacks;
- validation and loss reporting;
- rendering provenance needed for reproducibility;
- accessibility and internationalisation obligations at the presentation layer.

### 4.1 Out of scope

This specification does not define:

- the internal structure of the canonical manuscript, defined by `OMI-SPEC-100`;
- canonical manuscript metadata semantics, defined by `OMI-SPEC-140`;
- citation occurrence semantics, defined by `OMI-SPEC-210`;
- end-to-end publishing workflow orchestration, defined by `OMI-SPEC-230`;
- file/container packaging, defined by `OMI-SPEC-320` and `OMI-SPEC-330`;
- the renderer plug-in API, governed by the platform and plug-in specifications;
- full conversion of proprietary page-layout documents into OMI manuscripts;
- a mandatory concrete JSON, YAML or XML serialisation for profiles in this Draft;
- a universal substitute for CSS, CSL, IDML or other external style languages.

## 5. Terminology

The terminology of the central OMI Terminology and Definitions document applies.

### 5.1 Rendering

The derivation of a presentation-oriented representation from a canonical OMI manuscript by applying a resolved publication profile, publication style, output-target rules and declared renderer behaviour.

Rendering is not authoring and MUST NOT be used to redefine the canonical semantic structure.

### 5.2 Publication Profile

A versioned configuration that describes publisher- or publication-specific presentation policy. It may contain publisher identity, branding and legal presentation information, output-policy settings, metadata display rules, citation/note presentation policy, references to available publication styles and selection of a default or active style.

A publication profile is not the manuscript and is not the publication style itself.

### 5.3 Publication Style

A reusable, versioned collection of presentation rules that maps semantic publication roles to typography, spacing, layout and media-specific behaviour.

Publication styles SHOULD be reusable across multiple manuscripts and MAY be reused by multiple publication profiles when policy permits.

### 5.4 Semantic publication role

A presentation-selectable role derived from OMI semantics rather than from source-application style names or physical coordinates. Examples include `document-title`, `subtitle`, `author-list`, `heading-1`, `body`, `blockquote`, `footnote`, `figure-caption` and `bibliography-entry`.

### 5.5 Output Target

A declared rendering medium and format context such as print PDF, interactive PDF, semantic HTML, EPUB or another supported target.

### 5.6 Target Variant

A set of rules that modifies or suppresses base presentation behaviour for a particular output target or media class.

### 5.7 Render Context

The immutable set of inputs used for one render operation: manuscript version, resolved profile, resolved publication style, output target, resource bindings, locale/language context, renderer identity/version and explicit publication-instance overrides.

### 5.8 Publication-instance override

An explicitly recorded presentation override applied to one publication instance without mutating the reusable profile, reusable style or canonical manuscript.

### 5.9 Resource Binding

A reference that resolves a presentation dependency such as a font, logo, stylesheet fragment, licence icon or other permitted publication asset.

### 5.10 Render Manifest

A machine-readable provenance record describing the inputs, versions, resources, warnings, fallbacks and renderer identity associated with a generated output.

## 6. Design principles

This section is informative.

The model is guided by:

- **Semantic source of truth:** presentation follows document meaning rather than replacing it.
- **Separation of concerns:** manuscript semantics, publisher identity/policy and reusable visual styling remain distinct.
- **Render many:** one canonical manuscript may produce multiple target outputs.
- **Reusable design systems:** publication styles can be named, versioned, shared, duplicated, imported and replaced independently of manuscript content.
- **Deterministic precedence:** the same inputs resolve rules in the same order.
- **Explicit loss:** unsupported presentation intent is reported rather than silently discarded.
- **Target appropriateness:** print rules are not blindly imposed on reflowable or responsive media.
- **Accessibility by construction:** semantic accessibility information is preserved through presentation.
- **International typography:** language, script, direction and glyph coverage are first-class rendering inputs.
- **Implementation independence:** no editor, browser, PDF library, DTP application or renderer is the normative model.

## 7. Model overview

```text
Canonical OMI Manuscript
        │
        ├── semantic structure (OMI-SPEC-100)
        ├── metadata (OMI-SPEC-140)
        └── citations (OMI-SPEC-210)
        │
        ▼
Publication Profile
        │
        ├── publisher identity / branding / legal display policy
        ├── metadata and citation/note presentation policy
        └── available Publication Styles
                        │
                        ▼
             Selected Publication Style
                        │
                        ├── semantic-role rules
                        └── target variants
                                │
                                ▼
                         Render Context
                                │
                                ▼
                            Renderer
                     ┌──────────┼───────────┐
                     ▼          ▼           ▼
                Print/PDF      HTML       EPUB/other
```

An interoperability importer may populate style information from an external source:

```text
External style source
      │
      ▼
Mapping / validation
      │
      ▼
OMI Publication Style
```

The importer MUST NOT infer or rewrite manuscript semantics merely to make an external style source fit the OMI model.

## 8. Data model

This section defines the abstract data model. Property names in examples are illustrative until a canonical machine-readable schema is published.

### 8.1 Publication Profile

**Purpose:** Bind publisher/publication presentation policy to one or more reusable styles and output targets.  
**Identifier:** A profile MUST have a stable identifier within its declared scope.  
**Lifecycle:** Profiles SHOULD be independently versioned and immutable once referenced by a published render manifest.

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | identifier | Yes | `1` | Stable profile identifier. |
| `version` | version | Yes | `1` | Profile version. |
| `label` | language-aware string | Yes | `1` | Human-readable name. |
| `publisher` | object | No | `0..1` | Publisher/journal identity and branding presentation data. |
| `metadataDisplay` | object | No | `0..1` | Rules for displaying metadata already defined semantically elsewhere. |
| `legalDisplay` | object | No | `0..1` | Copyright, licence and related display policy. |
| `citationPolicy` | object/reference | No | `0..1` | Citation/bibliography presentation configuration or style reference. |
| `notePolicy` | object | No | `0..1` | Presentation policy for footnotes/endnotes and target adaptations. |
| `styles` | references | Yes | `1..*` | Available publication styles. |
| `defaultStyle` | reference | Yes | `1` | Default style for the profile. |
| `targetPolicy` | object | No | `0..1` | Allowed/default output targets and publication-specific constraints. |
| `extensions` | object | No | `0..1` | Namespaced extensions. |

**REQ-RPP-010:** `defaultStyle` MUST resolve to one of the styles available to the profile.

**REQ-RPP-011:** Publisher identity data MUST NOT be used as a substitute for canonical manuscript authorship, work identity or manuscript metadata.

**REQ-RPP-012:** Changing branding, licence-display data or publisher contact information MUST NOT require modification of the canonical manuscript or reusable typography rules.

**REQ-RPP-013:** Changing typography or page geometry MUST NOT silently alter publisher identity, copyright ownership, licence semantics or manuscript metadata.

Examples of publisher/profile information include journal or publisher name, short title, contact data, website, ISSN/eISSN display, logo binding and alternative text, DOI display policy, copyright holder/template, licence label/URL/icon and first-page or HTML branding visibility.

### 8.2 Publication Style

**Purpose:** Represent reusable visual and layout rules independent of manuscript content.  
**Identifier:** A style MUST have a stable identifier and version within its scope.  
**Lifecycle:** Published outputs SHOULD retain the exact style version used.

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | identifier | Yes | `1` | Stable style identifier. |
| `version` | version | Yes | `1` | Style version. |
| `label` | language-aware string | Yes | `1` | Human-readable style name. |
| `basedOn` | reference | No | `0..1` | Optional parent style. |
| `rules` | rule set | Yes | `1..*` | Base semantic-role presentation rules. |
| `targetVariants` | variant map | No | `0..*` | Output-target-specific rule variants. |
| `resources` | bindings | No | `0..*` | Fonts and other style resources. |
| `extensions` | object | No | `0..1` | Namespaced extension data. |

**REQ-RPP-020:** A publication style MUST select manuscript content by semantic publication role or another explicitly defined semantic selector; it MUST NOT require source-application paragraph-style names to remain in the canonical manuscript.

**REQ-RPP-021:** A publication style MUST NOT change the scholarly meaning, object identity, citation target, contributor identity or metadata value of the canonical manuscript.

**REQ-RPP-022:** Style inheritance MUST be acyclic. A consumer MUST report and reject an inheritance cycle for rendering.

**REQ-RPP-023:** A style importer MAY use external style names as mapping evidence, but the resulting OMI style MUST express resolved OMI semantic publication roles independently of those external names.

### 8.3 Semantic role rule

A rule associates a semantic publication role with presentation properties.

Core roles SHOULD include, when the corresponding semantic object exists:

- manuscript/document title;
- subtitle;
- contributor/author list;
- affiliations;
- abstract;
- keywords;
- heading levels;
- body paragraph;
- block quotation;
- ordered and unordered lists;
- figure and image;
- figure caption;
- table and table caption;
- equation;
- code/preformatted content;
- footnote and endnote;
- bibliography entry;
- generated table of contents;
- generated figure/table lists;
- generated indexes;
- front matter and back matter.

A role vocabulary MAY be extended according to Section 11.

### 8.4 Presentation properties

The abstract property model may represent the following categories.

#### 8.4.1 Typography

- font family and fallback chain;
- font size;
- font weight/style/stretch where supported;
- line height or leading;
- letter and word spacing;
- text decoration;
- case transformation used only for display;
- script/language-aware shaping controls;
- hyphenation policy.

A display-only case transformation MUST NOT overwrite the source text.

#### 8.4.2 Paragraph and block geometry

- alignment;
- first-line, start/end and hanging indentation;
- space before/after;
- keep-with-next and keep-together intent;
- widow/orphan intent;
- column behaviour;
- borders/backgrounds where semantically safe.

#### 8.4.3 Page and print geometry

- page width and height;
- orientation;
- top/bottom/start/end or inner/outer margins;
- mirrored margins;
- page/section break policy;
- running headers and footers;
- page-number placement and format;
- footnote separator and note area behaviour;
- print bleed/crop configuration when supported.

Page-derived data MUST remain render state and MUST NOT become canonical manuscript structure merely because a particular pagination result exists.

#### 8.4.4 Figures and tables

- placement preference;
- width/max-width;
- caption position and styling;
- numbering display;
- continuation behaviour for long tables;
- responsive/reflow behaviour for non-paged media.

#### 8.4.5 Generated publication structures

Generated tables of contents, lists and indexes SHOULD resolve from semantic structure and anchors rather than stale imported page numbers.

### 8.5 Output Target

An output target identifies the intended media/format context and renderer capability namespace.

At minimum it SHOULD declare:

- target identifier;
- media class such as paged, reflowable or structured exchange;
- interactive-link policy;
- pagination capability;
- supported presentation-property capabilities;
- accessibility capability declarations;
- fallback policy.

An implementation MAY define targets such as `pdf-print`, `pdf-interactive`, `html`, `epub` or implementation-specific extensions.

**REQ-RPP-030:** A target identifier MUST distinguish materially different behaviour when one output retains interaction and another intentionally removes it.

**REQ-RPP-031:** Reflowable targets MUST NOT simulate fixed paper pagination merely to preserve print-only page numbers, running headers or forced page breaks unless that behaviour is explicitly requested by a profile designed for that target.

### 8.6 Target Variant

A target variant may override, remove or substitute style properties for a declared output target.

Examples include:

- mirrored margins and running headers for print PDF;
- active internal/external links for interactive PDF;
- removal of page numbering and running headers for HTML;
- responsive table behaviour in HTML;
- target-specific font fallback;
- footnote-to-endnote adaptation in a reflowable format.

Target variants MUST NOT change canonical semantic content.

### 8.7 Resource Binding

Resources MUST be referenced explicitly enough for reproducible rendering.

A binding SHOULD identify:

- resource type;
- stable local/container reference or permitted external URI;
- media type where applicable;
- integrity hash when available;
- licence or embedding constraint when relevant;
- fallback resource.

**REQ-RPP-040:** A renderer MUST NOT silently substitute a resource when the substitution can materially change layout or glyph coverage; it MUST record the substitution in the render manifest or equivalent diagnostics.

**REQ-RPP-041:** Missing commercial or restricted fonts MUST NOT cause an implementation to redistribute those fonts without permission.

### 8.8 Render Context

A render context MUST resolve at least:

- immutable manuscript version or content identity;
- publication profile identifier/version;
- selected publication style identifier/version;
- output target;
- renderer identity/version;
- effective language/locale context;
- resource bindings;
- explicit publication-instance overrides;
- implementation-defined settings that can materially affect output.

### 8.9 Render Manifest

A renderer claiming reproducibility SHOULD emit or make available a render manifest containing:

- input manuscript identity/version;
- profile and style identities/versions;
- output target;
- renderer identity/version;
- resolved resources and hashes where available;
- explicit overrides;
- warnings and unsupported rules;
- fallbacks/substitutions;
- output identity/hash where available;
- creation timestamp.

The render manifest is provenance. It MUST NOT be interpreted as part of the manuscript's scholarly content.

## 9. Processing model

### 9.1 Inputs

A conforming render operation accepts:

1. a valid or renderable canonical OMI manuscript;
2. a resolvable publication profile;
3. a selected or default publication style;
4. an output target;
5. required resource bindings;
6. optional explicit publication-instance overrides.

### 9.2 Profile and style resolution

A conforming renderer MUST resolve inputs in the following conceptual order:

1. validate profile/style identities and versions;
2. resolve profile references and the selected style;
3. resolve style inheritance from ancestor to descendant;
4. establish renderer baseline defaults for properties not specified elsewhere;
5. apply publication-profile baseline presentation policy;
6. apply selected publication-style base rules;
7. apply the output target's target variant;
8. apply explicit publication-instance overrides;
9. validate effective rules against renderer capabilities;
10. render the canonical semantic objects;
11. report warnings, fallbacks and loss;
12. record render provenance.

### 9.3 Precedence

When the same presentation property is specified at multiple applicable layers, later layers in this precedence list override earlier layers:

```text
renderer baseline
    < profile baseline policy
    < inherited publication style
    < selected publication style
    < target variant
    < publication-instance override
```

Semantic manuscript data is not a layer in this visual cascade. It supplies content, structure and semantic state that presentation rules consume.

**REQ-RPP-050:** A renderer MUST apply a deterministic precedence order equivalent to this model and MUST document any property-specific exception.

**REQ-RPP-051:** A publication-instance override MUST be explicit and independently removable; it MUST NOT be persisted as a mutation of canonical manuscript semantics.

### 9.4 Semantic selection

A renderer SHOULD derive presentation selectors from semantic object type, role, hierarchy, language and declared state.

Selection MAY use:

- object type;
- semantic role;
- heading level;
- front/body/back-matter context;
- note kind;
- generated-structure kind;
- language/script/direction;
- output target;
- profile-defined semantic categories.

Selection MUST NOT depend exclusively on rendered page position, mutable character offsets or proprietary source-document style names.

### 9.5 Citation and bibliography rendering

Citation occurrence semantics remain governed by `OMI-SPEC-210`.

A publication profile MAY select or reference a citation style and MAY define bibliography typography, note presentation and target-specific citation presentation.

**REQ-RPP-060:** Rendering a citation in a different style MUST NOT change its bibliographic target, locator, anchor or semantic intent.

Where a CSL processor or another citation engine is used, the selected external style and engine version SHOULD be recorded for reproducibility.

### 9.6 Notes

A profile MAY render the same semantic note as a footnote, endnote, linked note or other target-appropriate representation when the transformation preserves note identity and target relationships.

**REQ-RPP-061:** A target adaptation MUST preserve the logical relationship between note reference and note content even when physical placement changes.

### 9.7 Print and paged rendering

Paged targets MAY apply page size, mirrored margins, running heads, pagination, footnote area constraints and page-break rules.

The renderer SHOULD treat these as layout constraints rather than canonical manuscript data.

For long content, paragraphs and other splittable blocks SHOULD be allowed to continue across page boundaries unless a semantic or explicit style constraint requires them to remain together.

### 9.8 Reflowable and web rendering

A reflowable renderer SHOULD preserve semantic HTML/EPUB structure and responsive behaviour instead of reproducing print geometry mechanically.

Print-only properties such as fixed page size, running page headers, static page numbers and forced paper page breaks SHOULD be ignored, transformed or replaced for reflowable media, with diagnostics when their omission materially affects intended presentation.

### 9.9 Interactive versus print PDF

A profile or target policy MAY distinguish print/archive PDF from interactive PDF.

- a print/archive target MAY suppress active hyperlinks or interaction where policy requires;
- an interactive target MAY preserve internal navigation and external hyperlinks;
- both MUST preserve visible scholarly content unless an explicit publication policy states otherwise;
- target differences SHOULD be recorded in the render manifest.

### 9.10 Determinism and implementation-defined behaviour

Exact line and page breaks may depend on the rendering engine, font rasterisation/shaping stack and available resources. They are deterministic only within a declared rendering environment.

Implementations MUST document environment-sensitive behaviour that prevents byte-identical output. A reproducibility claim MAY therefore be semantic/layout-equivalent rather than byte-identical, but the claim MUST state which level applies.

## 10. Validation and error handling

### 10.1 Validation levels

The specification distinguishes:

- **syntax validation:** the concrete profile/style serialisation is readable;
- **structural validation:** required entities, identifiers and references are present;
- **semantic validation:** rules do not contradict model invariants;
- **reference-integrity validation:** style, resource and external references resolve according to policy;
- **profile validation:** selected style and target are permitted by the profile;
- **capability validation:** the renderer can implement the effective rule set or can declare a defined fallback.

### 10.2 Error conditions

| Condition | Classification | Required behaviour |
|---|---|---|
| Missing required profile/style identifier or version | Error | Reject the affected render/profile operation. |
| Unresolvable default or selected style | Error | Reject rendering; do not silently choose an unrelated style. |
| Cyclic style inheritance | Error | Reject style resolution and report the cycle. |
| Missing required resource with no permitted fallback | Error | Reject or explicitly produce a degraded output only when policy permits degradation. |
| Unsupported property with material visual/semantic accessibility effect | Unsupported feature | Report before or with output; do not claim full fidelity. |
| Unsupported non-material decorative property | Warning | Continue and record the omission. |
| Unknown namespaced extension | Unknown feature | Preserve if safely round-trippable; otherwise report loss. |
| Target-inapplicable print property in reflowable output | Warning/adaptation | Ignore or transform according to declared target policy and report when material. |
| Invalid external style/import package | Error | Reject import without mutating the active manuscript or existing valid style. |

### 10.3 Preservation during failure

**REQ-RPP-100:** A failed profile/style import or render MUST NOT corrupt or partially rewrite the canonical manuscript.

**REQ-RPP-101:** When degraded output is permitted, the renderer MUST expose enough diagnostics to identify unsupported, substituted or omitted presentation intent.

**REQ-RPP-102:** A profile editor SHOULD preserve the last valid profile/style state when a proposed edit fails validation.

## 11. Extensibility

### 11.1 Extension points

This model permits extensions for:

- semantic publication roles;
- presentation properties;
- output targets;
- renderer capability identifiers;
- resource types;
- target variants;
- profile policy modules.

### 11.2 Unknown extensions

A conforming consumer MUST distinguish unknown extensions from invalid core properties.

Unknown extensions SHOULD be preserved during load/save when safe and possible. A renderer MAY ignore an unknown extension only after recording the unsupported feature when it could affect output.

Extensions MUST NOT redefine the semantics of core properties or use a core identifier with incompatible meaning.

### 11.3 Namespace rules

Extension identifiers SHOULD use a collision-resistant namespace controlled by the extension author, such as a registered URI/URN namespace or another OMI-approved mechanism.

A future controlled vocabulary/schema release may reserve canonical OMI namespaces.

## 12. Versioning and compatibility

This specification follows the OMI Versioning Policy.

### 12.1 Compatibility dimensions

The following compatibility dimensions apply:

- profile read compatibility;
- profile write compatibility;
- style round-trip compatibility;
- property-vocabulary compatibility;
- renderer processing compatibility;
- resource compatibility;
- target compatibility.

### 12.2 Compatible changes

A compatible minor or patch change may:

- add optional properties with defined default/absence behaviour;
- add new semantic roles that do not alter existing role meanings;
- add output targets or capabilities;
- clarify fallback behaviour;
- add examples, mappings or non-normative implementation guidance.

### 12.3 Breaking changes

A change is breaking when it:

- changes the meaning or precedence of an existing core property;
- changes required profile/style fields incompatibly;
- reassigns a semantic publication role;
- changes absence/default semantics in a way that alters existing rendering;
- requires consumers to interpret previously valid data differently.

Before 1.0, such changes require an explicit version change and migration note under OMI governance.

### 12.4 Migration

Profile and style serialisations MUST expose or inherit enough version information to select the correct interpretation.

A migration tool MUST NOT silently drop unknown rules. It MUST preserve them where possible or report every known loss category.

### 12.5 Published render reproducibility

Profiles and styles used for an archival or published output SHOULD be retained by immutable identifier/version or content hash for as long as the output is expected to be reproducible.

## 13. Interoperability

### 13.1 External standards and style systems

| External system/standard | Direction | Mapping quality | Notes |
|---|---|---|---|
| CSS | Export / mapping | Conditionally lossless | Many typography and web/print properties map naturally; OMI profile semantics and renderer provenance require additional metadata. |
| CSS Paged Media | Export / mapping | Conditionally lossless | Suitable for paged rules where supported by the renderer. |
| Citation Style Language (CSL) | Reference / processing | Conditionally lossless | Citation style may be referenced; citation semantics remain in OMI. |
| Adobe InDesign IDML style resources | Import | Lossy to conditionally lossless | Recognisable page/paragraph style information can populate an OMI publication style; full InDesign document conversion is out of scope. |
| EPUB stylesheets | Export / mapping | Conditionally lossless | Reflowable media may omit print-only behaviour. |
| HTML/CSS publication package | Export | Conditionally lossless | Semantic structure comes from OMI; presentation is mapped to target-native HTML/CSS. |

### 13.2 IDML style-set import

An IDML style importer MAY extract recognised information such as:

- page size and margins;
- font family/size;
- leading;
- paragraph alignment;
- first-line indentation;
- spacing before/after;
- common font-style distinctions;
- paragraph-style inheritance.

Mappings from external paragraph-style names to OMI roles are heuristics or configured mappings. Unmapped styles MUST remain reported as unmapped; an importer MUST NOT force them into an incorrect semantic role.

A successful external style import SHOULD create a new reusable publication style rather than mutate the manuscript.

### 13.3 Information preservation

Interoperability processors SHOULD classify every mapped feature as:

- preserved;
- transformed;
- generated;
- omitted;
- unsupported;
- ambiguous.

This classification SHOULD be available in import/export diagnostics.

### 13.4 Round-trip behaviour

A round trip through an external style format is not presumed lossless.

An implementation claiming lossless round trip MUST demonstrate preservation of all supported OMI core presentation properties, style inheritance, target variants, required resources and unknown-extension behaviour for the declared profile subset.

## 14. Security, privacy, and integrity considerations

### 14.1 Threats

Publication profiles, styles and imported style packages may contain untrusted text, URLs, XML, CSS-like values, resource references, compressed packages and metadata. Renderers may process large manuscripts and expensive layout operations.

Threats include:

- active-content injection;
- unsafe DOM/HTML generation;
- XML external entities and DTD processing;
- stylesheet processing instructions;
- path traversal or package-entry confusion;
- malicious external resource retrieval;
- scriptable URL schemes;
- font/resource substitution attacks;
- denial of service through pathological layout, XML or compressed inputs;
- leakage of private profile/contact data into public output;
- rendering of hidden/restricted manuscript content;
- provenance tampering.

### 14.2 Requirements

**REQ-RPP-200:** Profile/style text, imported XML/IDML values and manuscript content MUST be treated as untrusted data unless an independent trust decision establishes otherwise.

**REQ-RPP-201:** A renderer or importer MUST NOT execute script, template code, processing instructions or active content merely because it appears in profile/style/import data.

**REQ-RPP-202:** XML-based importers SHOULD reject or disable external entity resolution, DTD processing and unsafe stylesheet processing unless a separately sandboxed, explicitly authorised mode requires them.

**REQ-RPP-203:** External resource retrieval MUST follow an explicit policy and SHOULD be disabled by default for untrusted profiles. Allowed retrieval MUST apply protocol, size, timeout and integrity controls appropriate to the implementation.

**REQ-RPP-204:** Rendering MUST respect the caller's authorisation and visibility projection. A publication profile MUST NOT cause hidden reviewer identities, restricted annotations, private drafts or other unauthorised objects to appear in output.

**REQ-RPP-205:** Error messages derived from untrusted package/parser data MUST be escaped or replaced with safe diagnostics before display in an HTML/DOM interface.

**REQ-RPP-206:** A render manifest or equivalent provenance record SHOULD be integrity-protected when used to support archival or evidentiary reproducibility claims.

## 15. Accessibility considerations

Presentation MUST preserve semantic accessibility information supplied by the manuscript and metadata models.

**REQ-RPP-220:** A publication style MUST NOT remove alternative text, table header relationships, semantic heading hierarchy or other accessibility semantics merely to achieve visual appearance.

**REQ-RPP-221:** A semantic HTML renderer MUST preserve meaningful document structure and navigation rather than flattening the manuscript to visually styled generic containers.

**REQ-RPP-222:** A renderer claiming accessible PDF support MUST preserve a logical reading order and SHOULD support tagged structural output to the extent required by its declared accessibility profile.

**REQ-RPP-223:** Interactive output MUST provide accessible link text/targets and keyboard-operable navigation where interaction is emitted.

Colour, typography, spacing and contrast choices SHOULD be validated against the accessibility policy applicable to the publication target. Profiles MAY impose stronger accessibility requirements than the core model.

## 16. Internationalisation considerations

A renderer MUST treat manuscript language/script metadata as a rendering input when relevant.

Profiles and styles SHOULD support:

- Unicode text and identifiers;
- language-aware font fallback;
- script shaping;
- right-to-left and bidirectional text;
- language-specific hyphenation;
- locale-appropriate quotation and punctuation where transformation is explicitly requested;
- vertical or non-horizontal writing modes where renderer capability exists;
- multilingual labels for profile/style names and generated publication text;
- glyph coverage diagnostics.

**REQ-RPP-230:** A renderer MUST NOT replace characters merely because the preferred font lacks a glyph; it MUST apply a declared fallback or report the missing-glyph condition.

**REQ-RPP-231:** Language-specific hyphenation or generated labels MUST NOT change the manuscript's underlying text content.

## 17. Examples

The examples in this section are informative and use an illustrative JSON-like serialisation.

### 17.1 Reusable journal style

```json
{
  "id": "style:journal-classic",
  "version": "1.2.0",
  "label": {"en": "Journal Classic"},
  "rules": {
    "body": {
      "fontFamily": ["Source Serif 4", "serif"],
      "fontSize": "10.5pt",
      "lineHeight": "13pt",
      "textAlign": "justify",
      "firstLineIndent": "5mm"
    },
    "heading-1": {
      "fontSize": "16pt",
      "spaceBefore": "18pt",
      "spaceAfter": "8pt"
    },
    "footnote": {
      "fontSize": "8.5pt",
      "lineHeight": "10pt"
    }
  },
  "targetVariants": {
    "pdf-print": {
      "page": {
        "size": "B5",
        "margins": {"inner": "22mm", "outer": "18mm", "top": "20mm", "bottom": "22mm"},
        "mirrored": true
      },
      "runningHeader": true
    },
    "html": {
      "page": null,
      "runningHeader": false,
      "maxContentWidth": "72ch"
    }
  }
}
```

### 17.2 Publisher profile selecting the style

```json
{
  "id": "profile:example-journal",
  "version": "2.0.0",
  "label": {"en": "Example Journal"},
  "publisher": {
    "name": "Example Scholarly Press",
    "journalName": "Example Journal",
    "issn": "1234-5678",
    "logo": "resource:journal-logo"
  },
  "styles": [
    "style:journal-classic@1.2.0",
    "style:journal-modern@1.0.0"
  ],
  "defaultStyle": "style:journal-classic@1.2.0",
  "citationPolicy": {
    "style": "csl:chicago-fullnote-bibliography"
  }
}
```

### 17.3 One manuscript, two PDF targets and HTML

```text
manuscript:v17
   + profile:example-journal@2.0.0
   + style:journal-classic@1.2.0
          │
          ├── pdf-print       → paged, mirrored margins, print link policy
          ├── pdf-interactive → paged, active navigation and links
          └── html            → reflowable, no running heads/page numbers
```

The manuscript is identical in all three operations.

### 17.4 External style import

```text
IDML package
  ↓ validate package/XML trust boundary
paragraph style "Törzsszöveg"
  ↓ configured/heuristic mapping
semantic role "body"
  ↓
OMI Publication Style rule
```

The external name may be retained as import provenance, but it is not required as manuscript semantics.

## 18. Normative references

- `OMI-SPEC-100` — Document Model.
- `OMI-SPEC-140` — Metadata Model.
- `OMI-SPEC-210` — Citation Model.
- OMI Specification Registry.
- OMI Versioning Policy.
- OMI Terminology and Definitions.

`OMI-SPEC-230` — Publishing Model is a normative consumer of this model rather than a direct dependency of this specification.

## 19. Informative references

- OMI Publication Styles and Publisher Profiles foundation documentation.
- CSS and CSS Paged Media specifications.
- Citation Style Language (CSL).
- Adobe InDesign Markup Language (IDML) documentation.
- HTML and EPUB accessibility guidance.
- Open Manuscript Studio reference implementation documentation.

## 20. Implementation status

At publication of this Draft, Open Manuscript Studio provides partial reference-implementation evidence for the model, including:

- reusable named publication styles;
- create, duplicate, rename, select and delete style workflows;
- graphical editing with live preview;
- page geometry, typography, heading, caption, bibliography, footnote and running-header controls;
- publisher identity and legal/branding profile information;
- distinct print/PDF and semantic HTML behaviour;
- CSS generation/export;
- Adobe InDesign IDML style-set import with role mapping and inheritance handling;
- generated document navigation and indexes derived from semantic structure;
- separate printed and interactive PDF publication targets.

This evidence does not constitute a conformance claim. The canonical schema, approved fixtures, profile vocabulary, renderer capability vocabulary and conformance suite remain incomplete.

## 21. Unresolved issues

The following issues must be resolved before this specification can progress to Review Candidate:

1. define the canonical machine-readable profile/style schema and namespace;
2. publish the controlled semantic publication-role vocabulary;
3. publish the core presentation-property vocabulary, units and value grammar;
4. define standard output-target identifiers and capability vocabulary;
5. decide whether the Render Manifest is serialised here or in the import/export/file-format family;
6. define portable font/resource resolution and content-hash requirements;
7. define the exact relationship between OMI publication styles and external CSS customisation;
8. define conformance fixtures for paged, reflowable, multilingual, RTL, footnote, table and long-document rendering;
9. define acceptable fidelity/loss classifications for external style importers;
10. reconcile legacy architecture-map wording that currently places some profile detail directly under `OMI-SPEC-230`;
11. define profile registration/discovery if official publisher profiles become distributable OMI artefacts.

## 22. Change history

- **0.1.0 — 2026-09-09:** Initial Draft created from reserved `OMI-SPEC-240`; defines publication profiles, reusable publication styles, output targets, deterministic cascade, rendering provenance, validation, interoperability, security, accessibility and internationalisation requirements.

## 23. Acknowledgements

This specification builds on the OMI publishing architecture, the Open Manuscript Studio publication-style and publisher-profile reference implementation, and established scholarly publishing practices for semantic HTML, paged output, citation styling and professional desktop-publishing workflows.

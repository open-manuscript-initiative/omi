---
id: publication-styles-and-publisher-profiles
title: Publication Styles and Publisher Profiles
sidebar_label: Publication Styles and Publisher Profiles
description: How Open Manuscript Studio separates manuscript semantics, publisher identity and reusable publication styling for PDF, HTML and CSS export, including InDesign IDML style-set import.
keywords:
  - Open Manuscript Studio
  - publication style
  - publisher profile
  - Adobe InDesign
  - IDML
  - CSS export
  - PDF export
  - HTML export
  - journal typography
  - publishing workflow
---

# Publication Styles and Publisher Profiles

Open Manuscript Studio now separates three concerns that are often mixed together in conventional authoring systems:

1. **manuscript semantics** — the scholarly content and its structure;
2. **publisher identity** — journal or publisher branding, identifiers and legal metadata;
3. **publication style** — page geometry, typography and output presentation.

This separation allows the same OMI manuscript to be rendered for different journals, publishers and output channels without rewriting the manuscript itself.

## Current implementation status

The feature set described on this page is implemented in the current Studio development line and is part of the project's beta-readiness work. The public binary release remains `0.1.0-alpha.4`; newer capabilities described here may first appear in the development line before the next packaged release.

### Reusable named publication styles

A publisher or journal profile can maintain multiple named publication styles. Users can:

- create a new style;
- duplicate an existing style;
- rename a style;
- select the active style;
- delete styles while retaining at least one valid style;
- edit style values with a live preview;
- save the active style locally;
- export the style definition;
- download generated CSS from the current editor state;
- import an Adobe InDesign style set from an IDML package.

The currently selected style is the active style used by the PDF and HTML export paths.

### Publication Style editor

The graphical editor exposes publishing-oriented controls rather than manuscript semantics. Current editable areas include:

- page width and height;
- mirrored inner/outer margins;
- body font family, size and leading;
- paragraph indentation and alignment;
- title and heading geometry;
- captions;
- bibliography styling;
- footnote typography and separator rules;
- running-header behavior;
- print-oriented page geometry.

The live preview is manuscript-aware: title, subtitle, authors, affiliations, headings, body text and footnotes are derived from the currently open manuscript where available. Sample publication data is not substituted for missing manuscript metadata.

## Adobe InDesign IDML style-set import

Studio can import reusable publication styling from an **Adobe InDesign IDML** package. The purpose is style interoperability, not full InDesign document conversion: native `.indd` files and complete IDML document import remain outside the scope of this importer.

The importer reads the relevant XML resources from the IDML ZIP package and can transfer recognizable publication-style information such as:

- page width and height;
- top, bottom, inner and outer margins;
- paragraph font family and point size;
- leading;
- paragraph alignment;
- first-line indentation;
- space before and after;
- italic and common bold/semi-bold style information;
- `BasedOn` paragraph-style inheritance.

Common English, Hungarian and German InDesign style names are mapped automatically to OMI publication roles, including body text, article title and subtitle, first- and second-level headings, footnotes, figure and table captions, and bibliography entries. Styles that cannot be identified automatically remain reported as unmapped rather than being forced into the manuscript model.

A successful IDML import creates a **new reusable OMI publication style**, selects it as the active style and refreshes the graphical Publication Style editor. It does **not** rewrite headings, paragraphs or any other manuscript semantics. This preserves the architectural boundary between scholarly structure and presentation.

This makes it possible for a journal or publisher to migrate an existing InDesign typographic system into Studio and reuse it for OMI manuscripts without embedding InDesign-specific semantics in the document itself.

## Publisher profile

Publisher identity is maintained separately from publication typography. A publisher profile can hold information such as:

- journal or publisher name;
- short title;
- postal and contact information;
- website;
- ISSN and eISSN;
- logo source, alternative text and output visibility;
- volume, issue and year presentation;
- DOI display preferences;
- copyright holder and copyright template;
- licence label, URL and icon;
- first-page and HTML branding/legal visibility settings.

This means changing a journal logo, ISSN or licence does not require editing typography, and changing typography does not alter publisher identity.

## PDF and HTML export

Studio uses the active publication style for both PDF/print and HTML output, but deliberately treats the two media differently.

### PDF / print

The PDF path applies print-specific rules such as:

- custom page dimensions;
- mirrored margins;
- pagination;
- running headers;
- footnote presentation;
- title, heading, caption and bibliography styling;
- publisher identity and legal metadata where configured.

The platform print/PDF dialog is used for final PDF creation.

### HTML

The HTML package keeps semantic document structure and the selected typography, but intentionally removes print-only behavior:

- no fixed page size;
- no page numbers;
- no running headers;
- no forced page breaks.

The result remains a portable semantic HTML package rather than a simulated paper layout in the browser.

## CSS export

The Publication Style editor can generate and download CSS directly from the currently selected editor state, including unsaved edits. The generated stylesheet covers the active style's typography and, where relevant, print-page rules.

This provides a portable bridge between Studio's graphical style editor and external publishing systems or web pipelines that consume CSS.

## Reference implementation: Egyháztörténeti Szemle

The first complete reference profile was reconstructed from an Egyháztörténeti Szemle printed issue. It demonstrates how a journal-specific visual identity can be represented without embedding journal-specific presentation rules in the OMI manuscript model.

The supplied numeric typography and geometry values are editable starter values. Commercial fonts are not bundled, and authoritative publisher assets are only included when they are explicitly supplied.

## Long-form document lists and indexes

The same beta-readiness development line also improves generated document navigation and lists:

- imported Word tables of contents are recognized as semantic generated structures rather than preserving obsolete page numbers;
- table-of-contents entries navigate to the corresponding manuscript structure;
- figure/image lists can derive entries from structured imported visuals, including caption, alt-text and file-name fallbacks;
- custom indexes can be used for names, places and other document-specific index types;
- index entries navigate to their concrete occurrences in the manuscript;
- object-oriented search can list images, figures, tables, charts and equations without requiring a text query.

These structures remain tied to manuscript semantics and anchors rather than to fixed pagination.

## Security boundary

Publication export and style import treat manuscript, profile and imported IDML text as data, not executable markup. The export implementation avoids reinterpreting dynamic DOM text through unsafe `document.write()` paths and uses structured DOM/text assignment or isolated generated-document loading instead.

The IDML importer applies a separate trust boundary before XML parsing: unsupported `DOCTYPE`, entity declarations and stylesheet processing instructions are rejected. Parser/package error strings derived from an untrusted IDML file are not rendered back into the Studio interface; users receive a fixed localized import-failure message instead. Automated CodeQL scanning is used to trace these source-to-DOM data flows during security hardening.

## Architectural principle

The intended relationship is:

**OMI manuscript → publisher profile + selected publication style → output renderer → PDF / HTML / CSS**

An additional interoperability path is:

**InDesign IDML style set → OMI publication style → same output renderer**

The manuscript remains portable and semantically stable, while presentation becomes reusable, replaceable, importable and publisher-specific.

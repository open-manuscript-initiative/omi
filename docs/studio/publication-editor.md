---
title: "Publication editor: volumes, journal issues and templates"
sidebar_label: "Publication editor: volumes, journal issues and templates"
description: "Publication editor: volumes, journal issues and templates — 2026-11-20"
---

# Publication editor: volumes, journal issues and templates

Open **Publishing → Publication editor** for typesetting. The author workspace retains title metadata, contributors and manuscript structure. Publication tools are grouped into profiles/publisher, styles/templates, checks, files/export and submission/publishing; switching groups retains unfinished forms.

## Create and identify a publication

Choose **New volume / journal issue**, select the type and optionally a matching template. ISBN, eISBN, print ISSN, eISSN, DOI and other identifiers can coexist for either type. Journal issues show ISSNs first. Edit the same fields later in title metadata; the imprint template includes supplied identifiers.

## Reuse a publication format

**Publication editor → Publication templates** applies a template to an existing publication or saves its current format as a new template. Built-in starters are A5 book series (148 × 210 mm) and journals (150 × 240 mm). Custom templates can be updated, deleted, exported and imported as `.omi-template.json` with their verified cover artwork.

Templates contain page/margin settings, typography, paragraph styles, publisher rules, covers and title matter. Applying one replaces the target's format and cover drafts while preserving manuscript text and individual publication metadata. Recurring publisher/serial values fill empty fields only; ISBN, DOI and year do not become defaults for later publications. Cover placeholders such as `{{title}}`, `{{publicationYear}}` and `{{isbn}}` resolve using the target metadata when applied.

Custom templates live on the current device. Export/import transfers them between devices. The applied format is a separate snapshot inside the `.omi` publication; later changes to the original template do not alter existing publications. HTML/PDF and IDML publication exports use the saved format. These templates do not copy the manuscript's text or its individual content-frame stories.

## Edit the complete cover sheet

**Covers and title pages** has outside and inside cover faces and separate half-title, series page, title page and imprint. Each cover face is one sheet: back/spine/front on the outside, inside-front/binding-area/inside-back on the inside. Its width is twice the trim width plus the spine. Frames share sheet coordinates and layers and can cross fold guides. Guides are omitted from exports.

Add rich text or graphic frames; move, resize, rotate, choose shapes, fills and strokes, and reorder them by exact layer or one step. Image cropping, offsets, scaling and rotation are independent of the frame. Upload, paste or drop supported artwork. Choose mm, picas or DTP points without changing physical dimensions; font sizes remain points.

**Spine and paper** calculates `ceil(inside pages / 2) × paper thickness + binding allowance`. Use live body pagination plus enabled title pages, a manual final page count, manufacturer-specific paper presets or custom paper data. Cover faces are excluded from the count. A manual spine override is available. Paper estimates require printer confirmation; bleed, flaps and imposition are outside this workflow.

Enabled cover faces export as complete sheets in HTML/PDF. Title matter uses the trim size. Check the generated PDF and font availability before printing.

## Dynamic metadata fields (shortcodes)

This functionality is prepared in [Studio PR #1091](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1091) and [OJS connector PR #53](https://github.com/open-manuscript-initiative/omi-ojs-plugin/pull/53). Use after both changes are integrated and a compatible connector and Studio build have been deployed.

Open **Publishing → Publication editor → Covers and title pages**. Select a page or text frame, position the cursor, and choose **Insert metadata field**. You may also type a shortcode directly. Keep each token in one text run with uniform formatting. Enable **Preview metadata fields** to display values and disable it to edit the source tokens.

| Shortcode | Value |
| --- | --- |
| `[omi:imprint]` | Imprint: colophon or publisher/address/contact, copyright and available identifiers |
| `[omi:editorial-board]` | Public native editorial masthead, grouped by role |
| `[omi:authors]` | Publication authors |
| `[omi:contents]` | Contents: study authors and titles |
| `[omi:journal]` | Journal or series name |
| `[omi:publisher]` | Publisher |
| `[omi:address]` | Mailing address or publication place |
| `[omi:contact]` | Contact name |
| `[omi:title]` | Publication title |
| `[omi:volume]` | Volume |
| `[omi:number]` | Issue number |
| `[omi:year]` | Publication year |
| `[omi:issn]` | Print ISSN |
| `[omi:eissn]` | Electronic ISSN |
| `[omi:isbn]` | ISBN |
| `[omi:doi]` | DOI |

```text
IMPRINT
[omi:imprint]

Editorial board
[omi:editorial-board]

[omi:journal] [omi:volume]/[omi:number] ([omi:year])
```

Save the layout as a publication template. Unlike the older double-brace placeholders resolved when a template is applied, these shortcodes remain in the saved text and resolve from the current document in preview and HTML/PDF output. The journal imprint and native editorial board are imported as an OJS snapshot. Reopen a previously imported issue from OJS and choose **Refresh imprint and editorial board** to update that snapshot without replacing article text or layout. Custom masthead/imprint plugins may need a separate adapter. Private account email addresses are not included in the shortcode output.

Missing or unknown values remain visible as tokens and produce export diagnostics. Contents lists authors and titles, not page numbers. Review the final PDF, particularly text-frame overflow. Shortcode expansion in IDML, DOCX and ODT is not established. The complete field list is also available in the Studio Help and the local cover editor help.

### Multilingual title matter

Choose the metadata field language separately from the interface language, or type `[omi:journal:hu]`, `[omi:journal:en]`, `[omi:editorial-board:hu]` and `[omi:editorial-board:en]`. Both languages can appear on the same page. Explicit suffixes override the text frame's language, which otherwise overrides the document language. Regional OJS keys such as `hu_HU` and `en_US` match their language variants. Missing localized fields are not silently translated or replaced by unrelated languages; complete them in OJS and refresh the snapshot. Language-independent identifiers and recorded author names remain unchanged. Editorial public name variants are used if supplied. OJS source data and the final PDF require editorial review.

## Transfer typeset files to OJS

Use an existing, unpublished submission in **OJS Production**, a personal editorial credential and a current OJS Integration plugin (latest documented release: **1.8.7**). Inspect the target, select HTML and/or one PDF mode, prepare all selected outputs and review them. Confirm the exact files and destination before transfer.

Content, style or selected-server changes invalidate prepared outputs. OJS checks permissions and its inspected workflow state. Each upload has a separate receipt: if one succeeds and another fails, inspect OJS and explicitly prepare only the remaining file. Transfer does not publish the article. OJS keeps workflow authority; this feature does not add an equivalent OMP production workflow.

For Studio-native verified venues, copyediting, layout, proof correction and final approval are separate stages. Source/proof approvals apply to the exact revision and files; replacement invalidates approvals. This remains Preview with installation and acceptance prerequisites.

See [source usage documentation](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-covers-title-pages.md), [template details](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-templates.md) and [OJS transfer](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/ojs-live-publication.md).

See also: [notes and formatting](/docs/studio/notes-and-formatting) and [research projects](/docs/studio/research-projects).

## November 25 interoperability update

Supported Word picture geometry/cropping, native equations (OMML), semantic REF fields and review annotations have expanded regression coverage. Verify imported and exported layouts and review data rather than assuming complete Word fidelity. The publication editor shares the adaptive text-projection cache with the authoring workspace.

[Adaptive memory management](/docs/studio/performance-and-memory).

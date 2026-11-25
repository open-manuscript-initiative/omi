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

## Transfer typeset files to OJS

Use an existing, unpublished submission in **OJS Production**, a personal editorial credential and a current OJS Integration plugin (latest documented release: **1.8.7**). Inspect the target, select HTML and/or one PDF mode, prepare all selected outputs and review them. Confirm the exact files and destination before transfer.

Content, style or selected-server changes invalidate prepared outputs. OJS checks permissions and its inspected workflow state. Each upload has a separate receipt: if one succeeds and another fails, inspect OJS and explicitly prepare only the remaining file. Transfer does not publish the article. OJS keeps workflow authority; this feature does not add an equivalent OMP production workflow.

For Studio-native verified venues, copyediting, layout, proof correction and final approval are separate stages. Source/proof approvals apply to the exact revision and files; replacement invalidates approvals. This remains Preview with installation and acceptance prerequisites.

See [source usage documentation](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-covers-title-pages.md), [template details](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-templates.md) and [OJS transfer](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/ojs-live-publication.md).

See also: [notes and formatting](/docs/studio/notes-and-formatting) and [research projects](/docs/studio/research-projects).

## November 25 interoperability update

Supported Word picture geometry/cropping, native equations (OMML), semantic REF fields and review annotations have expanded regression coverage. Verify imported and exported layouts and review data rather than assuming complete Word fidelity. The publication editor shares the adaptive text-projection cache with the authoring workspace.

[Adaptive memory management](/docs/studio/performance-and-memory).

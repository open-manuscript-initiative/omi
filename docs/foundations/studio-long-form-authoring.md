---
id: studio-long-form-authoring
title: Long-form Authoring in Open Manuscript Studio
sidebar_label: Long-form Authoring
sidebar_position: 4
description: Large DOCX import, document structure navigation, scalable notes, semantic name indexes, and generated tables of contents in Open Manuscript Studio.
keywords:
  - Open Manuscript Studio
  - DOCX import
  - monograph
  - long-form authoring
  - notes
  - footnotes
  - name index
  - Word XE
  - table of contents
  - Word TOC
---

# Long-form Authoring in Open Manuscript Studio

Open Manuscript Studio is being developed to support not only short articles but also book-length scholarly manuscripts. The long-form authoring work keeps Word interoperability, semantic structure, local-first processing, and responsive editing as primary requirements.

This page describes the implementation line developed and tested in August 2026. Features that are still moving through review are identified as such rather than presented as released guarantees.

## Large DOCX and monograph import

Studio uses a dedicated import strategy for large and structurally complex Word documents. Small files continue to use the full structural importer, while manuscript-length packages can use a lower-memory monograph path that avoids constructing one very large browser DOM for `word/document.xml`.

The large-document route is designed for manuscripts containing thousands of paragraphs, footnotes/endnotes, Word fields, hyperlinks, images, headings, and other scholarly structures. It yields periodically to the browser so the interface remains responsive during import.

A real approximately 200-page scholarly book was used as a regression and performance test. The document imported successfully on Android as well as desktop-class targets, preserved the tested formatting, and completed conversion in approximately six seconds on the tested mobile device. This is a project test result rather than a formal performance guarantee; actual timing depends on document complexity and hardware.

The package-level safety limit is separate from visual-asset limits so a legitimate large DOCX is not rejected merely because the ZIP container is larger than the historical image-oriented threshold.

## Document structure navigation

Imported headings become part of the Studio section hierarchy rather than remaining visually styled paragraphs only. The document structure view can therefore serve as a navigation outline for long manuscripts.

On desktop, selecting an outline entry scrolls to the corresponding section in the editor. On mobile, selecting a heading switches back to the editor view, waits for the editor surface to render, scrolls to the requested section, and focuses its heading area. This keeps the compact mobile structure workflow while providing the same semantic navigation model as desktop.

## Scalable notes and footnotes

A book-length manuscript can contain hundreds or thousands of notes. Rendering every note immediately as a complete rich-text editor is unnecessarily expensive, so Studio now separates the lightweight note list from note editing.

The Notes panel renders all note summaries as lightweight entries. A full `NoteBodyEditor` is mounted only for the note that the user opens. This keeps the complete note list immediately available without creating hundreds of simultaneous editor instances.

The optimization preserves note editing, deletion, and navigation while substantially reducing the cost of opening the Notes panel in heavily annotated manuscripts.

## Semantic name indexes

Studio treats a scholarly name index as structured manuscript data rather than only as generated end matter.

### Word `XE` and `INDEX` fields

DOCX import recognizes Word index-entry (`XE`) fields and generated `INDEX` fields, including field instructions split across multiple `w:instrText` runs. Hierarchical index terms are preserved rather than flattened into ordinary text.

The imported index data is stored with the OMI manuscript and can be grouped into a generated Name index / Névmutató / Personenregister view. Repeated markers are grouped while retaining their individual occurrences.

The book-length regression document contains thousands of real Word `XE` fields and is used as a practical interoperability fixture for this work.

### Manual name-index marking

The current development line also adds manual marking from the existing text-selection toolbar. The selected text can become a semantic name-index entry that stores the target block, selected text, source type, and a stable semantic anchor identifier.

Grouped name-index entries can be expanded to their individual occurrences. For entries with location data, **Go to occurrence** selects the corresponding section, closes the menu, scrolls to the editor block, and highlights/selects the indexed text.

Imported Word markers that do not yet have precise location data remain valid semantic entries; binding every imported `XE` marker to an exact inline editor anchor is a follow-up interoperability refinement.

## Semantic table of contents

A Word-generated table of contents should not become stale page-number text after import. Studio therefore models the table of contents as a generated semantic object derived from the manuscript heading hierarchy.

The current implementation under review recognizes Word `TOC` field instructions, including split `instrText` fragments. It preserves important Word settings such as heading ranges (`\\o "1-3"`), hyperlink generation (`\\h`), and outline-level usage (`\\u`).

When a semantic TOC is present, Studio generates the visible table of contents from the current section hierarchy. Renaming or restructuring sections therefore updates the generated list automatically. Each entry is navigable and selects/scrolls to the corresponding section.

Studio intentionally does not treat imported Word TOC page numbers as stable authoring data. Studio is not a page-layout editor, so pagination belongs to a publication/export rendering stage. DOCX and PDF export can generate or refresh page-aware output later without making layout-dependent numbers part of the canonical manuscript structure.

## Design principle: semantics before presentation

These long-form features follow one common rule:

- headings are structural sections, not only font styles;
- notes are semantic annotations, not only superscript text;
- name indexes are stored markers and generated views, not only a static list;
- tables of contents are rules over the heading hierarchy, not only copied page-number text.

This makes the manuscript resilient when it moves between Studio, Word, publishing systems, HTML/JATS, EPUB, or print-oriented export formats.

## AI and deterministic document structures

Name recognition can benefit from AI-assisted suggestions, but the underlying index model remains deterministic and author-controlled. AI can propose candidate people or normalize variant name forms, while explicit index markers remain the authoritative scholarly data.

Tables of contents do not require AI. They are generated deterministically from the document hierarchy and imported field settings.

## Current development status

| Capability | Status |
|---|---|
| Large/monograph DOCX import | Implemented and tested with a ~200-page scholarly book |
| Mobile and desktop document-outline navigation | Implemented |
| Scalable all-notes list with lazy note-editor mounting | Implemented |
| Word `XE` / `INDEX` semantic import | Implemented |
| Manual name-index marking and occurrence navigation | Development PR / review line |
| Word `TOC` recognition and live semantic TOC | Development PR / review line |
| Exact inline anchors for every imported Word `XE` occurrence | Follow-up |
| Page-number generation for TOC/index in print-oriented export | Follow-up |
| AI-assisted person-name suggestions | Planned optional assistance layer |

The implementation-status page remains the authoritative snapshot for released and configuration-dependent Studio capabilities.
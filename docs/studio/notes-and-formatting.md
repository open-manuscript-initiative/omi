---
title: "Editable notes and shared formatting"
sidebar_label: "Editable notes and shared formatting"
description: "Editable notes and shared formatting — 2026-11-20"
---

# Editable notes and shared formatting

Notes can be edited directly in the bottom manuscript panel, with the normal automatic saving and revision checkpoints. The panel follows the visible manuscript and keeps the focused note available while scrolling. Notes align with the document width on desktop and mobile.

Use the header **Aa** panel to format the most recently active main-text or note editor. It supports bold, italic, underline, strike, small caps, superscript/subscript and reference insertion. Pin it on desktop to retain the controls in the header; the pin preference survives reloads. The Notes dialog offers the same controls within the dialog.

Word/ODT import retains supported rich footnote/endnote content, including character styles, links and paragraph breaks. Opening a DOCX from OJS/OMP also preserves supported formatting when both the Studio frontend and API are updated. Earlier plain-text payloads remain readable. To recover formatting lost in an earlier import, reopen/reimport the original source; existing local edits are not overwritten automatically.

The publication editor renders stored rich notes in print and HTML previews and in HTML/PDF input. Print continuations use the same measured markup. A formatting-only edit refreshes the preview; already stored rich content needs no reimport.

## Publication choices

Publication styles can control numbered footnotes/endnotes and inline or marginal note presentation. Choose unnumbered inline parentheses, an unnumbered margin note, or inclusion among numbered footnotes/endnotes. DOCX preserves unsupported margin placement inline and reports a warning; review the final output. In Hungarian, **Szövegközi jegyzet** is the inline-note label and **Végjegyzet** is the endnote label.

An optional starred funding note can be generated from the semantic funding metadata by the publication style. Enable it when that information should appear at the beginning; the star is separate from ordinary numbered notes, which start at 1. Review each export's supported presentation and the final PDF.

See the [publication guide](/docs/studio/publication-editor) and [current implementation update](/docs/studio/updates/2026-11-20).

## Note insertion and preview (25 November)

Use the persistent note-insertion action in the editor toolbar. With a selection, a note can be attached to text; without one, insert at the caret. Hover or keyboard-focus the anchor to see formatted note content, and click to edit. These changes are in the merged source; installed clients require updated builds.

[Studio development update — 25 November 2026](/docs/studio/updates/2026-11-25).

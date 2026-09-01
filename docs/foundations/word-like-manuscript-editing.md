---
id: word-like-manuscript-editing
title: Word-like Manuscript Editing
sidebar_label: Word-like Manuscript Editing
sidebar_position: 5
description: Manuscript-wide paragraph editing, selection, mobile input handling, and structural invariants in Open Manuscript Studio.
keywords:
  - Open Manuscript Studio
  - manuscript editing
  - paragraph merge
  - paragraph split
  - selection
  - Ctrl+A
  - mobile editing
  - OMI structure
---

# Word-like Manuscript Editing

Open Manuscript Studio is moving toward the interaction model expected from a conventional word processor while retaining the explicit OMI document structure underneath. The central rule is simple: **the user edits one continuous manuscript; OMI section and block boundaries must not become artificial editing barriers**.

This does not mean flattening the manuscript into unstructured rich text. Editing operations are translated into explicit OMI structural changes so semantic sections, blocks, notes, citations, cross-references, version history, and stable identities remain available after an operation.

## Manuscript-wide editing order

Studio now maintains one canonical editing/reading order across top-level manuscript blocks. Section boundaries remain meaningful document structure, but ordinary paragraph editing can cross them.

The shared editing-order layer is used by structural commands rather than relying on the DOM or on one local Tiptap editor instance as the canonical manuscript model. Empty sections therefore do not create artificial stops, while semantic objects such as figures, tables, headings, and other non-paragraph blocks remain explicit boundaries.

## Paragraph split and merge

For paragraph blocks, conventional editing keys are mapped to OMI structural operations:

- **Enter** splits the current paragraph into two OMI paragraph blocks at the caret;
- **Backspace** at the start of a paragraph merges it with the immediately preceding paragraph when structurally valid;
- **Delete** at the end of a paragraph merges the following paragraph into the current one when structurally valid;
- paragraph merges can cross OMI section boundaries without deleting the section object itself;
- `Shift+Enter` remains an inline hard break rather than a structural split.

Rich Tiptap content is preserved during the operation. Notes, citations, citation clusters, cross-reference sources, and anchored objects are reassigned to the surviving or newly created block as needed. Structural edits are also recorded through the existing version/checkpoint machinery.

## Physical keyboards and mobile IMEs

Desktop keyboards and mobile virtual keyboards do not always deliver the same browser events. Android and iOS input methods commonly express paragraph-boundary operations through `beforeinput` rather than reliable `keydown` events.

Studio therefore routes both interaction paths through the same OMI boundary-editing operations. The mobile path recognizes operations such as `deleteContentBackward`, `deleteContentForward`, and `insertParagraph`, while the desktop path handles Backspace, Delete, and Enter. This keeps the document model identical across web, desktop, Android, and iOS/iPadOS clients.

## Manuscript-wide selection

Selection is no longer treated only as a local property of one Tiptap block. Studio has a manuscript-level range model whose endpoints are represented as an OMI block identifier plus a text offset.

This allows the application to map native mouse/touch selections back into manuscript order when they span multiple blocks or multiple sections. The same model is compatible with the existing manuscript clipboard layer, which already understands cross-block and cross-section fragments.

### Ctrl+A / Cmd+A

**Ctrl+A** on Windows/Linux and **Cmd+A** on macOS selects the complete textual manuscript range from the first textual OMI block to the last, rather than selecting only the currently focused editor instance.

Large manuscripts can use lazy/offscreen editor mounting without shortening the semantic selection. The DOM can show only the currently rendered portion while the OMI selection range still represents the whole manuscript.

## Mobile selection actions

On touch devices Studio suppresses the native WebView selection action menu when a Studio text selection is active, so users see the Studio selection toolbar rather than two competing action menus. Copy and cut still write through the operating-system clipboard path, allowing content to be pasted into other applications.

## Structural safety

Word-like interaction does not permit semantic objects to disappear silently. A Backspace or Delete operation may merge compatible paragraphs, but it must not skip over or implicitly destroy a figure, table, heading, quotation, or other meaningful OMI object. Operations that change semantic block type require an explicit structural transformation.

This separation is important for scholarly workflows: editing remains familiar, while the canonical document remains suitable for validation, publishing-system exchange, preservation, and deterministic export.

## Related long-form work

The same development line includes large-DOCX handling, semantic indexes, generated tables of contents, scalable note editing, and increasingly structural PDF import. PDF reconstruction now uses visual bbox geometry rather than trusting Poppler logical line grouping alone when detecting difficult footnote layouts. Native Android PDF import is routed to the Studio API rather than the packaged WebView origin.

See also:

- [Long-form Authoring](./studio-long-form-authoring.md)
- [Cross-platform Studio](./cross-platform-studio.md)
- [OMI Cloud and Federated Infrastructure](./omi-cloud-federated-infrastructure.md)

## Status

The manuscript-wide editing order, cross-section paragraph behavior, mobile boundary input handling, manuscript-wide selection, and whole-document Ctrl+A/Cmd+A behavior are implemented in the current Studio development line as of September 2026. As with other beta features, regression testing continues across browser, desktop, Android, and iOS/iPadOS targets.
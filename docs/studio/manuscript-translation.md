---
id: manuscript-translation
title: Translate and review a manuscript
sidebar_label: Manuscript Translation
description: How to use language variants, source alignment, reviews and safe export in Open Manuscript Studio.
---

# Translating manuscripts in Open Manuscript Studio

The **Translations** workspace supports translations of manuscript content without locking the original. A translation is kept as a distinct language variant with source/target alignment, review information and portable evidence.

## How to work with translations

1. Open the manuscript and choose **Manuscript → Translations**.
2. Select a target language (a concrete BCP 47 tag such as \`de\`, \`en-GB\` or \`hu\`).
3. Translate the whole manuscript or a selected section. Multiple variants of the same target language are allowed.
4. Edit target text and translator notes for each alignment. Choose **Equivalent translation** or **Intentional adaptation**.
5. Use **Mark as reviewed** only after checking the target against its current source. Machine suggestions always begin as drafts.
6. After changing source text, inspect stale/missing alignments. **Update source alignment** retains the target, updates the baseline and resets affected reviews; missing source alignments can be explicitly archived.
7. Use **Parallel text HTML** or **Target text HTML** only when the covered supported units are current, assessed, nonempty and reviewed.

If DeepL is configured, an author may review the provider's preview and choose **Save as language variant**. The saved record is tied to the captured source and scope; it does not silently overwrite a different document. External translation execution requires the appropriate provider configuration and permissions.

## What travels with the file?

The experimental \`studio-translation-0.1\` profile stores translation records in the OMI manuscript's namespaced extension \`urn:omi:studio:translation:1\`. Portable OMI JSON, checkpoint/history and revision reversion retain those records. They record source scope and baseline, source/target language, target text, equivalence, review and human/machine provenance where available.

Studio compares recognized source units to determine whether a translation is **current**, **stale** or **missing**. An unrelated revision does not automatically invalidate every segment. The original source is always editable.

## Important limitations

Translation coverage includes manuscript metadata, section titles, ordinary text and supported annotation/visual captions or alternatives. Bibliography, citation labels, reference markers, code, equations, table cells and chart data are not automatically translated as ordinary prose. The export readiness check therefore applies to **supported text units in the selected scope**, not to an entire typeset scholarly edition.

HTML exports are **aligned text proofs**, not fully structured target manuscripts or independently published editions. Translation-aware DOCX/PDF/JATS publication, many-to-many alignment and independent target revision histories are not yet available in this profile. Existing earlier server variants may lack source/version evidence and are not automatically marked reviewed.

## Specification status

[OMI-SPEC-170 — Translation Model](../specifications/translation-model.md) is a **Draft 0.1.0** semantic specification, distinct from the already implemented **experimental Studio profile**. Neither the Studio feature nor this guide establishes formal specification conformance.

Technical details: [Studio implementation contract](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/omi-spec-170-translation-model.md).

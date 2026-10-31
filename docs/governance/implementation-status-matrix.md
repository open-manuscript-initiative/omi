---
id: implementation-status-matrix
title: OMI Implementation Status Matrix
sidebar_label: Implementation Status Matrix
description: Version-pinned evidence inventory for all 24 OMI models, with core review coverage and explicit maturity gates.
---

# OMI Implementation Status Matrix

## Evidence baseline

Version **0.6.0**, reviewed 2026-10-31. Informative evidence report; no lifecycle promotion. This replaces the mixed historical aggregate with a reproducible 24-model inventory. The registry and exact versioned normative text remain authoritative.

- Specification baseline: [`b4e12ef`](https://github.com/open-manuscript-initiative/omi/commit/b4e12ef9ffdf53be34cd16bbcb45d9530123c120), plus the proposed core Draft revisions in this change.
- Studio baseline: [`5a69669`](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/5a69669131dac56379bce50ce6ce300c9464a900).
- [Machine-readable inventory with file hashes](/evidence/readiness-2026-10-31.json).
- [Studio PR #785](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/785) was open with successful executed checks at review time. Its new 190/340/350 profiles are **proposed**, not merged baseline evidence. This snapshot is historical, not a live PR-status widget.

## Interpretation

A listed file demonstrates related code or tests, not full requirement coverage. Partial means identifiable product behavior with open normative/interoperability gaps. Architectural means principles guide design rather than define a standalone executable feature. No model is labelled conformant. No independent implementation is verified here. The vendored shared validator is not independent evidence.

## All-model inventory

| Model | Draft version | Studio evidence | Review phase | Pinned evidence examples |
|---|---|---|---:|---|
| `OMI-SPEC-000` — Core Principles | 0.2.0 | architectural | 1 | [README.md](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/README.md) |
| `OMI-SPEC-100` — Document Model | 0.2.0 | partial | 1 | [src/types/omi.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/types/omi.ts); [src/app/useStudioStore.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/app/useStudioStore.ts) |
| `OMI-SPEC-110` — Anchor Model | 0.1.0 | partial | 2 | [src/model/namedAnchors.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/namedAnchors.ts); [tests/named-anchors.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/named-anchors.test.ts) |
| `OMI-SPEC-120` — Scholarly Object Model | 0.3.0 | partial | 1 | [src/types/omi.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/types/omi.ts); [src/services/manuscriptValidation.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/services/manuscriptValidation.ts) |
| `OMI-SPEC-130` — Annotation Model | 0.2.0 | partial | 2 | [src/model/notes.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/notes.ts); [tests/notes-model.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/notes-model.test.ts) |
| `OMI-SPEC-140` — Metadata Model | 0.2.0 | partial | 1 | [src/model/scholarlyMetadata.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/scholarlyMetadata.ts); [src/app/scholarlyMetadataActions.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/app/scholarlyMetadataActions.ts) |
| `OMI-SPEC-150` — Identity and Contributor Model | 0.1.0 | partial | 2 | [src/model/identity.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/identity.ts); [tests/identity-model.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/identity-model.test.ts) |
| `OMI-SPEC-160` — Versioning and Change Model | 0.1.0 | partial | 3 | [src/model/versioning.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/versioning.ts); [src/model/workingState.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/workingState.ts) |
| `OMI-SPEC-170` — Translation Model | 0.1.0 | partial | 6 | [src/model/translation.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/translation.ts); [tests/translation-model.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/translation-model.test.ts) |
| `OMI-SPEC-180` — Validation Model | 0.1.0 | partial | 3 | [src/services/manuscriptValidation.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/services/manuscriptValidation.ts); [src/model/validation.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/validation.ts) |
| `OMI-SPEC-190` — Collaboration and Permission Model | 0.1.0 | partial | 6 | [server/src/services/collaborationInvitationService.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/server/src/services/collaborationInvitationService.ts); [server/src/services/collaborationTicketService.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/server/src/services/collaborationTicketService.ts) |
| `OMI-SPEC-200` — Review Model | 0.1.0 | partial | 6 | [src/model/peerReview.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/peerReview.ts); [tests/peer-review-model.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/peer-review-model.test.ts) |
| `OMI-SPEC-210` — Citation Model | 0.2.0 | partial | 4 | [src/model/citations.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/citations.ts); [tests/citation-model.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/citation-model.test.ts) |
| `OMI-SPEC-220` — Bibliographic Record Model | 0.1.0 | partial | 4 | [src/types/omi.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/types/omi.ts); [tests/bibliographic-lookup.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/bibliographic-lookup.test.ts) |
| `OMI-SPEC-221` — Reference Library and Registry Architecture | 0.1.0 | partial | 4 | [src/services/referenceManagerApi.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/services/referenceManagerApi.ts); [tests/reference-manager-integrations.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/reference-manager-integrations.test.ts) |
| `OMI-SPEC-225` — Source and Derivation Model | 0.2.0 | partial | 4 | [src/model/sourceAttributionExport.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/sourceAttributionExport.ts); [tests/source-attribution-lifecycle.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/source-attribution-lifecycle.test.ts) |
| `OMI-SPEC-230` — Publishing Model | 0.1.0 | partial | 7 | [src/model/publicationBuild.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/publicationBuild.ts); [tests/publication-build.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/publication-build.test.ts) |
| `OMI-SPEC-240` — Rendering and Publication Profile Model | 0.1.0 | partial | 7 | [src/model/publicationProfile.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/publicationProfile.ts); [tests/publication-profile.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/publication-profile.test.ts) |
| `OMI-SPEC-300` — Plugin Architecture | 0.1.0 | partial | 9 | [src/modules/registry.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/modules/registry.ts); [tests/studio-module-framework.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/studio-module-framework.test.ts) |
| `OMI-SPEC-310` — Platform API | 0.1.0 | partial | 9 | [src/services/authApi.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/services/authApi.ts); [tests/studio-api-transport.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/studio-api-transport.test.ts) |
| `OMI-SPEC-320` — File Format | 0.3.0 | partial | 5 | [src/model/omiFormatConstants.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/omiFormatConstants.ts); [src/services/omiPortableFormat.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/services/omiPortableFormat.ts) |
| `OMI-SPEC-330` — Container Architecture | 0.1.0 | partial | 5 | [src/services/omiContainer.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/services/omiContainer.ts); [tests/asset-container.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/asset-container.test.ts) |
| `OMI-SPEC-340` — Import and Export Model | 0.1.0 | partial | 8 | [src/services/docxImportStrategy.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/services/docxImportStrategy.ts); [src/components/ExportFormatsPanel.tsx](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/components/ExportFormatsPanel.tsx) |
| `OMI-SPEC-350` — Capability and Conformance Model | 0.1.0 | partial | 9 | [src/model/jatsConformance.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/src/model/jatsConformance.ts); [tests/jats-conformance.test.ts](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/5a69669131dac56379bce50ce6ce300c9464a900/tests/jats-conformance.test.ts) |

## Core review evidence

The 000/120/100/140 rewrites provide **66 requirement IDs**, **22 versioned fixtures**, a minimal structural schema and a bounded pure validator. **20 requirements have partial fixture evidence; 46 remain untested**. No requirement is promoted to complete evidence merely because one fixture passes. [Detailed profile](https://openmanuscript.org/docs/specifications/core-snapshot-review-profile/).

The Studio companion panel runs this separate experimental profile without changing existing validation-report versions or manuscript producer declarations. It is proposed support until merged and deployed.

## Corrections and current gates

The runtime file-format constants already identify OMI-SPEC-320@0.3.0 and the 0.3 schema; the former claim that Studio still uses 0.2.0 was stale. Source and Derivation is 0.2.0; the registry version and missing dependency row are corrected. The new core Draft versions are not silently substituted into existing producer envelopes.

The citation/library dependency cycle `OMI-SPEC-210 → OMI-SPEC-221 → OMI-SPEC-210` must be reviewed as a coordinated group; no strict independent promotion order is implied for those two models. This Draft cycle remains recorded, not silently removed.

Every stronger status still requires exact normative applicability, code/test mapping, versioned positive and negative fixtures, compatible behavior, public review, meaningful independent evidence and a recorded approval. A successful Studio build is one implementation observation.

## Change history

| Version | Date | Change |
|---|---|---|
| 0.6.0 | 2026-10-31 | Rebuilt all-model source/code inventory, corrected 0.3.0 runtime and version drift, added 66-requirement core review evidence and explicit open gates. No lifecycle promotion. |

Earlier evidence baselines remain available in repository history; their old counts are not current completion percentages.

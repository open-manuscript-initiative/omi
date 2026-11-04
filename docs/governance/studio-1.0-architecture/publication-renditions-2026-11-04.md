---
title: Publication renditions and source lineage — 4 November 2026
sidebar_label: Publication rendition boundary
description: Editable publication state, manuscript lineage, author credit and remaining frame-export fidelity work.
---

# Publication renditions and source lineage — 4 November 2026

Status: proposed baseline clarification following the maintainer's confirmed direction. This corrects the earlier drift diagnosis, not the implementation's evidence level. Source reviewed: Studio [a3ac0e98](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/a3ac0e98194c7d39a0013e280453c7f428d86dd0). Detailed decision: [Studio ADR-032](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-032-publication-rendition-boundary.md).

## Authority is scoped to the version being edited

Typesetting belongs to publication preparation, not source processing. A separately editable publication rendition may own text stories, linked frames, graphic transforms and page styles. It may be stored alongside the source inside an OMI container. This does not, by itself, violate the canonical manuscript or application-state boundary.

| Object | Authority | Author's freedom |
| --- | --- | --- |
| Source manuscript | Structured source content and its revision history | Edit every part through existing permissions; immutable prior revisions remain history. |
| Publication rendition | The publication version's text, graphics and layout | Edit, add, remove, reorder, crop and typeset independently; record deliberate divergence. |
| Exported artifact | The exact bytes from one identified rendition snapshot | Produce a new artifact after changes; retain the relationship to its inputs. |

The same document container is a storage choice, not proof that both text versions must be identical. A single UI is likewise not proof of semantic synchronization. Keep existing authorization; do not add locks or disable editing to enforce provenance.

## Visible author credit and internal lineage

The author's name and ORCID iD are suitable visible credit. They do not identify which manuscript or revision was used, and do not by themselves prove control of the iD, a document signature, editor approval or peer review. Existing authenticated-identity evidence remains separate.

Keep source manuscript ID, immutable starting revision and its existing digest, plus rendition/snapshot identity, in internal provenance. They need not be printed on the publication. Historical layouts without this relationship have **unknown** lineage, not an inferred link to the current manuscript head. A directly authored publication may explicitly have no imported source.

Do not hash a mutable rendition recursively through the source containing it, redefine the existing history digest or rewrite historical snapshots. Any new mapping/profile must be versioned and reviewed before implementation. Reuse existing history and publication-build mechanisms where appropriate; this checkpoint introduces no wire fields or normative OMI profile.

## Source changes, review and public delivery

Source updates must not silently overwrite publication edits. Import/refresh/merge is explicit, preserves the earlier version and exposes conflicts and affected objects. The author may deliberately change or omit material. Repeated import must not silently append duplicate text.

Compare content changes, presentation-only changes and unresolved comparison separately. A source revision reference alone cannot make modified publication text peer reviewed. Existing server-authorized assurance must cover the actual rendition subject/content; local ORCID or layout metadata cannot issue a reviewed seal. A typographic change need not be a scientific content change, but the resulting artifact still needs the required evidence binding. Unknown coverage stays unverified. ADR-021's false-assurance gates remain.

Publication-stage editing does not make every source draft, hidden revision, reviewer identity or local path public. Export only the approved rendition, resources and permitted provenance. Do not embed the source container automatically to prove lineage.

## Inspected implementation and actual gaps

| Current Studio source | Assessment |
| --- | --- |
| `publicationFrames.ts` / `publicationAutoFlow.ts`: editable `stories[].text`, frames, styles and continuation pages in `urn:omi:studio:publication-frames:1` | Legitimate publication state. Explicit starting-revision/rendition binding and semantic change comparison are not implemented. |
| `publicationFrameActions.ts`: `publication.frames.set` and idle checkpoint | Changes enter existing document history. A history event does not establish the source revision from which story text was imported. |
| `PublicationFrameEditor.tsx`: independent textarea; import appends `storedContentText` from source blocks | Independent editing is intentional. Flattening/repeat append lacks a rich semantic mapping and reconciliation receipt. |
| `publicationFrameRendering.ts`: plain-text line renderer; graphic-resource reuse; overflow/missing-source guards | These guards do not prove note, citation, table, formatting or annotation completeness, lineage or exact review coverage. |
| Synthetic frame/page tests | Exercise flow, geometry, text preservation and extension round trips, not complete scholarly semantic conversion or independent renderer conformance. |

The implementation remains usable within its declared subset. Unsupported content must produce clear diagnostics before a complete-manuscript conversion is claimed. Intentional author edits/deletions are not automatically accidental loss. Preserve old layouts and the rich-content export path.

## Consequences for the existing plan

| Existing decision/work | Clarification and required evidence |
| --- | --- |
| ADR-004/005; B01/B03/B05/B06 | Source ContentCodec and application ownership remain. An editable rendition is not a competing source authority. Do not force it back into a single shared text tree. |
| ADR-007/018; B07/C04 | Versioned source/rendition mapping, known/unknown/no-import lineage, independent edits, save/reopen and source refresh without history rewriting. |
| ADR-008/009; C03–C05 | Immutable input context, resource/font/renderer identity and semantic loss reporting. Synthetic notes/citations/tables/figures/captions/formatting/annotations through import, edit and actual export. |
| ADR-019/021; C15/E03 | Wrong-subject/modified-content assurance denial, unchanged-content handling, privacy, intentional omissions, repeated import, conflicts, undo/recovery and long-document performance. |

The five architecture baselines carry this clarification. The original 54-unit roadmap and E02–E05 remain; this documentation does not approve an RC, assert a stable frame profile, migrate a database or implement missing lineage/fidelity behavior. The separate RC-publication finding is not resolved by this correction.

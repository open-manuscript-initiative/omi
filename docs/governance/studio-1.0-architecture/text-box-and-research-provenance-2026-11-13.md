---
title: Text-box profile and research-diagram provenance — 2026-11-13
sidebar_label: Text-box and research provenance
---

# Text-box profile and research-diagram provenance

Status: proposed coordinated repair, pending OMI/Studio merge and CI. Refines
ADR-001/002/004/008/018/019/022/023. Earlier dated checkpoints remain historical.

## Canonical schema and experimental content profile

The OMI repository owns the additive Draft 0.3 definitions for graphical text boxes.
`visual.textBox` and `visual.textBoxes` carry geometry, a string `content`, optional
URI `contentProfile` and namespaced `extensions`. Studio vendors exact canonical
bytes, pins an immutable OMI commit with SHA-256 checksums, and checks both local
hashes/generated validators and upstream byte parity in the existing mandatory
OMI-SPEC-320 conformance workflow. No stable OMI/schema/container generation is
promoted by this Draft reconciliation.

New boxes and supported DOCX drawing imports declare
`https://openmanuscript.org/profiles/text-box-content/0.1`. This experimental profile
is independent of editor JSON; it is not the complete manuscript ContentCodec.
The string `content` encodes an object with `format: "omi-text-box-content"`,
`version: "0.1.0"` and `paragraphs`. Each paragraph holds alignment, line height,
before/after spacing and runs. Each run holds literal Unicode `text`, semantic
`emphasis` values and optional font-family/size/RGB `presentation`. LF represents a
line break inside a paragraph. Coordinates and font sizes are CSS pixels.

- [Canonical Draft manuscript schema](/schemas/omi-manuscript-0.3.schema.json)
- [Independent content-profile schema](/schemas/text-box-content-0.1.schema.json)
- [Shared golden fixture](/examples/text-box-content/0.1.json)

Schema limits are explicit: at most 10,000 paragraphs, line height 0.5–10, spacing
0–1000 pixels, font size 1–400 pixels, safe font-family text and six-digit RGB.
The schema admits additive properties for preservation; supported editing must
report fields it cannot represent. Compile the validator at build time, including
for native clients whose CSP forbids runtime code generation.

Unprofiled legacy plain text/editor JSON remains readable without an automatic
open/save migration. Known profile bodies must pass their independent schema.
Unknown profiles and additive fields remain verbatim in `content` on OMI save and
in history. The editor and HTML/JATS diagnostics warn about incomplete views.
Explicitly confirming an edit writes a supported copy and preserves original
`content` and `contentProfile` under
`https://openmanuscript.org/extensions/text-box-source/1`. Do not lock general author
editing or silently reinterpret future profiles. Older Studio readers may render
profiled content incorrectly: upgrade readers and preserve raw payloads; no backward
rendering promise is made. Existing export layout fallbacks remain explicit.

## Research workspace to manuscript boundary

The genealogy/network workspace owns its full graph, original GEDCOM and private
notes. A manuscript receives only the reviewed SVG snapshot and approved source
metadata. Preview the exact snapshot, suggest source labels from displayed records
or imported file names, and require an editable external source or explicit own-work
declaration plus confirmation. Suggestions are not evidence. Source/declaration
changes reset confirmation; workspace/view/target-document changes require a new
preview. No live synchronization or silent publication of workspace data follows.

For external data, one staged reversible change inserts the diagram, visible source
paragraph, provisional bibliography and `prov:wasDerivedFrom` relation with
`assertionStatus: "author-confirmed"`. OMI save/history preserves the relationship;
HTML/JATS retain the source label and diagnose unsupported structured relations.

For own research data, no visible source or bibliographic assertion is invented.
An internal semantic annotation targets the image, has `targetText: "omi:research-origin"`
and a JSON body with `format: "omi-research-origin"`, `version: "0.1.0"`,
`assertion: "author-declared:own-research-data"` and supplied `source` text. OMI retains
it; ordinary HTML/JATS publication omits it. This is an author assertion, neither
independent verification nor a claim that the OMI-generated diagram was authored
externally. It grants no identity, review or publication authority.

## Acceptance and remaining work

A02–A06/B06: canonical byte pin, independent schema/codec golden, legacy/future-data
retention, explicit edit recovery and DOCX/JSON/container tests. C11/ADR-022/023:
preview/confirmation, atomic source lifecycle and private-annotation export filtering.
Existing exact-candidate release evidence remains mandatory; no missing gate may be
substituted by this documentation or local test success. Browser/native and operator
acceptance remain separate. No database migration or general editing lock is needed.

[Studio ADR-035](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-035-text-box-profile-and-research-diagram-provenance.md)
records the alternatives, consequences and revisit conditions.

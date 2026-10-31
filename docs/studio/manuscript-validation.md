---
id: manuscript-validation
title: Validate a manuscript in Open Manuscript Studio
sidebar_label: Manuscript Validation
description: Validate authoring, portable OMI exchange and publication prerequisites without restricting manuscript editing.
---

# Validate a manuscript in Open Manuscript Studio

The **Validation** panel examines a snapshot of your manuscript without changing it. It makes problems visible before exchange or publication, but never prevents you from freely editing the source.

## How to run checks

1. Open a manuscript and choose **Manuscript → Validation**.
2. Select **Authoring**, **OMI exchange**, or **Publication preflight**.
3. Run the selected checks and read the result and **coverage** separately.
4. Filter diagnostics by severity, view their codes and locations, and select **Open section** when a finding maps to an editor section.
5. Fix findings by editing the manuscript yourself, then run the checks again. The existing report becomes **stale** when its source or chosen profile changes.
6. When the report is current, use **Download JSON** to preserve its machine-readable evidence and check coverage.

The panel pages through findings and works in desktop and mobile layouts. Running validation does not change document history, create a new checkpoint, automatically repair content, contact an external service or upload manuscript text.

## Which profile should I choose?

| Profile | Typical purpose | Checks |
|---|---|---|
| **Authoring** | Inspect a working draft | IDs, hierarchy, references, anchors, available revision evidence and recognized translation state |
| **OMI exchange** | Prepare a portable manuscript | Authoring checks plus strict OMI serialization and locally accessible asset bytes/checksums |
| **Publication preflight** | Inspect publication prerequisites | Exchange checks plus the active publisher profile's metadata and accessibility requirements |

A draft without a title may pass Authoring but fail OMI exchange. A translation awaiting review is reported as information; a divergent translation is a warning and does not lock the original. Unrecognized translation profiles, missing historical digests or an inaccessible asset store produce **incomplete coverage** rather than a fabricated pass.

## Understand the result

| Report result | Meaning |
|---|---|
| **Valid** | No document errors were found and the required check coverage is complete for this profile |
| **Invalid** | One or more checkers found a definite document error; other checks might still be incomplete |
| **Indeterminate** | No definite document error was found, but required evidence or check coverage is incomplete |

**Coverage** is independent of the result. A report can be **invalid and incomplete** at the same time. Warnings and information do not themselves mean invalid. A failed checker is distinct from a defective document.

The JSON report references the inspected working-state digest and committed base, and records check identities, machine-readable codes, RFC 6901 locations, status, coverage and exclusions. It deliberately omits manuscript prose, secrets and raw exception messages. It is **not** a signed certificate.

## What this does not validate

The Studio panel validates an already loaded manuscript. It does not replace raw-file parsing before import, scholarly accuracy checks, external link availability, actual JATS DTD/JATS4R checks, renderer/PDF quality, signatures or publication permission checks. Existing publication release gates still apply.

No external assets are fetched automatically. When an asset reader is unavailable, the report acknowledges missing evidence. If the source or publisher profile changes, revalidate before sharing a report.

## Specification status

[OMI-SPEC-180 — Validation Model](https://openmanuscript.org/docs/specifications/validation-model/) is a **Draft 0.1.0** semantic standard. The Studio implementation described in [PR #783](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/783) uses experimental **`studio-validation-0.1`** reports with a [local JSON Schema](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/feat/omi-spec-180-validation-model/src/schemas/studio-validation-report-0.1.schema.json). Those reports are *not* normative OMI-SPEC-180 conformance certificates. Availability in a deployed Studio depends on merging and releasing the Studio PR.

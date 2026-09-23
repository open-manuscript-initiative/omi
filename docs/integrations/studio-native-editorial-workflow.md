---
title: Studio-native Editorial Workflow
sidebar_label: Studio-native Editorial Workflow
description: Submission, peer review, author revision, editorial decision and publication for DNS-verified journals and presses that do not use OJS or OMP.
---

# Studio-native Editorial Workflow

Open Manuscript Studio can manage the complete editorial workflow for a **DNS-verified journal or press that does not use OJS or OMP**.

> **Preview status.** This workflow is being hardened for the Studio 1.0 line. OJS/OMP integrations keep their existing authority boundary.

## Authority boundary

Studio uses exactly one authoritative editorial workflow for a publication venue.

- **OJS journal:** submission, review rounds, reviewer assignments and editorial decisions remain authoritative in OJS.
- **OMP press:** the corresponding workflow remains authoritative in OMP.
- **DNS-verified venue without OJS/OMP:** Studio may own the editorial workflow described on this page.

Studio rejects the native path for a venue that has a verified authoritative OJS/OMP binding. This prevents competing states such as OJS saying “revision required” while Studio says “accepted”.

## End-to-end flow

```text
Author writes the manuscript in Studio
        ↓
Submit exact committed revision to the journal/press
        ↓
Editorial inbox
        ↓
Editor assigns scientific reviewer(s)
        ↓
Reviewer accepts and reviews in Studio
        ↓
Reviewer submits comments + recommendation
        ↓
Editor closes the submitted review assignment
        ↓
Editor chooses:
   ├── Request revision
   ├── Reject
   └── Accept
        ↓
If revision is requested:
Author edits in Studio and submits a new committed revision
        ↓
Editor may accept it or start a new review round
        ↓
Editorial ACCEPT decision
        ↓
Publishable
        ↓
Publication
```

**Editorial acceptance and publication are separate actions.** Acceptance records an immutable decision for one exact manuscript revision. Publication later consumes that decision.

## Author submission

In **Extended metadata**, the author selects a DNS-verified journal or press. The new **Editorial workflow** screen then allows the exact committed revision to be submitted.

The submission stores:

- manuscript ID and committed revision ID;
- canonical manuscript-state SHA-256 digest;
- publication-content SHA-256 digest;
- canonical manuscript snapshot;
- reviewer-safe manuscript projection;
- referenced binary assets, verified by SHA-256;
- publication-venue identity and verified domain;
- workflow status and append-only event history.

The scholarly manuscript remains the canonical document. Editorial workflow state is stored separately.

## Editorial inbox

Accounts holding an active `EDITOR` or `EDITOR_IN_CHIEF` role at the verified venue see that venue's Studio-native submissions in the editorial inbox.

An editor can open the exact submitted revision on another device because the submission preserves the revision snapshot and its verified assets.

A `DOMAIN_ADMIN` role alone is not enough to make editorial decisions.

## Reviewer assignment and privacy

The editor assigns one or more existing Studio accounts as scientific reviewers. Studio-native scientific review defaults to double blind. The submitting author cannot be assigned as a scientific reviewer of the same submission.

The reviewer receives the existing Studio review workspace and can:

- accept or decline the assignment;
- read the anonymous manuscript projection;
- add author-visible or editor-only feedback;
- submit a recommendation.

A declined invitation remains in the audit history but does not become decision-bearing review evidence. The editor may assign a replacement reviewer in the same round; the round becomes decision-capable when every non-declined scientific assignment in that round has been completed.

The author-facing workflow never exposes the reviewer's Studio identity. Editor-only feedback is also excluded from the author view.

## Author revision

After a completed review round, the editor may choose **Request revision** and send an editorial message.

The author sees:

- the revision request;
- author-visible reviewer comments;
- the reviewer recommendation;
- the current workflow state.

After editing the manuscript, the author submits a **new committed revision**. Studio records its new revision ID and SHA-256 state/content digests.

If a new review round is started, Studio will not allow acceptance to fall back to an older completed round while the current round is unfinished.

## Editorial decision

The editor has a separate **Accept manuscript** action in the editorial workflow.

Acceptance uses Studio's immutable `EditorialDecision` evidence and binds the decision to:

- exact manuscript revision;
- manuscript-state digest;
- publication-content digest;
- completed scientific review evidence;
- review round;
- deciding editor;
- DNS-verified publication venue and authority snapshot.

Changing the manuscript after acceptance changes its digest. The old acceptance cannot be reused for changed publication content.

## Publication

After acceptance, the exact revision is **publishable**.

The publication screen does not create the Studio-native editorial acceptance. It only consumes an already recorded decision.

A successful publication moves the workflow to `PUBLISHED` only when the external URL is under the verified publication-venue domain or one of its subdomains. Publishing the same accepted article to an unrelated website may still succeed as an external delivery, but the verified venue submission remains `ACCEPTED`.

Publisher-verified output may carry:

```text
OMI
PEER REVIEW
VERIFIED
```

The seal refers to revision-bound editorial evidence, not to DNS alone.

## Workflow states

| State | Meaning |
| --- | --- |
| `SUBMITTED` | Exact committed revision submitted |
| `IN_REVIEW` | Current review round has assigned reviewer(s) |
| `REVISION_REQUESTED` | Editor requested changes |
| `REVISION_SUBMITTED` | Author submitted a new committed revision |
| `ACCEPTED` | Exact revision has an immutable editorial acceptance |
| `REJECTED` | Submission rejected |
| `PUBLISHED` | Accepted revision recorded as published |

## Related documentation

- [Verified Publication Venue Authority](../publication-venue-authority)
- [Studio Deployment Modes](../studio-deployment-modes)
- [OJS Plugin](../ojs-plugin)
- [OMP Plugin](../omp-plugin)

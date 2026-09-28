---
id: studio-live-collaboration
title: Live Manuscript Collaboration in Studio
sidebar_label: Studio Live Collaboration
description: How invitation acceptance, access control and live co-editing work in Open Manuscript Studio.
keywords:
  - Open Manuscript Studio
  - live collaboration
  - Yjs
  - invitations
  - co-authoring
---

# Live Manuscript Collaboration in Studio

Open Manuscript Studio `0.3.0-beta.2` supports live editing of a manuscript by
multiple invited authors. The current deployment uses the existing single-node
Studio service and PostgreSQL-backed collaboration state. This feature does
not change the portable OMI manuscript format (`OMI-SPEC-320@0.2.0`).

## Invite and accept

1. A manuscript author opens its collaboration controls and invites a Studio
   account by the address associated with that account.
2. The invited author signs in to Studio and opens the in-Studio invitation
   inbox.
3. The invitee reviews the manuscript invitation and explicitly accepts it.
   The server grants manuscript collaboration access only after acceptance;
   a pending invitation does not grant access.
4. After acceptance, both authors can open the manuscript and edit it at the
   same time. Live cursors and selections show each collaborator's display name
   and a distinct color.

The invitation inbox lets authors discover invitations while signed in,
without depending on an e-mail notification. The inviter still needs to address
the invitation to the e-mail associated with the invitee's Studio account.

## Collaboration and review are separate

Live co-editing synchronizes current manuscript changes. Peer-review change
tracking, reviewer permissions and editorial decisions remain in the review
workflow. Collaboration does not create a review record or change the authority
of an OJS/OMP installation connected to the manuscript.

## Deployment and data format

The single-node deployment stores collaboration authority separately from
manuscript file storage. Existing document open, save, import and export paths
continue to use the current OMI manuscript model. Later horizontal scaling can
move the collaboration service behind shared state and provider-neutral
interfaces without changing the OMI file contract.

See the [Studio implementation status](https://openmanuscript.org/docs/governance/studio-implementation-status/)
for the current maturity snapshot and the [Studio visual tour](https://openmanuscript.org/docs/studio/visual-tour/)
for an overview of the application.

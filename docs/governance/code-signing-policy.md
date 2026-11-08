---
title: Code Signing Policy
sidebar_label: Code Signing Policy
---

# Code Signing Policy

Updated 8 November 2026. Applies to official Open Manuscript Studio binaries,
built from the MIT-licensed `open-manuscript-initiative/open-manuscript-studio`
repository.

## Windows distribution channels

| Channel | Current policy and status |
| --- | --- |
| Microsoft Store MSIX | Selected path. GitHub builds an unsigned candidate; Microsoft signs during publication after certification. Packaging succeeded on 8 November; Store version validation, certification and device/update acceptance are pending. |
| Direct EXE/MSI | Existing Tauri installers remain a separate channel. No active public-trust signing integration is established; the Store does not sign these files. |
| Local development | Test certificates are restricted to explicitly trusted test environments and do not establish public release trust. |

The owner reports that the earlier SignPath Foundation application was declined.
SignPath is not an active signing provider; no SignPath sponsorship or certificate
is claimed. The Store-only workflow requires neither Azure nor private signing
credentials. See [RC status and verified build](../studio/releases/1.0.0-rc.1.md).

## Provenance and release approval

1. Use official public source and GitHub-hosted approved build workflows.
2. Bind exact source revision, package identity/version, build run and SHA-256.
3. Submit the reviewed candidate through the approved distribution channel;
   any deliberate rebuild or repackaging requires new byte identity and review.
4. Verify signing authority, signature integrity and actual install/update/data
   preservation before claiming signed distribution.
5. Keep signing credentials and service secrets out of Git, logs and binaries.
   Limit CI/release access and use MFA.
6. Obtain explicit release-owner approval; a green build is not certification
   or an approved stable release. Preserve Store-managed update behavior for
   Store-installed packages.

MSIX archive digests, package hashes and Microsoft signatures are distinct
evidence. The separate Store artifact does not silently replace the existing
seven-file RC receipt or its 14 manual acceptance gates.

The designated maintainer, reviewer and release approver is
[`vargaijanos`](https://github.com/vargaijanos). Roles may overlap in this small
project, but release approval remains explicit. Suspend signing/publication if
credentials or provenance are suspected compromised; investigate, revoke/rotate
affected credentials and identify affected releases before resuming.

## Privacy and reports

Microsoft and GitHub process account/build/submission metadata under their own
terms. Manuscript content, user credentials, database contents and server secrets
must never be included in signing or Store submission artifacts. Database/server
operation remains outside this signing boundary.
See [Privacy Policy](./privacy-policy.md).
Report security issues privately to the maintainers.

Material changes to provider, certificate ownership, trusted build, access or
approval must be reviewed and documented before production use.

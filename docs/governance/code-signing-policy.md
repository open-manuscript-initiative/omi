---
title: Code Signing Policy
sidebar_label: Code Signing Policy
---

# Code Signing Policy

## Scope

This policy applies to official binary releases of **Open Manuscript Studio**, the open-source reference implementation of the Open Manuscript Initiative (OMI).

Open Manuscript Studio source code is publicly developed in the `open-manuscript-initiative/open-manuscript-studio` GitHub repository and is distributed under the MIT License.

## Purpose

Code signing provides verifiable provenance and integrity for official desktop releases. It allows users and operating systems to verify that a distributed installer was produced through the project's approved release process and has not been modified after signing.

The initial signing scope is the official Windows desktop distribution, including the NSIS `.exe` installer and WiX `.msi` package produced by the Tauri release workflow.

## SignPath Foundation

The Open Manuscript Initiative intends to use the SignPath Foundation open-source code-signing service for eligible official releases.

**Free code signing provided by SignPath.io, certificate by SignPath Foundation.**

Code signing is not active until the project has been accepted by SignPath Foundation and the signing configuration has been integrated into the official release workflow. Until then, Windows packages may be unsigned and Windows may display an unknown-publisher or reputation warning.

## Trusted build and release provenance

Official signed binaries must be traceable to public source code and an approved release workflow.

For SignPath-signed releases:

1. source code must originate from the official Open Manuscript Studio GitHub repository;
2. release artifacts must be built by the project's approved GitHub Actions workflow using GitHub-hosted runners where required by the signing service;
3. signing must operate on artifacts produced by that trusted build rather than on locally supplied replacement binaries;
4. the signed artifact must correspond to the source revision and release identified by the public GitHub release;
5. signing credentials, project identifiers, and service secrets must not be committed to the repository;
6. official signed release artifacts must not be modified after signing.

## Project roles

The signing process distinguishes the following responsibilities:

- **Authors / Committers** contribute source code and documentation through the project's normal GitHub development process.
- **Reviewers** review changes that affect release generation, packaging, security-sensitive configuration, and code-signing workflows.
- **Approvers** authorize production signing requests and official signed releases. Approval authority is restricted to designated OMI maintainers.

A person may hold more than one role when necessary for a small open-source project, but production signing remains an explicit release action and is not treated as an implicit consequence of arbitrary source changes.

## Authentication and access control

Maintainers with access to GitHub release administration or SignPath signing functions must use multi-factor authentication (MFA). Access must be limited to the minimum privileges necessary for the assigned role and removed when no longer required.

Signing-service credentials and tokens must be stored using the secret-management facilities of the trusted CI/CD environment. They must never be embedded in application source code, workflow logs, release assets, or documentation.

## Signing approval

Production code signing requires an approved signing request in accordance with the SignPath Foundation requirements applicable to the project. Signing approval must be associated with an identifiable release artifact and source revision.

A release must not be represented as signed by the project unless its signature can be successfully validated against the expected certificate chain.

## Verification

Users and distributors are encouraged to verify signed Windows packages before installation. A valid signed package should:

- contain a valid Authenticode signature;
- have an intact signature after download;
- identify the certificate holder used by the approved SignPath Foundation signing configuration; and
- correspond to an official Open Manuscript Studio release published by the Open Manuscript Initiative.

Cryptographic signing establishes provenance and integrity. It does not replace source review, vulnerability management, malware scanning, dependency review, or other software-security controls.

## Privacy

The signing workflow is intended to process release artifacts and the technical metadata necessary to establish build provenance and approve signing. OMI must not intentionally include user manuscript content, user credentials, production database contents, or other private application data in signing requests.

The project's use of SignPath is also subject to the privacy and service terms published by SignPath and SignPath Foundation.

## Database and server-side services

The OMI Studio server-side PostgreSQL integration is being developed separately from desktop code signing. The production database connection is **not currently a prerequisite for signing the desktop installers** and must not be represented as completed merely because signed desktop packages are available.

Database credentials and production data are outside the code-signing artifact boundary and must never be included in desktop release artifacts or signing requests.

## Security reports

Security issues affecting Open Manuscript Studio, its build process, or release provenance should be reported privately to the Open Manuscript Initiative maintainers rather than disclosed first in a public issue when exploitation could put users at risk.

## Policy changes

Material changes to the signing provider, certificate ownership, trusted build system, production signing policy, or approval model must be documented here before the changed process is presented as the official OMI release-signing process.

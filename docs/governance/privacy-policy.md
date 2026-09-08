---
title: Privacy Policy
sidebar_label: Privacy Policy
---

# Privacy Policy

Open Manuscript Studio is designed to keep manuscript processing under the user's control. Local manuscript editing and local file storage do not require manuscripts to be transferred to an external service.

Network communication occurs when the user deliberately uses a network-backed feature, such as signing in to a Studio server, synchronizing or opening remote content, connecting an OJS/OMP installation, using ORCID or another configured identity provider, using a configured cloud-storage/integration provider, or requesting another online service offered by the installation.

The Studio must not transmit manuscript content to unrelated third parties merely because the application is installed or opened. A network-backed feature may transmit the data technically required to provide that feature, and the operator of the connected service may have its own privacy policy and terms.

Official release and code-signing workflows process application binaries and technical build metadata. They must not contain user manuscripts, user credentials, production database contents, or other private user data.

Open Manuscript Studio is open source. Users and administrators may inspect the source code and deployment configuration to determine which network services are enabled for a particular installation.

## Account deletion

A signed-in user can permanently delete an Open Manuscript Studio account from the **Account → Delete account** section. The same process is available from the web Studio, so an installed mobile or desktop application is not required. Public instructions are available at [Account deletion](https://openmanuscript.org/account-deletion).

Account deletion removes the live Identity account, password credential, e-mail address, personal profile data, linked sign-in identities, sessions, password-reset and invitation tokens, institution memberships, central-administration grants, stored integration credentials, cloud-connection metadata, cloud-backup index records, direct-submission records, and account-authored administrative audit events that could retain an account identifier or IP address.

Where a shared scholarly review or publication history must remain coherent, the Studio preserves only an anonymized participant record rather than deleting the shared scholarly history. The retained record is detached from the deleted account identity and may be kept indefinitely to preserve scholarly provenance and review integrity.

Encrypted operational backups may retain a pre-deletion copy for no longer than 30 days as part of the hosted service's backup-rotation cycle. Deleted accounts are not restored from such backups for normal service use.

Copies already submitted to an OJS/OMP installation, or files stored in a third-party cloud account controlled by the user or another provider, are not deleted by deleting the OMI Studio account. Those copies are governed by the destination journal, publisher, institution, or cloud provider and must be managed there separately.

If the user is the last owner of an institution or the last central OMI owner, account deletion is blocked until ownership is transferred so that the organization cannot become administratively inaccessible.

Questions about privacy for a specific hosted installation should be directed to that installation's operator. Security-sensitive issues in the Open Manuscript Initiative software should be reported according to the project's SECURITY.md policy.

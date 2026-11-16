---
title: Privacy Policy
sidebar_label: Privacy Policy
---

# Privacy and server-specific notices

This page explains the Open Manuscript software. Each hosted Studio installation
must provide its own complete privacy notice identifying its actual controller.
The project name or software license does not identify the controller of every
independent server. Open **Privacy and personal data** before registration or in
Account on the selected Studio server; the public page is `/?privacy=1` and the
public machine-readable endpoint is `/api/v1/privacy` once the implementation is deployed.

**Official OMI project contact:** [contact@openmanuscript.org](mailto:contact@openmanuscript.org). This replaces personal webmail addresses for project communications and initial privacy enquiries. For a statutory data-subject request, the controller named in the selected server's published notice remains responsible; independently hosted servers may have their own contact addresses.

For the official Studio, use [the server privacy page](https://studio.openmanuscript.org/?privacy=1).
If the server says information has not been supplied, request the notice from its
operator before registering. Source documentation is not proof that a particular
installation has completed its notice or operational duties.

## Technical security and integration audit retention

Studio keeps application-level audit events **in its databases**, independently of
systemd journald or Plesk web-log rotation. The software provides default purge
thresholds of **90 days** for integration operations (including DeepL/AI
input/output SHA-256 digests) and research-module operations, and **180 days**
for central/institutional administrator actions and collaboration access/role
changes. These records can include account identifiers, metadata, IP addresses
and hashes; hashing does not necessarily make them anonymous. The processing
purposes are security and misuse investigation, technical troubleshooting and
access accountability. These periods are design defaults requiring controller
review, not GDPR-imposed periods.

Deletion is **not automatic merely because the code exists**: the operator
must run the reviewed cleanup as a scheduled task and check successful execution.
The official Studio and each institutional operator must publish the retention
they actually apply, its legal basis, backup handling and any justified exceptions.
The task does not delete scientific publication, editorial or peer-review evidence;
those categories require separate policies.

## External identity providers (ORCID, Google and Microsoft)

External sign-in is optional and only applies if enabled on the selected Studio
server. ORCID uses the OpenID Connect `openid` scope to verify an ORCID iD;
an optional name can be returned. Google and Microsoft use
`openid profile email` and may return a provider-specific identifier/issuer,
name, email and verification claim. An e-mail address is not necessarily verified:
the Studio checks available verification evidence and does not automatically
grant institutional privileges based on an external e-mail address. OpenID
authentication can also use an institution-managed identity provider.

Studio saves the necessary linked identity (provider, issuer, subject),
a display name when supplied and limited e-mail/verification metadata.
One-time authorization tokens are exchanged server-side; external passwords
are not received or stored by Studio's login implementation. The provider
may process authentication and technical metadata under its own policy;
the Studio server's controller remains responsible for the collection,
use, security and applicable international-transfer safeguards of data it
receives. No blanket disclaimer can waive that responsibility. See
[ORCID privacy](https://info.orcid.org/privacy-policy/),
[Google privacy](https://policies.google.com/privacy) and
[Microsoft privacy](https://www.microsoft.com/en-us/privacy/privacystatement).
The operator must disclose which providers are enabled and provide an
appropriate contact for rights requests.

## Data and network-backed features

Local editing/storage can keep manuscripts on the user's device. Network-backed
features such as server accounts, shared editing, OJS/OMP, Office, external sign-in,
cloud storage, translation and research integrations may process personal data.
The installation's notice must describe the actual enabled flows, controller,
purposes/legal bases, data categories, recipients, retention criteria, applicable
international transfer safeguards and how to exercise rights or complain.

Do not assume that intentionally connecting an external service waives data
protection obligations. Each institution/operator must identify its role and
relevant processor agreements and transfer arrangements. The software must not
send manuscripts to unrelated services merely because it is installed/opened.
Release/signing workflows must not contain manuscripts or production credentials.

## Exercise your rights

Use the controller's monitored privacy contact in the selected server's notice,
including if you cannot sign in. Depending on the applicable conditions, you can
request access, rectification, erasure, restriction, objection and data portability.
The normal response deadline is one calendar month; a justified extension requires
notice and reasons within the original month. A mail link opens your mail client;
it does not itself send a request or create a tracked case.

Where available, Account → Privacy offers an account-data JSON copy covering the
profile and selected account/sign-in metadata. It contains no authentication
secrets. It is not a full subject-access response or manuscript backup; contact the
controller for additional personal data, shared records and applicable portability.
No blanket consent checkbox replaces a purpose-specific lawful basis.

## Account deletion and shared records

Before final account deletion, the Studio presents an explicit review of deleted account and private working data, potentially retained co-authored manuscripts and review history, external copies, and restoration limits. The user must acknowledge that notice as well as confirm their email. This acknowledgement does **not** waive erasure or objection rights.

For the proposed service-terms wording, purpose-by-purpose lawful-basis matrix and case-by-case assessment of Articles 6(1)(f) and 17(3)(d), read [Account deletion and scholarly records](/docs/governance/account-erasure-and-scholarly-records).

[Account deletion instructions](https://openmanuscript.org/account-deletion) explain
the existing self-service procedure. It removes live account credentials and
profile records and clears account integration metadata. Shared review/publication
history can retain a pseudonymized participant reference and identifiable content.
Pseudonymized records remain personal data where re-identification is possible;
changing a displayed name is not proof of irreversible anonymization.

The controller must assess remaining records, lawful grounds, retention and
applicable erasure exceptions individually. Scholarly provenance alone does not
authorize indefinite retention of all personal data. If the last-owner safeguard
blocks self-service deletion, ask the controller for a verified handover or another
erasure procedure; a request must not be left indefinitely unresolved.

## Backups and external copies

The operator must disclose and enforce the actual backup-retention period and
restrict restoration. Previously published commitments, including a 30-day limit
where promised, must be honoured until lawfully changed. This generic software
page does not configure or extend a hosted installation's backup rotation.

After restoring a backup, the operator must reapply valid deletions/restrictions
and invalidate obsolete credentials before reopening normal service. Copies
already submitted to OJS/OMP or stored at an external provider require that
responsible destination's own process; deleting a Studio account does not remotely
delete every external copy.

## Cookies, security and operational responsibilities

The installation must explain its cookies/device storage. Strictly necessary
storage does not require consent merely because it is a cookie; optional tracking
requires appropriate prior choice, refusal and withdrawal. No optional analytics
is introduced by this privacy implementation.

Operators must maintain proportionate security, tested recovery, retention,
rights-request and breach-response procedures. The project security-reporting
policy is not a substitute for the controller's statutory incident duties.
See [the operator procedure and regulatory scope register](/docs/governance/server-privacy-operations)
for controller setup, requests, deletion, processors, incidents, NIS2, CRA and
accessibility. Actual organizational assessments and operator details remain
necessary before a deployment can claim compliance.

## Legal references

- [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj).
- [EDPB: individual rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en).
- [EDPB: cookie questions](https://www.edpb.europa.eu/contact/frequently-asked-questions_en).

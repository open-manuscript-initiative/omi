---
title: Verified Publication Venue Authority
sidebar_label: Verified Publication Venue Authority
description: Verify a journal or press domain in Open Manuscript Studio with DNS TXT and delegate venue administrator and editor roles without OJS or OMP.
---

# Verified Publication Venue Authority

Open Manuscript Studio can verify the organizational authority of a journal or press even when the publication does not use OJS or OMP.

This feature is designed for journals and publishers that want to use Studio-native peer review and editorial decisions while keeping a verifiable link between the decision and the publication venue.

> **Preview status.** This capability is part of the current Studio development line and remains subject to release-hardening before Stable status.

## What DNS verification proves

DNS TXT verification proves that a Studio account was able to publish a fresh Studio-issued challenge under the publication venue's domain.

It does **not** prove that:

- an article was peer reviewed;
- a particular person is an editor;
- the content of an article is correct;
- the TXT value is secret.

DNS TXT records are public by design. Anyone can query them. The security property comes from the fact that Studio creates a fresh challenge for one authenticated account, binds that challenge to the account server-side, and allows it to be consumed only once before expiry.

Reading an existing TXT record does not grant another Studio account any authority.

## Verification flow

In Studio, open the manuscript's **Extended metadata** and select the publication venue field. When adding a new journal or press, choose:

**Verification method → DNS TXT domain verification**

Enter the publication venue data, for example:

```text
Name: Church History Review
Website: https://journal.example.org
Domain: journal.example.org
ISSN: 1234-5678
```

Studio then creates a one-time DNS challenge similar to:

```text
TXT name:
_omi-publication.journal.example.org

TXT value:
omi-publication-verification=<one-time-token>
```

The challenge is valid for a limited period and can be consumed only by the authenticated Studio account that requested it.

## Adding the TXT record

Create a TXT record in the DNS zone that controls the journal or publisher domain.

A provider that expects only the host label normally uses:

```text
Type: TXT
Host / Name: _omi-publication
Value: omi-publication-verification=<one-time-token>
```

A provider that expects a fully qualified domain name may require:

```text
_omi-publication.journal.example.org
```

For example, in Plesk the usual path is:

**Websites & Domains → DNS Settings → Add Record**

Then use:

```text
Record type: TXT
Domain name / Host: _omi-publication
Value: omi-publication-verification=<one-time-token>
```

Plesk normally appends the zone domain automatically.

A short TTL such as 300 seconds can make initial verification faster, but the provider default is also acceptable.

## Verify in Studio

After publishing the TXT record, return to Studio and select **Verify DNS**.

Studio resolves the TXT record server-side. If the current challenge is present and valid, the publication venue becomes DNS-verified and the account that requested the challenge receives:

```text
DOMAIN_ADMIN
```

The TXT value is not reused as a password or editor credential.

## Multiple domain administrators

A verified publication venue can have more than one domain administrator.

The first `DOMAIN_ADMIN` is created by the successful DNS verification. An active domain administrator can then delegate additional venue roles to existing Studio accounts by e-mail:

- `DOMAIN_ADMIN`
- `EDITOR`
- `EDITOR_IN_CHIEF`

Additional domain administrators do **not** need another DNS TXT record. Their authority comes from explicit delegation inside the already verified publication venue.

All active domain administrators have the same venue-administration authority.

Studio prevents removal of the last active `DOMAIN_ADMIN`. To replace the only administrator, authorize another domain administrator first and then revoke the old membership.

## Venue roles

### DOMAIN_ADMIN

A domain administrator can:

- manage venue authority;
- authorize additional domain administrators;
- authorize editors and editors-in-chief;
- revoke venue memberships, except the last active domain administrator.

A `DOMAIN_ADMIN` role by itself does **not** authorize a scientific editorial decision.

### EDITOR

An editor can record a publisher-verified editorial acceptance when the same Studio account also has the required editor role in the manuscript review workspace and the native review requirements are satisfied.

### EDITOR_IN_CHIEF

An editor-in-chief has the same publisher-verified decision authority, while preserving the distinct venue role in the audit evidence.

A single Studio account may hold multiple roles for the same venue, and the same account may also hold roles at multiple independent publication venues. Authority is always scoped to one venue; being a domain administrator for one journal grants no authority over another.

A single Studio account may hold multiple roles for the same venue, for example:

```text
DOMAIN_ADMIN
EDITOR_IN_CHIEF
```

## Relationship to peer review

The trust chain is intentionally separated:

```text
DNS TXT challenge
        ↓
Verified publication venue
        ↓
DOMAIN_ADMIN delegation
        ↓
EDITOR / EDITOR_IN_CHIEF
        ↓
Completed Studio-native scientific review
        ↓
Exact revision + manuscript-state digest + publication-content digest
        ↓
Verified editorial decision
        ↓
OMI · PEER REVIEW · VERIFIED
```

The visible peer-review seal therefore does not mean that DNS itself proves review.

For a publisher-verified decision, Studio also records an immutable authority snapshot that includes the publication venue, verified domain, DNS verification identity/time and the editor role that was active when the decision was made.

Later DNS or membership changes do not rewrite historical decision provenance.

## Continued domain verification

Studio may periodically revalidate the public DNS assertion before a new publisher-verified decision is recorded.

This later check means:

> the verified domain is still publicly asserting the Studio venue relationship.

It does not mean:

> the account possesses a secret stored in DNS.

DNS remains a public organizational-control signal.

## OJS and OMP

A publication venue that already uses the Studio OJS or OMP integration does not need the DNS path for normal PKP-bound workflow authority.

The DNS verification path exists primarily for journals and presses that do not use OJS/OMP but still need verifiable publication-venue authority inside Studio.

## Security properties

The implementation is designed so that:

- a DNS challenge is bound to the authenticated requesting account;
- a challenge can be consumed only while it is `PENDING`;
- a challenge is single-use;
- another account cannot consume a publicly visible challenge;
- one verified venue is not silently reassigned to a different domain;
- additional administrators are delegated inside the verified venue rather than by creating independent DNS claims;
- the last active domain administrator cannot be removed;
- venue administration and manuscript editorial permission remain separate authorization planes;
- reviewer identities and confidential reports are not placed in public publication-assurance metadata.

## Related documentation

- [Studio Deployment Modes](./studio-deployment-modes)
- [Integration Architecture](./architecture)
- [OJS Plugin](./ojs-plugin)
- [OMP Plugin](./omp-plugin)
- [Cross-platform Studio Architecture](../foundations/cross-platform-studio)

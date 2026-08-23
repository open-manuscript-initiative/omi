---
id: institutional-administration
title: Institutional and Central Administration
sidebar_label: Institutional Administration
keywords:
  - institutional administration
  - central administration
  - institution admin API
  - OIDC
  - SAML
  - roles
  - API credentials
  - audit log
---

# Institutional and Central Administration

Open Manuscript Studio now separates personal scholarly identity, institution membership, institution administration, and OMI central administration into distinct authorization planes.

This separation is intentional: **administrative authority does not imply access to manuscripts, reviews, editorial decisions, or other scholarly content**. Content access remains governed by the manuscript/workspace and publishing-workflow permission models.

## Authorization planes

### Personal Studio account

A Studio account is the durable identity used across browser, desktop, and mobile clients. It can have password and federated sign-in methods, personal profile information, and one or more institutional memberships.

### Institution membership

Each membership connects one Studio account to one institution and carries one of three roles:

- `MEMBER` — ordinary institutional affiliation;
- `ADMIN` — institution administrator;
- `OWNER` — institution owner with authority over owner-level role changes.

Institution data such as the organization name and ROR identifier is shared. Department, position, institutional e-mail, connected institutional identity, and default-affiliation state belong to the membership rather than to the durable personal account.

A user may belong to multiple institutions, while one membership can be selected as the default affiliation.

### OMI central administration

Central administration is stored separately from institution membership. A central administrator has either:

- `ADMIN` — cross-institution operational administration;
- `OWNER` — central administrator management in addition to normal central administration.

An institution `OWNER` is **not** automatically a central administrator, and a central administrator is not automatically a member or owner of any institution.

## Institution administrator sign-in

Institutional deployments can expose a dedicated institution-administrator sign-in mode while using the same Studio account.

Password administrator sign-in is accepted only if the authenticated account has an active `ADMIN` or `OWNER` membership.

Federated administrator sign-in can use configured Google, Microsoft, or institutional OpenID Connect providers. After the external sign-in completes, Studio verifies the institutional administrator context on the server before accepting the administrative session.

ORCID is intentionally not an institution-administrator credential. ORCID remains a personal scholarly identifier and author identity mechanism.

## Institution administrator bootstrap

Managed institutional deployments may define an initial institution and administrator allow-list:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

The e-mail allow-list alone does not grant ownership. Automatic initial `OWNER` provisioning requires the matching Studio account to have a linked OIDC or SAML identity. Password-only accounts are never promoted automatically.

## Central administrator bootstrap

The first central administrator can be bootstrapped with:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

As with institution bootstrap, the allow-listed account must already have a linked OIDC or SAML identity before it can become the initial central `OWNER`.

This prevents a password-only account or an e-mail-address match from silently obtaining cross-institution administrative authority.

## Central administration capabilities

The human central-administration API is exposed below `/api/central-admin` and supports:

- central administrator context;
- institution list, creation, updates, activation and disabling;
- central administrator management (`OWNER` only);
- institution administrator assignment and removal;
- institution Admin API credential creation and revocation;
- administration audit-log retrieval.

The application exposes these controls in Account settings only for users with a central administration grant.

The implementation protects the last central `OWNER` and the last institution `OWNER` from accidental removal or demotion.

## Institution Admin API

Institutions can also receive machine credentials for automation. These credentials are bound to exactly one institution and use explicit scopes.

Raw tokens use the form:

```text
omi_ia_...
```

The complete token is returned only once when it is created. Studio stores only a SHA-256 hash, together with a non-secret prefix for identification, expiry/revocation state, and usage metadata.

Initial scopes are:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

The first v1 machine endpoints are:

```text
GET   /api/institution-admin/v1/context
GET   /api/institution-admin/v1/members
PATCH /api/institution-admin/v1/members/:membershipId/role
```

Machine credentials cannot assign, remove, promote, or demote `OWNER` roles. Ownership changes require a human institution owner or central administrator.

The `integrations:read` and `integrations:write` scopes establish the authorization boundary for institution-scoped integration administration. Individual integration endpoints can be added without expanding a credential beyond its institution.

## Audit model

Administration actions are recorded in append-only audit events. Depending on the action, an audit record can include:

- human administrator or institution API credential;
- institution;
- action name;
- target type and target identifier;
- non-secret action metadata;
- client IP address when available;
- creation time.

Passwords, raw API tokens, OAuth secrets, manuscript text, and provider secrets must not be written to the administration audit log.

## Security boundaries

The administration architecture follows these rules:

1. Institution roles and central roles are stored separately.
2. No administrator role grants manuscript/editorial-content access by itself.
3. Federated identities are keyed by issuer and subject rather than mutable display names.
4. Initial privileged bootstrap requires a linked OIDC/SAML identity in addition to an e-mail allow-list.
5. Institution API tokens are institution-bound, scope-bound, expiring/revocable, and stored only as hashes.
6. The machine API cannot alter owner roles.
7. Central and institution last-owner protections prevent accidental administrative lockout.
8. Administrative actions are auditable without storing secrets or scholarly content.

## Relationship to deployment modes

The same Studio client code can operate against personal or institutional deployments. Deployment mode selects server-managed external-service credentials and the institutional administration surface; it does not change the OMI manuscript model or document portability.

See [Studio deployment modes](./studio-deployment-modes.md) for credential routing and deployment-level configuration, and [Studio implementation status](../governance/studio-implementation-status.md) for the current reference-implementation maturity snapshot.

# Studio deployment modes

Open Manuscript Studio uses one codebase and one family of web, desktop, and mobile clients. A server-side deployment profile determines who manages external-service credentials and whether institution-administration surfaces are enabled.

## Personal mode

```dotenv
DEPLOYMENT_MODE=personal
```

Personal mode is intended for standalone authors and individual users. Studio never asks for an ORCID password. ORCID authentication takes place on ORCID's own authorization page through OAuth/OpenID Connect.

Personal mode uses the Personal/OMI-managed credential namespace:

```dotenv
ORCID_CLIENT_ID=APP-...
ORCID_CLIENT_SECRET=...
ORCID_REDIRECT_URI=https://studio.example.org/api/auth/orcid/callback
```

The target architecture remains OMI Identity brokering the ORCID flow so individual authors do not need to obtain or maintain ORCID API credentials themselves.

## Institutional mode

```dotenv
DEPLOYMENT_MODE=institutional
```

Institutional mode is intended for publishers, journals, universities, repositories, research infrastructures, and managed OJS/OMP installations. The institution uses a separate organization-owned credential namespace:

```dotenv
INSTITUTIONAL_ORCID_CLIENT_ID=APP-...
INSTITUTIONAL_ORCID_CLIENT_SECRET=...
INSTITUTIONAL_ORCID_REDIRECT_URI=https://publisher.example.org/api/auth/orcid/callback
INSTITUTIONAL_ORCID_API_TYPE=public
```

`INSTITUTIONAL_ORCID_API_TYPE` accepts `public` or `member`. Integration secrets remain server-side and must never be exposed through browser storage, frontend build variables, or client-side configuration.

Institutional deployments can also define the organization and initial administrator bootstrap:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

A configured administrator e-mail does not by itself grant institution ownership. The matching Studio account must already have a linked OIDC or SAML identity before automatic initial `OWNER` provisioning can occur.

## Credential isolation

Credential routing is deterministic and controlled by `DEPLOYMENT_MODE`:

- `personal` uses only `ORCID_CLIENT_ID`, `ORCID_CLIENT_SECRET`, and `ORCID_REDIRECT_URI`.
- `institutional` uses only the `INSTITUTIONAL_ORCID_*` credential set.
- Institutional mode never silently falls back to Personal/OMI-owned credentials.
- If the active credential set is missing, ORCID is reported as unconfigured.
- A partial active credential pair causes server configuration validation to fail.
- Studio never exposes either client secret through its runtime status API.

The ORCID network is selected independently:

```dotenv
ORCID_ENVIRONMENT=sandbox
```

or:

```dotenv
ORCID_ENVIRONMENT=production
```

This permits safe Institutional testing against ORCID Sandbox before production activation.

## Federated account sign-in

Studio can additionally expose configured Google, Microsoft, and generic/institutional OpenID Connect providers. These use Authorization Code flow with PKCE and server-side validation of state, nonce, issuer, audience and signing keys.

A previously unseen external identity can create a Studio account when the provider supplies the required verified identity claims. An existing Studio account is **not** automatically linked merely because the provider reports the same e-mail address; linking requires an explicit signed-in account action.

Institutional administrator sign-in can use configured OIDC providers, but the server still verifies that the account has an active institution `ADMIN` or `OWNER` membership before an administrative context is accepted.

## ORCID security model

The deployment profile does not change the authentication rule: Studio never collects, transmits, or stores the user's ORCID password. The user authenticates directly with ORCID, including two-factor authentication when enabled, and Studio receives only the OAuth/OpenID Connect result.

Personal and Institutional modes differ in credential ownership and administration, not in user-password handling.

ORCID is deliberately not used as an institution-administrator credential. It remains a personal scholarly identifier and can participate in author identity verification and cryptographic signing workflows.

## Institutional profiles and roles

The current Studio Identity model separates durable personal account data from organization-specific memberships.

An account can have multiple institution memberships with one default affiliation. Institution roles are:

- `MEMBER`;
- `ADMIN`;
- `OWNER`.

Organization name and ROR identifier are shared institution data. Department, position, institutional e-mail, connected institutional identity and default-affiliation state belong to the membership.

Institution administrator endpoints enforce these roles server-side. The last institution `OWNER` is protected from accidental removal or demotion.

See [Institutional and Central Administration](./institutional-administration.md) for the complete privilege and API model.

## Central OMI administration

Cross-institution administration is a separate privilege plane and is never inferred from institution membership.

Initial central administration can be bootstrapped with:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

As with institution bootstrap, the account must have a linked OIDC or SAML identity before it can become an initial central `OWNER`.

Central administrators can manage institutions, institution administrators, institution API credentials and administration audit records. These privileges do **not** grant manuscript, review, or editorial-content access.

## Institution Admin API

Institution-scoped automation uses dedicated machine credentials rather than human session tokens. Each credential belongs to exactly one institution, has explicit scopes, can expire or be revoked, and is stored only as a hash after one-time token display.

Current scopes include:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

Machine credentials cannot change `OWNER` roles.

## Runtime visibility

The active deployment profile is exposed by the Studio backend and shown in the application footer as `OMI Studio · Personal` or `OMI Studio · Institutional`. When ORCID uses the Sandbox network, the footer additionally displays `ORCID Sandbox`.

`GET /api/auth/providers` also exposes non-secret deployment and provider metadata. For example:

```json
{
  "deployment": {
    "mode": "institutional",
    "label": "Institutional"
  },
  "providers": {
    "orcid": {
      "enabled": true,
      "environment": "sandbox",
      "credentialSource": "institutional",
      "apiType": "public"
    }
  }
}
```

## Design constraints

- Deployment mode is controlled by the server, not by browser state.
- The document model and portable OMI packages remain identical in both modes.
- The same Studio binaries can be used for Personal and Institutional deployments.
- ORCID passwords are never handled by Studio.
- Sandbox and production ORCID identities remain separated by issuer.
- Institutional and central administrator privileges are separate from manuscript/editorial permissions.
- Institution roles and central roles are separate authorization planes.
- Initial privileged bootstrap requires both an allow-listed account and linked OIDC/SAML identity.
- Institution machine API credentials are scope-bound and institution-bound.
- Personal mode may route authentication through OMI Identity without changing the user-facing ORCID sign-in interaction.

## Implementation status

Deployment-specific ORCID credential routing, federated OIDC sign-in, institutional memberships, institution administrator authentication, central administration, scoped institution Admin API credentials and administration audit events are implemented in the current Studio development line.

Production use still depends on installation-specific Identity database migrations, server configuration, provider registration and the normal security/release hardening of the deployment.

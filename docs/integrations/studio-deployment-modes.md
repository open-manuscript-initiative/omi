# Studio deployment modes

Open Manuscript Studio uses one codebase and one family of web, desktop, and mobile clients. A server-side deployment profile determines who manages external-service credentials and how organization-level integrations are expected to evolve.

## Personal mode

```dotenv
DEPLOYMENT_MODE=personal
```

Personal mode is intended for standalone authors and individual users. The Studio must never ask the user for an ORCID password. ORCID authentication takes place on ORCID's own authorization page through OAuth/OpenID Connect.

The target architecture for Personal mode is:

```text
Open Manuscript Studio
        │
        ▼
    OMI Identity
        │
        ▼
 ORCID OAuth/OIDC
        │
        ▼
 User ORCID account
```

In this model, centrally managed OMI Identity credentials can broker the ORCID flow so individual authors do not need to obtain or maintain ORCID API credentials themselves.

## Institutional mode

```dotenv
DEPLOYMENT_MODE=institutional
```

Institutional mode is intended for publishers, journals, universities, repositories, research infrastructures, and managed OJS/OMP installations. The institution can use organization-owned integration credentials, including ORCID Public API or Member API credentials where appropriate.

The target architecture is:

```text
Open Manuscript Studio
        │
        ▼
Institution-managed integration
        │
        ├── ORCID Public API
        ├── ORCID Member API
        ├── OJS / OMP
        └── other managed services
```

Integration secrets remain server-side. They must not be exposed through browser storage, frontend build variables, or client-side configuration.

## ORCID security model

The deployment profile does not change the basic ORCID authentication rule: Studio never collects, transmits, or stores the user's ORCID password. The user authenticates directly with ORCID, including two-factor authentication when enabled, and Studio receives only the OAuth/OpenID Connect result.

Personal and Institutional modes therefore differ primarily in credential ownership and administration, not in how the user's ORCID password is handled.

## Runtime visibility

The active deployment profile is exposed by the Studio backend and can be shown in the application footer:

```text
OMI Studio · Personal
```

or:

```text
OMI Studio · Institutional
```

When ORCID is configured against the Sandbox network, the footer may additionally display:

```text
ORCID Sandbox
```

This is intentionally a visible test-state indicator. Production ORCID does not need an equivalent warning badge.

## Configuration

Standalone author installation:

```dotenv
DEPLOYMENT_MODE=personal
```

Publisher or university installation:

```dotenv
DEPLOYMENT_MODE=institutional
```

An institutional production configuration may later include:

```dotenv
NODE_ENV=production
DEPLOYMENT_MODE=institutional
ORCID_ENVIRONMENT=production
ORCID_CLIENT_ID=APP-...
ORCID_CLIENT_SECRET=...
ORCID_REDIRECT_URI=https://example.org/api/auth/orcid/callback
```

For test deployments, `ORCID_ENVIRONMENT=sandbox` should remain explicit until production credentials are approved and installed.

## Design constraints

- Deployment mode is controlled by the server, not by browser state.
- The document model and `.omi.json` portability remain identical in both modes.
- The same Studio binaries can be used for Personal and Institutional deployments.
- ORCID passwords are never handled by Studio.
- Sandbox and production ORCID identities remain separated by issuer.
- Institutional credential management should be protected by role-based access control.
- Personal mode may route authentication through OMI Identity without changing the user-facing ORCID sign-in interaction.

## Implementation status

The deployment-mode contract is being introduced incrementally. The first implementation exposes `personal` and `institutional` as stable runtime profiles and reports the active mode to the user interface. Credential-source routing is intentionally separated into a later implementation step so the existing, working ORCID OAuth/OpenID Connect flow can remain stable during the transition.

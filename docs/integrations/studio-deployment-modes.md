# Studio deployment modes

Open Manuscript Studio uses one codebase and one family of web, desktop, and mobile clients. A server-side deployment profile determines who manages external-service credentials.

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

## ORCID security model

The deployment profile does not change the authentication rule: Studio never collects, transmits, or stores the user's ORCID password. The user authenticates directly with ORCID, including two-factor authentication when enabled, and Studio receives only the OAuth/OpenID Connect result.

Personal and Institutional modes differ in credential ownership and administration, not in user-password handling.

## Runtime visibility

The active deployment profile is exposed by the Studio backend and shown in the application footer as `OMI Studio · Personal` or `OMI Studio · Institutional`. When ORCID uses the Sandbox network, the footer additionally displays `ORCID Sandbox`.

`GET /api/auth/providers` also exposes non-secret ORCID metadata such as:

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
- The document model and `.omi.json` portability remain identical in both modes.
- The same Studio binaries can be used for Personal and Institutional deployments.
- ORCID passwords are never handled by Studio.
- Sandbox and production ORCID identities remain separated by issuer.
- Institutional credential management must remain server-side and should be protected by role-based access control when an administration UI is introduced.
- Personal mode may route authentication through OMI Identity without changing the user-facing ORCID sign-in interaction.

## Implementation status

Deployment-specific ORCID credential routing is now implemented in the Studio reference implementation. The next institutional layer can add role-protected administration for organization-owned credentials without changing the client binaries or the ORCID user-authentication model.

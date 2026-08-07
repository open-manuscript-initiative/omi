# Open Manuscript Studio Integration for OJS 3.5 — 1.1.0

This generic plugin is the first implementation of the **OMI Integration API v1 / OJS profile**.

## Implemented capabilities

- `launch`
- `metadata.read`
- `contributors.read`
- `files.read` (metadata/list only; binary transfer is intentionally not advertised yet)
- HMAC-SHA256 signed, short-lived launch assertions
- stable OJS installation identity
- OJS journal → OMI context mapping
- OJS submission → OMI submission mapping
- settings UI with English, Hungarian and German locale files

## Security model

The launch assertion is scoped to one journal, submission and OJS user and expires after the configured TTL. Studio can reuse the assertion during the initial import by sending:

`Authorization: OMI <payload>.<signature>`

The API does not expose OJS database credentials or private file-system paths.

## Adapter endpoints

Inside a journal context:

- `/omiIntegration/capabilities`
- `/omiIntegration/submission`
- `/omiIntegration/contributors`
- `/omiIntegration/files`

The last three require a signed launch assertion.

## Install

Upload the `.tar.gz` package in OJS: **Settings → Website → Plugins → Upload A New Plugin** (wording may vary by locale), enable the generic plugin, and open its settings.

Configure the Studio URL and copy the same shared secret to the Studio OJS connector configuration. A stable installation ID is recommended for production.

## Deferred to later releases

Binary file transfer, revision upload, review-assignment endpoints, structured review return, and publication export are deliberately not advertised until their OJS 3.5 authorization and workflow mappings are implemented and tested.

/** Separate source/build identity from published, downloadable releases.
 * A package.json version bump does not publish signed binaries or app-store updates.
 * Promote STUDIO_PUBLISHED_VERSION only when release approval and immutable assets exist.
 */
export const STUDIO_PUBLISHED_VERSION = '0.3.0-beta.13';
export const STUDIO_SOURCE_VERSION = '1.0.0-rc.4';
export const STUDIO_WEB_VERSION = '1.0.0-rc.2';
export const STUDIO_ANDROID_VERSION = '1.0.0-rc.2';
/** Store MSIX version, independent of the public direct desktop installers. */
export const STUDIO_WINDOWS_STORE_VERSION = '1.0.0.0';
/** Store search URL; no verified product-specific Store URL is available. */
export const STUDIO_WINDOWS_STORE_SEARCH_URL = 'https://apps.microsoft.com/search?query=Open%20Manuscript%20Studio';
export const STUDIO_PUBLISHED_RELEASE_NOTES = `/docs/studio/releases/${STUDIO_PUBLISHED_VERSION}`;
export const STUDIO_SOURCE_RELEASE_NOTES = `/docs/studio/releases/${STUDIO_SOURCE_VERSION}`;
export const STUDIO_PUBLISHED_DOWNLOAD_BASE = `https://github.com/open-manuscript-initiative/open-manuscript-studio/releases/download/v${STUDIO_PUBLISHED_VERSION}`;
export const STUDIO_RC_REVIEWED_SHA = '0a0ed53e4e61033b370de8280cfe1d5d4794bded';
export const STUDIO_RC_EVIDENCE_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/44704657227';
export const STUDIO_RC_BUILD_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/44704656922';
export const STUDIO_ANDROID_RC_DOWNLOAD_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/44704656922/artifacts/14615141484';

/** Prepared Windows package identity; Store rollout remains independently verified. */
export const STUDIO_WINDOWS_PACKAGE_VERSION = '1.0.3.0';
/** Date when website source/status was checked; not a binary release date. */
export const STUDIO_SNAPSHOT_DATE = '2026-11-26';
/** Merged source-code change, not yet a published 1.0 installer. */
export const STUDIO_OFFICE_SEPARATION_PR_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/971';

/** Version preparation PR; not a published or merged source version until independently verified. */
export const STUDIO_NEXT_SOURCE_VERSION = '1.0.0-rc.5';
export const STUDIO_NEXT_SOURCE_RELEASE_NOTES = `/docs/studio/releases/${STUDIO_NEXT_SOURCE_VERSION}`;
export const STUDIO_NEXT_SOURCE_PR_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1089';

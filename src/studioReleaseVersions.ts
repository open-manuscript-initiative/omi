/** Separate source/build identity from published, downloadable releases.
 * A package.json version bump does not publish signed binaries or app-store updates.
 * Promote STUDIO_PUBLISHED_VERSION only when release approval and immutable assets exist.
 */
export const STUDIO_PUBLISHED_VERSION = '0.3.0-beta.13';
export const STUDIO_SOURCE_VERSION = '1.0.0-rc.1';
export const STUDIO_WEB_VERSION = '1.0.0-rc.1';
export const STUDIO_ANDROID_VERSION = '1.0.0-rc.1';
/** Store MSIX version, independent of the public direct desktop installers. */
export const STUDIO_WINDOWS_STORE_VERSION = '1.0.0.0';
/** Store search URL; no verified product-specific Store URL is available. */
export const STUDIO_WINDOWS_STORE_SEARCH_URL = 'https://apps.microsoft.com/search?query=Open%20Manuscript%20Studio';
export const STUDIO_PUBLISHED_RELEASE_NOTES = `/docs/studio/releases/${STUDIO_PUBLISHED_VERSION}`;
export const STUDIO_SOURCE_RELEASE_NOTES = `/docs/studio/releases/${STUDIO_SOURCE_VERSION}`;
export const STUDIO_PUBLISHED_DOWNLOAD_BASE = `https://github.com/open-manuscript-initiative/open-manuscript-studio/releases/download/v${STUDIO_PUBLISHED_VERSION}`;
export const STUDIO_RC_REVIEWED_SHA = 'e1200268ad549c0a40ace8724715cd2405e9d03c';
export const STUDIO_RC_EVIDENCE_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/41745224810';
export const STUDIO_RC_BUILD_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/41741830930';
export const STUDIO_ANDROID_RC_DOWNLOAD_URL = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/41741830930/artifacts/13282507414';

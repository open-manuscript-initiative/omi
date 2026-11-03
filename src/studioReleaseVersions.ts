/** Separate source/build identity from published, downloadable releases.
 * A package.json version bump does not publish signed binaries or app-store updates.
 * Promote STUDIO_PUBLISHED_VERSION only when release approval and immutable assets exist.
 */
export const STUDIO_PUBLISHED_VERSION = '0.3.0-beta.12';
export const STUDIO_SOURCE_VERSION = '0.3.0-beta.13';
export const STUDIO_PUBLISHED_RELEASE_NOTES = `/docs/studio/releases/${STUDIO_PUBLISHED_VERSION}`;
export const STUDIO_SOURCE_RELEASE_NOTES = `/docs/studio/releases/${STUDIO_SOURCE_VERSION}`;

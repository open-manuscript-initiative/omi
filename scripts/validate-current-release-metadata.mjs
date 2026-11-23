import { readFile } from 'node:fs/promises';

const expected = {
  studio: '0.3.0-beta.13',
  stagedStudio: '1.0.0-rc.2',
  sourceStudio: '1.0.0-rc.3',
  windowsPrepared: '1.0.2.0',
  windowsStore: '1.0.0.0',
  ojs: 'v1.8.7',
  omp: 'v1.5.1',
  iosMarketing: '0.3.0',
  iosBuild: '25',
  windowsMsi: '0.3.0.13',
  androidFloor: '1212',
  iosSourceMarketing: '1.0.0',
  iosSourceBuild: '27',
};

const releaseNotesFiles = [
  `docs/studio/releases/${expected.studio}.md`,
  ...['hu', 'de'].map((locale) =>
    `i18n/${locale}/docusaurus-plugin-content-docs/current/studio/releases/${expected.studio}.md`),
];

const stagedReleaseNotesFiles = [
  `docs/studio/releases/${expected.stagedStudio}.md`,
  ...['hu', 'de'].map((locale) =>
    `i18n/${locale}/docusaurus-plugin-content-docs/current/studio/releases/${expected.stagedStudio}.md`),
];

const currentFacingFiles = [
  ...stagedReleaseNotesFiles,
  ...['en', 'hu', 'de'].map(locale => locale === 'en'
    ? `docs/studio/releases/${expected.sourceStudio}.md`
    : `i18n/${locale}/docusaurus-plugin-content-docs/current/studio/releases/${expected.sourceStudio}.md`),
  'src/studioReleaseVersions.ts',
  'src/components/StudioReleaseStatus/index.tsx',
  'src/components/RecentStudioDevelopments/index.tsx',
  'docs/studio/office-separation.md',
  'docs/studio/updates/2026-11-23.md',
  ...['hu', 'de'].flatMap((locale) => [
    `i18n/${locale}/docusaurus-plugin-content-docs/current/studio/office-separation.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/studio/updates/2026-11-23.md`,
  ]),
  ...releaseNotesFiles,
  'README.md',
  'src/pages/index.tsx',
  'src/pages/studio.tsx',
  'src/i18n/publicPages.ts',
  'docs/governance/roadmap-to-omi-1.0.md',
  'docs/governance/studio-implementation-status.md',
  'docs/integrations/ojs-plugin.md',
  'docs/integrations/omp-plugin.md',
  'docs/foundations/ios-ipados-studio.md',
  'docs/foundations/cross-platform-studio.md',
  'docs/foundations/publication-styles-and-publisher-profiles.md',
  'docs/foundations/word-like-manuscript-editing.md',
  'docs/integrations/studio-native-editorial-workflow.md',
  'docs/specifications/reference-library-registry.md',
  'docs/studio/visual-tour.md',
  'docs/foundations/studio-live-collaboration.md',
  ...['bg', 'cs', 'da', 'de'].flatMap((locale) => [
    `i18n/${locale}/docusaurus-plugin-content-docs/current/governance/roadmap-to-omi-1.0.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/governance/studio-implementation-status.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/integrations/ojs-plugin.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/integrations/omp-plugin.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/foundations/ios-ipados-studio.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/foundations/cross-platform-studio.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/foundations/publication-styles-and-publisher-profiles.md`,
  ]),
];

const staleProductVersions = [
  '0.3.0-beta.4',
  '0.3.0-beta.3',
  '0.1.0-alpha.4',
  '0.1.0-beta.3',
  '0.1.0-beta.4',
  '0.1.0-beta.5',
  '0.1.1-beta.1',
  '0.2.0-beta.1',
  '0.2.0-beta.2',
  '0.2.0-beta.3',
  '0.2.0-beta.4',
  'v1.2.1',
  'v1.2.6',
  '1.2.1',
  '1.2.6',
];

const staleCurrentCopyMarkers = [
  '0.3.0-beta.4 public beta',
  '0.1.0-beta.4 public beta',
  '0.1.0-beta.5 candidate',
  'beta.5 validation',
  'beta.5-Validierung',
  'beta.5 validálása',
  'Current alpha capabilities',
  'Az alpha jelenlegi képességei',
  'Android Google Play preparation',
  'Android és Google Play előkészítés',
];

const contents = new Map();
for (const path of currentFacingFiles) {
  contents.set(path, await readFile(path, 'utf8'));
}

const failures = [];
for (const [path, content] of contents) {
  for (const version of staleProductVersions) {
    if (content.includes(version)) {
      failures.push(`${path}: stale current-product version ${version}`);
    }
  }
  for (const marker of staleCurrentCopyMarkers) {
    if (content.includes(marker)) {
      failures.push(`${path}: stale current-product wording "${marker}"`);
    }
  }
}

const required = [
  ['README.md', expected.studio],
  ['README.md', expected.stagedStudio],
  ['src/studioReleaseVersions.ts', '0a0ed53e4e61033b370de8280cfe1d5d4794bded'],
  ['src/studioReleaseVersions.ts', '44704657227'],
  ['src/studioReleaseVersions.ts', "STUDIO_SNAPSHOT_DATE = '2026-11-23'"],
  ['src/studioReleaseVersions.ts', 'STUDIO_OFFICE_SEPARATION_PR_URL'],
  ['src/components/StudioReleaseStatus/index.tsx', 'STUDIO_OFFICE_SEPARATION_PR_URL'],
  ['src/components/RecentStudioDevelopments/index.tsx', '/docs/studio/updates/2026-11-23'],
  ['src/pages/index.tsx', '/docs/studio/updates/2026-11-23'],
  ['src/pages/studio.tsx', '/docs/studio/updates/2026-11-23'],
  ['src/studioReleaseVersions.ts', `STUDIO_WINDOWS_STORE_VERSION = '${expected.windowsStore}'`],
  ['src/pages/studio.tsx', 'STUDIO_WINDOWS_STORE_SEARCH_URL'],
  ['src/pages/studio.tsx', 'directWindowsTitle'],
  ['src/pages/index.tsx', 'STUDIO_WINDOWS_STORE_VERSION'],
  ['src/studioReleaseVersions.ts', `STUDIO_WEB_VERSION = '${expected.stagedStudio}'`],
  ['src/studioReleaseVersions.ts', `STUDIO_ANDROID_VERSION = '${expected.stagedStudio}'`],
  ['src/studioReleaseVersions.ts', '/actions/runs/44704656922/artifacts/14615141484'],
  ['src/pages/studio.tsx', 'href={STUDIO_ANDROID_RC_DOWNLOAD_URL}'],
  ['src/pages/index.tsx', 'isAndroid ? STUDIO_ANDROID_RC_DOWNLOAD_URL'],
  ['src/pages/studio.tsx', 'STUDIO_PUBLISHED_DOWNLOAD_BASE'],
  ['src/pages/index.tsx', '<StudioReleaseStatus />'],
  ['src/pages/studio.tsx', '<StudioReleaseStatus />'],
  ['src/components/StudioReleaseStatus/index.tsx', 'Preview'],
  ['src/components/StudioReleaseStatus/index.tsx', 'Web and Android RC available'],
  ['src/studioReleaseVersions.ts', `STUDIO_PUBLISHED_VERSION = '${expected.studio}'`],
  ['src/studioReleaseVersions.ts', `STUDIO_SOURCE_VERSION = '${expected.sourceStudio}'`],
  ['src/studioReleaseVersions.ts', `STUDIO_WINDOWS_PACKAGE_VERSION = '${expected.windowsPrepared}'`],
  ['src/pages/index.tsx', 'STUDIO_SOURCE_VERSION'],
  ['src/pages/studio.tsx', 'STUDIO_SOURCE_VERSION'],
  ['src/pages/index.tsx', 'STUDIO_PUBLISHED_VERSION'],
  ['src/pages/studio.tsx', 'STUDIO_PUBLISHED_VERSION'],
  ['docs/governance/studio-implementation-status.md', expected.stagedStudio],
  ['src/pages/index.tsx', expected.studio],
  ['src/pages/studio.tsx', expected.studio],
  ['docs/governance/studio-implementation-status.md', expected.studio],
  ['docs/governance/roadmap-to-omi-1.0.md', expected.studio],
  ['docs/studio/visual-tour.md', expected.studio],
  ['docs/foundations/studio-live-collaboration.md', expected.studio],
  ['docs/foundations/studio-live-collaboration.md', 'explicitly accepts'],
  ['docs/foundations/studio-live-collaboration.md', 'OMI-SPEC-320@0.3.0'],
  ['docs/integrations/studio-native-editorial-workflow.md', expected.studio],
  ['docs/integrations/ojs-plugin.md', expected.ojs],
  ['docs/integrations/omp-plugin.md', expected.omp],
  ['docs/foundations/ios-ipados-studio.md', expected.studio],
  ['docs/foundations/ios-ipados-studio.md', `App Store short version | \`${expected.iosSourceMarketing}\``],
  ['docs/foundations/ios-ipados-studio.md', `App Store build number | \`${expected.iosSourceBuild}\``],
];

for (const [path, value] of required) {
  if (!contents.get(path)?.includes(value)) {
    failures.push(`${path}: expected current release marker ${value}`);
  }
}

for (const locale of ['en', 'hu', 'de']) {
  const root = locale === 'en' ? 'docs' : `i18n/${locale}/docusaurus-plugin-content-docs/current`;
  for (const doc of ['studio/office-separation.md', 'studio/updates/2026-11-23.md']) {
    const path = `${root}/${doc}`;
    const content = contents.get(path);
    for (const marker of [expected.studio, expected.stagedStudio, expected.windowsStore, expected.ojs, expected.omp, '971']) {
      if (!content?.includes(marker)) failures.push(`${path}: missing current channel or separation marker ${marker}`);
    }
  }
}
for (const locale of ['en','hu','de']) {
  const root = locale === 'en' ? 'docs' : `i18n/${locale}/docusaurus-plugin-content-docs/current`;
  const file = `${root}/studio/releases/${expected.sourceStudio}.md`;
  const body = contents.get(file);
  for (const marker of [expected.sourceStudio, expected.stagedStudio, expected.studio, expected.windowsPrepared, expected.windowsStore, expected.ojs, expected.omp, '971', '972']) {
    if (!body?.includes(marker)) failures.push(`${file}: missing RC3 provenance marker ${marker}`);
  }
}
for (const path of stagedReleaseNotesFiles) {
  if (!contents.get(path)?.includes(expected.stagedStudio)) {
    failures.push(`${path}: expected staged Studio version ${expected.stagedStudio}`);
  }
}

for (const path of releaseNotesFiles) {
  for (const value of [expected.studio, expected.windowsMsi, expected.androidFloor, `| \`${expected.iosBuild}\` |`]) {
    if (!contents.get(path)?.includes(value)) {
      failures.push(`${path}: expected release packaging marker ${value}`);
    }
  }
}

for (const locale of ['bg', 'cs', 'da', 'de']) {
  const iosPath = `i18n/${locale}/docusaurus-plugin-content-docs/current/foundations/ios-ipados-studio.md`;
  const statusPath = `i18n/${locale}/docusaurus-plugin-content-docs/current/governance/studio-implementation-status.md`;
  if (!contents.get(iosPath)?.includes(expected.studio)) {
    failures.push(`${iosPath}: expected current Studio version ${expected.studio}`);
  }
  if (!contents.get(iosPath)?.includes(`| \`${expected.iosSourceBuild}\` |`)) {
    failures.push(`${iosPath}: expected RC source iOS build number ${expected.iosSourceBuild}`);
  }
  if (!contents.get(statusPath)?.includes('Yjs')) {
    failures.push(`${statusPath}: expected live-collaboration feature status`);
  }
}

for (const locale of ['en', 'hu', 'de']) {
  const root = locale === 'en' ? 'docs' : `i18n/${locale}/docusaurus-plugin-content-docs/current`;
  for (const guide of ['publication-editor', 'notes-and-formatting', 'research-projects', 'updates/2026-11-20']) {
    const path = `${root}/studio/${guide}.md`;
    const content = await readFile(path, 'utf8');
    if (!content.includes('/docs/studio/')) failures.push(`${path}: missing related usage guidance`);
  }
  const path = `${root}/studio/releases/${expected.stagedStudio}.md`;
  const content = await readFile(path, 'utf8');
  for (const marker of [expected.stagedStudio, expected.studio, '1.0.1.0', expected.ojs, expected.omp,
    '0a0ed53e4e61033b370de8280cfe1d5d4794bded', '44704657119', '14615141484']) {
    if (!content.includes(marker)) failures.push(`${path}: missing channel/build marker ${marker}`);
  }
}
for (const path of ['src/pages/index.tsx', 'src/pages/studio.tsx']) {
  if (!contents.get(path).includes('<RecentStudioDevelopments />')) failures.push(`${path}: missing current capability summary`);
  if (/to=\{STUDIO_SOURCE_RELEASE_NOTES,/.test(contents.get(path))) failures.push(`${path}: release notes link uses a comma expression`);
  if (contents.get(path).includes('1.0.0-rc.1')) failures.push(`${path}: stale active candidate version`);
}

if (failures.length) {
  console.error('Current release metadata is inconsistent:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Current release metadata verified: public Studio ${expected.studio}, staged Studio ${expected.stagedStudio}, OJS ${expected.ojs}, OMP ${expected.omp}, published iOS metadata ${expected.iosMarketing}/${expected.iosBuild}, RC iOS source ${expected.iosSourceMarketing}/${expected.iosSourceBuild}.`,
);

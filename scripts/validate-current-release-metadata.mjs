import { readFile } from 'node:fs/promises';

const expected = {
  studio: '0.2.0-beta.2',
  ojs: 'v1.6.0',
  omp: 'v1.5.1',
  iosMarketing: '0.2.0',
  iosBuild: '10',
};

const currentFacingFiles = [
  'README.md',
  'src/pages/index.tsx',
  'src/pages/studio.tsx',
  'docs/governance/roadmap-to-omi-1.0.md',
  'docs/governance/studio-implementation-status.md',
  'docs/integrations/ojs-plugin.md',
  'docs/integrations/omp-plugin.md',
  'docs/foundations/ios-ipados-studio.md',
  'docs/foundations/cross-platform-studio.md',
  ...['bg', 'cs', 'da', 'de'].flatMap((locale) => [
    `i18n/${locale}/docusaurus-plugin-content-docs/current/governance/roadmap-to-omi-1.0.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/governance/studio-implementation-status.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/integrations/ojs-plugin.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/integrations/omp-plugin.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/foundations/ios-ipados-studio.md`,
    `i18n/${locale}/docusaurus-plugin-content-docs/current/foundations/cross-platform-studio.md`,
  ]),
];

const staleProductVersions = [
  '0.1.0-alpha.4',
  '0.1.0-beta.3',
  '0.1.0-beta.4',
  '0.1.0-beta.5',
  '0.1.1-beta.1',
  'v1.2.1',
  'v1.2.6',
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
}

const required = [
  ['README.md', expected.studio],
  ['src/pages/index.tsx', expected.studio],
  ['src/pages/studio.tsx', expected.studio],
  ['docs/governance/studio-implementation-status.md', expected.studio],
  ['docs/integrations/ojs-plugin.md', expected.ojs],
  ['docs/integrations/omp-plugin.md', expected.omp],
  ['docs/foundations/ios-ipados-studio.md', expected.studio],
  ['docs/foundations/ios-ipados-studio.md', `App Store short version | \`${expected.iosMarketing}\``],
  ['docs/foundations/ios-ipados-studio.md', `App Store build number | \`${expected.iosBuild}\``],
];

for (const [path, value] of required) {
  if (!contents.get(path)?.includes(value)) {
    failures.push(`${path}: expected current release marker ${value}`);
  }
}

if (failures.length) {
  console.error('Current release metadata is inconsistent:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Current release metadata verified: Studio ${expected.studio}, OJS ${expected.ojs}, OMP ${expected.omp}, iOS ${expected.iosMarketing} build ${expected.iosBuild}.`,
);

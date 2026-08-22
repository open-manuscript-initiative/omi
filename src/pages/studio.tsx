import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './studio.module.css';

// GitHub's /releases/latest endpoint excludes prereleases. While Studio is in
// alpha, point every installer at the active prerelease tag so the website
// receives the assets refreshed by each successful main-branch Tauri build.
const STUDIO_RELEASE_TAG = 'v0.1.0-alpha.4';
const RELEASE_BASE = `https://github.com/open-manuscript-initiative/open-manuscript-studio/releases/download/${STUDIO_RELEASE_TAG}`;
const downloads = {
  windowsExe: `${RELEASE_BASE}/Open-Manuscript-Studio-Windows-x64-Setup.exe`,
  windowsMsi: `${RELEASE_BASE}/Open-Manuscript-Studio-Windows-x64.msi`,
  macArm: `${RELEASE_BASE}/Open-Manuscript-Studio-macOS-Apple-Silicon.dmg`,
  macIntel: `${RELEASE_BASE}/Open-Manuscript-Studio-macOS-Intel.dmg`,
  linuxAppImage: `${RELEASE_BASE}/Open-Manuscript-Studio-Linux-x64.AppImage`,
  linuxDeb: `${RELEASE_BASE}/Open-Manuscript-Studio-Linux-x64.deb`,
  android: `${RELEASE_BASE}/Open-Manuscript-Studio-Android-universal.apk`,
};

const CAPABILITY_DOC_TARGETS: Record<number, string> = {
  0: '/docs/specifications/document-model',
  3: '/docs/specifications/review-model',
  4: '/docs/integrations/ojs-profile-v1',
  5: '/docs/specifications/publishing-model',
  6: '/docs/integrations/implementation-status',
};

export default function StudioDownloads() {
  const {i18n} = useDocusaurusContext();
  const copy = getPublicPageCopy(i18n.currentLocale);
  const t = copy.studio;

  return (
    <Layout title="Open Manuscript Studio" description={t.lead}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <img src="/img/favicon.svg" alt="Open Manuscript Initiative" className={styles.icon} />
          <p className={styles.kicker}>Open Manuscript Initiative</p>
          <h1>Open Manuscript Studio</h1>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="https://studio.openmanuscript.org">{t.browserButton}</Link>
            <Link className="button button--secondary button--lg" to="https://github.com/open-manuscript-initiative/open-manuscript-studio">{t.source}</Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>{t.browserTitle}</h2>
            <p>{t.browserText}</p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2>{t.capabilitiesTitle}</h2>
            <div className={styles.grid}>
              {t.capabilities.map((item, index) => {
                const target = CAPABILITY_DOC_TARGETS[index];
                return (
                  <article className={styles.card} key={item}>
                    <h3>{target ? <Link to={target}>{item}</Link> : item}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>{t.desktopTitle}</h2>
            <p className={styles.sectionLead}>{t.desktopText}</p>
            <div className={styles.grid}>
              <DownloadCard title={t.windows} description={t.windowsText}>
                <DownloadButton href={downloads.windowsExe}>{t.setup}</DownloadButton>
                <DownloadButton href={downloads.windowsMsi} secondary>{t.msi}</DownloadButton>
                <p><Link to="/docs/governance/code-signing-policy">Code signing policy</Link></p>
              </DownloadCard>
              <DownloadCard title={t.android ?? 'Android'} description={t.androidText ?? 'Installable universal APK for Android devices.'}>
                <DownloadButton href={downloads.android}>{t.apk ?? 'Download Android APK'}</DownloadButton>
              </DownloadCard>
              <DownloadCard title={t.macArm} description={t.macArmText}>
                <DownloadButton href={downloads.macArm}>{t.arm}</DownloadButton>
              </DownloadCard>
              <DownloadCard title={t.macIntel} description={t.macIntelText}>
                <DownloadButton href={downloads.macIntel}>{t.intel}</DownloadButton>
              </DownloadCard>
              <DownloadCard title={t.linux} description={t.linuxText}>
                <DownloadButton href={downloads.linuxAppImage}>{t.appimage}</DownloadButton>
                <DownloadButton href={downloads.linuxDeb} secondary>{t.deb}</DownloadButton>
              </DownloadCard>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <article><h2>{t.portableTitle}</h2><p>{t.portableText}</p></article>
              <article><h2>{t.formatsTitle}</h2><p>{t.formatsText}</p></article>
            </div>
          </div>
        </section>

        <section className={styles.notice}>
          <div className={styles.container}>
            <h2>{t.alphaTitle}</h2>
            <p>{t.alphaText}</p>
            <p>
              <Link to="/docs/governance/studio-implementation-status">{copy.home.status}</Link>
              {' · '}
              <Link to="/docs/integrations/implementation-status">{t.capabilities[6]}</Link>
              {' · '}
              <Link to="/docs/governance/code-signing-policy">Code signing policy</Link>
            </p>
            <Link to="https://github.com/open-manuscript-initiative/open-manuscript-studio/releases">{t.releases}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function DownloadCard({title, description, children}: {title: string; description: string; children: React.ReactNode}) {
  return <article className={styles.card}><h3>{title}</h3><p>{description}</p><div className={styles.cardActions}>{children}</div></article>;
}

function DownloadButton({href, secondary = false, children}: {href: string; secondary?: boolean; children: React.ReactNode}) {
  return <Link className={`button ${secondary ? 'button--secondary' : 'button--primary'}`} to={href}>{children}</Link>;
}

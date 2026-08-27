import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './index.module.css';

const FEATURE_DOC_TARGETS: Record<number, string> = {
  0: '/docs/specifications/document-model',
  2: '/docs/specifications/review-model',
  3: '/docs/integrations/ojs-profile-v1',
  4: '/docs/foundations/cross-platform-studio',
  5: '/docs/specifications/publishing-model',
};

const STUDIO_UPDATE = {
  en: {
    summary: 'The current alpha is in beta-readiness stabilization and now combines browser, desktop, Android and a validated iOS/iPadOS native target with multi-document editing, optimized large-DOCX import, reusable publication styles and publisher profiles, style-driven PDF/HTML/CSS export, generated document lists and indexes, device-aware local/cloud storage, secure password recovery, federated sign-in, double-blind peer review, OJS/OMP workflows, ORCID-bound author signatures, proofreading and institution-level administration.',
    multiDocument: 'Multi-document desktop editing and document outline',
    largeDocx: 'Large DOCX import optimization and generated lists',
    publishing: 'Reusable publication styles, publisher profiles and PDF/HTML/CSS export',
    accounts: 'Cross-device accounts, recovery and connected identities',
    storage: 'Own-device, cloud and mobile-native storage workflows',
    institutional: 'Institutional profiles, central administration and Admin API',
    proofreading: 'Spelling, grammar, style, translation and agent integrations',
    ios: 'Validated iPhone/iPad simulator build and Files integration',
  },
  hu: {
    summary: 'A jelenlegi alpha béta-előkészítő stabilizációs szakaszban van. A böngészős, asztali és Android kliensek mellett már validált iOS/iPadOS natív célverziót, többdokumentumos szerkesztést, nagy DOCX-ek optimalizált importját, újrafelhasználható kiadványstílusokat és kiadói profilokat, stílusvezérelt PDF/HTML/CSS exportot, generált jegyzékeket és mutatókat, eszköztudatos helyi/felhős tárhelykezelést, federált bejelentkezést, double-blind peer review-t, OJS/OMP munkafolyamatokat, ORCID-hez kötött szerzői aláírást, nyelvi ellenőrzést és intézményi adminisztrációt is tartalmaz.',
    multiDocument: 'Többdokumentumos asztali szerkesztés és dokumentumvázlat',
    largeDocx: 'Nagy DOCX-ek optimalizált importja és generált jegyzékek',
    publishing: 'Újrafelhasználható kiadványstílusok, kiadói profilok és PDF/HTML/CSS export',
    accounts: 'Eszközök között közös fiók, jelszó-visszaállítás és kapcsolt identitások',
    storage: 'Saját eszköz, felhő és mobil natív tárhelymunkafolyamatok',
    institutional: 'Intézményi profilok, központi adminisztráció és Admin API',
    proofreading: 'Helyesírás, nyelvhelyesség, fordítás és integrált ügynökök',
    ios: 'Validált iPhone/iPad szimulátoros build és Files-integráció',
  },
  de: {
    summary: 'Die aktuelle Alpha befindet sich in der Beta-Readiness-Stabilisierung. Browser-, Desktop- und Android-Clients werden inzwischen durch ein validiertes natives iOS/iPadOS-Ziel, Mehrdokument-Bearbeitung, optimierten Import großer DOCX-Dateien, wiederverwendbare Publikationsstile und Verlagsprofile, stilgesteuerten PDF/HTML/CSS-Export, generierte Verzeichnisse und Register, gerätebewusste lokale/Cloud-Speicherung, föderierte Anmeldung, Double-blind Peer Review, OJS/OMP-Workflows, ORCID-gebundene Autorensignaturen, Korrekturhilfen und institutionelle Administration ergänzt.',
    multiDocument: 'Mehrdokument-Bearbeitung und Dokumentgliederung auf dem Desktop',
    largeDocx: 'Optimierter Import großer DOCX-Dateien und generierte Verzeichnisse',
    publishing: 'Wiederverwendbare Publikationsstile, Verlagsprofile und PDF/HTML/CSS-Export',
    accounts: 'Geräteübergreifende Konten, Wiederherstellung und verbundene Identitäten',
    storage: 'Eigene Geräte, Cloud und mobile native Speicher-Workflows',
    institutional: 'Institutionelle Profile, zentrale Administration und Admin API',
    proofreading: 'Rechtschreibung, Grammatik, Übersetzung und integrierte Agenten',
    ios: 'Validierter iPhone/iPad-Simulator-Build und Files-Integration',
  },
} as const;

function getStudioUpdate(locale: string) {
  if (locale === 'hu' || locale === 'de') return STUDIO_UPDATE[locale];
  return STUDIO_UPDATE.en;
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = getPublicPageCopy(i18n.currentLocale).home;
  const studioUpdate = getStudioUpdate(i18n.currentLocale);
  const localizedUrl = i18n.currentLocale === 'en'
    ? 'https://openmanuscript.org/'
    : `https://openmanuscript.org/${i18n.currentLocale}/`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://openmanuscript.org/#organization',
        name: 'Open Manuscript Initiative',
        url: 'https://openmanuscript.org/',
        logo: 'https://openmanuscript.org/android-chrome-512x512.png',
        sameAs: [
          'https://github.com/open-manuscript-initiative',
          'https://www.facebook.com/share/19AmDMBVoe/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://openmanuscript.org/#website',
        url: localizedUrl,
        name: 'Open Manuscript Initiative',
        description: t.description,
        inLanguage: i18n.currentLocale,
        publisher: {'@id': 'https://openmanuscript.org/#organization'},
      },
    ],
  };

  return (
    <Layout title="Open Manuscript Initiative" description={t.description}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.logoWrap}>
            <img src="/img/omi-hero-light.svg" alt="Open Manuscript Initiative" className={styles.logo} />
          </div>
          <h1>Open Manuscript Initiative</h1>
          <p className={styles.kicker}>{t.kicker}</p>
          <p className={styles.tagline}>{t.tagline}</p>
          <p className={styles.heroDescription}>{t.description}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
            <Link className="button button--secondary button--lg" to="/docs/vision">{t.vision}</Link>
          </div>
        </section>

        <section className={styles.introduction}>
          <div className={styles.container}>
            <h2>{t.introTitle}</h2>
            <p className={styles.highlightText}>{t.intro}</p>
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.container}>
            <h2>{t.featuresTitle}</h2>
            <div className={styles.principleGrid}>
              {t.features.map((feature, index) => {
                const target = FEATURE_DOC_TARGETS[index];
                return (
                  <article className={styles.principleCard} key={feature}>
                    <h3>{target ? <Link to={target}>{feature}</Link> : feature}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.studio} aria-labelledby="current-development-status">
          <div className={styles.studioContent}>
            <p className={styles.sectionKicker}>Open Manuscript Studio · 0.1.0-alpha.4 · beta-readiness stabilization</p>
            <h2 id="current-development-status">{t.status}</h2>
            <h3>{t.currentTitle}</h3>
            <p>{studioUpdate.summary}</p>
            <p>{t.current}</p>
            <div className={styles.studioActions}>
              <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
              <Link className="button button--secondary button--lg" to="/docs/governance/studio-implementation-status">{t.status}</Link>
            </div>
          </div>

          <aside className={styles.studioFeatures} aria-label={t.status}>
            <h3>0.1.0-alpha.4</h3>
            <p>Web · Windows · Linux · macOS · Android · iOS/iPadOS</p>
            <p><strong>24</strong> UI languages</p>
            <nav className={styles.contextLinks} aria-label={t.status}>
              <Link to="/docs/foundations/cross-platform-studio">✓ {studioUpdate.multiDocument}</Link>
              <Link to="/docs/foundations/studio-long-form-authoring">✓ {studioUpdate.largeDocx}</Link>
              <Link to="/docs/foundations/publication-styles-and-publisher-profiles">✓ {studioUpdate.publishing}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.accounts}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.storage}</Link>
              <Link to="/docs/integrations/institutional-administration">✓ {studioUpdate.institutional}</Link>
              <Link to="/docs/integrations/implementation-status">✓ {studioUpdate.proofreading}</Link>
              <Link to="/docs/foundations/ios-ipados-studio">✓ {studioUpdate.ios}</Link>
            </nav>
            <p>✓ Android public alpha</p>
            <p>✓ iOS/iPadOS simulator build</p>
            <p>◐ TestFlight/App Store — Apple Developer signing required</p>
            <p>◐ Windows code signing — SignPath application pending</p>
            <p>◐ macOS notarization</p>
          </aside>
        </section>

        <section className={styles.cta}>
          <h2>{t.tagline}</h2>
          <p>{t.current}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
            <Link className="button button--secondary button--lg" to="https://github.com/open-manuscript-initiative/omi">{t.github}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

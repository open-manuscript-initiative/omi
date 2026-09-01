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
    summary: 'Open Manuscript Studio 0.1.0-beta.1 is in public beta. The September 2026 development line adds manuscript-wide Word-like editing across OMI block and section boundaries, paragraph split/merge on physical and mobile keyboards, whole-document Ctrl+A/Cmd+A selection, improved mobile selection actions, structural PDF import with bbox-based footnote reconstruction, and native Android PDF routing. These additions build on multi-document editing, large-DOCX import, semantic indexes, reusable publication styles, device-aware storage, federated sign-in, double-blind peer review, OJS/OMP workflows and institutional administration.',
    multiDocument: 'Multi-document desktop editing and document outline',
    wordLike: 'Word-like manuscript-wide split, merge and selection',
    pdf: 'Structural PDF import with geometry-aware footnotes',
    largeDocx: 'Large DOCX import optimization and stable lazy rendering',
    publishing: 'Reusable publication styles, InDesign IDML import and PDF/HTML/CSS export',
    accounts: 'Cross-device accounts, recovery and connected identities',
    storage: 'Own-device, cloud and mobile-native storage workflows',
    cloud: 'Planned federated OMI Cloud with portable institutional storage',
    institutional: 'Institutional profiles, central administration and Admin API',
    proofreading: 'Spelling, grammar, style, translation and agent integrations',
    ios: 'Validated iPhone/iPad simulator build and Files integration',
  },
  hu: {
    summary: 'Az Open Manuscript Studio 0.1.0-beta.1 nyilvános béta. A 2026. szeptemberi fejlesztési ág kézirat-szintű, Word-szerű szerkesztést ad az OMI blokk- és szakaszhatárokon át, fizikai és mobil billentyűzeten működő bekezdés-szétválasztással és -egyesítéssel, teljes dokumentumot kijelölő Ctrl+A/Cmd+A működéssel, javított mobil kijelölési műveletekkel, bbox-geometriára épülő strukturált PDF- és lábjegyzet-rekonstrukcióval, valamint natív Android PDF-importtal. Mindez a többdokumentumos szerkesztésre, a nagy DOCX-ek importjára, a szemantikus mutatókra, a kiadványstílusokra, a felhős és helyi tárhelyre, a federált bejelentkezésre, a double-blind peer review-ra, az OJS/OMP munkafolyamatokra és az intézményi adminisztrációra épül.',
    multiDocument: 'Többdokumentumos asztali szerkesztés és dokumentumvázlat',
    wordLike: 'Word-szerű, kézirat-szintű szétválasztás, egyesítés és kijelölés',
    pdf: 'Strukturált PDF-import geometria-alapú lábjegyzet-felismeréssel',
    largeDocx: 'Nagy DOCX-ek optimalizált importja és stabil lazy betöltése',
    publishing: 'Újrafelhasználható kiadványstílusok, InDesign IDML import és PDF/HTML/CSS export',
    accounts: 'Eszközök között közös fiók, jelszó-visszaállítás és kapcsolt identitások',
    storage: 'Saját eszköz, felhő és mobil natív tárhelymunkafolyamatok',
    cloud: 'Tervezett föderált OMI Cloud hordozható intézményi tárhellyel',
    institutional: 'Intézményi profilok, központi adminisztráció és Admin API',
    proofreading: 'Helyesírás, nyelvhelyesség, fordítás és integrált ügynökök',
    ios: 'Validált iPhone/iPad szimulátoros build és Files-integráció',
  },
  de: {
    summary: 'Open Manuscript Studio 0.1.0-beta.1 befindet sich in der öffentlichen Beta. Die Entwicklungsreihe vom September 2026 ergänzt manuskriptweites, Word-ähnliches Bearbeiten über OMI-Block- und Abschnittsgrenzen hinweg, Absatzteilen und -zusammenführen auf physischen und mobilen Tastaturen, vollständige Dokumentauswahl mit Ctrl+A/Cmd+A, verbesserte mobile Auswahlaktionen, strukturellen PDF-Import mit bbox-basierter Fußnotenrekonstruktion und natives Android-PDF-Routing. Diese Arbeiten bauen auf Mehrdokument-Bearbeitung, großem DOCX-Import, semantischen Registern, Publikationsstilen, gerätebewusster Speicherung, föderierter Anmeldung, Double-blind Peer Review, OJS/OMP-Workflows und institutioneller Administration auf.',
    multiDocument: 'Mehrdokument-Bearbeitung und Dokumentgliederung auf dem Desktop',
    wordLike: 'Word-ähnliches manuskriptweites Teilen, Zusammenführen und Auswählen',
    pdf: 'Strukturierter PDF-Import mit geometriebasierter Fußnotenerkennung',
    largeDocx: 'Optimierter Import großer DOCX-Dateien und stabiles Lazy Rendering',
    publishing: 'Wiederverwendbare Publikationsstile, InDesign-IDML-Import und PDF/HTML/CSS-Export',
    accounts: 'Geräteübergreifende Konten, Wiederherstellung und verbundene Identitäten',
    storage: 'Eigene Geräte, Cloud und mobile native Speicher-Workflows',
    cloud: 'Geplante föderierte OMI Cloud mit portabler institutioneller Speicherung',
    institutional: 'Institutionelle Profile, zentrale Administration und Admin API',
    proofreading: 'Rechtschreibung, Grammatik, Übersetzung und integrierte Agenten',
    ios: 'Validierter iPhone/iPad-Simulator-Build und Files-Integration',
  },
} as const;

const SUPPORT_LABELS = {
  en: 'Support OMI',
  hu: 'Támogasd az OMI-t',
  de: 'OMI unterstützen',
} as const;

function getStudioUpdate(locale: string) {
  if (locale === 'hu' || locale === 'de') return STUDIO_UPDATE[locale];
  return STUDIO_UPDATE.en;
}

function getSupportLabel(locale: string) {
  if (locale === 'hu' || locale === 'de') return SUPPORT_LABELS[locale];
  return SUPPORT_LABELS.en;
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = getPublicPageCopy(i18n.currentLocale).home;
  const studioUpdate = getStudioUpdate(i18n.currentLocale);
  const supportLabel = getSupportLabel(i18n.currentLocale);
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
            <p className={styles.sectionKicker}>Open Manuscript Studio · 0.1.0-beta.1 · public beta</p>
            <h2 id="current-development-status">{t.status}</h2>
            <h3>{t.currentTitle}</h3>
            <p>{studioUpdate.summary}</p>
            <p>{t.current}</p>
            <div className={styles.studioActions}>
              <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
              <Link className="button button--secondary button--lg" to="/docs/foundations/word-like-manuscript-editing">Word-like editing</Link>
              <Link className="button button--secondary button--lg" to="/docs/foundations/omi-cloud-federated-infrastructure">OMI Cloud</Link>
              <Link className="button button--secondary button--lg" to="/docs/governance/studio-implementation-status">{t.status}</Link>
            </div>
          </div>

          <aside className={styles.studioFeatures} aria-label={t.status}>
            <h3>0.1.0-beta.1</h3>
            <p>Web · Windows · Linux · macOS · Android · iOS/iPadOS</p>
            <p><strong>24</strong> UI languages</p>
            <nav className={styles.contextLinks} aria-label={t.status}>
              <Link to="/docs/foundations/word-like-manuscript-editing">✓ {studioUpdate.wordLike}</Link>
              <Link to="/docs/foundations/studio-long-form-authoring">✓ {studioUpdate.pdf}</Link>
              <Link to="/docs/foundations/cross-platform-studio">✓ {studioUpdate.multiDocument}</Link>
              <Link to="/docs/foundations/studio-long-form-authoring">✓ {studioUpdate.largeDocx}</Link>
              <Link to="/docs/foundations/publication-styles-and-publisher-profiles">✓ {studioUpdate.publishing}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.accounts}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.storage}</Link>
              <Link to="/docs/foundations/omi-cloud-federated-infrastructure">→ {studioUpdate.cloud}</Link>
              <Link to="/docs/integrations/institutional-administration">✓ {studioUpdate.institutional}</Link>
              <Link to="/docs/integrations/implementation-status">✓ {studioUpdate.proofreading}</Link>
              <Link to="/docs/foundations/ios-ipados-studio">✓ {studioUpdate.ios}</Link>
            </nav>
            <p>✓ Android public beta</p>
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
            <Link className="button button--secondary button--lg" to="/support">{supportLabel}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

import React, {useEffect, useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './index.module.css';

const GOOGLE_PLAY_TEST_URL = 'https://play.google.com/apps/testing/org.openmanuscript.studio';

const FEATURE_DOC_TARGETS: Record<number, string> = {
  0: '/docs/specifications/document-model',
  2: '/docs/specifications/review-model',
  3: '/docs/integrations/ojs-profile-v1',
  4: '/docs/foundations/cross-platform-studio',
  5: '/docs/specifications/publishing-model',
};

const STUDIO_UPDATE = {
  en: {
    summary: 'Open Manuscript Studio 0.3.0-beta.1 is the current public beta. The new release adds InDesign-compatible paragraph styles, section rulers with tab stops and columns, consistent HTML5/print-layout zoom, a Studio-native editorial and peer-review workflow for verified journals and presses without OJS/OMP, and an account-level personal reference library with per-document bibliography selection. These additions build on validated JATS 1.4/JATS4R export, Vivliostyle PDF generation, OJS/OMP 3.5 integration, large-DOCX import, multi-document editing, federated identity and cross-platform native builds.',
    multiDocument: 'Multi-document desktop editing and document outline',
    wordLike: 'Word-like manuscript-wide split, merge and selection',
    pdf: 'Structural PDF import with geometry-aware footnotes',
    largeDocx: 'Large DOCX import optimization and stable lazy rendering',
    publishing: 'InDesign-compatible paragraph/publication styles, printed/interactive PDF, IDML and web exports',
    layout: 'Section ruler, tab stops, columns and HTML5/print-layout zoom',
    nativeEditorial: 'Studio-native submission, double-anonymous review and revision-bound editorial acceptance',
    referenceLibrary: 'Reusable personal reference library and per-document bibliography selection',
    directPublishing: 'Direct author submission to configured OJS and OMP installations',
    accounts: 'Cross-device accounts, recovery and connected identities',
    storage: 'Own-device, cloud and mobile-native storage workflows',
    cloud: 'Planned federated OMI Cloud with portable institutional storage',
    institutional: 'Institutional profiles, central administration and Admin API',
    proofreading: 'Spelling, grammar, style, translation and provider-neutral agent integrations',
    androidPlay: 'Google Play closed testing available for eligible testers',
    androidInstall: 'Install Android beta from Google Play',
    downloads: 'Studio downloads',
    ios: 'Validated iPhone/iPad simulator build and Files integration',
    uiLocales: 'selectable UI locales',
  },
  hu: {
    summary: 'Az Open Manuscript Studio jelenlegi nyilvános bétája a 0.3.0-beta.1. Az új kiadás InDesign-kompatibilis bekezdésstílusokat, szakaszszintű vonalzót tabulátorokkal és hasábokkal, egységes HTML5- és nyomtatásielrendezés-nagyítást, OJS/OMP nélküli hitelesített folyóiratokhoz és kiadókhoz Studio-native szerkesztőségi és lektorálási munkafolyamatot, valamint fiókszintű saját hivatkozástárat és dokumentumonként választható bibliográfiát ad. Mindez a validált JATS 1.4/JATS4R exportra, a Vivliostyle PDF-előállításra, az OJS/OMP 3.5 integrációra, a nagy DOCX-ek importjára, a többdokumentumos szerkesztésre, a federált identitásra és a platformközi natív buildekre épül.',
    multiDocument: 'Többdokumentumos asztali szerkesztés és dokumentumvázlat',
    wordLike: 'Word-szerű, kézirat-szintű szétválasztás, egyesítés és kijelölés',
    pdf: 'Strukturált PDF-import geometria-alapú lábjegyzet-felismeréssel',
    largeDocx: 'Nagy DOCX-ek optimalizált importja és stabil lazy betöltése',
    publishing: 'InDesign-kompatibilis bekezdés- és kiadványstílusok, nyomtatott/interaktív PDF, IDML és webes export',
    layout: 'Szakaszvonalzó, tabulátorok, hasábok és HTML5/nyomtatási nagyítás',
    nativeEditorial: 'Studio-native beküldés, kettős vak lektorálás és revízióhoz kötött szerkesztői elfogadás',
    referenceLibrary: 'Újrafelhasználható saját hivatkozástár és dokumentumonkénti bibliográfia-kiválasztás',
    directPublishing: 'Közvetlen szerzői beküldés konfigurált OJS- és OMP-rendszerekbe',
    accounts: 'Eszközök között közös fiók, jelszó-visszaállítás és kapcsolt identitások',
    storage: 'Saját eszköz, felhő és mobil natív tárhelymunkafolyamatok',
    cloud: 'Tervezett föderált OMI Cloud hordozható intézményi tárhellyel',
    institutional: 'Intézményi profilok, központi adminisztráció és Admin API',
    proofreading: 'Helyesírás, nyelvhelyesség, stílus, fordítás és szolgáltatófüggetlen ügynökök',
    androidPlay: 'A Google Play zárt tesztelése elérhető a jogosult tesztelők számára',
    androidInstall: 'Android béta telepítése a Google Playről',
    downloads: 'Studio letöltések',
    ios: 'Validált iPhone/iPad szimulátoros build és Files-integráció',
    uiLocales: 'választható felületi lokalizáció',
  },
  de: {
    summary: 'Open Manuscript Studio 0.3.0-beta.1 ist die aktuelle öffentliche Beta. Die neue Version ergänzt InDesign-kompatible Absatzstile, abschnittsbezogene Lineale mit Tabstopps und Spalten, konsistenten Zoom in HTML5- und Drucklayout, einen Studio-nativen Redaktions- und Peer-Review-Workflow für verifizierte Zeitschriften und Verlage ohne OJS/OMP sowie eine kontobezogene persönliche Literaturbibliothek mit dokumentweiser Bibliografieauswahl. Dies baut auf validiertem JATS-1.4/JATS4R-Export, Vivliostyle-PDF-Erzeugung, OJS/OMP-3.5-Integration, großem DOCX-Import, Mehrdokument-Bearbeitung, föderierter Identität und plattformübergreifenden nativen Builds auf.',
    multiDocument: 'Mehrdokument-Bearbeitung und Dokumentgliederung auf dem Desktop',
    wordLike: 'Word-ähnliches manuskriptweites Teilen, Zusammenführen und Auswählen',
    pdf: 'Strukturierter PDF-Import mit geometriebasierter Fußnotenerkennung',
    largeDocx: 'Optimierter Import großer DOCX-Dateien und stabiles Lazy Rendering',
    publishing: 'InDesign-kompatible Absatz-/Publikationsstile, Druck-/interaktives PDF, IDML und Web-Export',
    layout: 'Abschnittslineal, Tabstopps, Spalten und HTML5-/Drucklayout-Zoom',
    nativeEditorial: 'Studio-native Einreichung, doppelt anonyme Begutachtung und revisionsgebundene redaktionelle Annahme',
    referenceLibrary: 'Wiederverwendbare persönliche Literaturbibliothek und dokumentweise Bibliografieauswahl',
    directPublishing: 'Direkte Autoreneinreichung an konfigurierte OJS- und OMP-Installationen',
    accounts: 'Geräteübergreifende Konten, Wiederherstellung und verbundene Identitäten',
    storage: 'Eigene Geräte, Cloud und mobile native Speicher-Workflows',
    cloud: 'Geplante föderierte OMI Cloud mit portabler institutioneller Speicherung',
    institutional: 'Institutionelle Profile, zentrale Administration und Admin API',
    proofreading: 'Rechtschreibung, Grammatik, Stil, Übersetzung und providerneutrale Agenten',
    androidPlay: 'Der geschlossene Google-Play-Test ist für berechtigte Tester verfügbar',
    androidInstall: 'Android-Beta über Google Play installieren',
    downloads: 'Studio-Downloads',
    ios: 'Validierter iPhone/iPad-Simulator-Build und Files-Integration',
    uiLocales: 'auswählbare UI-Lokalisierungen',
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

function currentBetaCopy(value: string) {
  return value.replace(/\balpha\b/giu, 'beta');
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = getPublicPageCopy(i18n.currentLocale).home;
  const studioUpdate = getStudioUpdate(i18n.currentLocale);
  const supportLabel = getSupportLabel(i18n.currentLocale);
  const current = currentBetaCopy(t.current);
  const [isAndroid, setIsAndroid] = useState(false);
  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);
  const installHref = isAndroid ? GOOGLE_PLAY_TEST_URL : '/studio';
  const installLabel = isAndroid ? studioUpdate.androidInstall : studioUpdate.downloads;
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
            <p className={styles.sectionKicker}>Open Manuscript Studio · 0.3.0-beta.1 public beta</p>
            <h2 id="current-development-status">{t.status}</h2>
            <h3>{t.currentTitle}</h3>
            <p>{studioUpdate.summary}</p>
            <p>{current}</p>
            <div className={styles.studioActions}>
              <Link className="button button--primary button--lg" to={installHref}>{installLabel}</Link>
              <Link className="button button--secondary button--lg" to="/docs/foundations/word-like-manuscript-editing">Word-like editing</Link>
              <Link className="button button--secondary button--lg" to="/docs/foundations/omi-cloud-federated-infrastructure">OMI Cloud</Link>
              <Link className="button button--secondary button--lg" to="/docs/governance/studio-implementation-status">{t.status}</Link>
            </div>
          </div>

          <aside className={styles.studioFeatures} aria-label={t.status}>
            <h3>0.3.0-beta.1</h3>
            <p>Web · Windows · Linux · macOS · Android · iOS/iPadOS</p>
            <p><strong>47</strong> {studioUpdate.uiLocales}</p>
            <nav className={styles.contextLinks} aria-label={t.status}>
              <Link to="/docs/foundations/word-like-manuscript-editing">✓ {studioUpdate.wordLike}</Link>
              <Link to="/docs/foundations/studio-long-form-authoring">✓ {studioUpdate.pdf}</Link>
              <Link to="/docs/foundations/cross-platform-studio">✓ {studioUpdate.multiDocument}</Link>
              <Link to="/docs/foundations/studio-long-form-authoring">✓ {studioUpdate.largeDocx}</Link>
              <Link to="/docs/foundations/publication-styles-and-publisher-profiles">✓ {studioUpdate.publishing}</Link>
              <Link to="/docs/foundations/word-like-manuscript-editing">✓ {studioUpdate.layout}</Link>
              <Link to="/docs/integrations/studio-native-editorial-workflow">✓ {studioUpdate.nativeEditorial}</Link>
              <Link to="/docs/governance/roadmap-to-omi-1.0">✓ {studioUpdate.referenceLibrary}</Link>
              <Link to="/docs/integrations/ojs-profile-v1">✓ {studioUpdate.directPublishing}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.accounts}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.storage}</Link>
              <Link to="/docs/foundations/omi-cloud-federated-infrastructure">→ {studioUpdate.cloud}</Link>
              <Link to="/docs/integrations/institutional-administration">✓ {studioUpdate.institutional}</Link>
              <Link to="/docs/integrations/implementation-status">✓ {studioUpdate.proofreading}</Link>
              <Link to="/docs/foundations/ios-ipados-studio">✓ {studioUpdate.ios}</Link>
            </nav>
            <p>✓ Android public beta APK</p>
            <p>◐ {studioUpdate.androidPlay}</p>
            <p>✓ iOS/iPadOS simulator build</p>
            <p>◐ TestFlight/App Store — Apple Developer signing required</p>
            <p>◐ Windows code signing — SignPath application pending</p>
            <p>◐ macOS notarization</p>
          </aside>
        </section>

        <section className={styles.cta}>
          <h2>{t.tagline}</h2>
          <p>{current}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
            <Link className="button button--secondary button--lg" to="/docs/contribute">
              <Translate id="homepage.cta.contribute">Contribute</Translate>
            </Link>
            <Link className="button button--secondary button--lg" to="https://github.com/open-manuscript-initiative/omi">{t.github}</Link>
            <Link className="button button--secondary button--lg" to="/support">{supportLabel}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

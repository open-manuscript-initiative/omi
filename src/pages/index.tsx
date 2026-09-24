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
    summary: 'Open Manuscript Studio 0.3.0-beta.1 is the current public beta. The new line adds Studio-native submission, peer review and editorial acceptance for verified journals and presses without OJS/OMP; an InDesign-compatible paragraph-style and publication-layout system; section rulers with tabs and columns; and a reusable personal reference library with per-document bibliography selection. These additions build on validated JATS/PDF publication output, OJS/OMP 3.5 integration, large-DOCX import, semantic indexes, multilingual authoring, cross-platform native clients and immutable release provenance.',
    multiDocument: 'Multi-document desktop editing and document outline',
    wordLike: 'Word-like manuscript-wide split, merge and selection',
    pdf: 'Structural PDF import with geometry-aware footnotes',
    largeDocx: 'Large DOCX import optimization and stable lazy rendering',
    publishing: 'Reusable publication styles, InDesign-compatible paragraph styles, printed/interactive PDF, IDML and web exports',
    layout: 'Section rulers, tabs, columns and text-to-table conversion',
    editorial: 'Studio-native submission, peer review and editorial acceptance for verified non-OJS/OMP venues',
    references: 'Reusable personal reference library with per-document bibliography selection',
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
  },
  hu: {
    summary: 'Az Open Manuscript Studio jelenlegi nyilvános bétája a 0.3.0-beta.1. Az új ág Studio-natív beküldést, lektorálást és szerkesztői elfogadást ad az OJS/OMP nélküli, hitelesített folyóiratoknak és kiadóknak; InDesign-kompatibilis bekezdésstílus- és kiadványtördelési rendszert; szakaszonkénti vonalzót, tabulátorokat és hasábokat; valamint több dokumentumban újrahasználható személyes hivatkozástárat dokumentumonként választható bibliográfiával. Mindez a validált JATS/PDF kimenetre, az OJS/OMP 3.5 integrációra, a nagy DOCX-ek importjára, a szemantikus mutatókra, a többnyelvű munkára és a platformközi natív kliensekre épül.',
    multiDocument: 'Többdokumentumos asztali szerkesztés és dokumentumvázlat',
    wordLike: 'Word-szerű, kézirat-szintű szétválasztás, egyesítés és kijelölés',
    pdf: 'Strukturált PDF-import geometria-alapú lábjegyzet-felismeréssel',
    largeDocx: 'Nagy DOCX-ek optimalizált importja és stabil lazy betöltése',
    publishing: 'Újrafelhasználható kiadványstílusok, InDesign-kompatibilis bekezdésstílusok, nyomtatott/interaktív PDF, IDML és webes export',
    layout: 'Szakaszszintű vonalzó, tabulátorok, hasábok és szöveg–táblázat átalakítás',
    editorial: 'Studio-natív beküldés, lektorálás és szerkesztői elfogadás hitelesített, OJS/OMP nélküli kiadványokhoz',
    references: 'Több dokumentumban használható személyes hivatkozástár és dokumentumonkénti bibliográfiaválasztás',
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
  },
  de: {
    summary: 'Open Manuscript Studio 0.3.0-beta.1 ist die aktuelle öffentliche Beta. Die neue Linie ergänzt einen Studio-nativen Einreichungs-, Begutachtungs- und Annahme-Workflow für verifizierte Zeitschriften und Verlage ohne OJS/OMP, ein InDesign-kompatibles Absatzstil- und Publikationslayoutsystem, abschnittsbezogene Lineale mit Tabulatoren und Spalten sowie eine persönliche, dokumentübergreifend wiederverwendbare Literaturbibliothek mit dokumentbezogener Bibliografieauswahl. Dies baut auf validierter JATS/PDF-Ausgabe, OJS/OMP-3.5-Integration, großem DOCX-Import, semantischen Registern und den plattformübergreifenden nativen Clients auf.',
    multiDocument: 'Mehrdokument-Bearbeitung und Dokumentgliederung auf dem Desktop',
    wordLike: 'Word-ähnliches manuskriptweites Teilen, Zusammenführen und Auswählen',
    pdf: 'Strukturierter PDF-Import mit geometriebasierter Fußnotenerkennung',
    largeDocx: 'Optimierter Import großer DOCX-Dateien und stabiles Lazy Rendering',
    publishing: 'Wiederverwendbare Publikationsstile, InDesign-kompatible Absatzstile, Druck-/interaktives PDF, IDML und Web-Export',
    layout: 'Abschnittslineal, Tabulatoren, Spalten und Text-zu-Tabelle-Konvertierung',
    editorial: 'Studio-native Einreichung, Begutachtung und redaktionelle Annahme für verifizierte Publikationen ohne OJS/OMP',
    references: 'Persönliche, dokumentübergreifende Literaturbibliothek mit Bibliografieauswahl pro Dokument',
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
            <p><strong>47</strong> selectable UI languages</p>
            <nav className={styles.contextLinks} aria-label={t.status}>
              <Link to="/docs/foundations/word-like-manuscript-editing">✓ {studioUpdate.wordLike}</Link>
              <Link to="/docs/foundations/studio-long-form-authoring">✓ {studioUpdate.pdf}</Link>
              <Link to="/docs/foundations/cross-platform-studio">✓ {studioUpdate.multiDocument}</Link>
              <Link to="/docs/foundations/studio-long-form-authoring">✓ {studioUpdate.largeDocx}</Link>
              <Link to="/docs/foundations/publication-styles-and-publisher-profiles">✓ {studioUpdate.publishing}</Link>
              <Link to="/docs/foundations/word-like-manuscript-editing">✓ {studioUpdate.layout}</Link>
              <Link to="/docs/integrations/studio-native-editorial-workflow">✓ {studioUpdate.editorial}</Link>
              <Link to="/docs/specifications/reference-library-registry">✓ {studioUpdate.references}</Link>
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

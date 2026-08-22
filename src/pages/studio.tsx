import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './studio.module.css';

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

const CURRENT_UPDATE = {
  en: {
    title: 'Beta-readiness improvements',
    lead: 'Recent development has shifted from basic product scaffolding toward daily scholarly-workflow usability and stabilization.',
    items: [
      ['Multi-document desktop workspace', 'Browser-style tabs keep several manuscripts open at the same time on desktop while mobile retains a compact single-document workflow.'],
      ['Large DOCX handling', 'Large Word imports use deferred editor mounting to reduce memory and rendering cost, and imported DOCX files open directly as OMI manuscripts.'],
      ['Proofreading', 'Local spellcheck follows manuscript language; optional grammar and style checking can use configured external language services.'],
      ['Verified scholarly identity', 'ORCID linking is integrated with the author-signature workflow, followed by WebAuthn/passkey signing of immutable manuscript revisions.'],
      ['Publishing-system workflows', 'OJS author/editor/reviewer workflows are operational when configured, and the OMP connector architecture is implemented and under end-to-end hardening.'],
      ['Cross-platform application', 'Web, Windows, Linux, macOS and Android share the same manuscript model and application codebase, with native file handling where supported.'],
    ],
    maturity: 'The current release remains alpha, but the project is now in beta-readiness stabilization: regression testing, large-document performance, error recovery, interoperability and release trust are the primary remaining gates.',
  },
  hu: {
    title: 'Béta-előkészítő fejlesztések',
    lead: 'A fejlesztés súlypontja az alapfunkciókról egyre inkább a napi tudományos munkára való alkalmasságra és a stabilizálásra került.',
    items: [
      ['Többdokumentumos asztali munkatér', 'Böngészőszerű fülekkel egyszerre több kézirat tartható nyitva asztali nézetben; mobilon megmarad a kompakt egy dokumentumos munkafolyamat.'],
      ['Nagy DOCX-ek kezelése', 'A nagy Word-importoknál késleltetett szerkesztőbetöltés csökkenti a memória- és renderelési terhelést, az importált DOCX pedig közvetlenül OMI-kéziratként nyílik meg.'],
      ['Helyesírás és nyelvhelyesség', 'A helyi helyesírás-ellenőrzés követi a kézirat nyelvét; külön bekapcsolható nyelvhelyességi és stílusellenőrzés külső nyelvi szolgáltatással is használható.'],
      ['Hitelesített tudományos identitás', 'Az ORCID-kapcsolás bekerült a szerzői aláírási folyamatba, amelyet WebAuthn/passkey alapú, változtathatatlan revízióra vonatkozó kriptográfiai aláírás követhet.'],
      ['Publikációs rendszerkapcsolatok', 'A konfigurált OJS szerzői, szerkesztői és lektori munkafolyamatok működnek; az OMP-kapcsolat architektúrája elkészült és végponttól végpontig tartó stabilizálás alatt áll.'],
      ['Cross-platform alkalmazás', 'A webes, Windows, Linux, macOS és Android változat ugyanazt a kéziratmodellt és közös alkalmazáskódot használja, natív fájlkezeléssel, ahol a platform ezt támogatja.'],
    ],
    maturity: 'A jelenlegi kiadás továbbra is alpha, de a projekt már béta-előkészítő stabilizációs szakaszban van: a regressziós tesztelés, nagy dokumentumok teljesítménye, hibából való helyreállás, interoperabilitás és a kiadások megbízhatósága a fő hátralévő kapuk.',
  },
  de: {
    title: 'Verbesserungen für die Beta-Reife',
    lead: 'Der Entwicklungsschwerpunkt verschiebt sich von der grundlegenden Produktstruktur hin zu Alltagstauglichkeit und Stabilisierung wissenschaftlicher Workflows.',
    items: [
      ['Mehrere Dokumente auf dem Desktop', 'Browserähnliche Tabs halten mehrere Manuskripte gleichzeitig geöffnet; mobil bleibt der kompakte Ein-Dokument-Workflow erhalten.'],
      ['Große DOCX-Dateien', 'Große Word-Importe verwenden verzögertes Editor-Mounting zur Reduzierung von Speicher- und Rendering-Kosten und öffnen direkt als OMI-Manuskript.'],
      ['Korrekturlesen', 'Die lokale Rechtschreibprüfung folgt der Manuskriptsprache; Grammatik- und Stilprüfung kann optional über konfigurierte externe Sprachdienste erfolgen.'],
      ['Verifizierte wissenschaftliche Identität', 'ORCID-Verknüpfung ist in den Autorensignatur-Workflow integriert; unveränderliche Revisionen können anschließend per WebAuthn/Passkey kryptografisch signiert werden.'],
      ['Publikationssystem-Workflows', 'Konfigurierte OJS-Workflows für Autoren, Redakteure und Gutachter sind funktionsfähig; die OMP-Connector-Architektur wird derzeit end-to-end stabilisiert.'],
      ['Plattformübergreifende Anwendung', 'Web, Windows, Linux, macOS und Android teilen dasselbe Manuskriptmodell und dieselbe Codebasis mit nativer Dateiverarbeitung, wo verfügbar.'],
    ],
    maturity: 'Die aktuelle Version bleibt Alpha, befindet sich aber in der Beta-Readiness-Stabilisierung. Regressionstests, Leistung bei großen Dokumenten, Fehlerbehebung, Interoperabilität und Release-Vertrauen sind die wichtigsten verbleibenden Gates.',
  },
} as const;

function getCurrentUpdate(locale: string) {
  if (locale === 'hu' || locale === 'de') return CURRENT_UPDATE[locale];
  return CURRENT_UPDATE.en;
}

export default function StudioDownloads() {
  const {i18n} = useDocusaurusContext();
  const copy = getPublicPageCopy(i18n.currentLocale);
  const t = copy.studio;
  const update = getCurrentUpdate(i18n.currentLocale);

  return (
    <Layout title="Open Manuscript Studio" description={t.lead}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <img src="/img/favicon.svg" alt="Open Manuscript Initiative" className={styles.icon} />
          <p className={styles.kicker}>Open Manuscript Initiative · 0.1.0-alpha.4 · beta-readiness stabilization</p>
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
            <h2>{update.title}</h2>
            <p className={styles.sectionLead}>{update.lead}</p>
            <div className={styles.grid}>
              {update.items.map(([title, description]) => (
                <article className={styles.card} key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className={styles.sectionLead}>{update.maturity}</p>
          </div>
        </section>

        <section className={styles.section}>
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

        <section className={styles.sectionAlt}>
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

        <section className={styles.section}>
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
            <p>{update.maturity}</p>
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

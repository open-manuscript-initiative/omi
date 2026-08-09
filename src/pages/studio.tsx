import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './studio.module.css';

const RELEASE_BASE =
  'https://github.com/open-manuscript-initiative/open-manuscript-studio/releases/latest/download';

const downloads = {
  windowsExe: `${RELEASE_BASE}/Open-Manuscript-Studio-Windows-x64-Setup.exe`,
  windowsMsi: `${RELEASE_BASE}/Open-Manuscript-Studio-Windows-x64.msi`,
  macArm: `${RELEASE_BASE}/Open-Manuscript-Studio-macOS-Apple-Silicon.dmg`,
  macIntel: `${RELEASE_BASE}/Open-Manuscript-Studio-macOS-Intel.dmg`,
  linuxAppImage: `${RELEASE_BASE}/Open-Manuscript-Studio-Linux-x64.AppImage`,
  linuxDeb: `${RELEASE_BASE}/Open-Manuscript-Studio-Linux-x64.deb`,
};

const copy = {
  en: {
    meta: 'Download Open Manuscript Studio for Windows, macOS and Linux, or use the browser version.',
    kicker: 'Reference implementation',
    title: 'Open Manuscript Studio',
    lead: 'Write, structure, review and export scholarly manuscripts in an open, portable authoring environment.',
    browserTitle: 'Use in your browser',
    browserText: 'Open the hosted Studio without installing anything. This is the quickest way to try the current web version.',
    browserButton: 'Open Web Studio',
    desktopTitle: 'Download the desktop app',
    desktopText: 'The desktop Studio uses the same OMI manuscript model and interface, while adding native local file access. Save manuscripts on your own computer, a network drive, or a cloud-synchronised folder such as OneDrive, Dropbox, Google Drive or iCloud Drive.',
    windows: 'Windows',
    windowsText: '64-bit Windows installer. Use the Setup executable for the simplest installation, or MSI for managed environments.',
    windowsExe: 'Download Windows Setup',
    windowsMsi: 'Download MSI',
    macArm: 'macOS — Apple Silicon',
    macArmText: 'For Macs with Apple M-series processors.',
    macArmButton: 'Download Apple Silicon DMG',
    macIntel: 'macOS — Intel',
    macIntelText: 'For Intel-based Macs.',
    macIntelButton: 'Download Intel DMG',
    linux: 'Linux',
    linuxText: 'Use AppImage on many distributions, or the DEB package on Debian/Ubuntu-based systems.',
    appImage: 'Download AppImage',
    deb: 'Download DEB',
    portableTitle: 'Your manuscript stays yours',
    portableText: 'The desktop application follows a local-first model. An OMI manuscript can be stored locally or in a folder synchronised by the cloud service of your choice. Server services remain optional for collaboration, account features and integrations.',
    formatsTitle: 'One manuscript, many publishing outputs',
    formatsText: 'The Studio can work with structured OMI manuscripts and supports publishing-oriented exports including JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX.',
    alphaTitle: 'Alpha software',
    alphaText: 'Open Manuscript Studio is under active development. Early desktop builds may not yet be code-signed or notarized on every platform, so the operating system may display a security warning during installation. Use test copies of important manuscripts and keep backups.',
    source: 'View source code',
    releases: 'All releases',
  },
  hu: {
    meta: 'Az Open Manuscript Studio letöltése Windows, macOS és Linux rendszerre, illetve a böngészős változat használata.',
    kicker: 'Referencia-megvalósítás',
    title: 'Open Manuscript Studio',
    lead: 'Tudományos kéziratok írása, strukturálása, lektorálása és exportálása nyílt, hordozható szerzői környezetben.',
    browserTitle: 'Használat böngészőben',
    browserText: 'A hosztolt Studio telepítés nélkül megnyitható. Ez a legegyszerűbb módja az aktuális webes változat kipróbálásának.',
    browserButton: 'Webes Studio megnyitása',
    desktopTitle: 'Asztali alkalmazás letöltése',
    desktopText: 'Az asztali Studio ugyanazt az OMI kéziratmodellt és felületet használja, de natív helyi fájlkezelést is biztosít. A kézirat menthető saját számítógépre, hálózati meghajtóra vagy például OneDrive, Dropbox, Google Drive vagy iCloud Drive által szinkronizált mappába.',
    windows: 'Windows',
    windowsText: '64 bites Windows telepítő. A Setup alkalmazás a legegyszerűbb telepítéshez, az MSI felügyelt környezetekhez használható.',
    windowsExe: 'Windows Setup letöltése',
    windowsMsi: 'MSI letöltése',
    macArm: 'macOS — Apple Silicon',
    macArmText: 'Apple M-sorozatú processzorral rendelkező Mac gépekhez.',
    macArmButton: 'Apple Silicon DMG letöltése',
    macIntel: 'macOS — Intel',
    macIntelText: 'Intel processzoros Mac gépekhez.',
    macIntelButton: 'Intel DMG letöltése',
    linux: 'Linux',
    linuxText: 'Az AppImage számos disztribúción használható, a DEB csomag Debian/Ubuntu-alapú rendszerekhez készült.',
    appImage: 'AppImage letöltése',
    deb: 'DEB letöltése',
    portableTitle: 'A kézirat a szerzőé marad',
    portableText: 'Az asztali alkalmazás local-first elvet követ. Az OMI kézirat helyben vagy a szerző által választott felhőszolgáltatás szinkronizált mappájában tárolható. A szerveres szolgáltatások az együttműködéshez, fiókfunkciókhoz és integrációkhoz opcionálisan használhatók.',
    formatsTitle: 'Egy kézirat, sok publikációs kimenet',
    formatsText: 'A Studio strukturált OMI kéziratokkal dolgozik, és többek között JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA és LaTeX exportot támogat.',
    alphaTitle: 'Alpha szoftver',
    alphaText: 'Az Open Manuscript Studio aktív fejlesztés alatt áll. A korai asztali buildek még nem minden platformon rendelkeznek kódaláírással vagy notarizációval, ezért az operációs rendszer telepítéskor biztonsági figyelmeztetést jeleníthet meg. Fontos kéziratoknál használjon biztonsági másolatot.',
    source: 'Forráskód megtekintése',
    releases: 'Összes kiadás',
  },
  de: {
    meta: 'Open Manuscript Studio für Windows, macOS und Linux herunterladen oder die Browser-Version verwenden.',
    kicker: 'Referenzimplementierung',
    title: 'Open Manuscript Studio',
    lead: 'Wissenschaftliche Manuskripte in einer offenen und portablen Autorenumgebung schreiben, strukturieren, begutachten und exportieren.',
    browserTitle: 'Im Browser verwenden',
    browserText: 'Das gehostete Studio kann ohne Installation geöffnet werden. Dies ist der schnellste Weg, die aktuelle Web-Version auszuprobieren.',
    browserButton: 'Web Studio öffnen',
    desktopTitle: 'Desktop-App herunterladen',
    desktopText: 'Das Desktop Studio verwendet dasselbe OMI-Manuskriptmodell und dieselbe Oberfläche und ergänzt nativen lokalen Dateizugriff. Manuskripte können auf dem eigenen Computer, einem Netzlaufwerk oder in einem synchronisierten Ordner von OneDrive, Dropbox, Google Drive oder iCloud Drive gespeichert werden.',
    windows: 'Windows',
    windowsText: '64-Bit-Windows-Installer. Das Setup-Programm eignet sich für die einfache Installation, MSI für verwaltete Umgebungen.',
    windowsExe: 'Windows Setup herunterladen',
    windowsMsi: 'MSI herunterladen',
    macArm: 'macOS — Apple Silicon',
    macArmText: 'Für Macs mit Prozessoren der Apple-M-Serie.',
    macArmButton: 'Apple-Silicon-DMG herunterladen',
    macIntel: 'macOS — Intel',
    macIntelText: 'Für Intel-basierte Macs.',
    macIntelButton: 'Intel-DMG herunterladen',
    linux: 'Linux',
    linuxText: 'AppImage kann auf vielen Distributionen verwendet werden; das DEB-Paket ist für Debian-/Ubuntu-basierte Systeme vorgesehen.',
    appImage: 'AppImage herunterladen',
    deb: 'DEB herunterladen',
    portableTitle: 'Ihr Manuskript bleibt Ihres',
    portableText: 'Die Desktop-Anwendung folgt einem Local-first-Modell. Ein OMI-Manuskript kann lokal oder in einem vom gewählten Cloud-Dienst synchronisierten Ordner gespeichert werden. Serverdienste bleiben für Zusammenarbeit, Kontofunktionen und Integrationen optional.',
    formatsTitle: 'Ein Manuskript, viele Publikationsausgaben',
    formatsText: 'Studio arbeitet mit strukturierten OMI-Manuskripten und unterstützt unter anderem Exporte nach JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA und LaTeX.',
    alphaTitle: 'Alpha-Software',
    alphaText: 'Open Manuscript Studio wird aktiv entwickelt. Frühe Desktop-Builds sind möglicherweise noch nicht auf jeder Plattform codesigniert oder notarisiert; daher kann das Betriebssystem bei der Installation eine Sicherheitswarnung anzeigen. Verwenden Sie für wichtige Manuskripte Sicherungskopien.',
    source: 'Quellcode ansehen',
    releases: 'Alle Releases',
  },
};

export default function StudioDownloads() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale as keyof typeof copy;
  const t = copy[locale] ?? copy.en;

  return (
    <Layout title={t.title} description={t.meta}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <img src="/img/favicon.svg" alt="Open Manuscript Initiative" className={styles.icon} />
          <p className={styles.kicker}>{t.kicker}</p>
          <h1>{t.title}</h1>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="https://studio.openmanuscript.org">
              {t.browserButton}
            </Link>
            <Link className="button button--secondary button--lg" to="https://github.com/open-manuscript-initiative/open-manuscript-studio">
              {t.source}
            </Link>
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
            <h2>{t.desktopTitle}</h2>
            <p className={styles.sectionLead}>{t.desktopText}</p>

            <div className={styles.grid}>
              <DownloadCard title={t.windows} description={t.windowsText}>
                <DownloadButton href={downloads.windowsExe}>{t.windowsExe}</DownloadButton>
                <DownloadButton href={downloads.windowsMsi} secondary>{t.windowsMsi}</DownloadButton>
              </DownloadCard>

              <DownloadCard title={t.macArm} description={t.macArmText}>
                <DownloadButton href={downloads.macArm}>{t.macArmButton}</DownloadButton>
              </DownloadCard>

              <DownloadCard title={t.macIntel} description={t.macIntelText}>
                <DownloadButton href={downloads.macIntel}>{t.macIntelButton}</DownloadButton>
              </DownloadCard>

              <DownloadCard title={t.linux} description={t.linuxText}>
                <DownloadButton href={downloads.linuxAppImage}>{t.appImage}</DownloadButton>
                <DownloadButton href={downloads.linuxDeb} secondary>{t.deb}</DownloadButton>
              </DownloadCard>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <article>
                <h2>{t.portableTitle}</h2>
                <p>{t.portableText}</p>
              </article>
              <article>
                <h2>{t.formatsTitle}</h2>
                <p>{t.formatsText}</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.notice}>
          <div className={styles.container}>
            <h2>{t.alphaTitle}</h2>
            <p>{t.alphaText}</p>
            <Link to="https://github.com/open-manuscript-initiative/open-manuscript-studio/releases">
              {t.releases}
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function DownloadCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.cardActions}>{children}</div>
    </article>
  );
}

function DownloadButton({
  href,
  secondary = false,
  children,
}: {
  href: string;
  secondary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={`button ${secondary ? 'button--secondary' : 'button--primary'}`}
      to={href}>
      {children}
    </Link>
  );
}

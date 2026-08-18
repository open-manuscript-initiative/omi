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
    meta: 'Open Manuscript Studio: structured scholarly authoring, peer review, OJS integration, multilingual workflows and desktop downloads for Windows, macOS and Linux.',
    kicker: 'Reference implementation',
    title: 'Open Manuscript Studio',
    lead: 'Write, structure, review, search, exchange and publish scholarly manuscripts in an open, multilingual and portable authoring environment.',
    browserTitle: 'Use in your browser',
    browserText: 'Open the hosted Studio without installing anything. The web application includes account-based workflows, multilingual authoring, structured manuscript editing, review tools, publishing exports and configured server integrations.',
    browserButton: 'Open Web Studio',
    capabilitiesTitle: 'What the Studio can do today',
    capabilitiesText: 'The reference implementation has moved well beyond the first editor prototype. The capabilities below are present in the current development line; some connected services require server-side configuration.',
    featureEditingTitle: 'Structured authoring and search',
    featureEditingText: 'Edit semantic sections and rich text while preserving headings, notes, citations, lists, tables and inline formatting. Structured search and replace supports scoped result navigation across manuscript content.',
    featureLanguageTitle: 'Multilingual interface and help',
    featureLanguageText: 'The Studio ships with 24 supported European UI languages. All languages are available at sign-in, and the integrated help system follows the selected interface language.',
    featureIdentityTitle: 'Accounts, identity and contributors',
    featureIdentityText: 'Server-backed accounts, contributor roles, affiliations and author identity are represented separately from manuscript content. ORCID sign-in and linking are supported when OAuth is configured by the installation.',
    featureReviewTitle: 'Double-blind peer review',
    featureReviewText: 'Role-aware author, reviewer and editor views support anonymous review, review assignments, manuscript snapshots, reviewer comments and editorial review overview workflows.',
    featureOjsTitle: 'OJS-connected editorial workflow',
    featureOjsText: 'The Studio can receive OJS launch context and assignments, import manuscript files and metadata, preserve structured DOCX content such as headings, inline semantics, notes, references and tables, and return work through the integration workflow.',
    featureCloudTitle: 'Cloud storage and integrations',
    featureCloudText: 'A provider-based integration layer now includes WebDAV/Nextcloud cloud storage support and an integrations catalogue with declared authentication modes. Additional providers can be added without coupling them to the manuscript model.',
    featurePublishTitle: 'Publishing profiles and exports',
    featurePublishText: 'Publisher profiles, export styles and print styles can be separated from manuscript semantics. Current export targets include JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX.',
    featureDesktopTitle: 'Desktop applications and updates',
    featureDesktopText: 'Native Tauri builds are produced for Windows, Linux, Intel macOS and Apple Silicon. The desktop application includes an update-notification and installer flow so new releases can be offered without requiring users to monitor GitHub manually.',
    desktopTitle: 'Download the desktop app',
    desktopText: 'The desktop Studio uses the same OMI manuscript model and interface while adding native local file access. Save manuscripts on your own computer, a network drive, or a cloud-synchronised folder. Connected account and editorial services remain available when the installation is online.',
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
    portableText: 'The desktop application follows a local-first model. An OMI manuscript can be stored locally or in a folder synchronised by the cloud service of your choice. Server services add accounts, collaboration, review and integrations without making the manuscript dependent on one provider.',
    formatsTitle: 'One manuscript, many publishing outputs',
    formatsText: 'Content, scholarly meaning and publication styling remain separate. The same structured source can therefore move from authoring and review to journal, web, XML, print and desktop-publishing workflows without rebuilding the manuscript.',
    statusTitle: 'Alpha release and signing status',
    statusText: 'Open Manuscript Studio is under active development. Desktop release automation is operational, but code signing is still being prepared. Windows may therefore display an unknown-publisher or reputation warning for current installers. Keep backups and use test copies for irreplaceable manuscripts while the alpha series evolves.',
    statusDetails: 'Implementation status',
    signingPolicy: 'Code signing policy',
    source: 'View source code',
    releases: 'All releases',
  },
  hu: {
    meta: 'Open Manuscript Studio: strukturált tudományos kéziratszerkesztés, peer review, OJS-integráció, többnyelvű munkafolyamatok és Windows, macOS, Linux asztali változatok.',
    kicker: 'Referencia-megvalósítás',
    title: 'Open Manuscript Studio',
    lead: 'Tudományos kéziratok írása, strukturálása, lektorálása, keresése, cseréje és publikációs előkészítése nyílt, többnyelvű és hordozható szerzői környezetben.',
    browserTitle: 'Használat böngészőben',
    browserText: 'A hosztolt Studio telepítés nélkül megnyitható. A webalkalmazás már fiókalapú munkafolyamatokat, többnyelvű szerkesztést, strukturált kéziratkezelést, lektori eszközöket, publikációs exportokat és konfigurált szerverintegrációkat is tartalmaz.',
    browserButton: 'Webes Studio megnyitása',
    capabilitiesTitle: 'Mire képes jelenleg a Studio?',
    capabilitiesText: 'A referencia-megvalósítás már jelentősen túllépett az első szerkesztőprototípuson. Az alábbi képességek a jelenlegi fejlesztési ágban megtalálhatók; egyes kapcsolt szolgáltatások használatához szerveroldali konfiguráció szükséges.',
    featureEditingTitle: 'Strukturált szerkesztés és keresés',
    featureEditingText: 'A szemantikus fejezetek és a formázott szöveg szerkeszthető úgy, hogy a címsorok, jegyzetek, hivatkozások, listák, táblázatok és inline formázások megmaradjanak. A strukturált keresés és csere hatóköröket és találatok közötti navigációt is támogat.',
    featureLanguageTitle: 'Többnyelvű felület és súgó',
    featureLanguageText: 'A Studio jelenleg 24 támogatott európai felületi nyelvet tartalmaz. Bejelentkezéskor mindegyik kiválasztható, és a beépített súgó is a kiválasztott felületi nyelvet követi.',
    featureIdentityTitle: 'Fiókok, identitás és közreműködők',
    featureIdentityText: 'A szerveroldali fiókok, közreműködői szerepek, affiliációk és szerzői identitások elkülönülnek a kézirat tartalmától. Az ORCID-bejelentkezés és -összekapcsolás támogatott, ha az adott telepítésen az OAuth konfigurálva van.',
    featureReviewTitle: 'Double-blind peer review',
    featureReviewText: 'A szerepkörfüggő szerzői, lektori és szerkesztői nézet anonim lektorálást, lektori kijelöléseket, kézirat-pillanatképeket, lektori megjegyzéseket és szerkesztői review-áttekintést támogat.',
    featureOjsTitle: 'OJS-hez kapcsolt szerkesztőségi munkafolyamat',
    featureOjsText: 'A Studio fogadni tudja az OJS launch-kontextust és kijelöléseket, importálja a kéziratfájlokat és metaadatokat, és megőrzi a strukturált DOCX-elemeket, többek között a címsorokat, inline szemantikát, jegyzeteket, hivatkozásokat és táblázatokat.',
    featureCloudTitle: 'Felhőmentés és integrációk',
    featureCloudText: 'A szolgáltatóalapú integrációs réteg WebDAV/Nextcloud felhőtárolási támogatást és integrációs katalógust tartalmaz, deklarált hitelesítési módokkal. További szolgáltatók a kéziratmodell módosítása nélkül illeszthetők hozzá.',
    featurePublishTitle: 'Kiadói profilok és exportok',
    featurePublishText: 'A kiadói profilok, exportstílusok és nyomtatási stílusok elkülönülnek a kézirat szemantikájától. A jelenlegi célformátumok között JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA és LaTeX is szerepel.',
    featureDesktopTitle: 'Asztali alkalmazások és frissítés',
    featureDesktopText: 'Natív Tauri buildek készülnek Windowsra, Linuxra, Intel macOS-re és Apple Siliconra. Az asztali alkalmazás már frissítési értesítési és telepítési folyamatot is tartalmaz, így az új verziók felajánlhatók a felhasználónak.',
    desktopTitle: 'Asztali alkalmazás letöltése',
    desktopText: 'Az asztali Studio ugyanazt az OMI kéziratmodellt és felületet használja, de natív helyi fájlkezelést is biztosít. A kézirat menthető saját számítógépre, hálózati meghajtóra vagy felhővel szinkronizált mappába; online kapcsolat esetén a fiók-, együttműködési és szerkesztőségi szolgáltatások is elérhetők.',
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
    portableText: 'Az asztali alkalmazás local-first elvet követ. Az OMI kézirat helyben vagy a szerző által választott felhőszolgáltatás szinkronizált mappájában tárolható. A szerveres szolgáltatások fiókokkal, együttműködéssel, review-val és integrációkkal egészítik ki ezt anélkül, hogy a kézirat egyetlen szolgáltatótól függne.',
    formatsTitle: 'Egy kézirat, sok publikációs kimenet',
    formatsText: 'A tartalom, a tudományos jelentés és a publikációs megjelenés külön réteg marad. Ugyanaz a strukturált forrás így a szerzői és lektori fázistól a folyóirati, webes, XML-, nyomtatási és DTP-munkafolyamatokig újrahasznosítható.',
    statusTitle: 'Alpha kiadás és kódaláírás',
    statusText: 'Az Open Manuscript Studio aktív fejlesztés alatt áll. Az asztali release-automatizálás működik, a kódaláírás előkészítése azonban még folyamatban van. A Windows ezért a jelenlegi telepítőknél ismeretlen kiadóra vagy reputációra vonatkozó figyelmeztetést jeleníthet meg. Az alpha sorozat alatt fontos kéziratokról mindig tartson biztonsági másolatot.',
    statusDetails: 'Implementációs állapot',
    signingPolicy: 'Kódaláírási szabályzat',
    source: 'Forráskód megtekintése',
    releases: 'Összes kiadás',
  },
  de: {
    meta: 'Open Manuscript Studio: strukturiertes wissenschaftliches Schreiben, Peer Review, OJS-Integration, mehrsprachige Workflows und Desktop-Downloads für Windows, macOS und Linux.',
    kicker: 'Referenzimplementierung',
    title: 'Open Manuscript Studio',
    lead: 'Wissenschaftliche Manuskripte in einer offenen, mehrsprachigen und portablen Autorenumgebung schreiben, strukturieren, begutachten, durchsuchen, austauschen und publizieren.',
    browserTitle: 'Im Browser verwenden',
    browserText: 'Das gehostete Studio kann ohne Installation geöffnet werden. Die Webanwendung umfasst inzwischen kontobasierte Workflows, mehrsprachiges Authoring, strukturierte Manuskriptbearbeitung, Review-Werkzeuge, Publikationsexporte und konfigurierte Serverintegrationen.',
    browserButton: 'Web Studio öffnen',
    capabilitiesTitle: 'Was Studio heute bereits kann',
    capabilitiesText: 'Die Referenzimplementierung ist inzwischen deutlich über den ersten Editor-Prototyp hinausgewachsen. Die folgenden Funktionen sind im aktuellen Entwicklungsstand vorhanden; einige verbundene Dienste erfordern eine serverseitige Konfiguration.',
    featureEditingTitle: 'Strukturiertes Authoring und Suche',
    featureEditingText: 'Semantische Abschnitte und Rich Text können bearbeitet werden, wobei Überschriften, Notizen, Zitate, Listen, Tabellen und Inline-Formatierung erhalten bleiben. Strukturierte Suche und Ersetzen unterstützt Bereiche und Navigation zwischen Treffern.',
    featureLanguageTitle: 'Mehrsprachige Oberfläche und Hilfe',
    featureLanguageText: 'Studio enthält derzeit 24 unterstützte europäische Oberflächensprachen. Alle können bereits bei der Anmeldung ausgewählt werden; auch das integrierte Hilfesystem folgt der gewählten Sprache.',
    featureIdentityTitle: 'Konten, Identität und Mitwirkende',
    featureIdentityText: 'Serverbasierte Konten, Rollen von Mitwirkenden, Affiliationen und Autorenidentitäten werden getrennt vom Manuskriptinhalt verwaltet. ORCID-Anmeldung und -Verknüpfung werden unterstützt, wenn OAuth für die Installation konfiguriert ist.',
    featureReviewTitle: 'Double-blind Peer Review',
    featureReviewText: 'Rollenabhängige Ansichten für Autorinnen und Autoren, Gutachtende und Redaktion unterstützen anonymes Review, Zuweisungen, Manuskript-Snapshots, Review-Kommentare und redaktionelle Übersichten.',
    featureOjsTitle: 'Mit OJS verbundener Redaktionsworkflow',
    featureOjsText: 'Studio kann OJS-Launch-Kontext und Zuweisungen übernehmen, Manuskriptdateien und Metadaten importieren und strukturierte DOCX-Inhalte wie Überschriften, Inline-Semantik, Notizen, Referenzen und Tabellen erhalten.',
    featureCloudTitle: 'Cloud-Speicher und Integrationen',
    featureCloudText: 'Die providerbasierte Integrationsschicht enthält WebDAV-/Nextcloud-Unterstützung und einen Integrationskatalog mit deklarierten Authentifizierungsmodi. Weitere Provider können hinzugefügt werden, ohne das Manuskriptmodell zu koppeln.',
    featurePublishTitle: 'Verlagsprofile und Exporte',
    featurePublishText: 'Verlagsprofile, Exportstile und Druckstile bleiben von der Manuskriptsemantik getrennt. Aktuelle Ausgabeziele umfassen JATS XML, HTML5, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA und LaTeX.',
    featureDesktopTitle: 'Desktop-Anwendungen und Updates',
    featureDesktopText: 'Native Tauri-Builds werden für Windows, Linux, Intel-macOS und Apple Silicon erstellt. Die Desktop-Anwendung besitzt inzwischen einen Update-Hinweis- und Installationsablauf, damit neue Releases direkt angeboten werden können.',
    desktopTitle: 'Desktop-App herunterladen',
    desktopText: 'Das Desktop Studio verwendet dasselbe OMI-Manuskriptmodell und dieselbe Oberfläche und ergänzt nativen lokalen Dateizugriff. Manuskripte können lokal, auf Netzlaufwerken oder in synchronisierten Cloud-Ordnern gespeichert werden; bei Online-Verbindung stehen Konto-, Kollaborations- und Redaktionsdienste zur Verfügung.',
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
    portableText: 'Die Desktop-Anwendung folgt einem Local-first-Modell. Ein OMI-Manuskript kann lokal oder in einem synchronisierten Ordner des gewählten Cloud-Dienstes gespeichert werden. Serverdienste ergänzen Konten, Zusammenarbeit, Review und Integrationen, ohne das Manuskript an einen Anbieter zu binden.',
    formatsTitle: 'Ein Manuskript, viele Publikationsausgaben',
    formatsText: 'Inhalt, wissenschaftliche Semantik und Publikationsgestaltung bleiben getrennte Ebenen. Dieselbe strukturierte Quelle kann daher vom Authoring und Review bis zu Journal-, Web-, XML-, Print- und DTP-Workflows wiederverwendet werden.',
    statusTitle: 'Alpha-Release und Codesignierung',
    statusText: 'Open Manuscript Studio wird aktiv entwickelt. Die automatisierte Desktop-Veröffentlichung funktioniert, die Codesignierung wird jedoch noch vorbereitet. Windows kann deshalb bei aktuellen Installern eine Warnung zu einem unbekannten Herausgeber oder zur Reputation anzeigen. Halten Sie während der Alpha-Serie Sicherungskopien wichtiger Manuskripte bereit.',
    statusDetails: 'Implementierungsstatus',
    signingPolicy: 'Codesignierungsrichtlinie',
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
            <p className={styles.sectionLead}>{t.browserText}</p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2>{t.capabilitiesTitle}</h2>
            <p className={styles.sectionLead}>{t.capabilitiesText}</p>
            <div className={styles.grid}>
              <FeatureCard title={t.featureEditingTitle}>{t.featureEditingText}</FeatureCard>
              <FeatureCard title={t.featureLanguageTitle}>{t.featureLanguageText}</FeatureCard>
              <FeatureCard title={t.featureIdentityTitle}>{t.featureIdentityText}</FeatureCard>
              <FeatureCard title={t.featureReviewTitle}>{t.featureReviewText}</FeatureCard>
              <FeatureCard title={t.featureOjsTitle}>{t.featureOjsText}</FeatureCard>
              <FeatureCard title={t.featureCloudTitle}>{t.featureCloudText}</FeatureCard>
              <FeatureCard title={t.featurePublishTitle}>{t.featurePublishText}</FeatureCard>
              <FeatureCard title={t.featureDesktopTitle}>{t.featureDesktopText}</FeatureCard>
            </div>
          </div>
        </section>

        <section className={styles.section}>
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

        <section className={styles.sectionAlt}>
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
            <h2>{t.statusTitle}</h2>
            <p>{t.statusText}</p>
            <div className={styles.actions}>
              <Link to="/docs/governance/implementation-status-matrix">{t.statusDetails}</Link>
              <Link to="/docs/governance/code-signing-policy">{t.signingPolicy}</Link>
              <Link to="https://github.com/open-manuscript-initiative/open-manuscript-studio/releases">{t.releases}</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
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

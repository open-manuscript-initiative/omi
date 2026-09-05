import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './studio.module.css';

const STUDIO_RELEASE_TAG = 'v0.1.0-beta.3';
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
    title: 'Open Manuscript Studio public beta',
    lead: 'Version 0.1.0-beta.3 consolidates the public beta with verified OJS and OMP 3.5 review workflows and current browser, desktop and Android builds.',
    items: [
      ['Desktop manuscript workspace', 'Browser-style document tabs, full-window Studio/Account surfaces and a toggleable Word-like document outline support long-form desktop work without changing the mobile structure workflow.'],
      ['Large DOCX and rich-text usability', 'Large Word imports use deferred editor mounting and open directly as OMI manuscripts. Lazy previews now use final typography from the first render, avoiding visible line-spacing shifts while additional content loads.'],
      ['Dynamic indexes', 'Word XE markers are imported as semantic index targets instead of page-number text. Studio can present each name once with clickable links to real occurrences, while DOCX export writes XE and INDEX fields so final page numbers are generated from the exported layout.'],
      ['Search, replace and block structure', 'Document search now exposes search-and-replace directly and highlights matches. The current paragraph or selected blocks can be transformed between normal paragraphs, headings, block quotes, bullet lists, numbered lists and code blocks.'],
      ['Proofreading, translation and agents', 'Local spellcheck follows manuscript language. Optional grammar/style services, DeepL execution, provider-neutral AI agents and integration audit records operate through explicit, scoped external-service flows.'],
      ['Cross-device account security', 'Password recovery uses single-use expiring reset tokens and revokes prior sessions after password change. Connected sign-in methods can be managed from the account panel without conflating account identity with manuscript permissions.'],
      ['Federated sign-in', 'Google, Microsoft and configurable institutional OpenID Connect providers use Authorization Code + PKCE, state/nonce checks and issuer/audience validation. Existing accounts require explicit identity linking rather than e-mail auto-linking.'],
      ['Device-aware storage', 'Installed clients distinguish trusted personal devices from shared/foreign devices. Own devices can use native local/system storage; shared devices prefer profile cloud connections and do not retain local working paths.'],
      ['Android-native file workflow', 'Android uses the system Documents / Storage Access Framework picker for opening, saving, Save As and portable OMI backup/export destinations instead of broad shared-storage permissions.'],
      ['iOS and iPadOS native target', 'The shared Tauri client now generates and compiles as an Apple Silicon iPhone/iPad simulator app. Files/UIDocumentPicker storage, mobile export delivery and native authentication handoff are implemented; TestFlight/App Store distribution still requires Apple Developer signing, provisioning and Universal Link association.'],
      ['Institutional and central administration', 'Personal and institutional profiles are separated. Institution MEMBER/ADMIN/OWNER roles, administrator sign-in, OMI central administration, scoped institution Admin API credentials and append-only admin audit events are implemented without granting manuscript access.'],
      ['Verified scholarly identity', 'ORCID linking is integrated with cryptographic author signing: immutable committed revisions can be bound to verified ORCID identity and portable WebAuthn/issuer verification evidence.'],
      ['Publishing-system workflows', 'OJS and OMP 3.5 author, editor and double-anonymous reviewer workflows are operational when configured. Native end-to-end tests verify assignment-scoped files, review forms, corrections, separated feedback and signed writeback.'],
    ],
    nativeAppsTitle: 'Native applications and platform builds',
    nativeAppsDescription: 'Studio uses one OMI application core across desktop and mobile. Download public beta native builds where available; validated targets that still require platform-store signing are clearly marked instead of exposing non-existent packages.',
    iosTitle: 'iOS / iPadOS',
    iosDescription: 'Validated native iPhone/iPad simulator target using the same Studio core. Public TestFlight/App Store installation is not yet available because Apple signing/provisioning and the final Universal Link association are still required.',
    iosAction: 'iOS/iPadOS implementation details',
    betaTitle: 'Public beta release',
    betaText: 'OMI Studio 0.1.0-beta.3 is intended for broader real-world testing. Core authoring, DOCX import/export, document lifecycle, search/replace, semantic indexes and configured OJS and OMP review workflows are available, while compatibility, performance, recovery and platform distribution continue to be hardened before 1.0.',
    maturity: 'The project is now in public beta. Beta development prioritizes regression testing, large-document performance, error recovery, interoperability, migration discipline and release trust on the path to the first release candidate.',
  },
  hu: {
    title: 'Az Open Manuscript Studio nyilvános bétája',
    lead: 'A 0.1.0-beta.3 verzió a nyilvános bétát teljes OJS- és OMP 3.5 lektori munkafolyamat-ellenőrzéssel, valamint friss webes, asztali és Android buildekkel erősíti meg.',
    items: [
      ['Asztali kézirat-munkatér', 'Böngészőszerű dokumentumfülek, teljes ablakos Studio/Fiók felületek és kapcsolható, Word-szerű dokumentumvázlat segíti a hosszabb asztali munkát; mobilon megmarad a külön dokumentumszerkezeti nézet.'],
      ['Nagy DOCX és rich-text használhatóság', 'A nagy Word-importok késleltetett szerkesztőbetöltést használnak és közvetlenül OMI-kéziratként nyílnak meg. A lazy előnézet már az első rendernél a végleges tipográfiát használja, ezért további részek betöltésekor nincs látható sorköz-átugrás.'],
      ['Dinamikus mutatók', 'A Word XE jelölései szemantikus mutatókapcsolatként importálódnak, nem oldalszám-szövegként. A Studio a neveket egyszer jelenítheti meg, a valós előfordulásokhoz kattintható kapcsolatokkal; DOCX exportkor XE és INDEX mezők készülnek, így a végleges oldalszámokat az exportált tördelés állítja elő.'],
      ['Keresés, csere és blokkszerkezet', 'A dokumentumkeresőben közvetlenül elérhető a keresés és csere, a találatok pedig kiemelést kapnak. Az aktuális bekezdés vagy kijelölt blokkok sima bekezdéssé, címsorrá, idézetté, felsorolássá, számozott listává vagy kódblokkká alakíthatók.'],
      ['Nyelvi ellenőrzés, fordítás és ügynökök', 'A helyi helyesírás-ellenőrzés követi a kézirat nyelvét. A bekapcsolható nyelvhelyességi/stílusellenőrzés, a DeepL-fordítás, a szolgáltatófüggetlen AI-ügynökök és az integrációs audit explicit, scope-olt külső szolgáltatási folyamatokon keresztül működnek.'],
      ['Eszközök között használható biztonságos fiók', 'A jelszó-visszaállítás egyszer használható, lejáró tokeneket használ, a sikeres jelszócsere pedig megszünteti a korábbi munkameneteket. A kapcsolt bejelentkezési módok a Fiókban kezelhetők a kéziratjogosultságoktól elkülönítve.'],
      ['Federált bejelentkezés', 'Google, Microsoft és konfigurálható intézményi OpenID Connect szolgáltatók Authorization Code + PKCE, state/nonce és issuer/audience ellenőrzést használnak. Meglévő fiókhoz külső identitás csak kifejezett összekapcsolással rendelhető.'],
      ['Eszköztudatos tárhelykezelés', 'A telepített kliensek megkülönböztetik a saját és a megosztott/idegen eszközt. Saját eszközön használható a natív helyi vagy rendszerszintű tárhely; megosztott eszközön a profilhoz kötött felhőkapcsolat az elsődleges, és a helyi munkafájl útvonala nem marad meg.'],
      ['Android natív fájlmunkafolyamat', 'Androidon a rendszer Dokumentumok / Storage Access Framework választója kezeli a megnyitást, mentést, más helyre mentést és az OMI biztonsági mentések/exportok célját, általános tárhely-hozzáférés nélkül.'],
      ['iOS és iPadOS natív célverzió', 'A közös Tauri kliens már Apple Silicon iPhone/iPad szimulátoros alkalmazásként is generálható és sikeresen fordul. Elkészült a Files/UIDocumentPicker tárhelykezelés, a mobil export és a natív hitelesítési visszatérés; a TestFlight/App Store terjesztéshez még Apple Developer aláírás, provisioning és Universal Link társítás szükséges.'],
      ['Intézményi és központi adminisztráció', 'A személyes és intézményi profilok különváltak. Elkészült az intézményi MEMBER/ADMIN/OWNER modell, az adminisztrátori belépés, az OMI központi adminisztráció, a scope-olt intézményi Admin API és az adminisztrációs auditnapló — kéziratokhoz való automatikus hozzáférés nélkül.'],
      ['Hitelesített tudományos identitás', 'Az ORCID-kapcsolás bekerült a kriptográfiai szerzői aláírásba: változtathatatlan, szerveren rögzített revízió köthető ellenőrzött ORCID-identitáshoz és hordozható WebAuthn/issuer ellenőrzési bizonyítékhoz.'],
      ['Publikációs rendszerkapcsolatok', 'A konfigurált OJS és OMP 3.5 szerzői, szerkesztői és kettős vak lektori munkafolyamatok működnek. Natív végponttól végpontig tartó tesztek ellenőrzik a hozzárendelt fájlokat, lektori űrlapokat, javításokat, elkülönített visszajelzéseket és az aláírt visszaírást.'],
    ],
    nativeAppsTitle: 'Natív alkalmazások és platformbuildek',
    nativeAppsDescription: 'A Studio ugyanazt az OMI alkalmazásmagot használja asztali és mobil rendszereken. A nyilvános béta natív buildek letölthetők; a még platformáruházi aláírásra váró validált célverziókat külön jelöljük, nem kínálunk hozzájuk nem létező telepítőt.',
    iosTitle: 'iOS / iPadOS',
    iosDescription: 'Validált natív iPhone/iPad szimulátoros célverzió ugyanazzal a Studio-maggal. Nyilvános TestFlight/App Store telepítés még nincs, mert ehhez Apple aláírás/provisioning és a végleges Universal Link társítás szükséges.',
    iosAction: 'iOS/iPadOS megvalósítás részletei',
    betaTitle: 'Nyilvános béta kiadás',
    betaText: 'Az OMI Studio 0.1.0-beta.3 szélesebb körű, valós használati tesztelésre készült. Az alapvető kéziratszerkesztés, DOCX import/export, dokumentuméletciklus, keresés és csere, szemantikus mutatók és a konfigurált OJS és OMP lektori munkafolyamatok használhatók; az 1.0 előtt tovább folytatódik a kompatibilitás, teljesítmény, hibából való helyreállás és platformterjesztés keményítése.',
    maturity: 'A projekt mostantól nyilvános béta. A béta szakasz fő feladata a regressziós tesztelés, a nagy dokumentumok teljesítménye, a hibából való helyreállás, az interoperabilitás, a migrációs fegyelem és a kiadások megbízhatósága az első release candidate felé.',
  },
  de: {
    title: 'Öffentliche Beta von Open Manuscript Studio',
    lead: 'Version 0.1.0-beta.3 festigt die öffentliche Beta mit verifizierten OJS- und OMP-3.5-Begutachtungsabläufen sowie aktuellen Browser-, Desktop- und Android-Builds.',
    items: [
      ['Desktop-Manuskriptarbeitsbereich', 'Browserähnliche Dokument-Tabs, Vollfenster-Ansichten für Studio/Konto und eine einblendbare Word-ähnliche Dokumentgliederung unterstützen lange Desktop-Arbeiten; mobil bleibt der separate Struktur-Workflow erhalten.'],
      ['Große DOCX-Dateien und Rich-Text-Bedienung', 'Große Word-Importe verwenden verzögertes Editor-Mounting und öffnen direkt als OMI-Manuskript. Lazy-Vorschauen verwenden bereits beim ersten Rendern die endgültige Typografie, sodass beim Nachladen keine sichtbaren Zeilenabstands-Sprünge entstehen.'],
      ['Dynamische Register', 'Word-XE-Markierungen werden als semantische Registerziele statt als Seitenzahltext importiert. Studio kann jeden Namen einmal mit klickbaren Verweisen auf reale Vorkommen anzeigen; beim DOCX-Export werden XE- und INDEX-Felder erzeugt, damit die endgültigen Seitenzahlen aus dem exportierten Layout entstehen.'],
      ['Suchen, Ersetzen und Blockstruktur', 'Die Dokumentsuche bietet Suchen und Ersetzen direkt an und hebt Treffer hervor. Der aktuelle Absatz oder ausgewählte Blöcke können in normale Absätze, Überschriften, Blockzitate, Aufzählungen, nummerierte Listen oder Codeblöcke umgewandelt werden.'],
      ['Korrektur, Übersetzung und Agenten', 'Lokale Rechtschreibprüfung folgt der Manuskriptsprache. Optionale Grammatik-/Stildienste, DeepL, providerneutrale KI-Agenten und Integrations-Auditdaten laufen über explizite, bereichsgebundene externe Dienstflüsse.'],
      ['Sichere geräteübergreifende Konten', 'Passwort-Wiederherstellung verwendet einmalige, ablaufende Tokens und beendet nach Passwortänderung vorhandene Sitzungen. Verknüpfte Anmeldemethoden werden im Konto getrennt von Manuskriptberechtigungen verwaltet.'],
      ['Föderierte Anmeldung', 'Google, Microsoft und konfigurierbare institutionelle OpenID-Connect-Provider verwenden Authorization Code + PKCE sowie State/Nonce- und Issuer/Audience-Prüfung. Bestehende Konten werden nicht allein anhand der E-Mail automatisch verknüpft.'],
      ['Gerätebewusste Speicherung', 'Installierte Clients unterscheiden eigene von gemeinsam genutzten/fremden Geräten. Eigene Geräte können nativen lokalen/Systemspeicher verwenden; auf gemeinsam genutzten Geräten werden profilgebundene Cloud-Verbindungen bevorzugt und lokale Arbeitswege nicht behalten.'],
      ['Android-native Dateiabläufe', 'Android verwendet den systemeigenen Dokument-/Storage-Access-Framework-Dialog für Öffnen, Speichern, Speichern unter sowie OMI-Backups/Exporte statt breit angelegter Speicherberechtigungen.'],
      ['iOS- und iPadOS-Nativziel', 'Der gemeinsame Tauri-Client wird inzwischen als Apple-Silicon-iPhone/iPad-Simulator-App erzeugt und erfolgreich kompiliert. Files/UIDocumentPicker, mobile Exportausgabe und nativer Authentifizierungs-Handoff sind implementiert; für TestFlight/App Store fehlen noch Apple-Developer-Signierung, Provisioning und die endgültige Universal-Link-Zuordnung.'],
      ['Institutionelle und zentrale Administration', 'Persönliche und institutionelle Profile sind getrennt. MEMBER/ADMIN/OWNER-Rollen, Administrator-Anmeldung, zentrale OMI-Administration, bereichsgebundene Institution-Admin-API-Zugangsdaten und Admin-Auditereignisse sind implementiert, ohne Manuskriptzugriff zu verleihen.'],
      ['Verifizierte wissenschaftliche Identität', 'ORCID-Verknüpfung ist mit kryptografischer Autorensignatur verbunden: unveränderliche committed Revisionen können an eine verifizierte ORCID-Identität und portable WebAuthn/Issuer-Verifikation gebunden werden.'],
      ['Publikationssystem-Workflows', 'Konfigurierte OJS- und OMP-3.5-Workflows für Autoren, Redakteure und doppelt anonyme Gutachter sind funktionsfähig. Native End-to-End-Tests prüfen zugewiesene Dateien, Begutachtungsformulare, Korrekturen, getrenntes Feedback und signierte Rückschreibung.'],
    ],
    nativeAppsTitle: 'Native Anwendungen und Plattform-Builds',
    nativeAppsDescription: 'Studio verwendet denselben OMI-Anwendungskern auf Desktop- und Mobilplattformen. Öffentliche Beta-Builds können heruntergeladen werden; validierte Ziele, die noch Store-Signierung benötigen, werden klar markiert, statt nicht vorhandene Pakete anzubieten.',
    iosTitle: 'iOS / iPadOS',
    iosDescription: 'Validiertes natives iPhone/iPad-Simulatorziel mit demselben Studio-Kern. Eine öffentliche TestFlight/App-Store-Installation ist noch nicht verfügbar, da Apple-Signierung/Provisioning und die endgültige Universal-Link-Zuordnung erforderlich sind.',
    iosAction: 'Details zur iOS/iPadOS-Implementierung',
    betaTitle: 'Öffentliche Beta-Version',
    betaText: 'OMI Studio 0.1.0-beta.3 ist für breitere Tests unter realen Bedingungen vorgesehen. Kernfunktionen für Autorenschaft, DOCX-Import/-Export, Dokumentlebenszyklus, Suchen/Ersetzen, semantische Register und konfigurierte OJS- und OMP-Begutachtungsabläufe sind verfügbar; Kompatibilität, Leistung, Wiederherstellung und Plattformverteilung werden vor 1.0 weiter gehärtet.',
    maturity: 'Das Projekt befindet sich jetzt in der öffentlichen Beta. Im Mittelpunkt stehen Regressionstests, Leistung bei großen Dokumenten, Fehlerwiederherstellung, Interoperabilität, saubere Migrationen und verlässliche Releases auf dem Weg zum ersten Release Candidate.',
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
          <p className={styles.kicker}>Open Manuscript Initiative · 0.1.0-beta.3 · public beta</p>
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
            <h2>{update.nativeAppsTitle}</h2>
            <p className={styles.sectionLead}>{update.nativeAppsDescription}</p>
            <div className={styles.grid}>
              <DownloadCard title={t.windows} description={t.windowsText}>
                <DownloadButton href={downloads.windowsExe}>{t.setup}</DownloadButton>
                <DownloadButton href={downloads.windowsMsi} secondary>{t.msi}</DownloadButton>
                <p><Link to="/docs/governance/code-signing-policy">Code signing policy</Link></p>
              </DownloadCard>
              <DownloadCard title={t.android ?? 'Android'} description={t.androidText ?? 'Installable universal APK for Android devices.'}>
                <DownloadButton href={downloads.android}>{t.apk ?? 'Download Android APK'}</DownloadButton>
              </DownloadCard>
              <DownloadCard title={update.iosTitle} description={update.iosDescription}>
                <Link className="button button--secondary" to="/docs/foundations/ios-ipados-studio">{update.iosAction}</Link>
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
            <h2>{update.betaTitle}</h2>
            <p>{update.betaText}</p>
            <p>{update.maturity}</p>
            <p>
              <Link to="/docs/governance/studio-implementation-status">{copy.home.status}</Link>
              {' · '}
              <Link to="/docs/foundations/ios-ipados-studio">iOS/iPadOS</Link>
              {' · '}
              <Link to="/docs/integrations/implementation-status">{t.capabilities[6]}</Link>
              {' · '}
              <Link to="/docs/integrations/institutional-administration">Institutional administration</Link>
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

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './studio.module.css';

const STUDIO_VERSION = '0.1.0-beta.4';
const NEXT_STUDIO_VERSION = '0.1.0-beta.5';
const RELEASE_BASE = 'https://github.com/open-manuscript-initiative/open-manuscript-studio/releases/latest/download';
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
    lead: 'Version 0.1.0-beta.4 remains the current public beta while 0.1.0-beta.5 is being prepared with direct OJS/OMP author submission, Android Google Play submission readiness, one-step responsive navigation, cross-platform update notifications, separate printed and interactive PDF export, verified OJS and OMP 3.5 workflows, and provenance-safe immutable releases.',
    items: [
      ['Direct OJS/OMP author submission', 'From Publication, an eligible standalone study can be prepared and submitted directly to a configured OJS or OMP installation. Studio transfers manuscript metadata and files, preserves draft/retry state, validates the target workflow, and uses the author’s publishing-system API credentials.'],
      ['Release integrity and update flow', 'Desktop, mobile and review surfaces can notify users about newer Studio releases. The release pipeline binds a release tag to the exact build commit and never replaces assets of an already published release.'],
      ['One-step responsive navigation', 'Studio navigation opens directly without an intermediate second-level menu. Desktop and mobile use the same responsive navigation model with a same-position close control.'],
      ['Printed and interactive PDF export', 'Publication export distinguishes print/archive PDF from interactive PDF. Print output removes active links, while interactive output preserves usable internal and external links; typeset publication and neutral editorial content modes remain separate.'],
      ['Desktop manuscript workspace', 'Browser-style document tabs, full-window Studio/Account surfaces and a toggleable Word-like document outline support long-form desktop work without changing the mobile structure workflow.'],
      ['Large DOCX and rich-text usability', 'Large Word imports use deferred editor mounting and open directly as OMI manuscripts. Imported standalone DOCX studies are explicitly recognized as studies for direct publishing rather than being mistaken for volumes.'],
      ['Dynamic indexes', 'Word XE markers are imported as semantic index targets instead of page-number text. Studio can present each name once with clickable links to real occurrences, while DOCX export writes XE and INDEX fields so final page numbers are generated from the exported layout.'],
      ['Search, replace and block structure', 'Document search exposes search-and-replace directly and highlights matches. The current paragraph or selected blocks can be transformed between normal paragraphs, headings, block quotes, bullet lists, numbered lists and code blocks.'],
      ['Proofreading, translation and agents', 'Local spellcheck follows manuscript language. Optional grammar/style services, DeepL execution, provider-neutral AI agents and integration audit records operate through explicit, scoped external-service flows.'],
      ['Cross-device account security', 'Password recovery uses single-use expiring reset tokens and revokes prior sessions after password change. Connected sign-in methods can be managed from the account panel without conflating account identity with manuscript permissions.'],
      ['Federated sign-in', 'Google, Microsoft and configurable institutional OpenID Connect providers use Authorization Code + PKCE, state/nonce checks and issuer/audience validation. Existing accounts require explicit identity linking rather than e-mail auto-linking.'],
      ['Device-aware storage', 'Installed clients distinguish trusted personal devices from shared/foreign devices. Own devices can use native local/system storage; shared devices prefer profile cloud connections and do not retain local working paths.'],
      ['Android-native file workflow', 'Android uses the system Documents / Storage Access Framework picker for opening, saving, Save As and portable OMI backup/export destinations instead of broad shared-storage permissions.'],
      ['Android Google Play preparation', 'The Play Console application record exists and the content rating is set. The release workflow can produce signed AAB/APK artifacts; the first Play internal-track AAB submission follows beta.5 validation.'],
      ['iOS and iPadOS native target', 'The shared Tauri client generates and compiles as an Apple Silicon iPhone/iPad simulator app. Files/UIDocumentPicker storage, mobile export delivery and native authentication handoff are implemented; TestFlight/App Store distribution still requires Apple Developer signing, provisioning and Universal Link association.'],
      ['Institutional and central administration', 'Personal and institutional profiles are separated. Institution MEMBER/ADMIN/OWNER roles, administrator sign-in, OMI central administration, scoped institution Admin API credentials and append-only admin audit events are implemented without granting manuscript access.'],
      ['Verified scholarly identity', 'ORCID linking is integrated with cryptographic author signing: immutable committed revisions can be bound to verified ORCID identity and portable WebAuthn/issuer verification evidence.'],
      ['Publishing-system workflows', 'OJS and OMP 3.5 author, editor and double-anonymous reviewer workflows are operational when configured. Native end-to-end tests verify assignment-scoped files, review forms, corrections, separated feedback and signed writeback, while the standalone author flow now also supports direct submission from Studio.'],
    ],
    nativeAppsTitle: 'Native applications and platform builds',
    nativeAppsDescription: 'Studio uses one OMI application core across desktop and mobile. Download links follow the current GitHub release without rewriting historical release assets. Android remains available as a public beta APK while the Play Console path is prepared for signed AAB delivery; validated targets that still require platform-store signing are clearly marked.',
    androidPlayDescription: 'Google Play distribution is being prepared. The Play Console application record and content rating are ready; the signed AAB workflow is in place, with internal-track submission planned after beta.5 validation.',
    iosTitle: 'iOS / iPadOS',
    iosDescription: 'Validated native iPhone/iPad simulator target using the same Studio core. Public TestFlight/App Store installation is not yet available because Apple signing/provisioning and the final Universal Link association are still required.',
    iosAction: 'iOS/iPadOS implementation details',
    betaTitle: 'Public beta and beta.5 candidate',
    betaText: 'OMI Studio 0.1.0-beta.4 is the current public release for broader real-world testing. The 0.1.0-beta.5 candidate adds direct OJS/OMP author submission, improved standalone-study recognition and Android Play submission readiness while preserving the existing authoring, DOCX import/export, document lifecycle, search/replace, semantic indexes, printed and interactive PDF export, update notifications and configured review workflows.',
    maturity: 'The project is in public beta. Beta development prioritizes regression testing, large-document performance, error recovery, interoperability, migration discipline and trustworthy immutable releases on the path to the first release candidate.',
  },
  hu: {
    title: 'Az Open Manuscript Studio nyilvános bétája',
    lead: 'A 0.1.0-beta.4 marad a jelenlegi nyilvános kiadás, miközben készül a 0.1.0-beta.5 közvetlen OJS/OMP szerzői beküldéssel, Google Play-beküldésre előkészített Android-kiadással, egylépcsős reszponzív navigációval, platformközi frissítési értesítésekkel, külön nyomtatott és interaktív PDF-exporttal, ellenőrzött OJS/OMP 3.5 munkafolyamatokkal és provenance-biztos, változtathatatlan kiadásokkal.',
    items: [
      ['Közvetlen szerzői beküldés OJS/OMP-be', 'A Publikáció menüből egy beküldhető önálló tanulmány közvetlenül előkészíthető és beküldhető egy konfigurált OJS- vagy OMP-rendszerbe. A Studio átadja a kézirat metaadatait és fájljait, megőrzi a piszkozat/újrapróbálkozás állapotát, ellenőrzi a célrendszer munkafolyamatát, és a szerző publikációs rendszerhez tartozó API-hitelesítését használja.'],
      ['Kiadási integritás és frissítés', 'Az asztali, mobil és lektori felületek értesíthetnek az új Studio-kiadásokról. A release-folyamat a taget pontosan a build commitjához köti, és egy már publikált kiadás assetjeit később nem cseréli le.'],
      ['Egylépcsős reszponzív navigáció', 'A Studio navigációja köztes második menü nélkül, azonnal megnyílik. Az asztali és mobil felület közös reszponzív modellt használ, azonos helyen elérhető bezáró vezérlővel.'],
      ['Nyomtatott és interaktív PDF-export', 'A kiadványexport külön kezeli a nyomtatási/archiválási és az interaktív PDF-et. A nyomtatott változat eltávolítja az aktív linkeket, az interaktív megtartja a használható belső és külső kapcsolatokat; a tördelt kiadvány és a semleges szerkesztőségi tartalom mód továbbra is külön választható.'],
      ['Asztali kézirat-munkatér', 'Böngészőszerű dokumentumfülek, teljes ablakos Studio/Fiók felületek és kapcsolható, Word-szerű dokumentumvázlat segíti a hosszabb asztali munkát; mobilon megmarad a külön dokumentumszerkezeti nézet.'],
      ['Nagy DOCX és rich-text használhatóság', 'A nagy Word-importok késleltetett szerkesztőbetöltést használnak és közvetlenül OMI-kéziratként nyílnak meg. Az importált önálló DOCX-tanulmányokat a Studio explicit tanulmányként ismeri fel a közvetlen publikáláshoz, nem kötetként.'],
      ['Dinamikus mutatók', 'A Word XE jelölései szemantikus mutatókapcsolatként importálódnak, nem oldalszám-szövegként. A Studio a neveket egyszer jelenítheti meg, a valós előfordulásokhoz kattintható kapcsolatokkal; DOCX exportkor XE és INDEX mezők készülnek, így a végleges oldalszámokat az exportált tördelés állítja elő.'],
      ['Keresés, csere és blokkszerkezet', 'A dokumentumkeresőben közvetlenül elérhető a keresés és csere, a találatok pedig kiemelést kapnak. Az aktuális bekezdés vagy kijelölt blokkok sima bekezdéssé, címsorrá, idézetté, felsorolássá, számozott listává vagy kódblokkká alakíthatók.'],
      ['Nyelvi ellenőrzés, fordítás és ügynökök', 'A helyi helyesírás-ellenőrzés követi a kézirat nyelvét. A bekapcsolható nyelvhelyességi/stílusellenőrzés, a DeepL-fordítás, a szolgáltatófüggetlen AI-ügynökök és az integrációs audit explicit, scope-olt külső szolgáltatási folyamatokon keresztül működnek.'],
      ['Eszközök között használható biztonságos fiók', 'A jelszó-visszaállítás egyszer használható, lejáró tokeneket használ, a sikeres jelszócsere pedig megszünteti a korábbi munkameneteket. A kapcsolt bejelentkezési módok a Fiókban kezelhetők a kéziratjogosultságoktól elkülönítve.'],
      ['Federált bejelentkezés', 'Google, Microsoft és konfigurálható intézményi OpenID Connect szolgáltatók Authorization Code + PKCE, state/nonce és issuer/audience ellenőrzést használnak. Meglévő fiókhoz külső identitás csak kifejezett összekapcsolással rendelhető.'],
      ['Eszköztudatos tárhelykezelés', 'A telepített kliensek megkülönböztetik a saját és a megosztott/idegen eszközt. Saját eszközön használható a natív helyi vagy rendszerszintű tárhely; megosztott eszközön a profilhoz kötött felhőkapcsolat az elsődleges, és a helyi munkafájl útvonala nem marad meg.'],
      ['Android natív fájlmunkafolyamat', 'Androidon a rendszer Dokumentumok / Storage Access Framework választója kezeli a megnyitást, mentést, más helyre mentést és az OMI biztonsági mentések/exportok célját, általános tárhely-hozzáférés nélkül.'],
      ['Android és Google Play előkészítés', 'A Play Console alkalmazásrekordja elkészült és a tartalombesorolás be van állítva. A kiadási munkafolyamat aláírt AAB/APK csomagokat tud készíteni; az első belső tesztelési AAB-beküldés a beta.5 validálása után következik.'],
      ['iOS és iPadOS natív célverzió', 'A közös Tauri kliens már Apple Silicon iPhone/iPad szimulátoros alkalmazásként is generálható és sikeresen fordul. Elkészült a Files/UIDocumentPicker tárhelykezelés, a mobil export és a natív hitelesítési visszatérés; a TestFlight/App Store terjesztéshez még Apple Developer aláírás, provisioning és Universal Link társítás szükséges.'],
      ['Intézményi és központi adminisztráció', 'A személyes és intézményi profilok különváltak. Elkészült az intézményi MEMBER/ADMIN/OWNER modell, az adminisztrátori belépés, az OMI központi adminisztráció, a scope-olt intézményi Admin API és az adminisztrációs auditnapló — kéziratokhoz való automatikus hozzáférés nélkül.'],
      ['Hitelesített tudományos identitás', 'Az ORCID-kapcsolás bekerült a kriptográfiai szerzői aláírásba: változtathatatlan, szerveren rögzített revízió köthető ellenőrzött ORCID-identitáshoz és hordozható WebAuthn/issuer ellenőrzési bizonyítékhoz.'],
      ['Publikációs rendszerkapcsolatok', 'A konfigurált OJS és OMP 3.5 szerzői, szerkesztői és kettős vak lektori munkafolyamatok működnek. Natív végponttól végpontig tartó tesztek ellenőrzik a hozzárendelt fájlokat, lektori űrlapokat, javításokat, elkülönített visszajelzéseket és az aláírt visszaírást; az önálló szerzői folyamat pedig már közvetlen Studio-beküldést is támogat.'],
    ],
    nativeAppsTitle: 'Natív alkalmazások és platformbuildek',
    nativeAppsDescription: 'A Studio ugyanazt az OMI alkalmazásmagot használja asztali és mobil rendszereken. A letöltési linkek mindig az aktuális GitHub-kiadást követik anélkül, hogy a korábbi kiadások assetjeit át kellene írni. Androidon továbbra is elérhető a nyilvános béta APK, miközben a Google Play útvonalat az aláírt AAB terjesztésére készítjük elő.',
    androidPlayDescription: 'A Google Play terjesztés előkészítés alatt áll. A Play Console alkalmazásrekordja és a tartalombesorolás elkészült, az aláírt AAB workflow rendelkezésre áll; a belső tesztelési beküldés a beta.5 validálása után következik.',
    iosTitle: 'iOS / iPadOS',
    iosDescription: 'Validált natív iPhone/iPad szimulátoros célverzió ugyanazzal a Studio-maggal. Nyilvános TestFlight/App Store telepítés még nincs, mert ehhez Apple aláírás/provisioning és a végleges Universal Link társítás szükséges.',
    iosAction: 'iOS/iPadOS megvalósítás részletei',
    betaTitle: 'Nyilvános béta és beta.5 kiadásjelölt',
    betaText: 'Az OMI Studio 0.1.0-beta.4 a jelenlegi nyilvános kiadás szélesebb körű, valós használati teszteléshez. A 0.1.0-beta.5 jelölt közvetlen OJS/OMP szerzői beküldést, pontosabb önálló-tanulmány felismerést és Google Play-beküldési előkészítést ad az eddigi kéziratszerkesztés, DOCX import/export, dokumentuméletciklus, keresés és csere, szemantikus mutatók, nyomtatott és interaktív PDF-export, frissítési értesítések és konfigurált lektori munkafolyamatok mellé.',
    maturity: 'A projekt nyilvános béta. A béta szakasz fő feladata a regressziós tesztelés, a nagy dokumentumok teljesítménye, a hibából való helyreállás, az interoperabilitás, a migrációs fegyelem és a megbízható, változtathatatlan kiadások biztosítása az első release candidate felé.',
  },
  de: {
    title: 'Öffentliche Beta von Open Manuscript Studio',
    lead: '0.1.0-beta.4 bleibt die aktuelle öffentliche Version, während 0.1.0-beta.5 mit direkter OJS/OMP-Autoreneinreichung, Android-Vorbereitung für Google Play, einstufiger responsiver Navigation, plattformübergreifenden Update-Hinweisen, getrennten Druck- und interaktiven PDF-Exporten, verifizierten OJS-/OMP-3.5-Workflows und provenance-sicheren unveränderlichen Releases vorbereitet wird.',
    items: [
      ['Direkte OJS/OMP-Autoreneinreichung', 'Über Publikation kann eine geeignete eigenständige Studie direkt für eine konfigurierte OJS- oder OMP-Installation vorbereitet und eingereicht werden. Studio überträgt Metadaten und Dateien, bewahrt Entwurfs-/Wiederholungsstatus, validiert den Zielworkflow und verwendet die API-Anmeldedaten des Autors für das Publikationssystem.'],
      ['Release-Integrität und Updates', 'Desktop-, Mobil- und Review-Oberflächen können über neuere Studio-Releases informieren. Die Release-Pipeline bindet einen Tag an den exakten Build-Commit und ersetzt niemals Assets eines bereits veröffentlichten Releases.'],
      ['Einstufige responsive Navigation', 'Die Studio-Navigation öffnet sich direkt ohne zwischengeschaltetes zweites Menü. Desktop und Mobilgeräte verwenden dasselbe responsive Navigationsmodell mit einem Schließen-Steuerelement an derselben Position.'],
      ['Druck- und interaktiver PDF-Export', 'Der Publikationsexport unterscheidet Druck-/Archiv-PDF und interaktives PDF. Die Druckausgabe entfernt aktive Links, die interaktive Ausgabe behält nutzbare interne und externe Links; gesetzte Publikation und neutraler redaktioneller Inhalt bleiben getrennte Modi.'],
      ['Desktop-Manuskriptarbeitsbereich', 'Browserähnliche Dokument-Tabs, Vollfenster-Ansichten für Studio/Konto und eine einblendbare Word-ähnliche Dokumentgliederung unterstützen lange Desktop-Arbeiten; mobil bleibt der separate Struktur-Workflow erhalten.'],
      ['Große DOCX-Dateien und Rich-Text-Bedienung', 'Große Word-Importe verwenden verzögertes Editor-Mounting und öffnen direkt als OMI-Manuskript. Importierte eigenständige DOCX-Studien werden für die direkte Publikation ausdrücklich als Studien statt als Bände erkannt.'],
      ['Dynamische Register', 'Word-XE-Markierungen werden als semantische Registerziele statt als Seitenzahltext importiert. Studio kann jeden Namen einmal mit klickbaren Verweisen auf reale Vorkommen anzeigen; beim DOCX-Export werden XE- und INDEX-Felder erzeugt, damit die endgültigen Seitenzahlen aus dem exportierten Layout entstehen.'],
      ['Suchen, Ersetzen und Blockstruktur', 'Die Dokumentsuche bietet Suchen und Ersetzen direkt an und hebt Treffer hervor. Der aktuelle Absatz oder ausgewählte Blöcke können in normale Absätze, Überschriften, Blockzitate, Aufzählungen, nummerierte Listen oder Codeblöcke umgewandelt werden.'],
      ['Korrektur, Übersetzung und Agenten', 'Lokale Rechtschreibprüfung folgt der Manuskriptsprache. Optionale Grammatik-/Stildienste, DeepL, providerneutrale KI-Agenten und Integrations-Auditdaten laufen über explizite, bereichsgebundene externe Dienstflüsse.'],
      ['Sichere geräteübergreifende Konten', 'Passwort-Wiederherstellung verwendet einmalige, ablaufende Tokens und beendet nach Passwortänderung vorhandene Sitzungen. Verknüpfte Anmeldemethoden werden im Konto getrennt von Manuskriptberechtigungen verwaltet.'],
      ['Föderierte Anmeldung', 'Google, Microsoft und konfigurierbare institutionelle OpenID-Connect-Provider verwenden Authorization Code + PKCE sowie State/Nonce- und Issuer/Audience-Prüfung. Bestehende Konten werden nicht allein anhand der E-Mail automatisch verknüpft.'],
      ['Gerätebewusste Speicherung', 'Installierte Clients unterscheiden eigene von gemeinsam genutzten/fremden Geräten. Eigene Geräte können nativen lokalen/Systemspeicher verwenden; auf gemeinsam genutzten Geräten werden profilgebundene Cloud-Verbindungen bevorzugt und lokale Arbeitswege nicht behalten.'],
      ['Android-native Dateiabläufe', 'Android verwendet den systemeigenen Dokument-/Storage-Access-Framework-Dialog für Öffnen, Speichern, Speichern unter sowie OMI-Backups/Exporte statt breit angelegter Speicherberechtigungen.'],
      ['Android und Google Play', 'Der Play-Console-App-Eintrag ist angelegt und die Inhaltsbewertung ist gesetzt. Der Release-Workflow kann signierte AAB-/APK-Artefakte erstellen; die erste AAB-Einreichung für den internen Test-Track folgt nach der beta.5-Validierung.'],
      ['iOS- und iPadOS-Nativziel', 'Der gemeinsame Tauri-Client wird als Apple-Silicon-iPhone/iPad-Simulator-App erzeugt und erfolgreich kompiliert. Files/UIDocumentPicker, mobile Exportausgabe und nativer Authentifizierungs-Handoff sind implementiert; für TestFlight/App Store fehlen noch Apple-Developer-Signierung, Provisioning und die endgültige Universal-Link-Zuordnung.'],
      ['Institutionelle und zentrale Administration', 'Persönliche und institutionelle Profile sind getrennt. MEMBER/ADMIN/OWNER-Rollen, Administrator-Anmeldung, zentrale OMI-Administration, bereichsgebundene Institution-Admin-API-Zugangsdaten und Admin-Auditereignisse sind implementiert, ohne Manuskriptzugriff zu verleihen.'],
      ['Verifizierte wissenschaftliche Identität', 'ORCID-Verknüpfung ist mit kryptografischer Autorensignatur verbunden: unveränderliche committed Revisionen können an eine verifizierte ORCID-Identität und portable WebAuthn/Issuer-Verifikation gebunden werden.'],
      ['Publikationssystem-Workflows', 'Konfigurierte OJS- und OMP-3.5-Workflows für Autoren, Redakteure und doppelt anonyme Gutachter sind funktionsfähig. Native End-to-End-Tests prüfen zugewiesene Dateien, Begutachtungsformulare, Korrekturen, getrenntes Feedback und signierte Rückschreibung; der eigenständige Autorenfluss unterstützt nun auch direkte Studio-Einreichungen.'],
    ],
    nativeAppsTitle: 'Native Anwendungen und Plattform-Builds',
    nativeAppsDescription: 'Studio verwendet denselben OMI-Anwendungskern auf Desktop- und Mobilplattformen. Download-Links folgen dem aktuellen GitHub-Release, ohne historische Release-Assets umzuschreiben. Android bleibt als öffentliches Beta-APK verfügbar, während der Google-Play-Pfad für signierte AAB-Auslieferung vorbereitet wird.',
    androidPlayDescription: 'Die Google-Play-Verteilung wird vorbereitet. App-Eintrag und Inhaltsbewertung in der Play Console sind vorhanden, der signierte AAB-Workflow ist eingerichtet; die Einreichung in den internen Test-Track folgt nach der beta.5-Validierung.',
    iosTitle: 'iOS / iPadOS',
    iosDescription: 'Validiertes natives iPhone/iPad-Simulatorziel mit demselben Studio-Kern. Eine öffentliche TestFlight/App-Store-Installation ist noch nicht verfügbar, da Apple-Signierung/Provisioning und die endgültige Universal-Link-Zuordnung erforderlich sind.',
    iosAction: 'Details zur iOS/iPadOS-Implementierung',
    betaTitle: 'Öffentliche Beta und beta.5-Kandidat',
    betaText: 'OMI Studio 0.1.0-beta.4 ist die aktuelle öffentliche Version für breitere Tests unter realen Bedingungen. Der 0.1.0-beta.5-Kandidat ergänzt direkte OJS/OMP-Autoreneinreichung, verbesserte Erkennung eigenständiger Studien und Google-Play-Einreichungsvorbereitung zusätzlich zu Autorenschaft, DOCX-Import/-Export, Dokumentlebenszyklus, Suchen/Ersetzen, semantischen Registern, Druck- und interaktiven PDF-Exporten, Update-Hinweisen und konfigurierten Review-Workflows.',
    maturity: 'Das Projekt befindet sich in der öffentlichen Beta. Im Mittelpunkt stehen Regressionstests, Leistung bei großen Dokumenten, Fehlerwiederherstellung, Interoperabilität, saubere Migrationen und vertrauenswürdige unveränderliche Releases auf dem Weg zum ersten Release Candidate.',
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
          <p className={styles.kicker}>Open Manuscript Initiative · {STUDIO_VERSION} public beta · {NEXT_STUDIO_VERSION} candidate</p>
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
                <p>{update.androidPlayDescription}</p>
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
              <Link to="/docs/integrations/ojs-profile-v1">OJS/OMP direct submission</Link>
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

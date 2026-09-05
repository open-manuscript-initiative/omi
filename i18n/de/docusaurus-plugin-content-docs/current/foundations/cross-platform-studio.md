---
title: Plattformübergreifende Studio-Architektur
sidebar_label: Plattformübergreifendes Studio
---

# Plattformübergreifende Studio-Architektur

Open Manuscript Studio ist als einheitliche wissenschaftliche Autorenumgebung konzipiert, die sowohl im Web als auch auf Desktop- und Mobilgeräten läuft, ohne das Manuskriptmodell oder die Workflow-Implementierung zu fragmentieren.

Das Projekt unterhält keine separaten Anwendungen für jedes Betriebssystem. Studio nutzt einen gemeinsamen Anwendungskern (React/TypeScript) und ein gemeinsames Manuskriptmodell (OMI), während dünne plattformspezifische Schichten bei Bedarf native Funktionen bereitstellen.

## Plattformstatus

| Plattform | Aktueller Status | Lieferrichtung |
|---|---|---|
| Web | **In Betrieb** | Hosted Studio |
| Windows | **Betriebsbereit** | Tauri 2 EXE/MSI |
| macOS | **Automatisiertes Build-Ziel** | DMG für Intel und Apple Silicon; die Absicherung der Signierung/Notarisierung bleibt bestehen |
| Linux | **Automatisiertes Build-Ziel** | AppImage und DEB |
| Android | **Öffentliche Alpha-Version im Einsatz** | Universelle APK aus dem gemeinsamen Release-Workflow; store-orientierte Paketierung folgt später |
| iOS / iPadOS | **Validiertes natives Build-Ziel** | Der Build für den iPhone-/iPad-Simulator ist erfolgreich; für die Verteilung über TestFlight und den App Store sind eine Apple-Entwickler-Signatur sowie die endgültige Zuordnung des Universal Links erforderlich |

Android ist nicht mehr nur eine Architektur- oder Entwicklungsplattform. Aus der gemeinsamen Tauri 2-Codebasis wird eine öffentliche, universelle APK generiert, die dieselbe Logik für Konten, Dokumente, Überprüfungen, Integrationen und Exporte nutzt wie die anderen Clients – ergänzt durch eine mobiloptimierte, responsive Darstellung und die für Android native Dateiverwaltung über das „Documents/Storage Access Framework“.

Auch bei iOS/iPadOS geht es mittlerweile über die reine Architekturplanung hinaus. CI generiert nun das Tauri/Xcode-Projekt, kompiliert die Apple-Silicon-Simulatoranwendung für iPhone/iPad und lädt das resultierende Simulator-Artefakt hoch. Die verbleibende Apple-spezifische Einschränkung betrifft physische Geräte und den öffentlichen Vertrieb: Eine echte Apple-Developer-Signatur, die Bereitstellung, die Zuordnung von Universal Links sowie die Validierung über TestFlight und den App Store sind weiterhin erforderlich, bevor eine öffentliche iOS-Version freigegeben werden kann.

## Ein Studio-Kern

```text
                         OMI Studio Core
                                │
               ┌────────────────┼────────────────┐
               │                │                │
             Web UI         Desktop UI       Mobile UI
               │                │                │
            Browser           Tauri 2          Tauri 2
                                │                │
                      ┌─────────┼─────────┐   ┌──┴────┐
                    Windows    macOS    Linux Android iOS/iPadOS
```

Der gemeinsame Kern umfasst, soweit dies technisch möglich ist:

- das wissenschaftliche Manuskriptmodell „OMI“;
- strukturierte Bearbeitung und Tiptap-basiertes Dokumentverhalten;
- Metadaten, Mitwirkende, Zitierangaben, Anmerkungen und Versionsverwaltung;
- mehrsprachige Benutzeroberfläche und Unterstützung bei der Erstellung von Inhalten;
- Authentifizierung, Passwortwiederherstellung und Workflows für vernetzte Identitäten;
- Verhalten im Rahmen des doppelblinden Peer-Review-Verfahrens;
- OJS sowie Integrations-Workflows für „OMP“;
- Kunden aus dem Bereich der institutionellen Mitgliedschaft und Verwaltung;
- Logik für Import, Export und Veröffentlichungsprofile;
- Validierungs-, Integrations- und Speicherregeln.

Eine im gemeinsamen Kern implementierte Funktion sollte daher auf jeder unterstützten Plattform verfügbar sein, es sei denn, das Betriebssystem oder der Formfaktor erfordern eine andere Darstellung oder eine native Implementierung.

## Plattform-Adapter-Schicht

Native Betriebssystemdienste werden hinter Plattformadaptern isoliert, anstatt im gesamten Editor oder wissenschaftlichen Modell eingebettet zu sein. Aktuelle Beispiele hierfür sind die native Ordner-/Dateiauswahl, native Speicherdialoge, der Zugriff auf „Android Documents“/„SAF“, der Zugriff auf „Apple Files“/„UIDocumentPicker“, Schreibvorgänge im Dateisystem, dauerhafter oder sicherheitsbezogener, vom Benutzer gewährter Zugriff auf das Dateisystem, das Verhalten des Desktop-Updaters sowie die native Übergabe an externe Authentifizierungsdienste.

Bei der nativen Authentifizierung wird ein für die Herkunft der Anwendung geeigneter Transport verwendet. Tauri-Clients können den „Bearer-Session“-Transport nutzen und einmalige externe Authentifizierungs-Handoff-Abläufe für ORCID sowie konfigurierte OIDC-Anbieter gemeinsam nutzen, anstatt ausschließlich auf Browser-Cookies zurückzugreifen.

## Oberflächen für Desktop- und Mobilgeräte

„Plattformübergreifend“ bedeutet nicht, jedem Gerät das gleiche Bildschirmlayout aufzuzwingen.

Desktop Studio unterstützt nun Registerkarten für mehrere Dokumente im Browser-Stil, Studio-/Konto-Oberflächen im Vollbildmodus sowie eine ein- und ausblendbare Dokumentgliederung im Word-Stil neben dem Editor. Mobile Studio nutzt dieselbe Manuskript- und Bearbeitungslogik, präsentiert diese jedoch über eine touchorientierte Navigation, kompakte Bedienelemente, Ausklappmenüs und responsive Bedienfelder. Auf Tablets kann die Bearbeitung mit mehreren Bedienfeldern schrittweise wiederhergestellt werden, sofern die Bildschirmgröße dies zulässt.

Zu den aktuellen Funktionen für die mobile Nutzung gehören eine responsive Navigation, Dokument- und Detailansichten, Zugriff auf Konto/Profil, Eingabesteuerelemente, Suche, Sprachumschaltung, Abmeldung, die Verarbeitung von Rückgaben aus dem In-App-Browser bei „ORCID“/OIDC, das Öffnen und Speichern über den nativen Dateimanager, native Exportfunktionen sowie ein einheitliches „OMI Studio“-Branding. Android verwendet „Documents/SAF“, iPhone/iPad verwendet „Files/UIDocumentPicker“. Hierbei handelt es sich um darstellungs- und plattformspezifische Aspekte; sie erfordern keine separaten Manuskriptmodelle für Android oder Apple.

## Lokale Portabilität und Gerätevertrauen

Das plattformübergreifende Modell untermauert ein Grundprinzip von „OMI“: Das Manuskript sollte nicht von einer bestimmten Anwendungsinstallation, einem bestimmten Cloud-Anbieter oder einem bestimmten Betriebssystem abhängig sein.

Ein unter Windows erstelltes Manuskript sollte unter Linux, macOS, Android, iOS/iPadOS oder im Browser nutzbar sein, ohne dass eine Konvertierung in ein plattformspezifisches Dokumentmodell erforderlich ist. Portable `.omi.zip` und OMI JSON Formate bieten explizite Austauschziele, während Serverdienste nur dort zum Einsatz kommen, wo Identität, Zusammenarbeit, Veröffentlichungsworkflows oder direkte Integrationen dies erfordern.

Installierte Clients fügen nun eine gerätespezifische Vertrauensunterscheidung hinzu.

### Eigenes Gerät

Wenn der angemeldete Benutzer ein installiertes Gerät als sein eigenes kennzeichnet, kann Studio die normalen nativen Speicherorte der Arbeitsdateien beibehalten. Desktop-Ziele können lokale Ordner, eingebundene Speichermedien bzw. Netzwerkspeicher sowie Ordner nutzen, die von Desktop-Clients der Anbieter synchronisiert werden. Android kann vom System ausgewählte „Documents/SAF“-Speicherorte verwenden, während iPhone/iPad vom System ausgewählte „Files/UIDocumentPicker“-Speicherorte nutzen können, darunter iCloud Drive und verfügbare Dokumentenanbieter von Drittanbietern.

### Gemeinsam genutztes oder fremdes Gerät

Neu erkannte Geräte werden standardmäßig im Modus „Gemeinsam genutzt/Fremdgerät“ angezeigt. In diesem Modus behält Studio den ausgewählten lokalen Arbeitsdateipfad nicht bei. Der normale, dauerhafte Arbeitsablauf bevorzugt Cloud-Verbindungen, die zum angemeldeten Profil gehören.

Der Benutzer kann eine Datei zwar weiterhin explizit auf einem Wechseldatenträger oder einem anderen vom System bereitgestellten Speicherort für Dokumente öffnen oder dort speichern, doch wird dieser Speicherort als einmaliges Ziel behandelt und nicht als aktuelle Arbeitsdatei gespeichert.

Dadurch wird vermieden, so zu tun, als sei die Erkennung tragbarer Wechseldatenträger in jedem Betriebssystem identisch, während gleichzeitig die wichtige Sicherheitseigenschaft gewahrt bleibt: Lokale Pfade für gemeinsam genutzte Geräte werden nicht beibehalten.

## Anbieterspezifische synchronisierte Ordner

Desktop Studio behandelt einen lokal synchronisierten Ordner als Verbindungsmethode des eigentlichen Anbieters und nicht als generischen Pseudo-Anbieter.

Für OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive und ähnliche Anbieter von Desktop-Synchronisierungsdiensten:

- Die Authentifizierung und Synchronisierung erfolgt durch den eigenen Client des Anbieters;
- Studio erhält in diesem Modus niemals das Anbieter-Passwort oder das „OAuth“-Token;
- Der Benutzer wählt über den nativen Dialog einen vom Anbieter synchronisierten Ordner aus;
- Der Pfad bleibt gerätespezifisch und ist nach angemeldetem Benutzer, Anbieter und Kontotyp isoliert;
- Der vom Benutzer gewährte Dateisystemumfang kann auf einem eigenen Gerät bestehen bleiben;
- Studio schreibt portable „OMI“-Dateien, während der Provider-Client die Netzwerksynchronisation übernimmt.

Direkte WebDAV-/Nextcloud-Verbindungen bleiben eine separate, auf das Profil beschränkte Serverintegration mit verschlüsselten Anmeldedaten.

## Android-nativer Datei-Workflow

Android nutzt die Systemoberfläche „Documents / Storage Access Framework“ anstelle allgemeiner Berechtigungen für gemeinsam genutzten Speicher.

Der aktuelle Android-Workflow unterstützt:

- ein vorhandenes „OMI“-Dokument über die Systemauswahl öffnen;
- Im aktuell ausgewählten Dokument speichern;
- An einem anderen Ort speichern;
- tragbares „`.omi.zip`“-Backup;
- Android-relevante Exportformate, darunter OMI JSON/package, JATS XML, HTMLpackage, DOCX, LaTeX und EPUB.

Die rohen „`content://`“-Bezeichner sind Implementierungsdetails und werden dem Benutzer nicht als gewöhnliche Dateisystempfade angezeigt.

## iOS/iPadOS-nativer Datei-Workflow

iPhone und iPad nutzen die Apple-Oberfläche „Files“ bzw. „UIDocumentPicker“ anstelle eines umfassenden Zugriffs auf das Dateisystem. Bei Öffnungsvorgängen wird ein sicherheitskonformer Zugriff auf Dokumente angefordert, und die Tauri-Dateisystemschicht liest bzw. schreibt die vom Benutzer ausgewählte URL „`file://`“.

Je nach installierten Anbietern und Gerätekonfiguration kann der Auswahlassistent Folgendes anzeigen:

- Auf meinem iPhone / Auf meinem iPad;
- iCloud Drive;
- von iOS/iPadOS unterstützte, angeschlossene externe Speichermedien;
- Dateianbieter von Drittanbietern, die von installierten Cloud-Speicheranwendungen bereitgestellt werden.

Der iOS/iPadOS-Client verwendet dieselben mobilen Exportoptionen wie Android: „OMI“, „package/“, „JSON“, „JATS“, „XML“, „HTML“, „package“, „DOCX“, „LaTeX“ und „EPUB“. Die für den Desktop bestimmten Optionen „IDML“, „XTG“, „MIF“, „SLA“ sowie die Browser-Druckoptionen „PDF“ werden ausgeblendet und nicht als nicht funktionsfähige mobile Aktionen angezeigt.

Informationen zu Apple-spezifischen Builds, Signierungen und Universal Links finden Sie unter [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md).

## Plattformübergreifende Kontoidentität

Ein und dasselbe Studio-Konto ist so konzipiert, dass es browser-, desktop- und mobilgeräteübergreifend funktioniert. Zu den derzeit verfügbaren Funktionen für die gemeinsame Identitätsverwaltung gehören:

- Passwort: Registrierung/Anmeldung/Abmeldung;
- Einmaliger Ablauf zur Passwortzurücksetzung mit Ablaufdatum;
- ORCID Anmeldung/Verknüpfung;
- Google, Microsoft und konfigurierbares institutionelles OpenID Connect;
- Verwaltung der Anmeldemethoden für verbundene Konten mit Sperrschutz;
- persönliche Profildaten, getrennt von institutionsspezifischen Mitgliedschaften;
- Die Berechtigungen für die Einrichtung und die Zentralverwaltung werden getrennt von den Berechtigungen für Manuskripte gehandhabt.

Die Identitäten externer Anbieter werden anhand einer stabilen Aussteller-/Subjekt-Identität verknüpft und nicht anhand des Anzeigenamens, und bestehende Konten werden nicht allein aufgrund einer Übereinstimmung der E-Mail-Adressen stillschweigend zusammengeführt.

Mobile Clients nutzen eine einmalige native Authentifizierungsübergabe. Die bevorzugte HTTPS-Anwendungs-Rückmeldung wird unter `app.openmanuscript.org` gehostet, wobei das benutzerdefinierte Schema `openmanuscript://` als Fallback beibehalten wird. Unter iOS/iPadOS erfordert die HTTPS-Rückmeldung in der Produktionsumgebung zusätzlich eine Verknüpfung mit einem Apple Universal Link, der mit der tatsächlichen Apple Development Team ID verknüpft ist.

## Plattformübergreifende Exportbereitstellung

Die Export-Ebene trennt die **Formaterzeugung** von der **Dateiübermittlung**.

Hosted Studio nutzt gewöhnliche Browser-Downloads. Installierte Desktop-Clients verwenden native Speicherdialoge und schreiben direkt in das Binärdateisystem. Android nutzt die Ziele „Documents/SAF“; iOS/iPadOS nutzt die Ziele „Files/UIDocumentPicker“. Bei beiden mobilen Zielplattformen wird die angezeigte Exportliste bewusst auf Formate beschränkt, die auf der jeweiligen Plattform sinnvoll sind.

Auf diese Weise bleibt eine einzige Exporter-Implementierung für die wissenschaftlichen Formate erhalten, während jede Plattform einen geeigneten Mechanismus zur Dateiübermittlung nutzen kann.

## Gemeinsam genutzte Konten und Workflow-Dienste

Web- und native Clients nutzen dieselbe Studio-Service-Grenze für die Kontoidentität, die Zugehörigkeit zu einer Institution, die Begutachtung durch Fachkollegen und externe Integrationen. Die Architektur trennt vier Bereiche voneinander:

1. **wissenschaftlicher Status** — Manuskript, Metadaten, Mitwirkende, Anmerkungen und Begutachtungsinhalte;
2. **Dienstidentität/Dienststatus** – Konten, Sitzungen und serverseitig gespeicherte Daten zur Zusammenarbeit;
3. **Organisationskompetenz** – Mitgliedschaft in Institutionen und zentrale Verwaltung;
4. **Plattformfunktionen** – nativer Dateizugriff, Paketierung, Verhalten des Update-Programms und Integration in die Shell auf Mobilgeräten und Desktops.

Diese Trennung ist wichtig für die Portabilität: Ein Wechsel vom Browser zu Windows, Android oder dem iPad hat keine Auswirkungen auf das Manuskript oder das Peer-Review-Verfahren, und die Ernennung zum Institutionsadministrator gewährt nicht automatisch Zugriff auf wissenschaftliche Inhalte.

## Mehrsprachige und regionale Einstellungen

Der gemeinsame Client bietet derzeit 24 europäische Sprachen für die Benutzeroberfläche an. Die Einstellungen für die Sprache der Benutzeroberfläche, die Sprache der Manuskripte und die Sprache der Metadaten werden gemeinsam in einem kompakten, responsiven Einstellungsbereich verwaltet. Für Zeitzonen werden Standard-IANA-Kennungen mit UTC-Offsets und einer Erkennung der Systemzeitzone anstelle von Freitextwerten verwendet, sodass die Kontoeinstellungen systemübergreifend portierbar bleiben.

## Richtlinien für mobile Arbeitsabläufe

Die mobilen Clients sollen eher die aktive wissenschaftliche Arbeit als das passive Lesen unterstützen. Zu den gemeinsamen Zielen gehören die Anmeldung über ein Benutzerkonto und der Zugriff auf Manuskripte, die strukturierte Bearbeitung, die Navigation innerhalb von Dokumenten und die Bearbeitung von Metadaten, die Rollen von Autoren, Redakteuren und Gutachtern, das doppelblinde Peer-Review-Verfahren, der Zugriff auf die Arbeitsabläufe des Publikationssystems, der Import und Export nativer Dokumente sowie Funktionen für eine sichere Plattform.

Zu den späteren nativen Funktionen können ein umfassenderer Offline-Betrieb, umfangreichere Workflows zum Teilen und Öffnen mit anderen Anwendungen, biometrische Funktionen sowie Push-Benachrichtigungen gehören, ohne dass diese Aspekte in das Dokumentenmodell von „OMI“ integriert werden müssen.

## Release-Engineering

Die Release-Automatisierung erstellt Windows-, Linux-, macOS- und Android-Artefakte aus dem gemeinsamen Repository. Für iOS/iPadOS gibt es nun einen durch Pull-Requests ausgelösten Simulator-Smoke-Build, der das Xcode-Projekt generiert, die Apple-Silicon-Simulator-Anwendung kompiliert und das App-Artefakt speichert. Ein separater manueller Apple-Release-Workflow steht für signierte Geräte- und App Store Connect-Pakete bereit, sobald die Apple-Entwickler-Anmeldedaten bereitgestellt wurden.

Die Reproduzierbarkeit wird durch die von Lockfiles gesteuerten Abhängigkeitsgraphen von „JavaScript“ und „Rust/Tauri“ sowie durch CI-Installationspfade gestärkt, die Abweichungen bei den Lockfiles verhindern.

Das Verteilungsmodell trennt die Erstellung von Artefakten von der Vertrauensinfrastruktur. Die Code-Signierung unter Windows, die Signierung/Notarisierung unter macOS sowie die Signierung für die mobilen Stores von Apple und Google sind Maßnahmen zur Absicherung der Veröffentlichung, die auf der gemeinsamen Anwendungserstellung aufsetzen.

## Warum dies für das wissenschaftliche Publizieren von Bedeutung ist

Plattformübergreifende Unterstützung ist nicht nur eine Erleichterung bei der Bereitstellung. Autoren, Gutachter, Redakteure, Verlage und Institutionen sollten in der Lage sein, von verschiedenen Geräten aus am selben wissenschaftlichen Arbeitsablauf teilzunehmen, ohne inkompatible Kopien des Werks zu erstellen. Struktur, Anmerkungen, Zitate, Begutachtungsstatus, Metadaten und Publikationssemantik sollten stabil bleiben, wenn der Nutzer das Betriebssystem, den Speicheranbieter oder die Gerätetyp wechselt.

In dieser Architektur ist **die wissenschaftliche Handschrift von Grund auf portabel, und die Anwendung passt sich der Handschrift an, anstatt die Handschrift an die Anwendung zu binden.**

## Stand der Umsetzung

Die Bereitstellung für Web und Windows ist ein operativer Bestandteil von Studio, Android ist ein öffentliches Alpha-Ziel, Linux/macOS sind automatisierte native Build-Ziele, und iOS/iPadOS ist nun ein validiertes natives Simulator-Build-Ziel auf derselben Tauri-2-Architektur. Der gemeinsame Client umfasst neben dem Browser-Workflow auch die Arbeit mit mehreren Dokumenten auf dem Desktop, geräteabhängigen nativen Speicher, die Verarbeitung von Android Documents/SAF, die Verarbeitung von Apple Files/UIDocumentPicker, geräteübergreifende Kontoidentität sowie föderierte Authentifizierung. Die öffentliche Verteilung für iOS/iPadOS unterliegt weiterhin den Vorgaben von Apple hinsichtlich Entwickler-Signierung, Provisionierung, Zuordnung von Universal Links sowie der Validierung durch TestFlight und den App Store.

Aktuelle Details zur Implementierung finden Sie unter [Studio Implementation Status](../governance/studio-implementation-status.md), [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md), [Integration Implementation Status](../integrations/implementation-status.md) und [Institutional and Central Administration](../integrations/institutional-administration.md).

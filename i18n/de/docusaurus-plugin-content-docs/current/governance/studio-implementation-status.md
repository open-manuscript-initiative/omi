---
id: studio-implementation-status
title: Open Manuscript Studio — Aktueller Stand der Umsetzung
sidebar_label: Stand der Umsetzung im Studio
description: Aktueller Implementierungs-Snapshot für die Referenzimplementierung von „Open Manuscript Studio“.
keywords:
  - Open Manuscript Studio
  - implementation status
  - beta
  - Android
  - iOS
  - iPadOS
  - peer review
  - OJS
  - OMP
  - DOCX
  - indexes
  - desktop
  - multilingual
  - export
  - institutional administration
  - OIDC
  - storage
---

# Open Manuscript Studio — Aktueller Stand der Umsetzung

## Momentaufnahme

| Feld | Wert |
|---|---|
| Status | **Beta** |
| Erfassungsdatum | **05.09.2026** |
| Aktuelle Produktreihe | `0.1.0-beta.3` |
| Referenzimplementierung | Open Manuscript Studio |
| Quell-Repository | `open-manuscript-initiative/open-manuscript-studio` |
| Web-Ziel | Moderne Browser |
| Desktop-Zielplattformen | Windows x64, Linux x64, macOS Intel, macOS Apple Silicon |
| Mobile Zielplattformen | Öffentliche universelle APK für Android; validiertes natives Simulator-Ziel für iOS/iPadOS, wobei die Verteilung über TestFlight/App Store noch der Signierung durch Apple Developer bedarf |
| Webbereitstellung | `studio.openmanuscript.org` |

Die aktuelle Studio-Beta-Version ist **`0.1.0-beta.3`**. „Beta“ bedeutet, dass die wichtigsten Workflows für die Erstellung, den Import/Export, die Authentifizierung, den nativen Client sowie die Überprüfung unter OJS/OMP implementiert sind und das Projekt nun von der Grundstruktur der Funktionen zu den Arbeiten an Interoperabilität, Regressionstests, Wiederherstellung und Release-Optimierung übergegangen ist. Dies bedeutet **nicht**, dass jede optionale Integration oder jeder Vertriebskanal produktionsreif ist.

Auf dieser Seite werden **implementierte Produktfunktionen** beschrieben, nicht die Konformität mit der „OMI“-Spezifikation. Der Reifegrad der formalen Spezifikation und Nachweise zur Konformität werden separat im „[OMI Implementation Status Matrix](./implementation-status-matrix.md)“ erfasst.

## Statusbegriffe

- **Betriebsbereit** – in der aktuellen Studio-Entwicklungsreihe implementiert und verfügbar, sofern die üblichen Laufzeitvoraussetzungen erfüllt sind.
- **Konfigurationsabhängig** – implementiert, erfordert jedoch installationsspezifische Server-Anmeldedaten, eine Registrierung gemäß „OAuth“ (OIDC), E-Mail-Zustellung, einen externen Dienst, eine Datenbankmigration oder eine Verbindung zu einem Veröffentlichungssystem.
- **Validiertes natives Ziel** — Die Implementierung und die Validierung des CI-/Native-Builds sind vorhanden, die öffentliche Bereitstellung hängt jedoch weiterhin von der Signierung bzw. Bereitstellung durch die jeweilige Plattform ab.
- **Grundlage** — Es gibt Unterstützung in den Bereichen Architektur, Registrierungsdatenbank, Benutzeroberfläche oder Konfiguration, doch der vollständige Endbenutzerdienst wird noch nicht als betriebsbereit ausgewiesen.

## Aktuelle Funktionen

| Bereich | Status | Aktueller Stand der Umsetzung |
|---|---|---|
| Strukturierte Manuskriptbearbeitung | **Funktionsfähig** | Semantische Abschnitte, Rich Text, Überschriften, Inline-Formatierung, Listen, Anmerkungen, Literaturverweise, Tabellen und die Bearbeitung strukturierter Inhalte. |
| Desktop-Arbeitsbereich für mehrere Dokumente | **In Betrieb** | Dank Dokumentenregisterkarten im Browser-Stil können mehrere Manuskripte auf dem Desktop geöffnet bleiben. Vollbildansichten von Studio und Konto sowie eine ein- und ausblendbare Dokumentgliederung im Word-Stil unterstützen die Navigation in langen Texten, während die mobile Version ihren kompakten Arbeitsablauf beibehält. |
| Wiederherstellung von Sitzungen/Arbeitsbereichen | **Funktionsfähig** | Der Status von nativen und Web-Arbeitsbereichen kann den vorherigen Arbeitskontext wiederherstellen, einschließlich des Status geöffneter Dokumente, während explizite Steuerelemente zum Schließen von Dokumenten es dem Benutzer ermöglichen, ein Manuskript zu verlassen, ohne die umgebende Anwendungssitzung zu verlieren. |
| Steuerelemente für die Rich-Text-Formatierung | **In Betrieb** | Die kompakte Inline-Formatierung bleibt neben der Auswahl verfügbar; das erweiterte Desktop-Menü ist angedockt und passt sich der Bildschirmgröße an, während die Inline-Sprache aus den konfigurierten Manuskriptsprachen und nicht aus freiem Text ausgewählt wird. Die automatische schwebende Formatierung kann in den Editor-Einstellungen deaktiviert werden. Mobile Auswahlsteuerelemente vermeiden Konflikte mit der nativen Benutzeroberfläche zur Textauswahl. |
| Strukturiertes Suchen und Ersetzen | **In Betrieb** | Overlay zum Suchen und Ersetzen, Suchbereiche und Ergebnisnavigation mit responsivem Zugriff, der sowohl im Desktop- als auch im mobilen Layout verfügbar ist. |
| Mehrsprachige Benutzeroberfläche | **In Betrieb** | 24 unterstützte europäische Sprachen für die Benutzeroberfläche mit gemeinsamer Sprachauswahl. Die Spracheinstellungen für Benutzeroberfläche, Manuskript und Metadaten werden in einem kompakten, responsiven Einstellungsbereich verwaltet. |
| Zeitzonen-Einstellungen | **In Betrieb** | Standardmäßige IANA-Zeitzonenauswahl mit aktuellen UTC-Abweichungen und automatischer Zuweisung der Systemzeitzone als Standard. |
| Mehrsprachige Hilfe | **Betriebsbereit** | Integrierte, lokalisierte Hilfe für alle unterstützten Sprachversionen der Studio-Benutzeroberfläche; In den Hilfeseiten wird die aktuelle Build-Version angezeigt. |
| Konten und Authentifizierung | **Betriebsbereit** | Die servergestützte Registrierung/Anmeldung, Abmeldung und der authentifizierte Zugriff auf API funktionieren sowohl in Web- als auch in nativen Clients. Dasselbe zentrale Konto kann unter Windows, Android, iOS/iPadOS und in Browser-Clients verwendet werden. Native Clients nutzen einen „Bearer-Session“-Transport, der mit Tauri-Anwendungs-Origins kompatibel ist. |
| Passwortwiederherstellung | **Konfigurationsabhängig** | Der Ablauf bei vergessenen Passwörtern bzw. beim Zurücksetzen nutzt einmalig verwendbare, zeitlich begrenzte Zurücksetzungstoken, die ausschließlich als Hashes gespeichert werden, generische Antworten zur Überprüfung der Kontoexistenz sowie die Sperrung aller Sitzungen nach erfolgreicher Passwortänderung. Erfordert eine funktionierende E-Mail-Zustellung durch den Server. |
| Federated Sign-In | **Konfigurationsabhängig** | Google, Microsoft und konfigurierbare generische/institutionelle OIDC-Anbieter verwenden einen Autorisierungscode + PKCE, eine State-/Nonce-Validierung, eine Discovery-/JWKS-Validierung sowie eine explizite Kontoverknüpfung. Bestehende Konten werden niemals allein anhand der E-Mail-Adresse automatisch verknüpft. |
| Verbundene Anmeldeidentitäten | **Betriebs- bzw. konfigurationsabhängige Anbieter** | In den Kontoeinstellungen werden das Passwort sowie die verbundenen OIDC-Identitäten (ORCID) aufgeführt; hier können konfigurierte Anbieter verknüpft oder die Verknüpfung aufgehoben werden, und es wird verhindert, dass die letzte nutzbare Anmeldemethode entfernt wird. |
| Konto-/Profil-Oberfläche | **In Betrieb** | Die Bearbeitung des persönlichen Profils über einen gemeinsam genutzten Server ist sowohl im Desktop- als auch im Mobil-Layout möglich, wobei die Kontoidentität von den Metadaten der Manuskript-Mitwirkenden und der organisationsspezifischen institutionellen Mitgliedschaft getrennt ist. |
| Profil der Einrichtung | **Operativ** | Ein Studio-Konto kann mehrere Mitgliedschaften bei Einrichtungen mit einer Standardzugehörigkeit enthalten. Gemeinsame Daten zu Name der Einrichtung undROR sind von den mitgliedschaftsspezifischen Angaben zu Abteilung, Position, E-Mail-Adresse der Einrichtung, verknüpfter Identität und Rolle getrennt. |
| Administratorrollen der Einrichtung | **Konfigurationsabhängig** | Die Rollen „`MEMBER`“, „`ADMIN`“ und „`OWNER`“ der Einrichtung sind servergebunden. Bei Einrichtungen stehen eine eigene Administrator-Anmeldung sowie eine rollengeschützte Mitgliederverwaltung mit Schutz durch den letzten Eigentümer zur Verfügung. |
| Zentrale Verwaltung von „OMI“ | **Konfigurationsabhängig** | Über eine separate zentrale Berechtigungsebene unter `ADMIN`/`OWNER` können Einrichtungen, Einrichtungsadministratoren, Anmeldedaten für „API“ sowie Verwaltungs-Audit-Ereignisse verwaltet werden, ohne dass Zugriff auf Manuskripte oder redaktionelle Inhalte gewährt wird. |
| Institutionsverwaltung API | **Konfigurationsabhängig** | Institutionsgebundene Maschinen-Anmeldedaten verwenden die Anzeige von einmaligen Roh-Token, die Speicherung als Hash, Ablauf/Widerruf und explizite Gültigkeitsbereiche (`institution:read`, `members:read`, `members:write`, reservierte Integrationsbereiche). Maschinen-Anmeldedaten können die Eigentümerrollen nicht ändern. |
| Identitätsmodell für Mitwirkende | **Operativ** | Mitwirkende, Rollen, Zugehörigkeiten, Identitätsaussagen und Workflows für Autorenprofile werden getrennt von der Kontoidentität dargestellt. |
| ORCID-Authentifizierung | **Konfigurationsabhängig** | ORCID OAuthDie OIDC-Anmelde- und Verknüpfungsinfrastruktur ist implementiert. Die Anmeldedaten für persönliche und institutionelle Bereitstellungen sind getrennt, und die aktive Sandbox-/Produktionsumgebung ist in der Studio-Benutzeroberfläche sichtbar. |
| Portable, an den „ORCID“ gebundene Autorensignaturen | **Konfigurationsabhängig** | Es sind unveränderliche, vom Server festgeschriebene Revisions-Snapshots, eine an den „ORCID“ gebundene Autorenbindung (), Signaturen mit „WebAuthn“, verschlüsselte Installationsausstellerschlüssel sowie portierbare Offline-Verifizierungsnachweise implementiert. |
| Doppelblinde Begutachtung | **In Betrieb** | Anonyme Zuweisung von Gutachtern, Begutachtungsaufträge, Arbeitsbereich für Gutachter, Kommentare und dauerhafte Speicherung der Begutachtungsergebnisse. Die Berechtigungen zum Starten der Gutachterfunktion sind rollenbasiert, um das Prinzip der geringsten Berechtigungen zu wahren. |
| Dashboard für die redaktionelle Begutachtung | **Operativ** | Redaktionsorientierter Überblick und rollenbasiertes Begutachtungsportal für zugewiesene Peer-Review-Aufgaben. |
| Bidirektionales „OJS“-Review-Writeback | **Konfigurationsabhängig / validiert** | Beim signierten Review-Writeback werden übermittelte Review-Daten an OJS zurückgesendet. Die Startbereiche der Prüfer basieren auf dem Prinzip der geringsten Berechtigungen, und das zweistufige „OJS“-Review-Protokoll ist dokumentiert und wurde im Rahmen der OJS 3.5-Integrationslinie getestet. |
| Native „OJS“-Prüfformulare | **Konfigurationsabhängig / validiert** | „OJS“-Prüfformulardefinitionen können in den Arbeitsbereich des Prüfers importiert, als Studio-Steuerelemente dargestellt, sicher lokalisiert und zusammen mit der übermittelten Prüfung zurück in „OJS“ geschrieben werden. Bei der Serververarbeitung bleibt das Markup des Anbieters undurchsichtig, und bei der Client-Darstellung wird der Text sicher extrahiert. |
| Externe/OJS-Begutachtungsaufträge | **Konfigurationsabhängig** | OJS– Verbundene Arbeitsabläufe für Autoren, Redakteure und Gutachter sowie der Kontext externer Aufträge werden implementiert, wenn die OJS-Integration konfiguriert ist. |
| OJS Manuskript-Aufruf/Import | **Konfigurationsabhängig** | Signierte Aufrufbestätigungen, Abruf von Manuskripten/Dateien und strukturierter Import von Metadaten und Manuskriptinhalten von OJS. |
| Interoperabilität zwischen „OJS“ 3.5 | **Validierte Integrationslinie** | Die Kompatibilität zwischen PKP/„OJS“ 3.5 ist dokumentiert und wird in nativen End-to-End-Workflows für Autoren, Redakteure und doppelt anonymisierte Gutachter getestet, einschließlich zugewiesener Dateien, Begutachtungsformulare, Korrekturen, separatem Feedback und signierter Rückmeldung. Die versionsübergreifende Regressionsprüfung ist weiterhin Teil der laufenden Release-Arbeit. |
| Veröffentlichung und Begutachtung von Manuskripten/Studien bei OMP | **Konfigurationsabhängig / validiert** | Signierte Veröffentlichungsaussagen ordnen Monografien und Publikationen in Studio zu, während der Zugriff der Gutachter auf die zugewiesene Studie beschränkt ist. Die Arbeitsabläufe für Autoren, Herausgeber und doppelt anonymisierte Gutachter umfassen zugewiesene Dateien, Begutachtungsformulare, Korrekturen, getrenntes Feedback und signierte Rückmeldungen. |
| Interoperabilität zwischen „OMP“ 3.5 | **Validierte Integrationslinie** | Das bereitstellbare „OMP“-Plugin und die Studio-Integration werden durchgehend mit „OMP“ 3.5 getestet. Umfassendere versionsübergreifende Regressionstests und die Optimierung für den Produktiveinsatz sind weiterhin Teil der laufenden Release-Arbeiten. |
| Strukturierter Import von „DOCX“ | **Funktionsfähig** | Überschriften, Inline-Semantik, Listenvererbung, Fußnoten/Endnoten, Literaturangaben, strukturierte Tabellen und semantische Indexfelder werden unterstützt. Bei umfangreichen Importen kommt das verzögerte Einbinden in den Editor zum Einsatz, und importierte „DOCX“-Dateien werden direkt als „OMI“-Manuskripte geöffnet. |
| Dynamische Indizes und Listen | **Operativ** | Importierte Word-Indexfelder werden semantisch dargestellt und nicht als veralteter Seitennummerntext. Indexverweise führen zu den entsprechenden Stellen im Dokument; unaufgelöste Verweissteuerelemente werden unterdrückt. Der Import von Namensindizes normalisiert die Grenzen zwischen Buchstaben und Zahlen und filtert Störsignale durch Seitenverweise in arabischen Ziffern heraus, während namensrelevante römische Ziffern beibehalten werden. |
| Lokale Rechtschreibung | **Funktionsfähig** | Die dauerhaft gespeicherte lokale Rechtschreibprüfung orientiert sich an der Sprache des Manuskripts und wird von der Rechtschreibprüfungsschicht der Plattform bzw. des Browsers berücksichtigt. |
| Korrekturlesen hinsichtlich Grammatik und Stil | **Konfigurationsabhängig** | Die optional aktivierbare erweiterte Überprüfung kann LanguageTool-kompatible und konfigurierte KI-Sprachdienste nutzen. Fehler werden im Manuskript angezeigt, und Vorschläge werden vom Benutzer explizit übernommen. |
| Übersetzungsausführung | **Konfigurationsabhängig** | Die strukturierte DeepL-Übersetzung erfolgt auf der Ebene von Auswahl, Block, Abschnitt oder Manuskript, wobei die Inline-Semantik beibehalten wird und Zitate, Code, Gleichungen und Literaturangaben von einer unsicheren Abflachung ausgenommen werden. Sprachvarianten können separat gespeichert werden. |
| KI-Integrationsagenten | **Konfigurationsabhängig** | Anbieterunabhängige Agenten für Sprachbearbeitung, Metadaten-Assistenz, Zusammenfassung und Zitierprüfung liefern Vorschläge durch serverseitige Ausführung in einem begrenzten Bereich. Die externe Übermittlung von vertraulichen Begutachtungsinhalten erfordert eine ausdrückliche Genehmigung. |
| Integrationsaudit und Erweiterungsregister | **Operative Grundlage / konfigurationsabhängige Ausführung** | Bei der Integrationsausführung werden Betriebsmetadaten und Zusammenfassungen protokolliert, ohne dass der Originaltext oder vertrauliche Informationen gespeichert werden. Erweiterungsmanifeste unterstützen Versionskompatibilität, Berechtigungen, Funktionen und ausschließlich über HTTPS erreichbare externe Endpunkte. |
| Export in das Portable-OMI-Format | **In Betrieb** | Die Formate „`.omi.zip`“ und „OMI“ (JSON) stehen als erstklassige Austauschformate zur Verfügung. |
| Exporte für Wissenschaft und Verlagswesen | **In Betrieb** | JATS XML, das semantische Offline-HTML-Paket, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA und LaTeX sind in der aktuellen Export-Ebene vertreten. Semantische Indexfelder können zurück nach DOCX exportiert werden. |
| Plattformübergreifende Exportfunktion | **In Betrieb** | Hosted Studio nutzt Browser-Downloads; installierte Tauri-Clients verwenden native Speicher-/Dokumentenauswahldialoge und binäre Schreibvorgänge für unterstützte Exportziele. Mobile Clients stellen eine plattformgerechte Teilmenge bereit, anstatt ausschließlich auf Desktop-Veröffentlichungsoptionen zu setzen. |
| Verlagsprofile | **Betrieblich** | Die Verwaltung von Verlagsprofilen, Export- und Druck-Stylesheets ist von der Semantik des Manuskripts getrennt. |
| Geräteorientierter Speichermodus | **Auf installierten Clients aktiv** | Studio speichert für jeden Benutzer und jedes Gerät eine Vertrauenspräferenz für „eigene Geräte“. Eigene Geräte können ihre normalen nativen Arbeitspfade beibehalten; neu erkannte oder freigegebene Geräte werden standardmäßig in einen eingeschränkten Modus versetzt, in dem lokale Arbeitspfade nicht beibehalten werden. |
| Profil-Cloud-Verbindungen | **Betriebs- bzw. anbieterspezifisch** | Direkte WebDAV-/Nextcloud-Anmeldedaten werden serverseitig verschlüsselt und sind auf den angemeldeten Benutzer beschränkt, sodass Profil-Cloud-Verbindungen dem Konto geräteübergreifend folgen können. Zukünftige OAuth-Cloud-Verbindungen verwenden dasselbe profilbezogene Modell. |
| Mobiler Speicher auf gemeinsam genutzten Geräten | **Funktioniert auf installierten Clients** | Der Modus für gemeinsam genutzte Geräte ermöglicht weiterhin das explizite einmalige Öffnen/Speichern auf Wechseldatenträgern oder mobilen Speicherorten, ohne den ausgewählten Pfad als aktuelle Arbeitsdatei beizubehalten. |
| Lokal synchronisierte Ordner | **Auf dem Desktop verfügbar** | OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive und andere auf dem Desktop synchronisierte Ordner werden als Verbindungsmethoden ihres jeweiligen Anbieters behandelt. Studio schreibt portierbare „OMI“-Dateien lokal, während der Client des Anbieters die Authentifizierung und Synchronisierung durchführt. |
| Nativer Dokumenten-Workflow für Android | **Operative Beta-Phase** | Android nutzt die systemeigene Auswahlfunktion des „Documents / Storage Access Framework“ zum Öffnen, Speichern, Speichern unter, für portable „`.omi.zip`“-Sicherungen sowie für unterstützte Exportziele anstelle allgemeiner Berechtigungen für den gemeinsamen Speicher. Der Dokumentenlebenszyklus sowie das Verhalten beim Schließen und erneuten Öffnen von Dokumenten sind weiterhin Gegenstand gezielter Regressionstests in der Beta-Phase. |
| Nativer „Files“-Workflow unter iOS/iPadOS | **Validiertes natives Ziel** | Auf dem iPhone/iPad wird der „Apple Files“-/„UIDocumentPicker“-Workflow mit sicherheitsbezogenem Dokumentenzugriff zum Öffnen und Speichern von „OMI“-Dateien sowie für mobilrelevante Exportziele verwendet. Für die öffentliche Verteilung sind weiterhin eine Apple-Signierung/Provisionierung sowie eine Gerätevalidierung erforderlich. |
| WebDAV / Nextcloud-Direktspeicher | **Konfigurationsabhängig** | Direkte WebDAV-/Nextcloud-Verbindungen unterstützen verschlüsselte serverseitige Anmeldedaten, Verbindungstests sowie das Hochladen, Wiederherstellen und Löschen von Backups auf verschiedenen Geräten. |
| Integrationskatalog | **In Betrieb** | Anbieterverzeichnis, Katalog-Benutzeroberfläche, Status-Client, deklarierte Authentifizierungsmodi und Ausführungsflächen sind vorhanden. |
| Windows-Desktopanwendung | **Betriebsbereite Beta-Version** | Die Tauri 2-Windows-Anwendung, EXE-/MSI-Pakete, native Authentifizierung, Zugriff auf lokale Dateien und native Speicherabläufe sind implementiert. |
| Linux- und macOS-Pakete | **Operative Build-Ziele** | Die Release-Automatisierung definiert Ziele für Linux AppImage/DEB und macOS Intel/Apple Silicon DMG. Die Signierung/Notarisierung der Plattformen erfolgt weiterhin separat im Rahmen der Release-Sicherung. |
| Android-Anwendung | **Beta-Version im Einsatz** | Eine universelle Android-APK wird über den gemeinsamen Tauri-2-Release-Workflow erstellt. Servergestützte Authentifizierung, native Verarbeitung von OIDC/ORCID-Antworten, responsive Navigation, native Verarbeitung von Documents/SAF-Dateien, Exportfunktion und das Branding von „OMI“ sind Teil der gemeinsamen Client-Linie. |
| iOS-/iPadOS-Anwendung | **Validiertes natives Ziel** | Die Generierung des Tauri-iOS-Projekts und der Build für den Apple-Silicon-iPhone-/iPad-Simulator sind in der CI erfolgreich verlaufen, einschließlich der nativen „Files“-Integration und des gemeinsam genutzten Codes für die mobile Authentifizierung und den Export. Für die öffentliche Verteilung über TestFlight und den App Store sind weiterhin die Signierung durch Apple Developer, die Provisionierung, die Zuordnung von Universal Links sowie die Validierung auf einem physischen Gerät erforderlich. |
| Ablauf der Desktop-Aktualisierung | **In Betrieb** | Der Ablauf für Aktualisierungsbenachrichtigungen und die Installation ist in der Desktop-Anwendung implementiert, und die Aktualisierungsdateien werden durch die Release-Konfiguration generiert. |
| Plattformübergreifende Release-Automatisierung | **Betrieb** | GitHub Actions erstellt Windows-, Linux-, macOS- und Android-Artefakte aus dem gemeinsamen Quellcode-Verzeichnis und führt einen Smoke-Build auf einem iOS/iPadOS-Simulator durch. Sobald die Apple-Anmeldedaten konfiguriert sind, wird ein manueller, signierter Apple-Release-Workflow für App Store Connect vorbereitet. |
| Reproduzierbarkeit der Abhängigkeiten bei der Veröffentlichung | **In Betrieb** | Die Abhängigkeitsgraphen von JavaScript und Rust werden über Lockfiles gesteuert; CI verwendet reproduzierbare Installationspfade, einschließlich `npm ci` für den Server. |
| Anwendungsbranding | **Betrieblich** | Das Branding unter OMI Studio sowie die generierten nativen Icon-Assets werden in der gesamten Anwendungshülle und im Release-Paket verwendet, einschließlich Android und der generierten iOS/iPadOS-Zielplattform. |
| Sicherheitsoptimierung | **Betriebsbaseline** | Serverseitige Ratenbegrenzung, SSRF-Einschränkungen, OIDC-Status-/Nonce-/PKCE- und Aussteller-Validierung, eingeschränkte Speicherung geheimer Daten, gehashtes Zurücksetzen/Admin-API-Token, Integrations-/Admin-Protokollierung, sichereres Escaping beim Import/Export sowie automatisierte Sicherheitsscans sind in die aktuelle Entwicklungslinie integriert. OJS Die Darstellung von Überprüfungsformularen verfügt über zusätzliche Absicherungsmaßnahmen zur Isolierung von Markup und Text. |
| Windows-Code-Signierung | **Antrag eingereicht / in Bearbeitung** | Die Richtlinien zur öffentlichen Code-Signierung und zum Datenschutz wurden veröffentlicht, und die Open-Source-Anwendung „SignPath Foundation“ wurde vorbereitet bzw. eingereicht. Windows-Installationsprogramme bleiben bis zur Annahme und Integration der Signierung in die Produktion unsigniert. |

## Plattformübergreifende Architektur

Studio verfügt über eine konkrete Architektur mit gemeinsam genutzten Clients anstelle separater Web- und nativer Produktlinien. React/TypeScript: Das Manuskriptmodell „OMI“, das Editorverhalten, die Authentifizierungsabläufe, das Peer-Review-Verfahren, die Integrationen sowie die Import-/Exportlogik werden gemeinsam genutzt. Tauri 2 stellt native Verpackungs- und Plattformfunktionen für Desktop- und mobile Clients bereit.

Die responsive Benutzeroberfläche unterscheidet sich bewusst je nach Formfaktor: Auf dem Desktop stehen Registerkarten für mehrere Dokumente, eine permanente Dokumentenstruktur und die Bearbeitung in mehreren Bereichen zur Verfügung, während auf Mobilgeräten eine kompakte Navigation, Ausklappmenüs, touchorientierte Bedienelemente und plattformspezifische Dateiauswahlfenster zum Einsatz kommen. Dabei handelt es sich um einen Unterschied in der Darstellung, nicht um ein separates Manuskriptmodell.

Die iOS/iPadOS-Zielplattform nutzt denselben gemeinsamen mobilen Client. Apple-spezifische Aufgaben beschränken sich auf die native Paketierung, den Dokumentenzugriff über „Dateien“/„UIDocumentPicker“, Anwendungsmetadaten, Signierung/Provisionierung und die Zuordnung von Universal Links.

## Architekturgrenzen

### Eigentumsrechte an Manuskripten: „Local-first“-Prinzip

Die native Anwendung kann Manuskripte in einem vom Autor gewählten Speicherort aufbewahren. Ein Manuskript muss nicht zwangsläufig zum proprietären Serverstatus werden, nur weil servergestützte Identitätsfunktionen, Kollaborationsfunktionen oder Integrationen aktiviert sind.

Installierte Studio-Clients unterscheiden zwischen einem vertrauenswürdigen persönlichen Gerät und einem gemeinsam genutzten/fremden Gerät. Auf einem eigenen Gerät können die üblichen Arbeitspfade im lokalen Speicher bzw. im Systemspeicher beibehalten werden. Auf einem gemeinsam genutzten Gerät bevorzugt Studio Cloud-Verbindungen im Profilbereich und behält den ausgewählten lokalen Pfad nicht bei; einmalig verwendbare tragbare/Wechselspeicher bleiben jedoch verfügbar.

### Servergestützte Identitäten und Dienste

Konten, Passwortwiederherstellung, verknüpfte Identitäten, föderierte Anmeldung, Zusammenarbeit, Peer-Review, direkte Cloud-Anbindungen, institutionelle Verwaltung und Integrationen mit Publikationssystemen nutzen das Studio-API- und PostgreSQL-gestützte Dienste. Die Authentifizierungsidentität wird von der Identität des wissenschaftlichen Autors und der Zugehörigkeit zu einer Institution getrennt gehalten. Diese Funktionen setzen voraus, dass die Bereitstellung korrekt konfiguriert und migriert wurde.

### Grenze des Verwaltungsbezirks

Die institutionelle Mitgliedschaft (`MEMBER` / `ADMIN` / `OWNER`) und die zentrale Verwaltung von „OMI“ (`ADMIN` / `OWNER`) sind getrennte Berechtigungsebenen. Keine von beiden gewährt für sich allein Zugriff auf Manuskripte, Gutachten oder redaktionelle Inhalte. Die Zugangsdaten für den institutionellen Machine-API sind an eine bestimmte Einrichtung und explizite Gültigkeitsbereiche gebunden und können die Rollen der Eigentümer nicht ändern.

Siehe [Institutional and Central Administration](../integrations/institutional-administration.md).

### Externe Integrationen

OMI trennt die Semantik des Manuskripts von der anbieterspezifischen Authentifizierung und dem Transport. OJS, OMP, Cloud-Speicher, ORCID, OIDC-Identitätsanbieter, Übersetzungsdienste und KI-Agenten werden daher über Integrationsschichten miteinander verbunden, anstatt Teil des zentralen Dokumentmodells zu werden.

### Veröffentlichungssystem-Behörde

Bei vernetzten Arbeitsabläufen zwischen OJS und OMP bleibt das Publikationssystem die maßgebliche Instanz für den Status des Einreichungsworkflows, Zuweisungen, Begutachtungsrunden und redaktionelle Entscheidungen. Studio dient als strukturierter Arbeitsbereich für die Erstellung und Begutachtung von Inhalten und tauscht Informationen über definierte Anwendungsendpunkte aus, anstatt eine direkte Anbindung an die Datenbank zu nutzen.

Die aktuellen Integrationen unter OJS und OMP sind für die Begutachtungsarbeit bidirektional: Studio kann rollenbezogene Startkontexte, zugewiesene Dateien und native Definitionen von Begutachtungsformularen verarbeiten und über den Integrationsendpunkt signierte Begutachtungsbeiträge, Korrekturen sowie getrenntes Feedback von Autoren und Lektoren zurückgeben. OMP bewahrt darüber hinaus die Zuordnung von Monografien, Publikationen und Studien und beschränkt die Begutachter auf die ihnen zugewiesene Studie. Dadurch werden keine Workflow-Berechtigungen von OJS oder OMP auf Studio übertragen.

## Veröffentlichung und Vertrieb

`0.1.0-beta.3` ist die aktuelle Beta-Release-Reihe von Studio. „GitHub Actions“ erstellt Release-Artefakte aus dem gemeinsamen Quellcode-Baum für Windows, Linux, macOS und Android. Auf der öffentlichen Studio-Download-Seite können die verfügbaren nativen Pakete, einschließlich der universellen Android-APK, über den Browser abgerufen werden.

Für iOS/iPadOS gibt es derzeit einen funktionierenden CI-Simulator-Build, jedoch keine öffentliche IPA-Datei. Der Apple-Vertriebsweg ist zwar vorbereitet, wird jedoch bewusst von der Simulator-Validierung getrennt: Für öffentliche Builds und Geräte-Builds sind die echte Apple Development Team ID, das Vertriebszertifikat, das Provisioning-Profil sowie die endgültige Konfiguration der „`apple-app-site-association`“ erforderlich, bevor die Veröffentlichung über TestFlight bzw. im App Store beantragt werden kann.

Siehe [Open Manuscript Studio on iOS and iPadOS](../foundations/ios-ipados-studio.md).

## Schwerpunkt der Beta-Validierung

Die Beta-Phase verlagert den Fokus der Freigabe von der Frage „Ist der primäre Workflow implementiert?“ hin zu „Bleibt er bei realistischen Dokumenten, Plattformen, Rollen und Fehlerbedingungen zuverlässig?“. Derzeit gelten folgende Prioritäten bei der Validierung:

1. Erstellen, Öffnen, Bearbeiten, Speichern, explizites Schließen, Wiederherstellen der Sitzung und erneutes Öffnen von Dokumenten ohne Datenverlust;
2. umfangreiche und strukturell komplexe „DOCX“-Importe, einschließlich Anmerkungen, Tabellen, Listen, Feldern und dynamischen Indizes;
3. typische strukturierte Exportpfade im Web und in nativen Clients;
4. OJS sowie „OMP“-Workflows für den Hin- und Rückversand von Manuskripten sowie rollenbasierte Workflows für Autoren, Redakteure und Gutachter, einschließlich der Festlegung des Umfangs zugewiesener Dateien, mehrstufiger Begutachtung, nativer Begutachtungsformulare und signierter Rückmeldungen;
5. doppelblinde Begutachtung ohne Identitätspreisgabe und mit Integrationsbereichen mit minimalen Berechtigungen;
6. Android-Dokumente/Verhalten des SAF-Lebenszyklus und reaktionsschnelle mobile Navigation;
7. Verhalten von „iOS/iPadOS Files/UIDocumentPicker“, sobald signierte Tests auf physischen Geräten möglich sind;
8. Institution/Zentralverwaltung, ohne dass privilegierte Informationen in den Manuskriptinhalt gelangen;
9. Verständliche, benutzerfreundliche Wiederherstellungsmöglichkeiten bei Ausfällen in den Bereichen Netzwerk, Authentifizierung, Migration, Import/Export und Integration.

Konfigurationsabhängige Integrationen müssen für die Beta-Version nicht allgemein verfügbar sein, vorausgesetzt, ihr Reifegrad ist eindeutig ausgewiesen und sie beeinträchtigen die stabilen Kern-Workflows nicht.

## Verbleibende Arbeiten zur Stabilisierung der Beta-Version

- Durchführung umfassender, gezielter Regressionsprüfungen für Windows und Android, insbesondere hinsichtlich des nativen Verhaltens beim Öffnen, Schließen, Speichern und Wiederherstellen von Dokumenten;
- die Stresstests für umfangreiche und strukturell ungewöhnliche Manuskripte unter DOCX fortsetzen und die sanfte Wiederherstellung bei nicht unterstützten Word-Konstrukten verbessern;
- Testen der Passwortzurücksetzung, der OIDC-Verknüpfung/-Trennung sowie des geräteübergreifenden Sitzungsverhaltens anhand einer produktionsnahen E-Mail-/Anbieter-Konfiguration;
- Migrations- und Autorisierungs-Regressionstests für die Institutionenzugehörigkeit, die zentrale Verwaltung und die Anmeldedaten für den Institutions-Admin-API durchführen;
- Fortsetzung: OJS 3.5 – mehrstufige Überprüfung in mehreren Durchläufen und Tests zur versionenübergreifenden Interoperabilität;
- Weiter unter OMP 3.5: Versionsübergreifende Interoperabilität, Bereitstellung und Absicherung der Wiederherstellung;
- das Wiederherstellungsverhalten bei unterbrochenen Netzwerk-, Cloud- und Synchronisierungsvorgängen stärken;
- die verbleibenden technischen/rohen Fehlermeldungen durch konkrete, für den Benutzer verständliche Meldungen ersetzen;
- die Windows-Produktionscodesignierung integrieren, falls bzw. sobald die „SignPath Foundation“-Anwendung genehmigt wird;
- die Arbeit an der Signierung/Beglaubigung unter macOS fortsetzen;
- Konfigurieren Sie die Apple-Entwickler-Signierung/Provisionierung, die Zuordnung von Universal Links in der Produktionsumgebung sowie die TestFlight-/Gerätevalidierung, bevor Sie die öffentliche iOS-/iPadOS-Verteilung beantragen;
- die Arbeit an einer Store-orientierten Android-Distribution fortsetzen;
- Konformitätssuiten entwickeln, die das Implementierungsverhalten direkt den normativen Anforderungen von OMI zuordnen;
- Garantien für die Kompatibilität der Versionsstufen für unterstützte Import-/Exportziele festlegen.

Das Vorhandensein einer Funktion in diesem Implementierungs-Snapshot darf nicht als formale Konformität mit einer Spezifikation unter OMI ausgelegt werden, es sei denn, eine entsprechende Konformitätsklasse und entsprechende Nachweise werden separat veröffentlicht.

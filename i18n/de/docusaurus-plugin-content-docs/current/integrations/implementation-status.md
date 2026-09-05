---
title: Stand der Integrationsumsetzung
sidebar_label: Integrationsstatus
description: Aktueller Stand der Implementierung von „Open Manuscript Studio“-Integrationen und externen wissenschaftlichen Diensten.
---

# Stand der Integrationsumsetzung

**Stand:** 05.09.2026  
**Geltungsbereich:** Referenzimplementierung von „Open Manuscript Studio“  
**Rechtskraft:** Informativer Umsetzungsbericht; die Integrationsspezifikationen behalten, soweit anwendbar, ihren normativen Charakter.

Auf dieser Seite wird zwischen **implementiertem Produktverhalten**, **Protokollentwurf** und **geplanten Konnektoren** unterschieden. Ein dokumentiertes Integrationsprofil bedeutet an sich noch nicht, dass der entsprechende Produktionskonnektor fertiggestellt ist.

## Statusbegriffe

| Status | Bedeutung |
|---|---|
| **Betriebsbereit** | Im aktuellen Studio-Workflow implementiert und getestet. Möglicherweise sind noch bereichsspezifische Konfigurationen erforderlich. |
| **Konfigurationsabhängig** | In Studio implementiert, erfordert jedoch Administratorrechte, Endpunkte, eine Registrierung bei OAuth/ OIDC, E-Mail-Zustellung, eine Datenbankmigration oder einen externen Dienst. |
| **Grundlage** | Datenmodell, Benutzeroberfläche, Provider-Registrierung sowie Client- oder Konfigurations-Scaffolding sind vorhanden, die durchgängige Integration in die Produktionsumgebung ist jedoch noch nicht abgeschlossen. |
| **Nur Spezifikation** | Das Protokoll/Profil ist dokumentiert, die Referenzimplementierung bietet jedoch noch nicht den vollständigen Konnektor. |
| **Geplant** | Geplanter Integrationsbereich ohne vollständige Implementierungsgrundlage. |

## Aktuelle Integrationsmatrix

| Integration | Aktueller Stand | Umsetzte Erkenntnisse / aktueller Umfang | Noch zu erledigende Aufgaben |
|---|---|---|---|
| **OJS** | **Betriebs- bzw. konfigurationsabhängig; nativ E2E-verifiziert** | Signierter Start durch Autor, Herausgeber und Gutachter; Austausch von Metadaten und dateibezogenen Zuordnungen; Import von „DOCX“; doppelt anonymisierte Gutachterzuordnung; vorgeschriebene native Begutachtungsformulare; Korrekturen am Manuskript; für den Autor sichtbares und nur für den Herausgeber zugängliches Feedback; HMAC-signiertes Zurückschreiben von Begutachtungsergebnissen. Verifiziert anhand einer einmalig verwendbaren nativen „OJS“ 3.5-Umgebung. | Fortsetzung der Absicherung des Publikationsrücklaufs, Kompatibilitätstests über unterstützte „OJS“-Versionen hinweg sowie Dokumentation für Betreiber. |
| **OMP** | **Betriebs- bzw. konfigurationsabhängig; nativ E2E-verifiziert** | Signierter Start durch Autor/Redakteur/Gutachter; Zuordnung von Monografie und Studie; Gutachterprojektion beschränkt auf die zugewiesene Studie; auf den Auftrag beschränkte Dateien; erforderliche native Begutachtungsformulare; Korrekturen; getrenntes Feedback; HMAC-signiertes Zurückschreiben. Verifiziert anhand einer temporären nativen „OMP“ 3.5-Umgebung. | Fortsetzung umfassenderer Kompatibilitätstests für „OMP“-Versionen, Leitlinien für den Einsatz in der Produktion und Absicherung der Rückgabe an den Verlag. |
| **ORCID OAuth/OIDC** | **Konfigurationsabhängig** | Authentifizierung/Verknüpfung von Konten, Weiterleitung persönlicher/institutioneller Anmeldedaten, Auswahl zwischen Sandbox und Produktion, Übergabe zwischen nativem Browser und App-Link sowie direkte Überprüfung der „ORCID“ im Rahmen des Autor-Signatur-Ablaufs sind implementiert. | Registrierung von Produktionszugangsdaten, Callback-Konfiguration, Betriebsüberwachung und umfassendere plattformübergreifende Regressionstests. |
| **Google / Microsoft / institutionelles OIDC** | **Konfigurationsabhängig** | Autorisierungscode + PKCE, Validierung von Status und Nonce, Discovery-/JWKS-Überprüfung, Aussteller-/Zielgruppenprüfungen, explizite Kontoverknüpfung und gemeinsame native Übergabe sind implementiert. | Registrierung von Produktionsanbietern, mandanten-/anbieterspezifische Bereitstellungstests und Betriebsüberwachung. |
| **Vernetztes Identitätsmanagement** | **Betriebs- bzw. anbieterspezifisch** | Die Kontoeinstellungen listen Passwort-, „ORCID“- und OIDC-Identitäten auf, zeigen Metadaten zu Verbindung und letzter Nutzung an, unterstützen das explizite Verknüpfen und Entkoppeln und verhindern das Löschen der letzten nutzbaren Anmeldemethode. | Umfassendere Benutzeroberfläche für Anbieter und zukünftige SAML-Verwaltungsoberfläche. |
| **Institutionsverwaltung** | **Konfigurationsabhängig** | Es sind Institutionsmitgliedschaften, `MEMBER`/`ADMIN`/`OWNER`-Rollen, eine eigene Administrator-Anmeldung, serverseitige Rollendurchsetzung, zentrale OMI-Verwaltung und der Schutz des letzten Eigentümers implementiert. | Anleitung zur Migration/Konfiguration in die Produktionsumgebung, Abdeckung von Autorisierungsregressionen und Erweiterung des Integrationsmanagements für Institutionen. |
| **API für die Institutionsverwaltung** | **Konfigurationsabhängig** | Institutionsgebundene Maschinen-Anmeldedaten nutzen die Anzeige von Einmal-Token, eine gehashte Speicherung nach dem „SHA-256“-Prinzip, Ablauf-/Widerrufsmechanismen, explizite Gültigkeitsbereiche und nur-zum-Anhängen-dürfende Verwaltungs-Audit-Ereignisse. Endpunkte der Version 1 für Mitglieder/Kontexte sind implementiert. | Hinzufügen von integrationsverwaltungsbezogenen Endpunkten im institutionellen Bereich hinter den reservierten Bereichen `integrations:read` / `integrations:write` sowie Erweiterung der Dokumentation zur Automatisierung. |
| **Geräteerkennender nativer Speicher** | **Funktioniert auf installierten Clients** | Installierte Clients unterscheiden zwischen eigenen Geräten und gemeinsam genutzten/fremden Geräten. Eigene Geräte können native Arbeitspfade beibehalten; gemeinsam genutzte Geräte behalten keine lokalen Pfade bei und bevorzugen Cloud-Verbindungen im Profilbereich. Einmalig verwendbare tragbare/entfernbare Speichermedien bleiben verfügbar. | Setzen Sie die Wiederherstellungstests und die plattformspezifische Validierung von Randfällen fort. |
| **Android-Dokumente / SAF-Speicher** | **Öffentliche Beta-Version im Einsatz** | Android nutzt den systemeigenen „Dokumente / Storage Access Framework“-Auswahldialog zum Öffnen, Speichern, Speichern unter, für „PortableOMI“-Sicherungen und unterstützte Exporte anstelle allgemeiner Berechtigungen für gemeinsam genutzten Speicher. | Regressionstests auf Geräte- und Hersteller-Ebene sowie Absicherung der Verteilung über den Store. |
| **Lokal synchronisierter Speicher** | **Auf dem Desktop einsetzbar** | OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud und iCloud Drive werden als anbieterspezifische Methoden für lokal synchronisierte Ordner dargestellt. Studio schreibt portierbare „OMI“-Dateien lokal, während der Client des Anbieters die Authentifizierung und Synchronisierung durchführt. Die Pfade bleiben gerätespezifisch. | Die Tests zur Wiederherstellung bei unterbrochener lokaler/Anbieter-Synchronisierung fortsetzen und die Validierung auf nativen Plattformen ausweiten. |
| **WebDAV / Nextcloud im Profilbereich** | **Konfigurationsabhängig** | Direkte Verbindungen unterstützen verschlüsselte serverseitige Anmeldedaten, Verbindungstests, das Hochladen portabler Backups, Integritätsprüfungen sowie die Wiederherstellung und Löschung. Die Verbindungen sind auf das authentifizierte Studio-Profil beschränkt und können dem Benutzer geräteübergreifend folgen. | Anbieterspezifische Optimierung der Benutzererfahrung, Betriebsüberwachung und umfassendere Interoperabilitätstests. |
| **Katalog der Cloud-Anbieter** | **Operative Grundlage** | Die Auswahl „Anbieter → Kontoart (privat/geschäftlich) → Verbindungsmethode“ ist für Nextcloud, WebDAV, OneDrive, SharePoint, Google Drive, Dropbox und iCloud Drive implementiert. Lokal synchronisierte Ordner sind Methoden des tatsächlichen Anbieters und keine Pseudodienste. | DirektOAuth-2.0-Konnektoren sollen schrittweise hinzugefügt werden, wenn eine native/lokale Synchronisierung nicht gewünscht ist. |
| **Strukturierte DeepL-Übersetzung** | **Konfigurationsabhängig** | Die serverseitige DeepL-Ausführung ist für die Bereiche „Auswahl“, „Block“, „Abschnitt“ und „gesamtes Manuskript“ implementiert. Die strukturierte Segmentierung bewahrt Inline-Markierungen und schließt Zitate, Querverweise, Code, Gleichungen und Literaturangaben aus; umfangreichere Übersetzungen können als separate Sprachvarianten gespeichert werden. | Überwachung von Produktionszugangsdaten und -kontingenten, UX bei Anbieterrfehlern und umfassendere Tests von Sprachpaaren. |
| **Grammatik-/Stilprüfung** | **Konfigurationsabhängig** | Die optionale, LanguageTool-kompatible Prüfung und die Ausführung des konfigurierten KI-Spracheditors liefern strukturierte Ergebnisse zu Rechtschreibung, Grammatik, Zeichensetzung und Stil, ohne dass das Manuskript serverseitig direkt verändert wird. | Optimierung durch den Produktionsanbieter, Latenz- und Fehlerbehandlung sowie umfassendere Sprachabdeckung. |
| ** KI-Agenten von „OMI“** | **Konfigurationsabhängig** | Ein anbieterunabhängiger Spracheditor, ein Metadaten-Assistent, ein Zusammenfassungs-Tool und ein Zitierprüfer werden über einen konfigurierbaren HTTPS-Endpunkt für Chat-Vervollständigungen ausgeführt. Vorschläge erfordern eine explizite Anwendung durch den Benutzer. Vertrauliche Inhalte werden blockiert, sofern sie nicht ausdrücklich zugelassen sind. | Tests zur Interoperabilität der Anbieter, Evaluierungs-Fixtures, Quoten-/Latenzverwaltung sowie weitere agentenspezifische Sicherheitsbeschränkungen. |
| **Integrations-Prüfpfad** | **Betrieblich** | Externe Ausführungsprotokolle erfassen Metadaten zu Vorgang, Anbieter und Umfang sowie Digests von SHA-256 anstelle von Manuskripttext, Eingabeaufforderungen, Ausgaben oder geheimen Daten. | Kontrollmechanismen für Berichterstattung und Aufbewahrung sowie operative Dashboards. |
| **Integrationserweiterung „API“ v1** | **Operative Grundlage** | Die Erweiterungs-Manifest-Registrierung, Kompatibilitäts- und Versionsprüfungen, bereichsbezogene Berechtigungen, Funktionen, ausschließlich HTTPS-basierte Endpunkte sowie die SDK-Dokumentation sind implementiert. | Beispiele für Erweiterungen von Drittanbietern, Signatur- und Vertrauensrichtlinien sowie Konformitäts-Fixtures. |
| **Katalog der Integrationsanbieter** | **In Betrieb** | Studio stellt einen Integrationsbereich, ein Anbieterregister, Metadaten zum Authentifizierungsmodus, den Konfigurationsstatus, die Speicherkonfiguration, Übersetzungs- und Agent-Tools, Audit-Informationen sowie Erweiterungsoberflächen bereit. | Fügen Sie schrittweise Produktionskonnektoren hinzu, ohne das Manuskriptmodell von „OMI“ an einzelne Anbieter zu binden. |
| **Strukturierte bibliografische Dienste** | **Operative Grundlage** | Strukturierte Abfragen von Crossref, DataCite, OpenAlex und MTMT werden in ein gemeinsames bibliografisches Modell mit Normalisierung und Deduplizierung gemäß „DOI“ abgebildet. Identitätsabfragen von ROR und ORCID sind ebenfalls integriert. | Zwischenspeicherung, Richtlinien für Abgleich und Provenienz, weitere Identifikationsregister sowie anbieterspezifische Handhabung der Zuverlässigkeit. |
| **Bibliografische Webanbieter mit Anmeldung** | **Operative Grundlage / anbieterabhängig** | Voreingestellte und konfigurierbare HTTPS-Webanbieter von Academia.edu mit Anmeldung können geöffnet werden, ohne dass Studio Passwörter erfasst. Tauri behält die WebView-Sitzungen der Anbieter bei und unterstützt die explizite Bereinigung bei der lokalen Abmeldung. | Anbieterspezifische Kompatibilitätstests und eine übersichtlichere Benutzererfahrung in Bezug auf Vertrauenswürdigkeit und Sitzungen. |
| **Repository / Archivierung** | **Geplant** | Die Architektur unterstützt externe Adapter für die Einlieferung und Archivierung. | Konkrete Konnektorprofile definieren und Referenzadapter implementieren. |

## OJS Hinweis zur Umsetzung

OJS ist derzeit die ausgereifteste Integration einer externen Publikationsplattform in der Referenzimplementierung. In der Produktionsarchitektur werden „OJS“ und „Studio“ als separate Anwendungen mit eigenen Persistenzschichten geführt. „OJS“ bleibt die maßgebliche Instanz für den Einreichungsworkflow, die Zuweisung von Gutachtern, die Begutachtungsrunden und redaktionelle Entscheidungen; „Studio“ stellt den strukturierten Arbeitsbereich für Manuskripte und Begutachtungen bereit.

Der verifizierte Weg ist über ein konzeptionelles Startprofil hinaus fortgeschritten. Studio kann signierte „OJS“-Kontexte empfangen, Manuskriptdateien über Integrationsendpunkte abrufen, die Manuskriptstruktur aus „DOCX“-Material rekonstruieren, unterstützte Inline-Semantik und Anmerkungen beibehalten sowie rollenbasierte Arbeitsabläufe für Autoren, Redakteure und Gutachter bereitstellen. Extern zugewiesene Peer-Reviews können in Studio angenommen und bearbeitet werden, während die Grenzen der doppelblinden Identitätsanonymität weiterhin Teil des Begutachtungsprozesses bleiben.

Serverseitige Anfragen, die aus dem „OJS“-Startkontext stammen, sind auf die vom Administrator registrierte Installationsquelle beschränkt und gegen unsichere Weiterleitungen, private/reservierte Ziele, Pfadtraversierung und durch Anfragen gesteuerte Berechtigungsänderungen abgesichert. Dies ist Teil der aktuellen Sicherheitsgrundlage für die Integration und stellt keine Änderung am „OJS“-Protokoll selbst dar.

Bei der Integration werden bewusst die Grenzen von „application/API“ genutzt, anstatt direkt auf die Datenbank „OJS“ zuzugreifen. Dadurch bleibt die Bereitstellungsunabhängigkeit gewahrt und das Protokollverhalten lässt sich testen.

Dies bedeutet **nicht**, dass jede im vollständigen „OJS-Integrationsprofil v1“ beschriebene Operation bereits den endgültigen Status der Interoperabilität oder Konformität erreicht hat. Die Round-Trip-Synchronisation, Publikations-Rückgabepfade und eine umfassendere Versionskompatibilität sind weiterhin Bereiche, an denen aktiv gearbeitet wird.

## OMP Hinweis zur Umsetzung

OMP ist ein erstklassiges Ziel für die operative Integration mit einem speziellen Plugin und einer nativen End-to-End-Abdeckung gemäß „OMP“ 3.5. Die Freigaben durch Gutachter sind an eine zugewiesene Studie gebunden; Daten zur übergeordneten Monografie, zu verwandten Studien sowie zur Identität der Mitwirkenden werden aus der anonymen Gutachtenauswertung ausgeschlossen. „OMP“ bleibt die maßgebliche Instanz für den Press-Workflow, Zuweisungen, Begutachtungsrunden und das Abschlussverhalten, während „Studio“ den strukturierten Arbeitsbereich für die Begutachtung bereitstellt.

## Modell zur Speicherintegration

Studio verwendet nun drei explizite Speicherkontexte.

**Eigenes Gerät / systemeigener Speicher.** Auf einem vertrauenswürdigen, installierten Gerät kann Studio den vom Autor ausgewählten, plattform-eigenen Speicher nutzen. Bei Desktop-Zielplattformen können lokale Ordner, eingebundene Speicher/Netzwerkspeicher sowie vom Anbieter synchronisierte Ordner verwendet werden. Android nutzt die Systemoberfläche „Dokumente“ bzw. das „Storage Access Framework“.

**Gemeinsam genutztes oder fremdes Gerät.** Bei neu erkannten, installierten Geräten wird standardmäßig eine eingeschränkte lokale Persistenz eingestellt. Studio speichert den Pfad der lokalen Arbeitsdatei nicht und bevorzugt Cloud-Verbindungen, die zum angemeldeten Profil gehören. Die einmalige Nutzung von Wechseldatenträgern bzw. tragbaren Speichergeräten ist weiterhin möglich, ohne dass der gewählte Pfad gespeichert wird.

**Direkte Profilverbindung.** Studio stellt selbst eine Verbindung zu einem Speicherdienst her. Der derzeit implementierte direkte Pfad ist WebDAV/Nextcloud mit verschlüsselten serverseitigen Anmeldedaten, die auf den authentifizierten Benutzer beschränkt sind. Zukünftige Verbindungen zu Anbietern wie OAuth sollten demselben profilbezogenen Modell folgen.

Dieses Konzept bewahrt die lokale Eigenverantwortung, ohne davon auszugehen, dass jeder Cloud-Anbieter von Studio kontrolliert werden muss oder dass ein gemeinsam genutztes Gerät den lokalen Pfad des Autors beibehalten sollte.

## Integrationsgrenze zwischen nativem Client und Anwendung

Die Web-, Desktop- und Android-Anwendungen nutzen gemeinsam die Studio-APIen und Integrationsverträge. Native Tauri-Clients verwenden einen Authentifizierungstransport, der mit den Ursprüngen nativer Anwendungen kompatibel ist, anstatt vom Cookie-Verhalten eines reinen Browsers auszugehen. „ORCID“ und OIDC können über den gemeinsamen nativen Übergabepfad zurückgegeben werden.

Die native Dateiverwaltung ist plattformspezifisch: Desktop-Anwendungen verwenden native Datei- und Ordnerdialoge, während Android „Documents“ bzw. „SAF“ nutzt. Hosted Studio nutzt Browser-Downloads für die Exportbereitstellung.

## Authentifizierungsmodi

Die Studio-Integrationsschicht unterscheidet zwischen den Authentifizierungsmodellen der Anbieter, anstatt davon auszugehen, dass jeder Dienst denselben Anmeldetyp verwenden kann. Je nach Anbieter kann eine Integration „OAuth“ (OIDC), „API“-Schlüssel oder -Token, Dienstanmeldedaten, signierte Start-Assertions, durch die Bereitstellung verwaltete Anmeldedaten, institutionell begrenzte „API“-Anmeldedaten oder gar keine von „OMI“ verwahrten Anmeldedaten des Anbieters verwenden, wenn ein lokaler Synchronisationsclient die Authentifizierung durchführt.

Eine benutzerseitige Anmeldung mit Benutzername und Passwort ist nur dann angebracht, wenn der externe Anbieter einen solchen Ablauf ausdrücklich unterstützt. Anmeldedaten dürfen nicht aus dem Anmeldeformular auf der Website eines Anbieters abgeleitet werden.

## Trennung von Identität und Verwaltung

Die Identität des Studio-Kontos, die Identität des wissenschaftlichen Autors, die Zugehörigkeit zu einer Einrichtung und die zentrale Verwaltung sind bewusst voneinander getrennt.

Die Authentifizierung legt fest, wer auf Studio-Dienste zugreifen darf. Mitwirkenden-Datensätze enthalten Angaben zu wissenschaftlicher Urheberschaft, Zugehörigkeit, ORCID sowie zu den jeweiligen Mitwirkungsrollen. Die Institutionenzugehörigkeit drückt die organisationsspezifische Zugehörigkeit sowie die Berechtigungen unter `MEMBER`/`ADMIN`/`OWNER` aus. Die zentrale Verwaltung ist eine separate, institutionsübergreifende Berechtigungsebene.

Weder die Verwaltung der jeweiligen Einrichtung noch die zentrale Verwaltung gewährt von sich aus Zugriff auf Manuskripte, Begutachtungen oder redaktionelle Inhalte.

Das Verwaltungsmodell finden Sie unter [Institutional and Central Administration](./institutional-administration.md).

## Produktstatus im Vergleich zur Konformität mit „OMI“

Die Statusangaben auf dieser Seite beschreiben die **Open Manuscript Studio-Produktimplementierung**. Sie bescheinigen einem Konnektor keine Konformität mit dem „OMI“. Für eine formale Konformität sind versionierte Anforderungen, Testvorrichtungen sowie das Rahmenwerk für Leistungsfähigkeit und Konformität erforderlich.

Informationen zum Status auf Spezifikationsebene finden Sie unter [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md). Informationen zur allgemeinen Produktbasis von Studio finden Sie unter [Studio Implementation Status](../governance/studio-implementation-status.md).

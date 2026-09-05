---
title: Open Manuscript Studio unter iOS und iPadOS
sidebar_label: iOS- und iPadOS-Studio
description: Architektur, Dateiverwaltung, Authentifizierung, Build-Validierung und Verteilungsstatus für „Open Manuscript Studio“ auf iPhone und iPad.
keywords:
  - Open Manuscript Studio
  - iOS
  - iPadOS
  - iPhone
  - iPad
  - Tauri
  - Files
  - UIDocumentPicker
  - Universal Links
  - TestFlight
  - App Store
---

# Open Manuscript Studio unter iOS und iPadOS

Open Manuscript Studio nutzt auf dem iPhone und iPad denselben Anwendungskern „React“ / „TypeScript“, dasselbe Manuskriptmodell „OMI“ und dieselbe native Shell-Architektur „Tauri 2“ wie auf den anderen unterstützten Plattformen. Die iOS/iPadOS-Version ist daher kein separater Produktzweig und führt kein Apple-spezifisches Manuskriptformat ein.

## Aktueller Stand

Das iOS/iPadOS-Ziel ist von einer rein architektonischen Planung zu einem **validierten nativen Build-Ziel** übergegangen.

Aktueller Entwicklungsstand:

- Die Generierung des Tauri-iOS-Projekts in der CI war erfolgreich;
- Die Anwendung lässt sich für den Apple-Silicon-Simulator für iPhone/iPad erfolgreich kompilieren;
- Ein Simulator-Anwendungsartefakt wird durch „GitHub“-Aktionen erzeugt;
- Die Ausrichtungsmodi für iPhone und iPad sowie die Metadaten für das Multitasking auf dem iPad sind konfiguriert;
- Das Öffnen und Speichern von Dateien über den nativen Dateiauswähler wurde implementiert;
- Die Übergabe bei der mobil-nativen Authentifizierung erfolgt gemeinsam mit Android;
- Die Veröffentlichung über TestFlight und den App Store ist **noch nicht beansprucht**, da die Signaturdaten für Apple Developer und die endgültige Zuordnung des Universal Links noch konfiguriert werden müssen.

Die aktuelle öffentliche Studio-Release-Reihe lautet weiterhin „`0.1.0-alpha.4`“. Die Metadaten des Bundles im iOS App Store verwenden ein Apple-kompatibles Paar aus Kurzversion und Build, wobei die Studio-Release-Identität in der Benutzeroberfläche der Anwendung und in der Projektdokumentation beibehalten wird.

## Anwendungsidentität

| Feld | Aktueller Wert |
|---|---|
| Bundle-ID | `org.openmanuscript.studio` |
| Mindestanforderungen an die Plattform | iOS/iPadOS 14.0 |
| Kurzbeschreibung im App Store | `0.1.0` |
| App Store-Build-Nummer | `4` |
| Studio-Entwicklungsreihe | `0.1.0-alpha.4` |

Die Apple-Kurzbezeichnung bzw. die Build-Nummerierung ist eine Metadatenangabe zur Paketierung. Sie ändert weder die Schemaversion von „OMI“ noch führt sie zu einer separaten Kompatibilitätsreihe für iOS-Dokumente.

## iPhone- und iPad-Benutzeroberfläche

Auf beiden Geräten kommt die gemeinsame, responsive Studio-Benutzeroberfläche zum Einsatz, wobei Anpassungen an die jeweilige Plattform und den Formfaktor vorgenommen werden, anstatt einen separaten Editor zu implementieren.

Die iOS/iPadOS-Zielplattform unterstützt:

- Hoch- und Querformatbetrieb auf dem iPhone;
- die auf dem iPad eingestellte vollständige Ausrichtungsauswahl;
- Metadaten für ein iPad-Multitasking-kompatibles Layout;
- indirekte Eingaben wie die Verwendung einer Hardware-Tastatur und eines Trackpads/Zeigegeräts, sofern diese von iPadOS unterstützt werden;
- das gleiche kompakte mobile Navigationsmodell, das auch vom Shared-Studio-Client verwendet wird;
- schrittweise Nutzung des größeren Tablet-Bildschirms, ohne die Semantik des Manuskripts zu verändern.

Langfristig soll das iPad, sofern es die Bildschirmgröße zulässt, den Multi-Panel-Workflow des Desktops stärker in den Vordergrund rücken und gleichzeitig die für die Touch-Bedienung geeigneten Steuerelemente beibehalten.

## Integration von Dateien und Dokumentenanbietern

Studio nutzt das Apple-Modell **Files / UIDocumentPicker**, anstatt einen umfassenden Zugriff auf das Dateisystem anzufordern.

Je nach Gerätekonfiguration kann der System-Picker folgende Ziele anzeigen:

- Auf meinem iPhone / Auf meinem iPad;
- iCloud Drive;
- von iOS/iPadOS unterstützte angeschlossene externe Speichermedien;
- Vom Benutzer installierte Dateianbieter von Drittanbietern, wie beispielsweise unterstützte Cloud-Speicheranwendungen.

Die aktuelle Implementierung öffnet vom Benutzer ausgewählte Dokumente mit sicherheitsbasiertem Zugriff und liest bzw. schreibt die ausgewählte Dokument-URL `file://` über die Tauri-Dateisystemschicht. Das Betriebssystem ist weiterhin dafür zuständig, verfügbare Dokumentanbieter bereitzustellen und deren Zugriffsgrenzen durchzusetzen.

Studio behandelt anbieterinterne Dokument-URLs in der Benutzeroberfläche nicht als gewöhnliche Dateisystempfade.

### Eigener-Gerät-Modus

Wenn der Benutzer den installierten Client als sein eigenes Gerät kennzeichnet, kann der ausgewählte native Dokumentenspeicherort als aktuelles Arbeitsdokument für die Sitzung bzw. den Workflow dienen.

### Modus für gemeinsam genutzte oder fremde Geräte

Es gilt dieselbe Richtlinie zur Gerätevertrauenswürdigkeit, die auch an anderer Stelle in Studio angewendet wird: Bei gemeinsam genutzten/fremden Geräten sollte für normale, dauerhafte Arbeitsvorgänge vorzugsweise der profilspezifische Cloud-Speicher verwendet werden. Das einmalige Öffnen oder Speichern von Dokumenten ist weiterhin möglich, ohne dass der ausgewählte Pfad als normaler Arbeitsort beibehalten wird.

## Mobile Exportfläche

Der iOS/iPadOS-Client nutzt dieselbe mobiloptimierte Exportoberfläche wie Android. Folgende Formate sind derzeit für die Anzeige auf Mobilgeräten vorgesehen:

- Portables „OMI“-Paket (`.omi.zip`);
- OMI JSON (`.omi.json`);
- JATS XML (`.xml`);
- Paket „semanticHTML“ (`.html.zip`);
- DOCX (`.docx`);
- LaTeX (`.tex`);
- EPUB (`.epub`).

Desktop-orientierte Publishing-/Export-Workflows werden auf dem iPhone/iPad ausgeblendet, anstatt als nicht funktionsfähige Optionen angezeigt zu werden:

- IDML;
- XPress-Tags (XTG);
- FrameMaker MIF;
- Scribus SLA;
- Browser-Druck-/PDF-Workflow.

Die Implementierungen der Exporter bleiben gemeinsam genutzt; lediglich die native Ausgabeoberfläche und der plattformspezifische Satz sichtbarer Formate unterscheiden sich.

## Authentifizierung und native Rückgabeverarbeitung

Die iOS/iPadOS-App nutzt dasselbe servergestützte Studio-Konto wie der Browser, der Desktop-Client und der Android-Client.

Die unterstützte Architektur für die gemeinsame Authentifizierung umfasst:

- Anmeldung mit E-Mail-Adresse und Passwort;
- Passwortwiederherstellung über die Studio-API;
- ORCID Anmeldung und Verknüpfung;
- Bei Google anmelden;
- Microsoft-Anmeldung;
- konfigurierbare institutionelle OpenID Connect-Anbieter.

Die externe Authentifizierung auf Mobilgeräten nutzt den nativen Ablauf für die einmalige Übergabe. Das bevorzugte Ziel für die Rückgabe der Anwendung ist:

```text
https://app.openmanuscript.org/auth/orcid/
```

mit dem Fallback für benutzerdefinierte Schemata:

```text
openmanuscript://auth/
```

Die Übergabe enthält einen einmalig verwendbaren nativen Authentifizierungscode anstelle eines wiederverwendbaren Kontopassworts oder Anbietertokens.

## Universal Links und die Verbindung zu Apple

Für die Aktivierung von „Production Universal Link“ ist eine Apple-App-Site-Association-Datei erforderlich, die sich unter folgendem Pfad befindet:

```text
https://app.openmanuscript.org/.well-known/apple-app-site-association
```

Die Zuordnung muss die **tatsächliche Apple Development Team ID** zusammen mit der Bundle-Kennung `org.openmanuscript.studio` und dem zulässigen Authentifizierungspfad enthalten.

Das Projekt verzichtet bewusst darauf, eine Platzhalter-ID für das Produktionsteam zu vermuten oder festzulegen. Die endgültige AASA-Datei sollte erst veröffentlicht werden, wenn die tatsächliche Apple-Entwickler-ID vorliegt.

Hierbei handelt es sich um eine Grenze zwischen Distribution und Konfiguration, nicht um eine Änderung der Authentifizierungslogik von Studio.

## Build-Validierung

Das Repository enthält einen „Smoke“-Workflow für den iOS-Simulator, der unter macOS ausgeführt wird. Damit soll überprüft werden, ob die iOS-Unterstützung tatsächlich ein kompilierbares Ziel bleibt und nicht nur eine Behauptung über eine ungetestete Konfiguration ist.

Der Rauchaufbau führt die folgende Abfolge aus:

1. installiert die gesperrten Frontend-Abhängigkeiten;
2. installiert/konfiguriert das Rust-iOS-Simulator-Ziel;
3. stellt sicher, dass die erforderliche Apple/CocoaPods-Toolchain verfügbar ist;
4. erzeugt das Tauri-iOS/Xcode-Projekt und native Symbole;
5. kompiliert die Apple-Silicon-Simulator-Anwendung;
6. lädt die generierte Simulatoranwendung als CI-Artefakt hoch.

Der erste „Smoke Build“ des iPhone-/iPad-Simulators im Rahmen der iOS-Implementierung wurde erfolgreich abgeschlossen.

## Geräte- und App-Store-Builds

Für eine Simulator-Version sind keine Anmeldedaten für den App Store erforderlich. Für eine Version für ein echtes Gerät, TestFlight oder den App Store hingegen schon.

Der Release-Workflow ist so eingerichtet, dass er diese „GitHub“-Geheimnisse nutzt:

```text
APPLE_DEVELOPMENT_TEAM
IOS_CERTIFICATE
IOS_CERTIFICATE_PASSWORD
IOS_MOBILE_PROVISION
```

Es dürfen keine Signaturzertifikate, Zertifikatpasswörter oder Bereitstellungsprofile in das Repository eingecheckt werden.

Nach Abschluss der Apple-Entwicklerkonfiguration sieht die geplante Veröffentlichungsreihenfolge wie folgt aus:

1. die tatsächliche Team-ID sowie die Daten zu den Anwendungsfunktionen und -zuordnungen konfigurieren;
2. das Verteilungszertifikat und das Bereitstellungsprofil sicher in CI installieren;
3. die signierte iOS-Anwendung unter macOS erstellen/archivieren;
4. eine für App Store Connect geeignete IPA-Datei exportieren;
5. Zunächst auf TestFlight hochladen, um Regressionstests für Geräte und Arbeitsabläufe durchzuführen;
6. Veröffentlichen Sie die App erst dann über den App Store, wenn die Beta- bzw. Veröffentlichungskriterien erfüllt sind.

## Was vor der öffentlichen Veröffentlichung für iOS noch zu tun ist

Das Kernziel der Anwendung wurde nun validiert, für den öffentlichen Vertrieb durch Apple sind jedoch weiterhin folgende Voraussetzungen erforderlich:

- gültige Zugangsdaten für das Apple Developer Program;
- endgültige Team-ID und Konfiguration der Bereitstellung;
- Produktions-`apple-app-site-association`-Veröffentlichung für `app.openmanuscript.org`;
- Tests der Signatur auf realen Geräten mit repräsentativer iPhone- und iPad-Hardware;
- Regressionstests in TestFlight für die Anmeldung, die Rückkehr über Universal Links, den Zugriff auf Dateien, das Speichern und erneute Öffnen, den Export sowie das Verhalten bei externen Anbietern;
- Metadaten für den App Store, Datenschutzerklärungen und Vorbereitung auf die Veröffentlichungsprüfung.

Diese Anforderungen sollten nicht als fehlende Studio-Architektur bezeichnet werden. Es handelt sich dabei um die verbleibende Vertrauens- und Verteilungsschicht von Apple rund um einen bereits kompilierbaren gemeinsamen Client.

## Bezug zum Modell „OMI“

Die Unterstützung von iOS/iPadOS hat keine Auswirkungen auf den Dokumentenvertrag „OMI“. Ein auf einem iPhone oder iPad erstelltes Manuskript soll weiterhin auf Web-, Windows-, Linux-, macOS- und Android-Clients übertragbar sein, wobei dasselbe „OMI“-Modell und die unterstützten Austauschcontainer verwendet werden.

Informationen zur Gesamtarchitektur finden Sie unter [Cross-platform Studio Architecture](./cross-platform-studio.md). Den aktuellen Produkt-Snapshot finden Sie unter [Studio Implementation Status](../governance/studio-implementation-status.md).

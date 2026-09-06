---
title: Richtlinie zur Codesignierung
sidebar_label: Richtlinie zur Codesignierung
---

# Richtlinie zur Codesignierung

## Geltungsbereich

Diese Richtlinie gilt für offizielle Binärversionen von **Open Manuscript Studio**, der Open-Source-Referenzimplementierung des „Open Manuscript Initiative“ (OMI).

Open Manuscript Studio Der Quellcode wird öffentlich im Repository „`open-manuscript-initiative/open-manuscript-studio`“ (GitHub) entwickelt und unter der MIT-Lizenz verbreitet.

## Zweck

Die Codesignierung gewährleistet die nachweisbare Herkunft und Integrität offizieller Desktop-Veröffentlichungen. Sie ermöglicht es Benutzern und Betriebssystemen, zu überprüfen, ob ein bereitgestelltes Installationsprogramm im Rahmen des genehmigten Veröffentlichungsprozesses des Projekts erstellt und nach der Signierung nicht verändert wurde.

Der anfängliche Signaturumfang umfasst die offizielle Windows-Desktop-Distribution, einschließlich des NSIS-Installationsprogramms `.exe` und des WiX-Pakets `.msi`, die im Rahmen des Tauri-Release-Workflows erstellt wurden.

## SignPath-Stiftung

Das „Open Manuscript Initiative“ beabsichtigt, für berechtigte offizielle Veröffentlichungen den Open-Source-Dienst „SignPath Foundation“ zur Codesignierung zu nutzen.

**Kostenlose Codesignierung durch SignPath.io, Zertifikat von der SignPath Foundation.**

Die Codesignierung ist erst aktiv, wenn das Projekt von der SignPath Foundation genehmigt und die Signaturkonfiguration in den offiziellen Release-Workflow integriert wurde. Bis dahin sind Windows-Pakete möglicherweise nicht signiert, und Windows zeigt möglicherweise eine Warnung wegen eines unbekannten Herausgebers oder einer mangelnden Vertrauenswürdigkeit an.

## Vertrauenswürdige Herkunftsnachweise für Builds und Releases

Offiziell signierte Binärdateien müssen auf öffentlichen Quellcode und einen genehmigten Release-Workflow zurückverfolgbar sein.

Für mit SignPath signierte Veröffentlichungen:

1. Der Quellcode muss aus dem offiziellen Repository „Open Manuscript Studio“ unter GitHub stammen;
2. Release-Artefakte müssen über den genehmigten „GitHub Actions“-Workflow des Projekts erstellt werden, wobei, sofern vom Signaturdienst gefordert, von GitHubgehostete Runner verwendet werden müssen;
3. Die Signierung muss auf den Artefakten erfolgen, die von diesem vertrauenswürdigen Build erzeugt wurden, und nicht auf lokal bereitgestellten Ersatzbinärdateien;
4. Das signierte Artefakt muss der Quellrevision und der Version entsprechen, die durch die öffentliche URL GitHub release identifiziert werden;
5. Signaturdaten, Projektkennungen und Dienstgeheimnisse dürfen nicht in das Repository eingecheckt werden;
6. Offiziell signierte Release-Artefakte dürfen nach der Signierung nicht mehr verändert werden.

## Projektrollen und Projektmitglieder

Derzeit sind folgende Rollen für die Unterzeichnung vorgesehen:

- **Autoren / Committer:** Betreuer von Open Manuscript Initiative mit Schreibzugriff auf die offiziellen Repositorys. Derzeitiger designierter Betreuer: [`vargaijanos`](https://github.com/vargaijanos).
- **Prüfer:** Betreuer von „Open Manuscript Initiative“, die Pull-Anfragen und Änderungen prüfen, die sich auf die Erstellung von Releases, die Paketierung, sicherheitsrelevante Konfigurationen und Workflows zur Code-Signierung auswirken. Derzeit benannter Prüfer: [`vargaijanos`](https://github.com/vargaijanos).
- **Genehmiger:** Betreuer, denen die Autorisierung von Signaturanfragen für die Produktionsumgebung und von offiziell signierten Veröffentlichungen anvertraut ist. Derzeit benannter Signaturgenehmiger: [`vargaijanos`](https://github.com/vargaijanos).

Bei einem kleinen Open-Source-Projekt kann eine Person bei Bedarf mehr als eine Rolle übernehmen. Die Signierung der Produktionsversion bleibt dennoch eine explizite Veröffentlichungsmaßnahme und ist keine implizite Folge beliebiger Änderungen am Quellcode.

## Authentifizierung und Zugriffskontrolle

Betreuer, die Zugriff auf die Release-Verwaltung von „GitHub“ oder die SignPath-Signaturfunktionen haben, müssen eine Multi-Faktor-Authentifizierung (MFA) verwenden. Der Zugriff muss auf die für die zugewiesene Rolle erforderlichen Mindestberechtigungen beschränkt sein und entzogen werden, sobald er nicht mehr benötigt wird.

Anmeldeinformationen und Tokens für Signaturdienste müssen mithilfe der Funktionen zur Verwaltung vertraulicher Daten der vertrauenswürdigen CI/CD-Umgebung gespeichert werden. Sie dürfen niemals in den Quellcode von Anwendungen, in Workflow-Protokolle, in Release-Assets oder in die Dokumentation eingebettet werden.

## Unterschriftsgenehmigung

Jede Signaturanforderung für eine Produktionsversion erfordert eine manuelle Genehmigung gemäß den für das Projekt geltenden Anforderungen der SignPath Foundation. Die Genehmigung der Signatur muss einem identifizierbaren Release-Artefakt und einer Quellcode-Revision zugeordnet sein.

Eine Version darf nicht als vom Projekt signiert dargestellt werden, es sei denn, ihre Signatur lässt sich anhand der erwarteten Zertifikatskette erfolgreich validieren.

## Überprüfung

Anwendern und Distributoren wird empfohlen, signierte Windows-Pakete vor der Installation zu überprüfen. Ein gültiges, signiertes Paket sollte:

- eine gültige Authenticode-Signatur enthalten;
- nach dem Herunterladen eine intakte Signatur aufweisen;
- den Zertifikatsinhaber identifizieren, der von der genehmigten SignPath Foundation-Signaturkonfiguration verwendet wird; und
- entsprechen einer offiziellen Veröffentlichung unter der „Open Manuscript Studio“, die von der „Open Manuscript Initiative“ herausgegeben wurde.

Die kryptografische Signatur gewährleistet die Herkunft und Integrität. Sie ersetzt jedoch nicht die Überprüfung des Quellcodes, das Schwachstellenmanagement, die Malware-Prüfung, die Überprüfung der Abhängigkeiten oder andere Maßnahmen zur Softwaresicherheit.

## Datenschutz

Die Datenschutzerklärung von „Open Manuscript Studio“ ist unter [Privacy Policy](./privacy-policy.md) veröffentlicht.

Der Signatur-Workflow verarbeitet Release-Artefakte und die technischen Metadaten, die erforderlich sind, um die Herkunft des Builds nachzuweisen und die Signatur zu genehmigen. „OMI“ darf in Signaturanfragen nicht absichtlich Inhalte von Benutzermanuskripten, Benutzeranmeldedaten, Inhalte der Produktionsdatenbank oder andere private Anwendungsdaten einbeziehen.

Die Netzwerkkommunikation durch die Anwendung findet nur statt, wenn ein Benutzer bewusst eine netzwerkgestützte Funktion nutzt oder wenn eine Installation so konfiguriert ist, dass sie einen solchen Dienst bereitstellt. Verbundene Identitäts-, Veröffentlichungs-, Speicher- oder Integrationsanbieter verfügen möglicherweise über eigene Datenschutzrichtlinien und Nutzungsbedingungen.

Die Nutzung von SignPath im Rahmen des Projekts unterliegt zudem den von SignPath und der SignPath Foundation veröffentlichten Datenschutz- und Nutzungsbedingungen.

## Datenbank- und serverseitige Dienste

Die serverseitige PostgreSQL-Integration von „OMI Studio“ ist von der Code-Signierung für Desktop-Anwendungen getrennt. Datenbankzugangsdaten und Produktionsdaten liegen außerhalb der Grenzen des Code-Signierungs-Artefakts und dürfen niemals in Desktop-Release-Artefakten oder Signierungsanfragen enthalten sein.

## Sicherheitsberichte

Sicherheitsprobleme, die Open Manuscript Studio, den Build-Prozess oder die Herkunft der Releases betreffen, sollten vertraulich an die Betreuer von Open Manuscript Initiative gemeldet werden, anstatt sie zunächst in einem öffentlichen Issue offenzulegen, da eine Ausnutzung dieser Probleme die Nutzer gefährden könnte.

## Änderungen der Richtlinien

Wesentliche Änderungen hinsichtlich des Signaturanbieters, des Zertifikatsinhabers, des vertrauenswürdigen Build-Systems, der Signaturrichtlinie für die Produktion, der Rollenzuweisungen oder des Genehmigungsmodells müssen hier dokumentiert werden, bevor der geänderte Prozess als offizieller Signaturprozess für die Veröffentlichung von „OMI“ vorgestellt wird.

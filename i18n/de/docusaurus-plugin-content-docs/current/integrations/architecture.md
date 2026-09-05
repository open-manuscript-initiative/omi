---
title: Integrationsarchitektur
description: Architekturprinzipien, aktuelle Grenzen der Implementierung und Integrationsmuster für die Anbindung von „Open Manuscript Studio“ an Publikations- und Wissenschaftssysteme.
---

# Integrationsarchitektur

Open Manuscript Initiative (OMI) ist so konzipiert, dass es von einer bestimmten Veröffentlichungsplattform oder einem bestimmten Dienst unabhängig bleibt. Open Manuscript Studio läuft daher als eigenständige Anwendung mit eigener Datenspeicherung und ist über explizite Adapter mit Veröffentlichungs-, Identitäts-, Speicher-, Übersetzungs- und wissenschaftlichen Diensten verbunden.

> Das Manuskript ist ein übertragbares wissenschaftliches Objekt und keine interne Aufzeichnung eines bestimmten Publikationssystems.

Den aktuellen Status einzelner Steckverbinder auf Produktebene finden Sie unter [Integration Implementation Status](./implementation-status.md).

## Aktueller Stand der Implementierung

Stand: 05.09.2026:

- **OJS** ist im aktuellen Studio-Workflow einsatzbereit, vorbehaltlich der Bereitstellungskonfiguration, und der gesamte Ablauf einer anonymen Überprüfung wurde in einer nativen „OJS“ 3.5-Umgebung überprüft;
- **OMP** ist je nach Bereitstellungskonfiguration einsatzbereit und bietet Isolierung nach zugewiesenen Studien sowie eine vollständige Überprüfung der Anonymität in beiden Richtungen in einer nativen „OMP“ 3.5-Umgebung;
- **ORCID OAuth** und der angeschlossene Speicher sind konfigurationsabhängige Integrationen;
- Der **Katalog der Integrationsanbieter** und das Modell für den Authentifizierungsmodus der Anbieter bilden die Grundlage;
- **DeepL** verfügt derzeit über eine Grundstruktur für Anbieter und Konfigurationen, jedoch noch nicht über einen vollständigen Übersetzungs-Workflow für den produktiven Einsatz;
- Die Einreichung in Repositorien und die Anbindung weiterer wissenschaftlicher Infrastrukturen sind noch für die Zukunft vorgesehen.

Es handelt sich hierbei um Implementierungsangaben, nicht um Konformitätserklärungen gemäß „OMI“.

## Empfohlene Architektur

```text
External scholarly / publishing system
Own application, identity and persistence
        |
        | Integration adapter / plugin / provider client
        | HTTPS + versioned API + explicit authentication
        v
Open Manuscript Studio
OMI manuscript services + Studio persistence
```

Die Integrationsschicht MUSS Anwendungsdienste und APIs nutzen, anstatt direkt auf andere Datenbanken zuzugreifen. Studio DARF die internen Datenbanktabellen einer Veröffentlichungsplattform weder lesen noch beschreiben, und eine externe Plattform DARF nicht vom internen Persistenzschema von Studio abhängig sein.

Diese Trennung ermöglicht eigenständige Upgrades, isoliert Sicherheitsgrenzen und Ausfälle und lässt das wissenschaftliche Objektmodell „OMI“ sich eigenständig weiterentwickeln.

## Grenzen des System-of-Record

Jedes vernetzte System bleibt für die Daten, über die es verfügt, maßgeblich.

| Zuständigkeit | Typisches autoritäres System |
|---|---|
| Einreichungs- und Redaktionsablauf | Veröffentlichungsplattform |
| Redaktionelle Bearbeitung und Entscheidungen | Veröffentlichungsplattform |
| Einladung und Beauftragung von Gutachtern | Veröffentlichungsplattform |
| Fristen für die Begutachtung und Status des externen Workflows | Veröffentlichungsplattform |
| Publikations-/Ausgaben-/Katalogverwaltung | Veröffentlichungsplattform |
| Semantische Struktur des Manuskripts | OMI / Studio |
| Stabile Manuskript-Verankerungen | OMI / Studio |
| Studio-native Anmerkungen | OMI / Studio |
| Gemeinsame Manuskriptbearbeitung | OMI / Studio |
| Versionsgeschichte der strukturellen Überarbeitung des Manuskripts | OMI / Studio |
| Identitätsnachweis | Identitätsanbieter / verknüpfte Registrierungsstelle, wobei die Herkunft von Studio gespeichert wird |
| Berechtigung für Remote-Dateien | Angeschlossener Speicheranbieter |

Systemübergreifende Identifikatoren verknüpfen diese Datensätze, ohne deren Persistenzmodelle zusammenzuführen.

## Integrationsstufen

OMI betrachtet die Integration von Publikationssystemen als schrittweise erweiterbare Funktion und nicht als eine Funktion, bei der es um „alles oder nichts“ geht.

### Stufe 1 – Integration bei der Markteinführung

Die externe Plattform bietet die Aktion **„In Studio öffnen“** an. Eine kurzlebige, authentifizierte Bestätigung identifiziert die Installation, den Kontext, das Objekt, den Akteur und die zulässigen Bereiche.

Die aktuelle Implementierung von „OJS“ wendet dieses Muster mit einem signierten Startkontext an.

### Stufe 2 – Integration von Metadaten

Der Adapter stellt zulässige Metadaten zu Beiträgen/Manuskripten bereit, wie beispielsweise lokalisierte Titel, Zusammenfassungen, Schlagwörter, Mitwirkende und Identifikatoren. Bei der Synchronisierung MÜSSEN die Feldautorität und die Herkunft definiert werden.

### Stufe 3 – Dateiintegration

Studio ruft zugelassene Manuskriptdateien über authentifizierte Anwendungsendpunkte ab. Es DARF NICHT direkt auf private Dateipfade auf dem Server zugreifen.

Der aktuelle Pfad OJS nutzt diese Architektur für den Abruf von Quellmanuskripten.

### Stufe 4 – Synchronisierung von Manuskripten

Ein leistungsfähigeres Schnittstellenmodul bildet das strukturierte „OMI“-Manuskript und dessen Derivate auf einer externen Plattform ab. Die Synchronisation SOLLTE revisionsorientiert erfolgen und MUSS das unbemerkte Ersetzen historischer Quelldateien vermeiden.

### Stufe 5 – Integration der Begutachtung durch Fachkollegen

Die Veröffentlichungsplattform ist weiterhin maßgeblich für die Zuweisung, die Durchlaufzeit, die Frist und redaktionelle Entscheidungen. Studio bietet den strukturierten Arbeitsbereich für die wissenschaftliche Begutachtung.

Die aktuelle Implementierung von „OJS/Studio“ umfasst die Verwaltung extern zugewiesener Begutachtungen, rollenbasierte Ansichten für Gutachter und Redakteure sowie die Grundlagen für doppelblinde Begutachtungen.

### Stufe 6 – Integration von Veröffentlichungen

Nach der Freigabe erstellt Studio MAY gegebenenfalls Publikationsderivate oder strukturierte Pakete für die nachgelagerte Produktion. Externe Publikationssysteme behalten in der Regel die maßgebliche Rolle bei der Terminplanung, der Zuordnung zu Ausgaben bzw. Katalogen und der öffentlichen Bereitstellung.

## Authentifizierung und Vertrauen

Die Integrationsschicht setzt keine universelle Authentifizierungsmethode voraus. Anbieter können Folgendes verlangen:

- signierte, kurzlebige Startbehauptungen;
- OAuth/OIDC-konforme Autorisierung;
- API Schlüssel oder Service-Token;
- Anmeldedaten für den verwalteten Bereitstellungsdienst;
- anbieterspezifische Anmeldedaten für Anwendungen.

Das Studio-Anbieterregister kann diese Authentifizierungsmodi in der Benutzeroberfläche anzeigen, ohne sie als austauschbar zu behandeln.

Produktionsintegrationen MÜSSEN HTTPS und die Autorisierung nach dem Prinzip der geringsten Berechtigungen verwenden. Anmeldedaten DÜRFEN NICHT in den Quellcode aufgenommen, in Manuskriptpakete eingebunden oder dem Browser offengelegt werden, wenn sie zu serverseitigen Integrationsdiensten gehören.

Eine Anmeldung per E-Mail und Passwort darf für einen Anbieter NICHT einfach deshalb erfunden werden, weil dieser Anbieter über eine Anmeldeseite auf seiner Kunden-Website verfügt. Maßgeblich ist das dokumentierte Authentifizierungsmodell des Anbieters unter API.

## OJS Integration

OJS ist derzeit die Referenzlösung für die Integration von Veröffentlichungsplattformen.

```text
OJS
  |
  | OMI integration plugin
  | - signed launch
  | - metadata and contributors
  | - manuscript files
  | - review assignment context
  | - revision/review exchange paths
  v
OMI Integration API / Studio service
  |
  v
Open Manuscript Studio
```

OJS bleibt die maßgebliche Quelle für den Workflow bei der Einreichung von Beiträgen, die Zuweisung von Gutachtern, die Begutachtungsrunden, redaktionelle Entscheidungen, Ausgaben und den Veröffentlichungsstatus. Studio bleibt die maßgebliche Quelle für das Manuskriptmodell „OMI“ sowie für den Studio-eigenen Manuskript- und Begutachtungsstatus.

Die Umsetzung geht mittlerweile über einen rein konzeptionellen Konnektor hinaus: Signierte Veröffentlichung, Abruf/Import von Quelldateien, Verwaltung der Zuweisung externer Begutachtungen, vorgeschriebene native Begutachtungsformulare, Manuskriptkorrekturen, getrennte Rückmeldungen der Gutachter und signierte Rückübertragung sind vorhanden. Native End-to-End-Tests von „OJS“ 3.5 überprüfen anonyme Gutachterzuordnungen und den auf den Auftrag beschränkten Zugriff. Der vollständige „[OJS Integration Profile v1](./ojs-profile-v1.md)“ ist nach wie vor umfassender als der derzeit verifizierte Produktionspfad, sodass nicht jeder Profilvorgang als konform oder vollständig bezeichnet werden sollte.

## OMP Integration

OMP bleibt eine erstklassige Plattform für Monografien, Sammelbände, Kapitel und Druckworkflows.

Die „[OMP Integration Profile v1](./omp-profile-v1.md)“ definiert die architektonische Zuordnung, einschließlich der Urheberschaft und Begutachtung auf Komponentenebene. Das einsetzbare Plugin „OMP“ implementiert nun den signierten, rollenbasierten Start, die Zuordnung von Monografien und Studien, den auf Aufgaben beschränkten Dateizugriff, native Begutachtungsformulare, Korrekturen, getrenntes Feedback und signiertes Zurückschreiben.

Native „OMP“ 3.5-End-to-End-Tests stellen sicher, dass ein Gutachter ausschließlich die ihm zugewiesene Studie erhält, die als anonymer Artikel dargestellt wird. Metadaten der übergeordneten Monografie, verwandte Studien, nicht zugewiesene Dateien sowie die Identität der Mitwirkenden bleiben außerhalb dieser Gutachtenprojektion. Die formale Konformität mit „OMI“ und die umfassendere Kompatibilität mit der Version „OMP“ bleiben separate Aufgaben für die Zukunft.

## Katalog der Integrationsanbieter

Studio enthält nun ein Verzeichnis für Integrationsanbieter sowie eine Benutzeroberfläche für Integrationen. Diese Ebene soll dafür sorgen, dass externe Dienste auffindbar und konfigurierbar sind, ohne dass jeder Anbieter fest in nicht damit zusammenhängende Manuskriptfunktionen einprogrammiert werden muss.

Eine Anbieterdefinition kann Folgendes beschreiben:

- Identität und Kategorie des Anbieters;
- unterstützter Authentifizierungsmodus;
- Konfiguration/Status;
- Client-/Service-Fähigkeit;
- Anforderungen an die Bereitstellung.

Dies ist eine Grundlage für die Erweiterbarkeit und kein Beweis dafür, dass jeder aufgeführte Anbieter über einen vollständigen Produktionskonnektor verfügt.

## Identitätsdienste

### ORCID

ORCID OAuth Die Unterstützung ist konfigurationsabhängig. Studio kann die Infrastruktur zur Identitätsverknüpfung bereitstellen, doch für den Produktivbetrieb sind eine gültige Registrierung der Anwendung bei „ORCID“, Client-Zugangsdaten sowie eine Callback-Konfiguration erforderlich.

### ROR sowie Metadaten zur wissenschaftlichen Identität

ROR/Zugehörigkeits- und zugehörige Identifikationsgrundlagen können die Daten zu Mitwirkenden auf OMI bereichern. Externe Identifikatoren MÜSSEN ihre Herkunft beibehalten und DÜRFEN das Mitwirkenden-/Akteursmodell von OMI NICHT durch herstellerspezifische Datensätze ersetzen.

## Übersetzungsdienstleistungen

DeepL befindet sich derzeit auf der Ebene der Anbieter-/Konfigurationsgrundlage. Die Architektur unterstützt einen Übersetzungsanbieter, ohne ihm die Kontrolle über die Manuskriptstruktur oder die Herkunft der Übersetzung zu übertragen.

Ein Übersetzungs-Konnektor für die Produktion muss darüber hinaus eine sichere Authentifizierung, die Zuordnung von Ausgangs- und Zielsprache, die Verwaltung von Kontingenten und die Fehlerbehandlung, die Herkunftsangabe der Ergebnisse sowie die Einbindung der maschinellen Übersetzung in versionsbezogene Arbeitsabläufe bei der Manuskriptübersetzung definieren.

## Vernetzter Speicher

Das Desktop-Studio folgt einem „Local-First“-Modell und kann Manuskripte in gewöhnlichen lokalen oder synchronisierten Ordnern speichern. Die Anbindung an einen Remote-Speicher ist ein separates Integrationsproblem.

WebDAV-/Nextcloud-ähnliche Speichergrundlagen können konfiguriert werden, sofern sie unterstützt werden. Zukünftige anbieterspezifische Konnektoren sollten dieselbe Regel beibehalten: Der Remote-Speicher ist Eigentümer der Dateien/Objekte in diesem Dienst; das Manuskript unter OMI bleibt unabhängig davon portierbar und exportierbar.

## Integration von Repositorien und Langzeitarchivierung

Ein Repositorium-Adapter kann ein fertiggestelltes Manuskript oder ein Archivierungspaket erhalten. Das Repositorium bleibt die maßgebliche Instanz hinsichtlich der Identität der hinterlegten Daten, der Zugangsrichtlinien und des Archivierungsstatus.

Dieser Bereich ist in der Referenzimplementierung weiterhin vorgesehen und sollte ein spezielles Integrationsprofil anstelle einer direkten Datenbankanbindung verwenden.

## Versionsbasierte Integration API

Integrationsendpunkte SOLLTEN von Anfang an mit Versionsnummern versehen werden, zum Beispiel:

```text
/api/integrations/v1/...
```

Änderungen, die nicht abwärtskompatibel sind, erfordern eine neue Protokollversion. Connectoren SOLLTEN die Funktionen aushandeln, anstatt davon auszugehen, dass jede „OMI“-Implementierung jede Operation unterstützt.

Die plattformunabhängigen „[Integration API v1](./integration-api-v1.md)“- und Host-Profile definieren die Protokollziele. Der Stand der Produktimplementierung wird separat auf der Seite „[Integration Implementation Status](./implementation-status.md)“ nachverfolgt.

## Bereitstellungsmodelle

### Gleicher Host, separate Anwendungen

```text
https://example.org/ojs/
https://example.org/omi/
```

Anwendungen können sich die Infrastruktur teilen und dabei getrennte Persistenz- und Dienstgrenzen beibehalten.

### Separate Subdomains

```text
https://journal.example.org/
https://studio.example.org/
```

Separate virtuelle Hosts sorgen für eine klare Routing-Struktur und klare Sicherheitsgrenzen und eignen sich für viele Produktionsumgebungen.

### Separate Infrastruktur

Das Veröffentlichungssystem und Studio können auf unterschiedlichen Servern laufen oder von verschiedenen Organisationen betrieben werden. Über HTTPS gilt dasselbe versionsbasierte Protokoll.

## Portabilität und sanfte Trennung

Eine Integration DARF das Manuskript NICHT unbrauchbar machen, wenn ein externer Anbieter nicht verfügbar ist. Der Status einer externen Integration SOLLTE eher durch Identifikatoren, Verknüpfungen, Funktionen und Provenienz dargestellt werden als durch undokumentierte Abhängigkeiten von entfernten Datenbankstrukturen.

Dies ist ein zentrales Merkmal der Architektur von „OMI“: Externe Systeme können Arbeitsabläufe rund um das Manuskript koordinieren, während das Manuskript selbst ein portables wissenschaftliches Objekt bleibt.

## Statusdisziplin

In der Dokumentation MUSS unterschieden werden zwischen:

1. **Status des normativen Protokolls/der Spezifikation**;
2. **Stand der Umsetzung von „Open Manuscript Studio“**;
3. **Bereitstellung/Konfigurationsbereitschaft**;
4. **Nachweis der formalen Konformität**.

Ein im Integrationskatalog aufgeführter Anbieter ist nicht automatisch produktionsreif. Ein Integrationsprofil im Entwurfsstadium wird nicht automatisch implementiert. Umgekehrt kann das Produkt bereits in Betrieb sein, bevor ein vollständiges KonformitätsOMI-Rahmenwerk verfügbar ist.

Verwenden Sie [Integration Implementation Status](./implementation-status.md) für die aktuelle Basisversion der Referenzimplementierung und [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) für Belege auf Spezifikationsebene.
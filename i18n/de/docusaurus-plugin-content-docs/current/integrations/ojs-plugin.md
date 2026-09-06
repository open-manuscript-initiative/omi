---
title: OJS Integrations-Plugin
sidebar_label: OJS Plugin
slug: /integrations/ojs-plugin
---

# OMI OJS Integrations-Plugin

Das **OMI-OJS-Integrations-Plugin** verbindet Open Journal Systems (OJS) 3.5.x mit Open Manuscript Studio über die OMI-Integration API. OJS bleibt die zentrale Instanz für den Zeitschriften-Workflow, die Identität der eingereichten Beiträge, die Zuweisung von Gutachtern und geschützte Dateien; Studio greift nicht direkt auf die Datenbank von OJS oder den privaten Dateispeicher zu.

## Aktuelle Version

**Stabile Version:** `v1.2.1`  
**Zielplattform:** OJS 3.5.x  
**Lizenz:** GNU GPL v3.0

### Herunterladen

- **[Download OJS plugin v1.2.1 — ZIP](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.1/studioIntegration-ojs-3.5-v1.2.1.zip)**
- **[Download OJS plugin v1.2.1 — TAR.GZ](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.1/studioIntegration-ojs-3.5-v1.2.1.tar.gz)**
- [SHA-256 checksums](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/download/v1.2.1/SHA256SUMS.txt)
- [Latest GitHub release](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases/latest)

Das Release-Archiv enthält das Plugin im Verzeichnis „`studioIntegration/`“, wie es von den Installationsabläufen für PKP-Plugins erwartet wird.

## Wichtigste Funktionen

Der aktuelle Konnektor ermöglicht einen rollenbasierten Start von Studio sowie einen signierten Integrationszugriff für die Arbeitsabläufe von Autoren, Redakteuren und Lektoren bei „OJS“. Zu den implementierten Integrationsbereichen gehören:

- signierte, kurzlebige Start-Assertions;
- explizite Modi für Autoren, Redakteure und Gutachter;
- Rollenbereiche mit minimaler Berechtigung;
- OJS Metadaten zu Beiträgen und Übertragung von Mitwirkenden;
- Suche nach potenziellen Gutachtern für Redakteure;
- geschützte Auflistung von Übermittlungsdateien und Binärübertragung;
- Berechtigung der Prüferdatei, die an die konkrete Prüfungszuweisung „OJS“ gebunden ist;
- nativeOJS-Formular zum Auslesen und Zurückschreiben von Antworten;
- Kommentare, die nur für den Autor sichtbar sind, und Kommentare, die nur für den Lektor sichtbar sind;
- Zugriffsbeschränkungen für Gutachter im Doppelblindverfahren;
- HMAC-signiertes Writeback von Server zu Server;
- zuverlässige Metadaten zum Dateityp für die Auswahl der Quelldateien;
- Native OJS 3.5 – Durchgängige Überprüfung des Zugriffs anonymer Gutachter, erforderliche Begutachtungsformulare, Manuskriptkorrekturen, getrennte Rückmeldungen und unterschriebene Rückmeldungen der Gutachter.

Assertions, die von Gutachtern aufgerufen werden, erhalten bewusst keinen Geltungsbereich für die Identität von Mitwirkenden oder Gutachtern. Gutachterdateien unterliegen den Einschränkungen der PKP-Gutachtenzuweisung und nicht einer allgemeinen Dateiberechtigung auf Einreichungsebene.

## Installation

Installieren Sie das Archiv über die Upload-Oberfläche des Plugins „OJS“, sofern diese unterstützt wird, oder entpacken Sie es wie folgt:

```text
plugins/generic/studioIntegration/
```

Nachdem Sie das Plugin aktiviert haben, konfigurieren Sie die Studio-URL, die Installations-ID, das gemeinsam genutzte Integrations-Secret und die Gültigkeitsdauer des Start-Tokens. In Produktionsumgebungen sollte HTTPS verwendet werden.

Die Datenbanken von „OJS“ und „Studio“ bleiben getrennt. Geben Sie Studio keine direkten Anmeldedaten für die „OJS“-Datenbank und gewähren Sie ihm keinen direkten Zugriff auf das Dateisystem.

## Architektur und API

Der Konnektor nutzt das Integrationsprofil „OMI“:

```text
omi-integration/1/ojs
```

Die umfassendere Dokumentation zu „API“ und den Profilen finden Sie hier:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OJS Integration Profile v1](./ojs-profile-v1.md)
- [OJS Manuscript File Import](./ojs-file-import.md)
- [Integration Implementation Status](./implementation-status.md)

## Sicherheitsmodell

Sicherheitsrelevante Vorgänge werden über OJS/PKP-APIen auf Anwendungsebene und Repository-Dienste ausgeführt. Der Connector verwendet kurzlebige signierte Assertions für interaktive Startabläufe und HMAC-SHA256-signierte Dienstanfragen für geschützte Rückschreibvorgänge.

Der Entwurf hält sich an folgende Vorgaben:

- OJS bleibt maßgeblich für Arbeitsabläufe und die Zuweisung von Überprüfungsaufgaben;
- Studio erhält ausschließlich Daten mit explizitem Geltungsbereich;
- Der Zugriff für Prüfer ist an die jeweilige Aufgabe gebunden;
- Private Dateien werden erst nach einer Autorisierung durch OJSübertragen;
- Geheimnisse bleiben auf dem Server;
- Die Rückmeldung zur Überprüfung wird anhand der aktiven Zuordnung „OJS“ und der Formulardefinition validiert.

## Offenlegung der KI-gestützten Entwicklung

Bei der Entwicklung des Plugins kam in den Bereichen Architektur, Implementierung, PKP-API-Analyse, Sicherheitsüberprüfung, CI/CD, Testen und Dokumentation in erheblichem Umfang generative KI zum Einsatz. Das Projekt gewährleistet eine ausdrückliche menschliche Verantwortung für den eingereichten Code und überprüft das PKP-abhängige Verhalten anhand der tatsächlichen PKP-/OJS-Quelldateien und Testergebnisse.

Das Repository enthält eine ausdrückliche Offenlegung des KI-Beitrags für die PKP-externe Begutachtung:

- [AI contribution declaration](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/AI-DECLARATION.md)

## Quell- und Projektdokumentation

- [Source repository](https://github.com/open-manuscript-initiative/omi-ojs-plugin)
- [README](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/README.md)
- [Changelog](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/CHANGELOG.md)
- [License](https://github.com/open-manuscript-initiative/omi-ojs-plugin/blob/main/LICENSE)
- [All releases](https://github.com/open-manuscript-initiative/omi-ojs-plugin/releases)

## PKP-Status

Das Plugin wurde gemäß den Vorgaben von PKP/OJSs 3.5 APIentwickelt und wird derzeit für die Überprüfung durch PKP vorbereitet. Die Veröffentlichung auf der Website OMI und die Verfügbarkeit als installierbare Version bedeuten **nicht**, dass das Plugin bereits in die offizielle PKP-Plugin-Galerie aufgenommen wurde. Die Aufnahme in die offizielle Galerie unterliegt weiterhin der Überprüfung durch die PKP-Betreuer und der Überprüfung der Kompatibilität.

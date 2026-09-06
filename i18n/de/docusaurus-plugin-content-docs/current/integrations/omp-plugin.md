---
title: OMP Integrations-Plugin
sidebar_label: OMP Plugin
slug: /integrations/omp-plugin
---

# OMI OMP Integrations-Plugin

Das **OMI-OMP-Integrations-Plugin** verbindet Open Monograph Press (OMP) 3.5.x mit Open Manuscript Studio über die OMI-Integration API. OMP bleibt die maßgebliche Instanz für den Verlags-Workflow, die Einreichung von Monografien, Begutachtungsrunden, die Zuweisung von Gutachtern und die private Dateispeicherung; Studio kommuniziert ausschließlich über signierte Integrations-Endpunkte auf Anwendungsebene.

## Aktuelle Version

**Stabile Version:** `v1.2.6`  
**Zielplattform:** OMP 3.5.x  
**Lizenz:** GNU GPL v3.0

### Herunterladen

- **[Download OMP plugin v1.2.6 — ZIP](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.6/studioIntegration-omp-3.5-v1.2.6.zip)**
- **[Download OMP plugin v1.2.6 — TAR.GZ](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.6/studioIntegration-omp-3.5-v1.2.6.tar.gz)**
- [SHA-256 checksums](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/download/v1.2.6/SHA256SUMS.txt)
- [Latest GitHub release](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases/latest)

Das Release-Archiv verwendet `studioIntegration/` als Paketstammverzeichnis für eine PKP-kompatible Installation.

## Wichtigste Funktionen

Der „OMP“-Konnektor berücksichtigt Monografien und bewahrt die für OMPspezifische Workflow-Semantik, anstatt OMP lediglich als OJS mit anderen Bezeichnungen zu behandeln. Zu den aktuellen Integrationsbereichen gehören:

- signierter Start bei Open Manuscript Studio;
- explizite Modi für Redakteure, Autoren und Gutachter;
- Rollenbereiche mit minimaler Berechtigung;
- Zuordnung von Presse- und Monografie-Identitäten;
- native OMP 3.5 – durch ein Repository gestützte Metadaten und Lesezugriffe von Mitwirkenden;
- geschützte Auflistung von übermittelten Dateien und Übertragung von Binärdaten;
- komponentenorientierte Architektur für Kapitel und andere Buchteile;
- Zugriff auf die Datei des Gutachters, der an den konkreten PKP-Gutachtenauftrag gebunden ist;
- Ausgeprägte Ausdauer beim Lesen von PKP-Bewertungsformularen und beim Verfassen von Antworten;
- Hochladen von Begleitdokumenten für Gutachter im Rahmen eines Auftrags;
- Überprüfung – rundenbezogene Autorenüberarbeitung hochladen;
- Überarbeitungsphasen „interne Überprüfung“ und „externe Überprüfung“;
- Erkennung nativer Funktionen für das spezifische Überprüfungsverhalten von „OMP“;
- signierter Überprüfungskommentar/Formularrückmeldung;
- Die Projektion des Gutachters beschränkt sich auf die jeweils zugewiesene Studie, wobei Daten zur Elternmonografie, zu Geschwisterstudien und zur Identität der Mitwirkenden ausgeschlossen sind;
- Native „OMP“ 3.5 – End-to-End-Überprüfung von Startvorgang, Dateien, Überprüfungsformularen, Korrekturen, separatem Feedback und signierter Rückmeldung.

OMP In Version 3.5 wird derzeit gemeldet, dass anpassbare Empfehlungen für Prüfer von der Host-Anwendung nicht unterstützt werden. Der Konnektor generiert daher keine Empfehlungskennungen im Format „OJS“ und fügt keine synthetischen Empfehlungswerte in Kommentare ein.

## Installation

Installieren Sie das Archiv über die Plugin-Verwaltungsoberfläche von „OMP“, sofern dies unterstützt wird, oder entpacken Sie es wie folgt:

```text
plugins/generic/studioIntegration/
```

Nachdem Sie das Plugin aktiviert haben, nehmen Sie folgende Konfiguration vor:

- **Studio-URL** – die Basis-URL von Open Manuscript Studio;
- **Installations-ID** – eine eindeutige Kennung für die Installation von „OMP“;
- **Gemeinsames Geheimnis** – das serverseitige Integrationsgeheimnis, das mit Studio geteilt wird;
- **Token-Gültigkeitsdauer** – eine kurze Gültigkeitsdauer der Start-Assertion.

In Produktionsumgebungen sollte HTTPS verwendet werden. Studio darf keine direkten Datenbankzugangsdaten erhalten und keinen Zugriff auf das Dateisystem von „OMP“ haben.

## OMP-spezifisches Arbeitsablaufmodell

Der Konnektor behält die Konzepte von „OMP“ bei, darunter:

- Pressen;
- Monografien und Sammelbände;
- Kapitel und Bestandteile der Veröffentlichung;
- Mitwirkende auf Buch- und Komponentenebene;
- Rollen als Autor, Herausgeber, Übersetzer und Verfasser von Kapiteln;
- interne und externe Prüfungsphasen;
- konkrete Überprüfungsrunden und Überprüfungsaufgaben;
- Nachverfolgbare Überarbeitungen des Autors und Anhänge der Gutachter.

Die Fertigstellung durch den Gutachter ist im nativen „OMP“-Workflow weiterhin maßgeblich, da die Fertigstellung zusätzliche PKP-Funktionen auslöst, wie z. B. Benachrichtigungen, Protokollierung und die endgültige Festlegung des Einladungsstatus.

## Architektur und API

Der Konnektor nutzt das Integrationsprofil „OMI“:

```text
omi-integration/1/omp
```

Zugehörige Dokumentation:

- [Integration Architecture](./architecture.md)
- [OMI Integration API v1](./integration-api-v1.md)
- [OMP Integration Profile v1](./omp-profile-v1.md)
- [Integration Implementation Status](./implementation-status.md)
- [Studio Deployment Modes](./studio-deployment-modes.md)

## Sicherheitsmodell

Die Implementierung orientiert sich an den Repository- und Workflow-Grenzen von PKP, anstatt die internen Abläufe von „OMP“ zu umgehen. Zu den wichtigen Kontrollmechanismen gehören:

- kurzlebige HMAC-SHA256-Launch-Assertions;
- Einreichung und Pressbindung;
- rollenbezogene Berechtigungen;
- Überprüfung der Zuweisung von Gutachtern;
- Validierung des aktuellen Überprüfungsstatus und der aktuellen Überprüfungsrunde für hochgeladene Überarbeitungen;
- PKP-`ReviewFilesDAO`-Berechtigung für für Gutachter sichtbare Quelldateien;
- native „`Repo::submissionFile()`“-Speicher- und Validierungssemantik;
- Überprüfung des Dateityps anhand der aktuellen Presse;
- Abgeschlossene Überprüfungsaufträge werden als schreibgeschützt behandelt;
- kein direkter datenbankübergreifender Zugriff.

## Unterlagen zur PKP-Kompatibilität und -Konformität

Das Plugin-Repository dokumentiert die Herkunft von „API“ sowie die weiterhin bestehende Grenze zwischen technischer Kompatibilität und offizieller PKP-Anerkennung:

- [PKP compatibility notes](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/PKP_COMPATIBILITY.md)
- [Security policy](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/SECURITY.md)
- [Installation guide](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/INSTALL.md)

Die Aufnahme in die offizielle Plugin-Galerie erfordert weiterhin eine Überprüfung durch einen PKP-Betreuer sowie Tests auf Installationsebene auf einer unterstützten, unveränderten Version von OMP.

## Offenlegung der KI-gestützten Entwicklung

Bei der Entwicklung des Plugins kam in den Bereichen Architektur, Implementierung, PKP-API-Analyse, Sicherheitsüberprüfung, CI/CD, Tests und Dokumentation in erheblichem Umfang generative KI zum Einsatz. Die menschlichen Betreuer tragen weiterhin die Verantwortung für den eingereichten oder an die Nutzer veröffentlichten Code, und das PKP-abhängige Verhalten wird anhand des aktuellen Quellcodes unter OMP/PKP sowie der Testergebnisse überprüft.

- [AI contribution declaration](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/AI-DECLARATION.md)

## Quell- und Projektdokumentation

- [Source repository](https://github.com/open-manuscript-initiative/omi-omp-plugin)
- [README](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/README.md)
- [Installation guide](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/INSTALL.md)
- [PKP compatibility](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/PKP_COMPATIBILITY.md)
- [Security](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/SECURITY.md)
- [Changelog](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/CHANGELOG.md)
- [License](https://github.com/open-manuscript-initiative/omi-omp-plugin/blob/main/LICENSE)
- [All releases](https://github.com/open-manuscript-initiative/omi-omp-plugin/releases)

## PKP-Status

Das Plugin wurde unter Berücksichtigung der aktuellen Arbeitsabläufe (OMP) und Repository-APIen (PKP 3.5) entwickelt; die Verfügbarkeit auf dieser Website stellt jedoch an sich **keine** offizielle Zulassung durch die PKP Plugin Gallery dar. Das Projekt unterscheidet ausdrücklich zwischen Implementierungskompatibilität, getesteter Interoperabilität und formaler PKP-Zulassung.

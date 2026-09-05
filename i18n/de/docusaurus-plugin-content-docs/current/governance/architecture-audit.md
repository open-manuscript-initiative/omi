---
title: OMI Architektur-Audit
description: Prüfung des aktuellen Spezifikationsumfangs und der Dokumentationsarchitektur von „Open Manuscript Initiative“.
sidebar_position: 3
---

# Open Manuscript Initiative Architektur-Audit

## Dokumentstatus

| Feld | Wert |
| --- | --- |
| Dokumenttyp | Prüfung der Unternehmensführung/Architektur |
| Status | Entwurf |
| Version | 0.1 |
| Geltungsbereich | Englische normative und technische Dokumentation |
| Zielgruppe | Autoren, Umsetzer, Prüfer und Mitwirkende von Spezifikationen |

## Zusammenfassung

Das „Open Manuscript Initiative“ enthält bereits die Grundlagen für einen umfassenden Standard für wissenschaftliche Dokumente. Das Repository umfasst konzeptionelle Grundlagen, semantische Modelle, Workflow-Modelle, Austauschspezifikationen, Veröffentlichungskonzepte sowie implementierungsorientiertes Material.

Die größte Schwäche ist nicht mehr der Mangel an Ideen. Es ist die architektonische Zersplitterung.

Die Dokumentation ist nach und nach gewachsen, und mehrere Probleme schränken nun ihre Verwendung als einheitliches Spezifikationswerk ein:

- In der Navigation der Website wird nur ein kleiner Teil der vorhandenen Dokumente angezeigt;
- Spezifikationskennungen, Versionen und Lebenszyklusstatus sind inkonsistent;
- Der Zusammenhang zwischen normativen Vorgaben und informativen Leitlinien ist nicht immer eindeutig;
- Einige Dokumente überschneiden sich oder sind doppelt vorhanden;
- Abhängigkeiten zwischen Modellen werden selten deklariert;
- Mehrere erforderliche Modelle bleiben implizit und werden nicht formal spezifiziert;
- Der Zusammenhang zwischen dem Standard „OMI“ und „Open Manuscript Studio“ ist nicht systematisch dokumentiert;
- Bislang gibt es kein kanonisches Schema und kein Konformitätsrahmenwerk, das die textbasierten Spezifikationen an maschinell überprüfbares Verhalten bindet.

Als nächster Schritt wird ein kontrolliertes Programm zur Überarbeitung der Spezifikationen empfohlen. Vorhandenes Material sollte, soweit es gültig ist, beibehalten, jedoch in eine stabile Hierarchie mit permanenten Identifikatoren, einheitlichen Metadaten, expliziten Abhängigkeiten, dem Implementierungsstatus und normativen Schemata neu gegliedert werden.

## Prüfungsziele

Diese Prüfung verfolgt fünf Ziele:

1. die vorliegende Dokumentation inventarisieren;
2. bestehendes, unvollständiges, doppelt vorhandenes, veraltetes und fehlendes Material unterscheiden;
3. eine Zielspezifikationsarchitektur definieren;
4. Blockierende Arbeiten für „OMI“ 1.0 identifizieren;
5. eine sichere Migrationssequenz festlegen, die verhindert, dass veröffentlichte Links nicht mehr funktionieren und laufende Implementierungsarbeiten beeinträchtigt werden.

## Prüfungsgrundsätze

Bei der Prüfung werden die folgenden Grundsätze angewendet.

### Nützliche Arbeit bewahren

Bestehende Dokumente sollten nicht allein deshalb verworfen werden, weil ihre Struktur uneinheitlich ist. Gültige Konzepte sollten in kanonischen Spezifikationen zusammengefasst werden.

### Semantik von der Implementierung trennen

Die Spezifikation „OMI“ definiert interoperable wissenschaftliche Objekte und Verhaltensweisen. Open Manuscript Studio veranschaulicht eine Implementierung, darf jedoch nicht zur normativen Definition des Standards werden.

### Verwende lieber stabile Bezeichner als Dateipfade

Eine Spezifikationskennung muss auch dann unverändert bleiben, wenn sich ein Dateiname, ein Titel oder eine Navigationskategorie ändert.

### Die Konformität prüfbar machen

Normative Prosa sollte letztendlich auf Schemata, Validierungsregeln, Beispiele und Konformitätstests abgebildet werden.

### Vor der Übersetzung umgestalten

Die englische Spezifikationssuite sollte erst stabilisiert werden, bevor vollständige ungarische und deutsche Übersetzungen erstellt werden.

## Aktueller Dokumentenbestand

Das aktuelle Repository enthält Material aus verschiedenen Funktionsgruppen.

### Grundlagen

Zu den bekannten Gründungsdokumenten gehören:

- Vision
- Grundprinzipien
- Architekturkarte
- Wissenschaftliches Objektmodell

Diese Dokumente legen den Zweck und die allgemeine Struktur von OMI fest. Sie sind unverzichtbar, doch ihr normativer Status und ihre Beziehungen zueinander bedürfen einer Klärung.

### Kern-Semantikspezifikationen

Zu den derzeitigen Kernmaterialien gehören:

- Dokumentenmodell
- Metadatenmodell
- Anker-Modell
- Annotationsmodell
- Zitiermodell
- Modell für bibliografische Datensätze
- Referenzbibliothek und Architektur des Registers

Zusammen beschreiben diese einen wesentlichen Teil des semantischen Manuskriptmodells.

### Spezifikationen für Arbeitsabläufe und wissenschaftliche Prozesse

Zu den bereits vorhandenen oder teilweise ausgearbeiteten Materialien gehören:

- Bewertungsmodell
- Veröffentlichungsmodell
- In „Open Manuscript Studio“ verkörperte Konzepte der Zusammenarbeit
- Übersetzungskonzepte, die in der mehrsprachigen Architektur zum Ausdruck kommen

Das Überprüfungsmodell liegt als Dokument vor, während für die Zusammenarbeit und die Übersetzung formelle, eigenständige Spezifikationen erforderlich sind.

### Umtausch- und Verpackungsvorschriften

Zu den vorhandenen Dokumenten gehören:

- Dateiformat
- Container-Architektur
- API

Diese bieten eine erste Grundlage für den Austausch und die Integration, müssen jedoch an das kanonische Objektmodell und das künftige „JSON“-Schema angepasst werden.

### Spezifikationen zur Erweiterbarkeit

Zu den vorhandenen Dokumenten gehören:

- Plugin-Architektur

Es wird weiterhin ein Funktionsmodell benötigt, um festzulegen, wie Implementierungen optionale und erforderliche Funktionen kennzeichnen.

### Unterlagen zur Unternehmensführung

Die Arbeit im Bereich Governance umfasst derzeit Folgendes bzw. soll künftig Folgendes umfassen:

- OMI Satzung
- Roadmap für „OMI“ 1.0
- dieses Architektur-Audit
- Lebenszyklus einer Spezifikation
- Richtlinie zur Versionsverwaltung
- Leitfaden zur Erstellung von Spezifikationen
- Begriffe und Glossar

## Ergebnisse

## 1. Die Navigation zeigt nur einen Bruchteil des Spezifikationsumfangs an

Die Seitenleiste der Website zeigt derzeit nur einen kleinen Teil der im Repository gespeicherten Dokumente an. Auf einige vorhandene Spezifikationen kann über die normale Navigation in der Dokumentation nicht zugegriffen werden.

Daraus ergeben sich drei Risiken:

- Mitwirkende könnten davon ausgehen, dass ausgeblendete Dokumente veraltet sind;
- Die Leser könnten dadurch einen unvollständigen Eindruck von der Architektur gewinnen;
- Es kann zu Doppelarbeit kommen, da es schwierig ist, bereits vorhandenes Material zu finden.

### Erforderliche Maßnahme

Nach der Überprüfung der Inhalte sollte die Seitenleiste anhand fester architektonischer Kategorien neu strukturiert werden, anstatt eine einfache Liste von Dateien darzustellen.

## 2. Das Scholarly-Objektmodell wird dupliziert

Das Repository enthält zwei Pfade des Scholarly Object Model:

- `docs/specifications/scholarly-object-model.md`
- `docs/specifications/core/scholarly-object-model.md`

Das Nebeneinander zweier scheinbar maßgeblicher Dokumente führt zu Unklarheiten darüber, welches Modell für die Implementierungen maßgeblich ist.

### Erforderliche Maßnahme

Die beiden Dokumente müssen Abschnitt für Abschnitt verglichen werden. Gültige Inhalte sollten in einem kanonischen Dokument unter `OMI-SPEC-001` zusammengefasst werden. Der nicht mehr verwendete Pfad sollte entweder auf die kanonische Seite weiterleiten oder einen ausdrücklichen Hinweis auf die Ersetzung enthalten, bis die Weiterleitungen zuverlässig eingerichtet sind.

## 3. Die Spezifikationskennungen sind unvollständig und möglicherweise instabil.

In einigen Dokumenten werden bereits Kennungen wie `OMI-SPEC-005` verwendet, in anderen hingegen nicht. Ohne ein Register ist eine Wiederverwendung von Kennungen oder eine versehentliche Umnummerierung möglich.

### Erforderliche Maßnahme

Richten Sie ein Spezifikationsregister ein, das Kennungen dauerhaft zuweist. Kennungen dürfen niemals stillschweigend wiederverwendet werden, auch nicht, wenn eine Spezifikation zurückgezogen wird.

Eine vorläufige Reihe ist:

| Kennung | Spezifikation | Aktueller Status |
| --- | --- | --- |
| OMI-SPEC-001 | Wissenschaftliches Objektmodell | Vorhanden, doppelt vorhanden; Zusammenführung erforderlich |
| OMI-SPEC-002 | Dokumentmodell | Vorhanden; Überprüfung erforderlich |
| OMI-SPEC-003 | Metadatenmodell | Vorhanden; Überprüfung erforderlich |
| OMI-SPEC-004 | Anker-Modell | Vorhanden; Überprüfung erforderlich |
| OMI-SPEC-005 | Zitiervorlage | Vorhanden; Überarbeitung läuft |
| OMI-SPEC-006 | Modell für bibliografische Datensätze | Entwurf erstellt |
| OMI-SPEC-007 | Architektur der Referenzbibliothek und des Registers | Entwurf erstellt |
| OMI-SPEC-008 | Validierungsmodell | Fehlt |
| OMI-SPEC-009 | Versionsverwaltung und Änderungsmodell | Fehlt |
| OMI-SPEC-010 | Identitäts- und Mitwirkermodell | Fehlt |
| OMI-SPEC-011 | Modell für Zusammenarbeit und Berechtigungen | Fehlt |
| OMI-SPEC-012 | Übersetzungsmodell | Fehlt |
| OMI-SPEC-013 | Modell für Darstellungs- und Veröffentlichungsprofil | Fehlt |
| OMI-SPEC-014 | Import- und Exportmodell | Fehlt |
| OMI-SPEC-015 | Funktions- und Konformitätsmodell | Fehlt |

Diese Nummerierung ist vorläufig, bis das Register offiziell verabschiedet wird.

## 4. Die Lebenszyklusphasen werden nicht geregelt

In den Dokumenten werden Bezeichnungen wie „`Draft`“ verwendet, doch die Bedeutung dieser Bezeichnungen ist nicht definiert. Es ist daher unklar, ob es sich bei einem Entwurf um einen vorläufigen Text, einen umsetzbaren Vorschlag oder ein Dokument handelt, das noch auf die redaktionelle Überprüfung wartet.

### Erforderliche Maßnahme

Einen einheitlichen Lebenszyklus einführen:

1. Explorativ
2. Entwurf
3. Bewerbungskandidat
4. Kandidat für die Umsetzung
5. Stall
6. Veraltet
7. Ersetzt

Jeder Bundesstaat muss Ein- und Ausreisebestimmungen haben.

## 5. Normative und informative Inhalte sind vermischt

In mehreren Dokumenten werden architektonische Anforderungen, Beispiele, Zukunftsvisionen, erläuternde Texte und Umsetzungsvorschläge miteinander kombiniert, ohne dass deren Verbindlichkeit angegeben wird.

### Erforderliche Maßnahme

In jeder Spezifikation muss klar unterschieden werden zwischen:

- normative Anforderungen;
- aufschlussreiche Erklärung;
- unverbindliche Beispiele;
- aufgeschobene zukünftige Arbeiten;
- Hinweise zur Implementierung.

In normativen Anforderungen sollten einheitliche Begriffe wie „MUSS“, „DARF NICHT“, „SOLLTE“, „SOLLTE NICHT“ und „KANN“ verwendet werden, deren Bedeutungen im Stilleitfaden für Spezifikationen definiert sind.

## 6. Abhängigkeiten sind implizit

Die Modellsuite bildet einen Abhängigkeitsgraphen, doch diese Abhängigkeiten werden nicht systematisch erfasst.

Zum Beispiel:

- Das Zitiermodell basiert auf dem wissenschaftlichen Objektmodell, dem Anker-Modell und dem bibliografischen Datensatzmodell;
- Das Annotationsmodell hängt vom Anker-Modell ab;
- Das Überprüfungsmodell hängt vom Annotationsmodell, vom Identitäts- und Mitwirkermodell sowie vom Kooperations- und Berechtigungsmodell ab;
- Das Veröffentlichungsmodell hängt vom Dokumentmodell, vom Metadatenmodell, vom Zitiermodell, von den Darstellungsprofilen und vom Validierungsmodell ab.

### Erforderliche Maßnahme

Jede Spezifikation sollte Folgendes angeben:

- Das hängt davon ab,
- Verwendet von
- Zugehörige Spezifikationen
- Ersetzt
- Ersetzt durch

Ein maschinenlesbares Spezifikationsregister kann diese Beziehungen später automatisch generieren.

## 7. Auf die Validierung wird Bezug genommen, sie ist jedoch nicht zentral definiert

In vielen Dokumenten wird die Validierung erwähnt, doch es gibt kein einheitliches Validierungsmodell, das Fehlerklassen, Validierungsphasen, Berichte, Profile oder Konformitätsstufen definiert.

### Erforderliche Maßnahme

Erstellen Sie eine „`OMI-SPEC-008: Validation Model`“, die folgende Themen abdeckt:

- Schema-Validierung;
- strukturelle Validierung;
- Validierung von Metadaten;
- Validierung von Identifikatoren;
- bibliografische Validierung;
- objektübergreifende Integrität;
- Überprüfung des Publikationsprofils;
- Fehler, Warnungen und Informationsmeldungen;
- maschinenlesbare Validierungsberichte;
- erweiterbare Bezeichner für Validierungsregeln.

## 8. Es fehlen Versionsverwaltung und Änderungssemantik

Sowohl das Repository als auch Studio gehen von versionierten wissenschaftlichen Objekten aus, doch gibt es kein normatives Modell, das Revisionen, Verzweigungen, akzeptierte Änderungen, Veröffentlichungszustände oder die Provenienz auf Objektebene definiert.

### Erforderliche Maßnahme

Erstellen Sie eine „`OMI-SPEC-009: Versioning and Change Model`“, die folgende Themen abdeckt:

- Manuskriptfassungen;
- Objektrevisionen;
- Änderungsvorgänge;
- Urheberschaft und Zeitstempel;
- Vergleiche und Abgleichungen;
- angenommene und abgelehnte Änderungen;
- unveränderliche veröffentlichte Momentaufnahmen;
- Migration zwischen Schemaversionen.

## 9. Die Semantik von Identitäten und Mitwirkenden ist unvollständig

Metadaten können Mitwirkende benennen, doch für Personen, Organisationen, Identifikatoren, Zugehörigkeiten, Rollen und historische Namensformen ist ein wiederverwendbares Identitätsmodell erforderlich.

### Erforderliche Maßnahme

Erstellen Sie eine „`OMI-SPEC-010: Identity and Contributor Model`“ mit folgenden Inhalten:

- Personen und Organisationen;
- ORCID und ROR;
- lokale Identitäten;
- Namen und Namensvarianten;
- Mitgliedschaften mit Gültigkeitsdauer;
- Reihenfolge der Mitwirkenden;
- CRediT und erweiterbare Rollen;
- Status als korrespondierender Autor;
- redaktionelle Beiträge und Übersetzungen.

## 10. Konzepte der Zusammenarbeit sind im Code enthalten, jedoch nicht im Standard

Open Manuscript Studio Enthält bereits Arbeitsbereichsrollen und Einladungen, doch diese Konzepte sind noch nicht als implementierungsunabhängige Semantik von „OMI“ formalisiert.

### Erforderliche Maßnahme

Erstellen Sie „`OMI-SPEC-011: Collaboration and Permission Model`“, die folgende Themen abdecken:

- Arbeitsbereiche;
- Mitgliedschaft;
- Rollen als Eigentümer, Herausgeber, Mitautor, Gutachter, Übersetzer und Betrachter;
- Einladungen;
- Berechtigungsbereiche;
- Zugriff auf Objekt- und Abschnittsebene;
- Prüfungsereignisse;
- Trennung der Authentifizierung von der Übertragbarkeit des Manuskripts.

## 11. Mehrsprachige Manuskripte erfordern ein Übersetzungsmodell

Die Website und das Studio unterstützen mehrere Sprachen, doch die Beziehung zwischen einem Originaltext und den übersetzten wissenschaftlichen Objekten ist noch nicht normativ beschrieben.

### Erforderliche Maßnahme

Erstellen Sie eine „`OMI-SPEC-012: Translation Model`“, die folgende Themen abdeckt:

- Ausgangs- und Zielsprachen;
- ausgerichtete Objekte und Anker;
- Übersetzungsstatus;
- Erkennung veralteter Übersetzungen;
- Anmerkungen des Übersetzers;
- mehrere Zielsprachen;
- Teilübersetzungen;
- Veröffentlichung paralleler und unabhängiger Sprachversionen.

## 12. Die Darstellungs- und Veröffentlichungsprofile sind nicht ausreichend voneinander getrennt.

Die Architektur behandelt Semantik und Darstellung korrekt als getrennte Ebenen, doch es bedarf eines formalen Profilmodells, um festzulegen, wie Zeitschriften und Verlage semantische Inhalte auf Ausgabemittel abbilden.

### Erforderliche Maßnahme

Erstellen Sie eine „`OMI-SPEC-013: Rendering and Publication Profile Model`“, die folgende Themen abdeckt:

- Publikationsprofile;
- Ausgabeziele;
- Darstellung von Zitaten und Anmerkungen;
- Regeln für Typografie und Layout;
- Pflicht- und Wahlfelder;
- Zeitschriften- und Verlagserweiterungen;
- barrierefreie Ausgabe unter HTML, PDF, EPUB und XML;
- deterministische Rendering-Eingaben.

## 13. Das Import- und Exportverhalten ist nicht ausreichend spezifiziert

Das Dateiformat und das Veröffentlichungsmodell allein bestimmen nicht die Transformationsqualität, nicht unterstützte Inhalte, Hin- und Rückläufe oder Konvertierungsberichte.

### Erforderliche Maßnahme

Erstellen Sie eine „`OMI-SPEC-014: Import and Export Model`“, die folgende Themen abdeckt:

- DOCX-, Markdown-, JATS-, HTML-, CSL- und JSON- sowie BibTeX- und RIS-Zuordnungen;
- verlustfreie und verlustbehaftete Transformationen;
- Warnungen bei der Konvertierung;
- nicht unterstützte Elemente;
- Herkunft der Quelle;
- Erwartungen hinsichtlich der Hin- und Rückfahrt;
- Erhaltung der Erweiterung;
- Exportprofile.

## 14. Konformitätsstufen und angegebene Funktionen fehlen

Nicht jede Implementierung wird jedes optionale Modell oder jede Ausgabe unterstützen. Es bedarf eines einheitlichen Mechanismus, um die Unterstützung zu deklarieren, ohne den Standard zu fragmentieren.

### Erforderliche Maßnahme

Erstellen Sie eine „`OMI-SPEC-015: Capability and Conformance Model`“, die folgende Themen abdeckt:

- Kernkonformität;
- optionale Funktionen;
- Profilkonformität;
- Erweiterungsdeklarationen;
- Schema-Versionen;
- Import- und Exportfunktionen;
- Validierungsfunktionen;
- maschinenlesbare Implementierungsmanifeste.

## 15. Die Prosa-Spezifikationen sind noch nicht an ein kanonisches Schema gebunden.

OMI kann keine zuverlässige Interoperabilität erreicht werden, solange die Datenstruktur nur in Form von Beschreibungen und Beispielen vorliegt.

### Erforderliche Maßnahme

Entwickeln Sie eine versionierte Suite kanonischer Schemata, beginnend mit dem Schema „JSON“. Die Arbeit an den Schemata sollte Folgendes umfassen:

- stabile Schema-Bezeichner;
- wiederverwendbare Definitionen;
- strenge und erweiterungsorientierte Validierungsmodi;
- Minimalbeispiele;
- vollständige Beispiele;
- ungültige Spieltermine;
- Migrationsvorrichtungen;
- automatisierte Konformitätstests.

## 16. Der Umsetzungsstatus ist nicht sichtbar

Leser können nicht ohne Weiteres feststellen, ob es sich bei einem Modell um ein konzeptionelles Modell, ein teilweise implementiertes Modell oder ein durch Produktionscode umgesetztes Modell handelt.

### Erforderliche Maßnahme

Erstellen Sie eine Seite zum Implementierungsstatus mit fundierten Bezeichnungen:

- Noch nicht begonnen
- Explorativ
- Teilweise
- Experimentell umgesetzt
- In der Referenzsoftware implementiert
- Auf Konformität geprüft

Die Matrix darf keine Konformität behaupten, wenn lediglich ein gleichnamiges Merkmal vorhanden ist.

## 17. Die Terminologie erfordert eine zentrale Steuerung

Begriffe wie „Manuskript“, „Dokument“, „wissenschaftliches Objekt“, „Referenz“, „Zitat“, „bibliografischer Eintrag“, „Anmerkung“, „Überarbeitung“ und „Veröffentlichung“ können je nach Fachgebiet und Softwaresystem unterschiedlich interpretiert werden.

### Erforderliche Maßnahme

Erstellen Sie ein Dokument mit normativer Terminologie und einem Glossar. In Spezifikationen sollte auf gemeinsame Definitionen verwiesen werden, anstatt zentrale Begriffe uneinheitlich neu zu definieren.

## Zielarchitektur für die Dokumentation

Die empfohlene Struktur der Dokumentation lautet:

```text
Introduction
├── Vision
├── Core Principles
└── Architecture Map

Foundations
├── Terminology and Glossary
├── Scholarly Object Model
├── Document Model
├── Metadata Model
└── Identity and Contributor Model

Editing and Collaboration
├── Anchor Model
├── Annotation Model
├── Review Model
├── Collaboration and Permission Model
├── Versioning and Change Model
└── Translation Model

Bibliography and Citations
├── Bibliographic Record Model
├── Citation Model
├── Reference Library and Registry Architecture
└── Citation Graph (future)

Publishing and Validation
├── Validation Model
├── Rendering and Publication Profile Model
└── Publishing Model

Exchange and Packaging
├── File Format
├── Container Architecture
├── Import and Export Model
└── API

Extensibility and Conformance
├── Plugin Architecture
├── Capability and Conformance Model
└── Implementation Status

Governance
├── OMI Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Specification Registry
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Translation Policy
```

## Metadaten zur Standardspezifikation

Jede normative Spezifikation sollte einen einheitlichen Metadatenblock enthalten.

Pflichtfelder:

```text
Identifier
Title
Version
Status
Document type
Editors
Last updated
Normative language
Depends on
Used by
Related specifications
Implementation status
Schema reference
Supersedes
Superseded by
```

Docusaurus Die Einleitung sollte die Navigation und Darstellung unterstützen, doch die Metadaten der stabilen Spezifikation sollten ebenfalls sichtbar im Dokument erscheinen.

## Strategie zur Umstrukturierung des Repositorys

Eine umfangreiche Dateiverschiebung sollte erst dann durchgeführt werden, wenn die Inhaltsprüfung und das Identifikationsregister akzeptiert wurden. Eine verfrühte Verschiebung würde zu defekten Links und Zusammenführungskonflikten führen, ohne dass die konzeptionellen Unklarheiten beseitigt würden.

Die empfohlene Reihenfolge lautet:

### Phase 1 – Grundlagen der Unternehmensführung

- die Charta zusammenführen;
- Die Roadmap in „OMI“ 1.0 zusammenführen;
- dieses Architektur-Audit zu verabschieden;
- Erstellen Sie die Dokumente zum Spezifikationslebenszyklus, zur Versionsverwaltung, zum Styleguide und zur Terminologie.

### Phase 2 – Kanonische Bestandsaufnahme

- permanente Kennungen zuweisen;
- kanonische und ersetzte Dokumente identifizieren;
- das doppelt vorhandene Scholarly Object Model zusammenführen;
- Dokumentumleitungen und beibehaltene Aliase.

### Phase 3 – Überarbeitung der Navigation

- die Seitenleiste neu anordnen;
- die bestehenden Spezifikationen einer Überprüfung unterziehen;
- Fügen Sie gegebenenfalls Statusbezeichnungen hinzu;
- Stabile öffentliche URLs sollten nach Möglichkeit beibehalten werden.

### Phase 4 – Fehlende Kernmodelle

- Validierungsmodell;
- Versionsverwaltung und Änderungsmodell;
- Identitäts- und Mitwirkermodell;
- Modell für Zusammenarbeit und Berechtigungen;
- Übersetzungsmodell.

### Phase 5 – Veröffentlichung und Abschluss des Austauschs

- Modell für Darstellungs- und Veröffentlichungsprofil;
- Import- und Exportmodell;
- Fähigkeits- und Konformitätsmodell;
- Überprüfung und Abstimmung von Dateiformat, Containerarchitektur, „API“, Veröffentlichungsmodell und Plugin-Architektur.

### Phase 6 – Schema und Konformität

- kanonisches Schema „JSON“;
- Beispielkorpus;
- ungültige Spieltermine;
- automatisierte Validierung;
- die Umsetzungsfähigkeit zeigt sich;
- Konformitäts-Testsuite.

### Phase 7 – Internationalisierung

- einen englischen Release Candidate einfrieren;
- Übersetzungskataloge und Dokumentenkopien erstellen;
- ins Ungarische und Deutsche übersetzen;
- den Übersetzungsstatus und Abweichungswarnungen veröffentlichen;
- einen Prozess zur Synchronisierung späterer Änderungen einrichten.

## Prioritätsklassifizierung

### Kritisch vor „OMI“ 1.0

- kanonisches wissenschaftliches Objektmodell;
- Spezifikationsregister und Lebenszyklus;
- Die Modelle für Dokumente, Metadaten, Anker, Anmerkungen, Zitate und bibliografische Angaben wurden aufeinander abgestimmt;
- Validierungsmodell;
- Versionsverwaltung und Änderungsmodell;
- Identitäts- und Mitwirkermodell;
- kanonisches Schema „JSON“;
- Konformitätsdefinitionen;
- vollständige normative Beispiele.

### Hohe Priorität

- Modell für Zusammenarbeit und Berechtigungen;
- Übersetzungsmodell;
- Modell für Darstellungs- und Veröffentlichungsprofil;
- Import- und Exportmodell;
- Matrix zum Umsetzungsstand;
- Terminologie und Glossar.

### Wichtig, kann jedoch erst nach einem ersten Implementierungskandidaten folgen

- Zitationsgraph;
- fortgeschrittene Protokolle für verteilte Registrierungssysteme;
- fachspezifische Profile;
- Register für formelle Erweiterungen;
- weitere amtliche Übersetzungen neben Ungarisch und Deutsch.

## Risiken

### Erweiterung des Anwendungsbereichs

OMI deckt einen breiten wissenschaftlichen Lebenszyklus ab. Ohne stufenweise Freigabekriterien könnte das Projekt die Veröffentlichung einer stabilen Kernversion auf unbestimmte Zeit verschieben.

**Abhilfemaßnahme:** Definieren Sie einen Kern, der mindestens den Anforderungen von „OMI“ 1.0 entspricht, und fassen Sie optionale Funktionen in Profilen zusammen.

### Abweichungen zwischen Dokumentation und Code

Die Entwicklung im Studio könnte schneller voranschreiten als die Erstellung der Spezifikationen in Textform.

**Abhilfemaßnahme:** Bei wesentlichen Modelländerungen sind Aktualisierungen des Implementierungsstatus und Konformitätsprüfungen erforderlich.

### Instabilität von Identifikatoren

Das Umbenennen von Dokumenten vor der Einführung eines Registers könnte dazu führen, dass externe Verweise unzuverlässig werden.

**Abhilfemaßnahme:** Zuweisen Sie zunächst permanente Kennungen und behalten Sie Weiterleitungen oder Aliase bei.

### Übersetzungsabweichung

Die Übersetzung ungenauer Spezifikationen würde den Wartungsaufwand vervielfachen und zu widersprüchlichen Sprachversionen führen.

**Maßnahme:** Übersetzen Sie erst, nachdem eine englische Überprüfungsversion endgültig festgelegt wurde, und kennzeichnen Sie die Übersetzungsversionen deutlich.

### Übermäßige Zentralisierung der Register

Eine Architektur für eine Referenzbibliothek könnte fälschlicherweise den Eindruck erwecken, dass „OMI“ eine einzige zentrale bibliografische Normdatei erfordert.

**Maßnahmen zur Risikominderung:** Die föderierte Auflösung, die Herkunftsangabe der Quellen, Offline-Datensätze und die Implementierungsunabhängigkeit sind als explizite Architekturprinzipien beizubehalten.

## Abschlusskriterien für das Refactoring-Programm

Die Phase der Architekturumgestaltung ist abgeschlossen, wenn:

- Jede aktive Spezifikation hat einen kanonischen Speicherort;
- Jede normative Spezifikation verfügt über eine dauerhafte Kennung;
- Lebenszyklusstatus und Versionsregeln werden übernommen;
- Die Seitenleiste zeigt die gesamte überarbeitete Architektur;
- Abhängigkeiten und zugehörige Spezifikationen werden deklariert;
- doppelte Spezifikationen werden zusammengefasst;
- Fehlende Kernmodelle werden entworfen;
- Es gibt kanonische Schemata und Beispiele;
- Der Umsetzungsstand wird ohne unbegründete Behauptungen dokumentiert;
- Die englische Dokumentation wird an einen für die Übersetzung geeigneten Prüfer weitergeleitet.

## Empfohlene Dokumente, die als Nächstes gelesen werden sollten

Im Anschluss an diese Prüfung sollten die folgenden Governance-Dokumente in dieser Reihenfolge erstellt werden:

1. Lebenszyklus einer Spezifikation
2. Richtlinie zur Versionsverwaltung von Spezifikationen
3. Leitfaden zur Erstellung von Spezifikationen
4. Begriffe und Glossar
5. Spezifikationsregister

Sobald diese übernommen sind, können die Konsolidierung der doppelten Modelle und die vollständige Überarbeitung der Seitenleiste sicher fortgesetzt werden.

## Fazit

Das „Open Manuscript Initiative“ ist mittlerweile mehr als nur eine vorläufige Sammlung von Ideen. Es enthält bereits die Grundlage für eine umfassende wissenschaftliche Manuskriptarchitektur.

Die nächste Herausforderung ist eine konsequente Konsolidierung.

Ein stabiles „OMI“ 1.0 erfordert eine geregelte Spezifikationssuite und nicht lediglich zusätzliche Dokumente. Permanente Identifikatoren, explizite Lebenszyklusstadien, kanonische Modelle, maschinell überprüfbare Schemata, deklarierte Abhängigkeiten und ein transparenter Implementierungsstatus sind daher die unmittelbaren architektonischen Prioritäten.

Diese Prüfung liefert den Arbeitsplan für diesen Übergang.

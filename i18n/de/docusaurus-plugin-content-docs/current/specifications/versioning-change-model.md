---
id: versioning-change-model
title: OMI-SPEC-160 – Versionsverwaltung und Änderungsmodell
sidebar_label: Versionsverwaltung und Änderungsmodell
description: Normatives Modell für unveränderliche Revisionen, Änderungssätze, Änderungsereignisse, Verzweigungen, Zusammenführungen, Konflikte, Rückgängigmachungen, Provenienz und den Austausch wissenschaftlicher Objekte unter Wahrung der Historie.
keywords:
  - Open Manuscript Initiative
  - OMI
  - versioning
  - revision history
  - change events
  - provenance
  - branching
  - merging
---

# OMI-SPEC-160 – Versionsverwaltung und Änderungsmodell

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Kennung | `OMI-SPEC-160` |
| Titel | Versionsverwaltung und Änderungsmodell |
| Version | `0.1.0` |
| Status | Entwurf |
| Dokumenttyp | Normativ |
| Normsprache | Englisch |
| Redaktion | Betreuer von „OMI“ |
| Zuletzt aktualisiert | 06.08.2026 |
| Ersetzt | Keine |
| Ersetzt durch | Keine |
| Abhängigkeiten | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| Verwendet von | `OMI-SPEC-170`, `OMI-SPEC-190`, `OMI-SPEC-200`, `OMI-SPEC-230`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |
| Schemata | Keine veröffentlicht |
| Profile | Versionshistorie des Hauptzweigs; Verzweigungen und Zusammenführungen; Austausch von Snapshots |
| Umsetzungsstatus | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue-Tracker | Probleme im „Open Manuscript Initiative“-Repository |

## 1. Zusammenfassung

Diese Spezifikation definiert, wie das „Open Manuscript Initiative“ die Historie wissenschaftlicher Objekte abbildet. Sie bietet ein gemeinsames Modell für unveränderliche Revisionen, atomare Änderungssätze, semantische Änderungsereignisse, übergeordnete Beziehungen, Momentaufnahmen, Verzweigungen, Zusammenführungen, Konflikte, Rückgängigmachungen, Kontrollpunkte, Release-Bezeichnungen, Urheberschaft, Provenienz, Integritätsnachweise und den historienbewussten Austausch.

Das Modell unterscheidet zwischen einem veränderbaren Arbeitszustand und einer unveränderlichen Revision, zwischen einer Revision eines wissenschaftlichen Objekts und einer Software- oder Schemaversion sowie zwischen einer Rückgängigmachung und einer destruktiven Neuschreibung der Historie. Es ermöglicht Implementierungen die Verwendung von Event Sourcing, Snapshot-Speicherung, Datenbanktransaktionen, inhaltsadressierter Speicherung, operativer Transformation, konfliktfreien replizierten Datentypen oder anderen internen Techniken, vorausgesetzt, dass die exportierte „OMI“-Historie die von dieser Spezifikation geforderte Semantik bewahrt.

Die Spezifikation unterstützt lineare und verzweigte Versionsverläufe, Offline-Arbeit, mehrere Mitwirkende, den Austausch von Teilversionsverläufen, Löschmarkierungen, die Schwärzung vertraulicher Änderungsdaten sowie die deterministische Identifizierung von Zusammenführungsergebnissen. Sie schreibt weder einen Algorithmus für die Echtzeit-Zusammenarbeit noch eine Datenbank-Engine, ein Design der Benutzeroberfläche, ein Berechtigungsmodell oder ein universelles Text-Diff-Format vor.

## 2. Status dieses Dokuments

Dieses Dokument ist ein **Entwurf** einer Spezifikation der „Open Manuscript Initiative“.

Das Datenmodell, die Eigenschaftsnamen, die Konformitätsprofile, das Vokabular der Operationen und die Verarbeitungsanforderungen können sich vor Version 1.0 in einer Weise ändern, die zu Inkompatibilitäten führt. Implementierungen, die Unterstützung beanspruchen, MÜSSEN die genaue Spezifikationsversion oder den verwendeten unveränderlichen Commit angeben.

Dieser Entwurf aktiviert die für das Versions- und Änderungsmodell reservierte Kennung im Register der „OMI“-Spezifikation. Diskussionen und Änderungsvorschläge werden im Repository „Open Manuscript Initiative“ nachverfolgt.

## 3. Konformität

### 3.1 Konformitätsklassen

Diese Spezifikation definiert fünf Implementierungsklassen:

- **Verantwortlicher für die Protokollierung:** Erstellt oder exportiert Revisionen, Änderungssätze, Änderungsereignisse, Snapshots, Zweige oder Merge-Datensätze.
- **Konformer History-Verbraucher:** importiert, speichert, zeigt an, wandelt um oder bewahrt Versionsdaten auf.
- **Konformer, historienerhaltender Editor:** Ändert „OMI“-Entitäten und protokolliert dabei die entsprechenden Revisions- und Änderungsinformationen.
- **Zusammenführung unter Beibehaltung der Historie:** Führt unterschiedliche Revisionszweige zusammen und protokolliert die Zusammenführungsgrundlagen, Konflikte, Lösungen sowie die daraus resultierenden Revisionen.
- **Validator zur Überprüfung der Konformität mit der Historie:** Prüft Versionsdaten hinsichtlich der strukturellen und semantischen Anforderungen dieser Spezifikation.

Eine Implementierung KANN mehr als eine Klasse beanspruchen.

### 3.2 Konformitätsprofile

Eine Konformitätserklärung MUSS mindestens ein Profil angeben.

#### Profil „Änderungshistorie des Kerns“

Unterstützt unveränderliche Revisions-IDs, übergeordnete Beziehungen, Änderungssätze, Änderungsereignisse, Zuordnung zu Akteuren, Zeitstempel und die Auswahl des Kopfes für einen linearen Verlauf.

#### Verzweigungs- und Zusammenführungsprofil

Unterstützt mehrere Zweige, benannte oder unbenannte Zweige, die Auswahl gemeinsamer Vorfahren, Zusammenführungsdatensätze, die Darstellung von Konflikten, Auflösungsdatensätze und Ergebnisrevisionen mit mehreren Elternteilen.

#### Snapshot-Exchange-Profil

Ermöglicht den Austausch des aktuellen Zustands eines wissenschaftlichen Objekts ohne vollständige Ereignisgeschichte, wobei der Umfang der ausgelassenen Geschichte und die durch den Snapshot dargestellte Revision ausdrücklich angegeben werden.

Eine Snapshot-Exchange-Implementierung DARF NICHT den Eindruck erwecken, dass ein reines Snapshot-Paket eine vollständige Herkunftsinformation enthält.

### 3.3 Allgemeine Konformität

Eine konforme Implementierung MUSS alle geltenden **MUSS**- und **DARF NICHT**-Anforderungen für die von ihr deklarierte Klasse und das von ihr deklarierte Profil erfüllen.

Eine optionale Funktion KANN weggelassen werden. Wenn sie implementiert wird, MUSS sie alle für diese Funktion definierten Anforderungen erfüllen.

Eine Konformitätserklärung SOLLTE folgende Angaben enthalten:

- Name und Version der Implementierung;
- `OMI-SPEC-160` Version;
- deklarierte Implementierungsklasse(n);
- deklariertes Profil oder Profile;
- unterstützte Arten von Änderungsvorgängen;
- unterstützte Modi zur Speicherung des Verlaufs;
- Integrität und Redaktionsfunktionen;
- bekannte Einschränkungen;
- Konformitäts-Testversion, sofern verfügbar.

### 3.4 Grundlegende Anforderungen

**REQ-VCH-001:** Eine Revision MUSS über einen global eindeutigen oder kontextuell kollisionssicheren Bezeichner verfügen und MUSS die versionierte Entität identifizieren, zu der sie gehört.

**REQ-VCH-002:** Eine festgeschriebene Revision MUSS unveränderlich sein. Eine Korrektur an festgeschriebenen Daten MUSS durch eine spätere Revision, einen Ersetzungsdatensatz, einen Redaktionsdatensatz oder ein anderes explizites Ereignis dargestellt werden; sie DARF die festgeschriebene Revision NICHT stillschweigend ersetzen.

**REQ-VCH-003:** Jede Nicht-Root-Revision MUSS mindestens eine übergeordnete Revision angeben. Ein Merge-Ergebnis MUSS jede direkte übergeordnete Revision angeben, die in das Ergebnis integriert wurde.

**REQ-VCH-004:** Ein Änderungssatz MUSS die Zielentität, die Basisrevision(en), den Akteur oder den verantwortlichen Bearbeiter (sofern bekannt), den Erstellungszeitpunkt sowie die enthaltenen Änderungsereignisse angeben.

**REQ-VCH-005:** Ein Änderungsereignis MUSS eine Operation und ein Ziel identifizieren. Das Ziel MUSS stabil genug sein, um das betroffene wissenschaftliche Objekt oder die betroffene Eigenschaft zu identifizieren, ohne sich ausschließlich auf die dargestellte Position zu stützen.

**REQ-VCH-006:** Ein Produzent MUSS zwischen Überarbeitungen von wissenschaftlichen Objekten und Spezifikationsversionen, Schemaversionen, Anwendungsversionen, Publikationsausgaben sowie für Menschen lesbaren Release-Bezeichnungen unterscheiden.

**REQ-VCH-007:** Bei einer Rückgängigmachung MUSS eine neue Revision erstellt werden, in der die rückgängig gemachte Revision oder der rückgängig gemachte Änderungssatz erfasst wird. Die rückgängig gemachte Revision DARF NICHT aus dem Verlauf gelöscht werden.

**REQ-VCH-008:** Bei der Löschung eines adressierbaren wissenschaftlichen Objekts MUSS ein „Tombstone“ oder ein gleichwertiger Provenienzdatensatz erhalten bleiben, wenn das Verlaufsprofil die Rückverfolgbarkeit der Löschung gewährleistet.

**REQ-VCH-009:** Änderungen der Reihenfolge von Mitwirkenden, Objektverschiebungen und die Neuanordnung von Sammlungen MÜSSEN als Reihenfolge- oder Verschiebungssemantik dargestellt werden und nicht als voneinander unabhängige Löschung und Neuerstellung, wenn die Objektidentität erhalten bleibt.

**REQ-VCH-010:** Ein Zusammenführungsdatensatz MUSS die Quell- und Zielherkunft, die Zusammenführungsbasis(en), die Ergebnisrevision sowie jeden dem Zusammenführer bekannten, ungelösten oder gelösten Konflikt angeben.

**REQ-VCH-011:** Ein Verbraucher DARF eine Revision, deren angegebene Eltern fehlen, NICHT stillschweigend akzeptieren, es sei denn, der Verlauf ist ausdrücklich als „teilweise“ oder „oberflächlich“ gekennzeichnet.

**REQ-VCH-012:** Ein Export eines Teilverlaufs MUSS seinen Umfang, die ausgelassenen Vorläufer und die dargestellte Hauptrevision angeben.

**REQ-VCH-013:** Inhalte mit eingeschränkter Änderbarkeit DÜRFEN NICHT über eine öffentliche Versionshistorie offengelegt werden, es sei denn, eine entsprechende Zugriffsrichtlinie gestattet die Offenlegung.

**REQ-VCH-014:** Ein historienerhaltender Editor MUSS jeden festgeschriebenen Änderungssatz gemäß `OMI-SPEC-150` einer Agenten-Identität, einer Dienst-Identität oder einer expliziten Markierung für einen unbekannten Agenten zuordnen.

**REQ-VCH-015:** Implementierungen MÜSSEN Erweiterungsereignisse und Daten unbekannter Operationen gemäß den geltenden Regeln für die Erweiterung und Kompatibilität des „OMI“ beibehalten oder deren Verlust ausdrücklich melden.

**REQ-VCH-016:** Revisionszeitstempel MÜSSEN als maschinenlesbare Zeitpunkte mit einem expliziten Zeitzonen-Offset oder einer UTC-Kennzeichnung dargestellt werden. Implementierungen DÜRFEN Zeitstempel NICHT allein als Revisionskennungen oder als Nachweis für die kausale Reihenfolge verwenden.

**REQ-VCH-017:** Ein Status-Digest MUSS, sofern er bereitgestellt wird, den Digest-Algorithmus und den Kanonisierungsumfang angeben. Verbraucher DÜRFEN Digest-Werte, die nach unterschiedlichen, nicht angegebenen Kanonisierungsregeln erzeugt wurden, NICHT als gleichwertig betrachten.

**REQ-VCH-018:** Ein als atomar deklariertes Änderungsset MUSS entweder vollständig angewendet werden oder fehlschlagen, ohne dass ein teilweise festgeschriebenes Ergebnis offengelegt wird.

## 4. Geltungsbereich

Diese Spezifikation definiert:

- Identität und Unveränderlichkeit von Revisionen;
- Eltern-Kind-Beziehungen und Überarbeitungsdiagramme;
- veränderliche Arbeitszustände und festgelegte Zustände;
- atomare Änderungssätze;
- semantische Veränderungsereignisse und Operationenkategorien;
- Identifizierung der Zielobjekte für geänderte wissenschaftliche Objekte und Eigenschaften;
- Zuordnung von Akteuren und Herkunftsnachweis von Änderungen;
- Verzweigungen, Knotenpunkte, Abzweigungen und Kontrollpunkte;
- Zusammenführungen, Zusammenführungsbasen, Konflikte und Lösungen;
- Rückfälle, Wiederherstellungen, Grabsteine und Ablösung;
- Snapshots und Beziehungen zwischen Snapshots und dem Verlauf;
- unvollständiger und oberflächlicher Austausch von historischen Daten;
- Zusammenfassungen der Zustände und Nachweise der Integrität;
- datenschutzgerechte Schwärzung und eingeschränkter Verlauf;
- Validierungs- und Aufbewahrungsverhalten.

### 4.1 Nicht im Geltungsbereich

Diese Spezifikation definiert Folgendes nicht:

- die Richtlinie zur semantischen Versionierung für OMI-Spezifikationen;
- die Anwendungsversion von „Open Manuscript Studio“ oder einer anderen Implementierung;
- eine erforderliche Datenbank, ein Transaktionsprotokoll oder eine Speicher-Engine;
- ein erforderliches Versionsverwaltungssystem;
- eine universelle, zeilenorientierte Syntax für Textvergleiche;
- Echtzeit-Cursor-, Präsenz- oder Wahrnehmungsprotokolle;
- ein bestimmter Operational-Transformation- oder CRDT-Algorithmus;
- Berechtigungen für Arbeitsbereiche oder Autorisierungsentscheidungen;
- Zustandsübergänge bei der Peer-Review;
- Übersetzungsäquivalenz oder Synchronisationsregeln;
- rechtsgültige elektronische Signaturen;
- Aufbewahrungsfristen;
- Veröffentlichungsrichtlinien.

Die Versionsverwaltung von Spezifikationen unterliegt der Versionsrichtlinie „OMI“. Berechtigungen sind unter `OMI-SPEC-190` zu finden. Der Überprüfungsverlauf ist unter `OMI-SPEC-200` zu finden. Übersetzungsbeziehungen sind unter `OMI-SPEC-170` zu finden. Veröffentlichungsausgaben und -ergebnisse sind unter `OMI-SPEC-230` und `OMI-SPEC-240` zu finden.

## 5. Begriffsbestimmungen

Es gilt das Dokument „[OMI Terminology and Definitions](../governance/terminology.md)“.

### 5.1 Versionierte Entität

Ein „OMI“-Objekt, dessen aufeinanderfolgende festgeschriebene Zustände durch Revisionen dargestellt werden.

Eine versionierte Entität kann ein Manuskript, ein Abschnitt, ein Block, eine Anmerkung, ein bibliografischer Datensatz, ein Beitrag, ein Metadatensatz, ein Veröffentlichungsauftrag oder ein anderes identifizierbares wissenschaftliches Objekt sein.

### 5.2 Betriebszustand

Ein veränderbarer Implementierungszustand, der noch nicht als Revision festgeschrieben wurde.

Ein Arbeitszustand KANN nicht festgeschriebene lokale Operationen, vorübergehende Validierungsfehler, den Cursor-Zustand oder schnittstellenspezifische Informationen enthalten. Er ist nicht automatisch Bestandteil des portablen OMI-Verlaufs.

### 5.3 Überarbeitung

Ein unveränderlicher Datensatz, der einen festgeschriebenen Zustand in der Historie einer versionierten Entität identifiziert.

Eine Revision ist mit null oder mehreren übergeordneten Revisionen verknüpft und kann auf Änderungssätze, einen Snapshot, einen Status-Digest, Checkpoint-Bezeichnungen und die Herkunft verweisen.

### 5.4 Überarbeitung der Wurzel

Eine Revision ohne übergeordnete Revision in der dargestellten Historie.

Eine Root-Revision kann entweder die tatsächliche Erstellung oder die früheste in einer flachen Historie enthaltene Revision darstellen. Diese Unterscheidung MUSS angegeben werden.

### 5.5 Revision des Kopfes

Die Revision, die derzeit als aktueller Stand eines Zweigs, einer Linie oder einer exportierten Verlaufsansicht ausgewählt ist.

Ein Revisionsgraph kann mehr als einen Kopf haben.

### 5.6 Änderungssatz

Eine Sammlung aus einem oder mehreren Änderungsereignissen, die als eine logische und optional atomare Einheit festgeschrieben werden.

Ein Änderungssatz kann einer Benutzeraktion, einer gruppierten Bearbeitungssitzung, einem Importvorgang, einer automatisierten Transformation, einer Zusammenführungsauflösung oder einem Systemwartungsereignis entsprechen.

### 5.7 Änderungsereignis

Eine mit einer Provenienz versehene Aussage, dass ein definierter Vorgang ein definiertes Ziel innerhalb einer versionierten Entität beeinflusst hat.

Ein Änderungsereignis erfasst die semantische Absicht. Es muss nicht jeden Tastenanschlag oder jede implementierungsinterne Änderung offenlegen.

### 5.8 Betrieb

Die Aktion, die durch ein Änderungsereignis dargestellt wird, wie z. B. Erstellen, Aktualisieren, Ersetzen, Löschen, Wiederherstellen, Verschieben, Neuordnen, Anhängen, Trennen oder Kommentieren.

### 5.9 Momentaufnahme

Eine Serialisierung eines versionierten Entitätszustands, der einer bestimmten Revision zugeordnet ist.

Ein Snapshot kann das Laden beschleunigen oder den Austausch ausschließlich über Snapshots ermöglichen. Er ersetzt jedoch weder Revisionsbeziehungen noch die Herkunftsnachweise, wenn der vollständige Verlauf beansprucht wird.

### 5.10 Änderungsdiagramm

Der gerichtete azyklische Graph, der sich aus Überarbeitungen und übergeordneten Beziehungen zusammensetzt.

Ein konformer Revisionsgraph DARF KEINE Revision als eigenen Vorfahren enthalten.

### 5.11 Zweigstelle

Ein benannter oder unbenannter beweglicher Verweis auf eine Hauptrevision, die einen Entwicklungszweig darstellt.

Die Branch-Identität ist operative Metadaten und DARF NICHT mit der Revisionsidentität verwechselt werden.

### 5.12 Gabel

Ein Zustand, in dem zwei oder mehr Revisionen von derselben früheren Revision abstammen, ohne dass eine davon die Vorgängerin der anderen ist.

### 5.13 Zusammenführen

Der Prozess und das dokumentierte Ergebnis der Zusammenführung von zwei oder mehr voneinander abweichenden Revisionszweigen.

### 5.14 Basis zusammenführen

Ein gemeinsamer Vorfahr, der zum Vergleich und zur Zusammenführung unterschiedlicher Geschichtsverläufe herangezogen wird.

### 5.15 Konflikt

Ein Zustand, in dem Änderungen nicht automatisch kombiniert werden können, ohne dass eine Auswahl, eine Umwandlung oder eine ausdrückliche Bestätigung erfolgt.

### 5.16 Konfliktlösung

Eine Entscheidung oder Transformation mit Herkunftsangabe, die einen Konflikt für ein Zusammenführungsergebnis löst.

### 5.17 Zurücksetzen

Eine neue Änderung, die einer früheren Revision oder einem früheren Änderungssatz ganz oder teilweise entgegenwirkt, wobei der ursprüngliche Verlauf erhalten bleibt.

### 5.18 Grabstein

Ein dauerhafter Minimaldatensatz, der belegt, dass ein adressierbares Objekt existierte und gelöscht, getrennt oder zurückgezogen wurde.

### 5.19 Kontrollpunkt

Eine feste Referenz oder Kennzeichnung, die einer Überarbeitung zugeordnet wird, um diese zu prüfen, einzureichen, anzunehmen, zu veröffentlichen, zu archivieren oder einen anderen Meilenstein im Arbeitsablauf zu markieren.

### 5.20 Freigabeetikett

Eine für Menschen lesbare Bezeichnung, wie beispielsweise „`submission-2`“ oder „`accepted-manuscript`“, die einer Revision zugeordnet ist.

Ein Release-Label ist keine Revisionskennung und impliziert keine semantische Versionierung.

### 5.21 Teilgeschichte

Eine Darstellung der Historie, bei der ein oder mehrere Vorfahren, Ereignisse, Momentaufnahmen, Verzweigungen oder eingeschränkte Datensätze ausgelassen werden.

### 5.22 Überblick über die Bundesländer

Ein kryptografischer oder nicht-kryptografischer Digest, der über eine deklarierte kanonische Darstellung eines Revisionszustands berechnet wird.

## 6. Gestaltungsprinzipien

Dieser Abschnitt dient der Information.

- **Unveränderlicher, festgeschriebener Verlauf:** Festgeschriebene Fakten werden durch spätere Fakten korrigiert, nicht durch stillschweigende Umschreibung.
- **Stabile Objektidentität:** Bearbeitungen verändern den Zustand, ohne die Identität des wissenschaftlichen Objekts unnötig zu verändern.
- **Semantische Ereignisse anhand von Tastenanschlagsprotokollen:** „Portable History“ erfasst wissenschaftliche Vorgänge und nicht das Rauschen der Implementierung.
- **Explizite Kausalität:** Eltern-Beziehungen und Merge-Basen tragen kausale Bedeutung in sich; Zeitstempel können diese nicht ersetzen.
- **Kontounabhängige Zuordnung:** Bei der Zuordnung der Urheberschaft werden portable Agenten herangezogen, nicht Authentifizierungsgeheimnisse.
- **Verlustbewusste Umwandlung:** Ausgelassene Historie und nicht unterstützte Operationen werden deklariert.
- **Algorithmusneutralität:** Interne, Git-ähnliche, ereignisgesteuerte, datenbankbasierte, OT- oder CRDT-Techniken können sich voneinander unterscheiden, liefern jedoch interoperable „OMI“-Nachweise.
- **Privacy by Design:** Öffentliche Verlaufsdaten und vertrauliche Betriebsprüfungsdaten lassen sich voneinander trennen.
- **Reproduzierbare Zustände:** Snapshots, Ereignisse und Digests sollten eine äquivalente Rekonstruktion ermöglichen, sofern das gewählte Profil dies erfordert.
- **Beibehaltung der Mehrdeutigkeit:** Ungelöste Konflikte und unbekannte Abstammungsverhältnisse werden dargestellt, anstatt sie einfach wegzudenken.

## 7. Modellübersicht

```text
Versioned entity
    ├── Working state (mutable, implementation-local)
    └── Revision graph
          ├── Revision
          │     ├── parentRevisionIds[]
          │     ├── changeSetIds[]
          │     ├── snapshotRef?
          │     ├── stateDigest?
          │     └── provenance
          ├── Change set
          │     ├── baseRevisionIds[]
          │     ├── events[]
          │     ├── actorId
          │     └── atomicity
          ├── Branch
          │     └── headRevisionId
          └── Merge record
                ├── sourceRevisionIds[]
                ├── baseRevisionIds[]
                ├── conflicts[]
                ├── resolutions[]
                └── resultRevisionId
```

Das Modell setzt nicht voraus, dass jede Revision eine vollständige Momentaufnahme enthält. Ein Verlauf kann Folgendes verwenden:

- Speicher nur für Ereignisse;
- Speicher, der ausschließlich Snapshots enthält und für den Historiengrenzen festgelegt wurden;
- regelmäßige Momentaufnahmen sowie dazwischenliegende Ereignisse;
- extern referenzierte Momentaufnahmen oder Ereignisströme;
- ein Konservierungspaket, das beides enthält.

Die gewählte Darstellung MUSS dem deklarierten Konformitätsprofil entsprechen.

## 8. Unterschiedliche Versionskonzepte

Eine konforme Implementierung MUSS die folgenden Konzepte klar voneinander trennen.

| Konzept | Beispiel | Zweck |
|---|---|---|
| OMI specification version | `OMI-SPEC-160@0.1.0` | Gibt die Version des normativen Modells an |
| Schema- oder Formatversion | `omi-manuscript-0.2` | Gibt die Serialisierungsregeln an |
| Anwendungsversion | `Open Manuscript Studio 0.1.0-alpha.2` | Gibt die Softwareversion an |
| Revisions-ID des wissenschaftlichen Objekts | `urn:uuid:...` | Identifiziert einen unveränderlichen, festgeschriebenen Zustand |
| Name der Sparte | `main`, `translation-hu` | Bezeichnet einen beweglichen Geschäftsbereich |
| Checkpoint- oder Freigabeetikett | `submitted-2026-08-06` | Für Menschen lesbare Workflow-Kennzeichnung |
| Ausgabe oder Version der Veröffentlichung | `Version of Record` | Bezeichnung der Veröffentlichungsdomäne |

Eine Implementierung DARF einen dieser Werte NICHT aus einem anderen ableiten, es sei denn, eine maßgebliche Spezifikation definiert diese Ableitung ausdrücklich.

## 9. Kerndatenmodell

### 9.1 Container „Versionsverlauf“

Ein Versionsverlaufscontainer verknüpft eine versionierte Entität mit den dazugehörigen Revisionen und den Metadaten zum Verlauf.

Empfohlene Felder:

| Feld | Kardinalität | Bedeutung |
|---|---:|---|
| `modelVersion` | 1 | Genaue Version von „`OMI-SPEC-160`“ |
| `entityId` | 1 | Kennung der versionierten Entität |
| `historyId` | 1 | Kennung dieser Verlaufsdarstellung |
| `headRevisionIds` | 1..n | Aktuell dargestellte Köpfe |
| `revisions` | 1..n | Enthaltene Revisionsdatensätze |
| `changeSets` | 0..n | Enthaltene Änderungssatz-Datensätze |
| `branches` | 0..n | Verzweigungsreferenz |
| `merges` | 0..n | Beweise zusammenführen |
| `historyScope` | 1 | `complete`, `partial`, `shallow` oder `snapshot-only` |
| `boundaryRevisionIds` | 0..n | Früheste berücksichtigte Revisionen, wenn die Abstammung nicht angegeben ist |
| `omissionNotice` | 0..1 | Für Menschen und Maschinen lesbare Erklärung für ausgelassene Historie |

Ein „Complete History“-Ersteller MUSS „`historyScope`“ nur dann auf „`complete`“ setzen, wenn alle bekannten Vorfahren, die für das angegebene Profil erforderlich sind, enthalten oder nachverfolgbar sind.

### 9.2 Überarbeitung

Ein Änderungsprotokoll SOLLTE Folgendes enthalten:

| Feld | Kardinalität | Bedeutung |
|---|---:|---|
| `id` | 1 | Unveränderliche Revisionskennung |
| `entityId` | 1 | Versionsbezogene Entitätskennung |
| `parentRevisionIds` | 0..n | Direkte Eltern |
| `changeSetIds` | 0..n | Änderungen, die zu dieser Revision geführt haben |
| `createdAt` | 1 | Zeitpunkt der Commit |
| `createdBy` | 1 | Akteur oder explizite Kennzeichnung eines unbekannten Akteurs |
| `committedBy` | 0..1 | Dienst oder Agent, der die Änderung vorgenommen hat |
| `message` | 0..1 | Für Menschen lesbare Zusammenfassung |
| `snapshotRef` | 0..1 | Mit der Revision verknüpfter Snapshot |
| `stateDigest` | 0..1 | Metadaten zu Digest und Kanonisierung |
| `checkpointLabels` | 0..n | Workflow- oder Freigabe-Bezeichnungen |
| `supersedesRevisionIds` | 0..n | Explizite Korrektur- oder Ersetzungsbeziehungen |
| `extensions` | 0..n | Daten zu Erweiterungen mit Namensräumen |

In einer Root-Revision SOLLTE angegeben werden, ob es sich um die tatsächliche Erstellung einer Entität handelt oder lediglich um eine Grenze der oberflächlichen Historie.

### 9.3 Revisionskennzeichen

Eine Revisionskennung MUSS während der gesamten Lebensdauer des Verlaufsdatensatzes unverändert bleiben.

Ein Produzent DARF Folgendes verwenden:

- eine UUID oder eine auf einer UUID basierende URN;
- ein inhaltsadressierter Bezeichner;
- eine weitere kollisionssichere URI;
- ein implementierungslokaler Bezeichner innerhalb eines Pakets, dessen Gültigkeitsbereich eindeutig ist.

Ein Zeitstempel, eine Sequenznummer, ein Array-Index, ein Zweigname oder eine Anzeige-Bezeichnung DARF NICHT die einzige Revisionskennung sein.

### 9.4 Beziehungen zu den Eltern

Elternbeziehungen bestimmen die Kausalität der Revision.

- Eine Änderungsversion eines Objekts hat normalerweise keine übergeordneten Objekte;
- Eine normale lineare Revision hat in der Regel einen Vorgänger;
- Eine Merge-Revision hat zwei oder mehr Eltern;
- Eine importierte flache Grenze kann keine übergeordneten Elemente enthalten und gleichzeitig eine ausgelassene Abstammung deklarieren.

Ein Validator MUSS einen dargestellten übergeordneten Zyklus ablehnen.

### 9.5 Änderungssatz

Ein Änderungssatz SOLLTE Folgendes enthalten:

| Feld | Kardinalität | Bedeutung |
|---|---:|---|
| `id` | 1 | Change-Set-Kennung |
| `entityId` | 1 | Ziel-Entität mit Versionsverwaltung |
| `baseRevisionIds` | 1..n | Bundesstaat oder Bundesstaaten, gegen die die Änderungen verfasst wurden |
| `events` | 1..n | Geordnete Ereignisse des semantischen Wandels |
| `actorId` | 1 | Verantwortlicher Vermittler oder unbekannter Marker |
| `performedBy` | 0..1 | Dienst oder Software-Agent |
| `createdAt` | 1 | Erstellungszeit |
| `committedAt` | 0..1 | Zeitpunkt der Festschreibung |
| `intent` | 0..1 | Vom Menschen oder durch ein Vokabular definierter Zweck |
| `message` | 0..1 | Für Menschen lesbare Zusammenfassung |
| `atomic` | 1 | Ob die Menge atomar angewendet werden muss |
| `correlationId` | 0..1 | Gruppiert Änderungen, die mehrere Entitäten oder Dienste betreffen |
| `causedBy` | 0..n | Frühere Ereignisse, Jobs, Importe oder Anfragen |
| `visibility` | 0..1 | Einstufung als öffentlich oder vertraulich |

Die Reihenfolge der Ereignisse innerhalb eines Änderungssatzes MUSS beibehalten werden, wenn die Reihenfolge das Ergebnis beeinflusst.

### 9.6 Änderungsereignis

Ein Änderungsereignis SOLLTE Folgendes enthalten:

| Feld | Kardinalität | Bedeutung |
|---|---:|---|
| `id` | 1 | Ereignis-ID |
| `operation` | 1 | Art der Operation |
| `target` | 1 | Stabiler Ziel-Deskriptor |
| `before` | 0..1 | Vorheriger Wert oder Digest, falls beibehalten |
| `after` | 0..1 | Neuer Wert oder Digest bei Beibehaltung |
| `payload` | 0..1 | Vorgangsspezifische Daten |
| `sequence` | 0..1 | Reihenfolge innerhalb der Änderungsmenge |
| `actorId` | 0..1 | Ereignisbezogene Überschreibung eines Akteurs |
| `occurredAt` | 0..1 | Ereigniszeit, sofern sie sich vom Zeitpunkt des Änderungssatzes unterscheidet |
| `reason` | 0..1 | Vom Menschen oder durch ein Vokabular definierter Grund |
| `visibility` | 0..1 | Offenlegungskategorie |
| `extensions` | 0..n | Daten zu Erweiterungen mit Namensräumen |

Ein Produzent KANN aus Datenschutz-, Speicher- oder algorithmischen Gründen die Werte „`before`“ oder „`after`“ weglassen, MUSS jedoch genügend Informationen beibehalten, um seinem deklarierten Profil gerecht zu werden, und MUSS eine irreversible Auslassung deklarieren, wenn dadurch die Rekonstruktion beeinträchtigt wird.

### 9.7 Zielbeschreibung

Ein Zielbeschreiber MUSS das betroffene Objekt oder die betroffene Eigenschaft anhand einer oder mehrerer stabiler Komponenten identifizieren:

- ID der Zielentität;
- Ziel-ID des wissenschaftlichen Objekts;
- Eigenschafts- oder Feldpfad;
- Sammlungs-ID;
- Anker oder Selektor gemäß `OMI-SPEC-110`;
- Erweiterungs-Namespace und Eigenschaftsname.

Gerenderte Koordinaten, Bildschirmpositionen, Zeilennummern oder temporäre Editor-Indizes KÖNNEN als Hinweise enthalten sein, DÜRFEN jedoch NICHT das einzige portierbare Ziel sein.

### 9.8 Vokabular zum Thema „Betrieb“

Die wichtigsten Begriffe im Zusammenhang mit den Operationen lauten:

| Operation | Bedeutung |
|---|---|
| `create` | Ein neues identifizierbares Objekt erstellen |
| `update` | Eine oder mehrere Eigenschaften ändern, ohne die Objektidentität zu ersetzen |
| `replace` | Einen Wert oder eine Objektdarstellung ersetzen, während die Identitätsbehandlung deklariert wird |
| `delete` | Ein Objekt oder eine Eigenschaft entfernen und die erforderlichen Tombstone-Nachweise erstellen |
| `restore` | Ein zuvor gelöschtes oder getrenntes Objekt wiederherstellen |
| `move` | Ein vorhandenes Objekt zwischen Containern oder Standorten verschieben |
| `reorder` | Reihenfolge innerhalb einer sortierten Sammlung ändern |
| `attach` | Eine vorhandene Objektbeziehung oder Zugehörigkeit hinzufügen |
| `detach` | Eine Beziehung oder Mitgliedschaft entfernen, ohne das Objekt zu löschen |
| `annotate` | Eine Änderungsbeschreibung, einen redaktionellen Vermerk oder eine maschinenlesbare Begründung hinzufügen |
| `transform` | Eine deklarierte automatische oder manuelle Transformation anwenden |
| `redact` | Sensible Inhalte einschränken oder entfernen und dabei die Nachweise für die Schwärzung erhalten |
| `resolve-conflict` | Lösung eines Merge-Konflikts protokollieren |
| `revert` | Eine frühere Revision, einen Änderungssatz oder ein Ereignis rückgängig machen |

Erweiterungen KÖNNEN zusätzliche Operationen mithilfe von Bezeichnern mit Namespace definieren.

Eine unbekannte Operation MUSS von verlustfreien Konsumenten beibehalten werden. Ein Konsument, der diese Operation nicht anwenden kann, MUSS die nicht unterstützte Operation melden und DARF NICHT stillschweigend einen äquivalenten rekonstruierten Zustand behaupten.

## 10. Erfassung von Änderungen und Commit-Verarbeitung

### 10.1 Bearbeitungen im Arbeitsmodus

Eine Implementierung KANN fein abgestufte Schnittstellenoperationen in einem veränderbaren Arbeitszustand sammeln.

Vor der Festlegung KANN es:

- wiederholte Tastenanschläge zu einer semantischen Textersetzung zusammenfassen;
- Änderungen an zusammengehörigen Feldern zu einem einzigen atomaren Änderungssatz zusammenfassen;
- vorübergehende No-Op-Änderungen entfernen;
- implementierungsspezifische Operationen in portierbare Operationen umwandeln;
- Zielidentitäten und Basisrevisionen validieren.

Die übermittelte Darstellung MUSS die daraus resultierende wissenschaftliche Bedeutung und die angegebene Herkunft bewahren.

### 10.2 Verfahren zur Festschreibung

Ein Editor, der den Verlauf beibehält, SOLLTE die folgenden Schritte ausführen:

1. die versionierte Entität und die aktuelle Basisrevision ermitteln;
2. semantische Veränderungsereignisse erfassen oder ableiten;
3. Ereignisziele und Vorgangsdaten validieren;
4. das Änderungsset einem Agenten oder einer expliziten Unbekannten zuordnen;
5. die Atomaritätsregeln anwenden;
6. den neuen Zustand des Objekts erzeugen;
7. eine unveränderliche Revisionskennung zuweisen;
8. Elternbeziehungen erfassen;
9. einen Status-Digest berechnen, sofern dies unterstützt wird;
10. den Kopf des ausgewählten Zweigs aktualisieren;
11. Die Revision, das Änderungsset sowie die erforderlichen Snapshot- oder Ereignisdaten als eine wiederherstellbare Transaktion beibehalten.

Ein fehlgeschlagenes Atomic Commit DARF KEINE neue Head-Revision offenlegen.

### 10.3 No-Op-Änderungen

Ein Produzent SOLLTE es vermeiden, eine Revision zu speichern, die keine semantische Auswirkung hat, es sei denn, die Revision dokumentiert einen aussagekräftigen Meilenstein im Arbeitsablauf, ein Validierungsergebnis, eine externe Synchronisation, eine Signatur oder ein Archivierungsereignis.

Eine No-Op-Revision MUSS ihren Zweck angeben.

### 10.4 Änderungen, die mehrere Rechtsträger betreffen

Eine Benutzeraktion kann sich auf mehrere versionierte Entitäten auswirken.

Implementierungen KÖNNEN:

- Verwenden Sie separate Änderungssätze, die über eine gemeinsame Korrelations-ID miteinander verknüpft sind;
- einen Transaktionsdatensatz verwenden, der mehrere Entitätsverläufe abdeckt;
- Das gesamte Manuskript als versionierte Entität modellieren.

Der gewählte Ansatz MUSS Teilausfälle und Atomizitätsgrenzen explizit machen.

## 11. Momentaufnahmen und Rekonstruktion

### 11.1 Zuordnung von Snapshots

Ein Snapshot MUSS die Revision angeben, die er darstellt.

Ein Snapshot SOLLTE Folgendes enthalten oder darauf verweisen:

- Entitäts-ID;
- Revisions-ID;
- Schema- oder Formatversion;
- Medientyp der Serialisierung;
- Informationen zu Digest und Kanonisierung, sofern verfügbar;
- Erstellungszeit;
- Urheber oder Erstellungsdienst;
- Erklärung zur Vollständigkeit der Historie.

### 11.2 Wiederaufbau

Ein Ersteller eines Versionsverlaufs für „Core“, der einen rekonstruierbaren Verlauf beansprucht, MUSS genügend Momentaufnahmen und Ereignisse bereitstellen, um jeden beanspruchten rekonstruierbaren Revisionszustand abzuleiten.

Ein Verbraucher SOLLTE sich vergewissern, dass:

- die Ereignisbasen stimmen mit dem erwarteten übergeordneten Zustand überein;
- Operationsziele existieren oder eine Erstellungssemantik haben;
- Atomic-Änderungssätze gelten uneingeschränkt;
- Die resultierenden Digests stimmen mit den deklarierten Status-Digests überein, sofern dies unterstützt wird.

### 11.3 Austausch ausschließlich von Snapshots

Ein „Snapshot Exchange“-Paket KANN den gesamten Verlauf auslassen.

Es MUSS Folgendes enthalten:

- ID der vertretenen Einheit;
- dargestellte Revisions-ID;
- Schema- oder Formatversion;
- `historyScope: snapshot-only`;
- eine Unterlassungsaufforderung;
- bekannte Verweise auf übergeordnete oder Quellrevisionen, sofern verfügbar.

Ein reiner „Snapshot“-Nutzer DARF KEINE fehlenden Revisionen erfinden oder eine lückenlose Urheberschaft andeuten.

### 11.4 Verdichtung

Eine Implementierung KANN die interne Historie aus Speicher- oder Leistungsgründen komprimieren.

Die Komprimierung DARF einen Anspruch mit vollständigem Verlauf NICHT stillschweigend in einen Anspruch mit unvollständigem Verlauf umwandeln.

Wenn Ereignisse oder Momentaufnahmen verworfen werden, MUSS die daraus resultierende Darstellung:

- die neue historische Grenze festlegen;
- die Identität der beibehaltenen Revision beibehalten;
- die erforderlichen Verweise auf Merge- und Checkpoint-Vorgänge beibehalten;
- Beweismittel, die durch Schwärzung oder Verdichtung gesichert wurden, aufbewahren;
- Berichten Sie, welche Rekonstruktionsfunktionen verloren gegangen sind.

## 12. Zweige und Köpfe

### 12.1 Filialdatensatz

Ein Zweigdatensatz SOLLTE Folgendes enthalten:

| Feld | Kardinalität | Bedeutung |
|---|---:|---|
| `id` | 1 | Kennung des stabilen Zweigs |
| `name` | 0..1 | Für Menschen lesbarer Name |
| `entityId` | 1 | Versionierte Entität |
| `headRevisionId` | 1 | Aktueller Zweig-Kopf |
| `baseRevisionId` | 0..1 | Revision, aus der der Zweig erstellt wurde |
| `createdAt` | 1 | Erstellungszeit |
| `createdBy` | 1 | Agent oder Dienst |
| `status` | 1 | `active`, `merged`, `archived` oder `deleted` |
| `purpose` | 0..1 | Übersetzung, Überprüfung, Experiment, Korrektur oder sonstige Absicht |

Das Ändern eines Zweigkopfs DARF die Identität oder den Inhalt der referenzierten Revision NICHT verändern.

### 12.2 Abgetrennte Köpfe

Ein History-Eintrag KANN eine Head-Revision ohne Zweig identifizieren.

Ein abgetrennter Kopf MUSS als Revisionsreferenz erhalten bleiben und DARF NICHT als erfundener Zweig serialisiert werden.

### 12.3 Löschen eines Zweigs

Beim Löschen oder Archivieren eines Zweigs DÜRFEN keine Revisionen gelöscht werden, die aufgrund von Aufbewahrungsvorschriften oder zur Wahrung der Historie weiterhin zugänglich bleiben.

## 13. Modell zusammenführen

### 13.1 Datensatz zusammenführen

Ein Merge-Datensatz SOLLTE Folgendes enthalten:

| Feld | Kardinalität | Bedeutung |
|---|---:|---|
| `id` | 1 | Kennung des Zusammenführungsdatensatzes |
| `entityId` | 1 | Versionierte Entität |
| `sourceRevisionIds` | 2..n | Zusammenführung divergierender Ströme |
| `baseRevisionIds` | 1..n | Ausgewählter gemeinsamer Vorfahr oder gemeinsame Vorfahren |
| `resultRevisionId` | 1 | Ergebnis der Zusammenführung |
| `performedBy` | 1 | Anbieter oder Dienst |
| `performedAt` | 1 | Zusammenführungszeit |
| `strategy` | 0..1 | Deklarierte Zusammenführungsmethode |
| `conflicts` | 0..n | Erkannte Konflikte |
| `resolutions` | 0..n | Angewandte Auflösungen |
| `message` | 0..1 | Für Menschen lesbare Zusammenfassung |

Die Ergebnisrevision MUSS die zusammengeführten Quellrevisionen als direkte Vorgängerversionen auflisten, es sei denn, die deklarierte Strategie und das Profil definieren ausdrücklich eine andere gleichwertige Darstellung.

### 13.2 Zusammenführung der Basisauswahl

Bei einer Zusammenführung MUSS die tatsächlich verwendete Zusammenführungsgrundlage bzw. die tatsächlich verwendeten Zusammenführungsgrundlagen erfasst werden.

Wenn mehrere gültige gemeinsame Vorfahren vorhanden sind, KANN die Zusammenführung entsprechend ihres Algorithmus einen oder mehrere davon verwenden, darf jedoch nach der Zusammenführung ohne einen korrigierenden Datensatz KEINE andere Basis angeben.

### 13.3 Automatisches Zusammenführen

Bei einer automatischen Zusammenführung KÖNNEN Änderungen kombiniert werden, wenn ihre Ziele und ihre Semantik nicht miteinander in Konflikt stehen.

Beispiele hierfür sind:

- Änderungen an nicht betroffenen Objekten;
- unabhängige Metadatenfelder;
- geordnete Einfügungen mit deterministischen Platzierungsregeln;
- identische Änderungen;
- Änderungen, für die eine registrierte domänenspezifische Zusammenführungsregel existiert.

Bei der automatischen Zusammenführung MÜSSEN die Zuordnung zu den Akteuren und die Herkunft der Änderungen aus jeder einbezogenen Abstammungslinie erhalten bleiben.

### 13.4 Konfliktkategorien

Die wichtigsten Konfliktkategorien sind:

- `concurrent-update`;
- `update-delete`;
- `delete-restore`;
- `move-move`;
- `reorder-reorder`;
- `identity-collision`;
- `schema-incompatibility`;
- `extension-unknown`;
- `permission-or-policy`;
- `integrity-failure`;
- `other`.

Ein Konfliktprotokoll SOLLTE Folgendes enthalten:

- Konflikt-ID;
- Kategorie;
- betroffene Ziele;
- Quell-Revisions-IDs;
- Basiswert oder Digest, sofern verfügbar;
- konkurrierende Werte oder Operationen;
- Status der Lösung;
- Ereignis-ID bei der Lösung;
- erläuternde Meldung.

### 13.5 Konfliktlösung

Eine Konfliktlösung MUSS als Daten mit Herkunftsangaben erfasst werden.

Ein Beschluss KANN:

- Wählen Sie einen Kandidaten aus;
- Kandidaten zusammenführen;
- einen neuen Wert erstellen;
- beide Werte in einer domänenspezifischen Struktur speichern;
- den Beschluss vertagen;
- Die Zusammenführung ablehnen.

Ein ungelöster Konflikt DARF NICHT stillschweigend als vollständig gelöstes Zusammenführungsergebnis dargestellt werden.

## 14. Rückgängigmachen, Wiederherstellen und Korrigieren

### 14.1 Semantik des Rückgängigmachens

Eine Rückgängigmachung erzeugt einen neuen Verlauf.

Ein Rückgängigmachungsereignis SOLLTE Folgendes identifizieren:

- die Revision, der Änderungssatz oder das Ereignis, das rückgängig gemacht wird;
- ob die Rücknahme vollständig oder teilweise erfolgt ist;
- die generierten Umkehr- oder Ersetzungsoperationen;
- der Handelnde und der Grund;
- etwaige Konflikte, die dadurch entstanden sind, dass dieselben Ziele im weiteren Verlauf der Geschichte verändert wurden.

### 14.2 Restaurierung

Bei der Wiederherstellung eines gelöschten Objekts SOLLTE der ursprüngliche Objektbezeichner beibehalten werden, wenn dasselbe konzeptionelle Objekt wiederhergestellt wird.

Wenn bei der Wiederherstellung stattdessen ein neues konzeptionelles Objekt erstellt wird, MUSS eine neue Kennung zugewiesen werden, und die Beziehung zum gelöschten Objekt SOLLTE dokumentiert werden.

### 14.3 Korrektur fehlerhafter Herkunftsangaben

Eine fehlerhafte Angabe bezüglich eines Akteurs, eines Zeitstempels, einer Nachricht oder einer Kennung im festgeschriebenen Verlauf MUSS durch einen expliziten Korrektur- oder Ersetzungsdatensatz korrigiert werden.

Implementierungen KÖNNEN die Anzeige des fehlerhaften Werts aus Datenschutz- oder rechtlichen Gründen einschränken, MÜSSEN jedoch zulässige Prüfnachweise über die Korrektur aufbewahren, es sei denn, die Aufbewahrungsrichtlinie schreibt eine nachweisbare Vernichtung vor.

## 15. Löschung und Tombstones

Ein Grabstein SOLLTE folgende Angaben enthalten:

- gelöschte Objekt-ID;
- Objekttyp;
- ID der Löschrevision;
- Änderungsereignis-ID löschen;
- Akteur oder Dienstleistung;
- Löschzeit;
- Grund, sofern vorhanden;
- die frühere übergeordnete oder untergeordnete Beziehung, sofern dies für die Interpretation erforderlich ist;
- Einstufung nach Sichtbarkeit und Haltbarkeit;
- Wiederherstellungs- oder Ablöseverhältnis, sofern zutreffend.

Ein öffentlicher Grabstein KANN bestimmte Inhalte aus der Vergangenheit auslassen.

Ein Verbraucher MUSS unterscheiden:

- Objektlöschung;
- Beziehungsdistanz;
- Verzweigungslöschung;
- Geschichtsfälschung;
- Rücknahme des Objekts aus der Veröffentlichung;
- physische Löschung des Speichermediums.

Diese Maßnahmen sind nicht austauschbar.

## 16. Bestellung und Transport

Zu den geordneten wissenschaftlichen Sammlungen gehören Autorenverzeichnisse, Abschnitte, Blöcke, Literaturangaben, Abbildungen, Tabellen und Rezensionen.

Ein Nachbestellungsereignis SOLLTE Folgendes identifizieren:

- Sammlungs-ID;
- ID des verschobenen Objekts;
- vorheriger Nachbar oder Positionsangabe, sofern bekannt;
- neuer Nachbar oder Positionsreferenz;
- Bestellverfahren;
- Basisrevision.

Bei portabler Sortierung SOLLTE der stabilen Nachbar- oder Rang-Semantik der Vorzug vor vorübergehenden, nullbasierten Array-Indizes gegeben werden.

Bei einer Verschiebung zwischen Containern MUSS die Objektidentität erhalten bleiben, es sei denn, das zugrunde liegende Modell behandelt die Verschiebung ausdrücklich als „Kopieren und Löschen“.

## 17. Urheberschaft und Herkunft

### 17.1 Zuordnung von Agenten

Die Angabe der Urheberschaft MUSS sich auf einen gemäß `OMI-SPEC-150` definierten Agenten beziehen oder eine explizite Darstellung als „unbekannt“, „nicht identifiziert“, „zurückgehalten“ oder „Dienstagent“ enthalten.

Eine Anwendungskonto-Kennung KANN in eingeschränkten betrieblichen Prüfdaten beibehalten werden, DARF jedoch die Zuordnung zu einem portablen Agenten in der wissenschaftlichen Historie NICHT ersetzen.

### 17.2 Verantwortung von Menschen und Software

Eine Änderung KANN Folgendes unterscheiden:

- `actorId`: die Person oder Organisation, die für die wissenschaftliche Entscheidung verantwortlich ist;
- `performedBy`: der Software-Agent oder Dienst, der den Vorgang ausführt;
- `committedBy`: der Akteur oder Dienst, der die Überarbeitung genehmigt oder dauerhaft speichert;
- `onBehalfOf`: eine deklarierte Delegationsbeziehung.

Bei einer automatisch durchgeführten Transformation SOLLTEN sowohl der Software-Agent als auch die auslösende Person oder der auslösende Prozess angegeben werden, sofern diese bekannt sind.

### 17.3 Importierter Verlauf

Bei importierten Datensätzen MÜSSEN die Quelle und der Importvorgang angegeben werden.

Ein Importeur DARF importierte Revisionen NICHT als lokal erstellt kennzeichnen, nur weil er lokale Speichereinträge angelegt hat.

Wenn Quellenidentitäten nicht aufgelöst werden können, SOLLTE der Importeur die Quellenbezeichnungen und die Herkunft als ungelöste Aussagen beibehalten.

## 18. Zeit und kausale Reihenfolge

Die Überprüfung der übergeordneten Beziehungen und der Abfolge der Ereignisse liefert kausale Belege.

Zeitstempel liefern zeitliche Nachweise, können jedoch durch Uhrenabweichungen, Offline-Bearbeitung, den Import oder datenschutzbezogene Umwandlungen beeinflusst werden.

Ein Verbraucher DARF NICHT daraus schließen, dass Revision A ein Vorgänger von Revision B ist, nur weil A einen früheren Zeitstempel hat.

Wenn lokale Sequenznummern verwendet werden, MUSS deren Gültigkeitsbereich deklariert werden.

## 19. Nachweis der Integrität

### 19.1 Überblick über die Bundesländer

Ein Status-Digest-Datensatz SOLLTE Folgendes enthalten:

- Algorithmus-URI oder registrierter Name;
- Digest-Wert;
- Kanonisierungsmethode oder -profil;
- Umfang der einbezogenen und ausgeschlossenen Daten;
- Medientyp oder Schemaversion;
- Erstellungszeit;
- Generierungsdienst.

### 19.2 Integrität von Ereignissen und Graphen

Implementierungen KÖNNEN Folgendes bereitstellen:

- Zusammenfassungen pro Ereignis;
- Change-Set-Digests;
- Zusammenfassungen der Überarbeitungen;
- verkettete Hashwerte;
- Merkle-Strukturen;
- digitale Signaturen;
- vertrauenswürdige Zeitstempel-Nachweise.

Die Anwendung dieser Techniken allein ist kein Beweis für die Urheberschaft, die Rechtsgültigkeit oder die semantische Korrektheit.

### 19.3 Integritätsfehler

Ein Verbraucher, der eine Nichtübereinstimmung des Digests, das Fehlen eines erforderlichen übergeordneten Eintrags, eine ungültige Signatur oder einen Graphzyklus feststellt, MUSS einen Integritätsfehler melden und DARF die betroffene Historie NICHT stillschweigend als verifiziert kennzeichnen.

## 20. Datenschutz, Vertraulichkeit und Schwärzung

In der Versionshistorie können gelöschte Texte, personenbezogene Daten, die Identität von Gutachtern, unveröffentlichte Ergebnisse, Zugriffstoken, vertrauliche Korrespondenz oder rechtlich geschützte Daten offengelegt werden.

Eine konforme Implementierung MUSS die Trennung folgender Elemente unterstützen:

- öffentliche Geschichtswissenschaft;
- im Arbeitsbereich sichtbarer Bearbeitungsverlauf;
- vertrauliche Daten aus der Verwaltungsprüfung;
- geheime Authentifizierungs- oder Infrastrukturdaten.

Authentifizierungsdaten, Passwort-Hashes, Sitzungstoken, private Schlüssel und Aktualisierungstoken DÜRFEN NICHT in der wissenschaftlichen Historie von „OMI“ erscheinen.

### 20.1 Protokoll über die Schwärzung

Bei einer Schwärzung SOLLTE Folgendes erhalten bleiben:

- betroffene Revision, Ereignis, Feld oder Payload-Referenz;
- Kategorie des Schwärzungsgrundes;
- zuständige Behörde oder zuständiger Beauftragter, wenn eine Offenlegung zulässig ist;
- Bearbeitungszeit;
- ob Inhalte ausgeblendet, verschlüsselt, zugangsbeschränkt oder vernichtet wurden;
- Auswirkungen auf den Wiederaufbau und die Überprüfung der Integrität.

Bei einer öffentlichen Serialisierung KÖNNEN eingeschränkte Nutzdaten durch Schwärzungsmarkierungen ersetzt werden, wobei sichere strukturelle Hinweise erhalten bleiben.

### 20.2 Rechtmäßige Lösch- und Aufbewahrungspflichten

Implementierungen, bei denen Lösch- oder Aufbewahrungspflichten zur Anwendung kommen, MÜSSEN die sich daraus ergebenden zeitlichen Beschränkungen dokumentieren.

Diese Spezifikation legt nicht fest, welche rechtlichen oder ethischen Vorschriften für einen bestimmten Datensatz gelten.

## 21. Serialisierung

### 21.1 Beispiel für einen Verlaufseintrag

Das folgende Beispiel dient der Veranschaulichung und definiert nicht das kanonische Schema.

```json
{
  "modelVersion": "OMI-SPEC-160@0.1.0",
  "historyId": "urn:uuid:1798d883-e226-4a39-a601-cadef82aa223",
  "entityId": "urn:uuid:manuscript-001",
  "historyScope": "complete",
  "headRevisionIds": [
    "urn:uuid:revision-002"
  ],
  "revisions": [
    {
      "id": "urn:uuid:revision-001",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": [],
      "changeSetIds": ["urn:uuid:changeset-001"],
      "createdAt": "2026-08-06T19:00:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Create manuscript"
    },
    {
      "id": "urn:uuid:revision-002",
      "entityId": "urn:uuid:manuscript-001",
      "parentRevisionIds": ["urn:uuid:revision-001"],
      "changeSetIds": ["urn:uuid:changeset-002"],
      "createdAt": "2026-08-06T19:15:00Z",
      "createdBy": "urn:uuid:agent-001",
      "message": "Revise title"
    }
  ],
  "changeSets": [
    {
      "id": "urn:uuid:changeset-002",
      "entityId": "urn:uuid:manuscript-001",
      "baseRevisionIds": ["urn:uuid:revision-001"],
      "actorId": "urn:uuid:agent-001",
      "createdAt": "2026-08-06T19:14:58Z",
      "atomic": true,
      "events": [
        {
          "id": "urn:uuid:event-002",
          "operation": "update",
          "target": {
            "entityId": "urn:uuid:manuscript-001",
            "property": "title"
          },
          "before": "Untitled manuscript",
          "after": "Version-aware scholarly editing",
          "sequence": 1
        }
      ]
    }
  ]
}
```

### 21.2 Beispiel für einen Zusammenführungsdatensatz

```json
{
  "id": "urn:uuid:merge-001",
  "entityId": "urn:uuid:manuscript-001",
  "sourceRevisionIds": [
    "urn:uuid:revision-author",
    "urn:uuid:revision-editor"
  ],
  "baseRevisionIds": ["urn:uuid:revision-common"],
  "resultRevisionId": "urn:uuid:revision-merged",
  "performedBy": "urn:uuid:agent-editor",
  "performedAt": "2026-08-06T20:00:00Z",
  "strategy": "three-way-semantic",
  "conflicts": [
    {
      "id": "urn:uuid:conflict-001",
      "category": "concurrent-update",
      "targets": [
        {
          "entityId": "urn:uuid:manuscript-001",
          "property": "title"
        }
      ],
      "status": "resolved",
      "resolutionEventId": "urn:uuid:event-resolution-001"
    }
  ]
}
```

## 22. Validierungsregeln

Ein Validator MUSS einen Fehler melden, wenn:

- eine Revisions-ID innerhalb desselben Verlaufsbereichs doppelt vorhanden ist;
- Eine Nicht-Root-Revision hat ohne eine „shallow-boundary“-Deklaration keinen übergeordneten Eintrag;
- Eine übergeordnete Revision gehört zu einer anderen Entität, ohne dass eine explizite entitätsübergreifende Beziehung besteht;
- Die Revisionsgrafik enthält einen Zyklus;
- Eine deklarierte Kopfrevision fehlt;
- Ein Änderungssatz hat keine Basisrevision;
- Ein Ereignis hat weder eine Operation noch ein Ziel;
- Ein atomarer Änderungssatz wird als teilweise angewendet dargestellt;
- Bei einem Zusammenführungsergebnis werden erforderliche direkte übergeordnete Elemente ausgelassen;
- Ein gelöster Konflikt weist keine Anzeichen für eine Lösung auf;
- Ein Rollback löscht oder ersetzt die referenzierte, festgeschriebene Revision;
- Eine öffentliche Veröffentlichung legt Daten offen, die als „eingeschränkt“ oder „geheim“ gekennzeichnet sind;
- In einem Digest-Datensatz wird der Algorithmus nicht angegeben;
- Ein „`complete`“-Protokoll enthält ungelöste Verweise auf fehlende übergeordnete Elemente.

Ein Validator SOLLTE eine Warnung ausgeben, wenn:

- Eine Überarbeitung enthält keine Zusammenfassung des Inhalts oder der Absicht;
- Ein Akteur ist ohne eine erklärende Kennzeichnung unbekannt;
- Ein Zeitstempel weist keine ausreichende Genauigkeit auf;
- Eine Operation verwendet lediglich ein vorübergehendes Positionsziel;
- Einem Snapshot fehlt eine Zusammenfassung;
- Einem Teilverlauf fehlt ein für Menschen lesbarer Hinweis auf eine Auslassung;
- einer importierten Revision fehlt die Herkunftsangabe;
- Ein Zweigname wird als Revisionskennung verwendet;
- Ein umfangreiches Update-Ereignis verschleiert semantische Änderungen, die für sich genommen von Bedeutung sind.

## 23. Verarbeitung unbekannter Daten und Erweiterungsdaten

Ein verlustfreies Format MUSS Folgendes beibehalten:

- unbekannte Operationstypen mit Namespace;
- Erweiterungsfelder für Revisionen, Ereignisse, Änderungssätze, Zweige und Zusammenführungsdatensätze;
- unbekannte Sichtbarkeitsklassifizierungen;
- nicht auflösbare externe Verweise.

Ein Verbraucher, der eine Fristverlängerung nicht aufrechterhalten oder in Anspruch nehmen kann, MUSS:

1. die nicht unterstützte Erweiterung melden;
2. Geben Sie an, ob der aktuelle Zustand rekonstruierbar bleibt;
3. Vermeiden Sie es, eine verlustfreie Round-Trip-Unterstützung zu behaupten;
4. Undurchsichtige Nutzdaten beibehalten, sofern dies sicher und technisch möglich ist.

## 24. Kompatibilität und Migration

### 24.1 Migration von Manuskripten, die ausschließlich Zeitstempel enthalten

Ein Manuskript, das ausschließlich Werte für „`version`“, „`createdAt`“ und „`updatedAt`“ enthält, enthält keine konforme Revisionshistorie gemäß „OMI“.

Bei einer Migration KANN eine synthetische Stammrevision erstellt werden, die den importierten aktuellen Zustand darstellt.

Die synthetische Überarbeitung MUSS:

- das Migrations- oder Importereignis identifizieren;
- feststellen, dass frühere Daten nicht verfügbar sind;
- Verwenden Sie `historyScope: snapshot-only` oder `shallow`;
- Vermeiden Sie es, Autoren, Ereignisse oder kausale Zusammenhänge zu erfinden;
- Behalten Sie die ursprünglichen Zeitstempel als Quellangaben bei, anstatt sie als verifizierte Commit-Historie zu verwenden, wenn ihre Bedeutung unklar ist.

### 24.2 Migration aus eingebetteten Prüfprotokollen

Ein Importeur SOLLTE Quellprüfprotokolle nur dann Änderungsereignissen zuordnen, wenn die Semantik in Bezug auf Vorgang, Ziel, Akteur und Zeit beibehalten werden kann.

Nicht zuordenbare Quelldatensätze SOLLTEN als undurchsichtige Herkunftsangaben beibehalten oder als ausgelassen gemeldet werden.

### 24.3 Kompatible Entwicklung

Eine kompatible zukünftige Überarbeitung dieser Spezifikation kann:

- optionale Ereigniseigenschaften hinzufügen;
- Operationstypen mit Namensräumen hinzufügen;
- einen optionalen Integritätsnachweis hinzufügen;
- Warnungen verfeinern;
- Konformitätsprofile hinzufügen, die die Kernsemantik beibehalten.

Zu den inkompatiblen Änderungen gehören:

- festgeschriebene Änderungen wieder veränderbarmachen;
- Änderung der Semantik von übergeordneten Elementen;
- Wiederverwendung von Revisionskennungen;
- Behandlung von Zweignamen als unveränderliche Revisionskennung;
- die Aufhebung der Verpflichtung zur Offenlegung der Teilhistorie;
- „revert“ als destruktives Löschen neu definieren.

## 25. Überlegungen zur Interoperabilität

### 25.1 Git und verteilte Versionskontrolle

Git-Commits, -Bäume, -Zweige und -Zusammenführungen mögen zwar eine Implementierungsinfrastruktur bieten, doch Git-Zeilenvergleiche und Repository-Identitäten stellen nicht automatisch semantische Ereignisse oder Agentenidentitäten im Sinne von „OMI“ dar.

Eine auf Git basierende Implementierung SOLLTE Folgendes abbilden:

- Identität des Commits an die Revision-Identität übermitteln;
- Übergeordnetes Commit wird in übergeordnete Revisionen übernommen;
- Baumstruktur in Snapshots;
- die Felder „author“ und „committer“ auf entsprechend begrenzte „OMI“-Agent-Assertions;
- Commits zusammenführen, um Datensätze zusammenzuführen;
- Tags zu Kontrollpunkten oder Freigabeetiketten.

### 25.2 „JSON“-Patch und ähnliche Betriebsformate

JSON Patch oder vergleichbare Formate KÖNNEN Low-Level-Operationen kodieren. Ein Produzent MUSS diese bei Bedarf ergänzen, um eine stabile Objektzuordnung, die semantische Absicht, die Herkunft der Akteure, die Verschiebungssemantik und das Erweiterungsverhalten von „OMI“ zu gewährleisten.

### 25.3 Ereignisgesteuerte Systeme

Ein ereignisgesteuertes System KANN native Ereignisse direkt abbilden, wenn deren Semantik dieser Spezifikation entspricht. Interne Ereignisse, die vertrauliche Informationen, Speicherdetails oder instabile Implementierungspfade offenlegen, SOLLTEN in portable „OMI“-Ereignisse umgewandelt werden.

### 25.4 CRDT und Systeme der operativen Transformation

Eine CRDT- oder OT-Implementierung KANN intern native Operationen beibehalten. Für den Austausch von „OMI“ MUSS sie die vom deklarierten Profil geforderten Semantiken für Revision, Akteur, Ziel, Zusammenführung und Vollständigkeit der Historie bereitstellen.

Die automatische Konvergenz macht die Erfassung wissenschaftlicher Konflikte, politischer Konflikte oder der Herkunft nicht überflüssig.

### 25.5 W3C PROV und Provenienzsysteme

Implementierungen KÖNNEN Akteure, Aktivitäten, Entitäten, Ableitungen und Generierungsereignisse dem W3C-PROV-Modell oder einem anderen Provenienzemodell zuordnen. Bei solchen Zuordnungen SOLLTE die Unterscheidung zwischen dem wissenschaftlichen Objekt, seiner Revision, der Änderungsaktivität, dem verantwortlichen Akteur und dem ausführenden Software-Dienst beibehalten werden.

## 26. Sicherheitsaspekte

Die Erfassung und Rekonstruktion von Verlaufsdaten kann Implementierungen folgenden Risiken aussetzen:

- böswillig tiefe oder zyklische Graphen;
- überdimensionierte Ereignisdatenmengen;
- Pfaddurchlauf in Snapshot-Referenzen;
- Wiederherstellung unbefugter Änderungen;
- gefälschte Behauptungen von Schauspielern;
- Verwirrung aufarbeiten;
- Algorithmus-Downgrade;
- Angriffe mit erweiterten Nutzdaten;
- Denial-of-Service-Angriff durch Konflikt-Explosion;
- Injektion über für Menschen lesbare Nachrichten.

Implementierungen SOLLTEN:

- die Graphentiefe und die Nutzdatengröße gemäß den festgelegten Richtlinien begrenzen;
- Identifikatoren und Verweise validieren;
- Ablehnungszyklen;
- Sandbox-Transformationsvorgänge;
- Behandle Nachrichten und Beschriftungen als nicht vertrauenswürdigen Text;
- betriebliche Anfragen getrennt von der wissenschaftlichen Herkunft zu authentifizieren;
- Digest-Algorithmen und Kanonisierungsprofile überprüfen;
- Vermeiden Sie es, Payloads von Dateiendungen als Code auszuführen;
- Beweismaterial zu zurückgewiesenen oder unter Quarantäne gestellten Einfuhren aufbewahren.

## 27. Überlegungen zur Barrierefreiheit

Schnittstellen zur Versionshistorie SOLLTEN:

- Änderungen in maschinenlesbaren und textbasierten Alternativen darstellen, nicht nur anhand der Farbe;
- eine über die Tastatur bedienbare Navigation durch die Überarbeitungsstufen bereitstellen;
- dem Hilfsmittel den Konflikt- und Validierungsstatus mitteilen;
- Akteure, Zeitpunkt, Ziel, Vorgehensweise und Ergebnis in verständlicher Sprache darlegen;
- einen Vergleich ermöglichen, ohne dass eine präzise Zeigerinteraktion erforderlich ist;
- Vermeiden Sie es, sich ausschließlich auf visuelle Side-by-Side-Vergleiche zu verlassen;
- Zusammenfassungen für umfangreiche Änderungssätze bereitstellen;
- Die logische Lesereihenfolge in zusammengeführten oder zurückgesetzten Inhaltsansichten beibehalten.

## 28. Überlegungen zur Internationalisierung

Für Menschen lesbare Änderungsmeldungen, Bezeichnungen, Begründungen und Erläuterungen zu Konflikten SOLLTEN Sprachkennzeichnungen unterstützen.

Bei Textänderungen MÜSSEN die Metadaten zu Sprache und Schrift des betroffenen Inhalts beibehalten werden, sofern solche Metadaten vorhanden sind.

Implementierungen SOLLTEN unterscheiden zwischen:

- Bezeichnungen in der Schnittstellensprache;
- Sprache der geänderten wissenschaftlichen Inhalte;
- Sprache der Änderungsmitteilung;
- `OMI-SPEC-170`-gesteuerte Translationslinie.

Beim Vergleich von Zeichenketten, bei der Tokenisierung, bei der Normalisierung und beim Zusammenführen von Texten SOLLTE NICHT davon ausgegangen werden, dass es sich um englische, lateinische Schriftzeichen oder durch Leerzeichen getrennte Wörter handelt.

## 29. Überlegungen zur Erhaltung

Ein Archivierungspaket, das die Aufbewahrung der Versionshistorie gewährleisten soll, SOLLTE Folgendes enthalten:

- die versionierte Entitätskennung;
- genaue Versionen der „OMI“-Spezifikation und des Schemas;
- Änderungsdiagramm;
- Verweise auf Kopfzeilen und Kontrollpunkte;
- Momentaufnahmen oder rekonstruierbare Ereignisse;
- Digest und Kanonisierung von Metadaten;
- Angaben zu Auftraggeber und Herkunft;
- Hinweise zu unvollständigen historischen Daten und Schwärzungen;
- Erweiterungs-Namespaces;
- Software oder Metadaten zur Transformation, die für die Interpretation erforderlich sind;
- ein Manifest, das historische Datensätze mit den gepackten Assets verknüpft.

Zweigbezeichnungen können sich ändern, doch die Revisionsidentität und die übergeordneten Beziehungen MÜSSEN stabil bleiben.

## 30. Stand der Umsetzung

Open Manuscript Studio Derzeit wird ein veränderbarer Manuskriptzustand mit einer für Menschen lesbaren Zeichenfolge „`version`“, den Zeitstempeln „`createdAt`“ und „`updatedAt`“ gespeichert. Speicheraktionen ersetzen direkt den aktuellen Zustand und aktualisieren den Änderungszeitstempel.

Das Studio bietet derzeit noch nicht Folgendes an:

- unveränderliche Revisionsdatensätze;
- Änderungssätze oder semantische Änderungsereignisse;
- Bearbeitungshistorie nach Akteuren;
- mit Revisionen verknüpfte Snapshots;
- Validierung des Revisionsdiagramms;
- Verzweigungen oder mehrere Köpfe;
- Auswahl der Merge-Basis;
- Aufzeichnungen zu Konflikten und deren Beilegung;
- Reverts werden als neuer Verlauf dargestellt;
- Grabsteine;
- Erklärungen zur Teilhistorie;
- Zustandsauswertungen oder Integritätsprüfungen.

Der aktuelle Status von „`OMI-SPEC-160`“ ist weiterhin **Explorativ**. Der erste Meilenstein der Implementierung sollte ein lineares Revisionsprotokoll für bestehende Zustandsänderungen einführen, bevor das Verhalten bei Verzweigungen und Zusammenführungen hinzugefügt wird.

## 31. Empfohlene Reihenfolge der Umsetzung

1. Fügen Sie `versioningModelVersion`, `historyId` und `headRevisionId` zum Manuskript-Aggregat oder zum zugehörigen Arbeitsbereichsverlauf hinzu;
2. `Revision`-, `ChangeSet`- und `ChangeEvent`-Typen sowie stabile Zieltypen definieren;
3. Aktuelle Änderungen an Titel, Zusammenfassung, Block, Abschnitt und Mitwirkenden in semantische Änderungssätze einbinden;
4. die verknüpfte Agenten-ID des authentifizierten Benutzers als Akteur erfassen, sofern verfügbar;
5. unveränderliche lineare Revisionen und Snapshots erstellen;
6. „Rückgängig“ als Historie, die eine Wiederherstellung ermöglicht, hinzufügen, anstatt den Zustand zu löschen;
7. Tombstones für gelöschte Abschnitte, Blöcke, Agenten und Beiträge hinzufügen;
8. den Export und Import von flachen oder ausschließlich aus Snapshots bestehenden Verlaufsdaten implementieren;
9. eine Benutzeroberfläche für den Versionsverlauf sowie barrierefreie Zusammenfassungen der Änderungen hinzufügen;
10. Zweige hinzufügen, Basen zusammenführen, Konflikte und deren Lösung;
11. kanonische Schemata sowie gültige und ungültige Fixtures veröffentlichen;
12. Tests den Anforderungen von „`REQ-VCH-*`“ zuordnen.

## 32. Anforderungen an Prüfungen und Prüfvorrichtungen

Ein zukünftiger Konformitätsprüfvorrichtungssatz SOLLTE Folgendes umfassen:

- eine Stammrevision;
- eine gültige lineare Historie mit drei Überarbeitungen;
- ein atomares Multi-Event-Änderungsset;
- Ereignisse wie „Text aktualisieren“, „Metadaten aktualisieren“, „Verschieben“, „Neu anordnen“, „Löschen“, „Wiederherstellen“ und „Zurücknehmen“;
- eine lückenhafte Familiengeschichte mit bekanntermaßen ausgelassenen Vorfahren;
- ein Austauschpaket, das ausschließlich Snapshots enthält;
- zwei Zweige mit einer sauberen Zusammenführung;
- eine Zusammenführung mit einem gelösten Konflikt;
- ein ungelöster Konflikt;
- ein Lösch-Tombstone;
- eine redigierte Veranstaltung mit Zugangsbeschränkung;
- Gültige und ungültige Status-Digests;
- doppelte Revisions-IDs;
- vermisste Eltern;
- ein Überarbeitungszyklus;
- eine nicht unterstützte Erweiterungsoperation;
- eine importierte Überarbeitung der synthetischen Wurzel.

## 33. Ungeklärte Fragen

Der Entwurf lässt folgende Fragen offen:

1. ob das kanonische Schema die Historie in das Manuskript einbetten oder nur eine verlinkte Historie-Ressource zulassen sollte;
2. welche Kanonisierungsprofile für Status-Digests registriert werden sollten;
3. ob Revisionskennungen im „Stable“-Profil als URIs vorgeschrieben sein sollten;
4. wie semantische Textoperationen nach gleichzeitigen Bearbeitungen auf Bereiche verweisen sollten;
5. welche Werte des Operationsvokabulars zu kontrollierten Registerbegriffen werden sollten;
6. wie entitätsübergreifende atomare Transaktionen im Kernschema dargestellt werden sollten;
7. in welchem Umfang eingeschränkte Prüfungsnachweise in übertragbaren Paketen aufbewahrt werden dürfen;
8. ob Checkpoint-Kategorien ein spezielles kontrolliertes Vokabular erfordern;
9. Welche Zusammenführungsstrategien sollten über die Anforderungen an die Evidenz hinaus standardisiert werden;
10. Wie Archivierungspakete den bereinigten, verschlüsselten Verlauf darstellen sollten.

Diese Probleme stehen der Implementierung des Profils „Core Revision History“ nicht im Wege.

## 34. Index der normativen Anforderungen

| Anforderung | Thema |
|---|---|
| `REQ-VCH-001` | Identitätsformel |
| `REQ-VCH-002` | Unveränderlichkeit von Revisionen |
| `REQ-VCH-003` | Beziehungen zu den Eltern |
| `REQ-VCH-004` | Herkunft von Änderungssätzen |
| `REQ-VCH-005` | Veranstaltungsablauf und Zielgruppe |
| `REQ-VCH-006` | Trennung von Versionskonzepten |
| `REQ-VCH-007` | Zerstörungsfreies Zurücksetzen |
| `REQ-VCH-008` | Rückverfolgbarkeit von Löschvorgängen |
| `REQ-VCH-009` | Semantik des Verschiebens und Neuanordnens |
| `REQ-VCH-010` | Beweise zusammenführen |
| `REQ-VCH-011` | Umgang mit fehlenden Elternelementen |
| `REQ-VCH-012` | Offenlegung eines Teils der Krankengeschichte |
| `REQ-VCH-013` | Geschützter Verlauf |
| `REQ-VCH-014` | Quellenangabe |
| `REQ-VCH-015` | Erhalt von Erweiterungen |
| `REQ-VCH-016` | Zeitstempel und Kausalitätstrennung |
| `REQ-VCH-017` | Digest-Algorithmus und Anwendungsbereich |
| `REQ-VCH-018` | Atomizität |

## 35. Änderungshistorie

| Version | Datum | Zusammenfassung |
|---|---|---|
| 0.1.0 | 06.08.2026 | Erster Entwurf zur Definition von unveränderlichen Revisionen, semantischen Änderungssätzen und Ereignissen, Revisionsgraphen, Snapshots, Verzweigungen, Zusammenführungen, Konflikten, Rückgängigmachungen, Tombstones, Provenienz, Integrität, Austausch von Teilhistorien sowie Implementierungsrichtlinien. |

## 36. Zusammenfassung

`OMI-SPEC-160` definiert ein portables Historienmodell für wissenschaftliche Objekte.

Es stellt sicher, dass eine Manuskriptüberarbeitung nicht mit einer Schema- oder Anwendungsversion verwechselt wird, dass der Commit-Verlauf nicht stillschweigend überschrieben wird, dass Änderungen den Verantwortlichen zugeordnet bleiben, dass Löschungen und Rückgängigmachungen weiterhin nachverfolgbar sind, dass Verzweigungen und Zusammenführungen explizit dargestellt werden, dass der Teilverlauf offengelegt wird und dass Implementierungen mit unterschiedlichen internen Algorithmen Versionsnachweise austauschen können, ohne die Bedeutung allein anhand von Zeitstempeln rekonstruieren zu müssen.

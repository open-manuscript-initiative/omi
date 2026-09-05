---
id: implementation-status-matrix
title: OMI Matrix zum Umsetzungsstatus
sidebar_label: Matrix zum Umsetzungsstatus
description: Evidenzbasierter Stand der „OMI“-Spezifikationen, Schemata, Beispiele, Unterstützung bei der Referenzimplementierung, Validierung und Konformitätsprüfung.
keywords:
  - Open Manuscript Initiative
  - OMI
  - implementation status
  - conformance
  - Open Manuscript Studio
  - roadmap
---

# Open Manuscript Initiative Matrix zum Umsetzungsstatus

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Dokumenttyp | Bericht zum Stand der Unternehmensführung |
| Status | Entwurf |
| Version | 0.3.0 |
| Normsprache | Englisch |
| Zuletzt aktualisiert | 05.09.2026 |
| Umfang | Alle Bezeichner im Register der „OMI“-Spezifikation |
| Evidenzbasis | Vollständige Überprüfung des „`main`“-Zweigs vom 06.08.2026, ergänzt durch die „OMI“-SPEC-320-Spezifikation, das Schema, die Testumgebung, den Validator sowie die aktuellen Exportnachweise aus Studio unter `.omi.json`, die am 05.09.2026 überprüft wurden |
| Maßgeblichkeit | Informativ; das Spezifikationsregister und die einzelnen Spezifikationen behalten ihre Maßgeblichkeit |

## 1. Zweck

Dieses Dokument dokumentiert den aktuellen Stand der Umsetzung und Überprüfung aller von der „Open Manuscript Initiative“ zugewiesenen Spezifikationskennungen.

Es unterscheidet zwischen fünf Fragen, die nicht miteinander verwechselt werden dürfen:

1. Gibt es ein kanonisches Spezifikationsdokument?
2. Wurde dieses Dokument bereits in die aktuelle „OMI“-Spezifikationsvorlage übernommen?
3. Werden maschinenlesbare Artefakte und Konformitätsvorrichtungen veröffentlicht?
4. Wird bei Open Manuscript Studio ein identifizierbarer Teil der Spezifikation umgesetzt?
5. Wurde das Verhalten validiert, auf Konformität geprüft oder unabhängig nachgewiesen?

Die Matrix soll folgenden Zweck erfüllen:

- Lücken zwischen textuellen Spezifikationen und ausführbaren Nachweisen aufdecken;
- verhindern, dass experimenteller Implementierungscode fälschlicherweise als normative Konformität angesehen wird;
- eine Grundlage für die Planung und Überprüfung bieten;
- die jeweils für die einzelnen Spezifikationen erforderlichen nächsten Nachweise ermitteln;
- Entscheidungen hinsichtlich der Bereitschaft für zukünftige Releases zu unterstützen.

## 2. Zuständigkeit und Auslegung

Das „[OMI Specification Registry](./specification-registry.md)“ gilt als maßgebende Quelle für:

- permanente Spezifikationskennungen;
- offizielle Titel;
- Zuweisungszustände;
- Lebenszyklusstadien;
- genaue Versionen;
- kanonische Pfade.

Die einzelnen Spezifikationsdokumente sind hinsichtlich ihrer normativen Anforderungen maßgebend.

Diese Matrix ist ein informativer Bericht über die Faktenlage. Sie enthält keine:

- den Status des Spezifikationslebenszyklus ändern;
- einer Implementierung die Konformität zuweisen;
- ein unveröffentlichtes Schema als maßgeblich festlegen;
- eine Spezifikation, einen Validator, eine Testsuite oder einen Implementierungsbericht ersetzen;
- sicherstellen, dass jedes experimentelle Feature mit dem aktuellen Spezifikationstext übereinstimmt.

Eine Spezifikation kann ein ausgereiftes Dokument ohne Implementierung sein. Eine Implementierung kann bereits umfangreiche Funktionalität enthalten, während die zugehörige Spezifikation noch den Status eines Entwurfs hat. Dies sind voneinander unabhängige Aspekte.

## 3. Vokabular zum Thema „Status“

### 3.1 Spezifikation und Artefaktzustände

| Zustand | Bedeutung |
|---|---|
| **Aktiver Entwurf** | Es liegt ein kanonisches Spezifikationsdokument vor, das mit dem Lebenszyklusstatus „Entwurf“ registriert ist. |
| **Reserviert** | Die Kennung und das Thema sind zugewiesen, es liegt jedoch kein akzeptierter Spezifikationsentwurf vor. |
| **Aktuelle Vorlage** | Die aktive Spezifikation wurde unter Verwendung der aktuellen Spezifikationsvorlage erstellt oder umfassend überarbeitet. |
| **Migration erforderlich** | Das aktive Dokument stammt aus der Zeit vor der kanonischen Spezifikationsvorlage oder enthält noch nicht alle erforderlichen Abschnitte zu Metadaten, Konformität, Kompatibilität, Nachweisen und Änderungshistorie. |
| **Entwurf des Artefakts veröffentlicht** | Ein versioniertes, maschinenlesbares Artefakt ist an einer autoritativen Stelle verfügbar, kann jedoch bis zur Veröffentlichung der stabilen Version noch inkompatible Änderungen erfahren. |
| **Erste Testfälle veröffentlicht** | Es gibt versionierte positive und negative Beispiele, diese bilden jedoch noch keine vollständige formale Konformitätssuite. |
| **Nicht veröffentlicht** | Das entsprechende kanonische Schema, Fixture-Set, Berichtsformat oder ein anderes maschinenlesbares Artefakt ist an keinem autoritativen Repository-Speicherort vorhanden. |
| **Noch nicht begonnen** | Für den angegebenen Bereich wurden im Repository keine Hinweise auf wesentliche Arbeiten festgestellt. |
| **Entfällt** | Die angegebene Dimension ist für die Spezifikation in ihrer derzeitigen Funktion nicht erforderlich. |

### 3.2 Zustände der Umsetzungsnachweise

| Zustand | Bedeutung |
|---|---|
| **Explorativ** | Es gibt verwandte Typen, Felder, UI-Konzepte oder Workflows, diese sind jedoch unvollständig, implementierungsspezifisch oder nicht nachweislich mit der kanonischen Spezifikation abgestimmt. |
| **Teilweise** | Ein identifizierbarer Teilbereich des Spezifikationsbereichs ist dargestellt oder nutzbar, jedoch fehlen wesentliche Anforderungen, Validierung, Interoperabilität oder Lebenszyklusverhalten. |
| **Implementiert** | Das erwartete Verhalten ist implementiert und einer deklarierten Spezifikationsversion zugeordnet, die formale Konformitätsprüfung ist jedoch noch nicht abgeschlossen. |
| **Getestet** | Die Implementierung verfügt über automatisierte Nachweise, die die geltenden normativen Anforderungen für eine angegebene Version abdecken. |
| **Konform** | Die Implementierung erfüllt eine veröffentlichte Konformitätsklasse unter Verwendung der genehmigten Konformitätssuite und dokumentiert alle zulässigen Einschränkungen. |
| **Nicht überprüft** | Möglicherweise gibt es Belege außerhalb der überprüften Repositorien, diese wurden jedoch für diese Baseline nicht überprüft. |

Die Begriffe **implementiert**, **getestet** und **konform** sind bewusst streng gewählt. Sie dürfen nicht aus der Existenz gleichnamiger Klassen, Schnittstellen, Seiten oder Beispiele abgeleitet werden.

## 4. Evidenz-Ausgangsbasis

Bei der Bestandsaufnahme wurden das öffentliche Spezifikations-Repository unter OMI sowie das aktuelle Repository unter Open Manuscript Studio herangezogen.

Zu den Nachweisen im Rahmen des „Verified Studio“-Programms gehören:

- der in ``README.md`` deklarierte Alpha-Scope;
- die Schnittstellen „Manuskript“, „Anmerkung“, „Zitat“, „Block“, „Abschnitt“, „Agent“ und „Beitrag“ unter `src/types/omi.ts` und `src/model/identity.ts`;
- Manuskriptbearbeitung und Aktionen der Mitwirkenden in „`src/app/useStudioStore.ts`“;
- Migration von Autoren aus älteren Systemen in „`src/document/migrateIdentityModel.ts`“;
- Trennung von Konto und Vermittler in `src/model/user.ts`;
- Arbeitsbereichsrollen, Berechtigungen, Einladungen sowie die Rollen „Prüfer“ und „Übersetzer“ in `src/model/workspace.ts`;
- die aktuelle Implementierung des Arbeitsbereichs für den lokalen Speicher unter `src/store/workspaceStore.ts`;
- Identitäts- und Mitwirkenden-Einheitstests in `tests/identity-model.test.ts`;
- das Modell „`OMI-SPEC-160@0.1.0`“ für Revision, Änderungssatz, Änderungsereignis, Snapshot, Vollständigkeit des Verlaufs, Commit, Validierung und Rückgängigmachen unter `src/model/versioning.ts`;
- Migration des Revisionsverlaufs (nur Zeitstempel) in `src/document/migrateVersioningModel.ts`;
- die mehrsprachige Oberfläche zur Änderungshistorie unter `src/components/HistoryPanel.tsx`;
- Versionierung von Unit-Tests in „`tests/versioning-model.test.ts`“ mit den Themen unveränderliche Wurzeln, Beibehaltung der übergeordneten Elemente, lineare Historie, atomare Änderungssätze, Rückgängigmachungen, flache Migration, Validierung und Export.

Die aktuelle Implementierung der Versionsverwaltung wurde in PR Nr. 2 mit dem Merge-Commit `65f3a2f4fa9eaf6adf370f4bae5eec1e98521db2` in Open Manuscript Studio integriert.

Bei der vollständigen Überprüfung vom 06.08.2026 wurden keine verbindlichen Artefakte aus dem Repository „OMI“ gefunden für:

- ein maschinenlesbares Format für Validierungsberichte;
- eine formale Konformitäts-Testsuite;
- unabhängig überprüfte Implementierungen.

Das Update „OMI-SPEC-320“ vom 05.09.2026 enthält das erste kanonische, versionierte Manuskript des Schemas „JSON“, einen ersten Satz von acht positiven und negativen Testfällen sowie einen Referenz-Validator für Testfälle. Diese Artefakte decken die strukturelle Validierung und ausgewählte semantische Prüfungen ab; sie stellen weder einen vollständigen Schemasatz für „OMI“ noch eine formale Konformitätssuite dar.

Open Manuscript Studio Verweist derzeit in seinem Manuskripttyp „TypeScript“ auf die URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`. Das Vorhandensein dieser URI im Quellcode ist kein Hinweis darauf, dass ein kanonisches Schema veröffentlicht wurde oder dass die Implementierung anhand dieses Schemas validiert wird.

## 5. Aggregat-Snapshot

| Maßnahme | Aktuelle Ausgangsbasis |
|---|---:|
| Registrierte Spezifikationskennungen | 23 |
| Aktuelle Entwürfe für Spezifikationen | 17 |
| Reservierte Spezifikationen | 6 |
| Aktive Spezifikationen unter Verwendung der aktuellen Vorlage | 3 |
| Aktive Spezifikationen, für die eine Vorlagenmigration erforderlich ist | 14 |
| Veröffentlichung der kanonischen maschinenlesbaren Spezifikations-Artefakt-Sätze | 1 Entwurfssatz verifiziert |
| Veröffentlichte Konformitätsprüfvorrichtungssätze | 1 erster Satz verifiziert |
| Validator-Implementierungen | 1 Referenz-Fixture-Validator verifiziert |
| Formale Konformitätstestsuiten | 0 verifiziert |
| Unabhängige Implementierungen | 0 verifiziert |
| Studio-Status: Teilweise | 8 Spezifikationen |
| Projektstatus: Sondierungsphase | 6 Spezifikationen |
| Projektstatus: Noch nicht begonnen | 8 Spezifikationen |
| Studio-Status: Entfällt | 1 Spezifikation |

Diese Kennzahlen beschreiben die in diesem Dokument verwendeten Nachweiskategorien. Sie geben keinen Aufschluss über den Fertigstellungsgrad in Prozent oder die Qualität der Spezifikation.

## 6. Matrix zur Spezifikationsreife

### 6.1 Grundlagen und zentrale semantische Modelle

| Kennung | Spezifikation | Status in der Registrierungsstelle | Version | Vorlage | Maschinell lesbare Artefakte | Konformitätsvorrichtungen |
|---|---|---|---|---|---|---|
| `OMI-SPEC-000` | [Core Principles](../foundations/core-principles.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht zutreffend | Nicht veröffentlicht |
| `OMI-SPEC-100` | [Document Model](../specifications/document-model.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-110` | [Anchor Model](../specifications/anchor-model.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-120` | [Scholarly Object Model](../specifications/core/scholarly-object-model.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-130` | [Annotation Model](../specifications/annotation-model.md) | Aktiver Entwurf | 0.2.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-140` | [Metadata Model](../specifications/metadata-model.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-150` | [Identity and Contributor Model](../specifications/identity-contributor-model.md) | Aktiver Entwurf | 0.1.0 | Aktuelle Vorlage | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-160` | [Versioning and Change Model](../specifications/versioning-change-model.md) | Aktiver Entwurf | 0.1.0 | Aktuelle Vorlage | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-170` | Übersetzungsmodell | Reserviert | — | Nicht zutreffend | Noch nicht begonnen | Noch nicht begonnen |
| `OMI-SPEC-180` | Validierungsmodell | Reserviert | — | Nicht zutreffend | Noch nicht begonnen | Noch nicht begonnen |
| `OMI-SPEC-190` | Modell für Zusammenarbeit und Berechtigungen | Reserviert | — | Nicht zutreffend | Noch nicht begonnen | Noch nicht begonnen |

### 6.2 Wissenschaftlicher Arbeitsablauf, Literaturangaben und Veröffentlichung

| Kennung | Spezifikation | Status in der Registrierungsstelle | Version | Vorlage | Maschinell lesbare Artefakte | Konformitätsvorrichtungen |
|---|---|---|---|---|---|---|
| `OMI-SPEC-200` | [Review Model](../specifications/review-model.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-210` | [Citation Model](../specifications/citation-model.md) | Aktiver Entwurf | 0.2.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-220` | [Bibliographic Record Model](../specifications/bibliographic-record-model.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-221` | [Reference Library and Registry Architecture](../specifications/reference-library-registry.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-230` | [Publishing Model](../specifications/publishing-model.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-240` | Modell für Darstellung und Veröffentlichung | Reserviert | — | Nicht zutreffend | Noch nicht begonnen | Noch nicht begonnen |

### 6.3 Plattform, Austausch und Konformität

| Kennung | Spezifikation | Status in der Registrierungsstelle | Version | Vorlage | Maschinell lesbare Artefakte | Konformitätsvorrichtungen |
|---|---|---|---|---|---|---|
| `OMI-SPEC-300` | [Plugin Architecture](../specifications/plugin-architecture.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-310` | [Platform API](../specifications/api.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-320` | [File Format](../specifications/file-format.md) | Aktiver Entwurf | 0.2.0 | Aktuelle Vorlage | [Draft schema](/schemas/omi-manuscript-0.2.schema.json) | [Initial fixtures](/examples/omi-spec-320/0.2.0/manifest.json) |
| `OMI-SPEC-330` | [Container Architecture](../specifications/container-architecture.md) | Aktiver Entwurf | 0.1.0 | Migration erforderlich | Nicht veröffentlicht | Nicht veröffentlicht |
| `OMI-SPEC-340` | Import- und Exportmodell | Reserviert | — | Nicht zutreffend | Noch nicht begonnen | Noch nicht begonnen |
| `OMI-SPEC-350` | Funktions- und Konformitätsmodell | Reserviert | — | Nicht zutreffend | Noch nicht begonnen | Noch nicht begonnen |

## 7. Belege zur Umsetzung von „Open Manuscript Studio“

Derzeit gilt keine Zeile in diesem Abschnitt gemäß den oben genannten strengen Definitionen als **implementiert**, **getestet** oder **konform**.

Das Repository „OMI“ enthält nun einen Referenz-Fixture-Validator für „`OMI-SPEC-320@0.2.0`“. Bislang nutzt noch keine Studio-Implementierung diesen Validator, und für keine der Spezifikationen wurden formale Konformitätstests oder unabhängige Nachweise zur Implementierung überprüft. Diese Aspekte werden daher für die gesamte Baseline zusammengefasst, anstatt sie in jeder Zeile zu wiederholen.

### 7.1 Grundlagen und zentrale semantische Modelle

| Kennung | Status des Studios | Bestätigte Belege | Größte Lücke vor Erreichen eines höheren Status |
|---|---|---|---|
| `OMI-SPEC-000` | Nicht zutreffend | Prinzipien dienen als Leitlinien für die Architektur und definieren keine direkt ausführbare Komponente. | Setzen Sie suitenübergreifende Prinzipien in nachvollziehbare Anforderungen und Prüfkriterien um. |
| `OMI-SPEC-100` | Teilweise | `OmiManuscript` enthält Abschnitte und Blöcke; der Studio-Store wählt Abschnitte aus, bearbeitet Blöcke und fügt Abschnitte hinzu. | Kanonisches Schema, Invarianten, Blocksemantik, Erweiterungsregeln, Validierung und Zuordnung von Anforderungen. |
| `OMI-SPEC-110` | Explorativ | Anmerkungen können sich auf `targetBlockId` und optional auf `targetText` beziehen. | Stabile Ankeridentität, Selektoren, Auflösung, Mutationsverhalten, Umgang mit Mehrdeutigkeiten und Tests. |
| `OMI-SPEC-120` | Teilweise | Ein typisiertes Manuskript-Aggregat enthält Agenten, Beiträge, Abschnitte, Blöcke, Anmerkungen, Zitate, Identifikatoren, Zeitstempel und einen Revisionsverlauf. | Objektgrenzen und Lebenszyklen an die Spezifikation anpassen; Schema und Validierungsnachweise veröffentlichen. |
| `OMI-SPEC-130` | Teilweise | `OmiAnnotation` definiert einen Bezeichner, einen Typ, einen Zielblock, optionalen Zieltext, einen Hauptteil und einen Darstellungshinweis; Anmerkungen werden im Manuskriptstatus angezeigt. | Kanonische Ziele, Beweggründe, Urheberschaft, Lebenszyklus, Verknüpfung, Berechtigungen, Validierung und Austausch. |
| `OMI-SPEC-140` | Teilweise | Der Manuskriptstatus umfasst Ort, Titel, Untertitel, Zusammenfassung, Schlagwörter, Identifikatoren, Akteure, Beiträge und Zeitstempel. | Herkunft der Metadaten, kontrollierte Begriffe, Kardinalitäten, Profile, Validierung und externe Zuordnungen. |
| `OMI-SPEC-150` | Teilweise | Das Studio definiert „`OMI-SPEC-150@0.1.0`“, trennt Konten von Agenten, stellt Namensformen, Identifikations- und Zugehörigkeitsangaben, kontextbezogene Beiträge, Rollen, Reihenfolge und den entsprechenden Status dar, migriert bestehende Autoren, stellt einen mehrsprachigen Editor für Mitwirkende bereit und enthält gezielte Unit-Tests. | Kanonisches Schema, vollständige Transparenz und Provenienzvorgänge, zusätzliche Akteurstypen, Abgleich, Backend-Persistenz, Anforderungszuordnung und Konformitäts-Fixtures. |
| `OMI-SPEC-160` | Teilweise | Das Studio deklariert „`OMI-SPEC-160@0.1.0`“; erstellt unveränderliche Stamm- und Unterrevisionen mit linearer Abstammung von einem Elternteil; zeichnet semantische Änderungssätze und Ereignisse für Manuskript- und Mitwirkendenänderungen auf; speichert vollständige oder oberflächliche Snapshots; führt nicht-destruktive Rückgängigmachungen als neue Revisionen durch; löst die Zuordnung von Akteuren konservativ auf; stellt eine mehrsprachige Benutzeroberfläche für den Verlauf bereit; exportiert den Revisionsverlauf; und enthält gezielte Unit-Tests. | Batching im Arbeitszustand und Checkpoint-Commits, Tombstones, Integritäts-/Zustands-Digests, explizite Zuordnung von „`REQ-VCH-*`“, kanonische Schemata und Fixtures, Unterstützung für Verzweigungen und Zusammenführungen, Persistenzsicherung sowie formale Konformitätstests. |
| `OMI-SPEC-170` | Explorativ | Manuskripte sind an einen bestimmten Ort gebunden; Benutzer- und Arbeitsbereichsmodelle umfassen Arbeitssprachen und eine Übersetzerrolle. | Übersetzungsobjekte, Quelle-Ziel-Beziehungen, Äquivalenz, Abweichung, Synchronisation und Herkunft. |
| `OMI-SPEC-180` | Noch nicht begonnen | Es wurde kein kanonisches Validierungsmodell und kein Validierungsberichtmodell verifiziert. | Entwurf des Validierungsmodells erstellen und maschinenlesbare Berichtsemantiken sowie Testvorrichtungen veröffentlichen. |
| `OMI-SPEC-190` | Explorativ | Der Workspace-Code definiert Rollen, Berechtigungen, Mitglieder, Einladungen sowie die Rollen von Gutachtern und Übersetzern mit lokaler Speicherung. | Erstellen Sie die Spezifikation; fügen Sie servergestützte Autorisierung, auf Manuskripte bezogene Berechtigungen, Nachvollziehbarkeit und Konformitätstests hinzu. |

### 7.2 Wissenschaftlicher Arbeitsablauf, Literaturangaben und Veröffentlichung

| Kennung | Status des Studios | Bestätigte Belege | Größte Lücke vor Erreichen eines höheren Status |
|---|---|---|---|
| `OMI-SPEC-200` | Explorativ | Zu den Rollen im Arbeitsbereich gehören „Prüfer“, und Mitgliedern kann das Anlegen von Anmerkungen gestattet werden. | Prüfobjekte, Zuweisungen, Durchgänge, Status, Entscheidungen, Vertraulichkeit, Offenlegung der Identität und Ereignisverlauf. |
| `OMI-SPEC-210` | Teilweise | `OmiCitation` sowie das Zitierarray des Manuskripts stellen Zitierkennungen, Bezeichnungen, Quellentypen und Datumsangaben dar. | Trennung von Zitiervorkommen und bibliografischen Datensätzen; Verankerung von Vorkommen und Definition einer darstellungsunabhängigen Semantik. |
| `OMI-SPEC-220` | Explorativ | Der aktuelle Zitationstyp enthält eine kleine Auswahl datensatzähnlicher Felder. | Eindeutige bibliografische Datensatz-ID, Mitwirkende, Titel, Container, Identifikatoren, Herkunft, Zusammenführung und Validierung. |
| `OMI-SPEC-221` | Noch nicht begonnen | Es wurde keine Integration einer Referenzbibliothek auf Manuskript-Ebene oder eines externen Registers überprüft. | Verhalten in Bezug auf Bibliotheksmitgliedschaft, Wiederverwendung von Datensätzen, Abfrage, Abgleich, Zwischenspeicherung, Provenienz und Deduplizierung. |
| `OMI-SPEC-230` | Noch nicht begonnen | Der Alpha-Editor kann Manuskriptdaten bearbeiten und exportieren, es wurde jedoch keine auf Spezifikationen abgestimmte Publikationspipeline verifiziert. | Publikationsaufträge, Profile, Transformationen, Herkunftsnachweis der Ausgabe, Fehlerbehandlung und Erhaltung der semantischen Quelle. |
| `OMI-SPEC-240` | Noch nicht begonnen | Es wurde keine Deklaration für ein Rendering- oder Veröffentlichungsprofil überprüft. | Erstellen Sie einen Entwurf der Spezifikation und definieren Sie die Profilidentität, Anforderungen, Vererbungen, Ausgabebeschränkungen und Validierung. |

### 7.3 Plattform, Austausch und Konformität

| Kennung | Status des Studios | Bestätigte Belege | Größte Lücke vor Erreichen eines höheren Status |
|---|---|---|---|
| `OMI-SPEC-300` | Noch nicht gestartet | Es wurde kein Plugin-Manifest, keine ErweiterungsAPI, keine Capability-Abgrenzung und kein Isolationsmechanismus überprüft. | Definieren und implementieren Sie die Plugin-Identität, den Lebenszyklus, die Berechtigungen, die Erweiterungspunkte, die Kompatibilität und die Fehlerbegrenzung. |
| `OMI-SPEC-310` | Noch nicht gestartet | Der aktuelle Alpha-Status betrifft in erster Linie die Client-Seite; es wurde keine Implementierung verifiziert, die die registrierte Plattform API beansprucht. | Versionierter API-Vertrag, Authentifizierung, Autorisierung, Ressourcen, Ereignisse, Fehler, Paginierung und Tests. |
| `OMI-SPEC-320` | Teilweise | Das Studio exportiert „`.omi.json`“ als „`application/vnd.openmanuscript+json`“, übernimmt die Schema-URI „`0.1`“ des Vorgängers, lässt das veraltete eingebettete Feld „`authors`“ in kanonischen Exporten weg und fügt eine portierbare Revisionshistorie hinzu. | Übernahme des „`0.2.0`“-Umschlags und -Schemas; Implementierung von Versionsaushandlung, Erkennung doppelter Elemente, mehrstufiger Validierung, Beibehaltung unbekannter Felder sowie Migrations- und Verlustberichterstattung; Zuordnung des Verhaltens zu `REQ-FMT-*`. |
| `OMI-SPEC-330` | Noch nicht gestartet | Es wurde kein Containerpaket, Manifest, Asset-Graph, Integritätsdatensatz oder Verpackungs-WorkOMIverifiziert. | Implementieren Sie das Paketlayout, das Manifest, die Medienverarbeitung, Prüfsummen, Signaturen, die Sicherheit beim Entpacken und die Aufbewahrungsregeln. |
| `OMI-SPEC-340` | Explorativ | Es gibt Möglichkeiten zum Export eines Manuskripts JSON sowie zur Migration von Identitäten und Versionshistorien; eine allgemeine Import-Benutzeroberfläche oder Round-Trip-Nachweise wurden nicht überprüft. | Die Spezifikation verfassen; Import, Export, Zuordnung, Verlustberichte, den Umgang mit nicht unterstützten Inhalten und Round-Trip-Fixtures hinzufügen. |
| `OMI-SPEC-350` | Noch nicht gestartet | Es wurde keine Funktionsfähigkeitserklärung, kein Format für Funktionsfähigkeitsangaben und kein Konformitätsprüfprogramm verifiziert. | Definieren Sie Konformitätsklassen, Funktionsfähigkeitsangaben, Testmanifeste, Ergebnisberichte und Regeln zur Überprüfung von Funktionsfähigkeitsangaben. |

## 8. Übergreifende Ergebnisse und bekannte Abweichungen

### 8.1 Migration der Spezifikationsvorlage

`OMI-SPEC-150` und `OMI-SPEC-160` wurden direkt aus der kanonischen Spezifikationsvorlage erstellt. `OMI-SPEC-320` wurde in der Version `0.2.0` umfassend anhand dieser Vorlage überarbeitet. Die übrigen 14 aktiven Spezifikationen erfordern eine kontrollierte Migration, bei der permanente Identifikatoren, kanonische Pfade und Änderungshistorien beibehalten werden, während gleichzeitig die erforderlichen Metadaten- und Belegabschnitte hinzugefügt werden.

### 8.2 Schemaentwurf und Referenz für Platzhalter aus früheren Versionen

Das maßgebliche Schema-Entwurf für „`OMI-SPEC-320@0.2.0`“ ist unter `https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json` veröffentlicht. Der Manuskripttyp „Studio“ verweist weiterhin auf die frühere URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`. Da kein maßgebliches Schema für „`0.1`“ veröffentlicht wurde, bleibt diese frühere URI ein Platzhalter für die Implementierung und begründet keine Konformität mit „`0.2.0`“.

### 8.3 Implementierungsspezifische Modelle

Die Studio-Typen sind nützliche Entwurfsnachweise, stellen jedoch nicht automatisch das normative Datenmodell von „OMI“ dar. Abweichungen müssen dokumentiert und durch Spezifikationsänderungen oder Anpassungen bei der Implementierung behoben werden.

### 8.4 Beständigkeit der lokalen Zusammenarbeit

Der aktuelle Workspace-Speicher nutzt explizit die lokale Persistenz des Browsers und weist darauf hin, dass das Verhalten im Mehrbenutzerbetrieb in der Produktion authentifizierte Backend-APIen erfordert. Er demonstriert daher die Erkundung der Domäne und nicht die Einhaltung von durch den Server erzwungenen Regeln für die Zusammenarbeit.

### 8.5 Zitierweise und Trennung der Datensätze

Die derzeitige Darstellung von Zitaten in Studio enthält sowohl vorkommensbezogene als auch datensatzbezogene Informationen. Das Zitiermodell und das bibliografische Datensatzmodell erfordern eine klarere Trennung, bevor eine der beiden Implementierungen als vollständig angesehen werden kann.

### 8.6 Versionsverwaltung und Änderungshistorie

`OMI-SPEC-160` verfügt nun über eine erste portable Referenzimplementierung in Studio. Die zusammengeführte Implementierung bietet unveränderliche lineare Revisionen, eine Abstammungsstruktur mit einem einzigen Vorfahren, semantische Änderungssätze und Ereignisse, vollständige oder flache Snapshots, konservative Akteur-Zuordnung, nicht-destruktive Rückgängigmachungen, eine mehrsprachige Verlaufsansicht, portablen Verlaufsexport sowie gezielte Unit-Tests.

Die Implementierung ist weiterhin **unvollständig**. Vorhandene Editor-Steuerelemente führen Commits mit ihrer aktuellen Aktualisierungsgranularität durch, sodass die Bearbeitung von Rich-Text- und Textfeldern zu übermäßig feinkörnigen Revisionen führen kann. Das Batching im Arbeitszustand und explizite Checkpoint-Commits sind daher der nächste Implementierungsschritt, bevor das Verhalten bei Verzweigungen und Zusammenführungen in Angriff genommen wird. Tombstones, Status-Digests, stärkere Persistenz, explizite Zuordnung von „`REQ-VCH-*`“, kanonische Fixtures, Verzweigungen, Merge-Basen, Konflikte und formale Konformitätsnachweise stehen noch aus.

Die gezielten Unit-Tests allein reichen nicht aus, um die Implementierung in dieser Matrix als **getestet** einzustufen, da es noch keinen genehmigten Konformitäts-Fixture-Satz für „OMI“ und keinen auf die Anforderungen abgestimmten Konformitäts-Runner gibt.

### 8.7 Validierung und Konformität

Das Schema „OMI“ (SPEC-320), die anfänglichen Testdaten und der Referenzvalidator bilden die erste Basis für ausführbare Nachweise. Sie decken noch nicht alle Anforderungen von „`REQ-FMT-*`“, die Analyse von Bytes mit doppelten Namen, Ressourcenbeschränkungen, die Migration oder implementierungsübergreifende Roundtrips ab und stufen daher keine Implementierung als **getestet** oder **konform** ein.

Für die Weiterentwicklung jeder Spezifikation sind je nach Fall weiterhin folgende Schritte erforderlich:

- genaue normative Anforderungen;
- deklarierte Konformitätsklassen;
- kanonische Schemata und Fixtures, sofern zutreffend;
- ein Validator oder ein Konformitäts-Runner;
- maschinenlesbare Testergebnisse, die mit den genauen Versionen der Spezifikationen verknüpft sind.

## 9. Für den Statuswechsel erforderliche Nachweise

### 9.1 Von explorativ zu partiell

Ein Merkmal kann von **Explorativ** zu **Partiell** wechseln, wenn:

- es gibt eine eigenständige Implementierungskomponente;
- die Beziehung zu einer eingetragenen Spezifikation ist dokumentiert;
- die implementierte Teilmenge und die bekannten Auslassungen sind explizit angegeben;
- Das Verhalten lässt sich über Platzhalterdaten oder Namensähnlichkeiten hinaus nutzen.

### 9.2 Teilweise umgesetzt

Eine Funktion darf erst dann in den Status **Implementiert** verschoben werden, wenn:

- Die entsprechende Spezifikation ist ein aktives Dokument;
- In der Implementierung wird die genaue Spezifikationsversion angegeben;
- Die geltenden normativen Anforderungen werden dem Code oder dem dokumentierten Verhalten zugeordnet;
- die erforderlichen Fehlerbehandlungs- und Persistenzsemantiken sind vorhanden;
- bekannte Abweichungen werden erfasst;
- Es werden entsprechende maschinenlesbare Artefakte verwendet.

### 9.3 Von der Umsetzung bis zur Prüfung

Eine Funktion darf erst dann in den Status **Getestet** verschoben werden, wenn:

- Automatisierte Tests decken die geltenden normativen Anforderungen ab;
- Gültige und ungültige Fixtures werden versioniert;
- Die Testergebnisse sind reproduzierbar;
- Die Testsuite gibt die genauen Versionen der Spezifikationen und Artefakte an.

### 9.4 Auf Konformität geprüft

Eine Funktion darf erst dann in den Status **„Konform“** verschoben werden, wenn:

- es gibt eine zugelassene Konformitätsklasse;
- die offizielle oder anerkannte Konformitätssuite erfolgreich durchläuft;
- Zulässige optionale Verhaltensweisen und Einschränkungen werden angegeben;
- Die Angabe wird in einem überprüfbaren Umsetzungsbericht veröffentlicht.

## 10. Wartungsablauf

Diese Matrix sollte aktualisiert werden, sobald ein Pull-Request:

- erstellt oder reserviert eine Spezifikation;
- ändert den Lebenszyklusstatus oder die Version einer Spezifikation;
- ein Schema, ein Vokabular, einen Fixture-Satz, einen Validator oder eine Testsuite veröffentlicht oder ersetzt;
- erweitert die Unterstützung für Studio erheblich;
- erfasst eine eigenständige Implementierung;
- ändert eine bekannte Abweichung;
- veröffentlicht eine Konformitätserklärung.

Jede Aktualisierung, die eine Statusänderung zur Folge hat, sollte Belege wie beispielsweise folgende enthalten:

- ein kanonischer Dokument- oder Artefaktpfad;
- ein unveränderlicher Commit;
- ein Testlauf oder ein Ergebnisbericht;
- ein Implementierungsproblem oder ein Pull-Request;
- eine genaue Spezifikationsversion;
- eine deklarierte Konformitätsklasse.

Der Status muss herabgestuft werden, wenn die Evidenz veraltet, unvereinbar, zurückgezogen oder nicht mehr reproduzierbar ist.

Die vollständige Matrix sollte vor jeder Veröffentlichung von „OMI“ sowie bei jedem Übergang im Lebenszyklus zu den Status „Review Candidate“, „Implementation Candidate“ oder „Stable“ überprüft werden.

## 11. Programm zur sofortigen Beweisaufnahme

Die nächsten Maßnahmen zur Beweissicherung sollten in folgender Reihenfolge erfolgen:

1. die „Working-State-Batching“-Funktion und explizite Checkpoint-Commits in die Studio-Implementierung von „`OMI-SPEC-160`“ integrieren, damit durch normales Tippen keine übermäßig feinkörnigen festgeschriebenen Revisionen entstehen;
2. die implementierte Teilmenge des „Core Revision History“ den normativen Anforderungen des „`REQ-VCH-*`“ zuordnen und explizite Abweichungen dokumentieren;
3. Füge Tombstone und das vom ausgewählten Versionsprofil geforderte Verhalten hinsichtlich Integrität/Status-Digest hinzu;
4. `OMI-SPEC-320@0.2.0` in Studio einbinden und einen an die Anforderungen angepassten Parser, Serializer, eine Migration sowie Round-Trip-Nachweise hinzufügen;
5. Veröffentlichung kanonischer Identitäts- und Versionsschemata mit einer minimalen Anzahl gültiger und ungültiger Testdaten;
6. die verbleibenden aktiven Kernspezifikationen in die kanonische Spezifikationsvorlage zu migrieren;
7. das Validierungsmodell und das Format des Validierungsberichts festlegen;
8. automatisierte, spezifikationsübergreifende Schema- und Konformitätsprüfungen einrichten;
9. Entwurf „`OMI-SPEC-170`“, Übersetzungsmodell, das das Revisionsprotokoll als versionsbezogene Grundlage nutzt;
10. Erfassen Sie bekannte Abweichungen als verknüpfte Probleme und suchen Sie nach einem unabhängig entwickelten Parser, Validator oder Interoperabilitätsprototyp.

## 12. Änderungshistorie

| Version | Datum | Zusammenfassung |
|---|---|---|
| 0.3.0 | 05.09.2026 | Die „template-complete“-`OMI-SPEC-320@0.2.0` wurde erfasst, ebenso wie das erste kanonische Entwurfsschema für Manuskripte, erste Testdaten und der Referenzvalidator; die verbleibende Umsetzungslücke von Studio und die Gesamtzahlen der Belegangaben wurden aktualisiert. |
| 0.2.1 | 06.08.2026 | Die Studio-Unterstützung für „`OMI-SPEC-160`“ wurde nach der Zusammenführung des unveränderlichen linearen Revisionsledgers von „Exploratory“ auf „Partial“ angehoben; Nachweise für Revisionen, Änderungssätze, Snapshots, Rückgängigmachungen, Historienexporte und gezielte Tests wurden erfasst; die Priorität für die nächsten Nachweise wurde auf Batch-Verarbeitung im Arbeitszustand, Checkpoint-Commits und Anforderungszuordnung verschoben. |
| 0.2.0 | 06.08.2026 | „`OMI-SPEC-160`“ aktiviert, zwei Spezifikationen für aktuelle Vorlagen erfasst, die Studio-Nachweise nach der Integration von „`OMI-SPEC-150`“ aktualisiert und das Nachweisprogramm auf ein lineares Revisionsprotokoll umgestellt. |
| 0.1.1 | 06.08.2026 | „`OMI-SPEC-150`“ in der Bereitschaftsmatrix aktiviert, als erste Spezifikation unter Verwendung der aktuellen Vorlage erfasst und das Programm für unmittelbare Nachweise aktualisiert. |
| 0.1.0 | 06.08.2026 | Erste evidenzbasierte Matrix, die alle 23 registrierten Identifikatoren, aktuelle Spezifikationsartefakte, die Unterstützung durch „Open Manuscript Studio“, Validierung, Tests, Abweichungen und Regeln zur Statusweiterentwicklung abdeckt. |

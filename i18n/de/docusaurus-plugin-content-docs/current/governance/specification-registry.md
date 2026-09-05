---
title: OMI Spezifikationsregister
sidebar_label: Spezifikationsregister
sidebar_position: 60
description: Maßgebliches Verzeichnis der Identifikatoren, Titel, kanonischen Speicherorte, Lebenszyklusstatus und veralteten Aliase der „Open Manuscript Initiative“-Spezifikation.
---

# Open Manuscript Initiative Spezifikationsregister

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Dokumenttyp | Governance-Register |
| Status | Entwurf |
| Version | 0.3.1 |
| Normsprache | Englisch |
| Registrierungs-Namensraum | `OMI-SPEC` |
| Gilt für | Normative OMI Spezifikationen und reservierte Spezifikationskennungen |
| Zuletzt aktualisiert | 05.09.2026 |

## 1. Zweck

Dieses Dokument ist das maßgebliche Verzeichnis der Spezifikationskennungen von „Open Manuscript Initiative“.

Darin wird Folgendes definiert:

- die jeder „OMI“-Spezifikation zugewiesene permanente Kennung;
- der offizielle Titel der Spezifikation;
- der kanonische Quellpfad;
- den Lebenszyklusstatus und die aktuelle Version;
- die Kategorie „Architektur“;
- normative Abhängigkeiten;
- veraltete und vorläufige Bezeichner, die migriert werden müssen;
- die Regeln für die Zuweisung, Reservierung, Abkündigung, Ersetzung und Aufbewahrung von Kennungen.

Das Register wurde eingerichtet, da frühere Dokumente der „OMI“ nach verschiedenen vorläufigen Nummerierungsschemata erstellt wurden. Einige Kennungen wurden mehr als einem Dokument zugewiesen. Eine stabile Normensammlung kann keine mehrdeutigen Kennungen enthalten.

Sobald eine Kennung durch dieses Dokument registriert wurde, DARF sie NICHT einer anderen Spezifikation neu zugewiesen werden.

## 2. Zuständigkeit

Die im Abschnitt **„Canonical-Spezifikationsregister“** aufgeführten Bezeichner sind die offiziellen Bezeichner der „OMI“-Spezifikation.

Wenn ein anderes Dokument unter OMI hinsichtlich eines Identifikators, Titels, kanonischen Pfads oder Lebenszyklusstatus im Widerspruch zu diesem Register steht, ist dieses Register maßgebend, bis das widersprüchliche Dokument im Rahmen des üblichen Überprüfungsverfahrens korrigiert wurde.

Dieses Register macht nicht jede aufgeführte Spezifikation zu einer stabilen Version. Es weist Identitäten unabhängig vom Reifegrad zu. Eine Spezifikation kann den Status „Reserviert“, „Explorativ“, „Entwurf“, „Review Candidate“, „Implementation Candidate“, „Stabil“, „Veraltet“ oder „Ersetzt“ haben.

## 3. Syntax von Bezeichnern

Eine registrierte Spezifikationskennung gemäß „OMI“ hat folgende Form:

```text
OMI-SPEC-NNN
```

wobei `NNN` eine dreistellige Dezimalzahl ist.

Beispiele:

```text
OMI-SPEC-000
OMI-SPEC-120
OMI-SPEC-221
OMI-SPEC-350
```

Die numerische Komponente ist eine Kennung, keine Versionsnummer und kein Prioritätsrang.

Eine Spezifikationsversion wird separat deklariert:

```text
OMI-SPEC-210, version 0.2.0
```

## 4. Nummerierungsstruktur

OMI verwendet kategoriebasierte Nummernkreise.

| Sortiment | Kategorie |
|---|---|
| `000–099` | Grundprinzipien und suitenübergreifende konstitutionelle Spezifikationen |
| `100–199` | Kernmodelle für Semantik, Identität, Dokumente, Annotation, Validierung und Zusammenarbeit |
| `200–299` | Modelle für wissenschaftliche Arbeitsabläufe, Bibliografie, Zitierung, Begutachtung, Darstellung und Veröffentlichung |
| `300–399` | Plattform, Erweiterbarkeit, API, Paketierung, Austausch, Import/Export und Konformitätsspezifikationen |
| `400–899` | Reserviert für zukünftige Spezifikationsfamilien von „OMI“ |
| `900–999` | Für künftige experimentelle Zuteilungsrichtlinien reserviert; nicht für die einseitige Nutzung verfügbar |

Die Nummern müssen bewusst nicht fortlaufend sein. In entsprechenden Spezifikationen können benachbarte Nummern oder eine lokale Unterserie verwendet werden.

Beispiel:

- `OMI-SPEC-220` definiert bibliografische Datensätze;
- `OMI-SPEC-221` legt die Interaktion zwischen Manuskript-Referenzbibliotheken und dem Register fest.

## 5. Registrierungsstatus

Ein Registrierungseintrag kann einen der folgenden Zuordnungszustände aufweisen.

### Reserviert

Die Kennung und der Titel wurden zugewiesen, doch das kanonische Spezifikationsdokument wurde noch nicht erstellt oder als Entwurf angenommen.

Ein reservierter Bezeichner DARF NICHT einem anderen Subjekt zugewiesen werden.

### Aktiv

Es gibt ein kanonisches Spezifikationsdokument, das in den Lebenszyklus von „OMI“ eingebunden ist.

Der Lebenszyklusstatus wird separat erfasst.

### Veraltet

Die Spezifikation gilt weiterhin für bestehende Implementierungen, wird jedoch für neue Projekte nicht empfohlen.

### Ersetzt

Ein benannter Nachfolger ersetzt die Spezifikation offiziell.

### Zurückgezogen

Die Entwicklung wurde beendet, bevor die Spezifikation den Status „Stable“ erreichte. Der Bezeichner bleibt dauerhaft für die Wiederverwendung gesperrt.

## 6. Register für kanonische Spezifikationen

### 6.1 Grundlagen und zentrale semantische Modelle

| Kennung | Offizieller Titel | Zuweisung | Lebenszyklus | Version | Kanonischer Pfad |
|---|---|---|---|---|---|
| `OMI-SPEC-000` | Grundprinzipien | Aktiv | Entwurf | 0.1.0 | `docs/foundations/core-principles.md` |
| `OMI-SPEC-100` | Dokumentmodell | Aktiv | Entwurf | 0.1.0 | `docs/specifications/document-model.md` |
| `OMI-SPEC-110` | Anchor-Modell | Aktiv | Entwurf | 0.1.0 | `docs/specifications/anchor-model.md` |
| `OMI-SPEC-120` | Scholarly Object Model | Aktiv | Entwurf | 0.1.0 | `docs/specifications/core/scholarly-object-model.md` |
| `OMI-SPEC-130` | Annotationsmodell | Aktiv | Entwurf | 0.2.0 | `docs/specifications/annotation-model.md` |
| `OMI-SPEC-140` | Metadatenmodell | Aktiv | Entwurf | 0.1.0 | `docs/specifications/metadata-model.md` |
| `OMI-SPEC-150` | Identitäts- und Mitwirkermodell | Aktiv | Entwurf | 0.1.0 | `docs/specifications/identity-contributor-model.md` |
| `OMI-SPEC-160` | Versionsverwaltung und Änderungsmodell | Aktiv | Entwurf | 0.1.0 | `docs/specifications/versioning-change-model.md` |
| `OMI-SPEC-170` | Übersetzungsmodell | Reserviert | — | — | `docs/specifications/translation-model.md` |
| `OMI-SPEC-180` | Validierungsmodell | Reserviert | — | — | `docs/specifications/validation-model.md` |
| `OMI-SPEC-190` | Modell für Zusammenarbeit und Berechtigungen | Reserviert | — | — | `docs/specifications/collaboration-permission-model.md` |

### 6.2 Wissenschaftlicher Arbeitsablauf, Literaturangaben und Veröffentlichung

| Kennung | Offizieller Titel | Zuweisung | Lebenszyklus | Version | Kanonischer Pfad |
|---|---|---|---|---|---|
| `OMI-SPEC-200` | Testversion | Aktiv | Entwurf | 0.1.0 | `docs/specifications/review-model.md` |
| `OMI-SPEC-210` | Zitiermodell | Aktiv | Entwurf | 0.2.0 | `docs/specifications/citation-model.md` |
| `OMI-SPEC-220` | Modell für bibliografische Datensätze | Aktiv | Entwurf | 0.1.0 | `docs/specifications/bibliographic-record-model.md` |
| `OMI-SPEC-221` | Architektur für Referenzbibliothek und Registrierungsstelle | Aktiv | Entwurf | 0.1.0 | `docs/specifications/reference-library-registry.md` |
| `OMI-SPEC-230` | Veröffentlichungsmodell | Aktiv | Entwurf | 0.1.0 | `docs/specifications/publishing-model.md` |
| `OMI-SPEC-240` | Modell für Darstellung und Veröffentlichung | Reserviert | — | — | `docs/specifications/rendering-publication-profile-model.md` |

### 6.3 Plattform, Austausch und Konformität

| Kennung | Offizieller Titel | Zuweisung | Lebenszyklus | Version | Kanonischer Pfad |
|---|---|---|---|---|---|
| `OMI-SPEC-300` | Plugin-Architektur | Aktiv | Entwurf | 0.1.0 | `docs/specifications/plugin-architecture.md` |
| `OMI-SPEC-310` | Plattform API | Aktiv | Entwurf | 0.1.0 | `docs/specifications/api.md` |
| `OMI-SPEC-320` | Dateiformat | Aktiv | Entwurf | 0.2.0 | `docs/specifications/file-format.md` |
| `OMI-SPEC-330` | Container-Architektur | Aktiv | Entwurf | 0.1.0 | `docs/specifications/container-architecture.md` |
| `OMI-SPEC-340` | Import- und Exportmodell | Reserviert | — | — | `docs/specifications/import-export-model.md` |
| `OMI-SPEC-350` | Funktions- und Konformitätsmodell | Reserviert | — | — | `docs/specifications/capability-conformance-model.md` |

## 7. Abhängigkeitsregister

Die Abhängigkeitsliste enthält die direkten normativen Abhängigkeiten, die für die kanonische Spezifikationsarchitektur erwartet werden. Ein Entwurf kann diese Abhängigkeiten noch präzisieren, bevor er den Status „Review Candidate“ erreicht.

| Bezeichner | Direkte Abhängigkeiten |
|---|---|
| `OMI-SPEC-000` | Keine |
| `OMI-SPEC-100` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-110` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-120` |
| `OMI-SPEC-120` | `OMI-SPEC-000` |
| `OMI-SPEC-130` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120` |
| `OMI-SPEC-140` | `OMI-SPEC-000`, `OMI-SPEC-120` |
| `OMI-SPEC-150` | `OMI-SPEC-120`, `OMI-SPEC-140` |
| `OMI-SPEC-160` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-170` | `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-180` | `OMI-SPEC-000`, `OMI-SPEC-100`, `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-130`, `OMI-SPEC-140` |
| `OMI-SPEC-190` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-150`, `OMI-SPEC-160` |
| `OMI-SPEC-200` | `OMI-SPEC-110`, `OMI-SPEC-130`, `OMI-SPEC-150`, `OMI-SPEC-160`, `OMI-SPEC-190` |
| `OMI-SPEC-210` | `OMI-SPEC-110`, `OMI-SPEC-120`, `OMI-SPEC-220`, `OMI-SPEC-221` |
| `OMI-SPEC-220` | `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-150` |
| `OMI-SPEC-221` | `OMI-SPEC-140`, `OMI-SPEC-210`, `OMI-SPEC-220` |
| `OMI-SPEC-230` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-210`, `OMI-SPEC-240`, `OMI-SPEC-320` |
| `OMI-SPEC-240` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-210` |
| `OMI-SPEC-300` | `OMI-SPEC-000`, `OMI-SPEC-350` |
| `OMI-SPEC-310` | `OMI-SPEC-100`, `OMI-SPEC-150`, `OMI-SPEC-190`, `OMI-SPEC-350` |
| `OMI-SPEC-320` | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| `OMI-SPEC-330` | `OMI-SPEC-320` |
| `OMI-SPEC-340` | `OMI-SPEC-100`, `OMI-SPEC-140`, `OMI-SPEC-180`, `OMI-SPEC-220`, `OMI-SPEC-320` |
| `OMI-SPEC-350` | `OMI-SPEC-000`, `OMI-SPEC-300`, `OMI-SPEC-310`, `OMI-SPEC-320`, `OMI-SPEC-340` |

Bei der Implementierung einer bestimmten veröffentlichten Version DÜRFEN Abhängigkeiten NICHT ausschließlich aus dieser Tabelle abgeleitet werden. Die genaue versionsspezifische Spezifikation und das Suite-Manifest regeln die Konformität der veröffentlichten Version.

## 8. Migration von Alt-Identifikatoren

### 8.1 Grund für die Migration

Vor der Einführung dieser Registrierung wurden in der Dokumentation zu „OMI“ zwei inkompatible Nummerierungsverfahren verwendet:

1. eine kurze, aufeinanderfolgende Reihe wie beispielsweise `OMI-SPEC-001` bis `OMI-SPEC-012`;
2. eine nach Kategorien gegliederte Reihe wie „`OMI-SPEC-100`“, „`OMI-SPEC-110`“ und „`OMI-SPEC-120`“.

Die kurze Sequenz enthält Kollisionen:

- `OMI-SPEC-003` wurde sowohl vom Anker-Modell als auch vom Annotationsmodell verwendet;
- `OMI-SPEC-006` wurde sowohl vom Bewertungsmodell als auch vom bibliografischen Datensatzmodell verwendet;
- `OMI-SPEC-007` wurde sowohl vom Publishing-Modell als auch von der Referenzbibliothek und der Registrierungsarchitektur verwendet.

Ein kollidierender Bezeichner kann nicht dauerhaft sein, da er keine eindeutige Spezifikation identifiziert.

Die kategorienbasierte Serie wird daher als kanonisches Registrierungssystem übernommen. Sie ist bereits in der Architekturkarte „OMI“ und im kanonischen Kernmodell für wissenschaftliche Objekte enthalten.

### 8.2 Alte Alias-Tabelle

Die folgenden Bezeichner sind historische oder vorläufige Aliase. Sie DÜRFEN NICHT für neue normative Verweise verwendet werden.

| Veraltete oder vorläufige Kennung | Historische Verwendung | Kanonische Kennung | Migrationsmaßnahme |
|---|---|---|---|
| `OMI-SPEC-001` | Dokumentmodell | `OMI-SPEC-100` | Bezeichner ersetzen; alte URL nach Möglichkeit beibehalten |
| `OMI-SPEC-002` | Umgangssprachlich als „Anchor-Modell“ bezeichnet | `OMI-SPEC-110` | Abhängigkeitsverweise ersetzen |
| `OMI-SPEC-003` | Anker-Modell | `OMI-SPEC-110` | Kennung ersetzen |
| `OMI-SPEC-003` | Annotationsmodell | `OMI-SPEC-130` | Kennung ersetzen |
| `OMI-SPEC-004` | Metadatenmodell | `OMI-SPEC-140` | Kennung ersetzen |
| `OMI-SPEC-005` | Zitiermodell | `OMI-SPEC-210` | Kennung ersetzen |
| `OMI-SPEC-006` | Modell anzeigen | `OMI-SPEC-200` | Kennung ersetzen |
| `OMI-SPEC-006` | Modell für bibliografische Datensätze | `OMI-SPEC-220` | Kennung ersetzen |
| `OMI-SPEC-007` | Veröffentlichungsmodell | `OMI-SPEC-230` | Kennung ersetzen |
| `OMI-SPEC-007` | Referenzbibliothek und Registrierungsarchitektur | `OMI-SPEC-221` | Kennung ersetzen |
| `OMI-SPEC-008` | Plugin-Architektur | `OMI-SPEC-300` | Bezeichner ersetzen |
| `OMI-SPEC-009` | Frühere wissenschaftliche Objektmodelle | `OMI-SPEC-120` | Inhalte in einem kanonischen Dokument zusammenführen |
| `OMI-SPEC-010` | Plattform API | `OMI-SPEC-310` | Kennung ersetzen |
| `OMI-SPEC-011` | Dateiformat | `OMI-SPEC-320` | Bezeichner ersetzen |
| `OMI-SPEC-012` | Container-Architektur | `OMI-SPEC-330` | Kennung ersetzen |

Die alten Nummern wurden nie durch ein anerkanntes Register geschützt. Es handelt sich daher nicht um registrierte permanente Kennungen, und sie DÜRFEN innerhalb der kurzen Nummernfolge NICHT neu vergeben werden.

### 8.3 Anforderungen an die Migration

Die Phase der Dokumentationsüberarbeitung MUSS:

- die Kennung „visible“ in jeder aktiven Spezifikation aktualisieren;
- Abhängigkeitsangaben und Querverweise aktualisieren;
- die doppelten Dokumente zum „Scholarly Object Model“ unter `OMI-SPEC-120` zusammenführen;
- Weiterleitungen oder Migrationshinweise für ersetzte öffentliche Pfade nach Möglichkeit beibehalten;
- Vermeiden Sie es, eine veraltete Kennung als alternative permanente Kennung anzugeben;
- die Migration im Änderungsverlauf jedes betroffenen Dokuments protokollieren;
- Schemas, Beispiele, Manifeste und Konformitätserklärungen aktualisieren, sobald sie registrierte Identifikatoren verwenden.

## 9. Das kanonische wissenschaftliche Objektmodell

`OMI-SPEC-120` wird dem Scholarly Object Model unter folgender Adresse zugeordnet:

```text
docs/specifications/core/scholarly-object-model.md
```

Das separate Dokument unter:

```text
docs/specifications/scholarly-object-model.md
```

ist ein älteres Duplikat, das mit der vorläufigen Kennung „`OMI-SPEC-009`“ verknüpft ist.

Der nützliche Inhalt muss überprüft und in das kanonische Dokument „`OMI-SPEC-120`“ integriert werden. Nach der Konsolidierung sollte der alte Pfad zu einer Weiterleitung oder einem expliziten Hinweis auf die Verschiebung bzw. Ablösung werden und nicht als zweite normative Spezifikation bestehen bleiben.

## 10. Regeln für kanonische Pfade

Ein kanonischer Pfad identifiziert das gepflegte Quelldokument im Repository.

Das Ändern eines kanonischen Pfads hat keine Auswirkungen auf den registrierten Bezeichner. Eine Pfadänderung MUSS, sofern technisch machbar, Folgendes umfassen:

- eine HTTP-Weiterleitung von der zuvor veröffentlichten Route;
- eine Mitteilung zur Repository-Migration;
- interne Links aktualisiert;
- aktualisierte Registrierungsmetadaten;
- Aufbewahrung des Versionsverlaufs.

Ein Dateipfad DARF NICHT als dauerhafte Kennung der Spezifikation betrachtet werden.

## 11. Regeln für Titel

Ein registrierter Titel ist die offizielle, für Menschen lesbare Bezeichnung der Spezifikation.

Eine kompatible Änderung des redaktionellen Titels KANN erfolgen, ohne dass die Kennung geändert wird, sofern der Geltungsbereich und das normative Thema unverändert bleiben.

Ein Vorschlag, der den Gegenstand so wesentlich verändert, dass bestehende Verweise irreführend würden, erfordert eine neue Kennung.

Historische Titel SOLLTEN als Aliase erfasst werden, wenn sie in öffentlichen Veröffentlichungen oder externen Zitaten vorkommen.

## 12. Felder für Version und Lebenszyklus

Jede Active-Spezifikation MUSS beides deklarieren:

- eine semantische Version;
- ein Lebenszyklusstatus.

Beispiele:

```text
OMI-SPEC-210
Version: 0.2.0
Status: Draft
```

Version und Lebenszyklusstatus sind voneinander unabhängig. Die Registrierungsstelle DARF den einen nicht aus dem anderen ableiten.

Die Statuswerte sind im Dokument „Lebenszyklus der Spezifikation“ geregelt. Die Versionsschritte sind in der Versionsrichtlinie geregelt.

## 13. Vorbehaltene Spezifikationen

Ein „Reserved“-Eintrag vermittelt die architektonische Absicht, schafft jedoch keine normativen Anforderungen.

Eine „Reservierte“ Spezifikation wird erst dann „Aktiv“, wenn:

1. ein kanonisches Dokument wird erstellt;
2. sein Geltungsbereich entspricht dem eingetragenen Titel oder eine genehmigte Registeränderung ändert den Titel;
3. die erforderlichen Metadaten sind vorhanden;
4. das Dokument erreicht mindestens den Status „Entwurf“;
5. Der Registrierungseintrag wird im Rahmen der Überprüfung aktualisiert.

Implementierungen DÜRFEN KEINE Konformität mit einer reservierten Spezifikation beanspruchen.

## 14. Zuteilungsverfahren

Ein Vorschlag für einen neuen Bezeichner MUSS Folgendes enthalten:

- vorgeschlagener Titel;
- Problemstellung und Umfang;
- vorgeschlagener Nummernbereich und Kennung;
- Bezug zu bestehenden Spezifikationen;
- erwartete normative Abhängigkeiten;
- Grund, warum dieses Thema einer gesonderten Spezifikation bedarf;
- vorgeschlagener Redakteur oder Betreuer;
- anfänglicher Lebenszyklusstatus;
- erwartete Schemata, Profile, Registrierungen oder Testartefakte.

Die Zuweisung SOLLTE nur dann erfolgen, wenn der Geltungsbereich ausreichend klar abgegrenzt ist, um stabil zu bleiben.

Eine Kennung KANN bereits reserviert werden, bevor der vollständige Entwurf vorliegt, wenn eine frühzeitige Zuweisung Kollisionen verhindert oder die parallele Arbeit koordiniert.

## 15. Verbot der einseitigen Zuteilung

Autoren dürfen KEINE neuen normativen Identifikatoren vom Typ „`OMI-SPEC-NNN`“ erstellen, indem sie diese lediglich an einen Dokumenttitel oder Dateinamen anhängen.

Ein neuer Identifikator gilt erst dann als offiziell, wenn er im Rahmen des anerkannten Einreichungs- und Begutachtungsverfahrens in dieses Register aufgenommen wurde.

Nicht registrierte Nummern, die in Zweigen, Ausgaben, Beispielen oder experimentellen Dokumenten erscheinen, haben keinen dauerhaften Status.

## 16. Beständigkeit von Identifikatoren

Nach der Registrierung MUSS eine Kennung weiterhin derselben konzeptionellen Spezifikationslinie zugeordnet bleiben.

Die Kennung DARF sich aus folgenden Gründen NICHT ändern:

- eine Titelkorrektur;
- eine Dateiverschiebung;
- eine Neugestaltung der Seitenleiste;
- Übersetzung;
- eine Neben- oder Patch-Version;
- ein neuer Redakteur;
- Veraltungshinweis;
- Ersetzung;
- Rückzug.

Eine zurückgezogene oder abgelöste Kennung bleibt dauerhaft reserviert.

## 17. Aufteilen und Zusammenführen von Spezifikationen

### 17.1 Aufteilung

Wenn eine Spezifikation in mehrere unabhängig voneinander versionierte Spezifikationen aufgeteilt wird:

- Die ursprüngliche Kennung verbleibt bei der Hauptlinie oder wird ersetzt;
- Jede neu unabhängige Spezifikation erhält eine neue Kennung;
- Das Register erfasst die Beziehung;
- In der Migrationsanleitung ist angegeben, welche Anforderungen verschoben wurden.

### 17.2 Zusammenführen

Wenn mehrere Spezifikationen zusammengeführt werden:

- Ein Bezeichner KANN beibehalten werden, wenn seine konzeptionelle Herkunft eindeutig überwiegt;
- andere Kennungen werden ersetzt;
- Es SOLLTE ein neuer Bezeichner zugewiesen werden, wenn kein bestehender Bezeichner den zusammengeführten Geltungsbereich zutreffend beschreibt;
- Ersetzte Bezeichner DÜRFEN NICHT wiederverwendet werden.

## 18. Vermerke zu veralteten und abgelösten Funktionen

Ein veralteter oder ersetzter Registrierungseintrag MUSS folgende Angabe enthalten:

- betroffene Versionen;
- Datum des Inkrafttretens oder der Veröffentlichung;
- Nachfolgekennung, sofern vorhanden;
- Migrationsberatung;
- Support und Archivierungsstatus.

Die kanonische Seite MUSS weiterhin erreichbar sein oder auf eine Archiv-Startseite weiterleiten.

## 19. Beziehungen zwischen Schema, Profil und Register

Ein „OMI“-Spezifikationskennzeichen identifiziert eine Prosaspezifikation. Es identifiziert nicht automatisch:

- ein „JSON“-Schema;
- ein Publikationsprofil;
- ein Register für kontrollierte Vokabulare;
- ein Beispielkorpus;
- eine Konformitäts-Testsuite;
- eine Software-Implementierung.

Diese Artefakte erfordern gemäß den geltenden Governance-Regeln für die „OMI“ eigene Identifikatoren oder versionierte Namen.

Ein Registrierungseintrag SOLLTE auf solche Artefakte verweisen, sofern diese vorhanden sind.

## 20. Stand der Umsetzung

Das Register erfasst die Spezifikation, Identität und Reife, nicht die Konformität der Umsetzung.

Die evidenzbasierte „[OMI Implementation Status Matrix](./implementation-status-matrix.md)“ erfasst für jeden registrierten Bezeichner Angaben zur Implementierung, zum Schema, zu Testfällen, zu Validatoren, zu Tests sowie zu unabhängigen Implementierungsnachweisen.

Das Vorhandensein von Code mit ähnlichem Namen in Open Manuscript Studio ist kein ausreichender Nachweis für die Konformität mit der Spezifikation.

## 21. Amtliche Übersetzungen

Offizielle Übersetzungen verwenden dieselbe registrierte Kennung wie die englische Vorlage.

Beispiel:

```text
OMI-SPEC-210 — Citation Model
English source version: 0.2.0
Hungarian translation revision: hu-1
```

Eine Übersetzung DARF KEINE andere Nummer unter `OMI-SPEC` erhalten.

Die Übersetzungsmetadaten müssen die genaue normative Quellversion und den Synchronisationsstatus angeben.

## 22. Verweise auf eingetragene Spezifikationen

Eine normative Referenz SOLLTE beim ersten Vorkommen sowohl den Identifikator als auch den Titel verwenden:

```text
OMI-SPEC-210, Citation Model
```

Bei späteren Verweisen KANN der Bezeichner allein verwendet werden, sofern dies eindeutig ist.

Ein Verweis auf ein bestimmtes Konformitätsziel MUSS die Version enthalten:

```text
OMI-SPEC-210 version 0.2.0
```

Verweise DÜRFEN KEINEN veralteten Alias mehr verwenden, nachdem das betroffene Dokument migriert wurde.

## 23. Maschinell lesbares Register

Ein zukünftiges maschinenlesbares Register SOLLTE auf der Grundlage dieses Dokuments erstellt oder anhand dieses Dokuments validiert werden.

Ein Datensatz soll Felder enthalten, die folgenden entsprechen:

```yaml
identifier: OMI-SPEC-210
title: Citation Model
allocation: active
status: draft
version: 0.2.0
canonicalPath: docs/specifications/citation-model.md
category: scholarly-references
dependsOn:
  - OMI-SPEC-110
  - OMI-SPEC-120
  - OMI-SPEC-220
  - OMI-SPEC-221
legacyAliases:
  - OMI-SPEC-005
implementationStatus: see-implementation-matrix
```

Die maschinenlesbare Form darf keinesfalls stillschweigend von der geprüften Registrierung abweichen. Die automatisierte Validierung sollte letztendlich Folgendes überprüfen:

- Eindeutigkeit der Kennung;
- Eindeutigkeit des kanonischen Pfads;
- Vorhandensein einer Abhängigkeit;
- Fehlen von Abhängigkeitszyklen an Stellen, an denen Zyklen unzulässig sind;
- gültige Lebenszykluswerte;
- gültige semantische Versionen;
- Kollisionen bei Legacy-Aliasen;
- Übereinstimmung mit den Vorbemerkungen zur Spezifikation.

## 24. Governance-Dokumente außerhalb des Namensraums „OMI-SPEC“

Die folgenden Dokumente regeln die Spezifikationssuite, erhalten jedoch selbst keine „`OMI-SPEC`“-Kennungen:

| Dokument | Kanonischer Pfad |
|---|---|
| Charta von „Open Manuscript Initiative“ | `docs/governance/charter.md` |
| Roadmap für „OMI“ 1.0 | `docs/governance/roadmap-to-omi-1.0.md` |
| Architektur-Audit von OMI | `docs/governance/architecture-audit.md` |
| Lebenszyklus einer Spezifikation | `docs/governance/specification-lifecycle.md` |
| Richtlinien zur Versionsverwaltung | `docs/governance/versioning-policy.md` |
| Leitfaden zur Spezifikationsgestaltung | `docs/governance/style-guide.md` |
| Begriffe und Definitionen | `docs/governance/terminology.md` |
| Spezifikationsregister | `docs/governance/specification-registry.md` |
| Spezifikationsvorlage | `docs/governance/specification-template.md` |
| Matrix zum Implementierungsstatus | `docs/governance/implementation-status-matrix.md` |

Diese Governance-Dokumente können normative Projektanforderungen enthalten, ohne dabei zu datenmodellbezogenen Spezifikationen für die Implementierer zu werden.

## 25. Anfängliche Migrationssequenz

Nach der Einführung dieses Registers lautet die empfohlene Migrationsreihenfolge wie folgt:

1. alle aktiven Spezifikationstitel und Metadaten auf registrierte Identifikatoren aktualisieren;
2. die beiden Dokumente zum „Scholarly Object Model“ unter `OMI-SPEC-120` zusammenführen;
3. Abhängigkeitsangaben und interne Verweise aktualisieren;
4. die Seitenleiste „Docusaurus“ entsprechend der registrierten Architektur neu strukturieren;
5. Erstellen Sie die verbleibenden „Reserved“-Kernspezifikationen in der Reihenfolge ihrer Abhängigkeiten;
6. eine maschinenlesbare Validierung des Handelsregisters einführen;
7. die Matrix zum Umsetzungsstatus pflegen;
8. Schemas, Beispiele und Konformitätstests an bestimmte Spezifikationsversionen binden.

## 26. Änderungskontrolle

Änderungen an dieser Registrierungsdatenbank werden wie folgt klassifiziert.

### Änderung im Patch

- Korrektur eines Tippfehlers im Pfad;
- Korrektur nicht normativer Formulierungen;
- Synchronisierung eines bereits genehmigten Status oder einer bereits genehmigten Version;
- Einen defekten Link reparieren.

### Geringfügige Änderung

- Reservierung einer neuen Kennung;
- einen reservierten Eintrag aktivieren;
- Hinzufügen eines dokumentierten Alias;
- Hinzufügen optionaler Registrierungsmetadaten;
- Erfassung einer kompatiblen Titelverfeinerung.

### Wesentliche Änderung

- Änderung der Zuweisungsarchitektur;
- Neuzuweisung einer registrierten Kennung;
- Änderung der Regeln zur Beständigkeit von Bezeichnern;
- eine inkompatible Änderung an der Bedeutung von Registereinträgen vornehmen.

Die Neuzuweisung einer bereits registrierten Kennung ist selbst bei einer Hauptversionsänderung der Registrierungsdatenbank untersagt. Eine konzeptionelle Ersetzung erfordert eine neue Kennung und einen Ablöseeintrag.

## 27. Auswirkungen der Adoption

Die Einführung dieses Registers hat folgende unmittelbare Auswirkungen:

- Die kategoriebasierten dreistelligen Kennungen werden kanonisch;
- Die kurzen sequenziellen Bezeichner werden zu vorläufigen Aliasen aus früheren Zeiten;
- Kollisionen bei Identifikatoren werden aufgelöst, ohne dass mehrdeutige Zahlen wiederverwendet werden;
- `docs/specifications/core/scholarly-object-model.md` wird zur kanonischen Quelle von „`OMI-SPEC-120`“;
- Geplante Spezifikationen erhalten geschützte, reservierte Bezeichner;
- Bei der Erstellung künftiger Spezifikationen muss dieses Register herangezogen und aktualisiert werden.

Die Übernahme allein führt nicht dazu, dass der Lebenszyklusstatus einer Spezifikation auf „Stable“ gesetzt wird, und stellt keine Konformitätserklärung für die Implementierung dar.

## 28. Änderungshistorie

| Version | Datum | Zusammenfassung |
|---|---|---|
| 0.3.1 | 05.09.2026 | „Advanced`OMI-SPEC-320`“ (Dateiformat) wurde nach der vollständigen Neufassung der Vorlage und der Veröffentlichung des ersten kanonischen Manuskriptschemas sowie der Fixtures in die Entwurfsversion 0.2.0 überführt. |
| 0.3.0 | 06.08.2026 | „`OMI-SPEC-160`“, „Versioning“ und „Change Model“ als Entwurf in der Version 0.1.0 aktiviert. |
| 0.2.0 | 06.08.2026 | „`OMI-SPEC-150`“, „Identity“ und „Contributor Model“ als Entwurfsversion 0.1.0 freigegeben; Verknüpfung zur Implementierungsmatrix hergestellt und die Registrierung der Governance-Dokumente aktualisiert. |
| 0.1.0 | 06.08.2026 | Einrichtung der kanonischen Architektur für die Identifikatoren der „OMI“-Spezifikation sowie der ersten Registrierungsstelle. |

## 29. Zusammenfassung

Das „OMI“-Spezifikationsregister bietet ein dauerhaftes Identitätssystem für die gesamte Normenreihe.

Es behält die kategorienbasierte Architektur bei, die bereits in der Architekturkarte der „OMI“ verwendet wird, löst Konflikte bei vorläufigen Identifikatoren, reserviert Identifikatoren für fehlende Modelle, schützt Identifikatoren vor Wiederverwendung und schafft die Grundlage für zuverlässige Querverweise, Schemata, Versionen, Übersetzungen und Konformitätserklärungen.

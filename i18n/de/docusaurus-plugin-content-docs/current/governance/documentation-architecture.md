---
title: OMI Dokumentationsarchitektur
sidebar_label: Dokumentationsarchitektur
sidebar_position: 4
description: Legt die Informationsarchitektur, die Navigationsregeln, die standardmäßige Platzierung und die Wartungsanforderungen für die Dokumentationsreihe „Open Manuscript Initiative“ fest.
---

# Open Manuscript Initiative Dokumentationsarchitektur

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Dokumenttyp | Leitlinie zur Unternehmensführung |
| Status | Entwurf |
| Version | 0.1.0 |
| Normative Sprache | Englisch |
| Gilt für | Dokumentation, Spezifikationen, Governance-Dokumente, generierte Kategorieseiten und Übersetzungen der Website OMI |

## 1. Zweck

Dieses Dokument beschreibt die Informationsarchitektur der Dokumentationsreihe „Open Manuscript Initiative“.

Darin heißt es:

- die obersten Dokumentationskategorien;
- die kanonische Platzierung jedes aktiven Dokuments;
- die Beziehung zwischen konzeptionellen, normativen, umsetzungsbezogenen und governancebezogenen Aspekten;
- die Regeln, die von der Seitenleiste „Docusaurus“ verwendet werden;
- Verhalten der Kategorie-Landingpage;
- die Behandlung von Altseiten, veralteten Seiten und Seiten, die ausschließlich der Migration dienen;
- Anforderungen an die URL-Stabilität und die Lokalisierung;
- Kriterien für die Pflege und Überprüfung künftiger Änderungen an der Dokumentation.

Die Architektur der Dokumentation soll dazu dienen, den Standard „OMI“ für verschiedene Zielgruppen verständlich zu machen, ohne normative Inhalte zu duplizieren.

Zu diesen Zielgruppen gehören:

- Autoren und Herausgeber, die die Vision von „OMI“ bewerten;
- Mitwirkende an der Entwicklung von Normen und Spezifikationen;
- Entwickler, die kompatible Software erstellen;
- Verlage und Repositorien, die „OMI“-Workflows integrieren;
- Übersetzer, die die lokalisierte Dokumentation pflegen;
- Prüfer, die den Reifegrad und die Konformität von Spezifikationen bewerten.

## 2. Architektonische Grundsätze

Die Dokumentationsreihe „OMI“ orientiert sich an diesen Grundsätzen.

### 2.1 Ein kanonischer Ort

Jedes aktive Dokument MUSS über eine kanonische Quelldatei und einen kanonischen Speicherort in der Seitenleiste verfügen.

Ein Dokument KANN von anderen Seiten aus verlinkt werden, SOLLTE jedoch NICHT als doppelter Dokumenteneintrag in derselben Seitenleiste registriert werden.

Diese Regel verhindert:

- unklare Eigentumsverhältnisse;
- doppelte Wartungsarbeiten;
- uneinheitliche Navigationsbezeichnungen;
- widersprüchliche Übersetzungen;
- Docusaurus Fehler aufgrund doppelter Dokumente;
- Unklarheit darüber, welche Seite maßgeblich ist.

### 2.2 Architektur vor Chronologie

Die Dokumente sind nach ihrer architektonischen Funktion gruppiert, nicht nach dem Datum ihrer Erstellung.

Eine neu erstellte Grundspezifikation gehört zur Kategorie „Grundlagen“ oder „Kern-Semantikspezifikationen“, auch wenn sie nach einer Plattformspezifikation erstellt wurde.

### 2.3 Stabile öffentliche Routen

Bei der Überarbeitung der Dokumentation SOLLTEN etablierte öffentliche URLs nach Möglichkeit beibehalten werden.

Das Verschieben einer Quelldatei ist nicht erforderlich, nur um ihre Kategorie in der Seitenleiste zu ändern.

Wenn eine Route geändert werden muss, SOLLTE die alte Route weiterhin verfügbar bleiben über:

- eine Weiterleitung;
- eine Migrationsmitteilung;
- oder eine beibehaltene Altseite, die auf das kanonische Dokument verweist.

### 2.4 Trennung von normativem und erklärendem Material

In der Seitenleiste MUSS zwischen folgenden Punkten unterschieden werden:

- Vision und Ausrichtung;
- Grundbegriffe;
- normative semantische Spezifikationen;
- Workflow- und Veröffentlichungsspezifikationen;
- Plattform- und Börsenspezifikationen;
- Dokumente zu Governance und Normungsprozessen.

Konzeptionelle Einführungen DÜRFEN normative Spezifikationen NICHT stillschweigend ersetzen.

Normative Spezifikationen SOLLTEN ihre Abhängigkeiten und ihren Lebenszyklusstatus ausdrücklich angeben.

### 2.5 Vollständige Auffindbarkeit

Jedes aktive Dokument zur Spezifikation und Steuerung von „OMI“, das zur öffentlichen Begutachtung bestimmt ist, MUSS über die Hauptseitenleiste erreichbar sein.

Ältere Migrationsseiten, interne Notizen, generierte Artefakte und veraltete Entwürfe KÖNNEN außerhalb der Seitenleiste verbleiben.

### 2.6 Schrittweise Offenlegung

Die Navigation SOLLTE es den Lesern ermöglichen, von allgemeinen Konzepten zu detaillierten Anforderungen überzugehen.

Der erwartete Verlauf ist:

```text
Vision
  ↓
Architecture overview
  ↓
Foundational concepts
  ↓
Core semantic models
  ↓
Workflow and publishing models
  ↓
Platform and exchange specifications
  ↓
Governance and standards process
```

Die Leser sind nicht verpflichtet, dieser Reihenfolge zu folgen, doch die Reihenfolge SOLLTE die Abhängigkeitsstruktur verdeutlichen.

## 3. Navigationsstruktur auf oberster Ebene

Die Seitenleiste der Dokumentation zu „OMI“ enthält sechs Hauptkategorien.

```text
Introduction
Foundations
Core Semantic Specifications
Scholarly Workflow and Publishing
Platform and Exchange
Governance
```

Für jede Kategorie gibt es eine automatisch generierte Landingpage, auf der deren Zweck zusammengefasst und die dazugehörigen Dokumente aufgelistet sind.

## 4. Einleitung

In der Kategorie „Einführung“ wird erläutert, warum es OMI gibt und wie die Gesamtarchitektur aufgebaut ist.

Es enthält:

1. **Vision**
2. **Architekturübersicht**

Der Überblick über die Architektur wird durch das vorhandene Dokument „Architekturkarte“ bereitgestellt. Die Bezeichnung in der Seitenleiste KANN vereinfacht werden, ohne den Dokumenttitel oder den Quellpfad zu ändern.

Die Kategorie „Einleitung“ dient der Erläuterung. Sie enthält keine detaillierten Konformitätsanforderungen, es sei denn, ein einbezogenes Dokument erklärt den Inhalt ausdrücklich als normativ.

## 5. Grundlagen

Die Kategorie „Grundlagen“ enthält übergreifende Konzepte, die zum Verständnis der Spezifikationssuite erforderlich sind.

Es enthält:

1. **OMI-SPEC-000 — Grundprinzipien**
2. **OMI-SPEC-120 — Wissenschaftliches Objektmodell**
3. **Begriffe und Definitionen**

Das wissenschaftliche Objektmodell ist hier zu finden, da es die gemeinsame Abstraktion definiert, auf die sich die spezialisierten Modelle stützen.

„Terminologie und Definitionen“ hat in dieser Kategorie einen festgelegten Platz in der Seitenleiste. In Governance-Dokumenten und Spezifikationen SOLLTE auf diesen Eintrag verwiesen werden, anstatt ihn ein zweites Mal in der Seitenleiste aufzuführen.

## 6. Semantische Kernspezifikationen

Diese Kategorie enthält die wichtigsten Modelle, die die semantische Struktur eines Manuskripts unter OMI definieren.

Es enthält:

1. **OMI-SPEC-100 — Dokumentmodell**
2. **OMI-SPEC-110 — Anker-Modell**
3. **OMI-SPEC-130 — Annotationsmodell**
4. **OMI-SPEC-140 — Metadatenmodell**

Die Reihenfolge spiegelt die primäre Abhängigkeitsrichtung wider:

```text
Scholarly Object Model
        ↓
Document Model
        ↓
Anchor Model
        ↓
Annotation Model

Metadata Model applies across these layers.
```

Reservierte Spezifikationen wie das Identitäts- und Mitwirkermodell, das Versions- und Änderungsmodell, das Übersetzungsmodell, das Validierungsmodell sowie das Kooperations- und Berechtigungsmodell DÜRFEN NICHT als aktive Dokumente erscheinen, solange ihre kanonischen Dateien noch nicht vorliegen.

## 7. Wissenschaftlicher Arbeitsablauf und Veröffentlichung

Diese Kategorie enthält Spezifikationen, die wissenschaftliche Arbeiten abbilden, die an dem Manuskript oder im Zusammenhang damit durchgeführt wurden.

Es enthält:

1. **OMI-SPEC-200 — Testmodell**
2. **OMI-SPEC-210 — Zitiervorlage**
3. **OMI-SPEC-220 — Modell für bibliografische Datensätze**
4. **OMI-SPEC-221 — Referenzbibliothek und Registerarchitektur**
5. **OMI-SPEC-230 — Veröffentlichungsmodell**

Diese Kategorie vereint Aspekte des Workflows und der Veröffentlichung, da diese Spezifikationen auf den semantischen Modellen basieren und nicht die grundlegende Objektstruktur selbst definieren.

Innerhalb des Zitier-Subsystems:

- Das Zitiermodell definiert einzelne Zitiervorkommen;
- Das bibliografische Datensatzmodell definiert zitierte Quellen;
- Die Referenzbibliothek und die Registrierungsarchitektur definieren die Erfassung, Speicherung, Abstimmung, Wiederverwendung und den Austausch.

## 8. Plattform und Börse

Diese Kategorie enthält Spezifikationen zur Erweiterbarkeit, zur programmatischen Interaktion, zur Paketierung und zum Datenaustausch.

Es enthält:

1. **OMI-SPEC-300 — Plugin-Architektur**
2. **OMI-SPEC-310 — Plattform-API**
3. **OMI-SPEC-320 — Dateiformat**
4. **OMI-SPEC-330 — Container-Architektur**

Diese Dokumente MÜSSEN von den semantischen Modellen getrennt bleiben.

Eine Implementierung kann verschiedene interne Technologien verwenden und dennoch die in den Spezifikationen des „OMI“ definierten Anforderungen hinsichtlich Semantik und Datenaustausch erfüllen.

## 9. Unternehmensführung

Die Kategorie „Governance“ enthält Dokumente, die die Entwicklung, Pflege, Reifegrad, Identität und Veröffentlichung des Standards „OMI“ regeln.

Es enthält:

1. **Charta**
2. **Roadmap für „OMI“ 1.0**
3. **Architektur-Audit**
4. **Dokumentationsarchitektur**
5. **Lebenszyklus einer Spezifikation**
6. **Richtlinie zur Versionsverwaltung**
7. **Leitfaden zur Erstellung von Spezifikationen**
8. **Spezifikationsregister**

Das Spezifikationsregister ist die maßgebliche Quelle für Spezifikationskennungen und kanonische Pfade.

Das Architektur-Audit steht auch nach der Umsetzung der unmittelbaren Empfehlungen weiterhin als Dokumentation des Konsolidierungsprogramms zur Verfügung.

## 10. Kategorie-Landingpages

Jede Kategorie der obersten Ebene SOLLTE eine generierte Indexseite bereitstellen.

Generierte Indexseiten SOLLTEN Folgendes enthalten:

- ein prägnanter Titel;
- eine Kategoriebeschreibung;
- automatisch generierte Dokumentenkarten;
- ein stabiler Kategorie-Slug.

Automatisch generierte Seiten werden gegenüber manuell gepflegten Kategorieverzeichnis-Dokumenten bevorzugt, wenn die Seite lediglich den Inhalt einer Kategorie auflisten soll.

Dadurch werden Doppelungen vermieden und es wird sichergestellt, dass sich die Landingpage automatisch an Änderungen an der Seitenleiste anpasst.

Die aktuellen Kategorie-Slugs lauten:

| Kategorie | Slug |
|---|---|
| Einleitung | `/introduction` |
| Grundlagen | `/foundations` |
| Semantische Kernspezifikationen | `/core-semantic-specifications` |
| Wissenschaftlicher Arbeitsablauf und Veröffentlichung | `/scholarly-workflow-publishing` |
| Plattform und Börse | `/platform-exchange` |
| Unternehmensführung | `/governance` |

Diese Slugs SOLLTEN nach der Veröffentlichung unverändert bleiben.

## 11. Regeln für Elemente in der Seitenleiste

### 11.1 Explizite Registrierung

Die primäre Seitenleiste nutzt eine explizite Dokumentenregistrierung anstelle einer uneingeschränkten automatischen Generierung über das Dateisystem.

Eine ausdrückliche Registrierung ist erforderlich, da das Repository Folgendes enthält:

- Seiten zur Migration von Altdaten;
- Dokumente, die außerhalb ihrer konzeptionellen Kategorie gespeichert sind;
- Governance-Dokumente mit unterschiedlichen Dateisystemen und Navigationsreihenfolgen;
- Spezifikationen, deren architektonische Reihenfolge von der alphabetischen Reihenfolge abweicht.

### 11.2 Etiketten

Eine Seitenleistenbezeichnung KANN kürzer sein als der Seitentitel.

Zum Beispiel:

```text
Page title: OMI Architecture Map
Sidebar label: Architecture Overview
```

Eine Kennzeichnung DARF die Identität oder den normativen Geltungsbereich eines Dokuments NICHT verändern.

### 11.3 Bestellung

Die Reihenfolge der Spezifikationen SOLLTE sich eher an der kanonischen Identifikations- und Abhängigkeitsarchitektur orientieren als an der Reihenfolge der Dateinamen.

Die Reihenfolge der Governance-Elemente SOLLTE dem Arbeitsablauf des Lesers im Normungsprozess folgen:

```text
constitutional authority
→ roadmap and audit
→ documentation architecture
→ lifecycle
→ versioning
→ authoring rules
→ registry
```

### 11.4 Status der Kategorie

Die obersten Kategorien SOLLTEN ein- und ausklappbar sein und zunächst ausgeklappt angezeigt werden, solange die Dokumentationssuite noch relativ klein ist.

Der standardmäßige zusammengeklappte Zustand KANN überdacht werden, wenn die Anzahl der Dokumente deutlich zunimmt.

## 12. Veraltete und abgelöste Seiten

Eine Altseite DARF NICHT in der primären Seitenleiste erscheinen, wenn es eine kanonische Nachfolgeseite gibt.

Die Legacy-Seite unter:

```text
docs/specifications/scholarly-object-model.md
```

wird nur beibehalten, um den früheren öffentlichen Pfad zu erhalten und die Leser auf Folgendes hinzuweisen:

```text
docs/specifications/core/scholarly-object-model.md
```

Das maßgebliche Dokument ist **OMI-SPEC-120 — Scholarly Object Model**.

Alte Seiten SOLLTEN:

- den kanonischen Nachfolger ermitteln;
- Erläutern Sie die Migration der Bezeichner;
- Vermeiden Sie es, veraltete Inhalte als aktuellen normativen Text darzustellen;
- bleiben aus den generierten Kategorieindizes und der primären Seitenleiste ausgeschlossen.

## 13. Dateipfade und konzeptionelle Kategorien

Die Kategorie in der Seitenleiste muss nicht genau mit dem Quellverzeichnis übereinstimmen.

Zum Beispiel:

- `docs/foundations/architecture-map.md` erscheint unter „Einleitung“;
- `docs/specifications/core/scholarly-object-model.md` erscheint unter „Grundlagen“;
- `docs/governance/terminology.md` erscheint unter „Grundlagen“.

Das ist beabsichtigt.

Eine Umgestaltung des Dateisystems SOLLTE nur dann erfolgen, wenn sie einen eindeutigen Vorteil für die Wartung bietet und öffentliche Pfade sicher erhalten bleiben können.

## 14. Dokumentenkennungen

Docusaurus Dokumentkennungen MÜSSEN eindeutig bleiben.

Eine Dokumentkennung SOLLTE stabil bleiben, sobald das Dokument öffentlich referenziert wird.

Wenn im Vorspann ein explizites ``id`` deklariert wird, MUSS die Seitenleiste die aufgelöste Dokumentkennung `Docusaurus` verwenden, anstatt lediglich vom Dateinamen auszugehen.

Die Umgestaltung der Seitenleiste DARF die Identifikatoren der „OMI“-Spezifikation wie beispielsweise `OMI-SPEC-120` NICHT ändern. Die Dokument-IDs unter Docusaurus und die Spezifikations-IDs unter OMI sind separate Namensräume.

## 15. Interne Links

In Dokumenten SOLLTEN relative Markdown-Links verwendet werden, wenn auf Dokumente im selben Repository verwiesen wird.

Die Gliederung in der Seitenleiste DARF NICHT als Ersatz für explizite Verweise auf Normen angesehen werden.

Eine Spezifikationsabhängigkeit SOLLTE in der Spezifikation deklariert werden, auch wenn beide Dokumente nebeneinander in der Seitenleiste erscheinen.

Bei der Überprüfung der internen Links SOLLTE Folgendes überprüft werden:

- Die Zieldatei ist vorhanden;
- Das Ziel ist kanonisch;
- Die angezeigte Kennung stimmt mit der Spezifikationsregistrierung überein;
- Der Link verweist nicht auf eine Seite, die sich ausschließlich mit Migration befasst, es sei denn, Migration ist das Thema;
- Lokalisierte Seiten verweisen nicht versehentlich und ohne triftigen Grund auf eine andere Sprache.

## 16. Lokalisierung

Englisch bleibt die maßgebliche Ausgangssprache, sofern in einem Dokument nichts anderes angegeben ist.

Die ungarischen und deutschen Dokumentationsstrukturen SOLLTEN die konzeptionelle Hierarchie der englischen Fassung widerspiegeln.

Die Kategorienbezeichnungen in der Seitenleiste und der Text des generierten Indexes MÜSSEN in den normalen Übersetzungsworkflow von Docusaurus einbezogen werden.

Eine Übersetzung SOLLTE Folgendes beibehalten:

- Identität des Dokuments;
- OMI Spezifikationskennung;
- Version;
- Lebenszyklusstatus;
- Abhängigkeitsdeklarationen;
- maßgebliche englische Quellenangabe.

Eine übersetzte Seite DARF KEINE eigene OMI-Spezifikationskennung erhalten.

Wenn sich ein englisches Dokument ändert, SOLLTE die Aktualität der Übersetzung gemäß der Versionsrichtlinie und dem Dokument „Terminologie und Definitionen“ nachverfolgt werden.

## 17. Ein neues Dokument hinzufügen

Bevor ein neues Dokument zur Seitenleiste hinzugefügt wird, MUSS dessen Autor Folgendes festlegen:

1. ob es sich bei dem Dokument um ein normatives, informatives, umsetzungsbezogenes oder governancebezogenes Dokument handelt;
2. ob das Thema bereits in einem bestehenden Dokument behandelt wird;
3. ob eine Spezifikationskennung erforderlich ist;
4. ob die Kennung reserviert oder registriert wurde;
5. welche Kategorie der obersten Ebene kanonisch ist;
6. welche direkten Abhängigkeiten deklariert werden müssen;
7. ob das Dokument in seinem aktuellen Lebenszyklusstatus öffentlich zugänglich sein sollte;
8. ob Übersetzungen oder Platzhalter für Übersetzungen erforderlich sind;
9. ob das Hinzufügen des Dokuments eine generierte Kategorieseite verändert;
10. ob öffentliche Routen oder alte Aliase beibehalten werden müssen.

Eine neue normative Spezifikation MUSS im Spezifikationsregister eingetragen werden, bevor sie mit einer permanenten „OMI“-SPEC-Kennung versehen wird.

## 18. Entfernen oder Ersetzen eines Dokuments

Ein aktives Dokument DARF nicht einfach ohne Archivierungsentscheidung aus der Seitenleiste und dem Repository verschwinden.

Für den Austausch ist Folgendes erforderlich:

- ein benannter kanonischer Nachfolger;
- eine Lebenszyklusentscheidung wie „veraltet“, „ersetzt“ oder „zurückgezogen“;
- eine Aktualisierung des Registers, wenn es sich bei dem Dokument um eine Spezifikation handelt;
- eine Migrationsmitteilung oder eine Weiterleitung, sofern dies praktikabel ist;
- interne Verweise aktualisiert;
- aktualisierte Übersetzungen;
- Versionshinweise oder Änderungsprotokoll.

## 19. Validierungs-Checkliste

Eine Änderung an der Dokumentationsarchitektur ist zur Überprüfung bereit, wenn:

- jede Seitenleisten-Dokument-ID wird aufgelöst;
- Jede aktive Spezifikation kommt genau einmal vor;
- Jedes Dokument zur öffentlichen Verwaltung erscheint genau einmal, sofern es nicht bewusst ausgenommen wurde;
- Generierte Index-Slugs sind eindeutig;
- Die Seite zum alten Scholarly Object Model wird nicht aufgeführt;
- Das kanonische Scholarly-Object-Modell ist unter „Grundlagen“ aufgeführt;
- Die Spezifikationskennzeichnungen stimmen mit dem Spezifikationsregister überein;
- Die Kategoriebeschreibungen geben den Inhalt genau wieder;
- Keine vorhandene Quelldatei wird ohne einen Plan zur Beibehaltung der Pfadstruktur verschoben;
- Die Auswirkungen der Lokalisierung sind dokumentiert;
- Docusaurus Die Konfigurationssyntax ist gültig;
- Der Dokumentations-Build wird ohne Fehler aufgrund von defekten Links oder doppelten IDs abgeschlossen.

## 20. Aktuelles Migrationsergebnis

Die anfängliche Migration der Seitenleiste führt zu folgender öffentlicher Hierarchie:

```text
Introduction
├── Vision
└── Architecture Overview

Foundations
├── OMI-SPEC-000 — Core Principles
├── OMI-SPEC-120 — Scholarly Object Model
└── Terminology and Definitions

Core Semantic Specifications
├── OMI-SPEC-100 — Document Model
├── OMI-SPEC-110 — Anchor Model
├── OMI-SPEC-130 — Annotation Model
└── OMI-SPEC-140 — Metadata Model

Scholarly Workflow and Publishing
├── OMI-SPEC-200 — Review Model
├── OMI-SPEC-210 — Citation Model
├── OMI-SPEC-220 — Bibliographic Record Model
├── OMI-SPEC-221 — Reference Library and Registry Architecture
└── OMI-SPEC-230 — Publishing Model

Platform and Exchange
├── OMI-SPEC-300 — Plugin Architecture
├── OMI-SPEC-310 — Platform API
├── OMI-SPEC-320 — File Format
└── OMI-SPEC-330 — Container Architecture

Governance
├── Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Documentation Architecture
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Specification Registry
```

## 21. Zukünftige Erweiterung

Die Struktur ist so konzipiert, dass zusätzliche Kategorien aufgenommen werden können, sofern dies aufgrund eines umfangreichen Materials gerechtfertigt ist.

Zu den möglichen zukünftigen Kategorien gehören:

- Einführungsleitfäden;
- Profile und Erweiterungen;
- Schemata und Beispiele;
- Konformität und Prüfung;
- Gemeinschaft und Engagement.

Für ein einzelnes Dokument SOLLTE keine neue oberste Kategorie angelegt werden, es sei denn, die Kategorie steht für eine dauerhafte architektonische Unterscheidung.

Implementierungsspezifische Dokumentation SOLLTE klar von normativen OMI Spezifikationen getrennt bleiben.

## 22. Wartung

Die Dokumentationsarchitektur SOLLTE überprüft werden, wenn:

- eine neue Spezifikationsfamilie wird registriert;
- eine Spezifikation wird aufgeteilt oder zusammengeführt;
- ein Dokument den Status „Stable“ erreicht;
- Die Übersetzungen werden neu geordnet;
- Schemas und Konformitätstests werden veröffentlicht;
- die Seitenleiste lässt sich nur noch schwer überfliegen;
- öffentliche Routen werden geändert;
- Es wird eine neue Ebene für Implementierungsleitfäden eingeführt.

Änderungen an diesem Dokument und an `sidebars.js` SOLLTEN in der Regel gemeinsam überprüft werden, wenn sich die konzeptionelle Hierarchie ändert.

## 23. Adoption

Dieser Entwurf wird zur Architektur der Arbeitsdokumentation, sobald er in das Haupt-Repository übernommen wird.

Bestehende aktive Dokumente werden entsprechend dieser Struktur geordnet, ohne dass sich ihre normative Gültigkeitsdauer ändert.

Die Übernahme dieser Architektur führt nicht dazu, dass ein Spezifikationsentwurf in den Status „Review Candidate“, „Implementation Candidate“ oder „Stable“ erhoben wird.

## 24. Zusammenfassung

Die Dokumentationsreihe „OMI“ ist eher als geregeltes Standardsystem aufgebaut als als chronologische Sammlung von Seiten.

Die Architektur bietet:

- ein kanonischer Speicherort für jedes Dokument;
- ein klarer Übergang von der Vision zu umsetzungsorientierten Standards;
- vollständige Ermittlung der geltenden Spezifikationen und Governance-Dokumente;
- stabil generierte Kategorieseiten;
- explizite Behandlung von Alt-Routen;
- lokalisierungsfähige Navigation;
- Platz für zukünftige Schemata, Profile, Konformitätstests und Implementierungsleitfäden.

Diese Struktur erleichtert das Lesen, Überprüfen, Implementieren, Übersetzen und Pflegen des Standards „OMI“.
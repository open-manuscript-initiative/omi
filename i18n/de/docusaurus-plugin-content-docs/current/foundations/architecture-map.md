---
id: architecture-map
title: OMI Architekturkarte
sidebar_position: 2
description: Eine übergeordnete Architekturübersicht über das „Open Manuscript Initiative“ sowie die Zusammenhänge zwischen dessen Kernspezifikationen, Arbeitsabläufen, Plattformkomponenten und Publikationsergebnissen.
keywords:
  - Open Manuscript Initiative
  - OMI architecture
  - scholarly publishing
  - manuscript model
  - annotation model
  - peer review
  - open standards
---

# OMI Architekturkarte

**Status:** Entwurf

**Version:** 0.2

**Zuletzt aktualisiert:** 05.09.2026
**Stabilität:** Experimentell  

---

## Zusammenfassung

Das „Open Manuscript Initiative“ bietet eine offene semantische Architektur für den gesamten Lebenszyklus wissenschaftlicher Manuskripte.

OMI trennt wissenschaftliche Inhalte von Software, Darstellung, Arbeitsabläufen und institutioneller Infrastruktur. Seine Spezifikationen definieren interoperable Modelle für Manuskripte, wissenschaftliche Objekte, Verweise, Anmerkungen, Metadaten, Peer-Review, Veröffentlichung und maschinengestützte wissenschaftliche Arbeit.

Dieses Dokument stellt die übergeordnete Architektur von „OMI“ vor und beschreibt, wie die wichtigsten Spezifikationen und Implementierungsebenen zueinander in Beziehung stehen.

---

## 1. Architektonischer Überblick

Die Architektur von „OMI“ gliedert sich in fünf Hauptschichten:

```text
┌─────────────────────────────────────────────────────────┐
│                 Application Layer                       │
│                                                         │
│       OMI Studio · Publisher Systems · OJS · Tools       │
├─────────────────────────────────────────────────────────┤
│                  Workflow Layer                         │
│                                                         │
│   Review · Collaboration · Versioning · Publishing      │
├─────────────────────────────────────────────────────────┤
│              Semantic Relationship Layer                │
│                                                         │
│       Anchors · Annotations · Citations · Provenance     │
├─────────────────────────────────────────────────────────┤
│                Scholarly Object Layer                   │
│                                                         │
│  Manuscript · Section · Paragraph · Figure · Table      │
│  Equation · Reference · Dataset · Supplementary Object  │
├─────────────────────────────────────────────────────────┤
│                  Foundation Layer                       │
│                                                         │
│        Core Principles · Identity · Portability         │
│        Extensibility · Preservation · Interoperability  │
└─────────────────────────────────────────────────────────┘
```

Jede Ebene hängt von den darunterliegenden Ebenen ab.

Die Implementierungen der Anwendungen können variieren, doch die semantischen Modelle bleiben stabil.

---

## 2. Zentrales architektonisches Prinzip

OMI betrachtet ein Manuskript nicht lediglich als formatiertes Dokument, sondern als strukturierten Graphen aus wissenschaftlichen Objekten und semantischen Beziehungen.

```text
Scholarly Object
      │
      ├── has identity
      ├── has type
      ├── may contain other objects
      ├── may be targeted by anchors
      └── may participate in semantic relationships
```

Das Manuskript wird daher wie folgt dargestellt:

```text
Objects + Relationships + Metadata + Provenance
```

Die Darstellung wird aus dieser kanonischen Darstellung generiert.

---

## 3. Die kanonische Handschrift

Die kanonische Fassung enthält den maßgeblichen wissenschaftlichen Inhalt und die maßgebliche Struktur.

```text
Canonical Manuscript
│
├── Metadata
├── Contributors
├── Sections
│   ├── Headings
│   ├── Paragraphs
│   ├── Figures
│   ├── Tables
│   ├── Equations
│   └── Other scholarly objects
├── References
├── Notes
├── Annotations
├── Provenance
└── Workflow references
```

Die kanonische Handschrift ist unabhängig von:

- Seitengröße;
- Typografie;
- Verlagsvorlagen;
- Textverarbeitungssoftware;
- Ausgabeformat;
- Render-Engine;
- Redaktionsmanagement-Plattform.

PDF, HTML, DOCX, EPUB, JATS, XML sowie weitere Veröffentlichungsformate sind abgeleitete Darstellungen.

---

## 4. Abhängigkeitsübersicht der Spezifikationen

Die wichtigsten Spezifikationen von „OMI“ bilden die folgende Abhängigkeitsstruktur:

```text
OMI-SPEC-000
Core Principles
      │
      ▼
OMI-SPEC-120
Scholarly Object Model
      │
      ├──────────────────────────────┐
      ▼                              ▼
OMI-SPEC-100                   OMI-SPEC-140
Document Model                 Metadata Model
      │
      ▼
OMI-SPEC-110
Anchor Model
      │
      ▼
OMI-SPEC-130
Annotation Model
      │
      ├───────────────┬────────────────┬────────────────┐
      ▼               ▼                ▼                ▼
Review Model     Citation Model   AI Assistance    Publishing Model
```

Die Kernprinzipien legen die architektonischen Rahmenbedingungen fest.

Das „Scholarly Object Model“ definiert, was im „OMI“-Ökosystem vorkommen kann.

Das Dokumentmodell ordnet wissenschaftliche Objekte in Manuskripte ein.

Das Anker-Modell identifiziert stabile Ziele.

Das Annotationsmodell definiert die semantischen Beziehungen, die diesen Zielen zugeordnet sind.

Auf diesen Grundlagen bauen die Spezifikationen für Arbeitsabläufe und Interoperabilität auf.

---

# 5. Fundamentlage

## 5.1 Grundprinzipien

**„OMI– SPEC-000 – Core Principles“** definiert den architektonischen Aufbau von „OMI“.

Zu den wichtigsten Regeln gehören:

- Der Inhalt ist kanonisch;
- Semantik hat Vorrang vor der Formatierung;
- Wissenschaftliche Objekte besitzen eine stabile Identität;
- Beziehungen sind Daten erster Klasse;
- Die Darstellung ist vom Renderer abhängig;
- Identität und Inhalt sind zwei getrennte Aspekte;
- Die Implementierungen bleiben herstellerunabhängig;
- Die Erhaltung ist ein vorrangiges Ziel bei der Planung.

Jede Spezifikation von „OMI“ SOLLTE mit diesen Grundsätzen im Einklang stehen.

---

## 5.2 Wissenschaftliches Objektmodell

**OMI-SPEC-120 — Scholarly Object Model** definiert die gemeinsame Abstraktion, die allen aussagekräftigen Entitäten gemeinsam ist.

Beispiele hierfür sind:

- Manuskripte;
- Abschnitte;
- Absätze;
- Überschriften;
- Zahlen;
- Tabellen;
- Gleichungen;
- Quellenangaben;
- bibliografische Einträge;
- Anmerkungen;
- Rezensionen;
- Datensätze;
- ergänzende Materialien;
- Autoren und Mitwirkende.

Ein wissenschaftliches Objekt weist mindestens Folgendes auf:

```json
{
  "id": "object-123",
  "type": "paragraph"
}
```

Weitere Eigenschaften hängen vom Objekttyp ab.

---

# 6. Kernmodellschicht

## 6.1 Dokumentmodell

**OMI-SPEC-100 — Dokumentmodell** definiert den strukturellen Aufbau eines Manuskripts.

Darin wird Folgendes beschrieben:

- Eigenschaften auf Manuskriptebene;
- Abschnitte und hierarchische Struktur;
- Inhaltsblöcke;
- Inline-Inhalt;
- Verweise auf externe wissenschaftliche Objekte;
- Beziehungen zwischen Dokumentkomponenten.

Das Dokumentmodell legt das visuelle Erscheinungsbild nicht fest.

---

## 6.2 Anker-Modell

**OMI-SPEC-110 — Anchor-Modell** definiert stabile Verweise auf wissenschaftliche Objekte oder ausgewählte Bereiche innerhalb dieser Objekte.

Ein Anker kann auf Folgendes verweisen:

- ein gesamtes Manuskript;
- ein Abschnitt;
- ein Absatz;
- ein Inline-Textbereich;
- eine Zahl;
- ein Bildbereich;
- ein Tisch;
- eine Tabellenzelle;
- eine Gleichung;
- ein Zitat;
- ein bibliografischer Eintrag;
- Metadaten;
- eine externe Quelle.

```text
Anchor
  │
  ▼
Stable target within a scholarly object
```

Anhänger sorgen dafür, dass Anmerkungen und Verknüpfungen auch bei der Bearbeitung, Umstrukturierung und Neuausgabe erhalten bleiben.

---

## 6.3 Annotationsmodell

**OMI– SPEC-130 – Annotation Model** definiert Annotationen als wissenschaftliche Objekte erster Ordnung.

```text
Annotation
    │
    ├── type
    ├── body
    ├── creator or actor reference
    ├── visibility
    ├── provenance
    └── target
            │
            ▼
          Anchor
```

Anmerkungen können Folgendes darstellen:

- Anmerkungen;
- Kommentare;
- Anmerkungen aus dem Peer-Review;
- Redaktionelle Hinweise;
- Zitationsbeziehungen;
- KI-Vorschläge;
- Veröffentlichungshinweise;
- semantische Klassifikationen.

Eine Anmerkung wird unabhängig von dem Text gespeichert, auf den sie sich bezieht.

---

## 6.4 Metadatenmodell

**OMI-SPEC-140 — Metadatenmodell** definiert beschreibende, administrative, technische und konservatorische Metadaten.

Metadaten können Folgendes beschreiben:

- Titel;
- Sprache;
- Urheberschaft;
- Zugehörigkeiten;
- Bezeichner;
- Fächer;
- Stichwörter;
- Finanzierung;
- Rechte;
- Veröffentlichungsstatus;
- Herkunft;
- fachspezifische Informationen.

Das Metadatenmodell ist so konzipiert, dass es mit etablierten Standards und Identifikationssystemen kompatibel ist.

---

# 7. Workflow-Ebene

## 7.1 Überprüfungsmodell

**OMI-SPEC-200 — Review Model** definiert strukturierte Peer-Review-Arbeitsabläufe.

Es baut auf dem Annotationsmodell auf.

```text
Review Annotation
      │
      ├── reviewer pseudonym
      ├── review round
      ├── recommendation
      ├── visibility policy
      ├── confidential or author-facing body
      └── target anchor
```

Das Überprüfungsmodell unterstützt:

- offene Überprüfung;
- einzige anonyme Rezension;
- doppelt anonymes Begutachtungsverfahren;
- dreifach-anonyme Begutachtung;
- vertrauliche Anmerkungen des Redakteurs;
- Kommentare für den Autor;
- mehrere Überprüfungsrunden;
- strukturierte Empfehlungen;
- Prüfpfade überprüfen.

Die Identität des Rezensenten wird vom übertragbaren Inhalt der Rezension getrennt.

---

## 7.2 Kooperationsmodell

**OMI-SPEC-210 — Collaboration Model** definiert die Interaktion mehrerer Benutzer mit einem Manuskript.

Es unterstützt möglicherweise:

- Autoren;
- Mitautoren;
- Redakteure;
- Übersetzer;
- Rezensenten;
- Lektoren;
- Korrekturleser;
- technische Mitwirkende;
- KI-Assistenten.

Berechtigungen für die Zusammenarbeit sind rollenbasiert und objektbezogen.

---

## 7.3 Versionsmodell

**OMI-SPEC-220 — Versionierungsmodell** beschreibt die Entwicklung eines Manuskripts.

```text
Version 1
    │
    ▼
Change Set
    │
    ▼
Version 2
```

Das Modell sollte Folgendes unterstützen:

- unveränderliche Versionskennungen;
- Änderungen auf Objektebene;
- Änderungshistorie;
- Verzweigung;
- Zusammenführung;
- Herkunft;
- Vergleich zwischen verschiedenen Versionen;
- Momentaufnahmen aus der Bewertungsrunde.

---

## 7.4 Veröffentlichungsmodell

**„OMI– SPEC-230 — Publishing Model“** beschreibt die Umwandlung des kanonischen Manuskripts in Veröffentlichungsergebnisse.

```text
Canonical OMI Manuscript
          │
          ▼
 Publisher Profile
          │
          ▼
 Rendering Pipeline
          │
          ├── HTML
          ├── PDF
          ├── DOCX
          ├── EPUB
          ├── JATS XML
          ├── LaTeX
          └── Future formats
```

Verlagsprofile können Folgendes definieren:

- Typografie;
- Zitierweise;
- Notenposition;
- Überschriftenhierarchie;
- Seitengeometrie;
- Abbildung: Bearbeitung;
- Anforderungen an Metadaten;
- ausgabespezifische Transformationen.

Die kanonische Handschrift bleibt unverändert.

---

# 8. Interoperabilitätsschicht

## 8.1 Plugin-Architektur

**OMI– SPEC-300 — Plugin-Architektur** definiert Mechanismen zur Erweiterbarkeit.

Plugins können Folgendes bieten:

- neue wissenschaftliche Objekttypen;
- fachspezifische Metadaten;
- Renderer;
- Exporteure und Importeure;
- Validatoren;
- redaktionelle Arbeitsabläufe;
- Repository-Integrationen;
- KI-Dienste.

Plugins DÜRFEN die Portabilität des kanonischen Manuskripts NICHT beeinträchtigen.

---

## 8.2 Plattform-API

**OMI-SPEC-310 — Platform API** definiert die programmatische Interaktion mit Manuskripten und wissenschaftlichen Objekten der „OMI“.

Die „API“ kann Folgendes offenlegen:

- Abruf von Manuskripten;
- Erstellung und Änderung von Objekten;
- Annotationsvorgänge;
- Anker-Auflösung;
- Validierung;
- Rendering;
- Workflow-Integration;
- Import und Export;
- Plugin-Schnittstellen.

---

## 8.3 Dateiformat

**[OMI-SPEC-320 — File Format](../specifications/file-format.md)** definiert die portable logische Darstellung „JSON“ eines Manuskripts im Format „OMI“.

Dasselbe logische Dokument kann als eigenständige „`.omi.json`“-Datei oder als aus einem „OMI“-Container rekonstruierter Manuskriptteil übertragen werden. Das Dateiformat definiert Identifikation, Versionsaushandlung, Parsing, Serialisierung, Validierung, Referenzen, Erweiterungen, optionalen Verlaufsaustausch und Migration, ohne Archivpfade oder Komprimierung vorzuschreiben.

Das Format sollte folgende Aspekte in den Vordergrund stellen:

- Transparenz;
- Validierung;
- Wiederherstellbarkeit;
- Langzeitkonservierung;
- Implementierungsunabhängigkeit.

---

## 8.4 Container-Architektur

**[OMI-SPEC-330 — Container Architecture](../specifications/container-architecture.md)** legt fest, wie zugehörige Dateien zu einem überprüfbaren „`.omi`“-Paket zusammengefasst werden.

Ein Container kann Folgendes enthalten:

```text
manuscript.omi
│
├── META-INF/
├── manuscript/
├── media/
├── profiles/
├── plugins/
└── publication/
```

Der Container definiert die Erkennung von Teilen, die Pfadsicherheit, den Umgang mit Medien, die Integrität, Signaturen und die Aufbewahrungsverpackung, während die Semantik der Manuskripte der „OMI“ (SPEC-320) und den Kernmodellen überlassen bleibt.

---

# 9. Ebene der künstlichen Intelligenz

## 9.1 KI-Unterstützung

** „OMI– SPEC-400 – KI-Unterstützung“** beschreibt, wie maschinengenerierte Vorschläge mit wissenschaftlichen Manuskripten interagieren.

KI-Ergebnisse werden als mit Anmerkungen oder Herkunftsangaben versehene Inhalte dargestellt.

```text
AI Service
    │
    ▼
AI Annotation
    │
    ├── model or service identifier
    ├── creation time
    ├── operation type
    ├── confidence or rationale
    ├── target anchor
    └── human review status
```

KI-Vorschläge ersetzen kanonische Inhalte nicht automatisch.

---

## 9.2 KI-Überprüfung

**„OMI– SPEC-410 — AI Review“** definiert die maschinengestützte Qualitätsbewertung.

Zu den möglichen Vorgängen gehören:

- strukturelle Validierung;
- Überprüfung der Quellenangaben;
- terminologische Einheitlichkeit;
- Sprachanalyse;
- Barrierefreiheitsprüfung;
- Validierung von Metadaten;
- statistische Hinweise;
- Einhaltung der Vorgaben zum Publikationsprofil.

Die KI-Begutachtung unterscheidet sich nach wie vor von der Begutachtung durch menschliche Fachkollegen.

---

## 9.3 Herkunft

**OMI-SPEC-420 — Provenienz** dokumentiert, wie wissenschaftliche Objekte erstellt oder verändert wurden.

Die Herkunft kann Aufschluss geben über:

- menschliche Mitwirkende;
- Software-Tools;
- Importvorgänge;
- KI-Systeme;
- Transformationsprozesse;
- Publikationssysteme;
- Validierungsdienste.

Die Herkunftsangabe fördert die Transparenz, ohne dass alle Identitätsdaten öffentlich offengelegt werden müssen.

---

# 10. Anwendungsschicht

## 10.1 OMI Studio

OMI Studio ist eine Referenz-Erstellungsumgebung, die auf den „OMI“-Spezifikationen basiert.

```text
OMI Studio
│
├── Manuscript editor
├── Scholarly object inspector
├── Annotation panel
├── Notes editor
├── Review interface
├── Metadata editor
├── Publisher preview
├── Validation
├── Import
└── Export
```

OMI Studio ist eine Umsetzung der Spezifikationen, nicht die Spezifikation selbst.

Andere Anwendungen können „OMI“ möglicherweise anders implementieren.

---

## 10.2 Publisher-Systeme

Verlage und Zeitschriftenverwaltungsplattformen können „OMI“ für folgende Zwecke nutzen:

- Entgegennahme von Einreichungen;
- technische Validierung;
- Peer-Review;
- Lektorat;
- Produktion;
- Veröffentlichung;
- Hinterlegung in einem Depot;
- Langzeitkonservierung.

Ein Publisher kann „OMI“ direkt implementieren oder über ein „API“ oder ein Plugin integrieren.

---

## 10.3 Externe Systeme

OMI ist auf die Zusammenarbeit mit externer wissenschaftlicher Infrastruktur ausgelegt.

Beispiele hierfür sind:

```text
OMI
 │
 ├── OJS and journal management platforms
 ├── Institutional repositories
 ├── DOI registration services
 ├── ORCID
 ├── ROR
 ├── Crossref
 ├── DataCite
 ├── CSL
 ├── JATS
 ├── IIIF
 ├── Preservation systems
 └── Research data repositories
```

OMI soll diese Infrastrukturen nicht ersetzen.

Es stellt eine portable semantische Manuskript-Ebene zwischen ihnen bereit.

---

# 11. Architektur für Identitätsmanagement und Datenschutz

Identitäten werden getrennt von kanonischen wissenschaftlichen Inhalten behandelt.

```text
Portable OMI Content
│
├── actor role
├── pseudonym
├── contribution type
└── public provenance
        │
        │ protected mapping
        ▼
Institutional Identity System
├── account
├── verified identity
├── permissions
└── confidential audit data
```

Diese Trennung unterstützt:

- anonyme Begutachtung durch Fachkollegen;
- Zusammenarbeit unter Wahrung der Privatsphäre;
- kontrollierte Offenlegung der Identität;
- institutionelle Rechenschaftspflicht;
- mobile Prüfprotokolle.

Private Identitätszuordnungen SOLLTEN in portablen Paketen für anonyme Begutachtungen NICHT enthalten sein.

---

# 12. Architektur-Rendering

Beim Rendering wird semantischer Inhalt in eine Darstellung umgewandelt.

```text
Canonical Manuscript
        │
        ▼
Semantic Validation
        │
        ▼
Target Profile
        │
        ▼
Renderer
        │
        ├── HTML
        ├── PDF
        ├── DOCX
        ├── EPUB
        ├── JATS XML
        ├── LaTeX
        └── Accessible formats
```

Der Renderer bestimmt:

- Typografie;
- Paginierung;
- Notenposition;
- Formatierung von Quellenangaben;
- Abbildungsanordnung;
- Tabellen-Rendering;
- Aussehen der Überschrift;
- Darstellung der Barrierefreiheit.

Die Übersetzung DARF die semantische Bedeutung des Manuskripts NICHT neu definieren.

---

# 13. Beispiel: Lebenszyklus einer Peer-Review-Anmerkung

Das folgende Beispiel veranschaulicht, wie mehrere „OMI“-Ebenen zusammenwirken.

```text
1. A paragraph exists as a scholarly object.
                    │
                    ▼
2. An anchor identifies a sentence in the paragraph.
                    │
                    ▼
3. A reviewer creates a review annotation.
                    │
                    ▼
4. The Review Model applies anonymity and visibility rules.
                    │
                    ▼
5. The author receives an anonymized review projection.
                    │
                    ▼
6. The author revises the canonical manuscript.
                    │
                    ▼
7. The Versioning Model records the change.
                    │
                    ▼
8. The annotation is resolved or retained as provenance.
```

Der Anmerkung zur Überprüfung ist nicht dauerhaft in den Absatz eingebettet.

Es bleibt ein eigenständiges, nachvollziehbares wissenschaftliches Objekt.

---

# 14. Beispiel: Lebenszyklus einer Veröffentlichung

```text
Authoring
    │
    ▼
Canonical OMI Manuscript
    │
    ▼
Validation
    │
    ▼
Peer Review
    │
    ▼
Revision and Versioning
    │
    ▼
Editorial Acceptance
    │
    ▼
Publisher Profile
    │
    ▼
Rendering
    │
    ├── Journal HTML
    ├── Archival PDF
    ├── JATS XML
    ├── EPUB
    └── Repository package
```

Aus ein und derselben kanonischen Handschrift können alle möglichen Ergebnisse hervorgehen.

Kein Ausgabeformat gilt als maßgebliche Quelle.

---

# 15. Architekturinvarianten

Alle konformen Implementierungen von „OMI“ SOLLTEN die folgenden Invarianten wahren.

## 15.1 Invariante kanonischer Inhalt

Darstellungsspezifische Änderungen DÜRFEN die kanonische wissenschaftliche Bedeutung NICHT verändern.

## 15.2 Invariante der stabilen Identität

Ein wissenschaftliches Objekt SOLLTE seine Identität bei üblichen Bearbeitungsvorgängen beibehalten.

## 15.3 Beziehungsinvariante

Semantische Beziehungen SOLLTEN explizit und maschinenlesbar bleiben.

## 15.4 Portabilitätsinvariante

Ein Manuskript MUSS auch außerhalb der Software, mit der es erstellt wurde, interpretierbar bleiben.

## 15.5 Datenschutzinvarianten

Vertrauliche Identitätsdaten MÜSSEN von den übertragbaren wissenschaftlichen Inhalten getrennt bleiben.

## 15.6 Herkunftsunabhängig

Sinnvolle automatisierte und manuelle Umwandlungen SOLLTEN nachvollziehbar sein.

## 15.7 Invariante der Erweiterbarkeit

Ergänzungen SOLLTEN die Gültigkeit und Lesbarkeit des zugrunde liegenden Manuskripts gewährleisten.

---

# 16. Architektonische Grenzen

OMI definiert:

- semantische Manuskriptstrukturen;
- Identitäten wissenschaftlicher Objekte;
- Anker;
- Anmerkungen;
- Darstellungen von Arbeitsabläufen;
- interoperable Metadaten;
- tragbare Verpackungskonstruktionen;
- Rendering-Eingaben;
- Ausfahrmechanismen.

OMI schreibt nicht vor:

- ein einziger Redakteur;
- eine einzige Veröffentlichungsplattform;
- eine einzige Datenbank;
- eine einzige Programmiersprache;
- eine einzige Peer-Review-Methode;
- ein einheitlicher Zitierstil;
- ein einheitliches visuelles Design;
- ein einheitlicher institutioneller Arbeitsablauf.

Die Implementierungen können ihre internen Technologien weiterhin frei wählen.

---

# 17. Übersichtskarte

```text
                         OMI-SPEC-000
                        Core Principles
                               │
                               ▼
                    Scholarly Object Model
                               │
                  ┌────────────┴────────────┐
                  ▼                         ▼
          Document Model              Metadata Model
                  │
                  ▼
             Anchor Model
                  │
                  ▼
           Annotation Model
                  │
      ┌───────────┼───────────┬───────────────┐
      ▼           ▼           ▼               ▼
 Review Model  Citation    AI Assistance   Publishing
      │           │           │               │
      └───────────┴───────────┴───────────────┘
                              │
                              ▼
                    Portable OMI Manuscript
                              │
                              ▼
                       OMI Implementations
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
       Studio          Publisher Systems     Repositories
                              │
                              ▼
                     Publication Renderers
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
           HTML              PDF              JATS
```

---

# 18. Schlussfolgerung

Das „Open Manuscript Initiative“ bietet eine mehrschichtige semantische Architektur anstelle eines monolithischen Dateiformats.

Sein zentrales Abstraktionsmodell ist der wissenschaftliche Objektgraph:

```text
Stable scholarly objects
        +
Explicit semantic relationships
        +
Portable metadata
        +
Traceable provenance
```

Auf diesem Graph basieren Anwendungen, Arbeitsabläufe und Veröffentlichungsformate.

Durch die Trennung der wissenschaftlichen Bedeutung von der Darstellung und der Infrastruktur ermöglicht „OMI“, dass Manuskripte zwischen Autoren, Fachgebieten, Verlagen, Repositorien und zukünftigen Technologien ausgetauscht werden können, ohne dabei ihre intellektuelle Struktur zu verlieren.

> **Schreibe ganz natürlich. Einmal strukturieren. Überall veröffentlichen.**

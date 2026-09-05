---
id: scholarly-object-model
title: OMI-SPEC-120 – Wissenschaftliches Objektmodell
sidebar_label: Wissenschaftliches Objektmodell
sidebar_position: 1
description: Definiert das gemeinsame Objektmodell für alle semantisch bedeutsamen Entitäten im „Open Manuscript Initiative“.
keywords:
  - Open Manuscript Initiative
  - OMI
  - scholarly object
  - semantic publishing
  - manuscript model
  - structured documents
  - scholarly communication
---

# OMI-SPEC-120 – Wissenschaftliches Objektmodell

**Status:** Entwurf  
**Version:** 0.1.0  
**Stabilität:** Experimentell  
**Kategorie:** Kernspezifikation  

**Hängt ab von:**

- OMI-SPEC-000 — Grundprinzipien

**Verwendet von:**

- OMI-SPEC-100 — Dokumentmodell
- OMI-SPEC-110 – Anker-Modell
- OMI-SPEC-130 – Annotationsmodell
- OMI-SPEC-140 – Metadatenmodell
- OMI-SPEC-200 – Testmodell
- OMI-SPEC-230 – Veröffentlichungsmodell

---

## Zusammenfassung

Das Scholarly Object Model definiert die gemeinsame semantische Grundlage für alle aussagekräftigen Entitäten, die im „Open Manuscript Initiative“ dargestellt werden.

Ein wissenschaftliches Manuskript wird nicht lediglich als Abfolge formatierter Zeichen betrachtet. Es wird als strukturierter Graph aus identifizierbaren wissenschaftlichen Objekten und expliziten semantischen Beziehungen dargestellt.

Zu den wissenschaftlichen Objekten zählen beispielsweise Manuskripte, Abschnitte, Absätze, Abbildungen, Tabellen, Gleichungen, Zitate, bibliografische Einträge, Anmerkungen, Rezensionen, Datensätze, Mitwirkende und ergänzende Materialien.

Diese Spezifikation definiert:

- Was macht ein wissenschaftliches Objekt aus?;
- die gemeinsamen Eigenschaften wissenschaftlicher Objekte;
- Objektidentität und Typisierung;
- Objekt-Eingebettung und -Beziehungen;
- Anforderungen an den Lebenszyklus und die Herkunft;
- Ausfahrmechanismen;
- Konformitätsanforderungen.

Das Scholarly Object Model schreibt weder die visuelle Darstellung noch die Speichertechnologie, die Datenbankstruktur oder das Verhalten der Benutzeroberfläche vor.

---

# 1. Geltungsbereich

Diese Spezifikation definiert das abstrakte Objektmodell, das im gesamten „OMI“-Ökosystem verwendet wird.

Dies gilt für:

- Inhalt der kanonischen Handschrift;
- Metadaten des Manuskripts;
- strukturelle Dokumentkomponenten;
- semantische Beziehungen;
- Anmerkungen;
- Objekte überprüfen;
- Veröffentlichungsmaterialien;
- workflowbezogene wissenschaftliche Entitäten;
- extern zitierte wissenschaftliche Quellen.

Diese Spezifikation definiert Folgendes nicht:

- Dokumentlayout;
- Typografie;
- Seitengeometrie;
- Benutzeroberflächenkomponenten;
- Datenbankschemata;
- Netzwerkprotokolle;
- publikationsspezifische Formatierung;
- ein vollständiges Serialisierungsformat.

Konkrete Serialisierungsregeln können in separaten „OMI“-Spezifikationen definiert werden.

---

# 2. Normative Sprache

Die Schlüsselwörter **MUSS**, **DARF NICHT**, **ERFORDERLICH**, **SOLL**, **SOLL NICHT**, **SOLLTE**, **SOLLTE NICHT**, **EMPFOHLEN**, **KANN** und **OPTIONAL** in diesem Dokument sind als normative Anforderungen zu verstehen.

---

# 3. Kernkonzept

Ein wissenschaftliches Objekt ist eine identifizierbare semantische Einheit, die an der wissenschaftlichen Kommunikation beteiligt ist.

Ein wissenschaftliches Objekt kann Folgendes darstellen:

- intellektueller Inhalt;
- strukturelle Organisation;
- beschreibende Metadaten;
- eine semantische Beziehung;
- ein redaktioneller Beitrag oder eine Rezension;
- ein Publikationsobjekt;
- eine externe wissenschaftliche Quelle;
- ein für den Workflow relevanter Status oder eine Entscheidung.

Jedes wissenschaftliche Objekt existiert unabhängig von seiner visuellen Darstellung.

```text
Scholarly Object
│
├── Identity
├── Type
├── Semantic content
├── Metadata
├── Relationships
├── Provenance
└── Lifecycle state
```

Ein wissenschaftliches Objekt wird nicht dadurch definiert, wie es auf einer Seite dargestellt wird.

---

# 4. Rolle der Architektur

Das „Scholarly Object Model“ ist die gemeinsame Abstraktion, auf der die Spezifikationsfamilie „OMI“ basiert.

```text
OMI-SPEC-000
Core Principles
      │
      ▼
OMI-SPEC-120
Scholarly Object Model
      │
      ├── Document Model
      ├── Anchor Model
      ├── Annotation Model
      ├── Metadata Model
      ├── Review Model
      ├── Citation Model
      └── Publishing Model
```

Weitere Spezifikationen definieren spezielle wissenschaftliche Objekttypen und Beziehungen.

---

# 5. Objektgraph-Modell

Ein „OMI“-Manuskript wird konzeptionell als Graph dargestellt.

```text
Scholarly objects
        +
Explicit relationships
        =
Scholarly object graph
```

Der Graph enthält Knoten und Kanten.

- Ein **Knoten** ist ein wissenschaftliches Objekt.
- Eine **Verbindung** ist eine semantische Beziehung zwischen wissenschaftlichen Objekten.

Beispiel:

```text
Manuscript
    │ contains
    ▼
Section
    │ contains
    ▼
Paragraph
    │ cited-by
    ▼
Citation
    │ refers-to
    ▼
Bibliographic Record
```

Beziehungen MÜSSEN von der visuellen Formatierung unterscheidbar bleiben.

---

# 6. Minimaler wissenschaftlicher Gegenstand

Jedes wissenschaftliche Objekt MUSS Folgendes enthalten:

- eine stabile Kennung;
- ein Objekttyp.

Minimalbeispiel:

```json
{
  "id": "obj-01J9A6K8P3",
  "type": "paragraph"
}
```

Die „`id`“ identifiziert das Objekt.

Das „`type`“ definiert seine semantische Kategorie.

---

# 7. Allgemeine Objektstruktur

Ein wissenschaftliches Objekt KANN die folgenden gängigen Eigenschaften aufweisen:

```json
{
  "id": "obj-01J9A6K8P3",
  "type": "paragraph",
  "schemaVersion": "0.1",
  "content": {},
  "metadata": {},
  "relationships": [],
  "provenance": {},
  "status": "active",
  "extensions": {}
}
```

Eine allgemeine Darstellung von „TypeScript“ lässt sich wie folgt ausdrücken:

```ts
export interface ScholarlyObject<TContent = unknown> {
  id: string;
  type: string;
  schemaVersion?: string;
  content?: TContent;
  metadata?: Record<string, unknown>;
  relationships?: ScholarlyRelationship[];
  provenance?: ProvenanceRecord;
  status?: ScholarlyObjectStatus;
  extensions?: Record<string, unknown>;
}
```

Konkrete Objekttypen KÖNNEN diese Eigenschaften einschränken, vorschreiben oder erweitern.

---

# 8. Objektidentität

## 8.1 Stabile Bezeichner

Jedes wissenschaftliche Objekt MUSS über eine Kennung verfügen, die innerhalb des zugehörigen „OMI“-Pakets oder Repository-Kontexts eindeutig ist.

Ein Bezeichner SOLLTE bei gewöhnlichen Bearbeitungsvorgängen unverändert bleiben.

Beispiele für gewöhnliche Bearbeitungen sind:

- Rechtschreibkorrektur;
- Formulierung ändern;
- einen Absatz innerhalb desselben Manuskripts verschieben;
- Neuanordnung von Abschnitten;
- Änderung des Ausgabeformats;
- Anwenden eines Verlagsprofils;
- Konvertierung zwischen unterstützten Serialisierungen.

Ein Objekt DARF KEINE neue Identität erhalten, nur weil sich seine visuelle Darstellung ändert.

---

## 8.2 Opazität von Bezeichnern

Objektkennungen SOLLTEN als undurchsichtige Werte behandelt werden.

Implementierungen DÜRFEN KEINE semantische Bedeutung aus der internen Struktur eines Bezeichners ableiten, es sei denn, das Bezeichnerschema definiert eine solche Bedeutung ausdrücklich.

Empfohlen:

```json
{
  "id": "obj-01J9A6K8P3D7M5Q2R"
}
```

Entmutigt:

```json
{
  "id": "chapter-2-paragraph-4"
}
```

Die zweite Form ist anfällig, da eine strukturelle Umgestaltung den Bezeichner ungültig machen könnte.

---

## 8.3 Geltungsbereich von Bezeichnern

Ein Bezeichner MUSS innerhalb seines deklarierten Geltungsbereichs eindeutig sein.

Mögliche Anwendungsbereiche sind unter anderem:

- Manuskript;
- OMI Paket;
- Repository;
- institutionelle Plattform;
- global auflösbarer Namensraum.

In einer separaten Spezifikation KÖNNEN globale Bezeichnerschemata definiert werden.

---

## 8.4 Persistenz der Identität

Wird ein Objekt geändert, ohne dass sich seine semantische Kontinuität ändert, SOLLTE der Bezeichner unverändert bleiben.

Wird ein Objekt durch ein semantisch unterschiedliches Objekt ersetzt, SOLLTE ein neuer Bezeichner zugewiesen werden.

Zum Beispiel:

```text
Typographical correction
→ same object identity

Paragraph moved to another section
→ same object identity

Paragraph divided into two independent arguments
→ original object may be superseded by two new objects
```

Solche Änderungen SOLLTEN in der Herkunfts- oder Versionshistorie erfasst werden.

---

# 9. Objekttypen

## 9.1 Typ-Eigenschaft

Die Eigenschaft „`type`“ gibt die semantische Klasse eines Objekts an.

Beispiele:

```json
{
  "type": "manuscript"
}
```

```json
{
  "type": "figure"
}
```

```json
{
  "type": "review-annotation"
}
```

Objekttypen SOLLTEN aus Kleinbuchstaben bestehende, maschinenlesbare Namen verwenden.

Bei zusammengesetzten Typen werden Namen mit Bindestrich EMPFOHLEN.

---

## 9.2 Zentrale Objektkategorien

OMI unterscheidet mehrere große Kategorien wissenschaftlicher Objekte.

```text
Scholarly Object
│
├── Content Object
├── Structural Object
├── Relationship Object
├── Agent Object
├── Asset Object
├── Workflow Object
└── External Resource Object
```

Diese Kategorien sind konzeptioneller Natur und erfordern im Implementierungscode nicht zwangsläufig eine Vererbung.

---

# 10. Inhaltsobjekte

Inhaltsobjekte enthalten geistiges Eigentum oder Beweismaterial.

Beispiele hierfür sind:

- Absatz;
- Überschrift;
- Zitat;
- Liste;
- Listenelement;
- Code-Block;
- Gleichung;
- Satz;
- Definition;
- Beispiel;
- Transkription;
- Literaturverweis;
- Glossareintrag.

Beispiel:

```json
{
  "id": "paragraph-01",
  "type": "paragraph",
  "content": {
    "children": [
      {
        "type": "text",
        "value": "Scholarly content remains independent of presentation."
      }
    ]
  }
}
```

Inhaltsobjekte SOLLTEN semantische Unterscheidungen beibehalten, die für die Interpretation oder Darstellung relevant sein könnten.

---

# 11. Strukturobjekte

Strukturobjekte dienen der Organisation wissenschaftlicher Inhalte.

Beispiele hierfür sind:

- Manuskript;
- Teil;
- Kapitel;
- Abschnitt;
- Unterabschnitt;
- Anhang;
- Vorderdruck;
- Nachwort;
- Literaturverzeichnis;
- Figurengruppe;
- Tischgruppe.

Beispiel:

```json
{
  "id": "section-methods",
  "type": "section",
  "content": {
    "title": "Methods",
    "children": [
      "paragraph-01",
      "paragraph-02",
      "table-01"
    ]
  }
}
```

Die Begrenzung MUSS explizit dargestellt werden.

Die räumliche Nähe allein DARF NICHT ausschlaggebend für die Zugehörigkeit zu einer Struktur sein.

---

# 12. Asset-Objekte

Asset-Objekte stellen Dateien oder Medien dar, die mit wissenschaftlichen Inhalten verknüpft sind.

Beispiele hierfür sind:

- Bild;
- Audio;
- Video;
- Datensatz;
- Quellarchiv;
- ergänzende Datei;
- ausführbares Notizbuch;
- dreidimensionales Modell.

Beispiel:

```json
{
  "id": "asset-figure-01",
  "type": "image",
  "content": {
    "href": "assets/figure-01.png",
    "mediaType": "image/png"
  },
  "metadata": {
    "altText": "Diagram of the OMI semantic layers."
  }
}
```

Ein Asset-Objekt SOLLTE Folgendes enthalten:

- Medientyp;
- Speicherort der Ressource;
- Angaben zur Integrität, sofern verfügbar;
- Metadaten zur Barrierefreiheit, sofern zutreffend.

---

# 13. Beziehungsobjekte

Beziehungsobjekte drücken semantische Verbindungen zwischen wissenschaftlichen Objekten aus.

Beispiele hierfür sind:

- Zitat;
- Anmerkung;
- Querverweis;
- Ableitung;
- Übersetzung;
- Korrektur;
- Rezension;
- Abhängigkeit;
- Herkunftsverweis;
- Teil-Ganzes-Beziehung.

Ein Beziehungsobjekt SOLLTE Folgendes identifizieren:

- die Art der Beziehung;
- ein oder mehrere Quellobjekte;
- ein oder mehrere Zielobjekte;
- optionale Metadaten zur Beziehung;
- optionale Herkunftsangabe.

Beispiel:

```json
{
  "id": "rel-citation-01",
  "type": "citation",
  "source": [
    "paragraph-01"
  ],
  "target": [
    "reference-17"
  ]
}
```

Beziehungen SOLLTEN NICHT ausschließlich durch visuelle Markierungen wie hochgestellte Zahlen, Farben oder Einrückungen dargestellt werden.

---

# 14. Agentenobjekte

Agent-Objekte stellen Akteure in der wissenschaftlichen Kommunikation dar.

Beispiele hierfür sind:

- Person;
- Organisation;
- Redaktionsteam;
- Software-Agent;
- KI-System;
- Institutsrepositorium;
- Veröffentlichungsplattform.

Beispiel:

```json
{
  "id": "agent-author-01",
  "type": "person",
  "metadata": {
    "name": "Example Author",
    "roles": [
      "author"
    ]
  }
}
```

Identitätsbezogene Informationen KÖNNEN getrennt von den Inhalten auf tragbaren Geräten gespeichert werden.

Anonyme Arbeitsabläufe SOLLTEN rollenspezifische oder pseudonyme Agentenreferenzen anstelle öffentlicher Identitätsdatensätze verwenden.

---

# 15. Workflow-Objekte

Workflow-Objekte stellen strukturierte wissenschaftliche Prozesse oder Entscheidungen dar.

Beispiele hierfür sind:

- Einreichung;
- Überprüfungsaufgabe;
- Prüfbericht;
- redaktionelle Entscheidung;
- Änderungsantrag;
- Annahme;
- Korrektur;
- Widerruf;
- Veröffentlichungsstatus.

Beispiel:

```json
{
  "id": "decision-01",
  "type": "editorial-decision",
  "content": {
    "decision": "major-revision"
  },
  "status": "completed"
}
```

Workflow-Objekte KÖNNEN je nach ihren Datenschutz- und Sicherheitsanforderungen portabel, eingeschränkt oder institutionsspezifisch sein.

---

# 16. Externe Ressourcenobjekte

Externe Ressourcenobjekte stellen wissenschaftliche Entitäten dar, die nicht direkt im Paket „OMI“ gespeichert sind.

Beispiele hierfür sind:

- Zeitschriftenartikel;
- Buch;
- Archivunterlage;
- Datensatz;
- ORCID Datensatz;
- ROR Organisation;
- DOI Ressource;
- Webressource;
- Begriff aus einem kontrollierten Vokabular.

Beispiel:

```json
{
  "id": "external-resource-01",
  "type": "external-resource",
  "metadata": {
    "identifier": {
      "scheme": "doi",
      "value": "10.0000/example"
    }
  }
}
```

Verweise auf externe Ressourcen SOLLTEN, sofern verfügbar, persistente Identifikatoren verwenden.

---

# 17. Zusammengesetzte und atomare Objekte

Ein wissenschaftliches Objekt kann zusammengesetzt oder atomar sein.

## 17.1 Zusammengesetztes Objekt

Ein zusammengesetztes Objekt enthält andere Objekte oder verweist auf diese.

Beispiele hierfür sind:

- Manuskript;
- Abschnitt;
- Abbildung mit Bildunterschrift und Medien;
- Tabelle mit Zeilen und Zellen;
- Literaturverzeichnis;
- Prüfbericht.

## 17.2 Atomares Objekt

Ein atomares Objekt wird innerhalb einer bestimmten Modellschicht als unteilbar behandelt.

Beispiele hierfür sind unter anderem:

- Textknoten;
- mathematisches Symbol;
- Wert einer Tabellenzelle;
- kontrollierter Metadatenwert.

Die Atomizität ist modellabhängig.

Ein Objekt, das in einer Spezifikation als atomar betrachtet wird, KANN durch eine andere, spezialisierte Spezifikation zerlegt werden.

---

# 18. Eindämmung

Eindämmung steht für strukturelle Inklusion.

Beispiel:

```json
{
  "id": "section-01",
  "type": "section",
  "content": {
    "children": [
      "paragraph-01",
      "figure-01"
    ]
  }
}
```

Einschlussbeziehungen SOLLTEN die folgenden Anforderungen erfüllen:

1. Ein untergeordnetes Objekt SOLLTE innerhalb einer kanonischen Dokumenthierarchie ein bestimmbares übergeordnetes Objekt haben.
2. Es DARF KEINE kreisförmige Eindämmung stattfinden.
3. Die Einschränkungsanweisung MUSS explizit sein, wenn die Reihenfolge semantisch bedeutsam ist.
4. Das Entfernen eines Objekts aus einem übergeordneten Objekt DARF NICHT automatisch zur Zerstörung seiner Identität führen.
5. Beim Verschieben eines Objekts zwischen übergeordneten Elementen SOLLTE dessen Identität erhalten bleiben.

---

# 19. Bestellung

Manche Objektsammlungen sind geordnet.

Beispiele hierfür sind:

- Abschnitte in einem Manuskript;
- Absätze in einem Abschnitt;
- Listenelemente;
- Tabellenzeilen;
- Autoren in der angegebenen Reihenfolge.

Die Reihenfolge MUSS ausdrücklich angegeben werden, wenn sie sich auf die Bedeutung oder die Darstellung auswirkt.

Implementierungen KÖNNEN die Reihenfolge auf folgende Weise darstellen:

- geordnete Arrays;
- Sequenzmerkmale;
- explizite Vorgänger-Nachfolger-Beziehungen.

Die Reihenfolge SOLLTE NICHT aus dem Speicherort oder dem Dateinamen abgeleitet werden.

---

# 20. Beziehungen

Eine allgemeine wissenschaftliche Beziehung lässt sich wie folgt darstellen:

```ts
export interface ScholarlyRelationship {
  id?: string;
  type: string;
  source: string[];
  target: string[];
  metadata?: Record<string, unknown>;
  provenance?: ProvenanceRecord;
}
```

Beispiel:

```json
{
  "id": "relationship-01",
  "type": "supports",
  "source": [
    "dataset-01"
  ],
  "target": [
    "claim-01"
  ]
}
```

Eine Beziehung KANN eine Verbindung herstellen:

- ein Objekt zu einem Objekt;
- ein Objekt zu mehreren Objekten;
- mehrere Objekte zu einem Objekt;
- von mehreren Objekten zu mehreren Objekten.

---

# 21. Referenzierung durch Identität

Objekte SOLLTEN über einen Bezeichner auf andere Objekte verweisen.

Empfohlen:

```json
{
  "target": "paragraph-01"
}
```

Entmutigt:

```json
{
  "target": {
    "sectionNumber": 2,
    "paragraphNumber": 4
  }
}
```

Strukturelle Positionen KÖNNEN als Fallback-Selektoren verwendet werden, SOLLTEN jedoch die stabile Objektidentität NICHT ersetzen.

Das Anker-Modell definiert präzisere Mechanismen zur Zielauswahl.

---

# 22. Metadaten

Jedes wissenschaftliche Objekt KANN Metadaten enthalten.

Metadaten können Folgendes sein:

- beschreibend;
- administrativ;
- technisch;
- strukturell;
- im Zusammenhang mit der Konservierung;
- fachspezifisch;
- workflow-spezifisch.

Beispiel:

```json
{
  "id": "figure-01",
  "type": "figure",
  "metadata": {
    "label": "Figure 1",
    "language": "en",
    "rights": "CC BY 4.0"
  }
}
```

Metadaten, die für viele Objekttypen gemeinsam genutzt werden, SOLLTEN der Spezifikation „OMI-SPEC-140“ entsprechen.

---

# 23. Herkunft

Die Provenienz dokumentiert, wie ein Objekt erstellt, geändert, importiert, generiert oder umgewandelt wurde.

Ein Herkunftsnachweis KANN Folgendes enthalten:

```ts
export interface ProvenanceRecord {
  createdAt?: string;
  createdBy?: string;
  modifiedAt?: string;
  modifiedBy?: string;
  generatedBy?: string;
  derivedFrom?: string[];
  activity?: string;
}
```

Beispiel:

```json
{
  "provenance": {
    "createdAt": "2026-07-21T18:30:00Z",
    "createdBy": "agent-author-01",
    "activity": "authoring"
  }
}
```

Wesentliche automatisierte Umwandlungen SOLLTEN protokolliert werden.

Durch KI erzeugte oder von KI bearbeitete Objekte MÜSSEN von ausschließlich von Menschen erstellten Objekten unterscheidbar sein, sofern diese Herkunftsangaben vorliegen.

---

# 24. Lebenszyklus eines Objekts

Ein wissenschaftliches Objekt KANN einen Lebenszyklusstatus haben.

Empfohlene Kernwerte:

```ts
export type ScholarlyObjectStatus =
  | 'draft'
  | 'active'
  | 'superseded'
  | 'deprecated'
  | 'withdrawn'
  | 'deleted';
```

## 24.1 Entwurf

Das Objekt ist unvollständig oder wurde noch nicht in die kanonische Fassung aufgenommen.

## 24.2 Aktiv

Das Objekt ist derzeit Teil des kanonischen wissenschaftlichen Bestands.

## 24.3 Aufgehoben

Das Objekt wurde durch ein anderes Objekt ersetzt, steht jedoch weiterhin für die Provenienz oder die Versionshistorie zur Verfügung.

## 24.4 Veraltet

Das Objekt bleibt interpretierbar, sollte jedoch nicht für neue Inhalte verwendet werden.

## 24,5 Zurückgezogen

Das Objekt wurde bewusst aus dem aktiven wissenschaftlichen Gebrauch genommen, wobei jedoch ein Prüfprotokoll erhalten blieb.

## 24.6 Gestrichen

Das Objekt ist zum Löschen vorgemerkt.

Implementierungen SOLLTEN zwischen einer logischen Löschung und einer unwiderruflichen physischen Entfernung unterscheiden.

---

# 25. Unveränderlichkeit und Überarbeitung

OMI erfordert nicht, dass jedes Objekt technisch unveränderlich ist.

Implementierungen SOLLTEN jedoch den Revisionsverlauf für Änderungen beibehalten, die sich auf die wissenschaftliche Bedeutung auswirken.

Es kommen zwei Ansätze in Frage:

```text
Mutable object
+
Version history
```

oder:

```text
Immutable object versions
+
Stable conceptual identity
```

Eine Versionsspezifikation kann eine detaillierte Semantik für Revisionen definieren.

---

# 26. Objektersetzung und Ableitung

Wenn ein Objekt von einem anderen abgeleitet wird, SOLLTE die Beziehung explizit sein.

Beispiel:

```json
{
  "id": "paragraph-02",
  "type": "paragraph",
  "provenance": {
    "derivedFrom": [
      "paragraph-01"
    ],
    "activity": "revision"
  }
}
```

Zu den möglichen Ableitungsaktivitäten gehören:

- Überarbeitung;
- Übersetzung;
- Normalisierung;
- import;
- Umwandlung;
- Extraktion;
- KI-gestützte Überarbeitung;
- redaktionelle Korrektur.

---

# 27. Sprache

Ein wissenschaftliches Objekt KANN seine Sprache unabhängig von der Sprache auf Handschriftenebene angeben.

Beispiel:

```json
{
  "id": "quotation-01",
  "type": "quotation",
  "metadata": {
    "language": "la"
  }
}
```

Sprachwerte SOLLTEN anerkannte Sprachkennungen verwenden, wie beispielsweise ISO-639-Sprachcodes, wie sie im Metadatenmodell definiert sind.

---

# 28. Fachspezifische Objekte

Verschiedene wissenschaftliche Disziplinen erfordern spezielle Objekttypen.

Beispiele hierfür sind:

## Geisteswissenschaften

- Archivquelle;
- Eintrag im kritischen Apparat;
- Handschriftzeugnis;
- Transkriptionssegment;
- redaktionelle Änderung.

## Mathematik

- Satz;
- Lemma;
- Beweis;
- Folgerung;
- mathematische Definition.

## Chemie

- chemische Struktur;
- Verbindung;
- Reaktion;
- Spektraldaten.

## Physik

- physikalische Größe;
- Versuchsaufbau;
- Messung;
- Unsicherheitsangabe.

## Biologie

- Probe;
- taxonomischer Name;
- Sequenz;
- Protokoll.

## Sozialwissenschaften

- Fragebogen;
- Variable;
- Beispiel;
- Interview-Beitrag.

Fachspezifische Objekte KÖNNEN das gemeinsame Scholarly Object Model erweitern.

Sie MÜSSEN die erforderlichen Eigenschaften „`id`“ und „`type`“ beibehalten.

---

# 29. Erweiterungsmodell

Eine Implementierung KANN Erweiterungs-Eigenschaften oder benutzerdefinierte Objekttypen einführen.

Erweiterungen SOLLTEN einen Bezeichner mit Namensraum verwenden.

Beispiel:

```json
{
  "id": "object-01",
  "type": "example.org:archival-witness",
  "extensions": {
    "example.org": {
      "shelfmark": "MS 42"
    }
  }
}
```

Erweiterungen mit Namensräumen verringern Konflikte zwischen unabhängigen Implementierungen.

---

## 29.1 Anforderungen an die Erweiterung

Eine Erweiterung:

1. Die Bedeutung einer Eigenschaft des KernOMIs darf NICHT neu definiert werden.
2. Die stabile Identität des Objekts MUSS gewahrt bleiben.
3. SOLLTE von Implementierungen, die dies nicht verstehen, ignoriert werden können.
4. SOLLTE öffentliche Dokumentation bereitstellen.
5. Es SOLLTEN Validierungsregeln definiert werden.
6. Das Basisobjekt darf NICHT uninterpretierbar werden, wenn die Erweiterung fehlt.

---

# 30. Graceful Degradation

Eine Implementierung, die auf einen unbekannten Objekttyp stößt, SOLLTE diesen nach Möglichkeit beibehalten.

Es KÖNNTE:

- eine allgemeine Darstellung anzeigen;
- den rohen semantischen Inhalt offenlegen;
- den Benutzer warnen;
- das Objekt unverändert weitergeben;
- ein entsprechendes Plugin anfordern.

Es SOLLTE unbekannte Objekte NICHT stillschweigend verwerfen.

Beispiel:

```text
Known object type
→ native editing and rendering

Unknown object type
→ preserve, identify, and render generically
```

Dieser Grundsatz ist für die langfristige Erweiterbarkeit von entscheidender Bedeutung.

---

# 31. Validierung

Ein wissenschaftliches Objekt gilt als gültig, wenn:

- es enthält einen gültigen Bezeichner;
- es enthält einen gültigen Typ;
- die erforderlichen typspezifischen Eigenschaften vorhanden sind;
- die darin enthaltenen Verweise innerhalb des deklarierten Gültigkeitsbereichs aufgelöst werden oder gültige externe Verweise sind;
- Seine Begrenzung führt nicht zu Zyklen;
- Die Erweiterungsdaten definieren die Kernsemantik nicht neu.

Die Validierung KANN auf mehreren Ebenen erfolgen:

```text
Syntax validation
        ↓
Schema validation
        ↓
Reference validation
        ↓
Semantic validation
        ↓
Workflow validation
```

Ein strukturell gültiges Objekt kann dennoch semantische Warnungen auslösen.

---

# 32. Unabhängigkeit von der Serialisierung

Das Scholarly-Objektmodell ist unabhängig vom Serialisierungsformat.

Es lässt sich wie folgt darstellen:

- JSON;
- JSON-LD;
- XML;
- CBOR;
- Datenbankeinträge;
- Graphstrukturen;
- zukünftige interoperable Formate.

Eine Serialisierung MUSS Folgendes beibehalten:

- Objektidentität;
- Objekttyp;
- semantischer Inhalt;
- explizite Beziehungen;
- erforderliche Metadaten;
- Herkunft, sofern vorhanden.

Serialisierungsspezifische Spezifikationen KÖNNEN zusätzliche Einschränkungen vorsehen.

---

# 33. Unabhängigkeit bei der Darstellung

Ein wissenschaftliches Objekt DARF NICHT von einer einzigen visuellen Darstellung abhängen.

Ein Notenobjekt könnte beispielsweise wie folgt dargestellt werden:

```text
HTML
→ popup or side panel

PDF
→ footnote or endnote

DOCX
→ native Word footnote

JATS XML
→ <fn>

Audio
→ spoken aside
```

Das Ziel bleibt dasselbe.

Nur der Renderer ändert sich.

---

# 34. Beispiel für ein Manuskriptdiagramm

```text
Manuscript
│
├── Metadata
│   ├── Title
│   ├── Authors
│   └── Keywords
│
├── Section
│   ├── Heading
│   ├── Paragraph
│   │   ├── Citation
│   │   └── Annotation
│   └── Figure
│       ├── Image Asset
│       └── Caption
│
├── Bibliography
│   └── Bibliographic Record
│
└── Supplementary Dataset
```

Dieselbe Grafik kann in verschiedene Publikationsformate übertragen werden, ohne dass sich ihre zugrunde liegende Semantik ändert.

---

# 35. Beispiel für eine Objektsammlung

```json
{
  "objects": [
    {
      "id": "manuscript-01",
      "type": "manuscript",
      "content": {
        "children": [
          "section-01"
        ]
      }
    },
    {
      "id": "section-01",
      "type": "section",
      "content": {
        "title": "Introduction",
        "children": [
          "paragraph-01"
        ]
      }
    },
    {
      "id": "paragraph-01",
      "type": "paragraph",
      "content": {
        "children": [
          {
            "type": "text",
            "value": "A manuscript is a graph of scholarly objects."
          }
        ]
      }
    }
  ]
}
```

Diese Darstellung dient lediglich der Veranschaulichung und stellt kein vollständiges Serialisierungsschema dar.

---

# 36. Beispiel für eine semantische Beziehung

```json
{
  "id": "annotation-01",
  "type": "annotation",
  "content": {
    "body": {
      "format": "text/plain",
      "value": "This claim requires further evidence."
    }
  },
  "relationships": [
    {
      "type": "targets",
      "source": [
        "annotation-01"
      ],
      "target": [
        "paragraph-01"
      ]
    }
  ]
}
```

Das Annotationsmodell ermöglicht eine präzisere Zielausrichtung mithilfe von Ankern.

---

# 37. Eigentumsverhältnisse bei Objekten

OMI legt das rechtliche Eigentum an wissenschaftlichen Objekten nicht fest.

Die Metadaten eines Objekts KÖNNEN Folgendes ausdrücken:

- Rechteinhaber;
- Lizenz;
- Urheberrechtshinweis;
- institutionelle Verwahrung;
- Zugriffsbeschränkungen.

Eigentumsrecht, Urheberschaft, Verwahrung und technische Kontrolle sind unterschiedliche Konzepte und SOLLTEN NICHT miteinander verwechselt werden.

---

# 38. Datenschutz

Ein wissenschaftliches Objekt KANN öffentliche, eingeschränkte, vertrauliche oder private Daten enthalten.

Die Einstufung des Datenschutzes SOLLTE, sofern relevant, ausdrücklich angegeben werden.

Beispiel:

```json
{
  "id": "review-01",
  "type": "review",
  "metadata": {
    "access": "confidential"
  }
}
```

Portable anonyme Überprüfungsobjekte DÜRFEN KEINE geschützten Identitätszuordnungen enthalten.

Die Datenschutzrichtlinie wird durch Workflow-Spezifikationen näher definiert.

---

# 39. Sicherheitsaspekte

Implementierungen MÜSSEN wissenschaftliche Objekte beim Import aus externen Systemen als nicht vertrauenswürdige Eingaben behandeln.

Sie SOLLTEN Schutz bieten vor:

- in Assets eingebettete ausführbare Inhalte;
- unsichere Markup-Elemente;
- Pfaddurchlauf;
- böswillige externe Verweise;
- Missbrauch des Schemas;
- übermäßig große Objektgraphen;
- zyklische Beziehungen;
- Kollisionen von Bezeichnern;
- Konflikte im Namensraum von Erweiterungen.

Die semantische Portabilität DARF NICHT die Ausführung von eingebettetem Code erfordern.

---

# 40. Überlegungen zur Erhaltung

Zur langfristigen Aufbewahrung:

1. Objektkennungen SOLLTEN unveränderlich bleiben.
2. Zentrale semantische Eigenschaften SOLLTEN selbsterklärend sein.
3. Unbekannte Dateiendungen SOLLTEN beibehalten werden.
4. Externe Abhängigkeiten SOLLTEN ausdrücklich angegeben werden.
5. Referenzierte Assets SOLLTEN nach Möglichkeit Integritätsinformationen enthalten.
6. Ausschließlich proprietäre Darstellungen SOLLTEN vermieden werden.
7. Transformationen SOLLTEN die Herkunftsdaten bewahren.

Ein gesichertes „OMI“-Paket sollte auch ohne die ursprüngliche Erstellungsanwendung weiterhin interpretierbar sein.

---

# 41. Überlegungen zur Barrierefreiheit

Wissenschaftliche Objekte SOLLTEN semantische und beschreibende Informationen enthalten, die für eine barrierefreie Darstellung erforderlich sind.

Beispiele hierfür sind:

- Alternativtext für Bilder;
- Beziehungen zwischen Tabellenüberschriften;
- Beschreibungen von Gleichungen;
- Sprachmetadaten;
- Strukturelle Überschriftenebenen;
- Transkriptverweise für Audio- oder Videomaterial;
- semantische Lesereihenfolge.

Barrierefreiheit ist Teil des Objektmodells und der Metadaten, nicht nur der endgültigen visuellen Benutzeroberfläche.

---

# 42. Konformität

Eine Implementierung entspricht dieser Spezifikation, wenn sie:

1. erkennt wissenschaftliche Objekte als eigenständig identifizierbare semantische Einheiten an;
2. behält die erforderlichen Objektkennungen und -typen bei;
3. stellt semantische Beziehungen explizit dar;
4. behandelt die Darstellung nicht als kanonischen Inhalt;
5. behält unbekannte Objekte und Erweiterungen bei, wann immer dies möglich ist;
6. gewährleistet die Referenzintegrität;
7. unterstützt die Validierung der Objektstruktur;
8. verwirft semantisch bedeutsame Objekte nicht stillschweigend.

---

## 42.1 Umsetzung der Autorensoftware

Eine konforme Autorensoftware-Implementierung SOLLTE:

- stabile Objektkennungen erstellen;
- Identifikatoren bei der normalen Bearbeitung beibehalten;
- aussagekräftige Objekttypen bereitstellen;
- für Ordnung und Sicherheit sorgen;
- die relevante Herkunft dokumentieren.

---

## 42.2 Umsetzung der Verarbeitung

Eine konforme Implementierung der Verarbeitung SOLLTE:

- die Identität des Objekts bewahren;
- unbekannte Eigenschaften und Erweiterungen beibehalten;
- Vermeiden Sie verlustbehaftete Transformationen;
- nicht unterstützte Objekttypen melden;
- Referenzen und Beziehungen überprüfen.

---

## 42.3 Implementierung des Renderings

Ein konformer Renderer SOLLTE:

- gemäß der Objektsemantik rendern;
- semantische Unterscheidungen beibehalten;
- barrierefreie Ausgabe unterstützen;
- Vermeiden Sie es, den kanonischen Objektgraphen zu ändern.

---

# 43. Entwurfsinvarianten

Alle Implementierungen SOLLTEN die folgenden Invarianten einhalten.

## 43.1 Identitätsinvariante

Ein wissenschaftliches Objekt bleibt unabhängig von seinem Standort oder seiner Darstellungsform identifizierbar.

## 43.2 Semantische Invariante

Die Bedeutung eines Objekts wird nicht ausschließlich durch die visuelle Gestaltung bestimmt.

## 43.3 Beziehungsinvariant

Semantische Verknüpfungen bleiben explizit und maschinenlesbar.

## 43.4 Portabilitätsinvariante

Objekte bleiben auch außerhalb der Anwendung, in der sie erstellt wurden, interpretierbar.

## 43.5 Invariant der Erweiterbarkeit

Unbekannte Erweiterungen führen nicht dazu, dass das zugrunde liegende Kernobjekt ungültig wird.

## 43.6 Erhaltungsinvariante

Objekte behalten genügend Kontext für eine spätere Interpretation bei.

## 43.7 Datenschutzinvariante

Sensible Identitäts- und Workflow-Informationen lassen sich weiterhin von portablen wissenschaftlichen Inhalten trennen.

---

# 44. Zusammenhang mit dem Dokumentmodell

Das „Scholarly Object Model“ definiert, was ein Objekt ist.

Das Dokumentmodell legt fest, wie wissenschaftliche Objekte in einem Manuskript strukturiert sind.

```text
Scholarly Object Model
→ common object semantics

Document Model
→ manuscript structure and composition
```

---

# 45. Zusammenhang mit dem Anker-Modell

Das Anker-Modell identifiziert ein gesamtes wissenschaftliches Objekt oder einen bestimmten Bereich innerhalb eines solchen.

```text
Scholarly Object
        │
        ▼
Anchor
        │
        ▼
Resolvable target
```

Eine stabile Identität wissenschaftlicher Objekte ist daher eine Voraussetzung für eine zuverlässige Verankerung.

---

# 46. Zusammenhang mit dem Annotationsmodell

Eine Anmerkung ist selbst ein wissenschaftliches Objekt.

Außerdem steht es in einer semantischen Beziehung zu einem oder mehreren verankerten Zielen.

```text
Annotation Object
        │
        ▼
Target Relationship
        │
        ▼
Anchor
        │
        ▼
Scholarly Object
```

---

# 47. Zusammenhang mit dem Überprüfungsmodell

Ein Begutachtungsbericht, ein Begutachtungskommentar, eine Empfehlung und eine redaktionelle Entscheidung können alle als spezielle wissenschaftliche Objekte dargestellt werden.

Ihre Sichtbarkeit, Anonymität, der Identitätsschutz und die Workflow-Regeln werden separat durch das Überprüfungsmodell festgelegt.

---

# 48. Zusammenhang mit dem Verlagsmodell

Das Publikationsmodell wandelt wissenschaftliche Objekte in publikationsspezifische Darstellungen um.

Das Objektmodell bleibt unverändert.

```text
Scholarly Object Graph
        │
        ▼
Publisher Profile
        │
        ▼
Renderer
        │
        ├── HTML
        ├── PDF
        ├── DOCX
        ├── EPUB
        └── JATS XML
```

---

# 49. Zukünftige Arbeiten

Zukünftige Versionen dieser Spezifikation könnten Folgendes definieren:

- kanonische Kernobjekttyp-Register;
- global auflösbare Objektbezeichner;
- Vokabulare für formale Beziehungen;
- Deklarationen von Objektfähigkeiten;
- Validierungsprofile;
- JSON Schema-Definitionen;
- JSON-LD-Kontexte;
- fachspezifische Objektprofile;
- kryptografische Integritätsmechanismen;
- Vokabulare zur Zugriffskontrolle auf Objektebene.

---

# 50. Zusammenfassung

Das Scholarly Object Model legt ein einfaches, aber wirkungsvolles Prinzip fest:

> Jeder wesentliche Bestandteil der wissenschaftlichen Kommunikation ist ein identifizierbares semantisches Objekt.

Ein „OMI“-Manuskript ist daher nicht nur ein formatierter Text.

Es handelt sich um einen portablen wissenschaftlichen Objektgraphen, der sich wie folgt zusammensetzt:

```text
Objects
+
Relationships
+
Metadata
+
Provenance
```

Dieses einheitliche Modell ermöglicht es, dass Manuskripte, Anmerkungen, Rezensionen, Zitate, Ressourcen und künftige wissenschaftliche Einheiten innerhalb einer kohärenten und erweiterbaren Architektur nebeneinander bestehen können.

---

> **Schreibe ganz natürlich. Einmal strukturieren. Überall veröffentlichen.**

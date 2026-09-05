---
id: anchor-model
title: OMI-SPEC-110 – Anker-Modell
sidebar_label: Anker-Modell
sidebar_position: 12
---

# OMI-SPEC-110 – Anker-Modell

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-003`

---

# Zweck

Das Anchor-Modell definiert, wie semantische Objekte mit wissenschaftlichen Inhalten verknüpft werden.

Im Gegensatz zu herkömmlichen Dokumentmodellen, die auf Seitenzahlen oder Zeichenpositionen verweisen, führt „OMI“ persistente semantische Anker ein.

Anker bieten stabile Bezugspunkte, die auch bei der Bearbeitung, Veröffentlichung und Formatkonvertierung erhalten bleiben.

Sie bilden die Bindegewebsschicht der Open Manuscript Initiative.

---

# Gestaltungsprinzipien

Das Anker-Modell basiert auf den folgenden Grundsätzen:

- Semantische Persistenz
- Layoutunabhängigkeit
- Stabile Identität
- Unterstützung mehrerer Ziele
- Versionserkennung
- Maschinenlesbarkeit
- Langzeitkonservierung

---

# Was ist ein Anker?

Ein Anker ist ein dauerhafter semantischer Verweis, der ein oder mehrere Ziele innerhalb eines Manuskripts identifiziert.

Ein Anker enthält selbst keine Inhalte.

Stattdessen verknüpft es semantische Objekte mit aussagekräftigen Teilen eines Manuskripts.

---

# Warum Anker?

Das traditionelle Verlagswesen stützt sich auf Seitenzahlen und Zeichenpositionen.

Diese Verweise werden ungültig, sobald sich der Text ändert.

OMI Anker sind eher an den semantischen Inhalt als an dessen visuelle Position gebunden.

Dies ermöglicht eine zuverlässige Zusammenarbeit während des gesamten Lebenszyklus eines Manuskripts.

---

# Ankerziele

„Anchor“ kann Folgendes bedeuten:

- ein Zeichenbereich
- ein Wort
- mehrere Wörter
- ein Satz
- ein Absatz
- mehrere Absätze
- ein Abschnitt
- eine Zahl
- eine Tabelle
- eine Formel
- ein Zitat
- ein Literaturverweiseintrag
- Metadaten
- das gesamte Manuskript

---

# Mehrere Ziele

Ein Anker kann auf mehrere Standorte verweisen.

Beispiel:

```text
Anchor A

├── Paragraph 2
├── Figure 4
└── Table 1
```

Auf diese Weise kann ein einziges semantisches Objekt Beziehungen beschreiben, die sich über verschiedene Teile des Manuskripts erstrecken.

---

# Semantische Beziehungen

Anker verbinden wissenschaftliche Objekte miteinander.

Beispiele hierfür sind:

Anmerkung
↓

Anker

↓

Textbereich

oder

Quellenangabe

↓

Anker

↓

Literaturverweis

oder

Übersetzung

↓

Anker

↓

Originalabsatz

---

# Objekte, die Anker verwenden

Nahezu jedes semantische Objekt innerhalb von „OMI“ kann auf einen oder mehrere Anker verweisen.

Beispiele hierfür sind:

- Anmerkungen
- Quellenangaben
- Zahlen
- Tabellen
- Glossareinträge
- Übersetzungen
- Kommentare der Rezensenten
- Anmerkungen der Redaktion
- KI-Vorschläge
- Aufgaben
- Querverweise
- Hyperlinks

---

# Anker-Metadaten

Jeder Anker enthält:

- Bezeichner
- Typ
- Ziel
- Urheber
- Erstellungszeitstempel
- Änderungshistorie
- Status

---

# Stabile Bezeichner

Jeder Anker erhält eine weltweit eindeutige Kennung.

Beispiel:

```text
anchor:3d91f88f-5d61-4d7e-a857-bf5b44d9f8a1
```

Persistente Identifikatoren gewährleisten verlässliche Verweise über verschiedene Versionen hinweg.

---

# Bearbeitungsverhalten

Anker sollten bei gewöhnlichen Bearbeitungsvorgängen erhalten bleiben.

Beispiele hierfür sind:

- Text einfügen
- Text löschen
- Absätze verschieben
- Abschnitte aufteilen
- Abschnitte zusammenführen

Das System gewährleistet kontinuierlich die Integrität von Anchor.

---

# Anker-Auflösung

Ändert sich das ursprüngliche Ziel wesentlich, versucht das System eine semantische Neuverknüpfung.

Mögliche Strategien sind unter anderem:

- genaue Übereinstimmung
- strukturelle Übereinstimmung
- kontextbezogene Übereinstimmung
- semantische Ähnlichkeit

Implementierungen können mehrere Strategien kombinieren.

---

# Sichtbarkeit

Anker selbst sind unsichtbar.

Die Benutzer interagieren mit den semantischen Objekten, die ihnen zugeordnet sind.

Zum Beispiel:

Fußnote

↓

Anker

↓

Ausgewählter Text

---

# Rendering

Verschiedene Veröffentlichungsformate stellen Anchor-basierte Objekte unterschiedlich dar.

Beispiel:

PDF

↓

Fußnote

HTML

↓

Tooltip

EPUB

↓

Endnote

JATS XML

↓

Semantisches Element

Der Anker selbst wird nie dargestellt.

Es wird nur das angehängte semantische Objekt angezeigt.

---

# Versionsverwaltung

Anker sind Teil der Dokumentversionskontrolle.

Die gleiche Anchor-Kennung sollte nach Möglichkeit über alle Überarbeitungen des Manuskripts hinweg gültig bleiben.

Dies ermöglicht einen zuverlässigen Vergleich zwischen den verschiedenen Versionen.

---

# Interoperabilität

Zukünftige Kartierungen könnten Folgendes umfassen:

- Datenmodell für Web-Annotationen
- W3C-Selektoren
- JATS XML
- HTML Fragment-Identifikatoren
- DOCX Kommentare
- PDF Anmerkungen

---

# Plugin-Erweiterungen

Plugins können zusätzliche Anker-Typen definieren.

Beispiele:

Geschichte – Profil

- Archivdokument
- Auszug aus der Charta

Mathematikprofil

- Beweisschritt
- Gleichungskomponente

Biologie-Profil

- Gensequenz
- Taxonomischer Knoten

---

# Zukünftige Arbeit

Zukünftige Spezifikationen werden Folgendes festlegen:

- Algorithmen zur Anker-Resolution
- Dokumentübergreifende Verknüpfungen
- Persistente globale Anker
- Integration von Linked Data
- Kooperative Konfliktlösung

---

# Änderungshistorie

- **0.1.0** — Umstellung von der vorläufigen URL `OMI-SPEC-003` auf die kanonische URL `OMI-SPEC-110`.

---

# Zusammenfassung

Das Anker-Modell bildet die semantische Grundlage von „OMI“.

Anstatt sich auf Seitenzahlen oder visuelle Positionen zu stützen, verknüpfen Anker wissenschaftliche Objekte direkt mit ihrer Bedeutung.

Dadurch können Anmerkungen, Zitate, Peer-Reviews, KI-Unterstützung, Übersetzungen und künftige wissenschaftliche Dienste über den gesamten Prozess der Bearbeitung, Veröffentlichung und Langzeitarchivierung hinweg stabil bleiben.

Anker verwandeln ein Manuskript von einem formatierten Dokument in ein vernetztes Wissensobjekt.

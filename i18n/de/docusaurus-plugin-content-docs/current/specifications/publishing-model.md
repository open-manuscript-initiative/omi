---
id: publishing-model
title: OMI-SPEC-230 — Veröffentlichungsmodell
sidebar_label: Veröffentlichungsmodell
sidebar_position: 16
---

# OMI-SPEC-230 — Veröffentlichungsmodell

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-007`

---

# Zweck

Das Publikationsmodell legt fest, wie ein semantisches Manuskript in ein oder mehrere Publikationsformate umgewandelt wird.

Im Gegensatz zu herkömmlichen Publikationsabläufen trennt „OMI“ wissenschaftliche Inhalte von der Darstellung.

Ein Manuskript wird einmal verfasst und viele Male wiedergegeben.

---

# Gestaltungsprinzipien

Das Veröffentlichungsmodell folgt diesen Grundsätzen:

- Einheitliche Datenquelle
- Semantische Darstellung
- Formatuunabhängigkeit
- Reproduzierbarkeit
- Interoperabilität
- Erweiterbarkeit
- Automatisierung

---

# Verlagsphilosophie

Veröffentlichen ist nicht dasselbe wie die Konvertierung von Dokumenten.

Unter „Veröffentlichung“ versteht man den Prozess der Umsetzung semantischen Wissens in publikationsspezifische Darstellungen.

Das Manuskript ändert sich nie.

Nur die Darstellung ändert sich.

---

# Veröffentlichungsablauf

```
Semantic Manuscript

        │

        ▼

Publication Profile

        │

        ▼

Rendering Engine

        │

        ▼

Publication Format
```

Jede Veröffentlichung wird aus derselben semantischen Quelle generiert.

---

# Publikationsprofile

Ein Publikationsprofil legt fest, wie ein Manuskript für eine bestimmte Zielgruppe gestaltet sein soll.

Profile können Folgendes definieren:

- Typografie
- Zitierweise
- Notenstil
- Layout
- Metadaten-Zuordnung
- Barrierefreiheitsanforderungen
- Markenbildung

Das Manuskript selbst bleibt unverändert.

---

# Unterstützte Ausgabemöglichkeiten

OMI ist so konzipiert, dass es mehrere Publikationsformate unterstützt.

Beispiele hierfür sind:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Crossref XML
- DataCite XML
- Markdown
- Klartext

Zukünftig können weitere Formate hinzugefügt werden, ohne dass das Manuskript geändert werden muss.

---

# Veröffentlichung für mehrere Zielgruppen

Ein Manuskript kann mehrere Ergebnisse gleichzeitig hervorbringen.

Beispiel:

```
Semantic Manuscript

        │

 ┌──────┼──────────────┐

 ▼      ▼              ▼

HTML    PDF       JATS XML

 ▼      ▼              ▼

Website Print     Repository
```

Jedes Ergebnis wird unabhängig abgeleitet.

---

# Render-Engine

Die Rendering-Engine interpretiert semantische Objekte und wendet Veröffentlichungsregeln an.

Beispiele:

Überschrift

↓

HTML

```
<h2>
```

↓

PDF

Große Überschrift

↓

JATS

```
<title>
```

Das semantische Objekt bleibt unverändert.

---

# Anmerkungen

Anmerkungen können unterschiedlich dargestellt werden.

Beispiele:

PDF

↓

Fußnoten

HTML

↓

Tooltips

EPUB

↓

Endnoten

JATS

↓

Semantische Elemente

---

# Quellenangaben

Die Darstellung der Zitate hängt vollständig vom Publikationsprofil ab.

Beispiele:

APA

↓

(Autor, Jahr)

Chicago

↓

Fußnote

IEEE

↓

[15]

Das Zitiermodell selbst ändert sich nie.

---

# Zahlen

Veröffentlichungsprofile legen Folgendes fest:

- Platzierung
- Bildunterschriften
- Nummerierung
- Querverweise
- Barrierefreiheit

---

# Tabellen

Profile können Folgendes definieren:

- Responsive HTML-Tabellen
- druckbare Tabellen
- Metadaten zur Barrierefreiheit
- Umgang mit langen Tabellen

---

# Gleichungen

Zu den unterstützten Darstellungsarten können gehören:

- MathML
- LaTeX
- SVG
- PDF Vektorausgabe

---

# Metadaten

Metadaten werden für jedes Ziel separat exportiert.

Beispiele:

Crossref XML

↓

Crossref-Schema

DataCite XML

↓

DataCite-Schema

JATS XML

↓

JATS Metadaten

Metadaten werden nicht manuell dupliziert.

---

# Barrierefreiheit

Bei der Veröffentlichung von Profilen sollte die Barrierefreiheit gewahrt bleiben.

Beispiele:

- semantische Überschriften
- Bildbeschreibungen
- Tabellenüberschriften
- Tastaturnavigation
- mit den Tags „PDF“
- EPUB Metadaten zur Barrierefreiheit

Die Anforderungen an die Barrierefreiheit sollten konfigurierbar sein.

---

# Erhaltung

Publikationsformate, die für die Langzeitarchivierung vorgesehen sind, sollten ihre semantische Integrität bewahren.

Zu den bevorzugten Formaten für die Aufbewahrung gehören:

- JATS XML
- PDF/A
- EPUB
- Markdown

Zukünftige Zuordnungen könnten Standards für institutionelle Repositorien unterstützen.

---

# Automatisierung

Publishing-Workflows können vollständig automatisiert werden.

Beispiel:

```
Review Completed

↓

Accept

↓

Generate HTML

↓

Generate PDF

↓

Generate JATS XML

↓

Deposit Metadata

↓

Publish
```

Eine manuelle Neuerstellung der Dokumente ist nicht erforderlich.

---

# Plugin-Architektur

Neue Veröffentlichungsformate werden über Plugins hinzugefügt.

Beispiele:

```
OMI Core

        │

        ├── HTML Renderer

        ├── PDF Renderer

        ├── EPUB Renderer

        ├── JATS Renderer

        ├── DOCX Renderer

        └── Custom Renderer
```

Das Kernmodell für die Veröffentlichung bleibt unverändert.

---

# Interoperabilität

Zu den geplanten Integrationen gehören:

- Open Journal Systems (OJS)
- Open Monograph Press (OMP)
- Open Preprint Systems (OPS)
- Crossref
- DataCite
- Zenodo
- Institutionelle Repositorien

---

# Versionsverwaltung

Jede Veröffentlichung ist reproduzierbar.

Eine veröffentlichte Veröffentlichung sollte stets rückverfolgbar sein zu:

- Manuskriptfassung
- Publikationsprofil
- Version der Render-Engine

Dies gewährleistet Reproduzierbarkeit und Transparenz.

---

# Zukünftige Arbeit

Zukünftige Spezifikationen werden Folgendes festlegen:

- Rendering-API
- Vorlagensprache
- Publikationsprofile
- Workflow-Automatisierung
- Kontinuierliche Veröffentlichung
- Dynamische Publikationen

---

# Änderungshistorie

- **0.1.0** — Von der vorläufigen Adresse `OMI-SPEC-007` auf die offizielle Adresse `OMI-SPEC-230` umgestellt.

---

# Zusammenfassung

Das „OMI“-Veröffentlichungsmodell wandelt ein einzelnes semantisches Manuskript in verschiedene Publikationsformate um, ohne den ursprünglichen wissenschaftlichen Inhalt zu verändern.

Durch die Trennung von semantischer Bedeutung und Darstellung ermöglicht „OMI“ automatisierte, reproduzierbare und interoperable Publikationsabläufe über Zeitschriften, Repositorien und zukünftige Plattformen der wissenschaftlichen Kommunikation hinweg.

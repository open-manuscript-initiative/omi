---
id: plugin-architecture
title: OMI-SPEC-300 — Plugin-Architektur
sidebar_label: Plugin-Architektur
sidebar_position: 17
---

# OMI-SPEC-300 — Plugin-Architektur

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-008`

---

# Zweck

Die Plugin-Architektur legt fest, wie die „Open Manuscript Initiative“ (OMI) erweitert werden kann, ohne die Core-Plattform zu verändern.

Jede Funktion, die nicht Teil des universellen wissenschaftlichen Arbeitsablaufs ist, sollte als Plugin implementiert werden.

Dies gewährleistet Modularität, Interoperabilität, Wartbarkeit und langfristige Nachhaltigkeit.

---

# Gestaltungsprinzipien

Die Plugin-Architektur folgt diesen Grundsätzen:

- Das Wesentliche zuerst
- Modularer Aufbau
- Stabile Schnittstellen
- Lose Kopplung
- Erweiterbar
- Plattformunabhängig
- Abwärtskompatibel

---

# Architekturübersicht

```
                OMI Core
                    │
    ┌───────────────┼────────────────┐
    │               │                │
    ▼               ▼                ▼
 Discipline     Renderer         Integration
  Plugins        Plugins           Plugins
    │               │                │
    ▼               ▼                ▼
 Annotation      HTML            OJS
 Metadata        PDF             Crossref
 Citation        EPUB            ORCID
 Review          JATS            Zenodo
```

Der Core definiert Schnittstellen.

Plugins implementieren Funktionen.

---

# OMI Kern

Der Core bietet ausschließlich universelle Funktionen.

Beispiele hierfür sind:

- Dokumentenmodell
- Anker-Modell
- Annotationsmodell
- Metadatenmodell
- Zitiermodell
- Bewertungsmodell
- Plugin „API“
- Ereignissystem

Alles andere gehört in Plugins.

---

# Plugin-Kategorien

## Plugins zur Disziplinierung

Stellen Sie fachspezifische wissenschaftliche Objekte bereit.

Beispiele:

- Geschichte
- Theologie
- Mathematik
- Physik
- Chemie
- Biologie
- Medizin
- Recht

---

## Renderer-Plugins

Publikationsformate erstellen.

Beispiele:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Markdown

---

## Integrations-Plugins

Verbinden Sie „OMI“ mit externen Diensten.

Beispiele:

- OJS
- OMP
- OPS
- Crossref
- DataCite
- ORCID
- ROR
- Zenodo
- GitHub

---

## Workflow-Plugins

Redaktionelle Arbeitsabläufe erweitern.

Beispiele:

- Doppelblind-Begutachtung
- Offene Rezension
- Redaktionelle Freigabe
- KI-Assistent
- Veröffentlichungspipeline

---

## UI-Plugins

Erweitern Sie die Benutzeroberfläche.

Beispiele:

- Paneele
- Redaktion
- Dashboards
- Symbolleisten
- Inspektoren

---

## Plugins importieren

Externe Dokumentformate importieren.

Beispiele:

- DOCX
- Markdown
- LaTeX
- JATS XML
- HTML

---

## Plugins exportieren

Semantische Manuskripte exportieren.

Beispiele:

- PDF
- EPUB
- DOCX
- XML
- JSON

---

# Plugin-Manifest

Jedes Plugin enthält ein Manifest.

Beispiel:

```yaml
id: omi-history
name: History Profile
version: 1.0.0
author: Open Manuscript Initiative
apiVersion: 1
license: MIT
```

---

# Lebenszyklus eines Plugins

Plugins durchlaufen einen festgelegten Lebenszyklus.

```
Install

↓

Register

↓

Initialize

↓

Activate

↓

Execute

↓

Deactivate

↓

Remove
```

---

# Plugin-Funktionen

Plugins geben ihre Funktionen explizit an.

Beispiele:

- fügt semantische Objekte hinzu
- stellt einen Renderer bereit
- importiert Dokumente
- Exportiert Publikationen
- überprüft Metadaten
- erweitert die Benutzeroberfläche
- überwacht Ereignisse

---

# Ereignissystem

Plugins kommunizieren über Ereignisse.

Beispiele:

```
DocumentOpened

↓

AnnotationCreated

↓

CitationAdded

↓

ReviewSubmitted

↓

ExportStarted

↓

PublicationCompleted
```

Plugins sollten direkte Abhängigkeiten nach Möglichkeit vermeiden.

---

# Erweiterungspunkte

Der Core stellt stabile Erweiterungspunkte bereit.

Beispiele:

- Dokumentobjekte
- Metadaten
- Anker
- Quellenangaben
- Rezension
- Rendering
- Importieren
- Exportieren
- Benutzeroberfläche

---

# Abhängigkeiten

Plugins können von anderen Plugins abhängig sein.

Beispiel:

```
History Plugin

↓

Citation Plugin

↓

Metadata Plugin
```

Zirkuläre Abhängigkeiten sind nicht zulässig.

---

# Versionskompatibilität

Jedes Plugin deklariert:

- Mindestversion von Core
- Maximal unterstützte Core-Version
- API Version

Dies ermöglicht sichere Upgrades.

---

# Sicherheit

Plugins werden innerhalb festgelegter Berechtigungen ausgeführt.

Mögliche Berechtigungen sind unter anderem:

- Manuskript lesen
- Manuskript überarbeiten
- Daten exportieren
- Zugangsnetz
- Dateien schreiben
- auf externe WebAPIen zugreifen

Benutzer sollten vor der Installation die erteilten Berechtigungen einsehen können.

---

# Plugin-Repository

OMI kann ein öffentliches Plugin-Repository bereitstellen.

Mögliche Kategorien:

- Offiziell
- Gemeinschaft
- Experimentell
- Zertifiziert

---

# Testen

Plugins sollten, soweit sinnvoll, automatisierte Tests bereitstellen.

Zu den empfohlenen Untersuchungen gehören:

- Einzeltests
- Integrationstests
- Kompatibilitätstests

---

# Dokumentation

Jedes Plugin sollte Folgendes enthalten:

- README
- Lizenz
- Änderungsprotokoll
- Installationsanleitung
- Anwendungshinweise

---

# Zukünftige Arbeit

Zukünftige Spezifikationen werden Folgendes festlegen:

- Plugin „API“
- Veranstaltungs-API
- UI-Erweiterung „API“
- Renderer-API
- Repository-Protokoll

---

# Änderungshistorie

- **0.1.0** — Umstellung von der vorläufigen Adresse `OMI-SPEC-008` auf die offizielle Adresse `OMI-SPEC-300`.

---

# Zusammenfassung

Die Plugin-Architektur von „OMI“ sorgt dafür, dass die Plattform schlank, stabil und erweiterbar bleibt.

Durch die Definition klarer Schnittstellen und Erweiterungspunkte ermöglicht „OMI“ den Communities, fachspezifische Funktionen, Publikationsformate, Integrationen und Arbeitsabläufe zu entwickeln, ohne die Core-Plattform zu verändern.

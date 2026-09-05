---
id: platform-api
title: OMI-SPEC-310 — Plattform-API
sidebar_label: Plattform-API
sidebar_position: 19
---

# OMI-SPEC-310 — Plattform-API

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-010`

---

# Zweck

Die Plattform „API“ legt fest, wie externe Anwendungen, Plugins, Automatisierungstools und Veröffentlichungsplattformen mit der „Open Manuscript Initiative“ (OMI) interagieren.

Das „API“ ist eher auf semantische wissenschaftliche Objekte als auf Dateien ausgerichtet.

---

# Gestaltungsprinzipien

Die Plattform „API“ orientiert sich an folgenden Grundsätzen:

- API Erstens
- Objektorientiert
- Ereignisgesteuert
- Plattformunabhängig
- Versioniert
- Sicher
- Erweiterbar

---

# API Ebenen

```
Applications

↓

REST API

↓

Event API

↓

Plugin API

↓

OMI Core
```

---

# Kernressourcen

Das „API“ macht wissenschaftliche Objekte zugänglich.

Beispiele:

- Dokumente
- Abschnitte
- Absätze
- Anker
- Anmerkungen
- Quellenangaben
- Metadaten
- Rezensionen
- Datensätze
- Autoren
- Zugehörigkeiten
- Publikationsprofile

---

# REST-API

Zu den typischen Endpunkten gehören:

```
GET    /documents

POST   /documents

GET    /documents/{id}

PATCH  /documents/{id}

DELETE /documents/{id}
```

Objekte werden als strukturierte „JSON“ ausgetauscht.

---

# Objekt-API

Jedes wissenschaftliche Objekt folgt einer einheitlichen Schnittstelle.

Beispiel:

```
GET /objects/{id}
```

Antwort:

```json
{
  "id": "omi:citation:8f5a21",
  "type": "Citation",
  "version": 4,
  "metadata": {},
  "relationships": {}
}
```

---

# Veranstaltungs-API

OMI veröffentlicht Ereignisse, die Änderungen im Manuskript beschreiben.

Beispiele:

- Dokument erstellt
- Dokument geöffnet
- Objekt erstellt
- Objekt aktualisiert
- AnkerErstellt
- Anmerkung hinzugefügt
- Zitierweise: validiert
- Bewertung eingereicht
- Veröffentlichung gestartet
- Veröffentlichung abgeschlossen

Plugins abonnieren Ereignisse, anstatt den Kern direkt zu verändern.

---

# Plugin-API

Plugins kommunizieren über stabile Schnittstellen mit OMI.

Beispiele:

```
register()

activate()

deactivate()

dispose()
```

Plugins greifen niemals auf interne Implementierungsdetails zu.

---

# Rendering API

Publikations-Renderer implementieren eine gemeinsame Schnittstelle.

Beispiel:

```
render(document, profile)
```

Mögliche Ergebnisse:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Markdown

---

# Validierungs-API

Validierungsdienste können wissenschaftliche Objekte prüfen.

Beispiele:

- Validierung von Metadaten
- Überprüfung der Quellenangaben
- Überprüfung der Barrierefreiheit
- Fachbezogene Validierung

Die Validierung liefert strukturierte Berichte.

---

# Authentifizierung

Zu den möglichen Authentifizierungsmethoden gehören:

- OAuth 2.1
- OpenID Connect
- API Token
- Dienstkonten

Authentifizierungsmethoden sind implementierungsabhängig.

---

# Genehmigung

Berechtigungen können auf verschiedenen Ebenen erteilt werden.

Beispiele:

- Dokument lesen
- Metadaten bearbeiten
- Anmerkung erstellen
- Bewertung abgeben
- Veröffentlichen
- Plugins verwalten

Die Autorisierung sollte eine rollenbasierte und eine objektbezogene Zugriffskontrolle unterstützen.

---

# Versionsverwaltung

Die „API“ ist versioniert.

Beispiel:

```
/api/v1/
/api/v2/
```

Kompatibilitätsbrechende Änderungen erfordern eine neue Version von „API“.

---

# Webhooks

Externe Systeme können Ereignisse abonnieren.

Beispiele:

```
POST

DocumentPublished

↓

https://journal.example/webhook
```

Zu den unterstützten Veranstaltungen können gehören:

- Veröffentlichung abgeschlossen
- Bewertung eingereicht
- Manuskript angenommen
- Metadaten aktualisiert

---

# Stapelverarbeitung

Der „API“ sollte die Stapelverarbeitung unterstützen.

Beispiele:

- Alle Quellenangaben überprüfen
- Metadaten neu generieren
- Alle Publikationsformate exportieren
- Objektsammlungen importieren

---

# API durchsuchen

Die Suche erfolgt eher semantisch als textbasiert.

Beispiele:

```
author = "Smith"

↓

all manuscripts
```

```
citation DOI = ...

↓

all references
```

```
object type = Figure

↓

all figures
```

---

# Interoperabilität

Zu den geplanten Integrationen gehören:

- OJS
- OMP
- OPS
- Crossref
- DataCite
- ORCID
- Zenodo
- GitHub
- n8n
- Zotero

---

# Zukünftige Arbeit

Zukünftige Spezifikationen werden Folgendes festlegen:

- GrafikAPI
- Abfragesprache
- Objekt-API
- Synchronisations-API
- AI-Erweiterung „API“

---

# Änderungshistorie

- **0.1.0** — Von der vorläufigen Adresse `OMI-SPEC-010` auf die offizielle Adresse `OMI-SPEC-310` umgestellt.

---

# Zusammenfassung

Die „OMI“-Plattform API bietet eine stabile, versionierte und objektorientierte Schnittstelle für die wissenschaftliche Kommunikation.

Anstatt Dateien bereitzustellen, stellt die „API“ semantische wissenschaftliche Objekte bereit und ermöglicht so die Interoperabilität zwischen Publikationssystemen, Repositorien, Automatisierungsplattformen und zukünftigen wissenschaftlichen Infrastrukturen.

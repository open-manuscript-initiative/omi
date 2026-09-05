---
id: metadata-model
title: OMI-SPEC-140 – Metadatenmodell
sidebar_label: Metadatenmodell
sidebar_position: 13
---

# OMI-SPEC-140 – Metadatenmodell

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-004`

---

# Zweck

Das Metadatenmodell legt fest, wie wissenschaftliche Metadaten in der „Open Manuscript Initiative“ (OMI) dargestellt werden.

Metadaten beschreiben das wissenschaftliche Objekt selbst und nicht dessen visuelle Darstellung.

Das Modell soll die Interoperabilität zwischen Autorenwerkzeugen, Veröffentlichungsplattformen, Repositorien, Indexierungsdiensten und Systemen zur Langzeitarchivierung gewährleisten.

---

# Gestaltungsprinzipien

Das Metadatenmodell folgt diesen Grundsätzen:

- Semantik an erster Stelle
- Maschinenlesbar
- Für Menschen verständlich
- Interoperabel
- Erweiterbar
- Beständig
- FAIR-kompatibel
- Plattformunabhängig

---

# Metadaten-Ebenen

OMI unterscheidet mehrere Metadatenebenen.

```
Document
│
├── Descriptive Metadata
├── Administrative Metadata
├── Technical Metadata
├── Preservation Metadata
└── Discipline-specific Metadata
```

---

# Beschreibende Metadaten

Beschreibt die wissenschaftliche Arbeit selbst.

Beispiele:

- Titel
- Untertitel
- Zusammenfassung
- Schlüsselwörter
- Sprache
- Betreff
- Disziplin
- Art der Veröffentlichung

---

# Metadaten zum Autor

Jeder Autor wird als semantisches Objekt dargestellt.

Beispiele:

- Vollständiger Name
- Bevorzugter Name
- ORCID
- Zugehörigkeit
- ROR Bezeichner
- E-Mail (optional)
- Land
- Biografie (optional)

Ein Autor kann mehreren Einrichtungen angehören.

---

# Metadaten zur Zugehörigkeit

Informationen zu den Institutionen sollten unabhängig von den Autoren bleiben.

Beispiele:

- Name der Einrichtung
- Abteilung
- Fakultät
- Land
- Stadt
- ROR Bezeichner
- Website

---

# Metadaten zu Identifikatoren

OMI unterstützt mehrere persistente Identifikatoren.

Beispiele:

- DOI
- ARK
- Griff
- ORCID
- ROR
- ISBN
- ISSN
- ISNI

Das Modell lässt mehrere Identifikatoren für dasselbe Objekt zu.

---

# Metadaten zur Veröffentlichung

Beispiele hierfür sind:

- Veröffentlichungsstatus
- Version
- Verlag
- Zeitschrift
- Umfang
- Thema
- Artikelnummer
- Seiten
- Erscheinungsdatum

---

# Metadaten zu Rechten

Zu den Informationen zu den Rechten gehören:

- Lizenz
- Urheberrechtsinhaber
- Urheberrechtsjahr
- Embargo
- Zugriffsrechte

Beispiele:

- MIT
- CC BY 4.0
- CC BY-SA
- CC BY-NC
- CC0

---

# Metadaten zur Finanzierung

Die Forschungsfinanzierung sollte ausdrücklich ausgewiesen werden.

Beispiele:

- Förderorganisation
- Fördernummer
- Titel des Förderprojekts
- Identifikationsnummer des Geldgebers

Zukünftige Versionen werden möglicherweise die Integration mit dem Crossref Funder Registry unterstützen.

---

# Metadaten zu Forschungsergebnissen

Ein Manuskript kann auf weitere Forschungsergebnisse verweisen.

Beispiele:

- Datensatz
- Software
- Protokoll
- Bildersammlung
- Zusatzmaterial
- Multimedia

Jede Ausgabe sollte nach Möglichkeit über eine eigene persistente Kennung verfügen.

---

# Metadaten zur Langzeitarchivierung

Für die Langzeitarchivierung sind zusätzliche Metadaten erforderlich.

Beispiele:

- Erstellungsdatum
- Änderungsdatum
- Versionsverlauf
- Prüfsumme
- Dateiformat
- Erhaltungszustand

Zukünftige Versionen werden möglicherweise an PREMIS angepasst.

---

# Fachspezifische Metadaten

Fachprofile können das Metadatenmodell erweitern.

Beispiele:

Geschichte

- Archiv
- Sammlung
- Signatur

Medizin

- Ethik-Genehmigung
- Kennung der klinischen Studie

Chemie

- CAS-Nummer
- Molekülformel

Biologie

- Taxonomische Kennung
- Gen-Kennung

Mathematik

- MSC-Klassifizierung

---

# Beziehungen zwischen Metadaten

Metadatenobjekte sind miteinander verknüpft.

Beispiel:

```
Author
    │
    ├── ORCID
    ├── Affiliation
    └── Funding

Affiliation
    │
    └── ROR
```

Beziehungen sind explizit und maschinenlesbar.

---

# Interoperabilität

Das Metadatenmodell ist auf Interoperabilität mit bestehenden Standards ausgelegt.

Zu den geplanten Zuordnungen gehören:

- JATS
- Crossref
- DataCite
- Dublin Core
- schema.org
- MARC21
- MODS
- BibTeX
- CSL JSON
- RIS

---

# Validierung

Metadaten sollten die Validierung unterstützen.

Beispiele hierfür sind:

- Pflichtfelder
- Validierung von Identifikatoren
- kontrollierte Vokabulare
- Sprachcodes
- Datumsformate

Die Validierungsregeln können je nach Publikationsprofil variieren.

---

# Erweiterbarkeit

Das Metadatenmodell lässt sich durch Plugins erweitern.

Plugins können Folgendes verursachen:

- neue Metadatenfelder
- fachspezifische Vokabeln
- Validierungsregeln
- Exportzuordnungen

ohne die Kernspezifikation zu ändern.

---

# Zukünftige Arbeit

Zukünftige Spezifikationen werden Folgendes festlegen:

- Zitiermodell
- Metadaten überprüfen
- Erhaltungsmodell
- Verknüpfte offene Daten
- Integration des Knowledge Graphs

---

# Änderungshistorie

- **0.1.0** — Von der vorläufigen Adresse `OMI-SPEC-004` auf die offizielle Adresse `OMI-SPEC-140` umgestellt.

---

# Zusammenfassung

Das Metadatenmodell „OMI“ bietet ein flexibles, erweiterbares und auf Standards basierendes Rahmenwerk zur Beschreibung wissenschaftlicher Objekte.

Durch die Trennung von Metadaten und Darstellung sowie die Unterstützung persistenter Identifikatoren und internationaler Standards ermöglicht „OMI“ eine nahtlose Interoperabilität zwischen den verschiedenen Ökosystemen des wissenschaftlichen Publizierens.

---
id: document-model
title: OMI-SPEC-100 – Dokumentenmodell
sidebar_label: Dokumentenmodell
sidebar_position: 10
---

# OMI-SPEC-100 – Dokumentenmodell

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-001`

---

# Zweck

Das „Open Manuscript Initiative“ (OMI) definiert ein semantisches Dokumentmodell, das speziell für die wissenschaftliche Kommunikation entwickelt wurde.

Im Gegensatz zu herkömmlichen Textverarbeitungsprogrammen trennt „OMI“ den wissenschaftlichen Inhalt von der visuellen Darstellung. Autoren beschreiben, *was* die Informationen darstellen, und nicht, *wie* sie dargestellt werden sollen.

Das Dokumentmodell dient als gemeinsame Grundlage für die Erstellung, Begutachtung, Veröffentlichung, Langzeitarchivierung und maschinelle Verarbeitung.

---

# Gestaltungsprinzipien

Das Dokumentmodell basiert auf den folgenden Grundsätzen:

- Semantik an erster Stelle
- Plattformunabhängig
- Für Menschen lesbar
- Maschinell verarbeitbar
- Erweiterbar
- Interoperabel
- Barrierefrei
- Langfristig haltbar

---

# Schichtbasierte Architektur

Das Dokumentmodell von „OMI“ besteht aus mehreren Ebenen.

```text
┌──────────────────────────────────────────────┐
│               Discipline Profiles            │
├──────────────────────────────────────────────┤
│               Scholarly Objects              │
├──────────────────────────────────────────────┤
│              Core Document Model             │
└──────────────────────────────────────────────┘
```

Das Kerndokumentmodell bleibt in allen Fachbereichen unverändert.

Übergeordnete Schichten erweitern die Kernspezifikation, ersetzen sie jedoch niemals.

---

# Kern-Dokumentmodell

Jedes „OMI“-Manuskript enthält einen gemeinsamen Satz semantischer Objekte.

## Metadaten

- Titel
- Untertitel
- Autoren
- Zugehörigkeiten
- ORCID
- Zusammenfassung
- Schlüsselwörter
- Sprache
- Lizenz
- Finanzierung
- Persistente Identifikatoren

---

## Dokumentstruktur

- Abschnitt
- Unterabschnitt
- Absatz
- Zitat
- Liste
- Abbildung
- Tabelle
- Bildunterschrift
- Gleichung
- Anhang

---

## Wissenschaftliche Objekte

- Quellenangabe
- Literaturverzeichnis
- Fußnote
- Endnote
- Querverweis
- Datensatz
- Software
- Zusatzmaterial
- Kommentar zur Rezension
- Anmerkung

---

# Fachprofile

Verschiedene wissenschaftliche Disziplinen benötigen spezielle semantische Objekte.

OMI erweitert das Kerndokumentenmodell um **Fachprofile**.

Ein Profil fügt neue Objekttypen, Validierungsregeln, Metadaten und Exportverhalten hinzu, ohne das zugrunde liegende Dokumentmodell zu verändern.

Beispiele hierfür sind:

- Geschichte
- Theologie
- Sprachwissenschaft
- Mathematik
- Physik
- Chemie
- Biologie
- Medizin
- Informatik
- Ingenieurwesen
- Wirtschaft
- Recht

---

# Beispiel: Verlaufsprofil

Das Profil „Geschichte“ führt in domänenspezifische semantische Objekte ein, wie zum Beispiel:

- Archivquelle
- Historische Persönlichkeit
- Historischer Ort
- Historisches Ereignis
- Quelle des Manuskripts
- Regest
- Kritischer Apparat
- Diplomatische Transkription

---

# Beispiel: Mathematik-Profil

Das Fachprofil „Mathematik“ erweitert das Modell um folgende Elemente:

- Definition
- Axiom
- Satz
- Lemma
- Folgerung
- Beweis
- Formel
- Symbolregister

---

# Beispiel: Physik-Profil

Zu den weiteren semantischen Objekten gehören:

- Gleichung
- Physikalische Konstante
- Messung
- Einheit
- Instrument
- Experiment
- Simulation

---

# Beispiel: Chemieprofil

Zu den weiteren semantischen Objekten gehören:

- Molekül
- Verbindung
- ReactIon
- Kristallstruktur
- Spektrum
- Chemische Formel

---

# Beispiel: Profil „Biologie“

Zu den weiteren semantischen Objekten gehören:

- Art
- Taxonomische Einordnung
- Gen
- Eiweiß
- DNA-Sequenz
- Muster

---

# Beispiel: Arzneimittelprofil

Zu den weiteren semantischen Objekten gehören:

- Klinische Studie
- Patientenkohorte
- Maßnahme
- Ergebnis
- Ethische Genehmigung
- CONSORT-Checkliste

---

# Mehrere Profile

Die wissenschaftliche Forschung wird zunehmend interdisziplinär.

Ein Manuskript in „OMI“ kann daher mehrere Fachprofile gleichzeitig verwenden.

Beispiel:

```text
History
+ Computer Science
+ Linguistics
```

oder

```text
Biology
+ Computer Science
+ Statistics
```

Jedes Profil fügt zusätzliche semantische Objekte hinzu und bleibt dabei vollständig kompatibel mit dem Core Document Model.

---

# Plugin-Architektur

Disziplinprofile werden als Plugins implementiert.

```text
OMI Core

    │

    ├── History Profile

    ├── Mathematics Profile

    ├── Physics Profile

    ├── Medicine Profile

    ├── Law Profile

    └── Custom Profile
```

Jedes Plugin kann Folgendes definieren:

- zusätzliche semantische Objekte
- Metadaten
- Validierungsregeln
- Exportzuordnungen
- Erweiterungen der Benutzeroberfläche

ohne den „OMI“-Kern zu verändern.

---

# Objektorientiertes Modell

Ein „OMI“-Manuskript besteht aus semantischen Objekten.

```text
Document
│
├── Metadata
├── Sections
├── Paragraphs
├── Figures
├── Tables
├── Citations
├── Bibliography
├── Annotations
├── Review Layer
└── Discipline Objects
```

Jedes Objekt verfügt über:

- eindeutige Kennung
- semantischer Typ
- Metadaten
- Beziehungen
- Versionsverlauf

---

# Semantische Beziehungen

Objekte können aufeinander verweisen.

Beispiele hierfür sind:

- Zitat → Eintrag im Literaturverzeichnis
- Abbildung → Bildunterschrift
- Satz → Beweis
- Archivquelle → Repository
- Person → ORCID
- Datensatz → DOI

Beziehungen sind explizit und maschinenlesbar.

---

# Erweiterbarkeit

Das Dokumentmodell ist auf eine langfristige Weiterentwicklung ausgelegt.

In zukünftigen Versionen werden möglicherweise weitere Objekttypen eingeführt, ohne dass dadurch bestehende Manuskripte beeinträchtigt werden.

Die Abwärtskompatibilität ist eine grundlegende Anforderung an das Design.

---

# Zukünftige Arbeit

Zukünftige Spezifikationen werden Folgendes festlegen:

- Annotationsmodell
- Bewertungsmodell
- Zitiermodell
- Metadatenmodell
- Veröffentlichungsmodell
- Plugin-API
- Spezifikation des Dateiformats

---

# Änderungshistorie

- **0.1.0** — Umstellung von der vorläufigen Adresse `OMI-SPEC-001` auf die offizielle Adresse `OMI-SPEC-100`.

---

# Zusammenfassung

Das Dokumentmodell „OMI“ ist darauf ausgelegt, wissenschaftliches Wissen darzustellen und nicht formatierte Dokumente.

Ein stabiles Kerndokumentmodell in Verbindung mit erweiterbaren Fachprofilen ermöglicht es „OMI“, alle wissenschaftlichen Disziplinen zu unterstützen und gleichzeitig Interoperabilität, Portabilität und langfristige Nachhaltigkeit zu gewährleisten.

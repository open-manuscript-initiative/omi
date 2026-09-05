---
id: review-model
title: OMI-SPEC-200 – Testmodell
sidebar_label: Bewertungsmodell
sidebar_position: 15
---

# OMI-SPEC-200 – Testmodell

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-006`

---

# Zweck

Das „Review Model“ legt fest, wie wissenschaftliche Begutachtungsprozesse innerhalb des „Open Manuscript Initiative“ (OMI) dargestellt werden.

Anstatt Peer-Review als externen Arbeitsablauf zu betrachten, modelliert „OMI“ Begutachtungen als semantische Objekte, die direkt mit dem Manuskript verknüpft sind.

Dieser Ansatz ermöglicht die gemeinsame Bearbeitung, transparente Überarbeitungsverläufe und Interoperabilität zwischen verschiedenen Veröffentlichungsplattformen.

---

# Gestaltungsprinzipien

Das Überprüfungsmodell folgt diesen Grundsätzen:

- Semantik an erster Stelle
- Workflow-unabhängig
- Unabhängig vom Rezensenten
- Plattformunabhängig
- Transparent
- Erweiterbar
- Beständig
- Maschinenlesbar

---

# Rezension als semantische Ebene

Eine Rezension ist nicht Bestandteil des Manuskripts.

Stattdessen bilden Bewertungen eine eigenständige semantische Ebene, die über Anker verknüpft ist.

```
Document
    │
    ├── Content Layer
    ├── Annotation Layer
    └── Review Layer
```

Das Manuskript bleibt unverändert, während sich die Informationen zur Begutachtung unabhängig davon weiterentwickeln.

---

# Objekte überprüfen

Eine Rezension besteht aus semantischen Objekten.

Beispiele hierfür sind:

- Rezension
- Rezensent
- Empfehlung
- Kommentar zur Rezension
- Redaktionelle Entscheidung
- Antwort des Autors
- Antrag auf Überarbeitung

Jedes Objekt verfügt über eine eigene Kennung und eigene Metadaten.

---

# Rollen überprüfen

OMI unterscheidet verschiedene Teilnehmerrollen.

Beispiele:

- Autor
- Rezensent
- Redakteur
- Gastredakteur
- Chefredakteur
- Verlag
- KI-Assistent

Über Plugins können weitere Rollen hinzugefügt werden.

---

# Testmodelle

OMI unterstützt verschiedene Überprüfungsabläufe.

Beispiele hierfür sind:

- Einseitig verblindet
- Doppelblind
- Dreifachblind
- Offene Überprüfung
- Transparente Bewertung
- Gemeinsame Überprüfung
- Überprüfung nach der Veröffentlichung

Der Arbeitsablauf wird durch das Publikationsprofil und nicht durch das Manuskript selbst festgelegt.

---

# Kommentare zur Rezension

Bewertungskommentare sind semantische Anmerkungen, die über Anker hinzugefügt werden.

Ein Kommentar kann sich auf Folgendes beziehen:

- ein Wort
- ein Satz
- ein Absatz
- eine Zahl
- eine Tabelle
- eine Formel
- Metadaten
- das gesamte Manuskript

Kommentare bleiben auch dann gültig, wenn das Manuskript neu formatiert wird.

---

# Metadaten überprüfen

Jede Rezension enthält:

- Bezeichner
- Rezensent
- Art der Bewertung
- Empfehlung
- Zeitstempel
- Version
- Sichtbarkeit
- Status

---

# Empfehlungen zur Überprüfung

Zu den typischen Empfehlungen gehören:

- Akzeptieren
- Geringfügige Überarbeitung
- Umfassende Überarbeitung
- Erneut einreichen
- Ablehnen

In den Veröffentlichungsprofilen können zusätzliche Empfehlungen festgelegt sein.

---

# Redaktionelle Entscheidungen

Redaktionelle Entscheidungen sind eigenständige semantische Objekte.

Beispiele:

- Ablehnung ohne Begutachtung
- Zur Überprüfung weiterleiten
- Überarbeitung erforderlich
- Akzeptieren
- Ablehnen
- Veröffentlichen

Jede Entscheidung kann sich auf eine oder mehrere Überprüfungen beziehen.

---

# Antworten der Autoren

Autoren können direkt auf die Kommentare der Gutachter eingehen.

```
Reviewer Comment

↓

Author Response

↓

Editorial Decision
```

Die gesamte Diskussion bleibt über persistente Identifikatoren verknüpft.

---

# Sichtbarkeit

Prüfobjekte unterstützen verschiedene Sichtbarkeitsstufen.

Beispiele:

- Privat
- Nur für Rezensenten
- Nur für Redakteure
- Autoren
- Öffentlich

Die Sichtbarkeit kann sich im Laufe des Manuskriptzyklus ändern.

---

# Versionsverwaltung

Prüfungen sind versionsabhängig.

Das System bewahrt Folgendes:

- Originalrezension
- überarbeitete Rezension
- Antworten der Autoren
- redaktionelle Entscheidungen

Es wird nichts überschrieben.

---

# Zeitplan für die Überprüfung

Jede Überprüfungsveranstaltung wird aufgezeichnet.

Beispiel:

```
Submission

↓

Editorial Screening

↓

Reviewer Invitation

↓

Peer Review

↓

Revision

↓

Acceptance

↓

Publication
```

Die Zeitleiste wird Teil der Entstehungsgeschichte des Manuskripts.

---

# KI-gestützte Überprüfung

Künstliche Intelligenz könnte den Gutachtern helfen.

Beispiele hierfür sind:

- Sprachanalyse
- Validierung von Metadaten
- Überprüfung der Quellenangaben
- Konsistenzprüfung
- Barrierefreiheitsprüfung
- Plagiatsindikatoren

KI-Vorschläge sind eindeutig gekennzeichnet und ersetzen niemals das menschliche Urteilsvermögen.

---

# Interoperabilität

Zu den künftigen Kartierungen gehören:

- OJS Prüfungsablauf
- JATS Fachkollegenbegutachtung
- DocMaps
- COAR-Benachrichtigung
- Web-Annotation
- Hypothes.is

---

# Plugin-Erweiterungen

Plugins können Folgendes verursachen:

- fachspezifische Überprüfungsmodelle
- Vorlagen für Bewertungen
- Bewertungssysteme
- Redaktionelle Arbeitsabläufe
- Veröffentlichungsrichtlinien

ohne den „OMI“-Kern zu verändern.

---

# Zukünftige Arbeit

Zukünftige Spezifikationen werden Folgendes festlegen:

- Modell für den redaktionellen Arbeitsablauf
- Entscheidungsmodell
- KI-Rezension „API“
- Analysen überprüfen
- Reputation der Rezensenten

---

# Änderungshistorie

- **0.1.0** — Umstellung von der vorläufigen Adresse `OMI-SPEC-006` auf die offizielle Adresse `OMI-SPEC-200`.

---

# Zusammenfassung

Das „OMI“-Review-Modell betrachtet das Peer-Review-Verfahren als eine vollwertige semantische Komponente der wissenschaftlichen Kommunikation.

Durch die Trennung der Begutachtungsinformationen vom Manuskriptinhalt bei gleichzeitiger Verknüpfung beider Elemente über persistente Anker ermöglicht „OMI“ transparente, übertragbare und plattformunabhängige wissenschaftliche Begutachtungsabläufe.

---
id: annotation-model
title: OMI-SPEC-130 – Annotationsmodell
sidebar_position: 3
description: Architektur für die semantische Annotation portabler wissenschaftlicher Manuskripte.
---

# OMI-SPEC-130 – Annotationsmodell

**Status:** Entwurf  
**Version:** 0.2.0  
**Alte Kennung:** `OMI-SPEC-003`  
**Basiert auf:** OMI-SPEC-100 (Dokumentmodell), OMI-SPEC-110 (Anker-Modell), OMI-SPEC-120 (Wissenschaftliches Objektmodell)

---

## Zusammenfassung

Das Annotationsmodell legt fest, wie semantische Informationen in einem Dokument des „Open Manuscript Initiative“ (OMI) an wissenschaftliche Objekte angehängt werden.

Im Gegensatz zu herkömmlichen Textverarbeitungsprogrammen sind Anmerkungen **eigenständige wissenschaftliche Objekte**. Sie sind nicht an Seitenpositionen, sondern an feste Ankerpunkte gebunden, wodurch Manuskripte während ihres gesamten Lebenszyklus portabel, maschinenlesbar und publikationsunabhängig bleiben.

Dieses Modell dient als Grundlage für Notizen, Kommentare, Peer-Reviews, KI-Vorschläge, redaktionelle Anweisungen, semantische Zitate und zukünftige Annotationstypen.

---

# 1. Motivation

Herkömmliche Textverarbeitungsprogramme behandeln Anmerkungen als Formatierungselemente, die an ein visuelles Layout gebunden sind.

Dieser Ansatz weist erhebliche Einschränkungen auf:

- Noten brechen beim Bearbeiten auseinander
- Kommentare sind anwendungsspezifisch
- Prüfdaten lassen sich nicht ohne Weiteres austauschen
- KI-Annotationen können nicht beibehalten werden
- Veröffentlichungsformate erfordern eher eine Konvertierung als eine Transformation

OMI ersetzt dieses Modell durch eine semantische Architektur.

Anmerkungen werden wissenschaftlichen Objekten zugeordnet – nicht einzelnen Seiten.

---

# 2. Gestaltungsprinzipien

Anmerkungen MÜSSEN:

- unabhängig vom Dokumentlayout existieren
- Referenz-Stabilitätsanker
- die strukturelle Bearbeitung überstehen
- Unterstützung mehrerer Anmerkungs-Ebenen
- maschinenlesbar bleiben
- weiterhin manuell bearbeitbar bleiben
- in verschiedenen Publikationsformaten übertragbar sein

Anmerkungen gehören NIEMALS zu einer gerenderten Seite.

Sie gehören zu den semantischen Objekten.

---

# 3. Architektur

```
Manuscript

├── Metadata
├── Sections
├── Blocks
├── Figures
├── Tables
├── Equations
├── References
├── Notes
└── Annotations
```

Anmerkungen bilden eine eigenständige Sammlung.

Dokumentobjekte enthalten niemals eingebettete Anmerkungsdaten.

---

# 4. Zielmodell

Jede Anmerkung verweist auf einen oder mehrere Anker.

```
Annotation
      │
      ▼
Anchor
      │
      ▼
Scholarly Object
```

Anker werden durch das Anker-Modell definiert und bieten auch nach der Bearbeitung stabile Referenzpunkte.

---

# 5. Unterstützte Ziele

Anmerkungen KÖNNEN sich auf Folgendes beziehen:

- Manuskript
- Abschnitt
- Unterabschnitt
- Absatz
- Inline-Textbereich
- Abbildung
- Abbildungsbereich
- Tabelle
- Tabellenzelle
- Gleichung
- Literaturverweis
- Zitat
- Glossareintrag
- Metadatenfeld
- Autor
- Kommentar zur Rezension
- externe Quelle

Zukünftige Objekttypen KÖNNEN diese Liste erweitern.

---

# 6. Annotationstypen

OMI definiert Annotationen anhand ihrer semantischen Rolle und nicht anhand ihrer Darstellung.

## Anmerkungen

- Fußnote
- Endnote
- Anmerkung des Autors
- Anmerkung der Redaktion
- Anmerkung des Übersetzers

---

## Kommentare

- Kommentar
- Antwort
- Diskussionsfaden
- gelöster Kommentar

---

## Rezension

- umfassende Überarbeitung
- geringfügige Überarbeitung
- Frage
- Empfehlung
- Genehmigung
- Ablehnung

---

## Quellenangabe

- stützt die Behauptung
- widerspricht
- Hintergrund
- Primärquelle
- Sekundärquelle

---

## KI

- Vorschlag zur Überarbeitung
- Grammatikvorschlag
- Übersetzung
- Vorschlag zur Terminologie
- Faktencheck
- Warnung bezüglich der Konsistenz

---

## Verlagswesen

- Lektorat
- Korrekturlesen
- Fertigungsanweisung
- Satzanweisung
- Anmerkung des Verlags

---

# 7. Datenmodell

Beispiel:

```json
{
  "id": "annotation-001",

  "type": "footnote",

  "target": {
    "anchor": "anchor-15"
  },

  "body": {
    "content": "The original manuscript contains a different reading."
  },

  "creator": "orcid:0000-0002-1234-5678",

  "created": "2026-07-21T12:00:00Z",

  "modified": "2026-07-21T12:10:00Z"
}
```

---

# 8. Mehrere Ziele

Eine Anmerkung KANN sich auf mehrere wissenschaftliche Objekte beziehen.

Beispiel:

```
Paragraph 2

+

Figure 5

+

Table 3
```

Auf diese Weise kann eine wissenschaftliche Erklärung mehrere miteinander in Zusammenhang stehende Objekte gleichzeitig beschreiben.

---

# 9. Umfangreiche Anmerkungen

Annotationskörper sind selbst „OMI“-Dokumente.

Daher KÖNNEN Anmerkungen Folgendes enthalten:

- formatierter Text
- Quellenangaben
- mathematische Ausdrücke
- Zahlen
- Tabellen
- semantische Verknüpfungen
- verschachtelte Anmerkungen

Anmerkungen sind nicht auf reinen Text beschränkt.

---

# 10. Stabile Verankerung

Anmerkungen DÜRFEN NICHT von folgenden Faktoren abhängen:

- Seitenzahlen
- gerenderte Koordinaten
- visuelle Gestaltung

Stattdessen verweisen sie auf stabile Anker, die in der Norm „OMI-SPEC-110“ definiert sind.

---

# 11. Rendering

Die Darstellung hängt vom Renderer ab.

Die gleiche Anmerkung kann wie folgt dargestellt werden:

| Ausgabe | Darstellung |
|---------|-----------|
| HTML | Popup |
| PDF | Fußnote |
| EPUB | Endnote |
| DOCX | Native Fußnote |
| JATS XML | `<fn>` |
| Web-Rezension | Kommentar in der Seitenleiste |

Das Manuskript selbst ändert sich nie.

Es ändert sich lediglich die Darstellung.

---

# 12. Zusammenarbeit

Anmerkungen unterstützen die Zusammenarbeit.

Jede Anmerkung speichert ihre eigenen:

- Urheber
- Zeitstempel
- Änderungshistorie
- Status
- Berechtigungen

Dies ermöglicht:

- gemeinsames Schreiben
- Fachkollegenbegutachtung
- Redaktionelle Arbeitsabläufe
- KI-gestützte Bearbeitung

---

# 13. Erweiterbarkeit

Verlage und Softwarehersteller KÖNNEN zusätzliche Annotationstypen einführen.

Beispiele:

- Rechtlicher Hinweis
- taxonomische Annotation
- sprachwissenschaftliche Analyse
- Anmerkung zur historischen Quelle
- Chemikalienwarnung
- klinische Beobachtung

Benutzerdefinierte Annotationstypen SOLLTEN ihre semantische Rolle deklarieren, um die Interoperabilität zu gewährleisten.

---

# 14. Zusammenhang mit anderen Spezifikationen

Diese Spezifikation basiert auf:

- OMI-SPEC-100 – Dokumentmodell
- OMI-SPEC-110 – Anker-Modell
- OMI-SPEC-120 — Wissenschaftliches Objektmodell

und bildet die Grundlage für:

- OMI-SPEC-200 – Testmodell
- OMI-SPEC-190 – Modell für Zusammenarbeit und Berechtigungen
- OMI-SPEC-210 – Zitiermodell
- OMI-SPEC-230 — Veröffentlichungsmodell

---

# 15. Änderungshistorie

- **0.2.0** — Umstellung von der vorläufigen Adresse `OMI-SPEC-003` auf die kanonische Adresse `OMI-SPEC-130` sowie Korrektur der Abhängigkeiten.

---

# 16. Philosophie

In „OMI“ sind Anmerkungen wissenschaftliche Objekte erster Ordnung.

Eine Fußnote, eine Anmerkung aus dem Peer-Review-Verfahren, eine redaktionelle Anweisung, ein KI-Vorschlag oder ein semantisches Zitat sind allesamt Beispiele für dasselbe Konzept:

> **Eine semantische Beziehung, die an einen festen wissenschaftlichen Anker geknüpft ist.**

Durch die Trennung von Inhalt, Beziehungen und Darstellung ermöglicht „OMI“ wirklich portable wissenschaftliche Manuskripte, die sich während des gesamten Prozesses vom Verfassen über die Begutachtung bis hin zur Veröffentlichung, Aufbewahrung und Wiederverwendung weiterentwickeln können, ohne dabei ihre semantische Bedeutung zu verlieren.

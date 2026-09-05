---
id: core-principles
title: OMI-SPEC-000 — Grundprinzipien
sidebar_position: 1
description: Grundprinzipien der „Open Manuscript Initiative“.
---

# OMI-SPEC-000 — Grundprinzipien

**Status:** Entwurf  
**Version:** 0.1

---

# Zusammenfassung

Die „Open Manuscript Initiative“ (OMI) basiert auf der Überzeugung, dass wissenschaftliche Erkenntnisse unabhängig von bestimmter Software, bestimmten Verlagen, Dateiformaten oder Darstellungstechnologien existieren sollten.

Dieses Dokument definiert die Architekturprinzipien, die als Leitlinien für jede Spezifikation und Umsetzung von „OMI“ dienen.

Diese Grundsätze sind normativ. Alle künftigen „OMI“-Spezifikationen SOLLTEN mit ihnen im Einklang stehen.

---

# 1. Vision

Wissenschaftliches Wissen sollte:

- tragbar
- interoperabel
- maschinenlesbar
- für Menschen lesbar
- verlagunabhängig
- softwareunabhängig
- für künftige Generationen erhalten bleiben

OMI wurde ins Leben gerufen, um diese Ziele zu erreichen.

---

# 2. Trennung der Anliegen

OMI trennt Konzepte, die in herkömmlichen Dokumenteneditoren miteinander verschmelzen.

Die folgenden Ebenen sind voneinander unabhängig:

```
Knowledge

↓

Semantics

↓

Structure

↓

Relationships

↓

Presentation
```

Nur die Darstellungsschicht hängt vom Veröffentlichungsformat ab.

Alles andere bleibt unverändert.

---

# 3. Der Inhalt ist kanonisch

Der wissenschaftliche Inhalt ist die kanonische Darstellung.

Alle gerenderten Formulare leiten sich davon ab.

Beispiele hierfür sind:

- PDF
- HTML
- DOCX
- EPUB
- JATS XML
- LaTeX
- zukünftige Formate

Keines dieser Formate definiert das Manuskript.

Sie geben es lediglich wieder.

---

# 4. Semantik vor Formatierung

Formatierung ist Darstellung.

Semantik ist Wissen.

OMI speichert eher die semantische Bedeutung als das visuelle Erscheinungsbild.

Beispiele:

Statt:

> Fett

OMI Geschäfte:

> Überschrift

Statt:

> Kursiv

OMI Geschäfte:

> Wissenschaftlicher Name

Statt:

> Formatierung von Fußnoten

OMI Geschäfte:

> Wissenschaftliche Anmerkung

---

# 5. Alles ist ein wissenschaftliches Objekt

Jedes aussagekräftige Element wird als eigenständiges wissenschaftliches Objekt dargestellt.

Beispiele hierfür sind:

- Manuskript
- Abschnitt
- Absatz
- Überschrift
- Abbildung
- Tabelle
- Gleichung
- Zitat
- Literaturverweiseintrag
- Anmerkung
- Rezension
- Datensatz
- ergänzendes Material

Objekte besitzen stabile Identitäten, die unabhängig von der Darstellung sind.

---

# 6. Beziehungen haben denselben Stellenwert wie andere Elemente

Beziehungen sind nicht in der Formatierung verborgen.

Es handelt sich um explizite semantische Objekte.

Beispiele hierfür sind:

- Zitat
- Anmerkung
- Rezension
- Querverweis
- Abhängigkeit
- Herkunft

Beziehungen bleiben übertragbar.

---

# 7. Stabile Identität

Jedes wissenschaftliche Objekt sollte über einen stabilen Identifikator verfügen.

Identifikatoren behalten auch nach der Bearbeitung ihre Gültigkeit.

Eine stabile Identität ermöglicht:

- Anmerkungen
- Quellenangaben
- Zusammenarbeit
- Fachkollegenbegutachtung
- Versionsverwaltung

---

# 8. Die Darstellung ist vom Renderer abhängig

Die Darstellung hängt vollständig vom jeweiligen Veröffentlichungsformat ab.

Aus demselben Manuskript könnte Folgendes werden:

- PDF
- HTML
- EPUB
- DOCX
- JATS XML
- Blindenschrift
- Sprachsynthese
- Zukunftsmedien

ohne das zugrunde liegende Manuskript zu ändern.

---

# 9. Identität und Inhalt sind voneinander unabhängig

Die persönliche Identität ist kein wesentlicher Bestandteil wissenschaftlicher Inhalte.

Autoren, Gutachter, Lektoren, Übersetzer und KI-Assistenten interagieren mit Manuskripten anhand klar definierter semantischer Rollen.

Datenschutz und Anonymität sind Aspekte der Implementierung, die durch das Datenmodell unterstützt werden und nicht in den Dokumentinhalt eingebettet sind.

---

# 10. Von Grund auf offen

Alle Spezifikationen für „OMI“ MÜSSEN wie folgt lauten:

- offen dokumentiert
- offen versioniert
- offen umsetzbar
- herstellerunabhängig
- erweiterbar

Keine Umsetzung darf verbindlich vorgeschrieben werden.

---

# 11. Erhaltung an erster Stelle

Wissenschaftliche Manuskripte müssen auch noch Jahrzehnte später verständlich bleiben.

Daher vermeidet „OMI“ Abhängigkeiten von:

- proprietäre Software
- proprietäre Dateiformate
- proprietäre Cloud-Dienste
- proprietäre Rendering-Engines

Das semantische Manuskript bleibt die Archivunterlage.

---

# 12. Interoperabilität

OMI ist darauf ausgelegt, mit der bestehenden wissenschaftlichen Infrastruktur zusammenzuarbeiten.

Beispiele hierfür sind:

- JATS
- Crossref
- DataCite
- ORCID
- DOI
- ROR
- CSL
- Dublin Core
- Schema.org
- IIIF

OMI ergänzt bestehende Standards, anstatt sie zu ersetzen.

---

# 13. Künstliche Intelligenz

Künstliche Intelligenz wird als wissenschaftlicher Akteur betrachtet.

Von KI generierte Vorschläge:

- sind Anmerkungen
- weiterhin zurechenbar sein
- können überprüft werden
- sind reversibel
- Das kanonische Manuskript darf niemals automatisch ersetzt werden.

Menschliche Autoren behalten die redaktionelle Entscheidungsgewalt.

---

# 14. Erweiterbarkeit

OMI ist bewusst erweiterbar.

Neue wissenschaftliche Objekttypen, Annotationstypen, Publikationsformate und Arbeitsabläufe können eingeführt werden, ohne dass bestehende Manuskripte dadurch beeinträchtigt werden.

Die Abwärtskompatibilität sollte, soweit dies praktikabel ist, gewahrt bleiben.

---

# 15. Verwaltung der Gemeinschaft

OMI ist eine von der Community entwickelte Spezifikation.

Seine Weiterentwicklung sollte sich an folgenden Grundsätzen orientieren:

- Transparenz
- öffentliche Diskussion
- wissenschaftlicher Konsens
- technische Exzellenz
- langfristige Nachhaltigkeit

Der Standard gehört keiner einzelnen Institution oder keinem einzelnen Anbieter.

---

# 16. Philosophie

Das „Open Manuscript Initiative“ ist nicht nur ein Dokumentformat.

Es handelt sich um eine offene semantische Architektur für die wissenschaftliche Kommunikation.

OMI trennt Wissen von der Darstellung, Bedeutung von der Formatierung und wissenschaftliche Inhalte von der Software.

Auf diese Weise ermöglicht es, dass Manuskripte frei zwischen Disziplinen, Verlagen, Technologien und Generationen zirkulieren können, während ihre intellektuelle Integrität gewahrt bleibt.

> **Schreibe ganz natürlich. Einmal strukturieren. Überall veröffentlichen.**

---
id: import-export-model
title: OMI-SPEC-340 — Import- und Exportmodell
sidebar_label: Import- und Exportmodell
description: Nichtnormativer deutschsprachiger Überblick über den Entwurf OMI-SPEC-340 0.1.0.
---

# OMI-SPEC-340 — Import- und Exportmodell

**Stand:** Draft 0.1.0 — 31. Oktober 2026.

**Diese Seite ist eine informative Zusammenfassung, keine vollständige normative Übersetzung.** Der verbindliche Text ist der [englische OMI-SPEC-340-Entwurf](https://openmanuscript.org/docs/specifications/import-export-model/) mit den Anforderungen `REQ-IO-001` bis `REQ-IO-034`. Ein Entwurf ist keine stabile Spezifikation und bestätigt keine Studio-Konformität.

## Zweck und Abgrenzung

Das Modell beschreibt die überprüfbare Konvertierung von Fremdformaten in ein kanonisches OMI-Manuskript und den Export in Zielformate. Es behandelt semantische Abbildungen, Verlustmeldungen, Herkunftsinformationen und Round-Trip-Prüfungen. Die logische Dateidarstellung (`OMI-SPEC-320`), Verpackung (`OMI-SPEC-330`), Veröffentlichung (`OMI-SPEC-230`) und Darstellung (`OMI-SPEC-240`) bleiben eigenständige Bereiche.

## Kernelemente

1. **Nachvollziehbare Operation:** Quell- und Zielformat, Versionen, Mapping-Profil, Prozessorversion und entscheidende Optionen werden angegeben.
2. **Semantische Zuordnung:** Überschriften, Abschnitte, Fußnoten, Zitate, bibliographische Datensätze, Querverweise, Sprachen, Medien und Identitäten werden anhand expliziter Regeln zugeordnet.
3. **Verlustbericht:** Ausgelassene, degradierte, unbekannte oder nicht überprüfbare Inhalte dürfen nicht stillschweigend als erhalten gelten.
4. **Nichtdestruktive Verarbeitung:** Die Quelldatei bleibt erhalten; unsichere Archive und unerlaubtes Abrufen externer Inhalte werden abgewehrt.
5. **Bearbeitbarkeit:** Importierte Manuskriptteile bleiben nach den normalen Berechtigungsregeln bearbeitbar. Quellenangaben erzeugen keine versteckten unveränderlichen Textbereiche.
6. **Round-Trip-Prüfung:** Gleichwertigkeit gilt nur für den angegebenen Umfang an Invarianten und nicht automatisch für Bytes, Seitenlayout oder Versionshistorie.
7. **Schutz vertraulicher Daten:** Der Export von Peer-Review- und personenbezogenen Informationen erfordert eine ausdrückliche Berechtigungs- und Profilentscheidung.

## Verarbeitung und Nachweise

Quelldatei sichern → Format und Sicherheitsbedingungen prüfen → Abbildungsprofil wählen → Kandidat erzeugen → validieren → Verlust- und Herkunftsbericht erstellen → übernehmen oder zurückrollen.

Mögliche Resultate sind abgeschlossen, mit Verlust abgeschlossen, fehlgeschlagen oder abgebrochen. Fehlt erforderliche Evidenz, darf die Verarbeitung nicht als verlustfrei ausgewiesen werden.

## Offene Arbeit

Ein normatives JSON-Schema für Mapping-Profile und Berichte, geprüfte formatbezogene Zuordnungen (z. B. DOCX, ODT, JATS, HTML, EPUB und IDML), Test-Fixtures und unabhängige Interoperabilitätsnachweise stehen noch aus. Der tatsächliche Implementierungsstand ist in der [OMI-Statusmatrix](https://openmanuscript.org/docs/governance/implementation-status-matrix/) getrennt dokumentiert.

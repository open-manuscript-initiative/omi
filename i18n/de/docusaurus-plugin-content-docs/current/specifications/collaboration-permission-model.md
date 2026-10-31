---
id: collaboration-permission-model
title: OMI-SPEC-190 — Kollaborations- und Berechtigungsmodell
sidebar_label: Zusammenarbeit und Berechtigungen
description: Informative deutschsprachige Zusammenfassung des OMI-SPEC-190 Draft 0.1.0.
---

# OMI-SPEC-190 — Kollaborations- und Berechtigungsmodell

**Stand:** Draft 0.1.0 — 31. Oktober 2026.

**Diese deutsche Seite ist informativ und keine verbindliche Übersetzung.** Maßgeblich ist ausschließlich der vollständige englische Text: [OMI-SPEC-190 — Collaboration and Permission Model](https://openmanuscript.org/docs/specifications/collaboration-permission-model/). Das Vorliegen eines Entwurfs bescheinigt keine formale Konformität.

## Zielsetzung

Das Modell beantwortet, **wer welche Aktion an welchem Manuskript oder wissenschaftlichen Objekt unter welcher Autorität, welchen Bedingungen und für welche Dauer ausführen darf**. Benutzerkonten, wissenschaftliche Urheberschaft, Arbeitsbereichsmitgliedschaft, redaktionelle Zuweisung und Systemadministration werden getrennt.

Berechtigte Autorinnen und Autoren müssen ihre eigenen Manuskriptinhalte frei bearbeiten können. Quellenkennzeichnung darf keine unsichtbaren, nicht löschbaren Bearbeitungssperren erzeugen. Kollaboration setzt keinen zentralen OMI-Server voraus und ersetzt nicht das portable Manuskriptformat.

## Wesentliche Bereiche

1. **Ressourcenbezogene Rechte.** Berechtigungen gelten explizit für Manuskripte, Abschnitte, Übersetzungsvarianten, Annotationen oder Begutachtungsaufträge. Es gibt keine automatische Ausweitung auf andere Manuskripte oder Institutionen.
2. **Rollen und Aktionen.** Lesen, Textbearbeitung, Metadatenpflege, Annotationen, Übersetzungen, Export, Mitgliederverwaltung und Publikation sind getrennte Operationen. Eine Namensnennung als Autor oder Gutachter gewährt keinen technischen Zugriff.
3. **Einladungen und Mitgliedschaft.** Ausstehende Einladungen geben keinen Zugang. Annahme erfordert die bestätigte Identität des vorgesehenen Kontos; Ablehnung, Ablauf und Widerruf sind vorgesehen.
4. **Serverseitige Durchsetzung.** Berechtigungen müssen bei REST-, WebSocket-, Export- und Synchronisierungsvorgängen geprüft werden. Versteckte UI-Elemente sind kein Sicherheitsmechanismus.
5. **Gleichzeitige Bearbeitung.** Laufende Synchronisierung und CRDT-Replikate sind keine kanonische OMI-Versionshistorie. Entzogene Rechte müssen auch laufende Sitzungen erfassen.
6. **Vertraulichkeit und Doppelblindbegutachtung.** Vertrauliche Namen, Metadaten, Dateien und Ereignisse dürfen nicht über andere APIs, Exporte oder Präsenzanzeigen offengelegt werden.
7. **Nachvollziehbarkeit.** Berechtigungsentscheidung, Editierereignis, wissenschaftliche Revision und redaktionelle Genehmigung sind unterscheidbare Sachverhalte.
8. **Föderierte Autoritäten.** Institutions- oder Serveradministration gewährt nicht automatisch Manuskriptzugriff. Externe Rechte werden auf anderen Servern nicht ohne lokale Genehmigung aktiviert.

## Beziehung zum Studio

[Open Manuscript Studio](../foundations/studio-live-collaboration.md) bietet bereits Einladungsannahme und serverautorisierte gemeinsame Bearbeitung mit Yjs und dauerhaftem PostgreSQL-Zustand in einem Einzelknotenprofil. Das ist ein **experimentell zu normierendes Implementierungsprofil**, keine zertifizierte Umsetzung sämtlicher OMI-SPEC-190-Anforderungen.

## Bis OMI 1.0

Ausstehend sind verbindliche versionierte Rechte-/Einladungs-/Audit-Schemas, unabhängige Negativtests für Zugriffsentzug und Rollenwechsel, umfassende Anonymitätsprüfungen sowie Interoperabilitätsnachweise außerhalb von Studio.

Siehe die [Roadmap zu OMI 1.0](../governance/roadmap-to-omi-1.0.md), die [Implementierungsstatusmatrix](../governance/implementation-status-matrix.md) und den [englischen Normtext](https://openmanuscript.org/docs/specifications/collaboration-permission-model/).
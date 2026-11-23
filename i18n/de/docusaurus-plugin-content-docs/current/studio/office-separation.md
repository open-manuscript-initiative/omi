---
title: "Studio und EuroOffice: unabhängige Dienste"
sidebar_label: "Studio und EuroOffice"
description: "Die Trennung des Office-Editors und der ausdrückliche DOCX-Austausch."
---

# Studio und EuroOffice: unabhängige Dienste

**Architekturentscheidung: 23. November 2026.** [Studio-PR #971](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/971) wurde in den Studio-Quellcode übernommen. **Eine Quellcodeänderung veröffentlicht noch kein neues Installationspaket.** Bereits installierte Apps können bis zur Aktualisierung die alte Oberfläche enthalten.

## Unterschiedliche Aufgaben

- **Open Manuscript Studio** dient wissenschaftlicher Texterstellung, semantischer Manuskriptstruktur, Zitaten und Anmerkungen, Forschungsprojekten, Peer Review, Satz, Publikation und OJS/OMP-Verfahren.
- **EuroOffice** ist ein unabhängiger Dienst für allgemeine Office-Dokumente. Bereitstellung, Anmeldung, Speicherung, Berechtigungen, Sicherung und Updates werden getrennt verwaltet.

Der bisher integrierte EuroOffice-DOCX-Editor, sein Startbereich, der Remote-Frame und die Office-API-Routen wurden aus Studio entfernt. Studio braucht bei der Installation keinen Office-Server. Der eigene DOCX/ODT-Import/-Export sowie wissenschaftlicher Editor und Publikationsfunktionen bleiben erhalten.

## Dokumentenaustausch

DOCX-Dateien werden **bewusst exportiert und importiert**: Datei beim unabhängigen Office-Dienst herunterladen und über Studios eigenen Import öffnen. Überschriften, Anmerkungen, Quellen, Zeichnungen und Metadaten vor der Übernahme in das semantische OMI-Modell prüfen. Word-Layout und semantische Manuskriptstruktur sind nicht identisch.

Es gibt **keinen eingebetteten Office-Editor und keine automatische Zwei-Wege-Synchronisierung**. Ein künftiger optionaler Connector braucht eigene Sicherheits-, Versions- und Provenienzregeln.

## Getrennte Versionsstände

| Kanal | Bestätigt am 23. November 2026 |
| --- | --- |
| Studio-Quellcodekandidat | `1.0.0-rc.2` |
| Letzter öffentlicher GitHub-Download | `0.3.0-beta.13` |
| Microsoft Store – zuletzt bestätigt | `1.0.0.0` |
| OJS-Plugin | `v1.8.7` |
| OMP-Plugin | `v1.5.1` |
| Portables OMI-Manuskriptformat | `OMI-SPEC-320@0.3.0` |

Siehe [RC2-Kanäle](/docs/studio/releases/1.0.0-rc.2) und das [Update vom 23. November](/docs/studio/updates/2026-11-23). Eine neue Studio-Quellcodefassung ist nicht automatisch ein neuer Android-, Store- oder Desktop-Download.

## Für Betreiber

Der separate Office-Dienst gehört nicht zur Studio-Bereitstellung. Veraltete `EUROOFFICE_URL` und `EUROOFFICE_JWT_SECRET` nur aus der **Studio-API**-Umgebung entfernen, nicht aus dem eigenständigen Office-Server. Die früheren Office-API-Routen werden nicht mehr registriert. Die experimentellen Office-Datenbanktabellen bleiben zunächst bestehen.

Siehe [Betriebshandbuch](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/server/eurooffice-separation-runbook.md) und [ADR-032](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-032-office-service-separation.md).
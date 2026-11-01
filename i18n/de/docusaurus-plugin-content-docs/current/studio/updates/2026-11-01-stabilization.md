---
title: Studio-Entwicklungsstand – 1. November 2026
sidebar_label: Studio-Update (1. November)
description: Mehrere mobile Manuskripte, geprüfte Cloud-Sicherungen, Medienwiederherstellung, PDF-Export und Sicherheitsnachverfolgung.
---

# Open Manuscript Studio – Entwicklungsupdate (1. November 2026)

**Status: in den Entwicklungszweig des Studio integriert, keine Ankündigung einer neuen öffentlichen Version.** Der vorbereitete Quellcode trägt `0.3.0-beta.13`; als öffentliche Download-Version wird auf dieser Website weiterhin `0.3.0-beta.12` dokumentiert, bis eine gesonderte Freigabe erfolgt. Das portable Manuskriptformat bleibt `OMI-SPEC-320@0.3.0`.

Diese Verbesserungen wurden am 31. Oktober und 1. November 2026 zusammengeführt. Daraus folgt **nicht**, dass bereits aktualisierte Windows- oder Android-Pakete beziehungsweise App-Store-Versionen veröffentlicht wurden.

## Integrierte Verbesserungen

| Bereich | Entwicklungsstand | Nachweis |
|---|---|---|
| PDF-Export | Vor der PDF-Erzeugung werden referenzierte Bilddateien auf Vorhandensein, Größe und SHA-256 geprüft. Fehlende oder nicht auflösbare lokale Medien werden gemeldet und nicht an den eingeschränkten Renderer übergeben. | [Studio PR #802](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/802) |
| Wiederherstellung fehlender Medien | Fehlende beziehungsweise beschädigte Medien können aufgelistet und aus einem validierten `.omi`-Paket desselben Manuskripts mit übereinstimmender Identität und Prüfsumme wiederhergestellt werden. Text und Revisionsverlauf bleiben erhalten. | [Studio PR #804](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/804) |
| Integrität von Cloud-Sicherungen | Beim Upload wird SHA-256 übermittelt; die Antwort wird gegen Prüfsumme, Paketgröße und Manuskriptkennung geprüft. Beim Öffnen werden der Download, das Containerformat und die wiederhergestellten referenzierten Bilder verifiziert. Eine unvollständige Mediensammlung wird nicht als erfolgreicher Cloud-Speichervorgang bestätigt. | [Studio PR #805](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/805) |
| Mehrere Dokumente auf Mobilgeräten | Android/iOS verwenden dieselbe Manuskript-Registerkartenverwaltung wie Desktop. Mehrere Manuskripte bleiben innerhalb der Sitzung geöffnet; kompakte, horizontal scrollbare und berührungsgerechte Registerkarten werden in einer eigenen Zeile über dem Editor angezeigt. | [Studio PR #806](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/806) |

Alle vier Pull Requests wurden zusammengeführt. Die letzten Entwicklungscommits von #805 und #806 haben CI/CD, 1.0 Readiness, iOS-Simulator-Build, CodeQL, OMI-SPEC-320-Prüfung und Übersetzungsprüfung bestanden. Das ist **kein Nachweis einer neuen öffentlichen Binärversion**.

## Praktische Prüfung auf einem zweiten Gerät

Ein Manuskript konnte **aus dem konfigurierten Cloud-Speicher** erfolgreich auf einem anderen Gerät geöffnet werden. Dieser Test bestätigt das manuelle, geräteübergreifende Öffnen portabler OMI-Pakete, **nicht** die automatische Hintergrundsynchronisierung sämtlicher ausschließlich in IndexedDB gespeicherter Binärdaten oder die Konfliktbehandlung bei Offline-Bearbeitung.

Die mobilen Dokument-Registerkarten gelten für die aktuelle Anwendungssitzung. **Eine automatische Wiederherstellung aller offenen mobilen Registerkarten nach einem Neustart ist nicht zugesichert.**

## Offene Aufgaben und Sicherheitsprüfung

- [Studio-Issue #803](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/803) bleibt offen. Ausstehend sind eine authentifizierte, dauerhafte Speicherung binärer Medien auf dem Server, automatisches Nachladen auf anderen Geräten, verlustfreie Migration lokaler IndexedDB-Daten sowie Retry-, Quoten- und Offline-Konfliktregeln.
- Der PDF-Renderer bleibt eingeschränkt. Der erfolgreiche Export eines Manuskripts behebt nicht automatisch fehlende Bildquellen in einem anderen Dokument. Die Themen Prozessisolierung und ausgehende Netzwerkverbindungen werden unter [#774](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774) und [#765](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765) weiter verfolgt.
- Bei der Sicherheitsprüfung am 1. November waren **sechs offene Dependabot-Hinweise** sichtbar. Einige betroffene Versionen waren in den aktuellen Lockfiles bereits nicht mehr vorhanden oder aktualisiert; der Stand der GitHub-Abhängigkeitsauswertung muss erneut geprüft werden. Hinweise gelten erst nach verifizierter Neubewertung als behoben.
- Die Prüfung auf einem realen Android-Gerät, das Wiederherstellen einer mobilen Mehrdokument-Sitzung nach Neustart, Windows-PDF-Rundläufe und die Freigabeentscheidung für `beta.13` stehen noch aus.

## Veröffentlichung und Spezifikationen

Dieser Text ist ein **Entwicklungsbericht**, keine unabhängige OMI-SPEC-Konformitätszertifizierung, keine Umstufung von Draft-Spezifikationen auf Stable und keine Änderung der öffentlichen Download-Version.

Weitere Informationen: [beta.12-Versionshinweise](/docs/studio/releases/0.3.0-beta.12), [Vorbereitung von beta.13](/docs/studio/releases/0.3.0-beta.13) und [Studio-Implementierungsstatus](/docs/governance/studio-implementation-status).

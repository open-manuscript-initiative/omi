---
id: manuscript-validation
title: Manuskripte in Open Manuscript Studio validieren
sidebar_label: Manuskriptvalidierung
description: Prüfungen für Entwurf, OMI-Datenaustausch und Publikationsvorbereitung ohne Sperre der Manuskriptbearbeitung.
---

# Manuskripte in Open Manuscript Studio validieren

Das Bedienfeld **Validierung** untersucht einen erfassten Zustand Ihres Manuskripts, **ohne den Originaltext zu verändern oder zu sperren**. Fehler und fehlende Nachweise werden getrennt ausgewiesen.

## Vorgehensweise

1. Öffnen Sie ein Manuskript und wählen Sie **Manuskript → Validierung** (Manuscript → Validation).
2. Wählen Sie **Autorenprüfung**, **OMI-Austausch** oder **Publikationsvorprüfung**.
3. Führen Sie die Prüfung aus und betrachten Sie **Ergebnis und Vollständigkeit getrennt**.
4. Filtern Sie die Befunde nach Schweregrad, lesen Sie Codes und Fundstellen und nutzen Sie, sofern vorhanden, **Abschnitt öffnen** für die Navigation.
5. Bearbeiten Sie problematische Stellen selbst. Nach Änderungen am Manuskript oder Prüfprofil ist der alte Bericht **veraltet** und muss neu erzeugt werden.
6. Laden Sie einen aktuellen maschinenlesbaren **JSON-Bericht** herunter.

Die Validierung erzeugt keinen neuen Versionskontrollpunkt, repariert nichts automatisch und übermittelt keine Manuskripttexte an externe Anbieter.

## Prüfumfang

| Profil | Zweck |
|---|---|
| **Autorenprüfung** | Objektkennungen, Hierarchie, Referenzen, Anker, verfügbare Versionsnachweise und erkannte Übersetzungen |
| **OMI-Austausch** | Zusätzlich strenge OMI-Serialisierung und zugängliche lokale Anlagen samt Prüfsummen |
| **Publikationsvorprüfung** | Zusätzlich Anforderungen des aktiven Verlagsprofils an Metadaten und Barrierefreiheit |

Ein Entwurf ohne Titel kann die Autorenprüfung bestehen, aber den OMI-Austausch nicht. Nicht überprüfte Übersetzungen werden informativ angezeigt; veraltete Übersetzungen können Warnungen auslösen, ohne das Original zu sperren.

## Ergebnis und Vollständigkeit

| Ergebnis | Bedeutung |
|---|---|
| **Gültig (valid)** | Kein nachgewiesener Dokumentfehler; alle erforderlichen Prüfungen vollständig |
| **Ungültig (invalid)** | Mindestens ein nachgewiesener Dokumentfehler; andere Prüfungen können gleichzeitig unvollständig sein |
| **Unbestimmt (indeterminate)** | Kein nachgewiesener Dokumentfehler, aber erforderliche Prüfungen oder Nachweise fehlen |

**Vollständigkeit ist ein eigenständiger Wert.** Ein Bericht kann gleichzeitig ungültig und unvollständig sein. Warnungen und Informationen bedeuten nicht automatisch einen Fehler des Dokuments. Ein fehlgeschlagener Prüflauf darf nicht als bestandene Prüfung ausgegeben werden.

Der JSON-Bericht enthält Bezüge auf den erfassten Arbeitszustand und seine gespeicherte Revision, Prüfcodes, Fundstellen, den Prüfumfang und ausdrückliche Ausschlüsse. Er enthält weder den vollständigen Manuskripttext noch Zugangsdaten oder rohe Ausnahmemeldungen und ist kein signiertes Zertifikat.

## Grenzen

Das Bedienfeld prüft ein bereits geladenes Manuskript. Es ersetzt keine Kontrolle der Rohdateien vor dem Import, keine fachwissenschaftliche Qualitätsprüfung, keinen Abruf externer Links und keine tatsächliche JATS-DTD/JATS4R-, PDF-, Renderer-, Signatur- oder Verlagsfreigabeprüfung. Bestehende Publikationsprüfungen bleiben verbindlich.

Externe Ressourcen werden nicht automatisch abgerufen. Ist der Zugriff auf lokale Anlagen nicht möglich, wird die fehlende Nachweisabdeckung ausdrücklich gemeldet.

## Spezifikationsstatus

[OMI-SPEC-180 — Validation Model](https://openmanuscript.org/docs/specifications/validation-model/) ist ein **Draft 0.1.0**. Das in [Studio-PR #783](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/783) dokumentierte `studio-validation-0.1` ist ein **experimentelles Implementierungsprofil** und keine offizielle Konformitätsbescheinigung. Seine Verfügbarkeit in einer produktiven Installation hängt von Merge und Bereitstellung ab.

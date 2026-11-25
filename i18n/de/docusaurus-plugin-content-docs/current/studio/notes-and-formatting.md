---
title: "Bearbeitbare Anmerkungen und gemeinsame Formatierung"
sidebar_label: "Bearbeitbare Anmerkungen und gemeinsame Formatierung"
description: "Bearbeitbare Anmerkungen und gemeinsame Formatierung — 2026-11-20"
---

# Bearbeitbare Anmerkungen und gemeinsame Formatierung

Anmerkungen können direkt unter dem Manuskript mit automatischer Speicherung und Versionsprüfpunkten bearbeitet werden. Der Bereich folgt dem sichtbaren Text und hält die aktive Anmerkung beim Scrollen erreichbar. Desktop- und Mobilansicht folgen der Dokumentbreite.

Das **Aa**-Panel im Kopf formatiert den zuletzt aktiven Haupttext- oder Anmerkungseditor. Es bietet Fett, Kursiv, Unterstreichen, Durchstreichen, Kapitälchen, Hoch-/Tiefstellung und Referenzeinfügung. Auf dem Desktop lässt es sich anheften; die Einstellung bleibt nach Neuladen erhalten. Im Anmerkungsdialog stehen dieselben Werkzeuge bereit.

Word/ODT-Import erhält unterstützte Fuß-/Endnotenformatierung, Zeichenstile, Links und Absatzumbrüche. Auch aus OJS/OMP geöffnete DOCX-Dateien erhalten diese Inhalte, wenn Studio-Frontend und API aktualisiert sind. Ältere Klartextdaten bleiben lesbar. Früher verlorene Formatierung erfordert erneutes Öffnen/Importieren der Originalquelle; lokale Änderungen werden nicht automatisch überschrieben.

Der Publikationseditor verwendet gespeicherte formatierte Anmerkungen in Druck-/HTML-Vorschau und HTML/PDF-Eingaben. Fortgesetzte Fußnoten werden mit demselben Markup gemessen. Reine Formatänderungen aktualisieren die Vorschau. Bereits gespeicherte Formatierung erfordert keinen Neuimport.

## Publikationsoptionen

Publikationsstile steuern nummerierte Fuß-/Endnoten sowie Inline- und Randanmerkungen. Wählbar sind unnummerierte Inline-Klammern, unnummerierte Randanmerkungen oder Einordnung unter nummerierte Fuß-/Endnoten. DOCX erhält nicht unterstützte Randplatzierung inline und meldet eine Warnung; die Ausgabe prüfen. Die ungarischen Bezeichnungen lauten **Szövegközi jegyzet** und **Végjegyzet**.

Optional erzeugt der Publikationsstil aus den semantischen Förderangaben eine **Förderanmerkung mit Stern** am Anfang. Der Stern ist von der regulären, bei 1 beginnenden Nummerierung getrennt. Prüfen Sie die Unterstützung im jeweiligen Export und das endgültige PDF.

Siehe [Publikationseditor](/docs/studio/publication-editor) und [aktuelles Entwicklungsupdate](/docs/studio/updates/2026-11-20).

## Anmerkungen einfügen und ansehen (25. November)

Die ständig verfügbare Aktion in der Editor-Werkzeugleiste fügt Anmerkungen am Cursor oder an ausgewähltem Text ein. Mauszeiger oder Tastaturfokus zeigen den formatierten Inhalt, ein Klick öffnet die Bearbeitung. Die Änderungen sind im integrierten Quellcode enthalten; installierte Clients benötigen aktualisierte Builds.

[Studio-Entwicklungsupdate — 25. November 2026](/docs/studio/updates/2026-11-25).

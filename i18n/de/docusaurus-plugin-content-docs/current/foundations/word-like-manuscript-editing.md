---
id: word-like-manuscript-editing
title: Bearbeitung von Manuskripten im Word-Format
sidebar_label: Bearbeitung von Manuskripten im Word-Format
sidebar_position: 5
description: Manuskriptweite Bearbeitung von Absätzen, Auswahlfunktionen, Verarbeitung mobiler Eingaben und strukturelle Invarianten in „Open Manuscript Studio“.
keywords:
  - Open Manuscript Studio
  - manuscript editing
  - paragraph merge
  - paragraph split
  - selection
  - Ctrl+A
  - mobile editing
  - OMI structure
---

# Bearbeitung von Manuskripten im Word-Format

Open Manuscript Studio bewegt sich in Richtung des Interaktionsmodells, das man von einem herkömmlichen Textverarbeitungsprogramm erwartet, behält dabei jedoch die zugrunde liegende explizite Dokumentstruktur „OMI“ bei. Die zentrale Regel ist einfach: **Der Benutzer bearbeitet ein zusammenhängendes Manuskript; OMI Abschnitt- und Blockgrenzen dürfen keine künstlichen Bearbeitungsbarrieren darstellen**.

Das bedeutet nicht, dass das Manuskript zu unstrukturiertem Rich Text vereinfacht wird. Bearbeitungsvorgänge werden in explizite strukturelle Änderungen im „OMI“ übersetzt, sodass semantische Abschnitte, Blöcke, Anmerkungen, Zitate, Querverweise, Versionshistorie und stabile Identitäten auch nach einem Vorgang weiterhin verfügbar bleiben.

## Bearbeitungsreihenfolge für das gesamte Manuskript

Studio sorgt nun für eine einheitliche Bearbeitungs- und Lesereihenfolge über alle Manuskriptblöcke der obersten Ebene hinweg. Abschnittsgrenzen bilden weiterhin eine sinnvolle Dokumentstruktur, können jedoch bei der normalen Absatzbearbeitung überschritten werden.

Die gemeinsame Ebene für die Bearbeitungsreihenfolge wird von Strukturbefehlen genutzt, anstatt sich auf das DOM oder eine lokale Tiptap-Editor-Instanz als kanonisches Manuskriptmodell zu stützen. Leere Abschnitte verursachen daher keine künstlichen Unterbrechungen, während semantische Objekte wie Abbildungen, Tabellen, Überschriften und andere nicht-Absatz-Blöcke weiterhin als explizite Grenzen bestehen bleiben.

## Absatz aufteilen und zusammenführen

Bei Absatzblöcken werden herkömmliche Bearbeitungstasten den Strukturbefehlen von „OMI“ zugeordnet:

- Mit **Enter** wird der aktuelle Absatz an der Cursorposition in zwei OMI Absatzblöcke aufgeteilt;
- Die Taste **Backspace** am Anfang eines Absatzes führt zu dessen Zusammenführung mit dem unmittelbar vorhergehenden Absatz, sofern dies strukturell zulässig ist;
- **Löschen** am Ende eines Absatzes führt dazu, dass der folgende Absatz in den aktuellen Absatz integriert wird, sofern dies strukturell zulässig ist;
- Absatzzusammenführungen können die Grenzen von „OMI“-Abschnitten überschreiten, ohne dass das Abschnittsobjekt selbst gelöscht wird;
- `Shift+Enter` bleibt ein Zeilenumbruch innerhalb der Zeile und kein struktureller Umbruch.

Rich-Tiptap-Inhalte bleiben während des Vorgangs erhalten. Anmerkungen, Zitate, Zitatsammlungen, Querverweisquellen und verankerte Objekte werden je nach Bedarf dem erhaltenen oder neu erstellten Block zugeordnet. Strukturelle Änderungen werden ebenfalls über den bestehenden Mechanismus für Versionen und Kontrollpunkte erfasst.

## Physische Tastaturen und mobile IME-Systeme

Desktop-Tastaturen und virtuelle Tastaturen auf Mobilgeräten lösen nicht immer dieselben Browser-Ereignisse aus. Eingabemethoden unter Android und iOS geben Operationen an Absatzgrenzen in der Regel über „`beforeinput`“ statt über zuverlässige „`keydown`“-Ereignisse aus.

Studio leitet daher beide Interaktionspfade über dieselben Bearbeitungsfunktionen für Begrenzungselemente (OMI) weiter. Der mobile Pfad erkennt Befehle wie „`deleteContentBackward`“, „`deleteContentForward`“ und „`insertParagraph`“, während der Desktop-Pfad die Tasten „Backspace“, „Delete“ und „Enter“ verarbeitet. Dadurch bleibt das Dokumentmodell auf Web-, Desktop-, Android- und iOS/iPadOS-Clients identisch.

## Auswahl im gesamten Manuskript

Die Auswahl wird nicht mehr nur als lokale Eigenschaft eines einzelnen Tiptap-Blocks behandelt. Studio verfügt über ein Bereichsmodell auf Manuskript-Ebene, dessen Endpunkte durch eine „OMI“-Block-Kennung sowie einen Text-Offset dargestellt werden.

Dadurch kann die Anwendung native Maus- bzw. Touch-Auswahlen wieder in die Manuskriptreihenfolge einordnen, wenn diese sich über mehrere Blöcke oder Abschnitte erstrecken. Das gleiche Modell ist mit der bestehenden Manuskript-Zwischenablage-Ebene kompatibel, die bereits block- und abschnittsübergreifende Fragmente verarbeitet.

### Strg+A / Cmd+A

Mit **Strg+A** unter Windows/Linux und **Cmd+A** unter macOS wird der gesamte Textbereich vom ersten Textblock OMI bis zum letzten ausgewählt, anstatt nur den aktuell aktiven Editorbereich auszuwählen.

Bei umfangreichen Manuskripten kann die „Lazy/Offscreen“-Einbindung des Editors genutzt werden, ohne die semantische Auswahl zu verkürzen. Das DOM kann nur den aktuell gerenderten Abschnitt anzeigen, während der Auswahlbereich „OMI“ weiterhin das gesamte Manuskript umfasst.

## Auswahlaktionen auf Mobilgeräten

Auf Touch-Geräten blendet Studio das native Aktionsmenü der WebView-Auswahl aus, wenn eine Studio-Textauswahl aktiv ist, sodass den Benutzern die Studio-Auswahlsymbolleiste angezeigt wird und nicht zwei konkurrierende Aktionsmenüs. Die Funktionen „Kopieren“ und „Ausschneiden“ schreiben weiterhin über den Zwischenablagepfad des Betriebssystems, sodass Inhalte in andere Anwendungen eingefügt werden können.

## Tragwerkssicherheit

Eine Word-ähnliche Interaktion lässt nicht zu, dass semantische Objekte unbemerkt verschwinden. Eine Rücktaste- oder Löschoperation kann zwar kompatible Absätze zusammenführen, darf jedoch keine Abbildung, Tabelle, Überschrift, kein Zitat oder anderes aussagekräftiges Objekt von OMI überspringen oder implizit zerstören. Operationen, die den Typ eines semantischen Blocks ändern, erfordern eine explizite strukturelle Transformation.

Diese Trennung ist für wissenschaftliche Arbeitsabläufe wichtig: Die Bearbeitung erfolgt weiterhin wie gewohnt, während das kanonische Dokument für die Validierung, den Austausch mit Publikationssystemen, die Langzeitarchivierung und den deterministischen Export geeignet bleibt.

## Verwandte ausführliche Beiträge

Zu dieser Entwicklungslinie gehören die Verarbeitung von GroßDOCX, semantische Indizes, generierte Inhaltsverzeichnisse, skalierbare Notizbearbeitung und ein zunehmend strukturierter Import von PDF. Bei der Rekonstruktion von PDF wird nun visuelle Bbox-Geometrie verwendet, anstatt sich bei der Erkennung schwieriger Fußnotenlayouts allein auf die logische Zeilengruppierung von Poppler zu verlassen. Der native Android-PDF-Import wird an das Studio-API weitergeleitet und nicht mehr an die im Paket enthaltene WebView-Quelle.

Siehe auch:

- [Long-form Authoring](./studio-long-form-authoring.md)
- [Cross-platform Studio](./cross-platform-studio.md)
- [OMI Cloud and Federated Infrastructure](./omi-cloud-federated-infrastructure.md)

## Status

Die manuskriptweite Bearbeitungsreihenfolge, das Verhalten von Absätzen über verschiedene Bereiche hinweg, die Verarbeitung von Eingaben an mobilen Begrenzungen, die manuskriptweite Auswahl sowie das Verhalten der Tastenkombinationen „Strg+A“ bzw. „Cmd+A“ für das gesamte Dokument sind in der aktuellen Studio-Entwicklungslinie Stand September 2026 implementiert. Wie bei anderen Beta-Funktionen werden weiterhin Regressionstests für Browser, Desktop, Android sowie iOS/iPadOS durchgeführt.
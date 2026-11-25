---
title: "Publikationseditor: Bände, Zeitschriftenhefte und Vorlagen"
sidebar_label: "Publikationseditor: Bände, Zeitschriftenhefte und Vorlagen"
description: "Publikationseditor: Bände, Zeitschriftenhefte und Vorlagen — 2026-11-20"
---

# Publikationseditor: Bände, Zeitschriftenhefte und Vorlagen

Öffnen Sie **Publizieren → Publikationseditor** für den Satz. Im Autorenbereich bleiben Titelmetadaten, Mitwirkende und Manuskriptstruktur. Die Publikationswerkzeuge sind nach Profilen/Verlag, Stilen/Vorlagen, Prüfungen, Dateien/Export und Einreichung/Publikation gegliedert. Ein Gruppenwechsel erhält begonnene Formulare.

## Publikation anlegen und identifizieren

Wählen Sie **Neuer Band / neues Zeitschriftenheft**, den Typ und bei Bedarf eine passende Vorlage. ISBN, eISBN, Druck-ISSN, eISSN, DOI und weitere Kennungen können bei beiden Typen zusammen angegeben werden. Bei Heften stehen die ISSNs zuerst. Die Felder bleiben in den Titelmetadaten bearbeitbar; die Impressumsvorlage verwendet die vorhandenen Kennungen.

## Formate wiederverwenden

Unter **Publikationseditor → Publikationsvorlagen** lässt sich eine Vorlage anwenden oder das aktuelle Format speichern. Eingebaute Startvorlagen bieten A5-Buchreihen (148 × 210 mm) und Zeitschriften (150 × 240 mm). Eigene Vorlagen lassen sich ändern, löschen und mit geprüften Umschlagbildern als `.omi-template.json` übertragen.

Vorlagen speichern Seiten, Ränder, Typografie, Absatzstile, Verlagsregeln, Umschlag und Titelei. Die Anwendung ersetzt Format und Umschlagentwürfe, erhält jedoch Manuskripttext und individuelle Metadaten. Wiederkehrende Verlags-/Serienangaben füllen nur leere Felder; ISBN, DOI und Jahr werden keine Vorgaben für folgende Publikationen. Platzhalter wie `{{title}}`, `{{publicationYear}}` und `{{isbn}}` erhalten beim Anwenden die Daten der Zielpublikation.

Eigene Vorlagen liegen auf dem aktuellen Gerät und werden per Export/Import übertragen. Das angewandte Format liegt als unabhängiger Schnappschuss in der `.omi`-Publikation. Spätere Vorlagenänderungen ändern bestehende Publikationen nicht. HTML/PDF- und IDML-Publikationsexporte verwenden das gespeicherte Format; Manuskripttext und individuelle Inhaltsrahmen werden nicht als Vorlagentext kopiert.

## Vollständigen Umschlagbogen bearbeiten

**Umschlag und Titelei** bietet Außen-/Innenseite sowie getrennte Schmutztitel-, Reihen-, Titel- und Impressumseiten. Jede Umschlagseite ist ein Bogen: außen Rückseite/Rücken/Vorderseite, innen vordere Innenseite/Bindebereich/hintere Innenseite. Die Breite beträgt zweimal Beschnittbreite plus Rücken. Rahmen teilen Koordinaten und Ebenen und dürfen Falzlinien überschreiten. Hilfslinien werden nicht exportiert.

Text- und Bildrahmen lassen sich verschieben, skalieren, drehen, formen, füllen und nach Ebenen ordnen. Bildausschnitt, Versatz, Größe und Drehung sind unabhängig vom Rahmen. Upload, Einfügen und Ablegen werden unterstützt. Maße können in mm, Pica oder DTP-Punkten angezeigt werden, ohne physische Größen zu ändern; Schriftgrößen bleiben Punkte.

**Rücken und Papier** berechnet `aufgerundet(Innenseiten / 2) × Papierdicke + Bindungszugabe`. Verwenden Sie die laufende Paginierung einschließlich aktivierter Titelei, eine manuelle Endseitenzahl, Hersteller-Papiervorgaben oder eigene Papierdaten. Umschlagseiten zählen nicht mit. Eine manuelle Rückenbreite ist möglich. Schätzwerte mit der Druckerei abstimmen; Beschnittzugabe, Klappen und Ausschießen sind nicht Teil dieses Ablaufs.

Aktivierte Umschlagseiten werden als ganze Bogen in HTML/PDF ausgegeben, die Titelei im Beschnittformat. Prüfen Sie PDF und Schriftverfügbarkeit vor dem Druck.

## Satzdateien an OJS übertragen

Erforderlich sind eine vorhandene unveröffentlichte Einreichung in **OJS Production**, persönliche redaktionelle Zugangsdaten und ein aktuelles OJS-Plugin; zuletzt dokumentiert ist **1.8.7**. Ziel prüfen, HTML und/oder eine PDF-Variante wählen, alle Ausgaben vorbereiten und ansehen. Anschließend genaue Dateien und Ziel bestätigen.

Änderungen an Text, Stil oder gewähltem Server verwerfen die Vorbereitung. OJS prüft eigene Rechte und Workflow-Zustand. Jede Übertragung hat einen eigenen Beleg. Bei Teilerfolg OJS prüfen und nur die fehlende Datei erneut vorbereiten. Die Übertragung veröffentlicht den Artikel nicht. OJS behält die Workflow-Hoheit; eine entsprechende OMP-Produktionsfunktion wird hierdurch nicht hinzugefügt.

Für verifizierte Studio-eigene Publikationsorte sind Lektorat, Satz, Korrekturfahnen und Freigabe getrennte Stufen. Freigaben gelten für die genaue Revision/Datei und verfallen bei Ersatz. Dieser Ablauf bleibt Preview mit Installations- und Abnahmebedingungen.

Details: [Umschlag](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-covers-title-pages.md), [Vorlagen](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-templates.md), [OJS-Übergabe](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/ojs-live-publication.md).

Weitere Anleitungen: [Anmerkungen und Formatierung](/docs/studio/notes-and-formatting), [Forschungsprojekte](/docs/studio/research-projects).

## Interoperabilitätsupdate vom 25. November

Die Regressionstests für unterstützte Word-Bildgeometrie und Zuschnitt, native OMML-Formeln, semantische REF-Felder und Review-Anmerkungen wurden erweitert. Layout und Review-Daten nach Import und Export prüfen; vollständige Word-Treue wird nicht behauptet. Der Publikationseditor nutzt den adaptiven Textprojektionscache gemeinsam mit dem Autorenarbeitsbereich.

[Adaptive Speicherverwaltung](/docs/studio/performance-and-memory).

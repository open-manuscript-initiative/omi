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

## Dynamische Datenfelder (Shortcodes) in der Titelei

Die Funktion wird in [Studio-PR #1091](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1091) und [OJS-Plugin-PR #53](https://github.com/open-manuscript-initiative/omi-ojs-plugin/pull/53) vorbereitet. Nutzung nach Integration beider Änderungen und Bereitstellung kompatibler Studio- und Plugin-Versionen.

Öffnen Sie **Publizieren → Publikationseditor → Umschlag und Titelei**. Wählen Sie eine Seite oder einen Textrahmen, setzen Sie den Cursor und wählen Sie **Datenfeld einfügen**. Codes können auch direkt eingegeben werden; die Formatierung innerhalb eines Codes muss einheitlich bleiben. Aktivieren Sie die **Datenfeldvorschau**, deaktivieren Sie sie zum Bearbeiten der Codes.

| Shortcode | Inhalt |
| --- | --- |
| `[omi:imprint]` | Impressum: Kolophon oder Verlag/Adresse/Kontakt, Copyright und verfügbare Kennungen |
| `[omi:editorial-board]` | Öffentliche native Redaktion nach Rollen |
| `[omi:authors]` | Autoren der Publikation |
| `[omi:contents]` | Inhaltsverzeichnis: Autoren und Beitragstitel |
| `[omi:journal]` | Zeitschrift oder Reihe |
| `[omi:publisher]` | Verlag |
| `[omi:address]` | Postanschrift oder Verlagsort |
| `[omi:contact]` | Kontaktname |
| `[omi:title]` | Publikationstitel |
| `[omi:volume]` | Jahrgang oder Band |
| `[omi:number]` | Heftnummer |
| `[omi:year]` | Erscheinungsjahr |
| `[omi:issn]` | Druck-ISSN |
| `[omi:eissn]` | Elektronische ISSN |
| `[omi:isbn]` | ISBN |
| `[omi:doi]` | DOI |

```text
IMPRESSUM
[omi:imprint]

Redaktion
[omi:editorial-board]

[omi:journal] [omi:volume]/[omi:number] ([omi:year])
```

Speichern Sie das Layout als Publikationsvorlage. Anders als die bisherigen beim Anwenden aufgelösten Platzhalter mit doppelten geschweiften Klammern bleiben diese Codes im gespeicherten Text und verwenden die aktuellen Dokumentdaten in Vorschau und HTML/PDF. Impressum und native Redaktion stammen aus einem importierten OJS-Schnappschuss. Öffnen Sie eine bereits importierte Ausgabe erneut aus OJS und wählen Sie **Impressum und Redaktion aktualisieren**; Artikeltext und Layout bleiben erhalten. Eigene Impressums- und Masthead-Plugins können einen Adapter erfordern. Private Konto-E-Mail-Adressen werden nicht ausgegeben.

Fehlende oder unbekannte Daten bleiben als Codes sichtbar und erzeugen Exportdiagnosen. Das Inhaltsverzeichnis enthält Autoren und Titel, keine Seitenzahlen. Prüfen Sie das fertige PDF, insbesondere Rahmenüberlauf. Die Auflösung in IDML, DOCX und ODT ist nicht bestätigt. Alle Felder sind auch in der Studio-Hilfe und der lokalen Titelei-Hilfe beschrieben.

### Mehrsprachige Titelei

Die Datenfeldsprache ist unabhängig von der Oberflächensprache. Verwenden Sie `[omi:journal:hu]`, `[omi:journal:en]`, `[omi:editorial-board:hu]` und `[omi:editorial-board:en]` auch auf derselben Seite. Ein explizites Suffix überschreibt die Rahmensprache, sonst gilt die Dokumentensprache. Regionale OJS-Sprachschlüssel wie `hu_HU` und `en_US` werden erkannt. Fehlende Übersetzungen werden nicht automatisch erzeugt oder durch andere Sprachen ersetzt; in OJS ergänzen und den Schnappschuss aktualisieren. Sprachunabhängige Kennungen und erfasste Autorennamen bleiben gemeinsam; öffentliche Namensvarianten der Redaktion werden verwendet, sofern vorhanden. OJS-Daten und endgültiges PDF redaktionell prüfen.

## Satzdateien an OJS übertragen

Erforderlich sind eine vorhandene unveröffentlichte Einreichung in **OJS Production**, persönliche redaktionelle Zugangsdaten und ein aktuelles OJS-Plugin; zuletzt dokumentiert ist **1.8.7**. Ziel prüfen, HTML und/oder eine PDF-Variante wählen, alle Ausgaben vorbereiten und ansehen. Anschließend genaue Dateien und Ziel bestätigen.

Änderungen an Text, Stil oder gewähltem Server verwerfen die Vorbereitung. OJS prüft eigene Rechte und Workflow-Zustand. Jede Übertragung hat einen eigenen Beleg. Bei Teilerfolg OJS prüfen und nur die fehlende Datei erneut vorbereiten. Die Übertragung veröffentlicht den Artikel nicht. OJS behält die Workflow-Hoheit; eine entsprechende OMP-Produktionsfunktion wird hierdurch nicht hinzugefügt.

Für verifizierte Studio-eigene Publikationsorte sind Lektorat, Satz, Korrekturfahnen und Freigabe getrennte Stufen. Freigaben gelten für die genaue Revision/Datei und verfallen bei Ersatz. Dieser Ablauf bleibt Preview mit Installations- und Abnahmebedingungen.

Details: [Umschlag](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-covers-title-pages.md), [Vorlagen](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/publication-templates.md), [OJS-Übergabe](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/ojs-live-publication.md).

Weitere Anleitungen: [Anmerkungen und Formatierung](/docs/studio/notes-and-formatting), [Forschungsprojekte](/docs/studio/research-projects).

## Interoperabilitätsupdate vom 25. November

Die Regressionstests für unterstützte Word-Bildgeometrie und Zuschnitt, native OMML-Formeln, semantische REF-Felder und Review-Anmerkungen wurden erweitert. Layout und Review-Daten nach Import und Export prüfen; vollständige Word-Treue wird nicht behauptet. Der Publikationseditor nutzt den adaptiven Textprojektionscache gemeinsam mit dem Autorenarbeitsbereich.

[Adaptive Speicherverwaltung](/docs/studio/performance-and-memory).

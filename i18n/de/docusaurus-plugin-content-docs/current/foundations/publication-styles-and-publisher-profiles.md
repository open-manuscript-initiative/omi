---
id: publication-styles-and-publisher-profiles
title: Publikationsstile und Verlagsprofile
sidebar_label: Publikationsstile und Verlagsprofile
description: Wie „Open Manuscript Studio“ die Semantik von Manuskripten, die Identität des Verlags und wiederverwendbare Formatvorlagen für den Export nach PDF, HTML und CSS voneinander trennt, einschließlich des Imports von InDesign-IDML-Formatvorlagen.
keywords:
  - Open Manuscript Studio
  - publication style
  - publisher profile
  - Adobe InDesign
  - IDML
  - CSS export
  - PDF export
  - HTML export
  - journal typography
  - publishing workflow
---

# Publikationsstile und Verlagsprofile

Open Manuscript Studio trennt nun drei Aspekte voneinander, die in herkömmlichen Autorensystemen oft miteinander vermischt werden:

1. **Manuskript-Semantik** – der wissenschaftliche Inhalt und dessen Struktur;
2. **Identität des Verlags** – Markenzeichen der Zeitschrift oder des Verlags, Kennungen und rechtliche Metadaten;
3. **Darstellungsstil** – Seitenlayout, Typografie und Darstellung der Ausgabe.

Diese Trennung ermöglicht es, dass dasselbe Manuskript unter OMI für verschiedene Zeitschriften, Verlage und Veröffentlichungskanäle aufbereitet werden kann, ohne dass das Manuskript selbst neu verfasst werden muss.

## Aktueller Stand der Umsetzung

Die auf dieser Seite beschriebenen Funktionen sind in der aktuellen Studio-Entwicklungszweig implementiert und Teil der Arbeiten zur Vorbereitung des Projekts auf die Beta-Phase. Die öffentliche Binärversion ist weiterhin unter `0.1.0-alpha.4` verfügbar; die hier beschriebenen neuen Funktionen werden möglicherweise zunächst im Entwicklungszweig verfügbar sein, bevor sie in die nächste gepackte Version aufgenommen werden.

### Wiederverwendbare benannte Publikationsstile

Ein Verlag oder eine Zeitschrift kann mehrere benannte Publikationsstile verwalten. Benutzer können:

- einen neuen Stil erstellen;
- einen vorhandenen Stil duplizieren;
- einen Stil umbenennen;
- Wählen Sie den aktiven Stil aus;
- Stile löschen, dabei aber mindestens einen gültigen Stil beibehalten;
- Stilwerte mit einer Live-Vorschau bearbeiten;
- den aktiven Stil lokal speichern;
- Die Stildefinition exportieren;
- die aus dem aktuellen Editor-Zustand generierte Datei „CSS“ herunterladen;
- Ein Adobe InDesign-Stil-Set aus einem „IDML“-Paket importieren.

Der derzeit ausgewählte Stil ist der aktive Stil, der von den Exportpfaden „PDF“ und „HTML“ verwendet wird.

### Editor für Publikationsstile

Der grafische Editor stellt eher auf die Veröffentlichung ausgerichtete Steuerelemente zur Verfügung als die Semantik des Manuskripts. Zu den derzeit bearbeitbaren Bereichen gehören:

- Seitenbreite und -höhe;
- gespiegelte Innen- und Außenränder;
- Schriftart, Schriftgröße und Zeilenabstand des Fließtextes;
- Einrückung und Ausrichtung von Absätzen;
- Geometrie von Titeln und Überschriften;
- Bildunterschriften;
- Formatierung des Literaturverzeichnisses;
- Typografie von Fußnoten und Trennlinien;
- Verhalten der Kopfzeile;
- druckorientierte Seitengeometrie.

Die Live-Vorschau berücksichtigt das Manuskript: Titel, Untertitel, Autoren, Zugehörigkeiten, Überschriften, Fließtext und Fußnoten werden, sofern verfügbar, aus dem aktuell geöffneten Manuskript übernommen. Fehlende Metadaten des Manuskripts werden nicht durch Beispielveröffentlichungsdaten ersetzt.

## Adobe InDesignIDML-Stilsatzimport

Studio kann wiederverwendbare Publikationsformate aus einem **Adobe InDesign-IDML-Paket** importieren. Ziel ist dabei die Interoperabilität der Formatvorlagen, nicht die vollständige Konvertierung von InDesign-Dokumenten: Native „`.indd`“-Dateien und der Import vollständiger „IDML“-Dokumente fallen nicht in den Anwendungsbereich dieses Importers.

Der Importer liest die entsprechenden „XML“-Ressourcen aus dem ZIP-Paket „IDML“ ein und kann erkennbare Informationen zum Publikationsstil übertragen, wie zum Beispiel:

- Seitenbreite und -höhe;
- oberer, unterer, innerer und äußerer Rand;
- Schriftart und Schriftgröße des Absatzes;
- führend;
- Absatzausrichtung;
- Einrückung der ersten Zeile;
- Leerzeichen davor und danach;
- Angaben zu Kursivschrift und den üblichen Schriftstilen „fett“ und „halbfett“;
- `BasedOn` Vererbung von Absatzstilen.

Gängige englische, ungarische und deutsche InDesign-Stilnamen werden automatisch den Publikationsrollen von „OMI“ zugeordnet, darunter Fließtext, Artikeltitel und Untertitel, Überschriften der ersten und zweiten Ebene, Fußnoten, Abbildungs- und Tabellenbeschriftungen sowie Literaturverweise. Stile, die nicht automatisch identifiziert werden können, werden weiterhin als nicht zugeordnet gemeldet und nicht zwangsweise in das Manuskriptmodell übernommen.

Bei einem erfolgreichen Import von „IDML“ wird ein **neuer, wiederverwendbarer Publikationsstil „OMI“** erstellt, dieser als aktiver Stil ausgewählt und der grafische Editor für Publikationsstile aktualisiert. Dabei werden Überschriften, Absätze oder sonstige semantische Elemente des Manuskripts **nicht** überschrieben. Dadurch bleibt die architektonische Trennung zwischen wissenschaftlicher Struktur und Darstellung erhalten.

Dadurch ist es einer Zeitschrift oder einem Verlag möglich, ein bestehendes InDesign-Typografiesystem in Studio zu migrieren und es für „OMI“-Manuskripte wiederzuverwenden, ohne InDesign-spezifische Semantik in das Dokument selbst einzubetten.

## Verlagsprofil

Die Identität des Verlags wird getrennt von der Typografie der Publikation verwaltet. Ein Verlagsprofil kann beispielsweise folgende Informationen enthalten:

- Name der Zeitschrift oder des Verlags;
- Kurztitel;
- Postanschrift und Kontaktdaten;
- Website;
- ISSN und eISSN;
- Logo-Quelle, Alternativtext und Sichtbarkeit der Ausgabe;
- Angabe von Band, Ausgabe und Jahr;
- DOI Anzeigeeinstellungen;
- Urheberrechtsinhaber und Urheberrechtsvorlage;
- Lizenzbezeichnung, URL und Symbol;
- Einstellungen für die Sichtbarkeit des Brandings und der rechtlichen Hinweise auf der Startseite und unter HTML.

Das bedeutet, dass eine Änderung des Zeitschriftenlogos, der ISSN oder der Lizenz keine Anpassung der Typografie erfordert und dass eine Änderung der Typografie die Identität des Verlags nicht verändert.

## PDF und „HTML“-Export

Studio verwendet den aktiven Publikationsstil sowohl für die Ausgabe unter PDF/print als auch unter HTML, behandelt die beiden Medien jedoch bewusst unterschiedlich.

### PDF / Drucken

Der Pfad „PDF“ wendet druckerspezifische Regeln an, wie zum Beispiel:

- benutzerdefinierte Seitenabmessungen;
- gespiegelte Ränder;
- Paginierung;
- laufende Kopfzeilen;
- Darstellung der Fußnoten;
- Gestaltung von Titeln, Überschriften, Bildunterschriften und Literaturverzeichnis;
- Angaben zum Herausgeber und rechtliche Metadaten, sofern konfiguriert.

Der Dialog „Plattform drucken/PDF“ dient zur Erstellung des endgültigen „PDF“.

### HTML

Das Paket „HTML“ behält die semantische Dokumentstruktur und die gewählte Typografie bei, entfernt jedoch bewusst Funktionen, die ausschließlich für den Druck bestimmt sind:

- keine feste Seitengröße;
- keine Seitenzahlen;
- keine Kopfzeilen;
- keine erzwungenen Seitenumbrüche.

Das Ergebnis ist nach wie vor ein portables semantisches „HTML“-Paket und kein simuliertes Papierlayout im Browser.

## CSS Export

Der Editor „Publikationsstil“ kann direkt aus dem aktuell ausgewählten Editorzustand ein Stylesheet (CSS) erstellen und herunterladen, einschließlich nicht gespeicherter Änderungen. Das erstellte Stylesheet umfasst die Typografie des aktiven Stils und, sofern relevant, die Regeln für die Druckseite.

Dies bietet eine portable Schnittstelle zwischen dem grafischen Stil-Editor von Studio und externen Veröffentlichungssystemen oder Web-Pipelines, die „CSS“ nutzen.

## Referenzausgabe: „Egyháztörténeti Szemle“

Das erste vollständige Referenzprofil wurde anhand einer gedruckten Ausgabe der „Egyháztörténeti Szemle“ rekonstruiert. Es zeigt, wie eine zeitschriftenspezifische visuelle Identität dargestellt werden kann, ohne zeitschriftenspezifische Darstellungsregeln in das Manuskriptmodell von „OMI“ einzubetten.

Die bereitgestellten Werte für Zahlengestaltung und Geometrie sind bearbeitbare Ausgangswerte. Kommerzielle Schriftarten sind nicht im Lieferumfang enthalten, und verbindliche Publisher-Assets werden nur dann einbezogen, wenn sie ausdrücklich bereitgestellt werden.

## Umfangreiche Dokumentenverzeichnisse und Indizes

Die gleiche Entwicklungslinie zur Beta-Bereitstellung verbessert auch die Navigation in generierten Dokumenten sowie die Listen:

- Importierte Word-Inhaltsverzeichnisse werden als semantisch generierte Strukturen erkannt, anstatt veraltete Seitenzahlen beizubehalten;
- Die Einträge im Inhaltsverzeichnis führen zur entsprechenden Struktur des Manuskripts;
- Abbildungs-/Bildlisten können Einträge aus strukturierten, importierten Bildelementen ableiten, einschließlich Bildunterschriften, Alternativtext und Dateinamen als Ausweichwerte;
- Benutzerdefinierte Indizes können für Namen, Orte und andere dokumentenspezifische Indizierungstypen verwendet werden;
- Die Einträge im Index führen zu den jeweiligen Stellen im Manuskript;
- Die objektorientierte Suche kann Bilder, Abbildungen, Tabellen, Diagramme und Gleichungen auflisten, ohne dass eine Textabfrage erforderlich ist.

Diese Strukturen orientieren sich weiterhin an der Semantik des Manuskripts und an Ankerpunkten und nicht an einer festen Paginierung.

## Sicherheitsgrenze

Beim Exportieren von Publikationen und beim Importieren von Stilen werden Manuskript-, Profil- und importierte „IDML“-Texte als Daten behandelt und nicht als ausführbares Markup. Die Export-Implementierung vermeidet die Neuinterpretation von dynamischem DOM-Text über unsichere „`document.write()`“-Pfade und nutzt stattdessen strukturierte DOM-/Text-Zuweisungen oder das Laden isolierter generierter Dokumente.

Der Importer „IDML“ wendet vor der Analyse von „XML“ eine separate Vertrauensgrenze an: Nicht unterstützte „`DOCTYPE`“, Entitätsdeklarationen und Stylesheet-Verarbeitungsanweisungen werden abgelehnt. Fehlermeldungen des Parsers oder des Pakets, die aus einer nicht vertrauenswürdigen „IDML“-Datei stammen, werden nicht in der Studio-Oberfläche angezeigt; stattdessen erhalten Benutzer eine festgelegte, lokalisierte Meldung über den fehlgeschlagenen Import. Zur Nachverfolgung dieser Datenflüsse von der Quelle zum DOM während der Sicherheitshärtung wird ein automatisierter CodeQL-Scan verwendet.

## Architektonisches Prinzip

Die beabsichtigte Beziehung lautet:

** Manuskript unterOMI → Verlagsprofil + ausgewählter Publikationsstil → Ausgabewerkzeug → PDF / HTML / CSS**

Ein weiterer Weg zur Interoperabilität ist:

**InDesign-IDML-Stilvorlage → OMI-Publikationsstil → derselbe Ausgabewandler**

Das Manuskript bleibt portabel und semantisch stabil, während die Darstellung wiederverwendbar, austauschbar, importierbar und verlagsspezifisch wird.

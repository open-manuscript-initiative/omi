---
title: OJS Importieren von Manuskriptdateien
description: Auswahl von Artikeltexten, Größenbeschränkungen für „DOCX“, eingebettete Bilder und die Übergabe von „OJS“ an „Studio“.
---

# OJS Importieren von Manuskriptdateien

Auf dieser Seite wird beschrieben, wie Open Manuscript Studio die Hauptdatei eines Manuskripts aus einer Einreichung über Open Journal Systems (OJS) auswählt und importiert.

## Auswahl der Manuskripte

Eine Einreichung über OJS kann das Artikelmanuskript, Abbildungen, Bilder, Zusatzdateien, Datensätze und andere Anhänge enthalten. Studio darf NICHT die zuletzt hochgeladene Datei aus der vollständigen Liste der eingereichten Dateien auswählen.

Bei der aktuellen Integration von „OJS“ wählt Studio das Manuskript in folgender Reihenfolge aus:

```text
OJS submission
    ↓
Submission file stage
    ↓
Article Text component
    ↓
Supported DOCX file
    ↓
Latest eligible revision
    ↓
Open Manuscript Studio import
```

Die Komponente „OJS“ **Artikeltext** bezeichnet das Hauptmanuskript. Bilder und andere Dateien, die als separate „OJS“-Komponenten hochgeladen wurden, gelten nicht als Manuskript, auch wenn sie nach der Datei „Artikeltext“ hochgeladen wurden.

Der Konnektor sollte die stabilen Metadaten des Genres „OJS/PKP“ bereitstellen, die zur Identifizierung des Artikeltextes verwendet werden. Studio sollte sich nicht auf eine lokalisierte Komponentenbezeichnung stützen, wenn ein stabiler Komponentenschlüssel verfügbar ist.

## Unterstützte Quellformate

Der derzeitige automatische Manuskript-Importer von OJS akzeptiert „DOCX“ als Quellformat für den Artikeltext.

Die Quelldatei wird über den autorisierten Integrationsendpunkt „OJS“ abgerufen. Studio greift nicht direkt auf das private Dateiverzeichnis „OJS“ zu.

## Maximale Dateigröße

Die derzeitige maximale Größe eines Artikeltextes DOCX, der von OJS importiert wird, beträgt **25 MB**.

Die Beschränkung gilt für das gesamte „DOCX“-Paket. Dazu gehören:

- Manuskripttext und Formatierung;
- Fußnoten und Endnoten;
- Tabellen und andere Dokumentenstrukturen;
- Diagramme, die im Paket „DOCX“ gespeichert sind;
- Bilder, die in der Datei „DOCX“ eingebettet sind;
- weitere Daten, die im Paket „DOCX“ enthalten sind.

Folglich kann ein Manuskript, das viele hochauflösende eingebettete Bilder enthält, bereits dann an seine Grenzen stoßen, wenn sein Textumfang relativ gering ist.

Einzelne Bilder, Abbildungen, Zusatzdateien oder andere Anhänge, die außerhalb der Komponente „Artikeltext“ auf OJS hochgeladen werden, werden bei dieser 25-MB-Beschränkung für den Artikeltext DOCX **nicht** berücksichtigt. Es handelt sich dabei um separate Einreichungsdateien OJS, die nicht als Manuskriptquelle ausgewählt werden.

Studio überprüft die Größe der Quelle vor und nach dem Herunterladen der „DOCX“. Eine Quelle, die den Grenzwert überschreitet, wird abgelehnt und nicht teilweise importiert.

## Eingebettete Bilder

Bilder, die in einen zulässigen Artikeltext DOCX eingebettet sind, werden beim Import des Manuskripts mit übernommen. Studio extrahiert die unterstützten eingebetteten Bilder zusammen mit der Dokumentstruktur, sodass sie im importierten Manuskript angezeigt werden können.

Dies unterscheidet sich von Bilddateien, die separat bei der Einreichung unter OJS hochgeladen werden. Separate Bilddateien werden nicht automatisch in das Manuskript des Artikeltextes eingefügt.

## OJS-Übergabe an das Studio

Umfangreiche strukturierte Manuskripte, insbesondere „DOCX“-Dateien mit eingebetteten Bildern, können zu einer Import-Datenmenge führen, die deutlich größer ist als die komprimierte „DOCX“-Datei selbst.

Studio ist daher nicht darauf angewiesen, dass der Browser `sessionStorage` die gesamten Manuskriptdaten während des Startvorgangs von „OJS“ zu Studio überträgt. Der Server speichert die vorbereiteten Startdaten vorübergehend und übermittelt dem Browser ein kurzes, einmalig verwendbares Übergabe-Token. Studio nutzt dieses Token, um die vorbereiteten Startdaten abzurufen.

Dadurch werden die Speicherplatzbeschränkungen des Browser-Web-Storage umgangen, und bildreiche Manuskripte können an Studio übergeben werden, ohne dass das gesamte Manuskript in „`sessionStorage`“ serialisiert werden muss.

Das Handoff-Token ist temporär und nur einmal verwendbar. Es handelt sich dabei weder um eine dauerhafte Manuskript-URL noch um einen Autorisierungsmechanismus für beliebige Dateien unter OJS.

## Zusammenfassung der Geschäftstätigkeit

| Eigenschaft | Aktuelles Verhalten |
| --- | --- |
| OJS Manuskriptbestandteil | Artikeltext |
| Automatisches Quellformat | DOCX |
| Maximale ArtikeltextlängeDOCXgröße | 25 MB |
| Eingebettete Bilder aus DOCX | Importiert |
| Separat hochgeladene Bilder unter OJS | Nicht als Manuskript ausgewählt |
| Quellversion | Neueste zulässige Version des Artikeltextes |
| Browser-Übergabe | Temporäres Einmal-Server-Token |
|  `sessionStorage`-Datenvolumenbegrenzung | Wird nicht für das gesamte Manuskript verwendet |

## Zukünftige Konfiguration

Die Grenze von 25 MB ist derzeit eine implementierungsbedingte Beschränkung. In einer zukünftigen Studio-Version könnte die maximale Größe von „OJS“-Quelldateien möglicherweise über die Bereitstellung konfigurierbar sein. Bei der Bereitstellung sollte nicht von einer höheren Grenze ausgegangen werden, bis eine solche Konfiguration ausdrücklich unterstützt und dokumentiert ist.

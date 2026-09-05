---
id: studio-long-form-authoring
title: Verfassen langer Texte in „Open Manuscript Studio“
sidebar_label: Verfassen langer Texte
sidebar_position: 4
description: Import großer „DOCX“-Dateien, Navigation durch die Dokumentstruktur, skalierbare Notizen, semantische Namensindizes und generierte Inhaltsverzeichnisse in „Open Manuscript Studio“.
keywords:
  - Open Manuscript Studio
  - DOCX import
  - monograph
  - long-form authoring
  - notes
  - footnotes
  - name index
  - Word XE
  - table of contents
  - Word TOC
---

# Verfassen langer Texte in „Open Manuscript Studio“

Open Manuscript Studio wird entwickelt, um nicht nur kurze Artikel, sondern auch wissenschaftliche Manuskripte in Buchlänge zu unterstützen. Bei der Erstellung langer Texte stehen die Interoperabilität mit Word, die semantische Struktur, die „Local-First“-Verarbeitung und die responsive Bearbeitung im Vordergrund.

Auf dieser Seite wird die im August 2026 entwickelte und getestete Implementierungsversion beschrieben. Funktionen, die sich noch im Prüfungsverfahren befinden, werden als solche gekennzeichnet und nicht als garantierte Funktionen der veröffentlichten Version dargestellt.

## Import großer „DOCX“ und Monografien

Studio nutzt eine spezielle Importstrategie für große und strukturell komplexe Word-Dokumente. Bei kleinen Dateien kommt weiterhin der vollständige Strukturimporteur zum Einsatz, während bei Paketen in Manuskriptlänge ein speicherarmer Monografie-Pfad verwendet werden kann, der die Erstellung eines sehr großen Browser-DOM für „`word/document.xml`“ vermeidet.

Der Modus für umfangreiche Dokumente ist für Manuskripte vorgesehen, die Tausende von Absätzen, Fuß- und Endnoten, Word-Felder, Hyperlinks, Bilder, Überschriften und andere wissenschaftliche Strukturen enthalten. Er übergibt regelmäßig die Kontrolle an den Browser, sodass die Benutzeroberfläche während des Imports reaktionsfähig bleibt.

Als Regressions- und Leistungstest diente ein etwa 200-seitiges wissenschaftliches Buch. Das Dokument wurde sowohl auf Android-Geräten als auch auf Desktop-Geräten erfolgreich importiert, behielt die getestete Formatierung bei und die Konvertierung wurde auf dem getesteten Mobilgerät in etwa sechs Sekunden abgeschlossen. Hierbei handelt es sich um ein Projekttestergebnis und nicht um eine formelle Leistungsgarantie; die tatsächliche Dauer hängt von der Komplexität des Dokuments und der Hardware ab.

Der Sicherheitsgrenzwert auf Paketebene ist unabhängig von den Grenzwerten für visuelle Assets, sodass eine zulässige große „DOCX“-Datei nicht allein deshalb abgelehnt wird, weil der ZIP-Container größer ist als der bisherige, auf Bilder ausgerichtete Schwellenwert.

## Navigation durch die Dokumentstruktur

Importierte Überschriften werden Teil der Hierarchie im Studio-Bereich und sind nicht mehr nur visuell formatierte Absätze. Die Dokumentenstrukturansicht kann daher als Navigationsübersicht für lange Manuskripte dienen.

Auf dem Desktop führt die Auswahl eines Gliederungseintrags zum entsprechenden Abschnitt im Editor. Auf Mobilgeräten wechselt die Auswahl einer Überschrift zurück zur Editoransicht, wartet, bis die Editoroberfläche geladen ist, scrollt zum gewünschten Abschnitt und setzt den Fokus auf den entsprechenden Überschriftenbereich. Dadurch wird der kompakte Arbeitsablauf auf Mobilgeräten beibehalten und gleichzeitig dasselbe semantische Navigationsmodell wie auf dem Desktop bereitgestellt.

## Skalierbare Anmerkungen und Fußnoten

Ein Manuskript in Buchlänge kann Hunderte oder Tausende von Notizen enthalten. Da es unnötig aufwendig ist, jede Notiz sofort als vollständigen Rich-Text-Editor darzustellen, trennt Studio nun die schlanke Notizenliste von der Notizenbearbeitung.

Im Notiz-Fenster werden alle Notizübersichten als kompakte Einträge dargestellt. Ein vollständiger „`NoteBodyEditor`“ wird nur für die Notiz geladen, die der Benutzer öffnet. Auf diese Weise bleibt die gesamte Notizliste sofort verfügbar, ohne dass Hunderte von Editor-Instanzen gleichzeitig erstellt werden müssen.

Durch diese Optimierung bleiben die Funktionen zum Bearbeiten, Löschen und Navigieren von Notizen erhalten, während der Aufwand für das Öffnen des Notizfensters bei Manuskripten mit zahlreichen Anmerkungen erheblich reduziert wird.

## Semantische Namensindizes

Studio behandelt ein wissenschaftliches Namensverzeichnis als strukturierte Manuskriptdaten und nicht nur als generierten Anhang.

### Word-`XE`- und `INDEX`-Felder

DOCX Der Import erkennt Word-Indexeinträge (`XE`) sowie generierte „`INDEX`“-Felder, einschließlich Feldanweisungen, die über mehrere „`w:instrText`“-Läufe verteilt sind. Hierarchische Indexbegriffe bleiben erhalten und werden nicht zu gewöhnlichem Text abgeflacht.

Die importierten Indexdaten werden zusammen mit dem Manuskript „OMI“ gespeichert und können in einer generierten Ansicht „Name index / Névmutató / Personenregister“ zusammengefasst werden. Wiederholte Markierungen werden zusammengefasst, wobei ihre einzelnen Vorkommen erhalten bleiben.

Das umfangreiche Regressionsdokument enthält Tausende von echten Word-`XE`-Feldern und dient in dieser Arbeit als praktisches Interoperabilitäts-Testobjekt.

### Manuelle Kennzeichnung mit Namensindex

Die aktuelle Entwicklungslinie ermöglicht zudem die manuelle Markierung über die vorhandene Symbolleiste zur Textauswahl. Der ausgewählte Text kann zu einem semantischen Namensindexeintrag werden, der den Zielblock, den ausgewählten Text, den Quelltyp und eine stabile semantische Anker-ID speichert.

Gruppierte Einträge im Namensindex können zu ihren einzelnen Vorkommen erweitert werden. Bei Einträgen mit Ortsangaben wählt die Option **Zum Vorkommen springen** den entsprechenden Abschnitt aus, schließt das Menü, scrollt zum Editorblock und markiert bzw. wählt den im Index aufgeführten Text aus.

Importierte Word-Marker, für die noch keine genauen Positionsdaten vorliegen, bleiben gültige semantische Einträge; die Verknüpfung jedes importierten „`XE`“-Markers mit einem exakten Inline-Editor-Anker ist eine weitere Verfeinerung im Hinblick auf die Interoperabilität.

## Semantisches Inhaltsverzeichnis

Ein mit Word erstelltes Inhaltsverzeichnis sollte nach dem Import nicht zu einem statischen Text mit Seitenzahlen werden. Studio modelliert das Inhaltsverzeichnis daher als generiertes semantisches Objekt, das aus der Überschriftenhierarchie des Manuskripts abgeleitet wird.

Die derzeit geprüfte Implementierung erkennt Word-`TOC`-Feldanweisungen, einschließlich geteilter „`instrText`“-Fragmente. Sie behält wichtige Word-Einstellungen wie Überschriftenbereiche (`\\o "1-3"`), die Erstellung von Hyperlinks (`\\h`) und die Verwendung von Gliederungsebenen (`\\u`) bei.

Wenn ein semantisches Inhaltsverzeichnis vorhanden ist, generiert Studio das sichtbare Inhaltsverzeichnis anhand der aktuellen Abschnitts-Hierarchie. Durch das Umbenennen oder Umstrukturieren von Abschnitten wird die generierte Liste daher automatisch aktualisiert. Jeder Eintrag ist anklickbar und führt zur Auswahl bzw. zum Scrollen zum entsprechenden Abschnitt.

Studio behandelt importierte Seitenzahlen aus dem Word-Inhaltsverzeichnis bewusst nicht als feste Autorendaten. Studio ist kein Editor für das Seitenlayout, daher gehört die Seitennummerierung zur Darstellungsphase bei der Veröffentlichung bzw. beim Export. Der Export über DOCX und PDF kann zu einem späteren Zeitpunkt eine seitenbezogene Ausgabe erstellen oder aktualisieren, ohne dass layoutabhängige Nummern Teil der kanonischen Manuskriptstruktur werden.

## Gestaltungsprinzip: Semantik vor Darstellung

Diese ausführlichen Beiträge folgen einer gemeinsamen Regel:

- Überschriften sind strukturelle Abschnitte und nicht nur Schriftstile;
- Anmerkungen sind semantische Anmerkungen und nicht nur Text im hochgestellten Format;
- Namensindizes bestehen aus gespeicherten Markern und generierten Ansichten und sind nicht nur eine statische Liste;
- Inhaltsverzeichnisse sind Regeln für die Überschriftenhierarchie und nicht nur kopierter Seitenzahltext.

Dadurch bleibt das Manuskript auch beim Austausch zwischen Studio, Word, Veröffentlichungssystemen, HTML/JATS, EPUB oder druckorientierten Exportformaten stabil.

## KI und deterministische Dokumentenstrukturen

Der Namenserkennung können KI-gestützte Vorschläge zugutekommen, doch das zugrunde liegende Indexmodell bleibt deterministisch und unterliegt der Kontrolle der Autoren. Die KI kann Personen vorschlagen oder abweichende Namensformen vereinheitlichen, während explizite Indexmarkierungen weiterhin die maßgeblichen wissenschaftlichen Daten darstellen.

Inhaltsverzeichnisse erfordern keine KI. Sie werden deterministisch aus der Dokumenthierarchie und den importierten Feldeinstellungen generiert.

## Aktueller Entwicklungsstand

| Funktion | Status |
|---|---|
| Großformat/Monografie-DOCX-Import | Implementiert und getestet anhand eines wissenschaftlichen Buches mit ca. 200 Seiten |
| Navigation anhand der Dokumentgliederung auf Mobilgeräten und Desktop-Computern | Implementiert |
| Skalierbare Liste aller Noten mit verzögerter Einbindung des Noteneditors | Implementiert |
| Word-`XE` / `INDEX` Semantic Import | Implementiert |
| Manuelle Kennzeichnung von Namen im Index und Navigation zu Vorkommen | Entwicklungs-PR / Überprüfungszeile |
| Word-`TOC`-Erkennung und semantisches Inhaltsverzeichnis in Echtzeit | Entwicklungs-PR / Review-Line |
| Genaue Inline-Anker für jedes importierte Vorkommen von „Word`XE`“ | Weiterverfolgung |
| Seitennummerierung für Inhaltsverzeichnis/Index beim druckorientierten Export | Weiter |
| KI-gestützte Vorschläge für Personennamen | Geplante optionale Unterstützungsebene |

Die Seite zum Implementierungsstatus ist nach wie vor die maßgebliche Übersicht über die veröffentlichten und konfigurationsabhängigen Funktionen von Studio.
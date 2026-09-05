---
title: OMI Begriffe und Definitionen
sidebar_label: Begriffe und Definitionen
sidebar_position: 50
---

# Open Manuscript Initiative Begriffe und Definitionen

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Dokumenttyp | Richtlinie zur Governance-Terminologie und zentrales Glossar |
| Status | Entwurf |
| Version | 0.1.0 |
| Normsprache | Englisch |
| Gilt für | Spezifikationen, Schemata, Profile, Register, Beispiele, Implementierungen und offizielle Übersetzungen des „OMI“ |

## 1. Zweck

Dieses Dokument definiert die einheitliche Terminologie der „Open Manuscript Initiative“ (OMI).

Damit soll sichergestellt werden, dass ein und derselbe Begriff in der gesamten OMI-Spezifikationsreihe dieselbe Bedeutung hat. Zudem werden damit Konzepte voneinander abgegrenzt, die in Textverarbeitungsprogrammen, Publikationssystemen, Repositorien, Literaturverwaltungssystemen und redaktionellen Plattformen häufig als Synonyme behandelt werden.

Die Definitionen in diesem Dokument dienen folgenden Zwecken:

- ein gemeinsames Begriffsvokabular bereitstellen;
- widersprüchliche Definitionen zwischen den Spezifikationen zu vermeiden;
- präzise Schemata und APIs unterstützen;
- die Interoperabilität zwischen unabhängigen Implementierungen verbessern;
- eine einheitliche Übersetzung ins Ungarische, Deutsche und in künftige Sprachen gewährleisten;
- die Konformitätsanforderungen leichter interpretierbar und prüfbar machen;
- semantische Objekte von ihren visuellen oder serialisierten Darstellungen unterscheiden.

## 2. Zuständigkeit und Anwendung

Begriffe, deren Bedeutung in mehreren Spezifikationen verwendet wird, MÜSSEN den Definitionen in diesem Dokument entsprechen.

Eine „OMI“-Spezifikation KANN eine engere, spezialisierte Bedeutung für ihren eigenen Geltungsbereich definieren, MUSS jedoch:

- den zentralen Begriff, der näher erläutert wird, identifizieren;
- die engere Bedeutung ausdrücklich angeben;
- Vermeiden Sie es, der zentralen Definition zu widersprechen;
- Vermeiden Sie es, den Begriff stillschweigend für ein anderes Konzept wiederzuverwenden.

Ist ein Begriff hier nicht definiert, gilt die entsprechende „OMI“-Spezifikation. Ist ein Begriff weder in diesem Dokument noch in einer „OMI“-Spezifikation definiert, gilt seine übliche technische Bedeutung.

Die englischen Begriffe in diesem Dokument sind für die normative englischen Spezifikationsreihe maßgebend. Offizielle Übersetzungen MÜSSEN die begrifflichen Unterscheidungen beibehalten, auch wenn in einer anderen Sprache üblicherweise ein Wort für mehrere englische Begriffe verwendet wird.

## 3. Normative Sprache

Die Schlüsselwörter **MUSS**, **DARF NICHT**, **SOLLTE**, **SOLLTE NICHT** und **KANN** drücken normative Anforderungsstufen aus, wenn sie in Großbuchstaben geschrieben werden.

Die Verwendung von Wörtern wie „muss“, „sollte“ oder „kann“ in Kleinbuchstaben ist Teil des normalen Prosatextes und begründet keine eigenständigen Konformitätsanforderungen.

## 4. Grundsätze der Terminologie

### 4.1 Erst das Konzept, dann die Bezeichnung

Ein Begriff bezeichnet einen Begriff. Der Begriff bleibt auch dann unverändert, wenn:

- Eine Benutzeroberfläche verwendet eine übersetzte oder gekürzte Bezeichnung;
- Ein Dateiname ändert sich;
- Eine visuelle Darstellung verwendet eine andere Formulierung;
- In einer externen Norm wird ein anderer Begriff verwendet;
- Eine Disziplin verwendet ein lokales Synonym.

### 4.2 Semantische Identität vor der Darstellung

OMI unterscheidet ein Objekt von seiner visuellen Darstellung.

Beispiele:

- Ein Zitatsvorkommen ist nicht der formatierte Zitattext;
- Ein Überschriftenobjekt entspricht keiner bestimmten Schriftgröße;
- Eine Anmerkung ist keine farbige Markierung;
- Ein bibliografischer Datensatz ist keine Zeichenfolge eines Bibliografieeintrags;
- Ein Manuskript ist keine „DOCX“- oder „PDF“-Datei.

### 4.3 Lokale Identität und externe Identität

Ein „OMI“-Objekt kann einen stabilen lokalen Bezeichner und einen oder mehrere externe Bezeichner haben.

Ein lokaler Bezeichner dient zur Identifizierung innerhalb eines Dokuments, Pakets oder Systemkontexts nach dem „OMI“-Standard. Ein externer Bezeichner verknüpft das Objekt mit einem Bezeichnungssystem außerhalb dieses Kontexts.

Keiner der beiden Typen ersetzt den anderen automatisch.

### 4.4 Rollen und Personen sind voneinander getrennt

Eine Person oder Organisation ist ein Akteur. Autor, Redakteur, Gutachter, Übersetzer, Verleger und Geldgeber sind Rollen, die ein Akteur in einem bestimmten Kontext einnehmen kann.

Eine Rolle DARF NICHT als festes Merkmal des Agenten betrachtet werden.

### 4.5 Inhalt und Arbeitsablauf sind voneinander getrennt

Ein wissenschaftliches Objekt kann Teil von Arbeitsabläufen im Bereich der Bearbeitung, Begutachtung, Übersetzung, Veröffentlichung oder Langzeitarchivierung sein. Der Status eines Arbeitsablaufs hat in der Regel keinen Einfluss auf den semantischen Typ des Objekts.

### 4.6 Normative und informative Bedeutungen

Eine Glossardefinition kann einen Begriff definieren, ohne dabei alle maschinenlesbaren Eigenschaften anzugeben, die für dessen Serialisierung erforderlich sind. Die entsprechende Spezifikation „OMI“ definiert das vollständige normative Datenmodell sowie die Verarbeitungsregeln.

## 5. Zentrale konzeptionelle Zusammenhänge

Die wichtigsten Konzepte von „OMI“ stehen wie folgt miteinander in Zusammenhang:

```text
Scholarly work
    ↓ represented during its lifecycle as
Manuscript
    ↓ expressed through one or more
Document instances or versions
    ↓ composed of identifiable
Scholarly objects
    ↓ serialized into
OMI documents and packages
    ↓ processed by
Implementations
    ↓ rendered or exported as
Publications and exchange formats
```

Die wichtigsten Referenzbegriffe stehen in folgendem Zusammenhang:

```text
Citable resource
    ↓ described by
Bibliographic record
    ↓ selected into
Manuscript reference library
    ↓ referenced by
Citation occurrence
    ↓ formatted through
Citation style and publication profile
    ↓ displayed as
Rendered citation or bibliography entry
```

Die wichtigsten Konzepte der Annotation stehen wie folgt miteinander in Zusammenhang:

```text
Scholarly object or content range
    ↓ addressed by
Anchor
    ↓ used as target by
Annotation
    ↓ may participate in
Review, editorial, translation, or discussion workflow
```

## 6. Manuskript, Dokument, Datei und Veröffentlichung

Diese Begriffe DÜRFEN in normativen Texten des „OMI“ NICHT als austauschbare Synonyme verwendet werden.

### 6.1 Wissenschaftliche Arbeit

Eine intellektuelle oder kreative wissenschaftliche Einheit, die unabhängig von einer bestimmten Datei, Ausgabe, Sprachversion oder einem bestimmten Veröffentlichungsformat betrachtet wird.

Ein wissenschaftliches Werk kann durch mehrere Manuskripte, Fassungen, Übersetzungen, Ausgaben oder Veröffentlichungen vertreten sein.

### 6.2 Manuskript

Ein wissenschaftliches Werk, das über seinen gesamten Lebenszyklus hinweg als bearbeitbares, strukturiertes geistiges Objekt dargestellt wird.

Ein Manuskript kann Folgendes enthalten:

- strukturierte Inhalte;
- Metadaten;
- Mitwirkende;
- Zitate und bibliografische Einträge;
- Anmerkungen und Überprüfungsobjekte;
- Sprach- und Übersetzungszusammenhänge;
- Angaben zu Version und Herkunft;
- Veröffentlichungs- und Validierungsprofile;
- zugehörige Ressourcen.

Ein Manuskript lässt sich nicht durch eine bestimmte Serialisierungsform oder ein bestimmtes Softwareprodukt definieren.

### 6.3 Dokument

Eine konkrete, strukturierte Darstellung von Manuskriptinhalten und zugehörigen Daten in einem definierten Verarbeitungskontext.

Ein Manuskript kann mehrere Dokumentinstanzen enthalten, zum Beispiel:

- ein aktuelles, bearbeitbares Dokument;
- ein eingereichtes Dokument;
- eine überarbeitete Fassung;
- ein anerkanntes Dokument;
- eine veröffentlichte Momentaufnahme;
- ein übersetztes Dokument.

In den Eigenschaftsnamen und Spezifikationstiteln unter OMI bezieht sich „*Dokument*“ in der Regel auf strukturierte Daten und nicht lediglich auf eine visuelle Seitenfolge.

### 6.4 Dokumentinstanz

Eine identifizierbare Instanz eines Dokuments in einer bestimmten Version, einem bestimmten Zustand oder an einer bestimmten Verarbeitungsgrenze.

Eine Dokumentinstanz kann je nach ihrem Lebenszyklusstatus veränderbar oder unveränderbar sein.

### 6.5 Quelldokument

Das Dokument, das als maßgebliche Vorlage für einen bestimmten Vorgang ausgewählt wurde, beispielsweise für die Übersetzung, Darstellung, Validierung, den Vergleich oder den Export.

Ein Quelldokument ist kontextbezogen. Der Begriff bezeichnet nicht unbedingt die früheste historische Fassung.

### 6.6 Kanonisches Dokument

Die Dokumentinstanz, die für einen bestimmten Zweck als maßgeblich ausgewiesen ist.

Beispiele hierfür sind:

- das kanonische, bearbeitbare Manuskript;
- die kanonisch anerkannte Fassung;
- die maßgebliche Quelle für die Darstellung von Veröffentlichungen.

Der kanonische Status MUSS den Geltungsbereich und die Gültigkeit festlegen. OMI geht nicht davon aus, dass ein einziges Dokument für alle Zwecke als kanonisch gilt.

### 6.7 Datei

Eine Folge von gespeicherten oder übertragenen Bytes, die als ein Dateisystem- oder Transportobjekt identifiziert wird.

Eine Datei kann Folgendes enthalten:

- ein serialisiertes „OMI“-Dokument;
- ein „OMI“-Paket oder -Container;
- eine Publikationsbilanz;
- ein importiertes externes Dokument;
- eine zugehörige Ressource.

Eine Datei ist eine Speicher- oder Transporteinheit, nicht unbedingt eine semantische Einheit.

### 6.8 Dateiformat

Eine festgelegte Syntax und eine Reihe von Kodierungsregeln zur Darstellung von Daten in einer Datei oder einem Byte-Strom.

Ein Dateiformat allein definiert nicht die gesamte semantische Bedeutung. Die Prosa-Spezifikationen unter OMI definieren die Semantik; Schemata und Formatspezifikationen definieren die maschinenlesbare Struktur und Kodierung.

### 6.9 Serialisierung

Der Vorgang der Kodierung eines Datenmodells in eine Datei, einen Byte-Strom oder eine Nachrichtenrepräsentation.

Die Deserialisierung ist der umgekehrte Vorgang: die Rekonstruktion von Datenobjekten aus einer serialisierten Darstellung.

### 6.10 Paket

Eine übertragbare Einheit, die ein Dokument im Format „OMI“ sowie null oder mehr zugehörige Ressourcen, Manifestdateien, Schemata, Mediendateien, Provenienzdatensätze oder Signaturen enthält.

Ein Paket kann durch eine einzelne Container-Datei oder durch eine Verzeichnisstruktur dargestellt werden.

### 6.11 Behälter

Die technische Struktur, mit der mehrere Dateien oder Ressourcen zu einer übertragbaren oder archivierbaren Einheit zusammengefasst und adressiert werden.

Ein Container ist nicht identisch mit dem semantischen Paket, das er enthält. Dasselbe Paketmodell kann mithilfe verschiedener Container-Technologien kodiert werden.

### 6.12 Veröffentlichung

Eine veröffentlichte wissenschaftliche Darstellung, die zur Verbreitung, Zitierung, Nutzung oder Aufbewahrung bestimmt ist.

Eine Publikation kann als „HTML“, „PDF“, „EPUB“, „JATS“, „XML“, Druckversion, strukturierte Metadaten oder in einem anderen Format bereitgestellt werden.

Eine Veröffentlichung basiert in der Regel auf einer bestimmten Manuskript- oder Dokumentversion, ersetzt jedoch nicht die semantische Quelle.

### 6.13 Maßgebliche Fassung

Die Veröffentlichungsfassung, die vom zuständigen Verlag oder der zuständigen Verlagsbehörde offiziell als maßgebliche veröffentlichte Fassung ausgewiesen wurde.

Eine „Version of Record“ ist ein Begriff aus dem Bereich des Publikationsstatus. Dies bedeutet nicht, dass frühere oder spätere Manuskriptversionen nicht mehr existieren.

### 6.14 Publikationsleistung

Eine generierte Darstellung, die für ein bestimmtes Publikationsziel bestimmt ist.

Beispiele hierfür sind:

- abrufbar unter HTML;
- druckfertige PDF;
- EPUB;
- JATS XML;
- Metadaten zur Hinterlegung bei Crossref;
- DataCite-Metadaten;
- Archivpakete.

Eine Publikation lässt sich möglicherweise anhand eines Quelldokuments und eines Publikationsprofils reproduzieren.

## 7. Objekte und Dokumentstruktur

### 7.1 Gegenstand

Eine identifizierbare Einheit, die in einem Datenmodell nach „OMI“ dargestellt ist.

Ein Objekt kann Folgendes haben:

- ein Typ;
- eine stabile Kennung;
- Eigenschaften;
- Beziehungen;
- Informationen zum Lebenszyklus;
- Herkunft;
- Erweiterungen.

Der unkonkrete Begriff *Objekt* SOLLTE vermieden werden, wenn ein spezifischerer Begriff zur Verfügung steht.

### 7.2 Wissenschaftliches Objekt

Eine identifizierbare semantische Einheit innerhalb eines Manuskripts oder eine mit diesem verbundene Einheit.

Ein wissenschaftliches Objekt wird eher durch seine wissenschaftliche Bedeutung und seine Zusammenhänge definiert als durch sein äußeres Erscheinungsbild.

Beispiele hierfür sind:

- Manuskript;
- Abschnitt;
- Absatz;
- Überschrift;
- Zitat;
- Abbildung;
- Tabelle;
- Gleichung;
- Anmerkung;
- Zitierhäufigkeit;
- bibliografischer Eintrag;
- Anmerkung;
- Überprüfungsentscheidung;
- Aussage eines Mitwirkenden.

### 7.3 Strukturobjekt

Ein wissenschaftliches Objekt, dessen Hauptzweck darin besteht, den Inhalt von Dokumenten zu strukturieren.

Beispiele hierfür sind Container für Dokumente, Abschnitte, Listen, Tabellen, Abbildungsgruppen und Literaturverzeichnisse.

### 7.4 Inhaltsobjekt

Ein wissenschaftliches Objekt, dessen Hauptzweck darin besteht, intellektuellen Inhalt zu vermitteln.

Beispiele hierfür sind Absätze, Zitate, Code-Blöcke, Formeln, Abbildungen, Tabellen, Anmerkungen und Literaturangaben.

Ein und derselbe Objekttyp kann sowohl strukturelle als auch inhaltliche Funktionen haben.

### 7.5 Blockobjekt

Ein Inhalts- oder Struktur-Objekt, das in der Dokumenthierarchie eine Position auf Blockebene einnimmt.

Zu den typischen Blockobjekten gehören:

- Absatz;
- Überschrift;
- Liste;
- Zitatblock;
- Abbildung;
- Tabelle;
- Gleichungsblock;
- Code-Block;
- Notenblock.

Der Blockstatus bezieht sich auf die Dokumentstruktur und nicht auf das Layout der visuellen Darstellung unter „CSS“.

### 7.6 Inline-Objekt

Ein Objekt, das in den Inhaltsfluss eines Blockobjekts eingebettet ist.

Beispiele hierfür sind:

- Zitierhäufigkeit;
- Querverweis;
- Inline-Anmerkungsmarkierung;
- Inline-Formel;
- semantische Hervorhebung;
- benannte Entität;
- verknüpfter Bezeichner.

### 7.7 Abschnitt

Ein hierarchisches Struktur-Objekt, das verwandte Inhalte unter einem semantischen oder redaktionellen Gesichtspunkt zusammenfasst.

Ein Abschnitt kann eine Überschrift, einen Typ, eine Kennung, untergeordnete Abschnitte und Blockinhalt enthalten.

Die visuelle Nummerierung ist eine Darstellungsentscheidung, es sei denn, ein Profil verleiht der Nummerierung eine semantische Bedeutung.

### 7.8 Überschrift

Eine Bezeichnung, die einem Abschnitt oder einer anderen definierten strukturellen Unterteilung zugeordnet ist.

Eine Überschriftenebene drückt eine Hierarchie aus. Sie DARF NICHT ausschließlich aus der Schriftgröße oder der visuellen Gestaltung abgeleitet werden.

### 7.9 Absatz

Eine Einheit aus Prosa oder vergleichbarem Textinhalt auf Blockebene.

Ein Absatz kann Inline-Objekte und Textabschnitte enthalten.

### 7.10 Anmerkung

Ein ergänzendes wissenschaftliches Objekt, das inhaltlich mit dem Text in Zusammenhang steht, aber nicht unbedingt Teil des Hauptleseprozesses ist.

Beispiele hierfür sind Fußnoten, Endnoten, Anmerkungen des Autors, Anmerkungen der Redaktion und Anmerkungen des Übersetzers.

Eine Notiz ist nicht dasselbe wie eine Anmerkung. Eine Notiz ist Teil des Manuskriptinhalts; eine Anmerkung ist ein Objekt, das sich auf den Inhalt oder ein anderes Objekt bezieht.

### 7.11 Ressource

Eine digitale oder physische Einheit, die mit einem Manuskript, einem bibliografischen Datensatz, einem Paket oder einer Veröffentlichung verbunden ist.

Beispiele hierfür sind Bilder, Datensätze, Audio- und Videodateien, Zusatzdateien, Schemata und externe Webressourcen.

Der Begriff MUSS angeben, ob die Ressource eingebettet, verpackt, referenziert oder extern aufgelöst ist, sofern diese Unterscheidung Auswirkungen auf die Verarbeitung hat.

## 8. Identität und Identifikatoren

### 8.1 Identität

Die Eigenschaft, über Verweise, Versionen, Operationen oder Systeme hinweg als dieselbe Entität erkennbar zu sein.

Die Identität ist konzeptionell von Anzeigenbezeichnungen und veränderbaren Metadaten getrennt.

### 8.2 Bezeichner

Ein Wert, der dazu dient, eine Entität innerhalb eines definierten Bezeichnersystems oder Gültigkeitsbereichs zu unterscheiden oder darauf zu verweisen.

Eine Spezifikation, die einen Bezeichner verwendet, MUSS Folgendes definieren oder darauf verweisen:

- sein Geltungsbereich;
- seine Syntax;
- seine Erwartungen hinsichtlich der Einzigartigkeit;
- seine Vergleichsregeln;
- seine Erwartungen hinsichtlich der Beständigkeit;
- sein eventuelles Auflösungsverhalten.

### 8.3 Lokale Kennung

Ein Bezeichner, dessen Eindeutigkeit nur innerhalb eines definierten Dokument-, Paket-, Arbeitsbereichs-, Repository- oder Implementierungsbereichs von „OMI“ gewährleistet ist.

Ein lokaler Bezeichner kann beim Export und Import unverändert bleiben, seine Gültigkeit wird jedoch durch den Kontext bestimmt, in dem er vorkommt.

### 8.4 Globale Kennung

Eine Kennung, die über unabhängige Systeme oder Verwaltungsdomänen hinweg eindeutig sein soll.

Globale Eindeutigkeit bedeutet nicht zwangsläufig, dass die Daten dauerhaft vorhanden oder abrufbar sind.

### 8.5 Persistenter Bezeichner

Ein Identifikator, der so verwaltet wird, dass er im Laufe der Zeit stabil bleibt, auch wenn sich Standorte oder Metadaten ändern.

Beispiele hierfür sind unter anderem „DOI“, „Handle“, „ARK“, „ORCID“, „ROR“, „URN“ und andere verwaltete Schemata.

Ein persistenter Bezeichner DARF NICHT als dauerhaft auflösbar bezeichnet werden, es sei denn, das jeweilige Bezeichnersystem bietet diese Garantie.

### 8.6 Externer Bezeichner

Ein Identifikator, der von einem System, einem Register, einer Behörde, einem Repositorium, einem Herausgeber oder einem Katalog außerhalb des aktuellen Identitätsbereichs von „OMI“ vergeben wurde.

Beispiele hierfür sind:

- DOI für eine Veröffentlichung;
- ORCID für eine Person;
- ROR Kennung für eine Organisation;
- ISBN für eine Veröffentlichung;
- Registriernummer des Repositoriums;
- Archiv-Referenzcode.

### 8.7 Kanonische Kennung

Die Kennung, die als bevorzugte Kennung für eine definierte Operation oder einen definierten Kontext festgelegt wurde.

Der kanonische Status hebt Aliase oder andere Bezeichner nicht außer Kraft. Die Auswahlregel MUSS dokumentiert werden.

### 8.8 Alias

Ein alternativer Bezeichner, Name, Begriff oder Pfad, der sich in einem definierten Kontext auf dieselbe Entität bezieht.

Aliase DÜRFEN NICHT allein aufgrund unterschiedlicher Zeichenfolgen als separate Einheiten behandelt werden.

### 8.9 Resolver

Ein Prozessor oder Dienst, der eine Kennung oder eine Abfrage entgegennimmt und versucht, die entsprechende Entität oder die entsprechenden Metadaten zu lokalisieren, abzurufen oder abzugleichen.

Ein Fehlschlagen der Auflösung führt nicht zwangsläufig zur Ungültigkeit des Bezeichners.

## 9. Akteure, Identität und Beitrag

### 9.1 Beauftragter

Ein Entität, die eine Rolle einnehmen, eine Aussage treffen, eine Handlung ausführen oder eine Zuschreibung erhalten kann.

Zu den wichtigsten Agententypen gehören:

- Person;
- Organisation;
- Konsortium;
- Projekt;
- Dienstleistung;
- unbekannter oder historischer Akteur.

### 9.2 Person

Ein menschlicher Mitarbeiter.

Ein Personenobjekt kann Namen, Identifikatoren, Zugehörigkeiten, Kontaktdaten und Herkunftsangaben enthalten. Es DARF NICHT davon ausgegangen werden, dass eine unveränderliche Namenszeichenfolge die Person vollständig repräsentiert.

### 9.3 Organisation

Ein kollektiver oder institutioneller Akteur mit einer Identität, die unabhängig von jedem einzelnen Mitglied ist.

Beispiele hierfür sind Universitäten, Verlage, Labore, Archive, Bibliotheken, Fachverbände und Förderinstitutionen.

### 9.4 Mitwirkender

Ein Akteur, der über eine oder mehrere Mitwirkungsrollen mit einem wissenschaftlichen Objekt, einem Manuskript, einer Veröffentlichung, einem Workflow-Ereignis oder einer anderen Entität aus dem „OMI“ verbunden ist.

„Contributor“ ist eine kontextbezogene Beziehung und kein eigenständiger Akteurstyp.

### 9.5 Autor

Ein Mitwirkender, dessen Rolle die geistige Urheberschaft der wissenschaftlichen Arbeit oder eines bestimmten Teils davon umfasst.

OMI Es wird nicht geprüft, ob ein Beitrag den Richtlinien einer Zeitschrift, eines Fachgebiets oder den rechtlichen bzw. ethischen Vorgaben zur Autorschaft entspricht. Profile und redaktionelle Richtlinien können zusätzliche Kriterien vorschreiben.

### 9.6 Editor

Ein Mitarbeiter, der eine redaktionelle Funktion in Bezug auf ein Manuskript, eine Veröffentlichung, ein bibliografisches Werk oder einen Arbeitsablauf ausübt.

Die Rolle MUSS präzisiert werden, wenn Unklarheiten möglich sind, zum Beispiel:

- Manuskriptlektor;
- Zeitschriftenredakteur;
- Bandredakteur;
- Lektor;
- technischer Redakteur;
- Spezifikationseditor.

### 9.7 Gutachter

Eine Person, die im Rahmen eines Begutachtungsverfahrens mit der Bewertung eines Manuskripts, eines Objekts, eines Anspruchs, eines Verfahrens, einer Übersetzung oder einer Veröffentlichung beauftragt ist.

Die Identität eines Gutachters kann je nach dem geltenden Arbeitsablauf und den Zugriffsrichtlinien öffentlich, eingeschränkt, pseudonym oder verborgen sein.

### 9.8 Übersetzer

Ein Mitwirkender, der für die Erstellung oder Überprüfung einer Übersetzung wissenschaftlicher Inhalte oder Metadaten verantwortlich ist.

„Übersetzer“ ist eine Rolle. Ein übersetztes Dokument SOLLTE den Bezug zum entsprechenden Quelldokument und zur Quellversion beibehalten.

### 9.9 Verlag

Eine Person, die für die Veröffentlichung oder die offizielle Verbreitung einer Publikation zuständig ist.

Die Rolle des Herausgebers unterscheidet sich von der von Software, die für die Darstellung oder das Hosting zuständig ist.

### 9.10 Rolle als Mitwirkender

Ein kontrollierter oder erweiterbarer Wert, der beschreibt, welchen Beitrag ein Akteur in einem definierten Kontext geleistet hat.

Beispiele hierfür sind Autoren, Redakteure, Übersetzer, Gutachter, Datenkuratoren, Software-Mitwirkende und Illustratoren.

Eine Beitragsrolle SOLLTE unabhängig von der Reihenfolge der Mitwirkenden und unabhängig von der Identität des Akteurs dargestellt werden.

### 9.11 Zugehörigkeit

Eine kontextbezogene Beziehung zwischen einem Akteur – in der Regel einer Person – und einer Organisation, einem Projekt oder einer institutionellen Einheit.

Eine Zugehörigkeit kann Folgendes umfassen:

- eine Rolle oder Position;
- ein Start- und Enddatum;
- eine Quelle;
- eine manuskriptspezifische Aussage;
- eine externe Organisationskennung.

Eine Zugehörigkeit darf NICHT als zeitlos angesehen werden.

### 9.12 Reihenfolge der Mitwirkenden

Die ausdrückliche Festlegung der Mitwirkenden für eine bestimmte Rolle oder ein bestimmtes Ergebnis.

Die Reihenfolge der Mitwirkenden entspricht nicht immer dem Umfang ihres Beitrags, der alphabetischen Reihenfolge oder der Anzeigereihenfolge. Die geltende Spezifikation oder das geltende Profil MUSS die entsprechende Auslegung festlegen.

### 9.13 Korrespondierender Autor

Ein Mitwirkender, der als Ansprechpartner für ein bestimmtes Manuskript, eine Einreichung, eine Veröffentlichung oder einen Arbeitsablauf benannt wurde.

Der entsprechende Status ist kein Rang innerhalb der Autorenliste und KANN für mehr als einen Mitwirkenden gelten.

## 10. Metadaten und Herkunft

### 10.1 Metadaten

Strukturierte Informationen, die eine Entität beschreiben, identifizieren, verwalten, in einen Kontext stellen, in Beziehung setzen oder deren Verarbeitung unterstützen.

Metadaten können Folgendes sein:

- beschreibend;
- administrativ;
- technisch;
- strukturell;
- rechtsbezogen;
- herkunftsbezogen;
- im Zusammenhang mit der Konservierung.

Metadaten sind nicht unbedingt weniger wichtig oder weniger maßgeblich als der Inhalt.

### 10.2 Metadatenwert

Eine strukturierte Aussage, die einer Metadaten-Eigenschaft zugeordnet ist.

Ein Metadatenwert kann zusätzlich zu seinem Hauptwert Angaben zur Sprache, zur Herkunft, zur Zuverlässigkeit, zur Gültigkeitsdauer oder zur Quelle enthalten.

### 10.3 Herkunft

Informationen, die die Herkunft, die Verwahrung, die Urheberschaft, die Ableitung, die Umwandlung oder die Änderungshistorie einer Entität oder eines Werts beschreiben.

Die Herkunft kann folgende Angaben enthalten:

- zuständiger Sachbearbeiter;
- Quellsystem;
- Quellkennung;
- Zeitpunkt der Erstellung oder des Abrufs;
- Transformationsoperation;
- Software und Version;
- Vertrauens- oder Verifizierungsstatus;
- Bezug zu früheren Versionen.

### 10.4 Behauptung

Eine Aussage, die in „OMI“-Daten dargestellt wird und einen Wert, eine Beziehung, einen Status oder eine Tatsache über eine Entität angibt.

Eine Aussage kann eine eigene Herkunft und einen eigenen Konfidenzgrad haben. Die Darstellung „OMI“ garantiert für sich genommen nicht, dass die behauptete Aussage wahr ist.

### 10.5 Maßgeblicher Wert

Ein Wert, der gemäß einer expliziten Autoritätsregel für einen bestimmten Zweck als maßgeblich ausgewählt wurde.

Die Autorität kann von einem Autor, einem Verlag, einem Register, einer redaktionellen Entscheidung, einer Quelle für verifizierte Identifikatoren oder einer anderen dokumentierten Richtlinie abgeleitet werden.

Der Status als Autorität DARF NICHT allein aus der Aktualität abgeleitet werden.

### 10.6 Quelle

Die Entität, das System, das Dokument, der Akteur oder der Prozess, aus dem bzw. dem die Daten oder Inhalte stammen.

Der Begriff SOLLTE bei möglicher Mehrdeutigkeit näher bestimmt werden, beispielsweise als Metadatenquelle, Übersetzungsquelle, Zitierquelle oder Importquelle.

### 10.7 Vertrauen

Eine dokumentierte Bewertung der Sicherheit im Zusammenhang mit einer Übereinstimmung, einer Feststellung, einer Extraktion, einer Abstimmung oder einer abgeleiteten Beziehung.

Die Konfidenz ist kein Ersatz für die Herkunft und DARF NICHT als objektive Wahrscheinlichkeit dargestellt werden, es sei denn, die Methode definiert sie als solche.

## 11. Anker und Verweise innerhalb von Dokumenten

### 11.1 Anker

Ein stabiler oder auflösbarer Verweis auf einen Ort, einen Bereich, ein Objekt oder einen Zustand innerhalb wissenschaftlicher Inhalte.

Ein Anker kann Folgendes kennzeichnen:

- ein Objekt;
- eine Einfügestelle;
- ein Textabschnitt;
- eine Reihe von Objekten;
- eine Tabellenzelle;
- ein Bildbereich;
- eine Dokumentversion oder ein Dokumentstatus.

Ein Anker ist ein Verweismechanismus. Es ist nicht die Anmerkung oder das Zitat, das ihn verwendet.

### 11.2 Ankerziel

Das durch einen Anker identifizierte Objekt, der Inhaltsbereich, der Speicherort oder der Status.

### 11.3 Anker-Auflösung

Der Vorgang der Bestimmung des aktuellen Ziels, das durch einen Anker dargestellt wird.

Die Auflösung kann Folgendes bewirken:

- ein Ziel;
- mehrere Ziele;
- ein vereinfachtes Näherungsziel;
- ein ungelöstes Ergebnis;
- ein ungültiges Ergebnis.

### 11.4 Stabiler Anker

Ein Anker, der so konzipiert ist, dass er auch bei zulässigen Bearbeitungen oder Umformungen weiterhin auf das beabsichtigte semantische Ziel verweist.

„Stabil“ bedeutet nicht „unveränderlich“. Das Anker-Modell legt fest, welche Änderungen ein Anker überstehen soll.

### 11.5 Lage

Eine Position zwischen oder innerhalb von Inhaltseinheiten in einem definierten Dokumentzustand.

Roh-Zeichen-Offsets sind Positionen, stellen jedoch nicht unbedingt stabile Anker dar.

### 11.6 Reichweite

Ein geordneter Abschnitt zwischen einer Startgrenze und einer Endgrenze in einem definierten Inhaltsraum.

Ein Bereich KANN leer sein, wenn die entsprechende Spezifikation eine Einfügepunkt-Semantik zulässt.

### 11.7 Querverweis

Ein Objekt in einem Manuskript, das von einem Ort oder Objekt auf ein anderes intern oder extern identifiziertes Objekt verweist, um die Navigation zu erleichtern oder als wissenschaftlicher Verweis zu dienen.

Ein Querverweis unterscheidet sich von einem bibliografischen Zitat, obwohl beide Anker und Identifikatoren verwenden können.

### 11.8 Ungelöster Verweis

Eine Referenz, deren Ziel im aktuellen Verarbeitungskontext nicht identifiziert oder aufgerufen werden kann.

Eine ungelöste Referenz kann möglicherweise wiederhergestellt werden und DARF NICHT automatisch als unbekannte Referenz oder fehlerhafter Bezeichner behandelt werden.

## 12. Anmerkungen und Überprüfung

### 12.1 Anmerkung

Ein wissenschaftliches Objekt, das eine Sammlung von Kommentaren oder strukturierten Informationen mit einem oder mehreren Zielen verknüpft.

Eine Anmerkung enthält in der Regel:

- eine Kennung;
- ein oder mehrere Ziele;
- ein Anmerkungstext;
- Motivation oder Art;
- Urheber oder verantwortlicher Vertreter;
- Zeitstempel und Herkunft;
- Informationen zur Sichtbarkeit oder zum Zugriff;
- Lebenszyklusstatus.

### 12.2 Ziel der Annotation

Die Entität, auf die sich eine Anmerkung bezieht.

Ein Ziel kann durch einen Anker, einen externen Bezeichner, einen Objektbezeichner oder einen anderen, durch das Annotationsmodell definierten Zielmechanismus dargestellt werden.

### 12.3 Anmerkungstext

Der Inhalt oder die strukturierte Aussage, die die Anmerkung mit ihrem Ziel verknüpft.

Der Textkörper kann Text, Änderungsvorschläge, Klassifizierungen, Links, Entscheidungen oder fachspezifische strukturierte Daten enthalten.

### 12.4 Begründung für die Anmerkung

Ein Wert, der den Zweck einer Anmerkung angibt.

Beispiele hierfür sind unter anderem das Kommentieren, Überprüfen, Korrigieren, Hinterfragen, Übersetzen, Klassifizieren, Verknüpfen oder Hervorheben.

Motivation allein bestimmt nicht die Zuständigkeit für Arbeitsabläufe.

### 12.5 Anmerkung

Eine Anmerkung, deren Hauptteil aus einem ausführlichen Kommentar besteht.

Nicht jede Anmerkung ist ein Kommentar; Anmerkungen können auch strukturierte Entscheidungen, Klassifizierungen oder maschinengenerierte Ergebnisse enthalten.

### 12.6 Rückblick

Ein strukturierter Bewertungsprozess oder ein Bewertungsobjekt in Bezug auf ein Manuskript, ein wissenschaftliches Objekt, eine Veröffentlichung oder eine Spezifikation.

Der Begriff MUSS näher erläutert werden, wenn er sich auf den Prozess und nicht auf das daraus resultierende Prüfobjekt bezieht.

### 12.7 Überprüfungsobjekt

Ein wissenschaftliches Objekt, das Inhalte von Begutachtungen, Ergebnisse, Empfehlungen, Fragen, Entscheidungen oder zugehörige Anmerkungen enthält oder darstellt.

### 12.8 Bewertungsrunde

Eine abgegrenzte Phase in einem Begutachtungsablauf, in der eine definierte Reihe von Begutachtungsaktivitäten auf eine bestimmte Manuskriptversion oder einen bestimmten Einreichungsstatus angewendet wird.

### 12.9 Redaktionelle Entscheidung

Eine strukturierte Entscheidung, die im Rahmen eines redaktionellen Arbeitsablaufs getroffen wird, wie z. B. die Aufforderung zur Überarbeitung, die Annahme, die Ablehnung oder die Rücksendung zur technischen Korrektur.

Eine redaktionelle Entscheidung ist nicht mit einer Empfehlung des Gutachters gleichzusetzen.

### 12.10 Änderungsvorschlag

Ein strukturierter Vorschlag zum Einfügen, Löschen, Ersetzen, Verschieben oder anderweitigen Ändern von Inhalten oder Metadaten.

Eine vorgeschlagene Änderung wirkt sich erst dann auf das maßgebliche Dokument aus, wenn sie durch einen autorisierten Workflow-Vorgang akzeptiert wurde.

## 13. Terminologie im Bereich Bibliografie und Zitierweise

### 13.1 Zitierfähige Quelle

Eine Einheit, die als Gegenstand einer wissenschaftlichen Zitierung dienen kann.

Beispiele hierfür sind Veröffentlichungen, Datensätze, Software, Archivgut, juristische Unterlagen, Bilder, audiovisuelle Werke, Normen, Webressourcen und unveröffentlichte Manuskripte.

### 13.2 Bibliografischer Eintrag

Eine strukturierte Beschreibung einer zitierten oder zitierfähigen Quelle, unabhängig von einem bestimmten Zitierfall oder dem Auftreten im Manuskript.

Ein bibliografischer Eintrag kann Folgendes enthalten:

- lokale und externe Bezeichner;
- Titel;
- Mitwirkende;
- Ressourcentyp;
- Angaben zur Veröffentlichung oder zur Erstellung;
- Container-Beziehungen;
- Sprache;
- Zugangsorte;
- Herkunft;
- Versions- und Statusbeziehungen.

### 13.3 Bibliografische Identität

Die Feststellung, welches Werk, welche Äußerung, welche Manifestation, welche Ausgabe oder welchen Titel ein bibliografischer Datensatz beschreibt.

Die bibliografische Identität DARF NICHT allein aus ähnlich formatierten Zitaten abgeleitet werden.

### 13.4 Referenzbibliothek für Manuskripte

Die auf Manuskript-Ebene zusammengestellte Sammlung bibliografischer Datensätze, die für mögliche oder tatsächliche Zitierungen, Überprüfungen, Leselisten oder Veröffentlichungen ausgewählt wurden.

Ein Datensatz kann vorhanden sein, ohne dass er derzeit zitiert wird.

### 13.5 Eintrag in der Referenzbibliothek

Die manuskriptspezifische Aufnahme oder Darstellung eines bibliografischen Datensatzes in einer Manuskript-Referenzbibliothek.

Der Eintrag kann einen manuskriptspezifischen Status enthalten, z. B. „zitiert“, „nicht zitiert“, „überprüft“, „aus dem Literaturverzeichnis ausgeschlossen“ oder „muss überprüft werden“.

### 13.6 Quellenangabe

Ein allgemeiner wissenschaftlicher Vorgang oder Zusammenhang, bei dem sich ein Teil eines Manuskripts auf eine zitierfähige Quelle bezieht.

In normativen Modellbeschreibungen SOLLTE für das Manuskript-Objekt der präzisere Begriff *Zitatauftritt* und für dessen Darstellung der Begriff *dargestelltes Zitat* verwendet werden.

### 13.7 Häufigkeit von Zitaten

Ein Verweis von einer bestimmten Stelle in einem Manuskript oder einem Objekt auf einen Eintrag in einer Referenzbibliothek oder einen bibliografischen Datensatz.

Ein Zitatsfall kann Folgendes umfassen:

- Anker;
- Lokalisator;
- Präfix;
- Suffix;
- Zitierweise;
- Zitierabsicht;
- Gruppenmitgliedschaft;
- Ereignisspezifische Anmerkungen.

Mehrere Zitierangaben können auf denselben bibliografischen Eintrag verweisen.

### 13.8 Zitatziel

Der bibliografische Datensatz, der Eintrag in einer Referenzbibliothek oder eine andere zitierfähige Quelle, auf die sich ein Zitat bezieht.

### 13.9 Positionsbestimmer

Strukturierte Informationen, die ein bestimmtes Element oder eine bestimmte Stelle innerhalb einer zitierten Quelle identifizieren.

Beispiele hierfür sind Seiten, Seitenbereiche, Kapitel, Abschnitte, Absätze, Abbildungen, Tabellen, Zeilen, Folios, Zeitstempel, Verse, Artikel, Klauseln, Archivierungseinheiten oder Softwareversionen.

Ein Verweis ist nicht Bestandteil der allgemeinen bibliografischen Beschreibung, es sei denn, er beschreibt die Ressource als Ganzes.

### 13.10 Zitiergruppe

Eine geordnete Sammlung von Zitaten, die an einer Stelle im Manuskript gemeinsam dargestellt oder bearbeitet werden.

Jedes Mitglied behält sein eigenes Ziel und seinen eigenen Ortungswert bei.

### 13.11 Zitiermodus

Ein Wert, der beschreibt, wie ein Zitat in den Diskurs oder die Darstellung eingebunden ist.

Beispiele hierfür sind unter anderem Klammerangaben, narrative Angaben, Anmerkungen mit Quellenangabe, reine Literaturangaben oder Quellenverweise.

Der Zitiermodus unterscheidet sich vom Zitierstil.

### 13.12 Zweck der Zitierung

Eine strukturierte Angabe der wissenschaftlichen Beziehung oder des Grundes für die Zitierung einer Quelle.

Beispiele hierfür sind unter anderem: untermauern, widerlegen, erweitern, erörtern, vergleichen, wiedergeben, Daten liefern oder eine Methode darstellen.

Die Angabe einer Quellenangabe ist optional, es sei denn, ein Profil schreibt dies vor.

### 13.13 Zitierweise

Eine Reihe von Regeln für die Formatierung von Quellenangaben und Literaturverzeichnissen.

Beispiele hierfür sind die Stile APA, Chicago, MLA, Vancouver, OSCOLA sowie zeitschriftenspezifische Stile.

Ein Zitierstil definiert weder die Identität noch die semantische Struktur der zitierten Quelle.

### 13.14 Zitierweise

Präsentationstext oder Markup, das aus einem Zitiervorkommen, dem zugehörigen bibliografischen Datensatz, einem Zitierstil, den Spracheinstellungen und einem Publikationsprofil generiert wurde.

Es wird ein gerenderter Verweis ausgegeben, nicht das maßgebliche Verweisobjekt.

### 13.15 Literaturverzeichnis

Ein Abschnitt einer Veröffentlichung oder eines Manuskripts, in dem ausgewählte bibliografische Datensätze gemäß festgelegten Regeln für die Aufnahme und Darstellung dargestellt werden.

Ein Literaturverzeichnis ist nicht mit dem Handschriftenbestand identisch. Der Bestand kann Einträge enthalten, die nicht zitiert oder nicht aufgeführt sind.

### 13.16 Eintrag im Literaturverzeichnis

Eine gerenderte oder serialisierte Darstellung eines bibliografischen Datensatzes innerhalb einer Bibliografie.

### 13.17 Literaturhinweis

Ein weit gefasster Begriff, der einen Link, ein Zitat, einen bibliografischen Eintrag, einen Verweis oder eine Quelle bedeuten KANN.

In normativen Dokumenten der „OMI“ SOLLTE der unqualifizierte Begriff *Referenz* vermieden werden, wenn eine der folgenden Bedeutungen gemeint ist:

- Zitierhäufigkeit;
- bibliografischer Eintrag;
- Eintrag in der Referenzbibliothek;
- Querverweis;
- Bezeichnerreferenz;
- externer normativer Bezugspunkt.

### 13.18 Arbeit

In der bibliografischen Modellierung: ein abstraktes geistiges oder kreatives Werk, das unabhängig von einer bestimmten Sprache, Ausgabe oder Verbreitungsform ist.

### 13.19 Ausdruck

Eine konkrete intellektuelle oder sprachliche Umsetzung eines Werks, wie beispielsweise eine Übersetzung oder ein überarbeiteter Text.

### 13.20 Manifestation

Eine Veröffentlichungs- oder Verbreitungsform eines Werks, wie beispielsweise eine bestimmte Ausgabe, ein bestimmtes Format oder eine bestimmte Veröffentlichung eines Verlags.

### 13.21 Punkt

Ein einzelnes physisches oder digitales Exemplar einer Manifestation, bei der die Identität auf Kopieebene von Bedeutung ist.

OMI Profile können ein vereinfachtes bibliografisches Modell verwenden, wenn diese Unterscheidungen nicht erforderlich sind.

### 13.22 Abstimmung

Der Vorgang, bei dem bibliografische Datensätze oder Metadatenangaben miteinander verglichen werden, um festzustellen, ob sie dieselbe Entität, verwandte Versionen oder unterschiedliche Entitäten beschreiben.

### 13.23 Deduplizierung

Der Prozess der Identifizierung und Verwaltung doppelter Einträge derselben Entität.

Die Dublettenbereinigung kann dazu führen, dass Datensätze zusammengeführt, verknüpft, separate Versionen beibehalten oder eine manuelle Bestätigung angefordert werden.

### 13.24 Rücknahme

Ein offizieller Status, der angibt, dass eine Publikation oder ein wissenschaftliches Objekt von einer autorisierten Stelle aus dem zuverlässigen wissenschaftlichen Bestand entfernt wurde.

Ein zurückgezogener Eintrag wird nicht aus dem bibliografischen Verlauf gelöscht. Sein Status und seine Verknüpfungen SOLLTEN weiterhin darstellbar bleiben.

### 13.25 Korrektur

Eine veröffentlichte oder dokumentierte Änderung, die darauf abzielt, einen Fehler in einem früheren wissenschaftlichen Werk oder einer früheren Veröffentlichung zu korrigieren.

Korrekturbeziehungen MÜSSEN zwischen dem korrigierenden Objekt und dem korrigierten Objekt unterscheiden.

## 14. Sprache und Übersetzung

### 14.1 Sprache

Die natürliche oder formale Sprache, die mit Inhalten oder Metadaten verbunden ist.

Bei der maschinenlesbaren Sprachidentifizierung SOLLTEN, soweit möglich, BCP-47-Sprachkennungen verwendet werden.

### 14.2 Sprache des Dokuments

Die für eine Dokumentinstanz angegebene Hauptsprache.

Ein mehrsprachiges Dokument kann mehr als eine relevante Sprache enthalten. Die Hauptsprache des Dokuments hat keinen Vorrang vor den Sprachkennzeichnungen einzelner Objekte oder Spans.

### 14.3 Originalsprache

Die Sprache, in der ein bestimmtes wissenschaftliches Objekt, Werk oder Dokument ursprünglich für die beschriebene Beziehung verfasst wurde.

Der Status „Originalsprache“ ist kontextabhängig und SOLLTE das entsprechende Quellobjekt oder die entsprechende Version angeben.

### 14.4 Übersetzung

Ein wissenschaftliches Objekt oder Dokument, das Inhalte aus einer Ausgangssprache in einer Zielsprache wiedergibt und dabei eine explizite Beziehung zur Quelle beibehält.

Übersetzung ist nicht dasselbe wie Lokalisierung.

### 14.5 Ausgangssprache

Die Sprache des Quellinhalts, der für einen Übersetzungsvorgang verwendet wird.

### 14.6 Zielsprache

Die Sprache, in die der Inhalt übersetzt wird.

### 14.7 Übersetzungseinheit

Ein identifizierbares Quellobjekt, Zielobjekt oder eine aufeinander abgestimmte Gruppe von Objekten, die als Einheit für die Übersetzung und Synchronisation verwendet wird.

Eine Übersetzungseinheit kann ein Absatz, eine Überschrift, eine Anmerkung, eine Tabellenzelle, ein Metadatenwert oder ein anderes wissenschaftliches Objekt sein.

### 14.8 Übersetzungsabgleich

Eine strukturierte Beziehung zwischen einem oder mehreren Quellobjekten und einem oder mehreren Zielsprachenobjekten.

Die Zuordnung kann eins-zu-eins, eins-zu-viele, viele-zu-eins oder ungelöst sein.

### 14.9 Übersetzungsstatus

Ein mit übersetzten Inhalten verbundener Workflow- oder Synchronisationsstatus.

Beispiele hierfür sind unter anderem „unübersetzt“, „Entwurf“, „geprüft“, „genehmigt“, „veraltet“ und „ersetzt“.

### 14.10 Veraltete Übersetzung

Eine Übersetzung, deren Ausgangstext sich nach der Erstellung oder Freigabe der Übersetzung so geändert hat, dass eine Synchronisationsprüfung erforderlich ist.

Veraltet bedeutet nicht unbedingt falsch.

### 14.11 Lokalisierung

Anpassung der Benutzeroberfläche, der Darstellung, der Formatierung oder des landesspezifischen Verhaltens an eine bestimmte Sprache oder Region.

Die Lokalisierung kann zwar eine Übersetzung beinhalten, begründet jedoch in der Regel keine wissenschaftliche Übersetzungsbeziehung zwischen den Manuskriptobjekten.

### 14.12 Transkription

Darstellung von Text aus einem Schriftsystem in einem anderen nach einem festgelegten Verfahren.

Transliteration ist keine Übersetzung.

## 15. Versionen, Änderungen und Zustände

### Version 15.1

Ein identifizierbarer Zustand einer Entität, der sich gemäß einem Versionsmodell von früheren oder späteren Zuständen unterscheidet.

Eine Version kann sich auf ein Manuskript, ein Dokument, ein Objekt, eine Spezifikation, ein Schema, ein Paket, ein Profil, eine Übersetzung oder eine Implementierung beziehen.

### 15.2 Überarbeitung

Eine Version, die durch eine oder mehrere Änderungen an einer bestehenden Entität erstellt wurde.

In einigen Spezifikationen wird möglicherweise zwischen geringfügigen Überarbeitungen und offiziell veröffentlichten Versionen unterschieden.

### 15.3 Änderung

Ein protokollierter Vorgang oder eine Änderung, die Inhalte, Metadaten, Struktur, Beziehungen, Berechtigungen oder den Status verändert.

### 15.4 Änderungssatz

Eine zusammengefasste Sammlung von Änderungen, die als eine einzige überprüfbare, zuordenbare oder transaktionsbezogene Einheit behandelt wird.

### 15.5 Momentaufnahme

Eine unveränderliche oder bewusst festgelegte Darstellung einer Entität zu einem bestimmten Zeitpunkt ihres Lebenszyklus.

Ein Snapshot kann für die Einreichung, Begutachtung, Veröffentlichung, Prüfung, Zitierung oder Archivierung verwendet werden.

### 15.6 Freigabe

Eine Version, die offiziell veröffentlicht oder verbreitet wurde und deren Identität, Status sowie Metadaten zur Veröffentlichung angegeben sind.

Ein Commit im Repository ist nicht automatisch eine Veröffentlichung.

### 15.7 Entwurf

Ein Lebenszyklusstatus, der angibt, dass Inhalte oder eine Spezifikation weiterhin wesentlichen Änderungen unterliegen.

Für den Reifegrad einer Spezifikation gilt die formale Definition in der Richtlinie zum Spezifikationslebenszyklus.

### 15.8 Eingereichte Fassung

Eine Dokumenten-Momentaufnahme, die offiziell für einen Redaktions-, Begutachtungs-, Repository- oder Publikations-Workflow bereitgestellt wird.

### 15.9 Angenommene Fassung

Eine zur Veröffentlichung angenommene Manuskriptfassung oder ein anderes definiertes Ergebnis, in der Regel vor oder unabhängig von der endgültigen Formatierung für die Veröffentlichung.

### 15.10 Veröffentlichte Fassung

Eine zur Verbreitung freigegebene Version eines Dokuments oder einer Veröffentlichung.

Der Begriff MUSS näher erläutert werden, wenn mehrere veröffentlichte Versionen vorliegen.

### 15.11 Unveränderlich

Darf nicht geändert werden, ohne die Identität und die Versionsbezeichnung beizubehalten.

Eine unveränderliche Entität kann durch eine neue Version ersetzt werden.

### 15.12 Veränderbarkeit

Darf geändert werden, wobei die derzeitige Betriebsidentität gemäß den geltenden Lebenszyklus- und Prüfungsvorschriften beibehalten wird.

### 15.13 Zweigstelle

Ein Entwicklungszweig, der von einer anderen Versionshistorie abweicht und später zusammengeführt, verglichen oder eigenständig weitergeführt werden kann.

### 15.14 Zusammenführen

Ein Vorgang, bei dem Änderungen oder Versionsverläufe aus mehreren Zweigen oder Versionen zusammengeführt werden.

Bei einer Zusammenführung MÜSSEN die Konfliktbehandlung und die Herkunft angegeben werden, wenn die semantische Integrität beeinträchtigt werden könnte.

## 16. Zusammenarbeit und Zugang

### 16.1 Arbeitsbereich

Eine kollaborative Umgebung, die mit einem oder mehreren Manuskripten, Dokumenten, Ressourcen, Mitgliedern und Workflow-Einstellungen verknüpft ist.

Ein Arbeitsbereich ist ein implementierungsunabhängiges Konzept für die Zusammenarbeit. Es erfordert kein bestimmtes Speicher- oder Hosting-Modell.

### 16.2 Workspace-Mitglied

Ein Mitarbeiter, dem in einem Arbeitsbereich eine Rolle oder Berechtigungen zugewiesen wurden.

Die Mitgliedschaft ist kontextabhängig und kann Status, Gültigkeitsdauer, Herkunft der Einladung und Zugriffsbereich umfassen.

### 16.3 Rolle

Eine benannte Reihe von Aufgaben oder erwarteten Tätigkeiten, die ein Akteur in einem definierten Kontext wahrnimmt.

Eine Rolle ist nicht automatisch ein Berechtigungssatz, obwohl eine Richtlinie Rollen Berechtigungen zuordnen kann.

### 16.4 Genehmigung

Eine Berechtigung zur Durchführung einer bestimmten Aktion an einer bestimmten Ressource oder in einem bestimmten Bereich.

Beispiele hierfür sind „Anzeigen“, „Kommentieren“, „Bearbeiten“, „Übersetzen“, „Überprüfen“, „Mitglieder verwalten“, „Veröffentlichen“ und „Exportieren“.

### 16.5 Zugriffskontrolle

Die Richtlinien und Mechanismen, die festlegen, ob ein Akteur oder eine Implementierung eine Operation an einer Ressource ausführen darf.

### 16.6 Eigentümer

Eine Arbeitsbereichsrolle, die gemäß den geltenden Richtlinien zur Zusammenarbeit die Hauptverantwortung oder -befugnis für den Arbeitsbereich trägt.

Das Eigentumsrecht darf NICHT als Recht an geistigem Eigentum ausgelegt werden, es sei denn, diese Beziehung wird in einer gesonderten rechtlichen Richtlinie festgelegt.

### 16.7 Mitautor

Ein Autor, der gemeinsam mit anderen Autoren an einem gemeinsamen Manuskript oder Arbeitsbereich arbeitet.

Die Rolle des Mitautors ist eine kooperative Rolle; sie legt für sich genommen weder die Reihenfolge der Mitwirkenden noch die Richtlinien zur Urheberschaft fest.

### 16.8 Viewer

Eine Rolle, die Zugriff auf definierte Inhalte hat, ohne diese zu ändern.

### 16.9 Einladung

Eine strukturierte Anfrage, mit der einem Agenten eine Mitgliedschaft oder eine Rolle in einem Arbeitsbereich oder Workflow angeboten wird.

### 16.10 Prüfungstermin

Ein protokolliertes Ereignis, das für die Nachvollziehbarkeit, die Herkunft, die Sicherheit oder den Verlauf des Arbeitsablaufs relevant ist.

Ein Audit-Ereignis kann den Akteur, die Aktion, das Ziel, den Zeitstempel, den Kontext und das Ergebnis identifizieren.

## 17. Spezifikationen, Profile und Konformität

### 17.1 Spezifikation des „OMI“

Ein registriertes technisches Dokument, das normative Strukturen, Verhaltensweisen, Einschränkungen, Vokabulare oder Interoperabilitätsanforderungen unter einer permanenten Kennung „`OMI-SPEC-NNN`“ definiert.

### 17.2 Spezifikationssuite

Ein abgestimmtes Paket aus Spezifikationen, Schemata, Registern, Profilen, Beispielen und Konformitätsressourcen des „OMI“, das als eine einzige Version unter der „OMI“ veröffentlicht wurde.

### 17.3 Dokument zur Unternehmensführung

Ein Dokument, in dem Projektablauf, Zuständigkeiten, Lebenszyklus, Versionsverwaltung, redaktionelle Vorgehensweisen, Terminologie oder Regeln für Beiträge festgelegt sind.

Ein Governance-Dokument ist nicht automatisch eine Implementierungsspezifikation.

### 17.4 Normativ

Erforderlich für die Konformität, Auslegung oder Umsetzung der geltenden Spezifikation.

Normative Inhalte legen Verpflichtungen oder verbindliche Definitionen fest.

### 17.5 Informativ

Dient der Erläuterung, dem Kontext, der Orientierung, der Begründung oder der Veranschaulichung, ohne eigenständig Konformitätsanforderungen zu schaffen.

### 17.6 Anforderung

Eine überprüfbare normative Verpflichtung oder Erlaubnis, die durch eine Spezifikation zum Ausdruck gebracht wird.

### 17.7 Konformität

Erfüllung der geltenden normativen Anforderungen für eine angegebene Spezifikationsversion, Konformitätsklasse und ein Profil.

Die Konformität ist stets auf einen bestimmten Geltungsbereich beschränkt. Eine uneingeschränkte Aussage wie „OMI-kompatibel“ reicht für den formellen Gebrauch nicht aus.

### 17.8 Konformitätsklasse

Eine benannte Kategorie von Implementierungsrollen mit einer festgelegten Reihe von geltenden Anforderungen.

Beispiele hierfür sind Erzeuger, Verbraucher, Validierer, Renderer, Editor, Importeur, Exporteur und Archivierungsprozessor.

### 17.9 Konformitätserklärung

Eine Erklärung, dass eine bestimmte Implementierung und Version einer definierten Spezifikation, Version, Klasse und einem definierten Profil entspricht, vorbehaltlich dokumentierter Einschränkungen.

### 17.10 Profil

Eine festgelegte Sammlung von Einschränkungen, Standardwerten, Auswahlen oder Erweiterungen, die auf eine oder mehrere „OMI“-Spezifikationen für einen bestimmten Zweck, eine bestimmte Community, ein bestimmtes Fachgebiet, einen bestimmten Arbeitsablauf oder ein bestimmtes Publikationsziel angewendet werden.

Ein Profil darf der Kernspezifikation, die es profiliert, nicht stillschweigend widersprechen.

### 17.11 Publikationsprofil

Ein Profil, das Anforderungen und Darstellungsverhalten für ein oder mehrere Veröffentlichungsziele definiert.

Es kann Folgendes definieren:

- erforderliche Metadaten;
- zulässige Bauten;
- Reihenfolge der Abschnitte;
- Zitierweise;
- Anmerkung zur Darstellung;
- Ausgabeformate;
- Anforderungen an die Barrierefreiheit;
- Validierungsregeln.

### 17.12 Validierungsprofil

Ein Profil, das festlegt, welche Validierungsregeln, Schweregrade, Vokabulare und Einschränkungen in einem bestimmten Kontext gelten.

### 17.13 Erweiterung

Eine erklärte Ergänzung des Kernmodells oder des Verhaltens von „OMI“ durch einen autorisierten Erweiterungsmechanismus.

Eine Erweiterung DARF die Kernsemantik NICHT stillschweigend neu definieren.

### 17.14 Erweiterungspunkt

Ein Ort oder ein Mechanismus, der ausdrücklich dafür ausgelegt ist, kompatible Erweiterungen zu ermöglichen.

### 17.15 Erweiterungs-Namensraum

Ein stabiler Identifikatorbereich, der dazu dient, von der Erweiterung definierte Namen, Eigenschaften, Typen oder Werte von Kernnamen von „OMI“ und anderen Erweiterungen zu unterscheiden.

### 17.16 Register

Eine gepflegte Sammlung stabiler Identifikatoren und zugehöriger Metadaten für kontrollierte Werte, Dokumentidentifikatoren, Profile, Funktionen, Medientypen, Rollen oder Erweiterungen.

### 17.17 Registrierungseintrag

Ein in einem Register erfasster Eintrag mit Angaben zu Status, Bedeutung, Herkunft und Lebenszyklus.

### 17.18 Leistungsfähigkeit

Eine deklarierte Funktion, Eigenschaft, ein Format, ein Profil oder ein Verarbeitungsverhalten, das von einer Implementierung unterstützt wird.

Fähigkeit ist nicht dasselbe wie Berechtigung. Die Fähigkeit beschreibt, was ein System tun kann; die Berechtigung beschreibt, wozu ein Akteur befugt ist.

### 17.19 Kern

Das gemeinsame normative Mindestmodell bzw. der Mindestfunktionsumfang, der gemäß der geltenden Konformitätsdefinition des „OMI“ erforderlich ist.

Das Wort *core* MUSS die jeweilige Version oder den Spezifikationskontext angeben, wenn Mehrdeutigkeiten möglich sind.

## 18. Schemata, Validierung und Verarbeitung

### 18.1 Schema

Eine maschinenlesbare Formalisierung struktureller Einschränkungen für einen Teil eines „OMI“-Datenmodells.

Ein Schema kann Typen, erforderliche Eigenschaften, Kardinalität, Syntax und ausgewählte Beziehungen validieren. Es definiert jedoch nicht automatisch die gesamte Semantik oder das gesamte Verarbeitungsverhalten.

### 18.2 Schema „JSON“

Die Schemasprache, die zur Darstellung maschinell überprüfbarer Einschränkungen für Darstellungen im Rahmen des „JSON“ verwendet wird, wurde in eine Spezifikation der „OMI“ übernommen.

### 18.3 Validierung

Der Prozess der Bewertung von Daten, Inhalten, Strukturen, Beziehungen oder Verhaltensweisen anhand festgelegter Regeln.

Die Validierung kann Folgendes umfassen:

- Syntaxprüfung;
- Schema-Validierung;
- strukturelle Validierung;
- semantische Validierung;
- Überprüfung der referenziellen Integrität;
- Profilüberprüfung;
- Überprüfung der Veröffentlichungsreife.

### 18.4 Validator

Eine Implementierung oder Komponente, die eine Validierung durchführt und die Ergebnisse meldet.

### 18.5 Validierungsregel

Eine identifizierte Regel, die während der Validierung ausgewertet wurde.

Eine Validierungsregel SOLLTE den Geltungsbereich, die Bedingung, den Schweregrad, die Meldung sowie die anwendbare Spezifikation oder das anwendbare Profil definieren.

### 18.6 Validierungsergebnis

Ein berichtetes Ergebnis der Bewertung einer Validierungsregel anhand eines Ziels.

### 18.7 Validierungsbericht

Eine strukturierte Sammlung von Validierungsergebnissen zusammen mit Kontextinformationen wie Validator-Version, Spezifikationsversion, Profil, Zeitpunkt und Zielidentität.

### 18.8 Gültig

Erfüllung der geltenden Validierungsregeln für ein deklariertes Schema, eine Spezifikation und ein Profil.

„Valid“ DARF NICHT verwendet werden, ohne den jeweiligen Regelsatz anzugeben, wenn mehrere in Frage kommen.

### 18.9 Ungültig

Verstoß gegen eine oder mehrere geltende normative Validierungsregeln.

### 18.10 Fehler

Ein Zustand, der gegen eine normative Anforderung verstößt oder die korrekte Ausführung eines Vorgangs verhindert.

### 18.11 Warnung

Ein zulässiger oder behebbarer Zustand, der zu Informationsverlust, eingeschränkter Interoperabilität, Mehrdeutigkeit oder unerwarteten Ergebnissen führen kann.

### 18.12 Informatives Ergebnis

Ein Validierungs- oder Verarbeitungsergebnis, das den Kontext vermittelt, ohne auf eine Ungültigkeit oder eine empfohlene Korrektur hinzuweisen.

### 18.13 Prozessor

Eine Implementierung oder Komponente, die Daten aus „OMI“ nutzt und eine definierte Operation ausführt.

Beispiele hierfür sind Parser, Validatoren, Renderer, Importer, Exporter, Resolver, Konverter und Prozessoren zur Datenkonservierung.

### 18.14 Parser

Ein Prozessor, der eine serialisierte Darstellung liest und deren strukturelles Datenmodell aufbaut oder identifiziert.

Eine erfolgreiche Syntaxanalyse bedeutet nicht zwangsläufig, dass der Text semantisch korrekt ist.

### 18.15 Produzent

Eine Implementierung, die Daten erstellt oder ausgibt, die der „OMI“-Spezifikation entsprechen.

### 18.16 Verbraucher

Eine Implementierung, die „OMI“-Daten liest oder verarbeitet.

### 18.17 Renderer

Ein Prozessor, der aus semantischen OMI-Inhalten und entsprechenden Profilen eine Darstellung oder eine Publikation erzeugt.

### 18.18 Darstellung

Der Prozess der Erstellung einer visuellen, textuellen, akustischen, haptischen oder maschinengerechten Darstellung aus strukturierten semantischen Inhalten.

Die Darstellung DARF die maßgebliche semantische Quelle NICHT stillschweigend verändern.

## 19. Import, Export und Interoperabilität

### 19.1 Import

Der Vorgang der Umwandlung oder Einbindung von Daten aus einer externen Darstellung in eine Darstellung im „OMI“-Format.

### 19.2 Export

Der Vorgang der Umwandlung von „OMI“-Daten in eine externe Darstellung oder ein Ausgabepaket.

### 19.3 Umrechnung

Eine Transformation zwischen Darstellungen, Formaten, Schemata oder Modellen.

Import und Export sind gerichtete Umwandlungsformen in Bezug auf einen Verarbeitungskontext von „OMI“.

### 19.4 Kartierung

Eine dokumentierte Beziehung zwischen Konzepten, Eigenschaften, Werten, Strukturen oder Operationen in einem Quellmodell und einem Zielmodell.

### 19.5 Verlustfreie Abbildung

Eine Abbildung, die alle Informationen bewahrt, die für den deklarierten Abbildungsbereich erforderlich sind, und eine äquivalente Rekonstruktion ermöglicht.

### 19.6 Bedingt verlustfreie Abbildung

Eine Abbildung, die nur dann verlustfrei ist, wenn bestimmte Voraussetzungen oder Profileinschränkungen erfüllt sind.

### 19.7 Verlustbehaftete Abbildung

Eine Abbildung, bei der Informationen weggelassen, approximiert, zusammengeführt oder so transformiert werden, dass eine vollständig äquivalente Rekonstruktion unmöglich ist.

Verluste MÜSSEN dokumentiert werden und SOLLTEN von Konvertierungstools gemeldet werden.

### 19.8 Hin- und Rückfahrt

Ein Vorgang, bei dem Daten von einer Darstellung in eine andere umgewandelt und anschließend wieder in die ursprüngliche Darstellung oder das ursprüngliche Modell zurückgeführt werden.

In einer Round-Trip-Anforderung MUSS angegeben werden, welche Informationen und welche Semantik beibehalten werden müssen.

### 19.9 Interoperabilität

Die Fähigkeit unabhängiger Systeme, Informationen mit einem vereinbarten Maß an semantischer und verhaltensbezogener Konsistenz auszutauschen und zu verarbeiten.

Interoperabilität kann struktureller, semantischer, verhaltensbezogener, betrieblicher oder auf die Erhaltung ausgerichteter Art sein. Die jeweilige Dimension SOLLTE angegeben werden.

### 19.10 Kompatibilität

Die Fähigkeit von Versionen, Implementierungen, Formaten oder Profilen, unter definierten Rahmenbedingungen zusammenzuarbeiten.

Der unbestimmte Begriff *kompatibel* SOLLTE vermieden werden. In Spezifikationen SOLLTE die Rückwärts-, Vorwärts-, Rundlauf-, Verhaltens-, Schema-, „API“- oder Profilkompatibilität angegeben werden.

### 19.11 Erhaltung

Die gezielte Maßnahme zur Gewährleistung der Zugänglichkeit, Integrität, Identität, Interpretierbarkeit und Herkunft wissenschaftlicher Inhalte über einen längeren Zeitraum hinweg.

### 19.12 Konservierungsprozessor

Eine Lösung, die Inhalte von „OMI“ im Hinblick auf die Langzeitarchivierung validiert, bündelt, migriert, überprüft oder pflegt.

## 20. Begriffe zur Umsetzung

### 20.1 Umsetzung

Software, ein Dienst, eine Komponente, eine Bibliothek oder ein System, das eine oder mehrere Spezifikationen oder Profile der „OMI“ umsetzt.

Eine Implementierung ist nicht gleichbedeutend mit dem Standard selbst.

### 20.2 Referenzimplementierung

Eine von OMIgepflegte Implementierung, die dazu dient, die Spezifikationen zu veranschaulichen, zu testen und Feedback dazu zu geben.

Open Manuscript Studio ist eine Referenzimplementierung. Ihr Verhalten ist nicht normativ, sofern sie nicht in eine veröffentlichte Spezifikation aufgenommen wird.

### 20.3 Eigenständige Umsetzung

Eine Implementierung, die mit ausreichender organisatorischer oder technischer Unabhängigkeit entwickelt wurde, um aussagekräftige Belege für die Interoperabilität über eine gemeinsame Codebasis hinaus zu liefern.

### 20.4 Open Manuscript Studio

Die führende Anwendung für die Erstellung von Referenzdokumenten und die Zusammenarbeit im Bereich „OMI“.

Die offizielle Kurzbezeichnung lautet *Studio*, sofern der Kontext eindeutig ist.

### 20.5 Dokument „OMI“

Ein serialisiertes Dokument, das eine Spezifikation der „OMI“ für Dokumente oder Dateiformate definiert und dieser entspricht.

Der Ausdruck DARF NICHT für jedes Dokument verwendet werden, das lediglich mit einer OMI-kompatiblen Anwendung bearbeitet wurde.

### 20.6 Support

Eine erklärte Fähigkeit einer Implementierung, eine definierte Spezifikation, Version, ein Profil, eine Funktion oder ein Format zu verarbeiten.

Die Unterstützung MUSS entsprechend qualifiziert sein, beispielsweise durch Lesen, Schreiben, Validieren, Darstellen, Importieren, Exportieren oder Aufbewahren.

### 20.7 Unbekannte Funktion

Eine Funktion, ein Typ, eine Eigenschaft, eine Erweiterung oder ein Wert, den eine Implementierung nicht erkennt.

### 20.8 Nicht unterstützte Funktion

Eine anerkannte Funktion, die eine Implementierung nicht bereitstellt oder verarbeitet.

„Unbekannt“ und „nicht unterstützt“ sind zwei unterschiedliche Zustände.

### 20.9 Durch die Implementierung definiert

Verhalten, das innerhalb der durch eine Spezifikation festgelegten Grenzen bewusst der Implementierung überlassen wird.

Durch die Implementierung definiertes Verhalten MUSS von der Implementierung dokumentiert werden, wenn es die Interoperabilität oder die Erwartungen der Benutzer beeinflusst.

### 20.10 Benutzeragent

Eine Anwendung, die im Auftrag eines menschlichen Benutzers Inhalte auf OMI erstellt, anzeigt, bearbeitet, überprüft, validiert oder verarbeitet.

Der Begriff bezieht sich nicht auf einen wissenschaftlichen Akteur wie beispielsweise einen Autor oder eine Organisation.

## 21. Irreführende Unterscheidungen

### 21.1 Manuskript versus Datei

Ein Manuskript ist ein wissenschaftliches Objekt. Eine Datei ist eine Darstellungsform zum Speichern oder Übertragen.

Falsch:

> Das Manuskript ist eine ZIP-Datei.

Bevorzugt:

> Das Manuskriptpaket ist in einem ZIP-basierten Container serialisiert.

### 21.2 Dokument versus Veröffentlichung

Ein Dokument ist eine strukturierte Darstellung in einem Verarbeitungskontext. Eine Veröffentlichung ist ein veröffentlichtes Ergebnis.

### 21.3 Bibliografischer Eintrag im Vergleich zum Vorkommen in Zitaten

Ein bibliografischer Eintrag beschreibt die zitierte Quelle. Ein Zitiervermerk erfasst eine einzelne Zitierhandlung sowie den Ort, an dem das Zitat vorkommt.

### 21.4 Quellenverzeichnis versus Literaturverzeichnis

Eine Referenzbibliothek ist eine strukturierte Sammlung, die für das Manuskript zur Verfügung steht. Ein Literaturverzeichnis ist eine ausgewählte Ausgabe.

### 21.5 Anker versus Anmerkung

Ein Anker identifiziert ein Ziel. Eine Anmerkung ordnet diesem Ziel einen Textkörper zu.

### 21.6 Anmerkung versus Kommentar

Eine Notiz gehört zum Inhalt des Manuskripts. Eine Anmerkung bezieht sich auf den Inhalt oder ein anderes Objekt und kann außerhalb des veröffentlichten Leseflusses stehen.

### 21.7 Rolle versus Berechtigung

Eine Rolle beschreibt eine Zuständigkeit oder Funktion. Eine Berechtigung erlaubt die Durchführung einer Aktion.

### 21.8 Spezifikation versus Schema

Eine Spezifikation definiert Semantik und Verhalten. Ein Schema formalisiert maschinenüberprüfbare strukturelle Einschränkungen.

### 21.9 Profil im Vergleich zur Erweiterung

Ein Profil wählt Spezifikationen für einen definierten Kontext aus oder schränkt diese ein und kann Erweiterungen deklarieren. Eine Erweiterung fügt über einen Erweiterungsmechanismus Namen, Strukturen oder Verhaltensweisen hinzu.

### 21.10 Übersetzung versus Lokalisierung

Bei der Übersetzung werden wissenschaftliche Inhalte in der Zielsprache erstellt, die sich auf den Ausgangstext beziehen. Bei der Lokalisierung werden Software oder Darstellungen an eine bestimmte Region angepasst.

### 21.11 Version versus Überarbeitung

Eine Version ist der allgemein definierte Zustand. Eine Revision bezeichnet in der Regel eine Version, die durch Änderungen gegenüber einem früheren Zustand entstanden ist.

### 21.12 Befugnis versus Berechtigung

Bei der Fähigkeit geht es um den technischen Support. Bei der Berechtigung geht es um die Autorisierung.

### 21.13 „Valid“ versus „Conformant“

Der Begriff „gültig“ beschreibt in der Regel Daten, die anhand eines Regelsatzes bewertet wurden. Der Begriff „konform“ beschreibt eine Implementierung, ein Dokument oder einen Prozess, der alle geltenden normativen Anforderungen für einen festgelegten Geltungsbereich erfüllt.

### 21.14 Persistent versus unveränderlich

„Persistent“ bedeutet, dass etwas über einen längeren Zeitraum hinweg identifizierbar bleiben soll. „Unveränderlich“ bedeutet, dass unter derselben Versionskennung keine Änderungen zulässig sind.

## 22. Begriffe, die eine Einschränkung darstellen oder vermieden werden sollten

In normativen Dokumenten der „OMI“ SOLLTEN die folgenden mehrdeutigen Begriffe näher erläutert werden:

| Vermeiden oder einschränken | Bevorzugen |
|---|---|
| Verweis | Zitierangabe, bibliografischer Eintrag, Querverweis oder normativer Verweis |
| Quelle | Metadatenquelle, Übersetzungsquelle, Importquelle oder zitierte Quelle |
| Version | Manuskriptversion, Schemaversion, Implementierungsversion oder Veröffentlichungsversion |
| Datensatz | bibliografischer Datensatz, Validierungsdatensatz, Prüfungsereignis oder Registereintrag |
| Objekt | wissenschaftliches Objekt, strukturelles Objekt, Inhaltsobjekt oder Akteur |
| Redakteur | Manuskriptredakteur, Zeitschriftenredakteur, Bandredakteur, Lektor oder Spezifikationsredakteur |
| Format | Dateiformat, Veröffentlichungsformat, Anzeigeformat oder Datenmodell |
| kompatibel | abwärtskompatibel, aufwärtskompatibel, Round-Trip-kompatibel oder profilkompatibel |
| gültig | gültig in Bezug auf ein benanntes Schema, eine Spezifikation oder ein Profil |
| Link | Kennung, URL, Anker, Zitat, Querverweis oder Beziehung |
| Benutzer | Autor, Redakteur, Gutachter, Übersetzer, Administrator, Leser oder API-Kunde |
| veröffentlicht | als welche Publikationsversion oder Ausgabe veröffentlicht |
| kanonisch | kanonisch für welchen Geltungsbereich und welche Autorität |

Die folgenden Formulierungen SOLLTEN in normativen Anforderungen ohne messbare Definition NICHT vorkommen:

- entsprechende Metadaten;
- Standardformat;
- normale Zitierweise;
- korrekte Wiedergabe;
- benutzerfreundlich;
- hohe Qualität;
- Permanenter Link;
- sichere Aufbewahrung;
- umfassende Unterstützung.

## 23. Groß- und Kleinschreibung sowie Formatierung

Allgemeine Begriffe werden in Kleinbuchstaben geschrieben:

> ein Manuskript, ein Anker, ein Zitat, ein Profil

Bei offiziellen Namen wird die Groß- und Kleinschreibung wie bei Titeln verwendet:

> Open Manuscript Initiative, Open Manuscript Studio, Zitiermodell, Spezifikationsregister

Maschinenlesbare Namen, Eigenschaften, Literalwerte und Bezeichner werden wie folgt formatiert:

> Die Eigenschaft „`documentLanguage`“ enthält ein Sprachkennzeichen.

Permanente Dokumentenkennungen im Format „OMI“ verwenden Präfixe in Großbuchstaben:

```text
OMI-SPEC-005
OMI-PROFILE-001
OMI-REG-001
OMI-SCHEMA-001
OMI-EXAMPLE-001
```

## 24. Abkürzungen

Eine Abkürzung SOLLTE bei ihrer ersten inhaltlichen Verwendung in einem Dokument ausgeschrieben werden, es sei denn, es ist vernünftigerweise davon auszugehen, dass die Zielgruppe sie kennt.

Zu den empfohlenen Formularen gehören:

| Abkürzung | Bedeutung |
|---|---|
| OMI | Open Manuscript Initiative |
| CSL | Citation Style Language |
| DOI | Digital Object Identifier |
| ORCID | Offene Forscher- und Mitwirkenden-ID |
| ROR | Register für Forschungseinrichtungen |
| JATS | Tag-Suite für Zeitschriftenartikel |
| API | Anwendungsprogrammierschnittstelle |
| URI | Uniform Resource Identifier |
| URL | Uniform Resource Locator |
| UUID | Universally Unique Identifier |
| JSON | JavaScript Objektnotation |
| XML | Extensible Markup Language |
| PDF | Portable Document Format |
| EPUB | Elektronische Veröffentlichung |

Bei Abkürzungen im Plural wird kein Apostroph verwendet:

> APIs, DOIs, URLs

## 25. Anforderungen an die Übersetzung

Offizielle Übersetzungen der Spezifikationen der „OMI“ MÜSSEN eine genehmigte, sprachspezifische Terminologieliste verwenden, die auf diesem Dokument basiert.

Beim Übersetzungsprozess MÜSSEN folgende Unterscheidungen beibehalten werden, darunter:

- Manuskript versus Dokument;
- Zitierhäufigkeit im Vergleich zum bibliografischen Eintrag;
- Quellenverzeichnis im Vergleich zum Literaturverzeichnis;
- Anker versus Anmerkung;
- Anmerkung versus Kommentar;
- Rolle versus Berechtigung;
- Spezifikation versus Schema;
- Übersetzung versus Lokalisierung;
- Befugnis versus Berechtigung;
- „gültig“ versus „konform“.

Wenn ein Wort in der Zielsprache zwei Konzepte aus dem „OMI“ zusammenfasst, SOLLTE die Übersetzung Folgendes verwenden:

- ein qualifizierter zusammengesetzter Begriff;
- ein etabliertes technisches Lehnwort;
- eine Erläuterung in Klammern;
- ein sprachspezifischer Glossareintrag.

Eigenschaftsnamen, Aufzählungswerte, Bezeichner, Medientypen, Namensraumbezeichner und Anforderungsbezeichner DÜRFEN NICHT übersetzt werden.

## 26. Hinzufügen oder Ändern von Begriffen

Ein Vorschlag zur Aufnahme eines zentralen Begriffs SOLLTE Folgendes enthalten:

- vorgeschlagene Laufzeit;
- kurze Definition;
- Grund, warum das Konzept erforderlich ist;
- verwandte und gegensätzliche Begriffe;
- betroffene Spezifikationen und Schemata;
- bekannte Äquivalente nach externen Normen;
- Überlegungen zur Übersetzung;
- Beispiele für die richtige und falsche Verwendung.

Eine Definitionsänderung MUSS gemäß der Versionsverwaltungsrichtlinie für die „OMI“ geprüft werden.

Eine Änderung ist potenziell fehlerhaft, wenn sie Folgendes verändert:

- die Identität des Begriffs;
- die Menge der erfassten Einheiten;
- normative Auslegung;
- Schema oder „API“ – Bedeutung:
- Konformitätsergebnisse;
- festgelegte Zuordnungen zu externen Standards.

Veraltete Begriffe MÜSSEN zusammen mit ihrem Ersatz dokumentiert bleiben und DÜRFEN NICHT stillschweigend neu zugewiesen werden.

## 27. Externe Terminologiezuordnungen

OMI kann seine Begriffe zwar externen Standards zuordnen, doch darf eine Äquivalenz NICHT allein aufgrund ähnlicher Bezeichnungen angenommen werden.

In einer Zuordnung SOLLTE angegeben werden, ob es sich um Folgendes handelt:

- genau;
- enger;
- umfassender;
- Überlappung;
- kontextabhängig;
- nicht gleichwertig.

Beispiele für relevante externe Terminologiequellen sind unter anderem:

- JATS;
- Zitierstil-Sprache;
- Crossref-Metadaten;
- DataCite-Metadaten;
- ORCID;
- ROR;
- Dublin Core;
- schema.org;
- Bibliotheks- und Archivmodelle;
- Web-Annotationsmodelle;
- Konservierungsstandards.

Externe Zuordnungen haben informativen Charakter, sofern sie nicht durch eine „OMI“-Spezifikation normativ übernommen werden.

## 28. Erwartungen hinsichtlich der Konformität

OMI In Spezifikationen und offiziellen Profilen MÜSSEN zentrale Begriffe einheitlich verwendet werden.

Eine konforme Implementierung KANN unterschiedliche Bezeichnungen in der Benutzeroberfläche verwenden, doch ihre exportierten Daten,APIen, Dokumentation und Konformitätserklärungen MÜSSEN die definierten konzeptionellen Unterscheidungen beibehalten.

Eine Implementierung DARF NICHT behaupten, dass zwei zentrale Konzepte von „OMI“ gleichwertig sind, wenn die Spezifikationen zwischen ihnen unterscheiden.

Eine Schemaeigenschaft oder ein Feld „API“, das einen zentralen Begriff verwendet, SOLLTE in der generierten Dokumentation auf die entsprechende Definition verweisen oder diese wiedergeben.

## 29. Wartung

Dieses Dokument wird gemäß dem Lebenszyklus für Spezifikationen, der Versionspolitik und dem Stilhandbuch für Spezifikationen des „OMI“ gepflegt.

Eine Terminologieüberprüfung SOLLTE erfolgen, wenn:

- eine neue Spezifikation wird entworfen;
- Ein Schema führt einen neuen Kern-Typ oder eine neue Eigenschaft ein;
- In zwei Spezifikationen wird dasselbe Wort unterschiedlich verwendet;
- Eine externe Zuordnung macht eine konzeptionelle Diskrepanz deutlich;
- Eine offizielle Übersetzung kann eine Unterscheidung nicht eindeutig wiedergeben;
- Die Erfahrungen bei der Umsetzung zeigen, dass hier Unklarheiten bestehen.

Redaktionelle Korrekturen können als Patch-Versionen veröffentlicht werden. Kompatible Ergänzungen können als Nebenversionen veröffentlicht werden. Änderungen, die die etablierte normative Bedeutung verändern, erfordern eine Hauptversion oder eine dokumentierte, vor Version 1.0 erfolgte, kompatibilitätsbrechende Änderung.

## 30. Zusammenfassung

OMI hängt von Unterscheidungen ab, die herkömmliche Dokumentenprogramme oft verbergen.

Ein Manuskript ist keine Datei. Ein Zitatsvorkommen ist kein formatiertes Zitat. Ein bibliografischer Datensatz ist kein Eintrag in einem Literaturverzeichnis. Ein Anker ist keine Anmerkung. Eine Rolle ist keine Berechtigung. Eine Spezifikation ist kein Schema. Eine Referenzimplementierung ist nicht der Standard.

Durch die Beibehaltung dieser Unterscheidungen können unabhängige Systeme wissenschaftliche Inhalte austauschen, ohne deren Bedeutung immer wieder neu konstruieren zu müssen. Dieses Terminologiedokument ist daher Teil der architektonischen Grundlage des „Open Manuscript Initiative“.
---
id: file-format
title: OMI-SPEC-320 — Dateiformat
sidebar_label: Dateiformat
description: Normative Regeln für die logische Darstellung, Analyse, Serialisierung, Validierung, Erweiterung, den Austausch von Versionshistorie und die Migration von Manuskripten im Format „OMI“ (JSON).
keywords:
  - Open Manuscript Initiative
  - OMI
  - manuscript file format
  - JSON Schema
  - interoperability
  - preservation
---

# OMI-SPEC-320 — Dateiformat

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Kennung | `OMI-SPEC-320` |
| Titel | Dateiformat |
| Version | `0.2.0` |
| Status | Entwurf |
| Dokumenttyp | Normativ |
| Normsprache | Englisch |
| Redakteure | OMI Betreuer |
| Zuletzt aktualisiert | 05.09.2026 |
| Alte Kennung | `OMI-SPEC-011` |
| Ersetzt | `OMI-SPEC-320@0.1.0` |
| Ersetzt durch | Keine |
| Abhängigkeiten | `OMI-SPEC-100`, `OMI-SPEC-120`, `OMI-SPEC-140`, `OMI-SPEC-160`, `OMI-SPEC-180` |
| Verwendet von | `OMI-SPEC-230`, `OMI-SPEC-330`, `OMI-SPEC-340`, `OMI-SPEC-350` |
| Schema | [`omi-manuscript-0.2.schema.json`](/schemas/omi-manuscript-0.2.schema.json) |
| Medientyp | `application/vnd.openmanuscript+json` (vorläufig) |
| Dateiendung | `.omi.json` |
| Profile | Core-Snapshot; History Exchange; Verlustfreier Round-Trip |
| Umsetzungsstatus | [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md) |
| Issue-Tracker | Probleme im „Open Manuscript Initiative“-Repository |

## 1. Zusammenfassung

Diese Spezifikation definiert die plattformunabhängige logische Darstellung eines Manuskripts aus dem „Open Manuscript Initiative“. Sie legt ein UTF-8-Dokument im Format „JSON“, einen versionierten Identifikationsumschlag, erforderliche Manuskriptfelder, geordnete semantische Sammlungen, Referenzen, Erweiterungsdaten, den optionalen Austausch von Verlaufsdaten, das Verhalten bei der Analyse und Serialisierung, mehrschichtige Validierung, Diagnosen, die Beibehaltung unbekannter Felder sowie Migrationsdatensätze fest.

Das Format repräsentiert den wissenschaftlichen Zustand und nicht das Seitenlayout oder den Laufzeitzustand eines Editors. Eine Implementierung kann dasselbe Manuskript in einer Datenbank, einem Ereignisprotokoll, mehreren Dateien oder einer anderen internen Form speichern, doch ein exportiertes „OMI“-Manuskript, das dieser Spezifikation entspricht, weist dieselbe beobachtbare „JSON“-Semantik auf.

Diese Spezifikation definiert bewusst weder das physische Archiv „`.omi`“ noch den Aufbau der ZIP-Einträge, Prüfsummen, die Komprimierung oder Regeln für den Paketpfad. Diese Aspekte werden in „[OMI-SPEC-330 — Container Architecture](./container-architecture.md)“ behandelt. Ein Container kann ein Dokument, das dieser Spezifikation entspricht, als einen seiner Bestandteile enthalten.

## 2. Status dieses Dokuments

Dieses Dokument ist ein **Entwurf** einer Spezifikation der „Open Manuscript Initiative“.

Die Version „`0.2.0`“ ist der erste vollständige Entwurf eines Dateiformats mit einem veröffentlichten Schema unter JSON, Konformitäts-Fixtures, expliziten Verarbeitungsregeln und stabilen Anforderungskennungen. Er ersetzt den unvollständigen Entwurf unter `0.1.0`, der Aspekte des logischen Formats und des physischen Containers miteinander verband, ohne ein interoperables Parsing- oder Validierungsverhalten zu definieren.

Eigenschaftsnamen, Profile, Schema-Einschränkungen und Migrationsregeln können sich vor Version 1.0 noch in einer Weise ändern, die zu Inkompatibilitäten führt. Eine Konformitätserklärung MUSS genau diese Spezifikationsversion oder eine unveränderliche Repository-Revision angeben.

Das veröffentlichte Schema ist für strukturelle Einschränkungen normativ. Die in Textform formulierten Anforderungen regeln semantische Aspekte, die Verarbeitung, die Sicherheit, die Langzeitarchivierung sowie das Round-Trip-Verhalten, die das Schema unter JSON nicht ausdrücken kann. Bei Widersprüchen zwischen dem Schema und diesem Dokument handelt es sich um einen Spezifikationsfehler, den Implementierungen melden SOLLTEN; bis zur Korrektur gilt die in Textform formulierte Anforderung mit der spezifischeren Anforderungskennung.

## 3. Konformität

### 3.1 Normative Begriffe

Die Schlüsselwörter **MUSS**, **DARF NICHT**, **ERFORDERLICH**, **SOLLTE**, **SOLLTE NICHT**, **KANN** und **OPTIONAL** sind gemäß der Beschreibung in BCP 14 zu interpretieren, wenn – und nur wenn – sie vollständig in Großbuchstaben geschrieben sind.

Jede normative Anforderung in diesem Dokument verfügt über einen festen Bezeichner in der Form `REQ-FMT-NNN`. Ein Testbericht, ein Problem, eine Ausnahme oder eine Implementierungsangabe SOLLTE die entsprechenden Bezeichner angeben.

### 3.2 Konformitätsklassen

Diese Spezifikation definiert fünf Implementierungsklassen:

- **Konformer Produzent:** Erstellt oder exportiert ein Manuskriptdokument im Format „OMI“.
- **Konformes Verbraucherprogramm:** analysiert, importiert, präsentiert, indexiert oder transformiert ein Manuskriptdokument im Format „OMI“.
- **Konformitätsprüfer:** wertet ein Dokument aus und gibt strukturierte Diagnoseergebnisse zurück.
- **Konvertierungsprogramm:** Wandelt ein Dokument von einer deklarierten Formatversion in eine andere um.
- **Verlustfreier Prozessor:** Liest und schreibt ein Dokument unter Beibehaltung aller unterstützten und nicht unterstützten Datenelemente, die er nicht absichtlich verändert.

Eine Implementierung KANN mehr als eine Klasse beanspruchen. Eine konforme Implementierung MUSS alle Anforderungen erfüllen, die für die von ihr beanspruchten Klassen und Profile gelten.

### 3.3 Konformitätsprofile

Eine Konformitätserklärung MUSS mindestens eines der folgenden Profile angeben.

#### Kern-Snapshot

Das „Core Snapshot“-Profil übermittelt einen aktuellen Stand eines Manuskripts. Es erfordert die Stamm-Identifikationshülle, die Manuskript-ID, die Sprache, den Titel, die Abschnitts-Hierarchie und Zeitstempel. Es impliziert nicht, dass eine Revisionshistorie vorhanden ist.

#### Geschichtsaustausch

Das „History Exchange“-Profil überträgt den aktuellen Zustand zusammen mit einer portablen Revisionshistorie, die den Vorgaben von `OMI-SPEC-160` unterliegt. Es erfordert eine explizite Erklärung zur Vollständigkeit der Historie, eine Kopfrevision sowie intern konsistente Revisionsverknüpfungen.

#### Verlustfreier Hin- und Rückweg

Das „Lossless Round Trip“-Profil gilt für Prozessoren, die möglicherweise nicht alle Erweiterungen oder zukünftige Felder verstehen. Solche Prozessoren behalten unbekannte Daten unverändert bei und melden jede angeforderte Operation, die diese verwerfen oder neu interpretieren würde.

### 3.4 Konformitätserklärung

Eine Konformitätserklärung SOLLTE Folgendes enthalten:

- Name und Version der Implementierung;
- `OMI-SPEC-320` Version;
- Implementierungsklasse oder -klassen;
- deklariertes Profil oder Profile;
- unterstützter Bereich an Formatversionen;
- unterstützte Erweiterungsnamensräume;
- maximale zulässige Eingabegröße, Verschachtelungstiefe und Sammlungsgrößen;
- Validierungs- und Migrationsfunktionen;
- verwendete Fixture-Suite oder Testrevision;
- bekannte Ursachen für Datenverluste.

**REQ-FMT-001:** Ein Produzent MUSS ein „JSON“-Objekt der obersten Ebene ausgeben, das den Anforderungen dieser Spezifikation hinsichtlich Identifikation, Datenmodell und Serialisierung entspricht.

**REQ-FMT-002:** Ein Verbraucher MUSS das angegebene Format und die Version von „OMI“ ermitteln, bevor er die Felder des Manuskripts auswertet.

**REQ-FMT-003:** Ein Validator MUSS die Syntax von „JSON“, das versionsspezifische Schema, die geltenden semantischen Einschränkungen sowie jedes deklarierte Profil auswerten.

**REQ-FMT-004:** Ein Migrationsprogramm MUSS die ursprüngliche Eingabe beibehalten und einen expliziten Migrationsdatensatz erstellen, bevor es ein konvertiertes Dokument als äquivalent zu dieser Eingabe bereitstellt.

**REQ-FMT-005:** Ein verlustfreier Prozessor MUSS unbekannte Erweiterungselemente und unbekannte, unveränderte Elemente beibehalten oder den Vorgang abbrechen und genau angeben, welche Daten verloren gehen würden.

## 4. Geltungsbereich

Diese Spezifikation definiert:

- eine in einer einzigen Datei „JSON“ enthaltene Darstellung des logischen Manuskriptstatus;
- Formatidentifizierung und Versionsaushandlung;
- allgemeine Regeln für „JSON“, Zeichenfolgen, Zahlen, Zeitstempel, Sprachkennzeichnungen, URIs und Bezeichner;
- die Stammfelder des Manuskripts und die Konventionen für portable Sammlungen;
- geordnete Abschnitts- und Blockstruktur;
- Verweise zwischen adressierbaren wissenschaftlichen Objekten;
- Metadaten und Verweise zu logischen Assets;
- optionaler Inline-Verlaufsaustausch;
- Verhalten von Produzenten, Konsumenten, Validatoren, Migratoren und bei der verlustfreien Verarbeitung;
- Struktur-, Referenz-, Semantik-, Profil- und Richtlinien-Validierungsebenen;
- maschinenlesbare Diagnosedaten;
- Erweiterungs-Namespaces und die Behandlung unbekannter Felder;
- deterministische Serialisierung und optionale Kanonisierung;
- Berichterstattung zu Kompatibilität und Migration;
- Anforderungen hinsichtlich Sicherheit, Datenschutz, Bestandserhaltung, Barrierefreiheit und Internationalisierung.

### 4.1 Nicht im Geltungsbereich

Diese Spezifikation definiert Folgendes nicht:

- der physische „`.omi`“-Container oder das ZIP-Layout;
- Paketpfade, Komprimierung, Prüfsummen, Signaturen oder Verschlüsselung;
- ein Datenbankschema oder eine Event-Store-Implementierung;
- Zustand der Editor-Komponente, Auswahlstatus, Rückgängig-Stapel, Caches oder Sitzungsdaten;
- Seitenlayout, Paginierung, Zeilenumbrüche oder Formatierung der Veröffentlichung;
- die vollständige Semantik von Abschnitten, Blöcken, Akteuren, Zitaten, Anmerkungen oder Überarbeitungen;
- ein Protokoll für die Zusammenarbeit in Echtzeit;
- Zugriffskontrollrichtlinie;
- Richtlinie zur Fernwiederherstellung von Assets;
- ein universelles Format für Rich-Text-Bearbeitungsbäume;
- PDF, HTML, EPUB, DOCX, JATS XML, Crossref XML oder DataCite XML.

Diese Anforderungen sind in den entsprechenden Spezifikationen zu Semantik, Workflow, Veröffentlichung, „API“ oder Containern von „OMI“ definiert.

## 5. Begriffsbestimmungen

Es gilt das Dokument „[OMI Terminology and Definitions](../governance/terminology.md)“.

### 5.1 Manuskriptdokument „OMI“

Ein UTF-8-Dokument vom Typ „JSON“, dessen Wert auf oberster Ebene ein Objekt ist, dessen Wert „`omi.format`“ auf „`manuscript`“ gesetzt ist und dessen deklarierte Formatversion dieser Spezifikation unterliegt.

### 5.2 Formatversion

Die semantische Version unter `omi.version`, die die Regeln und das Schema für das Dateiformat festlegt. Es handelt sich dabei nicht um die Manuskriptversion, die Anwendungsversion, die Version der „OMI“-Suite, die Container-Version oder die Publikationsausgabe.

### 5.3 Kernmitglied

Ein Objektelement des Typs „JSON“, das durch diese Spezifikation oder durch eine unter `omi.specifications` genannte „OMI“-Spezifikation definiert ist.

### 5.4 Verlängerungselement

Ein Element innerhalb des Objekts „`extensions`“, dessen Name eine absolute Namespace-URI oder ein URN ist und dessen Wert vom Eigentümer dieses Namespace gesteuert wird.

### 5.5 Unbekanntes Mitglied

Ein Element, das von einem bestimmten Prozessor nicht verstanden wird. Ein Element kann dem Format bekannt sein, einer älteren Implementierung jedoch unbekannt sein.

### 5.6 Adressierbares Objekt

Ein Manuskript-Objekt mit einer eindeutigen Kennung (`id`), auf das unabhängig verwiesen werden kann, einschließlich eines Abschnitts, eines Blocks, einer Anmerkung, eines Zitats, eines bibliografischen Datensatzes, eines Assets, eines Akteurs, eines Beitrags, eines Tombstones oder einer Überarbeitung.

### 5.7 Momentaufnahme

Ein dargestellter Stand des Manuskripts. Eine Momentaufnahme kann zwar Aufschluss über die jeweilige Überarbeitung geben, lässt jedoch für sich genommen keine Rückschlüsse auf die gesamte Überarbeitungsgeschichte zu.

### 5.8 Ursprüngliche Eingabe

Die genaue Byte-Sequenz, die von einem Verbraucher oder Migrator vor dem Parsen, der Reparatur, der Normalisierung oder der Konvertierung akzeptiert wird.

### 5.9 Quarantäne

Ein sicherer Zustand, in dem eine Implementierung ein Dokument beibehält, es jedoch nicht als erfolgreich importiertes, bearbeitbares oder ausführbares Manuskript behandelt.

## 6. Gestaltungsprinzipien

Das Dateiformat folgt diesen Grundsätzen:

1. **Semantische Quelle:** Das Manuskript dient als Grundlage für Veröffentlichungen und ist keine Aufzeichnung eines fertigen Seitenlayouts.
2. **Eindeutige Identifikation:** Identitäten in Bezug auf Format, Schema, Manuskript und adressierbare Objekte werden niemals allein aus einem Dateinamen abgeleitet.
3. **Prüfbare Darstellung:** Das Kerndokument ist ein gewöhnlicher UTF-8-JSON.
4. **Implementierungsunabhängigkeit:** Der portable Zustand schließt editor-spezifische Laufzeit- und Kontostände aus.
5. **Mehrstufige Validierung:** Syntax, Struktur, Referenzen, Semantik, Profile und lokale Richtlinien lassen sich voneinander unterscheiden.
6. **Zukunftssichere Datenerhaltung:** Unbekannte Daten werden isoliert, beibehalten und niemals stillschweigend neu interpretiert.
7. **Migration mit Nachweis:** Die Konvertierung erfolgt explizit, ist reproduzierbar und berücksichtigt mögliche Datenverluste.
8. **Container-Trennung:** Die Semantik der logischen „JSON“ hängt nicht vom Layout des Archivs ab.
9. **Stabile Objektidentität:** Referenzen verwenden Identifikatoren anstelle der gerenderten Position oder des Array-Index.
10. **Standardmäßig sicher:** Bei der Analyse werden keine Inhalte ausgeführt und es werden keine externen Ressourcen unbemerkt abgerufen.

## 7. Modellübersicht

Ein Dokument im Format „OMI“ besteht aus fünf logischen Bereichen:

| Bereich | Repräsentative Mitglieder | Zweck |
|---|---|---|
| Identifikation | `schema`, `omi` | Wählt dieses Format, diese Version, diese Profile und die zugehörigen Spezifikationen aus |
| Stand des Manuskripts | `id`, `locale`, `title`, `sections` | Gibt den aktuellen Stand der Forschung wieder |
| Verwandte Objekte | `agents`, `contributions`, `annotations`, `citations`, `assets` | Enthält adressierbare unterstützende Objekte und Beziehungen |
| Geschichte | `versioningModelVersion`, `headRevisionId`, `revisionHistory` | Tauscht optional Revisionsnachweise aus |
| Erweiterungen | `extensions` | Enthält Daten außerhalb des Kernbereichs mit Namespace |

Das Stammobjekt ist ein logisches Dokument. Ein Container darf ausgewählte Sammlungen nur dann in separate Teile auslagern, wenn in „`OMI-SPEC-330`“ festgelegt ist, wie diese Teile wieder zu demselben logischen Modell zusammengesetzt werden. Durch das Zusammensetzen DARF die Bedeutung des Dokuments NICHT verändert werden.

## 8. Allgemeine Darstellungsregeln

### 8.1 „JSON“ und Zeichenkodierung

**REQ-FMT-006:** Ein Manuskriptdokument im Format „OMI“ MUSS eine gültige „JSON“-Kodierung im UTF-8-Format aufweisen. Ersteller DÜRFEN KEINE Byte-Order-Mark ausgeben. Empfänger KÖNNEN eine Byte-Order-Mark zum Zwecke der Wiederherstellung akzeptieren, MÜSSEN jedoch eine Warnung ausgeben.

**REQ-FMT-007:** Die Namen der Objektmitglieder von „JSON“ MÜSSEN innerhalb jedes Objekts eindeutig sein. Ein Verbraucher MUSS doppelte Namen vor oder während der Analyse erkennen und DARF NICHT stillschweigend die Regel „First-wins“ oder „Last-wins“ anwenden.

**REQ-FMT-008:** Der Wert auf oberster Ebene „JSON“ MUSS ein Objekt sein. „JSON“ „`null`“, Arrays, Zeichenketten, Zahlen und Boolesche Werte sind als Wert auf oberster Ebene ungültig.

**REQ-FMT-009:** Zeichenketten MÜSSEN wohlgeformte Unicode-Skalarwerte enthalten. Produzenten DÜRFEN KEINE ungepaarten UTF-16-Surrogat-Codepunkte ausgeben.

Die Reihenfolge der Objektelemente hat keine semantische Bedeutung. Die Reihenfolge der Elemente in einem Array hat semantische Bedeutung, es sei denn, in der definierenden „OMI“-Spezifikation wird das Array ausdrücklich als ungeordnet deklariert.

### 8.2 Zahlen

**REQ-FMT-010:** Ein Produzent DARF KEINE Werte wie „`NaN`“, das positive oder negative Unendliche oder andere nicht-JSONe numerische Token ausgeben.

**REQ-FMT-011:** Eine als Zahl im Format „JSON“ dargestellte Ganzzahl MUSS im interoperablen Bereich von `-(2^53)+1` bis `(2^53)-1` liegen. Ein Wert, der eine höhere Genauigkeit erfordert, MUSS als Zeichenfolge dargestellt werden, deren Semantik durch das zugehörige Feld definiert ist.

Exakte Bezeichner, Prüfsummen, Dezimalzahlen, Seitenverweise und externe numerische Codes SOLLTEN Zeichenfolgen sein, es sei denn, die jeweils geltende Spezifikation schreibt explizit Zahlen im Format „JSON“ vor.

### 8.3 Vorhandensein, Nullwerte und leere Werte

**REQ-FMT-012:** Das Fehlen eines Werts bedeutet, dass kein Wert angegeben wurde oder dass der Wert nicht zutrifft. „`null`“ DARF nur verwendet werden, wenn das maßgebliche Schema dies ausdrücklich zulässt. Eine leere Zeichenfolge DARF NICHT als Ersatz für einen fehlenden Pflichtwert verwendet werden.

Ein leeres Array steht für eine bekanntermaßen leere Sammlung. Ein Produzent SOLLTE für eine erforderliche Sammlung ohne Elemente ein leeres Array ausgeben und SOLLTE eine optionale Sammlung weglassen, deren Zustand unbekannt ist oder nicht dargestellt wird.

### 8.4 Zeitstempel

**REQ-FMT-013:** Ein Zeitstempelfeld, das dieser Spezifikation unterliegt, MUSS ein Datums- und Zeitformat gemäß RFC 3339 mit einer expliziten UTC-Angabe oder einem numerischen Offset sein. Ein Datum ohne Zeitzone DARF NICHT für einen Zeitpunkt verwendet werden.

Produzenten SOLLTEN UTC-Zeitstempel mit den Großbuchstaben „`T`“ und „`Z`“ ausgeben. Verbraucher MÜSSEN die geparsten Zeitpunkte miteinander vergleichen und nicht die rohen Zeitstempel-Zeichenketten.

### 8.5 Sprachkennzeichnungen

**REQ-FMT-014:** Ein Sprachfeld MUSS ein wohlgeformtes BCP 47-Sprachkennzeichen verwenden. Bei den Kennzeichen wird die Groß-/Kleinschreibung nicht berücksichtigt; die Ersteller SOLLTEN die empfohlene Schreibweise verwenden, ohne dabei die Bedeutung des Kennzeichens zu verändern.

### 8.6 URIs

**REQ-FMT-015:** Ein als URI definiertes Feld MUSS eine absolute URI enthalten, es sei denn, das maßgebliche Feld erlaubt ausdrücklich eine relative Referenz. Ein Verbraucher MUSS relative Referenzen ausschließlich anhand einer ausdrücklich deklarierten Basis-URI auflösen.

### 8.7 Bezeichner

**REQ-FMT-016:** Jedes adressierbare Objekt MUSS über einen nicht leeren Zeichenfolgen`id` verfügen. Der Bezeichner MUSS innerhalb des Identitätsbereichs des Manuskripts eindeutig sein und MUSS unverändert bleiben, solange das wissenschaftliche Objekt seine Identität behält.

**REQ-FMT-017:** Eine Implementierung DARF den Bezeichner eines gelöschten Objekts NICHT für ein anderes Objekt wiederverwenden. Wenn die Rückverfolgbarkeit von Löschvorgängen deklariert ist, MUSS der Bezeichner durch einen „Tombstone“ oder einen gleichwertigen Verlaufsnachweis dargestellt bleiben.

Bezeichner sind undurchsichtig. Ein Verbraucher DARF aus der Schreibweise eines Bezeichners KEINE Rückschlüsse auf den Objekttyp, den Eigentümer, den Speicherort, die Revisionsreihenfolge oder die Zugriffsrechte ziehen.

## 9. Stammobjekt „Manuskript“

### 9.1 Erforderliche Mitglieder

Das „Core Snapshot“-Profil erfordert die folgenden Root-Mitglieder:

| Element | Typ | Kardinalität | Bedeutung |
|---|---|---:|---|
| `schema` | Zeichenfolge-URI | 1 | Unveränderlicher Schema-Bezeichner für diese Formatversion |
| `omi` | Objekt | 1 | Format und Abhängigkeitshüllkurve |
| `id` | Zeichenkette | 1 | Manuskript-ID |
| `locale` | Zeichenfolge | 1 | Primäres BCP-47-Sprachkennzeichen |
| `title` | Zeichenkette | 1 | Nicht leerer Manuskripttitel |
| `sections` | Array | 1 | Geordnete Abschnitte der obersten Ebene |
| `createdAt` | Zeichenfolge | 1 | Erstellungszeitpunkt |
| `updatedAt` | Zeichenkette | 1 | Zeitpunkt der letzten Aktualisierung des dargestellten Zustands |

**REQ-FMT-018:** Ein Core-Snapshot-Ersteller MUSS jedes erforderliche Root-Element ausgeben und MUSS das veröffentlichte versionsspezifische Schema erfüllen.

**REQ-FMT-019:** `updatedAt` MUSS einen Zeitpunkt darstellen, der gleich oder später als `createdAt` ist. Ein Validator MUSS einen semantischen Fehler melden, wenn dies nicht der Fall ist.

### 9.2 Empfohlene und optionale Elemente

Die folgenden Stammelemente sind für den interoperablen Austausch definiert. Ihre detaillierte Objektsemantik ist in den jeweiligen „OMI“-Spezifikationen festgelegt.

| Mitglied | Typ | Reihenfolge | Anmerkungen |
|---|---|---|---|
| `subtitle` | Zeichenfolge | k. A. | Optionale Untertitel |
| `abstract` | Zeichenkette oder portables Inhaltsobjekt | k. A. | Zusammenfassung ohne Publikationslayout |
| `keywords` | Zeichenfolgen-Array | aussagekräftig | Reihenfolge gemäß Autor, sofern angegeben |
| `agents` | Array von Objekten | ohne Autoritätsbezug | Identitätsobjekte von `OMI-SPEC-150` |
| `contributions` | Array von Objekten | relevant, wenn die Rollenreihenfolge festgelegt wird | Beziehungen zwischen Agenten und Objekten |
| `tombstones` | Objekt-Array | nicht chronologisch, sofern nicht anders angegeben | Löschnachweis |
| `annotations` | Array von Objekten | relevant, wenn die Darstellungsreihenfolge festgelegt ist | Annotationsobjekte von `OMI-SPEC-130` |
| `bibliographicRecords` | Array von Objekten | nicht in der Reihenfolge der Quellenangaben | Einträge von `OMI-SPEC-220` |
| `citations` | Array von Objekten | von Bedeutung, wenn die Reihenfolge der Zitate festgelegt ist | Einträge aus `OMI-SPEC-210` |
| `citationClusters` | Objektarray | signifikant | Geordnete Zitiergruppen |
| `crossReferences` | Objektarray | von Bedeutung, wenn die Reihenfolge der Darstellung festgelegt ist | Semantische interne Verweise |
| `assets` | Objektarray | Reihenfolge der Darstellung | Logische Asset-Metadaten |
| `extensions` | Objekt | k. A. | Werte von Erweiterungen im Namensraum |

**REQ-FMT-020:** Portable Exporte DÜRFEN KEINE Passwörter, Zugriffstoken, Aktualisierungstoken, Sitzungskennungen, private Schlüssel, nicht offengelegte Pfade im lokalen Dateisystem oder andere Anmeldedaten enthalten.

**REQ-FMT-021:** Bei portablen Exporten DÜRFEN Editorauswahlen, Cursor, der Zustand des Ansichtsfensters, Rückgängig-Stapel, Caches, vorübergehende Validierungsmeldungen oder kontospezifische UI-Einstellungen NICHT als kanonischen Manuskriptzustand behandelt werden.

### 9.3 Beispiel für einen Umschlag

```json
{
  "schema": "https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json",
  "omi": {
    "format": "manuscript",
    "version": "0.2.0",
    "profiles": ["core-snapshot"],
    "specifications": {
      "OMI-SPEC-100": "0.1.0",
      "OMI-SPEC-120": "0.1.0",
      "OMI-SPEC-140": "0.1.0"
    }
  },
  "id": "urn:uuid:d3c23cd5-ffb8-4f16-8db5-68e32fa78d82",
  "locale": "en",
  "title": "A portable manuscript",
  "sections": [],
  "createdAt": "2026-09-05T08:00:00Z",
  "updatedAt": "2026-09-05T08:00:00Z"
}
```

## 10. Formatidentifizierung und Versionsaushandlung

### 10.1 Schema-Kennung

In dieser Version MUSS „`schema`“ genau diesen Wert haben:

```text
https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json
```

**REQ-FMT-022:** Ein Produzent MUSS die unveränderliche kanonische Schema-URI für die genaue Formatversion ausgeben. Er DARF KEINE URI vom Typ „moving `latest`“ als maßgeblichen Schema-Bezeichner ausgeben.

Ein Nutzer DARF eine vertrauenswürdige lokale Kopie des Schemas verwenden und DARF keinen Netzwerkzugriff verlangen, nur weil das Dokument eine HTTPS-Schema-URI enthält.

### 10.2 „OMI“-Umschlag

Das Objekt „`omi`“ verfügt über die folgenden Elemente:

| Element | Typ | Kardinalität | Regel |
|---|---|---:|---|
| `format` | Zeichenkette | 1 | Exakter Wert `manuscript` |
| `version` | Zeichenfolge „semantic-version“ | 1 | Vom Erzeuger ausgegebene exakte Version des Dateiformats |
| `profiles` | Array von Zeichenketten | 1 | Ein oder mehrere deklarierte Konformitätsprofile |
| `specifications` | Objekt | 1 | Zuordnung zwischenOMI-Spezifikationskennungen und genauen Versionen |
| `generator` | Objekt | 0..1 | Nicht verbindliche Erzeuger-Identifikation |

Die in Version `0.2.0` registrierten Profil-Tokens sind:

| Token | Profil |
|---|---|
| `core-snapshot` | Core-Snapshot |
| `history-exchange` | History Exchange |
| `lossless-round-trip` | Verlustfreier Hin- und Rückweg |

**REQ-FMT-023:** „`omi.format`“ MUSS mit „`manuscript`“ übereinstimmen, und „`omi.version`“ MUSS genau den Regeln entsprechen, die zur Serialisierung des Dokuments verwendet wurden.

**REQ-FMT-024:** „`omi.profiles`“ MUSS „`core-snapshot`“ enthalten, DARF KEINE doppelten Token enthalten und MUSS jedes zusätzliche Profil deklarieren, dessen erforderliche Daten der Produzent nach eigenen Angaben bereitstellt.

**REQ-FMT-025:** `omi.specifications` MUSS jede maßgebliche OMI-Spezifikation, die in dem Dokument verwendet wird, einer exakten semantischen Version zuordnen. Ein Bereich, ein Zweigname, ein Moving-Tag oder ein nicht versionierter Bezeichner DARF NICHT verwendet werden.

Das optionale „`generator`“-Objekt KANN „`name`“, „`version`“ und „`uri`“ enthalten. Ein Verbraucher DARF die Validierung oder das Vertrauensverhältnis NICHT allein aufgrund der Nennung eines bestimmten Generators ändern.

### 10.3 Umgang mit Versionen

**REQ-FMT-026:** Ein Verbraucher, der die angegebene Formatversion unterstützt, MUSS das Schema und die Regeln für diese Version verwenden, nicht die neueste dem Verbraucher bekannte Version.

**REQ-FMT-027:** Ein Verbraucher, der die angegebene Hauptversion nicht unterstützt, MUSS die ursprüngliche Eingabe beibehalten oder unter Quarantäne stellen und DARF das Dokument NICHT als erfolgreich importiertes, bearbeitbares Manuskript anzeigen.

**REQ-FMT-028:** Ein Verbraucher, der auf eine neuere Neben- oder Patch-Version stößt, DARF nur dann fortfahren, wenn seine erklärte Kompatibilitätsrichtlinie dies zulässt. Er MUSS unbekannte Daten beibehalten und eine Diagnose ausgeben, in der die nicht überprüfte Version identifiziert wird.

## 11. Aufbau des Manuskripts

### 11.1 Abschnitte

`sections` ist die geordnete Abfolge der obersten Abschnitte des Manuskripts. Für jeden Abschnitt ist Folgendes erforderlich:

- `id`: stabiler Objektbezeichner;
- `title`: Abschnittstitel, der NUR dann leer sein DARF, wenn das zugrunde liegende Dokumentmodell einen Abschnitt ohne Titel zulässt;
- `blocks`: sortiertes Array von Inhaltsblöcken.

Ein Abschnitt KANN die Felder „`role`“, „`language`“, „`children`“, „`extensions`“ sowie die durch die deklarierte Dokumentmodellversion definierten Felder enthalten.

**REQ-FMT-029:** Ein Produzent MUSS die Reihenfolge der Abschnitte und Blöcke beibehalten. Ein Verbraucher DARF die verbindliche Reihenfolge NICHT durch Sortieren von Kennungen oder Titeln ableiten.

### 11.2 Blöcke

Jeder Block benötigt eine „`id`“ und eine „`type`“. Ein Block KANN portables „`content`“, strukturiertes „`data`“, untergeordnete Blöcke, Sprache, adressierbare Anker, Asset-Referenzen und Erweiterungen mit Namespace enthalten.

Dieses Dateiformat macht einen editor-spezifischen Rich-Text-Baum nicht allein dadurch portabel, dass er als „JSON“-Zeichenkette eingebettet ist. Eine deklarierte Dokumentmodell-Spezifikation oder ein Erweiterungsnamensraum muss die Bedeutung von `content` und `data` definieren.

**REQ-FMT-030:** Ein konformer Produzent MUSS wissenschaftliche Inhalte unter Verwendung der von `omi.specifications` ausgewählten portablen Darstellung oder einer deklarierten Erweiterung serialisieren. Er DARF von einem Verbraucher NICHT verlangen, das Editor-Framework des Produzenten auszuführen oder zu instanziieren, um den wissenschaftlichen Text und die Struktur wiederherzustellen.

**REQ-FMT-031:** Wenn ein Prozessor ein Block`type` nicht versteht, MUSS er die Blockidentität, die Reihenfolge, den rohen portablen Wert, die untergeordneten Elemente und die Erweiterungen gemäß dem „Lossless Round Trip“-Profil beibehalten. Er DARF den Block NICHT stillschweigend in einen leeren Absatz umwandeln.

### 11.3 Sammlungen und Literaturhinweise

Objekte in Stammkollektionen sind über `id` adressierbar. Beziehungen verwenden Identifikationsfelder, die durch die maßgebliche semantische Spezifikation definiert sind, wie beispielsweise `targetBlockId`, `sourceBlockId`, `targetId`, `citationIds`, `creatorAgentId` oder Identifikatoren für übergeordnete Revisionen.

**REQ-FMT-032:** Eine Referenz, die innerhalb desselben Dokuments aufgelöst werden muss, MUSS ein vorhandenes Objekt eines zulässigen Typs identifizieren. Ein Validator MUSS eine nicht aufgelöste oder typinkompatible Referenz melden.

**REQ-FMT-033:** Eine Referenz DARF KEINEN Array-Index, keine gerenderte Seitenzahl, keine Pixelposition und keinen vorübergehenden Editor-Offset als einziges dauerhaftes Ziel verwenden.

Ein externer Verweis KANN lokal unaufgelöst bleiben, wenn das für ihn maßgebliche Feld einen absoluten externen URI zulässt und im Dokument festgelegt ist, dass eine externe Auflösung zulässig ist. Die Validierung DARF diesen URI standardmäßig NICHT abrufen.

### 11.4 Vermögenswerte

`assets` enthält logische Metadaten für binäre oder externe Ressourcen. Ein Asset sollte gegebenenfalls Folgendes angeben:

- `id`;
- Medientyp;
- Rolle;
- für Menschen lesbare Bezeichnung oder Dateiname;
- Größe;
- Prüfsummenalgorithmus und -wert;
- Metadaten zur Barrierefreiheit, wie z. B. Alternativtext oder Verweise auf Transkripte;
- eine containerbezogene oder absolute Position, die gemäß dem maßgeblichen Profil zulässig ist.

**REQ-FMT-034:** Binäre Daten dürfen NICHT als unbegrenzte Base64-Daten in das Kernmanuskriptdokument eingebettet werden. Ein Ersteller MUSS die Daten über `OMI-SPEC-330` auslagern oder eine explizit deklarierte Erweiterung oder ein Profil mit Größenbeschränkungen verwenden.

**REQ-FMT-035:** Eine Asset-Referenz MUSS auf deklarierte Asset-Metadaten oder auf eine ausdrücklich zugelassene externe URI verweisen. Verbraucher DÜRFEN ein externes Asset während der Analyse oder Validierung NICHT automatisch abrufen.

## 12. Austausch über Geschichte

### 12.1 Felder zur Historie

Ein Dokument, in dem „`history-exchange`“ erklärt wird, muss Folgendes enthalten:

- `versioningModelVersion` zur Ermittlung einer genauen Version von „`OMI-SPEC-160`“;
- `headRevisionId` zur Identifizierung der Revision, die durch den Root-Snapshot dargestellt wird;
- `revisionHistory` mit dem portablen History-Objekt.

Das Objekt „`revisionHistory`“ erfordert:

| Begriff | Bedeutung |
|---|---|
| `completeness` | `complete`, `partial` oder `shallow` |
| `rootRevisionId` | Früheste dargestellte Überarbeitung oder tatsächlicher Ursprung |
| `headRevisionId` | Durch den Root-Snapshot dargestellte Revision |
| `revisions` | Versionshistorie gemäß `OMI-SPEC-160` |

Es KANN „`omissionNotice`“, Zweige, Änderungssätze, Snapshots, Integritätsnachweise, Schwärzungshinweise und Erweiterungen mit Namensräumen umfassen.

**REQ-FMT-036:** „`headRevisionId`“, „`revisionHistory.headRevisionId`“ und die angegebene Snapshot-Revision MÜSSEN übereinstimmen.

**REQ-FMT-037:** Jede dargestellte Revisionskennung MUSS eindeutig sein. Jede übergeordnete Kennung MUSS innerhalb von `revisionHistory.revisions` aufgelöst werden, es sei denn, `completeness` lautet `partial` oder `shallow` und die fehlende Grenze wird explizit deklariert.

**REQ-FMT-038:** Ein Dokument, in dem der Änderungsverlauf fehlt, DARF NICHT das Profil „`history-exchange`“ beanspruchen und DARF NICHT den Eindruck erwecken, dass der Snapshot eine vollständige Herkunftsinformation enthält.

### 12.2 Externalisierte Historie in einem Container

`OMI-SPEC-330` kann den Verlauf in einem separaten Containerteil speichern. In diesem Fall MUSS das rekonstruierte logische Dokument die Anforderungen dieses Abschnitts erfüllen, bevor es als „History Exchange“-Dokument präsentiert wird. Das Container-Manifest – und nicht eine ad-hoc-Root-Pfadzeichenfolge – bestimmt die Erkennung und Integrität der Teile.

## 13. Parsing-Modell

Ein konformer Verbraucher durchläuft diese Schritte der Reihe nach:

1. die ursprüngliche Eingabe gemäß den lokalen Aufbewahrungsrichtlinien aufbewahren;
2. die konfigurierten Byte-Größen- und Ressourcenbeschränkungen anwenden;
3. UTF-8 dekodieren und fehlerhafte Byte-Sequenzen verwerfen;
4. JSON tokenisieren und dabei doppelte Objekt-Member-Namen erkennen;
5. erfordern ein Objekt der obersten Ebene;
6. Lesen Sie zur Formatauswahl ausschließlich die Dateien „`schema`“ und „`omi`“ aus;
7. die angegebene Version und die Profile aushandeln;
8. Wählen Sie ein vertrauenswürdiges, versionsspezifisches Schema aus;
9. eine strukturelle Validierung durchführen;
10. Identitäten und Verweise innerhalb des Dokuments auflösen;
11. eine semantische und Profilvalidierung durchführen;
12. unterstützte und nicht unterstützte Erweiterungen identifizieren;
13. das Dokument gemäß einer expliziten Richtlinie freigeben, unter Quarantäne stellen, ablehnen oder migrieren.

**REQ-FMT-039:** Die Syntaxanalyse DARF KEINE Ausführung von Inhalten beinhalten. JSON Mitgliedsnamen, Zeichenfolgenwerte, URIs, Markup-Fragmente, Erweiterungswerte und eingebettete Ausdrücke MÜSSEN als Daten behandelt werden, sofern nicht in einem späteren, ausdrücklich autorisierten Verarbeitungsschritt etwas anderes festgelegt wird.

**REQ-FMT-040:** Ein Parser MUSS implementierungsabhängige Grenzwerte für Eingabebytes, Verschachtelungstiefe, Objektmitglieder, Array-Länge, Zeichenfolgenlänge und Aggregatdiagnosen anwenden. Das Überschreiten eines Grenzwerts MUSS eine Diagnose auslösen und DARF NICHT zu einem scheinbar vollständigen Manuskript führen.

**REQ-FMT-041:** Bei der Schemaauswahl MUSS eine vertrauenswürdige Zuordnung von unterstützten „`omi.version`“-Werten zu Schemata verwendet werden. Ein Parser DARF ein beliebiges Schema NICHT herunterladen, ausführen oder als vertrauenswürdig einstufen, nur weil es in der Eingabe genannt wird.

## 14. Serialisierungsmodell

### 14.1 Erforderliches Verhalten

**REQ-FMT-042:** Ein Produzent MUSS UTF-8-JSONen ausgeben, deren `schema`, `omi.version`, Profile und abhängige Spezifikationsversionen die serialisierte Darstellung exakt beschreiben.

**REQ-FMT-043:** Bei der Serialisierung MÜSSEN die semantisch bedeutsame Reihenfolge der Arrays, stabile Bezeichner, Referenzziele sowie die Unterscheidung zwischen fehlenden, leeren und explizit nullfähigen Werten beibehalten werden.

**REQ-FMT-044:** Ein Hersteller MUSS die ausschließlich zur Implementierung dienenden und geheimen Zustände weglassen, die unter `REQ-FMT-020` und `REQ-FMT-021` beschrieben sind.

Bei für Menschen lesbaren Exporten SOLLTEN Einrückungen mit zwei Leerzeichen, LF-Zeilenenden und ein abschließendes LF verwendet werden. Verbraucher DÜRFEN Leerzeichen, Einrückungen, Zeilenenden oder die Reihenfolge der Objektmitglieder NICHT als semantisch behandeln.

### 14.2 Determinismus und Kanonisierung

Zwei Serialisierungen können semantisch äquivalent sein, obwohl sie unterschiedliche Byte-Sequenzen aufweisen. Ein Produzent, der eine deterministische Serialisierung beansprucht, MUSS dokumentieren, wie er Objektmitglieder anordnet und äquivalente Werte darstellt.

**REQ-FMT-045:** Ein Digest oder eine Signatur gemäß JSON MUSS den Kanonisierungalgorithmus, die Algorithmusversion, die Zeichenkodierung und den abgedeckten Geltungsbereich angeben. Implementierungen DÜRFEN Digests, die nach unterschiedlichen oder nicht angegebenen Kanonisierungsregeln erstellt wurden, NICHT als gleichwertig betrachten.

JSON Das Kanonisierungsschema (JCS) KANN verwendet werden, wenn seine Eingabebedingungen erfüllt sind. Der gewöhnliche Austausch von „OMI“ erfordert kein JCS und es DARF NICHT vorkommen, dass Autorenzeichenfolgen lediglich normalisiert werden, um identische Bytes zu erhalten.

### 14.3 Beibehaltung von Unicode

**REQ-FMT-046:** Ein Round-Trip-Prozessor MUSS die Unicode-Skalarsequenz von unverändertem wissenschaftlichem Text beibehalten. Er DARF innerhalb von Inhaltswerten KEINE Unicode-Normalisierung, Transliteration, Groß-/Kleinschreibung-Anpassung, Ersetzung von intelligenten Anführungszeichen, Zusammenfassung von Leerzeichen oder Umwandlung von Zeilenenden ohne Hinweis vornehmen.

Ein Hersteller KANN neu generierte Identifikatoren oder maschinengesteuerte Tokens normalisieren, wenn die für sie geltende Spezifikation eine solche Normalisierung vorsieht.

## 15. Validierung und Fehlerbehandlung

### 15.1 Validierungsschichten

Die Validierung erfolgt in mehreren Ebenen, damit Fehler nachvollziehbar bleiben:

| Ebene | Beispiele | Erforderliches Ergebnis |
|---|---|---|
| Syntax | UTF-8, „JSON“-Grammatik, doppelte Namen | Fehler bei Fehlschlag |
| Umschlag | Format, Version, Schema-URI, Profile | Fehler bei nicht unterstützter oder inkonsistenter Deklaration |
| Struktur | Typen, Pflichtfelder, Muster | JSON Schema-Diagnose |
| Referenzielle | Doppelte IDs, fehlende Ziele, falsche Zieltypen | Semantische Diagnose |
| Semantik | Reihenfolge der Zeitstempel, Konsistenz des Verlaufs, Modellinvarianten | Semantische Diagnostik |
| Profil | Fehlende Felder im „History Exchange“ | Profildiagnose |
| Erweiterung/Richtlinie | Unbekannter Namensraum, lokale Größe oder Datenschutzregel | Warnung oder Fehler aufgrund der deklarierten Richtlinie |

**REQ-FMT-047:** Ein Validator DARF ein Dokument NICHT als konform melden, wenn in einer der betroffenen Ebenen eine Fehlerdiagnose vorliegt.

**REQ-FMT-048:** Die Validierung MUSS bei gleicher Eingabe, demselben unterstützten Schema-Set, denselben Erweiterungsmöglichkeiten, demselben deklarierten Profil und derselben Richtlinienkonfiguration deterministisch sein.

Das veröffentlichte Schema „JSON“ lässt bewusst einige unbekannte Elemente zu, um die Zukunftskompatibilität zu gewährleisten. Die bloße Übereinstimmung mit dem Schema stellt daher noch kein vollständiges Konformitätsergebnis dar.

### 15.2 Diagnoseobjekt

Eine maschinenlesbare Diagnose SOLLTE Folgendes enthalten:

| Element | Typ | Bedeutung |
|---|---|---|
| `code` | Zeichenkette | Stabile Implementierung oder Diagnosecode „OMI“ |
| `severity` | Zeichenfolge | `error`, `warning` oder `info` |
| `instancePath` | Zeichenkette | JSON Zeiger auf den nächstgelegenen dargestellten Wert |
| `requirement` | Zeichenfolge | Gültige „`REQ-FMT-NNN`“-Kennung |
| `message` | Zeichenfolge | Für Menschen verständliche Erklärung |
| `relatedIds` | Array | Identifikatoren der entsprechenden Manuskripte |
| `details` | Objekt | Optionale strukturierte, nicht vertrauliche Beweismittel |

Beispiel:

```json
{
  "code": "FMT-UNRESOLVED-REFERENCE",
  "severity": "error",
  "instancePath": "/annotations/0/targetBlockId",
  "requirement": "REQ-FMT-032",
  "message": "Annotation ann-1 targets missing block block-404.",
  "relatedIds": ["ann-1", "block-404"]
}
```

**REQ-FMT-049:** Ein Validator MUSS für jeden Fehler den nächstgelegenen aussagekräftigen Ort der Instanz und die entsprechende Anforderung identifizieren. Er DARF in der Fehlermeldung KEINE Anmeldedaten oder vertrauliche Manuskriptinhalte angeben, es sei denn, dies wurde ausdrücklich genehmigt.

### 15.3 Wiederherstellung und Reparatur

Ein Verbraucher KANN die Reparatur als separaten Vorgang anbieten. Eine Reparatur ist keine Validierung.

**REQ-FMT-050:** Bei einem Reparaturvorgang MUSS die ursprüngliche Eingabe beibehalten werden, es müssen alle vorgenommenen Änderungen aufgelistet, das verwendete Tool und dessen Version angegeben sowie das reparierte Ergebnis validiert werden. Ein repariertes Dokument DARF NICHT als byte-identisch oder herkunftsmäßig gleichwertig mit seiner Quelle dargestellt werden.

## 16. Erweiterungen und unbekannte Daten

### 16.1 Erweiterungsobjekt

Jedes Objekt KANN ein „`extensions`“-Element enthalten, sofern das zugehörige Schema dies zulässt. „`extensions`“ ist ein „JSON“-Objekt. Jeder Elementname MUSS eine absolute HTTPS-URI oder ein URN sein, die bzw. der vom Ersteller der Erweiterung verwaltet wird.

Beispiel:

```json
{
  "extensions": {
    "https://example.org/omi/extensions/lab-notebook/1": {
      "experimentId": "EXP-42",
      "replicate": 3
    }
  }
}
```

**REQ-FMT-051:** Von einem Produzenten erstellte portable Nicht-Kern-Daten MÜSSEN unter `extensions` abgelegt und über eine absolute Namespace-URI oder einen URN gekennzeichnet werden. Ein Produzent DARF KEINE Root-Eigenschaft ohne Namespace erstellen, die mit einem zukünftigen Kernelement in Konflikt geraten könnte.

**REQ-FMT-052:** Ein Verbraucher DARF einer unbekannten Erweiterung KEINE Kernsemantik gemäß OMI zuweisen. Er KANN die Erweiterung bei der Darstellung oder Verarbeitung ignorieren, muss sie dabei jedoch beibehalten.

**REQ-FMT-053:** Ein Validator SOLLTE vor unbekannten Mitgliedern ohne Namensraum warnen. Er DARF diese im Rahmen der Validierung NICHT entfernen.

### 16.2 Verlustfreie Handhabung

**REQ-FMT-054:** Im Rahmen des „Lossless Round Trip“-Profils MUSS ein Prozessor den Wert „JSON“ beibehalten, der das Objekt, den Mitgliedsnamen und die Array-Position jedes unveränderten unbekannten Mitglieds und jeder unbekannten Erweiterung enthält.

**REQ-FMT-055:** Wenn eine Bearbeitung die Erhaltung unmöglich macht, MUSS der Bearbeiter den Vorgang vor dem Überschreiben abbrechen oder nach Vorlage eines maschinenlesbaren Verlustberichts eine ausdrückliche Genehmigung einholen.

Die byteweise Beibehaltung von Leerzeichen und der Reihenfolge der Objektmitglieder ist nicht erforderlich, es sei denn, der Prozessor gibt ausdrücklich an, dass er byteweise beibehält. Die semantische Beibehaltung des unbekannten Werts „JSON“ ist erforderlich.

## 17. Versionsverwaltung und Migration

### 17.1 Versionsunterschiede

Implementierungen MÜSSEN unterscheiden:

- Dateiformat-Version: `omi.version`;
- Schema-URI: `schema`;
- abhängige Modellversionen: `omi.specifications`;
- Überarbeitung des Manuskripts oder eines Schnappschusses: `headRevisionId` oder ein modelldefiniertes Überarbeitungsfeld;
- Container-Version: das Manifest „`OMI-SPEC-330`“;
- Anwendungsversion: `omi.generator.version`, sofern vorhanden;
- Veröffentlichungsausgabe oder Veröffentlichungskennzeichnung: Ein vom Veröffentlichungsmodell definiertes Feld.

**REQ-FMT-056:** Ein Produzent DARF ein Versionsfeld NICHT als Ersatz für eine andere Kategorie aus der vorstehenden Liste verwenden.

### 17.2 Migrationsprotokoll

Für einen Migrationsdatensatz sind folgende Angaben erforderlich:

| Begriff | Bedeutung |
|---|---|
| `sourceFormatVersion` | Genaue Eingabe `omi.version` |
| `targetFormatVersion` | Genaue Ausgabe `omi.version` |
| `tool` | Name und Version des Migrationsprogramms |
| `migratedAt` | RFC 3339 instant |
| `sourceDigest` | Optionaler Digest mit deklariertem Algorithmus und Kanonisierungskreis |
| `steps` | Geordnete Bezeichner der angewendeten Transformationen |
| `warnings` | Nicht tödliche Unwägbarkeiten |
| `losses` | Daten ausgelassen, geschätzt oder neu interpretiert |
| `extensionsPreserved` | Namespaces von Erweiterungen bleiben erhalten |
| `validation` | Zusammenfassungen zur Quell- und Zielvalidierung |

Der Datensatz kann neben der Ausgabe, in einer autorisierten Provenienz-Erweiterung oder im Provenienzteil eines „OMI“-Containers gespeichert werden.

**REQ-FMT-057:** Ein Migrationsprogramm MUSS eindeutig und reproduzierbar sein: Bei gleicher Quelle, Zielversion, Version des Migrationsprogramms, Optionen und Erweiterungsfunktionen SOLLTEN semantisch äquivalente Ergebnisse und die gleichen, in derselben Reihenfolge ausgeführten Migrationsschritte entstehen.

**REQ-FMT-058:** Ein Migrationsprogramm DARF KEINE verlustfreie Konvertierung behaupten, wenn „`losses`“ nicht leer ist oder wenn unbekannte Quelldaten verworfen wurden.

### 17.3 Migration von „`0.1.0`“

Der Entwurf „`0.1.0`“ enthielt kein kanonisches Schema und wurde experimentell umgesetzt. Eine Migration nach dem „`0.1.0`“-Konzept beginnt daher mit der Erkennung des Implementierungsprofils und nicht mit einer blinden Umbenennung.

Ein Migrator für die Vorläuferrepräsentation „Open Manuscript Studio“ sollte:

1. die ursprünglichen „`.omi.json`“-Bytes beibehalten;
2. Erkenne die URI des alten Schemas `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`;
3. Fügen Sie den „`omi`“-Envelope und die genauen Versionen der Abhängigkeiten hinzu;
4. Ersetzen Sie die Schema-URI durch die unveränderliche URI `0.2`;
5. veraltete Duplikate eingebetteter Autoren erst dann entfernen, nachdem sie Agenten und Beiträgen zugeordnet oder als Verlust erfasst wurden;
6. Manuskript-Revisionsfelder von Formatversionen unterscheiden;
7. Verweise auf Abschnitte, Blöcke, Anmerkungen, Quellenangaben und den Verlauf überprüfen;
8. Implementierungsdaten, die nicht zum Kerngeschäft gehören, in eine Erweiterung mit Namensraum verschieben;
9. die Ausgabe anhand des Schemas „`0.2`“ und der semantischen Regeln überprüfen;
10. einen Migrationsdatensatz ausgeben.

**REQ-FMT-059:** Die bloße Änderung von `schema` oder `omi.version` stellt keine Migration dar und DARF NICHT als erfolgreiche Umstellung dargestellt werden.

## 18. Container-Integration

Die eigenständige Darstellung „`.omi.json`“ und der Container „`.omi`“ weisen unterschiedliche Medientypen und Aufgabenbereiche auf:

| Darstellung | Maßgebliche Spezifikation | Vorläufiger Medientyp | Typische Dateiendung |
|---|---|---|---|
| Logical Manuscript JSON | `OMI-SPEC-320` | `application/vnd.openmanuscript+json` | `.omi.json` |
| Physikalische OMI-Container | `OMI-SPEC-330` | `application/vnd.openmanuscript.omi+zip` | `.omi` |

**REQ-FMT-060:** Ein Container MUSS die genaue Version des „`OMI-SPEC-320`“ angeben, die für seinen logischen Manuskriptteil maßgeblich ist. Ein Nutzer des Dateiformats DARF KEINE Paketpfade oder Komprimierungsregeln ableiten, wenn keine Verarbeitung durch „`OMI-SPEC-330`“ erfolgt.

**REQ-FMT-061:** Bei der Auslagerung von Daten in Container-Teile MÜSSEN die gleichen logischen Identitäten, die gleiche Reihenfolge, die gleichen Verweise, die Vollständigkeit der Historie und die gleichen Erweiterungswerte beibehalten werden, wie sie in der eigenständigen Darstellung vorliegen.

## 19. Interoperabilität

### 19.1 Import

Ein Import aus DOCX, JATS, XML, TEI XML, HTML, Markdown oder einer anderen Quelle stellt eine Umwandlung in die Semantik von OMI dar und ist kein Beweis dafür, dass jedes Merkmal der Quelle ein Äquivalent in OMI hat.

**REQ-FMT-062:** Ein Importeur MUSS ausgelassene, approximierte oder implementierungsspezifische Quellmerkmale melden und SOLLTE die Herkunft des Quellformats dokumentieren. Er DARF nicht unerkannte wissenschaftliche Inhalte stillschweigend in Klartext umwandeln, wenn sich dadurch die Bedeutung ändert.

### 19.2 Export

PDF, HTML, EPUB, DOCX, JATS, XML, Crossref XML und DataCite XML sind abgeleitete Ausgaben. Bei ihrer Erstellung können Publikationsprofile verwendet werden, doch das abgeleitete Layout DARF NICHT allein aufgrund seiner Darstellung in einer Ausgabe zur maßgeblichen Semantik des Manuskripts werden.

**REQ-FMT-063:** Ein Exporteur MUSS bei der Erstellung eines verlustbehafteten Publikationsformats das Manuskript „OMI“ oder einen unveränderlichen Verweis darauf beibehalten und SOLLTE nicht unterstützte Funktionen des Zielformats melden.

### 19.3 Transport von „API“

Ein API darf das logische Manuskript JSON direkt übertragen. HTTP-Inhaltsaushandlung, Teilaktualisierungen, Authentifizierung und Parallelität gehören zu `OMI-SPEC-310`. Eine Teilrepräsentation API darf NICHT den Anspruch erheben, ein vollständiges `.omi.json`-Dokument zu sein, es sei denn, sie enthält alle erforderlichen Felder und deklariert das entsprechende Profil.

## 20. Sicherheit, Datenschutz und Integrität

### 20.1 Nicht vertrauenswürdige Eingaben

Alle Eingaben sind als nicht vertrauenswürdig einzustufen. Zu den Risiken zählen Ressourcenerschöpfung, tiefe Verschachtelung, übergroße Zeichenfolgen, Verwechslungen durch doppelte Namen, bösartige URIs, aktives Markup, Formeleinfügung, Offenlegung von Pfaden, Verlust von Anmeldedaten, Spoofing von Erweiterungen sowie Risiken durch Dekomprimierung auf der Containerebene.

**REQ-FMT-064:** Verbraucher MÜSSEN Markups, URLs, Formeln, Vorlagen und Erweiterungs-Payloads während der Analyse als inerte Daten behandeln. Die Darstellung oder Aktivierung erfordert einen separaten, kontextbezogenen Schritt zur Bereinigung und Autorisierung.

**REQ-FMT-065:** Verbraucher DÜRFEN Netzwerk-URIs während der Validierung NICHT auflösen, es sei denn, ein Betreiber ermöglicht den Abruf ausdrücklich im Rahmen einer begrenzten Zulassungsliste, einer Zeitüberschreitung, einer Größenbeschränkung, einer Weiterleitungsrichtlinie und einer Datenschutzrichtlinie.

### 20.2 Sensible Daten

Manuskripte und historische Dokumente können unveröffentlichte Forschungsergebnisse, personenbezogene Daten, vertrauliche Begutachtungen, geschwärzte Textstellen, Standortdaten oder geschützte Inhalte enthalten.

**REQ-FMT-066:** Ein Produzent MUSS vor dem Export das vorgesehene Offenlegungsprofil anwenden und DARF keine eingeschränkten Inhalte einbeziehen, nur weil diese im Authoring-Speicher oder im Revisionsverlauf vorhanden sind.

**REQ-FMT-067:** Validierungs- und Migrationsprotokolle MÜSSEN zitierte Manuskriptinhalte auf ein Minimum beschränken und MÜSSEN die Zugriffsrichtlinien der Eingabe beachten.

### 20.3 Integrität

Die Datei „JSON“ allein ist kein Nachweis für die Urheberschaft, Authentizität oder Aktualität. Der Nachweis der Integrität erfordert einen deklarierten Digest und einen Kanonisierungsumfang; authentifizierte Signaturen und Container-Prüfsummen unterliegen ihren jeweiligen Spezifikationen.

**REQ-FMT-068:** Ein Verbraucher DARF die Gültigkeit eines Schemas, eine Prüfsumme oder einen selbst deklarierten Generator NICHT als Nachweis für eine vertrauenswürdige Urheberschaft vorlegen.

## 21. Barrierefreiheit

Das Dateiformat bewahrt die von Renderern benötigten semantischen Informationen und Barrierefreiheitsangaben; es schreibt jedoch keine Benutzeroberfläche vor.

**REQ-FMT-069:** Ein Produzent MUSS Sprachmetadaten, Überschriftenstruktur, Lesereihenfolge, Alternativtext, Untertitel, Tabellenstruktur, Gleichungsquelle, Transkripte und andere barrierefreiheitsrelevante Daten, die vom maßgeblichen semantischen Modell unterstützt werden, beibehalten.

**REQ-FMT-070:** Ein Produzent DARF im Kernmanuskriptstatus keine Bedeutung ausschließlich durch Farbe, visuelle Position, Schriftart oder Seitengeometrie kodieren.

Validatoren SOLLTEN fehlende Metadaten zur Barrierefreiheit diagnostizieren, wenn der Objekttyp und das ausgewählte Profil diese Metadaten vorschreiben. Eine Diagnose SOLLTE erläutern, wie das betroffene Objekt lokalisiert werden kann, ohne dass dabei sensible Inhalte wiedergegeben werden.

## 22. Internationalisierung

OMI Manuskripte können beliebige Unicode-Schriftsysteme, bidirektionalen Text, Kombinationszeichen, historische Schriften und mehrsprachige Inhalte enthalten.

**REQ-FMT-071:** Ein Produzent MUSS den vom Autor bereitgestellten Unicode-Text und explizite Sprachmetadaten beibehalten. Ein Nutzer DARF NICHT von lateinischer Schrift, einer Schreibrichtung von links nach rechts, ASCII-Zeichensatz oder einer einzigen Sprache des Manuskripts ausgehen.

**REQ-FMT-072:** Die lokalisierungsabhängige Sortierung, die Umwandlung der Groß-/Kleinschreibung, die Segmentierung, die Darstellung von Datumsangaben und die Darstellung von Zahlen DÜRFEN den gespeicherten Originalwert NICHT überschreiben, es sei denn, dies wird im Rahmen einer autorisierten wissenschaftlichen Bearbeitung verlangt.

Metadaten zur Ausrichtung SOLLTEN nur dann angegeben werden, wenn sie sich nicht zuverlässig aus der angegebenen Sprache und dem Inhalt ableiten lassen. Maschinengesteuerte Eigenschaftsnamen und registrierte Tokens bleiben im ASCII-Format.

## 23. Beispiele und Konformitätsvorrichtungen

Die veröffentlichten Spielpläne für diese Version sind unter [`/examples/omi-spec-320/0.2.0/`](/examples/omi-spec-320/0.2.0/manifest.json) verfügbar.

Das Spielplanverzeichnis enthält folgende Angaben:

- die genaue Spezifikation und das Schema;
- erwartete Gültigkeitsdauer;
- erwartete Diagnosecodes für ungültige Beispiele;
- der Zweck der Vorrichtung.

Das Starterset enthält:

- ein minimaler Core-Snapshot;
- ein repräsentatives „History Exchange“-Dokument mit einer namensraumbezogenen Erweiterung;
- ein Dokument, bei dem die Formatversion fehlt;
- ein Dokument, das eine doppelte adressierbare Kennung enthält;
- ein Dokument, das ein ungelöstes Annotationsziel enthält;
- ein Dokument mit vertauschten Erstellungs- und Aktualisierungszeitstempeln;
- ein Dokument mit inkonsistenten Historienüberschriften;
- ein Dokument, das ein unzulässiges Feld für Anmeldedaten enthält.

Der Repository-Referenz-Validator demonstriert Schema- und ausgewählte semantische Prüfungen. Es handelt sich um einen Implementierungsnachweis, noch nicht um eine vollständige formale Konformitätssuite. Implementierungen MÜSSEN die normativen Anforderungen in diesem Dokument erfüllen und zusätzlich die veröffentlichten Testfälle bestehen.

## 24. Normative Verweise

- [RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels](https://www.rfc-editor.org/rfc/rfc2119)
- [RFC 8174 — Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://www.rfc-editor.org/rfc/rfc8174)
- [RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259)
- [RFC 3339 — Date and Time on the Internet: Timestamps](https://www.rfc-editor.org/rfc/rfc3339)
- [RFC 5646 — Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646)
- [RFC 6901 — JavaScript Object Notation (JSON) Pointer](https://www.rfc-editor.org/rfc/rfc6901)
- [RFC 7493 — The I-JSON Message Format](https://www.rfc-editor.org/rfc/rfc7493)
- [RFC 3986 — Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)
- [JSON Schema Core, Draft 2020-12](https://json-schema.org/draft/2020-12/json-schema-core)
- [JSON Schema Validation, Draft 2020-12](https://json-schema.org/draft/2020-12/json-schema-validation)
- [OMI Specification Registry](../governance/specification-registry.md)
- [OMI Versioning Policy](../governance/versioning-policy.md)
- [OMI-SPEC-160 — Versioning and Change Model](./versioning-change-model.md)
- [OMI-SPEC-180 — Validation Model (Reserved)](../governance/specification-registry.md)
- [OMI-SPEC-330 — Container Architecture](./container-architecture.md)

## 25. Informative Literaturhinweise

- [RFC 8785 — JSON Canonicalization Scheme](https://www.rfc-editor.org/rfc/rfc8785)
- [RFC 6838 — Media Type Specifications and Registration Procedures](https://www.rfc-editor.org/rfc/rfc6838)
- [RFC 6839 — Additional Media Type Structured Syntax Suffixes](https://www.rfc-editor.org/rfc/rfc6839)
- [FAIR Guiding Principles](https://www.go-fair.org/fair-principles/)
- [OMI Architecture Map](../foundations/architecture-map.md)
- [OMI Specification Style Guide](../governance/style-guide.md)

## 26. Stand der Umsetzung

Die maßgeblichen Implementierungsnachweise werden im „[OMI Implementation Status Matrix](../governance/implementation-status-matrix.md)“ gepflegt.

Zum Zeitpunkt der Veröffentlichung dieses Entwurfs:

- Das Schema „`0.2`“ (JSON) wird unter der kanonischen, versionierten URI veröffentlicht;
- Ein erster Satz von Fixierungen und ein Referenzvalidator werden veröffentlicht;
- Open Manuscript Studio exportiert eine Vorläufer-`.omi.json`-Darstellung unter Verwendung der unveröffentlichten Schema-URI „`0.1`“;
- Studio gibt noch keine Konformität mit „`OMI-SPEC-320@0.2.0`“ an;
- Es wurde noch kein vollständiger Validator eines Drittanbieters und keine formale Suite zur Überprüfung der Konformität verschiedener Implementierungen verifiziert.

Die bloße Übergabe des „JSON“-Schemas oder von Referenz-Fixtures reicht nicht aus, um die vollständige Konformität nachzuweisen.

## 27. Ungeklärte Fragen

Die folgenden Punkte bleiben für spätere Entwürfe offen:

1. die vom Kerndokumentmodell ausgewählte portable Rich-Text-Darstellung fertigstellen;
2. die Schemata für „Identität“, „Annotation“, „Zitierung“, „Asset“ und „Verlauf“ vollständig aufeinander abzustimmen, sobald die entsprechenden maßgeblichen Spezifikationen ausgereift sind;
3. entscheiden, ob der vorläufige Medientyp des Anbieters registriert oder ersetzt werden soll;
4. eine formale Kompatibilitätstabelle für alle Nebenversionen vor 1.0 definieren;
5. ein maschinenlesbares Diagnoseschema veröffentlichen, das mit `OMI-SPEC-180` geteilt wird;
6. Füge „duplicate-member-name“- und „resource-limit“-Byte-Fixtures hinzu, die nicht durch die übliche „JSON“-Serialisierung dargestellt werden können;
7. Definition von implementierungsübergreifenden verlustfreien Round-Trip-Tests;
8. festlegen, welche Erweiterungsfunktionen im „`omi`“-Umschlag angegeben werden dürfen;
9. die Rekonstruktion des externalisierten Container-Teils an den nächsten Entwurf von „`OMI-SPEC-330`“ anpassen;
10. Definition von Archivierungsbeständigkeit und Signaturprofilen, ohne dass eine Netzwerkauflösung zwingend erforderlich ist.

## 28. Änderungshistorie

| Version | Datum | Änderung |
|---|---|---|
| 0.2.0 | 05.09.2026 | Der Entwurf wurde unter Verwendung der kanonischen Spezifikationsvorlage überarbeitet; das logische Format wurde von der Containerarchitektur getrennt; Konformitätsklassen und -profile, stabile Anforderungen, Versionsaushandlung, Parsing, Serialisierung, Validierung, Erweiterungen, Verlaufsaustausch, Migration, Sicherheit, Barrierefreiheit und Internationalisierung wurden definiert; ein „JSON“-Schema sowie erste Testdaten veröffentlicht. |
| 0.1.0 | 04.07.2026 | Erster vorläufiger Entwurf unter der kanonischen Kennung `OMI-SPEC-320`, migriert von der alten Adresse `OMI-SPEC-011`. |

## 29. Danksagungen

Diese Spezifikation umfasst Implementierungsbeispiele von Open Manuscript Studio sowie die Arbeiten der Open Manuscript Initiative-Community in den Bereichen Architektur, Versionierung, Validierung, Identität, Dokumentmodell und Container.

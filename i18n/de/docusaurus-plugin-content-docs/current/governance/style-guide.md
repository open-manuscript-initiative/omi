---
title: OMI Leitfaden zur Erstellung von Spezifikationen
sidebar_label: Leitfaden zur Erstellung von Spezifikationen
sidebar_position: 40
---

# Open Manuscript Initiative Leitfaden zur Erstellung von Spezifikationen

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Dokumenttyp | Governance-Richtlinie |
| Status | Entwurf |
| Version | 0.1.0 |
| Normative Sprache | Englisch |
| Gilt für | Spezifikationen, Profile, Register, Schemata, Beispiele und zugehörige technische Dokumentation von „OMI“ |

## 1. Zweck

Dieser Leitfaden definiert die redaktionellen, strukturellen, terminologischen und technischen Konventionen, die von der „Open Manuscript Initiative“ (OMI) verwendet werden.

Damit soll sichergestellt werden, dass die Dokumente unter OMI folgende Eigenschaften aufweisen:

- genau;
- in sich schlüssig;
- implementierungsunabhängig;
- für Leser aus verschiedenen Fachbereichen zugänglich;
- für den normgerechten technischen Einsatz geeignet;
- stabil in Bezug auf Versionsverwaltung und Übersetzung;
- einfach zu überprüfen, zu testen, zu zitieren und zu pflegen.

Autoren und Redakteure von technischen Dokumenten auf OMI MÜSSEN sich an diesen Leitfaden halten, es sei denn, in einem Dokument wird ausdrücklich eine Ausnahme vermerkt und begründet.

## 2. Geltungsbereich

Dieser Leitfaden gilt für:

- Dokumente mit der Bezeichnung „`OMI-SPEC-*`“;
- Governance-Richtlinien;
- Implementierungsprofile;
- Register und kontrollierte Vokabulare;
- JSON Schemas und Schemadokumentation;
- Konformitätsanforderungen;
- Beispieldokumente und Testvorrichtungen;
- Interoperabilitätszuordnungen;
- Migrationsanleitungen;
- amtliche Übersetzungen.

Informelle Projektankündigungen, Tutorials, Blogbeiträge und Community-Diskussionen SOLLTEN den Terminologieregeln dieses Leitfadens folgen, müssen jedoch nicht zwingend die vollständige Spezifikationsvorlage verwenden.

## 3. Normative Sprache

Die Schlüsselwörter **MUSS**, **DARF NICHT**, **ERFORDERLICH**, **SOLL**, **SOLL NICHT**, **SOLL**, **SOLL NICHT**, **EMPFOHLEN**, **NICHT EMPFOHLEN**, **KANN** und **OPTIONAL** sind als normative Anforderungsbegriffe zu interpretieren, wenn – und nur wenn – sie in Großbuchstaben geschrieben sind.

OMI Dokumente SOLLTEN der folgenden Teilmenge den Vorzug geben:

- **MUSS** und **DARF NICHT** für absolute Interoperabilitäts- oder Konformitätsanforderungen;
- **SOLLTE** und **SOLLTE NICHT** für klare Empfehlungen mit berechtigten Ausnahmen;
- **MAY** für zulässiges, optionales Verhalten;
- **EMPFOHLEN**, wenn sich der Text natürlicher liest als **SOLLTE**;
- **OPTIONAL**, wenn eine optionale Komponente oder ein optionales Feld beschrieben wird und nicht das Verhalten der Implementierung.

### 3.1 Anforderungsstärke

Eine **UNBEDINGTE** Voraussetzung:

- für die Konformität, Interoperabilität, Integrität oder Sicherheit erforderlich ist;
- kann geprüft oder objektiv bewertet werden;
- drückt nicht lediglich eine redaktionelle Präferenz aus.

Eine **SHOULD**-Anforderung:

- legt das erwartete Verhalten fest;
- erlaubt Ausnahmen nur, wenn die Folgen bekannt sind;
- SOLLTE diese Folgen beschreiben, sofern dies praktikabel ist.

Eine **MAY**-Anweisung:

- erteilt die Erlaubnis;
- stellt keine Empfehlung dar;
- Darf NICHT zur Beschreibung von ungewissem Verhalten verwendet werden.

### 3.2 Vermeiden Sie mehrdeutige Begriffe in den Anforderungen

In normativen Dokumenten SOLLTE die Verwendung der folgenden Begriffe ohne nähere Erläuterung vermieden werden:

- normalerweise;
- im Allgemeinen;
- in der Regel;
- angemessen;
- vernünftig;
- angemessen;
- einfach;
- offensichtlich;
- benutzerfreundlich;
- effizient;
- sicher;
- Standard.

Wenn solche Begriffe erforderlich sind, SOLLTE das Dokument messbare Kriterien definieren oder den Entscheidungskontext erläutern.

Schlecht:

> Implementierungen sollten Identifikatoren ordnungsgemäß speichern.

Besser:

> Implementierungen MÜSSEN die Werte von Bezeichnern beibehalten, ohne Groß- und Kleinschreibung, Interpunktion oder Prozentkodierung zu ändern, es sei denn, die Spezifikation des Bezeichners definiert ausdrücklich eine kanonische Transformation.

### 3.3 Eine Anforderung pro Satz

Normative Sätze SOLLTEN eine eigenständig überprüfbare Anforderung ausdrücken.

Schlecht:

> Eine Implementierung MUSS den Datensatz validieren, Fehler anzeigen und unbekannte Eigenschaften beibehalten.

Besser:

> Eine Implementierung MUSS den Datensatz anhand des deklarierten Schemas validieren.
>
> Eine Implementierung MUSS Validierungsfehler melden.
>
> Eine Implementierung MUSS unbekannte Erweiterungs-Eigenschaften während eines verlustfreien Hin- und Rücklaufs beibehalten.

### 3.4 Anforderungskennungen

Spezifikationen mit dem Status „**Review Candidate**“ oder höher SOLLTEN normativen Anforderungen stabile Identifikatoren zuweisen.

Das empfohlene Format lautet:

```text
REQ-<SPEC>-<NNN>
```

Beispiel:

```text
REQ-DOC-001
REQ-CIT-014
REQ-VAL-023
```

Anforderungskennungen MÜSSEN innerhalb einer Hauptversion der Spezifikation unverändert bleiben. Wird eine Anforderung entfernt, DARF ihre Kennung NICHT einer anderen Anforderung zugewiesen werden.

## 4. Sprache und Tonfall

### 4.1 Normative Sprache

Die Amtssprache von „OMI“ ist Englisch.

Englische Spezifikationen SOLLTEN in einer international verständlichen technischen Sprache verfasst sein. Die Verfasser SOLLTEN Redewendungen, Humor, kulturspezifische Metaphern und unnötige rhetorische Formulierungen vermeiden.

### 4.2 Sprache

In Spezifikationen SOLLTEN direkte, aussagende Sätze verwendet werden.

Bevorzugt:

> Ein Zitiervorkommen bezieht sich auf einen Bibliotheks-Eintrag.

Zu vermeiden:

> Es sei darauf hingewiesen, dass ein Zitatsvorkommen in der Regel auf einen Bibliotheks-Eintrag verweisen sollte.

Die aktive Form wird bevorzugt, wenn dadurch die Verantwortung deutlich wird:

> Der Validator meldet die nicht unterstützte Eigenschaft.

Die Passivform KANN verwendet werden, wenn der Handelnde keine Rolle spielt:

> Die Eigenschaft wird in der kanonischen Ausgabe nicht berücksichtigt.

### 4.3 Zeitform

Normatives Verhalten SOLLTE im Präsens formuliert werden.

Bevorzugt:

> Der Parser lehnt ein ungültiges Bezeichner ab.

Zu vermeiden:

> Der Parser lehnt einen ungültigen Bezeichner ab.

### 4.4 Person

In Spezifikationen SOLLTE vermieden werden, den Leser mit „Sie“ anzusprechen. Verwenden Sie stattdessen die entsprechende Rolle oder Komponente:

- Autor;
- Redakteur;
- Umsetzung;
- Prozessor;
- Validator;
- Renderer;
- Kunde;
- Server;
- Repository.

### 4.5 Inklusive und neutrale Sprache

OMI In Dokumenten MUSS eine respektvolle, inklusive und rollenbasierte Sprache verwendet werden. Geschlechtsspezifische Pronomen SOLLTEN vermieden werden, wenn das Geschlecht der Person irrelevant ist.

Beispiele und Musteridentitäten DÜRFEN NICHT auf Stereotypen beruhen oder den Eindruck erwecken, dass eine bestimmte Sprache, Region, Disziplin, Art von Einrichtung oder ein bestimmtes Publikationsmodell als Standard für wissenschaftliche Arbeit gilt.

## 5. Dokumentenkategorien

Jedes technische Dokument auf OMI MUSS seine Kategorie angeben.

### 5.1 Spezifikation

Eine Spezifikation definiert normative Strukturen, Verhaltensweisen, Einschränkungen oder Interoperabilitätsanforderungen.

Form des Identifikators:

```text
OMI-SPEC-NNN
```

### 5.2 Profil

Ein Profil wählt eine oder mehrere Spezifikationen für eine definierte Community, Disziplin, einen Workflow oder einen Publikationskontext aus, schränkt diese ein oder erweitert sie.

Form des Identifikators:

```text
OMI-PROFILE-NNN
```

Ein Profil DARF der Spezifikation, auf die es sich bezieht, nicht stillschweigend widersprechen. Jede absichtliche Inkompatibilität erfordert eine separate Spezifikationsversion oder eine ausdrücklich nicht konforme Erweiterung.

### 5.3 Register

Eine Registrierung definiert kontrollierte Bezeichner, Werte, Medientypen, Rollen, Funktionen oder Erweiterungspunkte.

Form des Identifikators:

```text
OMI-REG-NNN
```

Registrierungseinträge MÜSSEN über stabile Identifikatoren und dokumentierte Lebenszyklusstatus verfügen.

### 5.4 Schema

Ein Schema ist eine maschinenlesbare Formalisierung eines Teils des Datenmodells von „OMI“.

Form des Identifikators:

```text
OMI-SCHEMA-NNN
```

Ein Schema-Dokument MUSS angeben, welche Version der Prosa-Spezifikation es implementiert.

### 5.5 Beispiel

Ein offizielles Beispiel veranschaulicht konforme bzw. bewusst nicht konforme Inhalte.

Form des Identifikators:

```text
OMI-EXAMPLE-NNN
```

In den Beispielen MUSS angegeben werden, ob es sich um Folgendes handelt:

- normativ;
- informativ;
- gültig;
- ungültig;
- minimal;
- umfassend;
- profilspezifisch.

### 5.6 Dokument zur Unternehmensführung

Ein Governance-Dokument legt den Projektablauf, die Zuständigkeiten, den Lebenszyklus, die Versionsverwaltung, die redaktionellen Vorgehensweisen oder die Regeln für Beiträge fest.

Governance-Dokumente erhalten keine „`OMI-SPEC`“-Kennungen, es sei denn, sie legen direkt die Konformität der Implementierer fest.

## 6. Konventionen für Dateien und Bezeichner

### 6.1 Dateinamen

Markdown Dateinamen MÜSSEN in „Kebab-Case“ (Kleinbuchstaben) geschrieben werden.

Richtig:

```text
bibliographic-record-model.md
reference-library-architecture.md
specification-lifecycle.md
```

Falsch:

```text
BibliographicRecordModel.md
reference_library.md
Reference Library.md
```

### 6.2 Permanente Identifikatoren

Eine permanente Dokumentenkennung DARF sich nicht ändern, wenn:

- Der Titel ändert sich;
- Die Datei wird verschoben;
- Die Kategorien in der Seitenleiste ändern sich;
- das Dokument wird übersetzt;
- eine neue Neben- oder Patch-Version veröffentlicht wird.

### 6.3 Überschriften und Anker

Der Text der Überschrift SOLLTE nach der Veröffentlichung unverändert bleiben, da die generierten Anker möglicherweise extern verwendet werden.

Wenn sich eine Überschrift ändern muss, SOLLTE die Website, sofern dies unterstützt wird, eine Weiterleitung oder einen expliziten Alt-Anker beibehalten.

### 6.4 Eigenschaftsnamen

Maschinenlesbare Eigenschaftsnamen MÜSSEN im „Lower Camel Case“ geschrieben werden, es sei denn, ein anderer Zuordnungsstandard schreibt eine andere Konvention vor.

Beispiele:

```json
{
  "documentLanguage": "en",
  "bibliographicTargetId": "ref-001",
  "createdAt": "2026-08-06T16:00:00Z"
}
```

Boolesche Eigenschaften SOLLTEN positive Bezeichnungen verwenden, die den Zustand „`true`“ beschreiben.

Bevorzugt:

```text
isArchived
preserveUnknownProperties
requiresReview
```

Zu vermeiden:

```text
notArchived
noPreservation
skipNoReview
```

### 6.5 Aufzählungswerte

Aufzählungswerte SOLLTEN in Kleinbuchstaben (Kebab-Case) geschrieben werden:

```text
journal-article
co-author
review-candidate
```

Sobald Aufzählungswerte in einer stabilen Spezifikation veröffentlicht wurden, DÜRFEN sie innerhalb derselben Hauptversion NICHT umbenannt werden.

## 7. Erforderliche Metadaten zu den Dokumenten

Jede Spezifikation MUSS mit für Menschen lesbaren Metadaten beginnen, die mindestens Folgendes enthalten:

| Feld | Anforderung |
|---|---|
| Kennung | Permanente „OMI“-Kennung |
| Titel | Offizieller Titel |
| Version | Dokumentversion |
| Status | Lebenszyklusphase |
| Dokumenttyp | Normativ, informativ oder gemischt |
| Redaktion | Verantwortliche Redakteure oder Redaktionsteam |
| Zuletzt aktualisiert | Datum nach ISO 8601 |
| Ersetzt | Vorheriges Dokument, sofern zutreffend |
| Ersetzt durch | Nachfolger, falls zutreffend |
| Abhängigkeiten | Normative Abhängigkeiten |
| Verwendet von | Bekannte abhängige Spezifikationen |
| Umsetzungsstatus | Zusammenfassung oder Link zur Umsetzungsmatrix |

Der Vorabschnitt „Docusaurus“ SOLLTE ausschließlich die von der Website benötigten Publikationsmetadaten enthalten, wie beispielsweise Titel, Seitenleistenbezeichnung und Reihenfolge. Normative Metadaten MÜSSEN im gerenderten Dokumenttext sichtbar bleiben.

## 8. Struktur der Standardspezifikation

Eine normative „OMI“-Spezifikation SOLLTE die folgende Struktur aufweisen. Abschnitte DÜRFEN nur weggelassen werden, wenn sie nicht zutreffen.

### 8.1 Zusammenfassung

Eine kurze Beschreibung dessen, was die Spezifikation definiert und warum sie existiert.

Die Zusammenfassung SOLLTE KEINE normativen Anforderungen enthalten.

### 8.2 Status dieses Dokuments

In diesem Abschnitt heißt es:

- Lebenszyklusstatus;
- Stabilitätserwartungen;
- ob Durchsetzungsansprüche angemessen sind;
- ob eine unvereinbare Änderung weiterhin möglich ist;
- wo Probleme und Überarbeitungen besprochen werden.

### 8.3 Konformität

In diesem Abschnitt wird Folgendes definiert:

- Klassen konformer Implementierungen;
- obligatorische Funktionen;
- optionale Funktionen;
- Beziehungen im Profil;
- wie die Konformität geprüft oder erklärt wird.

### 8.4 Geltungsbereich

Im Abschnitt „Geltungsbereich“ wird festgelegt, worauf sich das Dokument bezieht.

Es SOLLTE außerdem einen expliziten Unterabschnitt **„Außerhalb des Geltungsbereichs“** enthalten, wenn Verwechslungsgefahr hinsichtlich der Abgrenzung besteht.

### 8.5 Begriffsbestimmungen

Das Dokument MUSS Fachbegriffe definieren, die noch nicht im zentralen Terminologiedokument „OMI“ definiert sind.

Definitionen SOLLTEN prägnant und nicht zirkulär sein.

### 8.6 Gestaltungsgrundsätze

In diesem informativen Abschnitt werden die architektonischen Grundsätze erläutert, an denen sich die Spezifikation orientiert.

Entwurfsgrundsätze DÜRFEN nicht an die Stelle von überprüfbaren normativen Anforderungen treten.

### 8.7 Datenmodell oder Verarbeitungsmodell

Im Hauptteil des Modells werden Entitäten, Eigenschaften, Beziehungen, Zustände und Verarbeitungsverhalten beschrieben.

Die Prosa-Spezifikation bleibt maßgeblich, sofern in dem Dokument nicht ausdrücklich angegeben ist, dass für eine definierte Teilmenge ein maschinenlesbares Artefakt maßgeblich ist.

### 8.8 Validierung und Fehlerbehandlung

Das Dokument SOLLTE Folgendes definieren:

- Ungültige Eingabe;
- Nicht unterstützte Eingabe;
- Warnungen;
- behebbare und nicht behebbare Fehler;
- Anforderungen an die Fehlermeldung;
- Konservierungsverhalten.

### 8.9 Erweiterbarkeit

Die Spezifikation SOLLTE Erweiterungspunkte identifizieren und festlegen, wie mit unbekannten Erweiterungen umgegangen wird.

Erweiterungen DÜRFEN die Bedeutung von Kerneigenschaften NICHT neu definieren.

### 8.10 Interoperabilität

In diesem Abschnitt werden Zuordnungen zu externen Standards beschrieben und dabei folgende Unterscheidungen getroffen:

- verlustfreie Abbildungen;
- bedingt verlustfreie Abbildungen;
- verlustbehaftete Abbildungen;
- nicht unterstützte Konstrukte.

### 8.11 Überlegungen zu Sicherheit, Datenschutz und Integrität

Jede normative Spezifikation MUSS berücksichtigen, ob sie Risiken in Bezug auf folgende Aspekte mit sich bringt:

- aktiver Inhalt;
- Abruf externer Ressourcen;
- Identitätsfälschung;
- nicht vertrauenswürdige Metadaten;
- personenbezogene Daten;
- ausgeblendete Anmerkungen;
- Zugriffskontrolle;
- Integrität der Signatur oder der Herkunft;
- Denial-of-Service-Angriff;
- unsichere Darstellung.

Die Aussage, dass keine konkreten Überlegungen bekannt sind, ist erst nach ausdrücklicher Prüfung zulässig.

### 8.12 Überlegungen zur Barrierefreiheit

Spezifikationen, die sich auf die benutzerseitige Darstellung oder Interaktion auswirken, SOLLTEN Barrierefreiheitsanforderungen oder erwartete Zuordnungen festlegen.

### 8.13 Überlegungen zur Internationalisierung

Spezifikationen, die sich auf Text, Namen, Datumsangaben, Sortierung, Bezeichner oder die Darstellung auswirken, MÜSSEN Folgendes berücksichtigen:

- Unicode;
- Sprachkennzeichnungen;
- bidirektionaler Text;
- lokalisierte Namen;
- Skriptvariante;
- Transliteration;
- lokalisierungsneutrale Maschinenwerte;
- Zeitzonen und Kalenderdarstellung.

### 8.14 Beispiele

Beispiele SOLLTEN in der Nähe der Regel stehen, die sie veranschaulichen. Umfangreiche, vollständige Beispiele SOLLTEN als separate, validierte Dateien gepflegt und in der Spezifikation verlinkt werden.

### 8.15 Literaturverzeichnis

Die Literaturangaben MÜSSEN wie folgt unterteilt werden:

- **Normative Verweise**: erforderlich für die Umsetzung oder Auslegung der Spezifikation;
- **Informative Quellenangaben**: Hintergrundinformationen oder weiterführendes Material.

### 8.16 Änderungshistorie

Eine Versionshistorie SOLLTE die wesentlichen Änderungen zusammenfassen. Die Git-Historie allein ist kein adäquater Ersatz für eine veröffentlichte Änderungshistorie.

## 9. Regeln zur Terminologie

### 9.1 Zentrale Definitionen

Begriffe, deren Bedeutung sich auf mehrere Spezifikationen erstreckt, MÜSSEN im zentralen Terminologiedokument „OMI“ definiert sein.

Eine Spezifikation KANN einen Begriff auf ihren eigenen Geltungsbereich einschränken, DARF ihm jedoch NICHT stillschweigend eine widersprüchliche Bedeutung zuweisen.

### 9.2 Bevorzugte Kernbegriffe

Die folgenden Unterscheidungen MÜSSEN beibehalten werden.

#### Manuskript

Ein wissenschaftliches Werk, das über seinen gesamten Lebenszyklus hinweg als bearbeitbares, strukturiertes geistiges Objekt dargestellt wird.

#### Dokument

Eine konkret strukturierte Darstellung oder ein Paket von Inhalten. Ein Manuskript kann mehrere Dokumentdarstellungen oder Versionen haben.

#### Wissenschaftliches Objekt

Eine identifizierbare semantische Einheit innerhalb eines Manuskripts oder eine mit diesem verbundene Einheit.

#### Bibliografischer Eintrag

Eine strukturierte Beschreibung einer zitierten oder zitierfähigen Quelle, unabhängig von einem bestimmten Zitierfall.

#### Nachschlagewerk

Die Sammlung bibliografischer Datensätze auf Manuskriptebene, die für eine mögliche oder tatsächliche Zitierung ausgewählt wurden.

#### Häufigkeit der Zitate

Ein Verweis von einer bestimmten Stelle in einem Manuskript auf einen Eintrag in einer Referenzbibliothek, der optional Lokalisatoren, Präfixe, Suffixe und die Zitationsabsicht enthält.

#### Zitierweise (übersetzt)

Aus einem Zitatsverweis, einem bibliografischen Datensatz und einem Darstellungsprofil generierter Präsentationstext.

#### Anker

Ein stabiler oder auflösbarer Verweis auf einen Ort, einen Bereich, ein Objekt oder einen Zustand innerhalb wissenschaftlicher Inhalte.

#### Anmerkung

Ein wissenschaftliches Objekt, das eine Sammlung von Kommentaren oder strukturierten Informationen mit einem oder mehreren Zielen verknüpft.

#### Profil

Eine festgelegte Sammlung von Einschränkungen, Standardwerten oder Erweiterungen, die für einen bestimmten Zweck auf eine oder mehrere „OMI“-Spezifikationen angewendet werden.

### 9.3 Großschreibung

Allgemeine Begriffe werden klein geschrieben:

> ein Manuskript, ein Zitat, ein Profil

Offizielle Dokument- und Komponentennamen werden in Groß- und Kleinschreibung geschrieben:

> Zitiermodell, Open Manuscript Studio, OMI Spezifikationsregister

Eigenschaftsnamen und Literalwerte MÜSSEN als Code formatiert werden:

> Die Eigenschaft „`documentLanguage`“ enthält ein BCP-47-Sprachkennzeichen.

### 9.4 Abkürzungen

Eine Abkürzung MUSS bei ihrer ersten inhaltlichen Verwendung ausgeschrieben werden, es sei denn, sie ist in der anvisierten Fachzielgruppe allgemein bekannt.

Bevorzugt:

> Citation Style Language (CSL)

Bei späterer Verwendung KANN „`CSL`“ verwendet werden.

Abkürzungen SOLLTEN NICHT mit einem Apostroph in den Plural gesetzt werden.

Richtig:

> DOIs, APIs, URLs

## 10. Darstellung des Datenmodells

### 10.1 Entitätsbeschreibungen

Jede Organisation SOLLTE Folgendes festlegen:

- Zweck;
- Bezeichner;
- Lebenszyklus;
- erforderliche Eigenschaften;
- optionale Eigenschaften;
- Beziehungen;
- Invarianten;
- Erweiterungspunkte.

### 10.2 Eigenschaftstabellen

Eigenschaftstabellen SOLLTEN folgende Reihenfolge verwenden:

| Eigenschaft | Typ | Erforderlich | Kardinalität | Beschreibung |
|---|---|---:|---:|---|

Weitere Spalten KÖNNEN enthalten:

- Standard;
- Einschränkungen;
- Quelle;
- Vertraulichkeitsstufe;
- Version eingeführt.

### 10.3 Kardinalität

Die Kardinalität SOLLTE einheitlich ausgedrückt werden:

- `0..1` — optionaler Einzelwert;
- `1` — genau einen Wert;
- `0..*` — null oder mehr Werte;
- `1..*` — ein oder mehrere Werte.

### 10.4 Nullwerte, fehlende Werte und leere Werte

Eine Spezifikation MUSS, soweit relevant, zwischen folgenden Punkten unterscheiden:

- eine fehlende Eigenschaft;
- eine Eigenschaft mit dem Wert „`null`“;
- eine leere Zeichenkette;
- ein leeres Array;
- ein unbekannter Wert;
- ein bewusst zurückgehaltener Wert;
- ein Wert, der nicht zutrifft.

Diese Zustände DÜRFEN NICHT als gleichwertig behandelt werden, es sei denn, dies wird in der Spezifikation ausdrücklich angegeben.

### 10.5 Termine und Uhrzeiten

Maschinenlesbare Datums- und Zeitangaben MÜSSEN in ISO 8601-kompatibler Form vorliegen, wie sie im jeweiligen Schema definiert ist.

Ein „Instant“ SOLLTE einen UTC-Offset enthalten. UTC-Werte SOLLTEN die Form „`Z`“ verwenden.

Beispiel:

```text
2026-08-06T16:10:15Z
```

Ein Datum ohne Uhrzeit DARF NICHT stillschweigend als ein bestimmter Zeitpunkt interpretiert werden.

### 10.6 Sprachkennzeichnungen

Bei der maschinenlesbaren Sprachidentifizierung MÜSSEN BCP-47-Sprachkennungen verwendet werden, es sei denn, ein Zuordnungsstandard schreibt eine andere Darstellung vor.

Beispiele:

```text
en
hu
de
zh-Hant
sr-Latn
```

## 11. Beispiele und Code-Blöcke

### 11.1 Gültigkeit

Code-Beispiele, die die Konformität beanspruchen, MÜSSEN syntaktisch gültig sein und SOLLTEN automatisch validiert werden.

Verkürzte Beispiele MÜSSEN einen sichtbaren Hinweis wie einen Kommentar oder Auslassungspunkte enthalten und DÜRFEN NICHT als vollständige, gültige Dokumente dargestellt werden.

### 11.2 JSON

JSON Beispiele MÜSSEN:

- Verwende doppelte Anführungszeichen;
- Verwenden Sie eine Einrückung mit zwei Leerzeichen;
- Vermeiden Sie Kommentare in Blöcken mit der Bezeichnung „`json`“;
- Verwenden Sie stabile Beispielbezeichner;
- Vermeiden Sie echte personenbezogene Daten;
- Verwenden Sie gültiges Unicode.

Beispiel:

```json
{
  "id": "citation-001",
  "targetId": "reference-001",
  "locator": {
    "type": "page",
    "value": "24–31"
  }
}
```

### 11.3 XML

XML In Beispielen MÜSSEN Namensräume deklariert werden, wenn die Semantik der Namensräume von Bedeutung ist. Die in den Beispielen verwendeten Präfixe SOLLTEN innerhalb der gesamten Spezifikationssuite einheitlich sein.

### 11.4 URLs und Kennungen

In Beispielen SOLLTEN nach Möglichkeit reservierte oder eindeutig fiktive Werte verwendet werden.

Verwenden Sie keine Identifikatoren, die mit tatsächlich vergebenen wissenschaftlichen Identifikatoren verwechselt werden könnten, es sei denn, das Beispiel bezieht sich ausdrücklich auf ein konkretes Werk und die Quellenangabe ist korrekt.

### 11.5 Positive und negative Beispiele

Die Spezifikationen SOLLTEN Folgendes enthalten:

- mindestens ein gültiges Minimalbeispiel;
- mindestens ein repräsentatives, gültiges Beispiel;
- ungültige Beispiele für wichtige Validierungsregeln;
- Beispiele für die Migration bei der Änderung bestehender Verhaltensweisen.

Bei ungültigen Beispielen MUSS angegeben werden, warum sie ungültig sind.

### 11.6 Beispielbezeichnungen

Beispiele SOLLTEN einheitlich beschriftet und mit Verweisen versehen werden:

```text
Example 1 — Minimal citation occurrence
Example 2 — Citation with a page locator
Example 3 — Invalid unresolved target
```

## 12. Abbildungen und Diagramme

### 12.1 Zweck

Ein Diagramm SOLLTE Zusammenhänge, Zustandsübergänge, die Architektur oder Verarbeitungsabläufe verdeutlichen, die allein anhand des Textes schwer zu verstehen wären.

Ein Diagramm DARF NICHT die einzige normative Darstellung einer Anforderung sein.

### 12.2 Barrierefreiheit

Jede aussagekräftige Zahl MUSS Folgendes aufweisen:

- Alternativtext;
- eine Bildunterschrift;
- eine entsprechende Erklärung in Prosaform.

Informationen DÜRFEN NICHT ausschließlich von der Farbe abhängen.

### 12.3 Quelle des Diagramms

Bearbeitbare Quelldateien für wichtige Diagramme SOLLTEN zusammen mit den exportierten Assets im Repository gespeichert werden.

### 12.4 Notation

Eine Spezifikation MUSS nicht offensichtliche Notationen erläutern. UML-ähnliche Diagramme DÜRFEN KEINE formale UML-Semantik implizieren, es sei denn, das Dokument übernimmt diese ausdrücklich.

## 13. Tabellen und Listen

Tabellen SOLLTEN für strukturierte Vergleiche verwendet werden und nicht als Ersatz für lange Textabschnitte.

Eine Tabelle MUSS eindeutige Spaltenüberschriften haben. Die Zellen SOLLTEN prägnante Werte enthalten.

Aufzählungslisten eignen sich für ungeordnete Listen. Nummerierte Listen SOLLTEN nur verwendet werden, wenn die Reihenfolge oder die Abfolge der Schritte von Bedeutung ist.

Verschachtelte Listen SOLLTEN begrenzt werden, um die Lesbarkeit und die Übersetzungsqualität zu gewährleisten.

## 14. Querverweise

### 14.1 Interne Verweise

Normative Verweise auf ein anderes Dokument der „OMI“ MÜSSEN dessen permanente Kennung verwenden und SOLLTEN dessen Titel enthalten.

Bevorzugt:

> Siehe OMI-SPEC-006, *Modell für bibliografische Datensätze*.

Ein relativer Markdown-Link KANN den Bezeichner in der Quelle begleiten.

### 14.2 Verweise auf Abschnitte

In Verweisen SOLLTE der Abschnitt namentlich genannt werden, anstatt sich ausschließlich auf eine Abschnittsnummer zu stützen, da sich Nummern während der Ausarbeitung ändern können.

Bevorzugt:

> Siehe den Abschnitt „Identifier normalisation“ unter OMI-SPEC-006.

### 14.3 Externe Verweise

Externe normative Verweise SOLLTEN auf stabile, maßgebliche Quellen verweisen. Eine Spezifikation SOLLTE die referenzierte Version oder Ausgabe angeben, wenn sich die Auslegung zwischen den Versionen ändern könnte.

### 14.4 Haltbarkeit der Verbindungen

In Dokumenten SOLLTEN dauerhafte Identifikatoren und kanonische Dokumentations-URLs gegenüber temporären Projektseiten bevorzugt werden.

## 15. Abgleich von Schema und Prosa

### 15.1 Zuständigkeit

Jede auf einem Schema basierende Spezifikation MUSS die Zuordnung zwischen Text und Schema angeben.

Empfohlene Regel:

- prose definiert die Semantik und das Verarbeitungsverhalten;
- Das Schema definiert maschinell überprüfbare strukturelle Einschränkungen;
- Ein Konflikt ist ein Spezifikationsfehler, der behoben werden MUSS;
- Implementierungen DÜRFEN keine Semantik allein aus den Mechanismen des Schemas ableiten.

### 15.2 Schemabeschreibungen

Beschreibungen von Schemaeigenschaften SOLLTEN dieselbe Terminologie wie die Spezifikation in Textform verwenden und SOLLTEN, sofern die Tools dies zulassen, auf die entsprechende Anforderung oder den entsprechenden Abschnitt verweisen.

### 15.3 Zahlungsausfälle

Ein Schema-Standardwert DARF NICHT als Anweisung zum Einfügen eines Werts behandelt werden, es sei denn, in der beschreibenden Spezifikation ist dieses Verarbeitungsverhalten ausdrücklich definiert.

### 15.4 Weitere Eigenschaften

In den Spezifikationen MUSS ausdrücklich festgelegt werden, ob unbekannte Eigenschaften:

- abgelehnt;
- ignoriert;
- erhalten;
- für Erweiterungen offen;
- nur in deklarierten Namespaces zulässig.

## 16. Konformitätsbericht

### 16.1 Konformitätsklassen

Eine Spezifikation SOLLTE benannte Konformitätsklassen definieren, wenn nicht jede Implementierung dieselbe Rolle erfüllt.

Beispiele:

- konformer Hersteller;
- konformer Verbraucher;
- Konformitätsprüfer;
- kompatibler Renderer;
- konformer Editor;
- entsprechender Konservierungsprozessor.

### 16.2 Beobachtbares Verhalten

Konformitätsanforderungen MÜSSEN auf beobachtbaren Eingaben, Ausgaben, Zuständen oder dokumentierten Fähigkeiten basieren.

Verzichten Sie auf Vorgaben zur internen Architektur, es sei denn, diese Architektur ist für die Interoperabilität oder die Sicherheit erforderlich.

Schlecht:

> Implementierungen MÜSSEN eine relationale Datenbank verwenden.

Besser:

> Implementierungen MÜSSEN stabile Objektbezeichner über Speicher- und Ladevorgänge hinweg beibehalten.

### 16.3 Optionale Funktionen

Eine optionale Funktion KANN weggelassen werden. Wird sie implementiert, MUSS sie alle für diese Funktion definierten Anforderungen erfüllen.

### 16.4 Konformitätserklärungen

Eine Konformitätserklärung SOLLTE Folgendes enthalten:

- Name und Version der Implementierung;
- Spezifikationskennung und genaue Version;
- unterstützte Konformitätsklasse;
- unterstützte Profile;
- bekannte Einschränkungen;
- Version der Testsuite, sofern verfügbar.

## 17. Begriffe für Fehler und Warnungen

OMI In Dokumenten SOLLTEN diese Begriffe einheitlich verwendet werden.

### Fehler

Ein Zustand, der gegen eine normative Anforderung verstößt oder verhindert, dass der angeforderte Vorgang korrekt abgeschlossen wird.

### Warnung

Ein Zustand, der zulässig oder behebbar ist, jedoch zu Informationsverlusten, eingeschränkter Interoperabilität oder unerwarteten Ergebnissen führen kann.

### Nicht unterstützte Funktion

Eine anerkannte Funktion, die eine Implementierung nicht bietet.

### Unbekannte Funktion

Eine Funktion oder Erweiterung, die von der Implementierung nicht erkannt wird.

### Ungültiger Wert

Ein Wert, der gegen Syntax-, Typ-, Bereichs-, Kardinalitäts- oder semantische Einschränkungen verstößt.

### Ungeklärter Verweis

Eine Referenz, deren Ziel im aktuellen Verarbeitungskontext nicht identifiziert oder aufgerufen werden kann.

In den Spezifikationen SOLLTE angegeben werden, ob jede der genannten Bedingungen eine Ablehnung, eine Wiederherstellung, eine Aufbewahrung oder eine Benachrichtigung des Benutzers erfordert.

## 18. Interoperabilitätszuordnungen

Ein Zuordnungsdokument MUSS unterscheiden zwischen:

- Quellmodell;
- Zielmodell;
- Zuordnungsrichtung;
- Voraussetzungen für die Zuordnung;
- gespeicherte Informationen;
- umgewandelte Informationen;
- ausgelassene Informationen;
- generierte Informationen;
- Mehrdeutigkeit;
- Umkehrbarkeit.

Zuordnungstabellen SOLLTEN explizite Ergebnisse verwenden, wie zum Beispiel:

```text
lossless
conditionally lossless
lossy
unsupported
implementation-defined
```

Das Wort „kompatibel“ DARF NICHT verwendet werden, ohne die Kompatibilitätsdimension anzugeben.

## 19. Hinweise auf veraltete Funktionen und deren Ablösung

Eine veraltete Funktion bleibt zwar weiterhin definiert, wird jedoch für neue Inhalte oder Implementierungen nicht mehr empfohlen.

In Hinweisen auf veraltete Funktionen MUSS Folgendes angegeben werden:

- die veraltete Funktion;
- die Version, in der sie als veraltet markiert wurde;
- der Grund;
- das Ersatzteil, sobald es verfügbar ist;
- Leitfaden zur Migration;
- die früheste Version, in der eine Entfernung stattfinden kann.

Ein durch ein neues Dokument ersetztes Dokument MUSS weiterhin verfügbar bleiben und MUSS auf sein Nachfolgedokument verweisen.

Normtext DARF NICHT unbemerkt aus veröffentlichten stabilen Versionen entfernt werden.

## 20. Klassifizierung redaktioneller Änderungen

Jeder Pull-Request, der eine Spezifikation betrifft, SOLLTE die Änderungen einer oder mehreren der folgenden Kategorien zuordnen:

- redaktionelle Klarstellung;
- normative Klarstellung;
- kompatible normative Ergänzung;
- inkompatible normative Veränderung;
- Beispielkorrektur;
- Schemakorrektur;
- Sicherheitskorrektur;
- Aktualisierung der Übersetzung;
- Veraltungshinweis;
- Ersetzung.

Die Klassifizierung SOLLTE mit den Versionsrichtlinien von „OMI“ übereinstimmen.

## 21. Leitfaden zur Übersetzung

### 21.1 Rechtsquelle

Sofern nicht ausdrücklich anders angegeben, ist die englische Spezifikation verbindlich, während Übersetzungen nur informativen Charakter haben.

### 21.2 Verknüpfung mit der Quellversion

Jede amtliche Übersetzung MUSS folgende Angaben enthalten:

- Kennung des Quelldokuments;
- genaue Quellversion;
- Übersetzungsversion;
- Übersetzungsstatus;
- Datum der letzten Synchronisierung.

### 21.3 Nicht übersetzbare Tokens

Folgendes MUSS unverändert bleiben, sofern in einer Spezifikation keine lokalisierte Anzeige-Bezeichnung definiert ist:

- Eigenschaftsnamen;
- Aufzählungswerte;
- Anforderungskennungen;
- Schema-Bezeichner;
- Medientypen;
- Namespace-URIs;
- Code;
- Literal-Protokoll-Token.

### 21.4 Einheitliche Terminologie

In amtlichen Übersetzungen MUSS eine genehmigte sprachspezifische Terminologieliste verwendet werden. Übersetzer SOLLTEN begriffliche Unterscheidungen beibehalten, auch wenn diese in der Alltagssprache oft miteinander verschmelzen.

### 21.5 Normative Schlüsselbegriffe

Normative Schlüsselbegriffe in Großbuchstaben SOLLTEN in offiziellen Übersetzungen auf Englisch belassen werden, gegebenenfalls ergänzt durch eine übersetzte Erläuterung. Dadurch werden Mehrdeutigkeiten bei der rechtlichen oder technischen Auslegung vermieden.

## 22. KI-gestützte Bearbeitung

KI-gestützte Tools KÖNNEN zur Unterstützung beim Verfassen, Bearbeiten, Übersetzen, Überprüfen der Terminologie, Erstellen von Beispielen oder bei der Konsistenzprüfung eingesetzt werden.

### 22.1 Die Verantwortung des Menschen

Jedes veröffentlichte Dokument auf OMI MUSS einen menschlichen Redakteur oder ein Redaktionsteam haben, das für Folgendes verantwortlich ist:

- sachliche Richtigkeit;
- normative Korrektheit;
- Übereinstimmung mit den bestehenden Spezifikationen;
- Einhaltung der Rechte an geistigem Eigentum;
- Überprüfung der Sicherheit und des Datenschutzes;
- endgültige Genehmigung.

KI-Ergebnisse dürfen NICHT allein deshalb als maßgeblich angesehen werden, weil sie flüssig formuliert oder technisch ansprechend gestaltet sind.

### 22.2 Überprüfung

KI-gestützte Inhalte MÜSSEN anhand folgender Kriterien überprüft werden:

- die Quellspezifikationsgruppe;
- maßgebliche externe Standards;
- Schemen und Beispiele;
- Umsetzungsverhalten, soweit relevant;
- Projektterminologie.

Automatisch generierte Zitate, Identifikatoren, Zitate und externe Verweise MÜSSEN vor der Veröffentlichung unabhängig überprüft werden.

### 22.3 Änderungen der Vorschriften

Ein KI-gestützter Vorschlag, der normatives Verhalten verändert, MUSS denselben Lebenszyklus durchlaufen und denselben Anforderungen hinsichtlich Überprüfung, Testen und Versionierung genügen wie jeder von Menschen verfasste Vorschlag.

Keine normative Regel DARF allein auf der Grundlage einer KI-Empfehlung angenommen werden.

### 22.4 Sensible Inhalte

Redakteure dürfen KEINE vertraulichen Manuskripte, personenbezogene Daten, unter Sperrfrist stehendes Begutachtungsmaterial, Zugangsdaten, private Schlüssel oder nicht öffentliche Sicherheitsinformationen an einen KI-Dienst übermitteln, es sei denn, der Dienst und der Verarbeitungskontext sind für diese Informationen ausdrücklich autorisiert.

### 22.5 Herkunft

Im Rahmen des Projekts KANN in Beitragsnotizen, Pull-Request-Beschreibungen oder redaktionellen Metadaten in erheblichem Umfang auf KI-Unterstützung hingewiesen werden. Bei einer solchen Angabe SOLLTE die Rolle des Tools beschrieben werden, anstatt ihm die Urheberschaft oder Verantwortung zuzuschreiben.

Beispiel:

> KI-gestützte Sprach- und Konsistenzprüfung; alle normativen Inhalte wurden vom angegebenen Redakteur überprüft und freigegeben.

Kleinere Korrekturen in Bezug auf Rechtschreibung, Grammatik, Suche oder Formatierung müssen nicht auf Dokumentebene offengelegt werden, es sei denn, dies ist gemäß den Projektrichtlinien oder den geltenden Vorschriften erforderlich.

### 22.6 Übersetzung

Maschinell erstellte Übersetzungen MÜSSEN so lange als Entwürfe betrachtet werden, bis sie von einem kompetenten menschlichen Übersetzer oder einem Fachexperten überprüft wurden.

Eine maschinelle Übersetzung DARF NICHT als offizielle Übersetzung von OMI gekennzeichnet werden, ohne dass sie von einem Menschen überprüft und die Übereinstimmung mit der Quellversion verifiziert wurde.

## 23. Vorgehensweisen bei Repositorys und Pull-Requests

### 23.1 Ein einheitliches Anliegen

Ein Pull-Request für eine Spezifikation SOLLTE sich auf einen zusammenhängenden architektonischen oder redaktionellen Aspekt beziehen. Nicht damit zusammenhängende Refactorings SOLLTEN, soweit möglich, getrennt behandelt werden.

### 23.2 Beschreibung des Pull-Requests

Ein Pull-Request SOLLTE folgende Angaben enthalten:

- Was hat sich geändert;
- warum sich das geändert hat;
- ob ein Verhalten normativ ist;
- Auswirkungen auf die Kompatibilität;
- betroffene Spezifikationen und Schemata;
- Validierung durchgeführt;
- offene Fragen.

### 23.3 Überprüfbare Diffs

Umfangreiche mechanische Formatierungsänderungen SOLLTEN von inhaltlichen normativen Änderungen getrennt werden, damit die Gutachter Verhaltensunterschiede erkennen können.

### 23.4 Generierte Dateien

Generierte Artefakte SOLLTEN ihre Quelle und den Generierungsbefehl angeben. Generierte Dateien DÜRFEN NICHT manuell bearbeitet werden, es sei denn, der Workflow lässt dies ausdrücklich zu.

### 23.5 Validierung

Vor dem Zusammenführen SOLLTEN die entsprechenden Prüfungen Folgendes umfassen:

- Markdown build;
- Überprüfung der internen Links;
- JSON sowie die Syntaxprüfung unter XML;
- Schema-Validierung;
- Beispieltests;
- Terminologieprüfungen;
- Prüfung auf doppelte Kennungen;
- Überprüfung der Übersetzungsschlüssel.

## 24. Barrierefreiheit und Lesbarkeit

OMI Die Spezifikationen SOLLTEN für Leser mit unterschiedlichen Geräten und Zugangsbedürfnissen nutzbar sein.

Autoren MÜSSEN:

- Verwenden Sie eine logische Überschriftenhierarchie;
- Geben Sie einen aussagekräftigen Linktext an;
- alternativen Text für aussagekräftige Bilder bereitstellen;
- Vermeiden Sie es, Bedeutung allein durch die Farbe zu vermitteln;
- die Sprache von nicht-englischen Passagen zu ermitteln, sofern dies durch die Tools unterstützt wird;
- Vermeiden Sie unnötig breite Tabellen;
- Symbole und Abkürzungen erläutern;
- Achten Sie darauf, dass die Absätze themenbezogen bleiben.

Technische Präzision hat Vorrang vor willkürlichen Lesbarkeitswerten, doch unnötig komplexe Sätze SOLLTEN umformuliert werden.

## 25. Qualitätscheckliste

Bevor ein Dokument den Status „**Zur Überprüfung vorgesehen**“ erhält, SOLLTEN die Redakteure alle unten aufgeführten Punkte überprüfen.

### 25.1 Gegenstand und Geltungsbereich

- [ ] Das Dokument verfügt über eine stabile Kennung.
- [ ] Version und Lebenszyklusstatus werden angegeben.
- [ ] Die Grenzen des Anwendungsbereichs und der Nicht-Anwendungsbereiche sind klar definiert.
- [ ] Abhängigkeiten und zugehörige Spezifikationen sind aufgeführt.

### 25.2 Begriffsbestimmungen

- [ ] Die Begriffe entsprechen der Terminologie der ZentralOMI.
- [ ] Es werden neue Begriffe definiert.
- [ ] Ähnliche Begriffe werden konsequent voneinander unterschieden.
- [ ] Eigenschaftsnamen und Literalwerte werden in Code-Formatierung dargestellt.

### 25.3 Normative Qualität

- [ ] Normative Schlüsselwörter werden bewusst verwendet.
- [ ] Die Anforderungen sind unabhängig voneinander überprüfbar.
- [ ] An den erforderlichen Stellen werden Anforderungskennungen vergeben.
- [ ] Das optionale Verhalten ist explizit angegeben.
- [ ] Die Fehlerbehandlung ist definiert.
- [ ] Konformitätsklassen werden bei Bedarf definiert.

### 25.4 Modelle und Beispiele

- [ ] Entitäten, Beziehungen und Kardinalitäten sind explizit angegeben.
- [ ] Es wird zwischen fehlenden, null, leeren und unbekannten Zuständen unterschieden.
- [ ] Die Beispiele sind syntaktisch korrekt.
- [ ] Es werden wichtige ungültige Fälle aufgezeigt.
- [ ] In den Beispielen werden keine personenbezogenen oder vertraulichen Daten preisgegeben.

### 25.5 Interoperabilität

- [ ] Externe Abbildungen geben die Richtung und den Informationsverlust an.
- [ ] Es ist eine Behandlung für unbekannte Dateiendungen definiert.
- [ ] Versions- und Migrationsauswirkungen sind dokumentiert.
- [ ] Schema und Text stimmen überein.

### 25.6 Risikoprüfung

- [ ] Die Sicherheitsaspekte wurden geprüft.
- [ ] Die Auswirkungen auf den Datenschutz und die Herkunftsnachweise wurden geprüft.
- [ ] Aspekte der Barrierefreiheit werden berücksichtigt.
- [ ] Überlegungen zur Internationalisierung werden behandelt.

### 25.7 Veröffentlichung

- [ ] Interne Links funktionieren.
- [ ] Normative und informative Verweise werden voneinander getrennt.
- [ ] Der Änderungsverlauf wurde aktualisiert.
- [ ] Die Website wurde erfolgreich erstellt.
- [ ] In offiziellen Übersetzungen wird die genaue Ausgangsversion angegeben.

## 26. Ausnahmen

Eine Spezifikation KANN von diesem Leitfaden abweichen, wenn das Thema eine andere Darstellung oder Notation erfordert.

Eine Ausnahme MUSS:

- Sei konkret;
- in ihrem Umfang begrenzt sein;
- Geben Sie den Grund an;
- die Interoperabilität und Überprüfbarkeit zu gewährleisten;
- im Rahmen des üblichen Prüfungsverfahrens genehmigt werden.

Die Bequemlichkeit oder die bisherige Formatierung allein reichen nicht als Rechtfertigung für eine dauerhafte Ausnahme aus.

## 27. Pflege dieses Leitfadens

Dieser Leitfaden unterliegt der Richtlinie zum Lebenszyklus und zur Versionsverwaltung von Spezifikationen der „OMI“.

Redaktionelle Korrekturen KÖNNEN als Patch-Versionen veröffentlicht werden. Kompatible Ergänzungen KÖNNEN als Nebenversionen veröffentlicht werden. Änderungen, die die etablierte Dokumentstruktur, Bezeichner oder Auslegung ungültig machen, erfordern eine Hauptversion.

Änderungen an diesem Leitfaden SOLLTEN im Hinblick auf ihre Auswirkungen auf folgende Bereiche geprüft werden:

- bestehende Spezifikationen;
- amtliche Übersetzungen;
- automatisierte Werkzeuge;
- Schema-Dokumentation;
- externe Verweise;
- Workflow für Mitwirkende.

## 28. Zusammenfassung

OMI Spezifikationen müssen mehr sein als nur erklärender Text. Sie sind langfristige technische Vereinbarungen zwischen Autoren, Redakteuren, Verlagen, Repositorien, Softwareentwicklern, Archivierungssystemen und zukünftigen Umsetzern.

Eine einheitliche Struktur, präzise Terminologie, überprüfbare Anforderungen, dauerhafte Bezeichner, verifizierte Beispiele und eine nachvollziehbare redaktionelle Überprüfung sind daher wesentliche Bestandteile des Standards selbst.
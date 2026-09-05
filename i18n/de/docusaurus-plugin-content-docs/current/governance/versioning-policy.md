---
title: Richtlinie zur Versionsverwaltung
sidebar_position: 5
---

# Open Manuscript Initiative Richtlinie zur Versionsverwaltung

## Dokumentstatus

- **Dokumenttyp:** Leitlinie zur Unternehmensführung
- **Status:** Entwurf
- **Version:** 0.1.0
- **Normative Sprache:** Englisch
- **Gilt für:** Spezifikationen, Schemata, Dateiformate, API, Beispiele, Implementierungen, Übersetzungen und veröffentlichte Dokumentation von „OMI“

## 1. Zweck

Diese Richtlinie legt fest, wie die „Open Manuscript Initiative“ (OMI) Versionen zuweist, auslegt, veröffentlicht und außer Kraft setzt.

Versionskennungen vermitteln Erwartungen hinsichtlich der Kompatibilität. Sie sind nicht bloß Versionsbezeichnungen. Eine „OMI“-Version muss es Autoren, Implementierern, Validierern, Herausgebern, Repositorien und Langzeitarchivierungssystemen ermöglichen, Folgendes festzustellen:

- welche Spezifikationsregeln gelten;
- ob zwei Dokumente oder Implementierungen miteinander kompatibel sein sollen;
- ob ein Upgrade abwärtskompatibel ist;
- ob eine Migration erforderlich ist;
- welches Schema ein Dokument validiert;
- welche Korrekturen oder Ergänzungen enthalten sind;
- ob eine Version weiterhin unterstützt wird.

Diese Richtlinie ergänzt die „[Specification Lifecycle](./specification-lifecycle.md)“. Der Lebenszyklusstatus beschreibt den Reifegrad; Versionsnummern beschreiben Änderungen und Kompatibilität. Eine Spezifikation kann im Status „Entwurf“ verbleiben, während sie mehrere Versionen vor der Version 1.0 durchläuft.

## 2. Geltungsbereich

Diese Richtlinie regelt die Versionsverwaltung für:

1. die Spezifikationssuite „OMI“;
2. einzelne „OMI“-SPEC-Dokumente;
3. das kanonische Datenmodell „OMI“ und das Schema „JSON“;
4. OMI Manuskript- und Containerformate;
5. OMI APIs sowie Protokollverträge;
6. normative Vokabulare und Register;
7. Konformitätsprofile;
8. Beispielmodelle und Prüfvorrichtungen;
9. Referenzimplementierungen, darunter „Open Manuscript Studio“;
10. amtliche Übersetzungen;
11. die Website „OMI“ und die Dokumentation.

Es ist nicht erforderlich, dass Implementierungen von Drittanbietern dieselben Produktversionsnummern wie die „OMI“-Spezifikation verwenden. Software von Drittanbietern muss jedoch angeben, welche „OMI“-Versionen und -Profile sie unterstützt.

## 3. Normative Begriffe

Die Schlüsselbegriffe **MUSS**, **DARF NICHT**, **ERFORDERLICH**, **SOLL**, **SOLL NICHT**, **SOLLTE**, **SOLLTE NICHT**, **EMPFOHLEN**, **KANN** und **OPTIONAL** sind als normative Anforderungsstufen zu interpretieren.

## 4. Versionsabmessungen

OMI unterscheidet mehrere miteinander verbundene, aber voneinander unabhängige Versionsdimensionen.

### 4.1 Version der Spezifikationssuite

Die „Suite“-Version bezeichnet eine koordinierte Veröffentlichung der Norm „OMI“, zum Beispiel:

```text
OMI 0.2
OMI 1.0
OMI 1.1
OMI 2.0
```

Eine Suite-Version definiert eine getestete Kombination aus Spezifikationsversionen, Schemata, Vokabularen, Profilen und Beispielen.

### 4.2 Individuelle Spezifikationsversion

Jede permanente Spezifikationskennung hat eine eigene Version:

```text
OMI-SPEC-005 Citation Model, version 0.3.0
```

Eine einzelne Spezifikation kann überarbeitet werden, ohne dass dies unmittelbar zur Veröffentlichung einer neuen Suite-Version führt. In einem Suite-Release-Register wird die genaue Version jeder enthaltenen Spezifikation erfasst.

### 4.3 Schemaversion

Ein maschinenlesbares Schema verfügt über eine explizite Version, die unabhängig von seinem Dateinamen, dem Repository-Commit und dem Veröffentlichungsdatum ist.

Beispiel:

```json
{
  "$id": "https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json",
  "title": "Open Manuscript Manuscript Schema",
  "version": "1.0.0"
}
```

### 4.4 Formatversion

Jedes serialisierte „OMI“-Manuskript oder -Paket MUSS die zur Interpretation erforderliche Formatversion angeben.

Beispiel:

```json
{
  "omi": {
    "format": "manuscript",
    "version": "1.0.0"
  }
}
```

Die genaue Feldstruktur wird durch die Spezifikation des Dateiformats festgelegt. Die Deklaration MUSS maschinenlesbar bleiben und DARF NICHT ausschließlich von einer Dateinamenerweiterung abhängen.

### 4.5 Implementierungsversion

Softwareprodukte verwenden ihre eigenen Produktversionen, zum Beispiel:

```text
Open Manuscript Studio 0.4.0
```

Eine Implementierungsversion DARF NICHT als Konformitätsversion gemäß OMI interpretiert werden. Implementierungen MÜSSEN die unterstützten Versionen von OMI separat angeben.

Beispiel:

```text
Product version: 0.4.0
Supported OMI suite: 0.2
Supported manuscript format: 0.2.0–0.2.x
```

### 4.6 Übersetzungsversion

Eine beglaubigte Übersetzung MUSS folgende Angaben enthalten:

- das normative englische Dokument;
- die genaue Quellversion;
- die Überarbeitung der Übersetzung;
- der Synchronisationsstatus.

Beispiel:

```text
Source: OMI-SPEC-005 version 1.1.0
Translation revision: hu-1
Status: synchronized
```

## 5. Format der Versionsnummer

OMI verwendet semantische Versionsnummern in folgender Form:

```text
MAJOR.MINOR.PATCH
```

Beispiele:

```text
0.3.0
1.0.0
1.2.4
2.0.0
```

Bei öffentlich sichtbaren Suite-Namen kann die Patch-Komponente weggelassen werden, wenn sie den Wert Null hat:

```text
OMI 1.0
```

Der kanonische, maschinenlesbare Wert lautet weiterhin „`1.0.0`“.

## 6. Bedeutung der Versionskomponenten

### 6.1 HAUPTFACH

Die MAJOR-Nummer ändert sich, wenn eine Version inkompatible normative Änderungen einführt.

Zu den wesentlichen Änderungen gehören unter anderem:

- das Entfernen einer erforderlichen oder zuvor unterstützten Datenstruktur;
- die Bedeutung eines bestehenden Feldes oder Objekts zu ändern;
- optionale Daten als obligatorisch festlegen, ohne einen kompatiblen Standardwert anzugeben;
- Änderung der Semantik von Bezeichnern;
- die Verarbeitungsregeln so zu ändern, dass eine konforme ältere Implementierung wesentlich andere Ergebnisse liefern würde;
- das Ersetzen eines Serialisierungsmodells in einer Weise, die von älteren Implementierungen nicht sicher gelesen werden kann;
- Einführung eines inkompatiblen Verhaltens von „API“;
- die zuvor gültigen, konformen Dokumente ohne einen definierten Kompatibilitätsmechanismus für ungültig erklären.

Eine MAJOR-Version MUSS Migrationshinweise enthalten.

### 6.2 MINDERJÄHRIGE

Die MINOR-Nummer ändert sich, wenn kompatible Funktionen hinzugefügt werden.

Eine geringfügige Änderung kann Folgendes umfassen:

- Hinzufügen optionaler Felder;
- Hinzufügen neuer Objekttypen über einen definierten Erweiterungspunkt;
- Hinzufügen neuer optionaler Konformitätsprofile;
- das Hinzufügen neuer Aufzählungswerte, wenn die Nutzer ohnehin bereits unbekannte Werte tolerieren müssen;
- Hinzufügen kompatibler „API“-Endpunkte;
- Erweiterung der Validierung um Warnungen, die zuvor gültige Inhalte nicht ungültig machen;
- Hinzufügen von Zuordnungen zu externen Standards;
- Hinzufügen von informativen Anleitungen oder Beispielen, die das gewünschte Verhalten verdeutlichen.

Eine MINOR-Version MUSS die Fähigkeit konformer älterer Verbraucher gewährleisten, die zuvor unterstützten Kerndaten zu verarbeiten, auch wenn sie neu eingeführte optionale Informationen ignorieren.

### 6.3 PATCH

Die PATCH-Nummer ändert sich bei kompatiblen Korrekturen und Klarstellungen.

Eine Patch-Änderung kann Folgendes umfassen:

- Korrektur redaktioneller Fehler;
- defekte Links reparieren;
- mehrdeutige Textstellen zu präzisieren, ohne das beabsichtigte Verhalten zu verändern;
- Beispiele so anzupassen, dass sie den bestehenden normativen Regeln entsprechen;
- Korrektur einer zu weit gefassten oder zu eng gefassten Schemaeinschränkung, bei der die beabsichtigte Regel bereits eindeutig war;
- Veröffentlichung von Errata;
- Übersetzungen korrigieren;
- Anpassung von nicht normativen Werkzeugen oder Dokumentationen.

Ein Patch-Release DARF KEINE neuen obligatorischen Funktionen einführen oder konforme Implementierungen wissentlich unbrauchbar machen.

## 7. Versionen vor 1.0

Versionen unterhalb von `1.0.0` weisen darauf hin, dass die betreffende Spezifikation, das Schema oder das Format noch nicht die erste stabile Kompatibilitätsverpflichtung erreicht hat.

Beispiele:

```text
0.1.0
0.2.0
0.2.3
```

Während der Phase „`0.x`“:

- In einer MINOR-Version KÖNNEN inkompatible Änderungen auftreten;
- PATCH-Veröffentlichungen SOLLTEN innerhalb derselben MINOR-Reihe abwärtskompatibel bleiben;
- Jede Kompatibilitätsänderung MUSS dokumentiert werden;
- Migrationen SOLLTEN bereitgestellt werden, sofern dies praktikabel ist;
- Implementierungen DÜRFEN keine langfristige Kompatibilität beanspruchen, die sich ausschließlich auf eine Version vor 1.0 stützt;
- Veröffentlichte Dokumente SOLLTEN ihre ursprüngliche Versionsangabe beibehalten, auch wenn bereits ein neueres Schema vorliegt.

Die „`0.x`“-Phase ist kein Freibrief für unkontrollierte Änderungen. Jede Veröffentlichung unterliegt weiterhin den Anforderungen hinsichtlich Überprüfung, Änderungsprotokoll und Archivierung.

## 8. Stabilitätsverpflichtung bei 1,0

Die Version „`1.0.0`“ legt die erste stabile Kompatibilitätsgrundlage für „OMI“ fest.

Bevor eine Komponente den Status „`1.0.0`“ erreicht, MUSS sie die geltenden Anforderungen der Richtlinie zum Spezifikationslebenszyklus erfüllen, darunter:

- ein klar abgegrenzter Anwendungsbereich;
- festgelegte Terminologie;
- die normativen Anforderungen vollständig erfüllen;
- stabile Bezeichner;
- gegebenenfalls maschinenlesbare Schemata;
- Konformitätskriterien;
- Nachweise zur Umsetzung;
- Interoperabilitätstests;
- Sicherheits- und Erhaltungsaspekte;
- Migrationsregeln aus der neuesten Version vor 1.0;
- öffentliche Begutachtung.

Nach „`1.0.0`“ erfordern rückwärtsinkompatible Änderungen eine neue MAJOR-Version, es sei denn, ein expliziter Kompatibilitätsmechanismus war bereits Teil der stabilen Spezifikation.

## 9. Definitionen zur Kompatibilität

### 9.1 Rückwärtskompatibilität

Eine neuere Implementierung ist abwärtskompatibel, wenn sie Inhalte, die gemäß der unterstützten älteren Version gültig sind, korrekt verarbeiten kann, ohne dass Änderungen erforderlich sind – es sei denn, die älteren Inhalte basieren auf einer zurückgezogenen, unsicheren Funktion, die in den Richtlinien dokumentiert ist.

### 9.2 Vorwärtskompatibilität

Eine ältere Implementierung ist vorwärtskompatibel, wenn sie neuere Inhalte sicher verarbeiten kann, in der Regel indem sie optionale, unbekannte Erweiterungen ignoriert, diese aber bei Bedarf beibehält.

OMI Zielt auf eine begrenzte Vorwärtskompatibilität ab. Implementierungen müssen unbekannte Semantiken nicht verstehen, müssen jedoch sicher fehlschlagen und dürfen unbekannte Daten NICHT stillschweigend neu interpretieren.

### 9.3 Vor- und Rückwärtskompatibilität

„Round-Trip-Kompatibilität“ bedeutet, dass Inhalte geladen und gespeichert werden können, ohne dass Informationen verloren gehen, die die Implementierung erhalten muss.

Ein Konsument, der eine Erweiterung nicht versteht, KANN dennoch konform sein, wenn er diese Erweiterung gemäß den Erweiterungsregeln unverändert beibehält.

### 9.4 Verhaltenskompatibilität

Bei der Verhaltenskompatibilität geht es um Verarbeitungsergebnisse und nicht nur um die Gültigkeit von Schemata. Zwei Versionen sind verhaltensmäßig kompatibel, wenn die Verpflichtungen hinsichtlich normativer Interpretation, Validierung, Verankerung, Zitierauflösung und Darstellung für vorhandene Inhalte gleich bleiben.

## 10. Kompatibilitätsregeln für Datenmodelle

### 10.1 Optionale Ergänzungen

Neue optionale Eigenschaften stellen in der Regel nur geringfügige Änderungen dar, wenn:

- Ihre Abwesenheit hat eine bestimmte Bedeutung;
- Ältere Verbraucher dürfen diese ignorieren oder beibehalten;
- Sie ändern nichts an der Interpretation bestehender Felder.

### 10.2 Erforderliche Ergänzungen

Das Hinzufügen einer Pflichtangabe stellt in der Regel eine GRUNDLEGENDE Änderung dar, es sei denn:

- Es wird ein deterministischer Standardwert definiert;
- bereits vorhandene gültige Dokumente behalten ihre Gültigkeit oder können ohne semantischen Verlust aktualisiert werden;
- Der Kompatibilitätsmechanismus war bereits normativ.

### 10.3 Entwendung von Eigentum

Das Entfernen einer Eigenschaft ist eine GRUNDLEGENDE Änderung. Vor dem Entfernen SOLLTE eine Auslaufphase erfolgen.

### 10.4 Umbenennung

Die Umbenennung einer Eigenschaft stellt eine GRUNDLEGENDE Änderung dar, es sei denn, der alte Name bleibt im Rahmen eines dokumentierten Alias oder einer Migrationsphase weiterhin gültig.

### 10.5 Typänderungen

Die Änderung des Typs oder der Kardinalität einer Eigenschaft stellt in der Regel eine GRUNDLEGENDE Änderung dar.

### 10.6 Aufzählungen

Das Hinzufügen von Aufzählungswerten gilt nur dann als „MINOR“, wenn die Nutzer unbekannte Werte tolerieren müssen. Andernfalls gilt es als „MAJOR“.

Das Entfernen oder Neudefinieren eines Aufzählungswerts ist eine GROSSE Änderung.

### 10.7 Standardwerte

Die Änderung einer Voreinstellung, die sich auf die Interpretation oder die Ausgabe auswirkt, ist eine GROSSE Änderung. Die Korrektur einer dokumentierten Voreinstellung, um sie an bereits normatives Verhalten anzupassen, kann eine KLEINE Änderung sein, sofern der Nachweis der Interoperabilität das beabsichtigte Verhalten bestätigt.

## 11. Umgang mit unbekannten Daten und Dateiendungen

Um eine kompatible Weiterentwicklung zu unterstützen:

- In den Spezifikationen SOLLTEN explizite Erweiterungspunkte definiert werden;
- Implementierungen MÜSSEN zwischen unbekannten Daten und ungültigen Daten unterscheiden;
- Unbekannte Erweiterungen DÜRFEN NICHT als bekannte Kernsemantik interpretiert werden;
- Prozessoren SOLLTEN Daten mit unbekannter Erweiterung bei Hin- und Rückübertragungen beibehalten, wenn das Format dies vorschreibt;
- Validatoren SOLLTEN den für eine Erweiterung verantwortlichen Namensraum oder das entsprechende Profil angeben;
- Eine Erweiterung DARF die Kernsemantik NICHT ohne ein neues kompatibles Profil oder eine Änderung der Hauptversion überschreiben.

## 12. Schema-Versionierung

### 12.1 Unveränderliche veröffentlichte Schemata

Ein veröffentlichtes Schema, das durch eine versionierte kanonische URL identifiziert wird, MUSS unveränderlich sein.

Beispielsweise die Inhalte unter:

```text
https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json
```

Dürfen NICHT stillschweigend durch Regeln mit abweichendem Verhalten ersetzt werden.

Korrekturen erfordern entweder:

- eine neue Schema-URL auf Patch-Ebene; oder
- ein Mechanismus zur Veröffentlichung von Korrekturen mit expliziter Versionsangabe, bei dem das ursprüngliche Artefakt erhalten bleibt.

### 12.2 Kanonische und Komfort-URLs

OMI Es KANN eine URL ohne Versionsangabe veröffentlicht werden, wie zum Beispiel:

```text
https://openmanuscript.org/schemas/omi-manuscript.schema.json
```

Diese URL verweist möglicherweise auf das aktuellste empfohlene stabile Schema und DARF NICHT als alleiniger Bezeichner in Archivdokumenten verwendet werden.

Normative und archivierte Dokumente SOLLTEN auf ein unveränderliches, versioniertes Schema verweisen.

### 12.3 Schema-Bezeichner

Jedes Schema MUSS Folgendes enthalten:

- ein kanonisches `$id`;
- eine explizite Version;
- die entsprechenden Verweise auf die „OMI-SPEC“ und die Testsuite;
- Veröffentlichungsstatus;
- ggf. Hinweise zur Kompatibilität.

### 12.4 Schema-Dialekt

Die Änderung des Schema-Dialekts „JSON“ ist eine kompatibilitätsrelevante Entscheidung. Eine Dialektänderung KANN als „MINOR“ eingestuft werden, wenn die akzeptierte Instanzmenge und die Validierungssemantik gleichwertig bleiben. Andernfalls handelt es sich um eine „MAJOR“-Änderung.

## 13. Versionsverwaltung bei Dateiformaten

### 13.1 Selbstidentifikation

Jede „OMI“-Datei oder jeder „“-Container MUSS intern sein Format und seine Version angeben.

Dateiendungen und MIME-Typen sind nützliche Routing-Metadaten, reichen jedoch als einziges Versionsmerkmal nicht aus.

### 13.2 Verhalten der Leser

Ein Leser MUSS:

- Versionen akzeptieren, die ausdrücklich unterstützt werden;
- nicht unterstützte Hauptversionen sicher ablehnen oder unter Quarantäne stellen;
- die nicht unterstützte Version deutlich kennzeichnen;
- Vermeiden Sie eine destruktive Konvertierung ohne Zustimmung des Benutzers oder ohne Genehmigung durch eine Richtlinie;
- Das ursprüngliche Artefakt soll bei einem Migrationsversuch erhalten bleiben.

Ein Leser KANN eine spätere MINOR-Version akzeptieren, wenn die Kompatibilitätsregeln unbekannte optionale Felder und Erweiterungen zulassen.

### 13.3 Verhalten des Schreibers

Ein Writer MUSS die genaue Version angeben, die er ausgibt.

Ein Writer SOLLTE die älteste kompatible Version ausgeben, die den Inhalt originalgetreu wiedergibt, wenn Interoperabilität mit älteren Systemen erforderlich ist.

Ein Autor DARF Inhalte NICHT mit einer älteren Version kennzeichnen, wenn diese Funktionen nutzen, die unter dieser Version nicht gültig sind.

### 13.4 Migration

Die Migration zwischen Formatversionen MUSS explizit und reproduzierbar sein.

Ein Migrationswerkzeug SOLLTE Folgendes erzeugen:

- Quellversion;
- Zielversion;
- Migrationswerkzeug und Version;
- Zeitstempel;
- Warnungen;
- Verluste oder Annäherungswerte;
- ungeklärte Erweiterungen;
- Validierungsergebnis;
- Herkunftsangabe mit Verweis auf das Originalobjekt.

## 14. Versionsverwaltung bei „API“

OMI APIDie Verträge zur MUST-Version müssen unabhängig von den Produktversionen des Servers abgeschlossen werden.

### 14.1 Änderungen, die zu Inkompatibilitäten führen (API)

Zu den inkompatiblen Änderungen gehören:

- Endpunkte entfernen;
- Änderung der erforderlichen Anfragefelder;
- die Bedeutung der Antwort ändern;
- Änderung der Authentifizierungssemantik;
- Verträge über Status-Codes ändern;
- die Paginierung, die Sortierung oder das Parallelitätsverhalten auf eine nicht kompatible Weise zu ändern.

Kompatibilitätsbrechende Änderungen erfordern eine neue MAJOR-Version von „API“.

### 14.2 Auswahl der „API“-Version

Eine „API“-Spezifikation SOLLTE einen klaren Mechanismus zur Versionsaushandlung definieren, beispielsweise:

- ein versionierter Medientyp;
- ein versionierter Pfad;
- ein expliziter Protokoll-Header;
- ein ausgehandeltes Leistungsprofil.

Der Mechanismus MUSS einheitlich dokumentiert sein und DARF NICHT von undokumentierten Server-Heuristiken abhängen.

### 14.3 Auslaufphase

Stabile API-Funktionen SOLLTEN vor ihrer Entfernung als veraltet gekennzeichnet werden. Der Hinweis auf die Veralterung SOLLTE Folgendes enthalten:

- die betroffene Funktion;
- der Ersatz;
- die früheste Entfernungsversion;
- Leitfaden zur Migration;
- voraussichtlicher Unterstützungszeitraum.

## 15. Vokabular und Versionsverwaltung der Registries

Kontrollierte Vokabulare, Rollenlisten, Objekttypen, Identifikationsschemata und Profilregister erfordern explizite Entwicklungsregeln.

Ein Registrierungseintrag MUSS eine stabile Kennung haben. Die Anzeigenamen können sich ändern, ohne dass sich die Identität ändert.

Das Hinzufügen eines Registrierungseintrags gilt normalerweise als MINOR. Das Entfernen oder Neudefinieren eines bestehenden Bezeichners gilt als MAJOR, es sei denn, der Eintrag war ausdrücklich als experimentell gekennzeichnet oder hatte lokalen Geltungsbereich.

Veraltete Einträge SOLLTEN weiterhin auflösbar sein und MÜSSEN ihren Ersatz angeben, sofern ein solcher vorhanden ist.

## 16. Versionsverwaltung von Konformitätsprofilen

Ein Konformitätsprofil definiert eine eingeschränkte oder erweiterte Nutzung von „OMI“ für einen Arbeitsablauf, ein Fachgebiet, einen Herausgeber, ein Repositorium oder ein Austauschziel.

Jedes Profil MUSS Folgendes angeben:

- Profil-Kennung;
- Profilversion;
- erforderliche Versionen der „OMI“-Suite und der Spezifikationen;
- zusätzliche Einschränkungen;
- Erweiterungsvokabulare;
- Kompatibilitätsrichtlinie;
- Validierungsressourcen.

Ein Profil DARF KEINE Kompatibilität mit einer Version von „OMI“ beanspruchen, deren Kernanforderungen es widerspricht.

## 17. Veröffentlichungen von Spezifikationssuiten

Bei der Veröffentlichung einer „OMI“-Suite MUSS ein Release-Manifest veröffentlicht werden.

Im Manifest ist Folgendes vermerkt:

- Suite-Version;
- Erscheinungsdatum;
- Lebenszyklusstatus;
- einschließlich der Versionen „OMI“ und „SPEC“;
- Schema-Versionen und Hash-Werte;
- Vokabular- und Registrierungsversionen;
- Konformitätsprofile;
- Beispiele und Versionen der Testsuite;
- bekannte Einschränkungen;
- unterstützte Migrationspfade;
- veraltete Versionen der Suite.

Eine Suite-Version DARF NICHT bedeuten, dass jede einzelne Spezifikation dieselbe Versionsnummer hat.

## 18. Versionsabgleich

Komponenten KÖNNEN eigenständige semantische Versionen verwenden. Davon abzuraten ist, jede „OMI“-Komponente künstlich dazu zu zwingen, dieselbe Versionsnummer zu verwenden, da dies den tatsächlichen Umfang der Änderungen verschleiert.

Das Suite-Manifest sorgt für die Abstimmung.

Beispiel:

```yaml
suite: 1.1.0
specifications:
  OMI-SPEC-001: 1.0.1
  OMI-SPEC-002: 1.1.0
  OMI-SPEC-005: 1.0.0
schemas:
  manuscript: 1.1.0
  annotation: 1.0.2
```

## 19. Erklärungen zur Unterstützung der Umsetzung

Eine Implementierung, die die Unterstützung von „OMI“ beansprucht, MUSS eine maschinenlesbare oder klar strukturierte Unterstützungserklärung veröffentlichen.

Die Erklärung SOLLTE Folgendes enthalten:

- Name und Version der Implementierung;
- unterstützte Suite-Versionen;
- unterstützte Formatversionen;
- unterstützte Profile;
- Lesefähigkeit;
- Schreibzugriff;
- Validierungsfunktion;
- Beibehaltung unbekannter Erweiterungen;
- bekannte Abweichungen;
- Ergebnisse der Testsuite.

Die folgenden Ansprüche unterscheiden sich voneinander:

- **Liest „OMI“ 1.0**;
- **schreibt „OMIn 1.0“**;
- **OMI 1.0 validiert**;
- **entspricht dem „OMI“ 1.0 Core-Profil**;
- **Behält nicht unterstützte Erweiterungen von „OMI“ 1.x bei**.

Eine allgemeine Aussage wie „OMI-kompatibel“ reicht für eine formelle Konformitätserklärung nicht aus.

## 20. Versionen der Referenzimplementierung

Open Manuscript Studio und andere von OMIbetreute Softwareprojekte folgen ihren eigenen semantischen Versionsschemata.

Eine Softwareversion KANN mehrere Versionen von „OMI“ unterstützen. In den Versionshinweisen MUSS die Kompatibilität ausdrücklich angegeben werden.

Eine Änderung an der Benutzeroberfläche von Studio erfordert keine Änderung der Spezifikationsversion gemäß der Norm „OMI“, es sei denn, dadurch werden die standardisierten Daten, der Datenaustausch oder das normative Verhalten verändert.

Umgekehrt bedeutet eine neue Version der „OMI“-Spezifikation nicht, dass jede Implementierung diese sofort übernehmen muss.

## 21. Versionsverwaltung bei Übersetzungen

### 21.1 Normative Quelle

Sofern nicht ausdrücklich anders angegeben, ist Englisch die maßgebliche Sprache der Spezifikationen unter OMI.

### 21.2 Synchronisationsstatus

Jede amtliche Übersetzung MUSS einen der folgenden Status aufweisen:

- **Synchronisiert:** gibt die vollständig identifizierte Quellversion wieder;
- **Aktualisierung steht noch aus:** Der Quelltext hat sich geändert, und die Übersetzung wird derzeit überarbeitet;
- **Archiviert:** Die Übersetzung bezieht sich auf eine ältere, noch unterstützte Quellversion;
- **Zurückgezogen:** Die Übersetzung ist unzuverlässig oder wird nicht mehr gepflegt.

### 21.3 Korrekturen, die ausschließlich die Übersetzung betreffen

Eine Korrektur, die sich ausschließlich auf die Übersetzungsrevision bezieht, hat keinen Einfluss auf die Version der normativen Spezifikation.

Eine Übersetzungskorrektur DARF die Referenz auf die Quellversion NICHT stillschweigend ändern.

### 21.4 Konflikte

Sollte eine informative Übersetzung im Widerspruch zum normativen englischen Text stehen, ist der englische Text maßgebend. Die Übersetzung SOLLTE umgehend korrigiert und die Korrektur dokumentiert werden.

## 22. Versionsverwaltung der Dokumentations-Website

Auf der Website können aktuelle, in der Entwicklung befindliche und archivierte Dokumentationssätze veröffentlicht werden.

Stabile Dokumentation MUSS unter dauerhaften, versionierten URLs verfügbar bleiben.

Beispiel:

```text
/docs/1.0/
/docs/1.1/
/docs/latest/
/docs/development/
```

`latest` ist ein praktischer Alias und DARF NICHT als einzige Archivangabe verwendet werden.

Die Dokumentation einer stabilen Version DARF NICHT nachträglich so geändert werden, dass sich die normative Bedeutung ändert. Korrekturen werden in Form von Errata oder einer Patch-Version veröffentlicht.

## 23. Beispiele und Prüfvorrichtungen

Beispiele und Konformitäts-Fixtures MÜSSEN die Version von „OMI“ angeben, auf die sie abzielen.

Eine Testvorrichtung, die das erwartete normative Verhalten verändert, erfordert eine entsprechende Spezifikation oder eine Änderung der Testsuite-Version.

Beispiele dürfen NICHT als normativ betrachtet werden, wenn sie im Widerspruch zu normativem Text oder Schema stehen. Solche Widersprüche sind Fehler, die korrigiert werden müssen.

## 24. Release-Kandidaten und Vorabversionen

Vorab-Identifikatoren KÖNNEN verwendet werden:

```text
1.0.0-alpha.1
1.0.0-beta.2
1.0.0-rc.1
```

Sie bedeuten:

- **alpha:** unvollständige, explorative Implementierung oder Integration der Spezifikation;
- **Beta:** Zielversion mit vollständigem Funktionsumfang, bei der jedoch noch Probleme hinsichtlich der Überprüfung oder der Interoperabilität bestehen;
- **rc:** Release-Kandidat, der voraussichtlich zur endgültigen Version wird, sofern keine schwerwiegenden Fehler gefunden werden.

Vorabversionen DÜRFEN NICHT als stabile Versionen dargestellt werden.

Eine Vorabversion KANN Änderungen enthalten, die vor der endgültigen Veröffentlichung noch vorgenommen werden. Änderungen zwischen Release-Kandidaten SOLLTEN sich auf die Behebung von Fehlern und auf Korrekturen von Interoperabilitätsproblemen beschränken, die die Veröffentlichung verhindern.

## 25. Metadaten erstellen

Metadaten zum Build DÜRFEN einen Implementierungs-Build identifizieren, ohne die Kompatibilität zu beeinträchtigen:

```text
1.0.0+build.42
1.0.0+20260806.sha.abc1234
```

Metadaten zur Erstellung DÜRFEN die normative Auslegung NICHT verändern.

## 26. Veraltetes Feature

Die Kennzeichnung als veraltet bedeutet, dass eine Funktion oder Version zwar weiterhin anerkannt wird, jedoch nicht mehr für neue Projekte verwendet werden sollte.

Ein Hinweis auf die Veralterung MUSS folgende Angaben enthalten:

- das veraltete Element;
- die Version, in der sie als veraltet markiert wurde;
- der Grund;
- der empfohlene Ersatz;
- bekannte Aspekte bei der Migration;
- die früheste Version, in der eine Entfernung stattfinden kann.

Die bloße Veralterung allein reicht nicht aus, um einen kompatiblen Prozessor dazu zu veranlassen, das Einlesen bestehender Inhalte einzustellen.

## 27. Entfernung

Eine stabile Funktion wird nur im Rahmen einer MAJOR-Version entfernt, es sei denn, eine sofortige Entfernung ist erforderlich, um ein schwerwiegendes Sicherheits-, Rechts- oder Integritätsrisiko zu beheben.

Für eine Notfallentfernung ist Folgendes erforderlich:

- eine öffentliche Bekanntmachung;
- eine dokumentierte Begründung;
- Folgenanalyse;
- Leitfaden zur Konservierung;
- eine Alternative, sofern dies möglich ist;
- ein expliziter Ausnahmedatensatz.

## 28. Aufhebung

Eine ersetzte Fassung bleibt Teil des historischen Archivs.

Auf der Veröffentlichungsseite MÜSSEN folgende Angaben enthalten sein:

- die neue Fassung;
- ob eine Migration erforderlich ist;
- ob die alte Version weiterhin unterstützt wird;
- das Datum, an dem der Support endet, sofern festgelegt.

Artefakte mit Versionsnummern DÜRFEN NICHT gelöscht werden, nur weil sie durch neuere Versionen ersetzt wurden.

## 29. Support-Richtlinie

Vor der Version 1.0 von „OMI“ erfolgt der Support nach bestem Bemühen und wird für jede Version separat dokumentiert.

Nach der Veröffentlichung von „OMI“ 1.0 SOLLTE das Projekt Folgendes beibehalten:

- die aktuelle stabile MAJOR-Linie;
- mindestens einen dokumentierten Migrationspfad von der unmittelbar vorhergehenden stabilen MAJOR-Linie;
- Sicherheits- und Integritätshinweise für wesentlich betroffene, unterstützte Versionen;
- Archivierte Schemata und Dokumentation für alle stabilen Versionen.

In einem separaten Wartungsplan KÖNNEN genaue Wartungszeiträume festgelegt sein.

## 30. Änderungsprotokolle

Jede veröffentlichte Version MUSS ein Changelog enthalten.

Das Änderungsprotokoll MUSS unterscheiden zwischen:

- kompatibilitätsbrechende Änderungen;
- kompatible Ergänzungen;
- Korrekturen;
- Veraltete Funktionen;
- Umzüge;
- Sicherheitsänderungen;
- Migrationsanforderungen;
- Schemaänderungen;
- Änderungen rein redaktioneller Art.

Ein Eintrag im Changelog SOLLTE auf das entsprechende Issue, den Vorschlag, den Pull Request oder den Entscheidungsnachweis verweisen.

## 31. Migrationsunterlagen

Eine Version, die grundlegende Änderungen enthält, MUSS eine Migrationsanleitung enthalten.

Die Migrationsanleitung SOLLTE Folgendes enthalten:

- betroffene Strukturen und Verhaltensweisen;
- Vorher-Nachher-Beispiele;
- automatisierte Transformationsregeln;
- Einschränkungen;
- erwarteter Informationsverlust;
- Validierungsschritte;
- Rollback-Strategie;
- Behandlung von Erweiterungen;
- Herkunftsangaben.

## 32. Versionsaushandlung

Wenn Systeme „OMI“-Inhalte dynamisch austauschen, SOLLTEN sie die Funktionen aushandeln, anstatt die Unterstützung allein aufgrund der Produktnamen vorauszusetzen.

Die Verhandlungen können Folgendes umfassen:

- unterstützte Suite-Versionen;
- unterstützte Formatbereiche;
- Profile;
- Erweiterungen;
- Medientypen;
- Validierungsstufen;
- Lese-/Schreib-Asymmetrie.

Ein System MUSS sicher ausfallen, wenn keine kompatible Version vereinbart werden kann.

## 33. Versionsbereiche

Implementierungen KÖNNEN Versionsbereiche angeben.

Beispiele:

```text
>=1.0.0 <2.0.0
1.1.x
1.0.0–1.2.3
```

Eine Bereichsangabe bedeutet, dass die Implementierung für diesen Bereich konzipiert und getestet wurde. Sie DARF NICHT allein aus der Schema-Akzeptanz abgeleitet werden.

Bei Archiv-Metadaten werden genaue Versionen gegenüber Versionsbereichen bevorzugt.

## 34. Reproduzierbarkeit und Integrität

Veröffentlichte Release-Artefakte SOLLTEN kryptografische Hashes enthalten.

Eine stabile Version SOLLTE anhand der mit Tags versehenen Quelldateien und der dokumentierten Kompilieranweisungen reproduzierbar sein.

Tags, die für stabile Versionen verwendet werden, MÜSSEN unveränderlich sein.

Muss ein Artefakt aufgrund eines Fehlers bei der Veröffentlichung oder der Verpackung ersetzt werden, MUSS dem Ersatzartefakt eine eindeutige Artefaktrevision oder Release-Version zugewiesen werden, und der ursprüngliche Vorfall MUSS dokumentiert werden.

## 35. Git-Tags und -Branches

Zu den empfohlenen Tags gehören:

```text
omi-suite-v1.0.0
omi-spec-005-v1.1.0
schema-manuscript-v1.0.2
```

Entwicklungszweige und Pull-Anfragen sind keine Versionsveröffentlichungen.

Der Standard-Zweig spiegelt die aktuelle Entwicklungsstand wider und KANN von der neuesten stabilen Version abweichen.

## 36. Daten und Versionen

Veröffentlichungsdaten liefern zwar historischen Kontext, ersetzen jedoch keine semantischen Versionen.

Datumsbasierte Identifikatoren KÖNNEN in Metadaten und Snapshots enthalten sein, jedoch MUSS die normative Kompatibilität über die semantische Version kommuniziert werden.

## 37. Entscheidungsverfahren

Wenn unklar ist, um welche Version es sich bei der erforderlichen Versionserhöhung handelt, müssen die Redakteure Folgendes prüfen:

1. Führt die Änderung dazu, dass zuvor gültige Inhalte ungültig werden?
2. Ändert sich dadurch die bestehende normative Bedeutung?
3. Können ältere, konforme Implementierungen die neuen Inhalte sicher verarbeiten?
4. Ist dafür eine Migration erforderlich?
5. Wird dadurch eine neue erforderliche Funktion eingeführt?
6. Hat das Auswirkungen auf die Konformitätsergebnisse?
7. Verändert dies das von außen beobachtbare Verhalten von „API“?
8. Handelt es sich bei der Änderung lediglich um eine redaktionelle oder um eine korrigierende Änderung?

Wenn eine vernünftige, konforme Implementierung Inhalte beschädigen oder stillschweigend falsch interpretieren könnte, stellt die Änderung eine Kompatibilitätsverletzung dar und erfordert eine MAJOR-Nummernerhöhung oder – in der Phase vor Version 1.0 – eine MINOR-Nummernerhöhung mit ausdrücklicher Dokumentation der Kompatibilitätsverletzung.

## 38. Beispiele

### 38.1 Hinzufügen eines optionalen Tags für eine abstrakte Sprache

Änderung: Einem abstrakten Objekt werden optionale Metadaten vom Typ „`language`“ hinzugefügt.

Ergebnis nach 1.0: Geringfügig, vorausgesetzt, ältere Verbraucher können dies ignorieren oder beibehalten.

### 38.2 Einführung einer verbindlichen „ORCID“-Erklärung für jeden Autor

Änderung: Das bisher optionale „ORCID“ ist nun obligatorisch.

Auswirkung: ERHEBLICH, da bestehende Dokumente und Arbeitsabläufe ungültig werden.

### 38.3 Korrektur einer falsch geschriebenen Eigenschaft in einem Beispiel

Änderung: Im Beispiel wurde „`contributer`“ verwendet, während in der Spezifikation bereits „`contributor`“ vorgeschrieben war.

Ergebnis: PATCH.

### 38.4 Umbenennung von „`references`“ in „`bibliography`“

Änderung: Die serialisierte Eigenschaft wird umbenannt, und die alte Eigenschaft wird verworfen.

Ergebnis: MAJOR.

Wenn beide Eigenschaften während eines dokumentierten Übergangs beibehalten werden, kann die Einführung als „MINOR“ eingestuft werden, während die endgültige Entfernung weiterhin als „MAJOR“ gilt.

### 38.5 Hinzufügen einer neuen Zitationsbeziehung

Änderung: „`qualifies`“ wird einer offenen Registrierung hinzugefügt, deren Verbraucher unbekannte Werte tolerieren müssen.

Ergebnis: GERINGFÜGIG.

Wenn die Aufzählung geschlossen war und unbekannte Werte ungültig waren, ist für die Änderung möglicherweise MAJOR erforderlich.

### 38.6 Klärung der Reihenfolge der Anker-Auflösung

Änderung: Der Text wurde präzisiert, um ihn an das einzige Verhalten anzupassen, das durch den bestehenden Algorithmus und die Tests zulässig ist.

Ergebnis: PATCH.

Wenn es bei Implementierungen zwei vernünftige, miteinander unvereinbare Interpretationen gäbe, könnte die Wahl einer davon zu Fehlfunktionen führen und einen MAJOR-Change erfordern.

## 39. Mindestveröffentlichungsaufzeichnung

Jede „OMI“-Veröffentlichung MUSS Folgendes enthalten:

- Name der Komponente oder Suite;
- Version;
- Lebenszyklusstatus;
- Erscheinungsdatum;
- kanonische URL;
- Quell-Tag oder Commit;
- Änderungsprotokoll;
- Kompatibilitätserklärung;
- Migrationserklärung;
- gegebenenfalls Artefakt-Hashes;
- Informationen zur Ablösung;
- bekannte Probleme.

## 40. Änderungen der Richtlinien

Diese Versionsrichtlinie unterliegt selbst einer Versionsverwaltung.

Eine Änderung, die die Bedeutung bestehender Verpflichtungen hinsichtlich öffentlicher Versionen verändert, erfordert eine sorgfältige Prüfung und DARF die bereits für stabile Versionen gegebenen Garantien NICHT rückwirkend schwächen.

Klarstellungen der Richtlinien können Änderungen auf Patch-Ebene sein. Neue kompatible Governance-Verfahren können geringfügige Änderungen darstellen. Grundlegende Änderungen an Kompatibilitätsverpflichtungen erfordern eine neue Hauptversion der Richtlinie.

## 41. Zusammenfassung

OMI nutzt semantische Versionsnummern, um die Kompatibilität zwischen Spezifikationen, Schemata, Formaten, APIs, Implementierungen, Profilen und Übersetzungen zu verdeutlichen.

Die Leitprinzipien lauten:

- Die Versionen sind eindeutig und maschinenlesbar;
- Veröffentlichte, versionierte Artefakte sind unveränderlich;
- Kompatibilitätsbrüche sind erkennbar und werden durch Migrationshinweise begleitet;
- Schemas und Dokumente geben genau an, welche Regeln sie verwenden;
- Produktversionen sind nicht mit der Einhaltung der Spezifikationen gleichzusetzen;
- Stabile Versionen bleiben archiviert und können zitiert werden;
- Kompatibilitätsangaben müssen präzise und überprüfbar sein;
- Übersetzungen geben ihre normative Ausgangsversion an;
- Das Suite-Manifest ordnet unabhängig voneinander versionierte Komponenten an.

Diese Regeln ermöglichen es „OMI“, sich weiterzuentwickeln und gleichzeitig wissenschaftliche Dokumente, das Vertrauen in die Umsetzung sowie die langfristige Interoperabilität zu bewahren.

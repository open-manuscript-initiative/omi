---
title: Lebenszyklus einer Spezifikation
sidebar_position: 4
---

# Open Manuscript Initiative Lebenszyklus einer Spezifikation

**Status:** Entwurf  
**Version:** 0.1  
**Dokumenttyp:** Leitlinie zur Unternehmensführung  
**Normative Sprache:** Englisch

## 1. Zweck

Diese Richtlinie legt fest, wie Spezifikationen für das „Open Manuscript Initiative“ vorgeschlagen, entwickelt, geprüft, implementiert, stabilisiert, als veraltet gekennzeichnet und abgelöst werden.

Der Lebenszyklus dient dazu, zu verhindern, dass unausgereifte Entwürfe fälschlicherweise als fester Standard angesehen werden, und ermöglicht es gleichzeitig, frühe Ideen offen zu diskutieren und zu erproben.

Jedes als „OMI“-Spezifikation registrierte Dokument MUSS einen Lebenszyklusstatus angeben. Statuswechsel MÜSSEN in der Versionskontrolle erfasst werden und SOLLTEN mit einer öffentlichen Begründung versehen sein.

## 2. Überblick über den Lebenszyklus

```text
Exploratory
    ↓
Draft
    ↓
Review Candidate
    ↓
Implementation Candidate
    ↓
Stable
    ↓
Deprecated
    ↓
Superseded
```

Eine Spezifikation muss nicht alle Phasen durchlaufen, wenn sie vor der Veröffentlichung zurückgezogen wird. Ein Dokument KANN in einen früheren Zustand zurückversetzt werden, wenn wesentliche ungelöste Probleme entdeckt werden.

## 3. Normative Terminologie

Die Schlüsselwörter **MUSS**, **DARF NICHT**, **ERFORDERLICH**, **SOLL**, **SOLL NICHT**, **SOLLTE**, **SOLLTE NICHT**, **EMPFOHLEN**, **KANN** und **OPTIONAL** drücken in Großbuchstaben geschrieben die jeweiligen Anforderungsstufen aus.

Normative Anforderungen SOLLTEN, soweit dies praktikabel ist, überprüfbar sein.

## 4. Erforderliche Metadaten zu den Dokumenten

Jede registrierte Spezifikation MUSS folgende Angaben enthalten:

- permanente Spezifikationskennung;
- Titel;
- Version;
- Lebenszyklusstatus;
- normative oder informative Klassifizierung;
- Redakteure oder verantwortliche Betreuer;
- Geltungsbereich;
- Abhängigkeiten;
- zugehörige Spezifikationen;
- Stand der Umsetzung;
- Änderungshistorie oder Versionsangabe;
- letzte inhaltliche Aktualisierung.

Spezifikationen, die serialisierbare Daten definieren, SOLLTEN auch die entsprechenden Schemata, Beispiele und Konformitätstests angeben.

## 5. Explorativ

### 5.1 Zweck

Die Explorationsphase dient der Erarbeitung erster Konzepte, Problemformulierungen, konkurrierender Entwürfe und Forschungsfragen.

Ein Explorationsdokument ist keine „OMI“-Spezifikation und DARF NICHT als Implementierungsanforderung dargestellt werden.

### 5.2 Zulassungskriterien

Ein Dokument kann diesen Status erreichen, wenn:

- zeigt ein Problem auf, das für OMI relevant ist;
- erläutert, warum die bestehenden Spezifikationen unzureichend sind;
- schlägt mindestens eine mögliche Richtung vor;
- zeigt wichtige offene Fragen auf.

### 5.3 Erwartungen

Ein Sondierungsdokument KANN:

- unvollständige Fachbegriffe enthalten;
- alternative Modelle vorstellen;
- Schemas oder Implementierungsdetails weglassen;
- Änderung ohne Kompatibilitätsgarantien.

Es SOLLTE klar zwischen feststehenden Anforderungen und offenen Fragen unterscheiden.

### 5.4 Abschlusskriterien

Für den Aufstieg in die Draft-Klasse sind folgende Voraussetzungen erforderlich:

- ein festgelegter Geltungsbereich;
- eine bevorzugte architektonische Ausrichtung;
- ursprüngliche Terminologie;
- ermittelte Abhängigkeiten;
- Belege dafür, dass der Vorschlag in die Spezifikationssuite „OMI“ gehört.

Ein Sondierungsvorschlag KANN stattdessen als abgelehnt, vertagt oder außerhalb des Anwendungsbereichs geschlossen werden.

## 6. Entwurf

### 6.1 Zweck

Der Entwurf ist die wichtigste Phase bei der Erstellung einer Spezifikation. Ein Entwurf beschreibt das beabsichtigte Modell so detailliert, dass eine technische Überprüfung und eine experimentelle Umsetzung möglich sind.

Entwürfe sind vorläufig und KÖNNEN sich in einer Weise ändern, die zu Inkompatibilitäten führt.

### 6.2 Zulassungskriterien

Ein Entwurf MUSS Folgendes enthalten:

- eine dauerhaft oder vorläufig reservierte Kennung „OMI-SPEC“;
- Zweck und Geltungsbereich;
- wichtigste Konzepte und Datenstrukturen;
- Beziehungen zu anderen „OMI“-Spezifikationen;
- ausdrücklich ungelöste Fragen;
- ein erstes Konformitätsmodell.

### 6.3 Erwartungen

Ein Entwurf SOLLTE Folgendes enthalten:

- Beispiele;
- Validierungsregeln;
- Leitlinien zur Serialisierung, sofern zutreffend;
- Sicherheits- und Datenschutzaspekte;
- Überlegungen zur Barrierefreiheit, soweit zutreffend;
- Auswirkungen auf die Migration;
- bekannte Alternativen und verworfene Ansätze.

Experimentelle Implementierungen DÜRFEN die Unterstützung eines Entwurfs nur dann angeben, wenn sie die genaue Spezifikationsversion oder den genauen Commit angeben.

### 6.4 Abschlusskriterien

Für die Beförderung zum Prüfungskandidaten sind folgende Voraussetzungen erforderlich:

- keine offenen Fragen, die eine kohärente Umsetzung verhindern;
- einheitliche Terminologie innerhalb des Dokuments;
- Abhängigkeiten überprüft;
- intern konsistente normative Anforderungen;
- typische Beispiele;
- eine dokumentierte Liste bekannter Einschränkungen;
- redaktionelle Überprüfung hinsichtlich Struktur und Verständlichkeit.

## 7. Bewerber prüfen

### 7.1 Zweck

Ein Prüfling gilt als ausreichend vollständig, um einer gezielten öffentlichen und fachlichen Begutachtung unterzogen zu werden.

Ziel dieser Phase ist es, architektonische Mängel, Interoperabilitätsprobleme, unklare Anforderungen und fehlende Anwendungsfälle aufzudecken, bevor Implementierungen als Beweis für Stabilität gewertet werden.

### 7.2 Zulassungskriterien

Ein Bewerber für die Prüfung MUSS:

- alle vorläufigen Ausstiegskriterien erfüllen;
- einen Überprüfungszeitraum oder einen Überprüfungszeitpunkt festlegen;
- die Fragen veröffentlichen, zu denen ausdrücklich um Rückmeldung gebeten wird;
- einen Umsetzungs- und Testplan enthalten;
- die zu erwartenden Auswirkungen auf die Abwärtskompatibilität ermitteln.

### 7.3 Anforderungen an die Überprüfung

Die Überprüfung SOLLTE Sichtweisen von mehr als einer relevanten Gruppe berücksichtigen, wie zum Beispiel:

- Autoren und Forscher;
- Redakteure und Verleger;
- Bibliothekare und Repositorien;
- Softwareentwickler;
- Barrierefreiheitsexperten;
- Konservierungsfachleute;
- Experten für Metadaten und Standards.

Anmerkungen aus der inhaltlichen Begutachtung MÜSSEN geklärt, als bekannte Einschränkungen akzeptiert oder unter Angabe von Gründen ausdrücklich zurückgestellt werden.

### 7.4 Abschlusskriterien

Für die Beförderung zum Implementierungskandidaten sind folgende Voraussetzungen erforderlich:

- Abschluss oder dokumentierte Klärung wesentlicher Prüfungsfragen;
- ein stabiles Konformitätsmodell;
- maschinenlesbare Schemata, sofern dies in der Spezifikation vorgeschrieben ist;
- Konformitätsbeispiele oder Prüfvorrichtungen;
- kein bekannter Widerspruch zu einer anderen „OMI“-Spezifikation;
- Genehmigung im Rahmen des dokumentierten Entscheidungsprozesses des Projekts.

Ein Prüfungskandidat MUSS in den Entwurfsstatus zurückversetzt werden, wenn die Prüfung zu wesentlichen architektonischen Änderungen führt.

## 8. Implementierungskandidat

### 8.1 Zweck

Ein Implementierungskandidat prüft, ob die Spezifikation eigenständig und interoperabel umgesetzt werden kann.

Es wird davon ausgegangen, dass das Design stabil ist, doch Änderungen bleiben möglich, wenn bei der Umsetzung Mängel zutage treten.

### 8.2 Zulassungskriterien

Ein Implementierungskandidat MUSS Folgendes bereitstellen:

- die normativen Anforderungen vollständig erfüllen;
- Leitfaden zur Umsetzung;
- Schemas oder formale Definitionen, sofern zutreffend;
- Konformitätskriterien;
- testbare Beispiele;
- Versions- und Kompatibilitätsregeln;
- ein öffentliches Verfahren zur Einholung von Rückmeldungen zur Umsetzung.

### 8.3 Nachweise zur Umsetzung

Vor der Einstufung als „Stable“ SOLLTE die Spezifikation mindestens zwei sinnvoll voneinander unabhängige Implementierungen für ihr zentrales, interoperables Verhalten aufweisen.

Falls zwei Implementierungen noch nicht praktikabel sind, KANN das Projekt eine Implementierung zusammen mit einem unabhängigen Validator, Konverter, einer Testsuite oder einem Kompatibilitätsnachweis akzeptieren. Die Ausnahme und ihre Begründung MÜSSEN dokumentiert werden.

Die Nachweise zur Umsetzung SOLLTEN Folgendes belegen:

- erfolgreiches Parsen oder Verarbeiten gemeinsam genutzter Fixtures;
- einheitliche Auslegung der erforderlichen Semantik;
- bei Bedarf Rundlaufverhalten;
- Fehlerbehandlung und Validierung;
- Kompatibilität zwischen unabhängig voneinander entwickelten Komponenten.

Die „Open Manuscript Studio“ kann zwar als Referenzimplementierung dienen, darf jedoch nicht die einzige Quelle für normatives Verhalten sein.

### 8.4 Abschlusskriterien

Für den Aufstieg in die „Stable“-Klasse sind folgende Voraussetzungen erforderlich:

- ausreichende Belege für die Umsetzung;
- das Bestehen von Konformitätstests, sofern vorhanden;
- Behebung von Mängeln, die die Umsetzung behindern;
- dokumentierte Kompatibilitäts- und Migrationsregeln;
- eine dem Umfang der Spezifikation angemessene Sicherheits- und Datenschutzprüfung;
- Genehmigung im Rahmen des dokumentierten Entscheidungsprozesses des Projekts;
- Veröffentlichung einer stabilen, versionierten Version.

Eine wesentliche Korrektur am Entwurf erfordert die Rückkehr zum Status „Entwurf“ oder „Prüfkandidat“. Bei kleineren Korrekturen KANN der Status „Implementierungskandidat“ mit einer neuen, vorläufigen Version beibehalten werden.

## 9. Stabil

### 9.1 Bedeutung

„Stable“ bedeutet, dass die Spezifikation für die Umsetzung in der Produktion und als langfristige externe Referenz geeignet ist.

„Stabil“ bedeutet nicht „unveränderlich“. Es bedeutet, dass Kompatibilität, vorhersehbare Versionsverwaltung und Migrationsunterstützung erforderlich sind.

### 9.2 Anforderungen

Eine „Stable“-Spezifikation MUSS Folgendes enthalten:

- eine permanente „OMI“-SPEC-Kennung;
- eine stabile Versionsnummer;
- vollständiger normativer Text;
- Konformitätsanforderungen;
- veröffentlichte Schemata und Beispiele, soweit zutreffend;
- dokumentierte Abhängigkeiten;
- Nachweise zur Umsetzung;
- ein Änderungsprotokoll;
- ein gepflegter kanonischer Veröffentlichungsort.

### 9.3 Änderungskontrolle

Änderungen an einer „Stable“-Spezifikation werden wie folgt klassifiziert:

- **Redaktionelle Korrektur:** Formulierungen, Formatierungen, Links oder Beispiele, die das normative Verhalten nicht verändern.
- **Kompatible Klarstellung:** beseitigt Mehrdeutigkeiten, ohne konforme Implementierungen ungültig zu machen.
- **Kompatible Erweiterung:** Fügt optionales oder abwärtskompatibles Verhalten hinzu.
- **Breaking Change:** Ändert die erforderliche Semantik oder macht zuvor konformes Verhalten ungültig.

Redaktionelle Korrekturen und entsprechende Klarstellungen KÖNNEN in Patch-Veröffentlichungen enthalten sein.

Kompatible Erweiterungen erfordern in der Regel eine Minor-Version.

Kompatibilitätsbrechende Änderungen erfordern eine neue Hauptversion und MÜSSEN Anleitungen zur Migration enthalten. Eine kompatibilitätsbrechende Neugestaltung KANN als separater Entwurf entwickelt werden, solange die aktuelle Hauptversion weiterhin als „Stable“ gilt.

### 9.4 Errata

Bestätigte Fehler in den „Stable“-Spezifikationen MÜSSEN öffentlich erfasst werden.

Ein Erratum MUSS Folgendes enthalten:

- betroffene Versionen;
- ob es sich um einen redaktionellen oder einen normativen Fehler handelt;
- voraussichtliche Auswirkungen der Umsetzung;
- Korrekturstatus;
- Version, in der die Korrektur berücksichtigt wurde.

## 10. Veraltet

### 10.1 Bedeutung

„Veraltet“ bedeutet, dass eine Spezifikation weiterhin verfügbar ist und noch implementiert werden kann, neue Implementierungen jedoch einem Nachfolger oder einer Alternative den Vorzug geben SOLLTEN.

Eine Veralterungsmarkierung führt nicht dazu, dass die Spezifikation entfernt oder ihr historischer Inhalt geändert wird.

### 10.2 Anforderungen an die Auslaufphase

Ein Hinweis auf die Abkündigung MUSS folgende Angaben enthalten:

- der Grund für die Veralterung;
- die empfohlene Ersatzvariante, sofern vorhanden;
- betroffene Versionen;
- Leitfaden zur Migration;
- der geplante Förderzeitraum, sofern bekannt;
- unabhängig davon, ob es dabei um Fragen der Sicherheit, der Interoperabilität oder der Erhaltung geht.

Veraltete Schemata, Namensräume und kanonische URLs SOLLTEN im Interesse der langfristigen Aufbewahrung weiterhin auflösbar bleiben.

## 11. Aufgehoben

### 11.1 Bedeutung

„Ersetzt“ bedeutet, dass eine andere Spezifikation oder Hauptversion das Dokument für neue Implementierungen offiziell ersetzt.

Eine ersetzte Spezifikation bleibt Teil der dauerhaften Dokumentation.

### 11.2 Anforderungen

Das Dokument MUSS folgende Angaben enthalten:

- die ersetzende Spezifikation und Version;
- das Datum des Inkrafttretens der Ablösung oder der Freigabe;
- Leitfaden zur Migration;
- Hinweise zur Kompatibilität;
- Gibt es noch Anwendungsfälle für die ältere Spezifikation?

In dem Dokument, das an die Stelle des anderen tritt, MUSS angegeben werden, welches Dokument es ersetzt.

## 12. Weitere Endpunkte

Nicht jeder Vorschlag wird zu „Stable“. In den Governance-Protokollen KÖNNEN Arbeiten auch wie folgt klassifiziert werden:

### Abgelehnt

Der Vorschlag wurde geprüft, aber nicht angenommen. In der Beschlussprotokollierung SOLLTE erläutert werden, warum.

### Zurückgezogen

Der Autor oder Herausgeber hat die aktive Weiterentwicklung vor der Einführung eingestellt.

### Verschoben

Die Arbeit ist potenziell wertvoll, wird aber bewusst aufgeschoben.

### Zusammengeführt

Der Inhalt des Vorschlags wurde in eine andere Spezifikation übernommen und erfordert daher kein eigenständiges Dokument mehr.

Diese Ergebnisse stellen keine Reifegrade dar und gehören nicht in die Abfolge des Lebenszyklus der Primärspezifikation.

## 13. Statusübergänge

### 13.1 Antrag auf Beförderung

Ein Antrag auf Verabschiedung einer Spezifikation SOLLTE Folgendes enthalten:

- aktueller und geplanter Status;
- Nachweis, dass die Abschlusskriterien erfüllt sind;
- offene Fragen;
- nachweisbare Umsetzung, sofern erforderlich;
- Auswirkungen auf die Kompatibilität;
- Links zu einschlägigen Urteilen und Entscheidungen.

### 13.2 Beschlussprotokoll

Jede Beförderung zum „Review Candidate“, „Implementation Candidate“ oder „Stable“ MUSS mit einem öffentlichen Entscheidungsprotokoll dokumentiert werden.

Der Datensatz SOLLTE folgende Angaben enthalten:

- Entscheidungsdatum;
- Teilnehmer oder Genehmigungsbehörde;
- Beweismittel geprüft;
- Einwände und deren Klärung;
- Bedingungen, die mit der Beförderung verbunden sind.

### 13.3 Regression

Eine Spezifikation KANN zu einem früheren Status zurückkehren, wenn:

- Es wird ein architektonischer Widerspruch entdeckt;
- Die Konformität lässt sich nicht durchgängig umsetzen;
- eine Abhängigkeit wird in einer Weise geändert, die zu Inkompatibilitäten führt;
- Sicherheits- oder Datenschutzmängel erfordern eine Neugestaltung;
- Der Umfang ändert sich erheblich.

Regressionen MÜSSEN dokumentiert werden und DÜRFEN den bisherigen Versionsverlauf NICHT überschreiben.

## 14. Versionen und Lebenszyklusstatus

Version und Lebenszyklusstatus hängen zwar zusammen, sind jedoch zwei unterschiedliche Dinge.

Beispiele:

- `0.2 Draft`
- `0.8 Review Candidate`
- `0.9 Implementation Candidate`
- `1.0 Stable`
- `1.1 Stable`
- `1.0 Deprecated`

Versionen vor 1.0 implizieren nicht automatisch einen bestimmten Status. In jedem Dokument MÜSSEN beide Werte ausdrücklich angegeben werden.

## 15. Konformitätserklärungen

Implementierungen, die Konformität beanspruchen, MÜSSEN Folgendes angeben:

- die Kennung „OMI-SPEC“;
- die genaue Version;
- etwaige implementierte optionale Profile;
- bekannte Abweichungen;
- entsprechende Erweiterungs-Namespaces oder Funktionen.

Implementierungen DÜRFEN KEINE uneingeschränkte Konformität mit einem explorativen Dokument beanspruchen.

Die Konformität mit „Draft“- („Entwurf“), „Review Candidate“- („Prüfentwurf“) oder „Implementation Candidate“- („Implementierungsentwurf“) Versionen MUSS als experimentell oder vorläufig stabil beschrieben werden.

## 16. Abhängigkeiten

Eine Spezifikation DARF NICHT den Status „Stable“ erhalten, wenn sie normativ von einem noch nicht abgeschlossenen explorativen Dokument abhängt.

Eine „Stable“-Spezifikation KANN von folgenden Faktoren abhängen:

- eine weitere Stable-Spezifikation;
- ein externes Normdokument mit einer bestimmten Versionsnummer;
- Ein „Implementation Candidate“ nur dann, wenn der Anwendungsbereich der Abhängigkeit eng gefasst ist und das Risiko dokumentiert ist.

Wenn eine Abhängigkeit veraltet ist oder durch eine andere ersetzt wurde, MÜSSEN die betroffenen „OMI“-Spezifikationen überprüft werden.

## 17. Übersetzungsrichtlinien

Die maßgebliche englische Fassung ist für den Lebenszyklusstatus maßgebend.

Offizielle Übersetzungen SOLLTEN Folgendes enthalten:

- den Status und die Version der englischen Quelle;
- das Datum der Überarbeitung der Übersetzung;
- ob die Übersetzung vollständig ist;
- ein Hinweis darauf, dass im Falle von Widersprüchen die englische Fassung maßgebend ist.

Eine Übersetzung DARF NICHT als „Stable“ gekennzeichnet werden, wenn sie nicht mit der aktuell als „Stable“ gekennzeichneten englischen Quelle übereinstimmt.

## 18. Archivierungsvorschriften

Versionen der Kategorien „Published Review Candidate“, „Implementation Candidate“, „Stable“, „Deprecated“ und „Superseded“ SOLLTEN dauerhaft zugänglich bleiben.

Das Projekt SOLLTE Folgendes bewahren:

- unveränderliche Release-Tags;
- versionsverwaltete Dokumenten-Snapshots;
- Schemas und Beispiele zu den einzelnen Versionen;
- Entscheidungsprotokolle;
- Errata;
- Migrationsanleitungen.

Kanonische URLs SOLLTEN unverändert bleiben oder auf eine Archiv-Startseite weiterleiten.

## 19. Notfallkorrekturen

Ein schwerwiegender Mangel in Bezug auf Sicherheit, Datenschutz, Datenverlust oder Interoperabilität KANN eine beschleunigte Behebung erfordern.

Die Notfallmaßnahmen MÜSSEN weiterhin Folgendes gewährleisten:

- eine öffentliche Bekanntmachung oder Mitteilung, sobald eine Offenlegung unbedenklich ist;
- Informationen zur betroffenen Version;
- korrigierter normativer Text oder Schema;
- Leitfaden zur Umsetzung;
- ein Protokoll der dauerhaften Änderungen.

Sicherheitsrelevante Details KÖNNEN vorübergehend zurückgehalten werden, doch die endgültige Entscheidung SOLLTE öffentlich dokumentiert werden.

## 20. Aufgaben

### Spezifikationseditoren

Die Redakteure sind verantwortlich für:

- Wahrung der Kohärenz des normativen Textes;
- Probleme und Entscheidungen nachverfolgen;
- Erstellung von Nachweisen für Statusübergänge;
- Koordinierungsschemata, Beispiele und Tests;
- Aufbewahrung des Änderungsverlaufs.

### Umsetzer

Den Anwendern wird empfohlen:

- mehrdeutige oder widersprüchliche Anforderungen melden;
- Erfahrungen mit der Umsetzung veröffentlichen;
- interoperable Testfälle und Tests beisteuern;
- Vermeiden Sie es, das Verhalten der Referenzimplementierung als normativ zu betrachten, wenn die Spezifikation davon abweicht.

### Projektsteuerung

Der Steuerungsprozess des Projekts ist verantwortlich für:

- Genehmigung von Übergängen in fortgeschrittene Lebenszyklusphasen;
- Schutz permanenter Identifikatoren;
- Gewährleistung einer vielfältigen Begutachtung;
- Verhinderung inkompatibler, unbemerkt vorgenommener Änderungen;
- die Pflege des kanonischen Registers.

## 21. Mindestanforderungen nach Status

| Anforderung | Explorativ | Entwurf | Zur Überprüfung vorgesehen | Zur Umsetzung vorgesehen | Stabil |
|---|:---:|:---:|:---:|:---:|:---:|
| Problemstellung | Erforderlich | Erforderlich | Erforderlich | Erforderlich | Erforderlich |
| Festgelegter Geltungsbereich | Empfohlen | Erforderlich | Erforderlich | Erforderlich | Erforderlich |
| Permanente oder reservierte Kennung | Optional | Erforderlich | Erforderlich | Erforderlich | Erforderlich |
| Normative Anforderungen | Optional | Teilweise | Vollständig | Vollständig | Vollständig |
| Beispiele | Optional | Empfohlen | Erforderlich | Erforderlich | Erforderlich |
| Schema/formales Modell (sofern zutreffend) | Optional | Empfohlen | Erforderlich | Erforderlich | Erforderlich |
| Öffentliche Überprüfung | Optional | Empfohlen | Erforderlich | Erforderlich | Abgeschlossen |
| Nachweis der Umsetzung | Nicht erforderlich | Optional | Geplant | Erforderlich | Erforderlich |
| Konformitätstests | Nicht erforderlich | Optional | Geplant | Gegebenenfalls erforderlich | Wird gepflegt |
| Kompatibilitätsrichtlinie | Nicht erforderlich | Anfänglich | Erforderlich | Erforderlich | Erforderlich |
| Konformitätserklärung zur Produktion | Verboten | Experimentell | Experimentell | Vorabversion | Zulässig |

## 22. Adoption

Diese Richtlinie tritt in Kraft, sobald sie im Rahmen des Governance-Prozesses der „Open Manuscript Initiative“ angenommen wurde.

Bestehenden Dokumenten SOLLTE im Rahmen des Dokumentations-Refactoring-Programms ein korrekter Lebenszyklusstatus zugewiesen werden. Kein bestehendes Dokument gilt allein aufgrund der Tatsache, dass es vor Inkrafttreten dieser Richtlinie erstellt wurde, als „stabil“.

## 23. Zusammenfassung

Der Lebenszyklus der „OMI“-Spezifikation umfasst die Phasen der Erkundung, der Erstellung der Spezifikation, der Überprüfung, der Implementierungsprüfung, der Festlegung als stabiler Standard und der Auslaufphase.

Ziel ist es, jedem Reifegrad-Anspruch Aussagekraft zu verleihen, den Anwendern vorhersehbare Erwartungen zu bieten und eine transparente technische Dokumentation zu gewährleisten, während sich „OMI“ zu einem offenen Standard für wissenschaftliches Publizieren entwickelt.

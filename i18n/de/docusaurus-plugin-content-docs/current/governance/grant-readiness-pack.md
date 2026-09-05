---
title: Paket zur Vorbereitung auf Fördermittel
sidebar_label: Paket zur Vorbereitung auf Fördermittel
description: Wiederverwendbare Unterlagen zu Projekten, Auswirkungen, Konsortien und Arbeitspaketen für Förderanträge im Zusammenhang mit dem Programm „Open Manuscript Initiative“.
---

# OMI Paket zur Vorbereitung auf Fördermittel

Dieses Dokument enthält wiederverwendbare Vorlagen für die Ausarbeitung von Vorschlägen in den Bereichen Forschung, Innovation und Infrastruktur im Rahmen des Programms „Open Manuscript Initiative“ (OMI). Es dient als Ausgangspunkt für Konsortialgespräche und die Ausarbeitung von Vorschlägen; programmspezifische Förderkriterien, Begrifflichkeiten, TRL-Anforderungen, Budgets und rechtliche Verpflichtungen müssen stets anhand der jeweiligen Ausschreibung überprüft werden.

## 1. Projektzusammenfassung

**Open Manuscript Initiative (OMI)** ist eine Open-Source-Initiative für die interoperable Erstellung, Begutachtung, Bearbeitung und Veröffentlichung wissenschaftlicher Texte. Ihr zentrales Ziel ist es, das wissenschaftliche Manuskript von proprietären Anwendungs- und Produktionsformaten zu trennen, damit strukturierte wissenschaftliche Inhalte ohne wiederholte manuelle Neugestaltung zwischen Autorenwerkzeugen, Peer-Review-Systemen, Veröffentlichungsplattformen und Arbeitsabläufen zur Langzeitarchivierung übertragen werden können.

Die Initiative verbindet offene Spezifikationen mit einer Implementierungsumgebung, **Open Manuscript Studio**, die für die Nutzung im Browser, auf dem Desktop und auf Mobilgeräten konzipiert ist. Das Studio wird als praktischer Demonstrator des Dokumentmodells und des Interoperabilitätsansatzes von „OMI“ entwickelt, einschließlich strukturierter Manuskripte, Metadaten, Anmerkungen, Referenzen, Publikationsstile, Verlagsprofile, Peer-Review, mehrsprachiger Arbeitsabläufe und Integrationen in Publikationsplattformen.

**Kurze Beschreibung des Vorschlags:**

> OMI entwickelt eine offene, interoperable Infrastruktur für wissenschaftliche Manuskripte über den gesamten Lebenszyklus von der Erstellung bis zur Veröffentlichung. Sie kombiniert ein anwendungsunabhängiges Modell für wissenschaftliche Dokumente mit einem plattformübergreifenden Open-Source-Studio sowie Integrationsschnittstellen für Zeitschriften-, Monografie-, Identitäts-, Metadaten- und Forschungsinformationssysteme.

## 2. Problemstellung

Wissenschaftliche Manuskripte durchlaufen häufig voneinander getrennte Systeme und proprietäre Formate. Autoren schreiben in einer Umgebung, reichen ihre Texte in einer anderen ein, Gutachter kommentieren eine weitere Darstellung, Lektoren rekonstruieren Struktur und Metadaten, und Verlage wandeln dasselbe geistige Werk für die Produktion und Verbreitung erneut um.

Diese Zersplitterung verursacht vermeidbare Kosten und Risiken:

- wiederholte Konvertierung und manuelle Umstrukturierung;
- Verlust oder Beeinträchtigung semantischer Informationen bei Formatwechseln;
- Anbieter- und Anwendungsabhängigkeit;
- doppelte Metadaten-Einträge;
- mangelnde Interoperabilität zwischen Autoren-, Begutachtungs- und Publikationssystemen;
- Hindernisse für eine mehrsprachige und barrierefreie wissenschaftliche Kommunikation;
- Schwierigkeiten bei der Beibehaltung von Anmerkungen, Verweisen und strukturierten Beziehungen;
- Hohe Integrationskosten für Fachzeitschriften, Verlage und Forschungseinrichtungen.

OMI Dies wird auf der Ebene des Manuskripts umgesetzt: **Einmal strukturieren, im gesamten wissenschaftlichen Arbeitsablauf wiederverwenden**.

## 3. Lösungsvorschlag

OMI besteht aus vier sich ergänzenden Schichten:

1. **Offene wissenschaftliche Modelle und Spezifikationen** für Dokumente, Verweise, Anmerkungen, Metadaten und zugehörige wissenschaftliche Objekte.
2. **Open Manuscript Studio**, eine Referenzimplementierung zum Erstellen, Bearbeiten, Begutachten und Veröffentlichen strukturierter Manuskripte.
3. **Interoperabilitätsprofile und Schnittstellen** für Publikations- und Forschungsinfrastrukturen, einschließlich OJS/OMP-orientierter Arbeitsabläufe und Integrationen mit persistenten Identitäten.
4. **Wiederverwendbare Publikations- und institutionelle Arbeitsabläufe**, einschließlich Publikationsstile, Verlagsprofile, Export, Verwaltung und plattformübergreifende Bereitstellung.

Das Projekt beschränkt sich bewusst nicht darauf, ein Textverarbeitungsprogramm zu ersetzen. Sein Wert für die Forschungsinfrastruktur liegt darin, ein portables wissenschaftliches Objekt über organisatorische und technische Grenzen hinweg zu bewahren.

## 4. Aktuelle Fälligkeit und Nachweise

OMI verfügt bereits über funktionierende Software und eine öffentlich zugängliche technische Dokumentation. Die aktuellen Implementierungsarbeiten umfassen:

- browserbasiertes Studio;
- Desktop-Verpackung;
- Ablauf bei der Entwicklung einer Android-Anwendung;
- Die Integration mit „Dateien“ sowie das native iOS-/iPadOS-Ziel wurden überprüft und funktionieren einwandfrei;
- strukturierte Manuskriptbearbeitung;
- Bearbeitung mehrerer Dokumente und Dokumentenstruktur;
- Optimierter Import umfangreicher Manuskripte aus „DOCX“;
- generierte Dokumentenlisten und Indizes;
- wiederverwendbare Publikationsstile und Herausgeberprofile;
- Adobe InDesignIDML-Stilsatz-Import;
- stilbasierte PDF, HTML und CSS export;
- lokale und cloudbasierte Speicher-Workflows;
- Infrastruktur für Benutzerkonten, Passwortwiederherstellung und föderierte Anmeldung;
- Arbeitsabläufe für doppelblinde Begutachtung;
- OJS/ Arbeiten zur Integration von „OMP“;
- ORCID-orientierte Identitäts-/Signatur-Workflows;
- Rechtschreibung, Grammatik, Übersetzung und die Integration von Agenten;
- Institutionsprofile und Verwaltungskomponenten;
- Infrastruktur für eine mehrsprachige Benutzeroberfläche.

### Reifegrad-Erklärung

OMI sollte derzeit als **funktionierender Open-Source-Demonstrator im Alpha-/Beta-Stadium** präsentiert werden, nicht als ausgereifte Forschungsinfrastruktur für den produktiven Einsatz. Ein formeller Technologie-Reifegrad (TRL) sollte nur im Rahmen eines Förderprogramms zugewiesen werden, dessen TRL-Definitionen und Nachweisanforderungen überprüft wurden.

Diese Unterscheidung ist bei Projektvorschlägen hilfreich: „OMI“ ist für Pilotprojekte, Integrationsversuche und Validierung bereits ausreichend umgesetzt, während umfangreiche Forschungsarbeiten, die Robustheitssteigerung, die Standardisierung und die institutionelle Einführung weiterhin für eine geförderte Entwicklung geeignet sind.

## 5. Forschung und Innovation

Mögliche Forschungs- und Innovationsfragen sind unter anderem:

- Wie kann ein wissenschaftliches Manuskript seine semantische Stabilität bewahren, während es verschiedene Autoren- und Publikationsumgebungen durchläuft?
- Welches interoperable Mindestmodell kann wissenschaftliche Strukturen abbilden, ohne den Autoren verlagsspezifische Produktionssemantiken aufzuzwingen?
- Wie können Anmerkungen, Überprüfungskommentare und Herkunftsdaten den Hin- und Rücktransport zwischen unabhängigen Systemen überstehen?
- Wie können persistente Identifikatoren und Forschungsmetadaten zu festen Bestandteilen des Schreibprozesses werden, anstatt erst nach der Veröffentlichung hinzugefügt zu werden?
- Wie können mehrsprachige wissenschaftliche Arbeitsabläufe eine gemeinsame Struktur aufweisen und gleichzeitig sprachspezifische Metadaten und Darstellungsformen beibehalten?
- Wie lässt sich die Formatierung einer Veröffentlichung von der Semantik des Manuskripts trennen und gleichzeitig eine professionelle Produktion gewährleisten?
- Wie kann eine offene wissenschaftliche Infrastruktur die Abhängigkeit von Anbietern verringern, ohne die Komplexität für Forscher zu erhöhen?

## 6. Erwartete Auswirkungen

### Forscher und Autoren

- weniger wiederholte Eingabe von Metadaten und Formatumsetzungen;
- Handschriften über verschiedene Tools und Herausgeber hinweg;
- eine verbesserte Kontinuität zwischen dem Verfassen, der Begutachtung und der Veröffentlichung;
- bessere Unterstützung für mehrsprachige und strukturierte wissenschaftliche Kommunikation.

### Fachzeitschriften, Verlage und wissenschaftliche Gesellschaften

- geringere Umstellungs- und Produktionskosten;
- wiederverwendbare Publikationsstile und Profile;
- Integration in bestehende Veröffentlichungsplattformen statt deren zwingender Ersetzung;
- strukturiertere Eingaben für die anschließende Veröffentlichung und Langzeitarchivierung.

### Universitäten, Bibliotheken und Forschungsinfrastrukturen

- stärkere institutionelle Kontrolle über wissenschaftliche Inhalte;
- geringere Abhängigkeit von proprietären Autorenumgebungen;
- wiederverwendbare Open-Source-Infrastruktur;
- bessere Möglichkeiten zur Integration von Repositorien, Metadaten, Identifikatoren und der Langzeitarchivierung.

### Ökosystem der offenen Wissenschaft

- maschinenlesbare wissenschaftliche Objekte in einer früheren Phase des Forschungszyklus;
- eine stärkere Interoperabilität zwischen ansonsten isolierten Diensten;
- wiederverwendbare Spezifikationen und Referenzimplementierungen;
- ein praxisnahes Umfeld zum Testen neuer Arbeitsabläufe in der wissenschaftlichen Kommunikation.

## 7. Gesuchte Partnerprofile

Ein ausgewogenes Konsortium könnte mehrere der folgenden Partnertypen umfassen:

| Art des Partners | Mögliche Beteiligung |
| --- | --- |
| Universität / Forschungseinrichtung | Anforderungen an Forscher, Pilotprojekte, Evaluation, Forschungskoordination |
| Universitäts- oder Nationalbibliothek | Metadaten, Langzeitarchivierung, Interoperabilität von Repositorien, Fachwissen im Bereich Open Science |
| Wissenschaftlicher Verlag / Fachzeitschrift | Produktionsabläufe, redaktionelle Überprüfung, Pilotprojekte zur tatsächlichen Veröffentlichung |
| Wissenschaftliche Gesellschaft | fachliche Anwendungsfälle, Einbindung der Fachgemeinschaft, Verbreitung |
| Forschungsinfrastruktur / EOSC-bezogene Dienste | Verbund, Interoperabilität, Dienstintegration |
| Software / RSE-Gruppe | Entwicklung, Sicherheit, Skalierbarkeit, Bereitstellung |
| Partner für Barrierefreiheit und UX-Forschung | Inklusives Design und Evaluierung |
| NLP / Forschungsgruppe für Mehrsprachigkeit | Sprachtechnologien, Terminologie, Übersetzungsabläufe |
| Partner für PID- und Metadaten-Infrastruktur | ORCID/ROR/DOI und Metadaten-Interoperabilität |
| Open-Source-Organisation für Nachhaltigkeit | Governance, Community und langfristige Nachhaltigkeit |

Ein Vorschlag muss nicht alle diese Rollen umfassen. Die Zusammensetzung sollte sich an den Zielen der Ausschreibung orientieren.

## 8. Modell mit wiederverwendbaren Arbeitspaketen

### WP1 – Koordination, Steuerung und Anforderungen

**Ziele:** Projektmanagement, Steuerung, Anforderungen, ethische und rechtliche Abstimmung sowie Abstimmung mit den Beteiligten.

**Voraussichtliche Ergebnisse:** Governance-Rahmenwerk; Anforderungsbasis; Risikoregister; Richtlinien zu Daten, geistigem Eigentum und Open Source.

### WP2 – Wissenschaftliches Objektmodell und Interoperabilität

**Ziele:** Verfeinerung der Spezifikationen für „OMI“; Definition von Austauschverträgen; Validierung der Round-Trip-Semantik und der Provenienz.

**Voraussichtliche Ergebnisse:** versionierte Spezifikationen; Interoperabilitätsprofile; Konformitätsbeispiele; Validierungssuite.

### WP3 – „Open Manuscript Studio“ und Referenzimplementierung

**Ziele:** Das plattformübergreifende Studio robuster gestalten; die Arbeitsabläufe in den Bereichen Erstellung, Überprüfung, Metadaten und Barrierefreiheit verbessern.

**Voraussichtliche Ergebnisse:** produktionsorientierte Releases; Verbesserungen der Barrierefreiheit; Testinfrastruktur; technische Dokumentation.

### WP4 – Veröffentlichung und Integration in die Forschungsinfrastruktur

**Ziele:** Anbindung der „OMI“-Workflows an die Infrastruktur für Veröffentlichungen, Identitäten, Metadaten und Repositorien.

**Beispielhafte Ergebnisse:** Integrationen mit OJSundOMP; PID-/Metadaten-Konnektoren; API; Dokumentationen zur Integration.

### WP5 – Institutionelle Pilotprojekte und Evaluierung

**Ziele:** Durchführung repräsentativer Pilotprojekte mit Zeitschriften, Verlagen, Bibliotheken oder Universitäten; Bewertung der Benutzerfreundlichkeit und Interoperabilität.

**Voraussichtliche Ergebnisse:** Pilotprojekte; Auswertungsdatensätze/-berichte; Workflow-Benchmarks; Empfehlungen.

### WP6 – Nachhaltigkeit, Verwertung und Gemeinschaft

**Ziele:** Etablierung eines nachhaltigen Open-Source-Modells, von Beteiligungswegen, einer Einführungsstrategie und eines Plans für die Wartung nach Projektabschluss.

**Voraussichtliche Ergebnisse:** Nachhaltigkeitsplan; Roadmap für die Nutzung/Einführung; Schulungsmaterialien; Gemeinschaftsprogramm; Ergebnisse zur Verbreitung.

## 9. Beispiel für eine Aufgabenteilung

Ein mittelgroßes Konsortium kann die Arbeit weiter in Aufgaben unterteilen, wie zum Beispiel:

- T2.1 Verfeinerung des Manuskript- und Annotationsmodells;
- T2.2 Metadaten und Profile für persistente Identifikatoren;
- T2.3 Testsuite für Interoperabilität und Konformität;
- T3.1 Plattformübergreifende Absicherung von Studio;
- T3.2 Barrierefreiheit und mehrsprachige Benutzererfahrung;
- T3.3 Strukturierte Import-/Export- und Veröffentlichungsformate;
- T4.1 Integration von „OJS“ und „OMP“;
- T4.2 Integration von Repositorien und Forschungsinformationen;
- T4.3 Identitäts-/PID-Dienste;
- T5.1 Pilotprojekt zur Veröffentlichung von Fachzeitschriften;
- T5.2 Pilotprojekt zur institutionellen Erstellung von Inhalten;
- T5.3 Bewertung der Benutzerfreundlichkeit und der Auswirkungen;
- T6.1 Open-Source-Governance;
- T6.2 Einführung und Schulung;
- T6.3 Nachhaltigkeit und Nutzung.

## 10. Budgetmodell

Kein programmunabhängiger Kostenvoranschlag sollte als verbindlich angesehen werden. Für die frühzeitige Planung im Konsortium können die mit OMIverbundenen Kosten in folgende Kategorien unterteilt werden:

- Personal / Personenmonate für die Entwicklung von Forschungssoftware;
- Arbeiten im Bereich Interoperabilität und Spezifikationen;
- Projekt- und technische Koordination;
- UX, Barrierefreiheit und mehrsprachige Bewertung;
- Infrastruktur, Hosting, CI/CD und Tests;
- Code-Signierung und Plattformverteilung;
- Pilot-Einführung und -Unterstützung;
- Reisen und Konsortialtreffen, sofern die Voraussetzungen dafür erfüllt sind;
- Verbreitung, Fortbildung und gemeinnützige Aktivitäten;
- externe Prüfungen, Sicherheitsbewertungen oder fachliche Dienstleistungen, sofern dies gerechtfertigt ist.

### Vorläufige Aufwandsverteilung

Für einen auf den „OMI“ ausgerichteten technischen Arbeitsstrang könnte eine vorläufige Aufteilung etwa wie folgt aussehen:

- **35–45 %** Umsetzung und technische Planung;
- **15–20 %** Arbeit im Bereich Interoperabilität/Spezifikationen;
- **15–20 %** Pilotprojekte, Validierung und Bewertung;
- **10–15 %** Koordination, Steuerung und Qualitätssicherung;
- **10–15 %** für Nachhaltigkeit, Wissensverbreitung, Schulungen und den Aufbau von Gemeinschaften.

Diese Prozentsätze dienen lediglich als Planungshilfe und müssen an die Förderrichtlinien und die Zusammensetzung des Konsortiums angepasst werden.

## 11. Nachhaltigkeit und Ausbeutungsnarrativ

Das Verwertungsmodell von OMI sollte nicht von der proprietären Kontrolle über das Manuskriptformat abhängen. Stattdessen lässt sich Nachhaltigkeit auf folgende Weise erreichen:

- Open-Source-Kernsoftware und offene Spezifikationen;
- institutionelle Einführung und gemeinsame Entwicklung;
- geförderte Forschungs- und Innovationsprojekte;
- Sponsoring und Unterstützung durch die Gemeinschaft;
- Implementierungs-, Integrations-, Hosting- oder Supportleistungen durch Akteure des Ökosystems;
- wiederverwendbare Ressourcen für Schulungen und die Bereitstellung;
- ein wachsendes Netzwerk kompatibler Verlags- und Forschungsdienste.

Das wichtigste verwertbare Ergebnis ist daher eine **offene Interoperabilitätsschicht und Referenzimplementierung**, die die Integrations- und Migrationskosten im gesamten Ökosystem des wissenschaftlichen Publizierens senkt.

## 12. Stellungnahme zu Open Science, Rechten des geistigen Eigentums und Datenmanagement

In einem Angebot sollten diese Punkte vertraglich festgelegt werden, doch die von OMI bevorzugte Grundlage lautet:

- Open-Source-Lizenzierung für wiederverwendbare Kernsoftware;
- offen dokumentierte Interoperabilitätsspezifikationen;
- transparente Regeln für Beiträge und die Unternehmensführung;
- klare Trennung zwischen offenen Spezifikationen und institutionsspezifischen Konfigurationen;
- keine Verpflichtung zur Offenlegung vertraulicher Manuskripte oder Peer-Review-Daten;
- Datenminimierung und angemessene Zugriffskontrolle für Manuskript- und Begutachtungsdienste;
- Exportierbarkeit und Übertragbarkeit wissenschaftlicher Inhalte;
- Wahrung der Provenienz, sofern dies im Rahmen der Arbeitsabläufe erforderlich ist.

Für jedes geförderte Projekt müssen die genauen Lizenzen, das Hintergrund- und Vordergrund-IP, die Rollen der für die Datenverarbeitung Verantwortlichen sowie die Rechte des Konsortiums festgelegt werden.

## 13. Indikative KPIs

Je nach Auftrag könnten zu den messbaren Indikatoren gehören:

- Anzahl der institutionellen Pilotprojekte;
- Anzahl der validierten Arbeitsabläufe von Zeitschriften/Verlagen;
- Anzahl der unterstützten Schnittstellen-/Integrationsprofile;
- Wiederherstellbarkeit in beide Richtungen anhand definierter Konformitätsfälle;
- Reduzierung der manuellen Eingabe von Metadaten oder der Produktionsschritte;
- Verbesserungen bei der Einhaltung der Barrierefreiheitsstandards;
- Anzahl der unterstützten Sprachen für die Benutzeroberfläche;
- aktive externe Mitwirkende;
- nachgelagerte Integrationen oder Bereitstellungen;
- Schulungsteilnehmer und Nutzung der Dokumentation;
- Software-Veröffentlichungen und frei zugängliche technische Ergebnisse;
- institutionelle Verpflichtungen nach Abschluss des Projekts.

Für die KPIs sollten erst dann Ausgangswerte und Zielwerte festgelegt werden, wenn die Pilotprojekte des Konsortiums abgeschlossen sind und die erwarteten Ergebnisse der Ausschreibung bekannt sind.

## 14. Einstieg in das Risikoregister

| Risiko | Maßnahmen zur Risikominderung |
| --- | --- |
| Der Anwendungsbereich wird zu weit gefasst | Einen interoperablen Kern mit Mindestanforderungen definieren und anwendungsspezifische Pilotprojekte durchführen |
| Die Arbeitsabläufe der Verlage unterscheiden sich erheblich | Verwenden Sie Profile/Adapter, anstatt einen Arbeitsablauf fest zu programmieren |
| Ältere Formate verlieren ihre Semantik | Konformitätstests, explizites Fallback-Verhalten und Herkunftsangaben |
| Die Einführung in Institutionen verläuft langsam | Gemeinsame Entwicklung mit Pilotpartnern und Integration bestehender Plattformen |
| Open-Source-Wartung nach Auslaufen der Finanzierung | Governance, diversifizierte Finanzierung und institutionelle Mitbetreuung |
| Sicherheits- und Datenschutzbedenken im Zusammenhang mit Manuskripten | Bedrohungsmodellierung, Zugriffskontrolle, Datenminimierung und Audits |
| Plattformspezifische Probleme bei der Veröffentlichung | Automatisierte CI/CD und explizite Signierung/Verteilung |

## 15. Ein Absatz zur Vorstellung des Konsortiums

> Das „Open Manuscript Initiative“ bietet eine funktionsfähige Open-Source-Grundlage, um wissenschaftliche Manuskripte über verschiedene Erstellungs-, Begutachtungs- und Publikationssysteme hinweg übertragbar zu machen. Anstatt einen weiteren isolierten Editor oder eine weitere isolierte Publikationsplattform zu entwickeln, konzentriert sich „OMI“ auf das interoperable wissenschaftliche Objekt zwischen diesen Systemen. Ein Konsortium kann die bestehenden Spezifikationen Open Manuscript Studio und OMI als Demonstrationsbeispiel nutzen, diese durch Forschungs- und Integrationsarbeit erweitern und die Ergebnisse gemeinsam mit Universitäten, Bibliotheken, Fachzeitschriften, Verlagen und Forschungsinfrastrukturen validieren. Die daraus resultierenden offenen Komponenten können Formatkonvertierungen, die Duplizierung von Metadaten und die Bindung an bestimmte Anbieter reduzieren und gleichzeitig eine mehrsprachige, barrierefreie und maschinell verarbeitbare wissenschaftliche Kommunikation stärken.

## 16. Zwei-Satz-Version zur Ansprache von Partnern

> Open Manuscript Initiative sucht Forschungs- und institutionelle Partner für Projekte im Bereich interoperabler Infrastrukturen für wissenschaftliches Verfassen und Veröffentlichen. OMI bietet bereits einen plattformübergreifenden Open-Source-Demonstrator sowie Arbeiten zur Integration in Veröffentlichungsprozesse, die als technische Grundlage für Pilotprojekte in den Bereichen Open Science, wissenschaftliche Kommunikation, Metadaten, Peer-Review, mehrsprachiges Publizieren und Nachhaltigkeit von Forschungssoftware dienen können.

## 17. Vor der Einreichung eines Vorschlags erforderliche Informationen

Bevor ein Vorschlag dieses Paket verwendet, vergewissern Sie sich bitte, dass:

1. genaues Programm, Aufruf und Thema;
2. Teilnahmeberechtigung der Antragsteller und des Konsortiums;
3. erwartete Ergebnisse, Umfang und vorgeschriebene Maßnahmen;
4. TRL- oder Reifegradanforderungen, falls vorhanden;
5. Förderquote und Modell der förderfähigen Kosten;
6. Anforderungen an die Zusammensetzung des Konsortiums;
7. Verpflichtungen im Bereich Open Science und Datenmanagement;
8. Auswirkungen auf Sicherheit, Ethik und den Datenschutz;
9. Verpflichtungen im Zusammenhang mit Rechten des geistigen Eigentums und Lizenzen;
10. Einreichungsfrist und Bewertungskriterien;
11. OMI rechtliche/finanzielle Teilnehmerstruktur;
12. realistische Personenmonate, Verpflichtungen im Rahmen von Pilotprojekten und messbare Ziele.

## 18. Öffentliche Mittel

- [Open Manuscript Initiative website](/)
- [Open Manuscript Studio](/studio)
- [Funding & Partnerships](/docs/governance/funding-and-partnerships)
- [Support OMI](/support/)
- [Implementation status](/docs/governance/studio-implementation-status)

---

**Dokumentstatus:** Wiederverwendbare Grundlage für die Beantragung von Fördermitteln. Aktualisieren Sie dieses Paket, sobald „OMI“ neue Meilensteine in Bezug auf Veröffentlichung, Governance, Bereitstellung und institutionelle Einführung erreicht.

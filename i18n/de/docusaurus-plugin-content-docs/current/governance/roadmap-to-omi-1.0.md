---
title: Roadmap für „OMI“ 1.0
sidebar_position: 2
description: Aktuelles Programm, abgeschlossene Grundlagen, Fortschritt bei der Referenzimplementierung, aktuelle Prioritäten und Veröffentlichungskriterien für „Open Manuscript Initiative“ 1.0.
---

# Roadmap für „OMI“ 1.0

## Entwicklung eines offenen Standards für wissenschaftliches Publizieren

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Dokumenttyp | Steuerung und Planung |
| Status | Entwurf |
| Version | 0.4.0 |
| Normsprache | Englisch |
| Zuletzt aktualisiert | 05.09.2026 |
| Planungshorizont | OMI 1.0 |
| Quelle der verbindlichen Kennung | [OMI Specification Registry](./specification-registry.md) |
| Grundlage für die Produktimplementierung | [Studio Implementation Status](./studio-implementation-status.md) |
| Basis für die Umsetzung der Integration | [Integration Implementation Status](../integrations/implementation-status.md) |

## 1. Zweck

Diese Roadmap legt die erforderlichen Maßnahmen fest, um die „Open Manuscript Initiative“ von einer sich weiterentwickelnden Projektarchitektur in einen kohärenten, umsetzbaren, testbaren und steuerbaren offenen Standard für wissenschaftliche Manuskripte zu verwandeln.

Es erfasst sowohl den Fortschritt bei der Spezifikation als auch Belege für die Referenzimplementierung. Diese beiden Aspekte werden bewusst getrennt behandelt: Eine Studio-Funktion kann bereits einsatzbereit sein, bevor die entsprechende „OMI“-Spezifikation konform ist, und eine Spezifikation kann ausgereift sein, bevor alle Referenzfunktionen implementiert sind.

Die „[OMI Specification Registry](./specification-registry.md)“ ist die maßgebliche Quelle für Spezifikationskennungen, Titel, kanonische Pfade, Zuweisungsstatus, Lebenszyklusstatus und Versionen.

## 2. Strategische Ausrichtung

OMI soll nicht nur ein weiterer Manuskript-Editor, eine weitere Zeitschriftenplattform oder ein weiterer Publikations-Workflow werden. Sein Ziel ist ein implementierungsunabhängiger semantischer Standard, der von Autoren, Zeitschriften, Verlagen, Repositorien, Bibliotheken, Redaktionssystemen, Konvertierungsdiensten und unabhängig entwickelter wissenschaftlicher Software übernommen werden kann.

Open Manuscript Studio ist die primäre Referenzimplementierung. Sie testet Spezifikationen in realen Arbeitsabläufen von Autoren, Gutachtern, Redakteuren und Verlagen, definiert jedoch keine normative Bedeutung.

## 3. Zusammenfassung des Fortschritts

Das Programm hat die anfängliche Phase der Dokumentationsprüfung bereits weit hinter sich gelassen. Governance, Identifikatoren, Dokumentationsarchitektur und die ersten Spezifikationsfamilien sind festgelegt, und das Studio deckt nun einen wesentlich größeren Teil des vorgesehenen Lebenszyklus ab als in der am 6. August erfassten Basisversion.

| Programmbereich | Status | Aktuelle Zusammenfassung |
|---|---|---|
| Dokumentationsprüfung | **Abgeschlossen** | Die englische Originaldokumentation wurde inventarisiert, klassifiziert und neu geordnet. |
| Grundlagen der Governance | **Weitgehend abgeschlossen** | Charta, Lebenszyklus, Versionsverwaltung, Stilrichtlinien, Terminologie, Register, Dokumentationsarchitektur, Spezifikationsvorlage und Richtlinie zur Codesignierung wurden veröffentlicht. |
| Synchronisierung von Website und Produkt | **Aktiv und gepflegt** | Auf der öffentlichen Studio-Seite und im datierten Studio-Statusbericht werden nun die implementierten Produktfunktionen getrennt von der normativen Konformität erfasst. |
| Migration von Identifikatoren | **Für aktive Spezifikationen abgeschlossen** | Aktive Spezifikationen verwenden die kanonische Zuweisungsarchitektur „`OMI-SPEC-*`“. |
| Zentrale semantische Modelle | **In Arbeit** | Für die Modelle zu Identität/Mitwirkenden sowie Versionierung/Änderungen liegen umfangreiche Belege in Form von Referenzimplementierungen vor; die Modelle zu Validierung, Übersetzung und Zusammenarbeit sind auf Spezifikationsebene noch unvollständig. |
| Referenzimplementierung | **Öffentliche Beta-Version (`0.1.0-beta.3`)** | Strukturierte Bearbeitung, mehrsprachige Benutzeroberfläche/Hilfe, servergestützte Konten, Peer-Review, native Integration von OJS/OMP, Import-/Exportfunktionen, Verlagsprofile, Suchfunktion, Desktop-/Mobilversionen und Update-Ablauf sind vorhanden. |
| Peer-Review | **Operative Umsetzung** | Die Grundlagen für das Doppelblind-Review-Verfahren, die Arbeitsbereiche für Gutachter, das Review-Dashboard für Redakteure sowie die Abwicklung extern zugewiesener Gutachten sind implementiert. Die Konformität mit der formalen Spezifikation muss noch umgesetzt werden. |
| OJS-Integration | **Betriebs- und konfigurationsabhängig** | Das Plugin v1.2.1 und der Studio-Workflow bieten einen signierten Start für Autoren, Redakteure und Prüfer, eine bereichsbezogene Dateiübertragung, native Prüfformulare, Korrekturen, getrenntes Feedback und signiertes Zurückschreiben; die native End-to-End-Verifizierung gemäß „OJS“ 3.5 ist erfolgreich. Die vollständige Profilabdeckung und Konformität sind noch unvollständig. |
| OMP-Integration | **Betriebs- bzw. konfigurationsabhängig** | Das Plugin v1.2.6 und der Studio-Workflow bieten einen signierten Start für Autoren, Redakteure und Gutachter, die Zuordnung von Monografien, Publikationen und Studien, den Zugriff auf Gutachten ausschließlich für zugewiesene Studien, native Formulare, Korrekturen, getrenntes Feedback und signierte Rückmeldungen; die native E2E-Verifizierung von „OMP“ 3.5 ist erfolgreich. |
| Identitätsintegrationen | **Konfigurationsabhängig** | ORCID OAuth Es gibt Bereitstellungsinfrastrukturen und ROR/bibliografische Identitätsgrundlagen. Die Produktionskonfiguration ist bereitstellungsspezifisch. |
| Integrationsplattform | **Grundlage umgesetzt** | Der Integrationskatalog, das Anbieterregister, die Authentifizierungsmodi für Anbieter und das Konfigurationsgerüst für DeepL sind vorhanden. Die Ausführung von DeepL-Übersetzungen ist noch nicht vollständig umgesetzt. |
| Mehrsprachiger Produktsupport | **Operative Umsetzung** | Studio bietet 24 unterstützte Sprachen für die Benutzeroberfläche mit lokalisierten Hilfetexten und geprüften Übersetzungs-Overlays. Normative Spezifikationen bleiben weiterhin auf Englisch. |
| Import/Export | **Wesentliche Funktionen** | DOCX Import- und umfangreiche Exportfunktionen werden unterstützt, darunter JATS, HTML, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA sowie LaTeX-orientierte Ausgabemöglichkeiten. |
| Desktop-Distribution | **Betriebsbereite Beta-Version** | Windows-, Linux- und macOS-Pakete werden automatisch erstellt; der Ablauf für Benachrichtigungen über Updates und die Installation auf dem Desktop ist implementiert. Die Arbeiten zur Codesignierung dauern noch an. |
| Kanonische Schemata und Konformität | **Noch nicht abgeschlossen** | Versionierte normative Schemata, genehmigte Testfälle, das Verhalten von Validatoren und formale Konformitätssuiten gehören weiterhin zu den wichtigsten Meilensteinen vor der Version 1.0. |
| Unabhängige Implementierungen | **Noch nicht verifiziert** | Für die Zuverlässigkeit von „OMI“ 1.0 sind weiterhin Nachweise zur Interoperabilität über die primäre Referenzimplementierung hinaus erforderlich. |

## 4. Abgeschlossene Fundamentarbeiten

Zu den veröffentlichten Grundlagen für Governance und Architektur gehören:

- [OMI Charter](./charter.md);
- [Architecture Audit](./architecture-audit.md);
- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [OMI Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md);
- [OMI Specification Template](./specification-template.md);
- [OMI Implementation Status Matrix](./implementation-status-matrix.md);
- [Studio Implementation Status](./studio-implementation-status.md);
- [Code Signing Policy](./code-signing-policy.md);
- [Integration Implementation Status](../integrations/implementation-status.md).

Die Dokumentationswebsite bietet außerdem eine standardisierte Seitenleistenarchitektur, stabile Dokumentationspfade, eine Navigation in Englisch, Ungarisch und Deutsch sowie eine klare Trennung zwischen dem Status der normativen Spezifikation und dem Status der Produktimplementierung.

## 5. Aktuelle Spezifikationsarchitektur

Die Familie der kanonischen Spezifikationen ist nach Bereichen permanenter Identifikatoren gegliedert.

### 5.1 Grundlagen und zentrale semantische Modelle

| Kennung | Spezifikation | Zuweisung | Aktueller Status |
|---|---|---|---|
| `OMI-SPEC-000` | Grundprinzipien | Aktiv | Entwurf |
| `OMI-SPEC-100` | Dokumentmodell | Aktiv | Entwurf |
| `OMI-SPEC-110` | Anker-Modell | Aktiv | Entwurf |
| `OMI-SPEC-120` | Scholarly Object Model | Aktiv | Entwurf |
| `OMI-SPEC-130` | Annotationsmodell | Aktiv | Entwurf |
| `OMI-SPEC-140` | Metadatenmodell | Aktiv | Entwurf |
| `OMI-SPEC-150` | Identitäts- und Mitwirkermodell | Aktiv | Entwurf |
| `OMI-SPEC-160` | Versionsverwaltung und Änderungsmodell | Aktiv | Entwurf |
| `OMI-SPEC-170` | Übersetzungsmodell | Reserviert | Geplant |
| `OMI-SPEC-180` | Validierungsmodell | Reserviert | Geplant |
| `OMI-SPEC-190` | Modell für Zusammenarbeit und Berechtigungen | Reserviert | Geplant |

### 5.2 Wissenschaftlicher Arbeitsablauf, Literaturangaben und Veröffentlichung

| Kennung | Spezifikation | Zuweisung | Aktueller Status |
|---|---|---|---|
| `OMI-SPEC-200` | Modell zur Überprüfung | Aktiv | Entwurf |
| `OMI-SPEC-210` | Zitiermodell | Aktiv | Entwurf |
| `OMI-SPEC-220` | Modell für bibliografische Datensätze | Aktiv | Entwurf |
| `OMI-SPEC-221` | Referenzbibliothek und Registrierungsarchitektur | Aktiv | Entwurf |
| `OMI-SPEC-230` | Veröffentlichungsmodell | Aktiv | Entwurf |
| `OMI-SPEC-240` | Modell für Darstellung und Veröffentlichung | Reserviert | Geplant |

### 5.3 Plattform, Austausch und Konformität

| Kennung | Spezifikation | Zuweisung | Aktueller Status |
|---|---|---|---|
| `OMI-SPEC-300` | Plugin-Architektur | Aktiv | Entwurf |
| `OMI-SPEC-310` | Plattform API | Aktiv | Entwurf |
| `OMI-SPEC-320` | Dateiformat | Aktiv | Entwurf |
| `OMI-SPEC-330` | Container-Architektur | Aktiv | Entwurf |
| `OMI-SPEC-340` | Import- und Exportmodell | Reserviert | Geplant |
| `OMI-SPEC-350` | Funktions- und Konformitätsmodell | Reserviert | Geplant |

Bei Abweichungen zwischen dieser Zusammenfassung und dem Register ist das Register maßgebend.

## 6. Referenzimplementierung als Ausgangsbasis

Open Manuscript Studio liefert nun Belege für einen wesentlich größeren Teil des wissenschaftlichen Arbeitsablaufs als die ursprüngliche Alpha-Version des Editors.

### 6.1 Erstellung und Dokumentenverwaltung

Zu den aktuellen Implementierungsmerkmalen gehören die strukturierte Rich-Text-Bearbeitung, semantische Manuskriptabschnitte und -blöcke, stabile Identifikatoren, ein Revisionsverlauf, Notizen/Zitate, Dokumentennavigation, strukturiertes Suchen und Ersetzen, der Import von „DOCX“ sowie eine portable und lokal orientierte Desktop-Speicherung.

### 6.2 Identität und Konten

Neben der Trennung zwischen Agenten und Mitwirkenden (OMI) gibt es eine serverseitige Konto- und Profilinfrastruktur. ORCID OAuth-Bereitstellungsunterstützung sowie die Grundlagen für Zugehörigkeit und Identität im Zusammenhang mit RORsind vorhanden, vorbehaltlich der Konfiguration der Bereitstellung.

### 6.3 Mehrsprachiger Betrieb

Das Studio unterstützt 24 Sprachen für die Benutzeroberfläche, lokalisierte Hilfe und mehrsprachige Manuskript-Workflows. Dies ist ein Beleg für die Produktumsetzung; es bedeutet jedoch nicht, dass die gesamte Suite der normativen „OMI“-Spezifikationen über offizielle Übersetzungen verfügt.

### 6.4 Begutachtungs- und Redaktionsablauf

Die Grundlagen für das doppelblinde Peer-Review-Verfahren werden durch authentifizierte Review-APIn, Anonymisierungsprozeduren, Arbeitsbereiche für Gutachter, Review-Dashboards für Redakteure und die Unterstützung extern zugewiesener Review-Kontexte umgesetzt. Diese Funktionen stellen eine wesentliche Weiterentwicklung der Referenzimplementierung gegenüber der früheren explorativen Review-Baseline dar.

### 6.5 Integration in Veröffentlichungsplattformen

OJS und OMP sind betriebsbereite externe Workflow-Integrationen. Beide bieten einen signierten, rollenbasierten Start, bereichsbezogenen Dateizugriff, native Begutachtungsformulare, Korrekturen, getrenntes Feedback von Autoren und Lektoren sowie signiertes Zurückschreiben von Begutachtungsergebnissen mit nativer End-to-End-Verifizierung gemäß PKP 3.5. OJS bleibt die maßgebliche Instanz für den Zeitschriften-Workflow und OMP für den Monografie-Workflow, während Studio weiterhin die maßgebliche Instanz für den Studio-nativen Manuskript- und Begutachtungsstatus bleibt. OMP erhält zudem die Zuordnung von Monografien, Publikationen und Studien bei und beschränkt die Gutachter auf die ihnen zugewiesene Studie.

### 6.6 Veröffentlichung der Ergebnisse

Das Studio unterstützt zahlreiche publikationsorientierte Ausgabemöglichkeiten und Profile, darunter JATS, XML, HTML5, DOCX, EPUB, PDF sowie verschiedene DTP-orientierte Formate. Diese Implementierung muss noch an die formalen Import-/Export- und Konformitätsanforderungen gemäß OMI 1.0 angepasst werden.

### 6.7 Desktop-Distribution

Tauri-Desktop-Builds werden für Windows, Linux und macOS erstellt. Der Ablauf für Desktop-Updates ist implementiert. Die Vorbereitungen für die Code-Signierung unter Windows sind im Gange; nicht signierte oder noch nicht als vertrauenswürdig eingestufte Builds können weiterhin Plattformwarnungen auslösen.

## 7. Ziele von „OMI“ 1.0

Das Programm „OMI“ 1.0 muss:

1. eine stabile und nachvollziehbare Spezifikationshierarchie aufrechterhalten;
2. für jedes normative Konzept ein kanonisches Dokument und einen Kanon beizubehalten;
3. Verwenden Sie permanente Bezeichner einheitlich in Texten, Schemata, Beispielen und Tests;
4. vollständig fehlende Modelle für Übersetzung, Validierung, Zusammenarbeit und Darstellung;
5. aktive Entwurfs-Spezifikationen in die kanonische Spezifikationsstruktur zu migrieren;
6. kanonische, maschinenlesbare Schemata und kontrollierte Vokabulare veröffentlichen;
7. gültige, ungültige, minimale, umfassende, mehrsprachige und fachspezifische Beispiele anführen;
8. explizite Konformitätsklassen und prüfbare Anforderungen definieren;
9. Dokumentkompatibilität, Migration, Fehlerbehandlung und Verhalten bei Informationsverlust;
10. das tatsächliche Verhalten von Studio den Spezifikationsanforderungen zuordnen, ohne die Implementierung als normgebend zu betrachten;
11. Spezifikationen durch Referenz- und unabhängige Implementierungen validieren;
12. eine Governance zu etablieren, die in der Lage ist, den Standard auch nach Version 1.0 aufrechtzuerhalten.

## 8. Programmphasen

### Phase 1 – Dokumentationsprüfung

**Status:** Abgeschlossen

Die Originalunterlagen wurden inventarisiert, klassifiziert und neu geordnet. Identifikationskonflikte, Duplikate und Lücken wurden ermittelt und dokumentiert.

### Phase 2 – Schaffung der Grundlagen für die Unternehmensführung

**Status:** Weitgehend abgeschlossen

Die Kernkomponenten Governance, Lebenszyklus, Versionierung, Terminologie, Registrierungsstelle, Stil und Dokumentationsarchitektur wurden veröffentlicht.

Zu den verbleibenden Prioritäten gehören ein klarer definierter Beitrags- und Entscheidungsprozess, Richtlinien zur Umsetzung und Konformität sowie formelle Genehmigungsregeln für spätere Phasenübergänge im Lebenszyklus.

### Phase 3 – Strukturelle Überarbeitung und Statusbereinigung

**Status:** Weitgehend abgeschlossen; fortlaufende Wartung erforderlich

Es wurden Standardrouten, Spezifikationskennungen und Dokumentationskategorien festgelegt. Der Status der Produktumsetzung, der Integrationsstatus und der Status der normativen Spezifikation werden nun separat dokumentiert.

Zu den noch ausstehenden Arbeiten gehören automatisierte Prüfungen auf veraltete Statusdaten, defekte Links, doppelte Kennungen und Abweichungen bei Registrierungen bzw. Pfaden.

### Phase 4 – Fertigstellung des Kernmodells

**Status:** In Bearbeitung

Es liegen umfangreiche Belege zur Identität/zu den Mitwirkenden sowie zur Versionsverwaltung und zur Umsetzung von Änderungen vor. Die nächsten Spezifikationsarbeiten sollten die Anforderungen an das Batching im Arbeitszustand, die Checkpoint-Semantik, Tombstones, Zustands-Digests, stabile Verankerung, Validierung und die explizite Zuordnung von Anforderungen zusammenfassen.

Abschlusskriterium: Ein „Minimum Semantic Manuscript“ sowie dessen Objekte, Mitwirkende, Identifikatoren, Versionen und Änderungen können dargestellt und validiert werden, ohne dass man sich auf undokumentiertes Implementierungsverhalten verlassen muss.

### Phase 5 – Arbeitsabläufe, Berechtigungen und mehrsprachige Semantik

**Status:** In mehreren Bereichen liegt die Umsetzung der Spezifikation voraus

Peer-Review, Rollen und mehrsprachiges Produktverhalten sind nun in Studio verfügbar, während die Funktionen für Übersetzung und Zusammenarbeit/Berechtigungen noch unvollständig sind oder reserviert bleiben.

Priorität: Auf der Grundlage von Erkenntnissen aus der Umsetzung sollen präzise, umsetzungsunabhängige Anforderungen hinsichtlich der Anonymität bei der Überprüfung, der Rollenabgrenzungen, der Übersetzungsverhältnisse, der Abweichungen/Synchronisation sowie der Nachvollziehbarkeit formuliert werden.

Abschlusskriterium: Zusammenarbeit, Begutachtung, Annotation, Berechtigungen und mehrsprachige Beziehungen lassen sich als strukturierte, versionsbezogene wissenschaftliche Objekte darstellen.

### Phase 6 – Vervollständigung des Literaturverzeichnisses und der Quellenangaben

**Status:** Teilweise abgeschlossen

Es gibt verschiedene Zitations- und Literaturverzeichnisformate, und Studio enthält die Grundlagen für die Suche nach Zitaten und Literaturangaben.

Priorität: Trennung der Zitationsvorkommen von den bibliografischen Datensätzen, Ermittlung der Herkunft der Quellen, Abgleich von Identifikatoren, Deduplizierung, Zwischenspeicherung und Wiederverwendung von Referenzbibliotheken.

Abschlusskriterium: Ein Werk kann einmalig zu einer Bibliothek auf Manuskriptebene hinzugefügt und wiederholt zitiert werden, ohne dass der bibliografische Eintrag dupliziert wird.

### Phase 7 – Validierungs-, Darstellungs- und Veröffentlichungsprofile

**Status:** Die Produktumsetzung liegt teilweise über den Vorgaben

In Studio sind Veröffentlichungsprofile und allgemeine Exportfunktionen vorhanden, während die Spezifikationen für die formale Validierung sowie für Rendering- und Veröffentlichungsprofile noch unvollständig sind.

Priorität: Definition maschinenlesbarer Validierungsberichte, Profilidentität/-vererbung, Erhaltung der semantischen Quelle, Fehler/Warnungen und Anforderungen an die deterministische Ausgabe.

Abschlusskriterium: Implementierungen können feststellen, ob ein Manuskript einem angegebenen Profil entspricht, und Ergebnisse generieren, ohne dabei die semantische Quelle unbemerkt zu verändern.

### Phase 8 – Kanonische Schemata und Beispiele

**Status:** Geplant / wichtige Arbeiten vor Version 1.0

Zu den zu liefernden Ergebnissen gehören versionierte kanonische „JSON“-Schemas, stabile Schema-Identifikatoren, Autoritätsregeln, gültige/ungültige Testdaten, mehrsprachige Beispiele, Beispiele mit zahlreichen Verweisen sowie Beispiele zur Versionshistorie.

Abschlusskriterium: Unabhängige Implementierungen validieren dieselben Testfälle und liefern gleichwertige strukturelle Ergebnisse.

### Phase 9 – Zuordnungen für Import, Export und Interoperabilität

**Status:** Referenzimplementierung aktiv; normatives Modell unvollständig

Das Studio nutzt bereits den Import von „DOCX“ und mehrere Exportformate für die Veröffentlichung. `OMI-SPEC-340` muss diese praktischen Erfahrungen in explizite Transformationsregeln, Fehlerberichte, Round-Trip-Erwartungen und Mapping-Vorlagen umsetzen.

Zu den vorrangigen Zuordnungen gehören JATS, XML, HTML, DOCX, EPUB, CSL, JSON/BibTeX/RIS (sofern zutreffend), Crossref/DataCite-Metadaten sowie OJS-Austausch- und Archivierungspakete.

Abbruchkriterium: Nicht unterstützte Konstrukte, ausgelassene Anamnesedaten und Informationsverluste sind explizit und überprüfbar und treten nicht unbemerkt auf.

### Phase 10 – Integrationsprofile und Interoperabilität

**Status:** OJS und OMP sind betriebsbereit; die übrigen Profile sind unvollständig

Die plattformunabhängige Integrationsarchitektur sowie die Profile „OJS“ und „OMP“ verfügen über umfangreiche Implementierungsnachweise, darunter native PKP 3.5-End-to-End-Tests. An der versionsübergreifenden Kompatibilität, der Absicherung der Bereitstellung und der formalen Konformität wird weiterhin aktiv gearbeitet.

Prioritäten:

- OJS und OMP für den Hin- und Rückweg optimieren, die Integration sowie die versionübergreifende Kompatibilität überprüfen;
- Bereitstellung von Dokumenten, Wiederherstellung und Betreiberdiagnose für beide PKP-Konnektoren;
- define capability discovery/version negotiation;
- die Authentifizierungsmodi für Anbieter formalisieren;
- ausgereifte Cloud-, Identitäts-, Übersetzungs- und Repository-Adapter;
- Eine strikte Vermeidung von datenbankübergreifenden Verknüpfungen gewährleisten.

Abschlusskriterium: Mindestens zwei voneinander unabhängige, aussagekräftige externe Workflow-Integrationen, die dieselben plattformneutralen Prinzipien des „OMI“ veranschaulichen.

### Phase 11 – Funktions- und Konformitätsprüfung

**Status:** Auf der Ebene des Evidenzberichts begonnen; formelle Suite noch nicht verfügbar

Die Implementierungsstatusmatrix und die Studio-Statusberichte liefern Nachweise für die Ausgangsbasis, doch gezielte Komponententests stellen keine Konformitätsprüfung gemäß „OMI“ dar.

Zu den zu liefernden Ergebnissen gehören „`OMI-SPEC-350`“, benannte Konformitätsklassen, eine Referenzimplementierung des Validators, eine formale Testsuite, auf die Anforderungen abgebildete Ergebnisse sowie dokumentierte Abweichungen.

Abschlusskriterium: Das Verhalten von „OMI“ 1.0 wird anhand von ausführbaren, versionierten Nachweisen und nicht nur anhand von Textbeschreibungen demonstriert.

### Phase 12 – Eigenständige Umsetzung und öffentliche Begutachtung

**Status:** Geplant

Das Projekt sollte externe Umsetzer, eine Überprüfung durch die PKP/Community sowie Interoperabilitätsprototypen einbeziehen, bevor „OMI“ 1.0 als stabil erklärt wird.

Zu den zu erbringenden Leistungen gehören die Überprüfung von Entwürfen, die öffentliche normative Überprüfung, die Klärung inhaltlicher Anmerkungen, Leitlinien zur Migration sowie Umsetzungsberichte.

### Phase 13 – Veröffentlichung von „OMI“ 1.0

**Status:** Geplant

Ergebnisse:

- Stabile Testsuite;
- kanonische Schemata und Beispiele;
- Veröffentlichung der Konformitätsprüfung;
- Veröffentlichung einer Website mit Versionsverwaltung;
- archiviertes und reproduzierbares Release-Paket;
- Bericht zum Stand der Umsetzung;
- Verwaltungs- und Wartungsplan für die 1.x-Serie.

Abschlusskriterium: Der zuständige Prozess genehmigt die Suite offiziell als „Stable“ und veröffentlicht eine reproduzierbare Version 1.0 von „OMI“.

### Phase 14 – Amtliche Übersetzungen

**Status:** Produktlokalisierung weit fortgeschritten; Übersetzung der normativen Dokumente zurückgestellt

Die Lokalisierung der Benutzeroberfläche und der Hilfe des Studios sowie die Navigation auf der Website belegen die Fähigkeit zur mehrsprachigen Umsetzung. Vollständige offizielle Übersetzungen der normativen Spezifikationen sollten erst nach der Stabilisierung der englischen Version 1.0 erfolgen, um zu vermeiden, dass während der raschen Weiterentwicklung des Entwurfs unterschiedliche normative Texte gepflegt werden müssen.

## 9. Dringende Prioritäten

Die wichtigsten nächsten Schritte sind:

1. die Produktionseinführung der serverseitigen Persistenz und die verbleibenden Arbeiten zur Datenbankintegration abschließen;
2. das Verhalten bei der operativen Begutachtung durch Fachkollegen den Anforderungen des „`OMI-SPEC-200`“ zuordnen;
3. OJS-Synchronisation festigen und die verifizierten Kompatibilitätsgrenzen dokumentieren;
4. OMP-Kompatibilität zwischen verschiedenen Versionen, Bereitstellung und Wiederherstellung gemäß dem veröffentlichten Profil sicherstellen;
5. die Arbeiten im Bereich Übersetzung, Validierung sowie Zusammenarbeit und Berechtigungsspezifikation vollständig abschließen;
6. die erste kanonische, versionierte Schema-/Fixture-Sammlung veröffentlichen;
7. die Semantik von „Import/Export“ und „Rendering/Profil“ aus der bestehenden Studio-Implementierung formalisieren;
8. vollständige Integration der Windows-Release-Signierung nach Genehmigung durch den Signierungsdienst;
9. die Arbeit an den Integrationsanbietern fortsetzen und dabei die Anmeldedaten der Anbieter sowie die Authentifizierungsmodelle voneinander isoliert halten;
10. Mindestens einen unabhängigen Implementierungs- oder Interoperabilitätsprototyp vor der Veröffentlichung von „OMI“ 1.0 bereitstellen.

## 10. Veröffentlichungskriterien für „OMI“ 1.0

OMI 1.0 darf NICHT allein deshalb als „Stable“ deklariert werden, weil Open Manuscript Studio über zahlreiche Funktionen verfügt.

Für eine Version 1.0 sind mindestens folgende Voraussetzungen erforderlich:

- ein vollständig definierter Umfang der Kernspezifikation;
- stabile, dauerhafte Identifikatoren und kanonische Routen;
- kanonische, maschinenlesbare Schemata;
- explizite Versionsangaben und Kompatibilitätsregeln;
- Validierungssemantik und Konformitätsklassen;
- normatives Import-/Exportverhalten für deklarierte Zuordnungen;
- ausführbare Konformitätsprüfvorrichtungen und -tests;
- dokumentierte Nachweise zur Umsetzung durch Studio;
- aussagekräftige Nachweise für eine eigenständige Umsetzung oder Interoperabilität;
- öffentliche Begutachtung, bei der keine ungelösten Probleme bekannt sind, die eine interoperable Umsetzung verhindern würden;
- reproduzierbare Release-Artefakte und Governance nach Version 1.0.

## 11. Richtlinie zur Statuspflege

Diese Roadmap sollte aktualisiert werden, wenn sich die Programmschwerpunkte oder die Veröffentlichungskriterien ändern. Sich schnell ändernde Produktdetails sollten in erster Linie unter [Studio Implementation Status](./studio-implementation-status.md) und [Integration Implementation Status](../integrations/implementation-status.md) aktualisiert und erst dann hier übernommen werden, wenn sie wesentliche Auswirkungen auf das Programm „OMI 1.0“ haben.

Diese Unterscheidung ist beabsichtigt: Die Roadmap beschreibt, in welche Richtung sich der Standard entwickelt, während die datierten Statusberichte beschreiben, was die aktuelle Referenzimplementierung tatsächlich leisten kann.

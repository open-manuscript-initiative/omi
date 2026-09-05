---
title: OMP Integrationsprofil v1
description: OMI Integration des „API“-Profils der Version 1 für Open Monograph Press, einschließlich der Arbeitsabläufe für Monografien, Sammelbände, Kapitel, Begutachtung, Überarbeitung, Produktion und Katalogisierung.
---

# OMP Integrationsprofil v1

**Status:** Entwurf  
**Basisprotokoll:** `omi-integration/1`  
**Profil-ID:** `omi-integration/1/omp`

## 1. Geltungsbereich

Das Integrationsprofil „OMP“ legt fest, wie eine Installation von Open Monograph Press (OMP) die Arbeitsabläufe im wissenschaftlichen Buchverlag auf das plattformneutrale Integrationsprofil „OMI“ (API v1) abbildet.

Das Profil unterstützt Monografien, Sammelbände, Kapitel und andere komplexe wissenschaftliche Werke, ohne sie auf die Semantik von Zeitschriftenartikeln zu reduzieren.

OMP und der Dienst „OMI“ bleiben separate Anwendungen mit eigenen Persistenzschichten. Das Integrations-Plugin „OMP“ fungiert als Adapter. „Open Manuscript Studio“ DARF NICHT direkt auf die Datenbank „OMP“ oder das Verzeichnis mit den privaten Dateien zugreifen.

## 2. Architektonische Abgrenzung

```text
OMP
Own application and database
        |
        | OMP OMI Integration Plugin
        | supported PKP/OMP services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

Der Adapter DARF KEINE Änderungen an den Kern-Dateien von OMP erfordern. Er SOLLTE die versionsspezifischen Implementierungsdetails von OMPvon der Protokollschicht OMI trennen.

## 3. Autoritätsmodell

OMP ist maßgeblich für:

- Identität und Konfiguration der Presse;
- Status der Einreichung und Phase des Arbeitsablaufs;
- redaktionelle Aufträge;
- Einladungen an Gutachter und Auftragsvergabe;
- Prüfrunden und Fristen;
- redaktionelle Entscheidungen;
- Status des Workflows für die Einreichung und die Produktionsdatei;
- Veröffentlichungsstatus;
- eine auf Serien und Kataloge ausgerichtete Organisation;
- Veröffentlichungsformate und öffentliche Präsentation.

OMI / Das Studio ist zuständig für:

- das strukturierte wissenschaftliche Objekt „OMI“;
- stabile Verankerungen;
- die in „OMI“ dargestellte Hierarchie der Manuskripte;
- Studio-eigene Anmerkungen;
- gemeinsame Bearbeitung;
- OMI Verlauf der strukturellen Änderungen;
- in Studio erstellte Anmerkungen zur strukturierten Überprüfung;
- Annotationsantwort und Lösungsstatus;
- Erstellung portabler „OMI“-Pakete.

## 4. Erforderliche Profilzuordnung

| OMI Integration API resource | OMP concept |
| --- | --- |
| `installation` | Installation von „OMP“ |
| `context` | Presse |
| `submission` | Objekt „OMP“ – Einreichung / Monografie-Workflow |
| `component` | Kapitel, Vorwort, Nachwort, Anhang oder andere Bestandteile einer Publikation |
| `contributor` | Autor, Herausgeber, Übersetzer, Kapitelautor oder sonstiger Mitwirkender |
| `file` | Einreichungs- oder Produktionsdatei |
| `reviewAssignment` | OMP Hausarbeit |
| `reviewRound` | OMP-Testreihe |
| `revision` | Nachverfolgbarer Status von Manuskripten und Überarbeitungen |
| `publication` | Veröffentlichung von Monografien und Katalogansichten |

OMP Numerische Kennungen MÜSSEN an der Protokollgrenze als Zeichenfolgen serialisiert werden.

## 5. Identität der Installation

Jede verbundene „OMP“-Bereitstellung MUSS über eine stabile „`installationId`“-Adresse verfügen.

Beispiel:

```json
{
  "installationId": "omp-example-university",
  "platform": "omp",
  "profile": "omi-integration/1/omp",
  "baseUrl": "https://books.example.edu/"
}
```

Die Installations-ID MUSS stabil bleiben, wenn sich Press-Namen, Pfade oder öffentliche URLs ändern.

## 6. Pressekontext

Ein „OMP“-Presse-Mapp wird zu einem „OMI“-`context`.

```json
{
  "externalId": "3",
  "type": "press",
  "path": "example-press",
  "name": {
    "en": "Example University Press"
  },
  "url": "https://books.example.edu/index.php/example-press"
}
```

Die „OMP“-Press-ID ist die stabile externe Kontextkennung. Der öffentliche Pfad ist Navigationsmetadaten und DARF NICHT die einzige dauerhafte Identität sein.

## 7. Zuordnung der Eingaben

Ein wissenschaftlicher Beitrag unter OMP entspricht einem Beitrag unter OMI `submission`.

Ein Konnektor SOLLTE Folgendes bereitstellen:

- Einreichungs-ID;
- aktuelle Phase des Arbeitsablaufs;
- Aktuelle Metadaten zur Veröffentlichung;
- primäre Ländereinstellung;
- lokalisierter Titel und Untertitel, sofern verfügbar;
- lokalisierte Beschreibung oder Zusammenfassung;
- Stichwörter oder Themen, sofern vorhanden;
- Beziehungen zu Mitwirkenden;
- Art der Veröffentlichung, sofern verfügbar;
- für die Synchronisierung benötigte Daten;
- Persistente Identifikatoren, sofern zulässig.

Beispiel:

```json
{
  "externalId": "431",
  "type": "edited-volume",
  "status": "review",
  "title": {
    "en": "Studies in Scholarly Communication"
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T18:30:00Z"
}
```

Der Connector DARF NICHT davon ausgehen, dass jede bei OMP eingereichte Arbeit eine Monografie eines einzelnen Autors ist.

## 8. Sammelwerke

Das „OMP“-Profil betrachtet die Struktur von Verbindungen als ein zentrales Thema der Integration.

Eine „OMI“-Darstellung KANN Folgendes enthalten:

```text
Book
├── Front matter
│   ├── Title page
│   ├── Preface
│   └── Introduction
├── Chapter 1
├── Chapter 2
├── Chapter 3
├── Appendix
├── Bibliography
└── Back matter
```

Die genaue Struktur richtet sich nach der wissenschaftlichen Arbeit und dem Dokumentmodell unter OMI, nicht nach einer festgelegten Buchvorlage.

## 9. Komponenten

OMP Veröffentlichungskomponenten werden den Ressourcen unter OMI`component` zugeordnet, wenn diese Unterscheidung für die Synchronisierung, die Urheberschaft, die Begutachtung, die Produktion oder die Veröffentlichung von Bedeutung ist.

Beispiel:

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "title": {
    "en": "The Evolution of Scholarly Editing"
  },
  "sequence": 7,
  "parentExternalId": null
}
```

Eine Komponente SOLLTE Folgendes beibehalten:

- konstante externe Kennung;
- Typ;
- gegebenenfalls lokalisierter Titel;
- Reihenfolge;
- gegebenenfalls die Beziehung zu den Eltern;
- Umfang der Beiträge;
- Beziehungen zwischen Dateien und Revisionen, sofern vorhanden.

Komponenten KÖNNEN verschachtelt sein.

## 10. Sammelbände

Ein Sammelband DARF NICHT auf eine einzige Autorenliste reduziert werden.

Der Konnektor SOLLTE die Unterscheidungen zwischen folgenden Elementen beibehalten:

- Herausgeber der Sammelbände;
- Autoren auf Buchebene;
- Kapitelautoren;
- Übersetzer;
- Einleitung – Autoren;
- Kommentatoren;
- andere wissenschaftliche Mitwirkende.

Die Rolle und der Aufgabenbereich eines Mitwirkenden SOLLTEN ausdrücklich dargelegt werden.

## 11. Umfang der Mitwirkenden

Beispiel für einen Editor auf Buch-Ebene:

```json
{
  "externalId": "contributor-18",
  "name": {
    "given": "Anna",
    "family": "Editor"
  },
  "roles": ["editor"],
  "scope": {
    "type": "submission",
    "externalId": "431"
  }
}
```

Beispiel für einen Kapitelautor:

```json
{
  "externalId": "contributor-29",
  "name": {
    "given": "Bela",
    "family": "Author"
  },
  "roles": ["author"],
  "scope": {
    "type": "component",
    "externalId": "chapter-7"
  }
}
```

Der Konnektor DARF die auf eine Komponente beschränkte Urheberschaft NICHT auf die Urheberschaft der gesamten Publikation ausweiten, es sei denn, „OMP“ stellt diese Beziehung ausdrücklich dar.

## 12. Identifikatoren für Mitwirkende

Soweit verfügbar und zulässig, SOLLTEN die Angaben der Mitwirkenden die „ORCID“ und andere wissenschaftliche Identifikatoren beibehalten.

E-Mail-Adressen und andere private Identitätsdaten DÜRFEN nur dann übermittelt werden, wenn dies für den Betriebsablauf erforderlich ist und gemäß den geltenden Workflow-Richtlinien zulässig ist.

## 13. Einreichungs- und Produktionsdateien

OMP Dateien werden den Ressourcen unter OMI`file` zugeordnet.

Der Konnektor SOLLTE den Zweck des Workflows unterscheiden, sofern dieser unter OMP angegeben ist, zum Beispiel:

- eingereichtes Manuskript;
- Kapitelmanuskript;
- Datei überprüfen;
- überarbeitetes Manuskript;
- lektorierte Datei;
- Produktionsdatei;
- Quelle des Veröffentlichungsformats;
- zusätzliches Vermögen.

Beispiel:

```json
{
  "externalId": "file-221",
  "name": "chapter-07.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "componentExternalId": "chapter-7",
  "revision": 2
}
```

Studio MUSS binäre Inhalte über einen autorisierten Integrationsendpunkt abrufen. Der Konnektor DARF KEINE privaten Dateisystempfade offenlegen.

## 14. In Studio importieren

Studio MAY kann je nach Struktur vOMP und den Berechtigungen des Benutzers eine vollständige Monografie, ausgewählte Dateien oder ein Manuskript im Komponentenumfang importieren.

Bei einem Import SOLLTE Folgendes beibehalten werden:

- OMP Installations-ID;
- Presseausweis;
- Identität der Einreichung;
- Komponentenidentität;
- Identität der Quelldatei;
- Prüfsumme, sofern möglich;
- Quellcode-Revision;
- Synchronisationszeit.

Beim Import dürfen die QuellOMP-Dateien NICHT verändert werden.

## 15. Strategien für Arbeitsbereiche der „OMI“

Eine Implementierung KANN entweder eine Einzelarbeitsbereichs- oder eine koordinierte Arbeitsbereichsstrategie verwenden.

### 15.1 Strategie mit einem einzigen Arbeitsbereich

Das gesamte Buch wird durch einen „OMI“-Arbeitsbereich dargestellt, der das vollständig strukturierte wissenschaftliche Objekt enthält.

Diese Strategie eignet sich, wenn die Mitwirkenden projektübergreifend zusammenarbeiten und die globale Struktur eine wichtige Rolle spielt.

### 15.2 Strategie für koordinierte Arbeitsbereiche

Ein übergeordneter Arbeitsbereich koordiniert einzelne, mit separaten Berechtigungen versehene Komponenten-Arbeitsbereiche, beispielsweise die Erstellung einzelner Kapitel in einem Sammelband.

```text
Edited volume workspace
├── Chapter 1 workspace
├── Chapter 2 workspace
├── Chapter 3 workspace
└── Shared book metadata / structure
```

Die Implementierung MUSS stabile Beziehungen zwischen übergeordneten Objekten und Komponentenobjekten beibehalten. Der Export MUSS in der Lage sein, das beabsichtigte zusammengesetzte Werk zu rekonstruieren.

## 16. Zugriffskontrolle für Sammelbände

Einem Kapitelautor SOLLTE Zugriff auf sein Kapitel gewährt werden, ohne dass er automatisch Schreibzugriff auf andere Kapitel erhält.

Ein Herausgeber KANN umfassenderen Zugriff auf den gesamten Band erhalten.

Die Autorisierung MUSS serverseitig durchgesetzt werden und SOLLTE sich sowohl aus den Workflow-Berechtigungen von „OMP“ als auch aus den Arbeitsbereichsberechtigungen von Studio ableiten.

## 17. Rücksendung von Überarbeitungen an OMP

Ein „Studio-to-OMP“-Rücklauf MUSS gemäß der Workflow-Semantik unter OMP eine nachverfolgbare neue Datei oder Revision erstellen.

In der Anfrage SOLLTE angegeben werden, ob die Überarbeitung für Folgendes gilt:

- die vollständige Einreichung;
- eine bestimmte Komponente;
- mehrere Komponenten;
- Produktionsleistung.

Beispiel:

```json
{
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "baseExternalRevision": "2",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Revised chapter from Open Manuscript Studio"
}
```

Historische Dateien dürfen NICHT ohne Rückmeldung überschrieben werden.

## 18. Signierter Startablauf

Das Plugin „OMP“ SOLLTE für autorisierte Workflow-Teilnehmer eine Aktion „**In Studio öffnen**“ bereitstellen.

Eine Startaussage SOLLTE Folgendes angeben:

- Installation;
- Pressekontext;
- Einreichung;
- Ziel der optionalen Komponente;
- externer Akteur;
- angeforderte Bereiche;
- Ausstellungszeitpunkt;
- Ablauf;
- Nonce.

Ein Aufruf mit Kapitel-Gültigkeit KANN die Komponente explizit identifizieren.

## 19. Benutzeridentität und Verknüpfung

Eine „OMP“-Benutzer-ID ist eine externe Identitätsbescheinigung. Studio KANN diese nach erfolgreichem signiertem Start und erfolgreicher Autorisierung mit einem lokalen Konto verknüpfen.

Der empfohlene externe Identitätsschlüssel lautet:

```text
installationId + externalUserId
```

Die E-Mail-Adresse DARF NICHT der einzige unveränderliche, systemübergreifende Identitätsschlüssel sein.

## 20. Zuständigkeit für die Begutachtung durch Fachkollegen

OMP bleibt maßgeblich in Bezug auf die Zuweisung von Begutachtungen, die Begutachtungsrunde, die Frist, die wirksame Begutachtungsmethode, die zulässigen Empfehlungswerte, den Fertigstellungsstatus und die redaktionelle Entscheidung.

Studio MAY bietet ein strukturiertes Umfeld für wissenschaftliche Begutachtung.

## 21. Überprüfungsziele

Im Gegensatz zu einem einfachen Artikel-Workflow KANN eine Begutachtung im Rahmen von „OMP“ folgende Ziele verfolgen:

- die vollständige Monografie;
- ein Sammelband;
- ein Kapitel;
- eine Reihe von Kapiteln;
- eine weitere stabile Komponente.

Beispiel für eine Aufgabe zur Kapitelzusammenfassung:

```json
{
  "externalId": "review-612",
  "roundExternalId": "round-1",
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "reviewMode": "double-anonymous",
  "permissions": ["manuscript.read", "review.write"]
}
```

Das Ziel MUSS ausdrücklich angegeben werden, wenn sich die Begutachtung nicht auf die gesamte Einreichung bezieht.

## 22. Anonymität überprüfen

Der „OMP“-Konnektor MUSS die Richtlinie zur effektiven Überprüfung durchsetzen, bevor Daten übertragen werden.

Bei der Überprüfung von Komponenten MUSS die Identitätsfilterung sowohl Mitwirkende auf Buch- als auch auf Komponentenebene berücksichtigen. Das bloße Entfernen des Namens des Kapitelautors kann unzureichend sein, wenn Herausgeber, Zugehörigkeit, Danksagungen, Dateimetadaten oder andere Informationen eine Identität offenbaren, die gegen die Richtlinien verstößt.

Studio MUSS die geltenden Vertraulichkeitsrichtlinien serverseitig durchsetzen.

## 23. Strukturierte Überprüfung

Unterstützung durch Studio MAY:

- allgemeine Monografieberichte;
- Berichte auf Kapitelebene;
- stabil verankerte Anmerkungen;
- Kommentare, die nur für den Redakteur sichtbar sind;
- Kommentare, die für den Autor sichtbar sind;
- Empfehlung;
- Anhänge des Gutachters;
- Antworten der Autoren/Herausgeber;
- Verfolgung der Auflösung von Annotationen;
- mehrere Runden.

Annotationen SOLLTEN nach Möglichkeit auf stabile wissenschaftliche Objekte unter OMI verweisen und nicht auf Koordinaten der gerenderten Seite.

## 24. Komponentenübergreifende Überprüfung

Eine Rezension eines gesamten Sammelbands KANN Anmerkungen enthalten, die sich auf mehrere Bestandteile beziehen.

Beispiel:

```json
{
  "assignmentExternalId": "review-700",
  "target": {
    "type": "submission",
    "externalId": "431"
  },
  "annotations": [
    {
      "anchor": "omi:anchor:chapter-2:01J...",
      "body": "This chapter should define the term earlier."
    },
    {
      "anchor": "omi:anchor:chapter-8:01J...",
      "body": "This section conflicts with the terminology used in Chapter 2."
    }
  ]
}
```

Das Anker-Modell „OMI“ SOLLTE gewährleisten, dass solche Kommentare auch bei Änderungen am Layout und an der Paginierung unverändert bleiben.

## 25. Antwort des Autors und Überarbeitung

Sofern „OMP“ eine Überarbeitung zulässt, kann Studio die genehmigten Überarbeitungskommentare je nach Umfang den Buchredakteuren, Buchautoren oder Autoren einzelner Kapitel zur Verfügung stellen.

Ein Komponentenautor DARF nur auf jene Komponenten reagieren und diese überarbeiten, für deren Änderung er befugt ist.

Die Zustimmung eines Autors darf NICHT als Zustimmung eines Gutachters oder Herausgebers ausgelegt werden.

## 26. Mehrere Überprüfungsrunden

Die Überprüfungsrunden MÜSSEN historisch voneinander getrennt bleiben. Frühere Berichte und Anmerkungen SOLLTEN ihre Herkunft aus der jeweiligen Runde beibehalten.

Eine neue Runde kann auf ungeklärte Anmerkungen aus früheren Runden verweisen, ohne den historischen Überprüfungsverlauf zu verändern.

## 27. Redaktionsarbeitsbereich

Ein autorisierter Presseredakteur KANN einen umfassenderen Überblick über das gesamte wissenschaftliche Objekt in Studio erhalten, einschließlich des Status der einzelnen Komponenten, der Begutachtungsberichte, der Überarbeitungen und der Auflösung von Anmerkungen.

Redaktionelle Entscheidungen sind in „OMP“ weiterhin maßgebend.

## 28. Produktionsintegration

Nach der Annahme erstellt Studio MAY strukturierte Ergebnisse für die Produktion von „OMP“.

Zu den möglichen Derivaten gehören:

- das kanonische „OMI“-Paket;
- strukturiertes XML;
- JATS-kompatibel XML, sofern zutreffend;
- HTML;
- EPUB-orientierte Inhalte;
- DOCX-abgeleitete Produktionsdateien;
- Zahlen und damit verbundene Vermögenswerte;
- andere vom Konverter unterstützte Formate.

Generierte Derivate SOLLTEN die Revision „OMI“ vermerken, aus der sie erstellt wurden.

## 29. Veröffentlichung und Katalogintegration

OMP bleibt maßgeblich für den Veröffentlichungsstatus im Katalog, sofern dies nicht ausdrücklich delegiert wurde.

Der Konnektor KANN Publikationsmetadaten bereitstellen, wie zum Beispiel:

- Titel und Untertitel;
- Mitwirkende;
- Serie;
- Bezeichner;
- Erscheinungsdatum;
- Veröffentlichungsformate;
- Katalogbeschreibung;
- Titelbild- und Veröffentlichungsmaterial;
- öffentliche URL.

OMI Man darf NICHT davon ausgehen, dass eine Monografie einen Lebenszyklus wie bei einer Zeitschrift oder einem Artikel durchläuft.

## 30. Serie

Serien sind „OMP“ (nach Veröffentlichung/Katalog) gegliedert und SOLLTEN „OMP“ (nach Autor) als maßgebend beibehalten werden.

Ein Manuskript unter OMI KANN die externe Serienreferenz als integrierte Metadaten beibehalten, SOLLTE jedoch diese Serie NICHT als Voraussetzung für die Interpretation des wissenschaftlichen Objekts selbst erfordern.

## 31. Veröffentlichungsformate

OMP kann eine Monografie in mehreren Formaten veröffentlichen. Diese Veröffentlichungsformate sind Ableitungen oder Darstellungsformen und MÜSSEN von dem kanonischen wissenschaftlichen Objekt unter OMI unterscheidbar bleiben.

Eine Ausgabe unter PDF, EPUB, HTML oder in einem anderen Veröffentlichungsformat DARF NICHT allein aufgrund der Tatsache, dass sie öffentlich verbreitet wird, automatisch zum kanonischen Manuskript unter OMI werden.

## 32. Anforderungen an die Leistungsfähigkeit

Ein „OMP“-Konnektor, der das Basisprofil „`omi-integration/1/omp`“ beansprucht, MUSS Folgendes unterstützen:

```text
launch
metadata.read
contributors.read
files.read
```

Eine Schnittstellenunterstützungs-Komponente SOLLTE zusätzlich die durch die Implementierung definierten Komponentenfunktionen offenlegen und MUSS die Komponentenkennungen in den entsprechenden Ressourcen beibehalten.

Ein „OMP“-Konnektor, der die Synchronisierung von Manuskripten ermöglicht, SOLLTE zusätzlich Folgendes unterstützen:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

Ein „OMP“-Konnektor, der die Integration von Peer-Review-Ergebnissen beansprucht, MUSS Folgendes unterstützen:

```text
review.read
review.write
```

Ein Konnektor, der die Integration von Produktion und Veröffentlichung beansprucht, SOLLTE Folgendes unterstützen:

```text
publication.read
publication.export
```

## 33. Empfohlene Endpunktfläche

Eine Implementierung SOLLTE entsprechende Operationen für folgende Fälle bereitstellen:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/components
GET  /contexts/{contextId}/submissions/{submissionId}/components/{componentId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

Bei Bedarf KÖNNEN Varianten mit Komponenten-Gültigkeitsbereich bereitgestellt werden.

## 34. Genehmigung

Jeder Vorgang MUSS auf der Anwendungsebene von „OMP“ autorisiert werden.

Die Service-Anmeldedaten stellen die Integrationsbeziehung her, gewähren jedoch keinen uneingeschränkten Zugriff auf alle Veröffentlichungen, Einreichungen, Kapitel, Dateien oder Rezensionen.

Die Kenntnis eines externen Identifikators DARF KEINE Berechtigung darstellen.

## 35. Synchronisationsstatus

Studio SOLLTE Integrationsmetadaten beibehalten, darunter:

```text
installationId
contextExternalId
submissionExternalId
componentExternalId(s)
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

Dieser Zustand MUSS vom kanonischen Dokument „OMI“ getrennt bleiben.

## 36. Konfliktbewältigung

Ein Connector SOLLTE „`409 Conflict`“ zurückgeben, wenn sich die externe Arbeit gegenüber der von Studio verwendeten Basisrevision geändert hat und ein automatischer Schreibvorgang zu Datenverlusten führen könnte.

Bei zusammengesetzten Werken SOLLTE die Konflikterkennung komponentenorientiert sein, wenn der übergeordnete Workflow einen ausreichend detaillierten Revisionsstatus bereitstellen kann.

## 37. Idempotenz

Wiederholbare Schreibvorgänge SOLLTEN Idempotenzschlüssel unterstützen. Bei Wiederholungsversuchen DÜRFEN keine doppelten Kapitelrevisionen, doppelten Überprüfungsberichte oder doppelten Produktionsdateien entstehen.

## 38. Prüfung und Herkunft

Relevante Integrationsvorgänge SOLLTEN nachverfolgbar sein, darunter die Einleitung, der Import von Manuskripten/Komponenten, der Abruf von Dateien, die Rückgabe von Überarbeitungen, die Einleitung von Begutachtungen, die Einreichung von Begutachtungen und der Export in die Produktion.

In Prüfprotokollen DARF keine unnötige Speicherung von Manuskriptinhalten, geheimen Informationen und vertraulichen Begutachtungstexten erfolgen.

## 39. Fehlerisolierung

Die Nichtverfügbarkeit des Studios DARF die damit nicht zusammenhängenden Verwaltungsaufgaben (OMP), die Katalogverwaltung oder die Veröffentlichungsvorgänge NICHT beeinträchtigen.

OMP Die Nichtverfügbarkeit DARF ein bereits importiertes wissenschaftliches Objekt unter OMI NICHT ungültig machen.

Geschützte Integrationsvorgänge SOLLTEN mit einem Fehler im geschlossenen Modus enden.

## 40. Kompatibilität bei Upgrades

Der Konnektor SOLLTE die anwendungsspezifische Anpassung von „OMP“ vom „OMI“-Protokoll trennen:

```text
OMI Integration API
        |
OMP profile mapper
        |
OMP-version adapter
        |
Supported OMP services / repositories / hooks
```

Dies ermöglicht OMPversionsspezifische Änderungen an der Implementierung, ohne dass `omi-integration/1` neu definiert werden muss.

## 41. Gemeinsame PKP-Implementierung

OJS und „OMP“-Konnektoren KÖNNEN gemeinsame PKP-Integrationsbibliotheken für folgende Zwecke wiederverwenden:

- Installationskonfiguration;
- Unterzeichnung und Überprüfung der Unterschrift;
- Nonce-/Replay-Schutz;
- HTTP-Antwortmodelle;
- Ermittlung der Fähigkeiten;
- Darstellung der externen Identität;
- Datei-Streaming;
- Fehler-Serialisierung;
- Prüfungshelfer.

Die Zuordnung von Arbeitsabläufen zu bestimmten Zeitschriften und Monografien SOLLTE in separaten Adaptern verbleiben.

```text
                 OMI Integration API v1
                          |
                  PKP shared library
                    /           \
          OJS profile adapter   OMP profile adapter
                 |                    |
                OJS                  OMP
```

Die gemeinsame Ebene DARF keine artikelspezifische Semantik auf OMP oder keine monografiespezifische Semantik auf OJS erzwingen.

## 42. Erweiterungen

OMP-spezifische Daten KÖNNEN unter einem Erweiterungsobjekt mit Namensraum bereitgestellt werden:

```json
{
  "extensions": {
    "org.pkp.omp": {
      "stageId": 3
    }
  }
}
```

Kernklienten MÜSSEN unbekannte Erweiterungen sicher ignorieren. Erweiterungen DÜRFEN die Felder der Kernintegrations-API nicht neu definieren.

## 43. Konformität

Eine Implementierung, die die Konformität mit „`omi-integration/1/omp`“ beansprucht, MUSS:

1. Entspricht der „OMI“-Integration API v1;
2. eine stabile Identitätsangabe der Installation unter OMP bereitstellen;
3. ordnet Druckmaschinen Kontexten zu und OMP wissenschaftliche Arbeiten den Einreichungen;
4. die Struktur der Komponenten beizubehalten, wenn diese durch die Integration freigelegt werden;
5. die Rolle und den Umfang des Mitwirkenden beibehalten, sofern verfügbar;
6. Autorisierung auf Anwendungsebene verwenden;
7. Vermeiden Sie den direkten Zugriff von Studio auf die Datenbanktabellen von „OMP“ und auf private Dateipfade;
8. für die unterstützten Funktionen werben;
9. externe Identifikatoren und die Herkunft beibehalten;
10. die Anonymität der Bewertungen serverseitig durchsetzen, wenn die Bewertungsintegration aktiviert ist;
11. einen nachvollziehbaren Änderungsverlauf für Schreibvorgänge aufbewahren;
12. bleiben sicher von Studio trennbar.

## 44. Designinvariante

Der „OMP“-Konnektor integriert Arbeitsabläufe für wissenschaftliche Bücher in „OMI“, ohne dass das Manuskript vom internen Datenmodell von „OMP“ abhängig ist.

OMP verwaltet den Pressearbeitsablauf, die Begutachtung, die Produktion, die Katalogisierung und die Veröffentlichung im Zusammenhang mit wissenschaftlichen Arbeiten. Studio bietet Funktionen für strukturiertes Verfassen, Zusammenarbeit, Anmerkungen, Begutachtung, Überarbeitung und Umwandlung. Die Monografie oder der Sammelband bleibt ein portables wissenschaftliches Objekt.
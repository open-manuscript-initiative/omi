---
title: Integrations-API, Version 1
description: Plattformunabhängiges Protokoll zur Anbindung von „OMI“-Implementierungen an Publikations-, Begutachtungs-, Repositorium- und wissenschaftliche Workflow-Systeme.
---

# OMI Integrations-API, Version 1

**Status:** Entwurf  
**Protokoll-ID:** `omi-integration/1`

## 1. Zweck

Die „OMI“-Integration API definiert einen plattformneutralen Vertrag zwischen einer „Open Manuscript Initiative“-Implementierung, wie beispielsweise Open Manuscript Studio, und einem externen wissenschaftlichen System.

Das Protokoll ist bewusst unabhängig von zeitschrift-, verlag-, Repositorium- oder anbieterspezifischen Datenbankmodellen. OJS, OMP, andere Publikationsplattformen, Repositorien und zukünftige Konnektoren ordnen ihre eigenen Konzepte den hier definierten gemeinsamen Integrationsressourcen zu.

Das „API“ macht Studio nicht zum Eigentümer eines externen redaktionellen Workflows. Es bietet eine kontrollierte Schnittstelle, über die übertragbare wissenschaftliche Objekte und Workflow-Kontexte ausgetauscht werden können.

## 2. Konformitätssprache

Die Schlüsselwörter **MUSS**, **DARF NICHT**, **ERFORDERLICH**, **SOLLTE**, **SOLLTE NICHT** und **KANN** sind als normative Anforderungen zu verstehen.

Eine Implementierung, die die Konformität mit „`omi-integration/1`“ beansprucht, MUSS die Erkennung von Funktionen implementieren und MUSS jede unterstützte optionale Funktion identifizieren.

## 3. Rollen in der Architektur

Das Protokoll unterscheidet vier logische Rollen.

### 3.1 „OMI“-Dienst

Ein „OMI“-Dienst hostet oder verarbeitet portable wissenschaftliche Objekte. Open Manuscript Studio ist ein möglicher „OMI“-Dienst.

### 3.2 Externe Plattform

Eine externe Plattform verwaltet einen wissenschaftlichen Arbeitsablauf oder einen damit verbundenen Dienst. Beispiele hierfür sind Zeitschriften-Systeme, Monografieverlage, Repositorien, Preprint-Plattformen, CRIS-Systeme und Archivierungsdienste.

### 3.3 Steckverbinder

Ein Konnektor bildet die nativen Daten, Berechtigungen und den Lebenszyklus der externen Plattform auf die „OMI“-Integration API ab. Ein Konnektor KANN als Plugin, Modul, Dienst oder Gateway implementiert werden.

### 3.4 Benutzeragent

Ein Browser oder ein anderer Client KANN an einem signierten Startvorgang teilnehmen, darf jedoch NICHT als vertrauenswürdig angesehen werden, um Autorisierungs- oder Anonymitätsregeln durchzusetzen.

## 4. Vokabular zu allgemeinen Ressourcen

Das „API“ verwendet bewusst allgemeine Ressourcennamen.

### 4.1 Installation

Ein „`installation`“ bezeichnet eine Bereitstellung auf einer externen Plattform.

Beispiele:

- eine „OJS“-Installation;
- eine „OMP“-Installation;
- ein institutionelles Repositorium;
- ein Mandant eines gehosteten Publishing-Dienstes.

### 4.2 Kontext

Ein „`context`“ ist der organisatorische oder publizistische Geltungsbereich innerhalb einer Installation.

Beispiele:

- eine Zeitschrift der „OJS“;
- ein „OMP“-Drucker;
- eine Repository-Sammlung;
- eine Konferenz;
- eine institutionelle Einheit.

Anwender DÜRFEN NICHT davon ausgehen, dass „`context`“ dasselbe bedeutet wie „`journal`“.

### 4.3 Einreichung

Ein „`submission`“ ist ein extern verwaltetes wissenschaftliches Werk oder Workflow-Objekt, das mit einem Manuskript auf OMI verknüpft ist.

Es KANN sich um eine Einreichung bei einer Fachzeitschrift, eine Monografie-Einreichung, einen Sammelband, einen Beitrag zu einem Tagungsband, die Hinterlegung eines Preprints oder eine andere wissenschaftliche Arbeit handeln.

### 4.4 Komponente

Ein „`component`“ ist ein abgegrenzter Teil einer Einreichung oder Veröffentlichung.

Beispiele hierfür sind ein Kapitel, ein Anhang, der vordere Teil, der hintere Teil, ein Abbildungssatz, ein ergänzender Datensatz oder eine andere vom Host definierte Komponente.

Komponenten KÖNNEN verschachtelt werden, wenn die externe Plattform Hierarchien unterstützt.

### 4.5 Mitwirkender

Ein „`contributor`“ steht für eine Person oder Organisation, die mit einer Einreichung oder einer Komponente in Verbindung steht. Rolle und Umfang MÜSSEN, sofern verfügbar, beibehalten werden.

### 4.6 Datei

Ein „`file`“ bezeichnet eine geschützte oder öffentliche Binärressource, die von einem der angeschlossenen Systeme verwaltet wird.

### 4.7 Überprüfungsaufgabe

Ein „`reviewAssignment`“ steht für die verbindliche externe Zuordnung von Begutachtungsaufgaben zu einem Gutachter oder einer Gutachteridentität.

### 4.8 Bewertungsrunde

Ein „`reviewRound`“ bezeichnet einen eigenständigen Überprüfungszyklus für eine Einreichung oder eine Komponente.

### 4.9 Überarbeitung

Ein „`revision`“ bezeichnet einen nachvollziehbaren Zustand eines Manuskripts. Eine Überarbeitung DARF einen unveränderlichen historischen Zustand NICHT stillschweigend überschreiben.

### 4.10 Veröffentlichung

Ein „`publication`“ steht für den veröffentlichungsrelevanten Status oder die Metadaten, die von der externen Publishing-Plattform verwaltet werden.

## 5. Ressourcenkennungen

Jede extern bereitgestellte Ressource MUSS eine Kennung enthalten, die innerhalb ihrer Installation unveränderlich ist.

Eine Implementierung von `OMI` SOLLTE das Tupel speichern:

```text
installationId + resourceType + externalId
```

als kanonische externe Referenz.

Ein Connector SOLLTE außerdem eine undurchsichtige, global eindeutige „`uri`“ bereitstellen, sofern die Host-Plattform eine solche generieren kann.

Externe Bezeichner MÜSSEN als undurchsichtige Zeichenfolgen behandelt werden, auch wenn eine bestimmte Plattform derzeit Ganzzahlen verwendet.

Beispiel:

```json
{
  "installationId": "pkp-example",
  "resourceType": "submission",
  "externalId": "1542",
  "uri": "urn:example:ojs:submission:1542"
}
```

## 6.  Der Basispfad von „API“

HTTP-Implementierungen SOLLTEN die folgenden Ressourcen der Version 1 bereitstellen:

```text
/api/integrations/v1/
```

Bei einer Bereitstellung KANN die „API“ unterhalb eines anderen Anwendungspfads eingebunden werden, die Semantik der Ressourcen MUSS jedoch unverändert bleiben.

Alle Produktions-Endpunkte MÜSSEN HTTPS verwenden.

## 7. Ermittlung der Fähigkeiten

### 7.1 Endpunkt

```http
GET /api/integrations/v1/capabilities
```

Die Ermittlung der Fähigkeiten MUSS vorliegen, bevor optionale Vorgänge versucht werden.

Beispielantwort:

```json
{
  "protocol": "omi-integration/1",
  "implementation": {
    "name": "Open Manuscript Studio",
    "version": "0.1.0"
  },
  "capabilities": [
    "launch",
    "metadata.read",
    "files.read",
    "manuscript.read",
    "manuscript.write",
    "review.read",
    "review.write",
    "revision.write",
    "publication.export"
  ]
}
```

Kunden dürfen NICHT davon ausgehen, dass eine Funktion unterstützt wird, die nicht angegeben ist.

## 8. Verzeichnis der anfänglichen Fähigkeiten

In Version 1 werden die folgenden Funktionsnamen definiert:

| Fähigkeit | Bedeutung |
| --- | --- |
| `launch` | Angemeldeter Benutzer wechselt in einen „OMI“-Arbeitsbereich |
| `metadata.read` | Externe Metadaten der Einreichung lesen |
| `metadata.write` | Metadaten in das externe System schreiben |
| `contributors.read` | Mitwirkende und rollengebundene Berechtigungen anzeigen |
| `contributors.write` | Änderungen von Mitwirkenden dürfen geschrieben werden |
| `files.read` | Autorisierte Dateien auflisten und abrufen |
| `files.write` | Dateien in den externen Workflow hochladen |
| `manuscript.read` | Eine Manuskriptdarstellung von „OMI“ abrufen |
| `manuscript.write` | Einreichung eines Manuskripts für die Zeitschrift „OMI“ |
| `review.read` | Autorisierten Überprüfungskontext abrufen |
| `review.write` | Strukturierte Bewertungsergebnisse anzeigen |
| `revision.read` | Revisionsverlauf oder Metadaten zu Revisionen abrufen |
| `revision.write` | Neue externe Revision erstellen |
| `publication.read` | Metadaten/Status der Veröffentlichung lesen |
| `publication.export` | Ableitungen der Veröffentlichung exportieren |

In zukünftigen Spezifikationen KÖNNEN weitere Funktionsnamen registriert werden. Unbekannte Funktionsnamen MÜSSEN auf sichere Weise ignoriert werden.

## 9. Unterzeichnete Markteinführung

Ein Startvorgang ermöglicht es einem autorisierten Benutzer auf einer externen Plattform, den entsprechenden „OMI“-Arbeitsbereich aufzurufen, ohne die Datenbank oder die private Sitzung der externen Plattform offenzulegen.

Eine Startnutzlast SOLLTE Folgendes enthalten:

```json
{
  "protocol": "omi-integration/1",
  "installationId": "pkp-example",
  "context": {
    "externalId": "1",
    "type": "journal"
  },
  "submission": {
    "externalId": "1542"
  },
  "actor": {
    "externalId": "27"
  },
  "scope": ["manuscript.read", "manuscript.write"],
  "issuedAt": "2026-08-07T18:00:00Z",
  "expiresAt": "2026-08-07T18:05:00Z",
  "nonce": "b4b65f2b-0c63-4c21-8b82-876728f0bd31"
}
```

Die Nutzlast MUSS authentifiziert werden. Implementierungen KÖNNEN HMAC für gegenseitig konfigurierte Installationen verwenden und SOLLTEN asymmetrische Signaturen für Integrationen über unabhängige Vertrauensdomänen hinweg unterstützen.

Der empfangende Dienst MUSS vor dem Aufbau einer Integrationssitzung die Signatur, das Ablaufdatum, die Installations-ID, den Nonce-Wert oder einen gleichwertigen Schutz vor Wiederholungsangriffen sowie den angeforderten Geltungsbereich überprüfen.

## 10. Kontextdarstellung

Beispiel für einen Zeitschriftenkontext:

```json
{
  "externalId": "1",
  "type": "journal",
  "name": {"en": "Example Journal"},
  "url": "https://journal.example.org/"
}
```

Beispiel für einen Pressekontext:

```json
{
  "externalId": "3",
  "type": "press",
  "name": {"en": "Example University Press"},
  "url": "https://press.example.org/"
}
```

Das Feld „`type`“ ist beschreibend und erweiterbar. Clients DÜRFEN einen ansonsten gültigen Kontext NICHT allein deshalb ablehnen, weil dessen Typ unbekannt ist.

## 11. Metadaten zur Einreichung

Eine normalisierte Darstellung einer Eingabe SOLLTE lokalisierte Werte unterstützen.

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript",
    "hu": "Példa kézirat"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "identifiers": [],
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

Hostspezifische Statuswerte KÖNNEN angegeben werden, ein Connector SOLLTE diese jedoch nach Möglichkeit auch einem dokumentierten, normalisierten Workflow-Status zuordnen.

## 12. Mitwirkende

Darstellungen von Mitwirkenden SOLLTEN Identität, Rolle, Reihenfolge, Geltungsbereich und Kennungen beibehalten.

```json
{
  "externalId": "author-12",
  "name": {
    "given": "Ada",
    "family": "Example"
  },
  "roles": ["author"],
  "scope": {
    "type": "submission",
    "externalId": "1542"
  },
  "identifiers": [
    {"scheme": "orcid", "value": "0000-0000-0000-0000"}
  ]
}
```

Bei Sammelbänden KANN der Umfang eines Beitrags auf eine oder mehrere Komponenten beschränkt sein, anstatt die gesamte Einreichung zu umfassen.

## 13. Komponenten

Die Komponenten ermöglichen die Einbindung von Monografien, Sammelbänden und anderen zusammengesetzten Werken.

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "parentExternalId": null,
  "title": {"en": "Chapter Seven"},
  "sequence": 7
}
```

Ein „OJS“-Artikel-Konnektor DARF keine Komponenten offenlegen. Ein „OMP“-Konnektor DARF Kapitel, Vor- und Nachwort, Anhänge oder andere Publikationskomponenten offenlegen.

## 14. Dateiaustausch

Die Dateiaufzählung SOLLTE Metadaten zurückgeben, ohne dass eine sofortige binäre Übertragung erforderlich ist.

```json
{
  "externalId": "file-889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "size": 482931,
  "stage": "submission",
  "checksum": {
    "algorithm": "sha256",
    "value": "..."
  }
}
```

Der Download von Binärdateien MUSS eine Autorisierung erfordern, die unabhängig von der Kenntnis der Dateikennung ist. Private Dateisystempfade DÜRFEN NICHT offengelegt werden.

Hochgeladene Dateien SOLLTEN entsprechend der Semantik der Host-Plattform eine neue, nachverfolgbare Datei oder Revision erstellen.

## 15. Austausch von Manuskripten

Wenn „`manuscript.read`“ oder „`manuscript.write`“ unterstützt wird, ist das bevorzugte kanonische Austauschobjekt ein „OMI“-Paket, das den geltenden Spezifikationen für das „OMI“-Dateiformat und die Containerarchitektur entspricht.

Konnektoren KÖNNEN zusätzlich abgeleitete Formate wie JATS, HTML oder DOCX bekanntgeben.

Ein Derivat DARF das kanonische wissenschaftliche Objekt „OMI“ NICHT stillschweigend ersetzen, es sei denn, die empfangende Implementierung definiert dieses Verhalten ausdrücklich.

## 16. Revisionsmodell

Bei Überarbeitungsvorgängen MUSS die Herkunft dokumentiert bleiben.

Ein Änderungsprotokoll SOLLTE Folgendes enthalten:

```json
{
  "externalId": "revision-4",
  "sequence": 4,
  "createdAt": "2026-08-07T18:20:00Z",
  "createdBy": {"externalId": "27"},
  "source": "omi",
  "parentExternalId": "revision-3"
}
```

Verfügt die externe Plattform nicht über eine erstklassige Revisionsressource, MUSS der Konnektor dokumentieren, wie die Revisionen von OMI auf sein Datei- oder Workflow-Modell abgebildet werden.

## 17. Begutachtung durch Fachkollegen

### 17.1 Zuständigkeit

Das externe Workflow-System ist weiterhin maßgebend für die Zuweisung der Gutachter, die Fristen, den Status der Begutachtungsrunde, das Empfehlungsvokabular und die redaktionelle Entscheidung, sofern in einem Profil nicht ausdrücklich etwas anderes festgelegt ist.

### 17.2 Darstellung der Zuordnung zur Überprüfung

```json
{
  "externalId": "review-991",
  "roundExternalId": "round-2",
  "target": {
    "type": "submission",
    "externalId": "1542"
  },
  "reviewMode": "double-anonymous",
  "dueAt": "2026-09-01T23:59:59Z",
  "permissions": ["manuscript.read", "review.write"]
}
```

Das Ziel KANN stattdessen auf eine Komponente verweisen, wodurch eine Überprüfung auf Kapitelebene in Monografie-Workflows ermöglicht wird.

### 17.3 Anonymität

Die Identitätsfilterung MUSS auf dem Server erfolgen, bevor eine Überprüfungsnachricht zurückgesendet wird. Es DARF NICHT darauf vertraut werden, dass eine clientseitige Benutzeroberfläche bereits übermittelte Identitäten verbirgt.

### 17.4 Ergebnis der strukturierten Überprüfung

```json
{
  "assignmentExternalId": "review-991",
  "recommendation": "revisions-required",
  "summary": "The argument is promising but requires clarification.",
  "annotations": [
    {
      "anchor": "omi:anchor:01J...",
      "visibility": "author-and-editor",
      "body": "Please provide a source for this statement.",
      "status": "open"
    }
  ]
}
```

Der genaue Wortschatz der Empfehlungen KANN vom Host definiert werden. Connectoren SOLLTEN die zulässigen Werte als Teil des Prüfkontexts veröffentlichen.

## 18. Austausch von Veröffentlichungen

Publikationsressourcen KÖNNEN publikationsbezogene Metadaten und Anforderungen an abgeleitete Daten offenlegen. „OJS“-Profile können den Publikationsstatus Artikeln und Ausgaben zuordnen; „OMP“-Profile können ihn Monografien, Reihen, Kapiteln, Publikationsformaten und Katalogdatensätzen zuordnen.

OMI Man darf NICHT davon ausgehen, dass eine Veröffentlichung gleichbedeutend mit einer Auftragsvergabe ist.

## 19. Profilzuordnung bei „OJS“

Ein „OJS“-Konnektor SOLLTE Folgendes abbilden:

| OMI-Ressource | OJS-Konzept |
| --- | --- |
| Installation | Installation von „OJS“ |
| Kontext | Zeitschrift |
| Einreichung | Einreichung/Artikel-Workflow-Objekt |
| Komponente | optionale Artikelkomponente |
| Mitwirkender | Autor/Mitwirkender |
| Datei | eingereichte Datei |
| Aufgabenüberprüfung | Aufgabenüberprüfung |
| Bewertungsrunde | Bewertungsrunde |
| Revision | Nachverfolgbarer Status der Einreichung/Revision |
| Veröffentlichung | OJS Veröffentlichung/Artikel Veröffentlichungsstatus |

Der „OJS“-Konnektor MUSS die unterstützten Anwendungsdienste, Repositorys und Hooks von „OJS“ nutzen, anstatt direkt von Studio aus auf andere Datenbanken zuzugreifen.

## 20. Profilzuordnung bei „OMP“

Ein „OMP“-Konnektor SOLLTE Folgendes abbilden:

| OMI-Ressource | OMP-Konzept |
| --- | --- |
| Installation | Installation von „OMP“ |
| Kontext | Presse |
| Einreichung | Objekt „Monografie/Einreichungsablauf“ |
| Bestandteil | Kapitel, Vorwort, Nachwort, Anhang oder anderer Bestandteil |
| Mitwirkender | Autor, Herausgeber, Übersetzer, Kapitelautor oder sonstiger Mitwirkender |
| Datei | Einreichungs-/Produktionsdatei |
| Aufgabenüberprüfung | Aufgabenüberprüfung |
| Bewertungsrunde | Bewertungsrunde |
| Überarbeitung | Nachverfolgbarer Manuskript-/Überarbeitungsstatus |
| Veröffentlichung | Monografie/Katalog |

Der „OMP“-Konnektor MUSS den Geltungsbereich der Mitwirkenden beibehalten, sofern dieser verfügbar ist, und DARF die Urheberschaft auf Kapitelebene NICHT auf die Urheberschaft des gesamten Buches verallgemeinern.

## 21. Berechtigungsbereiche

Gültigkeitsbereiche SOLLTEN eng gefasst gewährt werden. Version 1 sieht auf Funktionen abgestimmte Gültigkeitsbereiche vor, darunter:

```text
metadata.read
metadata.write
contributors.read
contributors.write
files.read
files.write
manuscript.read
manuscript.write
review.read
review.write
revision.read
revision.write
publication.read
publication.export
```

Der Besitz eines gültigen Integrationsnachweises DARF NICHT alle Anwendungsbereiche umfassen.

## 22. HTTP-Semantik

JSON Endpunkte MÜSSEN UTF-8 verwenden JSON und SOLLTEN den folgenden Medientyp verwenden:

```text
application/json
```

Zukünftige „OMI“-spezifische Medientypen KÖNNEN für kanonische Pakete oder strukturierte Ressourcen registriert werden.

Implementierungen SOLLTEN die herkömmliche HTTP-Statussemantik verwenden:

- `200` erfolgreiches Lesen oder Aktualisieren;
- `201` Neue Ressource angelegt;
- `204` erfolgreicher Vorgang ohne Antworttext;
- `400` Fehlerhafte Anfrage;
- `401` fehlende oder ungültige Authentifizierung;
- `403` authentifiziert, aber nicht autorisiert;
- `404` Ressource nicht gefunden oder absichtlich nicht offengelegt;
- `409` Synchronisations- oder Revisionskonflikt;
- `410` Externe Quelle absichtlich entfernt;
- `422` semantisch ungültige Nutzdaten;
- `429` Ratenlimit überschritten.

## 23. Fehlerdarstellung

Für Fehler SOLLTE ein stabiler, maschinenlesbarer Code verwendet werden.

```json
{
  "error": {
    "code": "revision_conflict",
    "message": "The external manuscript has changed since the requested base revision.",
    "details": {
      "expectedRevision": "revision-3",
      "currentRevision": "revision-4"
    }
  }
}
```

Clients DÜRFEN sich bei der Ablaufsteuerung NICHT auf für Menschen lesbare Fehlermeldungen verlassen.

## 24. Parallelität und Synchronisation

Bei Schreibvorgängen SOLLTEN Revisionskennungen, Entity-Tags, Zeitstempel oder ein anderer expliziter Mechanismus zur Vorabprüfung verwendet werden, um stillschweigende verlorene Aktualisierungen zu verhindern.

Wenn beide Systeme dasselbe maßgebliche Feld oder denselben Manuskriptstatus geändert haben, SOLLTE der Konnektor einen Konflikt melden, anstatt stillschweigend einen Gewinner auszuwählen.

## 25. Idempotenz

Erstellungsvorgänge, die wiederholt werden können, SOLLTEN einen Idempotenzschlüssel unterstützen. Eine wiederholte Anfrage mit demselben Schlüssel und identischer Nutzlast SOLLTE KEINE doppelten Revisionen, Dateien, Überprüfungen oder Einreichungen erzeugen.

## 26. Sicherheitsanforderungen

Produktionsintegrationen MÜSSEN HTTPS verwenden.

Geheimnisse DÜRFEN NICHT in für den Browser sichtbaren URLs platziert werden, wenn eine sicherere Übermittlungsmethode zur Verfügung steht. Gemeinsame Geheimnisse MÜSSEN rotierbar sein. Beim Signaturvergleich MÜSSEN, soweit möglich, zeitunsensitive Operationen verwendet werden.

Implementierungen SOLLTEN sicherheitsrelevante Integrationsereignisse protokollieren, ohne dabei Zugangsdaten, unverschlüsselte Geheimnisse, private Überprüfungsinhalte oder Manuskriptinhalte über das für den Betrieb erforderliche Maß hinaus unnötig zu protokollieren.

## 27. Datenschutz und Vertraulichkeit der Begutachtung

Konnektoren MÜSSEN den Grundsatz der Datenminimierung anwenden. Es SOLLTEN nur Daten übertragen werden, die für den angeforderten Vorgang und den genehmigten Umfang erforderlich sind.

Bei doppelt anonymen und anderen vertraulichen Überprüfungsmodi MÜSSEN Identitäten, Dateimetadaten, Dokumentmetadaten und andere identifizierende Informationen an der Servergrenze gefiltert werden, sofern dies gemäß den Richtlinien erforderlich ist.

## 28. Herkunft

Importierte Daten SOLLTEN Informationen zur Herkunft enthalten, aus denen die externe Installation, die Ressourcen-ID, der Synchronisierungszeitpunkt und, sofern verfügbar, die Quellversion hervorgehen.

Generierte Derivate SOLLTEN die Revision der Quelle „OMI“ vermerken, aus der sie erstellt wurden.

## 29. Sanfte Trennung

Ein „OMI“-Manuskript MUSS auch dann noch interpretierbar und exportierbar sein, wenn eine externe Integration nicht verfügbar ist oder entfernt wurde.

Externe Workflow-Verknüpfungen MÜSSEN daher als explizite Verweise und Herkunftsangaben dargestellt werden und nicht als undokumentierte Abhängigkeiten von entfernten Datenbanktabellen oder proprietären Laufzeitzuständen.

Das Entfernen einer Integration DARF das kanonische Dokument „OMI“ NICHT ungültig machen.

## 30. Erweiterbarkeit

Plattformspezifische Erweiterungen KÖNNEN unter Erweiterungsobjekten mit Namensraum enthalten sein. Kern-Clients MÜSSEN in der Lage sein, unbekannte Erweiterungen sicher zu ignorieren.

Beispiel:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

Eine Erweiterung DARF die Semantik eines Kernfeldes NICHT neu definieren.

## 31. Versionsaushandlung

Die Protokollkennung für diese Spezifikation lautet:

```text
omi-integration/1
```

Änderungen, die rückwärtsinkompatibel sind, erfordern eine neue Hauptprotokollkennung. Zusätzliche Funktionen und optionale Felder KÖNNEN eingeführt werden, ohne die Hauptprotokollkennung zu ändern, sofern bestehende Clients diese sicher ignorieren können.

Konnektoren SOLLTEN eine Hauptversion des Protokolls, die sie nicht verstehen, ablehnen, anstatt eine unsichere Teilinterpretation zu versuchen.

## 32. Konformitätsprofile

Ein zukünftiges „OMI“-Register KÖNNTE benannte Profile veröffentlichen, wie zum Beispiel:

```text
omi-integration/1/core
omi-integration/1/ojs
omi-integration/1/omp
omi-integration/1/repository
omi-integration/1/review
```

Ein Profil definiert die erforderlichen Funktionen und Zuordnungen für eine Klasse externer Systeme unter Beibehaltung des gemeinsamen Ressourcenvokabulars dieser Spezifikation.

## 33. Designinvariante

Die Integrations-APIen MÜSSEN die architektonische Trennung zwischen wissenschaftlichem Objekt und Workflow-Plattform gewährleisten.

Das externe System kann die Einreichung, Begutachtung, Erstellung, Veröffentlichung, Hinterlegung oder Langzeitarchivierung koordinieren. OMI kann Funktionen zur Erstellung, strukturierten Begutachtung, Annotation, Transformation und zur Bereitstellung portabler wissenschaftlicher Objekte bereitstellen. Keine der beiden Seiten ist verpflichtet, das interne Persistenzmodell der anderen Seite zu übernehmen.

Das daraus resultierende Ergebnis sollte austauschbar, überprüfbar und rückgängig machbar bleiben.

> Workflow-Systeme verwalten die Prozesse rund um das Manuskript. Das Manuskript selbst bleibt dabei übertragbar.
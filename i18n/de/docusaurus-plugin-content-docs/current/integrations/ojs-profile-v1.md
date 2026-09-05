---
title: OJS Integrationsprofil v1
description: OMI Integration des „API“-Profils der Version 1 für Open Journal Systems, einschließlich der Arbeitsabläufe für Einreichungen, Dateien, Begutachtung, Überarbeitungen und Veröffentlichungen.
---

# OJS Integrationsprofil v1

**Status:** Entwurf  
**Basisprotokoll:** `omi-integration/1`  
**Profil-ID:** `omi-integration/1/ojs`

## 1. Geltungsbereich

Das Integrationsprofil „OJS“ legt fest, wie eine Open Journal Systems-Installation (OJS) ihren Workflow für die Zeitschriftenveröffentlichung auf das plattformneutrale „OMI“-IntegrationsAPI, Version 1, abbildet.

Das Profil ist für eine Architektur vorgesehen, in der OJS und der Dienst OMI als separate Anwendungen mit separaten Persistenzschichten bestehen bleiben. Das Integrations-Plugin OJS fungiert als schlanker Adapter. Open Manuscript Studio DARF NICHT direkt auf die Datenbank OJS oder das Verzeichnis für private Dateien zugreifen.

OJS bleibt die maßgebliche Referenz für den Arbeitsablauf bei Fachzeitschriften. „OMI“ bleibt die maßgebliche Referenz für das portable strukturierte Manuskript und die Studio-eigenen wissenschaftlichen Interaktionen.

## 2. Architektonische Grenze

```text
OJS
Own application and database
        |
        | OJS OMI Integration Plugin
        | supported OJS services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

Der Adapter DARF KEINE Patches an die Kern-Dateien von OJS erfordern. Er SOLLTE die unterstützten Erweiterungsmechanismen von PKP/OJS sowie die APIs auf Anwendungsebene nutzen.

## 3. Autoritätsmodell

OJS ist maßgeblich für:

- Zeitschriftenidentität und Zeitschriftenkonfiguration;
- Status der Einreichung und Phase des Arbeitsablaufs;
- redaktionelle Aufträge;
- Einladung an Gutachter und Erteilung eines Gutachtenauftrags;
- Prüfrunden und Fristen;
- von OJS akzeptierte Empfehlungswerte der Gutachter;
- redaktionelle Entscheidungen;
- Status des Workflows für die Einreichungsdatei;
- Veröffentlichungsstatus;
- Aufgabe zuweisen;
- Veröffentlichung eines öffentlichen Artikels.

OMI / Das Studio ist zuständig für:

- die Dokumentstruktur des „OMI“;
- stabile Verankerungen;
- Studio-eigene Anmerkungen;
- gemeinsame Bearbeitung von Manuskripten;
- Strukturelle Manuskriptgeschichte innerhalb von „OMI“;
- in Studio erstellte Anmerkungen zur strukturierten Überprüfung;
- Auflösungsstatus der Studio-Anmerkungen;
- OMI Paketerstellung.

Synchronisierte Metadaten MÜSSEN die Herkunft dokumentieren und DÜRFEN NICHT unbemerkt konkurrierende Autoritäten erstellen.

## 4. Erforderliche Profilzuordnung

| OMI Integration API resource | OJS concept |
| --- | --- |
| `installation` | Installation „OJS“ |
| `context` | Zeitschrift |
| `submission` | OJS Beitrag |
| `component` | optionale Komponente für Artikel/Beiträge |
| `contributor` | Autor/Mitwirkender der vorliegenden Veröffentlichung |
| `file` | Einreichungsdatei unter OJS |
| `reviewAssignment` | Aufgabe zur Rezension von „OJS“ |
| `reviewRound` | OJS-Testreihe |
| `revision` | Nachverfolgbarer Status von Manuskripten und Überarbeitungen |
| `publication` | OJS Veröffentlichungsverlauf und Veröffentlichungsstatus |

OJS Numerische Bezeichner MÜSSEN an der Protokollgrenze als Zeichenfolgen serialisiert werden.

## 5. Identitätsangaben zur Installation

Jede „OJS“-Bereitstellung, die mit einem „OMI“-Dienst verbunden ist, MUSS über eine stabile „`installationId`“-Konfiguration für die Integration verfügen.

Die Kennung DARF sich NICHT ändern, wenn eine Zeitschrift umbenannt wird oder sich ihre öffentliche URL ändert.

Beispiel:

```json
{
  "installationId": "ojs-example-university",
  "platform": "ojs",
  "profile": "omi-integration/1/ojs",
  "baseUrl": "https://journals.example.edu/"
}
```

Der Dienst „OMI“ SOLLTE die Installations-ID unabhängig von der aktuellen Basis-URL speichern.

## 6. Kontext der Zeitschrift

Ein „OJS“-Journal entspricht einem „OMI“-`context`.

Beispiel:

```json
{
  "externalId": "1",
  "type": "journal",
  "path": "example-journal",
  "name": {
    "en": "Example Journal"
  },
  "url": "https://journals.example.edu/index.php/example-journal"
}
```

Die Zeitschriften-ID ist der stabile externe Bezeichner. Der Zeitschriftenpfad SOLLTE ebenfalls zur Navigation angegeben werden, DARF jedoch NICHT als einzige dauerhafte Identität betrachtet werden.

## 7. Zuordnung der Eingaben

Eine Einreichung unter OJS entspricht einer Ressource unter OMI`submission`.

Ein Konnektor SOLLTE mindestens Folgendes bereitstellen:

- Einreichungs-ID;
- aktuelle Phase des Arbeitsablaufs;
- Aktuelle Metadaten zur Veröffentlichung;
- primäre Ländereinstellung;
- lokalisierter Titel;
- lokalisierte Zusammenfassung, sofern verfügbar;
- lokalisierte Schlüsselwörter, sofern verfügbar;
- für die Synchronisierung erforderliche Daten;
- bereits der Einreichung/Veröffentlichung zugewiesene persistente Identifikatoren, sofern zulässig.

Beispiel:

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

Der Konnektor SOLLTE zwischen dem Workflow-Status „OJS“ und dem Manuskriptstatus „OMI“ unterscheiden. Dass sich eine Einreichung im Begutachtungsstatus „OJS“ befindet, bedeutet nicht, dass das Dokument „OMI“ unveränderlich ist.

## 8. Metadaten zur Veröffentlichung

OJS kann Metadaten für die Veröffentlichung enthalten, die von den Einreichungsdaten auf Workflow-Ebene getrennt sind. Der Konnektor SOLLTE die für den Autor bestimmten bibliografischen Metadaten aus der für die „OJS“-Version geeigneten Publikationsdarstellung auslesen, anstatt sie aus Datenbanktabellen zu rekonstruieren.

Bei einer Synchronisation im Rahmen von „OMI“ DARF NICHT davon ausgegangen werden, dass eine Einreichung nur einen historischen Veröffentlichungsstatus aufweist.

Der Konnektor SOLLTE die Identifikatoren für die Einreichung unter OJS und den zugehörigen Publikationsdatensatz beibehalten, sofern diese verfügbar sind.

## 9. Mitwirkende

OJS Die Autoren/Mitwirkenden sind den Ressourcen für Mitwirkende auf OMI zugeordnet.

Der Konnektor SOLLTE Folgendes beibehalten:

- Kennung eines externen Mitwirkenden;
- Vornamen und Nachnamen;
- bevorzugter öffentlicher Name, sofern verfügbar;
- E-Mail nur dann versenden, wenn der aktuelle Integrationsumfang und der Workflow eine Weitergabe zulassen;
- Zugehörigkeit;
- Land, sofern verfügbar und zulässig;
- ORCID und andere Kennungen;
- Reihenfolge der Mitwirkenden;
- die Rolle „Mitwirkender“, die von OJS bereitgestellt wird;
- ggf. Korrespondenzbezeichnung.

Die Identität der Mitwirkenden MUSS gefiltert werden, wenn dies gemäß den Richtlinien für anonyme Begutachtung erforderlich ist.

Der Connector DARF die Identität des Autors einem Gutachter NICHT preisgeben, wenn der „OJS“-Workflow die Anonymität des Autors vorschreibt.

## 10. Komponenten

Die meisten Zeitschriftenartikel lassen sich als einzelne Einreichung ohne untergeordnete Komponenten darstellen. Das Profil „OJS“ erfordert daher keine Unterstützung für Komponenten.

Ein Konnektor KANN, sofern sinnvoll, vom Host definierte Komponenten bereitstellen, beispielsweise Klassen für Zusatzmaterial oder strukturierte Artikelkomponenten. Solche Erweiterungen DÜRFEN die Semantik der Kernressource der Einreichung NICHT verändern.

## 11. Einreichungsdateien

OJS Die eingereichten Dateien werden den Ressourcen unter OMI`file` zugeordnet.

Antworten mit einer Dateiliste SOLLTEN Folgendes enthalten:

- eindeutige Kennung einer externen Datei;
- Anzeige-/Dateiname;
- Medientyp, sofern bekannt;
- Größe, sofern verfügbar;
- gegebenenfalls die Workflow-Phase oder das Genre;
- Informationen zur Überarbeitung, sofern verfügbar;
- Prüfsumme, sofern dies praktikabel ist;
- Erstellung/Aktualisierung der für die Synchronisierung erforderlichen Metadaten.

Beispiel:

```json
{
  "externalId": "889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "revision": 2
}
```

Studio MUSS binäre Inhalte über einen autorisierten Integrationsendpunkt von OJS abrufen. Die Kenntnis einer OJS-Datei-ID allein DARF KEINE Berechtigung zum Herunterladen darstellen.

Das Plugin DARF KEINE Pfade im Dateisystem des „OJS“-Servers offenlegen.

## 12. Dateiimport in Studio

Wenn eine „OJS“-Einreichung zum ersten Mal in Studio geöffnet wird, SOLLTE der Benutzer in der Lage sein, eine zulässige Manuskriptdatei auszuwählen oder eine automatisch ausgewählte primäre Manuskriptdatei gemäß den Richtlinien des Konnektors zu verwenden.

Der Import KANN „DOCX“, „JATS“, „HTML“ oder eine andere unterstützte Darstellung in das Dokumentmodell „OMI“ konvertieren.

Die ursprüngliche Dateireferenz und Prüfsumme von „OJS“ SOLLTEN als Herkunftsnachweis beibehalten werden.

Beim Import darf die QuellOJS-Datei NICHT verändert werden.

## 13. Rücksendung einer Überarbeitung an OJS

Bei der Rücksendung eines Manuskripts von „Studio“ an „OJS“ MUSS gemäß der Workflow-Semantik unter OJS eine nachverfolgbare neue Datei oder Revision auf der Seite von „OJS“ erstellt werden.

Der Konnektor DARF eine ältere Quelldatei NICHT ohne Vorwarnung überschreiben.

Ein Änderungsantrag SOLLTE Folgendes enthalten:

```json
{
  "baseExternalRevision": "3",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Author revision from Open Manuscript Studio"
}
```

Der „OJS“-Konnektor SOLLTE den Vorgang aufgrund eines Synchronisationskonflikts ablehnen, wenn sich der erwartete Basiszustand geändert hat und eine automatische Abstimmung zu Datenverlusten führen könnte.

## 14. Signierter Startablauf

Das Plugin „OJS“ SOLLTE die Aktion **„In Studio öffnen“** nur den Benutzern zur Verfügung stellen, die für die entsprechende Einreichung und den entsprechenden Vorgang autorisiert sind.

Die Startaussage SOLLTE Folgendes angeben:

- `installationId`;
- Zeitschriftenkontext-ID;
- Einreichungs-ID;
- OJS Benutzer-ID;
- angeforderte Bereiche;
- Ausstellungszeitpunkt;
- Ablaufzeit;
- Nonce.

Beispiel für den Umfang der Bearbeitung einer Überarbeitung durch einen Autor:

```json
[
  "metadata.read",
  "contributors.read",
  "files.read",
  "manuscript.read",
  "manuscript.write",
  "revision.write"
]
```

Ein Gutachter MUSS einen enger gefassten, auf die Begutachtung bezogenen Aufgabenbereich erhalten.

## 15. Benutzeridentität und Verknüpfung von Konten

Eine Benutzerkennung von „OJS“ ist eine externe Identitätsangabe und DARF NICHT automatisch zu einer Studio-Kontokennung werden.

Studio MAY verknüpft nach erfolgreichem signiertem Start und lokaler Autorisierung ein authentifiziertes Studio-Konto mit einer oder mehreren externen Identitäten unter OJS.

Ein empfohlener Schlüssel lautet:

```text
installationId + externalUserId
```

Die E-Mail-Adresse DARF NICHT als einziger unveränderlicher, systemübergreifender Identitätsschlüssel verwendet werden.

## 16. Zuständigkeit für die Begutachtung durch Fachkollegen

OJS gilt weiterhin als maßgeblich für:

- ob ein Überprüfungsauftrag vorliegt;
- welcher Rezensent es besitzt;
- die aktuelle Überprüfungsrunde;
- Fälligkeitstermine;
- Überprüfung der Methode/Richtlinie;
- ob die Identität des Autors offengelegt werden darf;
- ob die Identität der Gutachter offengelegt werden darf;
- zulässige Empfehlungswerte;
- Fertigstellungsstatus;
- redaktionelle Entscheidung nach Prüfung.

Das Studio darf keinesfalls eigenmächtig einen Gutachter von „OJS“ benennen oder eine redaktionelle Entscheidung von „OJS“ vorwegnehmen.

## 17. Start der Überprüfung

Bei der Einleitung einer Überprüfung MUSS ein bestimmter autorisierter Überprüfungsauftrag angegeben werden, nicht lediglich eine Einreichung und ein Benutzer.

Beispiel:

```json
{
  "installationId": "ojs-example-university",
  "context": {"externalId": "1", "type": "journal"},
  "submission": {"externalId": "1542"},
  "reviewAssignment": {"externalId": "991"},
  "reviewRound": {"externalId": "2"},
  "actor": {"externalId": "77"},
  "scope": ["manuscript.read", "review.read", "review.write"]
}
```

Das Plugin „OJS“ MUSS überprüfen, ob der aktuelle Benutzer „OJS“ berechtigt ist, diese Zuweisung zu bearbeiten, bevor die Startbestätigung ausgegeben wird.

## 18. Anonymität prüfen

Der „OJS“-Konnektor MUSS die tatsächlich geltende Richtlinie zur Anonymität bei der Überprüfung anhand der maßgeblichen Workflow-Konfiguration und des Zuordnungskontexts von „OJS“ ermitteln.

Vor der Übertragung einer für den Prüfer sichtbaren Nutzlast MUSS der Konnektor Daten entfernen, für deren Einsicht der Prüfer keine Berechtigung besitzt.

Die Filterung KANN Folgendes umfassen:

- Namen der Mitwirkenden;
- E-Mail-Adressen der Mitwirkenden;
- Zugehörigkeiten;
- ORCID Bezeichner;
- Danksagungen;
- Identifizierung von Dateimetadaten;
- Identität des Hochladenden;
- andere Metadaten, die die konfigurierte Überprüfungsrichtlinie außer Kraft setzen würden.

Studio MUSS die übermittelte Richtlinie auch serverseitig durchsetzen. Das Verbergen einer Identität ausschließlich im Code von „React“/UI entspricht nicht den Vorgaben.

## 19. Strukturierte Überprüfung in Studio

Studio MAY stellt eine „OJS“-Rezension dar, d. h. eine strukturierte Rezension nach dem Schema „OMI“, die Folgendes enthält:

- Text der Gesamtbewertung;
- Kommentare, die nur für den Redakteur sichtbar sind;
- Kommentare, die für den Autor sichtbar sind;
- Empfehlung;
- verankerte Anmerkungen;
- Verweise auf Anhänge;
- Fertigstellungsstatus;
- Antworten und Status der Annotationsauflösung.

Eine verankerte Anmerkung SOLLTE nach Möglichkeit auf einen stabilen Anker unter OMI verweisen und nicht auf eine gerenderte Seitenkoordinate unter PDF.

## 20. Eine Bewertung abgeben

Bei einer Rücksendung im Rahmen einer Überprüfung MÜSSEN der Überprüfungsauftrag „OJS“ sowie die Überprüfungsrunde angegeben werden.

Beispiel:

```json
{
  "assignmentExternalId": "991",
  "roundExternalId": "2",
  "recommendation": "revisions-required",
  "summary": "The manuscript requires clarification in several places.",
  "editorOnly": "The central argument is publishable after revision.",
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

Der Konnektor MUSS die Empfehlung anhand der für den Überprüfungs-Kontext „OJS“ zulässigen Werte validieren.

Die Einreichung einer Studio-Rezension SOLLTE NICHT automatisch zu einer redaktionellen Entscheidung führen, es sei denn, OJS sieht einen solchen Vorgang ausdrücklich vor und genehmigt ihn.

## 21. Mehrere Überprüfungsrunden

Studio MUSS die Überprüfungsrunden von „OJS“ als eigenständige externe Workflow-Objekte behandeln.

Anmerkungen aus einer früheren Runde SOLLTEN historisch dieser Runde zugeordnet bleiben, auch wenn sie zur Nachverfolgung der Lösung in die nächste Runde übernommen werden.

Eine spätere Runde KANN auf frühere Anmerkungen verweisen, DARF jedoch den historischen Überprüfungsverlauf NICHT überschreiben.

## 22. Überarbeitung durch den Autor und Stellungnahme

Sofern der Workflow von „OJS“ eine Überarbeitung durch den Autor zulässt, kann Studio einen Autoren-Arbeitsbereich bereitstellen, der Überprüfungsanmerkungen enthält, die der Autor einsehen darf.

Der Autor DARF:

- den Inhalt des verankerten Manuskripts überarbeiten;
- auf Anmerkungen zu Rezensionen antworten;
- eine Antwort aus der Perspektive des Autors als beantwortet markieren;
- Eine neue Revision von „OMI“ erstellen;
- Senden Sie ein Korrekturpaket bzw. eine Korrekturdatei an OJS zurück.

Der lokale Lösungsstatus eines Autors DARF NICHT als Zustimmung des Gutachters ausgewiesen werden, es sei denn, der Gutachter oder Herausgeber bestätigt dies ausdrücklich.

## 23. Redaktionelle Nutzung

Redakteure können, vorbehaltlich der Genehmigung durch OJS, einen umfassenderen Zuständigkeitsbereich erhalten als Autoren oder Gutachter.

Ein Studio-Arbeitsbereich für Redakteure KANN Folgendes anzeigen:

- alle genehmigten Prüfberichte;
- Kommentare, die nur für den Redakteur sichtbar sind;
- Überarbeitung von Manuskripten;
- Status der Annotationsauflösung;
- Synchronisationsstatus.

Die verbindliche redaktionelle Entscheidung MUSS weiterhin unter „OJS“ festgehalten werden.

## 24. Integration von Veröffentlichungen

Nach der Freigabe exportiert Studio MAY Publikationsderivate für die Produktion im OJS, einschließlich der Formate, die von den OMI-Spezifikationen und den installierten Konvertern unterstützt werden.

Zu den möglichen Ergebnissen gehören:

- OMI Paket;
- JATS XML;
- HTML;
- DOCX-abgeleitete Produktionsleistung;
- damit verbundene Vermögenswerte.

OJS bleibt maßgeblich für die Veröffentlichungsplanung, die Zuweisung von Ausgaben, den Workflow für Veröffentlichungsmetadaten (DOI/publication), den Status von Korrekturfahnen und Veröffentlichungen sowie die öffentliche Bereitstellung, sofern dies nicht durch eine zukünftige Profilerweiterung ausdrücklich delegiert wird.

## 25. Anforderungen an die Leistungsfähigkeit

Ein „OJS“-Konnektor, der das Basisprofil „`omi-integration/1/ojs`“ beansprucht, MUSS Folgendes unterstützen:

```text
launch
metadata.read
contributors.read
files.read
```

Ein Konnektor, der **OJS-Manuskriptsynchronisation** beansprucht, SOLLTE zusätzlich Folgendes unterstützen:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

Ein Konnektor, der eine **OJS-Peer-Review-Integration** beansprucht, MUSS zusätzlich Folgendes unterstützen:

```text
review.read
review.write
```

Ein Konnektor, der **OJS-Publikationsintegration** beansprucht, SOLLTE Folgendes bekanntgeben:

```text
publication.read
publication.export
```

## 26. Empfohlene Endpunktfläche

Eine Implementierung KANN das Routing an ihr Host-Framework anpassen, SOLLTE jedoch gleichwertige Operationen für Folgendes bereitstellen:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

Diese Pfade beschreiben Protokollressourcen; sie erfordern nicht, dass „OJS“ seine native REST-Struktur API ersetzt. Das Integrations-Plugin KANN einen eigenen Adapter-Namespace bereitstellen.

## 27. Genehmigung

Jeder Vorgang MUSS auf der Anwendungsebene von „OJS“ autorisiert werden.

Der Konnektor DARF sich NICHT ausschließlich auf den Besitz einer Einreichungs-ID, einer Datei-ID, einer ID für die Zuweisung zur Begutachtung oder einer angemeldeten Studio-Sitzung stützen.

Service-zu-Service-Anmeldedaten legen die Verbindung zwischen den Konnektoren fest; die Benutzer-/Workflow-Berechtigung bestimmt, ob auf eine bestimmte Ressource zugegriffen werden darf.

## 28. Synchronisationsstatus

Studio SOLLTE Synchronisationsmetadaten beibehalten, darunter:

```text
installationId
contextExternalId
submissionExternalId
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

Der Synchronisationsstatus ist eine Metadatenangabe zur Integration und MUSS vom kanonischen Manuskriptinhalt unter OMI getrennt bleiben.

## 29. Konfliktbewältigung

Der Connector SOLLTE „`409 Conflict`“ zurückgeben, wenn Studio versucht, aus einer veralteten externen Basisrevision zu schreiben, oder wenn sich der Status „OJS“ so geändert hat, dass ein sicherer Vorgang nicht mehr möglich ist.

Der Konnektor DARF Konflikte bei Manuskripten NICHT dadurch lösen, dass er Inhalte von „OJS“ stillschweigend überschreibt.

## 30. Idempotenz

Das Hochladen von Überarbeitungen, das Einreichen zur Begutachtung und andere wiederholbare Schreibvorgänge SOLLTEN einen Idempotenzschlüssel akzeptieren.

Ein Wiederholungsversuch im Netzwerk DARF NICHT versehentlich zu doppelten Begutachtungsberichten oder doppelten Manuskriptüberarbeitungen führen.

## 31. Prüfung und Herkunft

Integrationsvorgänge SOLLTEN nachverfolgbar sein. Zu den relevanten Aufzeichnungen gehören:

- Ausgabe und Annahme von Wertpapieren;
- Manuskriptimport;
- Dateiabruf;
- Rückgabe nach Nachbesserung;
- Start der Rezension;
- Einreichung einer Rezension;
- Export der Veröffentlichung.

In den Prüfprotokollen DÜRFEN keine Manuskriptinhalte, Passwörter, gemeinsame Geheimnisse oder vertrauliche Begutachtungstexte unnötigerweise erfasst werden.

## 32. Fehlerlokalisierung

Ein nicht verfügbares Studio DARF die normale Verwaltung von „OJS“ oder den Veröffentlichungs-Workflow nicht behindern, sofern diese nicht ausdrücklich von Studio abhängen.

Eine nicht verfügbare Installation von „OJS“ DARF ein bereits importiertes Manuskript aus „OMI“ NICHT beschädigen oder ungültig machen.

Das Plugin „OJS“ SOLLTE bei geschützten Integrationsvorgängen mit einem Fehler „geschlossen“ zurückgeben und autorisierten Benutzern aussagekräftige Fehlerinformationen bereitstellen.

## 33. Kompatibilität bei Upgrades

Das Integrations-Plugin SOLLTE den versionsspezifischen Zuordnungscode von OJSvon der Protokollschicht OMI trennen.

Konzeptionell:

```text
OMI Integration API
        |
OJS profile mapper
        |
OJS-version adapter
        |
Supported OJS services / repositories / hooks
```

Diese Trennung ermöglicht es, einen OJS 3.5-Adapter weiterzuentwickeln oder zu ersetzen, ohne den plattformneutralen `omi-integration/1`-Vertrag zu ändern.

## 34. Erweiterungen

OJS-spezifische Werte KÖNNEN unter einem Erweiterungsobjekt mit Namespace angegeben werden:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

Studio MUSS in der Lage sein, unbekannte OJS-Erweiterungen sicher zu ignorieren. Eine Erweiterung DARF KEIN Feld aus dem Kern OMI Integration API neu definieren.

## 35. Konformität

Eine Implementierung, die die Konformität mit dem „`omi-integration/1/ojs`“ beansprucht, MUSS:

1. Entspricht der „OMI“-Integration API v1;
2. eine stabile IdentitätsOJS-Installation bereitstellen;
3. Zeitschriften den Kontexten zuordnen und „OJS“-Beiträge den Beiträgen zuordnen;
4. Autorisierung auf Anwendungsebene verwenden;
5. Vermeiden Sie den direkten Zugriff von Studio auf die Datenbanktabellen von „OJS“ und auf private Dateipfade;
6. für unterstützte Funktionen werben;
7. externe Identifikatoren und die Herkunft beibehalten;
8. die Anonymität der Bewertungen serverseitig durchsetzen, wenn die Bewertungsintegration aktiviert ist;
9. einen nachvollziehbaren Änderungsverlauf für Schreibvorgänge aufbewahren;
10. bleiben sicher von Studio abkoppelbar.

## 36. Designinvariante

Der „OJS“-Konnektor integriert einen Zeitschriften-Workflow in „OMI“; er verwandelt „OMI“ jedoch nicht in ein „OJS“-Subsystem.

OJS verwaltet den Zeitschriftenprozess rund um die wissenschaftliche Arbeit. Studio bietet eine strukturierte Umgebung für das Verfassen, Kommentieren, Begutachten, Überarbeiten und Aufbereiten von Beiträgen. Das Manuskript bleibt dabei zwischen beiden Systemen übertragbar.
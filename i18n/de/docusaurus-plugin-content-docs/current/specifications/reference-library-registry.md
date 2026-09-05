---
id: reference-library-registry
title: OMI-SPEC-221 — Referenzbibliothek und Registrierungsarchitektur
sidebar_label: Referenzbibliothek und Register
sidebar_position: 15
---

# OMI-SPEC-221 — Referenzbibliothek und Registrierungsarchitektur

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-007`

---

## Zweck

Diese Spezifikation legt fest, wie Anwendungen der „OMI“ bibliografische Datensätze zu einem Manuskript ermitteln, auflösen, erfassen, wiederverwenden, synchronisieren und exportieren.

Die Architektur basiert auf einem einfachen Autoren-Workflow:

1. ein zitiertes Werk einmal hinzufügen;
2. es im gesamten Manuskript wiederverwenden;
3. mit genauen Verweisen zitieren;
4. seine Metadaten zu aktualisieren, ohne jedes Zitat neu schreiben zu müssen;
5. das Manuskript und das Literaturverzeichnis in verschiedene Publikationssysteme exportieren.

---

## Architektonische Ebenen

```text
External bibliographic services and catalogues
                    ↓
          Resolution and reconciliation
                    ↓
       Manuscript Reference Library
                    ↓
           Citation Occurrences
                    ↓
       Rendering and publication exports
```

Die Ebenen sind bewusst voneinander getrennt.

- Externe Dienste helfen dabei, Datensätze zu finden und anzureichern.
- In der Referenzbibliothek werden die ausgewählten Datensätze des Manuskripts aufbewahrt.
- Zitierangaben verweisen auf Bibliotheksdatensätze.
- Renderer erstellen Fußnoten, Zitate im Autor-Datum-Format, Literaturverzeichnisse, Links und strukturierte Exporte.

---

## Handschriften-Referenzbibliothek

Jedes Manuskript kann eine eigene Sammlung von Werken enthalten oder auf eine solche verweisen, die in diesem Manuskript verwendet werden.

Die Bibliothek ist nicht nur ein formatiertes Literaturverzeichnis. Sie ist eine Sammlung strukturierter [Bibliographic Records](./bibliographic-record-model.md).

```json
{
  "referenceLibrary": {
    "records": [
      "bib_01JXYZ",
      "bib_01JXYA"
    ]
  }
}
```

Ein Eintrag kann bereits in der Bibliothek vorhanden sein, bevor er zitiert wird. Dies erleichtert die Erstellung vorläufiger Leselisten, die Sammlung von Quellen, die redaktionelle Überprüfung und die spätere Aufnahme.

---

## Einmal hinzufügen, oft zitieren

Wenn ein Autor ein Werk hinzufügt, erstellt oder verwendet OMI einen bibliografischen Datensatz.

Jedes Vorkommen einer Zitierung verweist auf diesen Datensatz:

```text
Reference Library
└── bib_01: Example Book
    ├── Citation 1: p. 12
    ├── Citation 2: pp. 55–57
    └── Citation 3: chapter 4
```

Dadurch wird eine wiederholte Eingabe von Metadaten vermieden und eine einheitliche Darstellung gewährleistet.

---

## Ermittlung und Import

Anwendungen können mehrere Eingabemethoden unterstützen:

- DOI Nachschlagewerk;
- ISBN-Suche;
- URL-Import;
- Suche nach Titel oder Autor;
- Abfrage der Repository-Kennung;
- Suche im Bibliothekskatalog;
- formatierte Referenz einfügen;
- CSL JSON, BibTeX, BibLaTeX, RIS, EndNote XML oder andere unterstützte Formate importieren;
- manuelle Eingabe;
- Auswahl aus einem anderen „OMI“-Manuskript oder einer Benutzerbibliothek.

Importierte Daten müssen unter Beibehaltung der Herkunftsangaben in das bibliografische Datensatzmodell normalisiert werden.

---

## Externe Quellen

Eine „OMI“-Implementierung kann öffentliche oder autorisierte Dienste abfragen, wie zum Beispiel:

- Crossref
- DataCite
- OpenAlex
- PubMed
- Europe PMC
- ORCID
- ROR
- Bibliothekskataloge
- institutionelle Repositorien
- Fachrepositorien
- nationale Bibliografien
- Archivkataloge

Die Architektur erfordert keinen zentralen Anbieter.

OMI definiert Schnittstellen und Datenanforderungen, sodass Implementierungen mehrere Anbieter kombinieren können und auch dann funktionsfähig bleiben, wenn ein Anbieter nicht verfügbar ist.

---

## Kein zentrales bibliografisches Monopol

OMI Es sollte keine obligatorische zentrale Datenbank eingerichtet werden, an die jedes Manuskript gesendet werden muss.

Ein gültiges „OMI“-Manuskript muss auch dann noch verwendbar sein, wenn:

- Der ursprüngliche Lookup-Dienst ist offline;
- Der Autor wechselt zu einer anderen Implementierung von „OMI“;
- Ein Verlag bearbeitet das Manuskript in einer isolierten Umgebung;
- ein externer Datensatz ändert sich oder verschwindet.

Daher müssen das Manuskript oder das zugehörige Paket die bibliografischen Daten enthalten, die für die Interpretation und Darstellung der darin enthaltenen Quellenangaben erforderlich sind.

Externe Dienste dienen als Quellen für die Erfassung und Anreicherung von Daten, nicht als alleinige Autoritäts- oder Verfügbarkeitsquellen.

---

## Workflow zur Problemlösung

Eine typische Abfolge von Schritten lautet:

```text
User input
   ↓
Identifier normalization
   ↓
Provider lookup
   ↓
Candidate records
   ↓
Reconciliation and deduplication
   ↓
User or automated selection
   ↓
Local bibliographic record
```

Ein Resolver sollte Folgendes zurückgeben:

- Bewerberdaten;
- übereinstimmende Bezeichner;
- Quell- und Abrufzeit;
- Selbstvertrauen;
- Konflikte;
- Zugangsorte;
- Hinweise auf Rücknahmen, Korrekturen oder unklare Identitäten, sofern vorhanden.

---

## Versöhnung

Verschiedene Anbieter können für dasselbe Werk unterschiedliche Metadaten zurückgeben.

Bei der Abstimmung ist Folgendes zu berücksichtigen:

- permanente Identifikatoren;
- normalisierter Titel;
- Namen und Kennungen der Mitwirkenden;
- Erscheinungsjahr;
- Container-Titel;
- Band, Ausgabe und Seiten;
- Ausgabe und Version;
- Sprache;
- Quellenangabe und Aktualität.

Das System sollte nicht stillschweigend einen widersprüchlichen Wert auswählen, wenn dieser Widerspruch die wissenschaftliche Bedeutung beeinträchtigen könnte.

Mögliche Ergebnisse sind unter anderem:

- genaue Übereinstimmung;
- wahrscheinliche Übereinstimmung;
- separate Version;
- Übersetzungs- oder Herausgeberbeziehung;
- ungelöster Konflikt;
- eigenständiger Datensatz.

---

## Lokale und gemeinsam genutzte Bibliotheken

Implementierungen können mehrere Gültigkeitsbereiche unterstützen:

- Handschriftensammlung;
- Arbeitsbereich oder Projektbibliothek;
- persönliche Bibliothek;
- Institutsbibliothek;
- öffentliche, gemeinsam genutzte Sammlung.

In einem Manuskript muss angegeben werden, welche Datensätze Teil seines autoritativen Pakets sind, selbst wenn diese Datensätze aus einer gemeinsam genutzten Bibliothek stammen.

Änderungen an einem gemeinsam genutzten Datensatz sollten ein eingereichtes oder veröffentlichtes Manuskript nicht automatisch verändern, sofern keine ausdrückliche Entscheidung zur Versionsführung getroffen wurde.

---

## Einfügen von Zitaten

Der Editor sollte es Autoren ermöglichen, die Manuskriptbibliothek zu durchsuchen und ein Zitat einzufügen, ohne bibliografische Metadaten erneut eingeben zu müssen.

Beim Einfügen von Zitaten können folgende Angaben erfasst werden:

- Typ und Wert des Locators;
- Präfix;
- Suffix;
- Zitierweise;
- Weglassen des Autors oder des Datums, sofern dies zulässig ist;
- Zitierabsicht oder Zusammenhang;
- Anmerkung oder Vermerk.

Das eingefügte Objekt entspricht dem „[Citation Model](./citation-model.md)“.

---

## Online-Zugriff und Vorschau

Wenn ein bibliografischer Datensatz einen Online-Zugriff enthält, kann eine Anwendung Folgendes anbieten:

- Landingpage öffnen;
- Volltext öffnen;
- Zusammenfassung oder Metadaten-Vorschau anzeigen;
- Verfügbarkeit des Repositorys anzeigen;
- Lizenz- und Zugangsbedingungen anzeigen;
- Inhalte einbetten, sofern dies technisch und rechtlich zulässig ist.

OMI Man muss unterscheiden zwischen:

- Verfügbarkeit von Metadaten;
- öffentlicher Zugang zu der Ressource;
- Einbettungsgenehmigung;
- Erlaubnis zur Weiterverbreitung.

Eine URL allein bedeutet nicht, dass Weiterverbreitungsrechte bestehen.

---

## Literaturverzeichnisse und Leselisten

Ein Bibliotheksdatensatz kann einen handschriftenspezifischen Status aufweisen:

- zitiert;
- ohne Quellenangabe;
- Weiterführende Literatur;
- aus dem abschließenden Literaturverzeichnis ausgeschlossen;
- redaktionell geprüft;
- muss überprüft werden.

Die Publikationsprofile legen fest, welche Bundesländer im angezeigten Literaturverzeichnis erscheinen.

Dies kommt Fachbereichen zugute, in denen Quellenverzeichnisse, Archivverzeichnisse, Listen mit Primärquellen oder Abschnitte mit weiterführender Literatur von herkömmlichen Literaturangaben abweichen.

---

## Vermeidung von Duplikaten

Bevor ein neuer Datensatz hinzugefügt wird, sollte eine Implementierung die Manuskriptbibliothek und die entsprechenden gemeinsam genutzten Bibliotheken überprüfen.

Bei einem mutmaßlichen Duplikat sollte der bestehende Datensatz angezeigt und die Grundlage für die Übereinstimmung erläutert werden.

Der Nutzer darf:

- den vorhandenen Datensatz wiederverwenden;
- Datensätze zusammenführen;
- verschiedene Versionen getrennt aufbewahren;
- den vorgeschlagenen Treffer ablehnen.

Beim Zusammenführen müssen Identifikatoren, Herkunftsangaben, lokale Korrekturen und bisherige Zitationslinks erhalten bleiben.

---

## Offline-Betrieb

Die Kernfunktionen der Referenzverwaltung müssen auch ohne ständigen Netzwerkzugang funktionieren.

Offline-fähige Implementierungen sollten Folgendes ermöglichen:

- manuelle Datensatzerfassung;
- Einfügen von Zitaten aus zwischengespeicherten Datensätzen;
- Darstellung des Literaturverzeichnisses;
- in der Warteschlange befindliche Auflösung und Validierung;
- nachträgliche Synchronisierung mit externen Quellen.

Netzwerkabhängige Ergänzungen dürfen das Manuskript nicht unlesbar oder nicht zitierfähig machen.

---

## Synchronisierung und Änderungskontrolle

Externe Metadaten können sich nach dem Import ändern. Implementierungen des „OMI“ bieten möglicherweise Aktualisierungsvorgänge an, doch müssen Aktualisierungen überprüfbar sein.

Ein Vergleich der Aktualisierungsraten sollte Folgendes unterscheiden:

- neu verfügbare Felder;
- reine Formatierungsunterschiede;
- korrigierte Metadaten;
- widersprüchliche Metadaten;
- Änderungen an der Version oder am Status;
- Zugriffsorte, die entfernt oder umgeleitet wurden.

Akzeptierte Aktualisierungen führen zur Erstellung einer neuen Datensatzrevision. Veröffentlichte Manuskriptversionen behalten den bibliografischen Status bei, der für diese Veröffentlichung verwendet wurde.

---

## Validierung

Bei der Validierung der Referenzbibliothek können folgende Meldungen auftreten:

- ungeklärte Datensätze;
- doppelte Datensätze;
- Erforderliche Metadaten fehlen;
- fehlerhafte Bezeichner;
- defekte oder umgeleitete Links;
- zitierte Einträge, die in der Bibliothek nicht vorhanden sind;
- nicht verwendete Datensätze;
- zurückgezogene oder korrigierte Zielwerte;
- inkonsistente Datumsangaben, Bandnummern, Ausgaben oder Seitenzahlen;
- nicht unterstützte Ressourcentypen;
- Metadatenkonflikte zwischen den Quellen.

Validierungsregeln lassen sich je nach Publikation und Fachgebiet konfigurieren.

---

## Import und Export

Die Bibliothek sollte den interoperablen Austausch durch Formate wie die folgenden unterstützen:

- CSL JSON
- BibTeX
- StartnummerLaTeX
- RIS
- JATS XML
- Crossref XML
- DataCite XML oder JSON
- MODS
- Dublin Core
- Zotero-kompatible Formate

Exporte sollten stabile „OMI“-Bezeichner beibehalten, wenn das Zielformat Erweiterungen zulässt.

Das vollständige „OMI“-Paket sollte genügend bibliografische Metadaten enthalten, um Zitate darzustellen und zu validieren, ohne externe Dienste abfragen zu müssen.

---

## API Aufgaben

Ein Referenzdienst API kann folgende Operationen bereitstellen:

```text
search(query, providers)
resolve(identifier)
import(record, source)
reconcile(candidates)
addToLibrary(recordId, manuscriptId)
mergeRecords(sourceIds, targetId)
refresh(recordId)
validateLibrary(manuscriptId)
exportLibrary(manuscriptId, format)
```

Die Spezifikation definiert Verhaltens- und Datenkontrakte, nicht jedoch ein bestimmtes Netzwerkprotokoll oder eine bestimmte Implementierungssprache.

---

## Datenschutz und Sicherheit

Bei der Umsetzung muss berücksichtigt werden, dass Referenzsammlungen Aufschluss über Forschungsinteressen, unveröffentlichte Projekte, Kooperationspartner und sensible Quellen geben können.

Zu den Anforderungen gehören:

- explizite Kontrolle über die Freigabe;
- Zugriff auf Arbeitsbereichsbibliotheken nach dem Prinzip der geringsten Berechtigungen;
- keine Verpflichtung zur Offenlegung nicht zitierter Unterlagen;
- eindeutige Anbieteranfragen und Datenschutzhinweise;
- Schutz vor bösartigen importierten Metadaten;
- Sichere Verarbeitung von externen URLs und eingebetteten Vorschauen.

---

## Beispiel-Workflow

1. Der Autor nimmt an einem „DOI“ teil.
2. Der Resolver fragt die konfigurierten Provider ab.
3. Die Metadaten der Kandidaten wurden abgeglichen.
4. Das ausgewählte Werk wird unter dem Namen „`bib_01JXYZ`“ in der Manuskriptbibliothek gespeichert.
5. Der Autor fügt Verweise auf die Seiten 12 und 45–47 ein.
6. Der Redakteur überprüft den Eintrag.
7. Ein Publikationsprofil enthält Fußnoten und ein Literaturverzeichnis.
8. Das freigegebene Manuskript exportiert strukturierte Verweise auf JATS, XML sowie Crossref-Metadaten.

---

## Zukünftige Arbeit

Zukünftige Spezifikationen könnten Folgendes definieren:

- verbundene öffentliche bibliografische Register;
- signierte oder überprüfbare Metadaten-Aussagen;
- Austausch von Zitiergraphen;
- Vokabulare für Zitierabsichten;
- Normdaten-Kontrolldienste;
- gemeinsame Kuratierung von Aufzeichnungen;
- Herkunftsbewertung;
- Verweise zwischen den zitierten Aussagen und den genauen Passagen in der Quelle.

---

## Änderungshistorie

- **0.1.0** — Von der vorläufigen Adresse `OMI-SPEC-007` auf die offizielle Adresse `OMI-SPEC-221` umgestellt.

---

## Zusammenfassung

Die Architektur der Referenzbibliothek und des Registers ermöglicht es Autoren, ein Werk einmal hinzuzufügen und es dann im gesamten Manuskript einheitlich zu zitieren.

Es verbindet die externe Recherche mit einer portablen Bibliothek auf Manuskriptebene, vermeidet die Abhängigkeit von einem einzigen Anbieter, unterstützt Online- und Offline-Arbeitsabläufe, bewahrt die Provenienz und ermöglicht einen zuverlässigen Export in wissenschaftliche Publikationssysteme.

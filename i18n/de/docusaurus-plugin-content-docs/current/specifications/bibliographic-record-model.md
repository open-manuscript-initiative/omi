---
id: bibliographic-record-model
title: OMI-SPEC-220 – Modell für bibliografische Datensätze
sidebar_label: Modell für bibliografische Datensätze
sidebar_position: 13
---

# OMI-SPEC-220 – Modell für bibliografische Datensätze

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-006`

---

## Zweck

Das bibliografische Datensatzmodell legt fest, wie OMI ein zitiertes Werk unabhängig von einem bestimmten Zitierfall oder Manuskript darstellt.

Ein bibliografischer Datensatz ist die standardisierte Beschreibung eines wissenschaftlichen oder kulturellen Objekts, wie beispielsweise eines Artikels, eines Buches, eines Kapitels, eines Datensatzes, einer Archivquelle, eines Softwarepakets, eines Bildes, einer Karte, eines Rechtsdokuments oder einer Webressource.

Das Modell ermöglicht es, ein Werk mehrfach zu zitieren, ohne dessen Metadaten zu duplizieren.

---

## Rolle innerhalb der Architektur des „OMI“

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrences
```

Das „Bibliographic Record Model“ beschreibt die zweite Ebene. Das „[Citation Model](./citation-model.md)“ beschreibt einzelne Zitationsvorkommen. Das „[Reference Library and Registry Architecture](./reference-library-registry.md)“ beschreibt, wie Datensätze ermittelt, aufgelöst, gespeichert, wiederverwendet, synchronisiert und exportiert werden.

---

## Grundprinzip

Ein zitiertes Werk und ein Zitiervorkommen sind unterschiedliche Objekte.

- Der **bibliografische Datensatz** beschreibt das Werk.
- Der **Zitiervermerk** gibt an, wo und wie das Werk zitiert wird.
- Die **dargestellte Quellenangabe** ist eine aus beiden Elementen generierte Darstellung.

```text
Bibliographic Record
  title: Example Article
  DOI: 10.1234/example

Citation Occurrence A
  locator: p. 12

Citation Occurrence B
  locator: pp. 45–47
```

---

## Identität erfassen

Jeder bibliografische Datensatz verfügt über eine lokale Kennung im Format „OMI“.

```json
{
  "id": "bib_01JXYZ...",
  "type": "journal-article"
}
```

Die lokale Kennung bleibt auch dann unverändert, wenn externe Metadaten aktualisiert oder zusätzliche Kennungen ermittelt werden.

Ein Datensatz kann mehrere externe Identifikatoren enthalten:

- DOI
- ISBN
- ISSN
- PMID
- PMCID
- arXiv-Kennung
- Griff
- ARK
- URN
- URL
- Repository-Kennung
- Katalogkennung
- Archiv-Referenzcode

Externe Identifikatoren dienen als Nachweis für die Identität und sind kein Ersatz für den lokalen Identifikator „OMI“.

---

## Arbeit, Ausdruck und Manifestation

Das Modell unterscheidet bei Bedarf zwischen verschiedenen Ebenen:

- **Arbeit**: die abstrakte geistige oder kreative Arbeit.
- **Ausdruck**: eine Sprache, Version, Überarbeitung, Übersetzung oder Ausgabe.
- **Manifestation**: eine bestimmte veröffentlichte oder verbreitete Form.
- **Exemplar**: ein bestimmtes physisches oder digitales Exemplar, wenn eine Beschreibung auf Exemplarebene erforderlich ist.

Einfache Datensätze können nur eine Ebene umfassen. Komplexe Datensätze können Beziehungen zwischen den Ebenen darstellen.

Beispiele:

- ein Originalartikel und dessen übersetzte Fassung;
- ein Preprint und die endgültige Fassung;
- mehrere Ausgaben eines Buches;
- ein Manuskript und eine digitalisierte Kopie;
- ein Datensatz und eine bestimmte Version.

---

## Unterstützte Ressourcentypen

Zum Kernwortschatz gehören:

- Zeitschriftenartikel
- Buch
- Kapitel eines Buches
- Konferenzbeitrag
- Dissertation
- Dissertation
- Bericht
- Vorabdruck
- Datensatz
- Software
- Standard
- Rechtsstreit
- Gesetzgebung
- Vertrag
- Archivquelle
- Manuskript
- Charta
- Karte
- Bild
- Audio
- Video
- Webseite
- Repository-Eintrag
- Katalogdatensatz

Profile und Plugins können domänenspezifische Typen einführen, ohne das Kernmodell zu verändern.

---

## Kernmetadaten

Ein bibliografischer Eintrag kann Folgendes enthalten:

- Titel
- Untertitel
- Übersetzter Titel
- Kurztitel
- Ressourcentyp
- Urheber und Mitwirkende
- Titel des Containers
- Ausgabe
- Umfang
- Thema
- Serie
- Verlag
- Erscheinungsort
- Erscheinungsdatum
- Zugriffsdatum
- Seitenzahl oder Umfang
- Sprache
- Zusammenfassung
- Schlüsselwörter
- Bezeichner
- URLs
- Informationen zu den Rechten
- Versionsangaben
- Herkunft
- quellenspezifische Metadaten

Felder können strukturiert, mehrsprachig und gegebenenfalls wiederholbar sein.

---

## Mitwirkende

Beitragende werden als strukturierte Agenten und nicht als Anzeigestrings dargestellt.

```json
{
  "role": "author",
  "agent": {
    "type": "person",
    "familyName": "Example",
    "givenName": "Ada",
    "orcid": "0000-0000-0000-0000"
  }
}
```

Zu den unterstützten Agententypen gehören:

- Person
- Organisation
- Projekt
- Konsortium
- unbekannter oder historischer Akteur

Zu den unterstützten Rollen gehören:

- Autor
- Redakteur
- Übersetzer
- Compiler
- Illustrator
- Fotograf
- Direktor
- Mitwirkender
- ausstellende Stelle

Das Rollenvokabular ist erweiterbar.

---

## Mehrsprachige Metadaten

Titel, Untertitel, Zusammenfassungen, Anmerkungen und ausgewählte Namen von Mitwirkenden können mehrsprachig sein.

```json
{
  "title": {
    "und": "Original title",
    "en": "English title",
    "hu": "Magyar cím"
  }
}
```

Der Datensatz sollte die Metadaten in der Originalsprache beibehalten und diese von übersetzten oder normalisierten Werten unterscheiden.

---

## Container und Hierarchien

Bibliografische Ressourcen können zu Containern gehören.

Beispiele:

- Artikel → Zeitschriftenausgabe → Zeitschrift
- Kapitel → Sammelband → Reihe
- Archivobjekt → Akte → Sammlung → Archiv
- Veröffentlichung des Datensatzes → Datensatz → Forschungsprojekt

Container-Beziehungen werden explizit modelliert und nicht zu einer formatierten Zeichenfolge zusammengefasst.

---

## Herkunft

Jeder importierte oder angegebene Metadatenwert kann eine Herkunftsangabe enthalten.

```json
{
  "value": "Example title",
  "source": "crossref",
  "retrievedAt": "2026-08-06T12:00:00Z",
  "confidence": "authoritative"
}
```

Zur Herkunft können gehören:

- Quellsystem
- Kennung des Quelldatensatzes
- Abrufdatum
- Benutzer oder Dienst importieren
- Assertion-Methode
- Konfidenzniveau
- Änderungshistorie

OMI Darf die vom Benutzer korrigierten Metadaten nicht stillschweigend durch externe Daten geringerer Qualität überschreiben.

---

## Datensatzstatus

Ein Datensatz kann einen der folgenden Zustände aufweisen:

- ungeklärt
- vorläufig
- beschlossen
- verifiziert
- zwiespältig
- veraltet

Ein vorläufiger Datensatz kann auf der Grundlage unvollständiger Benutzereingaben erstellt und später ergänzt werden.

---

## Deduplizierung und Äquivalenz

Zwei Datensätze können dasselbe Werk darstellen, auch wenn sich ihre Metadaten unterscheiden.

Bei der Deduplizierung können folgende Methoden zum Einsatz kommen:

- exakte persistente Identifikatoren;
- normalisierter Abgleich von Titeln und Mitwirkenden;
- Vergleich von Container, Datum, Umfang, Ausgabe und Seite;
- Identifikatoren von Repositorien oder Katalogen;
- Bestätigung durch den Benutzer.

Das System muss unterscheiden zwischen:

- exakte Äquivalenz;
- wahrscheinliche Äquivalenz;
- Versionsbeziehung;
- Übersetzungsbeziehung;
- Verhältnis zwischen Rückzug und Korrektur;
- nicht miteinander in Zusammenhang stehende Datensätze mit ähnlichen Metadaten.

Beim Zusammenführen von Datensätzen müssen die Herkunftsdaten und der Prüfpfad erhalten bleiben.

---

## Verfügbarkeit und Zugang

Ein Datensatz kann einen oder mehrere Zugriffsorte beschreiben:

```json
{
  "access": [
    {
      "url": "https://example.org/article",
      "format": "html",
      "accessType": "open"
    },
    {
      "url": "https://example.org/article.pdf",
      "format": "pdf",
      "accessType": "open"
    }
  ]
}
```

Zugriffsmetadaten können Folgendes identifizieren:

- Landingpage
- Volltext
- Zusammenfassungsseite
- Repository-Kopie
- Verlagstext
- digitalisierte Kopie
- maschinenlesbare Darstellung

OMI gibt die Verfügbarkeit an, geht jedoch nicht davon aus, dass ein Link die Erlaubnis zur Weiterverbreitung oder Einbettung der Ressource gewährt.

---

## Korrekturen, Rücknahmen und Versionen

Bibliografische Datensätze können Beziehungen wie die folgenden ausdrücken:

- isVersionOf
- hasVersion
- isTranslationOf
- hasTranslation
- korrigiert
- isCorrectedBy
- zieht zurück
- isRetractedBy
- Nahrungsergänzungsmittel
- isSupplementedBy

Diese Verknüpfungen ermöglichen es, in einem Manuskript auf das beabsichtigte wissenschaftliche Objekt zu verweisen, anstatt auf eine mehrdeutige Textzeichenfolge.

---

## Serialisierung und Interoperabilität

Das Modell sollte eine Zuordnung zu oder von folgendem Objekt herstellen:

- CSL JSON
- BibTeX und BibLaTeX
- RIS
- Crossref-Metadaten
- DataCite-Metadaten
- JATS XML
- MODS
- Dublin Core
- schema.org
- Zotero-Übersetzer
- Formate von Bibliothekskatalogen

Zuordnungen können zu Datenverlusten führen. „OMI“ muss nicht zugeordnete Quelldaten nach Möglichkeit beibehalten.

---

## Validierung

Bei der Validierung kann Folgendes überprüft werden:

- Pflichtfelder nach Ressourcentyp;
- Syntax von Kennungen und Prüfsummen;
- Datumskonsistenz;
- Struktur der Mitwirkenden;
- Container-Beziehungen;
- doppelte Kennungen;
- unzulässige Kombinationen aus Seite, Band und Ausgabe;
- ungelöste Konflikte;
- defekte oder umgeleitete URLs.

Der Schweregrad der Validierung kann „Information“, „Warnung“ oder „Fehler“ lauten.

---

## Minimales Beispiel

```json
{
  "id": "bib_01JXYZ",
  "type": "journal-article",
  "title": {
    "en": "A Structured Scholarly Article"
  },
  "contributors": [
    {
      "role": "author",
      "agent": {
        "type": "person",
        "familyName": "Example",
        "givenName": "Ada"
      }
    }
  ],
  "container": {
    "title": "Journal of Open Manuscripts"
  },
  "issued": "2026",
  "identifiers": [
    {
      "scheme": "doi",
      "value": "10.1234/example"
    }
  ],
  "status": "resolved"
}
```

---

## Änderungshistorie

- **0.1.0** — Von der vorläufigen Adresse `OMI-SPEC-006` auf die offizielle Adresse `OMI-SPEC-220` umgestellt.

---

## Zusammenfassung

Das bibliografische Datensatzmodell bietet „OMI“ eine stabile, normalisierte und herkunftsbezogene Darstellung der zitierten Werke.

Es verhindert die Duplizierung von Metadaten, unterstützt mehrsprachige und fachspezifische Beschreibungen, bewahrt Verweise auf externe Normdatenquellen und stellt das gemeinsame Ziel bereit, auf das sich Manuskript-Referenzbibliotheken und Zitierverweise beziehen.

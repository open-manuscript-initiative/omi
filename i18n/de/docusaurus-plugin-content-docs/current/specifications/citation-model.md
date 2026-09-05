---
id: citation-model
title: OMI-SPEC-210 – Zitiermodell
sidebar_label: Zitiermodell
sidebar_position: 14
---

# OMI-SPEC-210 – Zitiermodell

## Status

**Entwurf**

Version: 0.2.0

**Alte Kennung:** `OMI-SPEC-005`

---

## Zweck

Das Zitiermodell legt fest, wie ein Manuskript im „OMI“ einen einzelnen Vorgang des Zitierens eines wissenschaftlichen oder kulturellen Objekts erfasst.

Ein Literaturverweis wird nicht als formatierter Text gespeichert. Es handelt sich um ein semantisches Objekt, das eine Stelle im Manuskript mit einem strukturierten bibliografischen Datensatz verknüpft.

Diese Trennung ermöglicht eine einheitliche Darstellung, präzise Referenzpunkte, maschinelle Verarbeitung, Validierung, Versionsverwaltung und Interoperabilität.

---

## Position in der Referenzarchitektur

```text
External bibliographic sources
            ↓
Bibliographic Record
            ↓
Manuscript Reference Library
            ↓
Citation Occurrence
            ↓
Rendered citation and bibliography
```

Die „[Bibliographic Record Model](./bibliographic-record-model.md)“ beschreibt das zitierte Werk. Die „[Reference Library and Registry Architecture](./reference-library-registry.md)“ beschreibt die Ermittlung, Abstimmung, Speicherung, Wiederverwendung und den Export. Diese Spezifikation beschreibt das einzelne Vorkommen eines Zitats innerhalb des Manuskripts.

---

## Wesentlicher Unterschied

Ein bibliografischer Datensatz und ein Zitiervorkommen sind unterschiedliche Objekte.

```text
Bibliographic Record
  Example Book

Citation A
  page 12

Citation B
  pages 45–47
```

Das Werk wird einmal beschrieben. Bei jedem Vorkommen werden manuskriptspezifische Kontextangaben wie Locator, Präfix, Suffix, Intention und Anker hinzugefügt.

---

## Gestaltungsprinzipien

Das Zitiermodell lautet:

- Semantik an erster Stelle;
- darstellungsunabhängig;
- an eine bestimmte Stelle im Manuskript gebunden;
- wiederverwendbar;
- maschinenlesbar;
- stilunabhängig;
- versionierbar;
- erweiterbar.

---

## Zitierobjekt

Ein Zitatsfall kann Folgendes enthalten:

- lokaler Bezeichner;
- bibliografischer Zielbezeichner;
- Manuskript-Anker;
- Lokator oder Lokatorbereich;
- Präfix;
- Suffix;
- Zitierweise;
- Zitierabsicht oder Zusammenhang;
- Anmerkung;
- Versionsmetadaten.

Beispiel:

```json
{
  "id": "cit_01JXYZ",
  "target": "bib_01JABC",
  "anchor": "anchor_01JDEF",
  "locator": {
    "type": "page-range",
    "value": "45–47"
  },
  "prefix": "see also",
  "suffix": null
}
```

---

## Verankerung

Jedes Vorkommen einer Quellenangabe sollte mit einem Anker vom Typ „OMI“ verknüpft sein.

Ein Anker kann Folgendes kennzeichnen:

- eine Einfügestelle;
- ein Textbereich;
- ein Block;
- Eine Anmerkung;
- eine Tabellenzelle;
- eine Bildunterschrift;
- ein weiteres identifizierbares wissenschaftliches Objekt.

Durch die Verankerung lassen sich Zitate zuverlässiger vor Bearbeitungen, Überprüfungen, Vergleichen und Umformungen bewahren als reine Zeichenversätze.

---

## Bibliografisches Ziel

Das Ziel ist in der Regel ein Datensatz in der Manuskript-Referenzbibliothek.

Ein Zitat darf die vollständigen bibliografischen Metadaten nicht duplizieren, es sei denn, dies ist für den Datenaustausch oder die Langzeitarchivierung erforderlich. Die normierende Beziehung wird durch die Datensatzkennung ausgedrückt.

Ein Ziel kann Folgendes darstellen:

- Zeitschriftenartikel;
- Buch;
- Kapitel;
- Konferenzbeitrag;
- Abschlussarbeit oder Dissertation;
- Datensatz;
- Software;
- Vorabdruck;
- Standard;
- Webressource;
- Archivquelle;
- Manuskript;
- Charta;
- Bild;
- Karte;
- Audio oder Video;
- Gesetzgebung oder Rechtsprechung;
- ein weiterer erweiterbarer Ressourcentyp.

---

## Lokalisierer

Ein Lokator identifiziert den zitierten Teil des Ziels.

Zu den unterstützten Lokalisierungsarten können gehören:

- Seite;
- Seitenbereich;
- Kapitel;
- Abschnitt;
- Absatz;
- Abbildung;
- Tabelle;
- Anhang;
- Zeile;
- Folio;
- Zeitstempel;
- Vers;
- Artikel oder Klausel;
- Archivgut.

Lokalisierungsangaben sollten strukturell gespeichert werden und nicht als vollständig formatierte Phrase.

```json
{
  "type": "folio",
  "from": "12r",
  "to": "13v"
}
```

Die Veröffentlichungsprofile entscheiden darüber, ob daraus `fols. 12r–13v`, eine andere lokalisierte Form oder die strukturierte Version XML wird.

---

## Zitierweisen

Ein Zitatsfall kann einen Modus ausdrücken, wie zum Beispiel:

- in Klammern;
- Erzählung;
- Anmerkung zur Quellenangabe;
- nur Literaturverzeichnis;
- Quellenangabe;
- Querverweis;
- verdeckte maschinenlesbare Quellenangabe.

Die unterstützten Formate hängen von der Fachrichtung und dem Publikationsprofil ab.

---

## Präfixe und Suffixe

Präfixe und Suffixe enthalten zitatspezifischen Text, der nicht Teil des bibliografischen Datensatzes ist.

Beispiele:

- `see`;
- `compare`;
- `quoted in`;
- `emphasis added`;
- `translation by the author`.

Anwendungen sollten diese Werte getrennt vom Locator und dem gerenderten Zitat halten.

---

## Zitierabsicht und wissenschaftliche Beziehungen

Ein Verweis kann optional angeben, warum auf das Ziel verwiesen wird.

Beispiele hierfür sind:

- unterstützt;
- widerspricht;
- erstreckt sich;
- erörtert;
- vergleicht;
- gibt wieder;
- übersetzt;
- Kritik;
- stellt Daten bereit;
- stellt eine Methode bereit;
- Rezensionen;
- korrigiert.

Intent-Vokabulare müssen erweiterbar bleiben und sollten nicht vorgeschrieben werden, wenn der Autor oder das Fachgebiet sie nicht verwendet.

---

## Gruppierte Zitate

Mehrere Zitiervorkommen können eine Zitiergruppe bilden.

```text
(Smith 2022; Jones 2024, 18–20; Example 2026)
```

Die Gruppe steuert die Reihenfolge, die Trennzeichen und die gemeinsamen Affixe, während jedes Mitglied sein eigenes Ziel und seinen eigenen Lokator beibehält.

---

## Wiederholte Zitate

Wiederholte Zitate müssen auf denselben bibliografischen Eintrag verweisen, anstatt diesen zu duplizieren.

In Publikationsprofilen können wiederholte Zitate wie folgt dargestellt werden:

- vollständiger Verweis;
- verkürzter Titel;
- Autor-Datum-Format;
- `ibid.` oder gleichwertige Konventionen;
- numerische Referenz;
- Hyperlink.

Es handelt sich hierbei um Darstellungsentscheidungen, nicht um Änderungen am Zitatobjekt.

---

## Zitierweisen

Zitierweisen sind Darstellungsprofile.

Beispiele hierfür sind:

- APA;
- Chicago;
- MLA;
- Harvard;
- IEEE;
- Vancouver;
- OSCOLA;
- Turabian;
- zeitschriftenspezifische Stile.

Eine Änderung des Stils darf keinen Einfluss auf den zugrunde liegenden bibliografischen Datensatz oder das Zitat haben.

---

## Fachprofile

Profile können spezielle Lokalisierer, Ressourcentypen und Darstellungsregeln einführen.

Zu den historischen Dokumenten können Archivsignaturen, Folios, Urkunden und Register gehören.

Das Recht kann Fälle, Gesetze, Verträge, Artikel, Abschnitte und Klauseln umfassen.

Im Bereich Medizin können dies beispielsweise Studienregistrierungen, klinische Leitlinien und Versionen von Datensätzen sein.

Die Informatik kann Repositorys, Software-Releases, Pakete, Commits und „API“-Dokumentation umfassen.

---

## Rendering

Ein einzelnes Zitat kann je nach Ausgabeformat unterschiedlich dargestellt werden.

```text
OMI citation object
├── HTML inline citation
├── PDF footnote
├── EPUB hyperlink
├── JATS <xref> and <ref>
├── CSL processor input
└── Crossref or DataCite metadata
```

Die Darstellung hängt vom Publikationsprofil, der Sprache, dem Zitierstil und dem Ausgabeformat ab.

---

## Validierung

Bei der Validierung kann Folgendes überprüft werden:

- Der Ziel-Datensatz ist vorhanden;
- Der Anker existiert;
- Der Locator-Typ ist für das Ziel oder das Profil gültig;
- Der Locator-Bereich ist korrekt gebildet;
- die erforderlichen Zitierfelder sind vorhanden;
- Die Reihenfolge der Zitiergruppen ist korrekt;
- Doppelte Nennungen sind beabsichtigt;
- Der betreffende Datensatz ist ungelöst, steht in Konflikt, wurde korrigiert oder zurückgezogen;
- Der Zitierstil kann die verfügbaren Metadaten darstellen.

Der Schweregrad der Validierung kann „informativ“, „Warnung“ oder „Fehler“ sein.

---

## Interoperabilität

Zitierverweise und deren Ziele sollten zu bzw. von folgenden Elementen verweisen:

- CSL JSON;
- BibTeX und BibLaTeX;
- RIS;
- JATS XML;
- Crossref-Metadaten;
- DataCite-Metadaten;
- Zotero-kompatible Formate;
- EndNote-Formate;
- Formate für Repositorien und den Austausch von Bibliotheksdaten.

OMI sollten zitatspezifische Informationen bewahren, die im Zielformat nicht dargestellt werden können.

---

## Versionsverwaltung

Zitierverweise spielen bei der Versionskontrolle von Manuskripten eine Rolle.

Zu den nachverfolgten Änderungen können gehören:

- Zitat eingefügt oder gelöscht;
- Ziel geändert;
- geänderter Locator;
- geändertes Präfix oder Suffix;
- geänderte Absicht;
- Anker geändert;
- Änderungen bei der Mitgliedschaft in einer Zitiergruppe.

Änderungen an bibliografischen Datensätzen werden unabhängig von Änderungen an Zitiervorkommen nachverfolgt.

---

## Plugin-Erweiterungen

Plugins und Profile können Folgendes verursachen:

- Zitierweisen;
- Lokalisierungstypen;
- Intent-Vokabulare;
- Validierungsregeln;
- Darstellungsregeln;
- domänenspezifische Beziehungen.

Erweiterungen dürfen keine Änderungen am OMI-Kern erfordern.

---

## Zukünftige Arbeit

Zukünftige Spezifikationen könnten Folgendes definieren:

- Austausch von Zitiergraphen;
- vernetzte offene Zitiervokabulare;
- genaue Verknüpfungen zwischen den Aussagen und den Quellstellen;
- Zitationskontextanalyse;
- nachvollziehbare Herkunft der Quellenangaben;
- gemeinsame Überprüfung von Zitaten.

---

## Änderungshistorie

- **0.2.0** — Umstellung von der vorläufigen Adresse `OMI-SPEC-005` auf die offizielle Adresse `OMI-SPEC-210`.

---

## Zusammenfassung

Das Zitiermodell stellt jeden Zitiervorgang als strukturiertes, verankertes und darstellungsunabhängiges Objekt dar.

Durch die Trennung von Zitaten und bibliografischen Datensätzen sowie deren Darstellung ermöglicht „OMI“ Autoren, ein Werk einmal hinzuzufügen, es mehrfach mit präzisen Verweisen zu zitieren und dasselbe Manuskript in verschiedenen wissenschaftlichen Stilen und Formaten zu veröffentlichen.

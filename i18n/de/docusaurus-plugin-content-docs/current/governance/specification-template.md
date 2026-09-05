---
id: specification-template
title: OMI Spezifikationsvorlage
sidebar_label: Spezifikationsvorlage
description: Vorgeschriebene Startstruktur für neue „Open Manuscript Initiative“-Spezifikationen.
keywords:
  - Open Manuscript Initiative
  - OMI
  - specification template
  - standards development
  - technical writing
  - conformance
---

# Open Manuscript Initiative Spezifikationsvorlage

## Metadaten des Dokuments

| Feld | Wert |
|---|---|
| Dokumenttyp | Governance-Vorlage |
| Status | Entwurf |
| Version | 0.1.0 |
| Normsprache | Englisch |
| Gilt für | Neue und grundlegend überarbeitete „OMI“-Spezifikationen |
| Verantwortliche Gruppe | Betreuer von „OMI“ |
| Zuletzt aktualisiert | 06.08.2026 |

## 1. Zweck

Dieses Dokument enthält die verbindliche Ausgangsvorlage für „Open Manuscript Initiative“-Spezifikationen.

Die Vorlage wandelt die Anforderungen der folgenden Governance-Dokumente in eine wiederverwendbare Erstellungsstruktur um:

- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md).

Ein neues Dokument unter „`OMI-SPEC-*`“ MUSS auf dieser Vorlage basieren, es sei denn, im Pull-Request wird eine begrenzte Ausnahme dokumentiert und begründet.

Die Vorlage ist so konzipiert, dass jede Spezifikation:

- identifizierbar;
- überprüfbar;
- überprüfbar;
- implementierungsunabhängig;
- eindeutige Angaben zur Kompatibilität und Konformität;
- geeignet für die Übersetzung und langfristige Pflege.

## 2. Wann sollte diese Vorlage verwendet werden?

Diese Vorlage MUSS für Folgendes verwendet werden:

- eine neu zugewiesene „OMI“-Spezifikation;
- eine vorläufige Spezifikation, die den Status „Entwurf“ erhält;
- eine umfassende Überarbeitung, bei der die Struktur einer bestehenden Spezifikation ersetzt wird;
- eine Spezifikation, die aus einem anderen normativen Dokument ausgegliedert oder in dieses integriert wurde.

Die vollständige Vorlage ist nicht erforderlich für:

- Governance-Richtlinien;
- Anleitungen und Erläuterungen;
- Hinweise zur Umsetzung;
- inoffizielle Vorschläge im Sondierungsstadium;
- Übersetzungsdateien;
- maschinell erstellte Schemadokumentation.

Profile, Register, Schemata, Beispiele und Zuordnungsdokumente SOLLTEN diese Vorlage als Grundlage verwenden und die im Abschnitt „Anpassungen für Dokumenttypen“ beschriebenen Anpassungen vornehmen.

## 3. So verwenden Sie die Vorlage

1. Rufen Sie den permanenten Identifikator im Register der „OMI“-Spezifikation ab oder reservieren Sie ihn dort.
2. Kopieren Sie die Quellvorlage aus dem Abschnitt „Kopierfertige Spezifikationsquelle“.
3. Ersetze alle Platzhalter, die in spitzen Klammern stehen.
4. Entwurfsanweisungen löschen, die in „HTML“-Kommentaren stehen.
5. Entfernen Sie optionale Abschnitte erst, nachdem Sie festgestellt haben, dass sie nicht zutreffen.
6. Halten Sie die vorgeschriebene Reihenfolge der Abschnitte ein, sofern für das Fach keine dokumentierte Ausnahme vorliegt.
7. Fügen Sie das neue Dokument zur kanonischen Seitenleistenkategorie hinzu.
8. Fügen Sie ungarische und deutsche Übersetzungsschlüssel für die Navigation hinzu oder aktualisieren Sie diese.
9. Überprüfen Sie vor der Begutachtung „Markdown“, Links, Beispiele, Bezeichner und Schemata auf ihre Gültigkeit.
10. Halten Sie ungeklärte Designfragen ausdrücklich fest, solange sich das Dokument noch im „Pre-Stable“-Status befindet.

In einem Dokument, das für den Status „Review Candidate“ vorgeschlagen wird, DARF KEIN Platzhalter enthalten sein.

## 4. Konventionen für Platzhalter

Die kopierfertige Vorlage verwendet folgende Platzhalterformulare:

| Form | Bedeutung |
|---|---|
| `<OMI-SPEC-NNN>` | Permanente Spezifikationskennung |
| `<OFFICIAL TITLE>` | Eingetragener Titel |
| `<SHORT TITLE>` | Kurze Seitenleistenbezeichnung |
| `<0.1.0>` | Semantische Dokumentversion |
| `<Draft>` | Lebenszyklusstatus |
| `<EDITOR OR GROUP>` | Verantwortlicher Redakteur oder Redaktionsteam |
| `<YYYY-MM-DD>` | ISO 8601-Datum |
| `<NONE>` | Ausdrückliche Angabe, dass kein Wert gilt |
| `<TEXT>` | Vom Autor bereitgestellter Text erforderlich |
| `[OPTIONAL]` | Abschnitt oder Feld, das entfernt werden kann, wenn es nicht zutrifft |

Platzhalter-Spitzenklammern dienen lediglich der Zeichnungsnotation. Sie MÜSSEN aus veröffentlichten Dokumenten entfernt werden.

## 5. Erforderliche Metadaten

Jede Spezifikation MUSS ihre normativen Metadaten im gerenderten Hauptteil offenlegen. Die Vorbemerkungen allein reichen nicht aus.

Die Metadatentabelle MUSS Folgendes enthalten:

| Feld | Erforderliche Angaben |
|---|---|
| Kennung | Permanente „`OMI-SPEC-*`“-Kennung |
| Titel | Eingetragener offizieller Titel |
| Version | `MAJOR.MINOR.PATCH` |
| Status | Lebenszyklusstatus |
| Dokumenttyp | Normativ, informativ oder gemischt |
| Normsprache | In der Regel Englisch |
| Redaktion | Verantwortliche Personen oder Redaktionsteam |
| Zuletzt aktualisiert | Datum nach ISO 8601 |
| Ersetzt | Vorgänger oder „`None`“ |
| Ersetzt durch | Nachfolger oder `None` |
| Abhängigkeiten | Normative Abhängigkeiten oder `None` |
| Verwendet von | Bekannte Abhängigkeiten oder `None known` |
| Schemata | Entsprechende maschinenlesbare Artefakte oder `None` |
| Profile | Geeignete Profile oder `None` |
| Umsetzungsstatus | Link zur Zusammenfassung oder Matrix |
| Issue-Tracker | Offizieller Ort für Probleme |

Eine Spezifikation, die serialisierte Daten definiert, SOLLTE auch Beispiel-Fixtures, Validatoren und Konformitätstests angeben.

## 6. Vorgeschriebene Reihenfolge der Abschnitte

Die standardmäßige Reihenfolge der Abschnitte lautet:

1. Zusammenfassung
2. Status dieses Dokuments
3. Konformität
4. Geltungsbereich
5. Begriffe
6. Gestaltungsgrundsätze
7. Modellübersicht
8. Datenmodell
9. Verarbeitungsmodell
10. Validierung und Fehlerbehandlung
11. Erweiterbarkeit
12. Versionsverwaltung und Kompatibilität
13. Interoperabilität
14. Überlegungen zu Sicherheit, Datenschutz und Integrität
15. Überlegungen zur Barrierefreiheit
16. Überlegungen zur Internationalisierung
17. Beispiele
18. Normative Verweise
19. Informative Quellenangaben
20. Stand der Umsetzung
21. Ungeklärte Fragen
22. Änderungshistorie
23. Danksagungen

Die Abschnitte 1–5, 10, 12, 14, 18 und 22 sind für jede normative Spezifikation verbindlich.

Ein obligatorischer Abschnitt, der keine besonderen Aspekte enthält, MUSS vorhanden bleiben und darlegen, dass die Angelegenheit geprüft wurde und dass derzeit keine spezifikationsspezifischen Anforderungen bekannt sind.

## 7. In der Vorlage integrierte normative Schreibregeln

Normative Anforderungen MÜSSEN:

- die Begriffsbezeichnungen bewusst in Großbuchstaben schreiben;
- die für die Umsetzung zuständige Rolle ermitteln;
- zustandsabhängiges beobachtbares Verhalten;
- Vermeiden Sie es, nicht zusammenhängende Anforderungen in einem Satz zu kombinieren;
- das Fehlverhalten definieren, wenn eine Nichtkonformität möglich ist;
- überprüfbar oder objektiv nachprüfbar sein.

Spezifikationen mit dem Status „Review Candidate“ oder höher SOLLTEN stabile Anforderungskennungen wie folgt zuweisen:

```text
REQ-<SPEC-CODE>-<NNN>
```

Beispiel:

```text
REQ-DOC-001
```

Anforderungskennungen DÜRFEN nach ihrer Entfernung NICHT neu vergeben werden.

## 8. Druckfertige Spezifikationsvorlage

Kopieren Sie den gesamten folgenden Block in die neue Spezifikationsdatei.

````markdown
---
id: <docusaurus-document-id>
title: <OMI-SPEC-NNN — OFFICIAL TITLE>
sidebar_label: <OMI-SPEC-NNN — SHORT TITLE>
description: <ONE-SENTENCE DESCRIPTION>
keywords:
  - Open Manuscript Initiative
  - OMI
  - <PRIMARY SUBJECT>
  - <SECONDARY SUBJECT>
---

# <OMI-SPEC-NNN> — <OFFICIAL TITLE>

## Document metadata

| Field | Value |
|---|---|
| Identifier | `<OMI-SPEC-NNN>` |
| Title | <OFFICIAL TITLE> |
| Version | `<0.1.0>` |
| Status | <Draft> |
| Document type | <Normative / Informative / Mixed> |
| Normative language | English |
| Editors | <EDITOR OR EDITORIAL GROUP> |
| Last updated | <YYYY-MM-DD> |
| Replaces | <NONE OR IDENTIFIER> |
| Replaced by | <NONE OR IDENTIFIER> |
| Depends on | <IDENTIFIERS OR NONE> |
| Used by | <IDENTIFIERS OR NONE KNOWN> |
| Schemas | <LINKS OR NONE> |
| Profiles | <LINKS OR NONE> |
| Implementation status | <SUMMARY OR LINK> |
| Issue tracker | <CANONICAL ISSUE URL OR REPOSITORY LOCATION> |

## 1. Abstract

<!--
Describe in two to four paragraphs:
- what the specification defines;
- why the model or protocol is needed;
- which actors or systems use it;
- what the specification deliberately does not define.
Do not place normative requirements in the abstract.
-->

<TEXT>

## 2. Status of this document

This document is a **<LIFECYCLE STATUS>** specification of the Open Manuscript Initiative.

<!--
State the stability implications of the current lifecycle status.
For Draft, explain that incompatible changes may occur.
For Review Candidate, identify the review milestone.
For Implementation Candidate, identify the implementation-evidence process.
For Stable, identify the stable release and compatibility commitment.
-->

Implementations claiming support MUST identify the exact specification version or immutable commit used.

Discussion and change proposals are tracked at <ISSUE LOCATION>.

## 3. Conformance

### 3.1 Conformance classes

This specification defines the following conformance classes:

- **Conforming producer:** <RESPONSIBILITIES>.
- **Conforming consumer:** <RESPONSIBILITIES>.
- **Conforming validator:** <RESPONSIBILITIES>.
- **[OPTIONAL] Conforming renderer:** <RESPONSIBILITIES>.
- **[OPTIONAL] Conforming preservation processor:** <RESPONSIBILITIES>.

<!-- Remove classes that are not applicable. Add role-specific classes only when needed. -->

### 3.2 General conformance

A conforming implementation MUST satisfy every applicable **MUST** and **MUST NOT** requirement for its declared conformance class.

An optional feature MAY be omitted. When implemented, the feature MUST satisfy every requirement defined for that feature.

A conformance claim SHOULD identify:

- implementation name and version;
- exact specification identifier and version;
- declared conformance class;
- supported profiles;
- known limitations;
- conformance-test version, when available.

### 3.3 Requirement identifiers

<!-- Assign stable identifiers by Review Candidate status. -->

**REQ-<CODE>-001:** <FIRST TESTABLE NORMATIVE REQUIREMENT>.

## 4. Scope

This specification defines:

- <IN-SCOPE ITEM>;
- <IN-SCOPE ITEM>;
- <IN-SCOPE ITEM>.

### 4.1 Out of scope

This specification does not define:

- <OUT-OF-SCOPE ITEM>;
- <OUT-OF-SCOPE ITEM>;
- <OUT-OF-SCOPE ITEM>.

## 5. Terminology

The terminology of the central OMI Terminology and Definitions document applies.

### 5.1 <SPECIALISED TERM>

<CONCISE, NON-CIRCULAR DEFINITION>.

### 5.2 <SPECIALISED TERM>

<CONCISE, NON-CIRCULAR DEFINITION>.

<!--
Define only terms that are specialised by this specification.
Do not silently redefine a central OMI term.
-->

## 6. Design principles

This section is informative.

The specification is guided by:

- **<PRINCIPLE>:** <EXPLANATION>.
- **<PRINCIPLE>:** <EXPLANATION>.
- **<PRINCIPLE>:** <EXPLANATION>.

Design principles explain intent but do not replace testable normative requirements.

## 7. Model overview

<!-- Provide a concise conceptual overview and explain the relationship to other OMI specifications. -->

```text
<CONCEPTUAL DIAGRAM>
```

The diagram is informative. Normative behaviour is defined by the prose requirements in this specification.

## 8. Data model

### 8.1 <ENTITY NAME>

**Purpose:** <TEXT>  
**Identifier:** <IDENTITY RULE>  
**Lifecycle:** <LIFECYCLE RULE>

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable identifier for the entity. |
| `<propertyName>` | <TYPE> | <Yes/No> | `<0..1 / 1 / 0..* / 1..*>` | <DESCRIPTION>. |

#### 8.1.1 Invariants

- **REQ-<CODE>-010:** <TESTABLE INVARIANT>.
- **REQ-<CODE>-011:** <TESTABLE INVARIANT>.

#### 8.1.2 Relationships

<DEFINE CONTAINMENT, REFERENCE, OWNERSHIP, ORDER, OR OTHER RELATIONSHIPS>.

#### 8.1.3 Missing, null, and empty values

<DEFINE THE MEANING OF ABSENCE, `null`, EMPTY STRINGS, EMPTY ARRAYS, UNKNOWN VALUES, WITHHELD VALUES, AND NOT-APPLICABLE VALUES>.

### 8.2 <ADDITIONAL ENTITY NAME>

<REPEAT THE ENTITY STRUCTURE AS NEEDED>.

## 9. Processing model

### 9.1 Inputs

<DEFINE ACCEPTED INPUTS AND PRECONDITIONS>.

### 9.2 Processing steps

A conforming <PROCESSOR ROLE> MUST process the input in this order:

1. <STEP>.
2. <STEP>.
3. <STEP>.

### 9.3 Outputs

<DEFINE OUTPUTS, STATE CHANGES, AND PRESERVATION OBLIGATIONS>.

### 9.4 Determinism and implementation-defined behaviour

<STATE WHICH RESULTS MUST BE DETERMINISTIC AND WHICH CHOICES MAY BE IMPLEMENTATION-DEFINED>.

## 10. Validation and error handling

### 10.1 Validation levels

The specification distinguishes:

- syntax validation;
- structural validation;
- semantic validation;
- reference-integrity validation;
- profile validation.

### 10.2 Error conditions

| Condition | Classification | Required behaviour |
|---|---|---|
| <CONDITION> | Error | <REJECT / REPORT / PRESERVE / RECOVER> |
| <CONDITION> | Warning | <REPORT / CONTINUE / PRESERVE> |
| <CONDITION> | Unsupported feature | <REQUIRED BEHAVIOUR> |
| <CONDITION> | Unknown feature | <REQUIRED BEHAVIOUR> |

### 10.3 Preservation during failure

**REQ-<CODE>-100:** <DEFINE WHETHER UNKNOWN OR INVALID CONTENT IS REJECTED, QUARANTINED, IGNORED, OR PRESERVED>.

## 11. Extensibility

### 11.1 Extension points

<IDENTIFY DECLARED EXTENSION POINTS>.

### 11.2 Unknown extensions

A conforming <CONSUMER ROLE> MUST <REJECT / IGNORE / PRESERVE / EXPOSE> unknown extension content according to <RULE>.

Extensions MUST NOT redefine the semantics of core properties.

### 11.3 Namespace or identifier rules

<DEFINE COLLISION AVOIDANCE, OWNERSHIP, REGISTRATION, AND VERSIONING>.

## 12. Versioning and compatibility

This specification follows the OMI Versioning Policy.

### 12.1 Compatibility dimensions

The following compatibility dimensions apply:

- read compatibility;
- write compatibility;
- round-trip compatibility;
- schema compatibility;
- API or processing compatibility;
- profile compatibility.

### 12.2 Compatible changes

<DEFINE CHANGES THAT MAY OCCUR IN MINOR OR PATCH RELEASES>.

### 12.3 Breaking changes

<DEFINE CHANGES THAT REQUIRE A MAJOR RELEASE OR, BEFORE 1.0, A DOCUMENTED BREAKING MINOR RELEASE>.

### 12.4 Migration

<DEFINE MIGRATION EXPECTATIONS, VERSION DETECTION, AND FAILURE BEHAVIOUR>.

### 12.5 Deprecation

<DEFINE DEPRECATION NOTICE, REPLACEMENT, SUPPORT WINDOW, AND EARLIEST REMOVAL VERSION>.

## 13. Interoperability

### 13.1 External standards

| External standard | Direction | Mapping quality | Notes |
|---|---|---|---|
| <STANDARD> | <Import / Export / Bidirectional> | <Lossless / Conditionally lossless / Lossy / Unsupported> | <NOTES> |

### 13.2 Information preservation

<STATE WHAT IS PRESERVED, TRANSFORMED, OMITTED, GENERATED, OR AMBIGUOUS>.

### 13.3 Round-trip behaviour

<DEFINE WHETHER AND UNDER WHICH CONDITIONS ROUND TRIPS PRESERVE SEMANTICS AND UNKNOWN EXTENSIONS>.

## 14. Security, privacy, and integrity considerations

### 14.1 Threats

This specification has been reviewed for risks involving:

- untrusted input;
- active content;
- external resource retrieval;
- identifier spoofing;
- hidden or restricted content;
- personal information;
- access control;
- denial of service;
- unsafe rendering;
- provenance and signature integrity.

### 14.2 Requirements

- **REQ-<CODE>-200:** <SECURITY OR INTEGRITY REQUIREMENT>.
- **REQ-<CODE>-201:** <PRIVACY OR ACCESS-CONTROL REQUIREMENT>.

<!--
When no specification-specific risk is known, retain this section and state:
“No specification-specific security, privacy, or integrity requirements are currently known beyond the general requirements of the OMI platform and container specifications.”
-->

## 15. Accessibility considerations

<DEFINE ACCESSIBILITY REQUIREMENTS OR STATE WHY THE SPECIFICATION HAS NO USER-FACING ACCESSIBILITY EFFECT>.

User-facing mappings SHOULD preserve semantic structure, labels, alternative descriptions, reading order, keyboard operation, and assistive-technology compatibility where applicable.

## 16. Internationalisation considerations

This specification has been reviewed for:

- Unicode processing;
- BCP 47 language tags;
- bidirectional text;
- script variation;
- localised names;
- transliteration;
- locale-neutral machine values;
- dates, times, time zones, and calendars;
- language-sensitive sorting and comparison.

<DEFINE SPECIFICATION-SPECIFIC REQUIREMENTS>.

## 17. Examples

### 17.1 Minimal valid example

```json
{
  "id": "example-001",
  "type": "<TYPE>"
}
```

Explain why the example is valid and identify the requirements it demonstrates.

### 17.2 Representative valid example

```json
{
  "id": "example-002",
  "type": "<TYPE>",
  "<propertyName>": "<VALUE>"
}
```

### 17.3 Invalid example

```json
{
  "type": "<TYPE>"
}
```

This example is invalid because <REASON AND REQUIREMENT IDENTIFIER>.

### 17.4 [OPTIONAL] Migration example

<SHOW BEFORE, AFTER, AND MIGRATION CONSEQUENCES>.

## 18. Normative references

- Open Manuscript Initiative, *<DEPENDENCY TITLE>*, `<OMI-SPEC-NNN>`, version `<VERSION>`.
- <AUTHORITATIVE EXTERNAL STANDARD AND VERSION>.

## 19. Informative references

- <BACKGROUND OR RELATED MATERIAL>.

## 20. Implementation status

<!--
This section reports evidence; it does not define normative behaviour.
Link to the implementation status matrix when available.
-->

| Implementation | Version | Conformance class | Specification version | Status | Notes |
|---|---|---|---|---|---|
| <IMPLEMENTATION> | <VERSION> | <CLASS> | <VERSION> | <Experimental / Partial / Complete> | <NOTES> |

## 21. Unresolved issues

<!-- Required for Draft and Review Candidate. Remove only when the lifecycle policy permits. -->

| Issue | Impact | Required decision | Tracking link |
|---|---|---|---|
| <ISSUE> | <IMPACT> | <DECISION> | <LINK> |

A Draft MUST NOT conceal unresolved architectural questions in apparently normative prose.

## 22. Change history

| Version | Date | Status | Change classification | Summary |
|---|---|---|---|---|
| `0.1.0` | <YYYY-MM-DD> | Draft | Initial draft | Initial registered version. |

Git history supplements but does not replace this published change history.

## 23. Acknowledgements

[OPTIONAL]

<Acknowledge substantial review, implementation evidence, source standards, or editorial assistance.>

When substantial AI assistance is disclosed, describe its role without attributing authorship or responsibility to the tool. Human editors remain responsible for all normative content.
````

## 9. Regeln für die Auslassung und Anpassung von Abschnitten

Ein Abschnitt DARF nur dann entfernt werden, wenn:

- In dieser Vorlage ist es als optional gekennzeichnet;
- Das Subjekt weist tatsächlich kein entsprechendes Modell oder Verhalten auf;
- Die Entfernung ersetzt nicht die erforderliche Überprüfung des Lebenszyklus oder der Risiken;
- Der Pull-Request bleibt auch ohne diesen Abschnitt verständlich.

Die folgenden Abschnitte DÜRFEN NICHT aus einer normativen Spezifikation entfernt werden:

- Metadaten des Dokuments;
- Zusammenfassung;
- Status dieses Dokuments;
- Konformität;
- Geltungsbereich;
- Begriffe;
- Validierung und Fehlerbehandlung;
- Versionsverwaltung und Kompatibilität;
- Überlegungen zu Sicherheit, Datenschutz und Integrität;
- Normative Verweise;
- Änderungshistorie.

Wenn eine verbindliche Vorgabe nicht anwendbar ist, MUSS in dem Abschnitt begründet werden, warum dies der Fall ist.

## 10. Anpassungen der Dokumentart

### 10.1 Profil

Ein Dokument unter `OMI-PROFILE-*` SOLLTE Folgendes enthalten:

- Spezifikationen und genaue Versionen;
- ausgewählte Konformitätsklassen;
- verschärfte Auflagen;
- Standardwerte;
- unzulässige optionale Funktionen;
- Anforderungen an die Verlängerung;
- Kompatibilität mit der nicht profilierten Spezifikation.

Ein Profil DARF nicht stillschweigend seinen Basisspezifikationen widersprechen.

### 10.2 Register

Ein Dokument unter `OMI-REG-*` SOLLTE Folgendes enthalten:

- Zuteilungsbefugnis;
- Syntax für Einträge;
- Einzigartigkeit ist das A und O;
- Anmeldeverfahren;
- Lebenszyklus eines Eintrags;
- Regeln zur Veralterung und Reservierung;
- maschinenlesbarer Speicherort im Register.

Zugewiesene Bezeichner DÜRFEN NICHT neu vergeben werden.

### 10.3 Schema

Ein Dokument unter `OMI-SCHEMA-*` SOLLTE Folgendes enthalten:

- kanonische `$id` oder ein gleichwertiger Bezeichner;
- Schemasprache und -version;
- Beziehung zwischen Prosa und Spezifikation;
- Erzeugungsquelle;
- Validierungsbereich;
- nicht unterstützte semantische Einschränkungen;
- Kompatibilitätsrichtlinie.

Ein Schema MUSS die genaue Version der Prosaspezifikation angeben, die es formalisiert.

### 10.4 Beispielsatz

Ein Dokument nach dem „`OMI-EXAMPLE-*`“-Standard SOLLTE jedes Beispiel wie folgt klassifizieren:

- normativ oder informativ;
- gültig oder ungültig;
- minimal oder repräsentativ;
- spezifikations- oder profilspezifisch.

Vollständige Beispiele SOLLTEN als separat validierte Fixtures gespeichert werden.

### 10.5 Zuordnung zur Interoperabilität

Ein Mapping-Dokument SOLLTE den Abschnitt zum Hauptdatenmodell durch Folgendes ersetzen:

- Quellmodell;
- Zielmodell;
- Zuordnungsrichtung;
- Voraussetzungen;
- Feld- und Objektzuordnungstabellen;
- Analyse des Informationsverlusts;
- Umkehrbarkeit;
- nicht unterstützte Konstrukte;
- Round-Trip-Tests.

## 11. Lebenszyklusbezogene Anforderungen

### 11.1 Entwurf

Ein Entwurf MUSS Folgendes enthalten:

- eine permanente oder vorläufig reservierte Kennung;
- begrenzter Geltungsbereich;
- wichtige Konzepte und Datenstrukturen;
- Abhängigkeiten;
- ursprüngliches Konformitätsmodell;
- ausdrücklich ungelöste Fragen.

Beispiele, Validierung, Risikoprüfung und Auswirkungen auf die Migration SOLLTEN bereits vorliegen.

### 11.2 Prüfungsanwärter

Vor Erlangung des Status „Prüfungskandidat“:

- Platzhalter und Entwurfsanmerkungen MÜSSEN entfernt werden;
- Die Terminologie MUSS intern konsistent sein;
- Es MÜSSEN repräsentative gültige und ungültige Beispiele vorhanden sein;
- Geltende Anforderungen SOLLTEN über stabile Bezeichner verfügen;
- Die Abhängigkeiten MÜSSEN überprüft werden;
- Wesentliche offene Fragen MÜSSEN geklärt oder ausdrücklich geregelt werden;
- Der Prüfungszeitraum und die Fragen, die im Rahmen der Prüfung zu klären sind, MÜSSEN angegeben werden.

### 11.3 Implementierungskandidat

Vor dem Erreichen des Status „Implementierungskandidat“:

- Die normativen Anforderungen MÜSSEN vollständig sein;
- Schemas oder formale Definitionen MÜSSEN, soweit zutreffend, vorhanden sein;
- Es MÜSSEN Prüfvorrichtungen zur Konformitätsprüfung vorhanden sein;
- Kompatibilitäts- und Migrationsregeln MÜSSEN testbar sein;
- Die Erfassung von Implementierungsnachweisen MUSS aktiv sein.

### 11.4 Stabil

Vor dem Status „Stable“:

- Die Version MUSS eine feste Kompatibilitätszusage enthalten;
- Nachweise über die Umsetzung MÜSSEN dokumentiert werden;
- Konformitätsprüfungen MÜSSEN, sofern zutreffend, veröffentlicht werden;
- Fehler, die die Implementierung blockieren, MÜSSEN behoben werden;
- Die Sicherheits- und Datenschutzprüfung MUSS abgeschlossen sein;
- Die kanonische, versionierte Version MUSS archiviert werden.

Ein „Stable“-Dokument DARF KEINEN Abschnitt „Ungelöste Fragen“ enthalten, in dem offene normative Fragen aufgeführt sind.

## 12. Checkliste für Pull-Requests

Ein Pull-Request, der eine Spezifikation hinzufügt, SOLLTE Folgendes bestätigen:

### Identität und Registrierung

- [ ] Die Kennung ist im Spezifikationsregister reserviert.
- [ ] Der Titel stimmt mit dem eingetragenen Titel überein.
- [ ] Der Dateiname wird in Kleinbuchstaben (Kebab-Case) geschrieben.
- [ ] Die Dokument-ID von „Docusaurus“ ist unveränderlich und eindeutig.

### Aufbau und Inhalt

- [ ] Die erforderlichen Metadaten sind im Dokumenttext sichtbar.
- [ ] Pflichtfelder sind vorhanden.
- [ ] Die Grenzen des Geltungsbereichs und der Nicht-Geltungsbereiche sind explizit festgelegt.
- [ ] Die zentrale Terminologie wird einheitlich verwendet.
- [ ] Normative Anforderungen sind überprüfbar.
- [ ] Die Fehlerbehandlung und das Verhalten bei unbekannten Dateiendungen sind definiert.

### Verträglichkeit und Risiko

- [ ] Auswirkungen auf die Version und die Kompatibilität sind dokumentiert.
- [ ] Die Migrationsanforderungen sind dokumentiert.
- [ ] Sicherheit, Datenschutz und Integrität wurden überprüft.
- [ ] Die Barrierefreiheit wurde überprüft.
- [ ] Die Internationalisierung wurde überprüft.

### Beispiele und formale Artefakte

- [ ] „JSON“, „XML“ oder andere Beispiele sind syntaktisch korrekt.
- [ ] Es gibt mindestens ein gültiges und ein wichtiges ungültiges Beispiel.
- [ ] Schema und Quelle der Prosa werden angegeben.
- [ ] Anforderungskennungen sind an der jeweiligen Verwendungsstelle eindeutig.

### Veröffentlichung

- [ ] Das Dokument wird der richtigen Kategorie in der Seitenleiste hinzugefügt.
- [ ] Die Übersetzungen der Navigationselemente ins Ungarische und Deutsche wurden aktualisiert.
- [ ] Interne Links funktionieren.
- [ ] Die Website „Docusaurus“ erstellt Inhalte für `en`, `hu` und `de`.
- [ ] In der Beschreibung des Pull-Requests werden die Änderung und ihre Auswirkungen auf die Kompatibilität klassifiziert.

## 13. Wartung

Für diese Vorlage gelten der Spezifikationslebenszyklus, die Versionsrichtlinie und der Stilleitfaden für Spezifikationen.

Änderungen an der Vorlage MÜSSEN hinsichtlich ihrer Auswirkungen auf folgende Punkte geprüft werden:

- bestehende Spezifikationen;
- Workflow für Mitwirkende;
- Übersetzungen;
- automatisierte Validierung;
- Schemas und Fixtures;
- externe Verweise;
- Kriterien für die Förderung im Lebenszyklus.

Bestehende Spezifikationen gelten nicht automatisch als nicht konform, wenn sich die Vorlage ändert. Bei einer Vorlagenänderung SOLLTE festgestellt werden, ob bestehende Dokumente angepasst werden müssen und welcher Zeitrahmen dafür voraussichtlich erforderlich ist.

## 14. Zusammenfassung

Die „OMI“-Spezifikationsvorlage bietet einen einheitlichen Weg vom ersten Entwurf bis hin zu einem stabilen, umsetzbaren und wartbaren Standard.

Dadurch wird sichergestellt, dass Identität, Geltungsbereich, Terminologie, Konformität, Validierung, Kompatibilität, Interoperabilität, Risikoprüfung, Beispiele, Nachweise zur Umsetzung und Änderungshistorie ausdrücklich behandelt werden und nicht erst zu einem späten Zeitpunkt im Normungsprozess nachträglich rekonstruiert werden müssen.

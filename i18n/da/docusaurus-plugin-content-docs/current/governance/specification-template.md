---
id: specification-template
title: OMI Specifikationsskabelon
sidebar_label: Specifikationsskabelon
description: Obligatorisk startstruktur for nye »Open Manuscript Initiative«-specifikationer.
keywords:
  - Open Manuscript Initiative
  - OMI
  - specification template
  - standards development
  - technical writing
  - conformance
---

# Open Manuscript Initiative Specifikationsskabelon

## Dokumentmetadata

| Felt | Værdi |
|---|---|
| Dokumenttype | Skabelon til styring |
| Status | Udkast |
| Version | 0.1.0 |
| Normativt sprog | Engelsk |
| Gælder for | Nye og væsentligt omskrevne specifikationer for »OMI« |
| Ansvarlig gruppe | OMI-vedligeholdere |
| Senest opdateret | 06.08.2026 |

## 1. Formål

Dette dokument indeholder den standardmæssige udgangsskabelon for specifikationer på Open Manuscript Initiative.

Skabelonen omdanner kravene i følgende styringsdokumenter til en genanvendelig struktur til udarbejdelse af tekster:

- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md).

Et nyt dokument i kategorien »`OMI-SPEC-*`« SKAL baseres på denne skabelon, medmindre der i pull-anmodningen er angivet og begrundet en begrænset undtagelse.

Skabelonen er udformet med henblik på at udarbejde hver enkelt specifikation:

- identificerbar;
- kan revideres;
- kan testes;
- implementeringsuafhængig;
- tydelig med hensyn til kompatibilitet og overensstemmelse;
- egnet til oversættelse og vedligeholdelse på lang sigt.

## 2. Hvornår skal denne skabelon bruges?

Denne skabelon SKAL bruges til:

- en ny tildelt OMI-specifikation;
- en foreløbig specifikation, der får status som udkast;
- en omfattende omskrivning, der erstatter strukturen i en eksisterende specifikation;
- en specifikation, der er udskilt fra eller sammenlagt med et andet normativt dokument.

Den fulde skabelon er ikke påkrævet for:

- retningslinjer for ledelse;
- vejledninger og forklarende guider;
- implementeringsbemærkninger;
- uofficielle forslag med status som »undersøgelsesfase«;
- oversættelsesfiler;
- maskingenereret skema-dokumentation.

Profiler, registre, skemaer, eksempler og kortlægningsdokumenter BØR bruge denne skabelon som udgangspunkt og anvende de tilpasninger, der er beskrevet i afsnittet »Tilpasninger af dokumenttyper«.

## 3. Sådan bruger du skabelonen

1. Hent eller reserver den permanente identifikator i registret for specifikationer for »OMI«.
2. Kopier kildeskabelonen fra afsnittet »Kilde til kopieringsklar specifikation«.
3. Erstat alle pladsholdere, der er angivet i spidse parenteser.
4. Slet redigeringsinstruktioner, der er skrevet i kommentarer af typen »HTML«.
5. Fjern de valgfri afsnit først, når du har fastslået, at de ikke er relevante.
6. Overhold den krævede rækkefølge af afsnit, medmindre faget kræver en dokumenteret undtagelse.
7. Føj det nye dokument til den kanoniske kategori i sidepanelet.
8. Tilføj eller opdater oversættelsesnøglerne for navigation på ungarsk og tysk.
9. Kontroller Markdown, links, eksempler, identifikatorer og skemaer inden gennemgangen.
10. Notér uafklarede designspørgsmål eksplicit, så længe dokumentet stadig befinder sig i præ-Stable-fasen.

Der MÅ IKKE forblive en pladsholder i et dokument, der foreslås til status som »Review Candidate«.

## 4. Konventioner for pladsholdere

Den kopieringsklare kilde bruger følgende pladsholderformularer:

| Form | Betydning |
|---|---|
| `<OMI-SPEC-NNN>` | Permanent specifikationsidentifikator |
| `<OFFICIAL TITLE>` | Registreret titel |
| `<SHORT TITLE>` | Kortfattet tekst til sidepanelet |
| `<0.1.0>` | Semantisk dokumentversion |
| `<Draft>` | Status i livscyklussen |
| `<EDITOR OR GROUP>` | Ansvarlig redaktør eller redaktionsgruppe |
| `<YYYY-MM-DD>` | ISO 8601-dato |
| `<NONE>` | Udtrykkelig angivelse af, at der ikke gælder nogen værdi |
| `<TEXT>` | Nødvendig tekst fra forfatteren |
| `[OPTIONAL]` | Afsnit eller felt, der kan fjernes, hvis det ikke er relevant |

Pladsholder-vinkelparenteser bruges udelukkende i tegningsnotation. De SKAL fjernes fra offentliggjorte dokumenter.

## 5. Nødvendige metadata

Hver specifikation SKAL indeholde sine normative metadata i den gengivne brødtekst. Det er ikke tilstrækkeligt kun at anføre dem i forordet.

Metadatatabellen SKAL indeholde:

| Felt | Obligatorisk indhold |
|---|---|
| Identifikator | Permanent `OMI-SPEC-*`-identifikator |
| Titel | Officielt registreret titel |
| Version | `MAJOR.MINOR.PATCH` |
| Status | Livscyklusfase |
| Dokumenttype | Normativ, informativ eller blandet |
| Sprog i normtekster | Normalt engelsk |
| Redaktører | Ansvarlige personer eller redaktionsgruppe |
| Senest opdateret | ISO 8601-dato |
| Erstatning for | Forgænger eller `None` |
| Erstattet af | Efterfølger eller `None` |
| Afhænger af | Normative afhængigheder eller `None` |
| Anvendes af | Kendte afhængigheder eller `None known` |
| Skemaer | Relevante maskinlæsbare artefakter eller `None` |
| Profiler | Gældende profiler eller `None` |
| Status for implementering | Link til oversigt eller matrix |
| Problemsporingssystem | Den officielle placering for problemer |

En specifikation, der definerer serialiserede data, BØR også angive eksempler på testopsætninger, valideringsværktøjer og overensstemmelsestests.

## 6. Påkrævet rækkefølge af afsnit

Den standardmæssige rækkefølge af afsnit er:

1. Resumé
2. Dette dokuments status
3. Overensstemmelse
4. Anvendelsesområde
5. Terminologi
6. Designprincipper
7. Modeloversigt
8. Datamodel
9. Behandlingsmodel
10. Validering og fejlhåndtering
11. Udvidelsesmuligheder
12. Versionsstyring og kompatibilitet
13. Interoperabilitet
14. Overvejelser vedrørende sikkerhed, privatliv og integritet
15. Overvejelser vedrørende tilgængelighed
16. Overvejelser vedrørende internationalisering
17. Eksempler
18. Normative henvisninger
19. Informative kilder
20. Status for implementeringen
21. Uafklarede spørgsmål
22. Ændringshistorik
23. Tak

Afsnit 1–5, 10, 12, 14, 18 og 22 er obligatoriske for alle normative specifikationer.

Et obligatorisk afsnit, der ikke indebærer særlige hensyn, SKAL forblive på sin plads og angive, at spørgsmålet er blevet gennemgået, og at der på nuværende tidspunkt ikke er kendt nogen specifikationsspecifikke krav.

## 7. Normative skriveregler, der er indbygget i skabelonen

Normative krav SKAL:

- bevidst at bruge kravbetingelser med store bogstaver;
- at identificere den ansvarlige for gennemførelsen;
- statens observerbare adfærd;
- Undgå at samle urelaterede krav i én sætning;
- fastlægge, hvordan der skal reageres i tilfælde af fejl, hvor der kan opstå afvigelser;
- kan testes eller vurderes objektivt.

Specifikationer med status som »Review Candidate« eller højere BØR tildeles stabile kravidentifikatorer ved hjælp af:

```text
REQ-<SPEC-CODE>-<NNN>
```

Eksempel:

```text
REQ-DOC-001
```

Kravidentifikatorer MÅ IKKE tildeles på ny efter fjernelse.

## 8. Kildekode til specifikationer, klar til kopiering

Kopier hele blokken nedenfor ind i den nye specifikationsfil.

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

## 9. Regler om udeladelse og tilpasning af afsnit

Et afsnit MÅ kun fjernes, hvis:

- det er markeret som valgfrit i denne skabelon;
- emnet har virkelig ingen tilsvarende model eller adfærd;
- Fjernelsen udelukker ikke, at der skal foretages en gennemgang af livscyklus eller risici;
- Pull-anmodningen forbliver forståelig, selvom dette afsnit udelades.

Følgende afsnit MÅ IKKE fjernes fra en normativ specifikation:

- Dokumentmetadata;
- Resumé;
- Dette dokuments status;
- Overensstemmelse;
- Omfang;
- Terminologi;
- Validering og fejlhåndtering;
- Versionsstyring og kompatibilitet;
- Overvejelser vedrørende sikkerhed, privatliv og integritet;
- Normative henvisninger;
- Ændringshistorik.

Når et obligatorisk hensyn ikke finder anvendelse, SKAL afsnittet angive årsagen hertil.

## 10. Tilpasninger af dokumenttyper

### 10.1 Profil

Et dokument i serien »`OMI-PROFILE-*`« BØR indeholde følgende:

- specifikationer med detaljerede oplysninger og præcise versioner;
- udvalgte overensstemmelsesklasser;
- skærpede krav;
- standardindstillinger;
- forbudte valgfrie funktioner;
- krav til udvidelse;
- overensstemmelse med den ikke-profilerede specifikation.

En profil MÅ IKKE i det skjulte være i strid med sine grundlæggende specifikationer.

### 10.2 Registret

Et dokument fra `OMI-REG-*` BØR indeholde følgende:

- tildelingsbeføjelse;
- indtastningssyntaks;
- unikhed er det vigtigste;
- registreringsproceduren;
- livscyklus for poster;
- regler for udfasning og forbehold;
- maskinlæsbar registreringsplacering.

Tildelte identifikatorer MÅ IKKE tildeles på ny.

### 10.3 Skema

Et dokument i formatet »`OMI-SCHEMA-*`« BØR indeholde følgende:

- kanonisk `$id` eller tilsvarende identifikator;
- skemaets sprog og version;
- forholdet mellem prosa og specifikation;
- genereringskilde;
- valideringsomfang;
- semantiske begrænsninger, der ikke understøttes;
- kompatibilitetspolitik.

Et skema SKAL angive den nøjagtige version af prosaspecifikationen, som det formaliserer.

### 10.4 Eksempelsæt

Et dokument i henhold til »`OMI-EXAMPLE-*`« BØR klassificere hvert eksempel som:

- normativ eller informativ;
- gyldig eller ugyldig;
- minimal eller repræsentativ;
- specifikations- eller profilspecifik.

Komplette eksempler BØR gemmes som separat validerede testscenarier.

### 10.5 Kortlægning af interoperabilitet

Et kortlægningsdokument BØR erstatte hovedafsnittet om datamodellen med:

- kildemodel;
- målmodel;
- kortlægningsretning;
- forudsætninger;
- felt- og objektkortlægningstabeller;
- analyse af informationstab;
- reversibilitet;
- konstruktioner, der ikke understøttes;
- returprøver.

## 11. Krav knyttet til livscyklus

### 11.1 Udkast

Et udkast SKAL indeholde:

- en permanent eller midlertidigt reserveret identifikator;
- begrænset anvendelsesområde;
- vigtigste begreber og datastrukturer;
- afhængigheder;
- indledende overensstemmelsesmodel;
- konkrete uafklarede spørgsmål.

Eksempler, validering, risikovurdering og konsekvenser for migreringen BØR allerede foreligge.

### 11.2 Kandidat til evaluering

Før status som kandidat til evaluering:

- pladsholdere og udkastskommentarer SKAL fjernes;
- terminologien SKAL være internt konsistent;
- Der SKAL findes eksempler på både gyldige og ugyldige tilfælde;
- de gældende krav BØR have faste identifikatorer;
- afhængigheder SKAL gennemgås;
- Væsentlige uafklarede spørgsmål SKAL afsluttes eller behandles eksplicit;
- Gennemgangsperioden og de spørgsmål, der skal behandles i forbindelse med gennemgangen, SKAL angives.

### 11.3 Kandidat til implementering

Inden tildeling af status som implementeringskandidat:

- De normative krav SKAL være fuldstændige;
- Der SKAL foreligge skemaer eller formelle definitioner, hvor det er relevant;
- Der SKAL være overensstemmelsesprøveanordninger til rådighed;
- Kompatibilitets- og migrationsregler SKAL kunne testes;
- Indsamlingen af dokumentation for implementeringen SKAL være aktiv.

### 11.4 Stabil

Før statusen »Stabil«:

- versionen SKAL indeholde en fast forpligtelse til kompatibilitet;
- Bevis for gennemførelsen SKAL dokumenteres;
- Overensstemmelsestest SKAL offentliggøres, hvor det er relevant;
- Fejl, der hindrer implementeringen, SKAL udbedres;
- Sikkerheds- og privatlivsvurderingen SKAL være afsluttet;
- Den kanoniske versionerede udgivelse SKAL arkiveres.

Et Stable-dokument MÅ IKKE indeholde et afsnit om »Uafklarede spørgsmål«, der omfatter uafklarede normative spørgsmål.

## 12. Tjekliste for pull-anmodninger

En pull-anmodning, der tilføjer en specifikation, BØR bekræfte:

### Identitet og registrering

- [ ] Identifikatoren er reserveret i specifikationsregistret.
- [ ] Titlen stemmer overens med den registrerede titel.
- [ ] Filnavnet er skrevet med små bogstaver i »kebab case«.
- [ ] Dokument-ID’et i »Docusaurus« er fast og entydigt.

### Opbygning og indhold

- [ ] De obligatoriske metadata fremgår af dokumentets brødtekst.
- [ ] De obligatoriske afsnit er udfyldt.
- [ ] Afgrænsningerne for, hvad der er omfattet, og hvad der ikke er omfattet, er tydeligt angivet.
- [ ] Den centrale terminologi anvendes konsekvent.
- [ ] Normative krav kan efterprøves.
- [ ] Fejlhåndtering og adfærd ved ukendte filtyper er defineret.

### Kompatibilitet og risiko

- [ ] Version og kompatibilitetsaspekter er dokumenteret.
- [ ] Kravene til migrering er dokumenteret.
- [ ] Sikkerhed, privatliv og integritet er blevet gennemgået.
- [ ] Tilgængeligheden er blevet gennemgået.
- [ ] Internationaliseringen er blevet gennemgået.

### Eksempler og formelle artefakter

- [ ] JSON, XML eller andre eksempler er syntaktisk korrekte.
- [ ] Der findes mindst ét gyldigt eksempel og ét vigtigt ugyldigt eksempel.
- [ ] Kildehenvisning og forfatterangivelse er angivet.
- [ ] Kravidentifikatorer er unikke dér, hvor de anvendes.

### Publikation

- [ ] Dokumentet føjes til den rigtige kategori i sidepanelet.
- [ ] Oversættelserne af navigationsteksterne til ungarsk og tysk er blevet opdateret.
- [ ] Interne links fungerer.
- [ ] Webstedet »Docusaurus« genererer filer til `en`, `hu` og `de`.
- [ ] Beskrivelsen af pull-requesten angiver, hvilken type ændring der er tale om, og hvilke konsekvenser den har for kompatibiliteten.

## 13. Vedligeholdelse

Denne skabelon er underlagt specifikationens livscyklus, versionspolitikken og stilguiden for specifikationer.

Ændringer af skabelonen SKAL vurderes med hensyn til deres indvirkning på:

- gældende specifikationer;
- arbejdsgang for bidragydere;
- oversættelser;
- automatiseret validering;
- skemaer og fiksturer;
- eksterne henvisninger;
- Kriterier for fremme af livscyklus.

Eksisterende specifikationer er ikke automatisk i strid med kravene, når skabelonen ændres. Ved en ændring af skabelonen BØR det angives, om eksisterende dokumenter skal opdateres, samt den forventede tidsramme herfor.

## 14. Resumé

OMI-specifikationsskabelonen udgør en ensartet proces fra et indledende udkast til en stabil, implementerbar og vedligeholdelig standard.

Det sikrer, at identitet, anvendelsesområde, terminologi, overensstemmelse, validering, kompatibilitet, interoperabilitet, risikovurdering, eksempler, dokumentation for implementering og ændringshistorik behandles eksplicit i stedet for at blive rekonstrueret på et sent tidspunkt i standardiseringsprocessen.

---
id: specification-template
title: OMI Šablona specifikace
sidebar_label: Šablona specifikace
description: Povinná počáteční struktura pro nové specifikace v rámci programu „Open Manuscript Initiative“.
keywords:
  - Open Manuscript Initiative
  - OMI
  - specification template
  - standards development
  - technical writing
  - conformance
---

# Open Manuscript Initiative Šablona specifikace

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Typ dokumentu | Šablona pro správu a řízení |
| Stav | Návrh |
| Verze | 0.1.0 |
| Normativní jazyk | Angličtina |
| Platí pro | Nové a podstatně přepracované specifikace OMI |
| Odpovědná skupina | Správci OMI |
| Poslední aktualizace | 6. srpna 2026 |

## 1. Účel

Tento dokument představuje standardní výchozí šablonu pro specifikace Open Manuscript Initiative.

Šablona převádí požadavky následujících dokumentů týkajících se správy a řízení do struktury, kterou lze opakovaně používat při tvorbě obsahu:

- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md).

Nový dokument v rámci projektu „`OMI-SPEC-*`“ MUSÍ vycházet z této šablony, pokud v příslušné žádosti o začlenění není uvedena a odůvodněna omezená výjimka.

Šablona je navržena tak, aby umožňovala vytvoření každé specifikace:

- identifikovatelné;
- podléhající přezkumu;
- ověřitelné;
- nezávislé na implementaci;
- jasně uvádět informace o kompatibilitě a shodě;
- vhodné pro překlad a dlouhodobou údržbu.

## 2. Kdy tuto šablonu použít

Tuto šablonu je NUTNO použít pro:

- nově přidělená specifikace OMI;
- prozatímní specifikace, která přešla do fáze „Draft“;
- zásadní přepracování, které nahrazuje strukturu stávající specifikace;
- specifikace, která byla oddělena od jiného normativního dokumentu nebo do něj začleněna.

Úplná šablona není nutná pro:

- zásady správy a řízení;
- návody a vysvětlující příručky;
- poznámky k implementaci;
- neoficiální návrhy ve fázi prozkoumání;
- překladové soubory;
- automaticky generovaná dokumentace schématu.

Profily, registry, schémata, příklady a mapovací dokumenty BY MĚLY vycházet z této šablony a uplatnit úpravy popsané v oddíle „Úpravy podle typu dokumentu“.

## 3. Jak šablonu používat

1. Získejte nebo si rezervujte trvalý identifikátor v registru specifikací OMI.
2. Zkopírujte zdrojovou šablonu z části „Zdroj specifikace připravený ke kopírování“.
3. Nahraďte všechny zástupné symboly uzavřené v lomítkových závorkách.
4. Odstraňte pokyny pro kreslení uvedené v komentářích typu „HTML“.
5. Volitelné části odstraňte teprve poté, co se ujistíte, že se na vás nevztahují.
6. Dodržujte požadované pořadí oddílů, pokud dané téma nevyžaduje zdokumentovanou výjimku.
7. Přidejte nový dokument do standardní kategorie v postranním panelu.
8. Přidejte nebo aktualizujte překladové klíče pro navigaci v maďarštině a němčině.
9. Před kontrolou ověřte platnost adres Markdown, odkazů, příkladů, identifikátorů a schémat.
10. Nevyřešené otázky týkající se návrhu zaznamenávejte výslovně, dokud se dokument nachází ve fázi před stabilní verzí.

V dokumentu navrženém ke statusu „Review Candidate“ NESMÍ zůstat žádný zástupný symbol.

## 4. Konvence pro zástupné symboly

Zdrojový text připravený k kopírování používá tyto formy zástupných symbolů:

| Forma | Význam |
|---|---|
| `<OMI-SPEC-NNN>` | Trvalý identifikátor specifikace |
| `<OFFICIAL TITLE>` | Zapsaný název |
| `<SHORT TITLE>` | Stručný popisek v postranním panelu |
| `<0.1.0>` | Sémantická verze dokumentu |
| `<Draft>` | Stav životního cyklu |
| `<EDITOR OR GROUP>` | Odpovědný redaktor nebo redakční tým |
| `<YYYY-MM-DD>` | Datum podle normy ISO 8601 |
| `<NONE>` | Výslovné prohlášení, že se neuplatňuje žádná hodnota |
| `<TEXT>` | Povinný text od autora |
| `[OPTIONAL]` | Část nebo pole, které lze odstranit, pokud se nevztahují na daný případ |

Úhlové závorky slouží pouze jako značení v technických výkresech. Z publikovaných dokumentů MUSÍ být odstraněny.

## 5. Požadovaná metadata

Každá specifikace MUSÍ uvádět svá normativní metadata v samotném textu dokumentu. Pouhá úvodní část nestačí.

Tabulka metadat MUSÍ obsahovat:

| Pole | Povinný obsah |
|---|---|
| Identifikátor | Trvalý identifikátor `OMI-SPEC-*` |
| Název | Oficiální registrovaný název |
| Verze | `MAJOR.MINOR.PATCH` |
| Stav | Fáze životního cyklu |
| Typ dokumentu | Normativní, informativní nebo smíšený |
| Jazyk předpisů | Obvykle angličtina |
| Redakce | Odpovědné osoby nebo redakční tým |
| Poslední aktualizace | Datum podle normy ISO 8601 |
| Nahrazuje | Předchůdce nebo `None` |
| Nahrazeno | Nástupce nebo `None` |
| Závisí na | Normativní závislosti nebo `None` |
| Používá | Známé závislé soubory nebo `None known` |
| Schémata | Příslušné strojově čitelné artefakty nebo `None` |
| Profily | Vhodné profily nebo `None` |
| Stav implementace | Odkaz na shrnutí nebo matici |
| Systém pro sledování chyb | Oficiální místo pro hlášení chyb |

Specifikace, která definuje serializovaná data, BY MĚLA rovněž uvádět příklady testovacích sestav, validátorů a testů shody.

## 6. Požadované pořadí oddílů

Standardní pořadí oddílů je následující:

1. Abstrakt
2. Stav tohoto dokumentu
3. Shoda
4. Rozsah
5. Terminologie
6. Zásady návrhu
7. Přehled modelů
8. Datový model
9. Model zpracování
10. Ověřování a zpracování chyb
11. Rozšiřitelnost
12. Verze a kompatibilita
13. Interoperabilita
14. Aspekty bezpečnosti, ochrany soukromí a integrity
15. Aspekty týkající se přístupnosti
16. Aspekty internacionalizace
17. Příklady
18. Normativní odkazy
19. Informativní odkazy
20. Stav realizace
21. Nevyřešené otázky
22. Historie změn
23. Poděkování

Části 1–5, 10, 12, 14, 18 a 22 jsou povinné pro každou normativní specifikaci.

Povinná část, u níž neexistují žádné zvláštní okolnosti, MUSÍ zůstat zachována a musí v ní být uvedeno, že daná záležitost byla posouzena a že v současné době nejsou známy žádné požadavky specifické pro danou specifikaci.

## 7. Normativní pravidla pro psaní obsažená v šabloně

Normativní požadavky MUSÍ:

- záměrně používat pojmy s velkými počátečními písmeny;
- určit, kdo je zodpovědný za provedení;
- chování pozorovatelné ve stavu;
- vyhněte se spojování nesouvisejících požadavků v jedné větě;
- stanovit chování v případě selhání v situacích, kdy může dojít k neshodě;
- musí být ověřitelné nebo objektivně posouditelné.

Specifikace ve stavu „Review Candidate“ nebo v pozdějším stavu BY MĚLY přiřazovat stabilní identifikátory požadavků pomocí:

```text
REQ-<SPEC-CODE>-<NNN>
```

Příklad:

```text
REQ-DOC-001
```

Identifikátory požadavků NESMÍ být po odstranění znovu přiřazeny.

## 8. Zdrojová specifikace připravená k kopírování

Zkopírujte celý níže uvedený blok do nového souboru specifikace.

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

## 9. Pravidla pro vynechání a úpravu oddílů

Část smí být odstraněna pouze v případě, že:

- v této šabloně je to označeno jako volitelné;
- tento objekt skutečně nemá žádný odpovídající model ani chování;
- odstranění nezbavuje povinnosti provést přezkum životního cyklu nebo rizik;
- pull request zůstává srozumitelný i bez této části.

Následující oddíly NESMÍ být z normativní specifikace odstraněny:

- Metadata dokumentu;
- Abstrakt;
- Stav tohoto dokumentu;
- Shoda;
- Rozsah;
- Terminologie;
- Ověřování a zpracování chyb;
- Verze a kompatibilita;
- Aspekty týkající se bezpečnosti, ochrany osobních údajů a integrity;
- Normativní odkazy;
- Historie změn.

Pokud se povinné hledisko neuplatní, MUSÍ být v daném oddíle uvedeno, proč tomu tak je.

## 10. Úpravy typu dokumentu

### 10.1 Profil

Do dokumentu typu „`OMI-PROFILE-*`“ by mělo být doplněno:

- specifikace profilů a přesné verze;
- vybrané třídy shody;
- přísnější omezení;
- výchozí hodnoty;
- zakázané volitelné funkce;
- požadavky na rozšíření;
- soulad s neprofilovanou specifikací.

Profil NESMÍ být v rozporu se svými základními specifikacemi, aniž by na to bylo výslovně upozorněno.

### 10.2 Registr

Do dokumentu typu „`OMI-REG-*`“ BY MĚLO být doplněno:

- pravomoc k přidělování;
- syntaxe záznamu;
- pravidla jedinečnosti;
- registrační postup;
- životní cyklus záznamu;
- pravidla pro vyřazení z používání a rezervaci;
- umístění v registru ve strojově čitelné podobě.

Přidělené identifikátory NESMÍ být znovu přiděleny.

### 10.3 Schéma

Do dokumentu typu „`OMI-SCHEMA-*`“ by MĚLO být doplněno:

- kanonický identifikátor typu „`$id`“ nebo ekvivalentní identifikátor;
- jazyk schématu a jeho verze;
- vztah mezi prózou a specifikací;
- zdroj generace;
- rozsah ověření;
- nepodporovaná sémantická omezení;
- zásady kompatibility.

Schéma MUSÍ identifikovat přesnou verzi specifikace v próze, kterou formalizuje.

### 10.4 Sada příkladů

Dokument „`OMI-EXAMPLE-*`“ by měl každý příklad klasifikovat jako:

- normativní nebo informativní;
- platné nebo neplatné;
- minimální nebo reprezentativní;
- v závislosti na specifikaci nebo profilu.

Kompletní příklady BY MĚLY být uloženy jako samostatně ověřené testovací sady.

### 10.5 Mapování interoperability

Mapovací dokument BY MĚL nahradit hlavní část věnovanou datovému modelu následujícím textem:

- zdrojový model;
- cílový model;
- směr mapování;
- předpoklady;
- tabulky přiřazení polí a objektů;
- analýza ztráty informací;
- vratnost;
- nepodporované konstrukce;
- testy v obou směrech.

## 11. Požadavky specifické pro jednotlivé fáze životního cyklu

### 11.1 Návrh

Návrh MUSÍ obsahovat:

- trvalý nebo dočasně vyhrazený identifikátor;
- ohraničený rozsah;
- základní pojmy a datové struktury;
- závislosti;
- počáteční model shody;
- konkrétní nevyřešené otázky.

Příklady, ověření, posouzení rizik a důsledky pro migraci BY MĚLY být již k dispozici.

### 11.2 Kandidát na přezkoumání

Před získáním statusu „Kandidát na hodnocení“:

- zástupné symboly a poznámky k návrhu MUSÍ být odstraněny;
- terminologie MUSÍ být vnitřně konzistentní;
- musí existovat reprezentativní platné i neplatné příklady;
- příslušné požadavky BY MĚLY mít stabilní identifikátory;
- závislosti MUSÍ být zkontrolovány;
- podstatné nevyřešené záležitosti MUSÍ být uzavřeny nebo musí být o nich výslovně rozhodnuto;
- Je nutné uvést období, za které se přezkum týká, a otázky, na které má přezkum odpovědět.

### 11.3 Kandidát na implementaci

Před získáním statusu kandidátské země:

- normativní požadavky MUSÍ být úplné;
- v příslušných případech MUSÍ existovat schémata nebo formální definice;
- MUSÍ být k dispozici přípravky pro kontrolu shody;
- pravidla kompatibility a migrace MUSÍ být testovatelná;
- Sběr důkazů o implementaci MUSÍ být aktivní.

### 11.4 Stabilní

Před dosažením stavu „Stable“:

- verze MUSÍ zajistit stabilní závazek ohledně kompatibility;
- důkazy o implementaci MUSÍ být zdokumentovány;
- výsledky testů shody MUSÍ být zveřejněny, je-li to relevantní;
- Chyby bránící implementaci MUSÍ být odstraněny;
- přezkum bezpečnosti a ochrany osobních údajů MUSÍ být dokončen;
- Kanonická verze s číslem revize MUSÍ být archivována.

Dokument normy NESMÍ obsahovat oddíl „Nevyřešené otázky“, v němž by byly uvedeny otevřené normativní otázky.

## 12. Kontrolní seznam pro žádosti o začlenění

Pull request, který přidává specifikaci, BY MĚL potvrdit:

### Identita a registr

- [ ] Tento identifikátor je vyhrazen v registru specifikací.
- [ ] Název se shoduje s registrovaným názvem.
- [ ] Název souboru je zapsán v malých písmenech s mezerami mezi slovy.
- [ ] Identifikátor dokumentu v systému „Docusaurus“ je neměnný a jedinečný.

### Struktura a obsah

- [ ] Povinná metadata jsou viditelná v těle dokumentu.
- [ ] Povinné části jsou vyplněny.
- [ ] Hranice rozsahu a hranice mimo rozsah jsou jasně vymezeny.
- [ ] Klíčová terminologie je používána jednotně.
- [ ] Normativní požadavky lze ověřit.
- [ ] Je definováno zpracování chyb a chování v případě neznámých přípon.

### Kompatibilita a rizika

- [ ] Jsou zdokumentovány dopady na verzi a kompatibilitu.
- [ ] Požadavky na migraci jsou zdokumentovány.
- [ ] Byly prověřeny bezpečnost, ochrana osobních údajů a integrita.
- [ ] Byla zkontrolována přístupnost.
- [ ] Byla provedena revize internacionalizace.

### Příklady a formální artefakty

- [ ] JSON, XML nebo jiné příklady jsou z hlediska syntaxe platné.
- [ ] Je zde uveden alespoň jeden platný a jeden významný neplatný příklad.
- [ ] Je uvedeno schéma a zdroj prózy.
- [ ] Identifikátory požadavků jsou v místech, kde se vyskytují, jedinečné.

### Publikace

- [ ] Dokument je zařazen do správné kategorie v postranním panelu.
- [ ] Byly aktualizovány překlady navigačních textů do maďarštiny a němčiny.
- [ ] Vnitřní odkazy fungují.
- [ ] Web Docusaurus generuje soubory pro stránky `en`, `hu` a `de`.
- [ ] Popis žádosti o začlenění (pull request) uvádí klasifikaci změny a její dopad na kompatibilitu.

## 13. Údržba

Tato šablona se řídí životním cyklem specifikace, zásadami pro verzování a stylovým průvodcem pro specifikace.

Změny v šabloně MUSÍ být posouzeny z hlediska jejich dopadu na:

- stávající specifikace;
- pracovní postup přispěvatelů;
- překlady;
- automatická validace;
- schémata a přípravky;
- externí odkazy;
- kritéria pro podporu v rámci životního cyklu.

Stávající specifikace nejsou automaticky v rozporu s požadavky, pokud dojde ke změně šablony. Při změně šablony by MĚLO být uvedeno, zda stávající dokumenty vyžadují migraci, a jaký je předpokládaný časový rámec.

## 14. Shrnutí

Šablona specifikace „OMI“ poskytuje jednotný postup od počátečního návrhu až po stabilní, implementovatelný a udržovatelný standard.

Zajišťuje, aby byly otázky týkající se identity, rozsahu, terminologie, shody, ověření, kompatibility, interoperability, posouzení rizik, příkladů, důkazů o implementaci a historie změn řešeny výslovně, a nikoli dodatečně v pozdější fázi standardizačního procesu.

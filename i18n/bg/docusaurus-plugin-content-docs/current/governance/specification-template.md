---
id: specification-template
title: OMI Шаблон за спецификация
sidebar_label: Шаблон за спецификация
description: Задължителна начална структура за новите спецификации на „Open Manuscript Initiative“.
keywords:
  - Open Manuscript Initiative
  - OMI
  - specification template
  - standards development
  - technical writing
  - conformance
---

# Open Manuscript Initiative Шаблон за спецификация

## Метаданни на документа

| Поле | Стойност |
|---|---|
| Тип документ | Шаблон за управление |
| Статус | Чернова |
| Версия | 0.1.0 |
| Нормативна терминология | Английски |
| Приложимо за | Нови и съществено преработени спецификации на „OMI“ |
| Отговорна група | Поддържащи лица на OMI |
| Последно актуализирано | 06.08.2026 |

## 1. Цел

Настоящият документ представлява стандартния изходен шаблон за спецификациите на Open Manuscript Initiative.

Шаблонът преобразува изискванията на следните документи за управление в структура за създаване на съдържание, която може да се използва многократно:

- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md).

Всеки нов документ в „`OMI-SPEC-*`“ ТРЯБВА да започва от този шаблон, освен ако в pull request-а му е отбелязано и обосновано ограничено изключение.

Шаблонът е създаден така, че да позволява изготвянето на всяка спецификация:

- идентифицируеми;
- подлежи на преразглеждане;
- подлежащ на тестване;
- независим от реализацията;
- ясно да се посочи съвместимостта и съответствието;
- подходящ за превод и дългосрочна поддръжка.

## 2. Кога да използвате този шаблон

Този шаблон ТРЯБВА да се използва за:

- ново определена спецификация на „OMI“;
- временна спецификация, която преминава в статус „Проект“;
- значително преработване, което заменя структурата на съществуваща спецификация;
- спецификация, отделена от друг нормативен документ или изведена от него.

Пълният шаблон не е необходим за:

- политики за управление;
- уроци и ръководства с обяснения;
- бележки за внедряването;
- неофициални предложения със статус „Проучителен“;
- файлове с преводи;
- генерирана от компютър документация за схемата.

Профилите, регистрите, схемите, примерите и документите за съответствие ТРЯБВА да използват този шаблон като основа и да прилагат адаптациите, описани в раздела „Адаптации по тип документ“.

## 3. Как да използвате шаблона

1. Получете или запазете постоянния идентификатор в регистъра на спецификациите на „OMI“.
2. Копирайте изходния шаблон от раздела „Изходен файл със спецификация, готов за копиране“.
3. Заменете всеки заместващ символ, поставен в ъглови скоби.
4. Изтрийте инструкциите за чертане, записани в коментарите от типа „HTML“.
5. Премахнете незадължителните раздели едва след като се уверите, че те не са приложими.
6. Спазвайте изисквания ред на разделите, освен ако предметът не изисква документирано изключение.
7. Добавете новия документ към категорията „Канонична странична лента“.
8. Добавете или актуализирайте ключовете за превод на навигацията на унгарски и немски език.
9. Преди прегледа проверете валидността на Markdown, връзките, примерите, идентификаторите и схемите.
10. Записвайте изрично нерешените въпроси, свързани с дизайна, докато документът все още е в предстабилна версия.

В документ, предложен за статут на „Кандидат за преглед“, НЕ СМЕЕ да остава заместващ символ.

## 4. Конвенции за заместващите символи

Изходният текст, готов за копиране, използва следните форми на заместващи символи:

| Форма | Значение |
|---|---|
| `<OMI-SPEC-NNN>` | Постоянен идентификатор на спецификацията |
| `<OFFICIAL TITLE>` | Записано заглавие |
| `<SHORT TITLE>` | Кратко описание на страничната лента |
| `<0.1.0>` | Семантична версия на документа |
| `<Draft>` | Статус на жизнения цикъл |
| `<EDITOR OR GROUP>` | Отговорен редактор или редакционна група |
| `<YYYY-MM-DD>` | Дата по ISO 8601 |
| `<NONE>` | Изрично заявление, че не се прилага никаква стойност |
| `<TEXT>` | Задължителна проза, предоставена от автора |
| `[OPTIONAL]` | Раздел или поле, което може да бъде премахнато, когато не е приложимо |

Ъгловите скоби, използвани като заместители, служат единствено за чертожна нотация. Те ТРЯБВА да бъдат премахнати от публикуваните документи.

## 5. Необходими метаданни

Всяка спецификация ТРЯБВА да съдържа своите нормативни метаданни в основния текст на документа. Само предната част не е достатъчна.

Таблицата с метаданни ТРЯБВА да съдържа:

| Поле | Задължително съдържание |
|---|---|
| Идентификатор | Постоянен идентификатор на `OMI-SPEC-*` |
| Наименование | Официално регистрирано наименование |
| Версия | `MAJOR.MINOR.PATCH` |
| Статус | Състояние в жизнения цикъл |
| Вид документ | Нормативен, информационен или смесен |
| Език на нормативните текстове | Обикновено английски |
| Редактори | Отговорни лица или редакционна група |
| Последно актуализирано | Дата по ISO 8601 |
| Заменя | Предшественик или „`None`“ |
| Заменен от | Наследник или „`None`“ |
| Зависи от | Нормативни зависимости или `None` |
| Използва се от | Известни зависими елементи или `None known` |
| Схеми | Приложими машинно-четими артефакти или `None` |
| Профили | Подходящи профили или `None` |
| Статус на изпълнението | Връзка към обобщение или матрица |
| Система за проследяване на проблеми | Официално място за регистриране на проблеми |

Спецификацията, която дефинира сериализираните данни, ТРЯБВА също така да посочва примерни тестови случаи, валидатори и тестове за съответствие.

## 6. Задължителен ред на разделите

Стандартният ред на разделите е:

1. Резюме
2. Статус на този документ
3. Съответствие
4. Обхват
5. Терминология
6. Принципи на проектирането
7. Общ преглед на моделите
8. Модел на данните
9. Модел на обработката
10. Проверка на валидността и обработка на грешките
11. Разширяемост
12. Версии и съвместимост
13. Оперативна съвместимост
14. Съображения, свързани със сигурността, поверителността и целостта
15. Съображения, свързани с достъпността
16. Съображения, свързани с интернационализацията
17. Примери
18. Нормативни препратки
19. Информативни източници
20. Статус на изпълнението
21. Нерешени въпроси
22. Хронология на промените
23. Благодарности

Раздели 1–5, 10, 12, 14, 18 и 22 са задължителни за всяка нормативна спецификация.

Задължителният раздел, в който няма специални съображения, ТРЯБВА да бъде запазен и в него трябва да се посочи, че въпросът е бил разгледан и че към момента не са известни изисквания, свързани конкретно със спецификацията.

## 7. Нормативни правила за писане, включени в шаблона

Нормативните изисквания ТРЯБВА:

- умишлено да използвате термините за изискванията с главни букви;
- да се определи отговорната длъжност за изпълнението;
- поведение, което може да се наблюдава;
- избягвайте да съчетавате несвързани изисквания в едно изречение;
- да се определи поведението при отказ в случаите, когато е възможно несъответствие;
- да може да бъде проверено или обективно оценено.

Спецификациите със статус „Кандидат за преглед“ или по-висок ТРЯБВА да получават стабилни идентификатори на изискванията, като използват:

```text
REQ-<SPEC-CODE>-<NNN>
```

Пример:

```text
REQ-DOC-001
```

Идентификаторите на изискванията НЕ ТРЯБВА да се преразпределят след премахването им.

## 8. Изходен файл със спецификациите, готов за копиране

Копирайте целия блок по-долу в новия файл със спецификациите.

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

## 9. Правила за пропускане и адаптиране на раздели

Дадена секция МОЖЕ да бъде премахната само когато:

- в този шаблон е отбелязано като „незадължително“;
- обектът наистина няма съответен модел или поведение;
- премахването не замества задължителния преглед на жизнения цикъл или на рисковете;
- заявката за събиране остава разбираема и без този раздел.

Следващите раздели НЕ ТРЯБВА да бъдат премахвани от нормативната спецификация:

- Метаданни на документа;
- Резюме;
- Статус на този документ;
- Съответствие;
- Обхват;
- Терминология;
- Проверка и обработка на грешки;
- Управление на версиите и съвместимост;
- Съображения, свързани със сигурността, поверителността и целостта;
- Нормативни препратки;
- Хронология на промените.

Когато дадено задължително изискване е неприложимо, в раздела ТРЯБВА да се посочи причината за това.

## 10. Адаптации според типа на документа

### 10.1 Профил

В документа „`OMI-PROFILE-*`“ СЛЕДВА да се добави:

- характеристики и точни версии;
- избрани класове на съответствие;
- по-строги ограничения;
- по подразбиране;
- забранени допълнителни функции;
- изисквания за удължаване;
- съвместимост с непрофилираната спецификация.

Профилът НЕ ТРЯБВА да противоречи скрито на основните си спецификации.

### 10.2 Регистър

В документа „`OMI-REG-*`“ СЛЕДВА да се добави:

- правомощия за разпределение;
- синтаксис на записите;
- правилата за уникалност;
- процедура за регистрация;
- жизнен цикъл на записите;
- правила за отпадане и резервиране;
- местоположение в регистъра, което може да се чете машинно.

Разпределените идентификатори НЕ ТРЯБВА да се преразпределят.

### 10.3 Схема

В документа „`OMI-SCHEMA-*`“ СЛЕДВА да се добави:

- каноничен идентификатор `$id` или еквивалентен идентификатор;
- език и версия на схемата;
- връзка между прозата и спецификацията;
- източник на поколение;
- обхват на валидирането;
- неподдържани семантични ограничения;
- политика за съвместимост.

Схемата ТРЯБВА да посочва точната версия на спецификацията в проза, която формализира.

### 10.4 Набор от примери

Документът „`OMI-EXAMPLE-*`“ ТРЯБВА да класифицира всеки пример като:

- нормативен или информативен;
- валиден или невалиден;
- минимален или представителен;
- специфични за дадена спецификация или профил.

Пълните примери ТРЯБВА да се съхраняват като отделно валидирани фикстури.

### 10.5 Картографиране на оперативната съвместимост

В документа за картиране СЛЕДВА разделът за основния модел на данните да бъде заменен със:

- изходен модел;
- целеви модел;
- посока на картографиране;
- предпоставки;
- таблици за съответствие между полета и обекти;
- анализ на загубата на информация;
- обратимост;
- неподдържани конструкции;
- тестове за обратен път.

## 11. Изисквания, свързани с жизнения цикъл

### 11.1 Проект

Проектът ТРЯБВА да съдържа:

- постоянен или временно запазен идентификатор;
- ограничен обхват;
- основни понятия и структури от данни;
- зависимости;
- първоначален модел за съответствие;
- ясно посочени нерешени въпроси.

Примерите, валидирането, прегледът на рисковете и последствията от миграцията ТРЯБВА вече да са налице.

### 11.2 Кандидат за преглед

Преди получаване на статут на кандидат за преглед:

- заместващите символи и коментарите по проекта ТРЯБВА да бъдат премахнати;
- терминологията ТРЯБВА да бъде вътрешно съгласувана;
- ТРЯБВА да има представителни валидни и невалидни примери;
- приложимите изисквания ТРЯБВА да имат стабилни идентификатори;
- зависимостите ТРЯБВА да бъдат прегледани;
- съществените нерешени въпроси ТРЯБВА да бъдат приключени или да се вземе изрично решение по тях;
- Периодът на прегледа и въпросите, по които се иска преглед, ТРЯБВА да бъдат посочени.

### 11.3 Кандидат за внедряване

Преди получаване на статут на кандидат за присъединяване:

- нормативните изисквания ТРЯБВА да бъдат изпълнени изцяло;
- когато е приложимо, ТРЯБВА да има схеми или формални дефиниции;
- ТРЯБВА да има налични приспособления за проверка на съответствието;
- правилата за съвместимост и миграция ТРЯБВА да могат да бъдат тествани;
- Събирането на доказателства за изпълнението ТРЯБВА да е активно.

### 11.4 Стабилна версия

Преди статуса „Стабилен“:

- версията ТРЯБВА да гарантира стабилна съвместимост;
- Данните за внедряването ТРЯБВА да бъдат документирани;
- резултатите от тестовете за съответствие ТРЯБВА да бъдат публикувани, когато това е приложимо;
- Дефектите, препятстващи внедряването, ТРЯБВА да бъдат отстранени;
- прегледът на сигурността и поверителността ТРЯБВА да бъде завършен;
- Каноничната версия на изданието ТРЯБВА да бъде архивирана.

В един документ на Stable НЕ ТРЯБВА да има раздел „Нерешени въпроси“, съдържащ отворени нормативни въпроси.

## 12. Списък за проверка на заявките за съединяване

Заявката за промяна, с която се добавя спецификация, СЛЕДВА да потвърждава:

### Идентичност и регистър

- [ ] Идентификаторът е запазен в регистъра на спецификациите.
- [ ] Наименованието съвпада с регистрираното наименование.
- [ ] Името на файла е написано с малки букви по системата „кебаб“.
- [ ] Идентификаторът на документа „Docusaurus“ е постоянен и уникален.

### Структура и съдържание

- [ ] Задължителните метаданни са видими в тялото на документа.
- [ ] Има задължителни полета.
- [ ] Границите на обхвата и извън обхвата са ясно определени.
- [ ] Централната терминология се използва последователно.
- [ ] Нормативните изисквания могат да бъдат проверени.
- [ ] Определени са обработката на грешки и поведението при неизвестни разширения.

### Съвместимост и риск

- [ ] Документирани са ефектите, свързани с версията и съвместимостта.
- [ ] Изискванията за миграция са документирани.
- [ ] Проверени са сигурността, поверителността и целостта.
- [ ] Достъпността е проверена.
- [ ] Процесът на интернационализация беше преразгледан.

### Примери и формални артефакти

- [ ] JSON, XML или други подобни примери са синтаксически валидни.
- [ ] Налице са поне един валиден и един важен невалиден пример.
- [ ] Посочени са източникът на схемата и на прозата.
- [ ] Идентификаторите на изискванията са уникални там, където се използват.

### Публикация

- [ ] Документът се добавя към съответната категория в страничната лента.
- [ ] Актуализирани са преводите на навигационните текстове на унгарски и немски език.
- [ ] Вътрешните връзки се отварят.
- [ ] Сайтът „Docusaurus“ генерира версии за `en`, `hu` и `de`.
- [ ] В описанието на pull-request-а се посочва категорията на промяната и нейното въздействие върху съвместимостта.

## 13. Поддръжка

Този шаблон се регулира от „Животния цикъл на спецификациите“, „Политиката за версии“ и „Ръководството за стил на спецификациите“.

Промените в шаблона ТРЯБВА да бъдат оценени по отношение на тяхното въздействие върху:

- съществуващите спецификации;
- работен процес на сътрудниците;
- преводи;
- автоматизирана проверка;
- схеми и приспособления;
- външни източници;
- критерии за насърчаване през целия жизнен цикъл.

Наличните спецификации не стават автоматично несъответстващи при промяна на шаблона. При промяна на шаблона СЛЕДВА да се определи дали съществуващите документи изискват миграция, както и очакваният срок за това.

## 14. Обобщение

Шаблонът за спецификации „OMI“ осигурява единен път от първоначалния проект до стабилен, приложим и лесен за поддръжка стандарт.

Той гарантира, че въпросите, свързани с идентичността, обхвата, терминологията, съответствието, валидирането, съвместимостта, оперативната съвместимост, прегледа на рисковете, примерите, доказателствата за внедряване и историята на промените, се разглеждат изрично, а не се възстановяват на по-късен етап от процеса на стандартизация.

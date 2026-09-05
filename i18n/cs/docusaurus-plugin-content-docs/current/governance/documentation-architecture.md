---
title: OMI Architektura dokumentace
sidebar_label: Architektura dokumentace
sidebar_position: 4
description: Stanoví informační architekturu, pravidla navigace, standardní umístění a požadavky na údržbu pro sadu dokumentace k nástrojům Open Manuscript Initiative.
---

# Open Manuscript Initiative Architektura dokumentace

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Typ dokumentu | Zásady správy a řízení |
| Stav | Návrh |
| Verze | 0.1.0 |
| Normativní jazyk | angličtina |
| Vztahuje se na | dokumentaci webových stránek OMI, specifikace, dokumenty týkající se správy, generované stránky kategorií a překlady |

## 1. Účel

Tento dokument definuje informační architekturu sady dokumentace k produktu „Open Manuscript Initiative“.

Stanoví:

- hlavní kategorie dokumentace;
- standardní umístění každého aktivního dokumentu;
- vztah mezi koncepčními, normativními, prováděcími a řídícími prvky;
- pravidla, která používá postranní panel „Docusaurus“;
- chování na stránce dané kategorie;
- zpracování starších, nahrazených a stránek určených výhradně pro migraci;
- Požadavky na stabilitu URL a lokalizaci;
- kritéria údržby a kontroly pro budoucí změny v dokumentaci.

Architektura dokumentace má za cíl zpřístupnit standard OMI různým skupinám čtenářů, aniž by docházelo k duplicitě normativního obsahu.

Mezi tyto cílové skupiny patří:

- autoři a redaktoři, kteří posuzují vizi projektu „OMI“;
- přispěvatelé do standardů, kteří vypracovávají specifikace;
- vývojáři, kteří vytvářejí kompatibilní software;
- vydavatelé a repozitáře, které do svých pracovních postupů integrují OMI;
- překladatelé, kteří se starají o lokalizovanou dokumentaci;
- recenzenti, kteří posuzují vyspělost a shodu specifikací.

## 2. Architektonické principy

Sada dokumentace projektu „OMI“ se řídí těmito zásadami.

### 2.1 Jedno kanonické umístění

Každý aktivní dokument MUSÍ mít jeden kanonický zdrojový soubor a jedno kanonické umístění postranního panelu.

Na dokument MŮŽE odkazovat jiná stránka, ale NEMĚL BY být zaregistrován jako duplicitní položka v tomtéž postranním panelu.

Toto pravidlo zabraňuje:

- nejasné vlastnictví;
- zdvojená údržba;
- nejednotné popisky navigačních prvků;
- rozporuplné překlady;
- Docusaurus chyby duplicitních dokumentů;
- nejistota ohledně toho, která stránka je závazná.

### 2.2 Architektura před chronologií

Dokumenty jsou seskupeny podle architektonické role, nikoli podle data, kdy byly sepsány.

Nově vytvořená základní specifikace patří do kategorie „Základy“ nebo „Základní sémantické specifikace“, a to i v případě, že byla vytvořena až po specifikaci platformy.

### 2.3 Stabilní veřejné trasy

Při refaktoringu dokumentace BY SE MĚLY zachovat stávající veřejné URL adresy, kdykoli je to možné.

K pouhé změně kategorie v postranním panelu není nutné přesouvat zdrojový soubor.

Pokud je nutné trasu změnit, stará trasa by MĚLA zůstat dostupná prostřednictvím:

- přesměrování;
- oznámení o migraci;
- nebo zachovaná starší stránka, která odkazuje na kanonický dokument.

### 2.4 Oddělení normativního a vysvětlujícího materiálu

Postranní panel MUSÍ rozlišovat mezi:

- zrak a orientace;
- základní pojmy;
- normativní sémantické specifikace;
- specifikace pracovních postupů a publikování;
- specifikace platformy a burzy;
- dokumenty týkající se správy a procesů tvorby norem.

Koncepční úvody NESMÍ nenápadně nahrazovat normativní specifikace.

Normativní specifikace BY MĚLY výslovně uvádět své závislosti a stav v rámci životního cyklu.

### 2.5 Úplná dohledatelnost

Každý aktivní dokument týkající se specifikace a správy OMI, který je určen k veřejnému posouzení, MUSÍ být přístupný z hlavního postranního panelu.

Stránky týkající se migrace starších systémů, interní poznámky, vygenerované artefakty a zastaralé návrhy MOHOU zůstat mimo postranní panel.

### 2.6 Postupné zveřejňování informací

Navigace BY MĚLA čtenářům umožnit přecházet od obecných pojmů k podrobným požadavkům.

Očekávaný průběh je následující:

```text
Vision
  ↓
Architecture overview
  ↓
Foundational concepts
  ↓
Core semantic models
  ↓
Workflow and publishing models
  ↓
Platform and exchange specifications
  ↓
Governance and standards process
```

Čtenáři nemusí dodržovat toto pořadí, avšak řazení by MĚLO odrážet strukturu závislostí.

## 3. Architektura navigace na nejvyšší úrovni

Hlavní postranní panel dokumentace na stránce OMI obsahuje šest kategorií nejvyšší úrovně.

```text
Introduction
Foundations
Core Semantic Specifications
Scholarly Workflow and Publishing
Platform and Exchange
Governance
```

Každá kategorie má vygenerovanou úvodní stránku, která shrnuje její účel a uvádí seznam příslušných dokumentů.

## 4. Úvod

V kategorii „Úvod“ se dozvíte, proč stránka OMI vznikla a jak je uspořádána její celková architektura.

Obsahuje:

1. **Vize**
2. **Přehled architektury**

Přehled architektury je uveden ve stávajícím dokumentu „Architektonická mapa“. Popisek v postranním panelu MŮŽE být zjednodušen, aniž by došlo ke změně názvu dokumentu nebo cesty ke zdroji.

Kategorie „Úvod“ má vysvětlující charakter. Nestanoví podrobné požadavky na shodu, s výjimkou případů, kdy je v ní zahrnutý dokument výslovně označen jako normativní.

## 5. Základy

Kategorie „Základy“ obsahuje průřezové pojmy nezbytné pro pochopení souboru specifikací.

Obsahuje:

1. **OMI-SPEC-000 — Základní zásady**
2. **OMI-SPEC-120 — Model vědeckého objektu**
3. **Terminologie a definice**

Model vědeckého objektu je zařazen právě sem, protože definuje společnou abstrakci, kterou využívají specializované modely.

Část „Terminologie a definice“ má v této kategorii jedno standardní umístění v postranním panelu. Dokumenty týkající se správy a specifikace BY MĚLY odkazovat na tuto část, místo aby ji v postranním panelu uváděly podruhé.

## 6. Základní sémantické specifikace

Tato kategorie obsahuje hlavní modely, které definují sémantickou strukturu rukopisu z projektu „OMI“.

Obsahuje:

1. **OMI-SPEC-100 — Model dokumentu**
2. **OMI-SPEC-110 — Model kotvy**
3. **OMI-SPEC-130 — Model anotace**
4. **OMI-SPEC-140 — Model metadat**

Pořadí odráží směr primární závislosti:

```text
Scholarly Object Model
        ↓
Document Model
        ↓
Anchor Model
        ↓
Annotation Model

Metadata Model applies across these layers.
```

Vyhrazené specifikace, jako jsou model identity a přispěvatelů, model verzí a změn, překladový model, validační model a model spolupráce a oprávnění, SE NESMÍ zobrazovat jako aktivní dokumenty, dokud neexistují jejich kanonické soubory.

## 7. Vědecký pracovní postup a publikování

Tato kategorie obsahuje specifikace, které popisují vědeckou práci provedenou na rukopisu nebo v souvislosti s ním.

Obsahuje:

1. **OMI-SPEC-200 — Testovací model**
2. **OMI-SPEC-210 — Vzor citace**
3. **OMI-SPEC-220 — Model bibliografického záznamu**
4. **OMI-SPEC-221 — Architektura referenční knihovny a registru**
5. **OMI-SPEC-230 — Model publikování**

Tato kategorie spojuje aspekty pracovního postupu a publikace, protože tyto specifikace pracují se sémantickými modely, místo aby definovaly samotnou základní strukturu objektů.

V rámci subsystému citací:

- Model citací definuje jednotlivé výskyty citací;
- Model bibliografického záznamu definuje citované zdroje;
- Architektura referenční knihovny a registru definuje vyhledávání, ukládání, sladění, opětovné využití a výměnu.

## 8. Platforma a burza

Tato kategorie obsahuje specifikace upravující rozšiřitelnost, programovou interakci, balení a výměnu dat.

Obsahuje:

1. **OMI-SPEC-300 — Architektura pluginů**
2. **OMI-SPEC-310 — Platforma API**
3. **OMI-SPEC-320 — Formát souboru**
4. **OMI-SPEC-330 — Architektura kontejnerů**

Tyto dokumenty MUSÍ zůstat oddělené od sémantických modelů.

Konkrétní implementace může využívat různé interní technologie, přičemž musí splňovat sémantické požadavky a požadavky na výměnu dat definované ve specifikacích OMI.

## 9. Správa a řízení

Kategorie „Správa“ obsahuje dokumenty, které upravují vývoj, údržbu, fáze vývoje, identitu a zveřejňování standardu OMI.

Obsahuje:

1. **Charta**
2. **Plán vývoje pro verzi 1.0 systému „OMI“**
3. **Audit architektury**
4. **Architektura dokumentace**
5. **Životní cyklus specifikace**
6. **Zásady verzování**
7. **Příručka pro styl specifikací**
8. **Registr specifikací**

Registr specifikací je autoritativním zdrojem pro identifikátory specifikací a kanonické cesty.

Architektonický audit zůstává k dispozici jako záznam o konsolidačním programu i poté, co byla jeho bezprostřední doporučení provedena.

## 10. Úvodní stránky kategorií

Každá kategorie nejvyšší úrovně BY MĚLA obsahovat vygenerovanou indexovou stránku.

Vygenerované indexové stránky BY MĚLY obsahovat:

- stručný název;
- popis kategorie;
- automaticky generované karty dokumentů;
- stabilní slug kategorie.

Generované stránky se upřednostňují před ručně spravovanými dokumenty s rejstříkem kategorií, pokud má stránka pouze uvádět obsah dané kategorie.

Tím se omezí duplicita a zajistí se, že úvodní stránka automaticky reaguje na změny v postranním panelu.

Aktuální slugy kategorií jsou:

| Kategorie | Slug |
|---|---|
| Úvod | `/introduction` |
| Základy | `/foundations` |
| Základní sémantické specifikace | `/core-semantic-specifications` |
| Vědecký pracovní postup a publikování | `/scholarly-workflow-publishing` |
| Platforma a burza | `/platform-exchange` |
| Správa a řízení | `/governance` |

Tyto značky by měly zůstat beze změny i po zveřejnění.

## 11. Pravidla pro položky v postranním panelu

### 11.1 Výslovná registrace

Hlavní postranní panel využívá explicitní registraci dokumentů namísto neomezeného automatického generování v rámci souborového systému.

Je nutná výslovná registrace, protože repozitář obsahuje:

- stránky věnované migraci starších systémů;
- dokumenty uložené mimo svou pojmovou kategorii;
- řídící dokumenty s odlišným uspořádáním souborového systému a pořadím navigace;
- specifikace, u nichž se architektonické řazení liší od abecedního řazení.

### 11.2 Štítky

Název v postranním panelu MŮŽE být kratší než název stránky.

Například:

```text
Page title: OMI Architecture Map
Sidebar label: Architecture Overview
```

Štítek NESMÍ měnit identitu ani normativní působnost dokumentu.

### 11.3 Objednávání

Pořadí specifikací by MĚLO vycházet z architektury kanonických identifikátorů a závislostí, nikoli z pořadí souborů.

Pořadí kapitol v části „Správa“ by MĚLO odpovídat pracovnímu postupu čtenáře v rámci standardizačního procesu:

```text
constitutional authority
→ roadmap and audit
→ documentation architecture
→ lifecycle
→ versioning
→ authoring rules
→ registry
```

### 11.4 Stav kategorie

Hlavní kategorie BY MĚLY být sbalitelné a zpočátku rozbalené, dokud je sada dokumentace relativně malá.

Výchozí sbalený stav MŮŽE být přehodnocen, pokud se počet dokumentů výrazně zvýší.

## 12. Starší a nahrazené stránky

Stránka staré verze se NESMÍ zobrazovat v hlavním postranním panelu, pokud existuje její kanonická náhrada.

Stránka věnovaná odkazu na adrese:

```text
docs/specifications/scholarly-object-model.md
```

je zachován pouze za účelem zachování původní veřejné trasy a nasměrování čtenářů na:

```text
docs/specifications/core/scholarly-object-model.md
```

Kanonickým dokumentem je **OMI-SPEC-120 — Scholarly Object Model**.

Starší stránky BY MĚLY:

- určit kanonického nástupce;
- vysvětlete migraci identifikátorů;
- vyhýbat se tomu, aby byl zastaralý obsah prezentován jako aktuální normativní text;
- zůstanou vyloučeny z generovaných kategoriových indexů a z hlavního postranního panelu.

## 13. Cesty k souborům a pojmové kategorie

Název kategorie v postranním panelu nemusí přesně odpovídat názvu zdrojového adresáře.

Například:

- `docs/foundations/architecture-map.md` se nachází v části „Úvod“;
- `docs/specifications/core/scholarly-object-model.md` je uvedeno v sekci „Základy“;
- `docs/governance/terminology.md` se nachází v sekci „Základy“.

Je to záměrné.

K refaktoringu souborového systému BY MĚLO dojít pouze v případě, že přináší zřejmý přínos pro údržbu a umožňuje bezpečně zachovat veřejné trasy.

## 14. Identifikátory dokumentů

Docusaurus Identifikátory dokumentů MUSÍ zůstat jedinečné.

Identifikátor dokumentu BY MĚL zůstat neměnný poté, co se na dokument začne veřejně odkazovat.

Pokud je v úvodní části explicitně deklarován identifikátor dokumentu typu „`id`“, MUSÍ postranní panel použít vyřešený identifikátor dokumentu typu „Docusaurus“, místo aby vycházel pouze z názvu souboru.

Při refaktoringu postranního panelu NESMÍ dojít ke změně identifikátorů specifikace OMI, jako je například `OMI-SPEC-120`. ID dokumentů Docusaurus a ID specifikací OMI představují samostatné jmenné prostory.

## 15. Vnitřní odkazy

Dokumenty by MĚLY používat relativní odkazy typu Markdown při odkazování na dokumenty v tomtéž repozitáři.

Uspořádání postranního panelu NESMÍ být považováno za náhradu za výslovné odkazy na normy.

Závislost na specifikaci BY MĚLA být uvedena v dané specifikaci, a to i v případě, že se oba dokumenty nacházejí vedle sebe v postranním panelu.

Při kontrole interních odkazů BY SE MĚLO ověřit:

- cílový soubor existuje;
- cíl je kanonický;
- zobrazený identifikátor odpovídá registru specifikací;
- odkaz nesměřuje na stránku věnovanou výhradně migraci, pokud není migrace tématem;
- lokalizované stránky neodkazují omylem na jinou jazykovou verzi bez zjevného důvodu.

## 16. Lokalizace

Angličtina zůstává normativním zdrojovým jazykem, pokud není v dokumentu uvedeno jinak.

Maďarská a německá struktura dokumentace BY MĚLA odrážet koncepční hierarchii anglické verze.

Štítky kategorií v postranním panelu a text generovaného indexu MUSÍ být zahrnuty do běžného překladatelského postupu pro Docusaurus.

Překlad BY MĚL zachovat:

- identifikace dokumentu;
- OMI identifikátor specifikace;
- verze;
- stav životního cyklu;
- deklarace závislostí;
- kanonický anglický zdrojový odkaz.

Přeložená stránka NESMÍ mít samostatný identifikátor specifikace typu „OMI“.

Dojde-li ke změně anglického dokumentu, MĚLA by být aktuálnost překladu sledována v souladu se zásadami pro správu verzí a dokumentem „Terminologie a definice“.

## 17. Přidání nového dokumentu

Než bude nový dokument přidán do postranního panelu, MUSÍ jeho autor určit:

1. zda se jedná o dokument normativní, informativní, týkající se konkrétní implementace či související s řízením;
2. zda se dané téma již zabývá nějaký existující dokument;
3. zda je identifikátor specifikace povinný;
4. zda byl identifikátor vyhrazen nebo zaregistrován;
5. která kategorie nejvyšší úrovně je kanonická;
6. které přímé závislosti je třeba deklarovat;
7. zda by dokument měl být ve svém současném stadiu životního cyklu veřejně přístupný;
8. zda jsou vyžadovány překlady nebo zástupné symboly pro překlad;
9. zda přidání dokumentu změní vygenerovanou stránku kategorie;
10. zda je třeba zachovat veřejné trasy nebo starší aliasy.

Nová normativní specifikace MUSÍ být zapsána do registru specifikací, než jí bude přidělen trvalý identifikátor OMI-SPEC.

## 18. Odstranění nebo nahrazení dokumentu

Aktivní dokument NESMÍ jednoduše zmizet z postranního panelu a úložiště bez rozhodnutí o archivaci.

Výměna vyžaduje:

- jmenovaný kanonický nástupce;
- rozhodnutí týkající se životního cyklu, jako je „Zastaralé“, „Nahrazené“ nebo „Stažené“;
- aktualizace registru, pokud se jedná o specifikaci;
- oznámení o přesunu nebo přesměrování, je-li to možné;
- aktualizovány interní odkazy;
- aktualizované překlady;
- poznámky k vydání nebo přehled změn.

## 19. Kontrolní seznam pro ověření

Změna dokumentační architektury je připravena k posouzení, pokud:

- každé ID dokumentu v postranním panelu se vyhodnotí;
- každá aktivní specifikace se vyskytuje přesně jednou;
- každý dokument týkající se veřejné správy se objevuje přesně jednou, pokud není záměrně vyřazen;
- slugy generovaného indexu jsou jedinečné;
- stránka se starším modelem vědeckých objektů (Scholarly Object Model) není uvedena;
- kanonický model vědeckých objektů je uveden v sekci „Základy“;
- špatky se shodují s údaji v registru specifikací;
- popisy kategorií přesně vystihují jejich obsah;
- žádný existující zdrojový soubor se nepřesouvá bez plánu zachování cesty;
- je zdokumentován dopad lokalizace;
- Docusaurus syntaxe konfigurace je platná;
- Sestavení dokumentace proběhne bez chyb typu nefunkčních odkazů nebo duplicitních ID.

## 20. Aktuální výsledek migrace

Počáteční migrace postranního panelu vede k vytvoření následující veřejné hierarchie:

```text
Introduction
├── Vision
└── Architecture Overview

Foundations
├── OMI-SPEC-000 — Core Principles
├── OMI-SPEC-120 — Scholarly Object Model
└── Terminology and Definitions

Core Semantic Specifications
├── OMI-SPEC-100 — Document Model
├── OMI-SPEC-110 — Anchor Model
├── OMI-SPEC-130 — Annotation Model
└── OMI-SPEC-140 — Metadata Model

Scholarly Workflow and Publishing
├── OMI-SPEC-200 — Review Model
├── OMI-SPEC-210 — Citation Model
├── OMI-SPEC-220 — Bibliographic Record Model
├── OMI-SPEC-221 — Reference Library and Registry Architecture
└── OMI-SPEC-230 — Publishing Model

Platform and Exchange
├── OMI-SPEC-300 — Plugin Architecture
├── OMI-SPEC-310 — Platform API
├── OMI-SPEC-320 — File Format
└── OMI-SPEC-330 — Container Architecture

Governance
├── Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Documentation Architecture
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Specification Registry
```

## 21. Budoucí rozšíření

Architura je navržena tak, aby umožňovala zařazení dalších kategorií, pokud to odůvodňuje dostatečný objem materiálu.

Mezi možné budoucí kategorie patří:

- Příručky k implementaci;
- Profily a rozšíření;
- Schéma a příklady;
- Shoda a testování;
- Komunita a přispívání.

Pro jediný dokument by se NEMĚLA vytvářet nová kategorie nejvyšší úrovně, pokud tato kategorie nepředstavuje trvalé architektonické rozlišení.

Dokumentace týkající se konkrétní implementace BY MĚLA zůstat jasně oddělena od normativních specifikací OMI.

## 22. Údržba

Architekturu dokumentace BY SE MĚLO prověřit v následujících případech:

- je zaregistrována nová skupina specifikací;
- dojde k rozdělení nebo sloučení specifikace;
- dokument dosáhne stavu „Stable“;
- překlady jsou uspořádány jinak;
- schémata a testy shody se zveřejní;
- stává se obtížné si přehlédnout obsah postranního panelu;
- dojde ke změně veřejných tras;
- Je zavedena nová vrstva implementačních pokynů.

Změny v tomto dokumentu a na stránce `sidebars.js` by se za normálních okolností měly posuzovat společně, pokud dojde ke změně koncepční hierarchie.

## 23. Osvojení

Jakmile bude tento návrh zařazen do hlavního repozitáře, stane se pracovní dokumentací architektury.

Stávající aktivní dokumenty jsou uspořádány podle této struktury, aniž by se tím změnila jejich platnost.

Přijetím této architektury nedochází k povýšení žádného návrhu specifikace na úroveň „Review Candidate“, „Implementation Candidate“ ani „Stable“.

## 24. Shrnutí

Sada dokumentace projektu „OMI“ je uspořádána jako řízený systém standardů, nikoli jako chronologický soubor stránek.

Architektura zajišťuje:

- jedno standardní umístění pro každý dokument;
- jasný vývoj od vize k normám zaměřeným na praktickou realizaci;
- úplné zjištění platných specifikací a dokumentů týkajících se správy a řízení;
- stabilně generované stránky kategorií;
- explicitní zpracování starších tras;
- navigace kompatibilní s lokalizací;
- prostor pro budoucí schémata, profily, testy shody a implementační příručky.

Díky této struktuře je standard „OMI“ snáze čitelný, přehledný, snadno implementovatelný, přeložitelný a udržovatelný.
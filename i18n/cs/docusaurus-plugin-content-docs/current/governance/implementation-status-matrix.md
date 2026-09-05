---
id: implementation-status-matrix
title: OMI Matice stavu implementace
sidebar_label: Matice stavu implementace
description: Stav specifikací, schémat, příkladů, podpory referenční implementace, validace a testování shody v rámci standardu „OMI“ na základě dostupných důkazů.
keywords:
  - Open Manuscript Initiative
  - OMI
  - implementation status
  - conformance
  - Open Manuscript Studio
  - roadmap
---

# Open Manuscript Initiative Matice stavu implementace

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Typ dokumentu | Zpráva o stavu řízení |
| Stav | Návrh |
| Verze | 0.3.0 |
| Normativní jazyk | angličtina |
| Poslední aktualizace | 5. září 2026 |
| Rozsah | Všechny identifikátory v registru specifikací OMI |
| Základní podklady | Kompletní přehled větve „`main`“ ze dne 6. srpna 2026, doplněný o specifikaci „OMI-SPEC-320“, schéma, testovací sadu, validátor a aktuální export ze Studia „`.omi.json`“, zkontrolovaný dne 5. září 2026 |
| Autorita | Informativní; autoritativní zůstávají registr specifikací a jednotlivé specifikace |

## 1. Účel

Tento dokument zaznamenává aktuální stav implementace a ověření každého identifikátoru specifikace přiděleného organizací Open Manuscript Initiative.

Rozlišuje pět otázek, které se nesmí zaměňovat:

1. Existuje nějaký kanonický specifikační dokument?
2. Byl tento dokument převeden do aktuální šablony specifikace „OMI“?
3. Jsou strojově čitelné artefakty a testovací přípravky pro ověření shody zveřejněny?
4. Implementuje Open Manuscript Studio identifikovatelné části specifikace?
5. Bylo toto chování ověřeno, testováno z hlediska shody nebo nezávisle prokázáno?

Účelem této matice je:

- odhalit nesrovnalosti mezi specifikacemi v textové podobě a skutečnými důkazy;
- zabránit tomu, aby byl experimentální implementační kód mylně považován za normativní shodu;
- posloužit jako výchozí základ pro plánování a hodnocení;
- určit další důkazy potřebné pro každou specifikaci;
- podpořit budoucí rozhodnutí ohledně připravenosti k vydání.

## 2. Pravomoc a výklad

[OMI Specification Registry](./specification-registry.md) je autoritativním zdrojem pro:

- trvalé identifikátory specifikací;
- oficiální názvy;
- stavy alokace;
- stavy životního cyklu;
- přesné verze;
- kanonické cesty.

Jednotlivé specifikační dokumenty jsou směrodatné, pokud jde o jejich normativní požadavky.

Tato matice představuje informativní zprávu o důkazech. Neobsahuje:

- změnit stav životního cyklu specifikace;
- přiznat implementaci shodu;
- nastavit nezveřejněné schéma jako autoritativní;
- nahradit specifikaci, validátor, sadu testů nebo zprávu o implementaci;
- zajistit, aby každá experimentální funkce odpovídala nejnovějšímu znění specifikace.

Specifikace může být hotovým dokumentem, aniž by existovala její implementace. Implementace může obsahovat podstatnou část funkcionality, zatímco příslušná specifikace zůstává ve fázi návrhu. Jedná se o nezávislé aspekty.

## 3. Slovní zásoba týkající se stavů

### 3.1 Specifikace a stavy artefaktů

| Stav | Význam |
|---|---|
| **Aktivní návrh** | Existuje kanonický specifikační dokument, který je zaregistrován se stavem životního cyklu „Návrh“. |
| **Vyhrazeno** | Identifikátor a předmět jsou přiděleny, ale neexistuje žádný schválený návrh specifikace. |
| **Aktuální šablona** | Aktuální specifikace byla vytvořena nebo kompletně přepracována s využitím aktuální šablony specifikace. |
| **Je nutná aktualizace** | Aktuální dokument byl vytvořen před vydáním kanonické šablony specifikace nebo dosud neobsahuje všechny požadované části týkající se metadat, shody, kompatibility, důkazů a historie změn. |
| **Zveřejněn předběžný artefakt** | Artefakt ve verzi, kterou lze strojově číst, je k dispozici na autoritativním úložišti, ale do vydání stabilní verze může dojít k neslučitelným změnám. |
| **Zveřejnění prvních testů** | Existují verzované kladné i záporné příklady, ale zatím netvoří úplnou sadu formálních testů shody. |
| **Nezveřejněno** | Příslušné kanonické schéma, sada testovacích dat, formát zprávy nebo jiný strojově čitelný artefakt není k dispozici v autoritativním úložišti. |
| **Nezahájeno** | U uvedené dimenze nebyl ověřen žádný důkaz o podstatné práci v repozitáři. |
| **Neplatí** | Uvedený rozměr není pro danou specifikaci v jejím současném účelu vyžadován. |

### 3.2 Stavy důkazů o implementaci

| Stav | Význam |
|---|---|
| **Průzkumné** | Existují související typy, pole, koncepce uživatelského rozhraní nebo pracovní postupy, ale jsou neúplné, specifické pro danou implementaci nebo není prokazatelně zřejmé, že jsou v souladu s kanonickou specifikací. |
| **Částečné** | Je zastoupena nebo použitelná identifikovatelná podmnožina specifikované domény, chybí však zásadní požadavky, validace, interoperabilita nebo chování v průběhu životního cyklu. |
| **Implementováno** | Příslušné normativní chování je implementováno a přiřazeno k deklarované verzi specifikace, avšak formální testování shody ještě není dokončeno. |
| **Ověřeno** | Implementace obsahuje automatizované důkazy o splnění příslušných normativních požadavků pro deklarovanou verzi. |
| **V souladu s normou** | Implementace splňuje požadavky zveřejněné třídy shody na základě schválené sady testů shody a zaznamenává veškerá povolená omezení. |
| **Neověřeno** | Důkazy mohou existovat i mimo prověřená úložiště, ale pro tuto základní verzi nebyly ověřeny. |

Výrazy **implementováno**, **otestováno** a **v souladu** jsou záměrně striktní. Nesmí se z nich vyvozovat závěry na základě existence tříd, rozhraní, stránek nebo příkladů s podobnými názvy.

## 4. Výchozí stav důkazů

Při úvodním přezkumu bylo využito veřejné úložiště specifikací OMI a aktuální úložiště Open Manuscript Studio.

Mezi ověřené důkazy studia patří:

- oblast alfa deklarovaná v souboru `README.md`;
- rozhraní pro rukopisy, anotace, citace, bloky, sekce, agenty a příspěvky na stránkách `src/types/omi.ts` a `src/model/identity.ts`;
- úprava rukopisů a akce přispěvatelů v rámci služby „`src/app/useStudioStore.ts`“;
- migrace autorů ze starého systému v `src/document/migrateIdentityModel.ts`;
- oddělení účtu od agenta v systému `src/model/user.ts`;
- role v pracovním prostoru, oprávnění, pozvánky, role recenzentů a překladatelů v rámci služby „`src/model/workspace.ts`“;
- současná implementace pracovního prostoru s lokálním úložištěm na adrese `src/store/workspaceStore.ts`;
- testy identity a testy jednotek přispěvatelů v souboru `tests/identity-model.test.ts`;
- modely „`OMI-SPEC-160@0.1.0`“, „revision“, „change-set“, „change-event“, „snapshot“, „history-completeness“, „commit“, „validation“ a „revert“ na stránce `src/model/versioning.ts`;
- migrace historie revizí pouze s časovými značkami v `src/document/migrateVersioningModel.ts`;
- vícejazyčné rozhraní s historií revizí na adrese `src/components/HistoryPanel.tsx`;
- Verzování jednotkových testů v rámci projektu „`tests/versioning-model.test.ts`“, zahrnující neměnné kořeny, zachování nadřazených prvků, lineární historii, atomické sady změn, vrácení změn, povrchovou migraci, validaci a export.

Stávající implementace správy verzí byla začleněna do repozitáře Open Manuscript Studio v pull requestu č. 2 s merge commitem `65f3a2f4fa9eaf6adf370f4bae5eec1e98521db2`.

Při úplné kontrole ze dne 6. srpna 2026 nebyly nalezeny autoritativní artefakty repozitáře OMI pro:

- formát ověřovací zprávy čitelný strojem;
- soubor formálních testů shody;
- nezávisle ověřené implementace.

Aktualizace „OMI-SPEC-320“ ze dne 5. září 2026 přidává první kanonický verzovaný návrh schématu JSON, počáteční sadu osmi pozitivních a negativních testovacích případů a referenční validátor testovacích případů. Tyto artefakty pokrývají strukturální validaci a vybrané sémantické kontroly; nejedná se o kompletní sadu schémat OMI ani o formální sadu testů shody.

Open Manuscript Studio V současné době odkazuje na URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json` v rámci typu rukopisu „TypeScript“. Existence tohoto URI ve zdrojovém kódu není důkazem toho, že je kanonické schéma zveřejněno, ani toho, že implementace provádí validaci podle něj.

## 5. Souhrnný snímek

| Ukazatel | Aktuální výchozí hodnota |
|---|---:|
| Identifikátory registrovaných specifikací | 23 |
| Aktuální návrhy specifikací | 17 |
| Vyhrazené specifikace | 6 |
| Aktivní specifikace využívající aktuální šablonu | 3 |
| Aktivní specifikace vyžadující migraci šablon | 14 |
| Zveřejněny standardní soubory specifikací ve strojově čitelné podobě | 1 ověřený návrh souboru |
| Zveřejněné sady kalibračních přípravků | Ověřena 1 počáteční sada |
| Implementace validátorů | Ověřen 1 referenční validátor |
| Sady testů formální shody | 0 ověřených |
| Nezávislé implementace | 0 ověřených |
| Stav studia: Částečný | 8 specifikací |
| Stav projektu: Průzkumná fáze | 6 specifikací |
| Stav projektu: Ještě nezačato | 8 specifikací |
| Stav studia: Nevztahuje se | 1 specifikace |

Tyto položky popisují kategorie důkazů použité v tomto dokumentu. Nezohledňují míru dokončení ani kvalitu specifikace.

## 6. Matice připravenosti specifikací

### 6.1 Základy a základní sémantické modely

| Identifikátor | Specifikace | Stav v registru | Verze | Šablona | Strojově čitelné artefakty | Testovací sestavy pro ověření shody |
|---|---|---|---|---|---|---|
| `OMI-SPEC-000` | [Core Principles](../foundations/core-principles.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nevztahuje se | Nezveřejněno |
| `OMI-SPEC-100` | [Document Model](../specifications/document-model.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-110` | [Anchor Model](../specifications/anchor-model.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-120` | [Scholarly Object Model](../specifications/core/scholarly-object-model.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-130` | [Annotation Model](../specifications/annotation-model.md) | Aktivní návrh | 0.2.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-140` | [Metadata Model](../specifications/metadata-model.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-150` | [Identity and Contributor Model](../specifications/identity-contributor-model.md) | Aktivní návrh | 0.1.0 | Aktuální šablona | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-160` | [Versioning and Change Model](../specifications/versioning-change-model.md) | Aktivní návrh | 0.1.0 | Aktuální šablona | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-170` | Překladový model | Vyhrazeno | — | Nevztahuje se | Nezačato | Nezačato |
| `OMI-SPEC-180` | Ověřovací model | Vyhrazeno | — | Nevztahuje se | Nezačato | Nezačato |
| `OMI-SPEC-190` | Model spolupráce a oprávnění | Vyhrazeno | — | Nevztahuje se | Nezačalo | Nezačalo |

### 6.2 Vědecký pracovní postup, citace a publikování

| Identifikátor | Specifikace | Stav v registru | Verze | Šablona | Strojově čitelné artefakty | Testovací sestavy pro ověření shody |
|---|---|---|---|---|---|---|
| `OMI-SPEC-200` | [Review Model](../specifications/review-model.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-210` | [Citation Model](../specifications/citation-model.md) | Aktivní návrh | 0.2.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-220` | [Bibliographic Record Model](../specifications/bibliographic-record-model.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-221` | [Reference Library and Registry Architecture](../specifications/reference-library-registry.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-230` | [Publishing Model](../specifications/publishing-model.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-240` | Model profilu vykreslování a publikace | Vyhrazeno | — | Nevztahuje se | Nezačato | Nezačato |

### 6.3 Platforma, výměna a shoda

| Identifikátor | Specifikace | Stav v registru | Verze | Šablona | Strojově čitelné artefakty | Testovací sestavy pro ověření shody |
|---|---|---|---|---|---|---|
| `OMI-SPEC-300` | [Plugin Architecture](../specifications/plugin-architecture.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-310` | [Platform API](../specifications/api.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-320` | [File Format](../specifications/file-format.md) | Aktivní návrh | 0.2.0 | Aktuální šablona | [Draft schema](/schemas/omi-manuscript-0.2.schema.json) | [Initial fixtures](/examples/omi-spec-320/0.2.0/manifest.json) |
| `OMI-SPEC-330` | [Container Architecture](../specifications/container-architecture.md) | Aktivní návrh | 0.1.0 | Vyžaduje migraci | Nezveřejněno | Nezveřejněno |
| `OMI-SPEC-340` | Model dovozu a vývozu | Vyhrazeno | — | Nevztahuje se | Nezahájeno | Nezahájeno |
| `OMI-SPEC-350` | Model schopností a shody | Vyhrazeno | — | Nevztahuje se | Nezačato | Nezačato |

## 7. Důkazy o zavedení programu „Open Manuscript Studio“

Žádný řádek v této části v současné době nesplňuje podmínky pro označení **Implementováno**, **Otestováno** nebo **V souladu** podle výše uvedených přísných definic.

Repozitář OMI nyní obsahuje referenční validátor pro `OMI-SPEC-320@0.2.0`. Žádná implementace v prostředí Studio tento validátor zatím nepoužívá a u žádné specifikace nebyly ověřeny žádné formální testy shody ani nezávislé důkazy o implementaci. Tyto údaje jsou proto shrnuty pro celou výchozí sadu, místo aby se opakovaly v každém řádku.

### 7.1 Základy a základní sémantické modely

| Identifikátor | Stav studia | Ověřené důkazy | Hlavní mezera před dosažením vyššího stavu |
|---|---|---|---|
| `OMI-SPEC-000` | Neplatí | Principy slouží spíše jako vodítko pro architekturu, než aby definovaly přímo proveditelnou komponentu. | Převést principy platné napříč sadami nástrojů na sledovatelné požadavky a kritéria pro posouzení. |
| `OMI-SPEC-100` | Částečné | `OmiManuscript` obsahuje sekce a bloky; obchod Studio vybírá sekce, upravuje bloky a přidává sekce. | Kanonické schéma, invarianty, sémantika bloků, pravidla rozšíření, validace a mapování požadavků. |
| `OMI-SPEC-110` | Průzkumné | Anotace mohou odkazovat na `targetBlockId` a volitelně na `targetText`. | Stabilní identita kotvy, selektory, rozlišení, chování při mutacích, řešení nejednoznačností a testy. |
| `OMI-SPEC-120` | Částečné | Soubor typizovaných rukopisů obsahuje agenty, příspěvky, sekce, bloky, anotace, citace, identifikátory, časová razítka a historii revizí. | Sladit hranice objektů a jejich životní cykly se specifikací; zveřejnit schéma a důkazy o validaci. |
| `OMI-SPEC-130` | Částečné | `OmiAnnotation` definuje identifikátor, typ, cílový blok, volitelný text cíle, tělo a pokyn pro vykreslení; anotace jsou dostupné ve stavu rukopisu. | Kanonické cíle, motivace, autorství, životní cyklus, propojení, oprávnění, validace a výměna. |
| `OMI-SPEC-140` | Částečné | Stav rukopisu zahrnuje lokalitu, název, podnázev, abstrakt, klíčová slova, identifikátory, autory, příspěvky a časová razítka. | Původ metadat, řízené termíny, kardinality, profily, validace a externí mapování. |
| `OMI-SPEC-150` | Částečné | Studio definuje prvek „`OMI-SPEC-150@0.1.0`“, odděluje účty od agentů, reprezentuje tvary jmen, tvrzení o identifikátorech a příslušnosti, kontextové příspěvky, role, pořadí a odpovídající stav, migruje stávající autory, poskytuje vícejazyčný editor pro přispěvatele a obsahuje cílené jednotkové testy. | Kanonické schéma, úplná viditelnost a zpracování provenience, další typy agentů, rekonciliace, trvalé ukládání v backendu, mapování požadavků a testovací sady pro ověření shody. |
| `OMI-SPEC-160` | Částečné | Studio deklaruje `OMI-SPEC-160@0.1.0`; vytváří neměnné kořenové a podřízené revize s lineárními předky s jedním rodičem; zaznamenává sémantické sady změn a události týkající se úprav rukopisu a příspěvků autorů; ukládá úplné nebo zjednodušené snímky; provádí nedestruktivní vrácení změn jako nové revize; konzervativně řeší přiřazování autorů; poskytuje vícejazyčné uživatelské rozhraní pro historii; exportuje historii revizí; a zahrnuje cílené jednotkové testy. | Dávkové zpracování v pracovním stavu a odevzdání s kontrolními body, tombstony, souhrny integrity/stavu, explicitní mapování `REQ-VCH-*`, kanonická schémata a fixtury, podpora větvení a slučování, posílení perzistence a formální testy shody. |
| `OMI-SPEC-170` | Průzkumné | Rukopisy mají nastavené místní nastavení; modely uživatelů a pracovních prostorů zahrnují pracovní jazyky a roli překladatele. | Překladové objekty, vztahy mezi zdrojovým a cílovým textem, ekvivalence, odchylky, synchronizace a původ. |
| `OMI-SPEC-180` | Nezačato | Nebyl ověřen žádný model kanonického validátoru ani model validační zprávy. | Vypracovat návrh validačního modelu a zveřejnit sémantiku strojově čitelné zprávy a testovací sestavy. |
| `OMI-SPEC-190` | Průzkumná fáze | Kód pracovního prostoru definuje role, oprávnění, členy, pozvánky, role recenzentů a překladatelů s lokálním ukládáním. | Vypracovat specifikaci; přidat autorizaci vynucovanou serverem, oprávnění v rámci konkrétního rukopisu, auditovatelnost a testy shody. |

### 7.2 Vědecký pracovní postup, citace a publikování

| Identifikátor | Stav studia | Ověřené důkazy | Hlavní mezera před dosažením vyššího stavu |
|---|---|---|---|
| `OMI-SPEC-200` | Průzkumné | Mezi role v pracovním prostoru patří recenzent a členům může být povoleno vytvářet poznámky. | Přezkoumejte objekty, přiřazení, kola, stavy, rozhodnutí, důvěrnost, zveřejnění totožnosti a historii událostí. |
| `OMI-SPEC-210` | Částečné | `OmiCitation` a pole citací rukopisu představují klíče citací, štítky, typy zdrojů a data. | Oddělit výskyty citací od bibliografických záznamů; ukotvit výskyty a definovat sémantiku nezávislou na způsobu zobrazení. |
| `OMI-SPEC-220` | Průzkumné | Tento typ citace obsahuje malou sadu polí podobných bibliografickým záznamům. | Jedinečný identifikátor bibliografického záznamu, autoři, názvy, kontejnery, identifikátory, původ, slučování a ověřování. |
| `OMI-SPEC-221` | Nezahájeno | Nebyla ověřena integrace žádné referenční knihovny na úrovni rukopisu ani externího registru. | Členství v knihovně, opakované použití záznamů, vyhledávání, slaďování, ukládání do mezipaměti, provenience a chování při odstraňování duplicit. |
| `OMI-SPEC-230` | Ještě nezačalo | Editor Alpha umožňuje práci s daty rukopisů a jejich export, ale nebyl ověřen žádný publikační proces sladěný se specifikacemi. | Publikační úlohy, profily, transformace, původ výstupů, řešení selhání a zachování sémantického zdroje. |
| `OMI-SPEC-240` | Nezačato | Nebyla ověřena žádná deklarace vykreslovacího ani publikačního profilu. | Vypracujte návrh specifikace a definujte identitu profilu, požadavky, dědičnost, výstupní omezení a validaci. |

### 7.3 Platforma, výměna a shoda

| Identifikátor | Stav studia | Ověřené důkazy | Hlavní mezera před dosažením vyššího stavu |
|---|---|---|---|
| `OMI-SPEC-300` | Nezačato | Nebylo ověřeno ani manifest pluginu, ani rozšíření API, ani hranice oprávnění, ani izolační mechanismus. | Definujte a implementujte identitu pluginu, jeho životní cyklus, oprávnění, rozšiřovací body, kompatibilitu a omezení dopadů selhání. |
| `OMI-SPEC-310` | Ještě nebylo zahájeno | Současná alfa verze je zaměřena především na klientskou stranu; nebyla ověřena žádná implementace, která by využívala registrovanou platformu API. | Smlouva API s verzemi: smlouva, ověřování, autorizace, zdroje, události, chyby, stránkování a testy. |
| `OMI-SPEC-320` | Částečné | Studio exportuje `.omi.json` jako `application/vnd.openmanuscript+json`, přenáší URI schématu předchůdce `0.1`, vynechává z kanonických exportů zastaralé vložené pole `authors` a zahrnuje přenositelnou historii revizí. | Přijměte obálku a schéma `0.2.0`; implementujte vyjednávání verze, detekci duplicitních členů, vrstvenou validaci, zachování neznámých polí, migraci a hlášení ztrát; namapujte chování na `REQ-FMT-*`. |
| `OMI-SPEC-330` | Nezahájeno | Nebyl ověřen žádný balíček kontejneru typu „OMI“, manifest, graf aktiv, záznam integrity ani pracovní postup balení. | Implementujte rozložení balíčku, manifest, zpracování médií, kontrolní součty, podpisy, bezpečnost extrakce a pravidla uchovávání. |
| `OMI-SPEC-340` | Průzkumné | Existuje možnost exportu rukopisu JSON včetně reprezentace, identity a migračních cest v historii verzí; nebylo ověřeno žádné obecné uživatelské rozhraní pro import ani důkaz o obousměrné kompatibilitě. | Vypracovat specifikaci; doplnit import, export, mapování, zprávy o ztrátách, zpracování nepodporovaného obsahu a testovací sady pro obousměrnou kompatibilitu. |
| `OMI-SPEC-350` | Nezahájeno | Nebyla ověřena žádná deklarace schopností, formát prohlášení o implementaci ani nástroj pro ověřování shody. | Definujte třídy shody, prohlášení o schopnostech, testovací manifesty, zprávy o výsledcích a pravidla pro ověřování prohlášení. |

## 8. Průřezové zjištění a známé odchylky

### 8.1 Převod šablony specifikace

`OMI-SPEC-150` a `OMI-SPEC-160` byly vytvořeny přímo na základě kanonické šablony specifikace. Dokument `OMI-SPEC-320` byl podle ní ve verzi `0.2.0` komplexně přepracován. U zbývajících 14 aktivních specifikací je zapotřebí řízená migrace, která zachová trvalé identifikátory, kanonické cesty a historii změn a zároveň doplní požadovaná metadata a oddíly s podklady.

### 8.2 Návrh schématu a odkaz na starší zástupné symboly

Autoritativní návrh schématu pro `OMI-SPEC-320@0.2.0` je zveřejněn na adrese `https://openmanuscript.org/schemas/omi-manuscript-0.2.schema.json`. Typ dokumentu „Studio“ stále odkazuje na dřívější URI `https://openmanuscript.org/schemas/omi-manuscript-0.1.json`. Autoritativní schéma `0.1` nebylo zveřejněno, takže dřívější URI zůstává pouze zástupným symbolem pro implementaci a nezakládá shodu s `0.2.0`.

### 8.3 Modely specifické pro danou implementaci

Typy „Studio“ představují užitečné návrhové podklady, ale nejsou automaticky normativním datovým modelem OMI. Rozdíly je třeba zdokumentovat a vyřešit prostřednictvím úprav specifikace nebo změn v implementaci.

### 8.4 Trvalost místní spolupráce

Současné úložiště pracovního prostoru výslovně využívá lokální trvalé ukládání v prohlížeči a uvádí, že chování v produkčním prostředí s více uživateli vyžaduje ověřené backendové služby typu „API“. Jedná se tedy o demonstraci prozkoumávání domény, nikoli o spolupráci vynucenou serverem.

### 8.5 Oddělení citací a záznamů

Současné znázornění citací v systému Studio obsahuje jak informace zaměřené na výskyty, tak informace zaměřené na záznamy. Model citací a model bibliografických záznamů vyžadují jasnější oddělení, než bude možné považovat jejich implementaci za dokončenou.

### 8.6 Verze a historie změn

`OMI-SPEC-160` nyní má ve Studiu první přenositelnou referenční implementaci. Tato sloučená implementace nabízí neměnné lineární revize, rodokmen s jedním předkem, sémantické sady změn a události, úplné nebo povrchní snímky, konzervativní přiřazování aktérů, nedestruktivní vrácení změn, vícejazyčné zobrazení historie, přenositelný export historie a cílené jednotkové testy.

Implementace zůstává **částečná**. Stávající ovládací prvky editoru provádějí potvrzení na úrovni aktuální granularity aktualizace, takže úpravy ve formátu RTF a v textových polích mohou vytvářet příliš jemně členěné revize. Družicové zpracování pracovních stavů a explicitní potvrzování kontrolních bodů jsou proto dalším krokem implementace předtím, než se přistoupí k chování při větvení a slučování. Neřešenými zůstávají tombstony, souhrny stavů, silnější perzistence, explicitní mapování `REQ-VCH-*`, kanonické fixtury, větvení, základny pro slučování, konflikty a formální důkazy o shodě.

Cílené jednotkové testy samy o sobě nestačí k tomu, aby byla implementace v této matici označena jako **Tested**, protože zatím neexistuje žádná schválená sada testovacích případů pro ověření shody s rozhraním OMI ani testovací nástroj pro ověření shody s přiřazenými požadavky.

### 8.7 Ověření a shoda

Schema „OMI“ (SPEC-320), počáteční testovací sady a referenční validátor představují první základnu pro ověřitelné výsledky. Zatím nezahrnují všechny požadavky na „`REQ-FMT-*`“, analýzu bajtů s duplicitními názvy, omezení zdrojů, migraci ani testy mezi různými implementacemi, a proto žádnou implementaci neoznačují jako **Tested** (testovanou) ani **Conformant** (vyhovující).

K postupu v rámci jednotlivých specifikací je stále nutné, podle daného případu:

- přesné normativní požadavky;
- deklarované třídy shody;
- kanonická schémata a testovací data, je-li to vhodné;
- validátor nebo nástroj pro testování shody;
- strojově čitelné výsledky testů vázané na konkrétní verze specifikací.

## 9. Doklady potřebné pro postup do vyššího statusu

### 9.1 Od průzkumného k částečnému

Funkce se může přesunout z kategorie **Průzkumná** do kategorie **Částečná**, pokud:

- existuje samostatná implementační složka;
- je zdokumentován jeho vztah k registrované specifikaci;
- implementovaná podmnožina a známé mezery jsou jasně uvedeny;
- toto chování lze využít i mimo rámec zástupných dat nebo podobnosti názvů.

### 9.2 Od částečného provedení k plnému provedení

Funkce může být přesunuta do stavu **Implementováno** pouze v případě, že:

- příslušná specifikace je platný dokument;
- v implementaci je uvedena přesná verze specifikace;
- příslušné normativní požadavky jsou přiřazeny ke kódu nebo zdokumentovanému chování;
- jsou k dispozici požadované mechanismy zpracování chyb a sémantika perzistence;
- jsou zaznamenány známé odchylky;
- používají se příslušné strojově čitelné artefakty.

### 9.3 Od implementace po testování

Funkce může být přesunuta do stavu **Otestováno** pouze v případě, že:

- automatizované testy pokrývají příslušné normativní požadavky;
- platné i neplatné zápasy jsou spravovány verzemi;
- výsledky testů jsou reprodukovatelné;
- Sada testů určuje přesné verze specifikací a artefaktů.

### 9.4 Testováno na shodu

Funkce může být přeřazena do kategorie **Conformant** pouze v případě, že:

- existuje schválená třída shody;
- pokud je sada oficiálních nebo uznávaných testů shody úspěšně absolvována;
- jsou deklarována povolená volitelná chování a omezení;
- toto tvrzení je zveřejněno v ověřitelné zprávě o implementaci.

## 10. Postup údržby

Tato matice by měla být aktualizována vždy, když dojde k pull requestu:

- vytvoří nebo rezervuje specifikaci;
- změní stav životního cyklu specifikace nebo její verzi;
- zveřejní nebo nahradí schéma, slovník, sadu testovacích dat, validátor nebo sadu testů;
- přináší rozsáhlou podporu pro Studio;
- zaznamenává nezávislou implementaci;
- změní známou odchylku;
- zveřejňuje prohlášení o shodě.

Každá aktualizace, která mění stav, by měla obsahovat důkazy, jako například:

- kanonická cesta k dokumentu nebo artefaktu;
- neměnný commit;
- zkušební provoz nebo zpráva o výsledcích;
- problém s implementací nebo žádost o začlenění změn;
- přesná verze specifikace;
- deklarovaná třída shody.

Status musí být snížen, pokud se důkazy stanou zastaralými, neslučitelnými, budou staženy nebo již nebudou reprodukovatelné.

Před každým vydáním verze „OMI“ a při každém přechodu v rámci životního cyklu do fáze „Review Candidate“, „Implementation Candidate“ nebo „Stable“ je třeba zkontrolovat celou matici.

## 11. Program okamžitého shromáždění důkazů

Další práce spojená se shromažďováním důkazů by měla probíhat v tomto pořadí:

1. doplnit do implementace funkce „`OMI-SPEC-160`“ v programu Studio dávkové zpracování pracovního stavu a explicitní potvrzování kontrolních bodů, aby běžné zadávání textu nevytvářelo příliš detailní potvrzené revize;
2. přiřadit implementovanou podmnožinu „Historie revizí jádra“ k normativním požadavkům „`REQ-VCH-*`“ a zaznamenat výslovné odchylky;
3. přidat záznam typu „tombstone“ a nastavit chování kontroly integrity/state-digest podle požadavků vybraného profilu verzování;
4. zavést v nástroji Studio systém „`OMI-SPEC-320@0.2.0`“ a doplnit parser, serializátor, migraci a důkaz o obousměrné kompatibilitě namapované na požadavky;
5. zveřejnit kanonická schémata identit a verzí s minimálním počtem platných a neplatných testovacích dat;
6. přenést zbývající aktivní specifikace jádra do standardní šablony specifikace;
7. definovat validační model a formát validační zprávy;
8. zavést automatizované kontroly schémat a shody napříč specifikacemi;
9. návrh „`OMI-SPEC-170`“ (modelu překladu), který využívá revizní knihu jako základ pro správu verzí;
10. zaznamenat známé odchylky jako související problémy a hledat nezávisle vyvinutý parser, validátor nebo prototyp pro interoperabilitu.

## 12. Historie změn

| Verze | Datum | Shrnutí |
|---|---|---|
| 0.3.0 | 5. 9. 2026 | Zaznamenána šablona „template-complete“ `OMI-SPEC-320@0.2.0`, první kanonické schéma rukopisu ve verzi „Draft“, počáteční testovací data a referenční validátor; aktualizovány zbývající mezery v přijetí ve Studiu a souhrnné počty důkazů. |
| 0.2.1 | 6. srpna 2026 | Po sloučení neměnné lineární revizní knihy byla podpora „`OMI-SPEC-160`“ v nástroji Studio povýšena z úrovně „Exploratory“ na úroveň „Partial“; zaznamenány byly důkazy o revizích, sadách změn, snímcích, vrácení změn, exportu historie a cílených testech; posunula prioritu dalších důkazů na dávkové zpracování v provozním stavu, potvrzení kontrolních bodů a mapování požadavků. |
| 0.2.0 | 6. 8. 2026 | Byla aktivována služba „`OMI-SPEC-160`“, zaznamenány dvě specifikace aktuálních šablon, aktualizovány důkazy ve Studiu po integraci služby „`OMI-SPEC-150`“ a program důkazů byl rozšířen o lineární revizní knihu. |
| 0.1.1 | 6. srpna 2026 | V matici připravenosti byla aktivována položka „`OMI-SPEC-150`“, byla zaznamenána jako první specifikace vytvořená pomocí aktuální šablony a byl aktualizován program bezprostředních důkazů. |
| 0.1.0 | 6. srpna 2026 | Počáteční matice založená na důkazech, zahrnující všech 23 registrovaných identifikátorů, aktuální specifikační artefakty, podporu v rámci Open Manuscript Studio, validaci, testování, odchylky a pravidla pro postup do další fáze. |

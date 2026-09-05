---
title: Plán vývoje pro verzi 1.0 programu „OMI“ 1.0
sidebar_position: 2
description: Aktuální program, dokončené základy, pokrok v referenční implementaci, aktuální priority a kritéria pro vydání verze Open Manuscript Initiative 1.0.
---

# Plán vývoje pro verzi 1.0 programu „OMI“ 1.0

## Vytvoření otevřeného standardu pro vědecké publikování

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Typ dokumentu | Správa a plánování |
| Stav | Návrh |
| Verze | 0.4.0 |
| Normativní jazyk | Angličtina |
| Poslední aktualizace | 5. září 2026 |
| Plánovací horizont | OMI 1.0 |
| Autoritativní zdroj identifikátorů | [OMI Specification Registry](./specification-registry.md) |
| Základní požadavky na implementaci produktu | [Studio Implementation Status](./studio-implementation-status.md) |
| Výchozí stav implementace integrace | [Integration Implementation Status](../integrations/implementation-status.md) |

## 1. Účel

Tento plán definuje práce nezbytné k tomu, aby se architektura pro správu vědeckých rukopisů (Open Manuscript Initiative) proměnila z rozvíjející se projektové architektury v ucelený, implementovatelný, testovatelný a spravovatelný otevřený standard pro vědecké rukopisy.

Zaznamenává jak pokrok ve vývoji specifikace, tak i důkazy o referenční implementaci. Tyto dva aspekty jsou záměrně odděleny: funkce v programu Studio může být funkční ještě předtím, než bude odpovídající specifikace na adrese OMI v souladu s požadavky, a specifikace může být dokončena ještě předtím, než budou implementovány všechny referenční funkce.

Dokument „[OMI Specification Registry](./specification-registry.md)“ představuje autoritativní zdroj informací o identifikátorech specifikací, názvech, kanonických cestách, stavech přidělení, stavech životního cyklu a verzích.

## 2. Strategické směřování

OMI není zamýšlen jako pouhý další editor rukopisů, platforma pro časopisy či pracovní postup při vydávání. Jeho cílem je vytvořit implementačně nezávislý sémantický standard, který mohou přijmout autoři, časopisy, vydavatelé, repozitáře, knihovny, redakční systémy, konverzní služby i nezávisle vyvinutý vědecký software.

Open Manuscript Studio je primární referenční implementace. Testuje specifikace v reálných pracovních postupech autorů, recenzentů, redaktorů a vydavatelů, ale nedefinuje normativní význam.

## 3. Shrnutí pokroku

Program se již výrazně posunul za počáteční fázi auditu dokumentace. Byly stanoveny zásady řízení, identifikátory, architektura dokumentace a první skupiny specifikací, přičemž Studio nyní pokrývá podstatně větší část zamýšleného životního cyklu než tomu bylo v základní verzi ze 6. srpna.

| Programová oblast | Stav | Aktuální shrnutí |
|---|---|---|
| Audit dokumentace | **Dokončeno** | Původní anglická dokumentace byla zaevidována, roztříděna a uspořádána. |
| Základy správy | **Z velké části dokončeno** | Byly zveřejněny stanovy, životní cyklus, verzování, styl, terminologie, registr, architektura dokumentace, šablona specifikace a zásady pro podepisování kódu. |
| Synchronizace webových stránek a produktů | **Aktivní a udržovaná** | Veřejná stránka Studio a datovaná zpráva o stavu Studia nyní sledují implementované funkce produktu odděleně od shody s normami. |
| Migrace identifikátorů | **Dokončeno pro aktivní specifikace** | Aktivní specifikace využívají standardní architekturu přidělování adres `OMI-SPEC-*`. |
| Základní sémantické modely | **Ve vývoji** | Modely identity/přispěvatelů a verzování/změn mají k dispozici podstatné důkazy o referenční implementaci; validace, překlad a spolupráce zůstávají na úrovni specifikace neúplné. |
| Referenční implementace | **Veřejná beta verze (`0.1.0-beta.3`)** | K dispozici jsou strukturované úpravy, vícejazyčné uživatelské rozhraní a nápověda, účty podporované serverem, vzájemné hodnocení, nativní integrace s OJS/OMP, importy a exporty, profily vydavatelů, vyhledávání, verze pro stolní počítače a mobilní zařízení a proces aktualizace. |
| Recenze | **Provozní implementace** | Byly implementovány základy dvojitě slepé recenze, pracovní prostory recenzentů, řídicí panel pro recenze editorů a zpracování externě přidělených recenzí. Soulad s formální specifikací zůstává předmětem budoucí práce. |
| Integrace s OJS | **Závisí na provozu a konfiguraci** | Plugin verze v1.2.1 a pracovní postup ve Studiu umožňují spuštění s podpisem autora/editora/recenzenta, přenos souborů v omezeném rozsahu, nativní formuláře pro recenze, opravy, oddělenou zpětnou vazbu a zápis s podpisem; nativní ověření E2E podle normy „OJS“ 3.5 je v pořádku. Úplné pokrytí profilu a shoda s normou zatím nejsou kompletní. |
| Integrace s OMP | **Závisí na provozu / konfiguraci** | Plugin verze 1.2.6 a pracovní postup ve Studiu umožňují spouštění s podpisem autora/redaktora/recenzenta, přiřazování monografií/publikací/studií, přístup k recenzím pouze pro přiřazené studie, nativní formuláře, opravy, oddělenou zpětnou vazbu a zpětné zapsání s podpisem; nativní OMP 3.5 E2E ověření je v pořádku. |
| Integrace identit | **Závisí na konfiguraci** | ORCID OAuth existuje infrastruktura pro nasazení a ROR/bibliographic existují základy pro identitu. Konfigurace v produkčním prostředí je specifická pro dané nasazení. |
| Integrační platforma | **Základní implementace hotová** | K dispozici je katalog integrací, registr poskytovatelů, režimy ověřování poskytovatelů a šablony pro konfiguraci DeepL. Realizace překladů pomocí DeepL zatím není dokončena. |
| Vícejazyčná podpora produktů | **Provozní implementace** | Studio nabízí 24 podporovaných jazyků rozhraní s lokalizovanou nápovědou a zkontrolovanými překladovými překryvy. Normativní specifikace zůstávají v angličtině. |
| Import/export | **Podstatná implementace** | Jsou implementovány funkce importu a exportu do formátů DOCX, včetně výstupů pro JATS, HTML, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA a LaTeX. |
| Distribuce pro stolní počítače | **Provozní beta** | Balíčky pro Windows, Linux a macOS se sestavují automaticky; je implementován proces oznamování aktualizací a instalace pro stolní počítače. Práce na podepisování kódu stále probíhají. |
| Kanonická schémata a shoda | **Nedokončeno** | Normativní schémata s verzemi, schválené testovací sady, chování validátoru a formální sady testů shody zůstávají hlavními výstupy, které je třeba dokončit před vydáním verze 1.0. |
| Nezávislé implementace | **Dosud neověřeno** | Pro důvěryhodnost standardu „OMI“ verze 1.0 je i nadále zapotřebí prokázat interoperabilitu nad rámec primární referenční implementace. |

## 4. Dokončené základové práce

Mezi zveřejněné základy správy a architektury patří:

- [OMI Charter](./charter.md);
- [Architecture Audit](./architecture-audit.md);
- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [OMI Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md);
- [OMI Specification Template](./specification-template.md);
- [OMI Implementation Status Matrix](./implementation-status-matrix.md);
- [Studio Implementation Status](./studio-implementation-status.md);
- [Code Signing Policy](./code-signing-policy.md);
- [Integration Implementation Status](../integrations/implementation-status.md).

Dokumentační web rovněž nabízí standardní strukturu postranního panelu, stabilní cesty k dokumentaci, navigaci v angličtině, maďarštině a němčině a jasné oddělení stavu normativní specifikace od stavu implementace produktu.

## 5. Současná architektura specifikace

Rodina kanonických specifikací je uspořádána podle rozsahů trvalých identifikátorů.

### 5.1 Základy a základní sémantické modely

| Identifikátor | Specifikace | Přidělení | Aktuální stav |
|---|---|---|---|
| `OMI-SPEC-000` | Základní zásady | Aktivní | Návrh |
| `OMI-SPEC-100` | Model dokumentu | Aktivní | Návrh |
| `OMI-SPEC-110` | Model kotvy | Aktivní | Ponor |
| `OMI-SPEC-120` | Model vědeckých objektů | Aktivní | Návrh |
| `OMI-SPEC-130` | Anotační model | Aktivní | Návrh |
| `OMI-SPEC-140` | Model metadat | Aktivní | Návrh |
| `OMI-SPEC-150` | Identita a model přispěvatelů | Aktivní | Návrh |
| `OMI-SPEC-160` | Model verzí a změn | Aktivní | Návrh |
| `OMI-SPEC-170` | Překladový model | Vyhrazeno | Plánováno |
| `OMI-SPEC-180` | Validace modelu | Vyhrazeno | Plánováno |
| `OMI-SPEC-190` | Model spolupráce a oprávnění | Vyhrazeno | Plánováno |

### 5.2 Vědecký pracovní postup, citace a publikování

| Identifikátor | Specifikace | Přidělení | Aktuální stav |
|---|---|---|---|
| `OMI-SPEC-200` | Model k posouzení | Aktivní | Návrh |
| `OMI-SPEC-210` | Citovací model | Aktivní | Návrh |
| `OMI-SPEC-220` | Model bibliografického záznamu | Aktivní | Návrh |
| `OMI-SPEC-221` | Architektura referenční knihovny a registru | Aktivní | Návrh |
| `OMI-SPEC-230` | Model publikování | Aktivní | Návrh |
| `OMI-SPEC-240` | Model profilu vykreslování a publikace | Vyhrazeno | Plánováno |

### 5.3 Platforma, výměna a shoda

| Identifikátor | Specifikace | Přidělení | Aktuální stav |
|---|---|---|---|
| `OMI-SPEC-300` | Architektura pluginů | Aktivní | Návrh |
| `OMI-SPEC-310` | Platforma API | Aktivní | Návrh |
| `OMI-SPEC-320` | Formát souboru | Aktivní | Návrh |
| `OMI-SPEC-330` | Architektura kontejnerů | Aktivní | Návrh |
| `OMI-SPEC-340` | Model importu a exportu | Vyhrazeno | Plánováno |
| `OMI-SPEC-350` | Model schopností a shody | Vyhrazeno | Plánováno |

V případě rozporu mezi tímto shrnutím a údaji v registru mají údaje v registru přednost.

## 6. Základní referenční implementace

Open Manuscript Studio nyní poskytuje podklady pro mnohem širší spektrum akademického pracovního postupu než původní základní verze editoru v alfa verzi.

### 6.1 Tvorba a práce s dokumenty

Mezi současné příklady implementace patří strukturovaná editace formátovaného textu, sémantické sekce a bloky rukopisu, stabilní identifikátory, historie revizí, poznámky/citace, navigace v dokumentu, strukturované vyhledávání a nahrazování, import ze služby „DOCX“ a přenositelné úložiště s prioritou lokálního ukládání na ploše.

### 6.2 Identita a účty

Infrastruktura účtů a profilů spravovaná serverem existuje souběžně s oddělením rolí agenta a přispěvatele v rámci systému „OMI“. ORCID Podpora nasazení systému „OAuth“ a ROR– základy pro přiřazení a identitu jsou k dispozici v závislosti na konfiguraci nasazení.

### 6.3 Vícejazyčné ovládání

Studio podporuje 24 jazyků uživatelského rozhraní, lokalizovanou nápovědu a vícejazyčné pracovní postupy při zpracování rukopisů. Jedná se o důkaz implementace produktu; neznamená to, že celá sada normativních specifikací OMI má oficiální překlady.

### 6.4 Recenzní a redakční proces

Základy dvojitě slepého recenzního řízení jsou realizovány pomocí ověřených recenzních API, mechanismů zajištění anonymity, pracovních prostorů recenzentů, řídicích panelů pro redaktory a podpory externě přiřazených recenzních kontextů. Tyto funkce významně posouvají referenční implementaci nad rámec dřívějšího základního modelu pro průzkumné recenzní řízení.

### 6.5 Integrace s publikační platformou

OJS a OMP představují funkční integrace externích pracovních postupů. Oba poskytují spouštění s podpisem a zohledněním rolí, přístup k souborům v rámci vymezeného rozsahu, nativní formuláře pro recenze, opravy, oddělenou zpětnou vazbu pro autory a redaktory a zapsání recenze s podpisem, a to s nativním ověřením od začátku do konce podle standardu PKP 3.5. OJS zůstává autoritativním zdrojem pro pracovní postupy časopisů a OMP pro pracovní postupy monografií, zatímco Studio zůstává autoritativním zdrojem pro stav rukopisů a recenzí nativních pro Studio. OMP navíc zachovává přiřazení mezi monografií, publikací a studií a omezuje recenzenty na přidělenou studii.

### 6.6 Zveřejňování výstupů

Studio podporuje řadu výstupů a profilů určených pro publikaci, včetně JATS, XML, HTML5, DOCX, EPUB, PDF a několika formátů určených pro DTP. Tato implementace musí být ještě přizpůsobena formálním požadavkům na import/export a shodu podle normy OMI 1.0.

### 6.7 Distribuce pro stolní počítače

Desktopové verze Tauri jsou vydávány pro Windows, Linux a macOS. Je implementován proces aktualizace desktopové verze. Probíhají přípravy na podepisování kódu pro Windows; nepodepsané verze nebo verze, u nichž ještě nebyla navázána reputace, mohou i nadále vyvolávat varování platformy.

## 7. Cíle projektu „OMI“ verze 1.0

Program „OMI“ verze 1.0 musí:

1. udržovat stabilní a srozumitelnou hierarchii specifikací;
2. uchovávat jeden kanonický dokument a trasu pro každý normativní pojem;
3. v textu, schématech, příkladech a testech důsledně používejte trvalé identifikátory;
4. zcela chybějící modely překladu, validace, spolupráce a vykreslování;
5. převést aktivní předběžné specifikace do standardní struktury specifikací;
6. zveřejňovat kanonická schémata ve strojově čitelné podobě a regulované slovníky;
7. uvedou platné, neplatné, stručné, vyčerpávající, vícejazyčné a oborově specifické příklady;
8. definovat explicitní třídy shody a testovatelné požadavky;
9. kompatibilita dokumentů, migrace, zpracování chyb a chování v případě ztráty informací;
10. vztáhnout podstatné chování studia ke specifikačním požadavkům, aniž by se implementace považovala za normativní autoritu;
11. ověřovat specifikace pomocí referenčních a nezávislých implementací;
12. zavést systém řízení, který bude schopen udržet stanovený standard i po vydání verze 1.0.

## 8. Fáze programu

### Fáze 1 – Audit dokumentace

**Stav:** Dokončeno

Původní dokumentace byla zaevidována, roztříděna a uspořádána. Byly zjištěny a zdokumentovány konflikty identifikátorů, duplicity a chybějící části.

### Fáze 2 – Základy správy a řízení

**Stav:** Z velké části dokončeno

Byly zveřejněny základní zásady správy, životní cyklus, systém verzí, terminologie, registr, styl a architektura dokumentace.

Mezi zbývající priority patří jasnější proces předkládání návrhů a rozhodování, politika implementace a dodržování předpisů a formální pravidla schvalování pro pozdější přechody v rámci životního cyklu.

### Fáze 3 – Strukturální refaktoring a úprava stavu

**Stav:** Z velké části dokončeno; vyžaduje průběžnou údržbu

Jsou stanoveny standardní postupy, identifikátory specifikací a kategorie dokumentace. Stav implementace produktu, stav integrace a stav normativní specifikace jsou nyní dokumentovány samostatně.

Mezi zbývající práce patří automatické kontroly zastaralých dat platnosti, nefunkčních odkazů, duplicitních identifikátorů a odchylek v registru či cestách.

### Fáze 4 – Dokončení základního modelu

**Stav:** Probíhá

Důkazy týkající se identity/přispěvatelů a verzování/implementace změn jsou podstatné. Další práce na specifikaci by měla sjednotit požadavky na dávkové zpracování v pracovním stavu, sémantiku kontrolních bodů, tombstony, souhrny stavů, stabilní ukotvení, validaci a explicitní mapování požadavků.

Kritérium splnění: je možné znázornit a ověřit minimální sémantický rukopis, jeho objekty, přispěvatele, identifikátory, verze a změny, aniž by bylo nutné spoléhat se na nedokumentované chování implementace.

### Fáze 5 — Pracovní postupy, oprávnění a vícejazyčná sémantika

**Stav:** V několika oblastech je implementace v předstihu před specifikací

Ve Studiu jsou nyní k dispozici funkce vzájemného posuzování, rolí a chování vícejazyčných produktů, zatímco specifikace týkající se překladu a spolupráce/oprávnění zůstávají neúplné nebo vyhrazené.

Priorita: na základě poznatků z praxe vypracovat přesné požadavky, nezávislé na konkrétní implementaci, týkající se anonymity při revizi, vymezení rolí, překladových vztahů, divergencí/synchronizace a auditovatelnosti.

Kritérium splnění: vztahy týkající se spolupráce, recenzí, anotací, oprávnění a vícejazyčnosti lze znázornit jako strukturované vědecké objekty s podporou verzí.

### Fáze 6 – Doplnění bibliografie a citací

**Stav:** Částečně dokončeno

Existují různé modely citací a bibliografických záznamů a Studio obsahuje základní funkce pro vyhledávání citací a bibliografických záznamů.

Priorita: oddělit výskyt citací od bibliografických záznamů, určit původ zdroje, sjednotit identifikátory, odstranit duplicity, ukládat do mezipaměti a znovu využívat referenční knihovny.

Kritérium ukončení: dílo lze jednou přidat do knihovny na úrovni rukopisu a opakovaně ho citovat, aniž by docházelo k duplikování bibliografického záznamu.

### Fáze 7 — Profily pro ověření, vykreslení a publikaci

**Stav:** Implementace produktu částečně předbíhá specifikaci

Ve Studiu jsou k dispozici profily publikování a obecné nastavení exportu, zatímco formální specifikace profilů validace a vykreslování/publikování zůstávají neúplné.

Priorita: definovat strojově čitelné validační zprávy, identitu/dědičnost profilů, zachování sémantického zdroje, chyby/varování a požadavky na deterministický výstup.

Kritérium splnění: implementace musí být schopny určit, zda rukopis odpovídá deklarovanému profilu, a generovat výstupy, aniž by bez upozornění měnily sémantický zdroj.

### Fáze 8 – Kanonická schémata a příklady

**Stav:** Plánováno / klíčové práce před vydáním verze 1.0

Mezi výstupy patří verzovaná kanonická schémata JSON, stabilní identifikátory schémat, pravidla autority, platné/neplatné testovací sady, vícejazyčné příklady, příklady s bohatými odkazy a příklady s historií verzí.

Kritérium splnění: nezávislé implementace ověřují stejné testovací sestavy a dosahují ekvivalentních strukturálních výsledků.

### Fáze 9 – Mapování importu, exportu a interoperability

**Stav:** Referenční implementace je aktivní; normativní model není dokončen

Studio již využívá import zDOCXu a export pro různé publikační formáty. `OMI-SPEC-340` musí tyto praktické zkušenosti převést do konkrétních pravidel transformace, hlášení chyb, očekávání ohledně zpětné kompatibility a mapovacích šablon.

Mezi prioritní mapování patří JATS, XML, HTML, DOCX, EPUB, CSL, JSON/BibTeX/RIS (tam, kde je to relevantní), metadata Crossref/DataCite a balíčky pro výměnu a uchovávání dat OJS.

Kritérium ukončení: nepodložené konstrukce, vynechaná anamnéza a ztráta informací jsou explicitní a ověřitelné, nikoli skryté.

### Fáze 10 – Integrační profily a interoperabilita

**Stav:** Stránky OJS a OMP jsou funkční; ostatní profily jsou neúplné

Architektura integrace nezávislá na platformě a profily OJS/OMP mají za sebou rozsáhlé testy implementace, včetně nativních testů PKP 3.5 typu „end-to-end“. Kompatibilita mezi verzemi, zabezpečení nasazení a formální shoda jsou i nadále předmětem aktivní práce.

Priority:

- zabezpečit OJS a OMP v obou směrech, prověřit integraci a kompatibilitu mezi verzemi;
- nasazení dokumentů, obnova a diagnostika pro operátory u obou konektorů PKP;
- definovat zjišťování schopností/vyjednávání verze;
- formalizovat režimy ověřování poskytovatelů;
- vyzrálé adaptéry pro cloud, identitu, překlad a úložiště;
- zachovat přísné oddělení databází.

Kritérium splnění: alespoň dvě vzájemně nezávislé a smysluplné integrace externích pracovních postupů, které demonstrují stejné principy platformově neutrálního přístupu „OMI“.

### Fáze 11 — Testování funkčnosti a shody

**Stav:** Zahájeno na úrovni zprávy o důkazech; formální sada zatím není k dispozici

Matice stavu implementace a zprávy o stavu projektu Studio poskytují referenční údaje, avšak cílené jednotkové testy nepředstavují testování shody s normou „OMI“.

Mezi výstupy patří soubory „`OMI-SPEC-350`“, pojmenované třídy shody, referenční implementace validátoru, formální sada testů, výsledky přiřazené k požadavkům a zdokumentované odchylky.

Kritérium splnění: Chování funkce „OMI“ verze 1.0 je demonstrováno pomocí spustitelného, verzovaně označeného důkazu, nikoli pouze slovními popisy.

### Fáze 12 – Samostatné provedení a veřejné posouzení

**Stav:** Plánováno

Projekt by měl nejprve zajistit externí realizátory, recenzi ze strany PKP a komunity a prototypy pro interoperabilitu, než bude verze OMI 1.0 prohlášena za stabilní.

Mezi výstupy patří dokumenty k posouzení, veřejné normativní posouzení, vyřešené věcné připomínky, pokyny k migraci a zprávy o implementaci.

### Fáze 13 — Vydání verze 1.0 projektu „OMI“

**Stav:** Plánováno

Výstupy:

- Stabilní sada specifikací;
- kanonická schémata a příklady;
- verze pro testování shody;
- publikace webových stránek s verzemi;
- archivovaný a reprodukovatelný balíček s vydáním;
- zpráva o stavu realizace;
- Plán správy a údržby pro řadu 1.x.

Kritérium ukončení: řídící proces formálně schválí sadu jako stabilní a zveřejní reprodukovatelnou verzi OMI 1.0.

### Fáze 14 — Oficiální překlady

**Stav:** Lokalizace produktu je v pokročilé fázi; překlad normativního dokumentu byl odložen

Lokalizace uživatelského rozhraní a nápovědy programu Studio a navigace na webových stránkách dokládají schopnost vícejazyčné implementace. Úplné oficiální překlady normativních specifikací by měly následovat až po stabilizaci anglické sady verze 1.0, aby se předešlo nutnosti udržovat odlišné normativní texty během rychlého vývoje návrhů.

## 9. Nejnaléhavější priority

Nejdůležitější další kroky jsou:

1. dokončit finální optimalizaci serverové perzistence a zbývající práce na integraci databáze;
2. propojit chování při vzájemném hodnocení s požadavky na „`OMI-SPEC-200`“;
3. posílit synchronizaci OJS a zdokumentovat ověřené hranice kompatibility;
4. posílit kompatibilitu mezi verzemi na adrese OMP, nasazení a obnovu podle zveřejněného profilu;
5. dokončit práce na překladu, validaci a specifikaci spolupráce a oprávnění;
6. zveřejnit první kanonickou sadu schémat a fixtur s verzemi;
7. formalizovat sémantiku importu/exportu a vykreslování/profilů na základě stávající implementace ve Studiu;
8. úplná integrace podepisování verzí systému Windows po schválení služby podepisování;
9. pokračovat v práci na integraci poskytovatelů služeb a zároveň zachovat izolaci přihlašovacích údajů jednotlivých dodavatelů a modelů ověřování;
10. získat alespoň jeden nezávislý implementační prototyp nebo prototyp pro interoperabilitu ještě před vydáním verze OMI 1.0.

## 10. Kritéria vydání pro OMI 1.0

OMI Verze 1.0 NESMÍ být prohlášena za stabilní pouze proto, že Open Manuscript Studio nabízí širokou škálu funkcí.

Verze 1.0 vyžaduje minimálně:

- úplný a přesně vymezený rozsah specifikace jádra;
- stabilní trvalé identifikátory a kanonické trasy;
- kanonická schémata čitelná strojem;
- jasná pravidla pro verzování a kompatibilitu;
- sémantika validace a třídy shody;
- normativní chování při importu a exportu pro deklarovaná přiřazení;
- spustitelné kontrolní sestavy a testy shody;
- zdokumentované důkazy o implementaci od společnosti Studio;
- podstatné důkazy o nezávislém zavedení nebo interoperabilitě;
- veřejné posouzení, při kterém nejsou známy žádné nevyřešené problémy, které by bránily interoperabilní implementaci;
- opakovatelné artefakty vydání a správa po vydání verze 1.0.

## 11. Zásady pro udržování stavu

Tento plán by měl být aktualizován v případě změny programových priorit nebo kritérií pro vydání. Rychle se měnící podrobnosti o produktu by měly být aktualizovány především na stránkách [Studio Implementation Status](./studio-implementation-status.md) a [Integration Implementation Status](../integrations/implementation-status.md) a následně zohledněny i zde, pokud mají podstatný dopad na program OMI 1.0.

Toto rozlišení je záměrné: plán vývoje popisuje, jakým směrem se standard ubírá, zatímco aktuální zprávy o stavu popisují, co současná referenční implementace skutečně dokáže.

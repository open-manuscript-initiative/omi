---
title: OMI Audit architektury
description: Audit stávající sady specifikací a architektury dokumentace systému pro správu dokumentů (Open Manuscript Initiative).
sidebar_position: 3
---

# Open Manuscript Initiative Audit architektury

## Stav dokumentu

| Pole | Hodnota |
| --- | --- |
| Typ dokumentu | Audit řízení / architektury |
| Stav | Návrh |
| Verze | 0.1 |
| Rozsah | Normativní a technická dokumentace v angličtině |
| Cílová skupina | Autoři specifikací, vývojáři, recenzenti a přispěvatelé |

## Shrnutí

Repozitář „Open Manuscript Initiative“ již obsahuje základy komplexního standardu pro vědecké dokumenty. Repozitář zahrnuje koncepční základy, sémantické modely, modely pracovních postupů, specifikace pro výměnu dat, koncepce publikování a materiály zaměřené na implementaci.

Hlavním nedostatkem již není nedostatek nápadů. Je jím architektonická roztříštěnost.

Dokumentace se postupně rozšiřovala a v současné době existuje několik problémů, které omezují její využití jako ucelené sady specifikací:

- v navigaci webových stránek je zobrazena pouze malá část existujících dokumentů;
- identifikátory specifikací, verze a stavy životního cyklu nejsou v souladu;
- vztah mezi normativními požadavky a informativními pokyny není vždy zřejmý;
- některé dokumenty se překrývají nebo se navzájem opakují;
- závislosti mezi modely se uvádějí jen zřídka;
- několik požadovaných modelů zůstává implicitních, místo aby byly formálně specifikovány;
- vztah mezi normou OMI a Open Manuscript Studio není systematicky zdokumentován;
- Zatím neexistuje žádné kanonické schéma ani rámec shody, který by propojoval textové specifikace s chováním ověřitelným strojem.

Jako další krok se doporučuje provést řízený program refaktoringu specifikací. Stávající materiály by měly být zachovány, pokud jsou platné, avšak měly by být přeskupeny do stabilní hierarchie s trvalými identifikátory, společnými metadaty, explicitními závislostmi, stavem implementace a normativními schématy.

## Cíle auditu

Tento audit má pět cílů:

1. provést inventarizaci této dokumentace;
2. rozlišovat mezi existujícím, neúplným, duplicitním, zastaralým a chybějícím materiálem;
3. definovat cílovou specifikaci architektury;
4. určit práce, které brání vydání OMI 1.0;
5. stanovit bezpečný postup migrace, který zabrání nefunkčnosti zveřejněných odkazů a nenaruší probíhající implementační práce.

## Zásady auditu

Při auditu se uplatňují následující zásady.

### Zachovat užitečnou práci

Stávající dokumenty by neměly být vyřazeny pouze proto, že jejich struktura není jednotná. Platné koncepce by měly být sjednoceny do standardních specifikací.

### Oddělit sémantiku od implementace

Specifikace „OMI“ definuje interoperabilní vědecké objekty a chování. Stránka Open Manuscript Studio představuje jednu z implementací, nesmí se však stát normativní definicí tohoto standardu.

### Upřednostňujte stabilní identifikátory před cestami k souborům

Identifikátor specifikace musí zůstat neměnný i v případě, že dojde ke změně názvu souboru, názvu nebo navigační kategorie.

### Zajistit, aby shoda byla testovatelná

Normativní text by měl být nakonec přiřazen ke schématům, validačním pravidlům, příkladům a testům shody.

### Před překladem proveďte refaktorizaci

Sada anglických specifikací by měla být finalizována ještě předtím, než budou vyhotoveny kompletní maďarské a německé překlady.

## Aktuální přehled dokumentace

Současný repozitář obsahuje materiály z několika funkčních skupin.

### Základy

Mezi známé zakládací dokumenty patří:

- Vize
- Základní zásady
- Mapa architektury
- Model vědeckého objektu

Tyto dokumenty stanovují účel a obecnou strukturu systému OMI. Jsou nezbytné, avšak je třeba vyjasnit jejich normativní status a vzájemné vztahy.

### Základní sémantické specifikace

Mezi současné základní materiály patří:

- Model dokumentu
- Model metadat
- Model kotvy
- Model anotací
- Šablona citace
- Model bibliografického záznamu
- Architektura referenční knihovny a registru

Dohromady tyto prvky popisují podstatnou část sémantického modelu rukopisu.

### Specifikace pracovních postupů a vědeckých procesů

Mezi stávající nebo částečně zpracované materiály patří:

- Model recenze
- Vydavatelský model
- koncepce spolupráce obsažené v knize „Open Manuscript Studio“
- překladatelské koncepce zakotvené v vícejazyčné architektuře

Model přezkumu má podobu dokumentu, zatímco spolupráce a překlad vyžadují formální samostatné specifikace.

### Specifikace výměny a balení

Mezi stávající dokumenty patří:

- Formát souboru
- Architektura kontejnerů
- API

Tyto prvky představují výchozí základ pro výměnu a integraci, vyžadují však sladění s kanonickým objektovým modelem a budoucím schématem JSON.

### Specifikace rozšiřitelnosti

Mezi stávající dokumenty patří:

- Architektura pluginů

Stále je zapotřebí model schopností, který by definoval, jakým způsobem implementace oznamují volitelnou a povinnou podporu.

### Materiály týkající se správy a řízení

Činnost v oblasti správy a řízení nyní zahrnuje nebo se plánuje, že bude zahrnovat:

- OMI Charta
- Plán vývoje „OMI“ 1.0
- tento audit architektury
- Životní cyklus specifikace
- Zásady pro správu verzí
- Příručka pro styl specifikací
- Terminologie a slovníček pojmů

## Závěry

## 1. Navigace zpřístupňuje pouze zlomek souboru specifikací

Postranní panel webové stránky v současné době zobrazuje pouze malou část dokumentů uložených v úložišti. K některým existujícím specifikacím se nelze dostat prostřednictvím běžné navigace v dokumentaci.

Z toho vyplývají tři rizika:

- přispěvatelé mohou předpokládat, že skryté dokumenty jsou zastaralé;
- čtenáři mohou získat neúplný obraz o architektuře;
- může docházet k duplicitní práci, protože je obtížné najít již existující materiály.

### Požadované opatření

Po kontrole obsahu by měl být postranní panel uspořádán podle stabilních architektonických kategorií, nikoli jako prostý seznam souborů.

## 2. Model vědeckého objektu je zdvojený

Repozitář obsahuje dvě cesty modelu vědeckých objektů (Scholarly Object Model):

- `docs/specifications/scholarly-object-model.md`
- `docs/specifications/core/scholarly-object-model.md`

Souběžná existence dvou zdánlivě standardních dokumentů vede k nejednoznačnosti ohledně toho, který model určuje pravidla pro implementace.

### Požadované opatření

Oba dokumenty je třeba porovnat po jednotlivých částech. Platný obsah by měl být sloučen do jednoho kanonického dokumentu `OMI-SPEC-001`. Zrušená cesta by měla buď přesměrovávat na kanonickou stránku, nebo obsahovat výslovné oznámení o nahrazení, dokud nebudou bezpečně zřízeny přesměrování.

## 3. Identifikátory specifikací jsou neúplné a potenciálně nestabilní

Některé dokumenty již používají identifikátory, jako je například `OMI-SPEC-005`, jiné nikoli. Bez registru může dojít k opakovanému použití identifikátoru nebo k jeho náhodnému přeznačení.

### Požadované opatření

Vytvořte registr specifikací, který trvale přiřazuje identifikátory. Identifikátory se nikdy nesmějí bez upozornění znovu použít, a to ani v případě, že je specifikace stažena.

Prozatímní řada je:

| Identifikátor | Specifikace | Aktuální stav |
| --- | --- | --- |
| OMI-SPEC-001 | Model vědeckého objektu | Existuje, duplicitní; je třeba provést sloučení |
| OMI-SPEC-002 | Model dokumentu | Existuje; vyžaduje revizi |
| OMI-SPEC-003 | Model metadat | Existuje; vyžaduje revizi |
| OMI-SPEC-004 | Model kotvy | Existující; vyžaduje přezkoumání |
| OMI-SPEC-005 | Citovaný model | Existuje; probíhá revize |
| OMI-SPEC-006 | Model bibliografického záznamu | Vypracovaný návrh |
| OMI-SPEC-007 | Architektura referenční knihovny a registru | Návrh vypracován |
| OMI-SPEC-008 | Validační model | Chybějící |
| OMI-SPEC-009 | Model verzí a změn | Chybí |
| OMI-SPEC-010 | Identita a model přispěvatelů | Chybí |
| OMI-SPEC-011 | Model spolupráce a oprávnění | Chybí |
| OMI-SPEC-012 | Překladový model | Chybí |
| OMI-SPEC-013 | Model profilu vykreslování a publikace | Chybí |
| OMI-SPEC-014 | Model importu a exportu | Chybí |
| OMI-SPEC-015 | Model schopností a shody | Chybí |

Toto číslování je prozatímní, dokud nebude registr formálně schválen.

## 4. Stavy životního cyklu nejsou regulovány

V dokumentech se používají označení jako „`Draft`“, avšak význam těchto označení není definován. Není proto jasné, zda se u daného návrhu jedná o předběžný text, o návrh vhodný k realizaci, nebo o dokument čekající na redakční posouzení.

### Požadované opatření

Zavést jednotný životní cyklus:

1. Průzkumný
2. Návrh
3. Kandidát k posouzení
4. Kandidát na realizaci
5. Stáj
6. Zastaralé
7. Nahrazeno

Každý stát musí mít kritéria pro vstup a výstup.

## 5. Normativní a informativní obsah se prolíná

Několik dokumentů kombinuje architektonické požadavky, příklady, vize do budoucna, vysvětlující texty a návrhy na realizaci, aniž by uváděly zdroj těchto informací.

### Požadované opatření

Každá specifikace musí jasně rozlišovat:

- normativní požadavky;
- informativní vysvětlení;
- pouze orientační příklady;
- odložená budoucí práce;
- poznámky k implementaci.

Normativní požadavky by měly používat jednotné výrazy, jako jsou MUSÍ, NESMÍ, MĚL BY, NEMĚL BY a MŮŽE, jejichž významy jsou definovány v příručce pro styl specifikací.

## 6. Závislosti jsou implicitní

Sada modelů tvoří graf závislostí, avšak tyto závislosti nejsou systematicky zaznamenávány.

Například:

- Model citací závisí na modelu vědeckých objektů, modelu odkazů a modelu bibliografických záznamů;
- Model anotací závisí na modelu kotev;
- Model přezkumu závisí na modelu anotací, modelu identit a přispěvatelů a modelu spolupráce a oprávnění;
- Model publikování závisí na modelu dokumentu, modelu metadat, modelu citací, profilech zobrazení a modelu validace.

### Požadované opatření

Každá specifikace by měla obsahovat následující údaje:

- Záleží na
- Používá se v
- Související specifikace
- Nahrazuje
- Nahrazeno

Registr specifikací ve strojově čitelné podobě může tyto vztahy později generovat automaticky.

## 7. Na validaci se odkazuje, ale není centrálně definována

Mnoho dokumentů zmiňuje validaci, neexistuje však žádný společný validační model, který by definoval třídy chyb, fáze validace, zprávy, profily nebo úrovně shody.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-008: Validation Model`“, který bude obsahovat:

- ověření schématu;
- strukturální validace;
- ověření metadat;
- ověření identifikátoru;
- ověření bibliografických údajů;
- integrita napříč objekty;
- ověření profilu publikace;
- chyby, varování a informační zprávy;
- strojově čitelné validační zprávy;
- rozšiřitelné identifikátory validačních pravidel.

## 8. Chybí správa verzí a sémantika změn

Repozitář i Studio oba zahrnují vědecké objekty s verzemi, avšak neexistuje žádný normativní model, který by definoval revize, větve, schválené změny, stavy publikace nebo provenienci na úrovni objektu.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-009: Versioning and Change Model`“, který bude obsahovat:

- rukopisné verze;
- revize objektů;
- změnové operace;
- autorství a časová razítka;
- srovnání a rozdíly;
- přijaté a zamítnuté změny;
- neměnné zveřejněné snímky;
- migrace mezi verzemi schématu.

## 9. Sémantika identity a přispěvatelů je neúplná

Metadata mohou uvádět jména přispěvatelů, avšak pro osoby, organizace, identifikátory, afilace, role a historické tvary jmen je zapotřebí model opakovaně použitelné identity.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-010: Identity and Contributor Model`“, který bude obsahovat:

- osoby a organizace;
- ORCID a ROR;
- místní identity;
- jména a jejich varianty;
- členství s dobou platnosti;
- pořadí přispěvatelů;
- CRediT a rozšiřitelné role;
- status korespondenčního autora;
- redakční a překladatelské příspěvky.

## 10. Koncepty spolupráce jsou obsaženy v kódu, ale ne ve standardu

Open Manuscript Studio již obsahuje role v pracovním prostoru a pozvánky, avšak tyto pojmy zatím nejsou formalizovány jako sémantika nezávislá na konkrétní implementaci OMI.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-011: Collaboration and Permission Model`“, který bude obsahovat:

- pracovní prostory;
- členství;
- role vlastníka, redaktora, spoluautora, recenzenta, překladatele a čtenáře;
- pozvánky;
- rozsahy oprávnění;
- přístup na úrovni objektů a na úrovni sekcí;
- auditorské události;
- oddělení ověřování od přenositelnosti rukopisu.

## 11. Vícejazyčné rukopisy vyžadují překladový model

Webové stránky i Studio podporují více jazyků, avšak vztah mezi původním textem a přeloženými vědeckými objekty zatím není normativně popsán.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-012: Translation Model`“, který bude obsahovat:

- zdrojový a cílový jazyk;
- zarovnané objekty a kotvy;
- stav překladu;
- detekce zastaralých překladů;
- poznámky překladatele;
- více cílových jazyků;
- částečné překlady;
- vydávání paralelních a samostatných jazykových verzí.

## 12. Profily pro vykreslování a publikaci nejsou dostatečně odděleny

Architektura správně rozlišuje mezi sémantikou a prezentací jako samostatnými vrstvami, je však zapotřebí formální profilový model, který by specifikoval, jak časopisy a vydavatelé mapují sémantický obsah na výstupy.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-013: Rendering and Publication Profile Model`“, který bude obsahovat:

- profily publikací;
- výstupní cíle;
- zobrazení citací a poznámek;
- pravidla pro typografii a sazbu;
- povinné a volitelné části;
- rozšíření pro časopisy a vydavatele;
- výstupy dostupné na adresách HTML, PDF, EPUB a XML;
- deterministické vstupy pro vykreslování.

## 13. Chování importu a exportu není dostatečně specifikováno

Formát souboru a model publikování samy o sobě neurčují kvalitu transformace, nepodporovaný obsah, počet cyklů zpracování ani zprávy o konverzi.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-014: Import and Export Model`“, který bude obsahovat:

- DOCX, Markdown, JATS, HTML, CSL, JSON, mapování BibTeX a RIS;
- bezztrátové a ztrátové transformace;
- varování týkající se převodu;
- nepodporované prvky;
- původ zdroje;
- očekávané náklady na cestu tam a zpět;
- zachování rozšíření;
- exportní profily.

## 14. Chybí údaje o úrovních shody a deklarovaných funkcích

Ne každá implementace bude podporovat všechny volitelné modely nebo výstupy. Je zapotřebí společný mechanismus, který by umožňoval deklarovat podporu, aniž by docházelo k roztříštěnosti standardu.

### Požadované opatření

Vytvořte dokument „`OMI-SPEC-015: Capability and Conformance Model`“, který bude obsahovat:

- shoda s jádrem;
- volitelné funkce;
- soulad s profilem;
- deklarace rozšíření;
- verze schématu;
- možnosti importu a exportu;
- funkce ověřování;
- manifesty implementace čitelné strojem.

## 15. Specifikace jazyka Prose zatím nejsou vázány na žádné kanonické schéma

OMI nelze zajistit spolehlivou interoperabilitu, dokud bude datová struktura existovat pouze ve formě textového popisu a příkladů.

### Požadované opatření

Vypracujte sadu kanonických schémat s verzemi, počínaje schématem „JSON“. Práce na schématech by měla zahrnovat:

- identifikátory stabilních schémat;
- definice pro opakované použití;
- režimy přísné validace a validace zohledňující rozšíření;
- minimální příklady;
- úplné příklady;
- neplatné zápasy;
- migrační pomůcky;
- automatizované testy shody.

## 16. Stav implementace není viditelný

Čtenáři nemohou snadno určit, zda se jedná o koncepční model, částečně implementovaný model nebo model, který je realizován produkčním kódem.

### Požadované opatření

Vytvořte stránku „Stav implementace“ s popisky založenými na důkazech:

- Ještě nezačalo
- Průzkumný
- Částečné
- Realizováno experimentálně
- Implementováno v referenčním softwaru
- Ověřena shoda

Matice nesmí uvádět shodu v případech, kdy existuje pouze prvek s podobným názvem.

## 17. Terminologie vyžaduje centrální správu

Pojmy jako rukopis, dokument, vědecký objekt, odkaz, citace, bibliografický záznam, anotace, revize a publikace mohou být v různých oborech a softwarových systémech vykládány odlišně.

### Požadované opatření

Vytvořte dokument obsahující normativní terminologii a slovníček pojmů. Specifikace by měly odkazovat na sdílené definice, místo aby klíčové pojmy nejednotně předefinovávaly.

## Cílová architektura dokumentace

Doporučená struktura dokumentace je následující:

```text
Introduction
├── Vision
├── Core Principles
└── Architecture Map

Foundations
├── Terminology and Glossary
├── Scholarly Object Model
├── Document Model
├── Metadata Model
└── Identity and Contributor Model

Editing and Collaboration
├── Anchor Model
├── Annotation Model
├── Review Model
├── Collaboration and Permission Model
├── Versioning and Change Model
└── Translation Model

Bibliography and Citations
├── Bibliographic Record Model
├── Citation Model
├── Reference Library and Registry Architecture
└── Citation Graph (future)

Publishing and Validation
├── Validation Model
├── Rendering and Publication Profile Model
└── Publishing Model

Exchange and Packaging
├── File Format
├── Container Architecture
├── Import and Export Model
└── API

Extensibility and Conformance
├── Plugin Architecture
├── Capability and Conformance Model
└── Implementation Status

Governance
├── OMI Charter
├── Roadmap to OMI 1.0
├── Architecture Audit
├── Specification Registry
├── Specification Lifecycle
├── Versioning Policy
├── Specification Style Guide
└── Translation Policy
```

## Metadata standardní specifikace

Každá normativní specifikace by měla obsahovat společný blok metadat.

Povinná pole:

```text
Identifier
Title
Version
Status
Document type
Editors
Last updated
Normative language
Depends on
Used by
Related specifications
Implementation status
Schema reference
Supersedes
Superseded by
```

Docusaurus Úvodní část by měla usnadňovat orientaci a prezentaci, avšak metadata stabilní specifikace by měla být v dokumentu také zřetelně uvedena.

## Strategie restrukturalizace repozitáře

K přesunu velkého souboru by nemělo dojít, dokud nebudou schváleny audit obsahu a registr identifikátorů. Předčasný přesun by vedl k nefunkčním odkazům a konfliktům při slučování, aniž by došlo k vyřešení koncepční nejednoznačnosti.

Doporučený postup je následující:

### Fáze 1 – Základy správy a řízení

- sloučit chartu;
- sloučit Roadmap s projektem „OMI“ verze 1.0;
- schválit tento audit architektury;
- vytvořit dokumenty týkající se životního cyklu specifikace, zásad verzování, stylového průvodce a terminologie.

### Fáze 2 – Kanonický inventář

- přiřadit trvalé identifikátory;
- určit kanonické a zastaralé dokumenty;
- sjednotit duplicitní model vědeckých objektů (Scholarly Object Model);
- přesměrování dokumentů a zachované aliasy.

### Fáze 3 – Refaktorizace navigace

- přeskupit postranní panel;
- provést revizi stávajících specifikací;
- v případě potřeby přidejte štítky se stavem;
- zachovávat stabilní veřejné URL adresy, kdykoli je to možné.

### Fáze 4 – Chybějící základní modely

- Validační model;
- Verzování a model změn;
- Model identity a přispěvatelů;
- Model spolupráce a oprávnění;
- Překladatelský model.

### Fáze 5 — Zveřejnění a dokončení výměny

- Model profilu vykreslování a publikace;
- Model importu a exportu;
- Model schopností a shody;
- provést revizi a sjednotit formát souboru, architekturu kontejneru, rozhraní „API“, model publikování a architekturu pluginů.

### Fáze 6 – Schéma a shoda

- kanonické schéma JSON;
- příkladový korpus;
- neplatné zápasy;
- automatická validace;
- projevuje se schopnost implementace;
- sada testů shody.

### Fáze 7 – Internacionalizace

- finalizovat anglickou verzi Release Candidate;
- vytvářet překladové katalogy a kopie dokumentů;
- přeložit do maďarštiny a němčiny;
- zveřejňovat stav překladu a varování před odchylkami;
- zavést postup pro synchronizaci pozdějších změn.

## Klasifikace podle priority

### Důležité před vydáním verze OMI 1.0

- kanonický model vědeckých objektů;
- registr specifikací a životní cyklus;
- Sladění modelů dokumentů, metadat, odkazů, anotací, citací a bibliografických záznamů;
- Validační model;
- Verzování a model změn;
- Model identity a přispěvatelů;
- kanonické schéma JSON;
- definice shody;
- úplné normativní příklady.

### Vysoká priorita

- Model spolupráce a oprávnění;
- Překladový model;
- Model profilu vykreslování a publikace;
- Model importu a exportu;
- matice stavu implementace;
- terminologie a slovníček pojmů.

### Důležité, ale může následovat po prvním kandidátovi na implementaci

- Graf citací;
- pokročilé protokoly pro distribuované registry;
- profily pro jednotlivé obory;
- registr formálních rozšíření;
- další úřední překlady kromě maďarštiny a němčiny.

## Rizika

### Rozšíření působnosti

OMI zahrnuje široký vědecký životní cyklus. Bez kritérií pro postupné vydávání by projekt mohl odložit vydání stabilní základní verze na neurčito.

**Opatření:** definovat minimální jádro shody s normou „OMI“ verze 1.0 a volitelné funkce zařadit do profilů.

### Rozdíly mezi dokumentací a kódem

Vývoj studia se může vyvíjet rychleji než specifikace v textové podobě.

**Opatření ke zmírnění rizika:** při významných změnách modelu vyžadovat aktualizace stavu implementace a testovací sady pro ověření shody.

### Nestabilita identifikátoru

Přejmenování dokumentů před zavedením registru by mohlo způsobit, že externí odkazy budou nespolehlivé.

**Řešení:** Nejprve přiřaďte trvalé identifikátory a zachovejte přesměrování nebo aliasy.

### Odchylka překladu

Překlad nejednoznačných specifikací by znásobil objem údržbových prací a vedl by ke vzniku protichůdných jazykových verzí.

**Opatření:** překládat až poté, co bude finální verze anglického textu schválena, a překladové verze zřetelně označit.

### Nadměrná centralizace registrů

Architektura referenční knihovny by mohla nechtěně naznačovat, že systém „OMI“ vyžaduje jedinou centrální bibliografickou autoritu.

**Opatření ke zmírnění rizik:** zachovat federované určování zdrojů, původ zdrojů, offline záznamy a nezávislost na implementaci jako výslovné architektonické zásady.

## Kritéria dokončení programu refaktoringu

Fáze refaktoringu architektury je dokončena, pokud:

- každá aktivní specifikace má jedno kanonické umístění;
- každá normativní specifikace má trvalý identifikátor;
- jsou přijaty stavy životního cyklu a pravidla pro verze;
- postranní panel znázorňuje kompletní revidovanou architekturu;
- jsou deklarovány závislosti a související specifikace;
- zdvojené specifikace se sloučí;
- jsou vypracovány chybějící základní modely;
- existují standardní schémata a příklady;
- stav implementace je zdokumentován bez nepodložených tvrzení;
- Anglická dokumentace se dostane k kandidátovi na revizi, který je vhodný pro překlad.

## Doporučené další dokumenty, které byste si měli přečíst hned poté

Na základě tohoto auditu by měly být vypracovány následující dokumenty týkající se správy a řízení, a to v tomto pořadí:

1. Životní cyklus specifikace
2. Zásady pro správu verzí specifikací
3. Příručka pro styl specifikací
4. Terminologie a slovníček pojmů
5. Registr specifikací

Jakmile budou tyto změny přijaty, bude možné bezpečně přistoupit ke konsolidaci duplicitních modelů a k úplné refaktorizaci postranního panelu.

## Závěr

Projekt „Open Manuscript Initiative“ se již vyvinul z fáze průzkumného shromažďování nápadů. Obsahuje již základy komplexní architektury vědeckého rukopisu.

Další výzvou je důsledná konsolidace.

Stabilní model „OMI“ 1.0 vyžaduje řízenou sadu specifikací, nikoli pouze doplňkové dokumenty. Trvalé identifikátory, explicitní stavy životního cyklu, kanonické modely, strojově ověřitelná schémata, deklarované závislosti a transparentní stav implementace jsou proto bezprostředními architektonickými prioritami.

Tento audit představuje pracovní plán pro tento přechod.

---
title: Životní cyklus specifikace
sidebar_position: 4
---

# Open Manuscript Initiative Životní cyklus specifikace

**Stav:** Návrh  
**Verze:** 0.1  
**Typ dokumentu:** Zásady řízení  
**Jazyk normativních textů:** angličtina

## 1. Účel

Tato směrnice stanovuje, jakým způsobem se navrhují, vypracovávají, posuzují, zavádějí, stabilizují, vyřazují z používání a nahrazují specifikace Open Manuscript Initiative.

Životní cyklus má zabránit tomu, aby byly nestabilní návrhy mylně považovány za stabilní standard, a zároveň umožňuje otevřeně diskutovat o počátečních nápadech a testovat je.

Každý dokument zaregistrovaný jako specifikace „OMI“ MUSÍ uvádět jeden stav životního cyklu. Přechody mezi stavy MUSÍ být zaznamenány v systému správy verzí a MĚLY BY být doprovázeny veřejným odůvodněním.

## 2. Přehled životního cyklu

```text
Exploratory
    ↓
Draft
    ↓
Review Candidate
    ↓
Implementation Candidate
    ↓
Stable
    ↓
Deprecated
    ↓
Superseded
```

Specifikace nemusí projít všemi fázemi, je-li stažena před zveřejněním. Dokument MŮŽE být vrácen do dřívější fáze, jsou-li zjištěny podstatné nevyřešené problémy.

## 3. Normativní terminologie

Klíčová slova **MUSÍ**, **NESMÍ**, **POVINNÉ**, **MUSÍ**, **NESMÍ**, **MĚL BY**, **MĚL BY NE**, **DOPORUČENÉ**, **MŮŽE** a **VOLITELNÉ** vyjadřují úrovně požadavků, jsou-li napsána velkými písmeny.

Normativní požadavky BY MĚLY být ověřitelné, pokud je to prakticky možné.

## 4. Požadovaná metadata k dokumentům

Každá registrovaná specifikace MUSÍ obsahovat:

- trvalý identifikátor specifikace;
- název;
- verze;
- stav životního cyklu;
- normativní nebo informativní klasifikace;
- redaktoři nebo odpovědní správci;
- rozsah;
- závislosti;
- související specifikace;
- stav implementace;
- historie změn nebo odkaz na verzi;
- poslední podstatná aktualizace.

Specifikace, které definují serializovatelná data, BY MĚLY rovněž uvádět příslušná schémata, příklady a testy shody.

## 5. Průzkumné

### 5.1 Účel

Fáze průzkumu se využívá pro rané koncepce, formulace problémů, konkurenční návrhy a výzkumné otázky.

Průzkumný dokument není specifikací typu „OMI“ a NESMÍ být prezentován jako požadavek na implementaci.

### 5.2 Kritéria pro přijetí

Dokument může do tohoto stavu přejít, pokud:

- určuje problém související s OMI;
- vysvětluje, proč stávající specifikace nestačí;
- navrhuje alespoň jeden možný směr;
- poukazuje na důležité dosud nevyřešené otázky.

### 5.3 Očekávání

Průzkumný dokument MŮŽE:

- obsahují neúplnou terminologii;
- představit alternativní modely;
- vynechat schémata nebo podrobnosti implementace;
- změna bez záruky kompatibility.

MĚLO by jasně rozlišovat mezi již stanovenými požadavky a otevřenými otázkami.

### 5.4 Kritéria pro ukončení

Pro postup do Draftu je nutné:

- určený rozsah;
- preferovaný architektonický směr;
- počáteční terminologie;
- zjištěné závislosti;
- důkaz, že návrh patří do sady specifikací „OMI“.

Průzkumný návrh MŮŽE být místo toho uzavřen jako zamítnutý, odložený nebo mimo rámec.

## 6. Návrh

### 6.1 Účel

Návrh je hlavní fází tvorby specifikace. Návrh popisuje zamýšlený model s dostatečnou podrobností pro technické posouzení a experimentální implementaci.

Obsah návrhu je nestabilní a MŮŽE dojít k jeho změnám, které povedou k nekompatibilitě.

### 6.2 Kritéria pro přijetí

Návrh MUSÍ obsahovat:

- trvalý nebo prozatímně vyhrazený identifikátor typu „OMI-SPEC“;
- účel a rozsah;
- základní pojmy a datové struktury;
- vztahy k dalším specifikacímOMI;
- konkrétní nevyřešené otázky;
- počáteční model shody.

### 6.3 Očekávání

Návrh BY MĚL obsahovat:

- příklady;
- validační pravidla;
- pokyny k serializaci, pokud je to relevantní;
- otázky bezpečnosti a ochrany soukromí;
- v příslušných případech zohlednění požadavků na přístupnost;
- dopady na migraci;
- známé alternativy a zamítnuté přístupy.

Experimentální implementace MOHOU uvádět podporu pro návrh pouze tehdy, pokud uvedou přesnou verzi specifikace nebo konkrétní revizi.

### 6.4 Kritéria pro ukončení

K povýšení na kandidáta na hodnocení je nutné:

- žádná nevyřešená otázka, která by bránila soudržnému provádění;
- jednotná terminologie v rámci dokumentu;
- zkontroloval závislosti;
- vnitřně konzistentní normativní požadavky;
- typické příklady;
- zdokumentovaný seznam známých omezení;
- redakční kontrola struktury a srozumitelnosti.

## 7. Posouzení uchazeče

### 7.1 Účel

Kandidát na posouzení je považován za dostatečně kompletní pro cílené veřejné a odborné posouzení.

Cílem této fáze je odhalit architektonické nedostatky, problémy s interoperabilitou, nejasné požadavky a chybějící případy použití ještě předtím, než budou implementace považovány za důkaz stability.

### 7.2 Kritéria pro přijetí

Kandidát na recenzi MUSÍ:

- splnit všechna předběžná kritéria pro ukončení;
- určit období přezkumu nebo milník přezkumu;
- zveřejnit otázky, ke kterým je výslovně požadována zpětná vazba;
- obsahovat plán implementace a testování;
- určit očekávané důsledky z hlediska zpětné kompatibility.

### 7.3 Požadavky na přezkum

Přehled by MĚL zahrnovat pohledy více než jedné relevantní skupiny, například:

- autoři a výzkumníci;
- redaktoři a vydavatelé;
- knihovníci a úložiště;
- tvůrci softwaru;
- odborníci na přístupnost;
- odborníci na konzervaci;
- odborníci na metadata a standardy.

Připomínky z věcného posouzení MUSÍ být vyřešeny, přijaty jako známá omezení nebo výslovně odloženy s uvedením odůvodnění.

### 7.4 Kritéria pro ukončení

Kvalifikace na pozici „Implementation Candidate“ vyžaduje:

- vyřešení nebo zdokumentované vyřízení podstatných otázek přezkumu;
- stabilní model shody;
- strojově čitelná schémata, pokud to specifikace vyžaduje;
- příklady shody nebo přípravky;
- není znám žádný rozpor s jinou platnou specifikací OMI;
- schválení v rámci zdokumentovaného rozhodovacího procesu projektu.

Pokud v důsledku přezkumu dojde k zásadním změnám v architektuře, MUSÍ být kandidát na schválení vrácen do fáze návrhu.

## 8. Kandidát na realizaci

### 8.1 Účel

Kandidát na implementaci ověřuje, zda lze specifikaci implementovat samostatně a tak, aby byla zajištěna interoperabilita.

Očekává se, že jeho návrh bude stabilní, avšak změny jsou stále možné, pokud se při implementaci objeví nedostatky.

### 8.2 Kritéria pro přijetí

Kandidát na implementaci MUSÍ poskytnout:

- splnit všechny normativní požadavky;
- pokyny k provádění;
- v příslušných případech schémata nebo formální definice;
- kritéria shody;
- příklady, které lze otestovat;
- pravidla týkající se verzí a kompatibility;
- veřejný proces sběru zpětné vazby k realizaci.

### 8.3 Důkazy o provedení

Před zařazením do kategorie „Stable“ by specifikace MĚLA mít alespoň dvě smysluplně nezávislé implementace svého klíčového interoperabilního chování.

V případě, že dvě implementace zatím nejsou proveditelné, MŮŽE projekt přijmout jednu implementaci spolu s nezávislým validátorem, konvertorem, sadou testů nebo demonstrací kompatibility. Tato výjimka a její odůvodnění MUSÍ být zaznamenány.

Důkazy o implementaci BY MĚLY prokázat:

- úspěšné rozebrání nebo zpracování sdílených přípravků;
- jednotný výklad požadované sémantiky;
- chování při zpáteční cestě, je-li to nutné;
- zpracování chyb a ověřování platnosti;
- kompatibilita mezi nezávisle vyvinutými komponenty.

Open Manuscript Studio může sloužit jako jedna z referenčních implementací, nesmí však být jediným zdrojem normativního chování.

### 8.4 Kritéria pro ukončení

Pro postup do úrovně „Stable“ je nutné:

- dostatečné důkazy o provádění;
- splnění testů shody, jsou-li k dispozici;
- odstranění závad bránících zavedení;
- zdokumentovaná pravidla kompatibility a migrace;
- posouzení bezpečnosti a ochrany osobních údajů úměrné rozsahu specifikace;
- schválení v rámci zdokumentovaného rozhodovacího procesu projektu;
- vydání stabilní verze s číslem verze.

Významná změna návrhu vyžaduje návrat do fáze „Draft“ nebo „Review Candidate“. Menší opravy MOHOU zachovat status „Implementation Candidate“ s novou předběžnou stabilní verzí.

## 9. Stabilní

### 9.1 Význam

Stav „Stable“ znamená, že specifikace je vhodná pro implementaci do produkčního prostředí a jako dlouhodobý externí referenční zdroj.

„Stabilní“ neznamená „neměnný“. Znamená to, že jsou vyžadovány kompatibilita, předvídatelné verzování a podpora migrace.

### 9.2 Požadavky

Specifikace Stable MUSÍ obsahovat:

- trvalý identifikátor OMI-SPEC;
- stabilní číslo verze;
- úplné znění předpisu;
- požadavky na shodu;
- zveřejněná schémata a příklady, pokud je to relevantní;
- zdokumentované závislosti;
- důkazy o provádění;
- historie změn;
- trvale udržované standardní místo zveřejnění.

### 9.3 Řízení změn

Změny ve specifikaci „Stable“ se dělí na:

- **Redakční opravy:** formulace, formátování, odkazy nebo příklady, které nemění normativní chování.
- **Vysvětlení kompatibility:** odstraňuje nejednoznačnost, aniž by zneplatnilo implementace splňující požadavky.
- **Kompatibilní rozšíření:** přidává volitelné nebo zpětně kompatibilní chování.
- **Zásadní změna:** mění požadovanou sémantiku nebo způsobuje, že dříve vyhovující chování již není platné.

V opravných verzích MOHOU být zveřejněny redakční opravy a související upřesnění.

Kompatibilní rozšíření obvykle vyžadují vydání minoritní verze.

Změny s dopadem na kompatibilitu vyžadují novou hlavní verzi a MUSÍ obsahovat pokyny k migraci. Zásadní přepracování, které má dopad na kompatibilitu, MŮŽE být vyvinuto jako samostatný návrh, zatímco stávající hlavní verze zůstává ve stabilním stavu.

### 9.4 Opravy

Potvrzené chyby ve specifikacích stabilní verze MUSÍ být zveřejněny.

Oprava MUSÍ obsahovat následující informaci:

- dotčené verze;
- zda se jedná o redakční či normativní chybu;
- očekávaný dopad na provádění;
- stav opravy;
- verze, ve které je oprava zahrnuta.

## 10. Zastaralé

### 10.1 Význam

Označení „zastaralé“ znamená, že daná specifikace je i nadále k dispozici a může být stále implementována, avšak nové implementace BY MĚLY upřednostňovat její nástupce nebo alternativu.

Zastaralost neznamená odstranění specifikace ani změnu jejího historického obsahu.

### 10.2 Požadavky na vyřazení z používání

Oznámení o zastaralosti MUSÍ obsahovat následující údaje:

- důvod, proč se tato funkce již nedoporučuje;
- doporučená náhrada, pokud existuje;
- dotčené verze;
- pokyny k migraci;
- plánované období podpory, je-li známo;
- ať už jde o otázky bezpečnosti, interoperability nebo uchovávání.

Zastaralá schémata, jmenné prostory a kanonické URL adresy BY MĚLY zůstat dostupné z důvodu dlouhodobé archivace.

## 11. Nahrazeno

### 11.1 Význam

Označení „Nahrazeno“ znamená, že tento dokument je pro nové implementace formálně nahrazen jinou specifikací nebo hlavní verzí.

Nahrazená specifikace zůstává součástí trvalého záznamu.

### 11.2 Požadavky

Dokument MUSÍ obsahovat následující údaje:

- nahrazující specifikace a verze;
- datum účinného zrušení nebo uvolnění;
- pokyny k migraci;
- poznámky ke kompatibilitě;
- jakékoli další případy použití starší specifikace.

Náhradní dokument MUSÍ uvádět, co nahrazuje.

## 12. Další konečné výsledky

Ne každý návrh se stane stabilním. Zápisy o správě mohou práci také klasifikovat jako:

### Zamítnuto

Návrh byl projednán, ale nebyl přijat. V zápisu o rozhodnutí BY MĚLO být vysvětleno, proč tomu tak bylo.

### Staženo

Autor nebo editor ukončil aktivní vývoj ještě před přijetím.

### Odloženo

Práce má potenciální hodnotu, je však záměrně odkládána.

### Sloučeno

Obsah návrhu byl začleněn do jiné specifikace, a proto již není třeba jej uvádět v samostatném dokumentu.

Tyto výsledky nepředstavují úrovně zralosti a nepatří do posloupnosti životního cyklu primární specifikace.

## 13. Změny stavu

### 13.1 Žádost o povýšení

Žádost o propagaci specifikace BY MĚLA obsahovat:

- současný a navrhovaný stav;
- důkaz, že jsou splněna kritéria pro ukončení;
- nevyřešené otázky;
- důkazy o provedení, je-li to požadováno;
- dopad na kompatibilitu;
- odkazy na příslušné recenze a rozhodnutí.

### 13.2 Zápis o rozhodnutí

Každé povýšení do statusu „Review Candidate“, „Implementation Candidate“ nebo „Stable“ MUSÍ být doprovázeno veřejným záznamem o rozhodnutí.

Záznam by MĚL obsahovat následující údaje:

- datum rozhodnutí;
- účastníci nebo schvalující orgán;
- prověřené důkazy;
- námitky a jejich vyřízení;
- podmínky spojené s touto akcí.

### 13.3 Regrese

Specifikace SE MŮŽE vrátit do dřívějšího stavu, pokud:

- je odhalena architektonická nesrovnalost;
- shodu nelze důsledně zajistit;
- dojde k nekompatibilní změně závislosti;
- chyby v oblasti bezpečnosti nebo ochrany soukromí vyžadují přepracování;
- rozsah se podstatně mění.

Regrese MUSÍ být zdokumentována a NESMÍ přepsat historii předchozích verzí.

## 14. Verze a stav životního cyklu

Verze a stav životního cyklu spolu souvisejí, ale jsou to dva odlišné pojmy.

Příklady:

- `0.2 Draft`
- `0.8 Review Candidate`
- `0.9 Implementation Candidate`
- `1.0 Stable`
- `1.1 Stable`
- `1.0 Deprecated`

Verze starší než 1.0 automaticky neznamenají žádný konkrétní stav. Každý dokument MUSÍ obě hodnoty výslovně uvést.

## 15. Prohlášení o shodě

Implementace, které prohlašují shodu, MUSÍ uvádět:

- identifikátor „OMI-SPEC“;
- přesná verze;
- jakékoli implementované volitelné profily;
- známé odchylky;
- příslušné jmenné prostory rozšíření nebo funkce.

Implementace NESMÍ prohlašovat bezvýhradnou shodu s průzkumným dokumentem.

Shoda s verzemi „Draft“, „Review Candidate“ nebo „Implementation Candidate“ MUSÍ být označena jako experimentální nebo předběžná.

## 16. Závislosti

Specifikace NESMÍ získat status „Stable“, pokud normativně závisí na nevyřešeném dokumentu typu „Exploratory“.

Specifikace stabilního prvku MŮŽE záviset na:

- další specifikace Stable;
- externí norma s konkrétním číslem verze;
- Jako „Implementation Candidate“ pouze v případě, že závislost má úzce vymezený rozsah a riziko je zdokumentováno.

Pokud je nějaká závislost označena za zastaralou nebo nahrazenou, MUSÍ být přezkoumány dotčené specifikace OMI.

## 17. Zásady překladu

Rozhodující je normativní anglická verze, která určuje stav životního cyklu.

Oficiální překlady BY MĚLY obsahovat:

- stav a verze anglického zdrojového textu;
- datum revize překladu;
- zda je překlad kompletní;
- upozornění, že v případě rozporu má přednost anglická specifikace.

Překlad NESMÍ být označen jako „Stable“, pokud neodpovídá aktuálnímu anglickému zdrojovému textu označenému jako „Stable“.

## 18. Požadavky na archivaci

Verze „Published Review Candidate“, „Implementation Candidate“, „Stable“, „Deprecated“ a „Superseded“ BY MĚLY zůstat trvale dostupné.

Projekt BY MĚL zachovat:

- neměnné značky verzí;
- snímky dokumentů s verzemi;
- schémata a příklady související s jednotlivými verzemi;
- záznamy o rozhodnutích;
- opravy;
- průvodce migrací.

Kanonické URL by MĚLY zůstat neměnné nebo přesměrovávat na archivní úvodní stránku.

## 19. Nouzové opravy

Závažná chyba v oblasti bezpečnosti, ochrany osobních údajů, ztráty dat nebo interoperability MŮŽE vyžadovat urychlenou nápravu.

Postup v případě nouze MUSÍ i nadále zahrnovat:

- veřejné oznámení nebo doporučení, pokud je zveřejnění bezpečné;
- informace o dotčené verzi;
- opravený normativní text nebo schéma;
- pokyny k provádění;
- záznam o trvalé změně.

Údaje citlivé z hlediska bezpečnosti MOHOU být dočasně utajeny, avšak konečné rozhodnutí BY MĚLO být zveřejněno.

## 20. Povinnosti

### Editory specifikací

Redaktoři jsou zodpovědní za:

- zachování soudržnosti normativního textu;
- sledování problémů a rozhodnutí;
- příprava důkazů o změně stavu;
- koordinace schémat, příkladů a testů;
- uchovávání historie změn.

### Realizátoři

Realizátorům se doporučuje, aby:

- nahlásit nejednoznačné nebo nekonzistentní požadavky;
- zveřejňovat zkušenosti s implementací;
- přispívat k vývoji interoperabilních zařízení a testů;
- nepovažujte chování referenční implementace za normativní, pokud se liší od specifikace.

### Řízení projektu

Proces řízení projektu má na starosti:

- schvalování přechodů v pokročilých fázích životního cyklu;
- ochrana trvalých identifikátorů;
- zajištění rozmanitosti v rámci přezkumu;
- zabránění nekompatibilním změnám provedeným bez upozornění;
- správa kanonického registru.

## 21. Minimální požadavky podle statusu

| Požadavek | Průzkumná fáze | Návrh | Kandidát k posouzení | Kandidát k implementaci | Stabilní |
|---|:---:|:---:|:---:|:---:|:---:|
| Definovaný problém | Požadováno | Požadováno | Požadováno | Požadováno | Požadováno |
| Stanovený rozsah | Doporučeno | Povinné | Povinné | Povinné | Povinné |
| Trvalý nebo vyhrazený identifikátor | Volitelné | Povinné | Povinné | Povinné | Povinné |
| Normativní požadavky | Volitelné | Částečné | Úplné | Úplné | Úplné |
| Příklady | Volitelné | Doporučené | Povinné | Povinné | Povinné |
| Schéma/formální model (je-li to relevantní) | Volitelné | Doporučené | Povinné | Povinné | Povinné |
| Veřejné posouzení | Volitelné | Doporučené | Povinné | Povinné | Dokončeno |
| Důkazy o implementaci | Není vyžadováno | Volitelné | Plánováno | Vyžadováno | Vyžadováno |
| Testy shody | Nevyžadováno | Volitelné | Plánováno | Vyžadováno v příslušných případech | Prováděno |
| Zásady kompatibility | Není vyžadováno | Počáteční | Vyžadováno | Vyžadováno | Vyžadováno |
| Prohlášení o shodě s produkční verzí | Zakázáno | Experimentální | Experimentální | Předběžná stabilní verze | Povoleno |

## 22. Adopce

Tato směrnice nabývá účinnosti po jejím schválení v rámci řídícího procesu „Open Manuscript Initiative“.

Stávajícím dokumentům BY MĚL být v rámci programu refaktoringu dokumentace přiřazen přesný stav životního cyklu. Žádný stávající dokument se nestane „stabilním“ pouze proto, že vznikl před zavedením této směrnice.

## 23. Shrnutí

Životní cyklus specifikace „OMI“ rozlišuje fáze průzkumu, vypracování specifikace, revize, testování implementace, stabilní standardizace a ukončení platnosti.

Jeho cílem je zajistit, aby každá žádost o uznání úrovně zralosti měla smysl, poskytnout realizátorům předvídatelné očekávání a zachovat transparentní technickou dokumentaci v průběhu vývoje systému „OMI“ směrem k otevřenému standardu pro vědecké publikování.

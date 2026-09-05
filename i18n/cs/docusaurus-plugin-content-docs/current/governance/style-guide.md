---
title: OMI Příručka pro styl specifikací
sidebar_label: Příručka pro styl specifikací
sidebar_position: 40
---

# Open Manuscript Initiative Příručka pro styl specifikací

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Typ dokumentu | Zásady správy a řízení |
| Stav | Návrh |
| Verze | 0.1.0 |
| Normativní jazyk | Angličtina |
| Vztahuje se na | Specifikace, profily, registry, schémata, příklady a související technickou dokumentaci k OMI |

## 1. Účel

Tato příručka definuje redakční, strukturální, terminologické a technické konvence používané v rámci projektu „Open Manuscript Initiative“ (OMI).

Jeho účelem je zajistit, aby dokumenty OMI byly:

- přesný;
- vnitřně konzistentní;
- nezávislé na implementaci;
- srozumitelné pro čtenáře z různých oborů;
- vhodné pro normativní technické použití;
- stabilní při správě verzí a překladu;
- snadno se revidují, testují, citují a udržují.

Autoři a redaktoři technických dokumentů na adrese OMI MUSÍ dodržovat tento návod, pokud v daném dokumentu není výslovně uvedena a odůvodněna výjimka.

## 2. Rozsah

Tento návod se vztahuje na:

- dokumenty označené jako „`OMI-SPEC-*`“;
- zásady správy a řízení;
- implementační profily;
- registrů a řízených slovníků;
- JSON Schéma a dokumentace schématu;
- požadavky na shodu;
- vzorové dokumenty a zkušební přípravky;
- mapování interoperability;
- průvodce migrací;
- oficiální překlady.

Neformální oznámení o projektech, návody, příspěvky na blogu a diskuse v komunitě BY MĚLY dodržovat pravidla terminologie uvedená v této příručce, není však nutné, aby používaly šablonu v plném rozsahu.

## 3. Normativní jazyk

Klíčová slova **MUSÍ**, **NESMÍ**, **POŽADOVÁNO**, **MUSÍ**, **NESMÍ**, **MĚL BY**, **NEMĚL BY**, **DOPORUČENO**, **NEDOPORUČENO**, **MŮŽE** a **VOLITELNÉ** se mají vykládat jako normativní požadavky tehdy a pouze tehdy, jsou-li uvedena velkými písmeny.

OMI Dokumenty BY MĚLY upřednostňovat následující podmnožinu:

- **POVINNOSTI** a **ZÁKAZY** pro zajištění absolutní interoperability nebo splnění požadavků na shodu;
- **MĚLO BY SE** a **NEMĚLO BY SE** pro důrazná doporučení s oprávněnými výjimkami;
- **MAY** pro povolené volitelné chování;
- **DOPORUČUJE SE**, pokud se text čte přirozeněji než **MĚLO BY SE**;
- **VOLITELNÉ** – při popisu volitelné součásti nebo pole, nikoli chování při implementaci.

### 3.1 Úroveň požadavků

**Nezbytná** podmínka:

- je nezbytné pro shodu, interoperabilitu, integritu nebo bezpečnost;
- lze otestovat nebo objektivně posoudit;
- nejde pouze o vyjádření redakčního názoru.

Požadavek typu **SHOULD**:

- definuje očekávané chování;
- povoluje výjimky pouze tehdy, jsou-li známy jejich důsledky;
- MĚLO BY se uvést, jaké jsou tyto důsledky, je-li to možné.

Prohlášení z **května**:

- uděluje povolení;
- neznamená doporučení;
- NESMÍ se používat k popisu nejistého chování.

### 3.2 Vyhněte se nejednoznačným výrazům v požadavcích

Normativní dokumenty BY MĚLY vyhýbat se používání následujících slov bez upřesnění:

- obvykle;
- obecně;
- obvykle;
- vhodné;
- rozumné;
- přiměřený;
- jednoduché;
- zřejmé;
- uživatelsky přívětivý;
- efektivní;
- bezpečný;
- standard.

Jsou-li takové pojmy nezbytné, MĚL BY dokument definovat měřitelná kritéria nebo vysvětlit kontext rozhodování.

Špatné:

> Implementace by měly identifikátory řádně ukládat.

Lepší:

> Implementace MUSÍ zachovat hodnoty identifikátorů beze změny velikosti písmen, interpunkce nebo procentového kódování, pokud specifikace identifikátoru výslovně nedefinuje kanonickou transformaci.

### 3.3 Jedna podmínka v jedné větě

Normativní věty BY MĚLY vyjadřovat jeden samostatně ověřitelný požadavek.

Špatné:

> Implementace MUSÍ záznam ověřit, zobrazit chyby a zachovat neznámé vlastnosti.

Lepší:

> Implementace MUSÍ ověřit, zda záznam odpovídá deklarovanému schématu.
>
> Implementace MUSÍ hlásit chyby při ověřování.
>
> Implementace MUSÍ zachovat vlastnosti neznámých rozšíření během bezztrátového přenosu tam a zpět.

### 3.4 Identifikátory požadavků

Specifikace se stavem **Kandidát na přezkum** nebo vyšším BY MĚLY normativním požadavkům přiřadit stabilní identifikátory.

Doporučený formát je:

```text
REQ-<SPEC>-<NNN>
```

Příklad:

```text
REQ-DOC-001
REQ-CIT-014
REQ-VAL-023
```

Identifikátory požadavků MUSÍ zůstat neměnné v rámci hlavní verze specifikace. Je-li požadavek odstraněn, jeho identifikátor NESMÍ být přiřazen jinému požadavku.

## 4. Jazyk a hlas

### 4.1 Normativní jazyk

Úředním jazykem stránky OMI je angličtina.

Anglické specifikace BY MĚLY být sepsány v technickém stylu srozumitelném na mezinárodní úrovni. Autoři BY SE MĚLI vyvarovat idiomů, humoru, kulturně specifických metafor a zbytečných rétorických prostředků.

### 4.2 Hlas

Specifikace BY MĚLY používat přímé oznamovací věty.

Preferováno:

> Jeden výskyt citace odkazuje na jeden záznam v knihovně.

Vyhněte se:

> Je třeba poznamenat, že výskyt citace je něco, u čeho by se obecně dalo očekávat, že odkazuje na jeden záznam v knihovně.

Aktivní tvar se upřednostňuje, pokud jasně vyjadřuje odpovědnost:

> Validátor nahlásí nepodporovanou vlastnost.

Pasivní hlas LZE použít, pokud není důležité, kdo danou činnost vykonává:

> Tato vlastnost není zahrnuta v kanonickém výstupu.

### 4.3 Čas

Normativní chování by MĚLO být formulováno v přítomném čase.

Preferováno:

> Analyzátor odmítne neplatný identifikátor.

Vyhněte se:

> Analyzátor odmítne neplatný identifikátor.

### 4.4 Osoba

Ve specifikacích by se MĚLO vyhýbat oslovování čtenáře slovem „vy“. Místo toho použijte příslušnou roli nebo komponentu:

- autor;
- redaktor;
- implementace;
- procesor;
- validátor;
- renderer;
- klient;
- server;
- repozitář.

### 4.5 Inkluzivní a neutrální jazyk

OMI V dokumentech MUSÍ být používán uctivý, inkluzivní a na roli založený jazyk. Měla by se vyhýbat používání rodových zájmen, pokud pohlaví dané osoby není relevantní.

Příklady a vzorové identitní profily SE NESMÍ opírat o stereotypy ani naznačovat, že jeden jazyk, region, obor, typ instituce či model publikování představuje standard pro vědeckou činnost.

## 5. Kategorie dokumentů

Každý technický dokument na stránkách OMI MUSÍ uvádět svou kategorii.

### 5.1 Specifikace

Specifikace definuje normativní struktury, chování, omezení nebo požadavky na interoperabilitu.

Formulář identifikátoru:

```text
OMI-SPEC-NNN
```

### 5.2 Profil

Profil vybírá, omezuje nebo rozšiřuje jednu či více specifikací pro danou komunitu, obor, pracovní postup nebo kontext publikace.

Formulář identifikátoru:

```text
OMI-PROFILE-NNN
```

Profil NESMÍ být v rozporu se specifikací, kterou popisuje, aniž by na to upozornil. Jakákoli záměrná nekompatibilita vyžaduje samostatnou verzi specifikace nebo výslovně nesouladné rozšíření.

### 5.3 Registr

Registr definuje řízené identifikátory, hodnoty, typy médií, role, funkce nebo rozšiřovací body.

Formulář identifikátoru:

```text
OMI-REG-NNN
```

Položky registru MUSÍ mít stabilní identifikátory a zdokumentované stavy životního cyklu.

### 5.4 Schéma

Schéma je strojově čitelná formalizace části datového modelu OMI.

Formulář identifikátoru:

```text
OMI-SCHEMA-NNN
```

Dokument schématu MUSÍ uvádět, kterou verzi specifikace prózy implementuje.

### 5.5 Příklad

Oficiální příklad ilustruje obsah, který je v souladu s pravidly, nebo naopak záměrně v rozporu s nimi.

Formulář identifikátoru:

```text
OMI-EXAMPLE-NNN
```

V příkladech MUSÍ být uvedeno, zda se jedná o:

- normativní;
- informativní;
- platné;
- neplatné;
- minimální;
- komplexní;
- v závislosti na profilu.

### 5.6 Dokument o správě a řízení

Dokument o správě definuje projektové procesy, pravomoci, životní cyklus, správu verzí, redakční postupy nebo pravidla pro přispívání.

Dokumenty týkající se správy nedostávají identifikátory `OMI-SPEC`, pokud přímo nedefinují shodu implementátora.

## 6. Konvence pro názvy souborů a identifikátory

### 6.1 Názvy souborů

Markdown Názvy souborů MUSÍ být psány malými písmeny s mezerami mezi slovy.

Správně:

```text
bibliographic-record-model.md
reference-library-architecture.md
specification-lifecycle.md
```

Nesprávně:

```text
BibliographicRecordModel.md
reference_library.md
Reference Library.md
```

### 6.2 Trvalé identifikátory

Trvalý identifikátor dokumentu se NESMÍ změnit, pokud:

- název se změní;
- soubor je přesunut;
- změny kategorií v postranním panelu;
- dokument je přeložen;
- je vydána nová vedlejší nebo opravná verze.

### 6.3 Nadpisy a kotvy

Text nadpisu BY MĚL zůstat nezměněn po zveřejnění, protože generované odkazy mohou být použity v jiných zdrojích.

Pokud je třeba změnit nadpis, MĚL BY web zachovat přesměrování nebo výslovný odkaz na původní obsah, je-li to podporováno.

### 6.4 Názvy vlastností

Názvy vlastností určené pro strojové čtení MUSÍ být psány v malých písmenech s velkými počátečními písmeny jednotlivých slov (lower camel case), pokud jiný standard pro mapování nevyžaduje odlišnou konvenci.

Příklady:

```json
{
  "documentLanguage": "en",
  "bibliographicTargetId": "ref-001",
  "createdAt": "2026-08-06T16:00:00Z"
}
```

Boolovské vlastnosti BY MĚLY používat kladné názvy, které popisují stav „`true`“.

Preferováno:

```text
isArchived
preserveUnknownProperties
requiresReview
```

Vyhněte se:

```text
notArchived
noPreservation
skipNoReview
```

### 6.5 Hodnoty výčtu

Hodnoty výčtu BY MĚLY být psány malými písmeny s mezerami mezi slovy:

```text
journal-article
co-author
review-candidate
```

Jakmile jsou hodnoty výčtu zveřejněny ve stabilní specifikaci, NESMÍ být v rámci téže hlavní verze přejmenovány.

## 7. Požadované metadata dokumentů

Každá specifikace MUSÍ začínat metadaty srozumitelnými pro člověka, která obsahují alespoň:

| Pole | Požadavek |
|---|---|
| Identifikátor | Trvalý identifikátor OMI |
| Název | Oficiální název |
| Verze | Verze dokumentu |
| Stav | Fáze životního cyklu |
| Typ dokumentu | Normativní, informativní nebo smíšený |
| Redakce | Odpovědní redaktoři nebo redakční tým |
| Poslední aktualizace | Datum podle normy ISO 8601 |
| Nahrazuje | Předchozí dokument, je-li relevantní |
| Nahrazeno | Nástupce, pokud existuje |
| Závisí na | Normativní závislosti |
| Používá | Známé závislé specifikace |
| Stav implementace | Shrnutí nebo odkaz na matici implementace |

Úvodní část souboru „Docusaurus“ by MĚLA obsahovat pouze metadata o publikaci, která webová stránka potřebuje, jako je název, popisek v postranním panelu a pořadí. Normativní metadata MUSÍ zůstat viditelná v zobrazeném těle dokumentu.

## 8. Struktura standardní specifikace

Normativní specifikace OMI by MĚLA mít následující strukturu. Jednotlivé oddíly LZE vynechat pouze v případě, že se na danou situaci nevztahují.

### 8.1 Shrnutí

Stručný popis toho, co specifikace definuje a proč existuje.

Abstrakt by neměl obsahovat normativní požadavky.

### 8.2 Status tohoto dokumentu

V této části se uvádí:

- stav životního cyklu;
- očekávání ohledně stability;
- zda jsou tvrzení o implementaci opodstatněná;
- zda je stále možná neslučitelná změna;
- kde se projednávají různé otázky a úpravy.

### 8.3 Shoda s požadavky

V této části jsou definovány:

- třídy vyhovujících implementací;
- povinné funkce;
- volitelné funkce;
- vztahy v profilu;
- jak se provádí testování shody nebo jak se shoda prohlašuje.

### 8.4 Rozsah působnosti

Část „Rozsah“ vymezuje, čeho se dokument týká.

Měla by také obsahovat výslovnou podkapitolu **Mimo rozsah**, pokud hrozí nejasnosti ohledně hranic.

### 8.5 Terminologie

Dokument MUSÍ definovat odborné termíny, které dosud nebyly definovány v centrálním terminologickém dokumentu OMI.

Definice BY MĚLY být stručné a neměly by se zakládat na kruhové argumentaci.

### 8.6 Návrhové zásady

Tato informační část vysvětluje architektonické zásady, z nichž vychází tato specifikace.

Návrhové zásady NESMÍ nahrazovat testovatelné normativní požadavky.

### 8.7 Datový model nebo model zpracování

Hlavní část modelu popisuje entity, vlastnosti, vztahy, stavy a chování při zpracování.

Specifikace v próze zůstává směrodatná, pokud dokument výslovně neuvádí, že pro definovanou podmnožinu je směrodatný strojově čitelný artefakt.

### 8.8 Ověřování a zpracování chyb

Tento dokument BY MĚL definovat:

- neplatný vstup;
- neplatný vstup;
- varování;
- odstranitelné a neodstranitelné poruchy;
- požadavky na hlášení chyb;
- chování při konzervaci.

### 8.9 Rozšiřitelnost

Specifikace BY MĚLA identifikovat body pro rozšíření a definovat, jak se zachází s neznámými rozšířeními.

Rozšíření NESMÍ měnit význam základních vlastností.

### 8.10 Propojitelnost

Tato část popisuje přiřazení k externím standardům a rozlišuje:

- bezztrátová zobrazení;
- podmíněně bezztrátová zobrazení;
- ztrátové mapování;
- nepodporované konstrukce.

### 8.11 Aspekty bezpečnosti, ochrany osobních údajů a integrity

Každá normativní specifikace MUSÍ zohlednit, zda s sebou přináší rizika související s:

- aktivní obsah;
- vyhledávání externích zdrojů;
- falšování identifikátoru;
- nedůvěryhodná metadata;
- osobní údaje;
- skryté poznámky;
- řízení přístupu;
- integrita podpisu nebo původu;
- odmítnutí služby;
- nebezpečné vykreslení.

Tvrzení, že nejsou známy žádné konkrétní okolnosti, je přijatelné pouze po výslovném posouzení.

### 8.12 Aspekty přístupnosti

Specifikace, které mají vliv na prezentaci nebo interakci s uživatelem, BY MĚLY uvádět požadavky na přístupnost nebo očekávaná přiřazení.

### 8.13 Aspekty internacionalizace

Specifikace týkající se textu, názvů, dat, řazení, identifikátorů nebo zobrazení MUSÍ zohlednit:

- Unicode;
- jazykové značky;
- obousměrný text;
- lokalizované názvy;
- varianta skriptu;
- transliterace;
- hodnoty strojového formátu nezávislé na lokalizaci;
- časová pásma a zobrazení kalendáře.

### 8.14 Příklady

Příklady BY MĚLY být uvedeny v blízkosti pravidla, které ilustrují. Rozsáhlé ucelené příklady BY MĚLY být uchovávány jako samostatné ověřené soubory a ve specifikaci by na ně měly být uvedeny odkazy.

### 8.15 Literatura

Literatura MUSÍ být rozdělena na:

- **Normativní odkazy**: nezbytné pro zavedení nebo výklad této specifikace;
- **Informační odkazy**: doplňující informace nebo související materiály.

### 8.16 Historie změn

Historie verzí BY MĚLA shrnout podstatné změny. Samotná historie v systému Git není adekvátní náhradou za zveřejněnou historii změn.

## 9. Pravidla pro terminologii

### 9.1 Základní definice

Termíny s významem přesahujícím rámec specifikace MUSÍ být definovány v centrálním terminologickém dokumentu OMI.

Specifikace MŮŽE zúžit význam pojmu pro účely svého vlastního rozsahu, NESMÍ však bez upozornění přiřadit tomuto pojmu protichůdný význam.

### 9.2 Preferované základní pojmy

Následující rozdíly MUSÍ být zachovány.

#### Rukopis

Vědecké dílo představované jako editovatelný, strukturovaný intelektuální objekt v průběhu celého svého životního cyklu.

#### Dokument

Konkrétní strukturovaná podoba nebo soubor obsahu. Rukopis může mít více podob nebo verzí dokumentu.

#### Vědecký objekt

Identifikovatelná sémantická entita v rámci rukopisu nebo s ním spojená.

#### Bibliografický záznam

Strukturovaný popis citovaného nebo citovatelného zdroje, nezávislý na konkrétním výskytu citace.

#### Referenční knihovna

Soubor bibliografických záznamů na úrovni rukopisů, které byly vybrány pro případné nebo skutečné citování.

#### Výskyt citace

Odkaz z konkrétního místa v rukopisu na záznam v referenční knihovně, případně včetně lokalizátorů, předpon, přípon a účelu citace.

#### Zobrazená citace

Text prezentace vygenerovaný na základě citace, bibliografického záznamu a profilu zobrazení.

#### Kotva

Stabilní nebo identifikovatelný odkaz na místo, rozsah, objekt nebo stav v rámci vědeckého obsahu.

#### Anotace

Vědecký objekt, který spojuje soubor komentářů nebo strukturovaných informací s jedním či více cíli.

#### Profil

Definovaná sada omezení, výchozích nastavení nebo rozšíření, která se pro konkrétní účel aplikují na jednu nebo více specifikací jazykaOMI.

### 9.3 Velká písmena

Obecné pojmy se píší malými písmeny:

> rukopis, výskyt citace, profil

V názvech oficiálních dokumentů a komponent se používá velká počáteční písmena:

> Citation Model, Open Manuscript Studio, OMI Specification Registry

Názvy vlastností a doslovné hodnoty MUSÍ být formátovány jako kód:

> Vlastnost „`documentLanguage`“ obsahuje jazykový tag BCP 47.

### 9.4 Zkratky

Zkratka MUSÍ být při prvním významném použití rozepsána, pokud není všeobecně známá v rámci cílové odborné veřejnosti.

Preferováno:

> Citation Style Language (CSL)

Následující použití MOHOU využívat `CSL`.

Zkratky by se neměly uvádět v množném čísle s apostrofem.

Správně:

> DOIs, APIs, URL adresy

## 10. Prezentace datového modelu

### 10.1 Popisy entit

Každý subjekt BY MĚL definovat:

- účel;
- identifikátor;
- životní cyklus;
- požadované vlastnosti;
- volitelné vlastnosti;
- vztahy;
- invarianty;
- rozšiřovací body.

### 10.2 Tabulky vlastností

Tabulky vlastností BY MĚLY používat toto pořadí:

| Vlastnost | Typ | Povinná | Kardinalita | Popis |
|---|---|---:|---:|---|

Mezi další sloupce MOHOU patřit:

- výchozí;
- omezení;
- zdroj;
- klasifikace z hlediska ochrany soukromí;
- byla zavedena nová verze.

### 10.3 Kardinalita

Kardinalita by MĚLA být vyjadřována jednotně:

- `0..1` — volitelná jednotlivá hodnota;
- `1` — přesně jedna hodnota;
- `0..*` — nula nebo více hodnot;
- `1..*` — jedna nebo více hodnot.

### 10.4 Hodnoty typu null, chybějící a prázdné hodnoty

Specifikace MUSÍ v příslušných případech rozlišovat mezi:

- chybějící vlastnost;
- vlastnost s hodnotou „`null`“;
- prázdný řetězec;
- prázdné pole;
- neznámá hodnota;
- hodnota záměrně nezveřejněná;
- hodnota, která se nevztahuje.

Tyto stavy NESMÍ být považovány za rovnocenné, pokud to specifikace výslovně neuvádí.

### 10.5 Data a časy

Strojově čitelná data a časy MUSÍ být uvedeny ve formátu kompatibilním s normou ISO 8601, jak je definováno v příslušném schématu.

Údaj o čase BY MĚL obsahovat časový posun vůči UTC. Hodnoty UTC BY MĚLY používat formát `Z`.

Příklad:

```text
2026-08-06T16:10:15Z
```

Datum bez času NESMÍ být automaticky interpretováno jako okamžik.

### 10.6 Jazykové značky

Při identifikaci jazyka strojově čitelným způsobem MUSÍ být použity jazykové značky BCP 47, pokud standard mapování nestanoví jiný způsob zápisu.

Příklady:

```text
en
hu
de
zh-Hant
sr-Latn
```

## 11. Příklady a bloky kódu

### 11.1 Platnost

Příklady kódu, které uvádějí shodu, MUSÍ být syntakticky správné a MĚLY BY být automaticky ověřeny.

Zkrácené příklady MUSÍ obsahovat viditelný údaj, jako je například poznámka nebo tři tečky, a NESMÍ být prezentovány jako úplné platné dokumenty.

### 11.2 JSON

JSON příklady MUSÍ:

- používejte uvozovky;
- používejte odsazení o dvě mezery;
- vyhněte se komentářům v blocích označených jako „`json`“;
- používejte stabilní identifikátory příkladů;
- vyhýbejte se uvádění skutečných osobních údajů;
- Používejte platný Unicode.

Příklad:

```json
{
  "id": "citation-001",
  "targetId": "reference-001",
  "locator": {
    "type": "page",
    "value": "24–31"
  }
}
```

### 11.3 XML

XML V příkladech MUSÍ být deklarovány jmenné prostory, pokud je sémantika jmenných prostorů důležitá. Předpony použité v příkladech BY MĚLY být v rámci celé sady specifikací jednotné.

### 11.4 URL a identifikátory

V příkladech BY SE MĚLY pokud možno používat vyhrazené nebo zjevně smyšlené hodnoty.

Nepoužívejte identifikátory, které by mohly být zaměněny za skutečné přidělené vědecké identifikátory, ledaže by příklad výslovně odkazoval na skutečné dílo a citace byla přesná.

### 11.5 Pozitivní a negativní příklady

Specifikace BY MĚLY obsahovat:

- alespoň jeden minimální platný příklad;
- alespoň jeden reprezentativní platný příklad;
- neplatné příklady důležitých pravidel ověřování;
- příklady migrace při změně stávajícího chování.

U neplatných příkladů MUSÍ být uvedeno, proč jsou neplatné.

### 11.6 Příklady štítků

Příklady BY MĚLY být označeny a odkazováno na ně by mělo být jednotně:

```text
Example 1 — Minimal citation occurrence
Example 2 — Citation with a page locator
Example 3 — Invalid unresolved target
```

## 12. Obrázky a schémata

### 12.1 Účel

Schéma BY MĚLO objasnit vztahy, stavy, architekturu nebo procesy, které by bylo obtížné pochopit pouze na základě textového popisu.

Schéma NESMÍ být jediným normativním vyjádřením požadavku.

### 12.2 Přístupnost

Každý smysluplný údaj MUSÍ obsahovat:

- alternativní text;
- popisek;
- odpovídající vysvětlení v próze.

Informace NESMÍ být založeny pouze na barvě.

### 12.3 Zdroj schématu

Upravitelné zdrojové soubory důležitých diagramů BY MĚLY být uloženy v úložišti společně s exportovanými soubory.

### 12.4 Zápis

Specifikace MUSÍ vysvětlit nezřejmé značky. Diagramy podobné UML NESMÍ naznačovat formální sémantiku UML, pokud je dokument výslovně nepřijímá.

## 13. Tabulky a seznamy

Tabulky BY SE MĚLY používat pro strukturované srovnání, nikoli jako náhrada za dlouhé odstavce textu.

Tabulka MUSÍ mít jasné nadpisy sloupců. Buňky BY MĚLY obsahovat stručné hodnoty.

Seznamy s odrážkami jsou vhodné pro neuspořádané soubory. Číslované seznamy BY SE MĚLY používat pouze v případech, kdy záleží na pořadí nebo posloupnosti kroků.

Vnořené seznamy BY SE MĚLY omezit, aby se zachovala čitelnost a kvalita překladu.

## 14. Odkazy

### 14.1 Vnitřní odkazy

Normativní odkazy na jiný dokument z řady „OMI“ MUSÍ používat jeho trvalý identifikátor a MĚLY BY obsahovat jeho název.

Preferováno:

> Viz OMI-SPEC-006, *Model bibliografického záznamu*.

Identifikátor ve zdroji MŮŽE být doplněn relativním odkazem typu Markdown.

### 14.2 Odkazy na oddíly

Odkazy BY MĚLY uvádět název oddílu, a ne se spoléhat pouze na číslo oddílu, protože čísla se během přípravy dokumentu mohou změnit.

Preferováno:

> Viz část „Normalizace identifikátorů“ v dokumentu OMI-SPEC-006.

### 14.3 Externí odkazy

Externí normativní odkazy BY MĚLY směřovat na stabilní a autoritativní zdroje. Specifikace BY MĚLA uvádět verzi nebo vydání, na které se odkazuje, pokud se výklad mezi jednotlivými verzemi může lišit.

### 14.4 Trvanlivost spojů

V dokumentech by se MĚLY upřednostňovat trvalé identifikátory a kanonické adresy URL dokumentace před dočasnými stránkami projektu.

## 15. Sladění schématu a prózy

### 15.1 Pravomoc

Každá specifikace založená na schématu MUSÍ uvádět vztah autority mezi textem a schématem.

Doporučené pravidlo:

- próza určuje sémantiku a způsob zpracování;
- schéma definuje strukturální omezení, která lze ověřit strojově;
- konflikt je vada specifikace, kterou je TŘEBA opravit;
- Implementace NESMÍ vytvářet sémantiku výhradně na základě mechanismů schématu.

### 15.2 Popisy schémat

Popisy vlastností schématu BY MĚLY používat stejnou terminologii jako textová specifikace a BY MĚLY odkazovat na příslušný požadavek nebo oddíl, pokud to nástroje umožňují.

### 15.3 Výchozí nastavení

Výchozí hodnota schématu NESMÍ být považována za pokyn k vložení hodnoty, pokud specifikace v textové části výslovně nedefinuje takové chování při zpracování.

### 15.4 Další vlastnosti

Specifikace MUSÍ výslovně stanovit, zda neznámé vlastnosti jsou:

- zamítnuto;
- ignorováno;
- zachováno;
- vystavené rozšířením;
- povoleno pouze v deklarovaných jmenných prostorech.

## 16. Psaní v souladu s normami

### 16.1 Třídy shody

Specifikace BY MĚLA definovat pojmenované třídy shody, pokud ne každá implementace plní stejnou roli.

Příklady:

- výrobce splňující požadavky;
- dodržující spotřebitel;
- validátor shody;
- kompatibilní vykreslovač;
- kompatibilní editor;
- zpracovatel zajišťující shodu s požadavky na uchování.

### 16.2 Pozorovatelné chování

Požadavky na shodu MUSÍ vycházet z pozorovatelných vstupů, výstupů, stavů nebo zdokumentovaných schopností.

Vyhněte se požadavkům na vnitřní architekturu, pokud tato architektura není nezbytná pro interoperabilitu nebo bezpečnost.

Špatné:

> Implementace MUSÍ využívat relační databázi.

Lepší:

> Implementace MUSÍ zachovat stabilní identifikátory objektů při ukládání i načítání.

### 16.3 Volitelné funkce

Volitelná funkce MŮŽE být vynechána. Je-li implementována, MUSÍ splňovat všechny požadavky stanovené pro tuto funkci.

### 16.4 Prohlášení o shodě

Prohlášení o shodě BY MĚLO obsahovat:

- název a verze implementace;
- identifikátor specifikace a přesná verze;
- podporovaná třída shody;
- podporované profily;
- známá omezení;
- verze testovací sady, je-li k dispozici.

## 17. Terminologie chyb a varování

OMI V dokumentech by se tyto pojmy MĚLY používat jednotně.

### Chyba

Stav, který porušuje normativní požadavek nebo brání správnému dokončení požadované operace.

### Upozornění

Stav, který je povolený nebo lze jej obnovit, ale může způsobit ztrátu informací, sníženou interoperabilitu nebo neočekávaný výstup.

### Nepodporovaná funkce

Uznaná funkce, kterou daná implementace neposkytuje.

### Neznámá funkce

Funkce nebo rozšíření, které daná implementace nerozpoznává.

### Neplatná hodnota

Hodnota, která porušuje syntaktická, typová, rozsahová, kardinalitní nebo sémantická omezení.

### Nevyřešený odkaz

Odkaz, jehož cíl nelze v aktuálním kontextu zpracování identifikovat ani k němu získat přístup.

Specifikace BY MĚLY uvádět, zda každá z těchto situací vyžaduje odmítnutí, obnovení, uchování nebo informování uživatele.

## 18. Mapování interoperability

Mapovací dokument MUSÍ rozlišovat:

- zdrojový model;
- cílový model;
- směr mapování;
- určení předpokladů;
- uchované informace;
- zpracované informace;
- vynechané informace;
- vygenerované informace;
- nejednoznačnost;
- vratnost.

Mapovací tabulky BY MĚLY používat explicitní výsledky, jako například:

```text
lossless
conditionally lossless
lossy
unsupported
implementation-defined
```

Slovo „kompatibilní“ NESMÍ být použito bez uvedení rozměru kompatibility.

## 19. Formulace týkající se zastaralosti a nahrazení

Zastaralá funkce zůstává definována, ale pro nový obsah či implementace se již nedoporučuje.

Oznámení o ukončení podpory MUSÍ obsahovat následující informace:

- zastaralá funkce;
- verze, ve které byla označena za zastaralou;
- důvod;
- náhradní díl, bude-li k dispozici;
- pokyny k migraci;
- nejstarší verze, ve které může k odstranění dojít.

Nahrazený dokument MUSÍ zůstat k dispozici a MUSÍ uvádět odkaz na dokument, který jej nahradil.

Normativní text NESMÍ být bez upozornění odstraněn ze zveřejněných stabilních verzí.

## 20. Klasifikace redakčních změn

Každý pull request, který se týká specifikace, BY MĚL změny zařadit do jedné nebo více z následujících kategorií:

- redakční upřesnění;
- normativní vyjasnění;
- kompatibilní normativní doplnění;
- neslučitelná normativní změna;
- příklad opravy;
- oprava schématu;
- bezpečnostní oprava;
- aktualizace překladu;
- zastaralost;
- nahrazení.

Klasifikace BY MĚLA být v souladu se zásadami verzování na adrese OMI.

## 21. Pokyny k překladu

### 21.1 Normativní zdroj

Není-li výslovně uvedeno jinak, má anglická specifikace normativní charakter a překlady mají pouze informativní charakter.

### 21.2 Vazba na verzi zdrojového kódu

Každý úřední překlad MUSÍ obsahovat:

- identifikátor zdrojového dokumentu;
- přesná verze zdroje;
- překladová verze;
- stav překladu;
- datum poslední synchronizace.

### 21.3 Nepřeložitelné tokeny

Následující údaje MUSÍ zůstat beze změny, pokud specifikace nestanoví lokalizovaný popisek:

- názvy vlastností;
- hodnoty výčtu;
- identifikátory požadavků;
- identifikátory schémat;
- typy médií;
- URI jmenných prostorů;
- kód;
- doslovné tokeny protokolu.

### 21.4 Jednotnost terminologie

Oficiální překlady MUSÍ používat schválený terminologický seznam pro daný jazyk. Překladatelé BY MĚLI zachovávat pojmové rozdíly i v případech, kdy je běžný jazyk má tendenci stírat.

### 21.5 Normativní klíčová slova

Normativní klíčová slova psaná velkými písmeny BY MĚLA zůstat v oficiálních překladech v angličtině, případně doplněná o přeložené vysvětlení, je-li to užitečné. Tím se zabrání nejednoznačnosti při právním či technickém výkladu.

## 22. Úpravy s podporou umělé inteligence

Nástroje využívající umělou inteligenci MOHOU být použity na podporu tvorby návrhů, úprav, překladu, kontroly terminologie, generování příkladů nebo kontroly konzistence.

### 22.1 Odpovědnost člověka

Každý zveřejněný dokument na adrese OMI MUSÍ mít lidského redaktora nebo redakční skupinu, která je odpovědná za:

- věrohodnost;
- normativní správnost;
- soulad se stávajícími specifikacemi;
- dodržování předpisů v oblasti duševního vlastnictví;
- posouzení bezpečnosti a ochrany osobních údajů;
- konečné schválení.

Výstupy umělé inteligence NESMÍ být považovány za autoritativní pouze proto, že jsou plynulé nebo napsané technickým stylem.

### 22.2 Ověření

Obsah vytvořený s pomocí umělé inteligence MUSÍ být zkontrolován z hlediska:

- sada specifikací zdrojů;
- uznávané externí normy;
- schémata a příklady;
- chování při implementaci, je-li to relevantní;
- terminologie projektu.

Vygenerované citace, identifikátory, citáty a externí odkazy MUSÍ být před zveřejněním nezávisle ověřeny.

### 22.3 Změny v předpisech

Návrh vytvořený s pomocí umělé inteligence, který mění normativní chování, MUSÍ splňovat stejné požadavky na životní cyklus, posuzování, testování a verzování jako jakýkoli návrh vypracovaný člověkem.

Žádné normativní pravidlo NESMÍ být přijato výhradně na základě doporučení umělé inteligence.

### 22.4 Citlivý materiál

Redaktoři NESMÍ předávat důvěrné rukopisy, osobní údaje, recenzní materiály s embargem, přihlašovací údaje, soukromé klíče ani neveřejné bezpečnostní informace službě využívající umělou inteligenci, pokud tato služba a kontext zpracování nejsou pro dané informace výslovně povoleny.

### 22.5 Původ

Projekt MŮŽE zaznamenávat významnou míru podpory ze strany umělé inteligence v poznámkách k příspěvkům, popisech žádostí o začlenění změn (pull requestů) nebo v redakčních metadatech. Takové uvedení by MĚLO popisovat roli daného nástroje, nikoli mu přisuzovat autorství či odpovědnost.

Příklad:

> Kontrola jazyka a konzistence s využitím umělé inteligence; veškerý normativní obsah byl ověřen a schválen uvedeným redaktorem.

Drobné úpravy v pravopisu, gramatice, vyhledávání nebo formátování nevyžadují zveřejnění na úrovni dokumentu, pokud to nevyžadují zásady projektu nebo platná pravidla.

### 22.6 Překlad

Strojové překlady MUSÍ být považovány za pracovní verze, dokud nebudou zkontrolovány kvalifikovaným lidským překladatelem nebo odborným korektorem.

Strojový překlad NESMÍ být označen jako oficiální překlad OMI bez lidské kontroly a ověření zdrojové verze.

## 23. Postupy týkající se repozitářů a žádostí o začlenění

### 23.1 Jedna ucelená otázka

Žádost o začlenění specifikace by se MĚLA týkat jedné ucelené architektonické nebo redakční záležitosti. Nesouvisející refaktoring by měl být, pokud je to možné, vyčleněn zvlášť.

### 23.2 Popis žádosti o začlenění

Pull request by MĚL obsahovat:

- co se změnilo;
- proč se to změnilo;
- zda je dané chování normativní;
- dopad na kompatibilitu;
- dotčené specifikace a schémata;
- byla provedena validace;
- nevyřešené otázky.

### 23.3 Diffs, které lze zkontrolovat

Rozsáhlé mechanické úpravy formátování BY MĚLY být odděleny od podstatných normativních změn, aby recenzenti mohli rozpoznat rozdíly v chování.

### 23.4 Vygenerované soubory

Generované výstupy BY MĚLY uvádět svůj zdroj a příkaz, kterým byly vygenerovány. Generované soubory NESMÍ být ručně upravovány, pokud to pracovní postup výslovně nepovoluje.

### 23.5 Ověření

Před sloučením by příslušné kontroly MĚLY zahrnovat:

- Markdown sestavit;
- ověření interních odkazů;
- JSON a ověření syntaxe XML;
- ověření schématu;
- ukázkové testy;
- kontrola terminologie;
- kontroly duplicitních identifikátorů;
- kontrola překladových klíčů.

## 24. Přístupnost a čitelnost

OMI Specifikace by MĚLY být použitelné pro čtenáře s různými zařízeními a různými potřebami v oblasti přístupnosti.

Autoři MUSÍ:

- používejte logickou hierarchii nadpisů;
- uveďte popisný text odkazu;
- uvedete alternativní text k obrázkům, které mají význam;
- vyhněte se tomu, abyste význam vyjadřovali pouze barvou;
- určit jazyk neanglických pasáží, pokud to nástroj umožňuje;
- vyhýbejte se zbytečně širokým tabulkám;
- vysvětlit symboly a zkratky;
- dbát na to, aby odstavce byly tematicky soustředěné.

Technická přesnost má přednost před libovolnými hodnoceními srozumitelnosti, avšak zbytečně složité věty BY SE MĚLY přeformulovat.

## 25. Kontrolní seznam kvality

Než se dokument posune do stavu **K posouzení**, MĚLI BY redaktoři ověřit všechny níže uvedené příslušné položky.

### 25.1 Identita a působnost

- [ ] Dokument má stabilní identifikátor.
- [ ] Jsou uvedeny informace o verzi a stavu životního cyklu.
- [ ] Hranice rozsahu a toho, co do něj nespadá, jsou jasné.
- [ ] Jsou uvedeny závislosti a související specifikace.

### 25.2 Terminologie

- [ ] Termíny odpovídají terminologii na stránce OMI.
- [ ] Jsou definovány nové pojmy.
- [ ] Podobné pojmy jsou důsledně rozlišovány.
- [ ] Názvy vlastností a doslovné hodnoty se formátují podle pravidel pro kód.

### 25.3 Normativní kvalita

- [ ] Normativní klíčová slova jsou použita záměrně.
- [ ] Požadavky lze nezávisle otestovat.
- [ ] V případě potřeby jsou přiřazeny identifikátory požadavků.
- [ ] Volitelné chování je výslovně uvedeno.
- [ ] Je definováno zpracování chyb.
- [ ] V případě potřeby jsou definovány třídy shody.

### 25.4 Modely a příklady

- [ ] Entity, vztahy a kardinality jsou explicitně uvedeny.
- [ ] Rozlišují se stavy „chybějící“, „null“, „prázdný“ a „neznámý“.
- [ ] Tyto příklady jsou syntakticky správné.
- [ ] Jsou uvedeny důležité případy neplatnosti.
- [ ] Příklady neobsahují žádné osobní ani důvěrné údaje.

### 25.5 Provozní kompatibilita

- [ ] Externí mapování udávají směr a ztrátu informací.
- [ ] Je definováno zpracování neznámých přípon.
- [ ] Jsou zdokumentovány dopady verzí a migrace.
- [ ] Schéma a text jsou v souladu.

### 25.6 Přezkum rizik

- [ ] Byly prověřeny bezpečnostní aspekty.
- [ ] Byly posouzeny dopady na ochranu osobních údajů a původ dat.
- [ ] Jsou zohledněny aspekty přístupnosti.
- [ ] Jsou zohledněny aspekty internacionalizace.

### 25.7 Zveřejnění

- [ ] Vnitřní odkazy fungují.
- [ ] Normativní a informativní odkazy jsou odděleny.
- [ ] Historie změn byla aktualizována.
- [ ] Stránka se úspěšně vytvořila.
- [ ] Oficiální překlady uvádějí přesnou zdrojovou verzi.

## 26. Výjimky

Specifikace se MŮŽE od tohoto návodu odchýlit, pokud dané téma vyžaduje odlišný způsob prezentace nebo zápisu.

Výjimka MUSÍ:

- vyjádřete se jasně;
- mít omezený rozsah;
- uveďte důvod;
- zachovat interoperabilitu a kontrolovatelnost;
- být schváleno v rámci běžného schvalovacího procesu.

Pouhá praktičnost nebo zachování stávajícího formátování nestačí jako dostatečné odůvodnění pro trvalou výjimku.

## 27. Údržba této příručky

Tento průvodce se řídí zásadami pro životní cyklus a verzování specifikací nadace „OMI“.

Redakční opravy MOHOU být vydány jako opravy (patch). Kompatibilní doplňky MOHOU být vydány jako vedlejší verze. Změny, které narušují zavedenou strukturu dokumentu, identifikátory nebo výklad, vyžadují vydání hlavní verze.

Změny v této příručce BY MĚLY být posouzeny z hlediska jejich dopadu na:

- stávající specifikace;
- oficiální překlady;
- automatizované nástroje;
- dokumentace schématu;
- externí odkazy;
- Pracovní postup přispěvatelů.

## 28. Shrnutí

OMI Specifikace musí být více než jen vysvětlujícím textem. Jedná se o dlouhodobé technické dohody mezi autory, redaktory, vydavateli, repozitáři, vývojáři softwaru, systémy pro uchovávání dat a budoucími realizátory.

Jednotná struktura, přesná terminologie, testovatelné požadavky, trvalé identifikátory, ověřené příklady a zodpovědná redakční kontrola jsou proto nezbytnými součástmi samotné normy.
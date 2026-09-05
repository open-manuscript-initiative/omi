---
title: Zásady pro správu verzí
sidebar_position: 5
---

# Open Manuscript Initiative Zásady pro správu verzí

## Stav dokumentu

- **Typ dokumentu:** Zásady řízení
- **Stav:** Návrh
- **Verze:** 0.1.0
- **Jazyk normativních textů:** angličtina
- **Platí pro:** specifikace, schémata, formáty souborů, API, příklady, implementace, překlady a zveřejněnou dokumentaci týkající se OMI

## 1. Účel

Tato směrnice stanoví, jak web Open Manuscript Initiative (OMI) přiřazuje, interpretuje, zveřejňuje a stahuje verze.

Identifikátory verzí vyjadřují očekávání ohledně kompatibility. Nejedná se pouze o označení jednotlivých vydání. Verze OMI musí autorům, implementátorům, validátorům, vydavatelům, repozitářům a systémům pro uchovávání umožnit určit:

- která specifikační pravidla platí;
- zda se předpokládá vzájemná spolupráce mezi dvěma dokumenty nebo implementacemi;
- zda je aktualizace zpětně kompatibilní;
- zda je nutná migrace;
- které schéma ověřuje platnost dokumentu;
- jaké opravy či doplnění jsou v něm obsaženy;
- zda je daná verze i nadále podporována.

Tato zásada doplňuje dokument „[Specification Lifecycle](./specification-lifecycle.md)“. Stav životního cyklu popisuje stupeň vyspělosti; čísla verzí popisují změny a kompatibilitu. Specifikace může zůstat ve stavu „Draft“ i během vývoje několika verzí před verzí 1.0.

## 2. Rozsah působnosti

Tyto zásady upravují správu verzí následujících položek:

1. sada specifikací „OMI“;
2. jednotlivé dokumenty OMI-SPEC;
3. kanonický datový model OMI a schéma JSON;
4. OMI formáty rukopisů a kontejnerů;
5. OMI APIa smluv o protokolu;
6. normativní slovníky a registry;
7. profily shody;
8. vzorové příklady a zkušební přípravky;
9. referenční implementace, včetně Open Manuscript Studio;
10. oficiální překlady;
11. webové stránky OMI a sada publikačních materiálů.

Implementace třetích stran nemusí používat stejná čísla verzí produktu jako specifikace „OMI“. Software třetích stran však musí deklarovat, které verze a profily „OMI“ podporuje.

## 3. Normativní pojmy

Klíčová slova **MUSÍ**, **NESMÍ**, **POVINNÉ**, **MUSÍ**, **NESMÍ**, **MĚL BY**, **NEMĚL BY**, **DOPORUČENÉ**, **MŮŽE** a **VOLITELNÉ** je třeba vykládat jako normativní úrovně požadavků.

## 4. Rozměry jednotlivých verzí

OMI rozlišuje několik souvisejících, avšak nezávislých dimenzí verzí.

### 4.1 Verze sady specifikací

Verze „suite“ označuje koordinované vydání normy „OMI“, například:

```text
OMI 0.2
OMI 1.0
OMI 1.1
OMI 2.0
```

Vydání sady definuje otestovanou kombinaci verzí specifikací, schémat, slovníků, profilů a příkladů.

### 4.2 Verze individuální specifikace

Každý identifikátor trvalé specifikace má svou vlastní verzi:

```text
OMI-SPEC-005 Citation Model, version 0.3.0
```

Jednotlivá specifikace může být revidována, aniž by to okamžitě vedlo k vydání nové verze sady. V registru verzí sady je zaznamenána přesná verze každé zahrnuté specifikace.

### 4.3 Verze schématu

Strojově čitelné schéma má explicitní verzi, která je nezávislá na názvu souboru, revizi v úložišti a datu zveřejnění.

Příklad:

```json
{
  "$id": "https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json",
  "title": "Open Manuscript Manuscript Schema",
  "version": "1.0.0"
}
```

### 4.4 Verze formátu

Každý serializovaný rukopis nebo balíček typu „OMI“ MUSÍ uvádět verzi formátu potřebnou k jeho interpretaci.

Příklad:

```json
{
  "omi": {
    "format": "manuscript",
    "version": "1.0.0"
  }
}
```

Přesná struktura polí bude definována ve specifikaci formátu souboru. Deklarace MUSÍ zůstat strojově čitelná a NESMÍ záviset výhradně na příponě souboru.

### 4.5 Verze implementace

Softwarové produkty používají své vlastní verze, například:

```text
Open Manuscript Studio 0.4.0
```

Verze implementace NESMÍ být vykládána jako verze shody s dokumentem „OMI“. Implementace MUSÍ samostatně deklarovat podporované verze dokumentu „OMI“.

Příklad:

```text
Product version: 0.4.0
Supported OMI suite: 0.2
Supported manuscript format: 0.2.0–0.2.x
```

### 4.6 Překladová verze

Oficiální překlad MUSÍ obsahovat:

- normativní dokument v angličtině;
- přesná zdrojová verze;
- korekce překladu;
- stav synchronizace.

Příklad:

```text
Source: OMI-SPEC-005 version 1.1.0
Translation revision: hu-1
Status: synchronized
```

## 5. Formát čísla verze

OMI používá sémantická čísla verzí ve formátu:

```text
MAJOR.MINOR.PATCH
```

Příklady:

```text
0.3.0
1.0.0
1.2.4
2.0.0
```

U názvů balíčků určených pro veřejnost lze složku „patch“ vynechat, pokud má hodnotu nula:

```text
OMI 1.0
```

Kanonická hodnota čitelná strojem zůstává `1.0.0`.

## 6. Význam jednotlivých částí čísla verze

### 6.1 HLAVNÍ OBOR

Číslo verze MAJOR se změní, pokud daná verze obsahuje nekompatibilní normativní změny.

Mezi významné změny patří mimo jiné:

- odstranění povinné nebo dříve podporované datové struktury;
- změna významu stávajícího pole nebo objektu;
- stanovení povinnosti zadávat volitelná data bez odpovídajícího výchozího nastavení;
- změna sémantiky identifikátorů;
- změna pravidel zpracování tak, aby starší implementace, která splňovala požadavky, vedla k podstatně odlišným výsledkům;
- nahrazení serializačního modelu způsobem, který starší implementace nedokážou bezpečně přečíst;
- zavedení nekompatibilního chování funkce `API`;
- zneplatnění dříve platných dokumentů splňujících požadavky bez definovaného mechanismu kompatibility.

VÝZNAMNÁ verze MUSÍ obsahovat pokyny k migraci.

### 6.2 NEPLNOLETÝ

Číslo MINOR se mění, když je přidána kompatibilní funkce.

Mezi drobné změny může patřit:

- přidání volitelných polí;
- přidávání nových typů objektů prostřednictvím definovaného rozšiřovacího bodu;
- přidání nových volitelných profilů shody;
- přidávání nových hodnot výčtu v případech, kdy uživatelé již musí akceptovat neznámé hodnoty;
- přidání kompatibilních koncových bodů typu „API“;
- rozšíření ověřování o varování, která nezneplatňují obsah, který byl dosud platný;
- přidávání přiřazení k externím standardům;
- doplnění informativních pokynů nebo příkladů, které objasňují požadované chování.

Drobná aktualizace MUSÍ zachovat schopnost starších kompatibilních klientů zpracovávat dříve podporovaná základní data, i když budou ignorovat nově zavedené volitelné informace.

### 6.3 OPRAVA

Číslo PATCH se mění v případě kompatibilních oprav a upřesnění.

Změna v opravě může zahrnovat:

- oprava redakčních chyb;
- oprava nefunkčních odkazů;
- vyjasnění nejednoznačného textu bez změny zamýšleného chování;
- úprava příkladů tak, aby odpovídaly stávajícím normativním pravidlům;
- oprava příliš širokého nebo příliš úzkého omezení schématu v případě, kdy zamýšlené pravidlo již bylo jednoznačné;
- zveřejňování oprav;
- opravy překladů;
- oprava nenormativních nástrojů nebo dokumentace.

Oprava NESMÍ zavádět novou povinnou funkci ani vědomě narušovat funkčnost implementací, které jsou v souladu se specifikací.

## 7. Verze starší než 1.0

Verze nižší než `1.0.0` znamenají, že příslušná specifikace, schéma nebo formát ještě nedosáhly svého prvního stabilního závazku kompatibility.

Příklady:

```text
0.1.0
0.2.0
0.2.3
```

Během fáze „`0.x`“:

- v rámci VERZE S DROBNÝMI ZMĚNAMI MOHOU nastat nekompatibilní změny;
- Verze PATCH by MĚLY zůstat zpětně kompatibilní v rámci stejné řady MINOR;
- každá změna s dopadem na kompatibilitu MUSÍ být zdokumentována;
- migrace BY MĚLY být poskytovány, je-li to možné;
- Implementace NESMÍ prohlašovat dlouhodobou kompatibilitu založenou výhradně na verzi starší než 1.0;
- Zveřejněné dokumenty by MĚLY zachovat své původní prohlášení o verzi i poté, co již existuje novější schéma.

Fáze „`0.x`“ neznamená povolení k nekontrolovaným změnám. Každé vydání podléhá i nadále požadavkům na kontrolu, seznam změn a archivaci.

## 8. Závazek stability na úrovni 1,0

Verze `1.0.0` představuje první stabilní základnu kompatibility s OMI.

Než se komponenta dostane do fáze „`1.0.0`“, MUSÍ splňovat příslušné požadavky zásady „Specification Lifecycle“, včetně:

- jasně vymezený rozsah;
- sjednocená terminologie;
- splnit všechny normativní požadavky;
- stabilní identifikátory;
- v příslušných případech schémata čitelná strojem;
- kritéria shody;
- důkazy o implementaci;
- testování interoperability;
- bezpečnostní a konzervační hlediska;
- pravidla migrace z nejnovější verze před verzí 1.0;
- veřejné projednání.

Po zavedení zásady „`1.0.0`“ vyžadují změny, které nejsou zpětně kompatibilní, vydání nové MAJOR verze, pokud již nebyl součástí stabilní specifikace výslovný mechanismus zajištění kompatibility.

## 9. Definice kompatibility

### 9.1 Zpětná kompatibilita

Novější implementace je zpětně kompatibilní, pokud dokáže správně zpracovat obsah, který je platný v rámci podporované starší verze, aniž by vyžadovala úpravy, s výjimkou případů, kdy starší obsah závisí na stažené nebezpečné funkci zdokumentované v zásadách.

### 9.2 Kompatibilita s budoucími verzemi

Starší implementace je dopředu kompatibilní, pokud dokáže bezpečně zpracovávat novější obsah, obvykle tak, že ignoruje volitelná neznámá rozšíření, přičemž je v případě potřeby zachovává.

OMI usiluje o omezenou dopřednou kompatibilitu. Implementace nemusí rozumět neznámé sémantice, ale MUSÍ bezpečně selhat a NESMÍ neznámá data tiše přeinterpretovat.

### 9.3 Kompatibilita v obou směrech

Kompatibilita v obou směrech znamená, že obsah lze načíst a uložit bez ztráty informací, které musí daná implementace zachovat.

Spotřebitel, který nerozumí určitému rozšíření, MŮŽE i přesto splňovat požadavky, pokud toto rozšíření zachová beze změn v souladu s pravidly pro rozšíření.

### 9.4 Kompatibilita chování

Behaviorální kompatibilita se týká výsledků zpracování, nikoli pouze platnosti schématu. Dvě verze jsou behaviorálně kompatibilní, pokud zůstávají ekvivalentní normativní interpretace, validace, ukotvení, řešení citací a povinnosti vykreslení u stávajícího obsahu.

## 10. Pravidla kompatibility pro datové modely

### 10.1 Volitelné doplňky

Nové volitelné vlastnosti se obvykle považují za DROBNÉ změny, pokud:

- jejich absence má jasný význam;
- starší spotřebitelé je mohou ignorovat nebo si je ponechat;
- nemění výklad stávajících polí.

### 10.2 Požadované doplňky

Přidání povinné vlastnosti je obvykle VÝZNAMNÁ změna, pokud:

- je definována deterministická výchozí hodnota;
- stávající platné dokumenty zůstávají v platnosti nebo je lze aktualizovat bez ztráty významu;
- mechanismus kompatibility již měl normativní charakter.

### 10.3 Odvoz majetku

Odstranění vlastnosti představuje VÝZNAMNOU změnu. Před jejím odstraněním by MĚLO následovat označení za zastaralé.

### 10.4 Přejmenování

Přejmenování vlastnosti představuje ZÁSADNÍ změnu, pokud není starý název i nadále akceptován prostřednictvím zdokumentovaného aliasu nebo v rámci přechodného období.

### 10.5 Změny typu

Změna typu nebo kardinality vlastnosti se obvykle považuje za ZÁSADNÍ změnu.

### 10.6 Výčty

Přidání hodnot výčtu je považováno za DROBNOU změnu pouze v případě, že uživatelé musí akceptovat neznámé hodnoty. V opačném případě se jedná o VÝZNAMNOU změnu.

Odstranění nebo předefinování hodnoty výčtu představuje ZÁVAŽNOU změnu.

### 10.7 Výchozí nastavení

Změna výchozího nastavení, která má vliv na interpretaci nebo výstup, je MAJOR. Oprava zdokumentovaného výchozího nastavení tak, aby odpovídalo již normativnímu chování, může být PATCH, pokud důkazy o interoperabilitě potvrdí zamýšlené chování.

## 11. Zpracování neznámých dat a přípon

Pro podporu kompatibilního vývoje:

- specifikace BY MĚLY definovat explicitní rozšiřovací body;
- Implementace MUSÍ rozlišovat mezi neznámými daty a neplatnými daty;
- neznámé rozšíření NESMÍ být interpretovány jako známá základní sémantika;
- procesory BY MĚLY zachovat data s neznámou příponou při přenosu tam a zpět, pokud to formát vyžaduje;
- validátoři BY MĚLI určit jmenný prostor nebo profil, který je zodpovědný za dané rozšíření;
- Rozšíření NESMÍ přepsat základní sémantiku bez zavedení nového kompatibilního profilu nebo změny hlavní verze.

## 12. Verze schématu

### 12.1 Neměnná zveřejněná schémata

Zveřejněné schéma identifikované kanonickou URL s verzí MUSÍ být neměnné.

Například obsah dostupný na adrese:

```text
https://openmanuscript.org/schemas/omi-manuscript-1.0.schema.json
```

NESMÍ být bez upozornění nahrazeny pravidly, která se liší svým účinkem.

Opravy vyžadují buď:

- URL schématu na úrovni nové opravy; nebo
- mechanismus oprav s explicitním označením verze, který zachovává původní artefakt.

### 12.2 Kanonické a zjednodušené URL adresy

OMI MŮŽE zveřejnit nečíslovanou praktickou URL adresu, například:

```text
https://openmanuscript.org/schemas/omi-manuscript.schema.json
```

Tato URL adresa může odkazovat na nejnovější doporučené stabilní schéma a NESMÍ být použita jako jediný identifikátor v archivačních dokumentech.

Normativní a archivované dokumenty BY MĚLY odkazovat na neměnné schéma s verzemi.

### 12.3 Identifikátory schémat

Každé schéma MUSÍ obsahovat:

- kanonický `$id`;
- explicitní verze;
- odkazy na příslušné specifikace OMI-SPEC a testovací sady;
- stav publikace;
- poznámky k kompatibilitě, je-li to relevantní.

### 12.4 Dialekt schématu

Změna dialektu schématu JSON je rozhodnutí, které má význam z hlediska kompatibility. Změna dialektu MŮŽE být NEZNÁMÁ, pokud přijatá množina instancí a sémantika validace zůstanou ekvivalentní. V opačném případě se jedná o VÝZNAMNOU změnu.

## 13. Verze formátů souborů

### 13.1 Sebeidentifikace

Každý soubor nebo kontejner typu „OMI“ MUSÍ vnitřně identifikovat svůj formát a verzi.

Přípony souborů a typy MIME jsou užitečná metadata pro směrování, jako jediný indikátor verze však nestačí.

### 13.2 Chování čtenářů

Čtenář MUSÍ:

- přijímat verze, které výslovně podporuje;
- bezpečně odmítnout nebo umístit do karantény nepodporované hlavní verze;
- jasně uveďte, že se jedná o nepodporovanou verzi;
- zabránit destruktivnímu převodu bez souhlasu uživatele nebo oprávnění na základě zásad;
- při pokusu o migraci zachovat původní artefakt.

Čtečka MŮŽE akceptovat novější VERZI S NEZNÁMÝMI ZMĚNAMI, pokud pravidla kompatibility povolují neznámá volitelná pole a rozšíření.

### 13.3 Chování zapisovače

Autor MUSÍ uvést přesnou verzi, kterou vydává.

Pokud je vyžadována interoperabilita se staršími systémy, MĚL BY autor vydat nejstarší kompatibilní verzi, která věrně zachycuje obsah.

Autor NESMÍ označit obsah jako starší verzi, pokud v něm používá funkce, které v dané verzi nejsou platné.

### 13.4 Migrace

Přechod mezi verzemi formátu MUSÍ být explicitní a reprodukovatelný.

Migrační nástroj BY MĚL vytvořit:

- zdrojová verze;
- cílová verze;
- migrační nástroj a verze;
- časové razítko;
- varování;
- chyby nebo přibližné hodnoty;
- nevyřešená rozšíření;
- výsledek ověření;
- odkaz na původní artefakt.

## 14. Správa verzí vAPIu

OMI APIVerze smluv MUST se musí vydávat nezávisle na vydáních serverových produktů.

### 14.1 Změny v rozhraní „API“

Mezi zásadní změny patří:

- odstranění koncových bodů;
- změna povinných polí žádosti;
- změna významu odpovědi;
- změna sémantiky ověřování;
- úprava smluv týkajících se stavových kódů;
- změna stránkování, řazení nebo chování při souběžném zpracování způsobem, který není kompatibilní.

Zásadní změny vyžadují novou hlavní verzi API.

### 14.2 Výběr verzeAPI

Specifikace protokolu „API“ BY MĚLA definovat jasný mechanismus vyjednávání verze, například:

- typ média s verzí;
- cesta s číslem verze;
- explicitní záhlaví protokolu;
- vyjednaný profil schopností.

Tento mechanismus MUSÍ být důsledně zdokumentován a NESMÍ záviset na nedokumentovaných heuristikách serveru.

### 14.3 Přechodné období

Funkce stabilní verze API by MĚLY být před odstraněním označeny jako zastaralé. Oznámení o zastaralosti by MĚLO obsahovat:

- dotčená funkce;
- náhrada;
- nejstarší verze pro odstranění;
- pokyny k migraci;
- předpokládané období podpory.

## 15. Slovní zásoba a verzování registru

Řízené slovníky, seznamy rolí, typy objektů, schémata identifikátorů a registry profilů vyžadují jasně stanovená pravidla vývoje.

Položka registru MUSÍ mít stabilní identifikátor. Zobrazované popisky se mohou měnit, aniž by se tím změnila identita položky.

Přidání položky do registru se obvykle považuje za MINOR. Odstranění nebo předefinování stávajícího identifikátoru se považuje za MAJOR, pokud daná položka nebyla výslovně označena jako experimentální nebo měla lokální platnost.

Zastaralé záznamy BY MĚLY zůstat vyhodnotitelné a MUSÍ uvádět svůj náhradní záznam, pokud takový existuje.

## 16. Verze profilů shody

Profil shody definuje omezené nebo rozšířené použití standardu „OMI“ pro pracovní postup, obor, vydavatele, repozitář nebo cíl výměny dat.

Každý profil MUSÍ obsahovat následující údaje:

- identifikátor profilu;
- verze profilu;
- požadované verze balíku OMI a specifikací;
- další omezení;
- rozšiřující slovní zásoba;
- zásady kompatibility;
- zdroje pro ověřování.

Profil NESMÍ uvádět kompatibilitu s verzí OMI, s jejíž základními požadavky je v rozporu.

## 17. Vydání sad specifikací

Při vydání sady aplikací typu „OMI“ MUSÍ být zveřejněn manifest vydání.

Manifest obsahuje následující údaje:

- verze balíku;
- datum vydání;
- stav životního cyklu;
- včetně verzí OMI-SPEC;
- verze schémat a hashové hodnoty;
- verze slovníku a registru;
- profily shody;
- příklady a verze testovacích sad;
- známá omezení;
- podporované migrační cesty;
- předchozí verze balíčku.

Verze balíku NESMÍ naznačovat, že každá jednotlivá specifikace má stejné číslo verze.

## 18. Sladění verzí

Komponenty MOHOU používat vlastní sémantické verze. Nedoporučuje se uměle vynucovat, aby všechny komponenty typu „OMI“ používaly stejné číslo, protože to znesnadňuje pochopení skutečného rozsahu změn.

Manifest sady zajišťuje soulad.

Příklad:

```yaml
suite: 1.1.0
specifications:
  OMI-SPEC-001: 1.0.1
  OMI-SPEC-002: 1.1.0
  OMI-SPEC-005: 1.0.0
schemas:
  manuscript: 1.1.0
  annotation: 1.0.2
```

## 19. Prohlášení o podpoře při zavádění

Implementace, která prohlašuje, že podporuje standard „OMI“, MUSÍ zveřejnit strojově čitelné nebo jasně strukturované prohlášení o podpoře.

Prohlášení BY MĚLO obsahovat:

- název a verze implementace;
- podporované verze balíků;
- podporované verze formátů;
- podporované profily;
- možnost čtení;
- možnost zápisu;
- schopnost ověřování;
- zachování neznámých přípon;
- známé odchylky;
- výsledky testovací sady.

Následující nároky jsou odlišné:

- **čte soubor „OMI“ verze 1.0**;
- **napíše „OMI 1.0“**;
- **ověřuje OMI 1.0**;
- **odpovídá specifikaci „OMI“ verze 1.0 (profil Core)**;
- **zachovává nepodporovaná rozšíření OMI verze 1.x**.

Obecné prohlášení typu „kompatibilní s normouOMI“ nestačí k formálnímu prohlášení o shodě.

## 20. Verze referenční implementace

Open Manuscript Studio a další software spravovaný na adrese OMIse řídí vlastními pravidly sémantického číslování verzí.

Softwarová verze MŮŽE podporovat více verzí OMI. V poznámkách k verzi MUSÍ být kompatibilita výslovně uvedena.

Změna uživatelského rozhraní programu Studio nevyžaduje změnu verze specifikace „OMI“, pokud nedochází ke změně standardizovaných dat, výměny dat nebo normativního chování.

Naopak, nová verze specifikace OMI nevyžaduje, aby ji každá implementace okamžitě přijala.

## 21. Správa verzí překladů

### 21.1 Normativní zdroj

Není-li výslovně uvedeno jinak, je angličtina normativním jazykem specifikací OMI.

### 21.2 Stav synchronizace

Každý úřední překlad MUSÍ uvádět jeden z těchto stavů:

- **Synchronizováno:** odráží kompletní identifikovanou verzi zdroje;
- **Čeká se na aktualizaci:** zdroj se změnil a překlad se právě reviduje;
- **Archivováno:** překlad se vztahuje ke starší podporované verzi zdrojového kódu;
- **Staženo:** překlad je nespolehlivý nebo již není aktualizován.

### 21.3 Opravy týkající se pouze překladu

Oprava, která mění pouze revizi překladu, nemění verzi normativní specifikace.

Oprava překladu NESMÍ bez upozornění změnit odkaz na zdrojovou verzi.

### 21.4 Střety zájmů

V případě, že se informativní překlad liší od normativního anglického textu, má přednost anglický text. Překlad BY MĚL být neprodleně opraven a oprava zaznamenána.

## 22. Správa verzí dokumentace na webu

Na těchto webových stránkách mohou být zveřejňovány aktuální, připravované i archivované sady dokumentace.

Dokumentace ke Stable MUSÍ zůstat dostupná na trvalých URL adresách s verzí.

Příklad:

```text
/docs/1.0/
/docs/1.1/
/docs/latest/
/docs/development/
```

`latest` jedná se o praktický alias, který NESMÍ být použit jako jediný archivní odkaz.

Dokumentace ke stabilní verzi NESMÍ být dodatečně měněna způsobem, který by pozměnil její normativní význam. Opravy se vydávají prostřednictvím errata nebo opravné verze.

## 23. Příklady a zkušební přípravky

Příklady a testovací sestavy pro ověření shody MUSÍ uvádět verzi OMI, na kterou se vztahují.

Zkušební zařízení, které mění očekávané normativní chování, vyžaduje odpovídající změnu specifikace nebo verze sady testů.

Příklady NESMÍ být považovány za normativní, pokud jsou v rozporu s normativním textem nebo schématem. Takové rozpory představují chyby, které je třeba opravit.

## 24. Kandidáti na vydání a předběžné verze

MŮŽOU být použity identifikátory předběžného vydání:

```text
1.0.0-alpha.1
1.0.0-beta.2
1.0.0-rc.1
```

Jejich význam je:

- **alpha:** neúplná, experimentální implementace nebo integrace specifikace;
- **beta:** cílová verze s kompletní funkcionalitou, u níž však dosud nebyly vyřešeny problémy s kontrolou nebo interoperabilitou;
- **rc:** kandidát na vydání, u kterého se předpokládá, že se stane finální verzí, pokud nebudou nalezeny závažné chyby.

Předběžné verze NESMÍ být prezentovány jako stabilní verze.

Předběžná verze MŮŽE obsahovat změny oproti finálnímu vydání. Změny mezi kandidátskými verzemi by se MĚLY omezit na opravy chyb a opravy interoperability, které brání vydání.

## 25. Vytvořit metadata

Metadata sestavení MOHOU identifikovat konkrétní sestavení implementace, aniž by došlo ke změně kompatibility:

```text
1.0.0+build.42
1.0.0+20260806.sha.abc1234
```

Metadata sestavení NESMÍ měnit normativní výklad.

## 26. Zastaralost

Označení jako zastaralé znamená, že daná funkce nebo verze je sice stále podporována, neměla by se však používat v nových projektech.

Oznámení o zastaralosti MUSÍ obsahovat následující údaje:

- zastaralá položka;
- verze, ve které byla označena za zastaralou;
- důvod;
- doporučená náhrada;
- známé aspekty týkající se migrace;
- nejstarší verze, ve které může k odstranění dojít.

Samotné označení za zastaralé nestačí k tomu, aby kompatibilní procesor přestal číst stávající obsah.

## 27. Odstranění

Stabilní funkce je odstraněna pouze v rámci hlavní verze (MAJOR), s výjimkou případů, kdy je nutné ji odstranit okamžitě z důvodu závažného bezpečnostního, právního nebo integritního rizika.

Nouzové odstranění vyžaduje:

- veřejné upozornění;
- zdůvodnění podložené dokumentací;
- analýza dopadů;
- pokyny k uchovávání;
- alternativu, je-li to možné;
- výslovný záznam o výjimce.

## 28. Nahrazení

Nahrazená verze zůstává součástí historického záznamu.

Na stránce s publikací MUSÍ být uvedeno:

- nová verze;
- zda je nutná migrace;
- zda je stará verze i nadále podporována;
- datum ukončení podpory, je-li uvedeno.

Artefakty s verzí NESMÍ být smazány pouze proto, že byly nahrazeny novější verzí.

## 29. Politika podpory

U verzí starších než OMI 1.0 je podpora poskytována v rámci možností a je popsána v dokumentaci k jednotlivým verzím.

Po vydání verze 1.0 projektu „OMI“ by projekt MĚL zachovat:

- aktuální stabilní řada MAJOR;
- alespoň jedna zdokumentovaná migrační cesta z bezprostředně předchozí stabilní hlavní větve;
- bezpečnostní a integritní upozornění pro podstatně dotčené podporované verze;
- archivovaná schémata a dokumentace ke všem stabilním verzím.

Přesná období údržby MOHOU být stanovena v samostatném harmonogramu údržby.

## 30. Seznam změn

Každá zveřejněná verze MUSÍ obsahovat seznam změn.

Seznam změn MUSÍ rozlišovat:

- zásadní změny;
- kompatibilní doplňky;
- opravy;
- zastaralé prvky;
- stěhování;
- změny v oblasti bezpečnosti;
- požadavky na migraci;
- změny schématu;
- pouze redakční úpravy.

Záznam v seznamu změn BY MĚL odkazovat na příslušný problém, návrh, žádost o začlenění změn nebo záznam o rozhodnutí.

## 31. Dokumentace k migraci

Verze obsahující zásadní změny MUSÍ obsahovat dokumentaci k migraci.

Pokyny k migraci BY MĚLY obsahovat:

- dotčené struktury a chování;
- příklady „před a po“;
- automatizovaná transformační pravidla;
- omezení;
- očekávaná ztráta informací;
- kroky ověření;
- strategie vrácení změn;
- zpracování rozšíření;
- požadavky na původ.

## 32. Vyjednávání o verzi

V případech, kdy si systémy dynamicky vyměňují obsah typu „OMI“, MĚLY BY si vyjasnit své schopnosti, místo aby podporu předpokládaly na základě názvů produktů.

Jednání může zahrnovat:

- podporované verze balíků;
- podporované rozsahy formátů;
- profily;
- rozšíření;
- typy médií;
- úrovně ověřování;
- asymetrie čtení a zápisu.

Systém MUSÍ bezpečně selhat, pokud nelze dosáhnout shody ohledně kompatibilní verze.

## 33. Rozsahy verzí

Implementace MOHOU deklarovat rozsahy verzí.

Příklady:

```text
>=1.0.0 <2.0.0
1.1.x
1.0.0–1.2.3
```

Údaj o rozsahu znamená, že implementace byla navržena a otestována pro daný rozsah. NESMÍ se odvozovat pouze ze schválení schématu.

U archivačních metadat se upřednostňují přesné verze před rozsahy.

## 34. Reprodukovatelnost a integrita

Publikované artefakty verzí BY MĚLY obsahovat kryptografické hashové hodnoty.

Stabilní verze BY MĚLA být reprodukovatelná na základě zdrojového kódu s označenými verzemi a podle zdokumentovaných pokynů pro sestavení.

Tagy používané pro stabilní verze MUSÍ být neměnné.

Pokud je nutné artefakt vyměnit z důvodu chyby v publikaci nebo balení, MUSÍ být náhradnímu artefaktu přiděleno odlišné revizní číslo nebo číslo verze a původní incident MUSÍ být zdokumentován.

## 35. Štítky a větve v systému Git

Mezi doporučené štítky patří:

```text
omi-suite-v1.0.0
omi-spec-005-v1.1.0
schema-manuscript-v1.0.2
```

Vývojové větve a žádosti o začlenění nejsou verzemi.

Výchozí větev představuje probíhající vývoj a MŮŽE se lišit od nejnovější stabilní verze.

## 36. Data a verze

Data vydání poskytují historický kontext, nenahrazují však sémantické verze.

Identifikátory založené na datu MOHOU být zahrnuty do metadat a snímků, avšak normativní kompatibilita MUSÍ být sdělena prostřednictvím sémantické verze.

## 37. Rozhodovací postup

Pokud není jasné, o kolik se má verze zvýšit, musí redaktoři zvážit:

1. Způsobí tato změna neplatnost dříve platného obsahu?
2. Mění to stávající normativní význam?
3. Mohou starší implementace, které splňují specifikaci, bezpečně zpracovat nový obsah?
4. Je k tomu nutná migrace?
5. Zavádí to nějakou novou povinnou funkci?
6. Má to vliv na výsledky shody?
7. Mění to chování, které lze pozorovat zvenčí API?
8. Jedná se pouze o redakční změnu, nebo o opravu?

Pokud by rozumná implementace v souladu se specifikací mohla způsobit nefunkčnost obsahu nebo jej bez varování nesprávně interpretovat, jedná se o změnu způsobující nefunkčnost, která vyžaduje zvýšení čísla verze o MAJOR, případně zvýšení o MINOR ve fázi před verzí 1.0 s výslovnou dokumentací této změny způsobující nefunkčnost.

## 38. Příklady

### 38.1 Přidání volitelného jazykového tagu pro abstrakt

Změna: k abstraktnímu objektu byla přidána volitelná metadata typu „`language`“.

Výsledek po verzi 1.0: DROBNÁ ZMĚNA, za předpokladu, že starší uživatelé ji mohou ignorovat nebo zachovat.

### 38.2 Zavedení povinnosti pro každého autora používat formát „ORCID“

Změna: dosud volitelný parametr `ORCID` se stává povinným.

Důsledek: ZÁVAŽNÝ, protože stávající dokumenty a pracovní postupy přestanou platit.

### 38.3 Oprava chybně napsaného vlastnosti v příkladu

Změna: v příkladu bylo použito `contributer`, zatímco specifikace již vyžadovala `contributor`.

Výsledek: PATCH.

### 38.4 Přejmenování adresy `references` na `bibliography`

Změna: serializovaná vlastnost byla přejmenována a stará vlastnost byla zamítnuta.

Výsledek: VÝZNAMNÝ.

Pokud obě vlastnosti zůstanou během zdokumentovaného přechodu zachovány, může se jednat o MINOR, zatímco konečné odstranění zůstává MAJOR.

### 38.5 Přidání nového vztahu citace

Změna: Do otevřeného registru, jehož uživatelé musí akceptovat neznámé hodnoty, byl přidán záznam „`qualifies`“.

Výsledek: DROBNÝ.

Pokud byl výčet uzavřen a neznámé hodnoty byly neplatné, může být pro tuto změnu zapotřebí úroveň MAJOR.

### 38.6 Objasnění pořadí vyhodnocování kotev

Změna: text byl upřesněn tak, aby odpovídal jedinému chování, které je povoleno stávajícím algoritmem a testy.

Výsledek: PATCH.

Pokud by implementace umožňovaly dvě rozumné, ale vzájemně si odporující interpretace, výběr jedné z nich by mohl způsobit poruchu a vyžadovat změnu typu MAJOR.

## 39. Rekord v minimálním počtu propuštěných

Každý záznam o vydání v rámci programu „OMI“ MUSÍ obsahovat:

- název komponenty nebo sady;
- verze;
- stav životního cyklu;
- datum vydání;
- kanonická URL;
- zdrojový tag nebo commit;
- seznam změn;
- prohlášení o kompatibilitě;
- prohlášení o migraci;
- v příslušných případech hashové hodnoty artefaktů;
- informace o nahrazení;
- známé problémy.

## 40. Změny v zásadách

I tato směrnice o verzích má své vlastní verze.

Změna, která mění význam stávajících závazků týkajících se veřejných verzí, vyžaduje pečlivé posouzení a NESMÍ zpětně oslabit záruky, které již byly poskytnuty pro stabilní verze.

Objasnění zásad mohou představovat změny na úrovni opravy. Nové kompatibilní postupy řízení mohou představovat drobné změny. Zásadní změny závazků ohledně kompatibility vyžadují vydání nové hlavní verze zásad.

## 41. Shrnutí

OMI využívá sémantické verze k vyjádření kompatibility mezi specifikacemi, schématy, formáty, API, implementacemi, profily a překlady.

Základními zásadami jsou:

- verze jsou jasně uvedeny a strojově čitelné;
- zveřejněné artefakty s verzemi jsou neměnné;
- zásadní změny jsou zřetelně vyznačeny a doplněny pokyny k migraci;
- schémata a dokumenty určují přesná pravidla, která používají;
- verze produktu se liší od shody se specifikací;
- stabilní verze zůstávají archivovány a lze na ně odkazovat;
- tvrzení o kompatibilitě musí být přesná a ověřitelná;
- překlady uvádějí svou normativní zdrojovou verzi;
- Manifest sady sjednocuje komponenty s nezávislým číslováním verzí.

Tato pravidla umožňují webové stránce OMI se dále rozvíjet a zároveň zachovávat vědecké dokumenty, důvěru v její fungování a dlouhodobou interoperabilitu.

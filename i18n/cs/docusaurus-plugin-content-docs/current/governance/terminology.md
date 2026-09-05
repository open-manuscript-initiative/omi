---
title: OMI Terminologie a definice
sidebar_label: Terminologie a definice
sidebar_position: 50
---

# Open Manuscript Initiative Terminologie a definice

## Metadata dokumentu

| Pole | Hodnota |
|---|---|
| Typ dokumentu | Zásady týkající se terminologie v oblasti správy a centrální slovník |
| Stav | Návrh |
| Verze | 0.1.0 |
| Normativní jazyk | Angličtina |
| Vztahuje se na | Specifikace, schémata, profily, registry, příklady, implementace a oficiální překlady na adrese OMI |

## 1. Účel

Tento dokument definuje společnou terminologii projektu „Open Manuscript Initiative“ (OMI).

Jeho účelem je zajistit, aby stejný termín měl stejný význam v celé sadě specifikací OMI. Rovněž rozlišuje pojmy, které jsou v textových editorech, publikačních systémech, repozitářích, správcích citací a redakčních platformách často považovány za synonyma.

Účelem definic v tomto dokumentu je:

- poskytnout společnou koncepční terminologii;
- zabránit rozporuplným definicím mezi jednotlivými specifikacemi;
- podporují přesná schémata a API;
- zlepšit interoperabilitu mezi nezávislými implementacemi;
- zajistit jednotnost maďarského, německého a budoucích překladů;
- usnadnit výklad a testování požadavků na shodu;
- rozlišovat sémantické objekty od jejich vizuálních nebo serializovaných reprezentací.

## 2. Oprávnění a použití

Pojmy, jejichž význam se vztahuje k více specifikacím, MUSÍ používat definice uvedené v tomto dokumentu.

Specifikace typu „OMI“ MŮŽE definovat užší specializovaný význam pro svůj vlastní rozsah, ale MUSÍ:

- určit ústřední pojem, který je upřesňován;
- výslovně uvést užší význam;
- vyhněte se rozporům s hlavní definicí;
- vyhněte se tomu, abyste tento termín bez upozornění použili pro jiný pojem.

Pokud není nějaký pojem zde definován, platí příslušná specifikace OMI. Pokud není pojem definován ani v tomto dokumentu, ani ve specifikaci OMI, platí jeho běžný technický význam.

Anglické termíny v tomto dokumentu jsou standardními termíny pro normativní sadu anglických specifikací. Oficiální překlady MUSÍ zachovat koncepční rozdíly i v případech, kdy se v jiném jazyce běžně používá jedno slovo pro několik anglických termínů.

## 3. Normativní jazyk

Klíčová slova **MUSÍ**, **NESMÍ**, **MĚL BY**, **NEMĚL BY** a **MŮŽE** vyjadřují normativní úrovně požadavků, jsou-li napsána velkými písmeny.

Slova jako „musí“, „měl by“ nebo „může“, psaná malými písmeny, jsou součástí běžného textu a nepředstavují samostatné požadavky na shodu.

## 4. Zásady terminologie

### 4.1 Koncepce před označením

Termín označuje pojem. Tento pojem zůstává neměnný i v případě, že:

- uživatelské rozhraní používá přeložený nebo zkrácený název;
- dojde ke změně názvu souboru;
- vizuální znázornění používá odlišné formulace;
- vnější norma používá jiný termín;
- v dané disciplíně se používá místní synonymum.

### 4.2 Sémantická identita před prezentací

OMI rozlišuje objekt od jeho vizuálního znázornění.

Příklady:

- výskyt citace není samotný naformátovaný text citace;
- objekt nadpisu není konkrétní velikost písma;
- anotace není barevné zvýraznění;
- bibliografický záznam není řetězec bibliografického záznamu;
- rukopis není soubor typu „DOCX“ ani „PDF“.

### 4.3 Místní identita a vnější identita

Objekt typu „OMI“ může mít stabilní lokální identifikátor a jeden nebo více externích identifikátorů.

Lokální identifikátor určuje identitu v rámci dokumentu, balíčku nebo systémového kontextu jazyka OMI. Externí identifikátor propojuje objekt s identifikátorovým systémem mimo tento kontext.

Žádný z těchto typů automaticky nenahrazuje ten druhý.

### 4.4 Role a osoby jsou od sebe oddělené

Agentem je osoba nebo organizace. Autor, redaktor, recenzent, překladatel, vydavatel a poskytovatel finančních prostředků jsou role, které může agent v daném kontextu zastávat.

Role NESMÍ být považována za trvalou vlastnost agenta.

### 4.5 Obsah a pracovní postup jsou oddělené

Vědecký objekt se může podílet na pracovních postupech souvisejících s editací, recenzí, překladem, publikací nebo uchováváním. Stav pracovního postupu obvykle nemění sémantický typ objektu.

### 4.6 Normativní a informativní významy

Definice v glosáři může popisovat určitý pojem, aniž by definovala všechny strojově čitelné vlastnosti potřebné k jeho serializaci. Příslušná specifikace OMI definuje jeho kompletní normativní datový model a pravidla zpracování.

## 5. Základní pojmové vztahy

Hlavní pojmy z knihy „OMI“ spolu souvisejí následovně:

```text
Scholarly work
    ↓ represented during its lifecycle as
Manuscript
    ↓ expressed through one or more
Document instances or versions
    ↓ composed of identifiable
Scholarly objects
    ↓ serialized into
OMI documents and packages
    ↓ processed by
Implementations
    ↓ rendered or exported as
Publications and exchange formats
```

Hlavní referenční pojmy se vzájemně vztahují takto:

```text
Citable resource
    ↓ described by
Bibliographic record
    ↓ selected into
Manuscript reference library
    ↓ referenced by
Citation occurrence
    ↓ formatted through
Citation style and publication profile
    ↓ displayed as
Rendered citation or bibliography entry
```

Hlavní pojmy v oblasti anotace spolu souvisejí následovně:

```text
Scholarly object or content range
    ↓ addressed by
Anchor
    ↓ used as target by
Annotation
    ↓ may participate in
Review, editorial, translation, or discussion workflow
```

## 6. Rukopis, dokument, soubor a publikace

Tyto pojmy NESMÍ být v normativním textu OMI používány jako zaměnitelné synonyma.

### 6.1 Vědecká práce

Intelektuální nebo tvůrčí vědecký celek, který je posuzován nezávisle na jakémkoli konkrétním souboru, vydání, jazykové verzi či formátu publikace.

Vědecké dílo může mít více rukopisů, verzí, překladů, vydání nebo publikací.

### 6.2 Rukopis

Vědecká práce prezentovaná jako upravitelný, strukturovaný intelektuální objekt v průběhu celého svého životního cyklu.

Rukopis může obsahovat:

- strukturovaný obsah;
- metadata;
- přispěvatelé;
- odkazy a bibliografické záznamy;
- anotace a recenzní objekty;
- vztahy mezi jazyky a překlady;
- informace o verzi a původu;
- profily publikace a validace;
- související zdroje.

Rukopis není definován jednou serializací ani jedním softwarovým produktem.

### 6.3 Dokument

Konkrétní strukturovaná reprezentace obsahu rukopisu a souvisejících dat v definovaném kontextu zpracování.

Rukopis může obsahovat více instancí dokumentu, například:

- aktuální dokument, který lze upravovat;
- předložený dokument;
- revidovaná verze;
- schválený dokument;
- zveřejněný snímek;
- přeložený dokument.

V názvech vlastností a názvech specifikací na adrese OMI se pojem *dokument* obvykle vztahuje na strukturovaná data, nikoli pouze na vizuální posloupnost stránek.

### 6.4 Instance dokumentu

Jedna identifikovatelná instance dokumentu v konkrétní verzi, stavu nebo na konkrétní hranici zpracování.

Instance dokumentu může být v závislosti na stavu svého životního cyklu proměnná nebo neměnná.

### 6.5 Zdrojový dokument

Dokument vybraný jako autoritativní podklad pro danou operaci, jako je překlad, vykreslení, ověření, porovnání nebo export.

Zdrojový dokument je kontextuální. Tento pojem nemusí nutně znamenat nejstarší historickou verzi.

### 6.6 Kanonický dokument

Instance dokumentu označená jako autoritativní pro daný účel.

Mezi příklady patří:

- kanonický upravitelný rukopis;
- kanonická, uznávaná verze;
- standardní zdroj pro zobrazení publikací.

Kanonický status MUSÍ specifikovat svůj rozsah a platnost. Dokument „OMI“ nevychází z předpokladu, že jeden dokument je kanonický pro všechny účely.

### 6.7 Soubor

Sekvence uložených nebo přenášených bajtů, která je identifikována jako jeden objekt souborového systému nebo transportní objekt.

Soubor může obsahovat:

- jeden dokument typu „OMI“ se sériovým číslem;
- balíček nebo kontejner typu „OMI“;
- publikační činnost;
- importovaný externí dokument;
- související zdroj.

Soubor je jednotka pro ukládání nebo přenos dat, nikoli nutně sémantická jednotka.

### 6.8 Formát souboru

Definovaná syntaxe a soubor pravidel kódování pro znázornění dat v souboru nebo v proudu bajtů.

Formát souboru sám o sobě nestanovuje veškerý sémantický význam. Sémantiku definují specifikace ve formě textu na adrese OMI; schémata a specifikace formátu pak definují strukturu a kódování čitelné pro počítač.

### 6.9 Serializace

Proces kódování datového modelu do souboru, proudu bajtů nebo reprezentace zprávy.

Deserializace je opačná operace: rekonstrukce datových objektů ze serializované podoby.

### 6.10 Balíček

Přenositelná jednotka obsahující dokument typu „OMI“ spolu s nulovým nebo více souvisejícími zdroji, seznamy, schématy, mediálními soubory, záznamy o původu nebo podpisy.

Balíček může být tvořen jedním souborem kontejneru nebo adresářovou strukturou.

### 6.11 Kontejner

Technická struktura sloužící ke seskupování a adresování více souborů nebo zdrojů jako jedné jednotky, kterou lze přenášet nebo uchovávat.

Kontejner není totožný se sémantickým balíčkem, který obsahuje. Stejný model balíčku může být zakódován pomocí různých technologií kontejnerů.

### 6.12 Zveřejnění

Zveřejněná vědecká publikace určená k šíření, citování, zpřístupnění nebo uchování.

Publikace může být poskytnuta ve formě souboru typu „HTML“, „PDF“, „EPUB“, „JATS“, „XML“, tištěné verze, strukturovaných metadat nebo v jiné formě.

Publikace obvykle vychází z konkrétní verze rukopisu nebo dokumentu, nenahrazuje však sémantický zdroj.

### 6.13 Konečná verze

Verze publikace, kterou příslušný vydavatel nebo vydavatelský orgán formálně označil za definitivní vydanou verzi.

„Verze záznamu“ je pojem související se stavem publikace. Neznamená to, že dřívější či pozdější verze rukopisu přestávají existovat.

### 6.14 Publikace

Generovaná podoba určená pro konkrétní cílovou publikaci.

Mezi příklady patří:

- dostupné na adrese HTML;
- PDF připravené k tisku;
- EPUB;
- JATS XML;
- Metadata o uložení v Crossref;
- Metadata DataCite;
- archivní balíčky.

Výstup publikace lze reprodukovat na základě zdrojového dokumentu a profilu publikace.

## 7. Objekty a struktura dokumentu

### 7.1 Předmět

Identifikovatelná jednotka zobrazená v datovém modelu OMI.

Objekt může mít:

- typ;
- stabilní identifikátor;
- vlastnosti;
- vztahy;
- informace o životním cyklu;
- původ;
- rozšíření.

Používání obecného pojmu *objekt* by se MĚLO vyhnout, pokud je k dispozici konkrétnější termín.

### 7.2 Předmět vědeckého bádání

Identifikovatelná sémantická entita v rámci rukopisu nebo s ním spojená.

Vědecký objekt je definován spíše svým vědeckým významem a souvislostmi než svým vizuálním vzhledem.

Mezi příklady patří:

- rukopis;
- oddíl;
- odstavec;
- nadpis;
- citát;
- obrázek;
- tabulka;
- rovnice;
- poznámka;
- výskyt citace;
- bibliografický záznam;
- poznámka;
- rozhodnutí o přezkumu;
- tvrzení přispěvatele.

### 7.3 Strukturální objekt

Vědecký objekt, jehož hlavním účelem je uspořádání obsahu dokumentu.

Mezi příklady patří kontejnery pro dokumenty, oddíly, seznamy, tabulky, skupiny obrázků a bibliografie.

### 7.4 Obsahový objekt

Vědecký objekt, jehož hlavním účelem je zprostředkovat intelektuální obsah.

Mezi příklady patří odstavec, citát, blok kódu, vzorec, obrázek, tabulka, poznámka a záznam v seznamu literatury.

Stejný typ objektu může plnit jak strukturální, tak obsahové funkce.

### 7.5 Blokový objekt

Obsahový nebo strukturální objekt, který v hierarchii dokumentu zaujímá pozici na úrovni bloku.

Mezi typické blokové objekty patří:

- odstavec;
- nadpis;
- seznam;
- blok citátu;
- obrázek;
- tabulka;
- blok rovnice;
- blok kódu;
- notový blok.

Stav bloku se týká struktury dokumentu, nikoli vizuálního rozložení CSS.

### 7.6 Objekt v textu

Objekt vložený do toku obsahu blokového objektu.

Mezi příklady patří:

- výskyt citace;
- odkaz;
- značka poznámky v textu;
- vložený vzorec;
- sémantický důraz;
- pojmenovaná entita;
- propojený identifikátor.

### 7.7 Oddíl

Hierarchický strukturální objekt, který sdružuje související obsah na základě sémantického nebo redakčního záměru.

Sekce může obsahovat nadpis, typ, identifikátor, podsekce a obsah bloku.

Vizuální číslování je otázkou vykreslování, ledaže by profil přisuzoval číslování sémantický význam.

### 7.8 Nadpis

Štítek přiřazený k oddílu nebo jinému definovanému strukturálnímu členění.

Úroveň nadpisu vyjadřuje hierarchii. NESMÍ být odvozena pouze z velikosti písma nebo vizuálního stylování.

### 7.9 Odstavec

Jednotka prózy nebo podobného textového obsahu na úrovni bloku.

Odstavec může obsahovat vložené objekty a textové úseky.

### 7.10 Poznámka

Doplňkový odborný materiál, který souvisí s obsahem, ale není nutně součástí hlavního toku čtení.

Mezi příklady patří poznámky pod čarou, poznámky na konci textu, poznámky autora, poznámky redakce a poznámky překladatele.

Poznámka není totéž co anotace. Poznámka je součástí rukopisu; anotace je objekt, který se vztahuje k obsahu nebo k jinému objektu.

### 7.11 Zdroj

Digitální nebo fyzický objekt spojený s rukopisem, bibliografickým záznamem, balíčkem nebo publikací.

Mezi příklady patří obrázky, datové soubory, zvukové a video soubory, doplňkové soubory, schémata a externí webové zdroje.

Termín MUSÍ specifikovat, zda je zdroj zabudován, zabalen, odkazován nebo externě vyřešen, pokud má toto rozlišení vliv na zpracování.

## 8. Identita a identifikátory

### 8.1 Identita

Vlastnost, díky níž lze daný objekt rozpoznat jako stejný subjekt napříč odkazy, verzemi, operacemi či systémy.

Identita je koncepčně oddělena od zobrazovacích štítků a proměnlivých metadat.

### 8.2 Identifikátor

Hodnota, která slouží k rozlišení nebo označení entity v rámci definovaného identifikačního systému nebo rozsahu.

Specifikace využívající identifikátor MUSÍ definovat nebo odkazovat na:

- jeho rozsah;
- jeho syntaxe;
- očekávání ohledně jeho jedinečnosti;
- jeho pravidla pro srovnávání;
- své předpoklady ohledně perzistence;
- jeho chování při řešení, pokud k němu dochází.

### 8.3 Lokální identifikátor

Identifikátor, jehož jedinečnost je zaručena pouze v rámci definovaného rozsahu dokumentu, balíčku, pracovního prostoru, úložiště nebo implementace (OMI).

Lokální identifikátor může zůstat nezměněn při exportu i importu, avšak jeho platnost je určena kontextem, v němž se nachází.

### 8.4 Globální identifikátor

Identifikátor, který má být jedinečný napříč nezávislými systémy nebo správními doménami.

Globální jedinečnost nemusí nutně znamenat trvalost ani možnost identifikace.

### 8.5 Trvalý identifikátor

Identifikátor, který je spravován tak, aby zůstal v čase neměnný, i když se změní umístění nebo metadata.

Mezi příklady patří například DOI, Handle, ARK, ORCID, ROR, URN a další spravovaná schémata.

Trvalý identifikátor NESMÍ být označen jako trvale vyhodnotitelný, pokud příslušný identifikační systém tuto záruku neposkytuje.

### 8.6 Externí identifikátor

Identifikátor přidělený systémem, registrem, orgánem, úložištěm, vydavatelem nebo katalogem mimo aktuální rozsah identit OMI.

Mezi příklady patří:

- DOI pro účely publikace;
- ORCID pro osobu;
- ROR identifikátor organizace;
- ISBN pro konkrétní vydání publikace;
- číslo přírůstku v repozitáři;
- archivní referenční kód.

### 8.7 Kanonický identifikátor

Identifikátor určený jako preferovaný identifikátor pro danou operaci nebo kontext.

Kanonický status nezbavuje platnosti aliasy ani jiné identifikátory. Pravidlo výběru MUSÍ být zdokumentováno.

### 8.8 Alias

Alternativní identifikátor, název, označení nebo trasa, které v daném kontextu odkazují na stejnou entitu.

Aliasy NESMÍ být považovány za samostatné entity pouze proto, že se liší jejich řetězce.

### 8.9 Resolver

Procesor nebo služba, která přijímá identifikátor nebo dotaz a pokouší se vyhledat, načíst nebo porovnat odpovídající entitu nebo metadata.

Neúspěšné vyřešení nemusí nutně znamenat, že identifikátor je neplatný.

## 9. Agenti, identita a přínos

### 9.1 Zástupce

Entita, která je schopna zastávat určitou roli, učinit tvrzení, provést akci nebo být předmětem přiřazení.

Mezi hlavní typy agentů patří:

- osoba;
- organizace;
- konsorcium;
- projekt;
- služba;
- neznámý nebo historický činitel.

### 9.2 Osoba

Lidský pracovník.

Objekt „osoba“ může obsahovat jména, identifikátory, příslušnost k organizacím, kontaktní údaje a informace o původu. NESMÍ se vycházet z předpokladu, že jeden neměnný řetězec jména plně reprezentuje danou osobu.

### 9.3 Organizace

Kolektivní nebo institucionální subjekt, jehož identita je nezávislá na identitě kteréhokoli jednotlivého člena.

Mezi příklady patří univerzity, nakladatelství, laboratoře, archivy, knihovny, spolky a grantové agentury.

### 9.4 Přispěvatel

Agent spojený s vědeckým objektem, rukopisem, publikací, událostí pracovního postupu nebo jinou entitou z databáze „OMI“ prostřednictvím jedné nebo více rolí přispěvatele.

„Contributor“ je kontextový vztah, nikoli samostatný typ agenta.

### 9.5 Autor

Spoluautor, jehož úloha zahrnuje intelektuální autorství vědecké práce nebo její určité části.

OMI neurčuje, zda příspěvek splňuje zásady týkající se autorství stanovené časopisem, oborem, právními předpisy nebo etickými zásadami. Profily a redakční zásady mohou stanovit další kritéria.

### 9.6 Editor

Osoba, která zastává redakční funkci v souvislosti s rukopisem, publikací, bibliografickým dílem nebo pracovním postupem.

Pokud může dojít k nejednoznačnosti, MUSÍ být role upřesněna, například:

- redaktor rukopisů;
- redaktor časopisu;
- editor svazků;
- korektor;
- technický redaktor;
- editor specifikací.

### 9.7 Recenzent

Osoba pověřená posouzením rukopisu, předmětu, nároku, postupu, překladu nebo publikačního výstupu v rámci recenzního řízení.

Identita recenzenta může být veřejná, omezená, pseudonymní nebo skrytá v závislosti na příslušném pracovním postupu a zásadách přístupu.

### 9.8 Překladatel

Spolupracovník odpovědný za vyhotovení nebo revizi překladu odborného obsahu či metadat.

Překladatel je role. Přeložený dokument BY MĚL zachovat vazbu na příslušný zdrojový dokument a zdrojovou verzi.

### 9.9 Vydavatel

Osoba odpovědná za vydání nebo oficiální šíření publikace.

Role vydavatele se liší od softwaru, který zajišťuje vykreslování nebo hosting.

### 9.10 Úloha příspěvku

Kontrolovaná nebo rozšiřitelná hodnota popisující, jakým způsobem agent přispěl v daném kontextu.

Mezi příklady patří autor, redaktor, překladatel, recenzent, správce dat, přispěvatel do softwaru a ilustrátor.

Role příspěvku BY MĚLA být vyjádřena nezávisle na pořadí přispěvatelů a nezávisle na totožnosti aktéra.

### 9.11 Členství

Kontextuální vztah mezi aktérem, jímž je obvykle osoba, a organizací, projektem nebo institucionální jednotkou.

Přidružení může mít:

- funkce nebo pozice;
- datum začátku a konce;
- zdroj;
- tvrzení specifické pro daný rukopis;
- identifikátor externí organizace.

Nesmí se předpokládat, že příslušnost je nadčasová.

### 9.12 Pořadí přispěvatelů

Výslovné určení pořadí spolupracovníků pro danou roli nebo výstup.

Pořadí přispěvatelů nemusí vždy odpovídat rozsahu příspěvku, abecednímu pořadí ani pořadí zobrazení. Příslušná specifikace nebo profil MUSÍ uvádět příslušný výklad.

### 9.13 Přispěvatel, který zaslal korespondenci

Přispěvatel určený jako kontaktní osoba pro komunikaci ohledně konkrétního rukopisu, příspěvku, publikace nebo pracovního postupu.

Příslušný status není hodnocením autorství a MŮŽE se vztahovat na více než jednoho přispěvatele.

## 10. Metadata a původ

### 10.1 Metadata

Strukturované informace, které popisují, identifikují, spravují, uvádějí do kontextu, propojují nebo podporují zpracování určité entity.

Metadata mohou být:

- popisný;
- administrativní;
- technické;
- konstrukční;
- týkající se práv;
- související s původem;
- týkající se ochrany.

Metadata nemusí být nutně méně důležitá nebo méně důvěryhodná než samotný obsah.

### 10.2 Hodnota metadat

Jedno strukturované tvrzení spojené s vlastností metadat.

Hodnota metadat může kromě své primární hodnoty obsahovat také informace o jazyku, původu, míře spolehlivosti, době platnosti nebo zdroji.

### 10.3 Původ

Informace popisující původ, správu, autorství, odvození, transformaci nebo historii tvrzení o entitě nebo hodnotě.

Původ může určovat:

- pověřený zástupce;
- zdrojový systém;
- identifikátor zdroje;
- čas vytvoření nebo načtení;
- transformační operace;
- software a verze;
- stav důvěryhodnosti nebo ověření;
- vztah k dřívějším verzím.

### 10.4 Tvrzení

Výrok vyjádřený v datech typu „OMI“, který uvádí hodnotu, vztah, stav nebo skutečnost týkající se entity.

Tvrzení může mít vlastní původ a míru spolehlivosti. Zobrazení typu „OMI“ samo o sobě nezaručuje, že dané tvrzení je pravdivé.

### 10.5 Autoritativní hodnota

Hodnota vybraná jako rozhodující pro určitý účel v souladu s výslovným pravidlem o pravomoci.

Autorita může vycházet z autora, vydavatele, registru, redakčního rozhodnutí, ověřeného zdroje identifikátoru nebo jiné zdokumentované zásady.

Autoritativní postavení NESMÍ být odvozováno výhradně na základě aktuálnosti.

### 10.6 Zdroj

Entita, systém, dokument, subjekt nebo proces, ze kterého byly získány údaje nebo obsah.

Tento termín by MĚL být upřesněn v případech, kdy může dojít k nejednoznačnosti, například jako zdroj metadat, zdroj překladu, zdroj citace nebo zdroj importu.

### 10.7 Důvěra

Zdokumentované posouzení míry jistoty spojené s porovnáním, tvrzením, extrakcí, sesouhlasením nebo odvozeným vztahem.

Důvěryhodnost nenahrazuje původ a NESMÍ být prezentována jako objektivní pravděpodobnost, pokud ji daná metoda takto nedefinuje.

## 11. Kotvy a odkazy v dokumentech

### 11.1 Kotva

Stabilní nebo identifikovatelný odkaz na místo, rozsah, objekt nebo stav v rámci vědeckého obsahu.

Kotva může označovat:

- objekt;
- místo pro vložení;
- textový úsek;
- řada předmětů;
- buňka tabulky;
- oblast obrázku;
- verze nebo stav dokumentu.

Ankora je mechanismus pro odkazování. Nejedná se o poznámku ani citaci, která ji využívá.

### 11.2 Cíl kotvy

Objekt, rozsah obsahu, umístění nebo stav, na který odkazuje kotva.

### 11.3 Rozlišení kotvy

Proces určení aktuálního cíle, který představuje kotva.

Výsledkem může být:

- jeden cíl;
- více cílů;
- zhoršený přibližný cíl;
- nevyřešený výsledek;
- neplatný výsledek.

### 11.4 Stabilní kotva

Kotva navržená tak, aby i při povolených úpravách či transformacích nadále odkazovala na zamýšlený sémantický cíl.

Stabilní neznamená neměnný. Model kotvy definuje, jaké změny by kotva měla zvládnout.

### 11.5 Poloha

Místo mezi jednotlivými obsahovými jednotkami nebo uvnitř nich v daném stavu dokumentu.

Hrubé posuny znaků představují pozice, ale nemusí být nutně stabilními kotvami.

### 11.6 Dosah

Uspořádaný úsek mezi počáteční a koncovou hranicí v definovaném obsahovém prostoru.

Rozsah MŮŽE být prázdný, pokud příslušná specifikace povoluje sémantiku vkládacího bodu.

### 11.7 Odkazy

Rukopisný prvek, který odkazuje z jednoho místa nebo objektu na jiný objekt, identifikovaný interně či externě, za účelem orientace nebo jako vědecký odkaz.

Křížový odkaz se liší od bibliografického citátu, ačkoli oba mohou využívat kotvy a identifikátory.

### 11.8 Nevyřešený odkaz

Odkaz, jehož cíl nelze v aktuálním kontextu zpracování identifikovat ani k němu získat přístup.

Nevyřešený odkaz může být opravitelný a NESMÍ být automaticky považován za neznámý odkaz nebo nesprávně zadaný identifikátor.

## 12. Anotace a recenze

### 12.1 Anotace

Vědecký objekt, který spojuje soubor komentářů nebo strukturovaných informací s jedním či více cíli.

Anotace obvykle obsahuje:

- identifikátor;
- jeden nebo více cílů;
- text poznámky;
- motivace nebo typ;
- tvůrce nebo odpovědná osoba;
- časová razítka a původ;
- informace o viditelnosti nebo přístupu;
- stav životního cyklu.

### 12.2 Cíl anotace

Entita, na kterou se vztahuje anotace.

Cíl může být reprezentován pomocí kotvy, externího identifikátoru, identifikátoru objektu nebo jiného mechanismu pro označení cíle definovaného v modelu anotací.

### 12.3 Tělo poznámky

Obsah nebo strukturované tvrzení, které anotace přiřazuje ke svému cíli.

Tělo může obsahovat text, navrhované změny, klasifikace, odkazy, rozhodnutí nebo strukturovaná data specifická pro danou oblast.

### 12.4 Důvody pro vytvoření anotace

Hodnota vyjadřující účel anotace.

Mezi příklady patří například komentování, revize, opravy, kladení otázek, překládání, třídění, propojování nebo zvýrazňování.

Motivace sama o sobě neurčuje pravomoci v rámci pracovního postupu.

### 12.5 Komentář

Anotace, jejíž hlavní část tvoří rozvláčný komentář.

Ne každá anotace je komentářem; anotace mohou také obsahovat strukturovaná rozhodnutí, klasifikace nebo strojově generované závěry.

### 12.6 Shrnutí

Strukturovaný proces hodnocení nebo předmět hodnocení týkající se rukopisu, vědeckého díla, publikačního výstupu nebo specifikace.

Pojem MUSÍ být upřesněn, pokud se vztahuje na proces, a nikoli na výsledný objekt přezkumu.

### 12.7 Objekt kontroly

Vědecký objekt obsahující nebo představující recenzní obsah, závěry, doporučení, otázky, rozhodnutí nebo související poznámky.

### 12.8 Kolo hodnocení

Ohraničená fáze v rámci revizního procesu, během níž se na definovanou verzi rukopisu nebo stav podání vztahuje definovaný soubor revizních činností.

### 12.9 Redakční rozhodnutí

Strukturované rozhodnutí přijaté v rámci redakčního postupu, jako je například žádost o revizi, schválení, zamítnutí nebo vrácení k technické opravě.

Redakční rozhodnutí se liší od doporučení recenzenta.

### 12.10 Navrhovaná změna

Strukturovaný návrh na vložení, odstranění, nahrazení, přesunutí nebo jinou úpravu obsahu či metadat.

Navrhovaná změna neovlivní platnou verzi dokumentu, dokud nebude schválena v rámci autorizovaného pracovního postupu.

## 13. Terminologie v oblasti bibliografie a citování

### 13.1 Zdroj, na který lze odkazovat

Entita, která může být předmětem vědecké citace.

Mezi příklady patří publikace, datové soubory, software, archivní materiály, právní dokumenty, obrázky, audiovizuální díla, normy, webové zdroje a nepublikované rukopisy.

### 13.2 Bibliografický záznam

Strukturovaný popis citovaného nebo citovatelného zdroje, nezávislý na konkrétním výskytu citace či umístění v rukopisu.

Bibliografický záznam může obsahovat:

- lokální a externí identifikátory;
- názvy;
- přispěvatelé;
- typ zdroje;
- informace o vydání nebo vytvoření;
- vztahy mezi kontejnery;
- jazyk;
- místa přístupu;
- původ;
- vztahy mezi verzemi a stavy.

### 13.3 Bibliografická identita

Určení, které dílo, vyjádření, projev, verzi nebo položku bibliografický záznam popisuje.

Bibliografická identita NESMÍ být odvozena pouze z citací s podobným formátem.

### 13.4 Knihovna rukopisů

Soubor bibliografických záznamů na úrovni rukopisu, vybraných pro účely možného či skutečného citování, ověření, seznamů doporučené literatury nebo publikační činnosti.

Záznam může existovat, aniž by byl v danou chvíli citován.

### 13.5 Záznam v referenční knihovně

Zahrnutí či zobrazení bibliografického záznamu v referenční knihovně rukopisů, které se vztahuje konkrétně k danému rukopisu.

Záznam může obsahovat informace o stavu konkrétního rukopisu, jako například „citováno“, „necitováno“, „ověřeno“, „vyloučeno z bibliografie“ nebo „vyžaduje revizi“.

### 13.6 Citace

Obecný vědecký úkon nebo vztah, při kterém se jedna část rukopisu odvolává na zdroj, který lze citovat.

V popisech normativních modelů BY se pro objekt „rukopis“ MĚL používat přesnější termín *výskyt citace* a pro jeho prezentaci termín *zobrazená citace*.

### 13.7 Výskyt citací

Odkaz z konkrétního místa v rukopisu nebo z konkrétního předmětu na záznam v referenční knihovně nebo na bibliografický záznam.

Jedna citace může obsahovat:

- kotva;
- lokátor;
- předpona;
- přípona;
- režim citování;
- záměr citace;
- členství ve skupině;
- poznámky k jednotlivým událostem.

Více výskytů citace může odkazovat na stejný bibliografický záznam.

### 13.8 Cíl citací

Bibliografický záznam, záznam v referenční knihovně nebo jiný citovatelný zdroj identifikovaný výskytem citace.

### 13.9 Lokátor

Strukturované informace identifikující konkrétní část nebo pozici v rámci citovaného zdroje.

Mezi příklady patří stránka, rozsah stránek, kapitola, oddíl, odstavec, obrázek, tabulka, řádek, folio, časové razítko, verš, článek, věta, archivní jednotka nebo verze softwaru.

Lokátor není součástí obecného bibliografického popisu, pokud nepopisuje zdroj jako celek.

### 13.10 Skupina citací

Uspořádaný soubor citací, které jsou v daném místě rukopisu uvedeny nebo zpracovány společně.

Každý člen si zachovává svůj vlastní cíl a lokátor.

### 13.11 Režim citací

Hodnota popisující, jakým způsobem se citace podílí na diskurzu nebo prezentaci.

Mezi příklady patří poznámky v závorkách, narativní poznámky, citace v poznámkách, poznámky uvedené pouze v bibliografii nebo poznámky o zdroji.

Způsob citování se liší od citačního stylu.

### 13.12 Účel citace

Strukturované uvedení vědeckého vztahu nebo důvodu, proč je daný zdroj citován.

Mezi příklady patří: podpoření tvrzení, vyvrácení tvrzení, rozšíření, rozbor, srovnání, reprodukce, uvedení údajů nebo popis postupu.

Uvedení zdroje je volitelné, pokud to profil nevyžaduje.

### 13.13 Styl citování

Soubor pravidel pro formátování citací a seznamů literatury.

Mezi příklady patří styly APA, Chicago, MLA, Vancouver, OSCOLA a styly specifické pro jednotlivé časopisy.

Citovací styl nedefinuje identitu ani sémantickou strukturu citovaného zdroje.

### 13.14 Zobrazený odkaz

Text prezentace nebo značkovací kód vygenerovaný na základě výskytu citace, příslušného bibliografického záznamu, citačního stylu, jazykových nastavení a profilu publikace.

Zobrazí se vykreslená citace, nikoli autoritativní objekt citace.

### 13.15 Seznam použité literatury

Část publikace nebo rukopisu, která představuje vybrané bibliografické záznamy v souladu s definovanými pravidly pro zařazení a zobrazení.

Bibliografie se liší od knihovny odkazů v rukopise. Knihovna může obsahovat záznamy, které nejsou citovány ani zobrazeny.

### 13.16 Záznam v bibliografii

Jedno zobrazení nebo serializovaná podoba bibliografického záznamu v rámci bibliografie.

### 13.17 Odkaz

Příliš obecný pojem, který MŮŽE znamenat odkaz, citaci, bibliografický záznam, ukazatel nebo zdroj.

Normativní dokumenty OMI BY MĚLY vyhýbat se používání neupřesněného pojmu *odkaz*, pokud je míněn některý z následujících významů:

- výskyt citace;
- bibliografický záznam;
- záznam v referenční knihovně;
- odkaz;
- odkaz na identifikátor;
- externí normativní odkaz.

### 13.18 Práce

V bibliografickém modelování se jedná o abstraktní intelektuální či tvůrčí výtvor nezávislý na konkrétním jazyku, vydání nebo formě šíření.

### 13.19 Výraz

Konkrétní intelektuální nebo jazykové ztvárnění díla, jako je například překlad nebo upravený text.

### 13.20 Projev

Publikace nebo distribuční podoba díla, jako je například konkrétní vydání, formát nebo vydání vydavatelem.

### 13.21 Položka

Jednotlivý fyzický nebo digitální exemplář určitého vydání, u něhož je důležitá identita na úrovni konkrétního výtisku.

OMI Profily MOHOU používat zjednodušený bibliografický model, pokud nejsou tyto rozdíly nutné.

### 13.22 Srovnání

Proces porovnávání kandidátských bibliografických záznamů nebo metadatových tvrzení za účelem zjištění, zda popisují stejný objekt, související verze nebo odlišné objekty.

### 13.23 Odstraňování duplicit

Proces identifikace a správy duplicitních záznamů o stejné entitě.

Deduplikace může vést ke sloučení, propojení, zachování samostatných verzí nebo k výzvě k ručnímu potvrzení.

### 13.24 Stažení

Formální status označující, že publikace nebo vědecký objekt byl oprávněným zdrojem vyřazen ze spolehlivého vědeckého rejstříku.

Stažený objekt není z bibliografické historie odstraněn. Jeho stav a vztahy BY MĚLY zůstat znázornitelné.

### 13.25 Oprava

Zveřejněná nebo zaznamenaná změna, jejímž účelem je opravit chybu v dřívějším vědeckém díle nebo publikaci.

Vztahy korekce MUSÍ rozlišovat mezi objektem provádějícím korekci a objektem, na kterém se korekce provádí.

## 14. Jazyk a překlad

### 14.1 Jazyk

Přirozený nebo formální jazyk spojený s obsahem nebo metadaty.

Při identifikaci jazyka pomocí strojově čitelných údajů BY SE MĚLY v příslušných případech používat jazykové značky podle BCP 47.

### 14.2 Jazyk dokumentu

Hlavní jazyk deklarovaný pro konkrétní instanci dokumentu.

Vícejazyčný dokument může obsahovat více než jeden relevantní jazyk. Hlavní jazyk dokumentu nemá přednost před jazykovými značkami u jednotlivých objektů nebo úseků textu.

### 14.3 Původní jazyk

Jazyk, v němž byl daný vědecký objekt, dílo nebo dokument původně vytvořen pro popisovaný vztah.

Stav v původním jazyce závisí na kontextu a MĚL BY identifikovat příslušný zdrojový objekt nebo verzi.

### 14.4 Překlad

Vědecký objekt nebo dokument, který převádí obsah z původního jazyka do cílového jazyka a zároveň zachovává jasnou souvislost s původním textem.

Překlad není totéž co lokalizace.

### 14.5 Zdrojový jazyk

Jazyk zdrojového obsahu použitého pro překlad.

### 14.6 Cílový jazyk

Jazyk, do kterého se obsah překládá.

### 14.7 Překladová jednotka

Identifikovatelný zdrojový objekt, cílový objekt nebo zarovnaná skupina objektů, která se používá jako jednotka překladu a synchronizace.

Překladovou jednotkou může být odstavec, nadpis, poznámka, buňka tabulky, hodnota metadat nebo jiný vědecký objekt.

### 14.8 Srovnání překladů

Strukturovaný vztah mezi jedním nebo více zdrojovými objekty a jedním nebo více objekty v cílovém jazyce.

Přirazení může být typu „jeden k jednomu“, „jeden k mnoha“, „mnoho k jednomu“ nebo může být nevyřešené.

### 14.9 Stav překladu

Pracovní postup nebo stav synchronizace spojený s přeloženým obsahem.

Mezi příklady mohou patřit nepřeložené, předběžné, zrevidované, schválené, zastaralé a nahrazené dokumenty.

### 14.10 Zastaralý překlad

Překlad, u něhož došlo po jeho vytvoření nebo schválení ke změně zdrojového obsahu, a proto je nutná kontrola synchronizace.

Zastaralé nemusí nutně znamenat nesprávné.

### 14.11 Lokalizace

Přizpůsobení uživatelského rozhraní, zobrazení, formátování nebo chování závislého na národním prostředí pro konkrétní jazyk nebo region.

Lokalizace může zahrnovat překlad, ale obvykle nevytváří vztah vědeckého překladu mezi jednotlivými rukopisnými objekty.

### 14.12 Transliterace

Zobrazení textu z jednoho písemného systému v jiném podle stanoveného postupu.

Transliterace není překlad.

## 15. Verze, změny a stavy

### Verze 15.1

Identifikovatelný stav entity, který se podle modelu verzování odlišuje od dřívějších či pozdějších stavů.

Verze se může vztahovat na rukopis, dokument, objekt, specifikaci, schéma, balíček, profil, překlad nebo implementaci.

### 15.2 Revize

Verze vytvořená na základě jedné nebo více změn stávající entity.

Některé specifikace mohou rozlišovat mezi drobnými revizemi a oficiálně vydanými verzemi.

### 15.3 Změna

Zaznamenaná operace nebo změna, která upravuje obsah, metadata, strukturu, vztahy, oprávnění nebo stav.

### 15.4 Sada změn

Soubor změn seskupených do jedné jednotky, kterou lze posuzovat, přiřadit nebo zpracovat jako transakci.

### 15.5 Snímek

Neměnné nebo záměrně stanovené znázornění entity v určitém okamžiku jejího životního cyklu.

Snímek lze použít pro účely předložení, recenze, publikace, auditu, citace nebo uchování.

### 15.6 Zproštění odpovědnosti

Verze, která byla oficiálně vydána nebo distribuována s uvedenými metadaty o identitě, stavu a vydání.

Zápis do repozitáře ještě automaticky neznamená vydání.

### 15.7 Návrh

Stav životního cyklu, který označuje, že obsah nebo specifikace se může ještě podstatně změnit.

Pokud jde o vyspělost specifikace, platí formální definice uvedená v zásadách životního cyklu specifikace.

### 15.8 Odevzdaná verze

Snímek dokumentu formálně poskytnutý v rámci redakčního, recenzního, repozitářového nebo publikačního procesu.

### 15.9 Schválená verze

Verze rukopisu přijatá k publikování nebo jiný definovaný výsledek, obvykle před finálním formátováním pro publikaci nebo nezávisle na něm.

### 15.10 Zveřejněná verze

Verze dokumentu nebo publikace určená k šíření.

Pokud existuje více publikovaných verzí, je nutné tento termín upřesnit.

### 15.11 Neměnné

Není povoleno provádět změny při zachování stejné identity a označení verze.

Neměnná entita může být nahrazena novou verzí.

### 15.12 Změnitelné

Je povoleno provádět změny při zachování stávající funkční identity v souladu s platnými pravidly pro životní cyklus a audit.

### 15.13 Odbočka

Větev vývoje, která se odklání od jiné verze a může být později sloučena, porovnána nebo udržována samostatně.

### 15.14 Sloučení

Operace, která kombinuje změny nebo historie z více větví či verzí.

Sloučení MUSÍ definovat způsob řešení konfliktů a původ dat v případech, kdy by mohla být ohrožena sémantická integrita.

## 16. Spolupráce a přístup

### 16.1 Pracovní prostor

Prostředí pro spolupráci spojené s jedním nebo více rukopisy, dokumenty, zdroji, členy a nastaveními pracovních postupů.

Pracovní prostor je koncept spolupráce nezávislý na konkrétní implementaci. Nevyžaduje žádný konkrétní model úložiště ani hostingu.

### 16.2 Člen pracovního prostoru

Uživatel, jemuž byla v pracovním prostoru přidělena role nebo oprávnění.

Členství je kontextové a může zahrnovat status, dobu platnosti, zdroj pozvánky a rozsah přístupu.

### 16.3 Úloha

Konkrétní soubor povinností nebo očekávaných činností, které má agent v daném kontextu vykonávat.

Role není automaticky sadou oprávnění, i když zásada může role přiřazovat k oprávněním.

### 16.4 Oprávnění

Oprávnění k provedení určité operace s určitým zdrojem nebo v určitém rozsahu.

Mezi příklady patří zobrazení, komentování, úpravy, překlad, kontrola, správa členů, publikování a export.

### 16.5 Řízení přístupu

Zásady a mechanismy, které určují, zda může určitý agent nebo implementace provést operaci na zdroji.

### 16.6 Vlastník

Role v pracovním prostoru, která má podle platných zásad spolupráce hlavní odpovědnost nebo pravomoc v rámci tohoto pracovního prostoru.

Vlastnictví NESMÍ být vykládáno jako vlastnictví duševního vlastnictví, pokud tento vztah není výslovně uveden v samostatných právních zásadách.

### 16.7 Spoluautor

Autor, který se podílí na sdíleném rukopisu nebo pracovním prostoru společně s dalšími autory.

Spoluautor je role založená na spolupráci; sama o sobě neurčuje pořadí přispěvatelů ani zásady týkající se autorství.

### 16.8 Prohlížeč

Role, která má oprávnění k přístupu k definovanému obsahu, aniž by jej mohla měnit.

### 16.9 Pozvánka

Strukturovaná žádost, která agentovi nabízí členství nebo roli v pracovním prostoru či pracovním postupu.

### 16.10 Kontrolní událost

Zaznamenaná událost související s odpovědností, původem, bezpečností nebo historií pracovního postupu.

Auditní událost může identifikovat aktéra, akci, cíl, časové razítko, kontext a výsledek.

## 17. Specifikace, profily a shoda

### 17.1 Specifikace „OMI“

Registrovaný technický dokument, který definuje normativní struktury, chování, omezení, slovníky nebo požadavky na interoperabilitu a je označen trvalým identifikátorem `OMI-SPEC-NNN`.

### 17.2 Sada specifikací

Koordinovaný soubor specifikací, schémat, registrů, profilů, příkladů a zdrojů pro ověření shody v rámci iniciativy „OMI“, zveřejněný jako jediná verze na adrese OMI.

### 17.3 Dokument o správě a řízení

Dokument, který definuje proces projektu, pravomoci, životní cyklus, správu verzí, redakční postupy, terminologii nebo pravidla pro přispívání.

Dokument o správě a řízení nemusí být nutně specifikací implementace.

### 17.4 Normativní

Nezbytné pro dodržení, výklad nebo implementaci příslušné specifikace.

Normativní obsah stanoví povinnosti nebo závazné definice.

### 17.5 Informativní

Uvádí se za účelem vysvětlení, uvedení do kontextu, poskytnutí pokynů, zdůvodnění nebo ilustrace, aniž by tím vznikaly samostatné požadavky na shodu.

### 17.6 Požadavek

Ověřitelná normativní povinnost nebo oprávnění vyjádřené ve specifikaci.

### 17.7 Shoda

Splnění příslušných normativních požadavků pro deklarovanou verzi specifikace, třídu shody a profil.

Shoda se vždy vztahuje na určitý rozsah. Neupřesněné tvrzení, jako například „kompatibilní sOMI“, není pro formální použití dostačující.

### 17.8 Třída shody

Pojmenovaná kategorie implementační role s definovanou sadou příslušných požadavků.

Mezi příklady patří producent, spotřebitel, validátor, renderer, editor, importér, exportér a procesor pro uchovávání.

### 17.9 Prohlášení o shodě

Prohlášení, že konkrétní implementace a verze splňují definovanou specifikaci, verzi, třídu a profil, s výhradou zdokumentovaných omezení.

### 17.10 Profil

Definovaná sada omezení, výchozích nastavení, výběrů nebo rozšíření, která se aplikují na jednu nebo více specifikací formátu „OMI“ pro konkrétní účel, komunitu, obor, pracovní postup nebo cílovou publikaci.

Profil NESMÍ být v rozporu se základní specifikací, kterou profiluje, aniž by na to upozornil.

### 17.11 Profil publikací

Profil, který definuje požadavky a chování při vykreslování pro jeden nebo více cílových formátů publikace.

Může definovat:

- požadovaná metadata;
- povolené stavby;
- pořadí sekcí;
- styl citace;
- poznámka k vykreslení;
- výstupní formáty;
- požadavky na přístupnost;
- validační pravidla.

### 17.12 Validační profil

Profil, který určuje, která validační pravidla, úrovně závažnosti, slovníky a omezení se v daném kontextu uplatňují.

### 17.13 Rozšíření

Doplněk k základnímu modelu nebo chování jazykaOMI, který byl deklarován prostřednictvím autorizovaného mechanismu rozšíření.

Rozšíření NESMÍ bez upozornění předefinovat základní sémantiku.

### 17.14 Rozšiřovací bod

Místo nebo mechanismus výslovně navržený tak, aby umožňoval kompatibilní rozšíření.

### 17.15 Prostor jmen rozšíření

Stabilní rozsah identifikátorů, který slouží k odlišení názvů, vlastností, typů nebo hodnot definovaných v daném rozšíření od základních názvů systému „OMI“ a od názvů v jiných rozšířeních.

### 17.16 Registr

Udržovaná sbírka stabilních identifikátorů a souvisejících metadat pro řízené hodnoty, identifikátory dokumentů, profily, schopnosti, typy médií, role nebo rozšíření.

### 17.17 Položka registru

Jedna identifikovaná položka v registru, včetně informací o jejím stavu, významu, původu a životním cyklu.

### 17.18 Schopnost

Deklarovaná funkce, vlastnost, formát, profil nebo způsob zpracování, které daná implementace podporuje.

Schopnost není totéž co oprávnění. Schopnost popisuje, co systém dokáže; oprávnění popisuje, k čemu je aktér oprávněn.

### 17.19 Jádro

Minimální společný normativní model nebo soubor schopností požadovaný příslušnou definicí shody podle normy OMI.

Slovo *core* MUSÍ uvádět svou verzi nebo kontext specifikace, pokud by mohlo dojít k nejednoznačnosti.

## 18. Schémata, validace a zpracování

### 18.1 Schéma

Strojově čitelná formalizace strukturálních omezení pro část datového modelu „OMI“.

Schéma může ověřovat typy, povinné vlastnosti, kardinalitu, syntaxi a vybrané vztahy. Automaticky však nedefinuje veškerou sémantiku ani chování při zpracování.

### 18.2 Schéma „JSON“

Jazyk schémat používaný k vyjádření strojově ověřitelných omezení pro reprezentace typu „JSON“ byl přijat ve specifikaci „OMI“.

### 18.3 Ověření

Proces vyhodnocování dat, obsahu, struktury, vztahů nebo chování na základě definovaných pravidel.

Ověření může zahrnovat:

- ověření syntaxe;
- ověření schématu;
- strukturní validace;
- sémantická validace;
- ověření referenční integrity;
- ověření profilu;
- ověření připravenosti k publikaci.

### 18.4 Validátor

Implementace nebo komponenta, která provádí ověření a vykazuje výsledky.

### 18.5 Pravidlo ověření

Identifikované pravidlo vyhodnocené během validace.

Validační pravidlo BY MĚLO definovat rozsah, podmínku, závažnost, hlášení a příslušnou specifikaci nebo profil.

### 18.6 Výsledek validace

Jeden z uváděných výsledků vyhodnocení validačního pravidla ve vztahu k cíli.

### 18.7 Zpráva o ověření

Strukturovaný soubor výsledků validace spolu s kontextovými údaji, jako je verze validátoru, verze specifikace, profil, čas a identita cíle.

### 18.8 Platné

Splnění příslušných validačních pravidel pro deklarované schéma, specifikaci a profil.

Pokud existuje více možných sad pravidel, NESMÍ se použít výraz „Valid“ bez upřesnění příslušné sady pravidel.

### 18.9 Neplatné

Porušení jednoho nebo více platných normativních pravidel pro ověřování.

### 18.10 Chyba

Stav, který porušuje normativní požadavek nebo brání správnému dokončení operace.

### 18.11 Upozornění

Povolený nebo napravitelný stav, který může vést ke ztrátě informací, omezené interoperabilitě, nejednoznačnosti nebo neočekávanému výstupu.

### 18.12 Informační výsledek

Výsledek ověření nebo zpracování, který poskytuje kontext, aniž by naznačoval neplatnost nebo doporučovanou opravu.

### 18.13 Procesor

Implementace nebo komponenta, která využívá data zOMIu a provádí definovanou operaci.

Mezi příklady patří parser, validátor, renderer, importér, exportér, resolver, konvertor a procesor pro uchovávání dat.

### 18.14 Analizátor

Procesor, který čte serializované znázornění a sestavuje nebo identifikuje jeho strukturální datový model.

Úspěšné syntaktické rozebrání neznamená sémantickou správnost.

### 18:15 Producent

Implementace, která vytváří nebo generuje data v souladu s normou „OMI“.

### 18.16 Spotřebitel

Implementace, která čte nebo zpracovává data typu `OMI`.

### 18.17 Renderer

Procesor, který na základě sémantického obsahu OMI a příslušných profilů generuje výstup v podobě prezentace nebo publikace.

### 18.18 Vykreslování

Proces vytváření vizuální, textové, zvukové, hmatové nebo pro stroje určené prezentace na základě strukturovaného sémantického obsahu.

Renderování NESMÍ bez upozornění měnit autoritativní sémantický zdroj.

## 19. Import, export a interoperabilita

### 19.1 Import

Proces převodu nebo začlenění dat z externího formátu do formátu OMI.

### 19.2 Export

Proces převodu dat zOMIu do externí podoby nebo výstupního balíčku.

### 19.3 Převod

Převod mezi reprezentacemi, formáty, schématy nebo modely.

Import a export jsou směrové formy převodu vzhledem ke kontextu zpracování OMI.

### 19.4 Mapování

Zdokumentovaný vztah mezi pojmy, vlastnostmi, hodnotami, strukturami nebo operacemi ve zdrojovém modelu a cílovém modelu.

### 19.5 Bezztrátové mapování

Mapování, které zachovává všechny informace požadované deklarovaným rozsahem mapování a umožňuje ekvivalentní rekonstrukci.

### 19.6 Podmíněně bezeztrátové mapování

Mapování, které je bezeztrátové pouze tehdy, jsou-li splněny stanovené předpoklady nebo omezení profilu.

### 19.7 Ztrátové mapování

Zobrazení, které vynechává, zaokrouhluje, slučuje nebo transformuje informace takovým způsobem, že znemožňuje jejich úplnou a ekvivalentní rekonstrukci.

Ztráta MUSÍ být zdokumentována a MĚLA BY být hlášena konverzními nástroji.

### 19,8 Zpáteční cesta

Postup, při kterém se data převádějí z jednoho znázornění do jiného a poté zpět do původního znázornění nebo modelu.

V požadavku typu „round-trip“ MUSÍ být uvedeno, které informace a sémantika musí být zachovány.

### 19.9 Interoperabilita

Schopnost nezávislých systémů vyměňovat si a zpracovávat informace s dohodnutou úrovní sémantické a behaviorální konzistence.

Interoperabilita může být strukturální, sémantická, behaviorální, provozní nebo zaměřená na uchovávání. Příslušný rozměr BY MĚL být uveden.

### 19.10 Kompatibilita

Schopnost verzí, implementací, formátů nebo profilů fungovat společně v souladu s definovanými očekáváními.

Měli byste se vyhýbat používání termínu *kompatibilní* bez upřesnění. Specifikace by měly uvádět zpětnou, dopřednou, obousměrnou, behaviorální, schématickou, API nebo profilovou kompatibilitu.

### 19.11 Ochrana

Řízená činnost spočívající v dlouhodobém zajišťování přístupnosti, integrity, identity, interpretovatelnosti a provenience vědeckého obsahu.

### 19.12 Procesor pro uchovávání dat

Implementace, která provádí validaci, balení, migraci, ověřování nebo údržbu obsahu OMI za účelem jeho dlouhodobého uchovávání.

## 20. Terminologie týkající se implementace

### 20.1 Implementace

Software, služba, komponenta, knihovna nebo systém, který implementuje jednu nebo více specifikací či profilůOMI.

Implementace není samotný standard.

### 20.2 Referenční implementace

Implementace spravovaná organizací „OMI“, jejímž účelem je demonstrovat, testovat a poskytovat zpětnou vazbu ohledně specifikací.

Open Manuscript Studio jedná se o referenční implementaci. Její chování není normativní, pokud není začleněno do zveřejněné specifikace.

### 20.3 Samostatné provádění

Implementace vyvinutá s dostatečnou organizační nebo technickou nezávislostí, která umožňuje poskytnout přesvědčivý důkaz o interoperabilitě nad rámec jedné sdílené kódové základny.

### 20.4 Open Manuscript Studio

Hlavní aplikace pro tvorbu dokumentů a spolupráci v rámci platformy OMI.

Oficiální zkrácený název je *Studio*, pokud je kontext jednoznačný.

### 20.5 Dokument „OMI“

Sériově zpracovaný dokument, který deklaruje a dodržuje specifikaci dokumentu nebo formátu souboru podle standardu „OMI“.

Tento výraz NESMÍ být používán u každého dokumentu, který byl pouze upraven v aplikaci podporující formát OMI.

### 20.6 Podpora

Deklarovaná schopnost implementace zpracovat definovanou specifikaci, verzi, profil, funkci nebo formát.

Podpora MUSÍ být odpovídajícím způsobem specifikována, například jako čtení, zápis, ověřování, vykreslování, import, export nebo uchovávání.

### 20.7 Neznámá funkce

Funkce, typ, vlastnost, rozšíření nebo hodnota, kterou daná implementace nerozpozná.

### 20.8 Nepodporovaná funkce

Uznávaná funkce, kterou daná implementace neposkytuje ani nezpracovává.

„Neznámý“ a „nepodporovaný“ jsou dva odlišné stavy.

### 20.9 Definováno implementací

Chování, které je záměrně ponecháno na implementaci v rámci mezí stanovených specifikací.

Chování definované implementací MUSÍ být v dané implementaci zdokumentováno, pokud má vliv na interoperabilitu nebo na očekávání uživatelů.

### 20.10 Uživatelský agent

Aplikace, která jménem lidského uživatele vytváří, zobrazuje, upravuje, kontroluje, ověřuje nebo zpracovává obsah na adrese OMI.

Tento pojem neznamená akademického činitele, jako je například autor nebo organizace.

## 21. Rozdíly, u nichž snadno dochází k omylům

### 21.1 Rukopis versus soubor

Rukopis je vědecký intelektuální objekt. Soubor je jedna z forem jeho uložení nebo přenosu.

Nesprávně:

> Rukopis je soubor ve formátu ZIP.

Preferováno:

> Balíček rukopisu je serializován v kontejneru založeném na formátu ZIP.

### 21.2 Dokument versus publikace

Dokument je strukturované znázornění v kontextu zpracování. Publikace je zveřejněný výstup.

### 21.3 Bibliografický záznam versus výskyt citace

Bibliografický záznam popisuje citovaný zdroj. Výskyt citace zaznamenává jeden případ a místo citace.

### 21.4 Referenční knihovna versus bibliografie

Referenční knihovna je strukturovaný soubor zdrojů, které jsou k dispozici pro daný rukopis. Bibliografie je vybraný výstup tohoto souboru.

### 21.5 Odkaz versus poznámka

Kotva označuje cíl. Anotace přiřazuje k tomuto cíli konkrétní obsah.

### 21.6 Poznámka versus anotace

Poznámka je součástí obsahu rukopisu. Anotace se vztahuje k obsahu nebo k jinému objektu a může být umístěna mimo publikovaný text.

### 21.7 Role versus oprávnění

Role popisuje odpovědnost nebo funkci. Oprávnění umožňuje provedení určité operace.

### 21.8 Specifikace versus schéma

Specifikace definuje sémantiku a chování. Schéma formalizuje strukturální omezení, která lze ověřit strojově.

### 21.9 Profil versus rozšíření

Profil vybírá nebo omezuje specifikace pro daný kontext a může deklarovat rozšíření. Rozšíření přidává názvy, struktury nebo chování prostřednictvím mechanismu rozšíření.

### 21.10 Překlad versus lokalizace

Překlad vytváří odborný obsah v cílovém jazyce, který souvisí s obsahem v zdrojovém jazyce. Lokalizace přizpůsobuje software nebo prezentaci konkrétnímu jazykovému prostředí.

### 21.11 Verze versus revize

Verze je obecně definovaný stav. Revize obvykle označuje verzi, která vznikla změnou oproti dřívějšímu stavu.

### 21.12 Schopnost versus oprávnění

Schopnost se týká technické podpory. Oprávnění se týká autorizace.

### 21.13 Platnost versus shoda

Pojem „platný“ se obvykle vztahuje na data posuzovaná podle souboru pravidel. Pojem „vyhovující“ označuje implementaci, dokument nebo proces, který splňuje všechny příslušné normativní požadavky pro deklarovaný rozsah.

### 21.14 Trvalé versus neměnné

„Trvalý“ znamená, že má zůstat identifikovatelný v průběhu času. „Neměnný“ znamená, že v rámci stejné identifikační verze nesmí docházet ke změnám.

## 22. Výrazy, které je třeba upřesnit nebo se jim vyhnout

Normativní dokumenty OMI by MĚLY upřesnit následující nejednoznačné pojmy:

| Vyhnout se nebo upřesnit | Upřednostnit |
|---|---|
| odkaz | výskyt citace, bibliografický záznam, křížový odkaz nebo normativní odkaz |
| zdroj | zdroj metadat, zdroj překladu, zdroj importu nebo citovaný zdroj |
| verze | verze rukopisu, verze schématu, verze implementace nebo verze publikace |
| záznam | bibliografický záznam, ověřovací záznam, auditní událost nebo záznam v registru |
| objekt | vědecký objekt, strukturální objekt, obsahový objekt nebo agent |
| redaktor | redaktor rukopisu, redaktor časopisu, redaktor svazku, korektor nebo redaktor specifikací |
| formát | formát souboru, formát publikace, formát zobrazení nebo datový model |
| kompatibilní | zpětně kompatibilní, dopředu kompatibilní, obousměrně kompatibilní nebo kompatibilní s profilem |
| platný | platný vzhledem k pojmenovanému schématu, specifikaci nebo profilu |
| odkaz | identifikátor, URL, kotva, citace, křížový odkaz nebo vztah |
| uživatel | autor, redaktor, recenzent, překladatel, správce, čtenář nebo klient API |
| publikováno | vydáno jako která publikační verze nebo výstup |
| kanonický | pro jaký rozsah a s jakou autoritou je kanonický |

Následující výrazy by se v normativních požadavcích neměly objevovat bez měřitelné definice:

- příslušná metadata;
- standardní formát;
- běžný odkaz;
- správné zobrazení;
- uživatelsky přívětivý;
- vysoká kvalita;
- trvalý odkaz;
- bezpečné skladování;
- plná podpora.

## 23. Velká písmena a formátování

Obecné pojmy se píší malými písmeny:

> rukopis, kotva, výskyt citace, profil

V oficiálních názvech se používá velká počáteční písmena:

> Open Manuscript Initiative, Open Manuscript Studio, Citation Model, Specification Registry

Strojově čitelná jména, vlastnosti, doslovné hodnoty a identifikátory se formátují následovně:

> Vlastnost ``documentLanguage`` obsahuje jazykovou značku.

Trvalé identifikátory dokumentů typu „OMI“ používají předpony velkými písmeny:

```text
OMI-SPEC-005
OMI-PROFILE-001
OMI-REG-001
OMI-SCHEMA-001
OMI-EXAMPLE-001
```

## 24. Zkratky

Zkratka by MĚLA být při prvním podstatném použití v dokumentu rozepsána, pokud nelze rozumně předpokládat, že ji cíloví čtenáři znají.

Mezi doporučené formuláře patří:

| Zkratka | Význam |
|---|---|
| OMI | Open Manuscript Initiative |
| CSL | Jazyk pro styl citací |
| DOI | Identifikátor digitálního objektu |
| ORCID | Otevřené identifikační číslo výzkumníka a přispěvatele |
| ROR | Registr výzkumných organizací |
| JATS | Sada značek pro časopisecké články |
| API | Rozhraní pro programování aplikací |
| URI | Jednotný identifikátor zdroje |
| URL | Uniform Resource Locator |
| UUID | Univerzální jedinečný identifikátor |
| JSON | JavaScript Notace objektů |
| XML | Extensible Markup Language |
| PDF | formát Portable Document Format |
| EPUB | Elektronická publikace |

Zkratky v množném čísle se nepíší s apostrofem:

> APIs, DOIs, URL adresy

## 25. Požadavky na překlad

Oficiální překlady specifikací OMI MUSÍ používat schválený jazykově specifický terminologický seznam odvozený z tohoto dokumentu.

Při překladu MUSÍ být zachovány rozdíly, mezi něž patří:

- rukopis versus dokument;
- výskyt citace versus bibliografický záznam;
- referenční knihovna versus bibliografie;
- kotva versus anotace;
- poznámka versus anotace;
- role versus oprávnění;
- specifikace versus schéma;
- překlad versus lokalizace;
- možnost versus oprávnění;
- platný versus vyhovující.

Pokud by jedno slovo v cílovém jazyce zahrnovalo dva pojmy z „OMI“, překlad BY MĚL použít:

- kvalifikovaný složený termín;
- stabilní technický přejatý výraz;
- vysvětlení v závorce;
- poznámka k slovníku týkající se konkrétního jazyka.

Názvy vlastností, hodnoty výčtů, identifikátory, typy médií, identifikátory jmenných prostorů a identifikátory požadavků SE NESMÍ překládat.

## 26. Přidávání nebo změna terminologie

Návrh na přidání centrálního pojmu by MĚL obsahovat:

- navrhovaný termín;
- stručná definice;
- důvod, proč je tento pojem nezbytný;
- související a protikladné pojmy;
- dotčené specifikace a schémata;
- známé ekvivalenty podle externích norem;
- aspekty překladu;
- příklady správného a nesprávného použití.

Změna definice MUSÍ být posouzena v souladu se zásadami verzování v rámci projektu „OMI“.

Změna může způsobit poruchu, pokud mění:

- podstata pojmu;
- soubor zahrnutých subjektů;
- normativní výklad;
- schéma nebo význam pojmu „API“;
- výsledky shody;
- stanovené přezkoumání podle vnějších norem.

Zastaralé termíny MUSÍ zůstat zdokumentovány spolu s jejich náhradou a NESMÍ být beze upozornění přeřazeny.

## 27. Externí přiřazení terminologie

OMI může své pojmy přiřadit k externím standardům, ale NESMÍ se předpokládat ekvivalence pouze na základě podobnosti označení.

V popisu by MĚLO být uvedeno, zda se jedná o:

- přesně;
- užší;
- širší;
- překrývající se;
- závislé na kontextu;
- nejsou ekvivalentní.

Mezi příklady relevantních externích terminologických zdrojů patří:

- JATS;
- Jazyk pro formátování citací;
- Metadata Crossref;
- Metadata DataCite;
- ORCID;
- ROR;
- Dublin Core;
- schema.org;
- modely knihoven a archivů;
- modely webových anotací;
- normy pro uchovávání.

Externí přiřazení mají pouze informativní charakter, pokud nejsou normativně začleněna do specifikace OMI.

## 28. Očekávané požadavky na shodu

OMI Specifikace a oficiální profily MUSÍ důsledně používat základní pojmy.

Implementace splňující specifikaci MŮŽE používat odlišné popisky uživatelského rozhraní, avšak její exportovaná data, API, dokumentace a prohlášení o shodě MUSÍ zachovávat definované koncepční rozdíly.

Implementace NESMÍ tvrdit, že dva ústřední pojmy OMI jsou ekvivalentní, pokud je specifikace rozlišuje.

Vlastnost schématu nebo pole „API“, které používá centrální termín, BY MĚLO odkazovat na příslušnou definici v generované dokumentaci nebo ji v ní reprodukovat.

## 29. Údržba

Tento dokument je spravován v souladu s životním cyklem specifikací, zásadami verzování a stylovým průvodcem pro specifikace organizace OMI.

K revizi terminologie BY MĚLO dojít, když:

- je vypracována nová specifikace;
- schéma zavádí nový základní typ nebo vlastnost;
- tyto dvě specifikace používají stejné slovo v odlišném významu;
- externí přiřazení odhaluje koncepční nesoulad;
- oficiální překlad nedokáže jasně zachovat tento rozdíl;
- Zkušenosti s implementací ukazují, že zde existuje nejednoznačnost.

Redakční opravy mohou být vydávány jako opravy (patch). Kompatibilní doplňky mohou být vydávány jako vedlejší verze. Změny, které mění zavedený normativní význam, vyžadují hlavní verzi nebo zdokumentovanou změnu s nekompatibilními dopady před verzí 1.0.

## 30. Shrnutí

OMI závisí na rozdílech, které běžné programy pro práci s dokumenty často skrývají.

Rukopis není soubor. Výskyt citace není naformátovaná citace. Bibliografický záznam není položka v bibliografii. Kotva není anotace. Role není oprávnění. Specifikace není schéma. Referenční implementace není standard.

Díky zachování těchto rozlišení mohou nezávislé systémy sdílet vědecký obsah, aniž by musely jeho význam opakovaně rekonstruovat. Tento terminologický dokument proto tvoří součást architektonického základu projektu „Open Manuscript Initiative“.
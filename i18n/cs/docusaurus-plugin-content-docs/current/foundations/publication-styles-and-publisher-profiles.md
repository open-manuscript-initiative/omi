---
id: publication-styles-and-publisher-profiles
title: Styly publikací a profily vydavatelů
sidebar_label: Styly publikací a profily vydavatelů
description: Jak nástroj „Open Manuscript Studio“ odděluje sémantiku rukopisu, identitu vydavatele a opakovaně použitelné styly publikace pro export do formátů PDF, HTML a CSS, včetně importu stylů z InDesignu IDML.
keywords:
  - Open Manuscript Studio
  - publication style
  - publisher profile
  - Adobe InDesign
  - IDML
  - CSS export
  - PDF export
  - HTML export
  - journal typography
  - publishing workflow
---

# Styly publikací a profily vydavatelů

Open Manuscript Studio nyní odděluje tři oblasti, které jsou v běžných systémech pro tvorbu obsahu často smíšeny dohromady:

1. **sémantika rukopisu** — odborný obsah a jeho struktura;
2. **identita vydavatele** — značka časopisu nebo vydavatele, identifikátory a právní metadata;
3. **styl publikace** — rozložení stránky, typografie a vzhled výstupu.

Díky tomuto oddělení lze stejný rukopis OMI přizpůsobit pro různé časopisy, vydavatele a výstupní kanály, aniž by bylo nutné rukopis přepisovat.

## Aktuální stav implementace

Sada funkcí popsaná na této stránce je implementována v aktuální vývojové větvi Studio a je součástí příprav projektu na vydání beta verze. Veřejně dostupná binární verze zůstává na adrese `0.1.0-alpha.4`; novější funkce popsané zde se mohou nejprve objevit ve vývojové větvi ještě před vydáním další balíčkové verze.

### Opakovaně použitelné pojmenované styly publikací

Profil vydavatele nebo časopisu může obsahovat více pojmenovaných stylů publikace. Uživatelé mohou:

- vytvořit nový styl;
- duplikovat existující styl;
- přejmenovat styl;
- vyberte aktivní styl;
- odstranit styly tak, aby zůstal zachován alespoň jeden platný styl;
- upravovat hodnoty stylů s živým náhledem;
- uložit aktuální styl lokálně;
- exportovat definici stylu;
- stáhnout vygenerovaný soubor `CSS` z aktuálního stavu editoru;
- načíst sadu stylů programu Adobe InDesign z balíčku „IDML“.

Aktuálně vybraný styl je aktivním stylem používaným v exportních cestách PDF a HTML.

### Editor stylů publikací

Grafický editor nabízí ovládací prvky zaměřené spíše na publikování než na sémantiku rukopisu. Mezi aktuálně upravitelné oblasti patří:

- šířka a výška stránky;
- zrcadlené vnitřní a vnější okraje;
- rodina písma, velikost a řádkování;
- odsazení a zarovnání odstavců;
- geometrie titulů a nadpisů;
- popisky;
- formátování bibliografie;
- typografie poznámek pod čarou a oddělovací čáry;
- chování záhlaví;
- geometrie stránky určená pro tisk.

Živý náhled zohledňuje obsah rukopisu: název, podtitul, autoři, afilace, nadpisy, hlavní text a poznámky pod čarou se načtou z aktuálně otevřeného rukopisu, jsou-li k dispozici. Chybějící metadata rukopisu nejsou nahrazována vzorovými publikačními údaji.

## Import sady stylů „IDML“ v aplikaci Adobe InDesign

Studio dokáže importovat opakovaně použitelné styly publikace z balíčku **Adobe InDesign IDML**. Cílem je zajistit kompatibilitu stylů, nikoli úplnou konverzi dokumentů z InDesignu: nativní soubory ve formátu `.indd` a import kompletních dokumentů ve formátu IDML zůstávají mimo rozsah tohoto importéru.

Importér načte příslušné zdroje typu „XML“ ze souboru ZIP na adrese IDML a dokáže převést rozpoznatelné informace ve formátu publikace, jako například:

- šířka a výška stránky;
- horní, dolní, vnitřní a vnější okraje;
- rodina písma a velikost písma v odstavci;
- vedoucí;
- zarovnání odstavců;
- odsazení první řádky;
- mezera před a za;
- informace o kurzívě a běžném tučném a polotučném písmu;
- `BasedOn` dědičnost stylů odstavců.

Běžné názvy stylů v aplikacích InDesign v angličtině, maďarštině a němčině se automaticky přiřazují k rolím publikace v systému „OMI“, včetně hlavního textu, názvu a podtitulu článku, nadpisů první a druhé úrovně, poznámek pod čarou, popisků obrázků a tabulek a položek bibliografie. Styly, které nelze automaticky identifikovat, zůstávají vyznačeny jako nepřidělené, místo aby byly násilně zařazeny do modelu rukopisu.

Úspěšný import z IDML vytvoří **nový opakovaně použitelný styl publikace OMI**, nastaví jej jako aktivní a aktualizuje grafický editor stylů publikace. **Nepřepíše** však nadpisy, odstavce ani žádné jiné sémantické prvky rukopisu. Tím se zachová architektonická hranice mezi vědeckou strukturou a prezentací.

Díky tomu může časopis nebo vydavatelství převést stávající typografický systém z aplikace InDesign do aplikace Studio a znovu jej použít pro rukopisy ve formátu „OMI“, aniž by do samotného dokumentu vkládalo sémantiku specifickou pro aplikaci InDesign.

## Profil vydavatele

Identita vydavatele je vedena odděleně od typografie publikace. Profil vydavatele může obsahovat například následující informace:

- název časopisu nebo vydavatelství;
- zkrácený název;
- poštovní a kontaktní údaje;
- webové stránky;
- ISSN a eISSN;
- zdroj loga, alternativní text a viditelnost výstupu;
- údaje o svazku, čísle a roce vydání;
- DOI nastavení zobrazení;
- držitel autorských práv a šablona autorských práv;
- název licence, URL a ikona;
- Nastavení značky a právních informací na úvodní stránce a v sekci „HTML“.

To znamená, že změna loga časopisu, čísla ISSN nebo licence nevyžaduje úpravu typografie a změna typografie nemění identitu vydavatele.

## PDF a export vHTMLu

Studio používá styl aktivní publikace jak pro výstupy typu PDF/print, tak pro výstupy typu HTML, avšak záměrně s těmito dvěma médii zachází odlišně.

### PDF / tisk

Cesta `PDF` uplatňuje pravidla specifická pro tisk, jako například:

- vlastní rozměry stránky;
- zrcadlené okraje;
- stránkování;
- hlavičky;
- prezentace poznámek pod čarou;
- styly pro názvy, nadpisy, popisky a bibliografii;
- údaje o vydavateli a právní metadata, pokud byly nastaveny.

Dialogové okno „Platform print/PDF“ slouží k finálnímu vytvoření souboru „PDF“.

### HTML

Balíček „HTML“ zachovává sémantickou strukturu dokumentu a zvolenou typografii, záměrně však odstraňuje funkce určené pouze pro tisk:

- žádná pevně daná velikost stránky;
- bez číslování stránek;
- bez záhlaví;
- žádné vynucené konce stránek.

Výsledkem je přenosný balíček sémantického formátování (HTML), nikoli simulované rozložení dokumentu v prohlížeči.

## CSS export

Editor Publication Style dokáže vygenerovat a stáhnout soubor „CSS“ přímo z aktuálně vybraného stavu editoru, včetně neuložených úprav. Vygenerovaný stylový list zahrnuje typografii aktivního stylu a případně i pravidla pro tiskovou stránku.

To poskytuje přenosný most mezi grafickým editorem stylů aplikace Studio a externími publikačními systémy nebo webovými procesy, které využívají rozhraní CSS.

## Referenční vydání: Egyháztörténeti Szemle

První kompletní referenční profil byl rekonstruován na základě tištěného čísla časopisu „Egyháztörténeti Szemle“. Ukazuje, jak lze ztvárnit vizuální identitu konkrétního časopisu, aniž by bylo nutné do modelu rukopisu „OMI“ zakomponovat specifická pravidla pro prezentaci daného časopisu.

Uvedené hodnoty týkající se typografie a geometrie čísel jsou upravitelné výchozí hodnoty. Komerční fonty nejsou součástí balíčku a autoritativní materiály vydavatele jsou zahrnuty pouze v případě, že jsou výslovně poskytnuty.

## Rozsáhlé seznamy dokumentů a rejstříky

Stejná vývojová větev zaměřená na připravenost k beta testování také vylepšuje navigaci v generovaných dokumentech a v seznamech:

- importované obsahy z aplikace Word jsou rozpoznávány jako sémanticky generované struktury, namísto zachování zastaralých čísel stránek;
- položky obsahu odkazují na příslušné části rukopisu;
- seznamy obrázků mohou čerpat položky ze strukturovaných importovaných vizuálních prvků, včetně názevů, alternativních textů a náhradních názvů souborů;
- vlastní indexy lze použít pro jména, místa a další typy indexů specifické pro daný dokument;
- záznamy v rejstříku odkazují na konkrétní místa v rukopise;
- Objektově orientované vyhledávání dokáže vypsat obrázky, grafy, tabulky, diagramy a rovnice, aniž by vyžadovalo textový dotaz.

Tyto struktury zůstávají vázány spíše na sémantiku rukopisu a kotvy než na pevné stránkování.

## Bezpečnostní hranice

Při exportu publikace a importu stylů se s textem rukopisu, profilu a importovaným textem z IDML zachází jako s daty, nikoli jako se spustitelnými značkami. Implementace exportu se vyhýbá opětovnému interpretování dynamického textu DOM prostřednictvím nebezpečných cest `document.write()` a místo toho využívá strukturované přiřazování DOM/textu nebo načítání izolovaných generovaných dokumentů.

Importér IDML uplatňuje samostatnou hranici důvěryhodnosti ještě před analýzou XML: nepodporované `DOCTYPE`, deklarace entit a instrukce pro zpracování stylových listů jsou odmítnuty. Chybové řetězce parseru/balíčku odvozené z nedůvěryhodného souboru IDML se nezobrazují zpět v rozhraní Studio; uživatelé místo toho obdrží pevně danou lokalizovanou zprávu o selhání importu. K vysledování těchto toků dat ze zdrojového kódu do DOM během posilování zabezpečení se používá automatizované skenování CodeQL.

## Architektonický princip

Záměrem je následující vztah:

** Rukopis naOMI → profil vydavatele + vybraný styl publikace → renderer výstupu → PDF / HTML / CSS**

Další možností zajištění interoperability je:

**Sada stylů InDesignu „IDML“ → styl publikace „OMI“ → stejný výstupní renderer**

Rukopis zůstává přenositelný a sémanticky stabilní, zatímco jeho prezentace se stává opakovaně použitelnou, nahraditelnou, importovatelnou a specifickou pro daného vydavatele.

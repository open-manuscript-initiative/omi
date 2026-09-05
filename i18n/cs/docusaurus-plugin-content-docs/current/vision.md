---
id: vision
title: Vize
sidebar_position: 1
description: Vize a filozofie projektu „Open Manuscript Initiative“.
---

# Vize

## Nové pojetí vědeckého psaní

Již po celá desetiletí se vědecké rukopisy vytvářejí pomocí textových editorů, které byly původně určeny pro kancelářské dokumenty.

Tyto aplikace vyžadují, aby autoři činili spíše typografická rozhodnutí než vědecká. Otázky jako velikost písma, mezery, odsazení nebo ruční sazba mají s vědeckou komunikací málo společného, přesto však publikační postupy opakovaně nutí autory a redaktory, aby strukturu textu rekonstruovali na základě vizuálního formátování.

Výsledek je známý:

- nejednotné formátování;
- skryté artefakty dokumentu;
- nekompatibilní šablony;
- opakované převody a čištění;
- duplicitní záznam metadat;
- a ztráta informací při přechodu mezi systémy pro tvorbu, recenzování a publikování.

OMI vychází z jiného předpokladu: vědecký rukopis by měl po celou dobu svého životního cyklu zůstat strukturovaným a přenositelným objektem.

## Podstata před vzhledem

Autoři by měli popsat, **co** daný obsah představuje, a ne pouze **jak** by měl vypadat.

Rukopis není pouhým souborem písem a formátování. Jedná se o strukturovaný soubor vědeckých pojmů, jako jsou například:

- název, autoři a pracoviště;
- abstrakt a klíčová slova;
- odstavce a nadpisy;
- citace, obrázky a tabulky;
- poznámky, citace a odkazy;
- poděkování, informace o financování a prohlášení o dostupnosti dat;
- poznámky, úpravy a podklady k revizi.

Tyto prvky definují vědecký význam. Jejich prezentaci lze poté vygenerovat pro časopis, repozitář, pracovní postup při vydávání knihy, webovou publikaci, tištěný výstup nebo archivační balíček, aniž by bylo nutné přepisovat vzor rukopisu.

## Vytvořte strukturu jednou

OMI využívá sémantický model rukopisu. Namísto opakovaného přetváření struktury během konverze je struktura zachována jako data první třídy.

Díky tomu může jeden rukopis procházet fázemi tvorby, recenzního řízení, redakčního zpracování a publikace, přičemž si zachovává stálou vědeckou identitu, metadata a vztahy.

Stejný princip platí i pro přispěvatele, citace, poznámky a historii verzí: měly by při přechodech v rámci pracovního postupu zůstat zachovány jako smysluplné objekty, a neměly by být při každém předání souboru redukovány na pouhé typografické prvky.

## Zveřejnit všude

Současná referenční implementace Open Manuscript Studio již ukazuje směr, kterým se tento model ubírá. Strukturovaný rukopis lze dodávat jako přenositelná data ve formátu OMI a převádět je na výstupy určené k publikování, mezi něž patří:

- JATS XML;
- sémantický HTML;
- DOCX;
- EPUB;
- PDF;
- IDML;
- Značky XPress;
- FrameMaker MIF;
- Scribus SLA;
- a LaTeX.

Budoucí adaptéry mohou přidávat další cíle v oblasti vydavatelů, repozitářů, uchovávání a ukládání metadat, aniž by došlo ke změně modelu vědeckých zdrojů.

Prezentace se stává výstupem. Smysl zůstává zdrojem.

## Otevřená konstrukce

Open Manuscript Initiative je projekt založený na otevřených standardech. Jeho specifikace, schémata, dokumentace a referenční implementace mají zůstat veřejně dostupné pod otevřenými licencemi.

Každý by měl být schopen:

- provést specifikace;
- vytvořit kompatibilní software pro tvorbu nebo publikování;
- vytvářet konvertory a validátory;
- vyvíjet pluginy a integrace;
- propojit pracovní postupy OMI s infrastrukturou pro publikování nebo úložištěm;
- a uchovávat rukopisy z projektu „OMI“ nezávisle na konkrétním dodavateli nebo hostované službě.

Žádná komerční aplikace by neměla mít výhradní pravomoc nad vědeckým objektem.

## S důrazem na místní obsah a interoperabilitu

Přenositelnost také znamená, že autoři by neměli být nuceni převést vlastnická práva k rukopisu na konkrétní cloudovou platformu jen proto, aby mohli využívat moderní vědecké nástroje.

OMI Proto podporuje architekturu, která upřednostňuje lokální řešení, v níž mohou rukopisy zůstat na autorově počítači, být uloženy v přenosných balíčcích typu „OMI“ nebo umístěny ve složkách synchronizovaných poskytovatelem úložiště, kterého si autor zvolil. Serverové služby se využívají tam, kde přinášejí skutečnou přidanou hodnotu – účty, spolupráci, recenzní řízení, integraci s publikačním systémem nebo přímé vzdálené služby –, nikoli jako nezbytný předpoklad pro vlastnictví rukopisu.

Externí platformy, jako jsou OJS a OMP, zůstávají autoritativními zdroji informací o stavu vlastního pracovního postupu. OMI se integruje prostřednictvím explicitních APIa profilů, namísto přímého propojení modelu rukopisu s databází jiné aplikace.

## Recenze je součástí vědeckého objektu

Recenze by neměla být považována za jednorázový text doprovázející daný dokument. Formát „OMI“ modeluje recenzní úkoly, poznámky, komentáře a hranice identit jako strukturovaná data vědeckého pracovního postupu.

Referenční implementace již podporuje dvojitě slepé recenzování a pracovní postupy pro autory, redaktory a recenzenty zohledňující jejich role. Dlouhodobým cílem je zajistit přenositelnost a interoperabilitu stavu recenzního řízení při zachování pravidel důvěrnosti vyžadovaných v rámci publikačního procesu.

## Identita bez vázanosti

Identita pro ověření a identita akademického přispěvatele spolu souvisejí, ale nejde o totéž.

Účet určuje, kdo smí službu využívat. Záznam o přispěvateli vyjadřuje autorství, afiliaci, ORCID a vědeckou roli. OMI zachovává tyto pojmy oddělené, aby bylo možné propojit externí poskytovatele identit, aniž by bylo nutné předefinovat autorství nebo zabudovat jednoho poskytovatele autentizace do formátu rukopisu.

## Udržitelnost prostřednictvím služeb

Otevřené standardy i nadále vyžadují udržitelnou údržbu. OMI může poskytovat volitelné hostované nebo profesionální služby, jako například:

- infrastruktura pro řízenou spolupráci a pracovní postupy;
- služby ověřování a interoperability;
- integrace publikačních systémů;
- adaptéry pro úložiště a uchovávání;
- podpora zavádění v institucích;
- překladatelské služby nebo služby s využitím umělé inteligence;
- a spravovaný hosting.

Tyto služby mohou sice rozšiřovat ekosystém, nikdy by však neměly omezovat přístup ke standardu, k modelu rukopisu ani k otevřené referenční implementaci.

## Více než jen formát souboru

OMI není jen dalším formátem dokumentu. Jedná se o ekosystém vzájemně kompatibilních komponent:

- sémantické specifikace;
- vědecký objektový model;
- přenosné schránky na rukopisy;
- validační pravidla a třídy shody;
- referenční implementace;
- APIa integrační profily;
- nástroje pro publikování a konverzi;
- přezkoumat pracovní postupy;
- a architektura pro dlouhodobé uchovávání.

Open Manuscript Studio jedná se o aktuální referenční implementaci, která slouží k uplatnění těchto konceptů v reálném prostředí pro tvorbu, kontrolu a publikování obsahu napříč webovými, desktopovými i mobilními klienty.

## Komunita na prvním místě

Vědecká komunikace je součástí akademické obce. Projekt „Open Manuscript Initiative“ vítá příspěvky od výzkumných pracovníků, vydavatelů, vývojářů softwaru, knihovníků, univerzit, časopisů a výzkumných institucí.

Otevřená spolupráce umožňuje, aby se specifikace vyvíjela podle potřeb vědecké komunity, nikoli podle omezení proprietárního editoru či publikační platformy.

## Náš cíl

Naší vizí je pracovní postup, v jehož rámci se výzkumníci mohou soustředit na vědeckou práci, zatímco software zachovává strukturu, identitu a vztahy v průběhu celého životního cyklu publikace.

Rukopis zůstává srozumitelný jak pro stroje, tak pro lidi.

Za vizuální úpravu odpovídají publikační systémy.

Hodnocení zůstává strukturované a podléhá kontrole.

Znalosti zůstávají přenositelné.

Vydavatelství se stává interoperabilním.

> **Pište přirozeně.**  
> Vytvořte strukturu jednou.  
> Publikujte kdekoli.**

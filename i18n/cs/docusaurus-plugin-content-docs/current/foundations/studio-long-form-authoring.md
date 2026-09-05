---
id: studio-long-form-authoring
title: Tvorba dlouhých textů v aplikaci „Open Manuscript Studio“
sidebar_label: Tvorba dlouhých textů
sidebar_position: 4
description: Podpora importu souborů ve formátu „DOCX“, navigace ve struktuře dokumentu, škálovatelné poznámky, sémantické rejstříky jmen a generované obsahy v programu „Open Manuscript Studio“.
keywords:
  - Open Manuscript Studio
  - DOCX import
  - monograph
  - long-form authoring
  - notes
  - footnotes
  - name index
  - Word XE
  - table of contents
  - Word TOC
---

# Tvorba dlouhých textů v aplikaci „Open Manuscript Studio“

Open Manuscript Studio je vyvíjen tak, aby podporoval nejen krátké články, ale i vědecké rukopisy o rozsahu celé knihy. Při vývoji tohoto nástroje pro tvorbu rozsáhlých textů jsou hlavními požadavky zachování kompatibility s programem Word, sémantická struktura, zpracování s prioritou lokálních dat a responzivní úpravy.

Tato stránka popisuje implementační verzi vyvinutou a otestovanou v srpnu 2026. Funkce, které se stále nacházejí ve fázi schvalování, jsou jako takové označeny a nejsou uváděny jako zaručené součásti finální verze.

## DOCX a import monografií ve velkém měřítku

Studio využívá speciální strategii importu pro rozsáhlé a strukturálně složité dokumenty ve formátu Word. U malých souborů se i nadále používá plnohodnotný strukturální importér, zatímco u balíčků o rozsahu rukopisu lze využít monografickou cestu s nižšími nároky na paměť, která zabraňuje vytváření jednoho velmi rozsáhlého DOM prohlížeče pro funkci „`word/document.xml`“.

Režim pro rozsáhlé dokumenty je určen pro rukopisy obsahující tisíce odstavců, poznámky pod čarou a na konci textu, pole aplikace Word, hypertextové odkazy, obrázky, nadpisy a další vědecké struktury. Pravidelně předává řízení prohlížeči, aby rozhraní zůstalo během importu pohotové.

Jako test regresní analýzy a výkonu byla použita skutečná odborná kniha o rozsahu přibližně 200 stran. Dokument se úspěšně načetl jak na zařízeních s operačním systémem Android, tak na cílových zařízeních typu desktop, zachoval testované formátování a na testovaném mobilním zařízení byla konverze dokončena za přibližně šest sekund. Jedná se spíše o výsledek testu v rámci projektu než o formální záruku výkonu; skutečná doba závisí na složitosti dokumentu a hardwaru.

Bezpečnostní limit na úrovni balíčku je oddělený od limitů pro vizuální soubory, takže legitimní velký soubor typu „DOCX“ nebude odmítnut pouze proto, že ZIP kontejner překračuje historickou prahovou hodnotu stanovenou pro obrázky.

## Navigace ve struktuře dokumentu

Importované nadpisy se stávají součástí hierarchie sekcí v programu Studio, namísto toho, aby zůstaly pouze vizuálně formátovanými odstavci. Zobrazení struktury dokumentu tak může sloužit jako navigační přehled u rozsáhlých rukopisů.

Na počítači se po výběru položky obsahu posune zobrazení na příslušnou část v editoru. Na mobilním zařízení se po výběru nadpisu přepne zpět do zobrazení editoru, počká se na načtení plochy editoru, posune se na požadovanou část a zaměří se na oblast s nadpisem. Tím se zachovává kompaktní pracovní postup typický pro mobilní zařízení a zároveň se poskytuje stejný sémantický model navigace jako na počítači.

## Škálovatelné poznámky a poznámky pod čarou

Rukopis o rozsahu celé knihy může obsahovat stovky či tisíce poznámek. Okamžité vykreslení každé poznámky v plnohodnotném editoru formátovaného textu je zbytečně náročné, a proto Studio nyní odděluje odlehčený seznam poznámek od jejich úprav.

Panel Poznámky zobrazuje všechny souhrny poznámek jako zjednodušené záznamy. Plnohodnotný editor „`NoteBodyEditor`“ se načte pouze pro tu poznámku, kterou uživatel otevře. Díky tomu je kompletní seznam poznámek okamžitě k dispozici, aniž by docházelo k vytváření stovek souběžných instancí editoru.

Tato optimalizace zachovává možnosti úprav, mazání a navigace v poznámkách a zároveň výrazně snižuje časovou náročnost otevírání panelu Poznámky u rukopisů s velkým množstvím poznámek.

## Sémantické jmenné indexy

Studio považuje vědecký rejstřík jmen za strukturovaná data rukopisu, nikoli pouze za generovanou závěrečnou část publikace.

### Pole „`XE`“ a „`INDEX`“ v aplikaci Word

DOCX Import rozpoznává pole indexových záznamů v aplikaci Word (`XE`) a generovaná pole `INDEX`, včetně pokynů k polím rozdělených do více běhů `w:instrText`. Hierarchické indexové termíny jsou zachovány, namísto toho, aby byly zploštěny na běžný text.

Importovaná data indexu jsou uložena spolu s rukopisem „OMI“ a lze je seskupit do generovaného zobrazení „Name index“ / „Névmutató“ / „Personenregister“. Opakující se značky jsou seskupeny, přičemž jsou zachovány jejich jednotlivé výskyty.

Tento rozsáhlý dokument o regresi obsahuje tisíce skutečných polí formátu Word `XE` a v rámci této práce slouží jako praktický testovací vzorek pro ověření interoperability.

### Ruční značení podle jmenného rejstříku

Současná vývojová větev také přidává možnost ručního označování pomocí stávající lišty nástrojů pro výběr textu. Vybraný text se může stát položkou sémantického jmenného indexu, která uchovává cílový blok, vybraný text, typ zdroje a stabilní identifikátor sémantické kotvy.

Seskupené položky jmenného rejstříku lze rozbalit na jednotlivé výskyty. U položek s údaji o umístění volba **Přejít na výskyt** vybere příslušnou sekci, zavře nabídku, posune kurzor do editačního bloku a zvýrazní/vybere text uvedený v rejstříku.

Importované značky Wordu, které zatím nemají přesné údaje o poloze, zůstávají platnými sémantickými záznamy; přiřazení každé importované značky typu „`XE`“ k přesné kotvě v inline editoru představuje další vylepšení z hlediska interoperability.

## Sémantický obsah

Obsah vygenerovaný v programu Word by se po importu neměl proměnit v neaktualizovaný text s čísly stránek. Studio proto modeluje obsah jako generovaný sémantický objekt odvozený z hierarchie nadpisů rukopisu.

Současná implementace, která je předmětem přezkumu, rozpoznává pokyny pro pole v aplikaci Word `TOC`, včetně rozdělených fragmentů `instrText`. Zachovává důležitá nastavení aplikace Word, jako jsou rozsahy nadpisů (`\\o "1-3"`), generování hypertextových odkazů (`\\h`) a použití úrovní osnovy (`\\u`).

Je-li k dispozici sémantický obsah, Studio vygeneruje viditelný obsah na základě aktuální hierarchie oddílů. Přejmenování nebo změna struktury oddílů proto automaticky aktualizuje vygenerovaný seznam. Každá položka je navigovatelná a po kliknutí na ni dojde k výběru příslušného oddílu a posunutí na něj.

Studio záměrně nepovažuje čísla stránek v obsahu importovaném z aplikace Word za neměnná data rukopisu. Studio není editorem pro rozvržení stránek, takže stránkování spadá do fáze vykreslování publikace či exportu. Export do formátů DOCX a PDF umožňuje později vygenerovat nebo aktualizovat výstup zohledňující čísla stránek, aniž by se čísla závislá na rozvržení stala součástí kanonické struktury rukopisu.

## Zásada návrhu: sémantika před vizuální podobou

Tyto rozsáhlé reportáže se řídí jedním společným pravidlem:

- nadpisy jsou strukturální části, nikoli pouze styly písma;
- poznámky jsou sémantické anotace, nikoli pouze text v horním indexu;
- Jmenné indexy představují uložené značky a generované pohledy, nikoli pouze statický seznam;
- Obsahy představují pravidla pro hierarchii nadpisů, nejedná se pouze o zkopírovaný text s čísly stránek.

Díky tomu je rukopis odolný při přenosu mezi aplikacemi Studio a Word, vydavatelskými systémy, webovými stránkami HTML/JATS, EPUB nebo formáty určenými pro tisk.

## Umělá inteligence a deterministické struktury dokumentů

Rozpoznávání jmen může těžit z návrhů generovaných umělou inteligencí, avšak základní indexový model zůstává deterministický a podléhá kontrole autora. Umělá inteligence může navrhovat kandidáty na jména osob nebo normalizovat variantní tvary jmen, zatímco autoritativními vědeckými údaji zůstávají explicitní indexové značky.

Obsahy nevyžadují použití umělé inteligence. Vytvářejí se deterministicky na základě hierarchie dokumentu a nastavení importovaných polí.

## Aktuální stav vývoje

| Schopnost | Stav |
|---|---|
| Velkoformátová publikace/monografieDOCX, dovoz | Implementováno a otestováno na vědecké knize o rozsahu přibližně 200 stran |
| Navigace podle osnovy dokumentu na mobilních zařízeních a počítačích | Implementováno |
| Škálovatelný seznam všech not s odloženým načítáním editoru not | Implementováno |
| Import slov z „`XE`“ / „`INDEX`“ | Implementováno |
| Ruční označování indexu jmen a navigace podle výskytu | Vývojový PR / řádek pro revizi |
| Rozpoznávání slov „`TOC`“ a dynamický sémantický obsah | Vývojová větev PR / revizní větev |
| Přesné odkazy v textu pro každý výskyt importovaného dokumentu ve formátu Word `XE` | Sledování |
| Generování čísel stránek pro obsah a rejstřík při exportu určeném pro tisk | Další kroky |
| Návrhy jmen osob s podporou umělé inteligence | Plánovaná volitelná asistenční vrstva |

Stránka se stavem implementace zůstává oficiálním přehledem vydaných funkcí aplikace Studio a funkcí závislých na konfiguraci.
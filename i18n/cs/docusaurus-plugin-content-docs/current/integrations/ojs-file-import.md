---
title: OJS import souboru s rukopisem
description: Výběr textu v článku, omezení velikosti souboru „DOCX“, vložené obrázky a předání souboru „OJS“ do programu Studio.
---

# OJS import souboru s rukopisem

Tato stránka popisuje, jak systém Open Manuscript Studio vybírá a importuje hlavní soubor rukopisu z příspěvku odeslaného prostřednictvím systému Open Journal Systems (OJS).

## Výběr rukopisů

Součástí příspěvku zaslaného prostřednictvím služby OJS může být rukopis článku, obrázky, fotografie, doplňkové soubory, datové sady a další přílohy. Studio NESMÍ vybrat nejnověji nahraný soubor z úplného seznamu souborů v příspěvku.

V rámci současné integrace s webem OJS vybírá Studio rukopis v tomto pořadí:

```text
OJS submission
    ↓
Submission file stage
    ↓
Article Text component
    ↓
Supported DOCX file
    ↓
Latest eligible revision
    ↓
Open Manuscript Studio import
```

Komponenta „OJS“ **Text článku** označuje hlavní rukopis. Obrázky a další soubory nahrané jako samostatné komponenty „OJS“ nejsou považovány za součást rukopisu, a to ani v případě, že byly nahrány až po souboru „Text článku“.

Konektor by měl poskytovat stabilní metadata žánru typu „OJS/PKP“, která slouží k identifikaci textu článku. Studio by se nemělo spoléhat na lokalizovaný název komponenty, pokud je k dispozici stabilní klíč komponenty.

## Podporované formáty zdrojových souborů

Současný nástroj pro automatický import rukopisů OJS akceptuje DOCX jako zdrojový formát textu článku.

Zdrojový soubor se načítá prostřednictvím autorizovaného integračního koncového bodu OJS. Studio nemá přímý přístup k soukromému adresáři souborů OJS.

## Omezení velikosti souboru

Aktuální maximální velikost textu článku DOCX importovaného z OJS je **25 MB**.

Toto omezení se vztahuje na kompletní balíček DOCX. Ten zahrnuje:

- text rukopisu a jeho formátování;
- poznámky pod čarou a závěrečné poznámky;
- tabulky a další struktury dokumentů;
- grafy uložené v balíčku „DOCX“;
- obrázky vložené do souboru DOCX;
- další údaje obsažené v balíčku „DOCX“.

V důsledku toho může rukopis obsahující mnoho vložených obrázků ve vysokém rozlišení dosáhnout limitu i v případě, že jeho textový obsah je relativně malý.

Samostatné obrázky, grafy, doplňkové soubory nebo jiné přílohy nahrané na OJS mimo komponentu „Text článku“ se **nezapočítávají** do tohoto limitu 25 MB pro text článku DOCX. Jedná se o samostatné soubory pro odeslání OJS, které nejsou vybrány jako zdroj rukopisu.

Studio zkontroluje velikost zdrojového souboru před a po stažení souboru typu „DOCX“. Zdrojový soubor, který překračuje limit, je odmítnut, místo aby byl importován jen částečně.

## Vložené obrázky

Obrázky vložené do textu článku, který splňuje podmínky DOCX, jsou součástí importu rukopisu. Studio extrahuje podporované vložené obrázky spolu se strukturou dokumentu, aby se mohly zobrazit v importovaném rukopisu.

Toto se liší od obrazových souborů nahraných samostatně v rámci odeslání na stránce OJS. Samostatné obrazové soubory nejsou automaticky vkládány do rukopisu článku.

## OJS-předání do studia

Rozsáhlé strukturované soubory, zejména soubory ve formátu „DOCX“ obsahující vložené obrázky, mohou při importu vytvořit datovou zátěž, která je podstatně větší než samotný komprimovaný soubor „DOCX“.

Studio se proto při spouštění z OJSdo Studia nespoléhá na to, že prohlížeč `sessionStorage` přenese kompletní obsah rukopisu. Server dočasně uchovává připravená data pro spuštění a předá prohlížeči krátký token pro jednorázové použití. Studio tento token využije k načtení připravených dat pro spuštění.

Tím se obejdou omezení kapacity úložiště Web Storage v prohlížeči a umožní se předání rukopisů s velkým množstvím obrázků do Studia, aniž by bylo nutné celý rukopis serializovat do formátu `sessionStorage`.

Převodní token je dočasný a určený k jednorázovému použití. Nejedná se o trvalou URL adresu rukopisu ani o autorizační mechanismus pro libovolné soubory na adrese OJS.

## Souhrn provozních údajů

| Vlastnost | Současné chování |
| --- | --- |
| Součást rukopisu časopisu „OJS“ | Text článku |
| Automatický formát zdroje | DOCX |
| Maximální délka textu článkuDOCXová velikost | 25 MB |
| Vložené obrázky z DOCX | Importované |
| Samostatně nahrané obrázky z časopisu „OJS“ | Nebylo vybráno jako rukopis |
| Revize zdroje | Poslední platná revize textu článku |
| Předání mezi prohlížeči | Dočasný jednorázový serverový token |
| Omezení velikosti souboru na adrese `sessionStorage` | Nepoužívá se pro celý rukopis |

## Budoucí konfigurace

Limit 25 MB je v současné době omezením daným implementací. V některé z budoucích verzí nástroje Studio může být maximální velikost zdrojového souboru OJS nastavitelná v rámci konfigurace nasazení. Při nasazování by se nemělo počítat s vyšším limitem, dokud nebude taková konfigurace výslovně podporována a zdokumentována.

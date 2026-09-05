---
id: omi-cloud-federated-infrastructure
title: OMI Cloudová a federovaná infrastruktura
sidebar_label: OMI Cloudová a federovaná infrastruktura
sidebar_position: 6
description: Dlouhodobá architektura pro škálovatelné služby typu „OMI“, volitelné ukládání dokumentů propojených s účtem, suverenitu dat na úrovni institucí a přenositelné vědecké rukopisy s prioritou lokálního uložení.
keywords:
  - OMI Cloud
  - federated infrastructure
  - scholarly cloud
  - object storage
  - S3
  - data sovereignty
  - EU cloud
  - Open Manuscript Studio
---

# OMI Cloudová a federovaná infrastruktura

OMI Lze jej v současné době nasadit na běžnou serverovou infrastrukturu, včetně hostované služby Open Manuscript Studio. Dlouhodobým plánem rozvoje infrastruktury je zajistit horizontální škálovatelnost servisní vrstvy při zachování zásady, která je pro OMI klíčová: **rukopis nesmí být nikdy vázán na jednu hostovanou službu**.

OMI Cloud je proto chápán jako **volitelná spravovaná a federovatelná vrstva služeb**, nikoli jako náhrada za lokální dokumenty typu „`.omi`“ nebo úložiště spravovaná jednotlivými institucemi.

## Cíle

Navrhovaná cloudová architektura by měla umožňovat:

- propojovat dokumenty a pracovní prostory s uživatelskými účty napříč prohlížeči, stolními počítači, zařízeními s Androidem a klienty iOS/iPadOS;
- synchronizovat rukopisy, verze, soubory, oprávnění a stav spolupráce napříč zařízeními;
- podporovat pracovní prostory pro jednotlivce, výzkumné skupiny, vydavatele a instituce;
- škálovat výpočetně náročné úlohy importu, konverze, ověřování a exportu nezávisle na interaktivním rozhraní API;
- jasně stanovit pravidla pro umístění dat, dobu jejich uchovávání a výběr poskytovatele úložiště;
- umožnit institucím, aby v případě potřeby provozovaly vlastní kompatibilní úložiště nebo nasazení;
- zachovat přenositelné lokální soubory a zajistit snadný export kdykoli.

## Navrhovaná topologie služby

Nasazení v produkčním měřítku umožňuje oddělit interaktivní poskytování obsahu od trvalého ukládání a zpracování na pozadí:

```text
Clients: Web · Windows · Linux · macOS · Android · iOS/iPadOS
                              │
                         CDN / ingress
                              │
                         Studio API
          ┌───────────────────┼───────────────────┐
          │                   │                   │
     identity/session    manuscript/workspace   integrations
          │                   │                   │
          └──────────── PostgreSQL ──────────────┘
                              │
                    S3-compatible object store
                              │
                    queue / background workers
                              │
          PDF · DOCX · export · validation · indexing
```

Konkrétní poskytovatel cloudových služeb není záměrně součástí specifikace „OMI“. Architektura by měla vycházet spíše z přenositelných rozhraní a vzorů nasazení než z proprietární sémantiky úložišť.

## Úložiště dokumentů propojené s účtem

V režimu spravovaného cloudu OMI může uživatelský účet vlastnit jeden nebo více pracovních prostorů nebo být jejich součástí. Pracovní prostor může obsahovat rukopisy, zdroje, historii verzí, exportované produkty a metadata pro řízení přístupu.

Užitečná logická hierarchie je následující:

```text
OMI Account
  └─ Workspace
      └─ Manuscript
          ├─ Versions
          ├─ Assets
          ├─ Review/collaboration state
          └─ Exports
```

Strukturovaná metadata, oprávnění, stav spolupráce a odkazy na transakční verze patří do databáze, jako je například PostgreSQL. Větší neměnné nebo binární objekty – soubory ze zdrojů DOCX/PDF, obrázky, zabalené exporty a další zdroje – se lépe hodí do objektového úložiště kompatibilního se S3.

## Zadní plán a elasticita

Dlouhotrvající zpracování dokumentů by nemělo udržovat otevřený interaktivní HTTP požadavek. Rozsáhlá rekonstrukce PDF, konverze DOCX, vykreslování publikací, validace, indexování a budoucí integrace náročné na výpočetní výkon lze reprezentovat jako úlohy.

Například:

```text
Upload → Queued → Processing → Structural reconstruction → Validation → Ready
```

Pracovníci mohou provádět horizontální škálování v závislosti na délce fronty. Tím se oddělí náročné importy od běžného editačního provozu, díky čemuž je služba vhodná pro širší institucionální využití, aniž by bylo nutné přepracovávat model rukopisu.

## Suverenita dat a federace

OMI Cloud by měl být navržen tak, aby spravovaný hosting byl pohodlný, ale nikdy povinný. Tři režimy ukládání dat by měly zůstat prioritou:

1. **local-first** — přenositelné dokumenty ve formátu `.omi` zůstávají na vlastním zařízení uživatele nebo ve zvoleném souborovém systému;
2. **OMI Cloud se správou** — úložiště a synchronizaci spojené s účtem zajišťuje provozovatel služby OMI;
3. **institucionální/federované úložiště** — instituce může využívat své vlastní kompatibilní objektové úložiště, soukromý cloud nebo vlastní nasazení a zároveň nadále používat klienty služby „OMI“ a formáty pro výměnu dat.

Externí poskytovatelé, jako jsou Nextcloud/WebDAV, OneDrive, Google Drive nebo jiné služby vybrané uživatelem, mohou i nadále představovat další integrační cíle. Volba poskytovatele nesmí měnit definici modelu vědeckého objektu.

V případě nasazení v evropských institucích upřednostňuje plán možnosti uchovávání dat v rámci EU/EHP, jasná pravidla pro uchovávání dat, šifrování při přenosu i v klidu, auditovatelnost, exportovatelnost, možnost smazání účtu a správu přizpůsobenou konkrétní instituci. Jedná se spíše o požadavky na nasazení než o změny v sémantice rukopisů v rámci projektu „OMI“.

## Jak se vyhnout závislosti na dodavateli

Cloudová služba by neměla oslabit záruky přenositelnosti, které byly hnací silou projektu OMI. Architektura proto upřednostňuje:

- pokud je to možné, používat rozhraní pro objekty kompatibilní s S3 namísto rozhraní vázaných na konkrétního dodavatele;
- standardní transakční úložiště kompatibilní s PostgreSQL;
- zdokumentované formáty pro export a zálohování;
- přenosné balíčky „`.omi`“ jako trvalý únikový východ;
- explicitní abstrakce poskytovatelů úložišť v backendu Studia;
- oddělení identity rukopisu od umístění infrastruktury.

Cílem je usnadnit provoz platformy OMI ve velkém měřítku, aniž by došlo k vytvoření nového proprietárního izolovaného úložiště rukopisů.

## Pracovní prostory pro instituce

Instituční implementace mohou vycházet ze stávajícího oddělení mezi osobními účty, identitou vědeckých přispěvatelů, členstvím v instituci a centrální správou. Cloudová pracovní prostředí by měla dodržovat stejná rozmezení: správní pravomoc nad institucí či službou nesmí automaticky znamenat přístup k důvěrným rukopisům, materiálům pro recenzní řízení nebo redakčnímu obsahu.

Instituční pracovní prostory mohou v budoucnu podporovat kvóty, zásady uchovávání, delegované úložiště, skupinová oprávnění, pracovní postupy vydavatelů a prostory pro výzkumné projekty, aniž by došlo ke změně základního formátu dokumentů.

## Postup migrace ze stávajícího nasazení

Migrace by měla probíhat postupně, nikoli formou radikálního přepracování. Nové funkce backendu by měly být implementovány na základě vyměnitelných úložných systémů a abstrakcí úloh, aby stávající nasazení mohlo pokračovat v provozu i během zavádění komponent připravených pro cloud.

Praktický postup je následující:

1. definovat abstrakci poskytovatele úložiště pro stávající persistenci na straně serveru;
2. přidat úložiště objektů kompatibilní se službou S3 pro rozsáhlá data a exporty;
3. přesunout náročné importní a exportní úlohy do trvalé fronty a do pracovního procesu;
4. zavést trvalé ukládání dokumentů v cloudu propojené s pracovním prostorem a odkazy na verze;
5. přidat konfiguraci institucionálních poskytovatelů úložišť a federaci;
6. nasadit redundantní/bezstavové instance služby API za spravovaným ingressem, pokud to vyžaduje provozní zátěž.

## Význam financování a udržitelnosti

Škálovatelná federovaná infrastruktura představuje rovněž strategický směr v oblasti výzkumných infrastruktur. Může podporovat pilotní projekty zahrnující více institucí, univerzitní nakladatelství, vědecké společnosti a programy otevřené vědy, přičemž zachovává otevřenost základních specifikací a referenční implementace projektu „OMI“.

Díky trvalému financování ze strany EU nebo ze strany institucí by bylo možné přejít od současného kompaktního hostovaného nasazení k odolné službě s více uživateli, která by zahrnovala hosting v rámci EU/EHP, provozní bezpečnost, monitorování, zálohování, obnovu po havárii a federaci institucí. Plán **nepočítá** s tím, že by takové financování již bylo zajištěno.

## Stav

Tato stránka popisuje **plánovanou architekturu a směr rozvoje infrastruktury závislý na financování**, nikoli tvrzení, že je již plně nasazena cloudová služba OMI. Stávající lokální úložiště, nativní pracovní postupy se soubory, cloudová připojení v rámci profilů, infrastruktura účtů a Studio API tvoří základ pro implementaci tohoto budoucího kroku.
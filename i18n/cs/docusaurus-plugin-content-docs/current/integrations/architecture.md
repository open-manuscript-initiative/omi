---
title: Integrační architektura
description: Architektonické principy, současné limity implementace a integrační vzory pro propojení platformy „Open Manuscript Studio“ s publikačními a vědeckými systémy.
---

# Integrační architektura

Open Manuscript Initiative (OMI) je koncipován tak, aby byl nezávislý na jakékoli konkrétní publikační platformě či službě. Open Manuscript Studio proto běží jako samostatná aplikace s vlastním úložištěm dat a připojuje se k publikačním, identifikačním, úložným, překladatelským a vědeckým službám prostřednictvím explicitních adaptérů.

> Rukopis je přenosný vědecký dokument, nikoli interní záznam konkrétního publikačního systému.

Aktuální stav jednotlivých konektorů na úrovni produktu najdete na adrese [Integration Implementation Status](./implementation-status.md).

## Aktuální snímek implementace

K 5. září 2026:

- **OJS** funguje v aktuálním pracovním postupu Studia, v závislosti na konfiguraci nasazení, a jeho kompletní cyklus anonymního přezkumu byl ověřen v nativním prostředí OJS 3.5;
- **OMP** je funkční v závislosti na konfiguraci nasazení, s izolací přiřazených studií a úplným ověřením anonymního posouzení v obou směrech v nativním prostředí OMP 3.5;
- **ORCID OAuth** a připojené úložiště jsou integrace závislé na konfiguraci;
- **katalog integračních poskytovatelů** a model režimu ověřování poskytovatelů představují implementované základy;
- **DeepL** v současné době nabízí pouze základní strukturu pro poskytovatele a konfiguraci, nikoli kompletní pracovní postup pro produkční překlady;
- Ukládání dat do repozitářů a propojení s dalšími prvky akademické infrastruktury zůstávají úkoly pro budoucnost.

Jedná se o prohlášení o implementaci, nikoli o prohlášení o shodě s normou „OMI“.

## Doporučená architektura

```text
External scholarly / publishing system
Own application, identity and persistence
        |
        | Integration adapter / plugin / provider client
        | HTTPS + versioned API + explicit authentication
        v
Open Manuscript Studio
OMI manuscript services + Studio persistence
```

Integrační vrstva MUSÍ využívat aplikační služby a APInamísto přímého přístupu mezi databázemi. Studio NESMÍ číst ani zapisovat do interních databázových tabulek publikační platformy a externí platforma NESMÍ být závislá na interním schématu perzistence Studia.

Toto oddělení umožňuje provádět aktualizace nezávisle na sobě, izoluje bezpečnostní hranice a poruchy a umožňuje, aby se vědecký objektový model OMI vyvíjel samostatně.

## Hranice systému pro uchovávání záznamů

Každý připojený systém zůstává autoritou pro data, která spravuje.

| Odpovědnost | Typický autoritativní systém |
|---|---|
| Proces zasílání příspěvků a redakční postup | Publikační platforma |
| Redakční fáze a rozhodnutí | Vydavatelská platforma |
| Pozvánka pro recenzenty a přidělení úkolů | Publikovací platforma |
| Termíny revize a stav externího pracovního postupu | Publikační platforma |
| Správa publikací, čísel a katalogů | Publikační platforma |
| Sémantická struktura rukopisu | OMI / Studio |
| Stabilní kotvy pro rukopisy | OMI / Studio |
| Anotace nativní pro Studio | OMI / Studio |
| Společná úprava rukopisů | OMI / Studio |
| Historie revizí rukopisu | OMI / Studio |
| Potvrzení identity | Poskytovatel identity / propojený registr, přičemž Studio uchovává informace o původu |
| Oprávnění pro vzdálené soubory | Poskytovatel připojeného úložiště |

Mezisystémové identifikátory propojují tyto záznamy, aniž by docházelo ke sloučení jejich modelů trvalého uložení.

## Úrovně integračních schopností

OMI považuje integraci publikačního systému za postupně rozšiřovatelnou funkci, nikoli za funkci typu „všechno nebo nic“.

### Úroveň 1 – Integrace při spuštění

Externí platforma nabízí akci **Otevřít ve Studiu**. Krátkodobé ověřené tvrzení identifikuje instalaci, kontext, objekt, aktéra a povolené rozsahy.

Současná implementace v rámci projektu „OJS“ využívá tento vzor v kontextu spuštění se znaménkem.

### Úroveň 2 — Integrace metadat

Adaptér zpřístupňuje povolená metadata o příspěvcích/rukopisech, jako jsou lokalizované názvy, abstrakty, klíčová slova, autoři a identifikátory. Synchronizace MUSÍ definovat autoritu a původ polí.

### Úroveň 3 – Integrace souborů

Studio načítá povolené soubory rukopisů prostřednictvím ověřených koncových bodů aplikace. NESMÍ přímo přistupovat k soukromým cestám k souborům na serveru.

Současná adresa OJS využívá tuto architekturu pro vyhledávání zdrojových rukopisů.

### Úroveň 4 – Synchronizace rukopisů

Rozsáhlejší konektor mapuje strukturovaný rukopis OMI a jeho deriváty na externí platformu. Synchronizace BY MĚLA být zaměřena na revize a MUSÍ zabránit tichému nahrazení historických zdrojových souborů.

### Úroveň 5 – Začlenění vzájemného hodnocení

Vydavatelská platforma má i nadále rozhodující slovo, pokud jde o zadání, fáze procesu, termíny a redakční rozhodnutí. Studio poskytuje strukturované pracovní prostředí pro vědecké recenzování.

Současná implementace systému OJS/Studio zahrnuje zpracování recenzí přidělených externě, zobrazení pro recenzenty a editory přizpůsobená jejich rolím a základy pro dvojitě slepé recenzování.

### Úroveň 6 – Integrace publikací

Po schválení může Studio MAY vytvořit publikační deriváty nebo strukturované balíčky pro následnou produkci. Za plánování, přiřazování čísel vydání a katalogových čísel a zveřejnění obvykle nadále odpovídají externí publikační systémy.

## Ověřování a důvěra

Integrační vrstva nepředpokládá existenci univerzální metody ověřování. Poskytovatelé mohou vyžadovat:

- podepsaná tvrzení o krátkodobém spuštění;
- OAuth/autorizace ve stylu OIDC;
- API klíče nebo servisní tokeny;
- přihlašovací údaje ke službě spravované v rámci nasazení;
- přihlašovací údaje k aplikacím konkrétního poskytovatele.

Registr poskytovatelů služby Studio může tyto režimy ověřování zpřístupnit v uživatelském rozhraní, aniž by je považoval za vzájemně zaměnitelné.

Produkční integrace MUSÍ využívat protokol HTTPS a autorizaci na základě principu minimálních oprávnění. Přihlašovací údaje NESMÍ být ukládány do zdrojového kódu, zahrnuty do balíčků rukopisů ani vystaveny prohlížeči, pokud patří k integračním službám na straně serveru.

Přihlašovací údaje (e-mail a heslo) NESMÍ být pro daného poskytovatele vymýšleny pouze proto, že tento poskytovatel má na svých webových stránkách pro spotřebitele přihlašovací stránku. Rozhodující je zdokumentovaný model ověřování poskytovatele uvedený v dokumentu „API“.

## OJS integrace

OJS je v současné době referenčním řešením pro integraci vydavatelských platforem.

```text
OJS
  |
  | OMI integration plugin
  | - signed launch
  | - metadata and contributors
  | - manuscript files
  | - review assignment context
  | - revision/review exchange paths
  v
OMI Integration API / Studio service
  |
  v
Open Manuscript Studio
```

OJS zůstává rozhodujícím zdrojem informací ohledně pracovního postupu při předkládání článků do časopisu, přidělování recenzentů, kol recenzního řízení, redakčních rozhodnutí, čísel a stavu publikace. Studio zůstává rozhodujícím zdrojem informací ohledně vzoru rukopisu pro časopis „OMI“ a stavu rukopisu a recenzního řízení v rámci systému Studio.

Implementace již překročila rámec pouhého koncepčního propojení: jsou k dispozici funkce jako podepsané spuštění, načtení/import zdrojových souborů, zpracování přiřazení externích recenzí, povinné nativní recenzní formuláře, opravy rukopisu, oddělená zpětná vazba recenzentů a podepsané vrácení změn. Nativní end-to-end testy v nástroji OJS 3.5 ověřují anonymní přiřazení recenzentů a přístup omezený na konkrétní přiřazení. Kompletní [OJS Integration Profile v1](./ojs-profile-v1.md) zůstává širší než aktuálně ověřená produkční cesta, takže ne každá operace profilu by měla být popsána jako vyhovující nebo kompletní.

## OMP integrace

OMP zůstává prvotřídním cílem pro monografie, sborníky, kapitoly a tiskové pracovní postupy.

[OMP Integration Profile v1](./omp-profile-v1.md) definuje architektonické mapování, včetně autorství a recenzování na úrovni komponent. Plugin OMP, který lze nasadit, nyní implementuje spuštění s podpisem a zohledněním rolí, mapování monografií a studií, přístup k souborům v rámci konkrétního úkolu, nativní recenzní formuláře, opravy, oddělenou zpětnou vazbu a zápis s podpisem.

Nativní testy typu „end-to-end“ v rámci specifikace „OMP“ verze 3.5 ověřují, zda recenzent obdrží pouze přidělenou studii zobrazenou jako anonymní článek. Metadata nadřazené monografie, souběžné studie, nepřidělené soubory a identita přispěvatelů zůstávají mimo tuto projekci pro recenzi. Formální shoda se specifikací „OMI“ a širší kompatibilita s verzí „OMP“ zůstávají samostatnými úkoly pro budoucnost.

## Katalog poskytovatelů integračních služeb

Studio nyní obsahuje registr poskytovatelů integrací a uživatelské rozhraní pro integrace. Účelem této vrstvy je zajistit, aby bylo možné externí služby vyhledávat a konfigurovat, aniž by bylo nutné každého poskytovatele pevně zakódovat do nesouvisejících funkcí rukopisu.

Definice poskytovatele může popisovat:

- identita a kategorie poskytovatele;
- podporovaný režim ověřování;
- stav konfigurace/stav;
- schopnosti klienta/služby;
- požadavky na nasazení.

Jedná se o základ pro rozšiřitelnost, nikoli o důkaz, že každý uvedený poskytovatel disponuje plně funkčním konektorem pro produkční prostředí.

## Služby v oblasti identifikace

### ORCID

ORCID OAuth Podpora závisí na konfiguraci. Studio může zpřístupnit infrastrukturu pro propojování identit, avšak provoz v produkčním prostředí vyžaduje platnou registraci aplikace v rámci služby ORCID, přihlašovací údaje klienta a konfiguraci zpětného volání.

### ROR a metadata týkající se akademické identity

ROR/Údaje o příslušnosti a související identifikační základy mohou obohatit údaje o přispěvatelích na OMI. Externí identifikátory MUSÍ zachovávat původ a NESMÍ nahrazovat model přispěvatelů/agentů na OMI záznamy specifickými pro daného dodavatele.

## Překladatelské služby

DeepL v současné době funguje na úrovni poskytovatele/konfigurační základny. Tato architektura podporuje poskytovatele překladatelských služeb, aniž by mu přiznávala vlastnictví struktury rukopisu či původu překladu.

Konektor pro produkční překlad musí navíc definovat bezpečné ověřování, přiřazení zdrojového a cílového jazyka, správu kvót a chyb, původ výsledků a způsob, jakým se strojový překlad zapojuje do pracovních postupů překladu rukopisů s ohledem na verze.

## Síťové úložiště

Aplikace Studio pro stolní počítače funguje na principu „local-first“ a může ukládat rukopisy do běžných lokálních nebo synchronizovaných složek. Připojené vzdálené úložiště představuje samostatný integrační problém.

Základy úložiště ve stylu WebDAV/Nextcloud lze nakonfigurovat tam, kde je to podporováno. Budoucí konektory specifické pro jednotlivé poskytovatele by měly dodržovat stejné pravidlo: vlastnictví souborů a objektů v dané službě náleží vzdálenému úložišti; rukopis na adrese OMI zůstává přenositelný a lze jej exportovat nezávisle.

## Integrace úložiště a uchovávání

Adaptér repozitáře může obdržet finální verzi rukopisu nebo balíček pro uchovávání. Repozitář zůstává autoritativním zdrojem informací ohledně identity uloženého materiálu, pravidel přístupu a stavu uchovávání.

Tato oblast zůstává v referenční implementaci v plánované fázi a měla by využívat speciální integrační profil namísto přímého propojení s databází.

## Integrace s podporou verzí API

Integrační koncové body BY MĚLY být od samého začátku označeny verzí, například:

```text
/api/integrations/v1/...
```

Změny, které nejsou zpětně kompatibilní, vyžadují novou verzi protokolu. Konektory BY MĚLY sjednávat možnosti, místo aby předpokládaly, že každá implementace OMI podporuje všechny operace.

Záměr protokolu definují platformově neutrální specifikace „[Integration API v1](./integration-api-v1.md)“ a profily hostitelů. Stav implementace produktů je sledován samostatně na stránce [Integration Implementation Status](./implementation-status.md).

## Modely nasazení

### Stejný hostitel, samostatné aplikace

```text
https://example.org/ojs/
https://example.org/omi/
```

Aplikace mohou sdílet infrastrukturu a přitom zachovávat oddělené hranice trvalého ukládání dat a služeb.

### Samostatné subdomény

```text
https://journal.example.org/
https://studio.example.org/
```

Samostatné virtuální hostitelé zajišťují přehledné směrování a jasně vymezené bezpečnostní hranice a jsou vhodné pro mnoho produkčních instalací.

### Samostatná infrastruktura

Publikační systém a Studio mohou běžet na různých serverech nebo je mohou provozovat různé organizace. Stejný protokol s verzemi platí i pro protokol HTTPS.

## Přenositelnost a plynulé odpojení

Integrace NESMÍ způsobit, že rukopis bude nepoužitelný v případě, že externí poskytovatel nebude k dispozici. Stav externí integrace BY MĚL být vyjádřen pomocí identifikátorů, odkazů, funkcí a provenience, nikoli prostřednictvím nedokumentovaných závislostí na strukturách vzdálených databází.

Jedná se o základní architektonickou vlastnost systému „OMI“: externí systémy mohou koordinovat pracovní postupy související s rukopisem, zatímco samotný rukopis zůstává přenositelným vědeckým objektem.

## Disciplína v oblasti statusu

Dokumentace MUSÍ rozlišovat:

1. **stav normativního protokolu/specifikace**;
2. ** Stav implementaceOpen Manuscript Studio**;
3. **připravenost k nasazení/konfiguraci**;
4. **důkaz formální shody**.

To, že se poskytovatel objevuje v integračním katalogu, ještě neznamená, že je automaticky připraven pro nasazení do produkčního prostředí. Návrh integračního profilu není automaticky implementován. Naopak, produkt může fungovat v produkčním prostředí ještě předtím, než bude k dispozici kompletní rámec shody s normou „OMI“.

Aktuální základní verzi referenční implementace najdete na adrese [Integration Implementation Status](./implementation-status.md) a podklady na úrovni specifikace na adrese [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md).
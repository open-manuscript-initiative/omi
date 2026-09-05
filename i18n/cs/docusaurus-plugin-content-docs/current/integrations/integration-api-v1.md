---
title: Integrace API v1
description: Protokol nezávislý na platformě pro propojení implementací systému „OMI“ se systémy pro publikování, recenzování, repozitáře a systémy podporující vědecké pracovní postupy.
---

# OMI Integrace API v1

**Stav:** Návrh  
**Identifikátor protokolu:** `omi-integration/1`

## 1. Účel

Integrace „OMI“ (API) definuje platformově neutrální smlouvu mezi implementací systému „Open Manuscript Initiative“, jako je například Open Manuscript Studio, a externím vědeckým systémem.

Tento protokol je záměrně nezávislý na databázových modelech konkrétních časopisů, vydavatelství, repozitářů či dodavatelů. Platformy OJS a OMP, další publikační platformy, repozitáře a budoucí propojovací nástroje mapují své vlastní pojmy na zde definované společné integrační zdroje.

APIa neznamená, že Studio se stává vlastníkem externího redakčního pracovního postupu. Poskytuje kontrolovanou hranici, přes kterou lze sdílet přenositelné vědecké objekty a kontext pracovního postupu.

## 2. Jazyk specifikace shody

Klíčová slova **MUSÍ**, **NESMÍ**, **JE NUTNÉ**, **MĚL BY**, **NEMĚL BY** a **MŮŽE** je třeba vykládat jako normativní požadavky.

Implementace, která prohlašuje shodu s normou „`omi-integration/1`“, MUSÍ implementovat zjišťování funkcí a MUSÍ identifikovat každou podporovanou volitelnou funkci.

## 3. Architektonické role

Protokol rozlišuje čtyři logické role.

### 3.1 Služba „OMI“

Služba typu „OMI“ hostuje nebo zpracovává přenositelné vědecké objekty. Open Manuscript Studio je jednou z možných služeb typu „OMI“.

### 3.2 Externí platforma

Externí platforma slouží ke správě vědeckého pracovního postupu nebo související služby. Mezi příklady patří systémy pro správu časopisů, nakladatelství monografií, repozitáře, platformy pro preprinty, systémy CRIS a služby v oblasti uchovávání.

### 3.3 Konektor

Konektor mapuje nativní data, oprávnění a životní cyklus externí platformy na integraci „OMI“ API. Konektor MŮŽE být implementován jako plugin, modul, služba nebo brána.

### 3.4 Uživatelský agent

Prohlížeč nebo jiný klient SE MŮŽE účastnit procesu spouštění s podpisem, ale NESMÍ být považován za důvěryhodný subjekt pro vynucování pravidel autorizace nebo anonymity.

## 4. Slovní zásoba týkající se společných zdrojů

API používá záměrně obecné názvy zdrojů.

### 4.1 Instalace

`installation` identifikuje jedno nasazení na externí platformě.

Příklady:

- jedna instalace OJS;
- jedna instalace OMP;
- jedno institucionální repozitář;
- jeden nájemce hostované publikační služby.

### 4.2 Kontext

`context` je organizační nebo publikační oblast v rámci jedné instalace.

Příklady:

- časopis vydávaný organizací „OJS“;
- tisková zpráva z OMP;
- sbírka repozitářů;
- konference;
- institucionální jednotka.

Konektory NESMÍ předpokládat, že `context` znamená `journal`.

### 4.3 Předložení

`submission` je externě spravované vědecké dílo nebo objekt pracovního postupu, který je propojen s rukopisem na stránce OMI.

MŮŽE se jednat o příspěvek do časopisu, monografii, sborník, příspěvek do sborníku z konference, preprint nebo jinou vědeckou práci.

### 4.4 Komponenta

`component` je část příspěvku nebo publikace s vymezeným rozsahem.

Mezi příklady patří kapitola, příloha, úvodní část, závěrečná část, soubor obrázků, doplňkový datový soubor nebo jiná součást definovaná hostitelem.

Komponenty MOHOU být vnořeny, pokud externí platforma podporuje hierarchii.

### 4.5 Přispěvatel

Identifikátor „`contributor`“ představuje osobu nebo organizaci spojenou s podáním nebo jeho součástí. Role a rozsah MUSÍ být zachovány, jsou-li k dispozici.

### 4.6 Soubor

`file` představuje chráněný nebo veřejný binární zdroj spravovaný jedním z připojených systémů.

### 4.7 Zadání k opakování

Identifikátor recenzenta (`reviewAssignment`) představuje autoritativní externí přiřazení recenzní práce k recenzentovi nebo k identitě recenzenta.

### 4.8 Kolo hodnocení

Identifikátor „`reviewRound`“ označuje samostatný cyklus posuzování pro konkrétní podání nebo součást.

### 4.9 Revize

Identifikátor revize (`revision`) označuje sledovatelný stav rukopisu. Revize NESMÍ bez upozornění přepsat neměnný historický stav.

### 4.10 Zveřejnění

`publication` představuje stav určený pro publikaci nebo metadata spravovaná externí publikační platformou.

## 5. Identifikátory zdrojů

Každý externí zdroj MUSÍ obsahovat identifikátor, který je v rámci dané instalace neměnný.

Implementace OMI by MĚLA ukládat následující tuple:

```text
installationId + resourceType + externalId
```

jako standardní externí odkaz.

Konektor BY MĚL rovněž poskytovat neprůhledný, globálně jedinečný identifikátor typu „`uri`“, pokud jej hostitelská platforma dokáže vygenerovat.

Externí identifikátory MUSÍ být považovány za neprůhledné řetězce, a to i v případě, že konkrétní platforma v současné době používá celá čísla.

Příklad:

```json
{
  "installationId": "pkp-example",
  "resourceType": "submission",
  "externalId": "1542",
  "uri": "urn:example:ojs:submission:1542"
}
```

## 6. Základní cesta k souboruAPI

Implementace protokolu HTTP BY MĚLY zpřístupňovat následující zdroje verze 1:

```text
/api/integrations/v1/
```

Instalace MŮŽE připojit adresář „API“ pod jinou cestou k aplikaci, avšak sémantika zdrojů MUSÍ zůstat nezměněna.

Všechny produkční koncové body MUSÍ používat protokol HTTPS.

## 7. Zjišťování schopností

### 7.1 Koncový bod

```http
GET /api/integrations/v1/capabilities
```

Před provedením volitelných operací MUSÍ být k dispozici zjištění schopností.

Příklad odpovědi:

```json
{
  "protocol": "omi-integration/1",
  "implementation": {
    "name": "Open Manuscript Studio",
    "version": "0.1.0"
  },
  "capabilities": [
    "launch",
    "metadata.read",
    "files.read",
    "manuscript.read",
    "manuscript.write",
    "review.read",
    "review.write",
    "revision.write",
    "publication.export"
  ]
}
```

Klienti NESMÍ předpokládat podporu funkce, která není deklarována.

## 8. Registr počátečních schopností

Verze 1 definuje následující názvy funkcí:

| Vlastnost | Význam |
| --- | --- |
| `launch` | Přihlášení uživatele do pracovního prostoru OMI |
| `metadata.read` | Načíst metadata externího příspěvku |
| `metadata.write` | Zápis povolených metadat do externího systému |
| `contributors.read` | Seznam přispěvatelů a rolí s omezeným rozsahem |
| `contributors.write` | Zápis povolen – změny přispěvatelů |
| `files.read` | Výčet a načtení autorizovaných souborů |
| `files.write` | Nahrát soubory do externího pracovního postupu |
| `manuscript.read` | Načíst reprezentaci rukopisu z databáze „OMI“ |
| `manuscript.write` | Odeslat návrh rukopisu do časopisu „OMI“ |
| `review.read` | Načíst kontext autorizované kontroly |
| `review.write` | Zobrazit strukturované výsledky recenzí |
| `revision.read` | Načíst historii revizí nebo metadata revizí |
| `revision.write` | Vytvořit novou externí revizi |
| `publication.read` | Načíst metadata/stav publikace |
| `publication.export` | Exportovat odvozené publikace |

V budoucích specifikacích MOHOU být zaregistrovány další názvy funkcí. Neznámé názvy funkcí MUSÍ být bezpečně ignorovány.

## 9. Slavnostní uvedení s autogramiádou

Operace spuštění umožňuje oprávněnému uživateli na externí platformě vstoupit do příslušného pracovního prostoru OMI, aniž by došlo k odhalení databáze externí platformy nebo soukromé relace.

Startovní náklad by MĚL obsahovat:

```json
{
  "protocol": "omi-integration/1",
  "installationId": "pkp-example",
  "context": {
    "externalId": "1",
    "type": "journal"
  },
  "submission": {
    "externalId": "1542"
  },
  "actor": {
    "externalId": "27"
  },
  "scope": ["manuscript.read", "manuscript.write"],
  "issuedAt": "2026-08-07T18:00:00Z",
  "expiresAt": "2026-08-07T18:05:00Z",
  "nonce": "b4b65f2b-0c63-4c21-8b82-876728f0bd31"
}
```

Užitečné zatížení MUSÍ být ověřeno. Implementace MOHOU používat HMAC u vzájemně nakonfigurovaných instalací a MĚLY BY podporovat asymetrické podpisy pro integrace napříč nezávislými doménami důvěry.

Přijímající služba MUSÍ před vytvořením integrační relace ověřit podpis, datum vypršení platnosti, identitu instalace, jednorázový kód (nonce) nebo ekvivalentní ochranu proti opakovanému odeslání a požadovaný rozsah.

## 10. Reprezentace kontextu

Příklad kontextu deníku:

```json
{
  "externalId": "1",
  "type": "journal",
  "name": {"en": "Example Journal"},
  "url": "https://journal.example.org/"
}
```

Příklad kontextu v tisku:

```json
{
  "externalId": "3",
  "type": "press",
  "name": {"en": "Example University Press"},
  "url": "https://press.example.org/"
}
```

Pole „`type`“ je popisné a rozšiřitelné. Klienti NESMÍ odmítnout jinak platný kontext pouze z toho důvodu, že jeho typ není znám.

## 11. Metadata k příspěvku

Normalizované znázornění odeslaných dat BY MĚLO podporovat lokalizované hodnoty.

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript",
    "hu": "Példa kézirat"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "identifiers": [],
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

Hodnoty stavu specifické pro hostitele MOHOU být zadány, avšak konektor BY je měl, pokud je to možné, také přiřadit k zdokumentovanému normalizovanému stavu pracovního postupu.

## 12. Autoři

Reprezentace přispěvatelů BY MĚLY zachovávat identitu, roli, pořadí, rozsah a identifikátory.

```json
{
  "externalId": "author-12",
  "name": {
    "given": "Ada",
    "family": "Example"
  },
  "roles": ["author"],
  "scope": {
    "type": "submission",
    "externalId": "1542"
  },
  "identifiers": [
    {"scheme": "orcid", "value": "0000-0000-0000-0000"}
  ]
}
```

U sborníků MŮŽE být příspěvek zařazen do jedné nebo více částí, nikoli do celého sborníku.

## 13. Součásti

Tyto komponenty umožňují integraci monografií, sborníků a dalších složených děl.

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "parentExternalId": null,
  "title": {"en": "Chapter Seven"},
  "sequence": 7
}
```

Konektor typu „OJS“ (Základní publikace) NEMUSÍ zpřístupňovat žádné součásti. Konektor typu „OMP“ (Publikace s kapitolami) NEMUSÍ zpřístupňovat kapitoly, úvodní část, závěrečnou část, přílohy ani jiné součásti publikace.

## 14. Výměna souborů

Výpis souborů BY MĚL vracet metadata, aniž by vyžadoval okamžitý binární přenos.

```json
{
  "externalId": "file-889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "size": 482931,
  "stage": "submission",
  "checksum": {
    "algorithm": "sha256",
    "value": "..."
  }
}
```

Stažení binárního souboru MUSÍ vyžadovat autorizaci nezávislou na znalosti identifikátoru souboru. Cesty v soukromém souborovém systému NESMÍ být zveřejněny.

Nahrané soubory BY MĚLY vytvořit nový sledovatelný soubor nebo revizi v souladu se sémantikou hostitelské platformy.

## 15. Výměna rukopisů

Je-li podporována služba `manuscript.read` nebo `manuscript.write`, je preferovaným kanonickým objektem výměny balíček OMI, který odpovídá příslušným specifikacím formátu souboru OMI a architektury kontejneru.

Konektory MOHOU navíc podporovat odvozené formáty, jako jsou JATS, HTML nebo DOCX.

Derivát NESMÍ bez upozornění nahradit kanonický vědecký objekt OMI, pokud to přijímající implementace výslovně nestanoví.

## 16. Revizní model

Operace revize MUSÍ zachovat původ.

Záznam o revizi BY MĚL obsahovat:

```json
{
  "externalId": "revision-4",
  "sequence": 4,
  "createdAt": "2026-08-07T18:20:00Z",
  "createdBy": {"externalId": "27"},
  "source": "omi",
  "parentExternalId": "revision-3"
}
```

Pokud externí platforma nedisponuje revizními zdroji prvního řádu, MUSÍ konektor dokumentovat, jak se revize typu „OMI“ mapují na její model souborů nebo pracovních postupů.

## 17. Recenze kolegy

### 17.1 Pravomoc

Externí systém řízení pracovních postupů zůstává rozhodující, pokud jde o přidělování recenzentů, termíny, stav kola, slovník doporučení a redakční rozhodnutí, pokud profil výslovně nestanoví jinak.

### 17.2 Zkontrolujte, jak je úkol zadaný

```json
{
  "externalId": "review-991",
  "roundExternalId": "round-2",
  "target": {
    "type": "submission",
    "externalId": "1542"
  },
  "reviewMode": "double-anonymous",
  "dueAt": "2026-09-01T23:59:59Z",
  "permissions": ["manuscript.read", "review.write"]
}
```

Cíl MŮŽE místo toho odkazovat na komponentu, což umožňuje provádět kontrolu na úrovni kapitol v pracovních postupech při tvorbě monografií.

### 17.3 Anonymita

Filtrování identit MUSÍ proběhnout na serveru před vrácením datové části pro kontrolu. NESMÍ se spoléhat na uživatelské rozhraní na straně klienta, pokud jde o skrytí identit, které již byly odeslány.

### 17.4 Výsledek strukturovaného přezkumu

```json
{
  "assignmentExternalId": "review-991",
  "recommendation": "revisions-required",
  "summary": "The argument is promising but requires clarification.",
  "annotations": [
    {
      "anchor": "omi:anchor:01J...",
      "visibility": "author-and-editor",
      "body": "Please provide a source for this statement.",
      "status": "open"
    }
  ]
}
```

Přesný slovník doporučení MŮŽE být definován hostitelem. Konektory BY MĚLY zveřejňovat povolené hodnoty jako součást kontextu kontroly.

## 18. Výměna publikací

Publikace MOHOU obsahovat metadata týkající se publikace a požadavky na odvozené materiály. Profily OJS mohou přiřazovat stav publikace k článkům a číslům; profily OMP jej mohou přiřazovat k monografiím, sériím, kapitolám, formátům publikací a katalogovým záznamům.

OMI NESMÍTE předpokládat, že zveřejnění znamená přidělení čísla.

## 19. Mapování profilůOJS

Konektor typu „OJS“ BY MĚL mapovat:

| zdroj „OMI“ | pojem „OJS“ |
| --- | --- |
| instalace | instalaceOJSu |
| kontext | časopis |
| příspěvek | objekt pracovního postupu příspěvku/článku |
| komponenta | volitelná součást článku |
| přispěvatel | autor/přispěvatel |
| soubor | soubor k odeslání |
| revize úkolu | revize úkolu |
| kolo hodnocení | kolo hodnocení |
| revize | sledovatelný stav odeslání/revize |
| publikace | OJS publikace/článek stav publikace |

Konektor „OJS“ MUSÍ využívat podporované aplikační služby, úložiště a háčky OJS namísto přímého přístupu k databázím ze Studia.

## 20. Mapování profilů vOMPu

Konektor typu „OMP“ by měl mapovat:

| zdroj „OMI“ | pojem „OMP“ |
| --- | --- |
| instalace | instalaceOMPu |
| kontext | tisk |
| příspěvek | objekt pracovního postupu pro monografii/příspěvek |
| část | kapitola, úvodní část, závěrečná část, příloha nebo jiná část |
| přispěvatel | autor, redaktor, překladatel, autor kapitoly nebo jiný přispěvatel |
| soubor | soubor k předložení/výrobní soubor |
| revize úkolu | revize úkolu |
| kolo hodnocení | kolo hodnocení |
| revize | sledovatelný stav rukopisu/revize |
| publikace | stav monografie/katalogu |

Konektor „OMP“ MUSÍ zachovat rozsah přispěvatelů, je-li to možné, a NESMÍ sloučit autorství na úrovni kapitol do autorství celé knihy.

## 21. Rozsahy oprávnění

Rozsahy by MĚLY být udělovány v úzkém rozsahu. Verze 1 vyhrazuje rozsahy přizpůsobené schopnostem, včetně:

```text
metadata.read
metadata.write
contributors.read
contributors.write
files.read
files.write
manuscript.read
manuscript.write
review.read
review.write
revision.read
revision.write
publication.read
publication.export
```

Držení platného integračního oprávnění NESMÍ zahrnovat všechny oblasti působnosti.

## 22. Sémantika protokolu HTTP

JSON Koncové body MUSÍ používat kódování UTF-8 JSON a MĚLY BY používat následující typ média:

```text
application/json
```

Budoucí typy médií specifické pro protokol OMIMOHOU být registrovány pro kanonické balíčky nebo strukturované zdroje.

Implementace BY MĚLY používat standardní sémantiku stavových kódů HTTP:

- `200` úspěšné čtení nebo aktualizace;
- `201` byl vytvořen nový zdroj;
- `204` úspěšná operace bez vygenerování odpovědi;
- `400` chybně zadaný požadavek;
- `401` chybějící nebo neplatné ověření;
- `403` ověřen, ale bez oprávnění;
- `404` zdroj nebyl nalezen nebo nebyl záměrně zveřejněn;
- `409` konflikt synchronizace nebo revize;
- `410` externí zdroj byl záměrně odstraněn;
- `422` sémanticky neplatné užitečné zatížení;
- `429` byl překročen limit počtu požadavků.

## 23. Zobrazení chyb

Chyby BY MĚLY být zaznamenány pomocí stabilního strojově čitelného kódu.

```json
{
  "error": {
    "code": "revision_conflict",
    "message": "The external manuscript has changed since the requested base revision.",
    "details": {
      "expectedRevision": "revision-3",
      "currentRevision": "revision-4"
    }
  }
}
```

Klienti NESMÍ při řízení toku programu spoléhat na chybové hlášky srozumitelné pro člověka.

## 24. Souběžnost a synchronizace

Operace zápisu BY MĚLY používat identifikátory revizí, značky entit, časová razítka nebo jiný mechanismus explicitních předběžných podmínek, aby se zabránilo skrytým ztraceným aktualizacím.

Pokud oba systémy změnily stejné autoritativní pole nebo stav rukopisu, měl by konektor nahlásit konflikt, místo aby tiše vybral vítěze.

## 25. Idempotence

Operace vytváření, u nichž je možné provést opakovaný pokus, BY MĚLY podporovat idempotentní klíč. Opakovaná žádost se stejným klíčem a ekvivalentním obsahem BY NEMĚLA vést k vytvoření duplicitních revizí, souborů, recenzí nebo odeslaných příspěvků.

## 26. Bezpečnostní požadavky

Produkční integrace MUSÍ využívat protokol HTTPS.

Tajemství NESMÍ být uváděna v URL adresách viditelných v prohlížeči, pokud je k dispozici bezpečnější způsob výměny. Sdílená tajemství MUSÍ být obměnitelná. Při porovnávání podpisů MUSÍ být tam, kde je to možné, použity operace odolné proti časovým útokům.

Implementace BY MĚLY zaznamenávat integrační události související s bezpečností, aniž by zbytečně zaznamenávaly přihlašovací údaje, nezpracovaná tajná data, obsah soukromých recenzí nebo obsah rukopisů nad rámec provozních potřeb.

## 27. Ochrana osobních údajů a důvěrnost posouzení

Propojovací prvky MUSÍ dodržovat zásadu minimalizace údajů. MĚLY by být přenášeny pouze údaje nezbytné pro požadovanou operaci a v rámci povoleného rozsahu.

Režimy dvojitého anonymního a dalších důvěrných recenzí MUSÍ filtrovat identity, metadata souborů, metadata dokumentů a další identifikační údaje na úrovni serveru, pokud to vyžadují zásady.

## 28. Původ

Importovaná data BY MĚLA obsahovat informace o původu identifikující externí instalaci, identifikátor zdroje, čas synchronizace a revizi zdroje, jsou-li k dispozici.

Generované deriváty BY MĚLY zaznamenávat revizi zdroje OMI, ze které byly vytvořeny.

## 29. Hladké odpojení

Rukopis v systému „OMI“ MUSÍ zůstat interpretovatelný a exportovatelný i v případě, že externí integrace není k dispozici nebo byla odstraněna.

Externí odkazy na pracovní postupy MUSÍ být proto reprezentovány jako explicitní odkazy a původ, nikoli jako nedokumentované závislosti na vzdálených databázových tabulkách nebo proprietárním stavu běhového prostředí.

Odstranění integrace NESMÍ způsobit neplatnost kanonického dokumentu OMI.

## 30. Rozšiřitelnost

Rozšíření specifická pro danou platformu MOHOU být zahrnuta v rámci objektů rozšíření s jmenným prostorem. Základní klienti MUSÍ být schopni bezpečně ignorovat neznámá rozšíření.

Příklad:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

Rozšíření NESMÍ předefinovat sémantiku základního pole.

## 31. Vyjednávání o verzi

Identifikátor protokolu pro tuto specifikaci je:

```text
omi-integration/1
```

Změny, které nejsou zpětně kompatibilní, vyžadují nový hlavní identifikátor protokolu. Nové funkce a volitelná pole MOHOU být zavedeny bez změny hlavního identifikátoru, pokud je stávající klienti mohou bezpečně ignorovat.

Konektory BY MĚLY odmítnout hlavní verzi protokolu, kterou nerozumí, místo toho, aby se pokoušely o nebezpečnou částečnou interpretaci.

## 32. Profily shody

Budoucí registr „OMI“ MŮŽE zveřejňovat pojmenované profily, jako například:

```text
omi-integration/1/core
omi-integration/1/ojs
omi-integration/1/omp
omi-integration/1/repository
omi-integration/1/review
```

Profil definuje požadované funkce a přiřazení pro určitou třídu externích systémů, přičemž zachovává společnou terminologii týkající se zdrojů použitou v této specifikaci.

## 33. Invarianta návrhu

Integrační rozhraní API MUSÍ zachovat architektonické oddělení mezi vědeckým objektem a platformou pro pracovní postupy.

Externí systém může koordinovat předkládání, recenzování, přípravu, publikaci, uložení nebo uchovávání. Systém pro správu vědeckých publikací (OMI) může zajišťovat tvorbu, strukturované recenzování, anotace, transformaci a přenositelné vědecké objekty. Žádná ze stran není povinna převzít interní model uchovávání druhé strany.

Výsledná integrace by měla zůstat vyměnitelná, kontrolovatelná a zvratná.

> Systémy pro řízení pracovních postupů spravují procesy související s rukopisem. Samotný rukopis zůstává přenositelný.
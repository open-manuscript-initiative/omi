---
title: OMP Integrační profil v1
description: OMI Integrace profilu „API“ verze 1 pro Open Monograph Press, zahrnující monografie, sborníky, kapitoly, recenze, revize, produkci a katalogizační pracovní postupy.
---

# OMP Integrační profil v1

**Stav:** Návrh  
**Základní protokol:** `omi-integration/1`  
**Identifikátor profilu:** `omi-integration/1/omp`

## 1. Rozsah působnosti

Integrační profil „OMP“ definuje, jak instalace Open Monograph Press (OMP) mapuje pracovní postupy při vydávání odborných knih na platformově neutrální integrační profil „OMI“ API v1.

Tento profil podporuje monografie, sborníky, kapitoly a další komplexní vědecká díla, aniž by je redukoval na sémantiku časopiseckých článků.

OMP a služba OMI zůstávají samostatnými aplikacemi s oddělenými vrstvami pro ukládání dat. Integrační plugin OMP funguje jako adaptér. Open Manuscript Studio NESMÍ přistupovat přímo k databázi OMP ani k adresáři s privátními soubory.

## 2. Architektonická hranice

```text
OMP
Own application and database
        |
        | OMP OMI Integration Plugin
        | supported PKP/OMP services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

Adaptér NESMÍ vyžadovat opravy (patch) souborů jádra OMP. MĚL BY oddělit implementační detaily specifické pro danou verzi OMPod protokolové vrstvy OMI.

## 3. Model autority

OMP je směrodatný pro:

- identita a konfigurace tiskového zařízení;
- stupeň zpracování podání a fáze pracovního postupu;
- redakční zakázky;
- pozvánky a zadání pro recenzenty;
- termíny pro odevzdání recenzí a uzávěrky;
- redakční rozhodnutí;
- stav pracovního postupu při odesílání a tvorbě souborů;
- stav publikace;
- organizace zaměřená na sériové produkty a katalogy;
- formáty publikací a jejich zveřejňování.

OMI / Studio je autoritou v následujících oblastech:

- strukturovaný vědecký objekt typu „OMI“;
- pevné kotvy;
- hierarchie rukopisů zobrazená v programu „OMI“;
- Anotace nativní pro Studio;
- společná úprava;
- OMI historie strukturálních změn;
- strukturované poznámky k recenzím vytvořené v programu Studio;
- odpověď na anotaci a stav vyřešení;
- přenosné generování balíčků OMI.

## 4. Povinné přiřazení profilů

| OMI Integrace API zdroj | OMP koncept |
| --- | --- |
| `installation` | Instalace OMP |
| `context` | tisk |
| `submission` | objekt pracovního postupu pro předložení / monografii v systému OMP |
| `component` | kapitola, úvodní část, závěrečná část, příloha nebo jiná součást publikace |
| `contributor` | autor, redaktor, překladatel, autor kapitoly nebo jiný přispěvatel |
| `file` | soubor pro zaslání nebo produkční soubor |
| `reviewAssignment` | Zadání recenze na knihu „OMP“ |
| `reviewRound` | Recenze na OMP |
| `revision` | sledovatelný stav revize rukopisu/příspěvku |
| `publication` | vydání monografie a stav pro zařazení do katalogu |

OMP Číselné identifikátory MUSÍ být na hranici protokolu serializovány jako řetězce.

## 5. Identita instalace

Každé připojené nasazení služby OMP MUSÍ mít stabilní adresu `installationId`.

Příklad:

```json
{
  "installationId": "omp-example-university",
  "platform": "omp",
  "profile": "omi-integration/1/omp",
  "baseUrl": "https://books.example.edu/"
}
```

Identifikátor instalace MUSÍ zůstat neměnný i při změně názvů tlačítek, cest nebo veřejných URL adres.

## 6. Kontext tisku

Odkaz OMP se mapuje na OMI `context`.

```json
{
  "externalId": "3",
  "type": "press",
  "path": "example-press",
  "name": {
    "en": "Example University Press"
  },
  "url": "https://books.example.edu/index.php/example-press"
}
```

Identifikátor „OMP“ je stabilní identifikátor vnějšího kontextu. Veřejná cesta představuje navigační metadata a NESMÍ být jedinou trvalou identitou.

## 7. Mapování odeslaných dat

Vědecká práce z adresy OMP odpovídá záznamu na stránce OMI `submission`.

Konektor by MĚL poskytovat:

- ID podání;
- aktuální fáze pracovního postupu;
- aktuální metadata publikace;
- primární locale;
- lokalizovaný název a podtitul, jsou-li k dispozici;
- lokalizovaný popis nebo abstrakt;
- klíčová slova nebo témata, jsou-li k dispozici;
- vztahy s přispěvateli;
- typ publikace, je-li k dispozici;
- data potřebná pro synchronizaci;
- trvalé identifikátory, pokud je to povoleno.

Příklad:

```json
{
  "externalId": "431",
  "type": "edited-volume",
  "status": "review",
  "title": {
    "en": "Studies in Scholarly Communication"
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T18:30:00Z"
}
```

Konektor NESMÍ předpokládat, že každý příspěvek na adrese OMP je monografií od jediného autora.

## 8. Souhrnné vědecké práce

Profil „OMP“ považuje strukturu sloučenin za klíčový aspekt integrace.

Zástupce typu „OMI“ MŮŽE obsahovat:

```text
Book
├── Front matter
│   ├── Title page
│   ├── Preface
│   └── Introduction
├── Chapter 1
├── Chapter 2
├── Chapter 3
├── Appendix
├── Bibliography
└── Back matter
```

Přesnou strukturu určuje odborná práce a model dokumentu OMI, nikoli pevně daná šablona knihy.

## 9. Součásti

OMP Komponenty publikace jsou přiřazeny ke zdrojům OMI `component`, pokud je toto rozlišení důležité z hlediska synchronizace, autorství, recenze, produkce nebo publikace.

Příklad:

```json
{
  "externalId": "chapter-7",
  "type": "chapter",
  "title": {
    "en": "The Evolution of Scholarly Editing"
  },
  "sequence": 7,
  "parentExternalId": null
}
```

Komponenta BY MĚLA zachovat:

- stabilní externí identifikátor;
- typ;
- případně lokalizovaný název;
- pořadí;
- vztah k rodičům, je-li to relevantní;
- rozsah přispěvatelů;
- vztahy mezi soubory a revizemi, jsou-li k dispozici.

Komponenty MOHOU být vnořené.

## 10. Sborníky

Sborník NESMÍ být zredukován na jediný seznam autorů.

Konektor BY MĚL zachovat rozdíly mezi:

- redaktoři svazků;
- autoři na úrovni knihy;
- autoři kapitol;
- překladatelé;
- úvod – autoři;
- komentátoři;
- další role vědeckých přispěvatelů.

Role a rozsah působnosti přispěvatele BY MĚLY být výslovně uvedeny.

## 11. Rozsah působnosti přispěvatelů

Příklad editoru na úrovni knihy:

```json
{
  "externalId": "contributor-18",
  "name": {
    "given": "Anna",
    "family": "Editor"
  },
  "roles": ["editor"],
  "scope": {
    "type": "submission",
    "externalId": "431"
  }
}
```

Příklad autora kapitoly:

```json
{
  "externalId": "contributor-29",
  "name": {
    "given": "Bela",
    "family": "Author"
  },
  "roles": ["author"],
  "scope": {
    "type": "component",
    "externalId": "chapter-7"
  }
}
```

Konektor NESMÍ převádět autorství na úrovni komponenty na autorství celé publikace, pokud tento vztah není výslovně vyjádřen vOMP.

## 12. Identifikátory přispěvatelů

Je-li to možné a přípustné, MĚLY BY prohlášení přispěvatelů zachovávat identifikátory typu „ORCID“ a další identifikátory vědecké identity.

E-mailové adresy a další osobní identifikační údaje SE SMÍ předávat pouze v případě, že to vyžaduje daná operace a povolují to platné zásady pracovních postupů.

## 13. Soubory pro odevzdání a výrobu

OMP Soubory jsou přiřazeny ke zdrojům OMI a `file`.

Konektor BY MĚL rozlišovat účel pracovního postupu, pokud jej poskytuje OMP, například:

- zaslaný rukopis;
- rukopis kapitoly;
- zobrazit soubor;
- opravený rukopis;
- soubor po jazykové korektuře;
- produkční soubor;
- zdroj ve formátu publikace;
- doplňkový majetek.

Příklad:

```json
{
  "externalId": "file-221",
  "name": "chapter-07.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "componentExternalId": "chapter-7",
  "revision": 2
}
```

Studio MUSÍ načítat binární obsah prostřednictvím autorizovaného integračního koncového bodu. Konektor NESMÍ zveřejňovat soukromé cesty v souborovém systému.

## 14. Import do programu Studio

Studio MAY může importovat kompletní monografii, vybrané soubory nebo rukopis v rozsahu jednotlivých komponent v závislosti nOMPké struktuře a oprávnění uživatele.

Při importu by MĚLO být zachováno:

- OMP identita instalace;
- tisková identita;
- identita odesílatele;
- identita komponenty;
- identifikátor zdrojového souboru;
- kontrolní součet, je-li to možné;
- revize zdroje;
- čas synchronizace.

Import NESMÍ měnit zdrojové soubory OMP.

## 15. Strategie pro pracovní prostory typu „OMI“

Implementace MŮŽE využívat buď strategii s jedním pracovním prostorem, nebo strategii s koordinovanými pracovními prostory.

### 15.1 Strategie jednoho pracovního prostoru

Celá kniha je reprezentována jedním pracovním prostorem typu „OMI“, který obsahuje kompletní strukturovaný vědecký objekt.

Tato strategie je vhodná v případech, kdy spolupracovníci spolupracují na celém projektu a celková struktura hraje významnou roli.

### 15.2 Strategie koordinovaného pracovního prostoru

Nadřazený projekt koordinuje samostatně oprávněné pracovní prostory jednotlivých komponent, například tvorbu kapitol ve sborníku.

```text
Edited volume workspace
├── Chapter 1 workspace
├── Chapter 2 workspace
├── Chapter 3 workspace
└── Shared book metadata / structure
```

Implementace MUSÍ zachovat stabilní vztahy mezi nadřazenými a podřízenými objekty. Export MUSÍ umožňovat rekonstrukci zamýšleného složeného díla.

## 16. Řízení přístupu k sborníkům

Autorovi kapitoly BY MĚL být udělen přístup k jeho kapitole, aniž by automaticky získal oprávnění k zápisu do jiných kapitol.

Redaktor MŮŽE získat širší přístup k celému svazku.

Autorizace MUSÍ být vynucována na straně serveru a MĚLA BY vycházet jak z oprávnění k pracovním postupům v nástroji OMP, tak z oprávnění k pracovním prostorům ve Studio.

## 17. Zasílání revizí na adresu OMP

Při vrácení typu „Studio-to-OMP“ MUSÍ být vytvořen nový soubor nebo revize, které lze sledovat, v souladu se sémantikou pracovního postupu popsanou na stránce OMP.

Žádost BY MĚLA uvádět, zda se revize vztahuje na:

- celý podaný návrh;
- konkrétní součást;
- několik složek;
- výrobní výkon.

Příklad:

```json
{
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "baseExternalRevision": "2",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Revised chapter from Open Manuscript Studio"
}
```

Historické soubory NESMÍ být bez upozornění přepsány.

## 18. Podepsaný postup spuštění

Plugin „OMP“ BY MĚL autorizovaným účastníkům pracovního postupu poskytovat akci **Otevřít ve Studiu**.

Úvodní tvrzení BY MĚLO uvádět:

- instalace;
- kontext tisku;
- předložení;
- volitelná cílová součást;
- externí aktér;
- požadované rozsahy;
- čas vydání;
- vypršení platnosti;
- nonce.

Spuštění v rámci kapitoly MŮŽE tuto komponentu explicitně identifikovat.

## 19. Identita uživatele a propojení

Uživatelské ID služby OMP představuje externí potvrzení identity. Studio jej MŮŽE přiřadit k místnímu účtu po úspěšném spuštění s podpisem a autorizaci.

Doporučený externí identifikační klíč je:

```text
installationId + externalUserId
```

E-mail NESMÍ být jediným neměnným identifikačním klíčem napříč systémy.

## 20. Pravomoc provádět vzájemné hodnocení

OMP zůstává rozhodující v otázkách přidělení recenze, kola recenzního řízení, termínu, účinné metody recenzování, povolených doporučených hodnot, stavu dokončení a redakčního rozhodnutí.

Studio MAY poskytuje strukturované prostředí pro vědecké recenzování.

## 21. Cíle přezkumu

Na rozdíl od běžného pracovního postupu při zpracování článku se recenze v rámci programu „OMP“ MŮŽE zaměřit na:

- celá monografie;
- sborník;
- jedna kapitola;
- soubor kapitol;
- další stabilní součást.

Příklad zadání na zhodnocení kapitoly:

```json
{
  "externalId": "review-612",
  "roundExternalId": "round-1",
  "target": {
    "type": "component",
    "externalId": "chapter-7"
  },
  "reviewMode": "double-anonymous",
  "permissions": ["manuscript.read", "review.write"]
}
```

Cíl MUSÍ být výslovně uveden, pokud se posouzení nevztahuje na celý předložený materiál.

## 22. Zkontrolujte anonymitu

Konektor „OMP“ MUSÍ před odesláním dat zajistit dodržování platných zásad kontroly.

Při posuzování jednotlivých částí MUSÍ filtrování identity zohledňovat přispěvatele jak na úrovni knihy, tak na úrovni jednotlivých částí. Odstranění pouze jména autora kapitoly může být nedostatečné, pokud editor, afiliace, poděkování, metadata souboru nebo jiné informace odhalí identitu, která je v rozporu s pravidly.

Studio MUSÍ zajistit dodržování přijatých zásad důvěrnosti na straně serveru.

## 23. Strukturovaný přehled

Podpora studia MAY:

- souhrnné monografické zprávy;
- zprávy na úrovni kapitol;
- stabilní ukotvené anotace;
- komentáře určené pouze pro editory;
- komentáře viditelné pro autora;
- doporučení;
- přílohy recenzenta;
- odpovědi autorů/redaktorů;
- sledování vyřešení anotací;
- několik kol.

Anotace by se měly pokud možno vztahovat na stabilní vědecké objekty OMI, nikoli na souřadnice zobrazených stránek.

## 24. Mezikomponentní přezkum

Recenze celého sborníku MŮŽE obsahovat poznámky zaměřené na více částí.

Příklad:

```json
{
  "assignmentExternalId": "review-700",
  "target": {
    "type": "submission",
    "externalId": "431"
  },
  "annotations": [
    {
      "anchor": "omi:anchor:chapter-2:01J...",
      "body": "This chapter should define the term earlier."
    },
    {
      "anchor": "omi:anchor:chapter-8:01J...",
      "body": "This section conflicts with the terminology used in Chapter 2."
    }
  ]
}
```

Model kotvy „OMI“ by MĚL zajistit, aby tyto komentáře zůstaly beze změny i při změnách rozvržení a stránkování.

## 25. Odpověď autora a revize

Pokud to umožňuje směrnice „OMP“, může Studio zpřístupnit schválené připomínky z recenze redaktorům knih, autorům knih nebo autorům jednotlivých částí v závislosti na rozsahu.

Autor komponenty MŮŽE reagovat a upravovat pouze ty komponenty, k jejichž úpravám má oprávnění.

Rozhodnutí autora NESMÍ být vykládáno jako souhlas recenzenta či redaktora.

## 26. Více kol posuzování

Revizní kola MUSÍ zůstat historicky odlišná. Starší zprávy a poznámky BY MĚLY zachovat svůj původ z daného kola.

Nové kolo MŮŽE odkazovat na nevyřešené poznámky z předchozích kol, aniž by došlo ke změně historického záznamu o recenzi.

## 27. Pracovní prostor pro úpravy

Oprávněný redaktor z tiskového oddělení MŮŽE získat širší přehled studia o celém vědeckém objektu, včetně stavu jednotlivých částí, recenzních zpráv, revizí a vyřešení poznámek.

Redakční rozhodnutí mají v knize „OMP“ i nadále rozhodující platnost.

## 28. Integrace výroby

Po schválení vypracuje Studio MAY strukturované podklady pro produkci v rámci projektu „OMP“.

Mezi možné deriváty patří:

- kanonický balíček OMI;
- strukturovaný XML;
- JATS-kompatibilní s XML, kde je to vhodné;
- HTML;
- EPUBobsah zaměřený na;
- DOCX-odvozené produkční soubory;
- čísla a související aktiva;
- další formáty podporované konvertorem.

Generované deriváty BY MĚLY obsahovat údaj o revizi souboru „OMI“, na jehož základě byly vytvořeny.

## 29. Integrace publikací a katalogů

OMP zůstává rozhodujícím zdrojem informací o stavu publikace z hlediska katalogu, pokud není výslovně určeno jinak.

Konektor MŮŽE poskytovat metadata publikace, jako například:

- název a podtitul;
- přispěvatelé;
- série;
- identifikátory;
- datum vydání;
- formáty publikací;
- popis v katalogu;
- obálka a publikační materiály;
- veřejná URL adresa.

OMI NESMÍTE předpokládat, že monografie má cyklus publikace odpovídající číslování vydání nebo cyklus publikace ve stylu článků.

## 30. Série

Série představují způsob uspořádání publikací a katalogů v rámci systému „OMP“ a MĚLY BY i nadále představovat OMP– autoritativní zdroj.

Rukopis v rámci projektu „OMI“ MŮŽE zachovat externí odkaz na sérii jako součást integračních metadat, ale NEMĚL BY vyžadovat, aby tato série sloužila k interpretaci samotného vědeckého objektu.

## 31. Formáty publikací

OMP může vydat monografii v několika formátech. Tyto publikační formáty jsou odvozenými verzemi nebo reprezentacemi pro distribuci a MUSÍ zůstat odlišitelné od kanonického vědeckého objektu OMI.

Vydání ve formátu PDF, EPUB, HTML ani žádný jiný publikační formát NESMÍ být automaticky považováno za kanonický rukopis na adrese OMI pouze z toho důvodu, že je veřejně šířeno.

## 32. Požadavky na schopnosti

Konektor typu „OMP“, který se odvolává na základní profil „`omi-integration/1/omp`“, MUSÍ podporovat:

```text
launch
metadata.read
contributors.read
files.read
```

Služba podporující konektor by MĚLA navíc zpřístupňovat funkce komponent definované implementací a MUSÍ zachovávat identifikátory komponent v příslušných zdrojích.

Konektor typu „OMP“, který podporuje synchronizaci rukopisů, BY MĚL navíc podporovat:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

Konektor typu „OMP“, který prohlašuje, že podporuje integraci na základě vzájemného hodnocení, MUSÍ podporovat:

```text
review.read
review.write
```

Konektor, který prohlašuje integraci výroby a publikace, BY MĚL podporovat:

```text
publication.read
publication.export
```

## 33. Doporučený povrch koncového bodu

Implementace BY MĚLA poskytovat ekvivalentní operace pro:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/components
GET  /contexts/{contextId}/submissions/{submissionId}/components/{componentId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

V případě potřeby MOHOU být poskytnuty varianty s rozsahem platnosti na úrovni komponenty.

## 34. Oprávnění

Každá operace MUSÍ být autorizována na aplikační vrstvě OMP.

Přihlašovací údaje ke službě navazují integrační vztah, neposkytují však neomezený přístup ke všem tiskovým zprávám, příspěvkům, kapitolám, souborům ani recenzím.

Znalost externího identifikátoru NESMÍ představovat oprávnění.

## 35. Stav synchronizace

Studio BY MĚLO uchovávat metadata o integraci, včetně:

```text
installationId
contextExternalId
submissionExternalId
componentExternalId(s)
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

Tento stav MUSÍ zůstat oddělitelný od kanonického dokumentu OMI.

## 36. Řešení konfliktů

Konektor BY MĚL vrátit hodnotu „`409 Conflict`“, pokud se externí práce liší od základní revize používané aplikací Studio a automatický zápis by mohl vést ke ztrátě dat.

U složených prací by detekce konfliktů MĚLA zohledňovat jednotlivé komponenty, pokud hostitelský pracovní postup dokáže poskytnout dostatečně podrobný stav revizí.

## 37. Idempotence

Operace zápisu s možností opakování BY MĚLY podporovat idempotentní klíče. Při opakování se NESMÍ vytvářet duplicitní revize kapitol, duplicitní revizní zprávy ani duplicitní produkční soubory.

## 38. Audit a původ

Příslušné integrační události BY MĚLY být podléhat auditu, včetně spuštění, importu rukopisu/komponenty, načtení souboru, vrácení revize, zahájení recenze, odeslání k recenzi a exportu do produkčního prostředí.

Auditní protokoly MUSÍ zabránit zbytečnému ukládání obsahu rukopisů, utajených informací a důvěrných textů z recenzí.

## 39. Izolace poruchy

Nedostupnost studia NESMÍ bránit provádění nesouvisejících administrativních úkonů na portálu OMP, správě katalogu ani publikačních operací.

OMP Nedostupnost NESMÍ vést k zneplatnění již importovaného vědeckého objektu typu „OMI“.

Chráněné integrační operace BY MĚLY skončit neúspěchem.

## 40. Kompatibilita s aktualizacemi

Konektor BY MĚL oddělit adaptaci aplikace specifickou pro protokol OMPod protokolu OMI:

```text
OMI Integration API
        |
OMP profile mapper
        |
OMP-version adapter
        |
Supported OMP services / repositories / hooks
```

To umožňuje provádět změny v implementaci specifické pro danou verzi (OMP-version) bez nutnosti předefinovat `omi-integration/1`.

## 41. Implementace sdíleného PKP

OJS a konektory typu „OMP“ MOHOU znovu využívat společné integrační knihovny PKP pro:

- konfigurace instalace;
- podepisování a ověřování podpisů;
- ochrana proti nonce a opakovanému přehrání;
- Modely HTTP odpovědí;
- zjišťování schopností;
- zobrazení vnější identity;
- streamování souborů;
- serializace chyb;
- pomocníci při auditu.

Mapování pracovních postupů specifických pro časopisy a monografie BY MĚLO zůstat v samostatných adaptérech.

```text
                 OMI Integration API v1
                          |
                  PKP shared library
                    /           \
          OJS profile adapter   OMP profile adapter
                 |                    |
                OJS                  OMP
```

Sdílená vrstva NESMÍ vnucovat sémantiku specifickou pro články na OMP ani sémantiku specifickou pro monografie na OJS.

## 42. Rozšíření

OMP- konkrétní data MOHOU být poskytnuta v rámci objektu rozšíření s jmenným prostorem:

```json
{
  "extensions": {
    "org.pkp.omp": {
      "stageId": 3
    }
  }
}
```

Základní klienti MUSÍ bezpečně ignorovat neznámá rozšíření. Rozšíření NESMÍ předefinovat základní pole integračního modulu API.

## 43. Shoda

Implementace, která prohlašuje shodu s`omi-integration/1/omp`, MUSÍ:

1. načíst modul „OMI“ a integrovat modul „API“ verze 1;
2. zveřejnit identitu stabilní instalace OMP;
3. přiřazuje tiskárny ke kontextům a OMP vědecké práce k příspěvkům;
4. zachovat strukturu komponent při jejich odhalení v rámci integrace;
5. zachovat roli a rozsah přispěvatele, jsou-li k dispozici;
6. používat autorizaci na úrovni aplikace;
7. zabránit přímému přístupu Studia k databázovým tabulkám OMP a k soukromým cestám k souborům;
8. uvádět funkce podporované reklamami;
9. zachovat externí identifikátory a původ;
10. vynutit anonymitu recenzí na straně serveru, je-li povolena integrace recenzí;
11. uchovávat sledovatelnou historii revizí pro operace zápisu;
12. zůstat bezpečně odpojitelné od programu Studio.

## 44. Invariant návrhu

Konektor „OMP“ propojuje pracovní postupy při vydávání odborných knih s platformou „OMI“, aniž by rukopis byl závislý na interním datovém modelu služby „OMP“.

OMP zajišťuje pracovní postupy v oblasti tisku, recenzování, výroby, katalogizace a publikování v souvislosti s vědeckými pracemi. Studio umožňuje strukturované vytváření obsahu, spolupráci, vkládání poznámek, recenzování, revize a úpravy. Monografie či sborník zůstávají přenositelným vědeckým objektem.
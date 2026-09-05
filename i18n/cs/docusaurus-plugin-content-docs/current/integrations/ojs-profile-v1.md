---
title: OJS Integrační profil v1
description: OMI Integrace profilu „API“ verze 1 pro Open Journal Systems, včetně pracovních postupů pro zasílání příspěvků, souborů, recenzování, revizí a publikování.
---

# OJS Integrační profil v1

**Stav:** Návrh  
**Základní protokol:** `omi-integration/1`  
**Identifikátor profilu:** `omi-integration/1/ojs`

## 1. Rozsah působnosti

Integrační profil „OJS“ definuje, jak instalace systému Open Journal Systems (OJS) mapuje svůj pracovní postup vydávání časopisů na platformově neutrální integrační profil „OMI“ API v1.

Tento profil je určen pro architekturu, v níž jsou OJS a služba OMI nadále samostatnými aplikacemi s oddělenými vrstvami pro ukládání dat. Integrační plugin OJS funguje jako tenký adaptér. Open Manuscript Studio NESMÍ přímo přistupovat k databázi OJS ani k adresáři s privátními soubory.

OJS zůstává autoritativním zdrojem informací o pracovním postupu při publikování v časopisech. OMI zůstává autoritativním zdrojem informací o přenositelném strukturovaném rukopisu a interakcích v rámci vědeckých publikací přímo v programu Studio.

## 2. Architektonická hranice

```text
OJS
Own application and database
        |
        | OJS OMI Integration Plugin
        | supported OJS services / repositories / hooks
        |
        | HTTPS + OMI Integration API v1
        v
Open Manuscript Studio
Own application and PostgreSQL database
```

Adaptér NESMÍ vyžadovat úpravy (patch) v základních souborech OJS. MĚL BY využívat podporované mechanismy rozšíření PKP/OJS a APIna úrovni aplikace.

## 3. Model autority

OJS je směrodatný pro:

- identita časopisu a konfigurace časopisu;
- stupeň zpracování a fáze pracovního postupu;
- redakční zakázky;
- pozvání recenzenta a přidělení recenze;
- termíny pro odevzdání recenzí a uzávěrky;
- hodnoty doporučení recenzentů přijaté organizací „OJS“;
- redakční rozhodnutí;
- stav pracovního postupu souboru k odeslání;
- stav publikace;
- zadání úkolu;
- zveřejnění veřejného článku.

OMI / Studio je autoritou v oblastech:

- struktura dokumentu „OMI“;
- pevné kotvy;
- Anotace nativní pro dané studio;
- společná úprava rukopisu;
- strukturovaná historie rukopisu v rámci projektu „OMI“;
- strukturované poznámky k recenzím vytvořené v programu Studio;
- stav rozlišení anotací ve Studiu;
- OMI generování balíčků.

Synchronizovaná metadata MUSÍ zaznamenávat původ a NESMÍ bez upozornění vytvářet konkurenční autority.

## 4. Povinné přiřazení profilů

| OMI Integrace API zdroj | OJS koncept |
| --- | --- |
| `installation` | Instalace OJS |
| `context` | časopis |
| `submission` | OJS submission |
| `component` | volitelná součást pro články a příspěvky |
| `contributor` | autor/spoluautor spojený s touto publikací |
| `file` | OJS soubor s příspěvkem |
| `reviewAssignment` | Úkol k recenzi knihy „OJS“ |
| `reviewRound` | Recenze na OJS |
| `revision` | sledovatelný stav revize rukopisu/příspěvku |
| `publication` | OJS záznam o publikaci a stav publikace |

OJS Číselné identifikátory MUSÍ být na hranici protokolu serializovány jako řetězce.

## 5. Identita instalace

Každé nasazení služby „OJS“, které je připojeno ke službě „OMI“, MUSÍ mít pro integraci nakonfigurován stabilní `installationId`.

Identifikátor se NESMÍ změnit v případě přejmenování časopisu nebo změny jeho veřejné URL adresy.

Příklad:

```json
{
  "installationId": "ojs-example-university",
  "platform": "ojs",
  "profile": "omi-integration/1/ojs",
  "baseUrl": "https://journals.example.edu/"
}
```

Služba „OMI“ BY MĚLA uchovávat identitu instalace nezávisle na aktuální základní URL.

## 6. Kontext časopisu

Časopis z adresy OJS odpovídá časopisu z adresy OMI `context`.

Příklad:

```json
{
  "externalId": "1",
  "type": "journal",
  "path": "example-journal",
  "name": {
    "en": "Example Journal"
  },
  "url": "https://journals.example.edu/index.php/example-journal"
}
```

ID časopisu je stabilní externí identifikátor. Cesta k časopisu BY MĚLA být rovněž uvedena pro účely navigace, NESMÍ však být považována za jedinou trvalou identitu.

## 7. Mapování odeslaných dat

Záznam na adrese OJS odpovídá zdroji na adrese OMI `submission`.

Konektor BY MĚL poskytovat alespoň:

- ID podání;
- aktuální fáze pracovního postupu;
- aktuální metadata publikace;
- primární národní prostředí;
- lokalizovaný název;
- lokalizovaný abstrakt, je-li k dispozici;
- lokalizovaná klíčová slova, jsou-li k dispozici;
- data potřebná pro synchronizaci;
- trvalé identifikátory, které již byly přiřazeny k příspěvku/publikaci, je-li to povoleno.

Příklad:

```json
{
  "externalId": "1542",
  "type": "article",
  "status": "review",
  "title": {
    "en": "Example manuscript"
  },
  "abstract": {
    "en": "Example abstract"
  },
  "keywords": {
    "en": ["history", "publishing"]
  },
  "primaryLocale": "en",
  "updatedAt": "2026-08-07T17:30:00Z"
}
```

Konektor BY MĚL rozlišovat stav pracovního postupu OJS od stavu rukopisu OMI. Skutečnost, že se příspěvek nachází ve fázi recenze OJS, ještě neznamená, že dokument OMI je neměnný.

## 8. Metadata publikace

OJS mohou obsahovat metadata určená pro publikaci odděleně od dat o odeslání na úrovni pracovního postupu. Konektor BY MĚL číst bibliografická metadata určená pro autory z reprezentace publikace odpovídající verzi OJS, namísto jejich rekonstrukce z databázových tabulek.

Synchronizace typu „OMI“ NESMÍ předpokládat, že příspěvek má pouze jeden historický stav publikace.

Konektor BY MĚL zachovat identifikátory pro odeslání na OJS a příslušný záznam o publikaci, jsou-li k dispozici.

## 9. Autoři

OJS Seznam autorů a přispěvatelů odpovídá zdrojům pro přispěvatele na stránkách OMI.

Konektor BY MĚL zachovat:

- identifikátor externího přispěvatele;
- příjmení a jména;
- upřednostňovaný veřejný název, je-li k dispozici;
- zasílat e-mail pouze v případě, že to umožňuje aktuální rozsah integrace a pracovní postup;
- příslušnost;
- země, kde je to dostupné a povoleno;
- ORCID a další identifikátory;
- sekvence přispěvatele;
- role přispěvatele, kterou zveřejňuje OJS;
- označení korespondence, je-li to relevantní.

Identita přispěvatele MUSÍ být skryta, pokud to vyžadují zásady anonymního recenzování.

Konektor NESMÍ odhalit totožnost autora recenzentovi, pokud pracovní postup OJS vyžaduje anonymitu autora.

## 10. Součásti

Většinu článků v odborných časopisech lze znázornit jako jeden příspěvek bez podřízených komponent. Profil „OJS“ proto nevyžaduje podporu komponent.

Konektor MŮŽE v případě potřeby zpřístupňovat komponenty definované hostitelem, například třídy doplňkových materiálů nebo strukturované komponenty článků. Taková rozšíření NESMÍ měnit sémantiku základního zdroje odeslaného obsahu.

## 11. Soubory k podání

OJS Soubory odeslané v rámci této výzvy jsou přiřazeny ke zdrojům „OMI“ a „`file`“.

Odpovědi obsahující seznam souborů BY MĚLY zahrnovat:

- stabilní identifikátor externího souboru;
- název zobrazení/souboru;
- typ média, je-li znám;
- velikost, pokud je k dispozici;
- fáze pracovního postupu nebo žánr, je-li to vhodné;
- informace o revizích, jsou-li k dispozici;
- kontrolní součet, je-li to možné;
- vytvoření/aktualizace metadat potřebných pro synchronizaci.

Příklad:

```json
{
  "externalId": "889",
  "name": "manuscript.docx",
  "mediaType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "stage": "submission",
  "revision": 2
}
```

Studio MUSÍ načítat binární obsah prostřednictvím autorizovaného integračního koncového bodu služby OJS. Samotná znalost identifikátoru souboru OJS NESMÍ sloužit jako oprávnění ke stažení.

Plugin NESMÍ odhalovat cesty k souborovému systému serveru OJS.

## 12. Import souboru do programu Studio

Při prvním otevření příspěvku z OJS v aplikaci Studio by uživatel MĚL mít možnost vybrat vhodný soubor rukopisu nebo použít automaticky vybraný primární soubor rukopisu v souladu s pravidly konektoru.

Funkce Import MŮŽE převést formáty DOCX, JATS, HTML nebo jiné podporované formáty do dokumentového modelu OMI.

Původní odkaz na soubor OJS a kontrolní součet BY MĚLY být zachovány jako doklad o původu.

Import NESMÍ měnit zdrojový soubor OJS.

## 13. Zaslání revize na adresu OJS

Při vrácení rukopisu ze Studia do systému „OJS“ MUSÍ být v souladu se sémantikou pracovního postupu popsaného na stránce OJS vytvořen nový, sledovatelný soubor nebo revize na straně OJS.

Konektor NESMÍ bez upozornění přepsat starší verzi zdrojového souboru.

Žádost o revizi BY MĚLA obsahovat:

```json
{
  "baseExternalRevision": "3",
  "source": "omi",
  "omiRevision": "01J...",
  "message": "Author revision from Open Manuscript Studio"
}
```

Konektor typu „OJS“ BY MĚL operaci s konfliktem synchronizace zamítnout, pokud se změnil očekávaný základní stav a automatické sladění by mohlo vést ke ztrátě dat.

## 14. Podepsaný postup spuštění

Plugin „OJS“ BY MĚL zpřístupnit akci **Otevřít ve Studiu** pouze uživatelům, kteří mají oprávnění k příslušnému odeslání a operaci.

Úvodní tvrzení by MĚLO uvádět:

- `installationId`;
- ID kontextu časopisu;
- ID podání;
- OJS ID uživatele;
- požadované oblasti;
- čas vydání;
- doba platnosti;
- nonce.

Příklad rozsahu úprav, které může autor provést při revizi:

```json
[
  "metadata.read",
  "contributors.read",
  "files.read",
  "manuscript.read",
  "manuscript.write",
  "revision.write"
]
```

Recenzent MUSÍ dostat přesně vymezený rozsah, který se vztahuje konkrétně na danou recenzi.

## 15. Identita uživatele a propojení účtů

Identifikátor uživatele služby „OJS“ je externí prohlášení o identitě a NESMÍ se automaticky stát identifikátorem účtu ve službě Studio.

Studio MAY může po úspěšném spuštění s podpisem a lokální autorizaci propojit ověřený účet Studio s jednou nebo více externími identitami služby OJS.

Doporučený klíč je:

```text
installationId + externalUserId
```

E-mailová adresa NESMÍ být používána jako jediný neměnný identifikační klíč napříč systémy.

## 16. Pravomoc k vzájemnému posuzování

OJS zůstává rozhodujícím zdrojem pro:

- zda existuje úkol k revizi;
- který recenzent jej vlastní;
- aktivní kolo posuzování;
- termíny splatnosti;
- přezkoumat postup/zásady;
- zda lze zveřejnit totožnost autora;
- zda lze zveřejnit totožnost recenzenta;
- přípustné doporučené hodnoty;
- stav dokončení;
- redakční rozhodnutí po posouzení.

Studio NESMÍ samostatně určovat recenzenta na stránce OJS ani předjímat redakční rozhodnutí na stránce OJS.

## 17. Zahájení recenze

Spuštění revize MUSÍ identifikovat konkrétní schválený revizní úkol, nikoli pouze podání a uživatele.

Příklad:

```json
{
  "installationId": "ojs-example-university",
  "context": {"externalId": "1", "type": "journal"},
  "submission": {"externalId": "1542"},
  "reviewAssignment": {"externalId": "991"},
  "reviewRound": {"externalId": "2"},
  "actor": {"externalId": "77"},
  "scope": ["manuscript.read", "review.read", "review.write"]
}
```

Plugin „OJS“ MUSÍ před vydáním potvrzení o spuštění ověřit, zda má aktuální uživatel OJS oprávnění provést dané přiřazení.

## 18. Anonymita recenzí

Konektor OJS MUSÍ určit platnou politiku anonymity při kontrole na základě autoritativní konfigurace pracovního postupu OJS a kontextu přiřazení.

Před odesláním datové části viditelné pro recenzenta MUSÍ konektor odstranit data, k jejichž zobrazení recenzent nemá oprávnění.

Filtrování MŮŽE zahrnovat:

- jména přispěvatelů;
- e-mailové adresy přispěvatelů;
- členství;
- ORCID identifikátory;
- poděkování;
- identifikace metadat souboru;
- totožnost osoby, která soubor nahrála;
- další metadata, která by znemožnila uplatnění nastavených pravidel pro kontrolu.

Studio MUSÍ také prosazovat přijatou politiku na straně serveru. Skrytí identity pouze v kódu uživatelského rozhraní Reactnení v souladu s předpisy.

## 19. Strukturovaná revize ve Studiu

Studio MAY představuje recenzi typu „OJS“ jako strukturovanou recenzi typu „OMI“, která obsahuje:

- text celkového přehledu;
- komentáře určené pouze pro editora;
- komentáře viditelné pro autora;
- doporučení;
- ukotvené poznámky;
- odkazy na přílohy;
- stav dokončení;
- odpovědi a stav vyhodnocení anotací.

Zakotvená anotace by měla, pokud je to možné, odkazovat na stabilní kotvu OMI, nikoli na vykreslené souřadnice stránky PDF.

## 20. Zpětná vazba k recenzi

Operace vrácení revize MUSÍ identifikovat přiřazení revize OJS a kolo revize.

Příklad:

```json
{
  "assignmentExternalId": "991",
  "roundExternalId": "2",
  "recommendation": "revisions-required",
  "summary": "The manuscript requires clarification in several places.",
  "editorOnly": "The central argument is publishable after revision.",
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

Konektor MUSÍ ověřit soulad doporučení s hodnotami povolenými pro kontext kontroly „OJS“.

Odeslání recenze do sekce „Studio“ by nemělo automaticky vést k redakčnímu rozhodnutí, pokud společnost OJS výslovně nestanoví a neschválí takový postup.

## 21. Několik kol posuzování

Studio MUSÍ považovat kola revizí v rámci projektu „OJS“ za samostatné externí objekty pracovního postupu.

Anotace z předchozího kola by MĚLY zůstat historicky přiřazeny k tomuto kolu, i když jsou převedeny do dalšího kola za účelem sledování řešení.

Pozdější kolo MŮŽE odkazovat na dřívější poznámky, NESMÍ však přepsat záznam o historickém přezkumu.

## 22. Revize autora a odpověď

Pokud to pracovní postup služby „OJS“ umožňuje, může Studio poskytnout autorovi pracovní prostor obsahující připomínky z recenze, které je autor oprávněn zobrazit.

Autor MŮŽE:

- provést revizi obsahu rukopisu s odkazy;
- reagovat na poznámky k recenzím;
- označit odpověď jako zodpovězenou z pohledu autora;
- vytvořit novou revizi OMI;
- zašlete balíček nebo soubor s revizí na adresu OJS.

Místní rozhodnutí autora NESMÍ být považováno za souhlas recenzenta, pokud to recenzent nebo redaktor výslovně nepotvrdí.

## 23. Použití v redakčních účelech

Redaktoři MOHOU mít širší pravomoci než autoři či recenzenti, a to na základě povolení OJS.

Pracovní prostor aplikace Studio určený pro editory MŮŽE zobrazovat:

- všechny schválené revizní zprávy;
- komentáře určené pouze pro editora;
- úpravy rukopisu;
- stav vyřešení anotace;
- stav synchronizace.

Autoritativní redakční rozhodnutí MUSÍ být i nadále zaznamenáno v souboru „OJS“.

## 24. Integrace publikací

Po schválení může Studio MAY exportovat odvozené publikace pro produkci v rámci služby „OJS“, a to včetně formátů podporovaných specifikacemi OMI a nainstalovanými konvertory.

Mezi možné výstupy patří:

- OMI balíček;
- JATS XML;
- HTML;
- DOCX-odvozený objem výroby;
- související aktiva.

OJS zůstává rozhodujícím zdrojem pro plánování publikací, přidělování čísel, pracovní postup týkající se metadat publikací (DOI/publication), stav korektur a publikací a veřejné doručení, pokud nebude tato pravomoc výslovně delegována v budoucím rozšíření profilu.

## 25. Požadavky na schopnosti

Konektor typu „OJS“, který se odvolává na základní profil „`omi-integration/1/ojs`“, MUSÍ podporovat:

```text
launch
metadata.read
contributors.read
files.read
```

Konektor, který deklaruje **OJS synchronizaci rukopisů**, by MĚL navíc podporovat:

```text
manuscript.read
manuscript.write
revision.read
revision.write
```

Konektor, který prohlašuje, že využívá **OJSní integraci na základě vzájemného hodnocení**, MUSÍ navíc podporovat:

```text
review.read
review.write
```

Konektor, který prohlašuje, že **OJS** je integrován do publikace, by MĚL uvádět:

```text
publication.read
publication.export
```

## 26. Doporučený povrch koncového bodu

Implementace MŮŽE přizpůsobit směrování svému hostitelskému rámci, ale MĚLA BY poskytovat ekvivalentní operace pro:

```text
GET  /capabilities
POST /launch
GET  /contexts/{contextId}
GET  /contexts/{contextId}/submissions/{submissionId}
GET  /contexts/{contextId}/submissions/{submissionId}/contributors
GET  /contexts/{contextId}/submissions/{submissionId}/files
GET  /contexts/{contextId}/submissions/{submissionId}/files/{fileId}/content
GET  /contexts/{contextId}/submissions/{submissionId}/revisions
POST /contexts/{contextId}/submissions/{submissionId}/revisions
GET  /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}
POST /contexts/{contextId}/submissions/{submissionId}/reviews/{assignmentId}/result
GET  /contexts/{contextId}/submissions/{submissionId}/publication
```

Tyto cesty popisují protokolové zdroje; nevyžadují, aby OJS nahradil svou nativní strukturu REST API. Integrační plugin MŮŽE zpřístupnit vyhrazený jmenný prostor adaptéru.

## 27. Oprávnění

Každá operace MUSÍ být autorizována na aplikační vrstvě OJS.

Konektor se NESMÍ spoléhat výhradně na to, že má k dispozici ID odeslání, ID souboru, ID přiřazení ke kontrole nebo přihlášenou relaci ve Studiu.

Přihlašovací údaje typu „služba-služba“ identifikují vztah mezi konektory; autorizace uživatele/pracovního postupu určuje, zda je možné získat přístup k určitému zdroji.

## 28. Stav synchronizace

Studio by MĚLO uchovávat metadata o synchronizaci, včetně:

```text
installationId
contextExternalId
submissionExternalId
externalPublicationId (when applicable)
lastExternalRevision
lastSynchronizedAt
source checksum(s)
```

Stav synchronizace představuje integrační metadata a MUSÍ zůstat oddělitelný od kanonického obsahu rukopisu OMI.

## 29. Řešení konfliktů

Konektor BY MĚL vrátit hodnotu „`409 Conflict`“, pokud se Studio pokusí zapisovat z neaktuální externí základní revize nebo pokud se stav „OJS“ změnil tak, že brání bezpečnému provedení operace.

Konektor NESMÍ řešit konflikty v rukopise tak, že by bez upozornění přepsal obsah souboru `OJS`.

## 30. Idempotence

Při nahrávání revizí, odesílání recenzí a dalších operacích zápisu, u nichž je možné provést opakovaný pokus, BY MĚLO být možné zadat idempotentní klíč.

Síťový opakovaný pokus NESMÍ náhodně vytvořit duplicitní recenzní zprávy ani duplicitní revize rukopisu.

## 31. Audit a původ

Integrační události BY MĚLY být auditovatelné. Mezi příslušné záznamy patří:

- zahájení emise a přijímání;
- import rukopisu;
- načtení souboru;
- vrácení revize;
- zahájení recenzí;
- odeslání recenze;
- export publikace.

Auditní protokoly NESMÍ zbytečně zaznamenávat obsah rukopisů, hesla, sdílené tajné informace ani důvěrné texty recenzí.

## 32. Izolace poruchy

Nedostupnost aplikace Studio NESMÍ bránit běžné správě OJS ani publikačnímu workflow mimo funkce, které jsou výslovně závislé na aplikaci Studio.

Nedostupná instalace programu „OJS“ NESMÍ poškodit ani zneplatnit již importovaný rukopis z programu „OMI“.

Plugin „OJS“ by měl u chráněných integračních operací vrátit stav „closed“ a měl by oprávněným uživatelům poskytnout informace o chybě, na jejichž základě mohou podniknout příslušné kroky.

## 33. Kompatibilita s novějšími verzemi

Integrační plugin BY MĚL oddělit kód mapování specifický pro verzi OJSod protokolové vrstvy OMI.

Z koncepčního hlediska:

```text
OMI Integration API
        |
OJS profile mapper
        |
OJS-version adapter
        |
Supported OJS services / repositories / hooks
```

Díky tomuto oddělení lze adaptér OJS 3.5 dále rozvíjet nebo nahradit, aniž by došlo ke změně platformově neutrální smlouvy `omi-integration/1`.

## 34. Rozšíření

OJS- konkrétní hodnoty MOHOU být zadány v rámci objektu rozšíření s jmenným prostorem:

```json
{
  "extensions": {
    "org.pkp.ojs": {
      "stageId": 3
    }
  }
}
```

Studio MUSÍ být schopno bezpečně ignorovat neznámé přípony OJS. Přípona NESMÍ předefinovat žádné pole z jádra OMI Integration API.

## 35. Shoda

Implementace, která prohlašuje shodu s normou „`omi-integration/1/ojs`“, MUSÍ:

1. přizpůsobit se integraci OMI API v1;
2. zveřejnit identitu stabilní instalace OJS;
3. přiřadit deníky ke kontextům a příspěvky z OJS k příspěvkům;
4. používat autorizaci na úrovni aplikace;
5. zabránit přímému přístupu aplikace Studio k databázovým tabulkám OJS a k soukromým cestám k souborům;
6. uvádět funkce podporované reklamami;
7. zachovat externí identifikátory a původ;
8. vynutit anonymitu recenzí na straně serveru, pokud je povolena integrace recenzí;
9. uchovávat sledovatelnou historii revizí pro operace zápisu;
10. zůstat bezpečně odpojitelné od aplikace Studio.

## 36. Invariantní vlastnost návrhu

Konektor „OJS“ integruje pracovní postup časopisu s platformou „OMI“; nezmění však časopis „OMI“ na subsystém platformy „OJS“.

OJS zajišťuje proces zpracování odborného článku. Studio poskytuje strukturované prostředí pro tvorbu, anotace, recenzování, revize a úpravy. Rukopis zůstává přenositelný mezi oběma systémy.
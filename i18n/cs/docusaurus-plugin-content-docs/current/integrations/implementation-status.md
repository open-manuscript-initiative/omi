---
title: Stav implementace integrace
sidebar_label: Stav integrace
description: Aktuální stav implementace integrací Open Manuscript Studio a externích akademických služeb.
---

# Stav implementace integrace

**Datum platnosti:** 5. září 2026  
**Rozsah:** Referenční implementace Open Manuscript Studio  
**Právní síla:** Informační zpráva o provádění; integrační specifikace zůstávají v příslušných případech závazné.

Tato stránka rozlišuje mezi **implementovaným chováním produktu**, **návrhem protokolu** a **plánovanými konektory**. Samotná existence zdokumentovaného integračního profilu ještě neznamená, že příslušný produkční konektor je hotový.

## Slovní zásoba týkající se stavů

| Stav | Význam |
|---|---|
| **Provozní** | Je implementováno a používáno v rámci aktuálního pracovního postupu studia. Může být stále zapotřebí konfigurace specifická pro dané nasazení. |
| **Závisí na konfiguraci** | Je implementováno v aplikaci Studio, vyžaduje však přihlašovací údaje správce, koncové body, registraci v rámci OAuth/OIDC, doručování e-mailů, migraci databáze nebo externí službu. |
| **Základ** | Datový model, uživatelské rozhraní, registr poskytovatelů, kostra klientské aplikace nebo konfigurace již existují, ale komplexní integrace do produkčního prostředí ještě není dokončena. |
| **Pouze specifikace** | Protokol/profil je zdokumentován, ale referenční implementace zatím neposkytuje kompletní konektor. |
| **Plánováno** | Zamýšlená oblast integrace bez kompletního základu pro implementaci. |

## Aktuální integrační matice

| Integrace | Aktuální stav | Implementované podklady / aktuální rozsah | Zbývající práce |
|---|---|---|---|
| **OJS** | **Závislé na provozu / konfiguraci; ověřeno nativním E2E** | Spuštění s podpisem autora/redaktora/recenzenta; výměna metadat a souborů v rámci konkrétního úkolu; import z DOCX; projekce dvojitě anonymních recenzentů; povinné nativní recenzní formuláře; opravy rukopisu; zpětná vazba viditelná pro autora a pouze pro redaktora; zápis recenze s podpisem HMAC. Ověřeno v jednorázovém nativním prostředí OJS 3.5. | Pokračovat v posilování zabezpečení při vrácení k publikaci, testování kompatibility napříč podporovanými verzemi OJS a dokumentací operátora. |
| **OMP** | **Závislé na provozu / konfiguraci; ověřeno nativním E2E** | Spuštění s podpisem autora/redaktora/recenzenta; přiřazení monografií a studií; rozsah recenzenta omezen na přidělenou studii; soubory v rámci přiděleného úkolu; povinné nativní recenzní formuláře; opravy; oddělená zpětná vazba; zápis podepsaný HMAC. Ověřeno v jednorázovém nativním prostředí OMP 3.5. | Pokračovat v širším testování kompatibility s verzí OMP, v poskytování pokynů k nasazení do produkčního prostředí a v posilování zabezpečení při vracení publikací. |
| **ORCID OAuth/OIDC** | **Závislé na konfiguraci** | Je implementováno ověřování a propojování účtů, směrování osobních a institucionálních přihlašovacích údajů, výběr mezi testovacím a produkčním prostředím, předávání mezi nativním prohlížečem a App-Linkem a přímé ověření ORCID v rámci toku autor-podpis. | Registrace přihlašovacích údajů pro produkční prostředí, konfigurace zpětného volání, monitorování provozu a rozsáhlejší meziplatformní regresní testování. |
| **Google / Microsoft / institucionální OIDC** | **Závisí na konfiguraci** | Jsou implementovány autorizační kód + PKCE, ověření stavu a nonce, ověření discovery/JWKS, kontroly vydavatele a příjemce, explicitní propojení účtů a sdílené nativní předání. | Registrace poskytovatelů v produkčním prostředí, testování nasazení specifické pro nájemce/poskytovatele a provozní monitorování. |
| **Správa propojených identit** | **Provozní / závislá na poskytovateli** | Nastavení účtu zahrnují seznam hesel, identit typu „ORCID“ a OIDC, zobrazují metadata o připojení a posledním použití, podporují explicitní propojení/odpojení a zabraňují odstranění poslední použitelné metody přihlášení. | Širší uživatelské rozhraní poskytovatele a budoucí rozhraní pro správu SAML. |
| **Správa institucí** | **Závisí na konfiguraci** | Jsou implementovány členství v institucích, role `MEMBER`/`ADMIN`/`OWNER`, vyhrazené přihlášení správce, vynucování rolí na straně serveru, centrální správa OMI a ochrana posledního vlastníka. | Pokyny pro migraci a konfiguraci do produkčního prostředí, pokrytí regresních testů autorizace a rozšíření správy integrace institucí. |
| **API pro správu instituce** | **Závislé na konfiguraci** | Přihlašovací údaje počítačů vázané na instituci využívají zobrazení jednorázových tokenů, ukládání pomocí hashování SHA-256, vypršení platnosti/zrušení, explicitní rozsahy a události auditu správy pouze pro přidávání. Jsou implementovány koncové body v1 typu member/context. | Přidat koncové body pro správu integrace v rámci instituce za vyhrazenými rozsahy `integrations:read` / `integrations:write` a rozšířit dokumentaci k automatizaci. |
| **Nativní úložiště rozpoznávající zařízení** | **Funguje na nainstalovaných klientech** | Nainstalovaní klienti rozlišují vlastní zařízení od sdílených/cizích zařízení. Vlastní zařízení si mohou zachovat nativní pracovní cesty; sdílená zařízení si lokální cesty nezachovávají a upřednostňují cloudová připojení v rámci profilu. Jednorázová přenosná/vyměnitelná úložiště zůstávají k dispozici. | Pokračovat v testování obnovy a ověřování okrajových případů specifických pro danou platformu. |
| **Android Documents / SAF** | **Funkční veřejná beta verze** | Systém Android využívá systémový výběrový panel „Documents / Storage Access Framework“ pro otevírání, ukládání, ukládání pod jiným názvem, zálohování pomocí přenosného úložiště „OMI“ a podporované exporty namísto obecných oprávnění ke sdílenému úložišti. | Regresní testování na úrovni zařízení a výrobců a posílení zabezpečení distribuce prostřednictvím obchodů. |
| **Lokálně synchronizované úložiště** | **Funguje na stolním počítači** | Služby OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud a iCloud Drive jsou zastoupeny jako metody lokálně synchronizovaných složek specifické pro daného poskytovatele. Studio ukládá lokálně přenositelné soubory ve formátu OMI, zatímco klient poskytovatele provádí ověřování a synchronizaci. Cesty zůstávají lokální pro dané zařízení. | Pokračovat v testování obnovy v případě přerušení lokální synchronizace nebo synchronizace s poskytovatelem a rozšířit ověřování na nativní platformy. |
| **WebDAV / Nextcloud v rámci profilu** | **Závislé na konfiguraci** | Přímá připojení podporují šifrované přihlašovací údaje na straně serveru, testování připojení, nahrávání přenosných záloh, ověřování integrity, obnovení a mazání. Připojení jsou omezena na ověřený profil ve Studiu a mohou uživatele doprovázet napříč zařízeními. | Vylepšení uživatelského rozhraní specifické pro jednotlivé poskytovatele, monitorování provozu a rozsáhlejší testování interoperability. |
| **Katalog poskytovatelů cloudových služeb** | **Provozní základ** | Pro služby Nextcloud, WebDAV, OneDrive, SharePoint, Google Drive, Dropbox a iCloud Drive je implementována volba poskytovatele → typ účtu (osobní/firemní) → způsob připojení. Místní synchronizované složky představují metody skutečného poskytovatele, nikoli pseudo-poskytovatele. | Postupně přidávejte přímé konektory OAuth 2.0 tam, kde není žádoucí režim nativní/lokální synchronizace. |
| **Strukturovaný překlad DeepL** | **Závislé na konfiguraci** | Spuštění DeepL na straně serveru je implementováno pro výběr, blok, sekci i celý rukopis. Strukturovaná segmentace zachovává vložené značky a vylučuje citace, křížové odkazy, kód, rovnice a záznamy v bibliografii; rozsáhlejší překlady lze ukládat jako samostatné jazykové varianty. | Sledování produkčních přihlašovacích údajů a kvót, uživatelská zkušenost s chybami poskytovatele a širší testování jazykových párů. |
| **Služby v oblasti gramatiky a stylu** | **Závislé na konfiguraci** | Volitelná kontrola kompatibilní s LanguageTool a spuštění nakonfigurovaného jazykového editoru s umělou inteligencí poskytují strukturovaný přehled problémů s pravopisem, gramatikou, interpunkcí a stylem, aniž by docházelo k přímým změnám rukopisu na straně serveru. | Ladění poskytovatele produkčních služeb, řešení latence a chyb a širší jazykové pokrytí. |
| **AI agenti služby „OMI“** | **Závislé na konfiguraci** | Jazykový editor nezávislý na poskytovateli, asistent pro metadata, nástroj pro vytváření shrnutí a kontrola citací fungují prostřednictvím konfigurovatelného koncového bodu pro doplňování textu v chatu přes HTTPS. Návrhy vyžadují výslovné použití ze strany uživatele. Obsah, který podléhá důvěrnosti v rámci recenzního řízení, je blokován, pokud není výslovně povolen. | Testování interoperability poskytovatelů, testovací sestavy, zpracování kvót a latence a další bezpečnostní omezení specifická pro jednotlivé agenty. |
| **Auditní stopa integrace** | **Provozní** | Externí záznamy o provedení obsahují metadata o operaci, poskytovateli a rozsahu, velikosti a souhrny SHA-256 namísto textu rukopisu, výzev, výstupů nebo tajných údajů. | Kontroly vykazování a uchovávání dat a provozní přehledové panely. |
| **Rozšíření pro integraci API v1** | **Provozní základ** | Byly implementovány: registr manifestů rozšíření, kontroly kompatibility a verzí, oprávnění s omezeným rozsahem, funkce, koncové body pouze přes HTTPS a dokumentace k SDK. | Příklady rozšíření třetích stran, zásady pro podepisování a důvěryhodnost a testovací sady pro ověření shody. |
| **Katalog poskytovatelů integrací** | **Provozní** | Studio poskytuje přístup k oblasti Integrace, registru poskytovatelů, metadatům o režimech ověřování, stavu konfigurace, konfiguraci úložiště, nástrojům pro překlad a agentům, informacím o auditu a rozhraním pro rozšíření. | Postupně přidávejte produkční konektory, aniž byste vázali model rukopisu „OMI“ na jednotlivé dodavatele. |
| **Strukturované bibliografické služby** | **Provozní základ** | Strukturované vyhledávání služeb Crossref, DataCite, OpenAlex a MTMT je mapováno do sdíleného bibliografického modelu s normalizací a odstraňováním duplicit podle zásad DOI. Integrováno je také vyhledávání identit pomocí služeb ROR a ORCID. | Ukládání do mezipaměti, zásady pro sladění/provenienci, další registry identifikátorů a řešení spolehlivosti specifické pro jednotlivé poskytovatele. |
| **Weboví poskytovatelé bibliografických služeb s přihlášením** | **Provozní základ / závisí na poskytovateli** | Přednastavené a konfigurovatelné webové služby Academia.edu s přihlášením přes HTTPS lze otevřít, aniž by Studio shromažďovalo hesla. Tauri uchovává relace WebView jednotlivých poskytovatelů a podporuje explicitní vyčištění po odhlášení. | Testování kompatibility specifické pro jednotlivé poskytovatele a přehlednější uživatelské rozhraní pro správu důvěryhodnosti a relací. |
| **Úložiště / uchovávání dat** | **Plánováno** | Architektura podporuje externí adaptéry pro ukládání a uchovávání dat. | Definovat konkrétní profily konektorů a implementovat referenční adaptéry. |

## OJS poznámka k implementaci

OJS jedná se v současné době o nejvyspělejší integraci externí publikační platformy v referenční implementaci. Produkční architektura zachovává OJS a Studio jako samostatné aplikace s oddělenými vrstvami pro ukládání dat. OJS zůstává autoritativním zdrojem pro pracovní postup při předkládání příspěvků, přidělování recenzentů, kola recenzí a redakční rozhodnutí; Studio poskytuje strukturovaný pracovní prostor pro rukopisy a recenze.

Ověřená cesta pokročila za fázi koncepčního profilu zahájení. Studio dokáže přijímat podepsaný kontext OJS, načítat soubory rukopisů prostřednictvím integračních koncových bodů, rekonstruovat strukturu rukopisu z materiálu DOCX, zachovávat podporovanou inline sémantiku a poznámky a zpřístupňovat pracovní postupy autorů, editorů a recenzentů s ohledem na jejich role. Externě přidělené recenze mohou být přijímány a zpracovávány ve Studiu, přičemž hranice dvojitě slepé identity zůstávají součástí recenzního procesu.

Požadavky na straně serveru odvozené z kontextu spuštění OJS jsou omezeny na původ instalace zaregistrovaný správcem a jsou zabezpečeny proti nebezpečným přesměrováním, soukromým/vyhrazeným cílům, procházení cest a změnám oprávnění řízeným požadavkem. Jedná se o součást aktuálních základních bezpečnostních požadavků pro integraci, nikoli o změnu samotného protokolu OJS.

Integrace záměrně využívá hranice typu „application/API“ namísto přímého přístupu k databázi typu „OJS“. Tím se zachovává nezávislost na prostředí nasazení a umožňuje se testování chování protokolu.

To **ne** znamená, že každá operace popsaná v kompletním integračním profilu OJS v1 dosáhla konečného stavu interoperability nebo shody. Synchronizace tam a zpět, cesty publikace a zpětné odezvy a širší kompatibilita verzí zůstávají oblastmi, na kterých se stále intenzivně pracuje.

## OMP poznámka k implementaci

OMP je prvotřídním cílem pro provozní integraci s vyhrazeným pluginem a nativním komplexním pokrytím systému OMP 3.5. Spuštění revizního procesu je vázáno na jednu přiřazenou studii; údaje o nadřazené monografii, souběžných studiích a identitě přispěvatelů jsou z anonymní revizní projekce vyloučeny. OMP zůstává autoritativním zdrojem pro tiskový pracovní postup, přiřazení úkolů, kola a chování při dokončování, zatímco Studio poskytuje strukturovaný pracovní prostor pro revizi.

## Model integrace úložišť

Studio nyní využívá tři explicitní kontexty úložiště.

**Vlastní zařízení / nativní systémové úložiště.** Na důvěryhodném nainstalovaném zařízení může Studio využívat běžné nativní úložiště dané platformy, které si zvolí autor. Cílové platformy typu desktop mohou využívat místní složky, připojená/síťová úložiště a složky synchronizované poskytovatelem. Systém Android využívá systémové rozhraní „Dokumenty“ / „Storage Access Framework“.

**Sdílené nebo cizí zařízení.** U nově zjištěných nainstalovaných zařízení je ve výchozím nastavení aktivována omezená lokální perzistence. Studio neuchovává cestu k lokálnímu pracovnímu souboru a upřednostňuje cloudová připojení patřící k přihlášenému profilu. Jednorázové použití vyměnitelného/přenosného úložiště je i nadále možné, aniž by byla zvolená cesta trvale uložena.

**Přímé připojení prostřednictvím profilu.** Samotná aplikace Studio se připojuje ke službě pro ukládání dat. V současné době je implementována přímá cesta přes WebDAV/Nextcloud s šifrovanými přihlašovacími údaji na straně serveru, jejichž platnost je omezena na ověřeného uživatele. Budoucí připojení k poskytovatelům typu „OAuth“ by měla využívat stejný model s omezením v rámci profilu.

Tento návrh zachovává princip „lokální vlastnictví na prvním místě“, aniž by předpokládal, že každý poskytovatel cloudových služeb musí být pod kontrolou Studia nebo že sdílené zařízení by mělo zachovávat lokální cestu autora.

## Hranice integrace nativního klienta

Webové, desktopové a Android aplikace sdílejí Studio API a integrační smlouvy. Nativní klienti Tauri využívají autentizační protokol kompatibilní s nativními aplikacemi, namísto toho, aby vycházely z chování souborů cookie typického pouze pro prohlížeče. ORCID a OIDC lze vrátit prostřednictvím sdílené nativní předávací cesty.

Nativní práce se soubory je přizpůsobena dané platformě: desktopové aplikace využívají nativní dialogová okna pro soubory a složky, zatímco systém Android využívá aplikaci Documents/SAF. Aplikace Hosted Studio využívá ke stažení exportovaných souborů prohlížeč.

## Režimy ověřování

Integrační vrstva Studio rozlišuje modely ověřování poskytovatelů, místo aby předpokládala, že každá služba může používat stejný typ přihlašovacích údajů. V závislosti na poskytovateli může integrace při ověřování prováděném lokálním synchronizačním klientem využívat protokoly OIDC (OAuth), klíče nebo tokeny (API), přihlašovací údaje služby, podepsaná tvrzení o spuštění (signed launch assertions), přihlašovací údaje spravované v rámci nasazení, přihlašovací údaje s platností v rámci instituce (API) nebo vůbec žádné přihlašovací údaje poskytovatele spravované službou OMI.

Přihlášení pomocí uživatelského jména a hesla je vhodné pouze v případě, že externí poskytovatel takový postup výslovně podporuje. Přihlašovací údaje nesmí být odvozeny z přihlašovacího formuláře na webových stránkách poskytovatele určených pro uživatele.

## Oddělení identity a správy

Identita uživatelského účtu ve studiu, identita vědeckého přispěvatele, členství v instituci a centrální správa jsou záměrně oddělené.

Ověřování určuje, kdo má přístup ke službám Studia. Záznamy o přispěvatelích uvádějí vědecké autorství, afiliaci, ORCID a role přispěvatelů. Členství v instituci vyjadřuje afiliaci k konkrétní organizaci a oprávnění `MEMBER`/`ADMIN`/`OWNER`. Centrální správa představuje samostatnou mezinstitucionální rovinu oprávnění.

Ani vedení dané instituce, ani ústřední správa samy o sobě neudělují přístup k rukopisům, recenzím ani redakčnímu obsahu.

Model správy najdete na adrese [Institutional and Central Administration](./institutional-administration.md).

## Stav produktu versus shoda s normou „OMI“

Stavy uvedené na této stránce popisují **Open Manuscript Studio implementaci produktu**. Nepřisuzují konektoru shodu s normou OMI. Formální shoda vyžaduje specifikace požadavků s uvedením verzí, testovací sestavy a rámec schopností a shody.

Informace o stavu na úrovni specifikací najdete na stránce [OMI Implementation Status Matrix](../governance/implementation-status-matrix.md). Širší přehled o základních verzích produktů Studio najdete na stránce [Studio Implementation Status](../governance/studio-implementation-status.md).

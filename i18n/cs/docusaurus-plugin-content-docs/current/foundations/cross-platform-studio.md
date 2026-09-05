---
title: Multiplatformní architektura studia
sidebar_label: Multiplatformní Studio
---

# Multiplatformní architektura studia

Open Manuscript Studio je koncipován jako jednotné akademické autorské prostředí, které funguje na webu, na stolních počítačích i na mobilních zařízeních, aniž by docházelo k roztříštění modelu rukopisu nebo implementace pracovního postupu.

Projekt neudržuje pro každý operační systém samostatné aplikace. Studio využívá jedno jádro aplikace React/TypeScript a jeden model rukopisu OMI, zatímco tenké vrstvy specifické pro danou platformu poskytují nativní funkce tam, kde je to zapotřebí.

## Stav platformy

| Platforma | Aktuální stav | Směr dodání |
|---|---|---|
| Web | **Provozní** | Hostované studio |
| Windows | **Funkční** | Tauri 2 EXE/MSI |
| macOS | **Cíl automatizované kompilace** | DMG pro Intel a Apple Silicon; zabezpečení podepisování a notářského ověřování zůstává zachováno |
| Linux | **Cíl automatizované kompilace** | AppImage a DEB |
| Android | **Funkční veřejná alfa verze** | Univerzální soubor APK vytvořený v rámci sdíleného procesu vydávání; balení určené pro obchody bude následovat |
| iOS / iPadOS | **Ověřený cíl sestavení nativní aplikace** | Sestavení pro simulátor iPhone/iPad proběhlo úspěšně; distribuce prostřednictvím TestFlightu a App Store vyžaduje podepsání vývojářským certifikátem Apple a finální přiřazení univerzálního odkazu |

Android již není pouze architektonickým cílem nebo cílem pro vývoj. Veřejný univerzální soubor APK se generuje ze sdílené kódové větve Tauri 2 a využívá stejnou logiku pro správu účtů, dokumentů, revizí, integrace a exportu jako ostatní klienti, a to s responzivním zobrazením přizpůsobeným pro mobilní zařízení a nativní správou souborů v rámci frameworku Documents/Storage Access Framework pro Android.

iOS/iPadOS již také překročil rámec plánování zaměřeného výhradně na architekturu. CI nyní generuje projekt Tauri/Xcode, kompiluje aplikaci pro simulátor iPhone/iPad s procesorem Apple Silicon a nahrává výsledný artefakt simulátoru. Zbývající omezení specifické pro Apple se týká fyzických zařízení a veřejné distribuce: před vydáním veřejné verze pro iOS je stále nutné provést skutečné podepsání Apple Developer, provisioning, přiřazení Universal Link a ověření v TestFlightu a App Store.

## Jádro One Studio

```text
                         OMI Studio Core
                                │
               ┌────────────────┼────────────────┐
               │                │                │
             Web UI         Desktop UI       Mobile UI
               │                │                │
            Browser           Tauri 2          Tauri 2
                                │                │
                      ┌─────────┼─────────┐   ┌──┴────┐
                    Windows    macOS    Linux Android iOS/iPadOS
```

Společné jádro zahrnuje, pokud je to technicky možné:

- model vědeckého rukopisu „OMI“;
- strukturované úpravy a chování dokumentu založené na systému Tiptap;
- metadata, autoři, citace, anotace a logika verzování;
- vícejazyčné rozhraní a podpora tvorby obsahu;
- ověřování, obnovení hesla a pracovní postupy související s propojenou identitou;
- postup při dvojitě zaslepeném recenzním řízení;
- OJS a integrační pracovní postupy typu „OMP“;
- klienti z řad institucí a správních orgánů;
- logika importu, exportu a profilů publikací;
- pravidla pro ověřování, integraci a ukládání.

Funkce implementovaná ve sdíleném jádře by proto měla být dostupná pro všechny podporované platformy, pokud operační systém nebo formát zařízení nevyžadují odlišné zobrazení nebo nativní implementaci.

## Adapterová vrstva platformy

Nativní služby operačního systému jsou izolovány za platformovými adaptéry, namísto toho, aby byly zabudovány přímo do editoru či vědeckého modelu. Mezi aktuální příklady patří nativní výběr složek/souborů, nativní dialogová okna pro ukládání, přístup k Android Documents/SAF, přístup k Apple Files/UIDocumentPicker, zápisy do souborového systému, trvalý nebo v rámci bezpečnostního rozsahu uživatelem udělený přístup k souborovému systému, chování aktualizačního programu na ploše a nativní předávání externího ověřování.

Nativní ověřování využívá způsob přenosu odpovídající původu aplikace. Klienti Tauri mohou využívat přenos typu „bearer-session“ a sdílet jednorázové externí ověřovací postupy pro ORCID a nakonfigurované poskytovatele OIDC, místo aby se spoléhali výhradně na soubory cookie prohlížeče.

## Rozhraní pro stolní počítače a mobilní zařízení

Pojem „multiplatformní“ neznamená, že by se na každé zařízení mělo vnucovat stejné rozložení obrazovky.

Desktop Studio nyní podporuje záložky pro více dokumentů ve stylu webového prohlížeče, rozhraní Studio/Účet v režimu celého okna a přepínatelný přehled dokumentu podobný programu Word vedle editoru. Mobilní Studio využívá stejnou logiku práce s rukopisem a úpravami, ale prezentuje ji prostřednictvím navigace přizpůsobené dotykovému ovládání, kompaktních ovládacích prvků, vysouvacích panelů a responzivních panelů. Tablety mohou postupně obnovit úpravy na více panelech, pokud to velikost obrazovky umožňuje.

Současná mobilní verze zahrnuje responzivní navigaci, zobrazení dokumentů a detailů, přístup k účtu/profilu, ovládací prvky pro vkládání, vyhledávání, přepínání jazyků, odhlášení, zpracování návratu z prohlížeče v aplikaci v rámci protokolů ORCIDa OIDC, otevírání a ukládání pomocí nativního správce souborů, nativní export dat a jednotné značení OMI Studio. Android používá Documents/SAF; iPhone/iPad používá Files/UIDocumentPicker. Jedná se o záležitosti týkající se prezentace a platformy; nevyžadují samostatné modely pro Android nebo Apple.

## Přenositelnost s prioritou místních dat a důvěryhodnost zařízení

Model pro více platforem posiluje základní princip „OMI“ (vytvořeno jednou, použito kdekoli): rukopis by neměl být závislý na konkrétní nainstalované aplikaci, poskytovateli cloudových služeb ani operačním systému.

Rukopis vytvořený v systému Windows by měl být použitelný v systémech Linux, macOS, Android, iOS/iPadOS nebo v prohlížeči bez nutnosti převodu do dokumentového modelu specifického pro danou platformu. Přenositelné formuláře `.omi.zip` a OMI JSON poskytují explicitní cíle pro výměnu dat, zatímco serverové služby se využívají pouze tam, kde to vyžadují identity, spolupráce, publikační pracovní postupy nebo přímé integrace.

Nainstalovaní klienti nyní rozlišují mezi důvěryhodností na úrovni zařízení a lokální důvěryhodností.

### Vlastní zařízení

Pokud přihlášený uživatel označí nainstalované zařízení jako své vlastní, může Studio zachovat běžné nativní umístění pracovních souborů. Cílové platformy pro stolní počítače mohou využívat místní složky, připojená/síťová úložiště a složky synchronizované klienty poskytovatelů pro stolní počítače. Systém Android může využívat systémem vybrané cíle v složce Documents/SAF, zatímco zařízení iPhone/iPad mohou využívat systémem vybrané umístění v složce Files/UIDocumentPicker, včetně iCloud Drive a dostupných poskytovatelů dokumentů třetích stran.

### Sdílené nebo cizí zařízení

Nově detekovaná zařízení jsou ve výchozím nastavení v režimu „sdílené/cizí zařízení“. V tomto režimu si Studio neuchovává vybranou cestu k místnímu pracovnímu souboru. Běžný trvalý pracovní postup upřednostňuje cloudová připojení patřící k profilu, pod kterým je uživatel přihlášen.

Uživatel může i nadále výslovně otevřít nebo uložit soubor na vyměnitelné/přenosné úložiště nebo do jiného systémem poskytovaného umístění dokumentů, avšak toto umístění je považováno za jednorázový cíl a není uloženo jako aktuální pracovní soubor.

Tím se zabrání tomu, aby se předstíralo, že rozpoznávání přenosných vyměnitelných disků je ve všech operačních systémech stejné, a zároveň se zachová důležitá bezpečnostní vlastnost: lokální cesty ke sdíleným zařízením se neuchovávají.

## Synchronizované složky konkrétního poskytovatele

Desktop Studio považuje lokálně synchronizovanou složku za způsob připojení konkrétního poskytovatele, nikoli za obecný pseudoposkytovatel.

Pro služby OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive a podobné poskytovatele synchronizace s počítačem:

- ověřování a synchronizaci provádí vlastní klient poskytovatele;
- Studio v tomto režimu nikdy neobdrží heslo poskytovatele ani token OAuth;
- uživatel vybere složku synchronizovanou poskytovatelem prostřednictvím nativního dialogového okna;
- cesta zůstává lokální pro dané zařízení a je izolována podle přihlášeného uživatele, poskytovatele a typu účtu;
- rozsah souborového systému udělený uživatelem může přetrvávat na vlastním zařízení;
- Studio ukládá soubory ve formátu „OMI“ v přenositelné podobě, zatímco klient poskytovatele zajišťuje síťovou synchronizaci.

Přímá připojení přes WebDAV/Nextcloud zůstávají samostatnou integrací serveru v rámci profilu s šifrovanými přihlašovacími údaji.

## Pracovní postup s nativními soubory systému Android

Android využívá systémové rozhraní „Documents / Storage Access Framework“ namísto obecných oprávnění ke sdílenému úložišti.

Současný pracovní postup v systému Android podporuje:

- otevření stávajícího dokumentu typu „OMI“ pomocí výběrového okna systému;
- Uložit do aktuálně vybraného cílového dokumentu;
- Uložit do jiného umístění;
- přenosná záloha `.omi.zip`;
- Formáty pro export určené pro systém Android, včetně OMI JSON/package, JATS XML, HTML package, DOCX, LaTeX a EPUB.

Nezpracované identifikátory typu „`content://`“ představují detaily implementace a uživateli se nezobrazují jako běžné cesty v souborovém systému.

## Pracovní postup s nativními soubory v systému iOS/iPadOS

iPhone a iPad využívají rozhraní Apple Files / UIDocumentPicker namísto obecného přístupu k souborovému systému. Operace otevření vyžadují přístup k dokumentům v rámci bezpečnostního kontextu a vrstva souborového systému Tauri čte a zapisuje URL adresy `file://` vybrané uživatelem.

V závislosti na nainstalovaných poskytovatelích a konfiguraci zařízení může výběrový panel zobrazovat:

- Na mém iPhonu / Na mém iPadu;
- iCloud Drive;
- připojené externí úložiště podporované systémem iOS/iPadOS;
- Soubory od externích poskytovatelů, které jsou k dispozici prostřednictvím nainstalovaných aplikací pro cloudové úložiště.

Klient pro iOS/iPadOS využívá stejnou sadu exportních možností pro mobilní zařízení jako Android: OMIpackage/JSON, JATS XML, HTMLpackage, DOCX, LaTeX a EPUB. Možnosti určené pro stolní počítače – IDML, XTG, MIF, SLA a tisk z prohlížeče /PDF – jsou skryty, aby se nezobrazovaly jako nefunkční akce pro mobilní zařízení.

Podrobnosti o sestavování, podepisování a univerzálních odkazech specifických pro Apple najdete na stránce [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md).

## Identita účtu napříč platformami

Jeden účet Studio je navržen tak, aby fungoval napříč prohlížeči, stolními počítači i mobilními zařízeními. Mezi současné funkce sdílené identity patří:

- heslo pro registraci/přihlášení/odhlášení;
- postup pro jednorázové obnovení hesla s časovým omezením;
- ORCID přihlášení/propojení;
- Google, Microsoft a konfigurovatelné institucionální řešení OpenID Connect;
- správa metod přihlášení s propojením a ochranou proti zablokování;
- údaje z osobního profilu oddělené od členství v konkrétních institucích;
- Oprávnění pro instituce a ústřední správu jsou oddělena od oprávnění pro rukopisy.

Identity externích poskytovatelů jsou propojeny na základě stabilní identity vydavatele/subjektu, nikoli na základě zobrazovaného jména, a stávající účty nejsou automaticky sloučeny pouze na základě shody e-mailové adresy.

Mobilní klienti využívají jednorázové předání nativního ověření. Preferovaná návratová adresa aplikace přes HTTPS je hostována na adrese `app.openmanuscript.org`, přičemž jako záložní řešení zůstává zachováno vlastní schéma `openmanuscript://`. V systému iOS/iPadOS vyžaduje produkční návratová adresa přes HTTPS navíc přiřazení Apple Universal Link k skutečnému Apple Development Team ID.

## Export a doručení napříč platformami

Exportní vrstva odděluje **vytváření formátu** od **odesílání souboru**.

Hosted Studio využívá běžné stahování prostřednictvím prohlížeče. Nainstalované desktopové klienty používají nativní dialogová okna pro ukládání a zápis do binárního souborového systému. Android využívá cílovou složku „Documents/SAF“; iOS/iPadOS využívá cílovou složku „Files/UIDocumentPicker“. Obě mobilní platformy záměrně omezují zobrazený seznam exportních formátů na ty, které jsou pro danou platformu relevantní.

Tím se zachovává jediná implementace exportu pro akademické formáty a zároveň se každé platformě umožňuje používat vhodný mechanismus pro doručování souborů.

## Služby sdílených účtů a pracovních postupů

Webové i nativní klienty využívají stejnou hranici služby Studio pro identifikaci účtu, členství v instituci, vzájemné hodnocení a externí integrace. Architektura rozlišuje čtyři oblasti:

1. **vědecký stav** — rukopis, metadata, přispěvatelé, poznámky a obsah recenzí;
2. **identita/stav služby** — účty, relace a data pro spolupráci uložená na serveru;
3. **organizační orgány** — členství v institucích a ústřední správa;
4. **možnosti platformy** — nativní přístup k souborům, balení, chování aktualizačního programu a integrace do prostředí mobilních zařízení a stolních počítačů.

Toto oddělení je důležité z hlediska přenositelnosti: přechod z prohlížeče na systém Windows, Android nebo iPad nemá za následek změnu formátu rukopisu ani postupu recenzního řízení a jmenování do funkce správce instituce automaticky neznamená udělení přístupu k vědeckému obsahu.

## Vícejazyčná a regionální nastavení

Sdílený klient v současné době nabízí 24 evropských jazyků uživatelského rozhraní. Předvolby jazyka rozhraní, jazyka rukopisu a jazyka metadat se spravují společně v kompaktním responzivním nastavení. Časová pásma využívají standardní identifikátory IANA s časovými posuny vůči UTC a detekci systémového časového pásma namísto volně zadaných hodnot, takže předvolby účtu zůstávají přenositelné napříč operačními systémy.

## Směr mobilního pracovního postupu

Mobilní klienty jsou určeny spíše k podpoře aktivní vědecké práce než k pasivnímu čtení. Mezi společné cíle patří přihlášení k účtu a přístup k rukopisům, strukturovaná úprava, navigace v dokumentech a úprava metadat, role autorů, editorů a recenzentů, dvojitě slepé recenzní řízení, přístup k pracovním postupům publikačního systému, import a export dokumentů v původním formátu a funkce zabezpečené platformy.

Mezi budoucí nativní funkce mohou patřit rozšířený offline provoz, bohatší pracovní postupy pro sdílení a otevírání souborů, biometrické funkce a push oznámení, aniž by se tyto prvky začleňovaly do dokumentového modelu OMI.

## Inženýrství vydávání

Automatizace vydávání sestavuje artefakty pro Windows, Linux, macOS a Android ze sdíleného repozitáře. Pro iOS/iPadOS je nyní k dispozici simulátorová testovací sestava spouštěná na základě žádosti o pull (PR), která vygeneruje projekt Xcode, zkompiluje aplikaci pro simulátor Apple Silicon a uloží artefakt aplikace. Po zadání přihlašovacích údajů Apple Developer je připraven samostatný manuální pracovní postup pro vydání Apple určený pro podepsané balíčky pro zařízení a App Store Connect.

Reprodukovatelnost je posílena díky grafům závislostí JavaScript a Rust/Tauri řízeným pomocí lockfile a cestám pro instalaci v rámci CI, které zabraňují odchylkám v lockfile.

Tento distribuční model odděluje tvorbu artefaktů od infrastruktury důvěryhodnosti. Podepisování kódu ve Windows, podepisování a notářské ověřování v systému macOS a podepisování v mobilních obchodech Apple a Google představují opatření pro zabezpečení vydávaných verzí, která jsou nadstavbou nad společným sestavením aplikace.

## Proč je to důležité pro akademické publikování

Podpora napříč platformami není jen otázkou pohodlí při nasazení. Autoři, recenzenti, redaktoři, vydavatelé a instituce by měli mít možnost podílet se na stejném akademickém pracovním postupu z různých zařízení, aniž by museli vytvářet nekompatibilní kopie díla. Struktura, poznámky, citace, stav recenze, metadata a sémantika publikace by měly zůstat neměnné, i když uživatel změní operační systém, poskytovatele úložiště nebo typ zařízení.

V této architektuře je **vědecký rukopis ze své podstaty přenositelný a aplikace se přizpůsobuje rukopisu, místo aby jej vázala na sebe.**

## Stav realizace

Webové a Windows verze jsou funkčními součástmi Studia, Android je veřejnou alfa verzí, Linux a macOS jsou automatizovanými cíli pro nativní sestavení a iOS/iPadOS je nyní ověřeným cílem pro nativní sestavení v simulátoru na stejné architektuře Tauri 2. Sdílený klient zahrnuje práci s více dokumenty na ploše, nativní úložiště s podporou zařízení, práci s Android Documents/SAF, práci s Apple Files/UIDocumentPicker, identitu účtu napříč zařízeními a federované ověřování, a to vše navíc k pracovnímu postupu v prohlížeči. Veřejná distribuce pro iOS/iPadOS zůstává omezena podpisem Apple Developer, provisioningem, přiřazením Universal Link a validací v rámci TestFlight/App Store.

Aktuální podrobnosti o implementaci najdete na stránkách [Studio Implementation Status](../governance/studio-implementation-status.md), [Open Manuscript Studio on iOS and iPadOS](./ios-ipados-studio.md), [Integration Implementation Status](../integrations/implementation-status.md) a [Institutional and Central Administration](../integrations/institutional-administration.md).

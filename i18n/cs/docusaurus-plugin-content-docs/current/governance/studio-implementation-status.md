---
id: studio-implementation-status
title: Open Manuscript Studio — Aktuální stav implementace
sidebar_label: Stav implementace studia
description: Aktuální snímek implementace referenční implementace „Open Manuscript Studio“.
keywords:
  - Open Manuscript Studio
  - implementation status
  - beta
  - Android
  - iOS
  - iPadOS
  - peer review
  - OJS
  - OMP
  - DOCX
  - indexes
  - desktop
  - multilingual
  - export
  - institutional administration
  - OIDC
  - storage
---

# Open Manuscript Studio — Aktuální stav implementace

## Snímek

| Pole | Hodnota |
|---|---|
| Stav | **Beta** |
| Datum snímku | **5. září 2026** |
| Aktuální řada produktů | `0.1.0-beta.3` |
| Referenční implementace | Open Manuscript Studio |
| Repozitář zdrojového kódu | `open-manuscript-initiative/open-manuscript-studio` |
| Cílová webová stránka | Moderní prohlížeče |
| Cílové platformy pro stolní počítače | Windows x64, Linux x64, macOS Intel, macOS Apple Silicon |
| Mobilní cíle | Veřejný univerzální APK pro Android; ověřený nativní simulátor pro iOS/iPadOS, distribuce přes TestFlight/App Store čeká na podpis od Apple Developer |
| Nasazení na webu | `studio.openmanuscript.org` |

Aktuální beta verze Studia je **`0.1.0-beta.3`**. Označení „beta“ znamená, že jsou implementovány hlavní pracovní postupy pro tvorbu obsahu, import/export, ověřování, nativní klient a revize na OJS/OMP a že projekt přešel z fáze vytváření základů funkcí k práci na interoperabilitě, regresních testech, obnově a přípravě na vydání. To **neznamená**, že každá volitelná integrace nebo distribuční kanál jsou zcela připraveny pro produkční nasazení.

Tato stránka popisuje **implementované funkce produktu**, nikoli soulad sOMIkou specifikací. Úroveň vyspělosti formální specifikace a důkazy o souladu se sledují samostatně v rámci projektu „[OMI Implementation Status Matrix](./implementation-status-matrix.md)“.

## Slovníček pojmů týkajících se stavu

- **Provozní** — implementováno v aktuální vývojové verzi Studio a dostupné, jsou-li splněny běžné požadavky na běh.
- **Závislé na konfiguraci** — funkce je implementována, vyžaduje však přihlašovací údaje k serveru specifické pro danou instalaci, registraci v rámci OAuth/OIDC, doručování e-mailů, externí službu, migraci databáze nebo připojení k publikačnímu systému.
- **Ověřená nativní cílová verze** — existuje implementace a ověření sestavení v rámci CI/nativního sestavení, avšak veřejná distribuce stále závisí na podepsání a provisioningu platformy.
- **Základ** — existuje podpora architektury, registru, uživatelského rozhraní nebo konfigurace, avšak kompletní služba pro koncové uživatele zatím není prohlášena za funkční.

## Současné možnosti

| Oblast | Stav | Současná implementace |
|---|---|---|
| Úprava strukturovaných rukopisů | **Funkční** | Sémantické sekce, formátovaný text, nadpisy, formátování v textu, seznamy, poznámky, odkazy, tabulky a práce se strukturovaným obsahem. |
| Pracovní prostor pro více dokumentů na ploše | **V provozu** | Záložky dokumentů ve stylu webového prohlížeče umožňují mít na ploše otevřeno více rukopisů. Plnoobrazovkové rozhraní aplikací Studio a Účet a přepínatelný přehled dokumentu podobný programu Word usnadňují orientaci v rozsáhlých textech, zatímco mobilní verze si zachovává kompaktní strukturu pracovního postupu. |
| Obnovení relace/pracovního prostoru | **Funkční** | Nativní i webový pracovní prostor dokážou obnovit předchozí pracovní kontext, včetně stavu otevřených dokumentů, zatímco explicitní ovládací prvky pro zavírání dokumentů umožňují uživateli opustit dokument, aniž by došlo ke ztrátě okolní relace aplikace. |
| Ovládací prvky pro formátování bohatého textu | **Funkční** | Kompaktní formátování přímo v textu zůstává k dispozici v blízkosti výběru; rozbalená nabídka pro stolní počítače je ukotvená a přizpůsobená velikosti zobrazení, zatímco jazyk pro formátování přímo v textu se vybírá z nakonfigurovaných jazyků rukopisu, nikoli z libovolného textu. Automatické plovoucí formátování lze deaktivovat v nastaveních editoru. Ovládací prvky pro výběr na mobilních zařízeních zabraňují kolizi s nativním uživatelským rozhraním pro výběr textu. |
| Strukturované vyhledávání a nahrazování | **Funkční** | Překryvné okno pro vyhledávání a nahrazování, rozsahy a navigace ve výsledcích s responzivním přístupem sdíleným mezi rozvržením pro stolní počítače a mobilní zařízení. |
| Vícejazyčné uživatelské rozhraní | **Funkční** | Podpora 24 evropských jazyků uživatelského rozhraní se společným výběrem jazyka. Nastavení jazyka rozhraní, rukopisu a metadat se spravují v jednom přehledném a responzivním panelu nastavení. |
| Nastavení časových pásem | **Funkční** | Standardní výběr časových pásem podle IANA s aktuálními odchylkami od UTC a automatickým nastavením výchozího systémového časového pásma. |
| Vícejazyčná nápověda | **Funkční** | Integrovaná lokalizovaná nápověda pro všechny podporované jazykové varianty uživatelského rozhraní aplikace Studio; V nápovědě se zobrazuje aktuální verze sestavení. |
| Účty a ověřování | **Provozní** | Registrace/přihlášení, odhlášení a ověřený přístup k API podporované serverem fungují ve webových i nativních klientech. Stejný centrální účet lze používat v systémech Windows, Android, iOS/iPadOS i v prohlížečových klientech. Nativní klienti využívají transport typu „bearer-session“, který je kompatibilní s aplikacemi pocházejícími z Tauri. |
| Obnovení hesla | **Závisí na konfiguraci** | Proces v případě zapomenutého hesla/resetování využívá jednorázové tokeny s omezenou platností, které jsou uloženy pouze jako hash, obecné odpovědi o existenci účtu a zrušení platnosti pro všechny relace po úspěšné změně hesla. Vyžaduje funkční doručování e-mailů ze serveru. |
| Federované přihlášení | **Závisí na konfiguraci** | Poskytovatelé OIDC od společností Google a Microsoft a konfigurovatelní obecní či institucionální poskytovatelé OIDC využívají autorizační kód + PKCE, ověření stavu/nonce, ověření discovery/JWKS a explicitní propojení účtů. Stávající účty se nikdy automaticky nepropojují pouze na základě e-mailové adresy. |
| Propojené přihlašovací identity | **Provozní / na konfiguraci závislí poskytovatelé** | Nastavení účtu zobrazují heslo a propojené identity typu „ORCID“ / OIDC, umožňují propojení či odpojení nakonfigurovaných poskytovatelů a zabraňují odstranění poslední použitelné metody přihlášení. |
| Rozhraní účtu/profilu | **Funkční** | Úprava osobního profilu podporovaná sdíleným serverem je k dispozici v rozloženích pro stolní počítače i mobilní zařízení, přičemž identita účtu je oddělena od metadat přispěvatelů rukopisů a od členství v konkrétní organizaci. |
| Profily institucí | **Provozní** | Účet ve Studiu může obsahovat více členství v institucích s jednou výchozí příslušností. Sdílené údaje o názvu instituce aROR jsou odděleny od údajů specifických pro dané členství, jako jsou katedra, pozice, institucionální e-mail, propojená identita a role. |
| Role správců instituce | **Závisí na konfiguraci** | Role na adresách `MEMBER`, `ADMIN` a `OWNER` jsou autoritativní na úrovni serveru. Instituční nasazení umožňují vyhrazené přihlášení správců a správu členů chráněnou rolemi s ochranou posledního vlastníka. |
| Centrální správa OMI | **Závisí na konfiguraci** | Samostatná centrální úroveň oprávnění `ADMIN`/`OWNER` může spravovat instituce, správce institucí, přihlašovací údaje institucí API a události související s auditem správy, aniž by získala přístup k rukopisům či redakčnímu obsahu. |
| Správce instituce API | **Závisí na konfiguraci** | Přihlašovací údaje zařízení vázané na instituci využívají zobrazení jednorázového nezpracovaného tokenu, ukládání v hashované podobě, vypršení platnosti/zrušení a explicitní rozsahy (`institution:read`, `members:read`, `members:write`, vyhrazené integrační rozsahy). Přihlašovací údaje zařízení nemohou měnit role vlastníků. |
| Model identity přispěvatelů | **Provozní** | Přispěvatelé, role, afilace, tvrzení o identitě a pracovní postupy týkající se profilů autorů jsou znázorněny odděleně od identity účtu. |
| Ověřování pomocí ORCID | **Závisí na konfiguraci** | ORCID OAuthJe implementována infrastruktura pro přihlášení a propojení prostřednictvím OIDC. Sady přihlašovacích údajů pro osobní a institucionální nasazení jsou odděleny a aktuální prostředí Sandbox/Production je viditelné v uživatelském rozhraní Studio. |
| Přenosné podpisy autorů vázané na protokol „ORCID“ | **Závislé na konfiguraci** | Jsou implementovány neměnné snímky revizí potvrzené serverem, vazba autorů pomocí protokolu „ORCID“, podepisování pomocí protokolu „WebAuthn“, šifrované instalační klíče vydavatele a přenosné důkazy pro offline ověření. |
| Dvojitě slepé recenzní řízení | **V provozu** | Anonymní přiřazování recenzentů, přidělování recenzí, pracovní prostor recenzentů, komentáře a uchovávání recenzí. Oprávnění k zahájení recenzního řízení jsou vázána na role, aby byla zachována zásada minimálních oprávnění. |
| Řídicí panel pro redakční recenze | **Provozní** | Přehled určený pro redaktory a portál pro recenze s ohledem na role, určený pro přidělené úkoly v rámci vzájemného recenzního řízení. |
| Obousměrné zpětné odesílání recenzí typu „OJS“ | **Závislé na konfiguraci / ověřeno** | Podepsané zpětné odesílání recenzí vrací odeslaná data o recenzi na adresu OJS. Rozsahy spouštění pro recenzenty jsou nastaveny na princip „nejmenších oprávnění“ a protokol recenzí typu „OJS“ s dvěma koly je zdokumentován a testován na integrační lince OJS 3.5. |
| Nativní formuláře pro revizi typu „OJS“ | **Závislé na konfiguraci / ověřené** | Definice formulářů pro revizi typu „OJS“ lze importovat do pracovního prostoru recenzenta, zobrazit jako ovládací prvky Studio, bezpečně lokalizovat a po odeslání revize znovu uložit na server OJS. Serverové zpracování zachovává značky poskytovatele skryté a klientské vykreslení bezpečně extrahuje text. |
| Externí / Úkoly k recenzi typu „OJS“ | **Závisí na konfiguraci** | Propojené pracovní postupy autorů, editorů a recenzentů (OJS) a kontext externího přiřazení jsou implementovány, pokud je nakonfigurována integrace OJS. |
| Spuštění/import rukopisu z OJS | **Závisí na konfiguraci** | Ověření podepsaného spuštění, načtení rukopisu/souboru a strukturovaný import metadat a obsahu rukopisu z OJS. |
| Interoperabilita s OJS 3.5 | **Ověřená integrační linie** | Kompatibilita s PKP/OJSem 3.5 je zdokumentována a ověřena v nativních end-to-end pracovních postupech pro autory, redaktory a dvojitě anonymní recenzenty, včetně přiřazených souborů, recenzních formulářů, oprav, oddělené zpětné vazby a podepsaného zpětného zápisu. Regresní testování mezi verzemi zůstává soustavnou součástí vydávacích prací. |
| OMP – spuštění rukopisu/studie a recenze | **Závislé na konfiguraci / ověřené** | Podepsaná tvrzení při spuštění přiřazují monografie a publikace do systému Studio, přičemž přístup recenzentů je omezen na přidělenou studii. Pracovní postupy pro autory, editory a recenzenty s dvojitou anonymitou zahrnují přidělené soubory, recenzní formuláře, opravy, oddělenou zpětnou vazbu a podepsané vrácení. |
| Interoperabilita s OMP 3.5 | **Ověřená integrace** | Nasaditelný plugin OMP a integrace se Studio jsou testovány v celém rozsahu s OMP 3.5. Širší testování regresí napříč verzemi a optimalizace pro produkční prostředí zůstávají součástí průběžných prací na vydání. |
| Import struktury z DOCX | **Funkční** | Podporovány jsou nadpisy, inline sémantika, dědičnost seznamů, poznámky pod čarou/na konci textu, odkazy, strukturované tabulky a sémantická indexová pole. U rozsáhlých importů se využívá odložené načtení do editoru a importované soubory z adresáře DOCX se otevírají přímo jako rukopisy na adrese OMI. |
| Dynamické rejstříky a seznamy | **Provozní** | Importovaná pole rejstříku z aplikace Word jsou znázorněna sémanticky, nikoli jako zastaralý text s čísly stránek. Výskyt v rejstříku vede k příslušnému místu v dokumentu; nevyřešené ovládací prvky výskytu jsou potlačeny. Import jmenového indexu normalizuje hranice mezi písmeny a číslicemi a odfiltruje rušivé odkazy na stránky s arabskými číslicemi, přičemž zachovává římské číslice relevantní pro jména. |
| Místní pravopis | **Funkční** | Trvalá kontrola místního pravopisu se řídí jazykem rukopisu i přes vrstvu kontroly pravopisu platformy/prohlížeče. |
| Korektura gramatiky a stylu | **Závisí na konfiguraci** | Pokročilá kontrola, kterou lze aktivovat, může využívat jazykové služby založené na umělé inteligenci, které jsou kompatibilní s LanguageTool a byly nakonfigurovány. Chyby se zobrazují přímo v textu a návrhy na opravu musí uživatel explicitně aplikovat. |
| Provedení překladu | **Závisí na konfiguraci** | Strukturovaný překlad DeepL pracuje na úrovni výběru, bloku, sekce nebo celého rukopisu, přičemž zachovává sémantiku v textu a vylučuje citace, kód, rovnice a bibliografické záznamy z nebezpečného zploštění. Jazykové varianty lze ukládat odděleně. |
| Agenti pro integraci AI | **Závislé na konfiguraci** | Agenti pro jazykový editor nezávislý na poskytovateli, asistent pro metadata, nástroj pro vytváření shrnutí a nástroj pro kontrolu citací poskytují návrhy prostřednictvím omezeného provádění na straně serveru. Externí přenos obsahu, který podléhá důvěrnosti v rámci recenzního řízení, vyžaduje výslovné povolení. |
| Audit integrace a registr rozšíření | **Provozní základ / provádění závislé na konfiguraci** | Při provádění integrace se zaznamenávají metadata operace a souhrny, aniž by se ukládal text dokumentu nebo důvěrné údaje. Manifesty rozšíření podporují kompatibilitu verzí, oprávnění, funkce a externí koncové body přístupné pouze přes HTTPS. |
| Přenositelné formáty OMI | **Funkční** | Přenositelné formáty `.omi.zip` a OMI JSON jsou k dispozici jako plnohodnotné formáty pro výměnu dat. |
| Exporty pro vědecké a publikační účely | **Funkční** | JATS XML, sémantický offline balíček HTML, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA a LaTeX jsou zastoupeny v aktuální exportní vrstvě. Sémantická indexová pole lze exportovat zpět do DOCX. |
| Export a doručování napříč platformami | **Funkční** | Hosted Studio využívá stahování přes prohlížeč; nainstalovaní klienti Tauri používají nativní dialogová okna pro ukládání a správu dokumentů a binární zápis pro podporované výstupní formáty. Mobilní klienti nabízejí podskupinu funkcí přizpůsobenou dané platformě, nikoli pouze možnosti publikování dostupné na stolních počítačích. |
| Profily vydavatelů | **Provozní** | Profil vydavatele, exportní stylový list a zpracování tiskového stylového listu jsou odděleny od sémantiky rukopisu. |
| Režim úložiště s rozpoznáním zařízení | **Funguje na nainstalovaných klientech** | Studio uchovává nastavení důvěryhodnosti „vlastní zařízení“ pro každého uživatele a každé zařízení. Vlastní zařízení si mohou zachovat běžné nativní pracovní cesty; nově zjištěná nebo sdílená zařízení se ve výchozím nastavení přepnou do omezeného režimu, který neuchovává místní pracovní cesty. |
| Cloudová připojení profilu | **Provozní / závisí na poskytovateli** | Přihlašovací údaje pro Direct WebDAV/Nextcloud jsou šifrovány na straně serveru a jejich platnost je omezena na přihlášeného uživatele, takže cloudová připojení profilu mohou následovat účet napříč zařízeními. Budoucí cloudová připojení typu „OAuth“ budou využívat stejný model s omezením na profil. |
| Přenosné úložiště na sdílených zařízeních | **Funguje na nainstalovaných klientech** | Režim sdíleného zařízení stále umožňuje explicitní jednorázové otevření/uložení do vyměnitelných nebo přenosných úložišť, aniž by se vybraná cesta zachovala jako aktuální pracovní soubor. |
| Lokálně synchronizované složky | **Funguje na stolním počítači** | Složky OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive a další složky synchronizované na stolním počítači jsou považovány za způsoby připojení příslušného poskytovatele. Studio ukládá přenositelné soubory OMI lokálně, zatímco klient poskytovatele provádí ověření a synchronizaci. |
| Nativní práce s dokumenty v systému Android | **Provozní beta verze** | Systém Android využívá systémový výběrový dialog „Dokumenty / Storage Access Framework“ pro otevírání, ukládání, ukládání pod jiným názvem, zálohování pomocí přenosné služby „`.omi.zip`“ a podporované cíle exportu namísto obecných oprávnění ke sdílenému úložišti. Životní cyklus dokumentů a chování při zavírání a opětovném otevírání zůstávají součástí cíleného beta testování na regresi. |
| Nativní pracovní postup aplikace Soubory v systému iOS/iPadOS | **Ověřený nativní cíl** | Zařízení iPhone/iPad využívají pracovní postup aplikace Soubory od Apple / UIDocumentPicker s přístupem k dokumentům v rámci bezpečnostního rozsahu pro otevírání a ukládání souborů ve formátu „OMI“ a pro export do destinací relevantních pro mobilní zařízení. Veřejná distribuce i nadále vyžaduje podepsání a provisioning ze strany společnosti Apple a ověření zařízení. |
| WebDAV / Přímé úložiště Nextcloud | **Závisí na konfiguraci** | Přímá připojení přes WebDAV/Nextcloud podporují šifrované přihlašovací údaje na straně serveru, testování připojení, nahrávání přenosných záloh, obnovení a mazání. |
| Katalog integrací | **Provozní** | K dispozici jsou registr poskytovatelů, uživatelské rozhraní katalogu, klient stavu, deklarované režimy ověřování a prostředí pro provádění. |
| Aplikace pro Windows | **Funkční beta verze** | Implementována je aplikace pro Windows v rámci Tauri 2, balíčky EXE/MSI, nativní ověřování, přístup k lokálním souborům a nativní postupy ukládání. |
| Balíčky pro Linux a macOS | **Provozní cíle sestavení** | Automatizace vydávání definuje cíle Linux AppImage/DEB a macOS Intel/Apple Silicon DMG. Podepisování a notářské ověřování na platformě zůstává samostatnou součástí procesu zabezpečení vydání. |
| Aplikace pro Android | **Funkční beta verze** | Univerzální soubor APK pro Android je vytvářen prostřednictvím sdíleného workflow pro vydávání verzí Tauri 2. Součástí sdílené klientské řady je ověřování prostřednictvím serveru, nativní zpracování odpovědí OIDC/ORCID, responzivní navigace, nativní práce se soubory Documents/SAF, doručování exportů a branding OMI. |
| Aplikace pro iOS / iPadOS | **Ověřený nativní cíl** | Generování projektu Tauri pro iOS a sestavení simulátoru iPhone/iPad s čipem Apple Silicon proběhly v CI úspěšně, včetně nativní integrace aplikace Soubory a sdíleného kódu pro mobilní ověřování a export. Veřejná distribuce prostřednictvím TestFlightu a App Store stále vyžaduje podpis Apple Developer, provisioning, přiřazení Universal Link a ověření na fyzickém zařízení. |
| Postup aktualizace desktopové aplikace | **V provozu** | Oznámení o aktualizaci a postup instalace jsou implementovány v desktopové aplikaci a artefakty aktualizačního programu jsou generovány konfigurací vydání. |
| Automatizace vydávání napříč platformami | **Provozní** | GitHub Actions generuje artefakty pro Windows, Linux, macOS a Android ze sdíleného zdrojového stromu a spouští testovací sestavení na simulátoru iOS/iPadOS. Jakmile jsou nakonfigurovány přihlašovací údaje Apple, je připraven manuální pracovní postup pro podepsání vydání určený pro App Store Connect. |
| Reprodukovatelnost závislostí na verzích | **Provozní** | Grafy závislostí v JavaScript a Rustu jsou řízeny pomocí lockfile; CI používá reprodukovatelné instalační cesty, včetně `npm ci` pro server. |
| Branding aplikace | **Provozní** | Branding „OMI Studio“ a vygenerované nativní ikony se používají v celém prostředí aplikace i v balíčku pro vydání, včetně platformy Android a vygenerované cílové platformy iOS/iPadOS. |
| Zvýšení bezpečnosti | **Provozní standard** | Do aktuální vývojové větve jsou začleněny: omezení rychlosti na straně serveru, omezení SSRF, ověřování stavu/nonce/PKCE a vydavatele v rámci OIDC, omezené uchovávání tajných klíčů, resetování pomocí hashovaných tokenů a tokenů typu Admin-API, auditování integrací a administrátorských činností, bezpečnější únikové znaky při importu a exportu a automatické bezpečnostní skenování. OJS Zobrazení formuláře pro kontrolu obsahuje další zabezpečení v podobě izolace značek a textu. |
| Podepisování kódu pro Windows | **Aplikace odeslána / čeká na schválení** | Byly zveřejněny zásady veřejného podepisování kódu a ochrany osobních údajů a byla připravena/odeslána open-source aplikace SignPath Foundation. Instalační balíčky pro Windows zůstanou nepodepsané až do jejich schválení a integrace podepisování do produkčního prostředí. |

## Multiplatformní architektura

Studio má konkrétní architekturu se sdílenými klienty, nikoli oddělené produktové řady pro web a nativní aplikace. React/TypeScript – model rukopisů OMI, chování editoru, procesy ověřování, recenzní řízení, integrace a logika importu a exportu jsou sdílené. Tauri 2 poskytuje funkce pro nativní balení a platformové funkce pro desktopové a mobilní klienty.

Responzivní uživatelské rozhraní se záměrně liší podle typu zařízení: na stolním počítači lze zobrazit záložky pro více dokumentů, trvalý přehled dokumentu a úpravy ve více panelech, zatímco na mobilních zařízeních se využívá kompaktní navigace, vysouvací panely, ovládací prvky přizpůsobené dotykovému ovládání a výběrové okna souborů vlastní dané platformě. Jedná se o rozdíl ve způsobu zobrazení, nikoli o samostatný model rukopisu.

Cílová platforma iOS/iPadOS využívá stejného sdíleného mobilního klienta. Úkony specifické pro Apple se omezují na nativní balení, přístup k dokumentům prostřednictvím aplikací Files a UIDocumentPicker, metadata aplikace, podepisování a provisioning a přiřazování univerzálních odkazů.

## Hranice architektury

### Vlastnictví rukopisů s prioritou místních zdrojů

Nativní aplikace může uchovávat rukopisy v úložišti, které si zvolí autor. Rukopis se nemusí stát součástí proprietárního stavu serveru pouze proto, že jsou povoleny funkce identity, spolupráce nebo integrace podporované serverem.

Nainstalované klienty aplikace Studio rozlišují mezi důvěryhodným osobním zařízením a sdíleným/cizím zařízením. Na vlastním zařízení lze zachovat běžné pracovní cesty v lokálním úložišti nebo systémovém úložišti. Na sdíleném zařízení upřednostňuje aplikace Studio cloudová připojení v rámci profilu a nezachovává vybranou lokální cestu; jednorázová přenosná/vyjímatelná úložiště zůstávají k dispozici.

### Identita a služby podporované serverem

Účty, obnovení hesla, propojené identity, federované přihlášení, spolupráce, vzájemné recenzování, přímá propojení s cloudem, správa institucí a integrace s publikačními systémy využívají služby založené na platformě Studio API a databázi PostgreSQL. Identita pro autentizaci je oddělena od identity vědeckého přispěvatele i od členství v instituci. Tyto funkce závisí na správné konfiguraci a migraci daného nasazení.

### Hranice správního území instituce

Členství instituce (`MEMBER` / `ADMIN` / `OWNER`) a centrální správa OMI (`ADMIN` / `OWNER`) představují samostatné úrovně oprávnění. Ani jedna z nich sama o sobě neuděluje přístup k rukopisům, recenzím ani redakčnímu obsahu. Přihlašovací údaje pro institucionální strojový API jsou vázány na jednu instituci a konkrétní rozsahy oprávnění a nelze jimi měnit role vlastníků.

Viz [Institutional and Central Administration](../integrations/institutional-administration.md).

### Externí integrace

OMI odděluje sémantiku rukopisu od autentizace a přenosu specifických pro daného poskytovatele. OJS, OMP, cloudové úložiště, ORCID, poskytovatelé identit OIDC, překladatelské služby a agenti umělé inteligence se proto propojují prostřednictvím integračních vrstev, místo aby se stali součástí základního modelu dokumentu.

### Úřad pro vydavatelský systém

V případě propojených pracovních postupů OJS a OMP zůstává vydavatelský systém rozhodujícím zdrojem informací ohledně stavu pracovního postupu při odevzdávání, přidělení úkolů, kol a redakčních rozhodnutí. Studio slouží jako strukturované pracovní prostředí pro tvorbu a recenzování obsahu a vyměňuje si informace prostřednictvím definovaných koncových bodů aplikace, nikoli prostřednictvím přímého propojení s databází.

Současné integrace OJS a OMP jsou pro revizní práci obousměrné: Studio dokáže zpracovat kontext spuštění v rámci role, přiřazené soubory a nativní definice revizních formulářů a prostřednictvím integračního koncového bodu může vracet podepsané revizní podání, opravy a oddělenou zpětnou vazbu autorů a editorů. OMP navíc zachovává přiřazení monografií, publikací a studií a omezuje recenzenty na studie, které jim byly přiděleny. Tím nedochází k převodu oprávnění k řízení pracovního postupu z OJS nebo OMP do aplikace Studio.

## Vydání a distribuce

`0.1.0-beta.3` jedná se o aktuální řadu beta verzí Studio. GitHub Actions generuje výstupy pro vydání ze sdíleného zdrojového stromu pro Windows, Linux, macOS a Android. Veřejná stránka pro stahování Studio umožňuje přístup přes prohlížeč a zobrazuje dostupné nativní balíčky, včetně univerzálního APK pro Android.

Systém iOS/iPadOS v současné době disponuje funkční verzí pro simulátor v rámci kontinuální integrace (CI), nikoli však veřejně dostupným souborem IPA. Distribuční cesta společnosti Apple je připravena, ale záměrně oddělena od ověřování v simulátoru: verze určené pro veřejnost či pro zařízení vyžadují skutečné ID vývojářského týmu Apple, distribuční certifikát, profil pro provisioning a finální konfiguraci služby „`apple-app-site-association`“, než bude možné požádat o zveřejnění v TestFlightu či App Store.

Viz [Open Manuscript Studio on iOS and iPadOS](../foundations/ios-ipados-studio.md).

## Zaměření na ověření beta verze

Beta-fáze posouvá kritérium pro uvolnění z otázky „Je primární pracovní postup implementován?“ na otázku „Zůstává spolehlivý i při práci s reálnými dokumenty, na různých platformách, v různých rolích a za různých poruchových podmínek?“. Aktuální priority validace jsou:

1. vytváření, otevírání, úpravy, ukládání a explicitní zavírání rukopisů, obnovení relace a opětovné otevření bez ztráty dat;
2. importy rozsáhlých a strukturálně složitých souborů DOCX, včetně poznámek, tabulek, seznamů, polí a dynamických indexů;
3. typické strukturované exportní cesty ve webových a nativních klientech;
4. OJS a pracovní postupy pro obousměrný tok rukopisů v systému „OMP“ s ohledem na role autorů, redaktorů a recenzentů, včetně vymezení rozsahu přiřazených souborů, vícekolového recenzního řízení, nativních recenzních formulářů a podepsaného zpětného odeslání;
5. dvojitě zaslepené recenzní řízení bez prozrazení identity a s integračními rozsahy s minimálními oprávněními;
6. Chování životního cyklu dokumentů Androidu/SAF a responzivní mobilní navigace;
7. Chování funkce „Soubory“ v systému iOS/iPadOS a třídy `UIDocumentPicker` po zpřístupnění testování na podepsaných fyzických zařízeních;
8. instituce/ústřední správa, aniž by došlo k úniku privilegovaných informací do obsahu rukopisu;
9. srozumitelné uživatelské prostředí pro obnovu v případě selhání sítě, ověřování, migrace, importu/exportu a integrace.

Integrace závislé na konfiguraci nemusí být v rámci beta verze všeobecně dostupné, pokud je jasně stanovena jejich úroveň vyspělosti a neohrožují stabilní základní pracovní postupy.

## Zbývající práce na stabilizaci beta verze

- provést důkladné regresní testy v systémech Windows a Android, zejména pokud jde o chování nativních aplikací při otevírání, zavírání, ukládání dokumentů a obnově relace;
- pokračovat ve zátěžovém testování rozsáhlých a strukturálně neobvyklých rukopisů typu „DOCX“ a vylepšit plynulé obnovení v případě nepodporovaných konstrukcí v aplikaci Word;
- otestovat obnovení hesla, propojení/odpojení v rámci OIDC a chování relace napříč zařízeními na základě konfigurace e-mailu a poskytovatele služeb podobné produkčnímu prostředí;
- provádět regresní testy migrace a autorizace pro členství v instituci, centrální správu a přihlašovací údaje správce instituce (API);
- pokračovat OJS 3.5 – testování v několika kolech tam a zpět, vícekolové testování a testování vzájemné kompatibility mezi verzemi;
- pokračovat OMP 3.5 vzájemná kompatibilita mezi verzemi, zabezpečení nasazení a obnovy;
- posílit opatření pro obnovu provozu v případě přerušení síťových, cloudových a synchronizačních operací;
- nahradit zbývající technické/surové chybové hlášky praktickými zprávami určenými pro uživatele;
- začlenit podpis produkčního kódu systému Windows, pokud bude aplikace SignPath Foundation schválena;
- pokračovat v práci na podepisování a ověřování v systému macOS;
- nastavit podepisování a provisioning v Apple Developer Programu, přiřazení Universal Linků pro produkční prostředí a ověření v rámci TestFlightu a na zařízeních před podáním žádosti o veřejnou distribuci pro iOS/iPadOS;
- pokračovat v práci na distribuci systému Android zaměřené na obchody;
- vypracovat sady testů shody, které přímo mapují chování implementace na normativní požadavky OMI;
- stanovit záruky kompatibility na úrovni verzí pro podporované cíle importu a exportu.

Skutečnost, že je určitá funkce obsažena v tomto implementačním snímku, nesmí být vykládána jako formální shoda se specifikací OMI, pokud nebyla samostatně zveřejněna odpovídající třída shody a příslušné důkazy.

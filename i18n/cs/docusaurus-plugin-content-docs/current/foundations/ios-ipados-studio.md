---
title: Open Manuscript Studio v systémech iOS a iPadOS
sidebar_label: Studio pro iOS a iPadOS
description: Architektura, práce se soubory, ověřování, ověřování sestavení a stav distribuce pro aplikaci „Open Manuscript Studio“ na zařízeních iPhone a iPad.
keywords:
  - Open Manuscript Studio
  - iOS
  - iPadOS
  - iPhone
  - iPad
  - Tauri
  - Files
  - UIDocumentPicker
  - Universal Links
  - TestFlight
  - App Store
---

# Open Manuscript Studio v systémech iOS a iPadOS

Open Manuscript Studio využívá stejné jádro aplikace React/TypeScript, model rukopisů OMI a nativní architekturu prostředí Tauri 2 na zařízeních iPhone a iPad, stejně jako na ostatních podporovaných platformách. Verze pro iOS/iPadOS tedy není samostatnou odnoží produktu a nezavádí žádný formát rukopisů specifický pro Apple.

## Aktuální stav

Cílová platforma iOS/iPadOS se posunula od plánování zaměřeného výhradně na architekturu k **ověřenému nativnímu sestavovacímu cíli**.

Aktuální stav vývoje:

- Generování projektu Tauri pro iOS proběhlo v CI úspěšně;
- aplikace se úspěšně zkompiluje pro simulátor zařízení iPhone/iPad s procesorem Apple Silicon;
- artefakt simulační aplikace je vytvořen pomocí akcí typu „GitHub“;
- Jsou nakonfigurovány směry orientace zařízení iPhone a iPad a metadata pro multitasking na iPadu;
- Bylo implementováno otevírání a ukládání nativních souborů pomocí nástroje pro výběr souborů a dokumentů;
- předávání ověřovacích údajů v nativním mobilním prostředí je sdílené s Androidem;
- Veřejná distribuce prostřednictvím TestFlight a App Store **zatím nebyla zprovozněna**, protože je ještě třeba nakonfigurovat podpisové údaje Apple Developer a finální přiřazení univerzálních odkazů.

Současná veřejná řada verzí ve Studiu zůstává `0.1.0-alpha.4`. Metadata balíčku v App Storu pro iOS používají zkrácenou verzi a číslo sestavení kompatibilní s Apple, přičemž v uživatelském rozhraní aplikace a v dokumentaci projektu zůstává zachována identita verze ze Studia.

## Identita aplikace

| Pole | Aktuální hodnota |
|---|---|
| Identifikátor balíčku | `org.openmanuscript.studio` |
| Minimální požadavky na platformu | iOS/iPadOS 14.0 |
| Zkrácená verze v App Store | `0.1.0` |
| Číslo sestavení v App Store | `4` |
| Řada produktů Studio | `0.1.0-alpha.4` |

Zkrácené označení verzí/číslování sestavení společnosti Apple představuje metadata balíčku. Nemění verzi schématu OMI ani nevytváří samostatnou řadu dokumentů o kompatibilitě s iOS.

## Rozhraní pro iPhone a iPad

Na obou zařízeních se používá společné responzivní rozhraní Studio, přičemž se jedná spíše o přizpůsobení platformě a formátu zařízení než o implementaci samostatného editoru.

Cílová platforma iOS/iPadOS podporuje:

- provoz v režimu na výšku a na šířku na iPhonu;
- všechny orientace podporované na iPadu;
- Metadata rozvržení kompatibilní s multitaskingem na iPadu;
- nepřímé ovládání, jako je například použití hardwarové klávesnice a trackpadu/ukazovátka, pokud to systém iPadOS podporuje;
- stejný kompaktní model mobilní navigace, jaký používá sdílený klient Studio;
- postupné využívání většího prostoru na tabletu bez změny významu textu.

Dlouhodobým cílem je, aby iPad mohl v případě, že to velikost obrazovky dovolí, více přiblížit pracovní postup s více okny typický pro stolní počítače, a přitom zachovat ovládací prvky přizpůsobené dotykovému ovládání.

## Integrace souborů a poskytovatelů dokumentů

Studio využívá model Apple **Files / UIDocumentPicker**, místo aby vyžadovalo rozsáhlý přístup k souborovému systému.

V závislosti na konfiguraci zařízení může systémový výběrový panel zobrazovat cíle, jako například:

- Na mém iPhonu / Na mém iPadu;
- iCloud Drive;
- připojené externí úložiště podporované systémem iOS/iPadOS;
- soubory od externích poskytovatelů, které si uživatel nainstaloval, například podporované aplikace pro ukládání dat v cloudu.

Současná implementace otevírá dokumenty vybrané uživatelem s přístupem v rámci bezpečnostního rozsahu a čte/zapisuje URL vybraného dokumentu `file://` prostřednictvím vrstvy souborového systému Tauri. Operační systém nadále odpovídá za zobrazení dostupných poskytovatelů dokumentů a za prosazování jejich přístupových omezení.

Studio v uživatelském rozhraní nezachází s URL adresami interních dokumentů poskytovatele jako s běžnými cestami v souborovém systému.

### Režim vlastního zařízení

Pokud uživatel označí nainstalovaného klienta jako své vlastní zařízení, může vybraný nativní umístění dokumentu sloužit jako aktuální pracovní dokument pro danou relaci/pracovní postup.

### Režim sdíleného nebo cizího zařízení

Platí stejná zásada důvěryhodnosti zařízení, jaká se používá i jinde ve Studiu: sdílená/cizí zařízení by měla pro běžnou trvalou práci upřednostňovat cloudové úložiště v rámci profilu. Jednorázové otevření či uložení dokumentu zůstává možné, aniž by se vybraná cesta uložila jako běžné pracovní umístění.

## Plocha pro export do mobilního zařízení

Klient pro iOS/iPadOS využívá stejné exportní rozhraní určené pro mobilní zařízení jako Android. Formáty, které jsou v současné době určeny k zobrazení na mobilních zařízeních, jsou:

- přenosný balíček OMI (`.omi.zip`);
- OMI JSON (`.omi.json`);
- JATS XML (`.xml`);
- balíček „semanticHTML“ (`.html.zip`);
- DOCX (`.docx`);
- LaTeX (`.tex`);
- EPUB (`.epub`).

Pracovní postupy pro vydávání a export určené pro stolní počítače jsou na zařízeních iPhone a iPad skryty, místo aby byly zobrazeny jako nefunkční možnosti:

- IDML;
- XPress Tags (XTG);
- FrameMaker MIF;
- Scribus SLA;
- tisk z prohlížeče / pracovní postup „PDF“.

Implementace exportérů zůstávají společné; liší se pouze nativní výstupní rozhraní a sada viditelných formátů odpovídající dané platformě.

## Ověřování a nativní zpracování návratových hodnot

Aplikace pro iOS/iPadOS využívá stejný účet Studio propojený se serverem jako prohlížeč, desktopová aplikace a aplikace pro Android.

Architektura podporovaného sdíleného ověřování zahrnuje:

- přihlášení k účtu pomocí e-mailu a hesla;
- obnovení hesla prostřednictvím služby Studio API;
- ORCID přihlášení a propojení;
- Přihlášení přes Google;
- Přihlášení do služby Microsoft;
- konfigurovatelní institucionální poskytovatelé služby OpenID Connect.

Externí ověřování na mobilních zařízeních využívá nativní postup jednorázového předání. Preferovaným cílem pro návrat aplikace je:

```text
https://app.openmanuscript.org/auth/orcid/
```

s nouzovým řešením pomocí vlastního schématu:

```text
openmanuscript://auth/
```

Předání obsahuje jednorázový nativní ověřovací kód, nikoli opakovaně použitelné heslo k účtu nebo token poskytovatele.

## Univerzální odkazy a spolupráce s Apple

Aktivace funkce Production Universal Link vyžaduje soubor Apple App Site Association, který se nachází na adrese:

```text
https://app.openmanuscript.org/.well-known/apple-app-site-association
```

Toto přiřazení musí obsahovat **skutečné ID vývojového týmu Apple** spolu s identifikátorem balíčku `org.openmanuscript.studio` a povolenou autentizační cestou.

Projekt záměrně neodhaduje ani nezadává dočasné identifikační číslo vývojářského týmu. Konečný soubor AASA by měl být zveřejněn až poté, co bude k dispozici skutečná identita vývojáře Apple.

Jedná se o hranici mezi distribucí a konfigurací, nikoli o změnu v principech ověřování v aplikaci Studio.

## Ověření sestavení

Repozitář obsahuje pracovní postup pro testování simulátoru iOS v prostředí Smoke, který běží na systému macOS. Jeho účelem je ověřit, že podpora iOS zůstává skutečně kompilovatelným cílem, a nejde pouze o tvrzení o neotestované konfiguraci.

Proces vytváření kouře probíhá v následujícím pořadí:

1. nainstaluje závislosti uzamčeného frontendu;
2. nainstaluje a nakonfiguruje cíl simulátoru Rust pro iOS;
3. zajišťuje, že je k dispozici požadovaný nástrojový řetězec Apple/CocoaPods;
4. vygeneruje projekt Tauri pro iOS/Xcode a nativní ikony;
5. zkompiluje aplikaci simulátoru Apple Silicon;
6. nahraje vygenerovanou simulační aplikaci jako artefakt CI.

V rámci prací na implementaci systému iOS byla úspěšně dokončena první testovací verze simulátoru pro iPhone/iPad.

## Verze pro zařízení a App Store

Verze pro simulátor nevyžaduje přihlašovací údaje pro distribuci v App Store. Verze pro skutečné zařízení, TestFlight nebo App Store je však vyžaduje.

Pracovní postup pro vydávání je nastaven tak, aby využíval tato tajná hesla GitHub:

```text
APPLE_DEVELOPMENT_TEAM
IOS_CERTIFICATE
IOS_CERTIFICATE_PASSWORD
IOS_MOBILE_PROVISION
```

Do úložiště by neměl být uložen žádný podpisový certifikát, heslo k certifikátu ani profil pro nastavení.

Po dokončení konfigurace v Apple Developer je plánovaný postup vydávání následující:

1. nastavit skutečné ID týmu a údaje o funkcích a přiřazení aplikace;
2. bezpečně nainstalovat certifikát distribuce a profil pro provisioning v CI;
3. sestavit/zarchívovat podepsanou aplikaci pro iOS v systému macOS;
4. exportovat soubor IPA vhodný pro App Store Connect;
5. nejprve nahrát do služby TestFlight za účelem regresního testování zařízení a pracovních postupů;
6. Až poté, co budou splněna kritéria pro beta verzi či finální vydání, proveďte zveřejnění prostřednictvím App Store.

## Co zbývá před veřejným vydáním pro iOS

Hlavní cíl aplikace je nyní ověřen, avšak pro veřejnou distribuci prostřednictvím Apple je stále nutné:

- platné přihlašovací údaje k programu Apple Developer Program;
- konečné ID týmu a konfigurace pro zprovoznění;
- výrobní `apple-app-site-association` publikace pro `app.openmanuscript.org`;
- testování sestavení na reálných zařízeních na reprezentativním hardwaru iPhone a iPad;
- Regresní testování v rámci TestFlight: přihlášení, návrat z univerzálního odkazu, přístup k souborům, ukládání a opětovné otevření, export a chování externích poskytovatelů;
- Metadata pro App Store, prohlášení o ochraně osobních údajů a příprava na posouzení vydání.

Tyto požadavky by neměly být označovány za chybějící architekturu Studio. Jedná se o zbývající vrstvu důvěry a distribuce společnosti Apple kolem již kompilovatelného sdíleného klienta.

## Souvislost s modelem „OMI“

Podpora iOS/iPadOS nemění smluvní podmínky dokumentu „OMI“. Rukopis vytvořený na zařízení iPhone nebo iPad by měl zůstat přenositelný do webových, Windows, Linux, macOS a Android klientů, kteří používají stejný model „OMI“ a podporované výměnné kontejnery.

Informace o celkové architektuře najdete na adrese [Cross-platform Studio Architecture](./cross-platform-studio.md). Aktuální přehled produktů najdete na adrese [Studio Implementation Status](../governance/studio-implementation-status.md).

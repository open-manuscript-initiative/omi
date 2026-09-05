---
title: Balíček pro přípravu na získání grantu
sidebar_label: Balíček pro přípravu na získání grantu
description: Materiály týkající se projektu, dopadu, konsorcia a pracovních balíčků, které lze opakovaně použít pro žádosti o financování v rámci programu „Open Manuscript Initiative“.
---

# OMI Balíček pro přípravu na získání grantu

Tento dokument obsahuje materiály, které lze opakovaně využít při přípravě návrhů v oblasti výzkumu, inovací a infrastruktury v rámci programu „Open Manuscript Initiative“ (OMI). Slouží jako výchozí bod pro diskuse v rámci konsorcia a pro vypracování návrhů; podmínky způsobilosti, terminologie, požadavky na úroveň technologické zralosti (TRL), rozpočty a právní závazky specifické pro daný program je vždy nutné ověřit podle příslušné výzvy k podávání návrhů.

## 1. Shrnutí projektu

**Open Manuscript Initiative (OMI)** je open-source iniciativa zaměřená na interoperabilitu při tvorbě, recenzování, úpravách a vydávání vědeckých textů. Jejím hlavním cílem je oddělit vědecký rukopis od proprietárních aplikací a produkčních formátů, aby se strukturovaný vědecký obsah mohl přenášet mezi nástroji pro tvorbu, systémy recenzního řízení, vydavatelskými platformami a pracovními postupy pro uchovávání bez nutnosti opakované ruční rekonstrukce.

Tato iniciativa kombinuje otevřené specifikace s implementačním prostředím **Open Manuscript Studio**, které je určeno pro použití v prohlížečích, na stolních počítačích i v mobilních zařízeních. Studio je vyvíjeno jako praktická ukázka dokumentového modelu a přístupu k interoperabilitě, který je popsán v dokumentu „OMI“ (Základní principy a přístup k interoperabilitě v oblasti vědeckého publikování), včetně strukturovaných rukopisů, metadat, anotací, odkazů, stylů publikování, profilů vydavatelů, recenzního řízení, vícejazyčných pracovních postupů a integrace s publikačními platformami.

**Stručný popis návrhu:**

> OMI vyvíjí otevřenou, interoperabilní infrastrukturu pro vědecké rukopisy, která pokrývá celý životní cyklus od vytvoření až po publikaci. Kombinuje model vědeckého dokumentu nezávislý na konkrétní aplikaci s otevřeným, multiplatformním nástrojem Studio a integračními rozhraními pro systémy časopisů, monografií, identit, metadat a výzkumných informací.

## 2. Formulace problému

Vědecké rukopisy často procházejí nesourodými systémy a proprietárními formáty. Autoři píší v jednom prostředí, předkládají své práce v jiném, recenzenti vkládají poznámky do další verze, redaktoři přebudovávají strukturu a metadata a vydavatelé tento stejný intelektuální objekt znovu upravují pro účely produkce a šíření.

Tato roztříštěnost s sebou nese zbytečné náklady a rizika:

- opakované převody a ruční restrukturalizace;
- ztráta nebo zhoršení sémantických informací při změně formátu;
- závislost na dodavateli a aplikaci;
- duplicitní záznam metadat;
- slabá interoperabilita mezi systémy pro tvorbu, recenzování a publikování;
- překážky vícejazyčné a přístupné vědecké komunikace;
- potíže s uchováním poznámek, odkazů a strukturovaných vztahů;
- vysoké náklady na integraci pro časopisy, vydavatele a výzkumné instituce.

OMI řeší tento problém již na úrovni rukopisu: **vytvořte strukturu jednou a využijte ji v celém vědeckém pracovním postupu**.

## 3. Navrhované řešení

OMI spojuje čtyři vzájemně se doplňující vrstvy:

1. **Otevřené vědecké modely a specifikace** pro dokumenty, odkazy, anotace, metadata a související vědecké objekty.
2. **Open Manuscript Studio**, referenční implementace pro tvorbu, úpravy, recenzování a publikování strukturovaných rukopisů.
3. **Profily interoperability a konektory** pro publikační a výzkumnou infrastrukturu, včetně pracovních postupů zaměřených na OJS/OMPa integrací s trvalou identitou.
4. **Opakovaně použitelné pracovní postupy pro publikace a institucionální procesy**, včetně stylů publikací, profilů vydavatelů, exportu, správy a nasazení napříč platformami.

Projekt se záměrně neomezuje pouze na nahrazení textového editoru. Jeho hodnota z hlediska výzkumné infrastruktury spočívá v uchování přenositelného vědeckého objektu napříč organizačními a technickými hranicemi.

## 4. Aktuální splatnost a doklady

OMI již disponuje funkčním softwarem a veřejně dostupnou technickou dokumentací. Současné práce na implementaci zahrnují:

- Studio založené na prohlížeči;
- balení pro stolní počítače;
- Pracovní postup v aplikaci pro Android;
- ověřeno, že cíle pro nativní iOS/iPadOS a integrace s aplikací Soubory fungují;
- strukturovaná úprava rukopisu;
- úprava více dokumentů a obsah dokumentu;
- optimalizovaný import rozsáhlých rukopisů z webu DOCX;
- vygenerované seznamy dokumentů a rejstříky;
- opakovaně použitelné styly publikací a profily vydavatelů;
- Import sady stylů „IDML“ z aplikace Adobe InDesign;
- export v formátech zaměřených na styl: PDF, HTML a CSS;
- pracovní postupy v oblasti lokálního a cloudového úložiště;
- infrastruktura pro správu účtů, obnovení hesla a federované přihlášení;
- pracovní postupy dvojitě zaslepeného recenzního řízení;
- OJS/ práce na integraci službyOMP;
- ORCID-orientované pracovní postupy pro identitu a podpisy;
- práce v oblasti pravopisu, gramatiky, překladu a integrace agentů;
- profily institucí a administrativní složky;
- infrastruktura pro vícejazyčné uživatelské rozhraní.

### Prohlášení o splatnosti

OMI by měl být v současné době prezentován jako **funkční open-source demonstrátor ve fázi alfa/beta**, nikoli jako plně vyspělá výzkumná infrastruktura připravená k nasazení do produkčního prostředí. Formální úroveň technologické připravenosti (TRL) by měla být přiřazena pouze v rámci financovacího programu, jehož definice TRL a požadavky na doklady byly podrobeny přezkoumání.

Toto rozlišení je užitečné v návrzích: „OMI“ je dostatečně zaveden pro pilotní projekty, integrační experimenty a ověřování, zatímco rozsáhlý výzkum, posilování bezpečnosti, standardizace a práce na institucionálním zavádění zůstávají vhodnými oblastmi pro financovaný vývoj.

## 5. Rozměry výzkumu a inovací

Mezi možné otázky v oblasti výzkumu a inovací patří:

- Jak může vědecký rukopis zůstat sémanticky stabilní při přechodu mezi různorodými prostředími pro tvorbu a publikování?
- Který minimální interoperabilní model dokáže zachytit strukturu vědeckých textů, aniž by autorům vnucoval sémantiku tvorby specifickou pro jednotlivé vydavatele?
- Jak lze zajistit, aby anotace, komentáře z revizí a informace o původu zůstaly zachovány při přenosu mezi nezávislými systémy?
- Jak lze zajistit, aby trvalé identifikátory a výzkumná metadata byly nedílnou součástí samotného procesu tvorby obsahu, a nikoli pouze dodatečným obohacením po zveřejnění?
- Jak mohou vícejazyčné vědecké pracovní postupy sdílet společnou strukturu a zároveň zachovat jazykově specifická metadata a způsob prezentace?
- Jak lze oddělit styl publikačního formátování od sémantiky rukopisu a přitom zajistit profesionální výsledek produkce?
- Jak může otevřená vědecká infrastruktura omezit závislost na dodavateli, aniž by se tím zvýšila složitost pro výzkumné pracovníky?

## 6. Očekávaný dopad

### Vědci a autoři

- méně opakovaného zadávání metadat a úprav formátu;
- přenosnost rukopisů napříč nástroji a vydavateli;
- lepší návaznost mezi psaním, recenzním řízením a publikací;
- lepší podpora vícejazyčné a strukturované vědecké komunikace.

### Časopisy, nakladatelství a vědecké společnosti

- snížení nákladů na konverzi a výrobu;
- opakovaně použitelné styly a profily publikací;
- integrace se stávajícími publikačními platformami namísto jejich povinné výměny;
- strukturovanější vstupní data pro následnou publikaci a uchovávání.

### Univerzity, knihovny a výzkumné infrastruktury

- větší institucionální kontrola nad vědeckým obsahem;
- snížená závislost na proprietárních ekosystémech pro tvorbu obsahu;
- opětovně použitelná infrastruktura založená na otevřeném zdrojovém kódu;
- lepší možnosti integrace úložišť, metadat, identifikátorů a uchovávání.

### Ekosystém otevřené vědy

- vědecké objekty zpracovatelné strojem již v ranější fázi výzkumného cyklu;
- lepší interoperabilita mezi jinak izolovanými službami;
- opakovaně použitelné specifikace a referenční implementace;
- praktické prostředí pro testování nových pracovních postupů v oblasti vědecké komunikace.

## 7. Hledáme profily partnerů

Vyvážené konsorcium by mohlo zahrnovat několik z následujících typů partnerů:

| Typ partnera | Možný přínos |
| --- | --- |
| Univerzita / výzkumná instituce | požadavky na výzkumné pracovníky, pilotní projekty, hodnocení, koordinace výzkumu |
| Univerzitní nebo národní knihovna | metadata, uchovávání, interoperabilita repozitářů, odborné znalosti v oblasti otevřené vědy |
| Vydavatelství odborné literatury / časopis | produkční procesy, redakční kontrola, pilotní projekty v oblasti publikování |
| Vědecká společnost | příklady využití v jednotlivých oborech, zapojení komunity, šíření poznatků |
| Výzkumná infrastruktura / služby související s EOSC | federace, interoperabilita, integrace služeb |
| Software / Skupina RSE | vývoj, bezpečnost, škálovatelnost, nasazení |
| Partner v oblasti výzkumu přístupnosti a uživatelského zážitku (UX) | inkluzivní design a hodnocení |
| Výzkumná skupina pro NLP a vícejazyčnost | jazykové technologie, terminologie, překladatelské procesy |
| Partner v oblasti infrastruktury PID a metadat | ORCID/ROR/DOI a interoperabilita metadat |
| Organizace zabývající se udržitelností v oblasti open source | správa, komunita a dlouhodobá udržitelnost |

Návrh nemusí zahrnovat všechny tyto role. Jeho struktura by měla odpovídat cílům výzvy.

## 8. Model opakovaně použitelných pracovních balíčků

### WP1 — Koordinace, řízení a požadavky

**Cíle:** řízení projektů, správa, požadavky, koordinace v oblasti etiky a práva a slaďování zájmů zainteresovaných stran.

**Orientační výstupy:** rámec pro správu a řízení; základní požadavky; registr rizik; zásady týkající se dat, duševního vlastnictví a otevřeného zdrojového kódu.

### WP2 — Vědecký objektový model a interoperabilita

**Cíle:** upřesnit specifikace protokolu OMI; definovat smlouvy o výměně; ověřit sémantiku obousměrného přenosu a původ dat.

**Orientační výstupy:** specifikace s verzemi; profily interoperability; příklady shody; sada validačních testů.

### WP3 — Open Manuscript Studio a referenční implementace

**Cíle:** posílit multiplatformní Studio; zlepšit pracovní postupy v oblasti tvorby obsahu, revize, metadat a přístupnosti.

**Orientační výstupy:** verze zaměřené na produkční prostředí; vylepšení přístupnosti; testovací infrastruktura; technická dokumentace.

### WP4 — Vydavatelská činnost a integrace výzkumné infrastruktury

**Cíle:** propojit pracovní postupy systému OMI s infrastrukturou pro publikování, správu identit, metadat a úložišť.

**Příklady výstupů:** integrace s OJSaOMP; konektory PID a metadat; API; dokumentace k integraci.

### WP5 — Pilotní projekty na institucionální úrovni a hodnocení

**Cíle:** realizovat reprezentativní pilotní projekty ve spolupráci s časopisy, nakladatelstvími, knihovnami nebo univerzitami; posoudit použitelnost a interoperabilitu.

**Očekávané výstupy:** pilotní nasazení; hodnotící datové soubory/zprávy; srovnávací analýzy pracovních postupů; doporučení.

### WP6 — Udržitelnost, využití a komunita

**Cíle:** vytvořit udržitelný model založený na otevřeném zdrojovém kódu, cesty pro přispěvatele, strategii zavádění a plán údržby po ukončení projektu.

**Orientační výstupy:** plán udržitelnosti; plán zavádění a využívání; školicí materiály; komunitní program; výstupy zaměřené na šíření informací.

## 9. Příklad rozčlenění úkolu

Středně velké konsorcium může práci dále rozdělit na jednotlivé úkoly, jako jsou například:

- T2.1 zdokonalení rukopisu a modelu anotací;
- T2.2 profily metadat a trvalých identifikátorů;
- Sada testů interoperability a shody T2.3;
- T3.1 Zabezpečení aplikace Studio napříč platformami;
- T3.2 přístupnost a vícejazyčné uživatelské prostředí;
- T3.3 strukturované styly importu/exportu a publikace;
- T4.1 Integrace OJS/OMP;
- T4.2 integrace repozitáře a informací z výzkumu;
- T4.3 služby pro ověřování identity/PID;
- Pilotní projekt vydávání časopisu T5.1;
- T5.2 pilotní projekt institucionálního tvorby obsahu;
- T5.3 hodnocení použitelnosti a dopadu;
- T6.1 správa open-source projektů;
- T6.2 zavedení a školení;
- T6.3 Udržitelnost a využívání.

## 10. Levnější model

Žádný rozpočet nezávislý na programu by neměl být považován za závazný. Pro účely raného plánování v rámci konsorcia lze náklady související s OMIrozdělit do následujících kategorií:

- personál / osoboměsíce na vývoj výzkumného softwaru;
- práce v oblasti interoperability a specifikací;
- koordinace projektu a technická koordinace;
- Hodnocení uživatelského zážitku (UX), přístupnosti a vícejazyčnosti;
- infrastruktura, hosting, CI/CD a testování;
- podepisování kódu a distribuce na různých platformách;
- zkušební zavedení a podpora;
- cesty a zasedání konsorcia, pokud jsou oprávněné;
- šíření informací, školení a komunitní činnost;
- externí audity, posouzení bezpečnosti nebo odborné služby, je-li to odůvodněné.

### Orientační rozložení úsilí

V případě technického pracovního proudu zaměřeného na „OMI“ by počáteční plánovací poměr mohl být rozdělen přibližně takto:

- **35–45 %** realizace a technické práce;
- **15–20 %** práce v oblasti interoperability a specifikací;
- **15–20 %** pilotní projekty, ověřování a hodnocení;
- **10–15 %** koordinace, řízení a zajišťování kvality;
- **10–15 %** na udržitelnost, šíření informací, školení a budování komunity.

Tyto procentní podíly slouží pouze jako orientační vodítko pro plánování a je třeba je přizpůsobit pravidlům financování a struktuře konsorcia.

## 11. Udržitelnost a popis těžby

Model využívání OMI by neměl záviset na výhradní kontrole nad formátem rukopisu. Udržitelnost lze naopak dosáhnout kombinací následujících prvků:

- jádrový software s otevřeným zdrojovým kódem a otevřené specifikace;
- institucionální přijetí a společný vývoj;
- financované výzkumné a inovační projekty;
- sponzorství a podpora ze strany komunity;
- služby v oblasti implementace, integrace, hostingu nebo podpory poskytované účastníky ekosystému;
- zdroje pro školení a nasazení, které lze opakovaně využívat;
- rozšiřující se síť vzájemně kompatibilních vydavatelských a výzkumných služeb.

Hlavním využitelným výsledkem je tedy **otevřená vrstva pro interoperabilitu a referenční implementace**, která snižuje náklady na integraci a migraci v rámci celého ekosystému vědeckého publikování.

## 12. Pozice v oblasti otevřené vědy, práv duševního vlastnictví a správy dat

Návrh by měl tyto body smluvně vymezit, avšak společnost „OMI“ upřednostňuje následující základní podmínky:

- licencování open source pro opakovaně použitelný základní software;
- veřejně dostupné specifikace interoperability;
- transparentní pravidla pro příspěvky a správu;
- jasné oddělení otevřených specifikací od konfigurace specifické pro danou instituci;
- není vyžadováno zveřejňování důvěrných rukopisů ani údajů z recenzního řízení;
- minimalizace objemu dat a náležitá kontrola přístupu v rámci služeb souvisejících s rukopisy a recenzemi;
- možnost exportu a přenositelnost vědeckého obsahu;
- zachování provenience tam, kde to pracovní postupy vyžadují.

U každého financovaného projektu je nutné přesně specifikovat licence, duševní vlastnictví v pozadí a v popředí, role správců údajů a práva konsorcia.

## 13. Orientační klíčové ukazatele výkonnosti (KPI)

V závislosti na konkrétním případu by mezi měřitelné ukazatele mohly patřit:

- počet pilotních projektů v institucích;
- počet ověřených pracovních postupů časopisů/vydavatelů;
- počet podporovaných profilů pro propojení a integraci;
- věrnost v obou směrech vzhledem k definovaným případům shody;
- snížení počtu ručních zadávání metadat nebo výrobních kroků;
- zlepšení souladu s pravidly přístupnosti;
- počet podporovaných jazyků rozhraní;
- aktivní externí přispěvatelé;
- následné integrace nebo nasazení;
- účastníci školení a využívání dokumentace;
- vydání softwaru a veřejně dostupné technické výstupy;
- institucionální závazky po ukončení projektu.

Pro klíčové ukazatele výkonnosti (KPI) by měly být stanoveny výchozí hodnoty a cílové hodnoty až poté, co budou známy výsledky pilotních projektů konsorcia a očekávané výsledky výzvy.

## 14. Úvod do registru rizik

| Riziko | Směr zmírnění |
| --- | --- |
| Rozsah je příliš široký | Definujte minimální interoperabilní jádro a pilotní projekty zaměřené na konkrétní volání |
| Pracovní postupy jednotlivých vydavatelů se výrazně liší | Používejte profily a adaptéry namísto pevného zakódování jediného pracovního postupu |
| Starší formáty ztrácejí sémantiku | Testy shody, explicitní chování při použití náhradního řešení a původ |
| Zavádění na institucionální úrovni postupuje pomalu | Společný návrh s partnery v pilotních projektech a integrace stávajících platforem |
| Údržba open-source projektů po získání financování | Správa, diverzifikované financování a společná institucionální údržba |
| Otázky bezpečnosti a ochrany soukromí v souvislosti s rukopisy | Modelování hrozeb, řízení přístupu, minimalizace údajů a audity |
| Problémy s vydáváním specifické pro jednotlivé platformy | Automatizované procesy CI/CD a práce související s explicitním podepisováním a distribucí |

## 15. Jednoodstavcová prezentace konsorcia

> Projekt „Open Manuscript Initiative“ nabízí funkční open-source základnu pro zajištění přenositelnosti vědeckých rukopisů napříč systémy pro tvorbu, recenzní řízení a publikování. Namísto vytváření dalšího izolovaného editoru či publikační platformy se projekt „OMI“ zaměřuje na interoperabilní vědecký objekt, který tyto systémy propojuje. Konsorcium může využít stávající specifikace Open Manuscript Studio a OMI jako demonstrační příklad, rozšířit je prostřednictvím výzkumu a integračních prací a ověřit výsledky ve spolupráci s univerzitami, knihovnami, časopisy, vydavateli a výzkumnými infrastrukturami. Výsledné otevřené komponenty mohou omezit nutnost převodu formátů, duplikaci metadat a závislost na konkrétním dodavateli a zároveň posílit vícejazyčnou, přístupnou a strojově zpracovatelnou vědeckou komunikaci.

## 16. Dvouvětá verze určená pro oslovování partnerů

> Open Manuscript Initiative hledá výzkumné a institucionální partnery pro projekty zaměřené na interoperabilní infrastrukturu pro vědecké psaní a publikování. Projekt „OMI“ již poskytuje open-source multiplatformní demonstrační verzi a řešení pro integraci publikování, které mohou sloužit jako technický základ pro pilotní projekty v oblastech otevřené vědy, vědecké komunikace, metadat, recenzního řízení, vícejazyčného publikování a udržitelnosti výzkumného softwaru.

## 17. Informace, které je třeba znát před podáním návrhu

Než jakýkoli návrh začne tento balíček používat, ověřte:

1. přesný program, název a téma;
2. způsobilost žadatele a konsorcia;
3. očekávané výsledky, rozsah a povinné činnosti;
4. TRL nebo případné požadavky na vyspělost;
5. sazba financování a model způsobilých nákladů;
6. požadavky na složení konsorcia;
7. povinnosti v oblasti otevřené vědy a správy dat;
8. bezpečnost, etika a dopady na osobní údaje;
9. Práva duševního vlastnictví a licenční povinnosti;
10. termín pro podání přihlášek a kritéria hodnocení;
11. OMI právní a finanční struktura účastníků;
12. reálné počty osoboměsíců, závazky v rámci pilotního projektu a měřitelné cíle.

## 18. Veřejné zdroje

- [Open Manuscript Initiative website](/)
- [Open Manuscript Studio](/studio)
- [Funding & Partnerships](/docs/governance/funding-and-partnerships)
- [Support OMI](/support/)
- [Implementation status](/docs/governance/studio-implementation-status)

---

**Stav dokumentu:** základní šablona pro přípravu žádostí o grant, kterou lze opakovaně použít. Tento balíček aktualizujte, jakmile projekt „OMI“ dosáhne nových milníků v oblasti vydávání nových verzí, správy, nasazení a přijetí institucemi.

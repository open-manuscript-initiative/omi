---
title: Zásady pro podepisování kódu
sidebar_label: Zásady pro podepisování kódu
---

# Zásady pro podepisování kódu

## Rozsah

Tato směrnice se vztahuje na oficiální binární verze **Open Manuscript Studio**, což je open-source referenční implementace standardu „Open Manuscript Initiative“ (OMI).

Open Manuscript Studio Zdrojový kód je vyvíjen veřejně v repozitáři `open-manuscript-initiative/open-manuscript-studio` GitHub a je distribuován pod licencí MIT.

## Účel

Podepisování kódu zajišťuje ověřitelný původ a integritu oficiálních verzí pro stolní počítače. Umožňuje uživatelům a operačním systémům ověřit, že distribuovaný instalační program byl vytvořen v rámci schváleného procesu vydávání projektu a že po podepsání nebyl nijak upraven.

Počáteční rozsah podpisu zahrnuje oficiální distribuci pro desktopové prostředí Windows, včetně instalačního programu NSIS `.exe` a balíčku WiX `.msi`, které vznikají v rámci procesu vydávání Tauri.

## Nadace SignPath

Open Manuscript Initiativea hodlá pro oprávněná oficiální vydání využívat službu SignPath Foundation pro podepisování kódu, která je k dispozici jako open source.

**Bezplatné podepisování kódu zajišťuje SignPath.io, certifikát vydává SignPath Foundation.**

Podepisování kódu není aktivní, dokud projekt nebude schválen nadací SignPath Foundation a dokud nebude konfigurace podepisování začleněna do oficiálního pracovního postupu pro vydávání verzí. Do té doby mohou být balíčky pro Windows nepodepsané a systém Windows může zobrazovat varování o neznámém vydavateli nebo o reputaci.

## Důvěryhodná historie sestavení a vydání

Oficiální podepsané binární soubory musí být vysledovatelné zpět k veřejnému zdrojovému kódu a ke schválenému postupu vydávání verzí.

U verzí podepsaných pomocí SignPath:

1. zdrojový kód musí pocházet z oficiálního repozitáře Open Manuscript Studio GitHub;
2. Artefakty pro vydání musí být sestaveny pomocí schváleného pracovního postupu „GitHub Actions“ daného projektu s využitím běžců hostovaných na GitHub, pokud to vyžaduje služba pro podepisování;
3. podepisování musí probíhat na artefaktech vytvořených touto důvěryhodnou sestavou, nikoli na lokálně poskytnutých náhradních binárních souborech;
4. podepsaný artefakt musí odpovídat zdrojové revizi a verzi identifikované veřejně dostupnou adresou GitHub release;
5. podpisové údaje, identifikátory projektů a tajné klíče služeb se nesmí ukládat do repozitáře;
6. Oficiální podepsané artefakty nesmí být po podepsání upravovány.

## Role a členové projektu

V současné době jsou určeny následující role pro podepisování:

- **Autoři / přispěvatelé:** Správci projektu Open Manuscript Initiative s právem k zápisu do oficiálních repozitářů. Aktuálně určený správce: [XQZTOKEN0END](XQZTOKEN1END).
- **Recenzenti:** Správci projektu Open Manuscript Initiative, kteří posuzují žádosti o začlenění (pull requests) a změny týkající se vytváření verzí, balení, konfigurace související s bezpečností a pracovních postupů při podepisování kódu. Aktuálně určený recenzent: [XQZTOKEN0END](XQZTOKEN1END).
- **Schvalovatelé:** správci, kterým je svěřeno oprávnění schvalovat žádosti o podepsání do produkčního prostředí a oficiální podepsané verze. Aktuálně určený schvalovatel podepisování: [XQZTOKEN0END](XQZTOKEN1END).

V případě malého open-source projektu může jedna osoba zastávat více než jednu roli, je-li to nutné. Podepsání produkční verze však zůstává výslovným krokem při vydání a není implicitním důsledkem libovolných změn ve zdrojovém kódu.

## Ověřování a řízení přístupu

Správci s přístupem k funkcím správy verzí v systému GitHub nebo k funkcím podepisování v SignPath musí používat vícefaktorové ověřování (MFA). Přístup musí být omezen na minimální oprávnění nezbytná pro přidělenou roli a musí být odebrán, jakmile již nebude potřebný.

Přihlašovací údaje a tokeny pro podpisové služby musí být uloženy pomocí nástrojů pro správu tajných údajů v důvěryhodném prostředí CI/CD. Nesmí být nikdy vloženy do zdrojového kódu aplikace, protokolů pracovních postupů, materiálů k vydání ani do dokumentace.

## Schválení podpisu

Každá žádost o podepsání produkční verze vyžaduje ruční schválení v souladu s požadavky nadace SignPath Foundation platnými pro daný projekt. Schválení podpisu musí být přiřazeno k identifikovatelnému artefaktu verze a revizi zdrojového kódu.

Verze nesmí být prezentována jako podepsaná projektem, pokud nelze její podpis úspěšně ověřit na základě očekávaného řetězce certifikátů.

## Ověření

Uživatelům a distributorům se doporučuje, aby před instalací ověřili podepsané balíčky systému Windows. Platný podepsaný balíček by měl:

- obsahovat platný podpis Authenticode;
- aby byl podpis po stažení neporušený;
- určit držitele certifikátu, který je používán v rámci schválené konfigurace podepisování SignPath Foundation; a
- odpovídají oficiálnímu sdělení „Open Manuscript Studio“, které vydala americká Komise pro cenné papíry a burzy (Open Manuscript Initiative).

Kryptografické podepisování zajišťuje ověření původu a integrity. Nenahrazuje však kontrolu zdrojového kódu, správu zranitelností, kontrolu na přítomnost škodlivého softwaru, kontrolu závislostí ani další opatření v oblasti bezpečnosti softwaru.

## Ochrana osobních údajů

Zásady ochrany osobních údajů společnosti „Open Manuscript Studio“ jsou zveřejněny na adrese [Privacy Policy](./privacy-policy.md).

Pracovní postup podepisování zpracovává artefakty k vydání a technická metadata nezbytná pro určení původu sestavení a schválení podpisu. Služba „OMI“ nesmí do žádostí o podpis záměrně zahrnovat obsah uživatelských rukopisů, přihlašovací údaje uživatelů, obsah produkčních databází ani jiná soukromá data aplikací.

Síťová komunikace ze strany aplikace probíhá pouze v případě, že uživatel záměrně využije funkci využívající síť, nebo pokud je instalace nakonfigurována tak, aby takovou službu poskytovala. Poskytovatelé služeb v oblasti propojených identit, publikování, úložišť nebo integrace mohou mít své vlastní zásady ochrany osobních údajů a podmínky.

Využití služby SignPath v rámci tohoto projektu se rovněž řídí podmínkami ochrany osobních údajů a podmínkami poskytování služeb zveřejněnými společností SignPath a nadací SignPath Foundation.

## Databáze a služby na straně serveru

Integrace PostgreSQL na straně serveru v rámci projektu „OMI Studio“ je oddělena od podepisování kódu pro stolní počítače. Přihlašovací údaje k databázi a produkční data se nacházejí mimo hranice artefaktu pro podepisování kódu a nesmí být nikdy zahrnuty do artefaktů vydání pro stolní počítače ani do žádostí o podepsání.

## Bezpečnostní zprávy

Problémy s bezpečností, které se týkají projektu Open Manuscript Studio, jeho procesu sestavování nebo původu vydání, by měly být nahlášeny soukromě správcům na adrese Open Manuscript Initiative, a nikoli nejprve zveřejněny ve veřejném ticketu, kde by jejich zneužití mohlo ohrozit uživatele.

## Změny v politice

Zásadní změny týkající se poskytovatele podpisu, vlastnictví certifikátu, důvěryhodného systému sestavování, zásad podpisu produkčních verzí, přiřazení rolí nebo schvalovacího modelu musí být zde zdokumentovány, než bude změněný proces představen jako oficiální proces podpisu verzí projektu „OMI“.

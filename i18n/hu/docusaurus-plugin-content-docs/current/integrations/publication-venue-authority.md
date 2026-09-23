---
title: Hitelesített folyóirati és kiadói autoritás
sidebar_label: Hitelesített publikációs hely
description: Folyóirat vagy kiadó domainjének DNS TXT hitelesítése az Open Manuscript Studioban, több domain-adminisztrátorral és szerkesztői szerepkörökkel.
---

# Hitelesített folyóirati és kiadói autoritás

Az Open Manuscript Studio akkor is képes hitelesíteni egy folyóirat vagy kiadó szervezeti autoritását, ha a publikációs hely nem használ OJS vagy OMP rendszert.

A funkció azoknak a folyóiratoknak és kiadóknak készült, amelyek a Studio saját lektorálási és szerkesztői folyamatát szeretnék használni, miközben ellenőrizhető kapcsolatot tartanak fenn a szerkesztői döntés és a publikációs hely között.

> **Preview állapot.** A funkció a Studio jelenlegi fejlesztési ágának része, és a Stable állapot előtt még release-hardening ellenőrzéseken megy keresztül.

## Mit bizonyít a DNS-hitelesítés?

A DNS TXT-hitelesítés azt bizonyítja, hogy egy bejelentkezett Studio-fiók képes volt a Studio által frissen generált kihívást a publikációs hely domainje alatt közzétenni.

Nem bizonyítja azt, hogy:

- egy tanulmányt lektoráltak;
- egy adott személy szerkesztő;
- a tanulmány tartalma helyes;
- a TXT rekord értéke titkos.

A DNS TXT rekord természeténél fogva nyilvános. Bárki lekérdezheti. A biztonság abból származik, hogy a Studio egy friss kihívást egy konkrét bejelentkezett fiókhoz köt, és azt csak ez a fiók, lejárat előtt, egyszer használhatja fel.

Egy már nyilvánosan látható TXT rekord kiolvasása másik Studio-fióknak nem ad jogosultságot.

## A hitelesítés menete

A Studioban nyisd meg a kézirat **Kibővített metaadatok** részét, majd a folyóirat/kiadó mezőt. Új publikációs hely felvételekor válaszd:

**Hitelesítés módja → DNS TXT domainhitelesítés**

Add meg például:

```text
Név: Egyháztörténeti Szemle
Weboldal: https://folyoirat.hu
Domain: folyoirat.hu
ISSN: 1234-5678
```

A Studio egyszer használatos DNS-kihívást generál, például:

```text
TXT név:
_omi-publication.folyoirat.hu

TXT érték:
omi-publication-verification=<egyszer-használatos-token>
```

A kihívás korlátozott ideig érvényes, és csak az a bejelentkezett Studio-fiók használhatja fel, amely létrehozta.

## A TXT rekord felvétele

A folyóirat vagy kiadó domainjét kezelő DNS-zónában hozz létre TXT rekordot.

Ha a DNS-szolgáltató csak a hostnevet kéri:

```text
Típus: TXT
Host / Név: _omi-publication
Érték: omi-publication-verification=<egyszer-használatos-token>
```

Ha teljes domainnevet kér:

```text
_omi-publication.folyoirat.hu
```

### Példa Pleskben

A szokásos útvonal:

**Websites & Domains → DNS Settings → Add Record**

Majd:

```text
Record type: TXT
Domain name / Host: _omi-publication
Value: omi-publication-verification=<egyszer-használatos-token>
```

A Plesk rendszerint automatikusan hozzáteszi a zóna domainnevét.

A kezdeti ellenőrzéshez 300 másodperces TTL praktikus lehet, de az alapértelmezett érték is megfelelő.

## Ellenőrzés a Studioban

A TXT rekord közzététele után térj vissza a Studioba, és válaszd a **DNS ellenőrzése** lehetőséget.

A Studio szerveroldalon lekérdezi a TXT rekordot. Ha az aktuális challenge megtalálható és érvényes, a publikációs hely DNS-hitelesített lesz, a challenge-et létrehozó fiók pedig megkapja:

```text
DOMAIN_ADMIN
```

A TXT értékét a Studio nem használja jelszóként vagy szerkesztői hitelesítő adatként.

## Több domain-adminisztrátor

Egy hitelesített folyóiratnak vagy kiadónak több domain-adminisztrátora lehet.

Az első `DOMAIN_ADMIN` a sikeres DNS-hitelesítéskor jön létre. Ezután bármelyik aktív domain-adminisztrátor e-mail-cím alapján további szerepköröket adhat már létező Studio-fiókoknak:

- `DOMAIN_ADMIN`
- `EDITOR`
- `EDITOR_IN_CHIEF`

A további domain-adminisztrátorokhoz **nem kell új DNS TXT rekord**. Az ő jogosultságuk a már hitelesített publikációs helyen belüli explicit delegálásból származik.

Minden aktív domain-adminisztrátor azonos venue-adminisztrációs jogosultsággal rendelkezik.

A Studio nem engedi az utolsó aktív `DOMAIN_ADMIN` visszavonását. Ha az egyetlen adminisztrátort le szeretnéd cserélni, előbb adj jogosultságot egy másik domain-adminisztrátornak.

## Szerepkörök

### DOMAIN_ADMIN

A domain-adminisztrátor:

- kezeli a publikációs hely autoritását;
- további domain-adminisztrátorokat adhat hozzá;
- szerkesztőket és főszerkesztőket hatalmazhat fel;
- visszavonhat venue-tagságokat, az utolsó aktív domain-admin kivételével.

A `DOMAIN_ADMIN` szerepkör önmagában **nem** jogosít tudományos szerkesztői döntésre.

### EDITOR

A szerkesztő publisher-verified elfogadó döntést rögzíthet, ha ugyanaz a Studio-fiók a kézirat lektorálási munkaterében is rendelkezik a szükséges szerkesztői jogosultsággal, és a Studio-native review feltételei teljesültek.

### EDITOR_IN_CHIEF

A főszerkesztő ugyanilyen publisher-verified döntési jogosultsággal rendelkezik, miközben az auditbizonyíték külön megőrzi a főszerkesztői szerepkört.

Ugyanaz a Studio-fiók több külön folyóiratnál vagy kiadónál is rendelkezhet szerepkörrel. A jogosultság mindig az adott publikációs helyhez kötött: attól, hogy valaki az egyik folyóirat `DOMAIN_ADMIN` szereplője, egy másik folyóiratnál még semmilyen jogosultságot nem kap.

Ugyanaz a Studio-fiók egy publikációs helyen több szerepet is kaphat, például:

```text
DOMAIN_ADMIN
EDITOR_IN_CHIEF
```

## Kapcsolat a peer review folyamattal

A bizalmi lánc szándékosan több külön lépésből áll:

```text
DNS TXT challenge
        ↓
Hitelesített publikációs hely
        ↓
DOMAIN_ADMIN delegálás
        ↓
EDITOR / EDITOR_IN_CHIEF
        ↓
Lezárt Studio-native tudományos lektorálás
        ↓
Pontos revízió + manuscript-state digest + publication-content digest
        ↓
Hitelesített szerkesztői döntés
        ↓
OMI · PEER REVIEW · VERIFIED
```

A látható peer-review pecsét tehát nem azt jelenti, hogy a DNS bizonyítja a lektorálást.

Publisher-verified döntés esetén a Studio változtathatatlan authority snapshotban rögzíti a publikációs helyet, a hitelesített domaint, a DNS-hitelesítés azonosítóját és időpontját, valamint a döntéskor aktív szerkesztői szerepkört.

A későbbi DNS- vagy tagságváltozás nem írja át a korábbi döntés provenance adatait.

## A domain későbbi ellenőrzése

A Studio új publisher-verified döntés előtt időszakosan újraellenőrizheti a nyilvános DNS-állítást.

Ez azt jelenti:

> a hitelesített domain továbbra is nyilvánosan fenntartja a Studio venue-kapcsolatát.

Nem azt jelenti:

> a felhasználó egy DNS-ben tárolt titkot birtokol.

A DNS továbbra is nyilvános szervezeti kontrolljelzés.

## OJS és OMP

Ha a folyóirat vagy kiadó már Studio OJS/OMP integrációt használ, a normál PKP-hoz kötött workflow-authority számára nincs szükség erre a DNS-útra.

A DNS-hitelesítés elsősorban azoknak a folyóiratoknak és kiadóknak készült, amelyek nem használnak OJS/OMP rendszert, de a Studioban ellenőrizhető publikációs autoritást szeretnének.

## Biztonsági tulajdonságok

A megvalósítás célja, hogy:

- a DNS challenge a létrehozó bejelentkezett fiókhoz legyen kötve;
- csak `PENDING` állapotban lehessen felhasználni;
- csak egyszer lehessen felhasználni;
- másik fiók ne tudja felhasználni a nyilvánosan látható challenge-et;
- egy már hitelesített venue ne legyen észrevétlenül más domainhez átkötve;
- további adminisztrátorok belső delegálással kerüljenek be, ne új, független DNS-claimmel;
- az utolsó aktív domain-adminisztrátort ne lehessen eltávolítani;
- a venue-adminisztráció és a kézirat szerkesztői jogosultsága külön authorization plane maradjon;
- a nyilvános assurance-metaadat ne tartalmazzon lektori személyazonosságot vagy bizalmas lektori jelentést.

## Kapcsolódó dokumentáció

- [Studio telepítési módok](../studio-deployment-modes)
- [Integrációs architektúra](../architecture)
- [OJS plugin](../ojs-plugin)
- [OMP plugin](../omp-plugin)
- [Cross-platform Studio architektúra](../../foundations/cross-platform-studio)

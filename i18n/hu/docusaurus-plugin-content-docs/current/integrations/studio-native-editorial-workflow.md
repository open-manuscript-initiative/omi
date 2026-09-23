---
title: Studio-native szerkesztőségi munkafolyamat
sidebar_label: Studio-native szerkesztőségi workflow
description: Beküldés, lektorálás, szerzői javítás, szerkesztői döntés és publikálás DNS-hitelesített, OJS/OMP nélküli folyóiratok és kiadók számára.
---

# Studio-native szerkesztőségi munkafolyamat

Az Open Manuscript Studio a teljes szerkesztőségi folyamatot kezelheti olyan **DNS-hitelesített folyóirat vagy kiadó** számára, amely nem használ OJS vagy OMP rendszert.

> **Preview állapot.** A workflow a Studio 1.0 fejlesztési ágában stabilizálás alatt áll. Az OJS/OMP-integrációk autoritási határa nem változik.

## Autoritási határ

Egy publikációs helyhez mindig pontosan egy hiteles szerkesztőségi workflow tartozik.

- **OJS folyóirat:** a beküldés, lektori fordulók, lektorkijelölés és szerkesztői döntés továbbra is az OJS-ben authoritative.
- **OMP kiadó:** a megfelelő folyamat továbbra is az OMP-ben authoritative.
- **DNS-hitelesített, OJS/OMP nélküli publikációs hely:** a Studio kezelheti az ezen az oldalon leírt teljes folyamatot.

Ha egy venue hitelesített OJS/OMP-kötéssel rendelkezik, a Studio szerveroldalon megtagadja a natív workflow használatát. Így nem jöhet létre egymásnak ellentmondó párhuzamos szerkesztőségi állapot.

## Teljes folyamat

```text
Szerző elkészíti a kéziratot a Studioban
        ↓
A pontos, rögzített revízió beküldése
        ↓
Szerkesztői inbox
        ↓
Szerkesztő lektort/lektorokat jelöl ki
        ↓
Lektor elfogadja a feladatot és a Studioban dolgozik
        ↓
Lektor beadja a véleményt és a javaslatot
        ↓
Szerkesztő lezárja a beadott lektori feladatot
        ↓
Szerkesztő dönt:
   ├── Javítás kérése
   ├── Elutasítás
   └── Elfogadás
        ↓
Javítás esetén:
Szerző javít és új rögzített revíziót küld be
        ↓
Szerkesztő elfogadhatja vagy új lektori fordulót indíthat
        ↓
Szerkesztői ACCEPT döntés
        ↓
Publikálható
        ↓
Publikálás
```

A **szerkesztői elfogadás és a publikálás két külön művelet**. Az elfogadás egy pontos kéziratrevízióhoz rögzít változtathatatlan döntést; a publikáció ezt később felhasználja.

## Szerzői beküldés

A szerző a **Kibővített metaadatok** között kiválasztja a DNS-hitelesített folyóiratot vagy kiadót. Ezután a **Szerkesztőségi munkafolyamat** képernyőn beküldheti a pontos, rögzített revíziót.

A beküldés megőrzi:

- a kézirat és a rögzített revízió azonosítóját;
- a kanonikus kéziratállapot SHA-256 digestjét;
- a publikációs tartalom SHA-256 digestjét;
- a kanonikus kézirat-snapshotot;
- a lektor számára biztonságos anonim kéziratnézetet;
- a hivatkozott bináris eszközöket SHA-256 ellenőrzéssel;
- a publikációs hely azonosítóját és hitelesített domainjét;
- a workflow állapotát és append-only eseménytörténetét.

A tudományos kézirat marad a kanonikus dokumentum; a szerkesztőségi workflow állapota külön tárolódik.

## Szerkesztői inbox

A publikációs helynél aktív `EDITOR` vagy `EDITOR_IN_CHIEF` szereppel rendelkező fiókok látják annak Studio-native beküldéseit.

A szerkesztő másik eszközön is megnyithatja a beküldött pontos revíziót, mert a submission a snapshotot és az ellenőrzött asseteket is megőrzi.

A `DOMAIN_ADMIN` szerepkör önmagában továbbra sem jogosít szerkesztői döntésre.

## Lektor kijelölése és anonimitás

A szerkesztő egy vagy több már létező Studio-fiókot jelölhet ki tudományos lektornak. A Studio-native tudományos lektorálás alapértelmezése double blind. A beküldő szerző ugyanennek a submissionnek nem jelölhető ki tudományos lektorául.

A lektor a meglévő Studio review-workspace-ben:

- elfogadhatja vagy visszautasíthatja a feladatot;
- az anonim kéziratot olvashatja;
- a szerző számára látható vagy csak szerkesztői megjegyzést írhat;
- ajánlást adhat és beküldheti a véleményt.

A visszautasított lektori felkérés megmarad az audit-előzményekben, de nem válik a szerkesztői döntés kötelező bizonyítékává. A szerkesztő ugyanabban a fordulóban helyettesítő lektort jelölhet ki; a forduló akkor válik döntésre alkalmassá, amikor minden nem visszautasított tudományos lektori feladat lezárult.

A szerzői nézet nem adja ki a lektor Studio-személyazonosságát, és az `EDITOR_ONLY` megjegyzéseket sem.

## Szerzői javítás

A lezárt lektori forduló után a szerkesztő **Javítás kérése** döntést adhat, szerkesztői üzenettel.

A szerző látja:

- a javítási kérést;
- a számára látható lektori megjegyzéseket;
- a lektori ajánlást;
- a workflow aktuális állapotát.

Javítás után a szerző **új rögzített revíziót** küld be. A Studio új revision ID-t és SHA-256 state/content digeste(ke)t rögzít.

Ha a szerkesztő új lektori fordulót indít, a Studio nem engedi, hogy annak lezárása előtt egy korábbi forduló bizonyítékára visszaesve történjen elfogadás.

## Szerkesztői döntés

A szerkesztői workflow külön **Kézirat elfogadása** műveletet tartalmaz.

Az elfogadás a Studio változtathatatlan `EditorialDecision` bizonyítékát használja, és hozzáköti a döntést:

- a pontos kéziratrevízióhoz;
- a manuscript-state digesthez;
- a publication-content digesthez;
- a lezárt tudományos lektori bizonyítékhoz;
- a lektori fordulóhoz;
- a döntést hozó szerkesztőhöz;
- a DNS-hitelesített publikációs helyhez és annak authority snapshotjához.

Ha az elfogadás után változik a kézirat, megváltozik a digestje is, ezért a korábbi döntés a módosított tartalomhoz nem használható fel.

## Publikálás

Elfogadás után a pontos revízió **publikálható** állapotú.

A publikációs képernyő Studio-native venue esetén nem hozza létre a szerkesztői elfogadást. Csak a már létező döntést használja fel.

A workflow csak akkor kerül `PUBLISHED` állapotba, ha a külső publikáció URL-je a hitelesített publikációs hely domainje alatt vagy annak valamelyik aldomainjén található. Más webhelyre történő külső publikálás sikerülhet, de a hitelesített folyóirati/kiadói submission ilyenkor `ACCEPTED` állapotban marad.

A publisher-verified kimenet megkaphatja:

```text
OMI
PEER REVIEW
VERIFIED
```

A pecsét a revízióhoz kötött szerkesztői bizonyítékot jelöli, nem önmagában a DNS-hitelesítést.

## Workflow-állapotok

| Állapot | Jelentés |
| --- | --- |
| `SUBMITTED` | A pontos rögzített revízió beküldve |
| `IN_REVIEW` | Az aktuális fordulóhoz lektor van kijelölve |
| `REVISION_REQUESTED` | A szerkesztő javítást kért |
| `REVISION_SUBMITTED` | A szerző új rögzített revíziót küldött |
| `ACCEPTED` | A pontos revízióhoz változtathatatlan elfogadó döntés tartozik |
| `REJECTED` | A kézirat elutasítva |
| `PUBLISHED` | Az elfogadott revízió publikálva |

## Kapcsolódó dokumentáció

- [Hitelesített publikációs hely](../publication-venue-authority)
- [Studio telepítési módok](../studio-deployment-modes)
- [OJS plugin](../ojs-plugin)
- [OMP plugin](../omp-plugin)

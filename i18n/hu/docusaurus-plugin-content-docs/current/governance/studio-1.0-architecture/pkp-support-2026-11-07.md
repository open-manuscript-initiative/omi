---
title: OJS/OMP 3.5 support — 2026-11-07
sidebar_label: OJS/OMP support and acceptance
---

# OJS/OMP-támogatás és kiadási bizonyíték — 2026-11-07

## Támogatási döntés

| Publikációs rendszer | Verziók | Studio-besorolás | Kötelező elfogadás |
| --- | --- | --- | --- |
| OJS | 3.5.0-4, 3.5.0-5, 3.5.0-6 | Stable elfogadási kör | Három verzióhoz kötött E02-feladat/archívum és három kézi kapu. |
| OMP | 3.5.0-4, 3.5.0-5, 3.5.0-6 | Preview | Mindhárom E02-regressziós feladat/archívum kötelező; ez nem jelent Stable OMP-funkcióígéretet. |

Ez az ADR-010 és ADR-019 kifejezett pontosítása. A Preview-funkció hibája általában nem kiadásblokkoló, de a hat célverzióból álló PKP-regressziós mátrix kötelező kiadási szerződés. Bármely előírt cél hiányzó, hibás, kihagyott, megszakított, elavult vagy idegen SHA-hoz tartozó bizonyítéka blokkolja az E02-t. Az adatvédelmi, biztonsági és adatvesztési hibák minden besorolásnál blokkolnak. A meglévő ellenőrzések megmaradnak, `continue-on-error` nélkül.

A connector képességfelderítést és a meglévő aláírt alkalmazásprotokollokat használja. A végrehajtható funkciókat a telepített bővítmény verziója, a szerver által közölt képesség és a felhasználói/megbízási jogosultság határozza meg; a támogatott verzió önmagában nem ad hozzáférést. Az OJS/OMP marad a saját munkafolyamata, döntései, lektoráláslezárása és privát fájljai authority-je. Nem változik az OMI schema/container, az API-v1, a credential- vagy adatbázis-szerződés.

## Kézi elfogadás

Az aktuális v1 receipt pontosan **14** kézi kaput követel, köztük az `ojs-3.5.0-4`, `ojs-3.5.0-5` és az új `ojs-3.5.0-6` azonosítót. Mind függő állapotból indul. Minden OJS-elfogadáshoz a kiválasztott forrás-SHA, valós megfigyelési időpont és kitakart érzékeny adatokkal közölt HTTPS-bizonyítékhivatkozás szükséges; a külső bővítmény SHA-ját és a vizsgált scope-okat a hivatkozott bizonyítékban kell rögzíteni. A zöld automatizált teszt nem helyettesíti a felelős nyilatkozatát.

A korábbi, 13 kapus receipt megőrzi eredeti bájtjait, tárgyát, időpontjait és hash-eit. A korábbi kör történeti bizonyítéka marad, a kibővített mátrixot nem hagyhatja jóvá. Új tervezetet kell készíteni a tényleges jelölthöz és fájlokhoz; jóváhagyást átmásolni vagy PASS-t kitalálni tilos. Ez az egyeztetés nem RC-jóváhagyás és nem éles PKP-frissítés.

## Forrás- és CI-bizonyíték

A -6 kompatibilitást a Studio #877, OJS-plugin #34, OMP-plugin #26 és OMI #190 vezette be. A 2026-11-07-én megfigyelt [hatcélos Studio-workflow](https://github.com/open-manuscript-initiative/open-manuscript-studio/actions/runs/42344206487), [OJS-bővítmény telepítési mátrix](https://github.com/open-manuscript-initiative/omi-ojs-plugin/actions/runs/42344311652) és [OMP-bővítmény telepítési mátrix](https://github.com/open-manuscript-initiative/omi-omp-plugin/actions/runs/42344357858) saját commitján sikeres. Ezek történeti bemenetek, nem egy későbbi javítócommit, éles szerver vagy kiadott bővítményarchívum bizonyítékai.

Az OJS -6 a hivatalos image-et használja. Amíg nincs -6 OMP Docker-tag, az OMP -6 alkalmazás pontos hivatalos forrásból (`9e2a7fd0054ca73e5f5a04c40fdcf9da2545dc6c`), rekurzív submodule-okkal és zárolt Composer-függőségekkel készül, a hivatalos -5 PHP/Apache futtatókörnyezeten. A CI ellenőrzi a tényleges alkalmazásverziót; ez nem hivatalos OMP -6 image-ként kerül bemutatásra. A letölthető bővítmények verziója nem változik; a kompatibilitási CI nem hoz létre új kiadási archívumot.

## Architektúraegyeztetés

A [Studio ADR-033](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-033-pkp-support-and-release-evidence.md) rögzíti az alternatívákat, következményeket és felülvizsgálati feltételeket. A Target Architecture, Gap Analysis, Refactoring and PR Plan, ADR Register és Executive Summary ezt a támogatási és bizonyítékpolitikát követi. A C06–C09 és D08 connector-/capability-feladatai megmaradnak; az E02–E05 promóció előtt a teljes automatizált mátrixot és új, 14 kapus receiptet követeli. Az eredeti 54 tervezett egységet nem számozzuk át és nem nyilvánítjuk késznek. Verzió-, besorolás- vagy elfogadási/terjesztési követelmény változásakor új felülvizsgálat kell.

[Studio implementation PR #878](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/878).

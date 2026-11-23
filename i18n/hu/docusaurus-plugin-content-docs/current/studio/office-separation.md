---
title: "Stúdió és EuroOffice: két önálló szolgáltatás"
sidebar_label: "Stúdió és EuroOffice"
description: "Az EuroOffice leválasztása és a DOCX-dokumentumcsere az OMI Stúdióban."
---

# Stúdió és EuroOffice: két önálló szolgáltatás

**Architektúradöntés: 2026. november 23.** A [Stúdió #971-es PR-je](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/971) beolvadt a forráskódba. **A forráskód változása önmagában nem jelent új, közzétett telepítőt.** A korábban telepített alkalmazások a frissítésükig még tartalmazhatják a régi felületet.

## Eltérő feladatok

- **Open Manuscript Studio:** tudományos szövegalkotás, szemantikus kéziratszerkezet, hivatkozások és jegyzetek, kutatási projektek, lektorálás, tördelés, publikálás és OJS/OMP-munkafolyamatok.
- **EuroOffice:** önálló, általános célú irodai dokumentumszerkesztő szolgáltatás. Telepítése, bejelentkezése, dokumentumtárolása, jogosultságai, mentései és frissítései függetlenek a Stúdiótól.

A korábban beágyazott EuroOffice DOCX-szerkesztő, a megnyitófelület, a távoli szerkesztőkeret és az API-útvonalak kikerültek a Stúdióból. A Stúdió telepítéséhez nem kell Office-szerver. **A Stúdió saját DOCX/ODT-importja és -exportja, szemantikus szerkesztője és kiadványkészítése megmaradt.**

## Dokumentumcsere

Az önálló EuroOffice-ban elkészült fájlt **kifejezett művelettel** kell DOCX-ként letölteni, majd a Stúdió saját dokumentumimportálójával megnyitni. A címeket, jegyzeteket, hivatkozásokat, grafikus elemeket és metaadatokat ellenőrizni kell, mielőtt a tartalmat strukturált OMI-kéziratként kezeljük. A Word-megjelenítés és a szemantikus dokumentummodell nem azonos.

**Nincs beépített Office-szerkesztő és automatikus kétirányú dokumentumszinkron.** Egy későbbi opcionális kapcsoló csak külön biztonsági, verziózási és forráskezelési tervezés után vezethető be.

## A verziók egymástól függetlenek

| Csatorna | 2026. november 23-án igazolt állapot |
| --- | --- |
| Stúdió fejlesztői forráskód | `1.0.0-rc.2` |
| Legutóbbi nyilvános, közvetlen GitHub-telepítők | `0.3.0-beta.13` |
| Microsoft Store – utoljára igazolt verzió | `1.0.0.0` |
| OJS-bővítmény | `v1.8.7` |
| OMP-bővítmény | `v1.5.1` |
| Hordozható OMI-kéziratformátum | `OMI-SPEC-320@0.3.0` |

Lásd az [RC2 csatornáit](/docs/studio/releases/1.0.0-rc.2) és a [november 23-i fejlesztési összefoglalót](/docs/studio/updates/2026-11-23). A forráskód frissülése önmagában nem jelent új Android APK-t, Microsoft Store-frissítést vagy asztali telepítőt.

## Intézményi üzemeltetőknek

Az önálló EuroOffice nem része a Stúdió telepítési láncának. Frissítéskor a korábbi `EUROOFFICE_URL` és `EUROOFFICE_JWT_SECRET` változókat csak a **Stúdió API** környezetéből kell kivezetni, az önálló EuroOffice szerveréből nem. A korábbi Office API-útvonalak már nincsenek bekötve. Az integrációt kizárólag próbákhoz használtuk, a régi adatbázisséma egyelőre megmarad.

Részletesen: [üzemeltetési útmutató](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/server/eurooffice-separation-runbook.md) és [ADR-032](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-032-office-service-separation.md).
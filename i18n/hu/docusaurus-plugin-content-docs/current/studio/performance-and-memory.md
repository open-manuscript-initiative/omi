---
title: "Adaptív memóriakezelés"
sidebar_label: "Adaptív memóriakezelés"
---

# Adaptív memóriakezelés

A Beállítások → Szerkesztő memóriahasználata menüben választható üzemmód; az alapértelmezett a kiegyensúlyozott. A közös keret a származtatott pillanatképekre, szövegprojekciókra és jegyzetankorokra vonatkozik; becslés, nem lefoglalt RAM és nem teljes alkalmazásmemória. Ismeretlen kapacitásnál nagy teljesítményű módban mobilon legfeljebb 32 MiB, asztali gépen 64 MiB. Androidon előtérben 30 másodpercenként ellenőrzi az elérhető rendszermemóriát, a keretet annak 1/16-ára korlátozza, 256 MiB alatt kikapcsolja a cache-t. Háttérbe kerüléskor ürít, kézi ürítéskor sem törli a kéziratot vagy a visszavonási előzményeket. A valódi készüléken mért PSS (WebView-val), az 50–1000 oldalas késleltetési és memóriaterhelési vizsgálat még hátravan. A 3 GiB minimális és 6 GiB ajánlott Android RAM előzetes célérték, nem igazolt rendszerkövetelmény.

| RAM (GiB) | Economy / Takarékos / Sparsam (MiB) | Balanced / Kiegyensúlyozott / Ausgewogen (MiB) | Performance / Teljesítmény / Leistung (MiB) |
| --- | ---: | ---: | ---: |
| 2 | 4 | 8 | 16 |
| 3 | 8 | 16 | 32 |
| 4 | 16 | 32 | 64 |
| 6 | 32 | 64 | 128 |
| 8 | 64 | 128 | 256 |
| 12+ | 128 | 256 | 512 |

[PR #1043](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1043) · [RC4](/docs/studio/releases/1.0.0-rc.4)

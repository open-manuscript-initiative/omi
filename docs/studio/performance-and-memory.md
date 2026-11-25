---
title: "Adaptive memory management"
sidebar_label: "Adaptive memory management"
---

# Adaptive memory management

Open Settings → Editor memory. Balanced is the default. The shared budget covers derived snapshots, text projections and note-anchor cache; it is an estimate, not reserved RAM or total application usage. Unknown capacity uses at most 32 MiB mobile / 64 MiB desktop in performance mode. Android samples available system memory every 30 seconds in the foreground, caps the budget at 1/16 of available RAM and disables it below 256 MiB. Background visibility clears the cache; manual clearing does not delete the manuscript or undo history. Real-device PSS including WebView, 50–1000-page latency and memory-pressure tests remain pending. Provisional Android device RAM targets of 3 GiB minimum / 6 GiB recommended are not certified requirements.

| RAM (GiB) | Economy / Takarékos / Sparsam (MiB) | Balanced / Kiegyensúlyozott / Ausgewogen (MiB) | Performance / Teljesítmény / Leistung (MiB) |
| --- | ---: | ---: | ---: |
| 2 | 4 | 8 | 16 |
| 3 | 8 | 16 | 32 |
| 4 | 16 | 32 | 64 |
| 6 | 32 | 64 | 128 |
| 8 | 64 | 128 | 256 |
| 12+ | 128 | 256 | 512 |

[PR #1043](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1043) · [RC4](/docs/studio/releases/1.0.0-rc.4)

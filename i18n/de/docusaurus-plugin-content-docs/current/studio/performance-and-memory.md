---
title: "Adaptive Speicherverwaltung"
sidebar_label: "Adaptive Speicherverwaltung"
---

# Adaptive Speicherverwaltung

Unter Einstellungen → Editorspeicher den Modus wählen; Ausgewogen ist Standard. Das gemeinsame Budget umfasst abgeleitete Snapshots, Textprojektionen und Anmerkungsanker; es ist eine Schätzung, kein reservierter RAM oder gesamter Anwendungsverbrauch. Bei unbekannter Kapazität gelten im Leistungsmodus maximal 32 MiB mobil / 64 MiB Desktop. Android prüft im Vordergrund alle 30 Sekunden den verfügbaren Systemspeicher, begrenzt das Budget auf 1/16 und deaktiviert den Cache unter 256 MiB. Im Hintergrund wird geleert; manuelles Leeren löscht weder Manuskript noch Rückgängig-Verlauf. PSS einschließlich WebView sowie Latenz- und Speicherdrucktests mit 50–1000 Seiten stehen aus. Vorläufige Android-Ziele von mindestens 3 GiB bzw. empfohlenen 6 GiB sind keine zertifizierten Anforderungen.

| RAM (GiB) | Economy / Takarékos / Sparsam (MiB) | Balanced / Kiegyensúlyozott / Ausgewogen (MiB) | Performance / Teljesítmény / Leistung (MiB) |
| --- | ---: | ---: | ---: |
| 2 | 4 | 8 | 16 |
| 3 | 8 | 16 | 32 |
| 4 | 16 | 32 | 64 |
| 6 | 32 | 64 | 128 |
| 8 | 64 | 128 | 256 |
| 12+ | 128 | 256 | 512 |

[PR #1043](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/1043) · [RC4](/docs/studio/releases/1.0.0-rc.4)

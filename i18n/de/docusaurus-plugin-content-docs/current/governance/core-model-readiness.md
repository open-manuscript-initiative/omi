---
id: core-model-readiness
title: Reifegrad der Kernmodelle
sidebar_label: Reifegrad der Kernmodelle
---

# Reifegrad und Stabilisierungsreihenfolge der Kernmodelle

Nachweisergänzung vom 11. November 2026. Der Quellenbestand für 24 Modelle behält den Stand vom 31. Oktober. Informative Zusammenfassung; alle Modelle bleiben Draft. Studio verwendet das Dateiformat 0.3.0.

| Phase | Modelle | Thema |
|---|---|---|
| 1 | 000, 120, 100, 140 | Grundprinzipien, Objekte, Dokument und Metadaten |
| 2 | 150, 110, 130 | Mitwirkende, Anker und Annotationen |
| 3 | 160, 180 | Änderungen und Validierung |
| 4 | 220, 210, 221, 225 | Bibliografie, Zitate, Bibliothek und Quellenherkunft |
| 5 | 320, 330 | Dateiformat und Container |
| 6 | 190, 170, 200 | Berechtigungen, Übersetzung und Begutachtung |
| 7 | 240, 230 | Darstellung und Veröffentlichung |
| 8 | 340 | Import/Export und Informationsverlust |
| 9 | 350, danach 300/310 | Konformität, Erweiterungen und API |

Messwerkzeuge und Sicherheitskorrekturen werden von Beginn an eingesetzt. Der Abhängigkeitszyklus 210/221 benötigt eine gemeinsame Prüfung.

Vorbereitet sind vier überarbeitete Drafts, 66 nummerierte Anforderungen, ein strukturelles Teilschema, ein begrenzter Validator und 22 Beispiele. Die neue Studio-Suite prüft die letzten elf bisher unbeobachteten Anforderungen mit 22 ausgeführten Fällen. Der kombinierte Stand lautet 66 teilweise belegt, 0 ohne Beobachtung und 0 vollständig belegt. Dies betrifft die untersuchte Teilmenge aus vier Kernmodellen, nicht den gesamten Reifegrad des Produkts oder aller 24 Spezifikationen.

Zwei Regressionen führten zu expliziten Quell-/Ergebnis-ID-Zuordnungen bei Absatzteilung und -zusammenführung. Die Zuordnung bleibt im portablen Verlauf erhalten. Der vollständige Studio-Testlauf besteht 1035 Prüfungen ohne Fehler oder Auslassungen. Übersetzungsantworten sind synthetisch, Yjs läuft im Speicher, die Zugänglichkeitsprüfungen betreffen ausgewählte Exporte. Live-Betrieb und Screenreader-Abnahme bleiben offen.

[Gebundener Studio-Bericht](/evidence/studio-remaining-2026-11-11.json) · [Aktueller kombinierter Index](/evidence/core-remaining-2026-11-11.json) · [Studio PR #900](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/900)

Vollständige Anforderungsabdeckung, öffentliche fachliche Prüfung, unabhängige Interoperabilität, Migrationsentscheidungen und dokumentierte Genehmigung bleiben offen. Gemeinsam verwendeter Validatorcode ist keine unabhängige Implementierung.


[English source](https://openmanuscript.org/docs/governance/core-model-readiness/)

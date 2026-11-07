---
title: OJS/OMP 3.5 support — 2026-11-07
sidebar_label: OJS/OMP support and acceptance
---

# OJS/OMP-Unterstützung und Freigabenachweise — 2026-11-07

| Publikationssystem | Versionen | Studio-Supportstufe | Erforderliche Abnahme |
| --- | --- | --- | --- |
| OJS | 3.5.0-4, 3.5.0-5, 3.5.0-6 | Stable-Abnahmeumfang | Drei versionsgebundene E02-Jobs/Archive und drei manuelle Prüfpunkte. |
| OMP | 3.5.0-4, 3.5.0-5, 3.5.0-6 | Preview | Alle drei E02-Regressionsjobs/Archive bleiben verpflichtend; keine Stable-Zusage. |

Diese Klarstellung präzisiert ADR-010 und ADR-019: Preview ist allgemein nicht freigabeblockierend, die ausdrücklich deklarierte PKP-Regressionsmatrix mit sechs Zielen bleibt jedoch verbindlich. Fehlende, fehlgeschlagene, übersprungene, abgebrochene, veraltete oder SHA-fremde Nachweise blockieren E02. Sicherheits-, Datenschutz- und Datenverlustfehler blockieren jede Supportstufe.

Das aktuelle v1-Abnahmeprotokoll benötigt **14** manuelle Prüfpunkte einschließlich `ojs-3.5.0-4`, `ojs-3.5.0-5` und `ojs-3.5.0-6`. Neue Entwürfe bleiben vollständig offen. Jeder Nachweis ist an den ausgewählten Quell-SHA, einen tatsächlichen Beobachtungszeitpunkt und eine bereinigte HTTPS-Referenz gebunden. Historische Protokolle mit 13 Prüfpunkten bleiben unverändert und genehmigen den erweiterten Umfang nicht. CI-Erfolg ersetzt keine manuelle Bestätigung.

Serverfähigkeiten, installierte Plugin-Version und Benutzer-/Auftragsberechtigungen bestimmen die verfügbaren Funktionen. OJS/OMP behalten die Hoheit über ihre Workflows, Entscheidungen, den Review-Abschluss und private Dateien. Schema, Container, API-v1 und Datenbankvertrag bleiben unverändert.

OMP -6 wird bei fehlendem offiziellem Docker-Tag aus dem exakten offiziellen Quellstand `9e2a7fd0054ca73e5f5a04c40fdcf9da2545dc6c` mit rekursiven Submodulen und gesperrten Composer-Abhängigkeiten auf der offiziellen -5-PHP/Apache-Laufzeit aufgebaut. CI prüft die tatsächliche Anwendungsversion. Dies ist kein offizielles OMP-3.5.0-6-Image und keine Produktionsaktualisierung oder RC-Freigabe.

Die historischen CI-Nachweise und die vollständige Entscheidung stehen in der [englischen Übersicht](https://openmanuscript.org/docs/governance/studio-1.0-architecture/pkp-support-2026-11-07/) und [Studio ADR-033](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-033-pkp-support-and-release-evidence.md). Bestehende Plugin-Downloads werden nicht neu versioniert. C06–C09, D08 und E02–E05 behalten ihre Aufgaben; die ursprünglichen 54 geplanten Einheiten bleiben unverändert.

[Studio implementation PR #878](https://github.com/open-manuscript-initiative/open-manuscript-studio/pull/878).

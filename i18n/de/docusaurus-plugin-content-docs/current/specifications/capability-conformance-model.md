---
id: capability-conformance-model
title: OMI-SPEC-350 — Fähigkeits- und Konformitätsmodell
sidebar_label: Fähigkeiten und Konformität
description: Nichtnormativer deutschsprachiger Überblick über den Entwurf OMI-SPEC-350 0.1.0.
---

# OMI-SPEC-350 — Fähigkeits- und Konformitätsmodell

**Stand:** Draft 0.1.0 — 31. Oktober 2026.

**Diese Seite ist eine informative Zusammenfassung und keine vollständige normative Übersetzung.** Maßgeblich ist die [englische Fassung von OMI-SPEC-350](https://openmanuscript.org/docs/specifications/capability-conformance-model/) mit den Anforderungen `REQ-CON-001` bis `REQ-CON-038`. Die Veröffentlichung stellt keine Zertifizierung dar.

## Zweck

Das Modell trennt **verfügbare Funktionen**, **deklarierte Fähigkeiten**, **durch Tests belegtes Verhalten** und **unabhängig geprüfte Konformität**. Es ist für Editoren, Konverter, OJS-/OMP-Anbindungen, Server, APIs und Plugins gedacht. Eine vorhandene Funktion begründet keine automatische Normkonformität.

## Zentrale Bausteine

1. **Fähigkeitserklärung:** identifiziert Produkt, Build, Komponente, unterstützte OMI-Spezifikationen, Formate, Profile, Voraussetzungen und Grenzen.
2. **Klasse und Profil:** Konformität wird für einen genau abgegrenzten Implementierungstyp und eine bestimmte Spezifikationsversion behauptet.
3. **Anforderungstests:** ein versionierter Suite-Manifest verbindet jede anwendbare normative Anforderung mit Testfällen, Fixtures und erwarteten Beobachtungen.
4. **Einzelergebnisse:** `pass`, `fail`, `skip`, `error` und `not-run` dürfen nicht verwechselt werden. Eine fehlende Prüfung zählt nicht als bestanden.
5. **Gesamtentscheidung:** `conformant` setzt vollständig belegte Pflichtanforderungen voraus. Bekannte Pflichtverletzungen führen zu `nonconformant`; fehlende Nachweise ohne beobachtete Pflichtverletzung zu `indeterminate`.
6. **Selbsteinschätzung versus Fremdprüfung:** eigene CI-Tests sind nicht mit einer unabhängigen Verifikation gleichzusetzen.
7. **Aktualität:** Aussagen gelten nur für das angegebene Build, Test-Suite, Abhängigkeiten und die jeweilige normative Grundlage. Wesentliche Änderungen können den Nachweis entwerten.

## Verhältnis zu anderen Modellen

`OMI-SPEC-180` prüft den Zustand eines Manuskripts. `OMI-SPEC-340` beschreibt Import/Export und mögliche Verluste. `OMI-SPEC-350` prüft hingegen die belegte Konformität **der implementierenden Software**.

## Noch nicht abgeschlossen

Normative Schemata für Fähigkeitsangaben, Suite-Manifeste, Ausführungsnachweise und Verifikationsberichte, vollständige Testabdeckung, unabhängige Prüfregeln und akzeptierte Interoperabilitäts-Fixtures sind noch nicht veröffentlicht. Der [Implementierungsstatus](https://openmanuscript.org/docs/governance/implementation-status-matrix/) wird getrennt geführt.

---
title: Studio-nativer redaktioneller Workflow
sidebar_label: Studio-nativer redaktioneller Workflow
description: Einreichung, Begutachtung, Überarbeitung, redaktionelle Entscheidung und Publikation für DNS-verifizierte Zeitschriften und Verlage ohne OJS/OMP.
---

# Studio-nativer redaktioneller Workflow

Open Manuscript Studio kann den vollständigen redaktionellen Workflow für eine **DNS-verifizierte Zeitschrift oder einen Verlag ohne OJS/OMP** verwalten.

> **Preview-Status.** Der Workflow wird für die Studio-1.0-Linie gehärtet. Die Autoritätsgrenze der OJS/OMP-Integrationen bleibt unverändert.

## Autoritätsgrenze

Für eine Publikationsstelle gibt es genau einen maßgeblichen redaktionellen Workflow.

- **OJS-Zeitschrift:** Einreichung, Review-Runden, Gutachterzuweisung und redaktionelle Entscheidungen bleiben in OJS maßgeblich.
- **OMP-Verlag:** Der entsprechende Workflow bleibt in OMP maßgeblich.
- **DNS-verifizierte Publikationsstelle ohne OJS/OMP:** Studio kann den hier beschriebenen Workflow übernehmen.

Bei einer verifizierten autoritativen OJS/OMP-Bindung verweigert der Server den Studio-nativen Weg. So können keine widersprüchlichen parallelen Workflow-Zustände entstehen.

## Gesamtablauf

```text
Autor/in erstellt das Manuskript in Studio
        ↓
Exakte festgeschriebene Revision einreichen
        ↓
Redaktioneller Eingang
        ↓
Redaktion weist Gutachter/in(nen) zu
        ↓
Begutachtung in Studio
        ↓
Gutachten + Empfehlung einreichen
        ↓
Redaktion schließt den eingereichten Review-Auftrag ab
        ↓
Redaktion entscheidet:
   ├── Überarbeitung anfordern
   ├── Ablehnen
   └── Annehmen
        ↓
Bei Überarbeitung:
Autor/in reicht eine neue festgeschriebene Revision ein
        ↓
Redaktion nimmt an oder startet eine neue Review-Runde
        ↓
Redaktionelle ACCEPT-Entscheidung
        ↓
Publizierbar
        ↓
Publikation
```

**Redaktionelle Annahme und Publikation sind getrennte Vorgänge.**

## Einreichung

In den **Erweiterten Metadaten** wird eine DNS-verifizierte Zeitschrift oder ein Verlag ausgewählt. Im **Redaktionellen Workflow** kann anschließend die exakte festgeschriebene Revision eingereicht werden.

Gespeichert werden unter anderem:

- Manuskript- und Revisions-ID;
- kanonischer SHA-256-Manuskriptzustands-Digest;
- SHA-256-Digest des Publikationsinhalts;
- kanonischer Manuskript-Snapshot;
- anonyme Review-Projektion;
- referenzierte binäre Assets mit SHA-256-Prüfung;
- Publikationsstellen-ID und verifizierte Domain;
- Workflow-Zustand und append-only Ereignisverlauf.

## Redaktioneller Eingang

Aktive `EDITOR`- oder `EDITOR_IN_CHIEF`-Konten der Publikationsstelle sehen deren Studio-native Einreichungen.

Die exakte eingereichte Revision kann auch auf einem anderen Gerät geöffnet werden, da Snapshot und überprüfte Assets serverseitig erhalten bleiben.

`DOMAIN_ADMIN` allein berechtigt weiterhin nicht zu redaktionellen Entscheidungen.

## Gutachterzuweisung und Datenschutz

Die Redaktion kann vorhandene Studio-Konten als wissenschaftliche Gutachter zuweisen. Studio-native wissenschaftliche Begutachtung ist standardmäßig double blind. Die einreichende Person kann nicht als wissenschaftliche Gutachterin bzw. wissenschaftlicher Gutachter derselben Einreichung zugewiesen werden.

Gutachter können den Auftrag annehmen oder ablehnen, die anonyme Manuskriptprojektion lesen, Feedback erfassen und eine Empfehlung einreichen.

Eine abgelehnte Einladung bleibt im Audit-Verlauf erhalten, wird jedoch nicht zur entscheidungstragenden Review-Evidenz. Die Redaktion kann in derselben Runde eine Ersatzbegutachtung zuweisen; die Runde wird entscheidungsfähig, sobald alle nicht abgelehnten wissenschaftlichen Review-Aufträge abgeschlossen sind.

Die Autorenansicht gibt die Studio-Identität der Gutachter nicht frei. `EDITOR_ONLY`-Kommentare bleiben ebenfalls verborgen.

## Überarbeitung durch Autorinnen und Autoren

Nach einer abgeschlossenen Review-Runde kann die Redaktion **Überarbeitung anfordern**.

Autorinnen und Autoren sehen den redaktionellen Hinweis, autorensichtbare Gutachterkommentare, die Empfehlung und den Workflow-Status. Nach der Bearbeitung wird eine **neue festgeschriebene Revision** eingereicht.

Wenn eine neue Review-Runde gestartet wurde, kann eine ältere abgeschlossene Runde nicht verwendet werden, um die noch offene aktuelle Runde zu umgehen.

## Redaktionelle Entscheidung

**Manuskript annehmen** ist eine eigenständige Aktion.

Die Annahme verwendet den unveränderlichen `EditorialDecision`-Nachweis und bindet ihn an exakte Revision, Zustands- und Publikations-Digest, abgeschlossene wissenschaftliche Review-Evidenz, Review-Runde, entscheidende Redaktion sowie den DNS-verifizierten Authority-Snapshot der Publikationsstelle.

Ändert sich das Manuskript nach der Annahme, kann die alte Entscheidung nicht für den geänderten Inhalt wiederverwendet werden.

## Publikation

Eine angenommene exakte Revision ist **publizierbar**. Die Publikationsoberfläche erzeugt die Studio-native Annahme nicht, sondern verwendet die bereits vorhandene Entscheidung.

Der Workflow wird nur dann auf `PUBLISHED` gesetzt, wenn die externe Publikations-URL unter der verifizierten Domain der Publikationsstelle oder einer ihrer Subdomains liegt. Eine Veröffentlichung auf einer anderen Website kann als externe Auslieferung weiterhin erfolgreich sein, lässt den verifizierten Submission-Zustand jedoch auf `ACCEPTED`.

Publisher-verifizierte Ausgabe kann das Siegel

```text
OMI
PEER REVIEW
VERIFIED
```

tragen. Es bezeichnet revisionsgebundene redaktionelle Evidenz, nicht DNS allein.

## Workflow-Zustände

| Zustand | Bedeutung |
| --- | --- |
| `SUBMITTED` | Exakte festgeschriebene Revision eingereicht |
| `IN_REVIEW` | Gutachter für die aktuelle Runde zugewiesen |
| `REVISION_REQUESTED` | Redaktion fordert Änderungen an |
| `REVISION_SUBMITTED` | Neue festgeschriebene Revision eingereicht |
| `ACCEPTED` | Unveränderliche Annahme für die exakte Revision |
| `REJECTED` | Einreichung abgelehnt |
| `PUBLISHED` | Angenommene Revision als publiziert erfasst |

## Verwandte Dokumentation

- [Verifizierte Publikationsstellen-Autorität](../publication-venue-authority)
- [Studio Deployment Modes](../studio-deployment-modes)
- [OJS Plugin](../ojs-plugin)
- [OMP Plugin](../omp-plugin)

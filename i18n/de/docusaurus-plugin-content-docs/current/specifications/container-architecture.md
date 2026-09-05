---
id: container-architecture
title: OMI-SPEC-330 – Container-Architektur
sidebar_label: Container-Architektur
sidebar_position: 21
description: Definiert das portable Paketlayout für Manuskripte von „OMI“ und die dazugehörigen Ressourcen.
---

# OMI-SPEC-330 – Container-Architektur

## Status

**Entwurf**

Version: 0.1.0

**Alte Kennung:** `OMI-SPEC-012`

**Basiert auf:** OMI-SPEC-320 (Dateiformat)

---

## Zweck

Die Container-Architektur definiert die portable Paketstruktur, die zum Austausch und zur Aufbewahrung eines Manuskripts im Format „OMI“ zusammen mit dessen Metadaten, Historie, Anmerkungen, Zitaten, Assets, Profilen und Erweiterungen verwendet wird.

Der Container ergänzt die Spezifikation „[File Format](./file-format.md)“: OMI-SPEC-320 definiert die logische Darstellung des Manuskripts, während diese Spezifikation festlegt, wie die zugehörigen Dateien zu einem Paket zusammengefasst werden.

---

## Empfohlene Anordnung der Behälter

Die folgende Verzeichnisstruktur entspricht der derzeit empfohlenen Anordnung. Sie gilt vorläufig, solange sich diese Spezifikation im Entwurfsstatus befindet.

```text
paper.omi
├── META-INF/
│   ├── manifest.json
│   ├── mimetype
│   ├── checksums.json
│   └── signatures.json
├── manuscript/
│   ├── document.json
│   ├── metadata.json
│   ├── history.json
│   └── review.json
├── annotations.json
├── citations.json
├── anchors.json
├── provenance.json
├── media/
│   ├── images/
│   ├── figures/
│   ├── assets/
│   └── datasets/
├── profiles/
└── plugins/
```

---

## Grundsätze für die Verpackung

Ein „OMI“-Container sollte folgende Eigenschaften aufweisen:

- selbstbeschreibend;
- plattformunabhängig;
- mit gängigen Archivierungstools einsehbar;
- zur Validierung geeignet;
- für die Langzeitlagerung geeignet;
- in der Lage, unbekannte Erweiterungen beizubehalten;
- unabhängig von einem bestimmten Redakteur oder Veröffentlichungssystem.

---

## `META-INF`

Das Verzeichnis „`META-INF`“ enthält Steuerungsinformationen auf Paketebene.

### `manifest.json`

Das Manifest enthält Angaben zu den Paketelementen, deren Medientypen, logischen Rollen, Versionen und optionalen Abhängigkeiten.

### `mimetype`

Die Datei „`mimetype`“ gibt den Medientyp des Pakets an. Der genaue Wert und die Anforderungen an die Platzierung werden vor Erreichen des Status „Review Candidate“ festgelegt.

### `checksums.json`

Mithilfe von Prüfsummen können Implementierungen versehentliche Änderungen oder Beschädigungen erkennen.

### `signatures.json`

Digitale Signaturen sind im Architekturentwurf optional. Ein künftiges Integritätsprofil wird Anforderungen an Signaturalgorithmen, Kanonisierung, Vertrauenswürdigkeit und Verifizierung festlegen.

---

## Bestandteile eines Manuskripts

Im Verzeichnis „`manuscript`“ werden die wichtigsten strukturierten Darstellungen gespeichert:

- `document.json` — Aufbau und Inhalt des Manuskripts;
- `metadata.json` — beschreibende, administrative und konservatorische Metadaten;
- `history.json` — Versions- und Änderungshistorie;
- `review.json` — Überprüfen Sie die im Paket enthaltenen Objekte.

Ein Veröffentlichungs- oder Archivierungsprofil kann festlegen, welche Komponenten zulässig oder erforderlich sind.

---

## Beziehungsdateien

Das Paket kann Beziehungssammlungen separat speichern:

- `annotations.json`;
- `citations.json`;
- `anchors.json`;
- `provenance.json`.

Die Trennung dieser Sammlungen ermöglicht eine unabhängige Verarbeitung, wobei stabile Identifikatoren zwischen ihnen erhalten bleiben.

---

## Medien und Ressourcen

Binärdateien und von externen Autoren erstellte Ressourcen gehören unter `media`.

Implementierungen müssen unsichere Pfade, Verwechslungen mit ausführbaren Inhalten, das Durchsuchen von Archiven und die unkontrollierte Auflösung von Remote-Ressourcen verhindern.

Jedes gepackte Element sollte durch einen Manifest-Eintrag und eine Prüfsumme referenziert werden.

---

## Profile und Plugins

Das Verzeichnis „`profiles`“ kann deklarierte Publikations-, Fachbereichs-, Validierungs- oder Langzeitarchivierungsprofile enthalten.

Das Verzeichnis „`plugins`“ enthält möglicherweise Erweiterungsdaten, die zur Interpretation von durch Plugins definierten Objekten erforderlich sind. Die Einbindung von Erweiterungsdaten bedeutet nicht, dass jeder Nutzer den Plugin-Code ausführen muss.

Ein konformer Konservierungsprozessor sollte Ressourcen mit unbekannter Erweiterung beibehalten, sofern dies ohne Risiko möglich ist.

---

## Komprimierung und Serialisierung

Das physische Archivformat, das Komprimierungsverfahren, die Reihenfolge der Einträge, die Kodierung der Dateinamen und die kanonische Byte-Darstellung werden festgelegt, bevor diese Spezifikation den Status „Implementation Candidate“ erreicht.

Ein Container darf nicht von einer betriebssystemspezifischen Pfadsyntax abhängig sein.

---

## Validierung

Die Container-Validierung sollte Folgendes umfassen:

- erforderliche Steuerdateien;
- offensichtliche Vollständigkeit;
- einzigartige und sichere Wege;
- Integrität der Prüfsumme;
- deklarierte Medientypen;
- Vorhandensein der referenzierten Datei;
- Konsistenz der Bezeichner;
- nicht unterstützte oder unbekannte Dateiendungen;
- Maximale Ressourcen- und Expansionsgrenzen.

---

## Sicherheitsaspekte

Implementierungen müssen Container als nicht vertrauenswürdige Eingaben behandeln.

Prozessoren sollten sich gegen Folgendes schützen:

- Pfaddurchlauf;
- Archivbomben;
- doppelte oder mehrdeutige Pfade;
- bösartiger aktiver Inhalt;
- unsichere symbolische Links;
- irreführende Medienvertreter;
- Signaturfälschung;
- unbegrenzte Dekomprimierung oder Analyse.

Das Öffnen eines Containers darf nicht automatisch zur Ausführung von darin enthaltenem Code führen.

---

## Änderungshistorie

- **0.1.0** — Migration von der vorläufigen URL `OMI-SPEC-012` zur kanonischen URL `OMI-SPEC-330`; Korrektur der fehlerhaften Struktur unter Markdown und Erweiterung der ursprünglichen Paketvoraussetzungen.

---

## Zusammenfassung

Die „OMI“-Containerarchitektur bündelt ein semantisches Manuskript und die dazugehörigen Ressourcen zu einer portablen, überprüfbaren und dauerhaft erhaltbaren Einheit.

Es definiert Struktur und Integrität auf Paketebene, während die Semantik des Manuskripts dem Dateiformat „OMI“ und den zugehörigen Modellspezifikationen überlassen bleibt.

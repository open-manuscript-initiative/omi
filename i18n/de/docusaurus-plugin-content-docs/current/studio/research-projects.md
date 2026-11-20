---
title: "Stammbäume, Netzwerke und portable Forschungsprojekte"
sidebar_label: "Stammbäume, Netzwerke und portable Forschungsprojekte"
description: "Stammbäume, Netzwerke und portable Forschungsprojekte — 2026-11-20"
---

# Stammbäume, Netzwerke und portable Forschungsprojekte

Aktivieren Sie **Stammbaum** und/oder **Beziehungsnetzwerke** in den Forschungsmodulen. Beide verwenden dasselbe ausgewählte Projekt mit Personen, Institutionen, Orten, Ereignissen, Beziehungen, Quellen und Notizen. Datensätze und Beziehungen bearbeiten, Generationen-/Netzwerkansichten verschieben und zoomen sowie SVG und Beziehungs-CSV exportieren.

## Import und Quellenerhalt

GEDCOM 5.5, 5.5.1 und 7 werden für Kerndatensätze unterstützt, mit Vorschau und getrenntem Hinzufügen/Ersetzen. Historische Datumsangaben, Adoptiv-/Pflegebeziehungen und strittige Aussagen bleiben unterscheidbar. Nicht unterstützte Medien und Sonderstrukturen verbleiben in der Originalquelle; GEDCOM-Export wird nicht angeboten. Unicode-Export aus dem Quellprogramm wird empfohlen.

Netzwerke unterstützen auch GEXF 1.2/1.3 und GraphML. Prüfen Sie Vorschau und Hinweise zu nicht unterstützten Feldern; vollständige Übernahme jeder Funktion anderer Netzwerkanwendungen wird nicht vorausgesetzt.

## Portable Projekte und Synchronisierung

Die portable Forschungsprojektdatei überträgt den bearbeitbaren Datensatz zwischen Geräten und verwendet die experimentelle **OMI-SPEC-360 Draft 0.1.0**-Hülle. Projektidentität und projektbezogene lokale Daten bleiben vom Manuskript getrennt. Älteres Graph-JSON lässt sich nach Vorschau importieren.

**Projekt-Cloud-Datei** verbindet eine Datei in einem synchronisierten Ordner oder Betriebssystem-Dateianbieter. Auf jedem Gerät dieselbe Datei öffnen. Bei geöffnetem Modul werden Änderungen verzögert geschrieben und externe Änderungen regelmäßig geprüft. Die Übertragung des Anbieters kann sich verzögern. Bei beidseitigen Änderungen pausiert automatisches Schreiben bis zur Auswahl der zu behaltenden Fassung. Gleichzeitiges Bearbeiten vermeiden: Der Adapter bietet keine atomare Anbieter-Revisionsprüfung. Dies ist getrennt von OAuth-Manuskriptsicherungen und einer gemeinsamen Serverdatenbank.

**Diagramm ins Manuskript einfügen** zeigt das genaue SVG und einen bearbeitbaren Quellenvorschlag. Quelle bestätigen oder eigene Forschungsdaten erklären, dann einfügen. Das Manuskript erhält einen Bildschnappschuss und geprüfte Quellen-/Provenienzangaben; die `.omi`-Datei enthält nicht den vollständigen bearbeitbaren Graphen oder private Rohnotizen. Graphänderungen ersetzen eingefügte Abbildungen nicht automatisch.

Siehe [Forschungsmodule](/docs/studio/research-modules), [Quellendokumentation](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/genealogy-networks.md) und [Forschungsprojektmodell](/docs/specifications/research-project-model).

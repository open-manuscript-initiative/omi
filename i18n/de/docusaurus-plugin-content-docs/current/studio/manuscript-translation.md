---
id: manuscript-translation
title: Manuskripte übersetzen und prüfen
sidebar_label: Manuskriptübersetzung
description: Sprachvarianten, Quellenabgleich, Übersetzungsprüfung und sicherer Export in Open Manuscript Studio.
---

# Manuskripte in Open Manuscript Studio übersetzen

Der Arbeitsbereich **Übersetzungen** verwaltet sprachliche Varianten eines Manuskripts, ohne die Bearbeitung des Originals zu sperren. Jede Variante bewahrt einen nachprüfbaren Bezug zu ihrem Ausgangstext, ihren Prüfentscheidungen und ihrer Historie.

## Arbeitsablauf

1. Öffnen Sie ein Manuskript und wählen Sie **Manuskript → Übersetzungen**.
2. Wählen Sie eine konkrete Zielsprache (z. B. `de`, `en-GB`, `hu`). Die Sprache der Benutzeroberfläche schränkt Manuskriptsprachen nicht ein.
3. Wählen Sie das gesamte Manuskript oder einen Abschnitt. Mehrere Varianten derselben Zielsprache sind möglich.
4. Bearbeiten Sie den Zieltext und die Übersetzerhinweise. Entscheiden Sie zwischen **gleichwertiger Übersetzung** und **bewusster Adaption**.
5. Markieren Sie eine Übersetzung erst nach eigener Prüfung ausdrücklich als **geprüft**. Maschinelle Ergebnisse beginnen immer als Entwurf.
6. Nach Änderungen am Ausgangstext erscheinen betroffene Zuordnungen als **veraltet** oder mit **fehlender Quelle**. **Quellzuordnung aktualisieren** erhält den Zieltext, akzeptiert den neuen Quellenstand und setzt betroffene Prüfungen zurück. Nicht mehr vorhandene Zuordnungen können ausdrücklich archiviert werden.
7. **Paralleler Text (HTML)** und **Zieltext (HTML)** setzen voraus, dass alle unterstützten, ausgewählten Texteinheiten aktuell, nicht leer, zugeordnet und überprüft sind.

Bei eingerichteter DeepL-Anbindung können Sie eine Vorschau prüfen und mit **Als Sprachvariante speichern** in dasselbe portable Manuskriptmodell übernehmen. Quelle, Umfang und Zielsprache werden beim Start der Anfrage erfasst; eine verspätete Antwort darf nicht in ein anderes aktives Dokument gelangen. Für externe Dienste sind die entsprechenden Konfigurationen und Berechtigungen erforderlich.

## Portable Daten und Änderungsverfolgung

Das experimentelle Studio-Profil `studio-translation-0.1` speichert die Varianten unter `urn:omi:studio:translation:1`. Portable OMI-Dateien, Prüfpunkte und Versionsrücknahmen bewahren Zuordnungen, Zieltexte, Sprachangaben, Beurteilungen, Prüfungen und vorhandene Herkunftsangaben.

Studio unterscheidet **aktuelle**, **veraltete** und **nicht mehr auffindbare** Quellenzuordnungen. Eine andere, sachlich unabhängige Manuskriptrevision macht nicht automatisch sämtliche Übersetzungen ungültig. Das Ausgangsmanuskript bleibt frei bearbeitbar.

## Grenzen

Unterstützt sind unter anderem Titel, Untertitel, Zusammenfassungen, Schlagwörter, Abschnittstitel, Fließtext, ausgewählte Annotationen und Beschriftungen bzw. Alternativtexte. Bibliografie, Zitatmarkierungen, Code, Formeln, Tabellenzellen und Diagrammdaten werden nicht automatisch als Übersetzungstext behandelt.

Die HTML-Ausgaben sind **ausgerichtete Textprüffassungen**, keine vollständigen wissenschaftlichen Zielmanuskripte oder eigenständig veröffentlichten Sprachausgaben. Übersetzungsbewusste DOCX/PDF/JATS-Publikationen, unabhängige Zielversionsgraphen und komplexe Viele-zu-viele-Zuordnungen bleiben offen. Für ältere Servervarianten werden fehlende Quellen- oder Prüfnachweise nicht erfunden.

## Spezifikationsstatus

[OMI-SPEC-170 — Translation Model](../specifications/translation-model.md) ist ein **Draft 0.1.0** der semantischen Spezifikation und nicht mit dem bereits implementierten **experimentellen Studio-Profil** gleichzusetzen. Formale Konformität wird nicht beansprucht.

Technische Details: [Studio-Implementierungsprofil](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/omi-spec-170-translation-model.md). Die normative Dokumentsprache ist Englisch.

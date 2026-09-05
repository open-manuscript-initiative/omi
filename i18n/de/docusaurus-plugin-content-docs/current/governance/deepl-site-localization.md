---
title: Ablauf der Website-Lokalisierung bei DeepL
sidebar_label: Lokalisierung der DeepL-Website
---

# Ablauf der Website-Lokalisierung bei DeepL

Die Website „OMI“ kann den DeepL-API nutzen, um fehlende Übersetzungen der Schnittstellen unter Docusaurus sowie der übersetzten Dokumentation zu vervollständigen, wobei die englische Quelle weiterhin maßgeblich bleibt.

## Sicherheit

Der Schlüssel „API“ wird niemals festgeschrieben. Legen Sie ihn nur in der aktuellen Shell fest:

```powershell
$env:DEEPL_API_KEY = "YOUR_KEY"
```

oder unter Linux/macOS:

```bash
export DEEPL_API_KEY="YOUR_KEY"
```

DeepL Free- und Pro-Endpunkte werden anhand des Schlüssels erkannt. Über `DEEPL_API_URL` kann der Endpunkt bei Bedarf überschrieben werden.

## Überprüfung ohne Verwendung der „API“-Quote

```bash
npm run i18n:deepl:site:check
```

Dieser Bericht gibt Auskunft darüber, welche konfigurierten Sprachumgebungen vorhanden sind, wie viele Dokumentationsdateien übersetzt sind und welche Quelldokumente noch fehlen. Dabei wird DeepL nicht aufgerufen und es werden keine Dateien verändert.

## Fehlende Sprachversionen und Dokumente übersetzen

```bash
npm run i18n:deepl:site
```

Für eine Locale, die noch nicht existiert, führt das Skript zunächst Docusaurus`write-translations` aus, übersetzt anschließend die generierten Ressourcen unter JSON und erstellt übersetzte Kopien der englischen Dokumentation unter dem Standard-i18n-Pfad Docusaurus.

Vorhandene Dokumentationsdateien bleiben erhalten. Ungarisch und Deutsch werden als manuell gepflegte Sprachversionen behandelt und niemals mit „`--force`“ neu generiert; es dürfen lediglich fehlende Dokumentationsdateien aus der englischen Quelle hinzugefügt werden.

## Ausgewählte Orte

```bash
npm run i18n:deepl:site -- --locales=fr,es,it
```

## Maschinell übersetzte Sprachversionen gezielt neu generieren

```bash
npm run i18n:deepl:site -- --locales=fr --force
```

Führen Sie diesen Vorgang erst nach einer Überprüfung durch, da dadurch die vorhandenen maschinell übersetzten „JSON“ und die Dokumentation für die ausgewählte Sprachversion ersetzt werden. Manuell gepflegte Inhalte in Ungarisch und Deutsch bleiben geschützt.

## Geschützter Inhalt

Der Übersetzer behält umschlossene Code-Blöcke bei und vermeidet die Übersetzung von Import-/Export-Anweisungen sowie von Zeilen mit StrukturMDXen. Inline-Code, URLs, Linkziele, Template-Platzhalter und Projektbegriffe wie „OMI“, „OJS“, „OMP“, „ORCID“, „ROR“, „DOI“, „DOCX“, „IDML“, „JATS“, „CSL“, „CSS“, „HTML“, „PDF“, „WebAuthn“ und „LaTeX“ sind vor der maschinellen Übersetzung geschützt.

## Überprüfung und Validierung

Die maschinelle Übersetzung ist ein erster Entwurf und unterliegt keiner redaktionellen Freigabe. Nach der Erstellung:

1. Begriffe und die Sprache des wissenschaftlichen Publizierens wiederholen;
2. Überprüfen Sie die Darstellung und die internen Links unter Markdown/MDX;
3. `npm run build` ausführen;
4. in jeder neu generierten Sprachversion mindestens die Startseite, die Studio-Seite und mehrere Dokumentationsseiten überprüfen;
5. Übersetzte Sprachdateien erst nach der Überprüfung einpflegen.

Die englische Dokumentation dient weiterhin als Grundlage für die Erstellung fehlender Dateien. Vorhandene übersetzte Dateien werden bei normalen Durchläufen nicht stillschweigend überschrieben.

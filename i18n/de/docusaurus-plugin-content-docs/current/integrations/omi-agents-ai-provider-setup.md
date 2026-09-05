---
title: OMI Einrichtung des KI-Anbieters für Agenten
sidebar_label: OMI Einrichtung des KI-Anbieters für Agenten
---

# OMI Einrichtung des KI-Anbieters für Agenten

OMI Agenten können einen externen KI-Anbieter für die sprachliche Überarbeitung, Unterstützung bei Metadaten, Zusammenfassungen und die Überprüfung von Quellenangaben nutzen. Das Studio speichert die geheimen Anbieterdaten (API) verschlüsselt auf dem Studio-API-Server und gibt diese nach dem Speichern nicht an den Client zurück.

Die aktuelle Studio-Benutzeroberfläche bietet Voreinstellungen für:

- OpenAI
- Mistral AI
- Groq
- OpenRouter
- Benutzerdefinierte OpenAI-kompatible HTTPS-Endpunkte

OpenAI verwendet seine nativen **Responses API**. Die anderen integrierten Anbieter und benutzerdefinierten OpenAI-kompatiblen Anbieter verwenden einen **Chat Completions**-Stil API.

## OpenAI-Einrichtung

### 1. Erstellen Sie einen OpenAI-API-Schlüssel

Öffnen Sie die Schlüsseleinstellungen auf der OpenAI-Plattform unter API und erstellen Sie einen dedizierten geheimen Projektschlüssel für „OMI-Agenten“. Es wird empfohlen, einen aussagekräftigen Namen wie „`OMI-Agent`“ zu wählen.

ChatGPT-Abonnements und die Abrechnung für OpenAI-APIen werden getrennt abgewickelt. Ein ChatGPT-Plus-Abonnement gewährt an sich kein Guthaben für „API“, daher muss die Abrechnung für „API“ separat für das OpenAI-Platform-Konto oder -Projekt konfiguriert werden, dem der Schlüssel gehört.

Verwenden Sie für einen dedizierten „OMI“-Schlüssel die Berechtigung **Eingeschränkt**, anstatt Zugriff auf alle Funktionen von API zu gewähren.

### 2. Beschränken Sie den Schlüssel auf die Antworten API

Für die aktuelle OpenAI-Integration gelten folgende Mindestanforderungen an die Modellleistung:

- **Antworten (`/v1/responses`) → Anfrage**

Die folgenden Berechtigungen werden von den „OMI“-Agenten nicht benötigt, wenn „OpenAI“ ausgewählt ist, und können auf **Keine** eingestellt bleiben:

- Chat-Vervollständigungen
- Text-zu-Sprache
- Echtzeit
- Einbettungen
- Bilder
- Moderationen
- Assistenten
- Themen
- Bewertungen
- Feinabstimmung
- Dateien
- Videos
- Vektor-Shops
- Eingabeaufforderungen
- Stapel
- Tunnel
- Datensätze

`List models` ist ebenfalls optional, da Studio den konfigurierten Modellnamen direkt übermittelt, anstatt den Modellkatalog abzufragen.

Nach dem Ändern der Berechtigungen eines eingeschränkten Schlüssels kann es einige Minuten dauern, bis der neue Geltungsbereich bei OpenAI wirksam wird. Während dieser Übertragungsphase kann Studio vorübergehend eine HTTP-401-Antwort zurückgeben, die Folgendes enthält:

```text
Missing scopes: api.responses.write
```

Wenn der Schlüssel korrekt konfiguriert wurde, warten Sie einige Minuten und führen Sie den Verbindungstest erneut durch, bevor Sie den Schlüssel austauschen.

### 3. Konfigurieren Sie den Anbieter in Studio

Im Studio geöffnet:

**Manuskript-Menü → Integrationen → „OMI“-Agenten → KI-Anbieter**

Dann:

1. Wählen Sie **OpenAI** als Anbieter aus.
2. Studio legt den Endpunkt automatisch auf `https://api.openai.com/v1/responses` fest.
3. Geben Sie den Modellnamen ein, der für die „OMI“-Agenten verwendet werden soll.
4. Fügen Sie den OpenAI-Schlüssel „API“ in das Feld **„API-Schlüssel“** ein.
5. Wählen Sie **„Speichern und AI-Anbieter testen“** aus.

Das Geheimnis wird an das Studio unter API gesendet und verschlüsselt gespeichert. Nach der Speicherung zeigt die Benutzeroberfläche lediglich an, dass ein Geheimnis vorhanden ist; der gespeicherte Schlüssel wird weder abgerufen noch angezeigt. Ein neuer Schlüssel muss nur dann eingegeben werden, wenn das bestehende Geheimnis ersetzt wird.

### 4. Überprüfen Sie die Verbindung

Nach einem erfolgreichen Live-Test ändert sich der Status des KI-Anbieters in **Bereit**. OMI Die Agenten überprüfen daraufhin automatisch erneut ihren eigenen Status.

Wenn der Anbieter konfiguriert, aber noch nicht bereit ist, zeigt Studio die vom Anbieter zurückgegebene „Safe“-Fehlermeldung an. Typische Beispiele hierfür sind unzureichende Berechtigungen für den Schlüssel „API“, ein nicht verfügbares Modell, Abrechnungs- oder Kontingentbeschränkungen oder eine ungültige Anbieter-Konfiguration.

Sobald der Status des Anbieters „Bereit“ lautet, speichern Sie die Konfiguration der „OMI“-Agenten und testen Sie diese. Der Status der „OMI“-Agenten sollte dann **Bereit** lauten.

## Weitere Anbieter-Voreinstellungen

Bei Mistral AI, Groq und OpenRouter füllt Studio automatisch den integrierten Endpunkt „Chat Completions“ des Anbieters aus. Der Benutzer muss in der Regel lediglich einen Modellnamen und den Schlüssel „API“ angeben.

Benutzerdefinierte Anbieter können verwendet werden, wenn sie einen HTTPS-Endpunkt ohne Anmeldeinformationen bereitstellen, der mit der Anforderungs- und Antwortstruktur von OpenAI Chat Completions kompatibel ist. Studio lässt keine Anbieter-URLs zu, die eingebettete Anmeldeinformationen enthalten oder auf Ziele in lokalen bzw. privaten Netzwerken für die Ausführung durch Agenten verweisen.

## Sicherheitsmodell

OMI Die Agenten basieren auf dem Prinzip der geringsten Berechtigungen und auf überprüfbaren Vorschlägen:

- Die AnmeldeAPIen des Anbieters werden auf dem Studio-API-Server im Ruhezustand verschlüsselt;
- Geheimnisse werden nach der Speicherung nicht an den Browser oder den nativen Client zurückgegeben;
- Externe Anbieter erhalten nur die Inhalte und den Umfang, die für den angeforderten Vorgang erforderlich sind;
- Für vertrauliche Überprüfungsinhalte ist eine ausdrückliche Genehmigung erforderlich, bevor sie an einen externen Dienst gesendet werden können;
- Direkte Schreibvorgänge in Manuskripten oder Metadaten erfordern erweiterte Berechtigungen und eine ausdrückliche Bestätigung durch den Benutzer;
- Der Standard-Workflow erzeugt einen Vorschlag, der noch einer Überprüfung durch den Benutzer unterliegt.

Verwenden Sie für Produktions- oder institutionelle Bereitstellungen separate Anbieterschlüssel für OMI, anstatt allgemeine Verwaltungsschlüssel von API wiederzuverwenden. Beschränken Sie jeden Schlüssel auf den kleinsten Satz an Anbieterfunktionen, der für die ausgewählte Integration erforderlich ist.

## Fehlerbehebung

### `Missing scopes: api.responses.write`

Der OpenAI-Schlüssel verfügt noch nicht über die Berechtigung zum Aufrufen der „Responses“ API, oder die Berechtigungsänderung wurde noch nicht übernommen. Legen Sie **Responses (`/v1/responses`) → Request** fest, speichern Sie die Berechtigungen des OpenAI-Schlüssels, warten Sie einige Minuten und führen Sie den Test erneut durch.

### HTTP 401

Überprüfen Sie den Schlüssel „API“, die Projektmitgliedschaft, die Organisations-/Projektrolle sowie die Gültigkeitsbereiche des eingeschränkten Schlüssels. Studio fügt die sichere Fehlermeldung des Anbieters in das Testergebnis ein, um die Diagnose von Berechtigungsproblemen zu erleichtern.

### HTTP 400

Der Anbieter hat die authentifizierte Anfrage akzeptiert, den Inhalt der Anfrage jedoch abgelehnt. Überprüfen Sie das ausgewählte Modell und die Anbieterkonfiguration. Verwenden Sie für OpenAI die OpenAI-Voreinstellung, damit Studio den Endpunkt „Responses“ API anstelle eines „Chat Completions“-Endpunkts verwendet.

### Konfiguriert, aber noch nicht einsatzbereit

Das bedeutet, dass die Einstellungen für „OMI-Agenten“ zwar vorhanden sind, der zugrunde liegende KI-Anbieter jedoch den Live-Verbindungstest nicht bestanden hat. Beheben Sie zunächst den Anbieterfehler und testen Sie anschließend die „OMI-Agenten“ erneut.

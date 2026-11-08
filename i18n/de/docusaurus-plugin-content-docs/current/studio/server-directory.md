---
title: Automatisches Serververzeichnis
description: Automatische Erkennung und tägliche Aktualisierung öffentlicher Open Manuscript Studio-Server.
---

Das [Studio-Serververzeichnis](/servers) zeigt öffentliche Installationen mit einem bestätigten Signal innerhalb der letzten 48 Stunden. Jede Karte enthält Adresse, Softwareversion und letztes Signal; die Seite nennt auch den Erstellungszeitpunkt der Liste.

Öffentliche Produktionsserver registrieren sich automatisch mit ihrer vorhandenen kanonischen HTTPS-Adresse. Eine separate Registrierung, ein DNS-TXT-Eintrag, ein Token oder ein geplanter Auftrag ist nicht erforderlich. Das zentrale Verzeichnis überprüft den öffentlichen Studio-Identitätsendpunkt mit einer frischen Challenge und übernimmt die Metadaten direkt vom jeweiligen Server. Der zentrale Server verwaltet seinen eigenen Eintrag unmittelbar, ohne Netzwerkanfragen an sich selbst.

Server melden sich nach dem Start und anschließend ungefähr alle 24 Stunden. Die Website lädt die Liste beim Öffnen und aktualisiert sie auch bei geöffneter Seite alle 24 Stunden automatisch. Dafür sind keine Website-Bearbeitung, kein neuer Build, kein Deployment und kein manuelles Neuladen erforderlich. Das 48-Stunden-Fenster erlaubt ein verspätetes tägliches Signal. Veraltete Einträge entfallen bei der nächsten Listenaktualisierung und erscheinen nach einem erfolgreichen Signal erneut.

Lokale, Entwicklungs- und HTTP-Installationen werden nicht automatisch aufgeführt. Private Produktionsinstallationen können die Teilnahme deaktivieren. Manuskripte, Kontodaten und Zugangsdaten werden nicht veröffentlicht. Ein aktuelles Signal bestätigt den Identitätsendpunkt, garantiert jedoch nicht in Echtzeit alle Funktionen.

Die Änderung muss zunächst auf der zentralen API, den teilnehmenden Studio-APIs und der Website bereitgestellt werden. Danach funktionieren Registrierung und tägliche Aktualisierung ohne zusätzliche Betreiberkonfiguration. Vorhandene manuelle Registrierungen bleiben kompatibel. Einzelheiten zur Bereitstellung und zum Opt-out stehen in der [Betreiberdokumentation](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/server/SERVER_DIRECTORY.md).

Beim Öffnen der Serverauswahl in Studio wird die aktuelle zentrale Liste immer direkt und ohne Browser-Cache abgefragt. Schließen und erneutes Öffnen löst eine neue Abfrage aus. Die Auswahl wartet nicht auf die tägliche Website-Aktualisierung. Ein Fallback bei einem Ausfall des Verzeichnisses wird ausdrücklich als ungeprüft gekennzeichnet.

---
id: omi-cloud-federated-infrastructure
title: OMI Cloud und verteilte Infrastruktur
sidebar_label: OMI Cloud und verteilte Infrastruktur
sidebar_position: 6
description: Langfristige Architektur für skalierbare „OMI“-Dienste, optionale kontogebundene Dokumentenspeicherung, institutionelle Datenhoheit und übertragbare, lokal gespeicherte wissenschaftliche Manuskripte.
keywords:
  - OMI Cloud
  - federated infrastructure
  - scholarly cloud
  - object storage
  - S3
  - data sovereignty
  - EU cloud
  - Open Manuscript Studio
---

# OMI Cloud und verteilte Infrastruktur

OMI kann derzeit auf herkömmlicher Serverinfrastruktur bereitgestellt werden, einschließlich des gehosteten Dienstes „Open Manuscript Studio“. Die langfristige Infrastruktur-Roadmap sieht vor, die Dienstebene horizontal skalierbar zu machen und dabei einen für OMI zentralen Grundsatz beizubehalten: **Ein Manuskript darf niemals an einen einzigen gehosteten Dienst gebunden sein**.

OMI Die Cloud wird daher als **optionale, verwaltete und föderierbare Dienstebene** verstanden, nicht als Ersatz für lokale „`.omi`“-Dokumente oder institutionell kontrollierte Speicher.

## Ziele

Die vorgeschlagene Cloud-Architektur sollte Folgendes ermöglichen:

- Dokumente und Arbeitsbereiche browser-, Desktop-, Android- und iOS/iPadOS-übergreifend mit Benutzerkonten verknüpfen;
- Manuskripte, Versionen, Assets, Berechtigungen und den Status der Zusammenarbeit geräteübergreifend synchronisieren;
- Arbeitsbereiche für Einzelpersonen, Forschungsgruppen, Verlage und Institutionen unterstützen;
- rechenintensive Import-, Konvertierungs-, Validierungs- und Exportvorgänge unabhängig vom interaktiven „API“ skalieren;
- die Datenverbleib, die Aufbewahrungsfristen und die Auswahl der Speicheranbieter klar festlegen;
- den Institutionen zu gestatten, bei Bedarf ihre eigenen kompatiblen Speicher- oder Bereitstellungslösungen zu betreiben;
- Stets die Portabilität lokaler Dateien gewährleisten und einen unkomplizierten Export ermöglichen.

## Vorgeschlagene Servicetopologie

Bei einer Bereitstellung im Produktionsmaßstab lassen sich die interaktive Bereitstellung, die dauerhafte Speicherung und die Hintergrundverarbeitung voneinander trennen:

```text
Clients: Web · Windows · Linux · macOS · Android · iOS/iPadOS
                              │
                         CDN / ingress
                              │
                         Studio API
          ┌───────────────────┼───────────────────┐
          │                   │                   │
     identity/session    manuscript/workspace   integrations
          │                   │                   │
          └──────────── PostgreSQL ──────────────┘
                              │
                    S3-compatible object store
                              │
                    queue / background workers
                              │
          PDF · DOCX · export · validation · indexing
```

Der konkrete Cloud-Anbieter ist bewusst nicht Bestandteil der „OMI“-Spezifikation. Die Architektur sollte sich eher auf portable Schnittstellen und Bereitstellungsmuster stützen als auf proprietäre Speichersemantiken.

## Kontogebundene Dokumentenspeicherung

Im verwalteten „OMI“-Cloud-Modus kann ein Benutzerkonto Eigentümer eines oder mehrerer Arbeitsbereiche sein oder an diesen beteiligt sein. Ein Arbeitsbereich kann Manuskripte, Assets, Versionshistorie, Exportprodukte und Metadaten zur Zugriffskontrolle enthalten.

Eine sinnvolle logische Hierarchie sieht wie folgt aus:

```text
OMI Account
  └─ Workspace
      └─ Manuscript
          ├─ Versions
          ├─ Assets
          ├─ Review/collaboration state
          └─ Exports
```

Strukturierte Metadaten, Berechtigungen, der Status der Zusammenarbeit und transaktionale Versionsverweise sollten in einer Datenbank wie PostgreSQL gespeichert werden. Größere unveränderliche oder binäre Objekte – Quelldateien DOCX/PDF, Bilder, gepackte Exporte und andere Assets – lassen sich besser in einem S3-kompatiblen Objektspeicher ablegen.

## Hintergrundverarbeitung und Elastizität

Lang andauernde Dokumentenverarbeitungsprozesse sollten keine interaktiven HTTP-Anfragen offen halten. Umfangreiche Rekonstruktionen von „PDF“, Konvertierungen von „DOCX“, das Rendern von Publikationen, Validierungen, Indizierungen sowie zukünftige rechenintensive Integrationen können als Jobs dargestellt werden.

Zum Beispiel:

```text
Upload → Queued → Processing → Structural reconstruction → Validation → Ready
```

Die Systemlast lässt sich je nach Warteschlangenlänge horizontal skalieren. Dadurch werden ressourcenintensive Importe vom normalen Bearbeitungsverkehr getrennt, wodurch sich der Dienst für den Einsatz in größeren Institutionen eignet, ohne dass das Manuskriptmodell neu gestaltet werden muss.

## Datensouveränität und Föderation

OMI Die Cloud sollte so konzipiert sein, dass Managed Hosting zwar praktisch, aber niemals zwingend erforderlich ist. Drei Speichermodi sollten weiterhin im Vordergrund stehen:

1. **local-first** – portable „`.omi`“-Dokumente verbleiben auf dem eigenen Gerät des Benutzers oder im von ihm gewählten Dateisystem;
2. **Verwaltetes „OMI-Cloud“** — die kontogebundene Speicherung und Synchronisierung werden von einem „OMI“-Dienstanbieter bereitgestellt;
3. **Institutioneller/föderierter Speicher** – Eine Institution kann ihren eigenen kompatiblen Objektspeicher, ihre eigene Private Cloud oder eigene Infrastruktur nutzen und dabei weiterhin die Clients und Austauschformate von „OMI“ verwenden.

Externe Anbieter wie Nextcloud/WebDAV, OneDrive, Google Drive oder andere vom Nutzer ausgewählte Dienste können weiterhin als zusätzliche Integrationsziele dienen. Die Wahl des Anbieters darf das wissenschaftliche Objektmodell nicht neu definieren.

Für den Einsatz in europäischen Institutionen sieht die Roadmap vorrangig Optionen zur Datenspeicherung innerhalb der EU/des EWR, explizite Aufbewahrungsregeln, Verschlüsselung sowohl bei der Übertragung als auch im Ruhezustand, Nachvollziehbarkeit, Exportierbarkeit, die Löschung von Konten sowie institutionsspezifische Governance vor. Dabei handelt es sich um Anforderungen an die Umsetzung und nicht um Änderungen an der Semantik der Manuskripte auf OMI.

## Vermeidung von Anbieterabhängigkeit

Ein Cloud-Dienst sollte die Portabilitätsgarantien, die der „OMI“ zugrunde lagen, nicht beeinträchtigen. Die Architektur begünstigt daher:

- S3-kompatible statt herstellerspezifische Objektschnittstellen, sofern dies praktikabel ist;
- Standardmäßiger, PostgreSQL-kompatibler transaktionaler Speicher;
- dokumentierte Export- und Sicherungsformate;
- portable `.omi`-Pakete als dauerhafte Fluchtmöglichkeit;
- explizite Abstraktionen von Speicheranbietern im Studio-Backend;
- Trennung zwischen der Identität des Manuskripts und dem Standort der Infrastruktur.

Das Ziel besteht darin, den Betrieb von „OMI“ in großem Maßstab zu vereinfachen, ohne dabei ein neues proprietäres Manuskript-Silo zu schaffen.

## Arbeitsbereiche in Institutionen

Institutionelle Implementierungen können auf der bestehenden Trennung zwischen persönlichen Konten, der Identität als wissenschaftlicher Autor, der Zugehörigkeit zu einer Institution und der zentralen Verwaltung aufbauen. Cloud-Arbeitsbereiche sollten denselben Grundsatz befolgen: Die Verwaltungsbefugnis über eine Institution oder einen Dienst darf nicht automatisch Zugriff auf vertrauliche Manuskripte, Peer-Review-Material oder redaktionelle Inhalte gewähren.

Institutionelle Arbeitsbereiche können später Kontingente, Aufbewahrungsrichtlinien, delegierten Speicherplatz, Gruppenberechtigungen, Veröffentlichungsworkflows und Arbeitsbereiche für Forschungsprojekte unterstützen, ohne dass das zugrunde liegende Dokumentformat geändert werden muss.

## Migrationspfad von der aktuellen Bereitstellung

Die Migration sollte schrittweise erfolgen und nicht als einschneidende Neuprogrammierung. Neue Backend-Funktionen sollten auf der Grundlage austauschbarer Speicher- und Job-Abstraktionen entwickelt werden, damit die aktuelle Bereitstellung weiterlaufen kann, während cloudfähige Komponenten eingeführt werden.

Eine sinnvolle Vorgehensweise ist:

1. eine Speicheranbieter-Abstraktion für die derzeitige serverseitige Persistenz definieren;
2. S3-kompatiblen Objektspeicher für große Dateien und Exporte hinzufügen;
3. aufwändige Import-/Export-Vorgänge in eine dauerhafte Warteschlange und einen Worker-Prozess verlagern;
4. Einführung einer arbeitsbereichsgebundenen Speicherung von Cloud-Dokumenten und Versionsverweisen;
5. Konfiguration und Verbund von institutionellen Speicheranbietern hinzufügen;
6. Stellen Sie redundante/zustandslose „API“-Instanzen hinter einem verwalteten Ingress bereit, wenn die Betriebsauslastung dies erfordert.

## Finanzierung und Bedeutung für die Nachhaltigkeit

Eine skalierbare, föderierte Infrastruktur ist ebenfalls eine strategische Ausrichtung im Bereich der Forschungsinfrastruktur. Sie kann institutionenübergreifende Pilotprojekte, Universitätsverlage, wissenschaftliche Gesellschaften und Open-Science-Programme unterstützen und gleichzeitig die Kernspezifikationen und die Referenzimplementierung von „OMI“ offen halten.

Eine nachhaltige Finanzierung durch die EU oder institutionelle Träger würde es ermöglichen, vom derzeitigen kompakten, bei Drittanbietern gehosteten Betrieb zu einem ausfallsicheren Multi-Tenant-Dienst mit Hosting innerhalb der EU/des EWR, Betriebssicherheit, Überwachung, Datensicherung, Notfallwiederherstellung und institutioneller Verbundstruktur überzugehen. Die Roadmap geht **nicht** davon aus, dass eine solche Finanzierung bereits gesichert ist.

## Status

Auf dieser Seite wird eine **geplante Architektur und eine von der Finanzierung abhängige Ausrichtung der Infrastruktur** beschrieben; es handelt sich dabei nicht um die Behauptung, dass der vollständige „OMI“-Cloud-Dienst bereits bereitgestellt ist. Vorhandene lokale Speicher, native Datei-Workflows, profilbezogene Cloud-Verbindungen, die Kontoinfrastruktur sowie die Studio-API bilden die Grundlage für die Umsetzung dieses zukünftigen Schritts.
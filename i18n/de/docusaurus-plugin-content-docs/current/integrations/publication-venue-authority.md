---
title: Verifizierte Publikationsstellen-Autorität
sidebar_label: Verifizierte Publikationsstelle
description: Verifizierung einer Zeitschriften- oder Verlagsdomain in Open Manuscript Studio per DNS TXT mit mehreren Domain-Administratoren und redaktionellen Rollen.
---

# Verifizierte Publikationsstellen-Autorität

Open Manuscript Studio kann die organisatorische Autorität einer Zeitschrift oder eines Verlags auch dann verifizieren, wenn die Publikationsstelle weder OJS noch OMP verwendet.

Die Funktion richtet sich an Zeitschriften und Verlage, die den Studio-eigenen Peer-Review- und Redaktionsworkflow verwenden und zugleich eine überprüfbare Bindung zwischen einer redaktionellen Entscheidung und der Publikationsstelle herstellen möchten.

> **Preview-Status.** Diese Funktion gehört zur aktuellen Studio-Entwicklungslinie und unterliegt vor einem Stable-Status noch dem Release-Hardening.

## Was die DNS-Verifizierung beweist

Die DNS-TXT-Verifizierung beweist, dass ein angemeldetes Studio-Konto eine frisch von Studio erzeugte Challenge unter der Domain der Publikationsstelle veröffentlichen konnte.

Sie beweist **nicht**, dass:

- ein Artikel peer-reviewed wurde;
- eine bestimmte Person Redakteur/in ist;
- der Inhalt eines Artikels korrekt ist;
- der TXT-Wert geheim ist.

DNS-TXT-Einträge sind öffentlich. Jeder kann sie abfragen. Die Sicherheit entsteht dadurch, dass Studio eine frische Challenge serverseitig an genau ein authentifiziertes Konto bindet und ihre Verwendung nur einmal und vor Ablauf erlaubt.

Das bloße Lesen eines vorhandenen TXT-Eintrags verleiht keinem anderen Studio-Konto Autorität.

## Verifizierungsablauf

Öffnen Sie in Studio die **Erweiterten Metadaten** des Manuskripts und wählen Sie das Feld für Zeitschrift oder Verlag. Beim Hinzufügen einer neuen Publikationsstelle wählen Sie:

**Verifizierungsmethode → DNS-TXT-Domainverifizierung**

Beispiel:

```text
Name: Example Historical Review
Website: https://journal.example.org
Domain: journal.example.org
ISSN: 1234-5678
```

Studio erzeugt anschließend eine einmalige DNS-Challenge:

```text
TXT-Name:
_omi-publication.journal.example.org

TXT-Wert:
omi-publication-verification=<einmaliges-token>
```

Die Challenge ist nur begrenzte Zeit gültig und kann ausschließlich von dem angemeldeten Studio-Konto verwendet werden, das sie angefordert hat.

## TXT-Eintrag anlegen

Legen Sie in der DNS-Zone der Zeitschriften- oder Verlagsdomain einen TXT-Eintrag an.

Wenn der DNS-Anbieter nur den Hostnamen erwartet:

```text
Typ: TXT
Host / Name: _omi-publication
Wert: omi-publication-verification=<einmaliges-token>
```

Wenn ein vollständiger Domainname verlangt wird:

```text
_omi-publication.journal.example.org
```

### Beispiel in Plesk

Üblicher Pfad:

**Websites & Domains → DNS Settings → Add Record**

Dann:

```text
Record type: TXT
Domain name / Host: _omi-publication
Value: omi-publication-verification=<einmaliges-token>
```

Plesk ergänzt normalerweise automatisch die Zonendomain.

Eine kurze TTL, zum Beispiel 300 Sekunden, kann die erste Verifizierung beschleunigen; der Standardwert des Providers ist ebenfalls zulässig.

## In Studio verifizieren

Nach der Veröffentlichung des TXT-Eintrags kehren Sie zu Studio zurück und wählen **DNS prüfen**.

Studio löst den TXT-Eintrag serverseitig auf. Wenn die aktuelle Challenge vorhanden und gültig ist, wird die Publikationsstelle als DNS-verifiziert markiert und das anfordernde Konto erhält:

```text
DOMAIN_ADMIN
```

Der TXT-Wert wird nicht als Passwort oder Redaktionsnachweis wiederverwendet.

## Mehrere Domain-Administratoren

Eine verifizierte Publikationsstelle kann mehrere Domain-Administratoren haben.

Der erste `DOMAIN_ADMIN` entsteht durch die erfolgreiche DNS-Verifizierung. Danach kann jeder aktive Domain-Administrator vorhandenen Studio-Konten per E-Mail weitere Rollen zuweisen:

- `DOMAIN_ADMIN`
- `EDITOR`
- `EDITOR_IN_CHIEF`

Für zusätzliche Domain-Administratoren ist **kein weiterer DNS-TXT-Eintrag** erforderlich. Ihre Autorität wird innerhalb der bereits verifizierten Publikationsstelle ausdrücklich delegiert.

Alle aktiven Domain-Administratoren besitzen dieselbe Verwaltungsautorität für die Publikationsstelle.

Studio verhindert die Entfernung des letzten aktiven `DOMAIN_ADMIN`. Soll der einzige Administrator ersetzt werden, muss zuerst ein weiterer Domain-Administrator autorisiert werden.

## Rollen

### DOMAIN_ADMIN

Ein Domain-Administrator kann:

- die Autorität der Publikationsstelle verwalten;
- weitere Domain-Administratoren autorisieren;
- Redakteur/innen und Chefredakteur/innen autorisieren;
- Mitgliedschaften widerrufen, außer der des letzten aktiven Domain-Administrators.

Die Rolle `DOMAIN_ADMIN` allein berechtigt **nicht** zu einer wissenschaftlichen redaktionellen Entscheidung.

### EDITOR

Ein/e Redakteur/in kann eine publisher-verified Annahmeentscheidung erfassen, wenn dasselbe Studio-Konto zugleich die erforderliche Editor-Rolle im Review-Workspace des Manuskripts besitzt und die Studio-nativen Review-Anforderungen erfüllt sind.

### EDITOR_IN_CHIEF

Ein/e Chefredakteur/in besitzt dieselbe publisher-verified Entscheidungsautorität, wobei die besondere Rolle im Auditnachweis erhalten bleibt.

Dasselbe Studio-Konto kann Rollen bei mehreren unabhängigen Zeitschriften oder Verlagen besitzen. Die Berechtigung ist immer auf eine konkrete Publikationsstelle begrenzt; eine `DOMAIN_ADMIN`-Rolle bei einer Zeitschrift verleiht keine Autorität über eine andere.

Ein Studio-Konto kann für dieselbe Publikationsstelle mehrere Rollen besitzen, zum Beispiel:

```text
DOMAIN_ADMIN
EDITOR_IN_CHIEF
```

## Beziehung zum Peer Review

Die Vertrauenskette ist bewusst getrennt:

```text
DNS-TXT-Challenge
        ↓
Verifizierte Publikationsstelle
        ↓
DOMAIN_ADMIN-Delegation
        ↓
EDITOR / EDITOR_IN_CHIEF
        ↓
Abgeschlossene Studio-native wissenschaftliche Begutachtung
        ↓
Exakte Revision + Manuskript-State-Digest + Publication-Content-Digest
        ↓
Verifizierte redaktionelle Entscheidung
        ↓
OMI · PEER REVIEW · VERIFIED
```

Das sichtbare Peer-Review-Siegel bedeutet daher nicht, dass DNS selbst die Begutachtung beweist.

Bei einer publisher-verified Entscheidung speichert Studio zusätzlich einen unveränderlichen Authority-Snapshot mit Publikationsstelle, verifizierter Domain, DNS-Verifizierungs-ID/-Zeitpunkt und der bei der Entscheidung aktiven Redaktionsrolle.

Spätere Änderungen an DNS oder Mitgliedschaften schreiben historische Entscheidungs-Provenance nicht um.

## Erneute Domainprüfung

Studio kann die öffentliche DNS-Aussage vor einer neuen publisher-verified Entscheidung regelmäßig erneut prüfen.

Diese Prüfung bedeutet:

> Die verifizierte Domain bestätigt weiterhin öffentlich die Studio-Verknüpfung der Publikationsstelle.

Sie bedeutet nicht:

> Das Konto besitzt ein in DNS gespeichertes Geheimnis.

DNS bleibt ein öffentliches Signal organisatorischer Kontrolle.

## OJS und OMP

Wenn eine Publikationsstelle bereits die Studio-OJS- oder OMP-Integration nutzt, ist der DNS-Weg für die normale PKP-gebundene Workflow-Autorität nicht erforderlich.

Der DNS-Weg ist vor allem für Zeitschriften und Verlage gedacht, die OJS/OMP nicht verwenden, aber in Studio eine überprüfbare Publikationsstellen-Autorität benötigen.

## Sicherheitseigenschaften

Die Implementierung ist so ausgelegt, dass:

- die DNS-Challenge an das authentifizierte anfordernde Konto gebunden ist;
- sie nur im Zustand `PENDING` verwendet werden kann;
- sie nur einmal verwendet werden kann;
- ein anderes Konto eine öffentlich sichtbare Challenge nicht übernehmen kann;
- eine bereits verifizierte Publikationsstelle nicht unbemerkt an eine andere Domain gebunden wird;
- zusätzliche Administratoren innerhalb der verifizierten Publikationsstelle delegiert werden, statt unabhängige DNS-Claims anzulegen;
- der letzte aktive Domain-Administrator nicht entfernt werden kann;
- Publikationsstellen-Verwaltung und Manuskript-Redaktionsrechte getrennte Autorisierungsebenen bleiben;
- öffentliche Assurance-Metadaten keine Reviewer-Identitäten oder vertraulichen Gutachten enthalten.

## Verwandte Dokumentation

- [Studio Deployment Modes](../studio-deployment-modes)
- [Integration Architecture](../architecture)
- [OJS Plugin](../ojs-plugin)
- [OMP Plugin](../omp-plugin)
- [Cross-platform Studio Architecture](../../foundations/cross-platform-studio)

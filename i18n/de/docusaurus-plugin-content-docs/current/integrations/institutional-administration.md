---
id: institutional-administration
title: Institutionelle und zentrale Verwaltung
sidebar_label: Institutionelle Verwaltung
keywords:
  - institutional administration
  - central administration
  - institution admin API
  - OIDC
  - SAML
  - roles
  - API credentials
  - audit log
---

# Institutionelle und zentrale Verwaltung

Open Manuscript Studio trennt nun die persönliche wissenschaftliche Identität, die Zugehörigkeit zu einer Einrichtung, die Verwaltung der Einrichtung und die zentrale Verwaltung von OMI in unterschiedliche Berechtigungsebenen.

Diese Trennung ist beabsichtigt: **Verwaltungsbefugnisse bedeuten nicht, dass man Zugriff auf Manuskripte, Begutachtungen, redaktionelle Entscheidungen oder andere wissenschaftliche Inhalte hat**. Der Zugriff auf Inhalte unterliegt weiterhin den Berechtigungsmodellen für Manuskripte/Arbeitsbereiche und den Veröffentlichungs-Workflow.

## Genehmigungspläne

### Persönliches Studio-Konto

Ein Studio-Konto ist die dauerhafte Identität, die browser-, desktop- und mobilgeräteübergreifend genutzt wird. Es kann Passwort- und föderierte Anmeldemethoden, persönliche Profilinformationen sowie eine oder mehrere institutionelle Mitgliedschaften umfassen.

### Institutsmitgliedschaft

Jede Mitgliedschaft verknüpft ein Studio-Konto mit einer Einrichtung und ist mit einer von drei Rollen verbunden:

- `MEMBER` — übliche institutionelle Zugehörigkeit;
- `ADMIN` — Institutionsverwalter;
- `OWNER` — Inhaber der Einrichtung mit Befugnis zur Änderung von Rollen auf Inhaberebene.

Institutionsdaten wie der Name der Organisation und die Kennung „ROR“ werden weitergegeben. Abteilung, Position, institutionelle E-Mail-Adresse, verknüpfte institutionelle Identität und der Standardstatus der Zugehörigkeit gehören zur Mitgliedschaft und nicht zum dauerhaften persönlichen Konto.

Ein Benutzer kann mehreren Einrichtungen angehören, wobei eine Zugehörigkeit als Standardzugehörigkeit ausgewählt werden kann.

### OMI Zentralverwaltung

Die zentrale Verwaltung wird getrennt von der Zugehörigkeit zu einer Einrichtung gespeichert. Ein zentraler Administrator verfügt entweder über:

- `ADMIN` — institutionsübergreifende operative Verwaltung;
- `OWNER` — Verwaltung durch den Zentraladministrator zusätzlich zur normalen zentralen Verwaltung.

Eine Einrichtung `OWNER` ist **nicht** automatisch ein zentraler Verwalter, und ein zentraler Verwalter ist nicht automatisch Mitglied oder Eigentümer einer Einrichtung.

## Anmeldung für Institutionsadministratoren

Bei institutionellen Bereitstellungen kann ein spezieller Anmeldemodus für Institutionsadministratoren zur Verfügung stehen, wobei dasselbe Studio-Konto verwendet wird.

Die Anmeldung als Passwortadministrator wird nur akzeptiert, wenn das authentifizierte Konto über eine aktive Mitgliedschaft bei `ADMIN` oder `OWNER` verfügt.

Für die Anmeldung als Verbundadministrator können konfigurierte OpenID Connect-Anbieter von Google, Microsoft oder der Einrichtung verwendet werden. Nach Abschluss der externen Anmeldung überprüft Studio den Kontext des Einrichtungsadministrators auf dem Server, bevor die Administratorsitzung akzeptiert wird.

ORCID ist bewusst keine Identifikationsnummer für institutionelle Administratoren. „ORCID“ bleibt ein persönlicher wissenschaftlicher Identifikator und ein Mechanismus zur Autorenerkennung.

## Bootstrap für Institutionsadministratoren

Bei verwalteten institutionellen Bereitstellungen kann eine anfängliche Whitelist für Institutionen und Administratoren definiert werden:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

Die E-Mail-Whitelist allein begründet noch kein Eigentumsrecht. Für die automatische Erst`OWNER`-Einrichtung muss das entsprechende Studio-Konto über eine verknüpfte OIDC- oder SAML-Identität verfügen. Konten, die ausschließlich mit einem Passwort geschützt sind, werden niemals automatisch hochgestuft.

## Bootstrap des zentralen Administrators

Der erste zentrale Administrator kann mit folgendem Befehl initialisiert werden:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

Wie beim Institution-Bootstrap muss das in der Whitelist aufgeführte Konto bereits über eine verknüpfte OIDC- oder SAML-Identität verfügen, bevor es als erster zentraler „`OWNER`“ fungieren kann.

Dadurch wird verhindert, dass ein Konto, das nur über ein Passwort verfügt, oder eine übereinstimmende E-Mail-Adresse stillschweigend institutionenübergreifende Administratorrechte erhält.

## Funktionen zur zentralen Verwaltung

Die zentrale VerwaltungsAPI für Benutzer ist unter `/api/central-admin` verfügbar und unterstützt:

- Kontext des zentralen Administrators;
- Liste der Einrichtungen, Erstellung, Aktualisierung, Aktivierung und Deaktivierung;
- Verwaltung durch den zentralen Administrator (nur `OWNER`);
- Ernennung und Abberufung des Leiters einer Einrichtung;
- Erstellung und Widerruf von Zugangsdaten für die institutionelle Admin-API;
- Abruf des Audit-Protokolls der Verwaltung.

Die Anwendung macht diese Steuerelemente in den Kontoeinstellungen nur für Benutzer mit einer Berechtigung für die zentrale Verwaltung zugänglich.

Die Implementierung schützt die letzte zentrale `OWNER` und die letzte Institution `OWNER` vor versehentlichem Löschen oder Herabstufen.

## API der Verwaltungsstelle der Einrichtung

Institutionen können zudem Maschinen-Anmeldedaten für die Automatisierung erhalten. Diese Anmeldedaten sind an genau eine Institution gebunden und verwenden explizite Gültigkeitsbereiche.

Raw-Token haben folgende Form:

```text
omi_ia_...
```

Das vollständige Token wird nur einmal bei seiner Erstellung zurückgegeben. Studio speichert lediglich einen Hash des „SHA-256“ zusammen mit einem nicht geheimen Präfix zur Identifizierung, dem Ablauf-/Widerrufsstatus und Metadaten zur Nutzung.

Der anfängliche Umfang umfasst:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

Die ersten Endpunkte der v1-Maschinen lauten:

```text
GET   /api/institution-admin/v1/context
GET   /api/institution-admin/v1/members
PATCH /api/institution-admin/v1/members/:membershipId/role
```

Mit Maschinen-Anmeldeinformationen können keine Rollen in „`OWNER`“ zugewiesen, entfernt, erhöht oder herabgestuft werden. Für Änderungen der Eigentumsverhältnisse ist ein menschlicher Institutionseigentümer oder Zentraladministrator erforderlich.

Die Bereiche „`integrations:read`“ und „`integrations:write`“ legen die Berechtigungsgrenzen für die Verwaltung der Integration auf Institutionsebene fest. Einzelne Integrationsendpunkte können hinzugefügt werden, ohne dass die Zugangsdaten über die eigene Institution hinaus erweitert werden müssen.

## Prüfungsmodell

Administrationsaktionen werden in Audit-Ereignissen erfasst, die ausschließlich im Anhang gespeichert werden. Je nach Aktion kann ein Audit-Eintrag Folgendes enthalten:

- API-Zugangsdaten eines menschlichen Administrators oder einer Institution;
- Einrichtung;
- Aktionsname;
- Zieltyp und Zielbezeichner;
- Metadaten zu nicht geheimen Aktionen;
- IP-Adresse des Clients, sofern verfügbar;
- Erstellungszeit.

Passwörter, RohAPI-Token, OAuth-Geheimnisse, Manuskripttexte und Anbietersecrets dürfen nicht in das Administrations-Auditprotokoll geschrieben werden.

## Sicherheitsgrenzen

Die Verwaltungsarchitektur folgt diesen Regeln:

1. Institutionsrollen und zentrale Rollen werden separat gespeichert.
2. Keine Administratorrolle gewährt an sich Zugriff auf Manuskripte bzw. redaktionelle Inhalte.
3. Föderierte Identitäten werden anhand des Ausstellers und des Subjekts identifiziert und nicht anhand veränderbarer Anzeigenamen.
4. Für den anfänglichen privilegierten Bootstrap-Vorgang ist zusätzlich zu einer E-Mail-Whitelist eine verknüpfte OIDC/SAML-Identität erforderlich.
5. Institutions-API-Token sind an eine Institution und einen Geltungsbereich gebunden, verfallen bzw. können widerrufen werden und werden ausschließlich als Hashes gespeichert.
6. Der MaschinenAPIen kann die Eigentümerrollen nicht ändern.
7. Zentrale Schutzmaßnahmen und Schutzmaßnahmen für den letzten Eigentümer der Institution verhindern eine versehentliche administrative Sperrung.
8. Verwaltungsvorgänge lassen sich nachprüfen, ohne dass vertrauliche Informationen oder wissenschaftliche Inhalte gespeichert werden müssen.

## Zusammenhang mit den Bereitstellungsmodi

Derselbe Studio-Client-Code kann sowohl in privaten als auch in institutionellen Bereitstellungen eingesetzt werden. Der Bereitstellungsmodus legt fest, dass vom Server verwaltete Anmeldedaten für externe Dienste sowie die institutionelle Verwaltungsoberfläche verwendet werden; er hat jedoch keinen Einfluss auf das „OMI“-Manuskriptmodell oder die Dokumentportabilität.

Informationen zur Weiterleitung von Anmeldeinformationen und zur Konfiguration auf Bereitstellungsebene finden Sie unter [Studio deployment modes](./studio-deployment-modes.md), und unter [Studio implementation status](../governance/studio-implementation-status.md) finden Sie den aktuellen Überblick über den Reifegrad der Referenzimplementierung.

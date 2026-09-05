# Bereitstellungsmodi für Studios

Open Manuscript Studio nutzt eine einzige Codebasis und eine Familie von Web-, Desktop- und Mobil-Clients. Ein serverseitiges Bereitstellungsprofil legt fest, wer die Anmeldedaten für externe Dienste verwaltet und ob die Verwaltungsoberflächen der Einrichtung aktiviert sind.

## Persönlicher Modus

```dotenv
DEPLOYMENT_MODE=personal
```

Der „Personal“-Modus ist für unabhängige Autoren und Einzelnutzer gedacht. Studio fragt niemals nach einem „ORCID“-Passwort. Die „ORCID“-Authentifizierung erfolgt auf der eigenen Autorisierungsseite von ORCID über OAuth/OpenID Connect.

Der persönliche Modus verwendet den von „Personal/OMI“ verwalteten Namensraum für Anmeldedaten:

```dotenv
ORCID_CLIENT_ID=APP-...
ORCID_CLIENT_SECRET=...
ORCID_REDIRECT_URI=https://studio.example.org/api/auth/orcid/callback
```

Die Zielarchitektur bleibt „OMI“, wobei der Identitätsvermittlungsdienst den Ablauf „ORCID“ regelt, sodass einzelne Autoren die Anmeldedaten für „ORCID“ und „API“ nicht selbst beschaffen oder verwalten müssen.

## Institutioneller Modus

```dotenv
DEPLOYMENT_MODE=institutional
```

Der institutionelle Modus richtet sich an Verlage, Zeitschriften, Universitäten, Repositorien, Forschungsinfrastrukturen sowie verwaltete Installationen von OJS/OMP. Die Institution verwendet einen separaten, unternehmenseigenen Namensraum für Anmeldedaten:

```dotenv
INSTITUTIONAL_ORCID_CLIENT_ID=APP-...
INSTITUTIONAL_ORCID_CLIENT_SECRET=...
INSTITUTIONAL_ORCID_REDIRECT_URI=https://publisher.example.org/api/auth/orcid/callback
INSTITUTIONAL_ORCID_API_TYPE=public
```

`INSTITUTIONAL_ORCID_API_TYPE` Akzeptiert „`public`“ oder „`member`“. Integrationsgeheimnisse verbleiben serverseitig und dürfen niemals über den Browserspeicher, Frontend-Build-Variablen oder clientseitige Konfigurationen offengelegt werden.

Bei institutionellen Bereitstellungen können zudem die Organisationsstruktur und die anfängliche Administratorkonfiguration festgelegt werden:

```dotenv
INSTITUTIONAL_NAME=
INSTITUTIONAL_ROR_ID=
INSTITUTIONAL_ADMIN_EMAILS=
```

Eine konfigurierte Administrator-E-Mail-Adresse allein gewährt noch keine Eigentumsrechte an der Einrichtung. Das zugehörige Studio-Konto muss bereits über eine verknüpfte OIDC- oder SAML-Identität verfügen, bevor die automatische Erst`OWNER`-Bereitstellung erfolgen kann.

## Bootstrap und Anmeldung für institutionelle Administratoren

Die Anmeldeseite für Institutionsadministratoren ist nur aktiviert, wenn der Server im Institutionsmodus läuft. Eine minimale Bootstrap-Konfiguration sieht wie folgt aus:

```dotenv
DEPLOYMENT_MODE=institutional
INSTITUTIONAL_NAME="Example University Press"
INSTITUTIONAL_ADMIN_EMAILS="admin@example.org"
```

Verfügt die Einrichtung über eine „ROR“-Kennung, sollte diese ebenfalls konfiguriert werden:

```dotenv
INSTITUTIONAL_ROR_ID="https://ror.org/012345678"
```

Es können mehrere Bootstrap-Administratoradressen als durch Kommas getrennte Zulassungsliste angegeben werden:

```dotenv
INSTITUTIONAL_ADMIN_EMAILS="admin@example.org,second.admin@example.org"
```

Der Bootstrap-Prozess setzt bewusst zwei unabhängige Bedingungen voraus:

1. Die E-Mail-Adresse des Studio-Kontos muss mit einer Adresse unter `INSTITUTIONAL_ADMIN_EMAILS` übereinstimmen; und
2. Demselben Studio-Konto muss bereits eine mit `OIDC` oder `SAML` verknüpfte Identität zugeordnet sein.

Ein lokales E-Mail- und Passwort-Konto allein reicht für die automatische Bereitstellung von „`OWNER`“ nicht aus. Dadurch wird verhindert, dass der Besitz eines lokal konfigurierten Passworts als Nachweis für die institutionelle Kontrolle gewertet wird.

Wenn sich der berechtigte Administrator anmeldet, führt Studio die folgende serverseitige Abfolge aus:

1. authentifiziert das Studio-Konto;
2. überprüft die konfigurierte institutionelle Bootstrap-Richtlinie;
3. legt den Eintrag zur Einrichtung an, falls dieser noch nicht vorhanden ist;
4. die Mitgliedschaft der entsprechenden Einrichtung bei „`OWNER`“ einrichtet oder aktualisiert;
5. ordnet die Mitgliedschaft der verknüpften föderierten Identität zu; und
6. akzeptiert die Sitzung des Institutionsadministrators erst nach Bestätigung einer aktiven Mitgliedschaft unter `ADMIN` oder `OWNER`.

Der Administrator kann dann auf der Studio-Anmeldeseite den Anmeldemodus „**Institutionsadministrator**“ verwenden. Zur Einleitung dieses Anmeldeprozesses kann die E-Mail-/Passwort-Authentifizierung genutzt werden; außerdem können konfigurierte OIDC-Anbieter verwendet werden, wobei das Backend jedoch stets die Überprüfung der Institutionsrolle durchführt, bevor der Administratorkontext gewährt wird.

Administratorrechte können nicht über das öffentliche Registrierungsformular selbst registriert werden. Weitere Administratoren sollten über den Workflow der Institutionsverwaltung zugewiesen werden, anstatt die Bootstrap-Zulassungsliste unbegrenzt zu erweitern.

Nachdem Sie die Umgebungsvariablen für die Bereitstellung oder den Identitätsanbieter geändert haben, starten Sie den Studio-Dienst „API“ neu, damit die neue Serverkonfiguration geladen wird. Überprüfen Sie das aktive Bereitstellungsprofil über die Fußzeile von Studio oder den Status-Endpunkt des nicht-geheimen Authentifizierungsanbieters, bevor Sie die Bootstrap-Anmeldung versuchen.

## Isolierung von Anmeldedaten

Die Weiterleitung von Anmeldeinformationen erfolgt deterministisch und wird durch „`DEPLOYMENT_MODE`“ gesteuert:

- `personal` verwendet ausschließlich `ORCID_CLIENT_ID`, `ORCID_CLIENT_SECRET` und `ORCID_REDIRECT_URI`.
- `institutional` verwendet ausschließlich den Anmeldedatensatz „`INSTITUTIONAL_ORCID_*`“.
- Der institutionelle Modus greift niemals im Hintergrund auf Anmeldedaten aus dem persönlichen Bereich oder von „OMI“ zurück.
- Fehlt der aktive Berechtigungssatz, wird „ORCID“ als nicht konfiguriert gemeldet.
- Ein teilweise aktives Berechtigungspaar führt dazu, dass die Validierung der Serverkonfiguration fehlschlägt.
- Studio gibt keines der beiden Client-Geheimnisse über seine Laufzeitstatus-API preis.

Das „ORCID“-Netzwerk wird unabhängig ausgewählt:

```dotenv
ORCID_ENVIRONMENT=sandbox
```

oder:

```dotenv
ORCID_ENVIRONMENT=production
```

Dies ermöglicht eine sichere institutionelle Testumgebung in der Sandbox unter ORCID vor der Aktivierung in der Produktionsumgebung.

## Anmeldung über ein föderiertes Konto

Studio kann zusätzlich konfigurierte OpenID Connect-Anbieter von Google, Microsoft sowie generische und institutionelle Anbieter bereitstellen. Diese nutzen den Autorisierungscode-Ablauf mit PKCE und serverseitiger Validierung von Status, Nonce, Aussteller, Zielgruppe und Signaturschlüsseln.

Eine bisher unbekannte externe Identität kann ein Studio-Konto erstellen, wenn der Anbieter die erforderlichen verifizierten Identitätsangaben bereitstellt. Ein bestehendes Studio-Konto wird **nicht** automatisch verknüpft, nur weil der Anbieter dieselbe E-Mail-Adresse angibt; die Verknüpfung erfordert eine explizite Aktion des angemeldeten Kontos.

Bei der Anmeldung als Administrator einer Einrichtung können konfigurierte OIDC-Anbieter verwendet werden, doch der Server überprüft dennoch, ob das Konto über eine aktive Mitgliedschaft bei einer Einrichtung unter `ADMIN` oder `OWNER` verfügt, bevor ein Verwaltungskontext akzeptiert wird.

## ORCID Sicherheitsmodell

Das Bereitstellungsprofil hat keinen Einfluss auf die Authentifizierungsregel: Studio erfasst, übermittelt oder speichert niemals das Passwort des Benutzers unter ORCID. Der Benutzer authentifiziert sich direkt bei ORCID – einschließlich der Zwei-Faktor-Authentifizierung, sofern diese aktiviert ist – und Studio erhält lediglich das Ergebnis von OAuth/OpenID Connect.

Der persönliche und der institutionelle Modus unterscheiden sich hinsichtlich der Eigentumsverhältnisse und der Verwaltung der Zugangsdaten, nicht jedoch hinsichtlich der Handhabung von Benutzernamen und Passwörtern.

ORCID wird bewusst nicht als Zugangsnachweis für Verwaltungszwecke verwendet. Es bleibt ein persönlicher wissenschaftlicher Identifikator und kann bei der Überprüfung der Autorenidentität sowie bei kryptografischen Signaturprozessen zum Einsatz kommen.

## Profile und Aufgabenbereiche der Institutionen

Das aktuelle „Studio Identity“-Modell trennt dauerhafte persönliche Kontodaten von organisationsspezifischen Mitgliedschaften.

Ein Konto kann mehrere Zugehörigkeiten zu Institutionen haben, wobei jeweils eine als Standardzugehörigkeit festgelegt ist. Die Rollen der Institutionen sind:

- `MEMBER`;
- `ADMIN`;
- `OWNER`.

Der Name der Organisation und die Kennung „ROR“ sind institutionelle Daten. Die Abteilung, die Position, die institutionelle E-Mail-Adresse, die verknüpfte institutionelle Identität und der Standard-Zugehörigkeitsstatus gehören zur Mitgliedschaft.

Die Endpunkte der Institutionsadministratoren setzen diese Rollen serverseitig durch. Der letzte Institutions`OWNER`us ist vor versehentlichem Löschen oder Herabstufen geschützt.

Das vollständige Modell der Privilegien und API finden Sie unter [Institutional and Central Administration](./institutional-administration.md).

## Zentrale Verwaltung von „OMI“

Die institutionsübergreifende Verwaltung stellt eine eigenständige Berechtigungsebene dar und lässt sich niemals aus der Zugehörigkeit zu einer Institution ableiten.

Die anfängliche zentrale Verwaltung kann mit folgendem Befehl gestartet werden:

```dotenv
CENTRAL_ADMIN_EMAILS=
INSTITUTION_API_TOKEN_TTL_DAYS=365
```

Wie beim „Institution Bootstrap“ muss das Konto über eine verknüpfte OIDC- oder SAML-Identität verfügen, bevor es als erster zentraler „`OWNER`“ fungieren kann.

Zentrale Administratoren können Einrichtungen, Einrichtungsadministratoren, Einrichtungs-API-Zugangsdaten und Verwaltungsprotokolle verwalten. Diese Berechtigungen gewähren **keinen** Zugriff auf Manuskripte, Begutachtungen oder redaktionelle Inhalte.

## API der Verwaltungsstelle der Einrichtung

Bei der institutionsbezogenen Automatisierung werden spezielle Maschinen-Zugangsdaten anstelle von Token für Benutzersitzungen verwendet. Jede Zugangsdaten gehören genau einer Institution an, verfügen über explizite Gültigkeitsbereiche, können ablaufen oder widerrufen werden und werden nach der einmaligen Anzeige des Tokens nur als Hash gespeichert.

Derzeitige Anwendungsbereiche umfassen:

```text
institution:read
members:read
members:write
integrations:read
integrations:write
```

Maschinenanmeldedaten können die Rollen unter „`OWNER`“ nicht ändern.

## Sichtbarkeit zur Laufzeit

Das aktive Bereitstellungsprofil wird vom Studio-Backend bereitgestellt und in der Fußzeile der Anwendung als `OMI Studio · Personal` oder `OMI Studio · Institutional` angezeigt. Wenn ORCID das Sandbox-Netzwerk nutzt, wird in der Fußzeile zusätzlich `ORCID Sandbox` angezeigt.

`GET /api/auth/providers` gibt zudem nicht vertrauliche Metadaten zur Bereitstellung und zu Anbietern preis. Zum Beispiel:

```json
{
  "deployment": {
    "mode": "institutional",
    "label": "Institutional"
  },
  "providers": {
    "orcid": {
      "enabled": true,
      "environment": "sandbox",
      "credentialSource": "institutional",
      "apiType": "public"
    }
  }
}
```

## Konstruktionsbedingungen

- Der Bereitstellungsmodus wird vom Server gesteuert, nicht vom Status des Browsers.
- Das Dokumentmodell und die „PortableOMI“-Pakete bleiben in beiden Modi identisch.
- Die gleichen Studio-Binärdateien können sowohl für private als auch für institutionelle Bereitstellungen verwendet werden.
- ORCID Passwörter werden von Studio niemals verarbeitet.
- Die Identitäten in der Sandbox und im ProduktionsORCIDus bleiben je nach Aussteller getrennt.
- Die Berechtigungen für institutionelle und zentrale Administratoren unterscheiden sich von den Berechtigungen für Manuskripte und Redakteure.
- Institutionsrollen und zentrale Rollen sind getrennte Berechtigungsebenen.
- Für den ersten privilegierten Bootstrap-Vorgang sind sowohl ein Konto auf der Zulassungsliste als auch eine verknüpfte OIDC-/SAML-Identität erforderlich.
- Die Anmeldedaten für den „Institution MachineAPI“ sind an einen bestimmten Geltungsbereich und an eine bestimmte Institution gebunden.
- Im persönlichen Modus kann die Authentifizierung über „OMI Identity“ erfolgen, ohne dass sich die für den Benutzer sichtbare Anmeldeprozedur unter ORCID ändert.

## Stand der Umsetzung

In der aktuellen Studio-Entwicklungslinie sind bereichsspezifische „ORCID“-Anmeldeinformationen, die Weiterleitung von Anmeldeinformationen, die föderierte OIDC-Anmeldung, institutionelle Mitgliedschaften, die Authentifizierung von Institutionsadministratoren, die zentrale Verwaltung, bereichsbezogene AnmeldeAPIen für Institutionsadministratoren sowie Verwaltungs-Audit-Ereignisse implementiert.

Der Einsatz in der Produktion hängt weiterhin von installationsspezifischen Migrationen der Identitätsdatenbank, der Serverkonfiguration, der Registrierung des Anbieters und den üblichen Sicherheits- und Release-Härtungsmaßnahmen der Bereitstellung ab.

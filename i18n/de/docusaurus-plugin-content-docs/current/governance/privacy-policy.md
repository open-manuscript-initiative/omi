---
title: Datenschutzhinweise
sidebar_label: Datenschutzhinweise
---

# Datenschutz und Hinweise des gewählten Servers

Diese Seite beschreibt die OMI-Software. Jede gehostete Studio-Installation muss
ihren tatsächlichen Verantwortlichen und ihre eigene Datenverarbeitung benennen.
Projektname und Open-Source-Lizenz bestimmen nicht den Verantwortlichen aller
unabhängigen Server. Öffnen Sie vor der Registrierung oder unter Konto den Bereich
**Datenschutz und personenbezogene Daten**. Nach Bereitstellung der Implementierung
ist die öffentliche Seite unter `/?privacy=1`, die API unter `/api/v1/privacy` erreichbar.

**Offizielle OMI-Projektkontaktadresse:** [contact@openmanuscript.org](mailto:contact@openmanuscript.org). Diese Adresse ersetzt persönliche Webmail-Adressen für Projektkommunikation und erste Datenschutzanfragen. Für die Bearbeitung formeller Datenschutzanträge ist der in den Hinweisen des gewählten Servers genannte Verantwortliche zuständig; unabhängige institutionelle Server können eigene Kontakte haben.

Für das offizielle Studio finden Sie [die Serverhinweise hier](https://studio.openmanuscript.org/?privacy=1).
Fehlen Betreiberangaben, fordern Sie vor der Registrierung die Hinweise an.
Quellcode und Projektdokumentation belegen keine vollständige Betriebs-Compliance.

## Aufbewahrung technischer Integrations- und Auditprotokolle

Anwendungsprotokolle liegen in der **Datenbank**; die Rotation von
systemd- oder Plesk-Webprotokollen löscht diese nicht. Die Software unterstützt
standardmäßige Löschgrenzen von **90 Tagen** für Integrationsvorgänge
(einschließlich DeepL-/KI-Ein- und Ausgabefingerabdrücken) sowie Modulaktionen
und **180 Tagen** für Administrator- und Berechtigungsänderungen sowie
Zusammenarbeitszugriffe. Benutzerkennungen, IP-Adressen, Metadaten und Hashes
können personenbezogene Daten sein. Zwecke sind technische Fehleranalyse,
Missbrauchs-/Sicherheitsuntersuchungen und Zugriffsprüfung. Dies sind
Entwurfswerte, keine allgemeingültigen gesetzlich vorgeschriebenen Fristen.

Die Löschung erfolgt **nur bei aktivierter und überprüfter Wartungsplanung**.
Der Betreiber des ausgewählten Servers muss tatsächliche Aufbewahrung,
Rechtsgrundlage, Backups und begründete Ausnahmen veröffentlichen. Wissenschaftliche
Publikations-, redaktionelle Entscheidungs- und Begutachtungsnachweise werden
von der generischen Wartung nicht gelöscht und benötigen eigene Regeln.

## Externe Identitätsanbieter (ORCID, Google, Microsoft)

Externe Anmeldung ist optional und muss vom jeweiligen Server aktiviert sein.
ORCID verwendet den Bereich `openid` zur Verifikation der ORCID iD und kann
gegebenenfalls einen Namen liefern. Google und Microsoft verwenden
`openid profile email`; übertragen werden können Anbieter-ID, Aussteller,
Name, E-Mail und ein Verifikationsmerkmal. Die E-Mail-Adresse ist nicht in
allen Fällen bestätigt und begründet keine automatische institutionelle
Berechtigung. Institutionelle OpenID-Anbieter können zusätzlich aktiviert werden.

Studio speichert die verknüpfte Identität (Anbieter, Aussteller, Kennung),
gegebenenfalls Anzeigenamen sowie begrenzte E-Mail- und Verifikationsmetadaten.
Die Authentifizierungscodes werden serverseitig ausgetauscht; das Passwort
des externen Kontos erhält Studio nicht. Externe Anbieter verarbeiten Daten
in ihren eigenen Systemen nach ihren Datenschutzregeln; **der Verantwortliche
des Studio-Servers bleibt für dessen eigene Verarbeitung verantwortlich**,
einschließlich erforderlicher Übermittlungsgarantien. Hinweise:
[ORCID](https://info.orcid.org/privacy-policy/),
[Google](https://policies.google.com/privacy),
[Microsoft](https://www.microsoft.com/en-us/privacy/privacystatement).

## Verarbeitung und Rechte

Lokale Bearbeitung und Speicherung können Manuskripte auf dem Gerät halten.
Konten, Zusammenarbeit, Begutachtung, OJS/OMP, Office, externe Anmeldung, Cloud,
Übersetzungs- und Forschungsdienste können personenbezogene Daten verarbeiten.
Die konkrete Datenschutzerklärung muss Verantwortlichen, Zwecke, Rechtsgrundlagen,
Datenarten, Empfänger, Speicherfristen, gegebenenfalls internationale Übermittlungen
und Garantien, Rechte und Beschwerdemöglichkeiten erklären. Auch nutzerinitiierte
Verbindungen erfordern eine rechtmäßige Verarbeitung und passende Vereinbarungen.
Installieren oder Öffnen allein darf keine Übermittlung an unbeteiligte Dienste
auslösen. Release- und Signierabläufe dürfen keine Manuskripte oder Betriebszugänge enthalten.

Wenden Sie sich an die überwachte Datenschutzadresse des Serverbetreibers, auch
wenn Sie sich nicht anmelden können. Je nach Voraussetzungen können Sie Auskunft,
Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit verlangen.
Die Antwortfrist beträgt grundsätzlich einen Kalendermonat; eine begründete
Verlängerung muss innerhalb der ursprünglichen Frist mitgeteilt werden.
Ein E-Mail-Link öffnet nur Ihr Mailprogramm; Sie senden die Nachricht selbst.

Die JSON-Kontokopie umfasst Profil und ausgewählte Konto-, Mitgliedschafts- und
Anmeldemetadaten ohne Authentifizierungsgeheimnisse. Sie ist weder eine vollständige
Auskunft noch eine Manuskriptsicherung. Fordern Sie weitere Daten und anwendbare
Übertragbarkeit beim Verantwortlichen an. Eine pauschale Einwilligung ersetzt
keine zweckbezogene Rechtsgrundlage.

## Löschung, gemeinsame Datensätze und Sicherungen

Vor der endgültigen Kontolöschung zeigt Studio eine ausführliche Übersicht über zu löschende Konto- und Privatdaten, gegebenenfalls erhaltene gemeinsame Manuskripte und Gutachten, externe Kopien und Sicherungen. Die Kenntnisnahme wird zusätzlich zur E-Mail-Bestätigung ausdrücklich bestätigt; dies ist **kein** Verzicht auf Löschungs- oder Widerspruchsrechte.

Die gesonderten Verarbeitungszwecke, Rechtsgrundlagen und die eng auszulegenden Ausnahmen nach Art. 6 Abs. 1 Buchst. f bzw. Art. 17 Abs. 3 Buchst. d sind im Entwurf [Kontolöschung und wissenschaftliche Beiträge](/docs/governance/account-erasure-and-scholarly-records) erläutert.

Die [Löschanleitung](https://openmanuscript.org/account-deletion) beschreibt die
Selbstbedienung. Gemeinsame wissenschaftliche Historie kann pseudonymisierte
Teilnehmerverweise und identifizierbare Inhalte behalten. Pseudonymisierung ist
keine irreversible Anonymisierung. Verbleibende personenbezogene Daten, Grundlage,
Dauer und Ausnahmen sind individuell zu prüfen; Provenienz rechtfertigt keine
pauschale unbegrenzte Aufbewahrung. Bei Sperre des letzten Eigentümers muss der
Verantwortliche eine geprüfte Übergabe oder ein anderes Löschverfahren anbieten.

Der Betreiber muss die tatsächliche Backup-Aufbewahrung erklären und durchsetzen.
Frühere Zusagen, etwa höchstens 30 Tage, gelten bis zu einer rechtmäßigen Änderung.
Diese allgemeine Softwarebeschreibung verlängert keine Backup-Fristen. Vor einer
Wiederinbetriebnahme nach Wiederherstellung müssen Löschungen/Einschränkungen erneut
angewandt und überholte Zugangsdaten ungültig gemacht werden. Externe OJS/OMP- und
Cloud-Kopien erfordern das Verfahren des jeweiligen Verantwortlichen.

## Cookies und Betrieb

Notwendiger Gerätespeicher ist zu erklären; technisch notwendige Cookies erfordern
nicht allein wegen ihrer Form eine Einwilligung. Optionales Tracking erfordert
vorherige Wahl, Ablehnung und Widerruf. Diese Implementierung führt kein optionales
Tracking ein. Betreiber brauchen tatsächliche Sicherheits-, Aufbewahrungs-,
Wiederherstellungs-, Anfragen- und Vorfallverfahren. Die
[Betriebsanleitung](/docs/governance/server-privacy-operations) erläutert diese sowie die gesonderte
Prüfung von NIS2-, CRA- und Barrierefreiheitspflichten.
Rechtsgrundlage: [DSGVO](https://eur-lex.europa.eu/eli/reg/2016/679/oj).

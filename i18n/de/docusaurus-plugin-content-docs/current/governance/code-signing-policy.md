---
title: Richtlinie zur Codesignierung
sidebar_label: Richtlinie zur Codesignierung
---

# Richtlinie zur Codesignierung

**Aktualisiert: 10. November 2026.**

Der gewählte Windows-Kanal ist **Microsoft Store MSIX**. Microsoft bestätigte
dem Herausgeber am 10. November 2026 die Bearbeitung der Einreichung und ihre
Store-Verfügbarkeit; die Sichtbarkeit für Kunden kann bis zu zwei Stunden dauern.
Auch die IARC-Altersklassifizierung aus dem Fragebogen vom 9. November ist
laut Benachrichtigung aktiv. Die konkrete Alterseinstufung ist nicht angegeben.
Die Signatur des veröffentlichten Pakets, Installation und datenbewahrende
Updates sind noch unabhängig zu prüfen. Eine verifizierte direkte Store-Produkt-URL
liegt noch nicht vor. Der Store-Weg erfordert kein Azure-Abonnement.

Laut Betreiber wurde der frühere SignPath-Foundation-Antrag abgelehnt.
SignPath ist kein aktiver Signierungsanbieter; es wird kein Sponsoring oder
Zertifikat behauptet. Der Store signiert bestehende direkte EXE/MSI-Installer nicht.

Jede Freigabe benötigt genaue Quell-/Paketidentität, SHA-256, Signaturprüfung,
datenerhaltende Installation/Updates, minimale Zugriffsrechte, MFA und explizite
Freigabe durch den Verantwortlichen. Geheimnisse, Manuskripte und Datenbanken
gehören weder in Git noch in Logs oder Signierungsartefakte. Bei Verdacht auf
Kompromittierung ist die Veröffentlichung auszusetzen. MSIX ersetzt die
bestehenden Freigabekriterien nicht automatisch.

[RC-Status und Build](../studio/releases/1.0.0-rc.1.md).
[Vollständige aktuelle englische Richtlinie](https://openmanuscript.org/docs/governance/code-signing-policy/).

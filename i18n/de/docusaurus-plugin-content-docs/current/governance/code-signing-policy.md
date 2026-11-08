---
title: Richtlinie zur Codesignierung
sidebar_label: Richtlinie zur Codesignierung
---

# Richtlinie zur Codesignierung

**Aktualisiert: 8. November 2026.**

Der gewählte Windows-Kanal ist **Microsoft Store MSIX**. Die Paketierung war
erfolgreich; Store-Versionsprüfung, Microsoft-Zertifizierung/Signierung sowie
Installations- und Updateabnahme stehen noch aus. Azure ist dafür nicht erforderlich.

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

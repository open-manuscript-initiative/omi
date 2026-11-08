---
title: Politik for kodesignering
sidebar_label: Politik for kodesignering
---

# Politik for kodesignering

**Opdateret: 8. november 2026.**

Den valgte Windows-kanal er **Microsoft Store MSIX**. Pakningen lykkedes;
Store-versionskontrol, Microsoft-certificering/signering og installations- og
opdateringstest mangler endnu. Azure er ikke nødvendigt.

Ifølge vedligeholderen blev den tidligere ansøgning til SignPath Foundation
afvist. SignPath er ikke en aktiv signeringsudbyder; der hævdes intet sponsorat
eller certifikat. Store signerer ikke eksisterende direkte EXE/MSI-installationsfiler.

Udgivelse kræver præcis kilde-/pakkeidentitet, SHA-256, verificeret signatur,
databevarende opdateringer, mindst mulige rettigheder, MFA og udtrykkelig
godkendelse. Hemmeligheder, manuskripter og databaser må ikke indgå i Git,
logfiler eller signeringsartefakter. Ved mistanke om kompromittering sættes
publicering på pause. MSIX erstatter ikke automatisk de eksisterende udgivelseskrav.

[Fuld aktuel politik på engelsk](https://openmanuscript.org/docs/governance/code-signing-policy/).

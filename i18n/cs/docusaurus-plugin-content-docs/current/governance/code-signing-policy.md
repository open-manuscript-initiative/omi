---
title: Zásady podepisování kódu
sidebar_label: Zásady podepisování kódu
---

# Zásady podepisování kódu

**Aktualizováno: 8. listopadu 2026.**

Zvoleným kanálem pro Windows je **Microsoft Store MSIX**. Sestavení balíčku uspělo;
ověření verze, certifikace/podpis Microsoftu a testy instalace a aktualizace zbývají.
Azure není potřeba.

Podle správce byla dřívější žádost SignPath Foundation zamítnuta. SignPath není
aktivním poskytovatelem podpisu; není deklarováno sponzorství ani certifikát.
Store nepodepisuje stávající přímé instalátory EXE/MSI.

Vydání vyžaduje přesnou identitu zdroje/balíčku, SHA-256, ověřený podpis,
zachování dat při aktualizaci, minimální oprávnění, MFA a výslovné schválení.
Tajemství, rukopisy a databáze nesmějí být v Gitu, protokolech ani podepisovaných
souborech. Při podezření na kompromitaci se publikování pozastaví.
MSIX automaticky nenahrazuje stávající podmínky vydání.

[Úplné aktuální zásady v angličtině](https://openmanuscript.org/docs/governance/code-signing-policy/).

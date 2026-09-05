---
id: core-principles
title: OMI-SPEC-000 — Grundlæggende principper
sidebar_position: 1
description: Open Manuscript Initiative’ grundlæggende principper.
---

# OMI-SPEC-000 — Grundlæggende principper

**Status:** Udkast  
**Version:** 0.1

---

# Resumé

Open Manuscript Initiative (OMI) bygger på den overbevisning, at videnskabelig viden bør eksistere uafhængigt af bestemt software, forlag, filformat eller visningsteknologi.

Dette dokument beskriver de arkitektoniske principper, der ligger til grund for alle OMI-specifikationer og -implementeringer.

Disse principper er normative. Alle fremtidige specifikationer for OMI BØR være i overensstemmelse med dem.

---

# 1. Vision

Videnskabelig viden bør være:

- bærbar
- kompatibel
- maskinlæsbar
- læselig for mennesker
- udgiveruafhængig
- softwareuafhængig
- kan bevares til kommende generationer

OMI er oprettet med henblik på at nå disse mål.

---

# 2. Adskillelse af ansvarsområder

OMI adskiller begreber, som traditionelle dokumentredigeringsprogrammer slår sammen.

Følgende lag er uafhængige:

```
Knowledge

↓

Semantics

↓

Structure

↓

Relationships

↓

Presentation
```

Det er kun præsentationslaget, der afhænger af publikationsformatet.

Alt andet forbliver uændret.

---

# 3. Indholdet er kanonisk

Det videnskabelige indhold udgør den kanoniske fremstilling.

Alle gengivne former stammer fra den.

Eksempler herpå er:

- PDF
- HTML
- DOCX
- EPUB
- JATS XML
- LaTeX
- fremtidige formater

Ingen af disse formater definerer manuskriptet.

De gengiver det blot.

---

# 4. Semantik før formatering

Formatering handler om præsentation.

Semantik er viden.

OMI lagrer semantisk betydning snarere end det visuelle udseende.

Eksempler:

I stedet for:

> Fed

OMI butikker:

> Overskrift

I stedet for:

> Kursiv

OMI butikker:

> Videnskabeligt navn

I stedet for:

> Formatering af fodnoter

OMI butikker:

> Videnskabelig kommentar

---

# 5. Alt er et forskningsobjekt

Hvert væsentligt element fremstilles som et selvstændigt videnskabeligt objekt.

Eksempler herpå er:

- manuskript
- afsnit
- afsnit
- overskrift
- figur
- tabel
- ligning
- henvisning
- bibliografisk post
- kommentar
- anmeldelse
- datasæt
- supplerende materiale

Objekter har stabile identiteter, der er uafhængige af, hvordan de vises.

---

# 6. Relationer har førsteprioritet

Relationer er ikke skjult i formateringen.

De er eksplicitte semantiske objekter.

Eksempler herpå er:

- henvisning
- kommentar
- anmeldelse
- krydshenvisning
- afhængighed
- herkomst

Forhold kan stadig overføres.

---

# 7. Stabil identitet

Hvert videnskabeligt objekt bør have en stabil identifikator.

Identifikatorer forbliver gyldige, selv efter redigering.

En stabil identitet giver mulighed for:

- kommentarer
- henvisninger
- samarbejde
- fagfællebedømmelse
- versionsstyring

---

# 8. Visningen afhænger af rendereren

Præsentationen afhænger helt af det valgte publikationsformat.

Det samme manuskript kan blive til:

- PDF
- HTML
- EPUB
- DOCX
- JATS XML
- Braille
- talesyntese
- fremtidens medier

uden at ændre det oprindelige manuskript.

---

# 9. Identitet og indhold er uafhængige af hinanden

Personlig identitet er ikke en integreret del af det videnskabelige indhold.

Forfattere, korrekturlæsere, redaktører, oversættere og AI-assistenter interagerer med manuskripter gennem veldefinerede semantiske roller.

Privatliv og anonymitet er implementeringsmæssige hensyn, der understøttes af datamodellen, snarere end at de er indlejret i dokumentets indhold.

---

# 10. Åbenhed som designprincip

Alle specifikationer for OMI SKAL være:

- åbenlyst dokumenteret
- med åben versionsstyring
- kan implementeres åbent
- leverandørneutral
- udvidelig

Ingen gennemførelse bliver obligatorisk.

---

# 11. Bevarelse først

Videnskabelige manuskripter skal forblive forståelige i årtier fremover.

Derfor undgår OMI afhængigheder af:

- proprietær software
- proprietære filformater
- proprietære cloud-tjenester
- proprietære rendering-motorer

Det semantiske manuskript udgør fortsat arkivdokumentet.

---

# 12. Interoperabilitet

OMI er udviklet til at fungere sammen med den eksisterende forskningsinfrastruktur.

Eksempler herpå er:

- JATS
- Crossref
- DataCite
- ORCID
- DOI
- ROR
- CSL
- Dublin Core
- Schema.org
- IIIF

OMI supplerer de eksisterende standarder i stedet for at erstatte dem.

---

# 13. Kunstig intelligens

Kunstig intelligens betragtes som en akademisk deltager.

AI-genererede forslag:

- er kommentarer
- fortsat kan henføres til
- kan tages op til fornyet behandling
- er reversible
- Det kanoniske manuskript må aldrig erstattes automatisk

De menneskelige forfattere bevarer den redaktionelle myndighed.

---

# 14. Udvidelsesmuligheder

OMI er bevidst udvidelig.

Der kan indføres nye typer af videnskabelige objekter, annoteringstyper, publikationsformater og arbejdsgange uden at det påvirker eksisterende manuskripter.

Bagudkompatibilitet bør bevares, når det er praktisk muligt.

---

# 15. Forvaltning af lokalsamfundet

OMI er en specifikation, der er udviklet af brugerne.

Dens udvikling bør styres af:

- gennemsigtighed
- offentlig debat
- videnskabelig enighed
- teknisk ekspertise
- bæredygtighed på lang sigt

Ingen enkelt institution eller leverandør ejer standarden.

---

# 16. Filosofi

Open Manuscript Initiative-formatet er ikke blot et dokumentformat.

Det er en åben semantisk arkitektur til videnskabelig kommunikation.

OMI adskiller viden fra præsentationen, betydning fra formateringen og det videnskabelige indhold fra softwaren.

På den måde gør det det muligt for manuskripter at bevæge sig frit på tværs af fagområder, forlag, teknologier og generationer, samtidig med at deres intellektuelle integritet bevares.

> **Skriv naturligt. Strukturér én gang. Udgiv overalt.**

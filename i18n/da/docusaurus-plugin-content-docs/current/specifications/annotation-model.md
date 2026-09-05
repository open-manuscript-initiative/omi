---
id: annotation-model
title: OMI-SPEC-130 — Annotationsmodel
sidebar_position: 3
description: Arkitektur til semantisk annotering af bærbare videnskabelige manuskripter.
---

# OMI-SPEC-130 — Annotationsmodel

**Status:** Udkast  
**Version:** 0.2.0  
**Gammel identifikator:** `OMI-SPEC-003`  
**Baseret på:** OMI-SPEC-100 (dokumentmodel), OMI-SPEC-110 (ankermodel), OMI-SPEC-120 (model for videnskabelige objekter)

---

## Resumé

Annotationsmodellen definerer, hvordan semantisk information knyttes til videnskabelige objekter i et dokument i formatet »Open Manuscript Initiative« (OMI).

I modsætning til traditionelle tekstbehandlingsprogrammer er annotationer **selvstændige videnskabelige objekter**. De er knyttet til faste ankerpunkter i stedet for sidepositioner, hvilket gør det muligt for manuskripter at forblive overførbare, maskinlæsbare og uafhængige af publikationen gennem hele deres livscyklus.

Denne model danner grundlag for noter, kommentarer, fagfællebedømmelse, AI-forslag, redaktionelle retningslinjer, semantiske henvisninger og fremtidige annoteringstyper.

---

# 1. Motivation

Traditionelle dokumentredigeringsprogrammer betragter kommentarer som formateringselementer, der er knyttet til et visuelt layout.

Denne tilgang har væsentlige begrænsninger:

- Noterne brydes under redigering
- Kommentarerne er applikationsspecifikke
- Data fra undersøgelser kan ikke uden videre udveksles
- AI-markeringer kan ikke bevares
- Publikationsformater kræver konvertering snarere end transformation

OMI erstatter denne model med en semantisk arkitektur.

Annotationer knyttes til videnskabelige objekter – ikke til sider.

---

# 2. Designprincipper

Annotationer SKAL:

- eksisterer uafhængigt af dokumentets layout
- reference: stabile forankringer
- overlever strukturel redigering
- understøtter flere annoteringslag
- forbliver maskinlæsbar
- kan fortsat redigeres manuelt
- kan anvendes på tværs af publikationsformater

Annotationer hører ALDRIG til en viset side.

De hører til de semantiske objekter.

---

# 3. Arkitektur

```
Manuscript

├── Metadata
├── Sections
├── Blocks
├── Figures
├── Tables
├── Equations
├── References
├── Notes
└── Annotations
```

Annotationerne udgør en selvstændig samling.

Dokumentobjekter indeholder aldrig indlejrede annoteringsdata.

---

# 4. Målmodel

Hver annotation henviser til et eller flere ankerpunkter.

```
Annotation
      │
      ▼
Anchor
      │
      ▼
Scholarly Object
```

Ankre defineres af ankermodellen og udgør stabile referencepunkter, selv efter redigering.

---

# 5. Understøttede mål

Annotationer KAN være rettet mod:

- manuskript
- afsnit
- underafsnit
- afsnit
- tekstområde i teksten
- figur
- figurområde
- tabel
- tabelcelle
- ligning
- bibliografisk oplysning
- henvisning
- ordlisteopslag
- metadatafelt
- forfatter
- anmeldelse, kommentar
- ekstern ressource

Denne liste KAN udvides med fremtidige objekttyper.

---

# 6. Annotationstyper

OMI definerer annoteringer ud fra deres semantiske rolle snarere end deres fremstilling.

## Noter

- fodnote
- slutnote
- forfatterens note
- redaktionel bemærkning
- Oversætterens bemærkning

---

## Kommentarer

- kommentar
- svar
- diskussionstråd
- løst kommentar

---

## Anmeldelse

- omfattende revision
- mindre ændring
- spørgsmål
- anbefaling
- godkendelse
- afvisning

---

## Kildehenvisning

- underbygger påstanden
- er i modstrid med
- baggrund
- primærkilde
- sekundær kilde

---

## AI

- forslag til omskrivning
- forslag til grammatik
- oversættelse
- forslag til terminologi
- faktatjek
- advarsel om konsistens

---

## Udgivelse

- korrekturlæsning
- korrekturlæsning
- produktionsvejledning
- instruktion i sætning
- Forlagets bemærkning

---

# 7. Datamodel

Eksempel:

```json
{
  "id": "annotation-001",

  "type": "footnote",

  "target": {
    "anchor": "anchor-15"
  },

  "body": {
    "content": "The original manuscript contains a different reading."
  },

  "creator": "orcid:0000-0002-1234-5678",

  "created": "2026-07-21T12:00:00Z",

  "modified": "2026-07-21T12:10:00Z"
}
```

---

# 8. Flere mål

En annotation KAN henvise til flere videnskabelige objekter.

Eksempel:

```
Paragraph 2

+

Figure 5

+

Table 3
```

Dette gør det muligt for én videnskabelig forklaring at beskrive flere relaterede objekter på én gang.

---

# 9. Omfattende kommentartekster

Annotationstekster er i sig selv »OMI«-dokumenter.

Annotationer KAN derfor indeholde:

- formateret tekst
- henvisninger
- matematiske udtryk
- tal
- tabeller
- semantiske links
- indlejrede annoteringer

Annotationer er ikke begrænset til almindelig tekst.

---

# 10. Stabil forankring

Annotationer MÅ IKKE afhænge af:

- sidetal
- beregnede koordinater
- visuelt layout

I stedet henviser de til stabile ankre, der er defineret i OMI-SPEC-110.

---

# 11. Rendering

Visningen afhænger af rendereren.

Den samme annotation kan se således ud:

| Output | Gengivelse |
|---------|-----------|
| HTML | Popup |
| PDF | Fodnote |
| EPUB | Endnote |
| DOCX | Indbygget fodnote |
| JATS XML | `<fn>` |
| Webanmeldelse | Kommentar i sidepanelet |

Selve manuskriptet ændrer sig aldrig.

Det er kun gengivelsen, der ændrer sig.

---

# 12. Samarbejde

Annotationer understøtter samarbejdsbaserede arbejdsgange.

Hver annotation gemmer sine egne:

- skaber
- tidsstempler
- ændringshistorik
- status
- rettigheder

Dette gør det muligt at:

- fælles skrivning
- fagfællebedømmelse
- redaktionelle arbejdsgange
- AI-støttet redigering

---

# 13. Udvidelsesmuligheder

Udgivere og softwareudbydere KAN indføre yderligere typer af annoteringer.

Eksempler:

- juridisk bemærkning
- taksonomisk annotering
- sproglig analyse
- note om historisk kilde
- kemisk advarsel
- klinisk observation

Brugerdefinerede annotationstyper BØR angive deres semantiske rolle for at sikre interoperabilitet.

---

# 14. Forholdet til andre specifikationer

Denne specifikation forudsætter:

- OMI-SPEC-100 — Dokumentmodel
- OMI-SPEC-110 — Anker-modellen
- OMI-SPEC-120 — Videnskabelig objektmodel

og danner grundlaget for:

- OMI-SPEC-200 — Testmodel
- OMI-SPEC-190 — Samarbejds- og tilladelsesmodel
- OMI-SPEC-210 — Citeringsmodel
- OMI-SPEC-230 — Udgivelsesmodel

---

# 15. Ændringshistorik

- **0.2.0** — Flyttet fra den midlertidige adresse `OMI-SPEC-003` til den officielle adresse `OMI-SPEC-130`, og afhængighederne er blevet rettet.

---

# 16. Filosofi

I »OMI« er annotationer videnskabelige objekter af første rang.

En fodnote, en bemærkning fra fagfællebedømmelsen, en redaktionel anvisning, et AI-forslag eller en semantisk henvisning er alle eksempler på det samme begreb:

> **Et semantisk forhold, der er knyttet til et solidt videnskabeligt grundlag.**

Ved at adskille indhold, sammenhænge og præsentation muliggør OMI virkelig bærbare videnskabelige manuskripter, der kan udvikle sig gennem hele forløbet fra skrivning, bedømmelse, udgivelse, bevaring og genbrug uden at miste deres semantiske betydning.

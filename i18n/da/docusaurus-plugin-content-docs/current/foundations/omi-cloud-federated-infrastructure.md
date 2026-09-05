---
id: omi-cloud-federated-infrastructure
title: OMI Cloud og fødereret infrastruktur
sidebar_label: OMI Cloud og fødereret infrastruktur
sidebar_position: 6
description: En langsigtet arkitektur for skalerbare tjenester inden for »OMI«, valgfri lagring af dokumenter knyttet til brugerkonti, institutionel datasuverænitet samt overførbare videnskabelige manuskripter, der prioriterer lokal lagring.
keywords:
  - OMI Cloud
  - federated infrastructure
  - scholarly cloud
  - object storage
  - S3
  - data sovereignty
  - EU cloud
  - Open Manuscript Studio
---

# OMI Cloud og fødereret infrastruktur

OMI kan i øjeblikket implementeres på konventionel serverinfrastruktur, herunder den hostede tjeneste Open Manuscript Studio. Den langsigtede infrastrukturplan går ud på at gøre tjenestelaget horisontalt skalerbart, samtidig med at man fastholder et princip, der er centralt for OMI: **et manuskript må aldrig blive bundet til én bestemt hostet tjeneste**.

OMI Cloud opfattes derfor som et **valgfrit, administreret og sammenkoblingsbart servicelag**, ikke som en erstatning for lokal `.omi` dokumenter eller institutionsstyret lagring.

## Mål

Den foreslåede cloud-arkitektur bør gøre det muligt at:

- at knytte dokumenter og arbejdsområder til brugerkonti på tværs af browser-, desktop-, Android- og iOS/iPadOS-klienter;
- synkronisere manuskripter, versioner, ressourcer, tilladelser og samarbejdsstatus på tværs af enheder;
- understøtte arbejdsmiljøer for enkeltpersoner, forskningsgrupper, forlag og institutioner;
- skalere beregningskrævende import-, konverterings-, validerings- og eksportopgaver uafhængigt af den interaktive API;
- sørge for, at valgene vedrørende dataplacering, opbevaring og udbyder af datalagring er tydeligt angivet;
- at institutionerne, hvor det er nødvendigt, selv kan drive deres egne kompatible lagrings- eller implementeringsløsninger;
- Sørg for, at lokale filer altid kan overføres, og at eksporten altid foregår på en enkel måde.

## Foreslået servicetopologi

Ved en implementering i produktionsskala kan man adskille interaktiv levering fra varig lagring og baggrundsbehandling:

```text
Clients: Web · Windows · Linux · macOS · Android · iOS/iPadOS
                              │
                         CDN / ingress
                              │
                         Studio API
          ┌───────────────────┼───────────────────┐
          │                   │                   │
     identity/session    manuscript/workspace   integrations
          │                   │                   │
          └──────────── PostgreSQL ──────────────┘
                              │
                    S3-compatible object store
                              │
                    queue / background workers
                              │
          PDF · DOCX · export · validation · indexing
```

Den konkrete cloududbyder er bevidst ikke en del af specifikationen »OMI«. Arkitekturen bør basere sig på portable grænseflader og implementeringsmønstre frem for proprietær lagringssemantik.

## Lagring af dokumenter knyttet til en konto

I den administrerede OMI Cloud-tilstand kan en brugerkonto eje eller deltage i et eller flere arbejdsområder. Et arbejdsområde kan indeholde manuskripter, ressourcer, versionshistorik, eksportprodukter og metadata vedrørende adgangskontrol.

Et nyttigt logisk hierarki er:

```text
OMI Account
  └─ Workspace
      └─ Manuscript
          ├─ Versions
          ├─ Assets
          ├─ Review/collaboration state
          └─ Exports
```

Strukturerede metadata, tilladelser, samarbejdsstatus og transaktionsbaserede versionshenvisninger hører hjemme i en database som f.eks. PostgreSQL. Større uforanderlige eller binære objekter — kildeDOCX- ogPDF-filer, billeder, pakkede eksporter og andre ressourcer — egner sig bedre til S3-kompatibel objektlagring.

## Baggrundsbehandling og elasticitet

Langvarig dokumentbehandling bør ikke holde en interaktiv HTTP-anmodning åben. Rekonstruktion af store PDF, konvertering af DOCX, gengivelse af publikationer, validering, indeksering samt fremtidige beregningskrævende integrationer kan behandles som opgaver.

For eksempel:

```text
Upload → Queued → Processing → Structural reconstruction → Validation → Ready
```

Arbejdere kan skalere horisontalt i henhold til køens længde. Dette adskiller ressourcekrævende import fra den normale redigeringstrafik og gør tjenesten velegnet til brug i større institutioner uden at det er nødvendigt at omlægge manuskriptmodellen.

## Datasuverænitet og føderation

OMI Cloud-løsningen bør udformes således, at administreret hosting er praktisk, men aldrig obligatorisk. Tre lagringsformer bør fortsat have førsteprioritet:

1. **local-first** — bærbare `.omi`-dokumenter forbliver på brugerens egen enhed eller det valgte filsystem;
2. **administreret OMI Cloud** — kontobaseret lagring og synkronisering leveres af en OMI-tjenesteudbyder;
3. **institutionel/federeret lagring** — en institution kan benytte sit eget kompatible objektlager, sin egen private cloud eller sin egen implementering, samtidig med at den fortsat bruger OMI-klienter og udvekslingsformater.

Eksterne udbydere såsom Nextcloud/WebDAV, OneDrive, Google Drive eller andre brugervalgte tjenester kan fortsat fungere som yderligere integrationsmål. Valget af udbyder må ikke medføre en omdefinering af den videnskabelige objektmodel.

I forbindelse med implementeringer i europæiske institutioner lægger køreplanen vægt på muligheder for datalagring inden for EU/EØS, eksplicitte regler for opbevaring, kryptering under overførsel og i hvile, sporbarhed, eksporterbarhed, sletning af konti samt institutionsspecifik styring. Der er tale om implementeringskrav snarere end ændringer af semantikken i manuskripter på OMI.

## Undgå leverandørbinding

En cloudtjeneste bør ikke svække de garantier for portabilitet, der lå til grund for OMI. Arkitekturen lægger derfor vægt på:

- S3-kompatible objektgrænseflader frem for leverandørespecifikke, hvor det er praktisk muligt;
- standardtransaktionslagring, der er kompatibel med PostgreSQL;
- dokumenterede eksport- og sikkerhedskopieringsformater;
- bærbare `.omi`-pakker som en holdbar flugtvej;
- eksplicitte abstraktioner af lagringsudbydere i Studio-backend’et;
- adskillelse mellem manuskriptets identitet og infrastrukturens placering.

Målet er at gøre det nemmere at anvende OMI i stor skala uden at oprette et nyt, proprietært manuskriptsilo.

## Institutionelle arbejdsområder

Institutionelle implementeringer kan bygge videre på den eksisterende adskillelse mellem personlige konti, akademiske bidragyderes identitet, institutionsmedlemskab og central administration. Cloud-arbejdsområder bør følge den samme afgrænsning: Administrativ myndighed over en institution eller tjeneste må ikke automatisk give adgang til fortrolige manuskripter, peer-review-materiale eller redaktionelt indhold.

Institutionelle arbejdsområder kan på et senere tidspunkt understøtte kvoter, opbevaringspolitikker, delegeret lagring, gruppetilladelser, udgiver-arbejdsgange og forskningsprojektrom uden at ændre det underliggende dokumentformat.

## Overgangsplan fra den nuværende installation

Overgangen bør foregå trinvist frem for at være en gennemgribende omskrivning. Nye backend-funktioner bør implementeres på baggrund af udskiftelige lagrings- og jobabstraktioner, så den nuværende installation kan fortsætte med at køre, mens cloud-kompatible komponenter indføres.

En praktisk fremgangsmåde er:

1. definere en abstraktion af en lagringsudbyder omkring den nuværende serverbaserede persistens;
2. tilføj S3-kompatibel objektlagring til store filer og eksporter;
3. flytte ressourcekrævende import-/eksportopgaver til en vedvarende kø og en arbejdsproces;
4. indføre lagring af dokumenter i skyen, der er knyttet til arbejdsområder, samt versionshenvisninger;
5. tilføj konfiguration af institutionelle lagringsudbydere og sammenkobling;
6. Implementer redundante/stateless API-instanser bag en administreret ingress, når driftsbelastningen kræver det.

## Relevans for finansiering og bæredygtighed

En skalerbar, fødereret infrastruktur udgør ligeledes en strategisk retning inden for forskningsinfrastruktur. Den kan understøtte pilotprojekter på tværs af institutioner, universitetsforlag, videnskabelige selskaber og open science-programmer, samtidig med at OMI’s kernespecifikationer og referenceimplementering forbliver åbne.

Vedvarende europæisk eller institutionel finansiering ville gøre det muligt at gå fra den nuværende kompakte, hostede løsning til en robust tjeneste med flere brugere, der omfatter hosting i EU/EØS, driftsikkerhed, overvågning, sikkerhedskopiering, katastrofegendannelse og institutionel sammenslutning. Køreplanen forudsætter **ikke**, at en sådan finansiering allerede er sikret.

## Status

Denne side beskriver en **planlagt arkitektur og en infrastrukturretning, der afhænger af finansieringen**, og er ikke en påstand om, at den fulde OMI-cloudtjeneste allerede er implementeret. Eksisterende lokal lagring, indbyggede filworkflows, cloudforbindelser på profilniveau, kontoinfrastruktur og Studio-APIen udgør grundlaget for implementeringen af dette fremtidige skridt.
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const copy = {
  "en": [
    "Studio development update — 20 November 2026",
    "Implemented November improvements in the RC2 development line. The hosted web deployment is current; permanent desktop release assets and Store distribution have separate version identities.",
    [
      [
        "Publication editor and templates",
        "Volumes and journal issues, combined identifiers, reusable format snapshots, complete cover sheets, editable text/graphic frames, mm/pica/point units and paper-based spine calculation.",
        "publication-editor"
      ],
      [
        "Editable notes and shared formatting",
        "Rich Word/ODT/OJS source notes, direct bottom-panel editing, pinnable Aa controls, retained formatting in HTML/PDF, inline/marginal treatment and optional starred funding note.",
        "notes-and-formatting"
      ],
      [
        "Research projects and networks",
        "Family trees and networks with GEDCOM/GEXF/GraphML import, portable projects, file-provider synchronization and reviewed diagram/source insertion.",
        "research-projects"
      ],
      [
        "OJS and editorial production",
        "Selected multilingual metadata reconciliation, publisher-styled HTML/PDF handoff to OJS Production, and revision-bound native copyediting/proof approval.",
        "publication-editor"
      ]
    ]
  ],
  "hu": [
    "Stúdió-fejlesztések — 2026. november 20.",
    "A novemberi fejlesztések az RC2 fejlesztési vonalban elkészültek, a webes telepítés friss. Az állandó asztali kiadások és az áruházi terjesztés külön verzióazonosságot használnak.",
    [
      [
        "Kiadványszerkesztő és sablonok",
        "Kötetek és folyóiratszámok, együttes azonosítók, újrafelhasználható formátumok, teljes borítóívek, szöveg- és képkeretek, mm/pica/pont és papíralapú gerincszámítás.",
        "publication-editor"
      ],
      [
        "Szerkeszthető jegyzetek és közös formázás",
        "Formázott Word/ODT/OJS-jegyzetek, közvetlen szerkesztés a dokumentum alatt, rögzíthető Aa-panel, HTML/PDF-ben megőrzött formázás, szövegközi/lapszéli kezelés és csillagos finanszírozási jegyzet.",
        "notes-and-formatting"
      ],
      [
        "Kutatási projektek és hálózatok",
        "Családfa és kapcsolati háló GEDCOM/GEXF/GraphML-importtal, hordozható projekttel, fájlszolgáltatói szinkronnal és jóváhagyott ábra/forrás beszúrással.",
        "research-projects"
      ],
      [
        "OJS és szerkesztőségi előállítás",
        "Nyelvenként kiválasztott metaadategyeztetés, kiadói HTML/PDF átadása az OJS Production szakaszába, valamint változathoz kötött saját szöveggondozás és korrektúra-jóváhagyás.",
        "publication-editor"
      ]
    ]
  ],
  "de": [
    "Studio-Entwicklungsupdate — 20. November 2026",
    "Die November-Funktionen sind in der RC2-Entwicklungslinie implementiert und im aktuellen Web-Deployment enthalten. Dauerhafte Desktop-Release-Dateien und Store-Verteilung haben eigene Versionsidentitäten.",
    [
      [
        "Publikationseditor und Vorlagen",
        "Bände und Zeitschriftenhefte, kombinierte Kennungen, wiederverwendbare Formate, ganze Umschlagbogen, Text-/Bildrahmen, mm/Pica/Punkt und papierbasierte Rückenberechnung.",
        "publication-editor"
      ],
      [
        "Anmerkungen und gemeinsame Formatierung",
        "Formatierte Word-/ODT-/OJS-Anmerkungen, direkte Bearbeitung unter dem Manuskript, anheftbares Aa-Panel, HTML/PDF-Formatierung und optionale Förderanmerkung mit Stern.",
        "notes-and-formatting"
      ],
      [
        "Forschungsprojekte und Netzwerke",
        "Stammbäume und Netzwerke mit GEDCOM/GEXF/GraphML, portablen Projekten, Dateianbieter-Synchronisierung und bestätigter Diagramm-/Quelleneinfügung.",
        "research-projects"
      ],
      [
        "OJS und redaktionelle Produktion",
        "Sprachweise Metadatenabgleich, Verlags-HTML/PDF an OJS Production und revisionsgebundenes natives Lektorat/Korrekturfahnenfreigabe.",
        "publication-editor"
      ]
    ]
  ]
} as const;

export default function RecentStudioDevelopments() {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const [title, intro, items] = copy[currentLocale as keyof typeof copy] ?? copy.en;
  return <section className="container margin-vert--xl" aria-labelledby="studio-november-update">
    <h2 id="studio-november-update">{title}</h2>
    <p>{intro}</p>
    <div className="row">{items.map(([heading, description, slug]) =>
      <article className="col col--6 margin-bottom--md" key={slug + heading}>
        <h3><Link to={'/docs/studio/' + slug}>{heading}</Link></h3>
        <p>{description}</p>
      </article>)}</div>
    <Link to="/docs/studio/updates/2026-11-20">{title}</Link>
  </section>;
}

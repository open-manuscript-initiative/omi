import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const copy = {
  "en": [
    "Studio development update — 27 November 2026",
    "RC5 is merged in the Studio source. Complete planned OJS issue import, per-study author editing, multilingual title-matter fields and study-aware running headers are integrated. OJS plugin source 1.9.2.0 includes the compact OMI launcher and subsequent native imprint/masthead changes. Public distribution and live acceptance remain separate.",
    [
      [
        "Complete journal issue workflow",
        "Import ordered planned OJS issues, edit per-study authors and notes, review PDF ranges and transfer approved PDF/HTML/JATS Article Authoring files and printed page labels.",
        "publication-editor"
      ],
      [
        "Multilingual publication templates",
        "Reusable imprint and editorial board shortcodes, per-field language selection, article DOI, title, authors and printed page counter in running heads.",
        "publication-editor"
      ],
      [
        "Adaptive memory management",
        "A shared, bounded derived-cache budget, three performance modes, diagnostics and background cache clearing. Android samples available system RAM; actual device and WebView memory measurements remain pending.",
        "performance-and-memory"
      ],
      [
        "Direct note insertion and formatted previews",
        "Insert a note at the cursor or attach it to a selection from the persistent toolbar action. Hover or focus a note anchor to read its formatted contents; click to edit.",
        "notes-and-formatting"
      ],
      [
        "Expanded Word interoperability",
        "Native DrawingML picture geometry and crops, OMML equations, semantic REF fields, private Word comments and reversible review changes, and consistent content-language tags. Verify complex documents after exchange.",
        "updates/2026-11-25"
      ],
      [
        "Office editing is an independent service",
        "The embedded EuroOffice editor and Studio API coupling have been removed. DOCX import/export remains available in Studio; a separate Office service is operated and updated independently.",
        "updates/2026-11-23"
      ],
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
    "Stúdió-fejlesztések — 2026. november 27.",
    "Az RC5 a Stúdió forráskódjába beolvadt. A teljes tervezett OJS-lapszám importja, a tanulmányonkénti szerzőkezelés, a többnyelvű címnegyed-adatmezők és a tanulmányfüggő futó fejlécek beépültek. Az OJS-plugin 1.9.2.0 forrása tartalmazza a rövid OMI indítót és a későbbi natív impresszum- és szerkesztőbizottsági változtatásokat. A terjesztés és az éles elfogadás külön igazolandó.",
    [
      [
        "Teljes folyóiratszám munkafolyamata",
        "Tervezett OJS-lapszám importja, tanulmányonkénti szerzők és jegyzetek, PDF-oldaltartományok ellenőrzése, jóváhagyott PDF/HTML/JATS Article Authoring fájlok és nyomtatott oldalszámok átadása.",
        "publication-editor"
      ],
      [
        "Többnyelvű kiadványsablonok",
        "Újrafelhasználható impresszum és szerkesztőbizottsági shortcode-ok, mezőnkénti nyelvválasztás, tanulmány-DOI, cím, szerzők és nyomtatott oldalszám az élőfejben.",
        "publication-editor"
      ],
      [
        "Adaptív memóriakezelés",
        "Közös, korlátozott származtatott gyorsítótár, három teljesítményüzemmód, diagnosztika és háttérbe kerüléskor ürítés. Androidon a rendszer elérhető RAM-ja is mérhető; a tényleges eszköz- és WebView-mérések még hátravannak.",
        "performance-and-memory"
      ],
      [
        "Közvetlen jegyzetbeszúrás és formázott előnézet",
        "Az állandó eszköztárikon a kurzornál vagy kijelölt szöveghez szúr be jegyzetet. A hivatkozás fölé vitt egér vagy billentyűzetfókusz megjeleníti a formázott tartalmat; kattintással szerkeszthető.",
        "notes-and-formatting"
      ],
      [
        "Bővített Word-kompatibilitás",
        "Natív DrawingML képgeometria és vágás, OMML képletek, szemantikus REF mezők, privát Word-megjegyzések és visszafordítható változtatások, egységes tartalmi nyelvkódok. Az összetett dokumentumok eredményét ellenőrizni kell.",
        "updates/2026-11-25"
      ],
      [
        "EuroOffice: különálló szolgáltatás",
        "Megszűnt az EuroOffice beágyazása és API-kapcsolata a Stúdióban. A DOCX-import és -export megmarad; az általános Office-szerkesztő külön üzemel és frissül.",
        "updates/2026-11-23"
      ],
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
    "Studio-Entwicklungsupdate — 27. November 2026",
    "RC5 ist im Studio-Quellcode integriert. Vollständiger Import geplanter OJS-Ausgaben, beitragsbezogene Autorenbearbeitung, mehrsprachige Titelei-Felder und beitragsabhängige Kolumnentitel sind integriert. OJS-Plugin-Quellstand 1.9.2.0 umfasst den kompakten OMI-Start und spätere native Impressums-/Redaktionsänderungen. Vertrieb und Praxisabnahme bleiben getrennt.",
    [
      [
        "Vollständiger Zeitschriftenworkflow",
        "Geplante OJS-Ausgaben importieren, Autoren und Anmerkungen je Beitrag bearbeiten, PDF-Seitenbereiche prüfen und bestätigte PDF/HTML/JATS Article Authoring-Dateien und Seitenzahlen übertragen.",
        "publication-editor"
      ],
      [
        "Mehrsprachige Publikationsvorlagen",
        "Wiederverwendbare Impressums- und Redaktionsfelder, Sprachwahl je Feld, Beitrags-DOI, Titel, Autoren und gedruckte Seitenzahl im Kolumnentitel.",
        "publication-editor"
      ],
      [
        "Adaptive Speicherverwaltung",
        "Gemeinsames begrenztes Cache-Budget, drei Leistungsmodi, Diagnose und Cache-Leerung im Hintergrund. Android ermittelt verfügbaren Systemspeicher; Geräte- und WebView-Messungen stehen aus.",
        "performance-and-memory"
      ],
      [
        "Direkte Anmerkungen und formatierte Vorschau",
        "Anmerkungen über die dauerhaft verfügbare Werkzeugleistenaktion am Cursor oder an ausgewähltem Text einfügen. Mauszeiger oder Tastaturfokus zeigen formatierte Inhalte; Klick öffnet die Bearbeitung.",
        "notes-and-formatting"
      ],
      [
        "Erweiterte Word-Interoperabilität",
        "Native DrawingML-Bildgeometrie und Zuschnitt, OMML-Formeln, semantische REF-Felder, private Word-Kommentare und reversible Änderungen sowie konsistente Inhaltssprachcodes. Komplexe Dokumente nach dem Austausch prüfen.",
        "updates/2026-11-25"
      ],
      [
        "EuroOffice als eigenständiger Dienst",
        "Der eingebettete EuroOffice-Editor und seine Studio-API-Anbindung wurden entfernt. DOCX-Import und -Export bleiben erhalten; Office wird unabhängig betrieben und aktualisiert.",
        "updates/2026-11-23"
      ],
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
    <Link to="/docs/studio/updates/2026-11-27">{title}</Link>
  </section>;
}

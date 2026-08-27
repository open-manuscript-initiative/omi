import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const COPY = {
  en: {
    title: 'Support Open Manuscript Initiative',
    description: 'Help sustain open, interoperable scholarly publishing infrastructure.',
    intro: 'Open Manuscript Initiative develops open-source tools and specifications for writing, reviewing, editing and publishing scholarly manuscripts. Support helps keep this infrastructure independent, maintainable and freely available to the scholarly community.',
    heading: 'What your support sustains',
    items: [
      ['Infrastructure', 'Hosting, build infrastructure, storage, monitoring and reliable public services.'],
      ['Cross-platform releases', 'Code signing, desktop releases, Android and iOS/iPadOS distribution and platform maintenance.'],
      ['Open integrations', 'OJS, OMP, ORCID, ROR and other interoperable scholarly publishing workflows.'],
      ['Accessibility and localization', 'Accessible interfaces, documentation and high-quality multilingual support.'],
      ['Long-term maintenance', 'Security updates, dependency maintenance, testing, documentation and preservation of open formats.'],
    ],
    sponsorTitle: 'Sponsor the project',
    sponsorText: 'The preferred sponsorship channel is GitHub Sponsors. Institutional sponsorship and collaboration are also welcome.',
    github: 'Support OMI on GitHub Sponsors',
    partnershipTitle: 'Institutional and research partnerships',
    partnershipText: 'Universities, libraries, scholarly societies, publishers, research infrastructures and funders can also work with OMI through pilots, research cooperation, infrastructure support and funded consortia.',
    partnershipButton: 'Funding & Partnerships',
    grantButton: 'Grant Readiness Pack',
    contact: 'For institutional sponsorship, infrastructure support or partnership proposals, contact the Open Manuscript Initiative through the project website or GitHub organization.',
    transparency: 'Sponsorship supports the development and operation of the open-source project. It does not buy influence over editorial, peer-review or scholarly decisions.',
  },
  hu: {
    title: 'Az Open Manuscript Initiative támogatása',
    description: 'Segítsen fenntartani a nyílt és interoperábilis tudományos publikációs infrastruktúrát.',
    intro: 'Az Open Manuscript Initiative nyílt forráskódú eszközöket és specifikációkat fejleszt tudományos kéziratok írásához, lektorálásához, szerkesztéséhez és publikálásához. A támogatás hozzájárul ahhoz, hogy ez az infrastruktúra független, karbantartható és szabadon hozzáférhető maradjon a tudományos közösség számára.',
    heading: 'Mire fordítjuk a támogatást?',
    items: [
      ['Infrastruktúra', 'Tárhely, build-infrastruktúra, adattárolás, felügyelet és megbízható nyilvános szolgáltatások.'],
      ['Többplatformos kiadások', 'Kódaláírás, asztali kiadások, Android- és iOS/iPadOS-terjesztés, valamint platformkarbantartás.'],
      ['Nyílt integrációk', 'OJS-, OMP-, ORCID-, ROR- és más interoperábilis tudományos publikációs munkafolyamatok.'],
      ['Akadálymentesség és lokalizáció', 'Akadálymentes felületek, dokumentáció és magas minőségű többnyelvű támogatás.'],
      ['Hosszú távú karbantartás', 'Biztonsági frissítések, függőségek karbantartása, tesztelés, dokumentáció és a nyílt formátumok megőrzése.'],
    ],
    sponsorTitle: 'A projekt támogatása',
    sponsorText: 'Az elsődleges támogatási csatorna a GitHub Sponsors. Intézményi támogatást és együttműködést is örömmel fogadunk.',
    github: 'Az OMI támogatása a GitHub Sponsorson',
    partnershipTitle: 'Intézményi és kutatási partnerségek',
    partnershipText: 'Egyetemek, könyvtárak, tudományos társaságok, kiadók, kutatási infrastruktúrák és támogatók pilotokkal, kutatási együttműködéssel, infrastruktúra-támogatással és pályázati konzorciumokban is kapcsolódhatnak az OMI-hoz.',
    partnershipButton: 'Finanszírozás és partnerségek',
    grantButton: 'Pályázati előkészítő csomag',
    contact: 'Intézményi támogatás, infrastruktúra-hozzájárulás vagy együttműködési javaslat esetén az Open Manuscript Initiative a projekt honlapján vagy GitHub-szervezetén keresztül érhető el.',
    transparency: 'A támogatás a nyílt forráskódú projekt fejlesztését és működtetését szolgálja. Nem biztosít befolyást szerkesztői, lektori vagy tudományos döntésekre.',
  },
  de: {
    title: 'Open Manuscript Initiative unterstützen',
    description: 'Helfen Sie, eine offene und interoperable Infrastruktur für wissenschaftliches Publizieren dauerhaft zu erhalten.',
    intro: 'Die Open Manuscript Initiative entwickelt quelloffene Werkzeuge und Spezifikationen für das Schreiben, Begutachten, Redigieren und Publizieren wissenschaftlicher Manuskripte. Unterstützung hilft, diese Infrastruktur unabhängig, wartbar und für die wissenschaftliche Gemeinschaft frei verfügbar zu halten.',
    heading: 'Was Ihre Unterstützung ermöglicht',
    items: [
      ['Infrastruktur', 'Hosting, Build-Infrastruktur, Speicherung, Monitoring und zuverlässige öffentliche Dienste.'],
      ['Plattformübergreifende Veröffentlichungen', 'Code-Signierung, Desktop-Releases, Android- und iOS/iPadOS-Verteilung sowie Plattformpflege.'],
      ['Offene Integrationen', 'OJS-, OMP-, ORCID-, ROR- und weitere interoperable Workflows für wissenschaftliches Publizieren.'],
      ['Barrierefreiheit und Lokalisierung', 'Barrierefreie Oberflächen, Dokumentation und hochwertige mehrsprachige Unterstützung.'],
      ['Langfristige Wartung', 'Sicherheitsupdates, Abhängigkeitspflege, Tests, Dokumentation und Erhaltung offener Formate.'],
    ],
    sponsorTitle: 'Projekt unterstützen',
    sponsorText: 'Der bevorzugte Sponsoring-Kanal ist GitHub Sponsors. Institutionelle Förderung und Zusammenarbeit sind ebenfalls willkommen.',
    github: 'OMI über GitHub Sponsors unterstützen',
    partnershipTitle: 'Institutionelle und Forschungspartnerschaften',
    partnershipText: 'Universitäten, Bibliotheken, Fachgesellschaften, Verlage, Forschungsinfrastrukturen und Förderer können über Pilotprojekte, Forschungskooperation, Infrastrukturunterstützung und geförderte Konsortien mit OMI zusammenarbeiten.',
    partnershipButton: 'Förderung & Partnerschaften',
    grantButton: 'Grant Readiness Pack',
    contact: 'Für institutionelle Förderung, Infrastrukturunterstützung oder Kooperationsvorschläge erreichen Sie die Open Manuscript Initiative über die Projektwebsite oder die GitHub-Organisation.',
    transparency: 'Sponsoring unterstützt Entwicklung und Betrieb des Open-Source-Projekts. Es gewährt keinen Einfluss auf redaktionelle, Peer-Review- oder wissenschaftliche Entscheidungen.',
  },
} as const;

export default function SupportPage() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale === 'hu' || i18n.currentLocale === 'de' ? i18n.currentLocale : 'en';
  const t = COPY[locale];

  return (
    <Layout title={t.title} description={t.description}>
      <Head>
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
      </Head>
      <main className="container margin-vert--xl">
        <div style={{maxWidth: 880, margin: '0 auto'}}>
          <header className="margin-bottom--lg">
            <h1>{t.title}</h1>
            <p className="hero__subtitle">{t.description}</p>
            <p>{t.intro}</p>
          </header>

          <section className="margin-bottom--xl">
            <h2>{t.heading}</h2>
            <div className="row">
              {t.items.map(([title, body]) => (
                <div className="col col--6 margin-bottom--md" key={title}>
                  <div className="card" style={{height: '100%'}}>
                    <div className="card__body">
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card margin-bottom--lg">
            <div className="card__body">
              <h2>{t.sponsorTitle}</h2>
              <p>{t.sponsorText}</p>
              <p>
                <a className="button button--primary button--lg" href="https://github.com/sponsors/open-manuscript-initiative">
                  {t.github}
                </a>
              </p>
              <p>{t.contact}</p>
            </div>
          </section>

          <section className="card margin-bottom--lg">
            <div className="card__body">
              <h2>{t.partnershipTitle}</h2>
              <p>{t.partnershipText}</p>
              <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
                <a className="button button--secondary" href="/docs/governance/funding-and-partnerships">{t.partnershipButton}</a>
                <a className="button button--secondary" href="/docs/governance/grant-readiness-pack">{t.grantButton}</a>
              </div>
            </div>
          </section>

          <aside className="alert alert--secondary" role="note">
            {t.transparency}
          </aside>
        </div>
      </main>
    </Layout>
  );
}

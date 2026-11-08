import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {supportModel} from '../model/supportModel';
import styles from './support.module.css';

const COPY = {
  en: {
    title: 'Support Open Manuscript Initiative',
    description: 'Free scholarly authoring, sustained by voluntary contributions and clearly scoped services.',
    intro: 'Open Manuscript Studio is free and open source. Maintaining the editor, security updates, cross-platform releases and shared infrastructure takes continuing work. If OMI helps you, an optional contribution can help sustain it.',
    freeTitle: 'The editor remains free',
    freeText: 'Writing, opening and saving your manuscripts, core import and export, open formats and self-hosting remain free. A contribution is not required to use the editor and does not change how your manuscripts are handled. Security and data-loss fixes are addressed regardless of support.',
    capacity: 'Costly shared services such as hosted storage, machine translation and OCR may have clearly stated capacity limits. These must preserve your ability to download and export your own manuscripts.',
    modelStatus: 'Starting framework adopted on 8 November 2026. We will review the amounts and scope against actual costs, available time and experience. Changes will be explained publicly and agreed service terms will be respected.',
    individualTitle: 'Individual support',
    individualText: 'Choose an amount that suits you. These are suggested HUF reference amounts, not a fee for using Studio.',
    tiers: ['Supporter', 'Regular supporter', 'Sustaining supporter'],
    tierDescriptions: ['Help keep the project running.', 'Help with maintenance and testing.', 'Help sustain long-term development.'],
    perMonth: 'per month',
    oneTime: 'Suggested one-time contributions',
    custom: 'Other amounts are welcome.',
    paymentText: 'GitHub Sponsors is the project’s linked support channel. Check the recipient, available tiers, currency, recurrence and cancellation on GitHub before confirming. GitHub tiers are in USD; the HUF figures here are not a guaranteed conversion or a local card-payment checkout.',
    github: 'View OMI on GitHub Sponsors',
    institutionTitle: 'Institutional contributions',
    institutionText: 'Universities, libraries, journals and publishers can help fund shared maintenance through an annual contribution. We are starting with the institutional supporter framework; higher levels are planned for later expansion.',
    institutionHeaders: ['Level', 'Annual HUF reference', 'Introduction'],
    institutionTiers: ['Institutional supporter', 'Sustaining partner', 'Lead sustaining partner'],
    institutionStatus: ['Starting framework', 'Later phase', 'Later phase'],
    institutionTerms: 'A contribution supports the common project. It is not a per-user software licence and does not automatically include hosting, installation, support hours, on-call cover or a development deadline. Services require a separate agreement.',
    institutionButton: 'Discuss institutional support',
    servicesTitle: 'Services by agreement',
    servicesText: 'We are preparing a limited institutional pilot for deployment, OJS/OMP connection, training and maintenance. Scope, capacity and delivery are agreed before work starts.',
    serviceHeaders: ['Service', 'Planning scope', 'HUF reference'],
    services: [
      ['Introduction assessment', 'Goals, environment and connections; 2 hours'],
      ['Basic deployment', 'One prepared environment, configuration and handover; 6 hours'],
      ['OJS or OMP connection', 'Assessment and trial of one existing installation; 4 hours'],
      ['Online training', '2-hour session and 1 hour of preparation'],
    ],
    servicePricing: 'These are planning amounts excluding VAT, not final consumer prices or an instant order. A written quote will identify the provider, applicable VAT or exemption, final amount and exact scope. Hosting, paid APIs, licences, migration and bespoke development are assessed separately.',
    hourly: 'Additional professional work, by prior agreement',
    perHour: 'per hour',
    monthly: 'Illustrative monthly care starting point',
    monthlyTerms: 'The monthly example includes two hours of combined maintenance and assistance, with assumed infrastructure and backup costs. Actual costs determine the quote. No unlimited storage, unlimited assistance, 24-hour cover or automatic availability guarantee is included.',
    pilot: 'The initial pilot is limited to two institutions. Contracted service begins only with verified deployment, updates, backups and restoration, and an agreed data-handling and exit process.',
    serviceButton: 'Discuss a service pilot',
    fundsTitle: 'What contributions sustain',
    funds: [
      ['Infrastructure and releases', 'Hosting, storage, backups, monitoring, build infrastructure, signing and platform maintenance.'],
      ['Maintenance and access', 'Security updates, testing, documentation, accessibility and localization.'],
      ['Open workflows', 'Open formats, specifications and interoperable OJS, OMP, ORCID and other scholarly integrations.'],
    ],
    transparencyTitle: 'Transparency and independence',
    transparency: 'We commit to a short quarterly public summary of income, operating expenses and completed work. Supporter names and logos appear only with consent. Support does not buy influence over editorial, peer-review or scholarly decisions, or exclusive control of the roadmap.',
    review: 'The first review follows the initial 90-day rollout. We will compare recurring income, actual expenses, maintenance time and customer workload before expanding the offer. Grants and funded collaborations support larger development alongside this recurring base.',
    details: 'Read the sustainability model',
    partnershipTitle: 'Research and funding partnerships',
    partnershipText: 'OMI also welcomes research cooperation, infrastructure contributions, evaluation and funded consortia. These complement community support and separately commissioned services.',
    partnershipButton: 'Funding & Partnerships',
    grantButton: 'Grant Readiness Pack',
    contact: 'Contact the project through the Open Manuscript Initiative GitHub organization to discuss institutional contributions or service scope. This page does not collect card details or start a recurring payment.',
  },
  hu: {
    title: 'Az Open Manuscript Initiative támogatása',
    description: 'Ingyenes kéziratszerkesztés, önkéntes támogatással és pontosan meghatározott szolgáltatásokkal fenntartva.',
    intro: 'Az Open Manuscript Studio ingyenesen használható, nyílt forráskódú kéziratszerkesztő. A szerkesztő, a biztonsági frissítések, a többplatformos kiadások és a közösségi infrastruktúra fenntartása folyamatos munkát igényel. Ha hasznosnak találod az OMI-t, önkéntes hozzájárulással segítheted a folytatását.',
    freeTitle: 'A szerkesztő ingyenes marad',
    freeText: 'A kéziratok írása, megnyitása és mentése, az alapvető import és export, a nyílt formátumok és a saját szerverre telepíthető szoftver ingyenes marad. A támogatás nem feltétele a használatnak, és nem befolyásolja a kézirataid kezelését. A biztonsági és adatvesztési hibákat a támogatástól függetlenül kezeljük.',
    capacity: 'A költséges központi szolgáltatásoknak, például a tárhelynek, a gépi fordításnak és az OCR-nek előre látható kapacitási kerete lehet. Ez nem akadályozhatja saját kézirataid letöltését és exportját.',
    modelStatus: '2026. november 8-án elfogadott induló keret. Az összegeket és a vállalásokat a tényleges költségek, a rendelkezésre álló idő és a tapasztalatok alapján felülvizsgáljuk. A változásokat nyilvánosan jelezzük, a megkötött szolgáltatási megállapodásokat tiszteletben tartjuk.',
    individualTitle: 'Egyéni támogatás',
    individualText: 'Válassz számodra megfelelő összeget. Az alábbiak javasolt forintösszegek, nem a Studio használati díjai.',
    tiers: ['Támogató', 'Rendszeres támogató', 'Kiemelt támogató'],
    tierDescriptions: ['Hozzájárulás a folyamatos működéshez.', 'Hozzájárulás a karbantartáshoz és a teszteléshez.', 'Hozzájárulás a hosszú távú fejlesztéshez.'],
    perMonth: 'havonta',
    oneTime: 'Javasolt egyszeri támogatás',
    custom: 'Más összeggel is segíthetsz.',
    paymentText: 'A projekt honlapjáról elérhető támogatási csatorna a GitHub Sponsors. Jóváhagyás előtt a GitHubon ellenőrizd a kedvezményezettet, az elérhető szinteket, a pénznemet, az ismétlődést és a lemondást. A GitHub szintjei USD-ben vannak megadva; az itteni forintösszegek nem jelentenek garantált átváltást vagy helyi bankkártyás fizetési felületet.',
    github: 'Az OMI megtekintése a GitHub Sponsorson',
    institutionTitle: 'Intézményi hozzájárulás',
    institutionText: 'Egyetemek, könyvtárak, folyóiratok és kiadók éves hozzájárulással segíthetik a közös karbantartást. Indulásként az intézményi támogatói keretre építünk; a magasabb szintek későbbi bővítésre készülnek.',
    institutionHeaders: ['Szint', 'Éves irányadó összeg', 'Bevezetés'],
    institutionTiers: ['Intézményi támogató', 'Fenntartó partner', 'Kiemelt fenntartó'],
    institutionStatus: ['Induló keret', 'Későbbi ütem', 'Későbbi ütem'],
    institutionTerms: 'A hozzájárulás a közös projektet támogatja. Nem felhasználónkénti licencdíj, és önmagában nem tartalmaz tárhelyet, telepítést, segítségnyújtási órakeretet, ügyeletet vagy fejlesztési határidőt. Ezekhez külön szolgáltatási megállapodás szükséges.',
    institutionButton: 'Intézményi hozzájárulás egyeztetése',
    servicesTitle: 'Szolgáltatások külön megállapodással',
    servicesText: 'Korlátozott intézményi pilotot készítünk elő telepítéshez, OJS/OMP-kapcsolódáshoz, oktatáshoz és karbantartáshoz. A feladatot, a kapacitást és a teljesítést a munka kezdete előtt egyeztetjük.',
    serviceHeaders: ['Szolgáltatás', 'Tervezési keret', 'Irányadó összeg'],
    services: [
      ['Bevezetési felmérés', 'Célok, környezet és kapcsolatok áttekintése; 2 óra'],
      ['Alaptelepítés', 'Egy előkészített környezet, beállítás és átadás; 6 óra'],
      ['OJS- vagy OMP-kapcsolódás', 'Egy meglévő telepítés felmérése és próbája; 4 óra'],
      ['Online oktatás', '2 óra foglalkozás és 1 óra felkészülés'],
    ],
    servicePricing: 'Az összegek áfa nélküli tervezési értékek, nem végleges fogyasztói árak vagy azonnal megrendelhető csomagok. Az írásos ajánlat tartalmazza a szolgáltatót, az alkalmazandó áfát vagy mentességet, a végösszeget és a pontos feladatot. A tárhely, a fizetős API-k, a licencek, a migráció és az egyedi fejlesztés külön felmérés tárgya.',
    hourly: 'További szakmai munka, előzetes egyeztetéssel',
    perHour: 'óránként',
    monthly: 'Havi gondozás számítási kiindulópontja',
    monthlyTerms: 'A havi példa két óra közös karbantartási és segítségnyújtási kerettel, valamint feltételezett infrastruktúra- és mentési költséggel számol. Az ajánlat a tényleges költségekre épül. Nem tartalmaz korlátlan tárhelyet, korlátlan segítségnyújtást, 24 órás ügyeletet vagy automatikus rendelkezésre állási garanciát.',
    pilot: 'Az induló pilot legfeljebb két intézményt fogad. Szerződéses szolgáltatás ellenőrzött telepítés, frissítés, mentés és visszaállítás, valamint egyeztetett adatkezelési és kilépési folyamat mellett indulhat.',
    serviceButton: 'Szolgáltatási pilot egyeztetése',
    fundsTitle: 'Mire fordítjuk a hozzájárulásokat?',
    funds: [
      ['Infrastruktúra és kiadások', 'Tárhely, adattárolás, mentés, felügyelet, build-infrastruktúra, aláírás és platformkarbantartás.'],
      ['Karbantartás és hozzáférés', 'Biztonsági frissítések, tesztelés, dokumentáció, akadálymentesség és fordítások.'],
      ['Nyílt munkafolyamatok', 'Nyílt formátumok, specifikációk, valamint OJS-, OMP-, ORCID- és más tudományos integrációk.'],
    ],
    transparencyTitle: 'Átláthatóság és függetlenség',
    transparency: 'Negyedévente rövid nyilvános beszámolót vállalunk a bevételekről, a működési kiadásokról és az elvégzett munkáról. Támogatói név és logó csak hozzájárulással jelenik meg. A támogatás nem biztosít befolyást szerkesztői, lektori vagy tudományos döntésekre, és nem ad kizárólagos irányítást a fejlesztési ütemterv felett.',
    review: 'Az első felülvizsgálat az induló 90 napos bevezetést követi. Bővítés előtt összevetjük a rendszeres bevételt, a tényleges kiadásokat, a karbantartási időt és az ügyfélmunkát. A pályázatok és a finanszírozott együttműködések e rendszeres alap mellett a nagyobb fejlesztéseket segítik.',
    details: 'A fenntartási modell részletei',
    partnershipTitle: 'Kutatási és finanszírozási partnerségek',
    partnershipText: 'Kutatási együttműködés, infrastruktúra-hozzájárulás, értékelés és pályázati konzorcium is kapcsolódhat az OMI-hoz. Ezek kiegészítik a közösségi támogatást és a külön megrendelt szolgáltatásokat.',
    partnershipButton: 'Finanszírozás és partnerségek',
    grantButton: 'Pályázati előkészítő csomag',
    contact: 'Intézményi hozzájárulás vagy szolgáltatási feladat egyeztetéséhez keresd a projektet az Open Manuscript Initiative GitHub-szervezetén keresztül. Ez az oldal nem gyűjt bankkártyaadatot és nem indít ismétlődő fizetést.',
  },
  de: {
    title: 'Open Manuscript Initiative unterstützen',
    description: 'Kostenloses wissenschaftliches Schreiben, getragen von freiwilligen Beiträgen und klar vereinbarten Leistungen.',
    intro: 'Open Manuscript Studio ist kostenlos und quelloffen. Die Pflege des Editors, Sicherheitsupdates, plattformübergreifende Veröffentlichungen und die gemeinsame Infrastruktur erfordern laufende Arbeit. Wenn OMI Ihnen hilft, können Sie die Fortführung freiwillig unterstützen.',
    freeTitle: 'Der Editor bleibt kostenlos',
    freeText: 'Schreiben, Öffnen und Speichern eigener Manuskripte, grundlegender Import und Export, offene Formate und der Betrieb auf dem eigenen Server bleiben kostenlos. Eine Unterstützung ist keine Nutzungsvoraussetzung und beeinflusst die Behandlung Ihrer Manuskripte nicht. Sicherheits- und Datenverlustfehler werden unabhängig von Beiträgen bearbeitet.',
    capacity: 'Kostenintensive gemeinsame Dienste wie gehosteter Speicher, maschinelle Übersetzung und OCR können klar ausgewiesene Kapazitätsgrenzen haben. Das Herunterladen und Exportieren eigener Manuskripte muss dabei erhalten bleiben.',
    modelStatus: 'Am 8. November 2026 angenommener Ausgangsrahmen. Beträge und Leistungsumfang werden anhand tatsächlicher Kosten, verfügbarer Zeit und Erfahrungen überprüft. Änderungen werden öffentlich erläutert; vereinbarte Leistungsbedingungen bleiben maßgeblich.',
    individualTitle: 'Individuelle Unterstützung',
    individualText: 'Wählen Sie einen passenden Betrag. Dies sind vorgeschlagene HUF-Richtwerte, keine Gebühr für die Nutzung von Studio.',
    tiers: ['Unterstützer', 'Regelmäßiger Unterstützer', 'Fördernder Unterstützer'],
    tierDescriptions: ['Beitrag zum laufenden Betrieb.', 'Beitrag zu Wartung und Tests.', 'Beitrag zur langfristigen Entwicklung.'],
    perMonth: 'pro Monat',
    oneTime: 'Vorgeschlagene einmalige Beiträge',
    custom: 'Andere Beträge sind ebenfalls willkommen.',
    paymentText: 'GitHub Sponsors ist der auf der Projektwebsite verlinkte Unterstützungskanal. Prüfen Sie dort vor der Bestätigung Empfänger, verfügbare Stufen, Währung, Wiederholung und Kündigung. GitHub-Stufen sind in USD angegeben; die HUF-Beträge hier sind keine garantierte Umrechnung und keine lokale Kartenzahlungsseite.',
    github: 'OMI auf GitHub Sponsors ansehen',
    institutionTitle: 'Institutionelle Beiträge',
    institutionText: 'Universitäten, Bibliotheken, Zeitschriften und Verlage können die gemeinsame Wartung durch jährliche Beiträge fördern. Wir beginnen mit dem Rahmen für institutionelle Unterstützer; höhere Stufen sind für eine spätere Erweiterung vorgesehen.',
    institutionHeaders: ['Stufe', 'Jährlicher HUF-Richtwert', 'Einführung'],
    institutionTiers: ['Institutioneller Unterstützer', 'Förderpartner', 'Hauptförderpartner'],
    institutionStatus: ['Ausgangsrahmen', 'Spätere Phase', 'Spätere Phase'],
    institutionTerms: 'Ein Beitrag unterstützt das gemeinsame Projekt. Er ist keine Softwarelizenz pro Nutzer und umfasst nicht automatisch Hosting, Installation, Supportstunden, Bereitschaft oder einen Entwicklungstermin. Leistungen erfordern eine gesonderte Vereinbarung.',
    institutionButton: 'Institutionelle Unterstützung besprechen',
    servicesTitle: 'Leistungen nach Vereinbarung',
    servicesText: 'Wir bereiten einen begrenzten institutionellen Pilotbetrieb für Installation, OJS/OMP-Anbindung, Schulung und Wartung vor. Umfang, Kapazität und Durchführung werden vor Arbeitsbeginn vereinbart.',
    serviceHeaders: ['Leistung', 'Planungsumfang', 'HUF-Richtwert'],
    services: [
      ['Einführungsanalyse', 'Ziele, Umgebung und Anbindungen; 2 Stunden'],
      ['Grundinstallation', 'Eine vorbereitete Umgebung, Einrichtung und Übergabe; 6 Stunden'],
      ['OJS- oder OMP-Anbindung', 'Analyse und Erprobung einer vorhandenen Installation; 4 Stunden'],
      ['Online-Schulung', '2 Stunden Schulung und 1 Stunde Vorbereitung'],
    ],
    servicePricing: 'Die Beträge sind Planungswerte ohne Umsatzsteuer, keine endgültigen Verbraucherpreise oder sofort bestellbaren Pakete. Ein schriftliches Angebot nennt Anbieter, geltende Umsatzsteuer oder Befreiung, Endbetrag und genauen Umfang. Hosting, kostenpflichtige APIs, Lizenzen, Migration und individuelle Entwicklung werden gesondert bewertet.',
    hourly: 'Weitere fachliche Arbeit nach vorheriger Vereinbarung',
    perHour: 'pro Stunde',
    monthly: 'Rechenbeispiel für monatliche Betreuung',
    monthlyTerms: 'Das Monatsbeispiel enthält zwei Stunden für Wartung und Unterstützung sowie angenommene Infrastruktur- und Sicherungskosten. Das Angebot richtet sich nach den tatsächlichen Kosten. Unbegrenzter Speicher, unbegrenzte Unterstützung, 24-Stunden-Bereitschaft oder automatische Verfügbarkeitsgarantien sind nicht enthalten.',
    pilot: 'Der erste Pilotbetrieb ist auf zwei Institutionen begrenzt. Vertragliche Betreuung beginnt erst mit geprüfter Installation, Aktualisierung, Sicherung und Wiederherstellung sowie vereinbarten Verfahren für Datenverarbeitung und Beendigung.',
    serviceButton: 'Dienstleistungspilot besprechen',
    fundsTitle: 'Was die Beiträge ermöglichen',
    funds: [
      ['Infrastruktur und Veröffentlichungen', 'Hosting, Speicher, Sicherungen, Überwachung, Build-Infrastruktur, Signierung und Plattformpflege.'],
      ['Wartung und Zugang', 'Sicherheitsupdates, Tests, Dokumentation, Barrierefreiheit und Übersetzungen.'],
      ['Offene Arbeitsabläufe', 'Offene Formate, Spezifikationen sowie interoperable OJS-, OMP-, ORCID- und weitere wissenschaftliche Anbindungen.'],
    ],
    transparencyTitle: 'Transparenz und Unabhängigkeit',
    transparency: 'Wir verpflichten uns zu einem kurzen öffentlichen Quartalsbericht über Einnahmen, Betriebsausgaben und abgeschlossene Arbeiten. Namen und Logos von Unterstützern erscheinen nur mit Zustimmung. Beiträge gewähren keinen Einfluss auf redaktionelle, Peer-Review- oder wissenschaftliche Entscheidungen und keine ausschließliche Kontrolle über den Entwicklungsplan.',
    review: 'Die erste Überprüfung folgt auf die anfängliche Einführung über 90 Tage. Vor einer Erweiterung vergleichen wir regelmäßige Einnahmen, tatsächliche Ausgaben, Wartungszeit und Kundenaufwand. Fördermittel und finanzierte Kooperationen unterstützen daneben größere Entwicklungen.',
    details: 'Nachhaltigkeitsmodell lesen',
    partnershipTitle: 'Forschungs- und Finanzierungspartnerschaften',
    partnershipText: 'OMI begrüßt auch Forschungskooperationen, Infrastrukturbeiträge, Evaluierungen und geförderte Konsortien. Sie ergänzen die gemeinschaftliche Unterstützung und gesondert beauftragte Leistungen.',
    partnershipButton: 'Finanzierung und Partnerschaften',
    grantButton: 'Grant Readiness Pack',
    contact: 'Besprechen Sie institutionelle Beiträge oder Leistungsumfang mit dem Projekt über die GitHub-Organisation der Open Manuscript Initiative. Diese Seite erfasst keine Kartendaten und startet keine wiederkehrende Zahlung.',
  },
} as const;

export default function SupportPage() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale === 'hu' || i18n.currentLocale === 'de' ? i18n.currentLocale : 'en';
  const t = COPY[locale];
  const amount = (value: number) => new Intl.NumberFormat(locale, {
    style: 'currency', currency: 'HUF', maximumFractionDigits: 0,
  }).format(value);
  const contactUrl = 'https://github.com/open-manuscript-initiative';

  return (
    <Layout title={t.title} description={t.description}>
      <Head>
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
      </Head>
      <main className="container margin-vert--xl">
        <div className={styles.content}>
          <header className="margin-bottom--lg">
            <h1>{t.title}</h1>
            <p className="hero__subtitle">{t.description}</p>
            <p>{t.intro}</p>
            <p className={styles.muted}>{t.modelStatus}</p>
          </header>

          <section className="alert alert--success margin-bottom--xl" aria-labelledby="free-editor">
            <h2 id="free-editor">{t.freeTitle}</h2>
            <p>{t.freeText}</p>
            <p>{t.capacity}</p>
          </section>

          <section className="margin-bottom--xl" aria-labelledby="individual-support">
            <h2 id="individual-support">{t.individualTitle}</h2>
            <p>{t.individualText}</p>
            <div className={styles.grid}>
              {supportModel.individualMonthlyHuf.map((value, index) => (
                <article className="card" key={value}>
                  <div className="card__body">
                    <h3>{t.tiers[index]}</h3>
                    <p className={styles.amount}>{amount(value)}</p>
                    <p className={styles.muted}>{t.perMonth}</p>
                    <p>{t.tierDescriptions[index]}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="margin-top--md"><strong>{t.oneTime}:</strong>{' '}
              {supportModel.suggestedOneTimeHuf.map(amount).join(' / ')}. {t.custom}
            </p>
            <p>{t.paymentText}</p>
            <div className={styles.actions}>
              <a className="button button--primary" href="https://github.com/sponsors/open-manuscript-initiative">{t.github}</a>
            </div>
          </section>

          <section className="margin-bottom--xl" aria-labelledby="institutional-support">
            <h2 id="institutional-support">{t.institutionTitle}</h2>
            <p>{t.institutionText}</p>
            <div className={styles.tableScroll} role="region" aria-labelledby="institutional-support" tabIndex={0}>
              <table className={styles.table}>
                <thead><tr>{t.institutionHeaders.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
                <tbody>{supportModel.institutionalAnnualHuf.map((value, index) => (
                  <tr key={value}>
                    <th scope="row">{t.institutionTiers[index]}</th>
                    <td className={styles.money}>{amount(value)}</td>
                    <td>{t.institutionStatus[index]}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <p>{t.institutionTerms}</p>
            <div className={styles.actions}><a className="button button--secondary" href={contactUrl}>{t.institutionButton}</a></div>
          </section>

          <section className="margin-bottom--xl" aria-labelledby="services">
            <h2 id="services">{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
            <div className={styles.tableScroll} role="region" aria-labelledby="services" tabIndex={0}>
              <table className={styles.table}>
                <caption>{t.servicePricing}</caption>
                <thead><tr>{t.serviceHeaders.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
                <tbody>{t.services.map(([name, scope], index) => (
                  <tr key={name}><th scope="row">{name}</th><td>{scope}</td><td className={styles.money}>{amount(supportModel.servicesHuf[index])}</td></tr>
                ))}</tbody>
              </table>
            </div>
            <p><strong>{t.hourly}:</strong> {amount(supportModel.additionalHourlyHuf)} {t.perHour}.</p>
            <h3>{t.monthly}</h3>
            <p className={styles.amount}>{amount(supportModel.monthlyCareHuf)} <span className={styles.muted}>{t.perMonth}</span></p>
            <p>{t.monthlyTerms}</p>
            <p>{t.pilot}</p>
            <div className={styles.actions}><a className="button button--secondary" href={contactUrl}>{t.serviceButton}</a></div>
          </section>

          <section className="margin-bottom--xl" aria-labelledby="use-of-funds">
            <h2 id="use-of-funds">{t.fundsTitle}</h2>
            <div className={styles.grid}>{t.funds.map(([title, body]) => (
              <article className="card" key={title}><div className="card__body"><h3>{title}</h3><p>{body}</p></div></article>
            ))}</div>
          </section>

          <section className="margin-bottom--xl" aria-labelledby="transparency">
            <h2 id="transparency">{t.transparencyTitle}</h2>
            <p>{t.transparency}</p>
            <p>{t.review}</p>
            <Link to="/docs/governance/sustainability-model">{t.details}</Link>
          </section>

          <section className="card margin-bottom--lg" aria-labelledby="partnerships">
            <div className="card__body">
              <h2 id="partnerships">{t.partnershipTitle}</h2>
              <p>{t.partnershipText}</p>
              <div className={styles.actions}>
                <Link className="button button--secondary" to="/docs/governance/funding-and-partnerships">{t.partnershipButton}</Link>
                <Link className="button button--secondary" to="/docs/governance/grant-readiness-pack">{t.grantButton}</Link>
              </div>
            </div>
          </section>
          <p className={styles.muted}>{t.contact}</p>
        </div>
      </main>
    </Layout>
  );
}

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
    description: 'Free scholarly software and self-hosting, supported by voluntary contributions and optional professional institutional services.',
    intro: 'Open Manuscript Studio and independently installed OMI server software are free and open source. Voluntary contributions sustain the public project; organizations may separately commission professional deployment and operational support. No payment is required to use the software.',
    freeTitle: 'The editor remains free',
    freeText: 'Writing, opening, saving, importing and exporting your manuscripts, open formats and independent self-hosting remain free. You may install and update the server yourself without per-user or per-server licence fees. Contributions and paid services do not affect the treatment of manuscripts or access to security and data-loss fixes.',
    capacity: 'Costly shared services such as hosted storage, machine translation and OCR may have clearly stated capacity limits. These must preserve your ability to download and export your own manuscripts.',
    modelStatus: 'Starting framework adopted on 8 November 2026; deployment and service examples clarified on 9 November. EUR amounts are non-binding planning references, reviewed against actual costs and capacity. Existing signed service terms remain in force.',
    individualTitle: 'Individual support',
    individualText: 'Choose an amount that suits you. These are suggested EUR reference amounts, not a fee for using Studio.',
    tiers: ['Supporter', 'Regular supporter', 'Sustaining supporter'],
    tierDescriptions: ['Help keep the project running.', 'Help with maintenance and testing.', 'Help sustain long-term development.'],
    perMonth: 'per month',
    oneTime: 'Suggested one-time contributions',
    custom: 'Other amounts are welcome.',
    paymentText: 'GitHub Sponsors is the project’s linked support channel. Check the recipient, available tiers, currency, recurrence and cancellation on GitHub before confirming. GitHub tiers are in USD; the EUR figures here are not a guaranteed conversion or a local card-payment checkout.',
    github: 'View OMI on GitHub Sponsors',
    institutionTitle: 'Institutional contributions',
    institutionText: 'Universities, libraries, journals and publishers can help fund shared maintenance through an annual contribution. We are starting with the institutional supporter framework; higher levels are planned for later expansion.',
    institutionHeaders: ['Level', 'Annual EUR reference', 'Introduction'],
    institutionTiers: ['Institutional supporter', 'Sustaining partner', 'Lead sustaining partner'],
    institutionStatus: ['Starting framework', 'Later phase', 'Later phase'],
    institutionTerms: 'A contribution supports the common project. It is not a per-user software licence and does not automatically include hosting, installation, support hours, on-call cover or a development deadline. Services require a separate agreement.',
    institutionButton: 'Discuss institutional support',
    freeDeploymentTitle: 'Install it yourself — free',
    freeDeploymentText: 'The server software, public installation instructions and software updates are available without an installation charge or support subscription. Paid professional installation is a choice, not a licence condition. The central shared service may apply published fair-use and capacity limits.',
    servicesTitle: 'Optional professional institutional deployment',
    servicesText: 'An institution can commission verified installation and handover instead of deploying the server itself. The fee covers expert work, not permission to run OMI. The pilot is initially limited to two institutions.',
    serviceHeaders: ['Service', 'Typical scope', 'One-time EUR reference (excl. VAT)'],
    services: [
      ['Basic institutional deployment', 'Prepared environment, installation, baseline configuration and handover'],
      ['Standard deployment with OJS/OMP integration', 'Basic deployment plus an assessed connection to an existing OJS or OMP installation'],
      ['Complex institutional deployment', 'Multi-system architecture, identity and integration planning, tailored handover after scoping'],
    ],
    fromPrefix: 'From',
    fromSuffix: '',
    servicePricing: 'Illustrative non-binding starting fees, not a checkout or immediately orderable packages. A written offer identifies the legal provider, applicable VAT or exemption, final amount, service scope and exclusions. Hosting, infrastructure, external APIs, third-party licences, migration and bespoke development are separate unless agreed.',
    careTitle: 'Optional annual operational support',
    careText: 'Self-hosted servers need no paid care contract. Institutions may commission a defined level of maintenance and assistance separately from voluntary institutional contributions.',
    careHeaders: ['Care level', 'Annual EUR reference (excl. VAT)'],
    carePlans: ['Basic technical support', 'Institutional operational support', 'Priority support with agreed response arrangements'],
    carePricing: 'An agreement defines response objectives, supported systems, hours, security and backup responsibilities, change approvals, incident handling and exit/data-return conditions. Unlimited labour, storage, 24/7 cover and uptime guarantees are not included by default. Software and security updates remain free for all servers; coordinated automation must respect institutional consent, testing, backup and rollback.',
    serviceButton: 'Discuss institutional deployment or care',
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
    description: 'Ingyenes tudományos szoftver és öntelepítés, önkéntes hozzájárulásokkal és választható intézményi szolgáltatásokkal.',
    intro: 'Az Open Manuscript Studio és az önállóan telepíthető OMI-szerverprogram ingyenes, nyílt forráskódú. Az önkéntes támogatás a közös projektet segíti; az intézmények külön megrendelhetnek professzionális telepítést és üzemeltetési segítséget. A szoftver használatának nem feltétele a fizetés.',
    freeTitle: 'A szerkesztő ingyenes marad',
    freeText: 'A kéziratok írása, megnyitása, mentése, importja és exportja, a nyílt formátumok és az önálló szerverüzemeltetés ingyenes marad. A szerver saját hatáskörben, felhasználónkénti vagy szerverenkénti licencdíj nélkül telepíthető és frissíthető. A támogatás és a fizetős szolgáltatás nem befolyásolja a kéziratok kezelését vagy a biztonsági és adatvesztési javításokhoz való hozzáférést.',
    capacity: 'A költséges központi szolgáltatásoknak, például a tárhelynek, a gépi fordításnak és az OCR-nek előre látható kapacitási kerete lehet. Ez nem akadályozhatja saját kézirataid letöltését és exportját.',
    modelStatus: 'A 2026. november 8-án elfogadott induló keret telepítési és szolgáltatási díjtervezete 2026. november 9-én pontosult. Az euróösszegek nem kötelező erejű, felülvizsgálandó tervezési értékek; a már megkötött megállapodások feltételei változatlanok.',
    individualTitle: 'Egyéni támogatás',
    individualText: 'Válassz számodra megfelelő összeget. Az alábbiak javasolt euróösszegek, nem a Studio használati díjai.',
    tiers: ['Támogató', 'Rendszeres támogató', 'Kiemelt támogató'],
    tierDescriptions: ['Hozzájárulás a folyamatos működéshez.', 'Hozzájárulás a karbantartáshoz és a teszteléshez.', 'Hozzájárulás a hosszú távú fejlesztéshez.'],
    perMonth: 'havonta',
    oneTime: 'Javasolt egyszeri támogatás',
    custom: 'Más összeggel is segíthetsz.',
    paymentText: 'A projekt honlapjáról elérhető támogatási csatorna a GitHub Sponsors. Jóváhagyás előtt a GitHubon ellenőrizd a kedvezményezettet, az elérhető szinteket, a pénznemet, az ismétlődést és a lemondást. A GitHub szintjei USD-ben vannak megadva; az itteni euróösszegek nem jelentenek garantált átváltást vagy helyi bankkártyás fizetési felületet.',
    github: 'Az OMI megtekintése a GitHub Sponsorson',
    institutionTitle: 'Intézményi hozzájárulás',
    institutionText: 'Egyetemek, könyvtárak, folyóiratok és kiadók éves hozzájárulással segíthetik a közös karbantartást. Indulásként az intézményi támogatói keretre építünk; a magasabb szintek későbbi bővítésre készülnek.',
    institutionHeaders: ['Szint', 'Éves irányadó összeg (EUR)', 'Bevezetés'],
    institutionTiers: ['Intézményi támogató', 'Fenntartó partner', 'Kiemelt fenntartó'],
    institutionStatus: ['Induló keret', 'Későbbi ütem', 'Későbbi ütem'],
    institutionTerms: 'A hozzájárulás a közös projektet támogatja. Nem felhasználónkénti licencdíj, és önmagában nem tartalmaz tárhelyet, telepítést, segítségnyújtási órakeretet, ügyeletet vagy fejlesztési határidőt. Ezekhez külön szolgáltatási megállapodás szükséges.',
    institutionButton: 'Intézményi hozzájárulás egyeztetése',
    freeDeploymentTitle: 'Önálló szervertelepítés – ingyenes',
    freeDeploymentText: 'A szerverprogram, a nyilvános telepítési útmutató és a frissítések telepítési díj és támogatási előfizetés nélkül használhatók. A professzionális telepítés választható szolgáltatás, nem licencfeltétel. A központi közös szolgáltatáshoz közzétett méltányos használati és kapacitási korlátok kapcsolódhatnak.',
    servicesTitle: 'Választható professzionális intézményi telepítés',
    servicesText: 'Az intézmény a saját telepítés helyett ellenőrzött beüzemelést és átadást rendelhet meg. A díj a szakmai munkát ellentételezi, nem a szerver használati jogát. Az induló pilot legfeljebb két intézményre terjed ki.',
    serviceHeaders: ['Szolgáltatás', 'Jellemző feladat', 'Egyszeri irányadó díj (EUR, nettó)'],
    services: [
      ['Alap intézményi telepítés', 'Előkészített környezet, telepítés, alapbeállítás és átadás'],
      ['Standard telepítés OJS/OMP-integrációval', 'Alaptelepítés és egy meglévő OJS- vagy OMP-rendszer felmért összekapcsolása'],
      ['Komplex intézményi telepítés', 'Többrendszeres architektúra, hitelesítési és integrációs tervezés, egyedi átadás'],
    ],
    fromPrefix: '',
    fromSuffix: '-tól',
    servicePricing: 'Nem kötelező erejű, irányadó kezdő díjak, nem azonnal megvásárolható csomagok. Az írásos ajánlat nevezi meg a szolgáltatót, az alkalmazandó áfát vagy mentességet, a végösszeget, a pontos tartalmat és a kizárásokat. A tárhely, az infrastruktúra, a külső API-k, a harmadik fél licencei, a migráció és az egyedi fejlesztés külön tétel, ha nem állapodnak meg másképp.',
    careTitle: 'Választható éves üzemeltetési támogatás',
    careText: 'A saját szerver működtetéséhez nem szükséges fizetős gondozási szerződés. Az intézmény az önkéntes intézményi hozzájárulástól elkülönítve, meghatározott üzemeltetési és segítségnyújtási szolgáltatást rendelhet meg.',
    careHeaders: ['Támogatási szint', 'Irányadó éves díj (EUR, nettó)'],
    carePlans: ['Alapszintű technikai támogatás', 'Intézményi üzemeltetési támogatás', 'Kiemelt támogatás, megállapodás szerinti válaszidővel'],
    carePricing: 'A szerződés rögzíti a válaszidőcélokat, az érintett rendszereket, az órakeretet, a biztonsági és mentési felelősségeket, a módosítások jóváhagyását, az incidenskezelést, valamint az adatkiadást és a kilépést. Korlátlan munkaidő, tárhely, 24 órás ügyelet és rendelkezésre állási garancia nincs automatikusan. A frissítések minden szerveren ingyenesek; az összehangolt automatikus frissítés intézményi engedélyezést, ellenőrzést, mentést és visszaállítást igényel.',
    serviceButton: 'Intézményi telepítés vagy gondozás egyeztetése',
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
    description: 'Kostenlose wissenschaftliche Software und Eigeninstallation mit freiwilligen Beiträgen und optionalen institutionellen Dienstleistungen.',
    intro: 'Open Manuscript Studio und die eigenständig installierbare OMI-Serversoftware sind kostenlos und quelloffen. Freiwillige Beiträge erhalten das gemeinschaftliche Projekt; Einrichtungen können professionelle Installation und Betriebsbetreuung gesondert beauftragen. Die Softwarenutzung setzt keine Zahlung voraus.',
    freeTitle: 'Der Editor bleibt kostenlos',
    freeText: 'Schreiben, Öffnen, Speichern, Import und Export eigener Manuskripte, offene Formate und eigenständiger Serverbetrieb bleiben kostenlos. Sie können die Serversoftware ohne Lizenzgebühr pro Nutzer oder Server selbst installieren und aktualisieren. Beiträge und Dienstleistungen beeinflussen weder Manuskriptbehandlung noch Sicherheits- und Datenverlustkorrekturen.',
    capacity: 'Kostenintensive gemeinsame Dienste wie gehosteter Speicher, maschinelle Übersetzung und OCR können klar ausgewiesene Kapazitätsgrenzen haben. Das Herunterladen und Exportieren eigener Manuskripte muss dabei erhalten bleiben.',
    modelStatus: 'Ausgangsrahmen vom 8. November 2026; Installations- und Leistungsbeispiele am 9. November präzisiert. Die EUR-Beträge sind unverbindliche Planungswerte, die anhand tatsächlicher Kosten und Kapazität geprüft werden. Bestehende Servicevereinbarungen bleiben maßgeblich.',
    individualTitle: 'Individuelle Unterstützung',
    individualText: 'Wählen Sie einen passenden Betrag. Dies sind vorgeschlagene EUR-Richtwerte, keine Gebühr für die Nutzung von Studio.',
    tiers: ['Unterstützer', 'Regelmäßiger Unterstützer', 'Fördernder Unterstützer'],
    tierDescriptions: ['Beitrag zum laufenden Betrieb.', 'Beitrag zu Wartung und Tests.', 'Beitrag zur langfristigen Entwicklung.'],
    perMonth: 'pro Monat',
    oneTime: 'Vorgeschlagene einmalige Beiträge',
    custom: 'Andere Beträge sind ebenfalls willkommen.',
    paymentText: 'GitHub Sponsors ist der auf der Projektwebsite verlinkte Unterstützungskanal. Prüfen Sie dort vor der Bestätigung Empfänger, verfügbare Stufen, Währung, Wiederholung und Kündigung. GitHub-Stufen sind in USD angegeben; die EUR-Beträge hier sind keine garantierte Umrechnung und keine lokale Kartenzahlungsseite.',
    github: 'OMI auf GitHub Sponsors ansehen',
    institutionTitle: 'Institutionelle Beiträge',
    institutionText: 'Universitäten, Bibliotheken, Zeitschriften und Verlage können die gemeinsame Wartung durch jährliche Beiträge fördern. Wir beginnen mit dem Rahmen für institutionelle Unterstützer; höhere Stufen sind für eine spätere Erweiterung vorgesehen.',
    institutionHeaders: ['Stufe', 'Jährlicher EUR-Richtwert', 'Einführung'],
    institutionTiers: ['Institutioneller Unterstützer', 'Förderpartner', 'Hauptförderpartner'],
    institutionStatus: ['Ausgangsrahmen', 'Spätere Phase', 'Spätere Phase'],
    institutionTerms: 'Ein Beitrag unterstützt das gemeinsame Projekt. Er ist keine Softwarelizenz pro Nutzer und umfasst nicht automatisch Hosting, Installation, Supportstunden, Bereitschaft oder einen Entwicklungstermin. Leistungen erfordern eine gesonderte Vereinbarung.',
    institutionButton: 'Institutionelle Unterstützung besprechen',
    freeDeploymentTitle: 'Eigeninstallation des Servers – kostenlos',
    freeDeploymentText: 'Serversoftware, öffentliche Installationsanleitung und Updates sind ohne Installationsgebühr oder Supportabonnement verfügbar. Professionelle Installation ist eine Wahl und keine Lizenzbedingung. Für den zentralen gemeinsamen Dienst können veröffentlichte Fair-Use- und Kapazitätsgrenzen gelten.',
    servicesTitle: 'Optionale professionelle Installation für Einrichtungen',
    servicesText: 'Statt einer Eigeninstallation kann eine Einrichtung eine geprüfte Bereitstellung und Übergabe beauftragen. Die Vergütung gilt der fachlichen Leistung, nicht dem Betriebsrecht. Der Pilot ist zunächst auf zwei Einrichtungen begrenzt.',
    serviceHeaders: ['Leistung', 'Typischer Umfang', 'Einmaliger EUR-Richtwert (ohne USt.)'],
    services: [
      ['Institutionelle Grundinstallation', 'Vorbereitete Umgebung, Installation, Basiskonfiguration und Übergabe'],
      ['Standardinstallation mit OJS/OMP-Anbindung', 'Grundinstallation sowie geprüfte Anbindung einer vorhandenen OJS- oder OMP-Instanz'],
      ['Komplexe institutionelle Installation', 'Mehrsystemarchitektur, Authentifizierungs- und Integrationsplanung, individuelle Übergabe'],
    ],
    fromPrefix: 'Ab',
    fromSuffix: '',
    servicePricing: 'Unverbindliche Planungsbeträge, keine sofort bestellbaren Pakete. Ein schriftliches Angebot benennt den rechtlichen Anbieter, Umsatzsteuer oder Befreiung, Gesamtpreis, Umfang und Ausschlüsse. Hosting, Infrastruktur, externe APIs, Fremdlizenzen, Migration und individuelle Entwicklung werden bei fehlender Vereinbarung separat berechnet.',
    careTitle: 'Optionale jährliche Betriebsbetreuung',
    careText: 'Eigenbetrieb erfordert keinen kostenpflichtigen Wartungsvertrag. Einrichtungen können eine genau vereinbarte Betreuung unabhängig von freiwilligen institutionellen Förderbeiträgen beauftragen.',
    careHeaders: ['Betreuungsstufe', 'Jährlicher EUR-Richtwert (ohne USt.)'],
    carePlans: ['Technischer Basissupport', 'Institutionelle Betriebsbetreuung', 'Vorrangiger Support mit vereinbarten Reaktionszielen'],
    carePricing: 'Der Vertrag regelt Reaktionsziele, betreute Systeme, Stundenrahmen, Zuständigkeiten für Sicherheit und Backups, Änderungsfreigaben, Störungsbehandlung sowie Ausstieg und Datenrückgabe. Unbegrenzte Arbeit, Speicher, 24-Stunden-Dienst und Verfügbarkeitsgarantie sind nicht automatisch enthalten. Softwareupdates bleiben für alle Server kostenlos; koordinierte automatische Updates erfordern Zustimmung, Prüfungen, Backups und Rollback.',
    serviceButton: 'Institutionelle Installation oder Betreuung besprechen',
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
    style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0,
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
              {supportModel.individualMonthlyEur.map((value, index) => (
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
              {supportModel.suggestedOneTimeEur.map(amount).join(' / ')}. {t.custom}
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
                <tbody>{supportModel.institutionalAnnualEur.map((value, index) => (
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

          <section className="margin-bottom--xl" aria-labelledby="free-deployment">
            <h2 id="free-deployment">{t.freeDeploymentTitle}</h2>
            <p>{t.freeDeploymentText}</p>
          </section>

          <section className="margin-bottom--xl" aria-labelledby="services">
            <h2 id="services">{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
            <div className={styles.tableScroll} role="region" aria-labelledby="services" tabIndex={0}>
              <table className={styles.table}>
                <caption>{t.servicePricing}</caption>
                <thead><tr>{t.serviceHeaders.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
                <tbody>{t.services.map(([name, scope], index) => (
                  <tr key={name}>
                    <th scope="row">{name}</th><td>{scope}</td>
                    <td className={styles.money}>{index === 2 ? `${t.fromPrefix ? t.fromPrefix + ' ' : ''}${amount(supportModel.deploymentEur[index])}${t.fromSuffix}` : amount(supportModel.deploymentEur[index])}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </section>

          <section className="margin-bottom--xl" aria-labelledby="annual-care">
            <h2 id="annual-care">{t.careTitle}</h2>
            <p>{t.careText}</p>
            <div className={styles.tableScroll} role="region" aria-labelledby="annual-care" tabIndex={0}>
              <table className={styles.table}>
                <caption>{t.carePricing}</caption>
                <thead><tr>{t.careHeaders.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
                <tbody>{t.carePlans.map((name, index) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td className={styles.money}>{index === 2 ? `${t.fromPrefix ? t.fromPrefix + ' ' : ''}${amount(supportModel.annualCareEur[index])}${t.fromSuffix}` : amount(supportModel.annualCareEur[index])}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
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

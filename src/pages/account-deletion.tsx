import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './account-deletion.module.css';

const COPY = {
  en: {
    title: 'Open Manuscript Studio account deletion',
    lead: 'This page explains how to request permanent deletion of an Open Manuscript Studio account and what happens to associated data.',
    app: 'Application: Open Manuscript Studio · Developer: Open Manuscript Initiative',
    howTitle: 'How to delete your account',
    steps: [
      'Open the web Studio and sign in to the account you want to delete.',
      'Open Account and find the Delete account section.',
      'Review the deletion and retention information, then type the account e-mail address to confirm.',
      'Choose Permanently delete account. The live account is removed immediately and all active sessions are invalidated.',
    ],
    openStudio: 'Open Studio account settings',
    deletedTitle: 'Data deleted from the active OMI service',
    deleted: [
      'Account e-mail address, password credential, name, affiliation, ORCID and other profile data.',
      'Linked sign-in identities, sessions, password-reset and invitation tokens.',
      'Institution memberships and central-administration grants associated with the account.',
      'Stored integration credentials, cloud-connection metadata, cloud-backup index records and local direct-submission records.',
      'Administrative audit events authored by the deleted account that could retain an account identifier or IP address.',
    ],
    retainedTitle: 'Data that may be retained',
    retained: [
      'Shared scholarly history may retain pseudonymized participant references or identifiable content. The controller must assess its lawful retention and any erasure request; this is not a guarantee of irreversible anonymization.',
      'The server controller must disclose and enforce the actual backup window and reapply deletions before restoring normal service. Previously promised limits, including 30 days where applicable, remain binding until lawfully changed.',
    ],
    externalTitle: 'Data held by other services',
    external: 'Copies already submitted to OJS/OMP, or files stored in a cloud account controlled by you or another provider, are not deleted by deleting the OMI Studio account. Those copies are governed by the destination journal, publisher or cloud provider and must be removed there separately when applicable.',
    ownershipTitle: 'Ownership safeguards',
    ownership: 'The last-owner safeguard may block self-service deletion. Ask the server controller for a verified ownership transfer or another erasure procedure; a request must not remain indefinitely unresolved.',
    helpTitle: 'If you cannot sign in',
    help: 'Use the project support page to request assistance. The operator may need to verify account ownership before acting on a deletion request.',
    support: 'Contact support',
    privacy: 'Privacy Policy',
  },
  hu: {
    title: 'Open Manuscript Studio-fiók törlése',
    lead: 'Ez az oldal bemutatja, hogyan kérhető egy Open Manuscript Studio-fiók végleges törlése, és mi történik a kapcsolódó adatokkal.',
    app: 'Alkalmazás: Open Manuscript Studio · Fejlesztő: Open Manuscript Initiative',
    howTitle: 'A fiók törlésének menete',
    steps: [
      'Nyisd meg a webes Stúdiót, és jelentkezz be a törölni kívánt fiókba.',
      'Nyisd meg a Fiók felületet, majd keresd meg a Fiók törlése részt.',
      'Olvasd át a törlési és adatmegőrzési tájékoztatót, majd megerősítésként írd be a fiók e-mail-címét.',
      'Válaszd a Fiók végleges törlése lehetőséget. Az aktív fiók azonnal megszűnik, és minden aktív munkamenet érvénytelenné válik.',
    ],
    openStudio: 'Studio-fiók beállításainak megnyitása',
    deletedTitle: 'Az aktív OMI szolgáltatásból törölt adatok',
    deleted: [
      'A fiók e-mail-címe, jelszó-hitelesítő adata, neve, affiliációja, ORCID-ja és egyéb profiladatai.',
      'Kapcsolt bejelentkezési identitások, munkamenetek, jelszó-visszaállítási és meghívási tokenek.',
      'A fiókhoz tartozó intézményi tagságok és központi adminisztrációs jogosultságok.',
      'Tárolt integrációs hitelesítő adatok, felhőkapcsolati metaadatok, felhőmentési indexrekordok és a közvetlen beküldések helyi nyilvántartása.',
      'A törölt fiók által létrehozott olyan adminisztrációs auditbejegyzések, amelyek fiókazonosítót vagy IP-címet őrizhetnének.',
    ],
    retainedTitle: 'Esetlegesen megőrzött adatok',
    retained: [
      'A közös tudományos történetben álnevesített résztvevői hivatkozás vagy azonosításra alkalmas tartalom maradhat. Megőrzését és a törlési kérelmet az adatkezelőnek egyedileg kell vizsgálnia; ez nem visszafordíthatatlan anonimizálási garancia.',
      'A szerver adatkezelőjének közölnie és betartatnia kell a mentések tényleges megőrzését, és visszaállításkor újra érvényesítenie a törléseket. A korábban vállalt, például 30 napos korlát jogszerű módosításáig továbbra is kötelező.',
    ],
    externalTitle: 'Más szolgáltatásoknál tárolt adatok',
    external: 'Az OJS/OMP-rendszerbe már beküldött példányokat, illetve a saját vagy más szolgáltató által kezelt felhőfiókban tárolt fájlokat az OMI Studio-fiók törlése nem törli. Ezekre a célfolyóirat, kiadó vagy felhőszolgáltató szabályai vonatkoznak, és szükség esetén ott kell külön kérni vagy elvégezni a törlést.',
    ownershipTitle: 'Tulajdonosi védelem',
    ownership: 'Az utolsó tulajdonos önkiszolgáló törlését biztonsági szabály akadályozhatja. Ilyenkor kérjen ellenőrzött szerepátadást vagy más törlési eljárást a szerver adatkezelőjétől; a kérelem nem maradhat határozatlan ideig elintézetlen.',
    helpTitle: 'Ha nem tudsz bejelentkezni',
    help: 'Kérj segítséget a projekt támogatási oldalán. A fióktörlési kérelem teljesítése előtt az üzemeltetőnek ellenőriznie kellhet, hogy valóban te rendelkezel a fiókkal.',
    support: 'Kapcsolat és támogatás',
    privacy: 'Adatvédelmi tájékoztató',
  },
  de: {
    title: 'Open-Manuscript-Studio-Konto löschen',
    lead: 'Diese Seite erklärt, wie die dauerhafte Löschung eines Open-Manuscript-Studio-Kontos beantragt wird und was mit den zugehörigen Daten geschieht.',
    app: 'Anwendung: Open Manuscript Studio · Entwickler: Open Manuscript Initiative',
    howTitle: 'So löschen Sie Ihr Konto',
    steps: [
      'Öffnen Sie Studio im Web und melden Sie sich bei dem Konto an, das Sie löschen möchten.',
      'Öffnen Sie Konto und suchen Sie den Abschnitt Konto löschen.',
      'Lesen Sie die Hinweise zu Löschung und Aufbewahrung und geben Sie zur Bestätigung die E-Mail-Adresse des Kontos ein.',
      'Wählen Sie Konto endgültig löschen. Das aktive Konto wird sofort entfernt und alle aktiven Sitzungen werden ungültig.',
    ],
    openStudio: 'Studio-Kontoeinstellungen öffnen',
    deletedTitle: 'Aus dem aktiven OMI-Dienst gelöschte Daten',
    deleted: [
      'E-Mail-Adresse des Kontos, Passwortzugang, Name, Zugehörigkeit, ORCID und sonstige Profildaten.',
      'Verknüpfte Anmeldeidentitäten, Sitzungen sowie Passwort-Reset- und Einladungstokens.',
      'Institutionelle Mitgliedschaften und zentrale Administrationsrechte des Kontos.',
      'Gespeicherte Integrationszugänge, Cloud-Verbindungsmetadaten, Cloud-Backup-Indexeinträge und lokale Datensätze direkter Einreichungen.',
      'Vom gelöschten Konto erzeugte Admin-Audit-Ereignisse, die eine Konto-ID oder IP-Adresse enthalten könnten.',
    ],
    retainedTitle: 'Daten, die aufbewahrt werden können',
    retained: [
      'Gemeinsame wissenschaftliche Historie kann pseudonymisierte Teilnehmerverweise oder identifizierbare Inhalte behalten. Der Verantwortliche muss Aufbewahrung und Löschanfragen individuell prüfen; irreversible Anonymisierung wird nicht zugesichert.',
      'Der Verantwortliche muss die tatsächliche Backup-Frist offenlegen und durchsetzen sowie Löschungen vor Wiederinbetriebnahme erneut anwenden. Frühere Zusagen, etwa höchstens 30 Tage, gelten bis zur rechtmäßigen Änderung weiter.',
    ],
    externalTitle: 'Daten bei anderen Diensten',
    external: 'Bereits an OJS/OMP übermittelte Kopien oder Dateien in einem von Ihnen oder einem anderen Anbieter kontrollierten Cloud-Konto werden durch das Löschen des OMI-Studio-Kontos nicht entfernt. Für diese Kopien gelten die Regeln der Zielzeitschrift, des Verlags oder Cloud-Anbieters.',
    ownershipTitle: 'Schutz von Eigentümerrollen',
    ownership: 'Beim letzten Eigentümer kann die Selbstbedienung gesperrt sein. Beantragen Sie beim Serververantwortlichen eine geprüfte Übergabe oder ein anderes Löschverfahren; der Antrag darf nicht unbegrenzt offen bleiben.',
    helpTitle: 'Wenn Sie sich nicht anmelden können',
    help: 'Nutzen Sie die Support-Seite des Projekts. Vor einer Löschung muss der Betreiber gegebenenfalls prüfen, ob Sie tatsächlich über das Konto verfügen.',
    support: 'Support kontaktieren',
    privacy: 'Datenschutzerklärung',
  },
} as const;

function getCopy(locale: string) {
  if (locale === 'hu' || locale === 'de') return COPY[locale];
  return COPY.en;
}

export default function AccountDeletionPage() {
  const { i18n } = useDocusaurusContext();
  const t = getCopy(i18n.currentLocale);

  return (
    <Layout title={t.title} description={t.lead}>
      <Head>
        <meta name="robots" content="index,follow" />
      </Head>
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Open Manuscript Initiative</p>
          <h1>{t.title}</h1>
          <p className={styles.lead}>{t.lead}</p>
          <p className={styles.app}>{t.app}</p>
          <Link className="button button--primary button--lg" to="https://studio.openmanuscript.org">
            {t.openStudio}
          </Link>
        </header>

        <section className={styles.section}>
          <h2>{t.howTitle}</h2>
          <ol>{t.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>

        <section className={styles.section}>
          <h2>{t.deletedTitle}</h2>
          <ul>{t.deleted.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className={styles.section}>
          <h2>{t.retainedTitle}</h2>
          <ul>{t.retained.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className={styles.section}>
          <h2>{t.externalTitle}</h2>
          <p>{t.external}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.ownershipTitle}</h2>
          <p>{t.ownership}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.helpTitle}</h2>
          <p>{t.help}</p>
          <div className={styles.links}>
            <Link to="/support">{t.support}</Link>
            <Link to="/docs/governance/privacy-policy">{t.privacy}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

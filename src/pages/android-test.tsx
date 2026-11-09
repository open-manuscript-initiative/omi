import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './android-test.module.css';

const PLAY_OPT_IN = 'https://play.google.com/apps/testing/org.openmanuscript.studio';

const copy = {
  en: {
    title: 'Join the Android closed test',
    lead: 'Test Open Manuscript Studio on Android through the Google Play closed-testing channel.',
    note: 'The Play test and the direct-download RC APK are separate distribution channels. A Play installation is not automatically the current RC.',
    stepTitle: 'How to participate',
    steps: [
      'Use the Google Account that will be signed in to Google Play on your Android device.',
      'Your account must first be included in the test’s Play Console e-mail list or the authorised Google Group. The opt-in link does not itself grant access.',
      'After your account is authorised, open the Google Play link and select Become a tester. Then follow the installation link.',
      'Use the private Google Play feedback channel or the project issue tracker to report bugs. Never publish documents or account details in public reports.',
    ],
    action: 'Open Google Play tester enrolment',
    accessTitle: 'No access yet?',
    access: 'If Google Play reports that the account is ineligible, the test organiser must first add that Google Account to the closed test (or arrange membership in the linked Google Group). The public registration link alone cannot do this.',
    scopeTitle: 'What to test',
    scope: 'Document import/open/save, offline and device-local files, cloud connections, editing, footnotes, export, layout, and Android navigation. Do not submit confidential manuscripts to a public bug report.',
    privacy: 'This page does not collect names or e-mail addresses. Any test-list information is managed through Google Play or its authorised Google Group under their respective terms.',
    back: 'Return to Studio downloads',
  },
  hu: {
    title: 'Feliratkozás az Android zárt tesztelésére',
    lead: 'Csatlakozz az Open Manuscript Studio Android-alkalmazásának Google Play-felületen zajló zárt teszteléséhez.',
    note: 'A Google Play tesztcsatornája és a közvetlenül telepíthető RC APK külön kiadási csatorna. A Play-verzió nem feltétlenül az aktuális RC.',
    stepTitle: 'A csatlakozás menete',
    steps: [
      'Azt a Google-fiókot használd, amellyel az Android-eszközödön a Google Playbe bejelentkezel.',
      'A fióknak előbb szerepelnie kell a Play Console tesztelői listáján vagy az engedélyezett Google-csoportban. A tesztelési hivatkozás önmagában nem ad jogosultságot.',
      'Ha már jogosult vagy, nyisd meg az alábbi Google Play hivatkozást, válaszd a „Tesztelővé válás” lehetőséget, majd telepítsd az alkalmazást.',
      'Visszajelzést a Google Play privát tesztelői felületén vagy a projekt hibakövetőjében küldhetsz. Nyilvános hibajegybe ne tölts fel személyes adatot vagy bizalmas kéziratot.',
    ],
    action: 'Google Play tesztelői feliratkozás megnyitása',
    accessTitle: 'Még nem vagy jogosult?',
    access: 'Ha a Google Play szerint nem vehetsz részt a tesztben, az üzemeltetőnek előbb fel kell vennie a Google-fiókodat a zárt tesztelői listára, vagy biztosítania kell a teszteléshez rendelt Google-csoport tagságát. A nyilvános hivatkozás ezt önmagában nem intézi el.',
    scopeTitle: 'Javasolt tesztelési területek',
    scope: 'Dokumentumimport és -megnyitás, helyi és offline fájlműveletek, felhőkapcsolatok, szerkesztés, lábjegyzetek, export, tördelés és Android-navigáció. Bizalmas kéziratot ne csatolj nyilvános hibajegyhez.',
    privacy: 'Ez az oldal nem gyűjt neveket vagy e-mail-címeket. A tesztelői hozzáférést a Google Play vagy a hozzá kapcsolt Google-csoport kezeli a saját feltételei szerint.',
    back: 'Vissza a Studio letöltéseihez',
  },
  de: {
    title: 'Für den geschlossenen Android-Test anmelden',
    lead: 'Nimm am geschlossenen Google-Play-Test von Open Manuscript Studio für Android teil.',
    note: 'Der Google-Play-Test und das direkt installierbare RC-APK sind unterschiedliche Vertriebskanäle. Die Play-Version entspricht nicht zwingend dem aktuellen RC.',
    stepTitle: 'So nimmst du teil',
    steps: [
      'Verwende das Google-Konto, mit dem du auf deinem Android-Gerät bei Google Play angemeldet bist.',
      'Dein Konto muss zuvor in der Play-Console-Testerliste oder der zugelassenen Google-Gruppe stehen. Der Link allein gewährt keinen Zugang.',
      'Wenn du berechtigt bist, öffne den Google-Play-Link, wähle die Teilnahme am Test und installiere anschließend die App.',
      'Melde Fehler über das private Feedback bei Google Play oder den Projekt-Issue-Tracker. Keine vertraulichen Manuskripte oder Kontodaten öffentlich teilen.',
    ],
    action: 'Google-Play-Testanmeldung öffnen',
    accessTitle: 'Noch kein Zugang?',
    access: 'Wenn Google Play dein Konto ablehnt, muss die Testleitung es zunächst für den geschlossenen Test freischalten oder der zugeordneten Google-Gruppe hinzufügen. Der öffentliche Testlink allein reicht nicht aus.',
    scopeTitle: 'Was getestet werden soll',
    scope: 'Dokumentimport, Öffnen und Speichern, lokale und Offline-Dateien, Cloud-Verbindungen, Bearbeitung, Fußnoten, Export, Layout und Android-Navigation. Keine vertraulichen Manuskripte in öffentliche Fehlermeldungen aufnehmen.',
    privacy: 'Diese Seite erhebt weder Namen noch E-Mail-Adressen. Die Zugangsverwaltung liegt bei Google Play bzw. der zugelassenen Google-Gruppe.',
    back: 'Zurück zu den Studio-Downloads',
  },
} as const;

export default function AndroidTest(): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const t = copy[i18n.currentLocale as keyof typeof copy] ?? copy.en;

  return (
    <Layout title={t.title} description={t.lead}>
      <main className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Open Manuscript Studio · Android</p>
          <h1>{t.title}</h1>
          <p className={styles.lead}>{t.lead}</p>
        </header>
        <aside className={styles.notice}>{t.note}</aside>
        <section aria-labelledby="join-steps">
          <h2 id="join-steps">{t.stepTitle}</h2>
          <ol className={styles.steps}>{t.steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
          <p>
            <Link className="button button--primary button--lg" to={PLAY_OPT_IN}>
              {t.action}
            </Link>
          </p>
        </section>
        <section className={styles.section} aria-labelledby="join-access">
          <h2 id="join-access">{t.accessTitle}</h2>
          <p>{t.access}</p>
        </section>
        <section className={styles.section} aria-labelledby="join-scope">
          <h2 id="join-scope">{t.scopeTitle}</h2>
          <p>{t.scope}</p>
        </section>
        <p className={styles.privacy}>{t.privacy}</p>
        <p><Link to="/studio/">{t.back}</Link></p>
      </main>
    </Layout>
  );
}

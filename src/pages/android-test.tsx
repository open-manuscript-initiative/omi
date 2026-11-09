import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './android-test.module.css';

const SIGNUP_URL = 'https://studio.openmanuscript.org/api/public/android-test/signups';
const PLAY_OPT_IN = 'https://play.google.com/apps/testing/org.openmanuscript.studio';

const copy = {
  en: {
    title: 'Join the Android closed test',
    lead: 'Test Open Manuscript Studio on Android through the Google Play closed-testing channel.',
    note: 'The Play test and the direct-download RC APK are separate distribution channels. A Play installation is not automatically the current RC.',
    formTitle: 'Request an invitation',
    emailLabel: 'Google Play account e-mail address',
    consentLabel: 'I agree that this e-mail address will be used to contact me about the OMI Android closed test and to prepare the tester list.',
    submitLabel: 'Send confirmation e-mail',
    sendingLabel: 'Sending…',
    sentLabel: 'Request received. Check your e-mail, then follow the confirmation link and confirm on the next page. Google Play access is not granted yet.',
    errorLabel: 'Registration is temporarily unavailable. Please try again later.',
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
    privacy: 'We collect only the Google Account e-mail address submitted with consent. An e-mail confirmation is required. Unconfirmed requests expire after seven days; verified applications are kept for up to 180 days or until the test ends. Each confirmation message includes a withdrawal link. The operator must separately remove any already granted access in Google Play.',
    back: 'Return to Studio downloads',
  },
  hu: {
    title: 'Feliratkozás az Android zárt tesztelésére',
    lead: 'Csatlakozz az Open Manuscript Studio Android-alkalmazásának Google Play-felületen zajló zárt teszteléséhez.',
    note: 'A Google Play tesztcsatornája és a közvetlenül telepíthető RC APK külön kiadási csatorna. A Play-verzió nem feltétlenül az aktuális RC.',
    formTitle: 'Jelentkezés tesztelőnek',
    emailLabel: 'A Google Play-fiókod e-mail-címe',
    consentLabel: 'Hozzájárulok, hogy ezt az e-mail-címet az OMI Android zárt tesztelésével kapcsolatos értesítésre és a tesztelői lista előkészítésére használják.',
    submitLabel: 'Megerősítő e-mail küldése',
    sendingLabel: 'Küldés…',
    sentLabel: 'A jelentkezési kérelmet fogadtuk. Ellenőrizd az e-mailjeidet, nyisd meg a megerősítő hivatkozást, és ott hagyd jóvá a jelentkezést! A Google Play-hozzáférés még nem aktív.',
    errorLabel: 'A jelentkezés jelenleg nem elérhető. Kérjük, próbáld meg később.',
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
    privacy: 'A hozzájárulással megadott Google-fiókos e-mail-címet gyűjtjük, más személyes adatot nem kérünk. Az e-mailes megerősítés kötelező. A meg nem erősített jelentkezéseket 7 nap, a megerősítetteket legfeljebb 180 nap után vagy a teszt végén töröljük. A megerősítő levél visszavonási hivatkozást is tartalmaz. A már megadott Google Play-jogosultságot az üzemeltető külön vonja vissza.',
    back: 'Vissza a Studio letöltéseihez',
  },
  de: {
    title: 'Für den geschlossenen Android-Test anmelden',
    lead: 'Nimm am geschlossenen Google-Play-Test von Open Manuscript Studio für Android teil.',
    note: 'Der Google-Play-Test und das direkt installierbare RC-APK sind unterschiedliche Vertriebskanäle. Die Play-Version entspricht nicht zwingend dem aktuellen RC.',
    formTitle: 'Einladung beantragen',
    emailLabel: 'E-Mail-Adresse deines Google-Play-Kontos',
    consentLabel: 'Ich stimme zu, dass diese E-Mail-Adresse zur Kontaktaufnahme bezüglich des geschlossenen OMI-Android-Tests und zur Vorbereitung der Testerliste verwendet wird.',
    submitLabel: 'Bestätigungs-E-Mail senden',
    sendingLabel: 'Wird gesendet…',
    sentLabel: 'Anfrage erhalten. Bitte öffne die Bestätigungs-E-Mail und bestätige die Anmeldung auf der Folgeseite. Der Google-Play-Zugang ist noch nicht freigeschaltet.',
    errorLabel: 'Die Anmeldung ist derzeit nicht verfügbar. Bitte versuche es später erneut.',
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
    privacy: 'Wir erfassen nur die mit Einwilligung angegebene Google-Konto-E-Mail-Adresse. Eine E-Mail-Bestätigung ist erforderlich. Unbestätigte Anfragen werden nach sieben Tagen, bestätigte nach spätestens 180 Tagen oder zum Testende gelöscht. Die Bestätigungs-E-Mail enthält einen Widerrufslink. Bereits erteilte Google-Play-Berechtigungen muss die Testleitung separat entziehen.',
    back: 'Zurück zu den Studio-Downloads',
  },
} as const;

export default function AndroidTest(): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const t = copy[i18n.currentLocale as keyof typeof copy] ?? copy.en;
  const [email, setEmail] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [website, setWebsite] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  async function submitSignup(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!consent || !email.trim() || submitting) return;
    setSubmitting(true);
    setStatus('idle');
    try {
      const language = i18n.currentLocale === 'hu' || i18n.currentLocale === 'de' ? i18n.currentLocale : 'en';
      const result = await fetch(SIGNUP_URL, {
        method: 'POST',
        credentials: 'omit',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: email.trim(), consent, language, website}),
      });
      if (!result.ok) throw new Error('Signup unavailable');
      setStatus('success');
      setEmail('');
      setConsent(false);
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout title={t.title} description={t.lead}>
      <main className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Open Manuscript Studio · Android</p>
          <h1>{t.title}</h1>
          <p className={styles.lead}>{t.lead}</p>
        </header>
        <aside className={styles.notice}>{t.note}</aside>
        <section aria-labelledby="join-form">
          <h2 id="join-form">{t.formTitle}</h2>
          <form className={styles.form} onSubmit={submitSignup}>
            <label htmlFor="android-test-email">{t.emailLabel}</label>
            <input id="android-test-email" type="email" name="email" autoComplete="email" required maxLength={320}
              value={email} onChange={(event) => setEmail(event.target.value)} />
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="android-test-website">Website</label>
              <input id="android-test-website" type="text" name="website" autoComplete="off" tabIndex={-1}
                value={website} onChange={(event) => setWebsite(event.target.value)} />
            </div>
            <label className={styles.consent}>
              <input type="checkbox" required checked={consent} onChange={(event) => setConsent(event.target.checked)} />
              <span>{t.consentLabel}</span>
            </label>
            <button className="button button--primary" type="submit" disabled={submitting || !consent}>
              {submitting ? t.sendingLabel : t.submitLabel}
            </button>
            <p role="status" aria-live="polite">
              {status === 'success' ? t.sentLabel : status === 'error' ? t.errorLabel : ''}
            </p>
          </form>
        </section>
        <section className={styles.section} aria-labelledby="join-steps">
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

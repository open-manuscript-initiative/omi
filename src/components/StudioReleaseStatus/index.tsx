import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {STUDIO_WEB_VERSION, STUDIO_ANDROID_VERSION, STUDIO_PUBLISHED_VERSION, STUDIO_SOURCE_RELEASE_NOTES,
  STUDIO_RC_EVIDENCE_URL} from '../../studioReleaseVersions';

const messages = {
  en: {
    title: 'Web and Android RC available',
    status: 'Use the web release candidate in your browser or install the Android RC from its signed APK package.',
    windows: 'On 10 November the publisher confirmed the Microsoft Store listing on a Windows PC: its product page shows an Open button and PEGI 3. The publisher also confirmed successful app launch and sign-in. Opening, editing, saving and reopening a local .omi manuscript also succeeded. Signature and Store-update checks remain pending. Direct EXE/MSI downloads remain a separate, unsigned channel.',
    downloads: 'Desktop downloads',
    support: 'RC scope: Linux desktop and macOS Preview; iOS/iPadOS Experimental. The inherited Linux GLib advisory remains open.',
    notes: 'RC status and changes', evidence: 'Verified build evidence',
  },
  hu: {
    title: 'Elérhető a webes és az Android RC',
    status: 'A webes kiadási jelölt böngészőben használható, az Android RC az aláírt APK-csomagból telepíthető.',
    windows: 'November 10-én a Windows Microsoft Store felületén már megjelent az Open Manuscript Studio, a képernyőképen „Megnyitás” gombbal és PEGI 3 besorolással. A kiadó az alkalmazás sikeres elindulását és a bejelentkezést is megerősítette. A helyi .omi kézirat megnyitása, szerkesztése, mentése és újbóli megnyitása szintén sikerült. Az aláírás és a Store-frissítés ellenőrzése még hátravan. A közvetlen EXE/MSI külön, aláíratlan csatorna.',
    downloads: 'Asztali letöltések',
    support: 'RC-támogatás: Linux asztali és macOS Preview; iOS/iPadOS kísérleti. A Linux örökölt GLib-figyelmeztetése továbbra is nyitott.',
    notes: 'RC-állapot és változások', evidence: 'Ellenőrzési eredmények',
  },
  de: {
    title: 'Web- und Android-RC verfügbar',
    status: 'Der Web-Release-Kandidat ist im Browser nutzbar. Der Android-RC lässt sich aus dem signierten APK-Paket installieren.',
    windows: 'Am 10. November bestätigte der Herausgeber die Microsoft-Store-Produktseite auf einem Windows-PC: Sie zeigt „Öffnen“ und PEGI 3. Der Herausgeber bestätigte auch einen erfolgreichen App-Start und eine funktionierende Anmeldung. Auch das Öffnen, Bearbeiten, Speichern und erneute Öffnen einer lokalen .omi-Datei war erfolgreich. Signatur und Store-Updates bleiben zu prüfen. Direkte EXE/MSI-Downloads bleiben ein separater, unsignierter Kanal.',
    downloads: 'Desktop-Downloads',
    support: 'RC-Umfang: Linux-Desktop und macOS Preview; iOS/iPadOS experimentell. Die geerbte Linux-GLib-Warnung bleibt offen.',
    notes: 'RC-Status und Änderungen', evidence: 'Prüfnachweise',
  },
} as const;

export default function StudioReleaseStatus() {
  const {i18n} = useDocusaurusContext();
  const copy = messages[i18n.currentLocale as keyof typeof messages] ?? messages.en;
  return (
    <aside className="alert alert--info margin-vert--md" aria-label={copy.title}>
      <p><strong>{copy.title}</strong></p>
      <p>Web: <strong>{STUDIO_WEB_VERSION}</strong>{' · '}Android APK: <strong>{STUDIO_ANDROID_VERSION}</strong></p>
      <p>{copy.status}</p>
      <p>{copy.windows}</p>
      <p>{copy.downloads}: <strong>{STUDIO_PUBLISHED_VERSION}</strong>. {copy.support}</p>
      <p><Link to={STUDIO_SOURCE_RELEASE_NOTES}>{copy.notes}</Link>{' · '}
        <Link to={STUDIO_RC_EVIDENCE_URL}>{copy.evidence}</Link></p>
    </aside>
  );
}

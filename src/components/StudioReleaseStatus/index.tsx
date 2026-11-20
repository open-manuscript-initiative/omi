import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {STUDIO_WEB_VERSION, STUDIO_ANDROID_VERSION, STUDIO_PUBLISHED_VERSION, STUDIO_SOURCE_RELEASE_NOTES,
  STUDIO_RC_EVIDENCE_URL, STUDIO_WINDOWS_STORE_VERSION, STUDIO_WINDOWS_PACKAGE_VERSION,
  STUDIO_SNAPSHOT_DATE} from '../../studioReleaseVersions';

const messages = {
  en: {
    title: 'Web and Android RC available',
    status: 'RC2 includes the November publication, notes, research-project and OJS improvements. The Android candidate is a signed APK inside an Actions ZIP; GitHub sign-in may be required and the archive expires on 18 February 2027.',
    windows: 'Windows package', store: 'Last confirmed Store version (10 November)',
    windowsNote: 'The prepared MSI/Store MSIX identity is separate from the confirmed Store rollout. Check the Store for the version currently offered.',
    downloads: 'Permanent direct desktop release',
    support: 'RC2 desktop candidates have also built successfully; see the channel table in the release notes. Linux desktop and macOS remain Preview; iOS/iPadOS Experimental.',
    notes: 'RC2 versions, downloads and changes', evidence: 'Build checks',
  },
  hu: {
    title: 'Elérhető a webes és az Android RC',
    status: 'Az RC2 tartalmazza a novemberi kiadványszerkesztési, jegyzet-, kutatásiprojekt- és OJS-fejlesztéseket. Az Android-jelölt aláírt APK az Actions ZIP-csomagjában; GitHub-bejelentkezés szükséges lehet, a csomag 2027. február 18-án lejár.',
    windows: 'Windows-csomag', store: 'Utoljára igazolt Store-verzió (november 10.)',
    windowsNote: 'Az előkészített MSI/Store MSIX-verzió különbözik az igazolt áruházi terjesztéstől. Az aktuálisan kínált verziót a Store mutatja.',
    downloads: 'Állandó közvetlen asztali kiadás',
    support: 'Az RC2 asztali jelöltjei is sikeresen elkészültek; részletek a kiadási csatornák táblázatában. A natív Linux és macOS Preview, az iOS/iPadOS kísérleti.',
    notes: 'RC2-verziók, letöltések és változások', evidence: 'Buildellenőrzések',
  },
  de: {
    title: 'Web- und Android-RC verfügbar',
    status: 'RC2 enthält die November-Neuerungen für Satz, Anmerkungen, Forschungsprojekte und OJS. Der Android-Kandidat ist eine signierte APK im Actions-ZIP; GitHub-Anmeldung kann nötig sein. Das Archiv läuft am 18. Februar 2027 ab.',
    windows: 'Windows-Paket', store: 'Zuletzt bestätigte Store-Version (10. November)',
    windowsNote: 'Die vorbereitete MSI-/Store-MSIX-Identität bestätigt keinen aktuellen Store-Rollout. Die derzeit angebotene Version steht im Store.',
    downloads: 'Dauerhaftes direktes Desktop-Release',
    support: 'Auch RC2-Desktop-Kandidaten wurden erfolgreich gebaut; siehe Kanaltabelle in den Release-Notizen. Linux-Desktop und macOS bleiben Preview; iOS/iPadOS Experimental.',
    notes: 'RC2-Versionen, Downloads und Änderungen', evidence: 'Build-Prüfungen',
  },
} as const;

export default function StudioReleaseStatus() {
  const {i18n} = useDocusaurusContext();
  const copy = messages[i18n.currentLocale as keyof typeof messages] ?? messages.en;
  return (
    <aside className="alert alert--info margin-vert--md" aria-label={copy.title}>
      <p><strong>{copy.title}</strong>{' · '}<time dateTime={STUDIO_SNAPSHOT_DATE}>{STUDIO_SNAPSHOT_DATE}</time></p>
      <p>Web: <strong>{STUDIO_WEB_VERSION}</strong>{' · '}Android APK: <strong>{STUDIO_ANDROID_VERSION}</strong></p>
      <p>{copy.status}</p>
      <p>{copy.windows}: <strong>{STUDIO_WINDOWS_PACKAGE_VERSION}</strong>{' · '}{copy.store}: <strong>{STUDIO_WINDOWS_STORE_VERSION}</strong>. {copy.windowsNote}</p>
      <p>{copy.downloads}: <strong>{STUDIO_PUBLISHED_VERSION}</strong>. {copy.support}</p>
      <p><Link to={STUDIO_SOURCE_RELEASE_NOTES}>{copy.notes}</Link>{' · '}
        <Link to={STUDIO_RC_EVIDENCE_URL}>{copy.evidence}</Link></p>
    </aside>
  );
}

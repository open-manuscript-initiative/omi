import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {STUDIO_WEB_VERSION, STUDIO_ANDROID_VERSION, STUDIO_PUBLISHED_VERSION, STUDIO_SOURCE_RELEASE_NOTES,
  STUDIO_RC_EVIDENCE_URL, STUDIO_WINDOWS_STORE_VERSION, STUDIO_WINDOWS_PACKAGE_VERSION,
  STUDIO_SNAPSHOT_DATE, STUDIO_OFFICE_SEPARATION_PR_URL} from '../../studioReleaseVersions';

const messages = {
  en: {
    title: 'Web and Android RC available',
    status: 'RC2 includes the November publication, notes, research-project and OJS improvements. The Android candidate is a signed APK inside an Actions ZIP; GitHub sign-in may be required and the archive expires on 18 February 2027.',
    windows: 'Windows package', store: 'Last confirmed Store version (10 November)',
    windowsNote: 'This is the RC3 source package identity, not a signed or published Store version. Check the Store for the version currently offered.',
    downloads: 'Permanent direct desktop release',
    support: 'RC2 desktop candidates have also built successfully; see the channel table in the release notes. Linux desktop and macOS remain Preview; iOS/iPadOS Experimental.',
    notes: 'RC3 source candidate and release requirements', evidence: 'Previous RC2 build checks',
    office: 'The RC3 source candidate includes the EuroOffice separation and Studio DOCX import/export. Web/Android RC2, published desktop beta.13 and Store channels remain independently verified until RC3 packages are accepted.',
    officeDetails: 'Separation and rollout',
  },
  hu: {
    title: 'Elérhető a webes és az Android RC',
    status: 'Az RC2 tartalmazza a novemberi kiadványszerkesztési, jegyzet-, kutatásiprojekt- és OJS-fejlesztéseket. Az Android-jelölt aláírt APK az Actions ZIP-csomagjában; GitHub-bejelentkezés szükséges lehet, a csomag 2027. február 18-án lejár.',
    windows: 'Windows-csomag', store: 'Utoljára igazolt Store-verzió (november 10.)',
    windowsNote: 'Ez az RC3 forráskódjának előkészített csomagazonosítója, nem igazoltan kiadott vagy aláírt Store-verzió. A ténylegesen elérhető verziót a Store mutatja.',
    downloads: 'Állandó közvetlen asztali kiadás',
    support: 'Az RC2 asztali jelöltjei is sikeresen elkészültek; részletek a kiadási csatornák táblázatában. A natív Linux és macOS Preview, az iOS/iPadOS kísérleti.',
    notes: 'RC3 forráskódjelölt és kiadási feltételek', evidence: 'Korábbi RC2-buildellenőrzések',
    office: 'Az RC3 forráskódjelölt tartalmazza az EuroOffice szétválasztását, a Stúdió saját DOCX-importja és -exportja megmarad. A webes/Android RC2, az asztali beta.13 és a Store-csatorna változatlanul külön ellenőrzendő.',
    officeDetails: 'Szétválasztás és bevezetés',
  },
  de: {
    title: 'Web- und Android-RC verfügbar',
    status: 'RC2 enthält die November-Neuerungen für Satz, Anmerkungen, Forschungsprojekte und OJS. Der Android-Kandidat ist eine signierte APK im Actions-ZIP; GitHub-Anmeldung kann nötig sein. Das Archiv läuft am 18. Februar 2027 ab.',
    windows: 'Windows-Paket', store: 'Zuletzt bestätigte Store-Version (10. November)',
    windowsNote: 'Dies ist die vorbereitete RC3-Paketidentität, keine bestätigte signierte Store-Version. Das Store-Angebot ist gesondert zu prüfen.',
    downloads: 'Dauerhaftes direktes Desktop-Release',
    support: 'Auch RC2-Desktop-Kandidaten wurden erfolgreich gebaut; siehe Kanaltabelle in den Release-Notizen. Linux-Desktop und macOS bleiben Preview; iOS/iPadOS Experimental.',
    notes: 'RC3-Quellcodekandidat und Freigabevoraussetzungen', evidence: 'Frühere RC2-Build-Prüfungen',
    office: 'Der RC3-Quellcodekandidat enthält die Trennung von EuroOffice; DOCX-Import/-Export in Studio bleibt erhalten. Web/Android RC2, Desktop beta.13 und Store werden bis zur Abnahme der RC3-Pakete unabhängig verifiziert.',
    officeDetails: 'Trennung und Bereitstellung',
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
      <p>{copy.office}{' '}<Link to="/docs/studio/updates/2026-11-23">{copy.officeDetails}</Link>{' · '}<Link to={STUDIO_OFFICE_SEPARATION_PR_URL}>PR #971</Link></p>
      <p><Link to={STUDIO_SOURCE_RELEASE_NOTES}>{copy.notes}</Link>{' · '}
        <Link to={STUDIO_RC_EVIDENCE_URL}>{copy.evidence}</Link></p>
    </aside>
  );
}

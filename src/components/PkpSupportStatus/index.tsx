import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import support from '../../pkpSupport.json';

const copy = {
  en: {
    title: 'OJS and OMP compatibility',
    system: 'Publishing system', versions: 'Supported versions', tier: 'Support tier',
    note: 'OJS versions are in the Stable acceptance scope. OMP remains Preview. Available functions depend on the installed OMI plugin, server capabilities and your permissions.',
    details: 'Compatibility and acceptance details',
  },
  hu: {
    title: 'OJS- és OMP-kompatibilitás',
    system: 'Publikációs rendszer', versions: 'Támogatott verziók', tier: 'Támogatási szint',
    note: 'Az OJS-verziók a Stable elfogadási körbe tartoznak. Az OMP továbbra is Preview. Az elérhető funkciókat a telepített OMI-bővítmény, a szerver képességei és a jogosultságaid határozzák meg.',
    details: 'Kompatibilitási és elfogadási részletek',
  },
  de: {
    title: 'OJS- und OMP-Kompatibilität',
    system: 'Publikationssystem', versions: 'Unterstützte Versionen', tier: 'Supportstufe',
    note: 'Die OJS-Versionen gehören zum Stable-Abnahmeumfang. OMP bleibt Preview. Verfügbare Funktionen hängen vom installierten OMI-Plugin, den Serverfähigkeiten und Ihren Berechtigungen ab.',
    details: 'Kompatibilität und Abnahme im Detail',
  },
};

export default function PkpSupportStatus(): React.JSX.Element {
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const locale = currentLocale === 'hu' || currentLocale === 'de' ? currentLocale : 'en';
  const text = copy[locale];
  return (
    <section aria-labelledby="pkp-support-heading" className="margin-vert--lg">
      <h2 id="pkp-support-heading">{text.title}</h2>
      <table>
        <thead><tr><th scope="col">{text.system}</th><th scope="col">{text.versions}</th><th scope="col">{text.tier}</th></tr></thead>
        <tbody>{support.targets.map(target => (
          <tr key={target.platform}><th scope="row">{target.platform}</th><td>{target.versions.join(', ')}</td><td>{target.tier}</td></tr>
        ))}</tbody>
      </table>
      <p>{text.note}</p>
      <Link to="/docs/governance/studio-1.0-architecture/pkp-support-2026-11-07/">{text.details}</Link>
    </section>
  );
}

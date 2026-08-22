import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './index.module.css';

const FEATURE_DOC_TARGETS: Record<number, string> = {
  0: '/docs/specifications/document-model',
  2: '/docs/specifications/review-model',
  3: '/docs/integrations/ojs-profile-v1',
  4: '/docs/foundations/cross-platform-studio',
  5: '/docs/specifications/publishing-model',
};

const STUDIO_UPDATE = {
  en: {
    summary: 'The current alpha is now in beta-readiness stabilization. It includes browser, desktop and Android clients; multi-document desktop tabs; optimized large-DOCX import; double-blind peer review; OJS/OMP integration foundations; ORCID identity and cryptographic author signing; local spellcheck; and opt-in grammar/style proofreading.',
    multiDocument: 'Multi-document desktop editing',
    largeDocx: 'Large DOCX import optimization',
    identity: 'ORCID identity and author signatures',
    proofreading: 'Spelling, grammar and style checks',
  },
  hu: {
    summary: 'A jelenlegi alpha már béta-előkészítő stabilizációs szakaszban van. Böngészős, asztali és Android klienst, többdokumentumos asztali füleket, nagy DOCX-ek optimalizált importját, double-blind peer review-t, OJS/OMP integrációs alapokat, ORCID-identitást és szerzői kriptográfiai aláírást, helyi helyesírás-ellenőrzést, valamint bekapcsolható nyelvhelyességi és stílusellenőrzést tartalmaz.',
    multiDocument: 'Több dokumentum kezelése asztali nézetben',
    largeDocx: 'Nagy DOCX-ek optimalizált importja',
    identity: 'ORCID-identitás és szerzői aláírás',
    proofreading: 'Helyesírás-, nyelvhelyesség- és stílusellenőrzés',
  },
  de: {
    summary: 'Die aktuelle Alpha befindet sich inzwischen in der Beta-Readiness-Stabilisierung. Sie umfasst Browser-, Desktop- und Android-Clients, mehrere Dokument-Tabs auf dem Desktop, optimierten Import großer DOCX-Dateien, Double-blind Peer Review, OJS/OMP-Integrationsgrundlagen, ORCID-Identität und kryptografische Autorensignaturen sowie lokale Rechtschreib- und optionale Grammatik-/Stilprüfung.',
    multiDocument: 'Mehrere Dokumente in der Desktop-Ansicht',
    largeDocx: 'Optimierter Import großer DOCX-Dateien',
    identity: 'ORCID-Identität und Autorensignaturen',
    proofreading: 'Rechtschreib-, Grammatik- und Stilprüfung',
  },
} as const;

function getStudioUpdate(locale: string) {
  if (locale === 'hu' || locale === 'de') return STUDIO_UPDATE[locale];
  return STUDIO_UPDATE.en;
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = getPublicPageCopy(i18n.currentLocale).home;
  const studioUpdate = getStudioUpdate(i18n.currentLocale);

  return (
    <Layout title="Open Manuscript Initiative" description={t.description}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.logoWrap}>
            <img src="/img/omi-hero-light.svg" alt="Open Manuscript Initiative" className={styles.logo} />
          </div>
          <h1>Open Manuscript Initiative</h1>
          <p className={styles.kicker}>{t.kicker}</p>
          <p className={styles.tagline}>{t.tagline}</p>
          <p className={styles.heroDescription}>{t.description}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
            <Link className="button button--secondary button--lg" to="/docs/vision">{t.vision}</Link>
          </div>
        </section>

        <section className={styles.introduction}>
          <div className={styles.container}>
            <h2>{t.introTitle}</h2>
            <p className={styles.highlightText}>{t.intro}</p>
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.container}>
            <h2>{t.featuresTitle}</h2>
            <div className={styles.principleGrid}>
              {t.features.map((feature, index) => {
                const target = FEATURE_DOC_TARGETS[index];
                return (
                  <article className={styles.principleCard} key={feature}>
                    <h3>{target ? <Link to={target}>{feature}</Link> : feature}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.studio} aria-labelledby="current-development-status">
          <div className={styles.studioContent}>
            <p className={styles.sectionKicker}>Open Manuscript Studio · 0.1.0-alpha.4 · beta-readiness stabilization</p>
            <h2 id="current-development-status">{t.status}</h2>
            <h3>{t.currentTitle}</h3>
            <p>{studioUpdate.summary}</p>
            <div className={styles.studioActions}>
              <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
              <Link className="button button--secondary button--lg" to="/docs/governance/studio-implementation-status">{t.status}</Link>
            </div>
          </div>

          <aside className={styles.studioFeatures} aria-label={t.status}>
            <h3>0.1.0-alpha.4</h3>
            <p>Web · Windows · Linux · macOS · Android</p>
            <p><strong>24</strong> UI languages</p>
            <nav className={styles.contextLinks} aria-label={t.status}>
              <Link to="/docs/specifications/review-model">✓ {t.features[2]}</Link>
              <Link to="/docs/integrations/implementation-status">✓ {t.features[3]}</Link>
              <Link to="/docs/foundations/cross-platform-studio">✓ {studioUpdate.multiDocument}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.largeDocx}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.identity}</Link>
              <Link to="/docs/governance/studio-implementation-status">✓ {studioUpdate.proofreading}</Link>
            </nav>
            <p>✓ Android public alpha</p>
            <p>◐ Windows code signing — SignPath application pending</p>
            <p>◐ macOS notarization</p>
          </aside>
        </section>

        <section className={styles.cta}>
          <h2>{t.tagline}</h2>
          <p>{t.description}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
            <Link className="button button--secondary button--lg" to="https://github.com/open-manuscript-initiative/omi">{t.github}</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

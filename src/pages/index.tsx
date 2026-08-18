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
  5: '/docs/specifications/publishing-model',
};

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = getPublicPageCopy(i18n.currentLocale).home;

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
            <p className={styles.sectionKicker}>Open Manuscript Studio · 0.1.0-alpha.2</p>
            <h2 id="current-development-status">{t.status}</h2>
            <h3>{t.currentTitle}</h3>
            <p>{t.current}</p>
            <div className={styles.studioActions}>
              <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
              <Link className="button button--secondary button--lg" to="/docs/governance/studio-implementation-status">{t.status}</Link>
            </div>
          </div>

          <aside className={styles.studioFeatures} aria-label={t.status}>
            <h3>0.1.0-alpha.2</h3>
            <p>Web · Windows · Linux · macOS</p>
            <p><strong>24</strong> UI languages</p>
            <nav className={styles.contextLinks} aria-label={t.status}>
              <Link to="/docs/specifications/review-model">✓ {t.features[2]}</Link>
              <Link to="/docs/integrations/implementation-status">✓ {t.features[3]}</Link>
              <Link to="/docs/specifications/publishing-model">✓ {t.features[5]}</Link>
            </nav>
            <p>◐ Code signing / notarization</p>
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

import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {getPublicPageCopy} from '../i18n/publicPages';
import styles from './index.module.css';

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
              {t.features.map((feature) => (
                <article className={styles.principleCard} key={feature}><h3>{feature}</h3></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.studio}>
          <div className={styles.studioContent}>
            <p className={styles.sectionKicker}>Open Manuscript Studio</p>
            <h2>{t.currentTitle}</h2>
            <p>{t.current}</p>
            <div className={styles.studioActions}>
              <Link className="button button--primary button--lg" to="/studio">{t.studio}</Link>
              <Link className="button button--secondary button--lg" to="/docs/governance/studio-implementation-status">{t.status}</Link>
            </div>
          </div>
          <div className={styles.studioFeatures}>
            <h3>Open Manuscript Initiative</h3>
            <p>{t.description}</p>
            <Link to="https://github.com/open-manuscript-initiative/omi">{t.github}</Link>
          </div>
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

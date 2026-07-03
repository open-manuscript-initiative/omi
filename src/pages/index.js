import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Open Manuscript Initiative"
      description="Open standards for portable scholarly publishing">
      <main>
        <section className={styles.hero}>
          <img
            src="/img/omi-hero-dark.svg"
            alt="Open Manuscript Initiative"
            className={styles.logo}
          />

          <h1>Open Manuscript Initiative</h1>

          <p className={styles.kicker}>
            Open standards for portable scholarly publishing
          </p>

          <p className={styles.tagline}>
            Write naturally. Structure once. Publish everywhere.
          </p>

          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/vision">
              Explore the Vision
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/open-manuscript-initiative/omf">
              GitHub
            </Link>
          </div>
        </section>

        <section className={styles.cards}>
          <div>
            <h2>Meaning Before Appearance</h2>
            <p>Authors describe what content means, not how it should look.</p>
          </div>
          <div>
            <h2>Functional Manuscripts</h2>
            <p>Structure scholarly concepts such as titles, abstracts, citations, figures, and references.</p>
          </div>
          <div>
            <h2>Publish Everywhere</h2>
            <p>Generate HTML, PDF, EPUB, JATS XML, Crossref XML and future publishing formats from one source.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

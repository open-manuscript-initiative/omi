import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {

  return (
    <Layout
      title="Open Manuscript Initiative"
      description="Open standards for portable scholarly publishing">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.logoWrap}>
            <img
              src="/img/omi-hero-light.svg"
              alt="Open Manuscript Initiative"
              className={styles.logo}
            />
  </div>

            <h1>Open Manuscript Initiative</h1>

            <p className={styles.kicker}>
              Open standards for portable scholarly publishing
            </p>

            <p className={styles.tagline}>
              Write naturally. Structure once. Publish everywhere.
            </p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/vision">
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
          <article className={styles.card}>
            <h2>Meaning Before Appearance</h2>
            <p>
              Authors describe what content means, not how it should look.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Functional Manuscripts</h2>
            <p>
              Structure scholarly concepts such as titles, abstracts,
              citations, figures, tables and references.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Publish Everywhere</h2>
            <p>
              Generate HTML, PDF, EPUB, JATS XML, Crossref XML and future
              publishing formats from one source.
            </p>
          </article>
        </section>
                <section className={styles.why}>
  <div className={styles.container}>
    <h2>Why Open Manuscript Initiative?</h2>

    <p>
      Scholarly publishing still depends on disconnected tools. Authors write
      in word processors, reviewers annotate PDFs, editors manage journal
      systems, and publishers recreate manuscripts in XML.
    </p>

    <p>
      OMI replaces this fragmented workflow with a single semantic manuscript
      that accompanies research from the first draft to long-term preservation.
    </p>
  </div>
</section>
        <section className={styles.workflow}>
  <h2>How OMI Works</h2>

  <div className={styles.steps}>

    <div className={styles.step}>
      <h3>Write</h3>
      <p>Create your manuscript naturally.</p>
    </div>

    <div className={styles.arrow}>→</div>

    <div className={styles.step}>
      <h3>Structure</h3>
      <p>Capture scholarly meaning instead of formatting.</p>
    </div>

    <div className={styles.arrow}>→</div>

    <div className={styles.step}>
      <h3>Review</h3>
      <p>Collaborate using semantic annotations.</p>
    </div>

    <div className={styles.arrow}>→</div>

    <div className={styles.step}>
      <h3>Publish</h3>
      <p>Export to every scholarly publishing format.</p>
    </div>

  </div>
</section>
        <section className={styles.docs}>
  <h2>Documentation</h2>

  <div className={styles.docGrid}>

    <Link className={styles.docCard} to="/docs/vision">
      <h3>Vision</h3>
      <p>The philosophy behind OMI.</p>
    </Link>

    <Link className={styles.docCard} to="/docs/architecture">
      <h3>Architecture</h3>
      <p>System design and core principles.</p>
    </Link>

    <Link className={styles.docCard} to="/docs/document-model">
      <h3>Document Model</h3>
      <p>The semantic foundation of scholarly writing.</p>
    </Link>

    <Link className={styles.docCard} to="/docs/governance">
      <h3>Governance</h3>
      <p>How the project is organised.</p>
    </Link>

  </div>
</section>
        <section className={styles.cta}>
  <h2>Join the Initiative</h2>

  <p>
    Whether you are a researcher, editor, developer or publisher,
    your expertise can help shape the future of scholarly communication.
  </p>

  <Link
    className="button button--primary button--lg"
    to="https://github.com/open-manuscript-initiative/omf">
    Contribute on GitHub
  </Link>
</section>
      </main>
    </Layout>
  );
}

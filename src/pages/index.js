import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Open Manuscript Initiative',
        description: 'The homepage browser title',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message:
          'Open standards for structured, portable and interoperable scholarly publishing.',
        description: 'The homepage meta description',
      })}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.logoWrap}>
            <img
              src="/img/omi-hero-light.svg"
              alt={translate({
                id: 'homepage.logo.alt',
                message: 'Open Manuscript Initiative',
                description: 'Alternative text for the OMI logo',
              })}
              className={styles.logo}
            />
          </div>

          <h1>
            <Translate id="homepage.hero.title">
              Open Manuscript Initiative
            </Translate>
          </h1>

          <p className={styles.kicker}>
            <Translate id="homepage.hero.kicker">
              Open standards for portable scholarly publishing
            </Translate>
          </p>

          <p className={styles.tagline}>
            <Translate id="homepage.hero.tagline">
              Write naturally. Structure once. Publish everywhere.
            </Translate>
          </p>

          <p className={styles.heroDescription}>
            <Translate id="homepage.hero.description">
              OMI defines an open and interoperable foundation for creating,
              reviewing, exchanging, publishing and preserving scholarly
              manuscripts.
            </Translate>
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/vision">
              <Translate id="homepage.hero.exploreVision">
                Explore the Vision
              </Translate>
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="https://github.com/open-manuscript-initiative/omi">
              GitHub
            </Link>
          </div>
        </section>

        <section className={styles.introduction}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.introduction.kicker">
                A shared foundation for scholarly documents
              </Translate>
            </p>

            <h2>
              <Translate id="homepage.introduction.title">
                A scholarly manuscript is more than formatted text
              </Translate>
            </h2>

            <div className={styles.textColumns}>
              <p>
                <Translate id="homepage.introduction.currentProblem">
                  Scholarly publications still move between word processors,
                  PDF files, submission systems, editorial platforms, XML
                  conversion services and publishing templates. During this
                  process, authors and editors repeatedly recreate the same
                  structure and metadata.
                </Translate>
              </p>

              <p>
                <Translate id="homepage.introduction.omiApproach">
                  The Open Manuscript Initiative provides a common semantic
                  model for manuscripts. It records what each part of a
                  document means, while allowing editors and publishing
                  systems to decide how that content should appear.
                </Translate>
              </p>
            </div>

            <p className={styles.highlightText}>
              <Translate id="homepage.introduction.goal">
                The goal is simple: authors should be able to write naturally,
                while the manuscript remains structured, portable,
                machine-readable and ready for multiple publishing workflows.
              </Translate>
            </p>
          </div>
        </section>

        <section className={styles.cards}>
          <article className={styles.card}>
            <h2>
              <Translate id="homepage.cards.meaning.title">
                Meaning Before Appearance
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.cards.meaning.description">
                Authors describe what content means, not how it should look.
                Titles, abstracts, citations, notes and references remain
                identifiable scholarly objects.
              </Translate>
            </p>
          </article>

          <article className={styles.card}>
            <h2>
              <Translate id="homepage.cards.functional.title">
                Functional Manuscripts
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.cards.functional.description">
                A manuscript can support editing, validation, collaboration,
                peer review, translation, conversion and long-term
                preservation throughout its lifecycle.
              </Translate>
            </p>
          </article>

          <article className={styles.card}>
            <h2>
              <Translate id="homepage.cards.publish.title">
                Publish Everywhere
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.cards.publish.description">
                Generate HTML, PDF, EPUB, JATS XML, Crossref XML and future
                publishing formats from one authoritative source.
              </Translate>
            </p>
          </article>
        </section>

        <section className={styles.why}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.why.kicker">
                The problem
              </Translate>
            </p>

            <h2>
              <Translate id="homepage.why.title">
                Why Open Manuscript Initiative?
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.why.fragmentedWorkflow">
                Scholarly publishing still depends on disconnected tools.
                Authors write in word processors, reviewers annotate PDFs,
                editors manage journal systems, and publishers recreate
                manuscripts in XML or proprietary production environments.
              </Translate>
            </p>

            <p>
              <Translate id="homepage.why.repeatedWork">
                Every conversion can lose information, introduce errors or
                require manual correction. Metadata is copied between systems,
                references are reformatted repeatedly, and document structure
                is often reconstructed only near the end of the publishing
                process.
              </Translate>
            </p>

            <p>
              <Translate id="homepage.why.omiSolution">
                OMI replaces this fragmented workflow with a single semantic
                manuscript that accompanies research from the first draft
                through review, publication, distribution and long-term
                preservation.
              </Translate>
            </p>
          </div>
        </section>

        <section className={styles.outputs}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.outputs.kicker">
                One source, many outputs
              </Translate>
            </p>

            <h2>
              <Translate id="homepage.outputs.title">
                Structure once and reuse the manuscript everywhere
              </Translate>
            </h2>

            <p className={styles.sectionLead}>
              <Translate id="homepage.outputs.description">
                Content and presentation are separated. The same structured
                manuscript can be transformed for different audiences,
                platforms and preservation requirements without rebuilding the
                document from the beginning.
              </Translate>
            </p>

            <div className={styles.outputGrid}>
              <article className={styles.outputItem}>
                <h3>
                  <Translate id="homepage.outputs.web.title">
                    Web publishing
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.outputs.web.description">
                    Accessible and responsive HTML for journals, repositories
                    and institutional websites.
                  </Translate>
                </p>
              </article>

              <article className={styles.outputItem}>
                <h3>
                  <Translate id="homepage.outputs.print.title">
                    PDF and print
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.outputs.print.description">
                    Publication-ready layouts generated according to journal,
                    publisher or institutional styles.
                  </Translate>
                </p>
              </article>

              <article className={styles.outputItem}>
                <h3>
                  <Translate id="homepage.outputs.xml.title">
                    Scholarly XML
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.outputs.xml.description">
                    Structured formats such as JATS XML and Crossref metadata
                    for indexing, exchange and registration.
                  </Translate>
                </p>
              </article>

              <article className={styles.outputItem}>
                <h3>
                  <Translate id="homepage.outputs.archive.title">
                    Preservation packages
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.outputs.archive.description">
                    Documented and machine-readable research objects suitable
                    for repositories and long-term archives.
                  </Translate>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.principles.kicker">
                Core principles
              </Translate>
            </p>

            <h2>
              <Translate id="homepage.principles.title">
                Built for an open scholarly infrastructure
              </Translate>
            </h2>

            <div className={styles.principleGrid}>
              <article className={styles.principleCard}>
                <h3>
                  <Translate id="homepage.principles.open.title">
                    Open by design
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.principles.open.description">
                    The document model, specifications and reference
                    implementations are openly documented and available for
                    independent implementation.
                  </Translate>
                </p>
              </article>

              <article className={styles.principleCard}>
                <h3>
                  <Translate id="homepage.principles.portable.title">
                    Portable by default
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.principles.portable.description">
                    A manuscript must not depend on one application, hosting
                    provider, publisher or proprietary production system.
                  </Translate>
                </p>
              </article>

              <article className={styles.principleCard}>
                <h3>
                  <Translate id="homepage.principles.semantic.title">
                    Semantically structured
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.principles.semantic.description">
                    Scholarly elements retain their meaning and relationships
                    instead of being reduced to visual formatting.
                  </Translate>
                </p>
              </article>

              <article className={styles.principleCard}>
                <h3>
                  <Translate id="homepage.principles.identifiable.title">
                    Precisely identifiable
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.principles.identifiable.description">
                    Stable identifiers and anchors allow exact annotations,
                    references, reviews and version comparisons.
                  </Translate>
                </p>
              </article>

              <article className={styles.principleCard}>
                <h3>
                  <Translate id="homepage.principles.interoperable.title">
                    Interoperable
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.principles.interoperable.description">
                    OMI is designed to connect authoring tools, editorial
                    systems, repositories, publishing services and research
                    infrastructures.
                  </Translate>
                </p>
              </article>

              <article className={styles.principleCard}>
                <h3>
                  <Translate id="homepage.principles.durable.title">
                    Durable
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.principles.durable.description">
                    Scholarly content should remain readable, understandable
                    and processable long after the original software has
                    changed.
                  </Translate>
                </p>
              </article>
            </div>

            <div className={styles.sectionAction}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/foundations/core-principles">
                <Translate id="homepage.principles.readMore">
                  Read the Core Principles
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.workflow}>
          <p className={styles.sectionKicker}>
            <Translate id="homepage.workflow.kicker">
              Manuscript lifecycle
            </Translate>
          </p>

          <h2>
            <Translate id="homepage.workflow.title">
              How OMI Works
            </Translate>
          </h2>

          <p className={styles.sectionLead}>
            <Translate id="homepage.workflow.description">
              One manuscript can remain the authoritative scholarly object
              throughout writing, collaboration, review, publication and
              preservation.
            </Translate>
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>

              <h3>
                <Translate id="homepage.workflow.write.title">
                  Write
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.write.description">
                  Create the manuscript naturally without writing XML or
                  managing publishing templates.
                </Translate>
              </p>
            </div>

            <div className={styles.arrow} aria-hidden="true">
              →
            </div>

            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>

              <h3>
                <Translate id="homepage.workflow.structure.title">
                  Structure
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.structure.description">
                  Capture scholarly meaning, relationships and metadata instead
                  of visual formatting alone.
                </Translate>
              </p>
            </div>

            <div className={styles.arrow} aria-hidden="true">
              →
            </div>

            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>

              <h3>
                <Translate id="homepage.workflow.review.title">
                  Review
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.review.description">
                  Collaborate through roles, stable document anchors and
                  semantic annotations.
                </Translate>
              </p>
            </div>

            <div className={styles.arrow} aria-hidden="true">
              →
            </div>

            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>

              <h3>
                <Translate id="homepage.workflow.validate.title">
                  Validate
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.validate.description">
                  Check document structure, required metadata and scholarly
                  relationships before publication.
                </Translate>
              </p>
            </div>

            <div className={styles.arrow} aria-hidden="true">
              →
            </div>

            <div className={styles.step}>
              <span className={styles.stepNumber}>5</span>

              <h3>
                <Translate id="homepage.workflow.publish.title">
                  Publish
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.publish.description">
                  Export the approved manuscript to multiple scholarly
                  publishing and preservation formats.
                </Translate>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.audience}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.audience.kicker">
                Designed for the whole ecosystem
              </Translate>
            </p>

            <h2>
              <Translate id="homepage.audience.title">
                Who is OMI for?
              </Translate>
            </h2>

            <div className={styles.audienceGrid}>
              <article className={styles.audienceCard}>
                <h3>
                  <Translate id="homepage.audience.authors.title">
                    Authors
                  </Translate>
                </h3>

                <p>
                  <Translate id="homepage.audience.authors.description">
                    Spend less 

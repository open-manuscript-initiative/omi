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
            <Link className="button button--primary button--lg" to="/docs/vision">
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
              <Translate id="homepage.why.kicker">The problem</Translate>
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
                <h3><Translate id="homepage.outputs.web.title">Web publishing</Translate></h3>
                <p><Translate id="homepage.outputs.web.description">Accessible and responsive HTML for journals, repositories and institutional websites.</Translate></p>
              </article>
              <article className={styles.outputItem}>
                <h3><Translate id="homepage.outputs.print.title">PDF and print</Translate></h3>
                <p><Translate id="homepage.outputs.print.description">Publication-ready layouts generated according to journal, publisher or institutional styles.</Translate></p>
              </article>
              <article className={styles.outputItem}>
                <h3><Translate id="homepage.outputs.xml.title">Scholarly XML</Translate></h3>
                <p><Translate id="homepage.outputs.xml.description">Structured formats such as JATS XML and Crossref metadata for indexing, exchange and registration.</Translate></p>
              </article>
              <article className={styles.outputItem}>
                <h3><Translate id="homepage.outputs.archive.title">Preservation packages</Translate></h3>
                <p><Translate id="homepage.outputs.archive.description">Documented and machine-readable research objects suitable for repositories and long-term archives.</Translate></p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.principles.kicker">Core principles</Translate>
            </p>
            <h2>
              <Translate id="homepage.principles.title">
                Built for an open scholarly infrastructure
              </Translate>
            </h2>

            <div className={styles.principleGrid}>
              <Principle id="open" title="Open by design">
                The document model, specifications and reference implementations
                are openly documented and available for independent implementation.
              </Principle>
              <Principle id="portable" title="Portable by default">
                A manuscript must not depend on one application, hosting provider,
                publisher or proprietary production system.
              </Principle>
              <Principle id="semantic" title="Semantically structured">
                Scholarly elements retain their meaning and relationships instead
                of being reduced to visual formatting.
              </Principle>
              <Principle id="identifiable" title="Precisely identifiable">
                Stable identifiers and anchors allow exact annotations, references,
                reviews and version comparisons.
              </Principle>
              <Principle id="interoperable" title="Interoperable">
                OMI is designed to connect authoring tools, editorial systems,
                repositories, publishing services and research infrastructures.
              </Principle>
              <Principle id="durable" title="Durable">
                Scholarly content should remain readable, understandable and
                processable long after the original software has changed.
              </Principle>
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
            <Translate id="homepage.workflow.kicker">Manuscript lifecycle</Translate>
          </p>
          <h2><Translate id="homepage.workflow.title">How OMI Works</Translate></h2>
          <p className={styles.sectionLead}>
            <Translate id="homepage.workflow.description">
              One manuscript can remain the authoritative scholarly object
              throughout writing, collaboration, review, publication and
              preservation.
            </Translate>
          </p>

          <div className={styles.steps}>
            <Step number="1" id="write" title="Write">
              Create the manuscript naturally without writing XML or managing
              publishing templates.
            </Step>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <Step number="2" id="structure" title="Structure">
              Capture scholarly meaning, relationships and metadata instead of
              visual formatting alone.
            </Step>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <Step number="3" id="review" title="Review">
              Collaborate through roles, stable document anchors and semantic
              annotations.
            </Step>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <Step number="4" id="validate" title="Validate">
              Check document structure, required metadata and scholarly
              relationships before publication.
            </Step>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <Step number="5" id="publish" title="Publish">
              Export the approved manuscript to multiple scholarly publishing
              and preservation formats.
            </Step>
          </div>
        </section>

        <section className={styles.audience}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.audience.kicker">
                Designed for the whole ecosystem
              </Translate>
            </p>
            <h2><Translate id="homepage.audience.title">Who is OMI for?</Translate></h2>

            <div className={styles.audienceGrid}>
              <Audience id="authors" title="Authors">
                Spend less time reformatting documents and more time developing
                research and collaborating with contributors.
              </Audience>
              <Audience id="editors" title="Editors and journals">
                Receive more consistent manuscripts, richer metadata and
                structures that can be checked automatically.
              </Audience>
              <Audience id="publishers" title="Publishers">
                Produce multiple publication formats from a common source
                without repeatedly reconstructing the manuscript.
              </Audience>
              <Audience id="reviewers" title="Reviewers and translators">
                Work with precise annotations, identifiable document elements
                and role-based access to scholarly content.
              </Audience>
              <Audience id="libraries" title="Libraries and repositories">
                Preserve well-documented, machine-readable scholarly objects
                with explicit structure and metadata.
              </Audience>
              <Audience id="developers" title="Developers">
                Build editors, validators, converters, repository tools and
                integrations on an open document model.
              </Audience>
            </div>
          </div>
        </section>

        <section className={styles.studio}>
          <div className={styles.studioContent}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.studio.kicker">Reference implementation</Translate>
            </p>
            <h2><Translate id="homepage.studio.title">Open Manuscript Studio</Translate></h2>
            <p>
              <Translate id="homepage.studio.description">
                Open Manuscript Studio demonstrates how the OMI specifications
                can support a modern, multilingual and collaborative scholarly
                authoring environment.
              </Translate>
            </p>
            <p>
              <Translate id="homepage.studio.referenceImplementation">
                The Studio is not intended to become the only OMI editor. It is
                a reference implementation that tests the specifications and
                provides reusable patterns for other applications.
              </Translate>
            </p>

            <div className={styles.studioActions}>
              <Link className="button button--primary button--lg" to="https://studio.openmanuscript.org">
                <Translate id="homepage.studio.open">Open the Studio</Translate>
              </Link>
              <Link className="button button--secondary button--lg" to="https://github.com/open-manuscript-initiative/open-manuscript-studio">
                <Translate id="homepage.studio.source">View Source Code</Translate>
              </Link>
            </div>
          </div>

          <div className={styles.studioFeatures}>
            <h3><Translate id="homepage.studio.features.title">Development areas</Translate></h3>
            <ul>
              <li><Translate id="homepage.studio.features.editing">Structured manuscript editing</Translate></li>
              <li><Translate id="homepage.studio.features.collaboration">Role-based collaboration</Translate></li>
              <li><Translate id="homepage.studio.features.multilingual">Multilingual manuscripts and translation workflows</Translate></li>
              <li><Translate id="homepage.studio.features.annotations">Semantic annotations and peer review</Translate></li>
              <li><Translate id="homepage.studio.features.metadata">Metadata management and validation</Translate></li>
              <li><Translate id="homepage.studio.features.export">Publishing previews, import and export</Translate></li>
            </ul>
          </div>
        </section>

        <section className={styles.docs}>
          <p className={styles.sectionKicker}>
            <Translate id="homepage.documentation.kicker">Learn more</Translate>
          </p>
          <h2><Translate id="homepage.documentation.title">Documentation</Translate></h2>
          <p className={styles.sectionLead}>
            <Translate id="homepage.documentation.description">
              Explore the conceptual foundations, architecture and technical
              specifications of the Open Manuscript Initiative.
            </Translate>
          </p>

          <div className={styles.docGrid}>
            <DocCard id="vision" title="Vision" to="/docs/vision">
              The publishing problems OMI addresses and the future it aims to support.
            </DocCard>
            <DocCard id="principles" title="Core Principles" to="/docs/foundations/core-principles">
              The design commitments that guide the initiative and its specifications.
            </DocCard>
            <DocCard id="architecture" title="Architecture Map" to="/docs/foundations/architecture-map">
              The relationship between the core model, specifications, services and applications.
            </DocCard>
            <DocCard id="documentModel" title="Document Model" to="/docs/specifications/document-model">
              The semantic foundation for representing scholarly manuscripts.
            </DocCard>
            <DocCard id="anchorModel" title="Anchor Model" to="/docs/specifications/anchor-model">
              Stable references to document elements, ranges and scholarly objects.
            </DocCard>
            <DocCard id="annotationModel" title="Annotation Model" to="/docs/specifications/annotation-model">
              A shared structure for comments, review reports and semantic annotations.
            </DocCard>
          </div>
        </section>

        <section className={styles.openDevelopment}>
          <div className={styles.container}>
            <p className={styles.sectionKicker}>
              <Translate id="homepage.development.kicker">Open development</Translate>
            </p>
            <h2>
              <Translate id="homepage.development.title">
                Developed openly and collaboratively
              </Translate>
            </h2>
            <p>
              <Translate id="homepage.development.description">
                The Open Manuscript Initiative is an open-source and
                community-oriented project. Its specifications, documentation
                and reference implementations are developed publicly.
              </Translate>
            </p>
            <p>
              <Translate id="homepage.development.status">
                OMI is currently under active development. Early specifications
                and application releases may change as the model is tested
                through implementations, publishing workflows and community
                feedback.
              </Translate>
            </p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>
            <Translate id="homepage.cta.title">
              Help shape the open future of scholarly manuscripts
            </Translate>
          </h2>
          <p>
            <Translate id="homepage.cta.description">
              Whether you are a researcher, editor, librarian, developer,
              reviewer or publisher, your expertise can help build a more open,
              portable and interoperable scholarly communication
              infrastructure.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="https://github.com/open-manuscript-initiative/omi">
              <Translate id="homepage.cta.github">Contribute on GitHub</Translate>
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/vision">
              <Translate id="homepage.cta.documentation">Read the Documentation</Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

interface PrincipleProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Principle({id, title, children}: PrincipleProps) {
  return (
    <article className={styles.principleCard}>
      <h3><Translate id={`homepage.principles.${id}.title`}>{title}</Translate></h3>
      <p><Translate id={`homepage.principles.${id}.description`}>{children}</Translate></p>
    </article>
  );
}

interface StepProps {
  number: string;
  id: string;
  title: string;
  children: React.ReactNode;
}

function Step({number, id, title, children}: StepProps) {
  return (
    <div className={styles.step}>
      <span className={styles.stepNumber}>{number}</span>
      <h3><Translate id={`homepage.workflow.${id}.title`}>{title}</Translate></h3>
      <p><Translate id={`homepage.workflow.${id}.description`}>{children}</Translate></p>
    </div>
  );
}

interface AudienceProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Audience({id, title, children}: AudienceProps) {
  return (
    <article className={styles.audienceCard}>
      <h3><Translate id={`homepage.audience.${id}.title`}>{title}</Translate></h3>
      <p><Translate id={`homepage.audience.${id}.description`}>{children}</Translate></p>
    </article>
  );
}

interface DocCardProps {
  id: string;
  title: string;
  to: string;
  children: React.ReactNode;
}

function DocCard({id, title, to, children}: DocCardProps) {
  return (
    <Link className={styles.docCard} to={to}>
      <h3><Translate id={`homepage.documentation.${id}.title`}>{title}</Translate></h3>
      <p><Translate id={`homepage.documentation.${id}.description`}>{children}</Translate></p>
    </Link>
  );
}

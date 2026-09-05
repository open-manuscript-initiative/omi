---
title: OMI Ορολογία και ορισμοί
sidebar_label: Ορολογία και ορισμοί
sidebar_position: 50
---

# Open Manuscript Initiative Ορολογία και ορισμοί

## Μεταδεδομένα εγγράφου

| Πεδίο | Τιμή |
|---|---|
| Τύπος εγγράφου | Πολιτική ορολογίας διακυβέρνησης και κεντρικό γλωσσάριο |
| Κατάσταση | Πρόχειρο |
| Έκδοση | 0.1.0 |
| Κανονιστική γλώσσα | Αγγλικά |
| Ισχύει για | Προδιαγραφές, σχήματα, προφίλ, μητρώα, παραδείγματα, υλοποιήσεις και επίσημες μεταφράσεις τουOMI |

## 1. Σκοπός

Το παρόν έγγραφο καθορίζει την κοινή ορολογία της «Open Manuscript Initiative» (OMI).

Σκοπός του είναι να διασφαλίσει ότι ο ίδιος όρος έχει την ίδια έννοια σε ολόκληρη τη σειρά προδιαγραφών του OMI. Επίσης, διαχωρίζει έννοιες που συχνά αντιμετωπίζονται ως συνώνυμα σε προγράμματα επεξεργασίας κειμένου, συστήματα έκδοσης, αποθετήρια, διαχειριστές βιβλιογραφικών αναφορών και εκδοτικές πλατφόρμες.

Οι ορισμοί που περιλαμβάνονται στο παρόν έγγραφο έχουν ως σκοπό:

- να παρέχει ένα κοινό εννοιολογικό λεξιλόγιο·
- να αποφεύγονται οι αντιφατικοί ορισμοί μεταξύ των προδιαγραφών·
- υποστηρίζουν ακριβή σχήματα και APIs;
- να βελτιωθεί η διαλειτουργικότητα μεταξύ ανεξάρτητων υλοποιήσεων·
- να υποστηρίζει συνεπείς μεταφράσεις στα ουγγρικά, στα γερμανικά και σε μελλοντικές γλώσσες·
- να καταστήσει τις απαιτήσεις συμμόρφωσης ευκολότερες στην ερμηνεία και τον έλεγχο·
- να διακρίνουν τα σημασιολογικά αντικείμενα από τις οπτικές ή τις σειριοποιημένες αναπαραστάσεις τους.

## 2. Αρμοδιότητα και χρήση

Οι όροι με δια-προδιαγραφική έννοια ΠΡΕΠΕΙ να χρησιμοποιούν τους ορισμούς που περιέχονται στο παρόν έγγραφο.

Μια προδιαγραφή του τύπου «OMI» ΜΠΟΡΕΙ να ορίζει μια πιο περιορισμένη, εξειδικευμένη έννοια για το δικό της πεδίο εφαρμογής, αλλά ΠΡΕΠΕΙ:

- να προσδιορίσετε τον κεντρικό όρο που εξειδικεύεται·
- να διευκρινίσετε ρητά την πιο περιορισμένη έννοια·
- να αποφύγετε να έρχεστε σε αντίθεση με τον βασικό ορισμό·
- αποφύγετε να χρησιμοποιείτε ξανά τον όρο για μια διαφορετική έννοια χωρίς να το επισημάνετε.

Όταν ένας όρος δεν ορίζεται στο παρόν έγγραφο, ισχύει η σχετική προδιαγραφή του Συμβουλίου Προτύπων (OMI). Όταν ούτε το παρόν έγγραφο ούτε κάποια προδιαγραφή του Συμβουλίου Προτύπων (OMI) ορίζει έναν όρο, ισχύει η συνήθης τεχνική έννοια του όρου.

Οι αγγλικοί όροι που περιλαμβάνονται στο παρόν έγγραφο αποτελούν την επίσημη μορφή για τη σειρά προδιαγραφών της αγγλικής γλώσσας. Οι επίσημες μεταφράσεις ΠΡΕΠΕΙ να διατηρούν τις εννοιολογικές διακρίσεις, ακόμη και όταν σε μια άλλη γλώσσα χρησιμοποιείται συνήθως μία λέξη για να καλύψει διάφορους αγγλικούς όρους.

## 3. Κανονιστική γλώσσα

Οι λέξεις-κλειδιά **ΠΡΕΠΕΙ**, **ΔΕΝ ΠΡΕΠΕΙ**, **ΘΑ ΠΡΕΠΕΙ**, **ΔΕΝ ΘΑ ΠΡΕΠΕΙ** και **ΜΠΟΡΕΙ** εκφράζουν επίπεδα κανονιστικών απαιτήσεων όταν γράφονται με κεφαλαία γράμματα.

Η χρήση λέξεων όπως «πρέπει», «θα έπρεπε» ή «μπορεί» με μικρά γράμματα αποτελεί μέρος της συνήθους πρόζας και δεν δημιουργεί αυτόνομες απαιτήσεις συμμόρφωσης.

## 4. Αρχές ορολογίας

### 4.1 Η ιδέα πριν από την ετικέτα

Ένας όρος ονομάζει μια έννοια. Η έννοια παραμένει σταθερή ακόμη και όταν:

- μια διεπαφή χρήστη χρησιμοποιεί μια μεταφρασμένη ή συντομευμένη ετικέτα·
- το όνομα ενός αρχείου αλλάζει·
- σε μια οπτική απεικόνιση χρησιμοποιείται διαφορετική διατύπωση·
- ένα εξωτερικό πρότυπο χρησιμοποιεί διαφορετικό όρο·
- μια επιστημονική ειδικότητα χρησιμοποιεί ένα τοπικό συνώνυμο.

### 4.2 Σημασιολογική ταυτότητα πριν από την παρουσίαση

OMI διακρίνει ένα αντικείμενο από την οπτική του αναπαράσταση.

Παραδείγματα:

- μια εμφάνιση παραπομπής δεν είναι το μορφοποιημένο κείμενο της παραπομπής·
- ένα αντικείμενο επικεφαλίδας δεν αντιστοιχεί σε συγκεκριμένο μέγεθος γραμματοσειράς·
- μια σημείωση δεν είναι μια έγχρωμη επισήμανση·
- μια βιβλιογραφική εγγραφή δεν είναι μια συμβολοσειρά καταχώρησης βιβλιογραφίας·
- ένα χειρόγραφο δεν είναι αρχείο τύπου «DOCX» ή «PDF».

### 4.3 Τοπική ταυτότητα και εξωτερική ταυτότητα

An OMI object may have a stable local identifier and one or more external identifiers.

A local identifier establishes identity within an OMI document, package, or system context. An external identifier connects the object to an identifier system outside that context.

Neither type automatically replaces the other.

### 4.4 Roles and people are separate

A person or organisation is an agent. Author, editor, reviewer, translator, publisher, and funder are roles that an agent may hold in a defined context.

A role MUST NOT be treated as a permanent property of the agent.

### 4.5 Content and workflow are separate

A scholarly object may participate in editing, review, translation, publication, or preservation workflows. Workflow status does not normally change the semantic type of the object.

### 4.6 Normative and informative meanings

A glossary definition may define a concept without defining every machine-readable property needed to serialize it. The relevant OMI specification defines its complete normative data model and processing rules.

## 5. Core conceptual relationships

The principal OMI concepts relate as follows:

```text
Scholarly work
    ↓ represented during its lifecycle as
Manuscript
    ↓ expressed through one or more
Document instances or versions
    ↓ composed of identifiable
Scholarly objects
    ↓ serialized into
OMI documents and packages
    ↓ processed by
Implementations
    ↓ rendered or exported as
Publications and exchange formats
```

The principal reference concepts relate as follows:

```text
Citable resource
    ↓ described by
Bibliographic record
    ↓ selected into
Manuscript reference library
    ↓ referenced by
Citation occurrence
    ↓ formatted through
Citation style and publication profile
    ↓ displayed as
Rendered citation or bibliography entry
```

The principal annotation concepts relate as follows:

```text
Scholarly object or content range
    ↓ addressed by
Anchor
    ↓ used as target by
Annotation
    ↓ may participate in
Review, editorial, translation, or discussion workflow
```

## 6. Manuscript, document, file, and publication

These terms MUST NOT be used as interchangeable synonyms in normative OMI text.

### 6.1 Scholarly work

An intellectual or creative scholarly entity considered independently from any particular file, edition, language version, or publication format.

A scholarly work may be represented by multiple manuscripts, versions, translations, editions, or publications.

### 6.2 Manuscript

A scholarly work represented as an editable, structured intellectual object across its lifecycle.

A manuscript may include:

- structured content;
- metadata;
- contributors;
- citations and bibliographic records;
- annotations and review objects;
- language and translation relationships;
- version and provenance information;
- publication and validation profiles;
- associated resources.

A manuscript is not defined by one serialization or one software product.

### 6.3 Document

A concrete structured representation of manuscript content and associated data in a defined processing context.

A manuscript may have multiple document instances, such as:

- a current editable document;
- a submitted document;
- a reviewed revision;
- an accepted document;
- a published snapshot;
- a translated document.

In OMI property names and specification titles, *document* normally refers to structured data, not merely a visual page sequence.

### 6.4 Document instance

One identifiable realization of a document at a particular version, state, or processing boundary.

A document instance may be mutable or immutable according to its lifecycle state.

### 6.5 Source document

The document selected as the authoritative input for a defined operation, such as translation, rendering, validation, comparison, or export.

A source document is contextual. The term does not necessarily mean the earliest historical version.

### 6.6 Canonical document

The document instance designated as authoritative for a defined purpose.

Examples include:

- the canonical editable manuscript;
- the canonical accepted version;
- the canonical source for publication rendering.

Canonical status MUST identify its scope and authority. OMI does not assume that one document is canonical for every purpose.

### 6.7 File

A sequence of stored or transmitted bytes identified as one filesystem or transport object.

A file may contain:

- one serialized OMI document;
- an OMI package or container;
- a publication output;
- an imported external document;
- an associated resource.

A file is a storage or transport unit, not necessarily a semantic unit.

### 6.8 File format

A defined syntax and set of encoding rules for representing data in a file or byte stream.

A file format does not by itself define all semantic meaning. OMI prose specifications define semantics; schemas and format specifications define machine-readable structure and encoding.

### 6.9 Serialization

The process of encoding a data model into a file, byte stream, or message representation.

Deserialization is the reverse operation: reconstructing data objects from a serialized representation.

### 6.10 Package

A transferable unit containing an OMI document together with zero or more related resources, manifests, schemas, media files, provenance records, or signatures.

A package may be represented by one container file or by a directory structure.

### 6.11 Container

The technical structure used to group and address multiple files or resources as one transferable or preservable unit.

A container is not identical to the semantic package it carries. The same package model may be encoded through different container technologies.

### 6.12 Publication

A released scholarly representation intended for dissemination, citation, access, or preservation.

A publication may be rendered as HTML, PDF, EPUB, JATS XML, print, structured metadata, or another output.

A publication is normally derived from a defined manuscript or document version but does not replace the semantic source.

### 6.13 Version of record

The publication version formally designated by the responsible publisher or publishing authority as the definitive published version.

A version of record is a publication-status concept. It does not imply that earlier or later manuscript versions cease to exist.

### 6.14 Publication output

A generated representation intended for a defined publication target.

Examples include:

- accessible HTML;
- print-ready PDF;
- EPUB;
- JATS XML;
- Crossref deposit metadata;
- DataCite metadata;
- archival packages.

A publication output may be reproducible from a source document and a publication profile.

## 7. Objects and document structure

### 7.1 Object

An identifiable unit represented in an OMI data model.

An object may have:

- a type;
- a stable identifier;
- properties;
- relationships;
- lifecycle information;
- provenance;
- extensions.

The unqualified word *object* SHOULD be avoided where a more specific term is available.

### 7.2 Scholarly object

An identifiable semantic entity within or associated with a manuscript.

A scholarly object is defined by its scholarly meaning and relationships rather than its visual appearance.

Examples include:

- manuscript;
- section;
- paragraph;
- heading;
- quotation;
- figure;
- table;
- equation;
- note;
- citation occurrence;
- bibliographic record;
- annotation;
- review decision;
- contributor assertion.

### 7.3 Structural object

A scholarly object whose principal purpose is to organize document content.

Examples include document, section, list, table, figure group, and bibliography container.

### 7.4 Content object

A scholarly object whose principal purpose is to carry intellectual content.

Examples include paragraph, quotation, code block, formula, figure, table, note, and bibliography entry.

The same object type may have both structural and content functions.

### 7.5 Block object

A content or structural object that occupies a block-level position in the document hierarchy.

Typical block objects include:

- paragraph;
- heading;
- list;
- quotation block;
- figure;
- table;
- equation block;
- code block;
- note block.

Block status concerns document structure, not visual CSS layout.

### 7.6 Inline object

An object embedded within the content flow of a block object.

Examples include:

- citation occurrence;
- cross-reference;
- inline note marker;
- inline formula;
- semantic emphasis;
- named entity;
- linked identifier.

### 7.7 Section

A hierarchical structural object that groups related content under a semantic or editorial purpose.

A section may have a heading, type, identifier, child sections, and block content.

Visual numbering is a rendering decision unless a profile makes numbering semantically significant.

### 7.8 Heading

A label associated with a section or another defined structural division.

A heading level expresses hierarchy. It MUST NOT be inferred only from font size or visual styling.

### 7.9 Paragraph

A block-level unit of prose or comparable textual content.

A paragraph may contain inline objects and text spans.

### 7.10 Note

A supplementary scholarly object related to content but not necessarily part of the principal reading flow.

Examples include footnotes, endnotes, author notes, editorial notes, and translator notes.

A note is not equivalent to an annotation. A note is manuscript content; an annotation is an object targeting content or another object.

### 7.11 Resource

A digital or physical entity associated with a manuscript, bibliographic record, package, or publication.

Examples include images, datasets, audio, video, supplementary files, schemas, and external web resources.

The term MUST identify whether the resource is embedded, packaged, referenced, or externally resolved when that distinction affects processing.

## 8. Identity and identifiers

### 8.1 Identity

The property of being distinguishable as the same entity across references, versions, operations, or systems.

Identity is conceptually separate from display labels and mutable metadata.

### 8.2 Identifier

A value used to distinguish or reference an entity within a defined identifier system or scope.

A specification using an identifier MUST define or reference:

- its scope;
- its syntax;
- its uniqueness expectations;
- its comparison rules;
- its persistence expectations;
- its resolution behaviour, if any.

### 8.3 Local identifier

An identifier whose uniqueness is guaranteed only within a defined OMI document, package, workspace, repository, or implementation scope.

A local identifier may remain stable during export and import, but its authority is established by the containing context.

### 8.4 Global identifier

An identifier intended to be unique across independent systems or administrative domains.

Global uniqueness does not necessarily imply persistence or resolvability.

### 8.5 Persistent identifier

An identifier governed with the intention that it remain stable over time even if locations or metadata change.

Examples may include DOI, Handle, ARK, ORCID, ROR, URN, and other managed schemes.

A persistent identifier MUST NOT be described as permanently resolvable unless the applicable identifier system provides that guarantee.

### 8.6 External identifier

An identifier assigned by a system, registry, authority, repository, publisher, or catalogue outside the current OMI identity scope.

Examples include:

- DOI for a publication;
- ORCID for a person;
- ROR identifier for an organisation;
- ISBN for a publication manifestation;
- repository accession number;
- archival reference code.

### 8.7 Canonical identifier

The identifier designated as the preferred identifier for a defined operation or context.

Canonical status does not invalidate aliases or other identifiers. The selection rule MUST be documented.

### 8.8 Alias

An alternative identifier, name, label, or route that refers to the same entity in a defined context.

Aliases MUST NOT be treated as separate entities solely because their strings differ.

### 8.9 Resolver

A processor or service that accepts an identifier or query and attempts to locate, retrieve, or reconcile the corresponding entity or metadata.

Resolution failure does not necessarily invalidate the identifier.

## 9. Agents, identity, and contribution

### 9.1 Agent

An entity capable of holding a role, making an assertion, performing an action, or receiving attribution.

Core agent types include:

- person;
- organisation;
- consortium;
- project;
- service;
- unidentified or historical agent.

### 9.2 Person

A human agent.

A person object may contain names, identifiers, affiliations, contact information, and provenance. It MUST NOT assume that one immutable name string fully represents the person.

### 9.3 Organisation

A collective or institutional agent with an identity independent from any individual member.

Examples include universities, publishers, laboratories, archives, libraries, societies, and funding bodies.

### 9.4 Contributor

An agent associated with a scholarly object, manuscript, publication, workflow event, or other OMI entity through one or more contribution roles.

Contributor is a contextual relationship, not a separate agent type.

### 9.5 Author

A contributor whose role includes intellectual authorship of the scholarly work or defined part of it.

OMI does not determine whether a contribution satisfies a journal, discipline, legal, or ethical authorship policy. Profiles and editorial policies may impose additional criteria.

### 9.6 Editor

An agent holding an editorial role in relation to a manuscript, publication, bibliographic work, or workflow.

The role MUST be qualified where ambiguity is possible, for example:

- manuscript editor;
- journal editor;
- volume editor;
- copy editor;
- technical editor;
- specification editor.

### 9.7 Reviewer

An agent assigned to evaluate a manuscript, object, claim, method, translation, or publication output within a review process.

Reviewer identity may be public, restricted, pseudonymous, or hidden according to the applicable workflow and access policy.

### 9.8 Translator

A contributor responsible for producing or reviewing a translation of scholarly content or metadata.

Translator is a role. A translated document SHOULD preserve the relationship to the relevant source document and source version.

### 9.9 Publisher

An agent responsible for releasing or formally disseminating a publication.

The publisher role is distinct from software that performs rendering or hosting.

### 9.10 Contribution role

A controlled or extensible value describing how an agent contributed in a defined context.

Examples include author, editor, translator, reviewer, data curator, software contributor, and illustrator.

A contribution role SHOULD be represented independently from contributor order and independently from the agent's identity.

### 9.11 Affiliation

A contextual relationship between an agent, normally a person, and an organisation, project, or institutional unit.

An affiliation may have:

- a role or position;
- a start and end date;
- a source;
- a manuscript-specific assertion;
- an external organisation identifier.

An affiliation MUST NOT be assumed to be timeless.

### 9.12 Contributor order

The explicit ordering of contributors for a defined role or output.

Contributor order is not always equivalent to contribution magnitude, alphabetical order, or display order. The applicable specification or profile MUST state the relevant interpretation.

### 9.13 Corresponding contributor

A contributor designated as a communication contact for a defined manuscript, submission, publication, or workflow.

Corresponding status is not an authorship rank and MAY apply to more than one contributor.

## 10. Metadata and provenance

### 10.1 Metadata

Structured information that describes, identifies, manages, contextualises, relates, or supports the processing of an entity.

Metadata may be:

- descriptive;
- administrative;
- technical;
- structural;
- rights-related;
- provenance-related;
- preservation-related.

Metadata is not necessarily less important or less authoritative than content.

### 10.2 Metadata value

One structured assertion associated with a metadata property.

A metadata value may include language, provenance, confidence, validity period, or source information in addition to its primary value.

### 10.3 Provenance

Information describing the origin, custody, authorship, derivation, transformation, or assertion history of an entity or value.

Provenance may identify:

- responsible agent;
- source system;
- source identifier;
- time of creation or retrieval;
- transformation operation;
- software and version;
- confidence or verification state;
- relationship to earlier versions.

### 10.4 Assertion

A statement represented in OMI data that claims a value, relationship, status, or fact about an entity.

An assertion may have its own provenance and confidence. OMI representation does not by itself guarantee that the asserted statement is true.

### 10.5 Authoritative value

A value selected as governing for a defined purpose according to an explicit authority rule.

Authority may derive from an author, publisher, registry, editorial decision, verified identifier source, or other documented policy.

Authoritative status MUST NOT be inferred solely from recency.

### 10.6 Source

The entity, system, document, agent, or process from which data or content was obtained.

The term SHOULD be qualified where ambiguity is possible, for example metadata source, translation source, citation source, or import source.

### 10.7 Confidence

A documented assessment of certainty associated with a match, assertion, extraction, reconciliation, or inferred relationship.

Confidence is not a substitute for provenance and MUST NOT be represented as objective probability unless the method defines it as such.

## 11. Anchors and references within documents

### 11.1 Anchor

A stable or resolvable reference to a location, range, object, or state within scholarly content.

An anchor may identify:

- an object;
- an insertion point;
- a text span;
- a range of objects;
- a table cell;
- a figure region;
- a document version or state.

An anchor is an addressing mechanism. It is not the annotation or citation that uses it.

### 11.2 Anchor target

The object, content range, location, or state identified by an anchor.

### 11.3 Anchor resolution

The process of determining the current target represented by an anchor.

Resolution may produce:

- one target;
- multiple targets;
- a degraded approximate target;
- an unresolved result;
- an invalid result.

### 11.4 Stable anchor

An anchor designed to continue resolving to the intended semantic target across permitted edits or transformations.

Stable does not mean immutable. The Anchor Model defines which changes an anchor is expected to survive.

### 11.5 Position

A location between or within content units in a defined document state.

Raw character offsets are positions but are not necessarily stable anchors.

### 11.6 Range

An ordered span between a start boundary and an end boundary in a defined content space.

A range MAY be empty where the relevant specification permits insertion-point semantics.

### 11.7 Cross-reference

A manuscript object that points from one location or object to another internal or externally identified object for navigational or scholarly reference.

A cross-reference is distinct from a bibliographic citation occurrence, although both may use anchors and identifiers.

### 11.8 Unresolved reference

A reference whose target cannot be identified or accessed in the current processing context.

An unresolved reference may be recoverable and MUST NOT automatically be treated as an unknown reference or malformed identifier.

## 12. Annotation and review

### 12.1 Annotation

A scholarly object that associates a body of commentary or structured information with one or more targets.

An annotation normally contains:

- an identifier;
- one or more targets;
- an annotation body;
- motivation or type;
- creator or responsible agent;
- timestamps and provenance;
- visibility or access information;
- lifecycle status.

### 12.2 Annotation target

The entity addressed by an annotation.

A target may be represented through an anchor, external identifier, object identifier, or another target mechanism defined by the Annotation Model.

### 12.3 Annotation body

The content or structured assertion that the annotation associates with its target.

The body may contain text, proposed changes, classifications, links, decisions, or domain-specific structured data.

### 12.4 Annotation motivation

A value expressing the purpose of an annotation.

Examples may include commenting, reviewing, correcting, questioning, translating, classifying, linking, or highlighting.

Motivation does not by itself define workflow authority.

### 12.5 Comment

An annotation whose primary body is discursive commentary.

Not every annotation is a comment; annotations may also carry structured decisions, classifications, or machine-generated findings.

### 12.6 Review

A structured evaluation process or evaluation object concerning a manuscript, scholarly object, publication output, or specification.

The term MUST be qualified when it refers to the process rather than the resulting review object.

### 12.7 Review object

A scholarly object containing or representing review content, findings, recommendations, questions, decisions, or related annotations.

### 12.8 Review round

A bounded stage in a review workflow during which a defined set of review activities applies to a defined manuscript version or submission state.

### 12.9 Editorial decision

A structured decision made under an editorial workflow, such as request revision, accept, reject, or return for technical correction.

An editorial decision is distinct from a reviewer recommendation.

### 12.10 Proposed change

A structured suggestion to insert, delete, replace, move, or otherwise modify content or metadata.

A proposed change does not alter the authoritative document until accepted by an authorised workflow operation.

## 13. Bibliographic and citation terminology

### 13.1 Citable resource

An entity that may serve as the target of a scholarly citation.

Examples include publications, datasets, software, archival items, legal materials, images, audiovisual works, standards, web resources, and unpublished manuscripts.

### 13.2 Bibliographic record

A structured description of a cited or citable resource, independent from any particular citation occurrence or manuscript location.

A bibliographic record may contain:

- local and external identifiers;
- titles;
- contributors;
- resource type;
- publication or creation information;
- container relationships;
- language;
- access locations;
- provenance;
- version and status relationships.

### 13.3 Bibliographic identity

The determination of which work, expression, manifestation, version, or item a bibliographic record describes.

Bibliographic identity MUST NOT be inferred only from similar formatted citations.

### 13.4 Manuscript reference library

The manuscript-level collection of bibliographic records selected for possible or actual citation, verification, reading lists, or publication output.

A record may be present without currently being cited.

### 13.5 Reference-library entry

The manuscript-specific inclusion or representation of a bibliographic record in a manuscript reference library.

The entry may contain manuscript-specific state, such as cited, uncited, verified, excluded from bibliography, or requires review.

### 13.6 Citation

A general scholarly act or relationship in which one part of a manuscript refers to a citable resource.

In normative model descriptions, the more precise term *citation occurrence* SHOULD be used for the manuscript object, and *rendered citation* for its presentation.

### 13.7 Citation occurrence

A reference from a specific manuscript location or object to a reference-library entry or bibliographic record.

A citation occurrence may include:

- anchor;
- locator;
- prefix;
- suffix;
- citation mode;
- citation intent;
- group membership;
- occurrence-specific notes.

Multiple citation occurrences may point to the same bibliographic record.

### 13.8 Citation target

The bibliographic record, reference-library entry, or other citable resource identified by a citation occurrence.

### 13.9 Locator

Structured information identifying a specific part or position within a cited resource.

Examples include page, page range, chapter, section, paragraph, figure, table, line, folio, timestamp, verse, article, clause, archival unit, or software version.

A locator is not part of the general bibliographic description unless it describes the resource as a whole.

### 13.10 Citation group

An ordered collection of citation occurrences presented or processed together at one manuscript location.

Each member retains its own target and locator.

### 13.11 Citation mode

A value describing how a citation participates in discourse or presentation.

Examples may include parenthetical, narrative, note citation, bibliography-only, or source note.

Citation mode is distinct from citation style.

### 13.12 Citation intent

A structured indication of the scholarly relationship or reason for citing a target.

Examples may include supports, refutes, extends, discusses, compares, reproduces, provides data, or provides method.

Citation intent is optional unless a profile requires it.

### 13.13 Citation style

A set of rules for formatting citations and bibliographies.

Examples include APA, Chicago, MLA, Vancouver, OSCOLA, and journal-specific styles.

A citation style does not define the identity or semantic structure of the cited resource.

### 13.14 Rendered citation

Presentation text or markup generated from a citation occurrence, its target bibliographic record, a citation style, language settings, and a publication profile.

A rendered citation is output, not the authoritative citation object.

### 13.15 Bibliography

A publication or manuscript section that presents selected bibliographic records according to defined inclusion and rendering rules.

A bibliography is not identical to the manuscript reference library. The library may contain uncited or non-displayed records.

### 13.16 Bibliography entry

One rendered or serialized presentation of a bibliographic record within a bibliography.

### 13.17 Reference

An overloaded general term that MAY mean a link, citation, bibliographic entry, pointer, or source.

Normative OMI documents SHOULD avoid the unqualified term *reference* when one of the following is intended:

- citation occurrence;
- bibliographic record;
- reference-library entry;
- cross-reference;
- identifier reference;
- external normative reference.

### 13.18 Work

In bibliographic modelling, an abstract intellectual or creative creation independent from a particular language, edition, or distribution form.

### 13.19 Expression

A specific intellectual or linguistic realization of a work, such as a translation or revised text.

### 13.20 Manifestation

A publication or distribution embodiment of an expression, such as a particular edition, format, or publisher release.

### 13.21 Item

An individual physical or digital exemplar of a manifestation when copy-level identity matters.

OMI profiles MAY use a simplified bibliographic model when these distinctions are unnecessary.

### 13.22 Reconciliation

The process of comparing candidate bibliographic records or metadata assertions to determine whether they describe the same entity, related versions, or distinct entities.

### 13.23 Deduplication

The process of identifying and managing duplicate representations of the same entity.

Deduplication may result in merging, linking, preserving separate versions, or requesting human confirmation.

### 13.24 Retraction

A formal status indicating that a publication or scholarly object has been withdrawn from the reliable scholarly record by an authorised source.

A retracted object is not deleted from bibliographic history. Its status and relationships SHOULD remain representable.

### 13.25 Correction

A published or recorded change intended to amend an error in an earlier scholarly object or publication.

Correction relationships MUST distinguish the correcting object from the corrected object.

## 14. Language and translation

### 14.1 Language

The natural or formal language associated with content or metadata.

Machine-readable language identification SHOULD use BCP 47 language tags where applicable.

### 14.2 Document language

The principal language declared for a document instance.

A multilingual document may have more than one relevant language. A principal document language does not override language tags on individual objects or spans.

### 14.3 Original language

The language in which a defined scholarly object, work, or document was originally composed for the relationship being described.

Original-language status is contextual and SHOULD identify the relevant source object or version.

### 14.4 Translation

A scholarly object or document that represents content from a source language in a target language while preserving an explicit relationship to the source.

Translation is not equivalent to localisation.

### 14.5 Source language

The language of the source content used for a translation operation.

### 14.6 Target language

The language into which content is translated.

### 14.7 Translation unit

An identifiable source object, target object, or aligned group of objects used as a unit of translation and synchronisation.

A translation unit may be a paragraph, heading, note, table cell, metadata value, or other scholarly object.

### 14.8 Translation alignment

A structured relationship between one or more source objects and one or more target-language objects.

Alignment may be one-to-one, one-to-many, many-to-one, or unresolved.

### 14.9 Translation status

A workflow or synchronisation state associated with translated content.

Examples may include untranslated, draft, reviewed, approved, stale, and superseded.

### 14.10 Stale translation

A translation whose source content has changed after the translation was produced or approved, such that synchronisation review is required.

Stale does not necessarily mean incorrect.

### 14.11 Localisation

Adaptation of user-interface, display, formatting, or locale-dependent behaviour for a language or region.

Localisation may include translation, but it does not normally create a scholarly translation relationship between manuscript objects.

### 14.12 Transliteration

Representation of text from one writing system in another according to a defined method.

Transliteration is not translation.

## 15. Versions, changes, and states

### 15.1 Version

An identifiable state of an entity that is distinguished from earlier or later states according to a versioning model.

A version may apply to a manuscript, document, object, specification, schema, package, profile, translation, or implementation.

### 15.2 Revision

A version created through one or more changes to an existing entity.

Some specifications may distinguish minor revisions from formally released versions.

### 15.3 Change

A recorded operation or difference that modifies content, metadata, structure, relationships, permissions, or state.

### 15.4 Change set

A grouped collection of changes treated as one reviewable, attributable, or transactional unit.

### 15.5 Snapshot

An immutable or intentionally fixed representation of an entity at a defined point in its lifecycle.

A snapshot may be used for submission, review, publication, audit, citation, or preservation.

### 15.6 Release

A version formally published or distributed with declared identity, status, and release metadata.

A repository commit is not automatically a release.

### 15.7 Draft

A lifecycle state indicating that content or a specification remains subject to substantive change.

For specification maturity, the formal definition in the Specification Lifecycle policy governs.

### 15.8 Submitted version

A document snapshot formally provided to an editorial, review, repository, or publication workflow.

### 15.9 Accepted version

A manuscript version accepted for publication or another defined outcome, normally before or independently from final publication formatting.

### 15.10 Published version

A document or publication version released for dissemination.

The term MUST be qualified when several published versions exist.

### 15.11 Immutable

Not permitted to change while retaining the same identity and version designation.

An immutable entity may be superseded by a new version.

### 15.12 Mutable

Permitted to change while retaining its current working identity according to the applicable lifecycle and audit rules.

### 15.13 Branch

A line of development that diverges from another version history and may later be merged, compared, or maintained independently.

### 15.14 Merge

An operation that combines changes or histories from multiple branches or versions.

A merge MUST define conflict handling and provenance where semantic integrity may be affected.

## 16. Collaboration and access

### 16.1 Workspace

A collaborative environment associated with one or more manuscripts, documents, resources, members, and workflow settings.

A workspace is an implementation-independent collaboration concept. It does not require one storage or hosting model.

### 16.2 Workspace member

An agent granted a role or permissions in a workspace.

Membership is contextual and may have status, validity period, invitation provenance, and access scope.

### 16.3 Role

A named set of responsibilities or expected activities held by an agent in a defined context.

A role is not automatically a permission set, although a policy may map roles to permissions.

### 16.4 Permission

An authorisation to perform a defined operation on a defined resource or scope.

Examples include view, comment, edit, translate, review, manage members, publish, and export.

### 16.5 Access control

The policies and mechanisms that determine whether an agent or implementation may perform an operation on a resource.

### 16.6 Owner

A workspace role with primary responsibility or authority for the workspace according to the applicable collaboration policy.

Ownership MUST NOT be interpreted as intellectual-property ownership unless a separate legal policy states that relationship.

### 16.7 Co-author

An author who participates in a shared manuscript or workspace with other authors.

Co-author is a collaborative role; it does not by itself define contributor order or authorship policy.

### 16.8 Viewer

A role permitted to access defined content without modifying it.

### 16.9 Invitation

A structured request offering an agent membership or a role in a workspace or workflow.

### 16.10 Audit event

A recorded event relevant to accountability, provenance, security, or workflow history.

An audit event may identify actor, action, target, timestamp, context, and outcome.

## 17. Specifications, profiles, and conformance

### 17.1 OMI specification

A registered technical document defining normative structures, behaviours, constraints, vocabularies, or interoperability requirements under a permanent `OMI-SPEC-NNN` identifier.

### 17.2 Specification suite

A coordinated set of OMI specifications, schemas, registries, profiles, examples, and conformance resources published as one OMI release.

### 17.3 Governance document

A document defining project process, authority, lifecycle, versioning, editorial practice, terminology, or contribution rules.

A governance document is not automatically an implementation specification.

### 17.4 Normative

Required for conformance, interpretation, or implementation of the applicable specification.

Normative content establishes obligations or authoritative definitions.

### 17.5 Informative

Provided for explanation, context, guidance, rationale, or illustration without independently creating conformance requirements.

### 17.6 Requirement

A testable normative obligation or permission expressed by a specification.

### 17.7 Conformance

Satisfaction of the applicable normative requirements for a declared specification version, conformance class, and profile.

Conformance is always scoped. An unqualified claim such as “OMI compatible” is insufficient for formal use.

### 17.8 Conformance class

A named category of implementation role with a defined set of applicable requirements.

Examples include producer, consumer, validator, renderer, editor, importer, exporter, and preservation processor.

### 17.9 Conformance claim

A declaration that an identified implementation and version satisfies a defined specification, version, class, and profile, subject to documented limitations.

### 17.10 Profile

A declared set of constraints, defaults, selections, or extensions applied to one or more OMI specifications for a defined purpose, community, discipline, workflow, or publication target.

A profile MUST NOT silently contradict the core specification it profiles.

### 17.11 Publication profile

A profile defining requirements and rendering behaviour for one or more publication targets.

It may define:

- required metadata;
- permitted structures;
- section ordering;
- citation style;
- note rendering;
- output formats;
- accessibility requirements;
- validation rules.

### 17.12 Validation profile

A profile defining which validation rules, severity levels, vocabularies, and constraints apply in a defined context.

### 17.13 Extension

A declared addition to the OMI core model or behaviour through an authorised extension mechanism.

An extension MUST NOT silently redefine core semantics.

### 17.14 Extension point

A location or mechanism explicitly designed to permit compatible extension.

### 17.15 Extension namespace

A stable identifier scope used to distinguish extension-defined names, properties, types, or values from OMI core names and other extensions.

### 17.16 Registry

A maintained collection of stable identifiers and associated metadata for controlled values, document identifiers, profiles, capabilities, media types, roles, or extensions.

### 17.17 Registry entry

One identified item in a registry, with status, meaning, provenance, and lifecycle information.

### 17.18 Capability

A declared function, feature, format, profile, or processing behaviour supported by an implementation.

Capability is not identical to permission. Capability describes what a system can do; permission describes what an actor is authorised to do.

### 17.19 Core

The minimum common normative model or capability set required by the applicable OMI conformance definition.

The word *core* MUST identify its version or specification context when ambiguity is possible.

## 18. Schemas, validation, and processing

### 18.1 Schema

A machine-readable formalisation of structural constraints for part of an OMI data model.

A schema may validate types, required properties, cardinality, syntax, and selected relationships. It does not automatically define all semantics or processing behaviour.

### 18.2 JSON Schema

The schema language used to express machine-checkable constraints for JSON representations where adopted by an OMI specification.

### 18.3 Validation

The process of evaluating data, content, structure, relationships, or behaviour against defined rules.

Validation may include:

- syntax validation;
- schema validation;
- structural validation;
- semantic validation;
- referential-integrity validation;
- profile validation;
- publication-readiness validation.

### 18.4 Validator

An implementation or component that performs validation and reports results.

### 18.5 Validation rule

An identified rule evaluated during validation.

A validation rule SHOULD define scope, condition, severity, message, and applicable specification or profile.

### 18.6 Validation result

One reported outcome of evaluating a validation rule against a target.

### 18.7 Validation report

A structured collection of validation results together with context such as validator version, specification version, profile, time, and target identity.

### 18.8 Valid

Satisfying the applicable validation rules for a declared schema, specification, and profile.

Valid MUST NOT be used without identifying the relevant rule set when several are possible.

### 18.9 Invalid

Violating one or more applicable normative validation rules.

### 18.10 Error

A condition that violates a normative requirement or prevents an operation from completing correctly.

### 18.11 Warning

A permitted or recoverable condition that may cause information loss, reduced interoperability, ambiguity, or unexpected output.

### 18.12 Informational result

A validation or processing result that communicates context without indicating invalidity or a recommended correction.

### 18.13 Processor

An implementation or component that consumes OMI data and performs a defined operation.

Examples include parser, validator, renderer, importer, exporter, resolver, converter, and preservation processor.

### 18.14 Parser

A processor that reads a serialized representation and constructs or identifies its structural data model.

Parsing success does not imply semantic validity.

### 18.15 Producer

An implementation that creates or emits OMI-conformant data.

### 18.16 Consumer

An implementation that reads or processes OMI data.

### 18.17 Renderer

A processor that generates a presentation or publication output from semantic OMI content and applicable profiles.

### 18.18 Rendering

The process of generating a visual, textual, audio, tactile, or machine-targeted presentation from structured semantic content.

Rendering MUST NOT silently alter the authoritative semantic source.

## 19. Import, export, and interoperability

### 19.1 Import

The process of converting or incorporating data from an external representation into an OMI representation.

### 19.2 Export

The process of converting OMI data into an external representation or output package.

### 19.3 Conversion

A transformation between representations, formats, schemas, or models.

Import and export are directional forms of conversion relative to an OMI processing context.

### 19.4 Mapping

A documented relationship between concepts, properties, values, structures, or operations in a source model and a target model.

### 19.5 Lossless mapping

A mapping that preserves all information required by the declared mapping scope and permits equivalent reconstruction.

### 19.6 Conditionally lossless mapping

A mapping that is lossless only when stated preconditions or profile restrictions are satisfied.

### 19.7 Lossy mapping

A mapping that omits, approximates, merges, or transforms information in a way that prevents complete equivalent reconstruction.

Loss MUST be documented and SHOULD be reported by conversion tools.

### 19.8 Round trip

A sequence in which data is converted from one representation to another and then back to the original representation or model.

A round-trip claim MUST state which information and semantics are required to be preserved.

### 19.9 Interoperability

The ability of independent systems to exchange and process information with an agreed level of semantic and behavioural consistency.

Interoperability may be structural, semantic, behavioural, operational, or preservation-oriented. The relevant dimension SHOULD be stated.

### 19.10 Compatibility

The ability of versions, implementations, formats, or profiles to operate together under defined expectations.

The unqualified term *compatible* SHOULD be avoided. Specifications SHOULD state backward, forward, round-trip, behavioural, schema, API, or profile compatibility.

### 19.11 Preservation

The managed activity of maintaining the accessibility, integrity, identity, interpretability, and provenance of scholarly content over time.

### 19.12 Preservation processor

An implementation that validates, packages, migrates, verifies, or maintains OMI content for long-term preservation.

## 20. Implementation terminology

### 20.1 Implementation

Software, a service, component, library, or system that implements one or more OMI specifications or profiles.

An implementation is not the standard itself.

### 20.2 Reference implementation

An OMI-maintained implementation intended to demonstrate, test, and provide feedback on the specifications.

Open Manuscript Studio is a reference implementation. Its behaviour is not normative unless incorporated into a published specification.

### 20.3 Independent implementation

An implementation developed with sufficient organisational or technical independence to provide meaningful interoperability evidence beyond one shared codebase.

### 20.4 Open Manuscript Studio

The primary OMI reference authoring and collaboration application.

The official shortened name is *Studio* where the context is unambiguous.

### 20.5 OMI document

A serialized document that declares and follows an OMI document or file-format specification.

The phrase MUST NOT be used for every document merely edited with an OMI-aware application.

### 20.6 Support

A declared ability of an implementation to process a defined specification, version, profile, feature, or format.

Support MUST be qualified as appropriate, for example reads, writes, validates, renders, imports, exports, or preserves.

### 20.7 Unknown feature

A feature, type, property, extension, or value that an implementation does not recognise.

### 20.8 Unsupported feature

A recognised feature that an implementation does not provide or process.

Unknown and unsupported are distinct conditions.

### 20.9 Implementation-defined

Behaviour intentionally left to an implementation within limits defined by a specification.

Implementation-defined behaviour MUST be documented by the implementation when it affects interoperability or user expectations.

### 20.10 User agent

An application acting on behalf of a human user to create, display, edit, review, validate, or process OMI content.

The term does not mean a scholarly agent such as an author or organisation.

## 21. Error-prone distinctions

### 21.1 Manuscript versus file

A manuscript is the scholarly intellectual object. A file is one storage or transport representation.

Incorrect:

> The manuscript is a ZIP file.

Preferred:

> The manuscript package is serialized in a ZIP-based container.

### 21.2 Document versus publication

A document is a structured representation in a processing context. A publication is a released output.

### 21.3 Bibliographic record versus citation occurrence

A bibliographic record describes the cited resource. A citation occurrence records one act and location of citation.

### 21.4 Reference library versus bibliography

A reference library is a structured collection available to the manuscript. A bibliography is a selected rendered output.

### 21.5 Anchor versus annotation

An anchor identifies a target. An annotation associates a body with that target.

### 21.6 Note versus annotation

A note belongs to manuscript content. An annotation targets content or another object and may remain outside the published reading flow.

### 21.7 Role versus permission

A role describes responsibility or function. A permission authorises an operation.

### 21.8 Specification versus schema

A specification defines semantics and behaviour. A schema formalises machine-checkable structural constraints.

### 21.9 Profile versus extension

A profile selects or constrains specifications for a defined context and may declare extensions. An extension adds names, structures, or behaviours through an extension mechanism.

### 21.10 Translation versus localisation

Translation creates target-language scholarly content related to source content. Localisation adapts software or presentation for a locale.

### 21.11 Version versus revision

Version is the general identified state. Revision normally indicates a version produced by change from an earlier state.

### 21.12 Capability versus permission

Capability concerns technical support. Permission concerns authorisation.

### 21.13 Valid versus conformant

Valid normally describes data evaluated against a rule set. Conformant describes an implementation, document, or process satisfying the complete applicable normative requirements for a declared scope.

### 21.14 Persistent versus immutable

Persistent means intended to remain identifiable over time. Immutable means not permitted to change under the same version identity.

## 22. Terms to qualify or avoid

Normative OMI documents SHOULD qualify the following ambiguous terms:

| Avoid or qualify | Prefer |
|---|---|
| reference | citation occurrence, bibliographic record, cross-reference, or normative reference |
| source | metadata source, translation source, import source, or cited source |
| version | manuscript version, schema version, implementation version, or publication version |
| record | bibliographic record, validation record, audit event, or registry entry |
| object | scholarly object, structural object, content object, or agent |
| editor | manuscript editor, journal editor, volume editor, copy editor, or specification editor |
| format | file format, publication format, display format, or data model |
| compatible | backward compatible, forward compatible, round-trip compatible, or profile compatible |
| valid | valid against a named schema, specification, or profile |
| link | identifier, URL, anchor, citation, cross-reference, or relationship |
| user | author, editor, reviewer, translator, administrator, reader, or API client |
| published | released as which publication version or output |
| canonical | canonical for which scope and authority |

The following phrases SHOULD NOT appear in normative requirements without measurable definition:

- appropriate metadata;
- standard format;
- normal citation;
- correct rendering;
- user-friendly;
- high quality;
- permanent link;
- secure storage;
- complete support.

## 23. Capitalisation and formatting

Generic concepts use lowercase:

> a manuscript, an anchor, a citation occurrence, a profile

Official names use title case:

> Open Manuscript Initiative, Open Manuscript Studio, Citation Model, Specification Registry

Machine-readable names, properties, literal values, and identifiers use code formatting:

> The `documentLanguage` property contains a language tag.

Permanent OMI document identifiers use uppercase prefixes:

```text
OMI-SPEC-005
OMI-PROFILE-001
OMI-REG-001
OMI-SCHEMA-001
OMI-EXAMPLE-001
```

## 24. Abbreviations

An abbreviation SHOULD be expanded at first substantive use in a document unless the intended audience can reasonably be expected to know it.

Recommended forms include:

| Abbreviation | Meaning |
|---|---|
| OMI | Open Manuscript Initiative |
| CSL | Citation Style Language |
| DOI | Digital Object Identifier |
| ORCID | Open Researcher and Contributor ID |
| ROR | Research Organization Registry |
| JATS | Journal Article Tag Suite |
| API | Application Programming Interface |
| URI | Uniform Resource Identifier |
| URL | Uniform Resource Locator |
| UUID | Universally Unique Identifier |
| JSON | JavaScript Object Notation |
| XML | Extensible Markup Language |
| PDF | Portable Document Format |
| EPUB | Electronic Publication |

Plural abbreviations use no apostrophe:

> APIs, DOIs, URLs

## 25. Translation requirements

Official translations of OMI specifications MUST use an approved language-specific terminology list derived from this document.

The translation process MUST preserve distinctions including:

- manuscript versus document;
- citation occurrence versus bibliographic record;
- reference library versus bibliography;
- anchor versus annotation;
- note versus annotation;
- role versus permission;
- specification versus schema;
- translation versus localisation;
- capability versus permission;
- valid versus conformant.

Where one target-language word would collapse two OMI concepts, the translation SHOULD use:

- a qualified compound term;
- a stable technical loanword;
- a parenthetical clarification;
- a language-specific glossary note.

Property names, enumeration values, identifiers, media types, namespace identifiers, and requirement identifiers MUST NOT be translated.

## 26. Adding or changing terminology

A proposal to add a central term SHOULD include:

- proposed term;
- concise definition;
- reason the concept is required;
- related and contrasting terms;
- affected specifications and schemas;
- known external-standard equivalents;
- translation considerations;
- examples of correct and incorrect use.

A definition change MUST be evaluated under the OMI Versioning Policy.

A change is potentially breaking when it alters:

- the identity of the concept;
- the set of entities covered;
- normative interpretation;
- schema or API meaning;
- conformance results;
- established mappings to external standards.

Deprecated terms MUST remain documented with their replacement and MUST NOT be silently reassigned.

## 27. External terminology mappings

OMI may map its terms to external standards, but equivalence MUST NOT be assumed solely because labels are similar.

A mapping SHOULD state whether it is:

- exact;
- narrower;
- broader;
- overlapping;
- context-dependent;
- non-equivalent.

Examples of relevant external terminology sources include:

- JATS;
- Citation Style Language;
- Crossref metadata;
- DataCite metadata;
- ORCID;
- ROR;
- Dublin Core;
- schema.org;
- library and archival models;
- web annotation models;
- preservation standards.

External mappings are informative unless incorporated normatively by an OMI specification.

## 28. Conformance expectations

OMI specifications and official profiles MUST use central terms consistently.

A conforming implementation MAY use different user-interface labels, but its exported data, APIs, documentation, and conformance claims MUST preserve the defined conceptual distinctions.

An implementation MUST NOT claim that two central OMI concepts are equivalent when the specifications distinguish them.

A schema property or API field using a central term SHOULD link to or reproduce the applicable definition in generated documentation.

## 29. Maintenance

This document is maintained under the OMI Specification Lifecycle, Versioning Policy, and Specification Style Guide.

Terminology review SHOULD occur when:

- a new specification is drafted;
- a schema introduces a new core type or property;
- two specifications use the same word differently;
- an external mapping exposes conceptual mismatch;
- an official translation cannot preserve a distinction clearly;
- implementation experience reveals ambiguity.

Editorial corrections may be released as patch versions. Compatible additions may be released as minor versions. Changes that alter established normative meaning require a major version or a documented pre-1.0 breaking change.

## 30. Summary

OMI depends on distinctions that conventional document software often hides.

A manuscript is not a file. A citation occurrence is not a formatted citation. A bibliographic record is not a bibliography entry. An anchor is not an annotation. A role is not a permission. A specification is not a schema. A reference implementation is not the standard.

Maintaining these distinctions allows independent systems to exchange scholarly content without repeatedly reconstructing its meaning. This terminology document therefore forms part of the architectural foundation of the Open Manuscript Initiative.
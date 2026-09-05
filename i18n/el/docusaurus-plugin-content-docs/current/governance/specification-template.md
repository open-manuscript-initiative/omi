---
id: specification-template
title: OMI Πρότυπο προδιαγραφών
sidebar_label: Πρότυπο προδιαγραφών
description: Υποχρεωτική δομή εκκίνησης για τις νέες προδιαγραφές του Open Manuscript Initiative.
keywords:
  - Open Manuscript Initiative
  - OMI
  - specification template
  - standards development
  - technical writing
  - conformance
---

# Open Manuscript Initiative Πρότυπο προδιαγραφών

## Μεταδεδομένα εγγράφου

| Πεδίο | Τιμή |
|---|---|
| Τύπος εγγράφου | Πρότυπο διακυβέρνησης |
| Κατάσταση | Πρόχειρο |
| Έκδοση | 0.1.0 |
| Κανονιστική γλώσσα | Αγγλικά |
| Ισχύει για | Νέες και ουσιαστικά αναθεωρημένες προδιαγραφές OMI |
| Υπεύθυνη ομάδα | Διαχειριστές του OMI |
| Τελευταία ενημέρωση | 06/08/2026 |

## 1. Σκοπός

Το παρόν έγγραφο παρέχει το επίσημο αρχικό πρότυπο για τις προδιαγραφές του «Open Manuscript Initiative».

Το πρότυπο μετατρέπει τις απαιτήσεις των ακόλουθων εγγράφων διακυβέρνησης σε μια επαναχρησιμοποιήσιμη δομή σύνταξης:

- [Specification Lifecycle](./specification-lifecycle.md);
- [Versioning Policy](./versioning-policy.md);
- [Specification Style Guide](./style-guide.md);
- [Terminology and Definitions](./terminology.md);
- [Specification Registry](./specification-registry.md);
- [Documentation Architecture](./documentation-architecture.md).

Κάθε νέο έγγραφο του «`OMI-SPEC-*`» ΠΡΕΠΕΙ να ξεκινά από αυτό το πρότυπο, εκτός εάν στο pull request του καταγράφεται και αιτιολογείται μια περιορισμένη εξαίρεση.

Το πρότυπο έχει σχεδιαστεί ώστε κάθε προδιαγραφή:

- αναγνωρίσιμο·
- υπό εξέταση·
- ελέγξιμο·
- ανεξάρτητο από την υλοποίηση·
- να είναι σαφής όσον αφορά τη συμβατότητα και τη συμμόρφωση·
- κατάλληλο για μετάφραση και μακροπρόθεσμη συντήρηση.

## 2. Πότε να χρησιμοποιήσετε αυτό το πρότυπο

Αυτό το πρότυπο ΠΡΕΠΕΙ να χρησιμοποιείται για:

- μια προδιαγραφή «OMI» που έχει καθοριστεί πρόσφατα·
- μια προσωρινή προδιαγραφή που έχει λάβει την κατάσταση «Σχέδιο»·
- μια εκτεταμένη αναδιατύπωση που αντικαθιστά τη δομή μιας υπάρχουσας προδιαγραφής·
- μια προδιαγραφή που έχει διαχωριστεί από ή έχει ενσωματωθεί σε άλλο κανονιστικό έγγραφο.

Το πλήρες πρότυπο δεν απαιτείται για:

- πολιτικές διακυβέρνησης·
- εκπαιδευτικά βίντεο και επεξηγηματικοί οδηγοί·
- σημειώσεις εφαρμογής·
- ανεπίσημες προτάσεις σε στάδιο διερεύνησης·
- αρχεία μετάφρασης·
- τεκμηρίωση σχήματος που δημιουργήθηκε αυτόματα.

Τα προφίλ, τα μητρώα, τα σχήματα, τα παραδείγματα και τα έγγραφα αντιστοίχισης ΘΑ ΠΡΕΠΕΙ να χρησιμοποιούν αυτό το πρότυπο ως βάση και να εφαρμόζουν τις προσαρμογές που περιγράφονται στην ενότητα «Προσαρμογές ανά τύπο εγγράφου».

## 3. Πώς να χρησιμοποιήσετε το πρότυπο

1. Αποκτήστε ή κάντε κράτηση για τον μόνιμο αναγνωριστικό κωδικό στο Μητρώο Προδιαγραφών του Προγράμματος «OMI».
2. Αντιγράψτε το πρότυπο πηγής από την ενότητα «Πηγή προδιαγραφών έτοιμη για αντιγραφή».
3. Αντικαταστήστε κάθε σύμβολο-κενό που περικλείεται σε αγκύλες.
4. Διαγράψτε τις οδηγίες σύνταξης που έχουν γραφτεί μέσα σε σχόλια τύπου «HTML».
5. Διαγράψτε τις προαιρετικές ενότητες μόνο αφού βεβαιωθείτε ότι δεν ισχύουν.
6. Τηρήστε την απαιτούμενη σειρά των ενοτήτων, εκτός εάν το μάθημα απαιτεί τεκμηριωμένη εξαίρεση.
7. Προσθέστε το νέο έγγραφο στην κανονική κατηγορία της πλευρικής στήλης.
8. Προσθέστε ή ενημερώστε τα κλειδιά μετάφρασης πλοήγησης στα ουγγρικά και τα γερμανικά.
9. Ελέγξτε την εγκυρότητα των στοιχείων «Markdown», των συνδέσμων, των παραδειγμάτων, των αναγνωριστικών και των σχημάτων πριν από την αξιολόγηση.
10. Καταγράψτε ρητά τα εκκρεμή ζητήματα σχεδιασμού, όσο το έγγραφο παραμένει σε προ-Stable στάδιο.

ΔΕΝ ΠΡΕΠΕΙ να παραμείνει κάποιο σύμβολο κράτησης θέσης σε ένα έγγραφο που προτείνεται για την κατάταξη ως «Υποψήφιο προς Αναθεώρηση».

## 4. Συμβάσεις για τους χαρακτήρες-υποκατάστατα

Το έτοιμο προς αντιγραφή κείμενο χρησιμοποιεί τις ακόλουθες μορφές εικονικών στοιχείων:

| Μορφή | Έννοια |
|---|---|
| `<OMI-SPEC-NNN>` | Μόνιμος αναγνωριστικός κωδικός προδιαγραφής |
| `<OFFICIAL TITLE>` | Καταχωρημένος τίτλος |
| `<SHORT TITLE>` | Συνοπτική ετικέτα πλευρικής στήλης |
| `<0.1.0>` | Σημασιολογική έκδοση εγγράφου |
| `<Draft>` | Κατάσταση κύκλου ζωής |
| `<EDITOR OR GROUP>` | Υπεύθυνος συντάκτης ή συντακτική ομάδα |
| `<YYYY-MM-DD>` | Ημερομηνία σύμφωνα με το πρότυπο ISO 8601 |
| `<NONE>` | Ρητή δήλωση ότι δεν ισχύει καμία τιμή |
| `<TEXT>` | Απαραίτητο κείμενο που παρέχεται από τον συγγραφέα |
| `[OPTIONAL]` | Ενότητα ή πεδίο που μπορεί να αφαιρεθεί όταν δεν ισχύει |

Οι αγκύλες που χρησιμοποιούνται ως σύμβολα κράτησης θέσης αποτελούν απλώς τεχνική σημειογραφία. ΠΡΕΠΕΙ να αφαιρεθούν από τα δημοσιευμένα έγγραφα.

## 5. Απαιτούμενα μεταδεδομένα

Κάθε προδιαγραφή ΠΡΕΠΕΙ να περιλαμβάνει τα κανονιστικά μεταδεδομένα της στο κύριο σώμα του κειμένου. Η παρουσίασή τους μόνο στην εισαγωγή δεν αρκεί.

Ο πίνακας μεταδεδομένων ΠΡΕΠΕΙ να περιλαμβάνει:

| Πεδίο | Απαιτούμενο περιεχόμενο |
|---|---|
| Αναγνωριστικό | Μόνιμο αναγνωριστικό του `OMI-SPEC-*` |
| Τίτλος | Επίσημος καταχωρισμένος τίτλος |
| Έκδοση | `MAJOR.MINOR.PATCH` |
| Κατάσταση | Στάδιο κύκλου ζωής |
| Τύπος εγγράφου | Κανονιστικό, ενημερωτικό ή μικτού τύπου |
| Γλώσσα αναφοράς | Συνήθως τα αγγλικά |
| Συντάκτες | Υπεύθυνοι ή συντακτική ομάδα |
| Τελευταία ενημέρωση | Ημερομηνία κατά ISO 8601 |
| Αντικαθιστά | Προκάτοχο ή `None` |
| Αντικαταστάθηκε από | Διάδοχος ή `None` |
| Εξαρτάται από | Νομοθετικές εξαρτήσεις ή `None` |
| Χρησιμοποιείται από | Γνωστές εξαρτήσεις ή `None known` |
| Σχήματα | Σχετικά αντικείμενα που μπορούν να αναγνωστούν από μηχανές ή `None` |
| Προφίλ | Κατάλληλα προφίλ ή `None` |
| Κατάσταση υλοποίησης | Σύνδεσμος προς περίληψη ή πίνακα |
| Σύστημα παρακολούθησης προβλημάτων | Η επίσημη τοποθεσία για τα προβλήματα |

Μια προδιαγραφή που ορίζει σειριοποιημένα δεδομένα ΘΑ ΠΡΕΠΕΙ επίσης να προσδιορίζει παραδείγματα fixtures, εργαλείων επικύρωσης και δοκιμών συμμόρφωσης.

## 6. Απαιτούμενη σειρά των ενοτήτων

Η τυπική σειρά των ενοτήτων είναι:

1. Περίληψη
2. Κατάσταση του παρόντος εγγράφου
3. Συμμόρφωση
4. Πεδίο εφαρμογής
5. Ορολογία
6. Αρχές σχεδιασμού
7. Επισκόπηση μοντέλων
8. Μοντέλο δεδομένων
9. Μοντέλο επεξεργασίας
10. Επικύρωση και διαχείριση σφαλμάτων
11. Επεκτασιμότητα
12. Έκδοση και συμβατότητα
13. Διαλειτουργικότητα
14. Θέματα ασφάλειας, προστασίας προσωπικών δεδομένων και ακεραιότητας
15. Θέματα προσβασιμότητας
16. Θέματα διεθνοποίησης
17. Παραδείγματα
18. Παραπομπές σε πρότυπα
19. Ενημερωτικές πηγές
20. Κατάσταση υλοποίησης
21. Ανεπίλυτα ζητήματα
22. Ιστορικό αλλαγών
23. Ευχαριστίες

Τα τμήματα 1–5, 10, 12, 14, 18 και 22 είναι υποχρεωτικά για κάθε προδιαγραφή.

Μια υποχρεωτική ενότητα που δεν περιλαμβάνει ειδικές παρατηρήσεις ΠΡΕΠΕΙ να παραμείνει και να αναφέρει ότι το ζήτημα εξετάστηκε και ότι, προς το παρόν, δεν είναι γνωστές απαιτήσεις που αφορούν συγκεκριμένα τις προδιαγραφές.

## 7. Κανόνες σύνταξης που περιλαμβάνονται στο πρότυπο

Οι κανονιστικές απαιτήσεις ΠΡΕΠΕΙ:

- να χρησιμοποιείτε σκόπιμα τους όρους των απαιτήσεων με κεφαλαία γράμματα·
- να προσδιορίσει τον αρμόδιο για την υλοποίηση ρόλο·
- παρατηρήσιμη συμπεριφορά σε σταθερή κατάσταση·
- αποφύγετε να συνδυάζετε απαιτήσεις που δεν σχετίζονται μεταξύ τους σε μία πρόταση·
- να καθορίσετε τη συμπεριφορά σε περίπτωση αστοχίας, όπου ενδέχεται να προκύψει μη συμμόρφωση·
- να είναι επαληθεύσιμο ή να υπόκειται σε αντικειμενική αξιολόγηση.

Οι προδιαγραφές που βρίσκονται στο στάδιο «Υποψήφια για αναθεώρηση» ή σε μεταγενέστερο στάδιο ΘΑ ΠΡΕΠΕΙ να αποδίδουν σταθερούς αναγνωριστικούς κωδικούς απαιτήσεων χρησιμοποιώντας:

```text
REQ-<SPEC-CODE>-<NNN>
```

Παράδειγμα:

```text
REQ-DOC-001
```

Οι αναγνωριστικοί κωδικοί απαιτήσεων ΔΕΝ ΠΡΕΠΕΙ να επαναχρησιμοποιηθούν μετά την κατάργησή τους.

## 8. Πηγή προδιαγραφών έτοιμη για αντιγραφή

Αντιγράψτε ολόκληρο το παρακάτω τμήμα στο νέο αρχείο προδιαγραφών.

````markdown
---
id: <docusaurus-document-id>
title: <OMI-SPEC-NNN — OFFICIAL TITLE>
sidebar_label: <OMI-SPEC-NNN — SHORT TITLE>
description: <ONE-SENTENCE DESCRIPTION>
keywords:
  - Open Manuscript Initiative
  - OMI
  - <PRIMARY SUBJECT>
  - <SECONDARY SUBJECT>
---

# <OMI-SPEC-NNN> — <OFFICIAL TITLE>

## Document metadata

| Field | Value |
|---|---|
| Identifier | `<OMI-SPEC-NNN>` |
| Title | <OFFICIAL TITLE> |
| Version | `<0.1.0>` |
| Status | <Draft> |
| Document type | <Normative / Informative / Mixed> |
| Normative language | English |
| Editors | <EDITOR OR EDITORIAL GROUP> |
| Last updated | <YYYY-MM-DD> |
| Replaces | <NONE OR IDENTIFIER> |
| Replaced by | <NONE OR IDENTIFIER> |
| Depends on | <IDENTIFIERS OR NONE> |
| Used by | <IDENTIFIERS OR NONE KNOWN> |
| Schemas | <LINKS OR NONE> |
| Profiles | <LINKS OR NONE> |
| Implementation status | <SUMMARY OR LINK> |
| Issue tracker | <CANONICAL ISSUE URL OR REPOSITORY LOCATION> |

## 1. Abstract

<!--
Describe in two to four paragraphs:
- what the specification defines;
- why the model or protocol is needed;
- which actors or systems use it;
- what the specification deliberately does not define.
Do not place normative requirements in the abstract.
-->

<TEXT>

## 2. Status of this document

This document is a **<LIFECYCLE STATUS>** specification of the Open Manuscript Initiative.

<!--
State the stability implications of the current lifecycle status.
For Draft, explain that incompatible changes may occur.
For Review Candidate, identify the review milestone.
For Implementation Candidate, identify the implementation-evidence process.
For Stable, identify the stable release and compatibility commitment.
-->

Implementations claiming support MUST identify the exact specification version or immutable commit used.

Discussion and change proposals are tracked at <ISSUE LOCATION>.

## 3. Conformance

### 3.1 Conformance classes

This specification defines the following conformance classes:

- **Conforming producer:** <RESPONSIBILITIES>.
- **Conforming consumer:** <RESPONSIBILITIES>.
- **Conforming validator:** <RESPONSIBILITIES>.
- **[OPTIONAL] Conforming renderer:** <RESPONSIBILITIES>.
- **[OPTIONAL] Conforming preservation processor:** <RESPONSIBILITIES>.

<!-- Remove classes that are not applicable. Add role-specific classes only when needed. -->

### 3.2 General conformance

A conforming implementation MUST satisfy every applicable **MUST** and **MUST NOT** requirement for its declared conformance class.

An optional feature MAY be omitted. When implemented, the feature MUST satisfy every requirement defined for that feature.

A conformance claim SHOULD identify:

- implementation name and version;
- exact specification identifier and version;
- declared conformance class;
- supported profiles;
- known limitations;
- conformance-test version, when available.

### 3.3 Requirement identifiers

<!-- Assign stable identifiers by Review Candidate status. -->

**REQ-<CODE>-001:** <FIRST TESTABLE NORMATIVE REQUIREMENT>.

## 4. Scope

This specification defines:

- <IN-SCOPE ITEM>;
- <IN-SCOPE ITEM>;
- <IN-SCOPE ITEM>.

### 4.1 Out of scope

This specification does not define:

- <OUT-OF-SCOPE ITEM>;
- <OUT-OF-SCOPE ITEM>;
- <OUT-OF-SCOPE ITEM>.

## 5. Terminology

The terminology of the central OMI Terminology and Definitions document applies.

### 5.1 <SPECIALISED TERM>

<CONCISE, NON-CIRCULAR DEFINITION>.

### 5.2 <SPECIALISED TERM>

<CONCISE, NON-CIRCULAR DEFINITION>.

<!--
Define only terms that are specialised by this specification.
Do not silently redefine a central OMI term.
-->

## 6. Design principles

This section is informative.

The specification is guided by:

- **<PRINCIPLE>:** <EXPLANATION>.
- **<PRINCIPLE>:** <EXPLANATION>.
- **<PRINCIPLE>:** <EXPLANATION>.

Design principles explain intent but do not replace testable normative requirements.

## 7. Model overview

<!-- Provide a concise conceptual overview and explain the relationship to other OMI specifications. -->

```text
<CONCEPTUAL DIAGRAM>
```

The diagram is informative. Normative behaviour is defined by the prose requirements in this specification.

## 8. Data model

### 8.1 <ENTITY NAME>

**Purpose:** <TEXT>  
**Identifier:** <IDENTITY RULE>  
**Lifecycle:** <LIFECYCLE RULE>

| Property | Type | Required | Cardinality | Description |
|---|---|---:|---:|---|
| `id` | string | Yes | `1` | Stable identifier for the entity. |
| `<propertyName>` | <TYPE> | <Yes/No> | `<0..1 / 1 / 0..* / 1..*>` | <DESCRIPTION>. |

#### 8.1.1 Invariants

- **REQ-<CODE>-010:** <TESTABLE INVARIANT>.
- **REQ-<CODE>-011:** <TESTABLE INVARIANT>.

#### 8.1.2 Relationships

<DEFINE CONTAINMENT, REFERENCE, OWNERSHIP, ORDER, OR OTHER RELATIONSHIPS>.

#### 8.1.3 Missing, null, and empty values

<DEFINE THE MEANING OF ABSENCE, `null`, EMPTY STRINGS, EMPTY ARRAYS, UNKNOWN VALUES, WITHHELD VALUES, AND NOT-APPLICABLE VALUES>.

### 8.2 <ADDITIONAL ENTITY NAME>

<REPEAT THE ENTITY STRUCTURE AS NEEDED>.

## 9. Processing model

### 9.1 Inputs

<DEFINE ACCEPTED INPUTS AND PRECONDITIONS>.

### 9.2 Processing steps

A conforming <PROCESSOR ROLE> MUST process the input in this order:

1. <STEP>.
2. <STEP>.
3. <STEP>.

### 9.3 Outputs

<DEFINE OUTPUTS, STATE CHANGES, AND PRESERVATION OBLIGATIONS>.

### 9.4 Determinism and implementation-defined behaviour

<STATE WHICH RESULTS MUST BE DETERMINISTIC AND WHICH CHOICES MAY BE IMPLEMENTATION-DEFINED>.

## 10. Validation and error handling

### 10.1 Validation levels

The specification distinguishes:

- syntax validation;
- structural validation;
- semantic validation;
- reference-integrity validation;
- profile validation.

### 10.2 Error conditions

| Condition | Classification | Required behaviour |
|---|---|---|
| <CONDITION> | Error | <REJECT / REPORT / PRESERVE / RECOVER> |
| <CONDITION> | Warning | <REPORT / CONTINUE / PRESERVE> |
| <CONDITION> | Unsupported feature | <REQUIRED BEHAVIOUR> |
| <CONDITION> | Unknown feature | <REQUIRED BEHAVIOUR> |

### 10.3 Preservation during failure

**REQ-<CODE>-100:** <DEFINE WHETHER UNKNOWN OR INVALID CONTENT IS REJECTED, QUARANTINED, IGNORED, OR PRESERVED>.

## 11. Extensibility

### 11.1 Extension points

<IDENTIFY DECLARED EXTENSION POINTS>.

### 11.2 Unknown extensions

A conforming <CONSUMER ROLE> MUST <REJECT / IGNORE / PRESERVE / EXPOSE> unknown extension content according to <RULE>.

Extensions MUST NOT redefine the semantics of core properties.

### 11.3 Namespace or identifier rules

<DEFINE COLLISION AVOIDANCE, OWNERSHIP, REGISTRATION, AND VERSIONING>.

## 12. Versioning and compatibility

This specification follows the OMI Versioning Policy.

### 12.1 Compatibility dimensions

The following compatibility dimensions apply:

- read compatibility;
- write compatibility;
- round-trip compatibility;
- schema compatibility;
- API or processing compatibility;
- profile compatibility.

### 12.2 Compatible changes

<DEFINE CHANGES THAT MAY OCCUR IN MINOR OR PATCH RELEASES>.

### 12.3 Breaking changes

<DEFINE CHANGES THAT REQUIRE A MAJOR RELEASE OR, BEFORE 1.0, A DOCUMENTED BREAKING MINOR RELEASE>.

### 12.4 Migration

<DEFINE MIGRATION EXPECTATIONS, VERSION DETECTION, AND FAILURE BEHAVIOUR>.

### 12.5 Deprecation

<DEFINE DEPRECATION NOTICE, REPLACEMENT, SUPPORT WINDOW, AND EARLIEST REMOVAL VERSION>.

## 13. Interoperability

### 13.1 External standards

| External standard | Direction | Mapping quality | Notes |
|---|---|---|---|
| <STANDARD> | <Import / Export / Bidirectional> | <Lossless / Conditionally lossless / Lossy / Unsupported> | <NOTES> |

### 13.2 Information preservation

<STATE WHAT IS PRESERVED, TRANSFORMED, OMITTED, GENERATED, OR AMBIGUOUS>.

### 13.3 Round-trip behaviour

<DEFINE WHETHER AND UNDER WHICH CONDITIONS ROUND TRIPS PRESERVE SEMANTICS AND UNKNOWN EXTENSIONS>.

## 14. Security, privacy, and integrity considerations

### 14.1 Threats

This specification has been reviewed for risks involving:

- untrusted input;
- active content;
- external resource retrieval;
- identifier spoofing;
- hidden or restricted content;
- personal information;
- access control;
- denial of service;
- unsafe rendering;
- provenance and signature integrity.

### 14.2 Requirements

- **REQ-<CODE>-200:** <SECURITY OR INTEGRITY REQUIREMENT>.
- **REQ-<CODE>-201:** <PRIVACY OR ACCESS-CONTROL REQUIREMENT>.

<!--
When no specification-specific risk is known, retain this section and state:
“No specification-specific security, privacy, or integrity requirements are currently known beyond the general requirements of the OMI platform and container specifications.”
-->

## 15. Accessibility considerations

<DEFINE ACCESSIBILITY REQUIREMENTS OR STATE WHY THE SPECIFICATION HAS NO USER-FACING ACCESSIBILITY EFFECT>.

User-facing mappings SHOULD preserve semantic structure, labels, alternative descriptions, reading order, keyboard operation, and assistive-technology compatibility where applicable.

## 16. Internationalisation considerations

This specification has been reviewed for:

- Unicode processing;
- BCP 47 language tags;
- bidirectional text;
- script variation;
- localised names;
- transliteration;
- locale-neutral machine values;
- dates, times, time zones, and calendars;
- language-sensitive sorting and comparison.

<DEFINE SPECIFICATION-SPECIFIC REQUIREMENTS>.

## 17. Examples

### 17.1 Minimal valid example

```json
{
  "id": "example-001",
  "type": "<TYPE>"
}
```

Explain why the example is valid and identify the requirements it demonstrates.

### 17.2 Representative valid example

```json
{
  "id": "example-002",
  "type": "<TYPE>",
  "<propertyName>": "<VALUE>"
}
```

### 17.3 Invalid example

```json
{
  "type": "<TYPE>"
}
```

This example is invalid because <REASON AND REQUIREMENT IDENTIFIER>.

### 17.4 [OPTIONAL] Migration example

<SHOW BEFORE, AFTER, AND MIGRATION CONSEQUENCES>.

## 18. Normative references

- Open Manuscript Initiative, *<DEPENDENCY TITLE>*, `<OMI-SPEC-NNN>`, version `<VERSION>`.
- <AUTHORITATIVE EXTERNAL STANDARD AND VERSION>.

## 19. Informative references

- <BACKGROUND OR RELATED MATERIAL>.

## 20. Implementation status

<!--
This section reports evidence; it does not define normative behaviour.
Link to the implementation status matrix when available.
-->

| Implementation | Version | Conformance class | Specification version | Status | Notes |
|---|---|---|---|---|---|
| <IMPLEMENTATION> | <VERSION> | <CLASS> | <VERSION> | <Experimental / Partial / Complete> | <NOTES> |

## 21. Unresolved issues

<!-- Required for Draft and Review Candidate. Remove only when the lifecycle policy permits. -->

| Issue | Impact | Required decision | Tracking link |
|---|---|---|---|
| <ISSUE> | <IMPACT> | <DECISION> | <LINK> |

A Draft MUST NOT conceal unresolved architectural questions in apparently normative prose.

## 22. Change history

| Version | Date | Status | Change classification | Summary |
|---|---|---|---|---|
| `0.1.0` | <YYYY-MM-DD> | Draft | Initial draft | Initial registered version. |

Git history supplements but does not replace this published change history.

## 23. Acknowledgements

[OPTIONAL]

<Acknowledge substantial review, implementation evidence, source standards, or editorial assistance.>

When substantial AI assistance is disclosed, describe its role without attributing authorship or responsibility to the tool. Human editors remain responsible for all normative content.
````

## 9. Κανόνες παραλείψεως και προσαρμογής των τμημάτων

Ένα τμήμα ΜΠΟΡΕΙ να αφαιρεθεί μόνο όταν:

- σε αυτό το πρότυπο αναφέρεται ως προαιρετικό·
- το αντικείμενο δεν έχει πράγματι κανένα αντίστοιχο μοντέλο ή συμπεριφορά·
- η αφαίρεση δεν αντικαθιστά την απαιτούμενη αξιολόγηση του κύκλου ζωής ή των κινδύνων·
- το αίτημα ενσωμάτωσης παραμένει κατανοητό και χωρίς την εν λόγω ενότητα.

Οι ακόλουθες ενότητες ΔΕΝ ΠΡΕΠΕΙ να αφαιρεθούν από μια κανονιστική προδιαγραφή:

- Μεταδεδομένα εγγράφου·
- Περίληψη;
- Κατάσταση του παρόντος εγγράφου·
- Συμμόρφωση·
- Πεδίο εφαρμογής·
- Ορολογία·
- Επαλήθευση και διαχείριση σφαλμάτων·
- Διαχείριση εκδόσεων και συμβατότητα·
- Θέματα ασφάλειας, προστασίας της ιδιωτικής ζωής και ακεραιότητας·
- Παραπομπές σε πρότυπα·
- Ιστορικό αλλαγών.

Όταν μια υποχρεωτική παράμετρος δεν εφαρμόζεται, η ενότητα ΠΡΕΠΕΙ να αναφέρει τον λόγο.

## 10. Προσαρμογές ανάλογα με τον τύπο του εγγράφου

### 10.1 Προφίλ

Σε ένα έγγραφο τύπου «`OMI-PROFILE-*`» ΘΑ ΠΡΕΠΕΙ να προστεθεί:

- λεπτομερείς προδιαγραφές και ακριβείς εκδόσεις·
- επιλεγμένες κατηγορίες συμμόρφωσης·
- αυστηρότεροι περιορισμοί·
- προεπιλογές;
- απαγορευμένες προαιρετικές λειτουργίες·
- απαιτήσεις επέκτασης·
- συμβατότητα με τις προδιαγραφές χωρίς προφίλ.

Ένα προφίλ ΔΕΝ ΠΡΕΠΕΙ να έρχεται σιωπηρά σε αντίθεση με τις βασικές προδιαγραφές του.

### 10.2 Μητρώο

Σε ένα έγγραφο του τύπου «`OMI-REG-*`» ΘΑ ΠΡΕΠΕΙ να προστεθεί:

- εξουσία κατανομής·
- σύνταξη καταχώρισης;
- κανόνες μοναδικότητας·
- διαδικασία εγγραφής·
- κύκλος ζωής μιας εγγραφής·
- κανόνες απόσυρσης και επιφύλαξης·
- θέση μητρώου που μπορεί να αναγνωστεί από μηχανή.

Οι εκχωρημένοι αναγνωριστικοί ΔΕΝ ΠΡΕΠΕΙ να επαναχρησιμοποιηθούν.

### 10.3 Σχήμα

Σε ένα έγγραφο του τύπου «`OMI-SCHEMA-*`» ΘΑ ΠΡΕΠΕΙ να προστεθεί:

- κανονικό `$id` ή ισοδύναμο αναγνωριστικό·
- γλώσσα και έκδοση σχήματος·
- σχέση μεταξύ πεζού κειμένου και προδιαγραφής·
- πηγή παραγωγής·
- πεδίο εφαρμογής της επικύρωσης·
- μη υποστηριζόμενοι σημασιολογικοί περιορισμοί·
- πολιτική συμβατότητας.

Ένα σχήμα ΠΡΕΠΕΙ να προσδιορίζει την ακριβή έκδοση της προδιαγραφής σε μορφή κειμένου την οποία τυποποιεί.

### 10.4 Σύνολο παραδειγμάτων

Ένα έγγραφο τύπου «`OMI-EXAMPLE-*`» ΘΑ ΠΡΕΠΕΙ να ταξινομεί κάθε παράδειγμα ως εξής:

- κανονιστικό ή ενημερωτικό·
- έγκυρο ή άκυρο·
- ελάχιστη ή αντιπροσωπευτική·
- που αφορούν συγκεκριμένες προδιαγραφές ή προφίλ.

Τα πλήρη παραδείγματα ΠΡΕΠΕΙ να αποθηκεύονται ως ξεχωριστά επικυρωμένα fixtures.

### 10.5 Αντιστοίχιση διαλειτουργικότητας

Ένα έγγραφο χαρτογράφησης ΠΡΕΠΕΙ να αντικαταστήσει την κύρια ενότητα του μοντέλου δεδομένων με:

- πρότυπο πηγής;
- μοντέλο-στόχος;
- κατεύθυνση χαρτογράφησης;
- προϋποθέσεις·
- πίνακες αντιστοίχισης πεδίων και αντικειμένων·
- ανάλυση απώλειας πληροφοριών·
- αναστρεψιμότητα·
- δομές που δεν υποστηρίζονται·
- δοκιμές μετ' επιστροφής.

## 11. Απαιτήσεις που αφορούν συγκεκριμένες φάσεις του κύκλου ζωής

### 11.1 Σχέδιο

Ένα προσχέδιο ΠΡΕΠΕΙ να περιλαμβάνει:

- ένα μόνιμο ή προσωρινά δεσμευμένο αναγνωριστικό·
- περιορισμένο πεδίο εφαρμογής·
- βασικές έννοιες και δομές δεδομένων·
- εξαρτήσεις·
- αρχικό μοντέλο συμμόρφωσης·
- ρητά ανεπίλυτα ζητήματα.

Τα παραδείγματα, η επικύρωση, η αξιολόγηση κινδύνων και οι επιπτώσεις της μετάβασης ΘΑ ΠΡΕΠΕΙ να έχουν ήδη καταρτιστεί.

### 11.2 Υποψήφιος για αξιολόγηση

Πριν από την απόκτηση του καθεστώτος «Υποψήφιος για αξιολόγηση»:

- οι προσωρινές ενδείξεις και τα σχόλια σύνταξης ΠΡΕΠΕΙ να αφαιρεθούν·
- η ορολογία ΠΡΕΠΕΙ να είναι εσωτερικά σταθερή·
- ΠΡΕΠΕΙ να υπάρχουν αντιπροσωπευτικά έγκυρα και άκυρα παραδείγματα·
- οι ισχύουσες απαιτήσεις ΠΡΕΠΕΙ να διαθέτουν σταθερούς αναγνωριστικούς κωδικούς·
- οι εξαρτήσεις ΠΡΕΠΕΙ να ελέγχονται·
- τα ουσιαστικά ανεπίλυτα ζητήματα ΠΡΕΠΕΙ να κλείσουν ή να επιλυθούν ρητά·
- ΠΡΕΠΕΙ να αναφέρονται η περίοδος αναθεώρησης και τα ερωτήματα που τέθηκαν στο πλαίσιο της αναθεώρησης.

### 11.3 Υποψήφια εφαρμογή

Πριν από την απόκτηση του καθεστώτος «Υποψήφια για ένταξη»:

- οι κανονιστικές απαιτήσεις ΠΡΕΠΕΙ να είναι πλήρεις·
- ΠΡΕΠΕΙ να υπάρχουν σχήματα ή τυπικοί ορισμοί, όπου αυτό ισχύει·
- ΠΡΕΠΕΙ να υπάρχουν διατάξεις ελέγχου συμμόρφωσης·
- οι κανόνες συμβατότητας και μετεγκατάστασης ΠΡΕΠΕΙ να μπορούν να ελεγχθούν·
- Η συλλογή στοιχείων υλοποίησης ΠΡΕΠΕΙ να είναι ενεργή.

### 11.4 Σταθερή έκδοση

Πριν από την κατάσταση «Σταθερό»:

- η έκδοση ΠΡΕΠΕΙ να εξασφαλίζει σταθερή δέσμευση συμβατότητας·
- Τα στοιχεία σχετικά με την εφαρμογή ΠΡΕΠΕΙ να τεκμηριώνονται·
- οι δοκιμές συμμόρφωσης ΠΡΕΠΕΙ να δημοσιεύονται, όπου αυτό ισχύει·
- Τα ελαττώματα που εμποδίζουν την υλοποίηση ΠΡΕΠΕΙ να επιλυθούν·
- Η αξιολόγηση της ασφάλειας και της προστασίας των προσωπικών δεδομένων ΠΡΕΠΕΙ να έχει ολοκληρωθεί·
- Η επίσημη έκδοση με αριθμό έκδοσης ΠΡΕΠΕΙ να αρχειοθετηθεί.

Ένα έγγραφο του Stable ΔΕΝ ΠΡΕΠΕΙ να περιλαμβάνει ενότητα με τίτλο «Ανεπίλυτα ζητήματα» που να περιέχει ανοιχτά κανονιστικά ζητήματα.

## 12. Λίστα ελέγχου για αιτήματα ενσωμάτωσης (pull request)

Ένα αίτημα pull που προσθέτει μια προδιαγραφή ΠΡΕΠΕΙ να επιβεβαιώνει:

### Ταυτότητα και μητρώο

- [ ] Ο αναγνωριστικός κωδικός έχει δεσμευτεί στο Μητρώο Προδιαγραφών.
- [ ] Ο τίτλος αντιστοιχεί στον καταχωρημένο τίτλο.
- [ ] Το όνομα του αρχείου γράφεται με μικρά γράμματα και κεφαλαία ανά διαστήματα («kebab case»).
- [ ] Ο κωδικός αναγνώρισης του εγγράφου «Docusaurus» είναι σταθερός και μοναδικός.

### Δομή και περιεχόμενο

- [ ] Τα υποχρεωτικά μεταδεδομένα εμφανίζονται στο κύριο κείμενο του εγγράφου.
- [ ] Υπάρχουν υποχρεωτικά πεδία.
- [ ] Τα όρια του πεδίου εφαρμογής και εκτός πεδίου εφαρμογής είναι σαφή.
- [ ] Η κεντρική ορολογία χρησιμοποιείται με συνέπεια.
- [ ] Οι κανονιστικές απαιτήσεις μπορούν να ελεγχθούν.
- [ ] Ορίζονται ο χειρισμός σφαλμάτων και η συμπεριφορά σε περίπτωση άγνωστης επέκτασης.

### Συμβατότητα και κίνδυνος

- [ ] Καταγράφονται οι επιπτώσεις που σχετίζονται με την έκδοση και τη συμβατότητα.
- [ ] Οι απαιτήσεις μετεγκατάστασης έχουν καταγραφεί.
- [ ] Έχουν ελεγχθεί η ασφάλεια, η προστασία των προσωπικών δεδομένων και η ακεραιότητα.
- [ ] Έχει πραγματοποιηθεί έλεγχος προσβασιμότητας.
- [ ] Έχει πραγματοποιηθεί έλεγχος της διεθνοποίησης.

### Παραδείγματα και τυπικά στοιχεία

- [ ] Οι διευθύνσεις JSON, XML ή άλλα παραδείγματα είναι συντακτικά έγκυρες.
- [ ] Υπάρχει τουλάχιστον ένα έγκυρο και ένα σημαντικό μη έγκυρο παράδειγμα.
- [ ] Αναφέρονται το σχήμα και η πηγή της πεζογραφίας.
- [ ] Οι αναγνωριστικοί των απαιτήσεων είναι μοναδικοί όπου χρησιμοποιούνται.

### Δημοσίευση

- [ ] Το έγγραφο προστίθεται στη σωστή κατηγορία της πλευρικής στήλης.
- [ ] Ενημερώθηκαν οι μεταφράσεις των οδηγιών πλοήγησης στα ουγγρικά και στα γερμανικά.
- [ ] Οι εσωτερικοί σύνδεσμοι λειτουργούν.
- [ ] Ο ιστότοπος Docusaurus δημιουργεί εκδόσεις για τις διευθύνσεις `en`, `hu` και `de`.
- [ ] Η περιγραφή του αιτήματος ενσωμάτωσης (pull request) κατηγοριοποιεί την αλλαγή και τις επιπτώσεις της στη συμβατότητα.

## 13. Συντήρηση

Το παρόν πρότυπο διέπεται από τον Κύκλο Ζωής των Προδιαγραφών, την Πολιτική Διαχείρισης Εκδόσεων και τον Οδηγό Στυλ Προδιαγραφών.

Οι αλλαγές στο πρότυπο ΠΡΕΠΕΙ να αξιολογούνται ως προς την επίδρασή τους στα εξής:

- υφιστάμενες προδιαγραφές·
- ροή εργασιών των συνεισφερόντων·
- μεταφράσεις;
- αυτοματοποιημένη επικύρωση·
- σχήματα και εξαρτήματα·
- εξωτερικές αναφορές·
- κριτήρια προώθησης κατά τη διάρκεια του κύκλου ζωής.

Οι υπάρχουσες προδιαγραφές δεν καθίστανται αυτόματα μη συμμορφούμενες όταν αλλάζει το πρότυπο. Μια αλλαγή στο πρότυπο ΠΡΕΠΕΙ να προσδιορίζει εάν τα υπάρχοντα έγγραφα απαιτούν μεταφορά και το αναμενόμενο χρονικό πλαίσιο.

## 14. Περίληψη

Το πρότυπο προδιαγραφών «OMI» παρέχει μια συνεπή πορεία από ένα αρχικό σχέδιο έως ένα σταθερό, εφαρμόσιμο και διατηρήσιμο πρότυπο.

Εξασφαλίζει ότι η ταυτότητα, το πεδίο εφαρμογής, η ορολογία, η συμμόρφωση, η επικύρωση, η συμβατότητα, η διαλειτουργικότητα, η αξιολόγηση κινδύνων, τα παραδείγματα, τα αποδεικτικά στοιχεία υλοποίησης και το ιστορικό αλλαγών εξετάζονται ρητά, αντί να ανασυντίθενται σε μεταγενέστερο στάδιο της διαδικασίας τυποποίησης.

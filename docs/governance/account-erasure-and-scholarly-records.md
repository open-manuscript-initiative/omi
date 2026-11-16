---
title: Account Deletion and Scholarly Records
sidebar_label: Account Deletion and Scholarly Records
---

# Account deletion, authorship and shared scholarly records

**Proposed service-terms and privacy wording — requires review by the actual server operator/controller before adoption.** It explains the software's separation of account erasure from preservation of co-authored scholarly work. Each independently operated Studio server must disclose its actual data controller, lawful bases and retention rules in its own notice.

## 1. Separate purposes and lawful bases

The controller must assess each purpose independently:

| Processing purpose | Possible lawful basis (subject to the controller's assessment) | Consequence of account deletion |
| --- | --- | --- |
| Account, credentials, profile, sessions | GDPR Article 6(1)(b) where necessary for the service, or another properly documented basis | Remove from active account and identity stores; terminate access |
| Private Studio working data, account-only personal reference records and module preferences | The applicable service basis, with purpose and necessity assessed | Delete active server-side account-only records; allow an export before account deletion |
| Co-authored manuscripts, version provenance, submitted reviews, editorial decisions, and publication history | GDPR Article 6(1)(f) **only where a documented necessity and legitimate-interests balance supports it**, or another applicable basis | Retain only what remains necessary; remove account links and minimize identifiers where feasible |
| Required legal records | GDPR Article 6(1)(c), if an identified law actually requires processing | Retain only the legally required data and period |
| Research or public-interest archiving | The applicable Art.6 basis and safeguards; Art.17(3)(d) can apply only where erasure would make qualifying research/archiving impossible or seriously impair it | Evaluate the research exception individually, not as a general override |

An interest in "scientific integrity" is **not an automatic exemption** from erasure. Anonymization removes data from GDPR's personal-data scope only where identification is not reasonably possible; replacing a name with a pseudonym is not enough. Retained identifiers, review aliases, ORCID values, stable IDs, version snapshots, annotations or published author metadata can remain personal data and must be governed as such.

## 2. Before the user confirms deletion

The account interface must first explain, in the user's supported language:

1. Which live account, identity, integration, and private working records are removed.
2. That co-authored documents, versions, reviews and comments may remain, with a pseudonymized participant reference where appropriate; historic names or identifying content may still occur.
3. That previously published OJS/OMP materials, other providers' copies, local device files and backup replicas are not all erased by an account action.
4. That the person should export work they need and will lose account access.
5. How to request a separate review of remaining personal data, rectification, restriction, objection or erasure.

Before deletion, the user may save the existing partial account-data JSON copy. After creating a **new** account, supported personal profile fields can be imported from that saved file. This does not revive the deleted account, restore its historical identity, ORCID verification, sessions, credentials, institutional/editorial permissions, co-author access, ownership or manuscript content. Separate manuscript exports and fresh invitations are required where applicable. The exported JSON includes personal information; store it privately.

Require explicit acknowledgement of this information before enabling the final irreversible action. Confirmation is **not** blanket consent to indefinite retention or a waiver of GDPR rights.

## 3. Retention and identity minimization

The Studio may preserve a disabled, pseudonymized internal participant for foreign-key references in co-authored scholarly history. The controller must review whether each identifier or work item is necessary. Where technically possible, remove duplicate profile names, credential links, IP addresses and free-text identity snapshots. A stable internal UUID or an identifiable manuscript contribution remains personal data where re-identification is reasonably possible.

Do not automatically remove published authorship attribution, signed reviews or co-authored work solely because the service account closes; assess authorship rights, other contributors' rights, publication and research needs, and the applicable grounds separately. Conversely, co-authorship does not justify keeping irrelevant profile fields, private unpublished drafts or obsolete logs.

A user can request a further review after deletion even without account access. For a legitimate-interest processing activity, take account of Article 21 objection rights; any continued processing needs the applicable legal justification and response. For a claimed Article 17(3)(d) research exception, document the necessity, applicable Article 89(1) safeguards and why erasure would make the specific research impossible or seriously impair it.

## 4. Restoration and external processors

A deletion operation cannot guarantee immediate removal of every isolated server backup. Published retention periods, including a previously committed 30-day maximum where applicable, remain binding. Restore procedures must reapply deletions and restrictions before reopening the service. For separately controlled OJS/OMP publications and external storage, identify the responsible controller and the applicable request channel rather than silently claiming remote erasure.

## 5. User rights and review

Filing a deletion request is distinct from pressing the account-deletion button. The controller must offer a contact route without login, assess remaining personal data individually, respond normally within one calendar month and explain any partial refusal and complaint route. Institutional deployments may involve a different controller from the central Studio.

Legal references: [GDPR Arts. 4(5), 5, 6, 12, 17, 21, 25 and 89](https://eur-lex.europa.eu/eli/reg/2016/679/oj); [EDPB guidelines on legitimate interests](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-12024-processing-personal-data-based-article-61f_en).

The terms above require legal and operational review for each controller; repository content is not proof of compliance.

---
id: review-model
title: OMI-SPEC-200 — Review Model
sidebar_label: Review Model
sidebar_position: 15
---

# OMI-SPEC-200 — Review Model

## Status

**Draft**

Version: 0.1.0

**Legacy identifier:** `OMI-SPEC-006`

---

# Purpose

The Review Model defines how scholarly review processes are represented within the Open Manuscript Initiative (OMI).

Rather than treating peer review as an external workflow, OMI models reviews as semantic objects connected directly to the manuscript.

This approach enables collaborative editing, transparent review histories, and interoperability across publishing platforms.

---

# Design Principles

The Review Model follows these principles:

- Semantic first
- Workflow independent
- Reviewer independent
- Platform independent
- Transparent
- Extensible
- Persistent
- Machine readable

---

# Review as a Semantic Layer

A review is not part of the manuscript content.

Instead, reviews form an independent semantic layer attached through Anchors.

```
Document
    │
    ├── Content Layer
    ├── Annotation Layer
    └── Review Layer
```

The manuscript remains unchanged while review information evolves independently.

---

# Review Objects

A review consists of semantic objects.

Examples include:

- Review
- Reviewer
- Recommendation
- Review Comment
- Editorial Decision
- Author Response
- Revision Request

Each object has its own identifier and metadata.

---

# Review Roles

OMI distinguishes multiple participant roles.

Examples:

- Author
- Reviewer
- Editor
- Guest Editor
- Managing Editor
- Publisher
- AI Assistant

Additional roles may be introduced through plugins.

---

# Review Models

OMI supports multiple review workflows.

Examples include:

- Single-blind
- Double-blind
- Triple-blind
- Open review
- Transparent review
- Collaborative review
- Post-publication review

The workflow is defined by the publication profile rather than the manuscript itself.

---

# Review Comments

Review comments are semantic annotations attached through Anchors.

A comment may refer to:

- a word
- a sentence
- a paragraph
- a figure
- a table
- a formula
- metadata
- the entire manuscript

Comments remain valid even when the manuscript is reformatted.

---

# Review Metadata

Each review contains:

- Identifier
- Reviewer
- Review Type
- Recommendation
- Timestamp
- Version
- Visibility
- Status

---

# Review Recommendations

Typical recommendations include:

- Accept
- Minor Revision
- Major Revision
- Resubmit
- Reject

Publication profiles may define additional recommendations.

---

# Editorial Decisions

Editorial decisions are separate semantic objects.

Examples:

- Desk Reject
- Send to Review
- Revision Required
- Accept
- Reject
- Publish

Each decision may reference one or more reviews.

---

# Author Responses

Authors may respond directly to review comments.

```
Reviewer Comment

↓

Author Response

↓

Editorial Decision
```

The complete discussion remains linked through persistent identifiers.

---

# Visibility

Review objects support different visibility levels.

Examples:

- Private
- Reviewer Only
- Editors Only
- Authors
- Public

Visibility may change during the manuscript lifecycle.

---

# Versioning

Reviews are version-aware.

The system preserves:

- original review
- revised review
- author responses
- editorial decisions

Nothing is overwritten.

---

# Review Timeline

Every review event is recorded.

Example:

```
Submission

↓

Editorial Screening

↓

Reviewer Invitation

↓

Peer Review

↓

Revision

↓

Acceptance

↓

Publication
```

The timeline becomes part of the manuscript history.

---

# AI-assisted Review

Artificial intelligence may assist reviewers.

Examples include:

- language analysis
- metadata validation
- citation verification
- consistency checking
- accessibility review
- plagiarism indicators

AI suggestions are clearly identified and never replace human judgement.

---

# Interoperability

Future mappings include:

- OJS Review Workflow
- JATS Peer Review
- DocMaps
- COAR Notify
- Web Annotation
- Hypothes.is

---

# Plugin Extensions

Plugins may introduce:

- discipline-specific review models
- review templates
- scoring systems
- editorial workflows
- publication policies

without modifying the OMI Core.

---

# Future Work

Future specifications will define:

- Editorial Workflow Model
- Decision Model
- AI Review API
- Review Analytics
- Reviewer Reputation

---

# Change history

- **0.1.0** — Migrated from provisional `OMI-SPEC-006` to canonical `OMI-SPEC-200`.

---

# Summary

The OMI Review Model treats peer review as a first-class semantic component of scholarly communication.

By separating review information from manuscript content while connecting both through persistent Anchors, OMI enables transparent, portable, and platform-independent scholarly review workflows.

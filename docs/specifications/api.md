---
title: Platform API
sidebar_position: 19
---

# OMI-SPEC-010: Platform API

## Status

**Draft**

Version: 0.1

---

# Purpose

The Platform API defines how external applications, plugins, automation tools, and publishing platforms interact with the Open Manuscript Initiative (OMI).

The API is designed around semantic scholarly objects rather than files.

---

# Design Principles

The Platform API follows these principles:

- API First
- Object Oriented
- Event Driven
- Platform Independent
- Versioned
- Secure
- Extensible

---

# API Layers

```
Applications

↓

REST API

↓

Event API

↓

Plugin API

↓

OMI Core
```

---

# Core Resources

The API exposes scholarly objects.

Examples:

- Documents
- Sections
- Paragraphs
- Anchors
- Annotations
- Citations
- Metadata
- Reviews
- Datasets
- Authors
- Affiliations
- Publication Profiles

---

# REST API

Typical endpoints include:

```
GET    /documents

POST   /documents

GET    /documents/{id}

PATCH  /documents/{id}

DELETE /documents/{id}
```

Objects are exchanged as structured JSON.

---

# Object API

Every scholarly object follows a common interface.

Example:

```
GET /objects/{id}
```

Response:

```json
{
  "id": "omi:citation:8f5a21",
  "type": "Citation",
  "version": 4,
  "metadata": {},
  "relationships": {}
}
```

---

# Event API

OMI publishes events describing changes within the manuscript.

Examples:

- DocumentCreated
- DocumentOpened
- ObjectCreated
- ObjectUpdated
- AnchorCreated
- AnnotationAdded
- CitationValidated
- ReviewSubmitted
- PublicationStarted
- PublicationCompleted

Plugins subscribe to events rather than modifying the Core directly.

---

# Plugin API

Plugins interact with OMI through stable interfaces.

Examples:

```
register()

activate()

deactivate()

dispose()
```

Plugins never access internal implementation details.

---

# Rendering API

Publication renderers implement a common interface.

Example:

```
render(document, profile)
```

Possible outputs:

- HTML
- PDF
- EPUB
- DOCX
- JATS XML
- Markdown

---

# Validation API

Validation services may inspect scholarly objects.

Examples:

- Metadata validation
- Citation validation
- Accessibility validation
- Discipline-specific validation

Validation produces structured reports.

---

# Authentication

Possible authentication methods include:

- OAuth 2.1
- OpenID Connect
- API Tokens
- Service Accounts

Authentication methods are implementation-dependent.

---

# Authorization

Permissions may be granted at different levels.

Examples:

- Read Document
- Edit Metadata
- Create Annotation
- Submit Review
- Publish
- Manage Plugins

Authorization should support role-based and object-level access control.

---

# Versioning

The API is versioned.

Example:

```
/api/v1/
/api/v2/
```

Breaking changes require a new API version.

---

# Webhooks

External systems may subscribe to events.

Examples:

```
POST

DocumentPublished

↓

https://journal.example/webhook
```

Supported events may include:

- publication completed
- review submitted
- manuscript accepted
- metadata updated

---

# Batch Operations

The API should support batch processing.

Examples:

- validate all citations
- regenerate metadata
- export all publication formats
- import object collections

---

# Search API

Search is semantic rather than textual.

Examples:

```
author = "Smith"

↓

all manuscripts
```

```
citation DOI = ...

↓

all references
```

```
object type = Figure

↓

all figures
```

---

# Interoperability

Future integrations include:

- OJS
- OMP
- OPS
- Crossref
- DataCite
- ORCID
- Zenodo
- GitHub
- n8n
- Zotero

---

# Future Work

Future specifications will define:

- Graph API
- Query Language
- Object API
- Synchronisation API
- AI Extension API

---

# Summary

The OMI Platform API provides a stable, versioned, and object-oriented interface for scholarly communication.

Rather than exposing files, the API exposes semantic scholarly objects, enabling interoperability across publishing systems, repositories, automation platforms, and future scholarly infrastructures.

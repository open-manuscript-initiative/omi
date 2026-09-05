---
id: studio-implementation-status
title: Open Manuscript Studio — Current Implementation Status
sidebar_label: Studio Implementation Status
description: Current implementation snapshot for the Open Manuscript Studio reference implementation.
keywords:
  - Open Manuscript Studio
  - implementation status
  - beta
  - Android
  - iOS
  - iPadOS
  - peer review
  - OJS
  - OMP
  - DOCX
  - indexes
  - desktop
  - multilingual
  - export
  - institutional administration
  - OIDC
  - storage
---

# Open Manuscript Studio — Current Implementation Status

## Snapshot

| Field | Value |
|---|---|
| Status | **Beta** |
| Snapshot date | **2026-09-05** |
| Current release line | `0.1.0-beta.3` |
| Reference implementation | Open Manuscript Studio |
| Source repository | `open-manuscript-initiative/open-manuscript-studio` |
| Web target | Modern browsers |
| Desktop targets | Windows x64, Linux x64, macOS Intel, macOS Apple Silicon |
| Mobile targets | Android public universal APK; iOS/iPadOS validated native simulator target, with TestFlight/App Store distribution pending Apple Developer signing |
| Web deployment | `studio.openmanuscript.org` |

The current Studio beta is **`0.1.0-beta.3`**. Beta means that the primary authoring, import/export, authentication, native-client and OJS/OMP review workflows are implemented and the project has moved from feature scaffolding to interoperability, regression, recovery and release-hardening work. It does **not** mean that every optional integration or distribution channel is production-complete.

This page describes **implemented product capabilities**, not OMI specification conformance. Formal specification maturity and conformance evidence are tracked separately in the [OMI Implementation Status Matrix](./implementation-status-matrix.md).

## Status vocabulary

- **Operational** — implemented in the current Studio development line and available when its normal runtime prerequisites are present.
- **Configuration-dependent** — implemented, but requires installation-specific server credentials, OAuth/OIDC registration, mail delivery, an external service, database migration, or a publishing-system connection.
- **Validated native target** — implementation and CI/native build validation exist, but public distribution still depends on platform signing/provisioning.
- **Foundation** — architecture, registry, UI or configuration support exists, but the complete end-user service is not yet claimed as operational.

## Current capabilities

| Area | Status | Current implementation |
|---|---|---|
| Structured manuscript editing | **Operational** | Semantic sections, rich text, headings, inline formatting, lists, notes, references, tables and structured content handling. |
| Desktop multi-document workspace | **Operational** | Browser-style document tabs keep multiple manuscripts open on desktop. Full-window Studio/Account surfaces and a toggleable Word-like document outline support long-form navigation while mobile retains its compact structure workflow. |
| Session/workspace restoration | **Operational** | Native and web workspace state can restore the previous working context, including open-document state, while explicit document-close controls allow the user to leave a manuscript without losing the surrounding application session. |
| Rich-text formatting controls | **Operational** | Compact inline formatting remains available near the selection; the expanded desktop menu is docked and viewport-safe, while inline language is selected from configured manuscript languages rather than free text. Automatic floating formatting can be disabled in editor settings. Mobile selection controls avoid collision with native text-selection UI. |
| Structured search and replace | **Operational** | Search/replace overlay, scopes and result navigation with responsive access shared by desktop and mobile layouts. |
| Multilingual user interface | **Operational** | 24 supported European UI languages with shared language selection. Interface, manuscript and metadata language preferences are managed in one compact responsive settings surface. |
| Time-zone preferences | **Operational** | Standard IANA time-zone selection with current UTC offsets and automatic system-zone defaulting. |
| Multilingual help | **Operational** | Integrated localized help coverage across the supported Studio UI locales; Help surfaces report the current build version. |
| Accounts and authentication | **Operational** | Server-backed registration/login, logout and authenticated API access work in web and native clients. The same central account can be used across Windows, Android, iOS/iPadOS and browser clients. Native clients use bearer-session transport compatible with Tauri application origins. |
| Password recovery | **Configuration-dependent** | Forgot-password/reset flow uses single-use expiring reset tokens stored only as hashes, generic account-existence responses and all-session revocation after successful password change. Requires working server mail delivery. |
| Federated sign-in | **Configuration-dependent** | Google, Microsoft and configurable generic/institutional OIDC providers use Authorization Code + PKCE, state/nonce validation, discovery/JWKS validation and explicit account linking. Existing accounts are never auto-linked by e-mail alone. |
| Connected sign-in identities | **Operational / configuration-dependent providers** | Account settings list password and connected ORCID/OIDC identities, allow configured providers to be linked/unlinked and prevent removal of the last usable sign-in method. |
| Account/profile interface | **Operational** | Shared server-backed personal profile editing is available across desktop/mobile layouts, with account identity separated from manuscript contributor metadata and organization-specific institutional membership. |
| Institutional profiles | **Operational** | A Studio account can hold multiple institution memberships with one default affiliation. Shared institution name/ROR data is separated from membership-specific department, position, institutional e-mail, linked identity and role. |
| Institution administrator roles | **Configuration-dependent** | Institution `MEMBER`, `ADMIN` and `OWNER` roles are server-authoritative. Institutional deployments expose dedicated administrator sign-in and role-protected member administration with last-owner protection. |
| Central OMI administration | **Configuration-dependent** | A separate `ADMIN`/`OWNER` central privilege plane can manage institutions, institution administrators, institution API credentials and administration audit events without obtaining manuscript/editorial-content access. |
| Institution Admin API | **Configuration-dependent** | Institution-bound machine credentials use one-time raw token display, hashed storage, expiry/revocation and explicit scopes (`institution:read`, `members:read`, `members:write`, reserved integration scopes). Machine credentials cannot change owner roles. |
| Contributor identity model | **Operational** | Contributors, roles, affiliations, identity assertions and author-profile workflows are represented separately from account identity. |
| ORCID authentication | **Configuration-dependent** | ORCID OAuth/OIDC sign-in and linking infrastructure is implemented. Personal and institutional deployment credential sets are separated, and the active Sandbox/Production environment is visible in the Studio UI. |
| Portable ORCID-bound author signatures | **Configuration-dependent** | Server-committed immutable revision snapshots, ORCID author binding, WebAuthn signing, encrypted installation issuer keys and portable offline verification evidence are implemented. |
| Double-blind peer review | **Operational** | Anonymous reviewer projection, review assignments, reviewer workspace, comments and review persistence. Reviewer launch permissions are role-scoped to preserve least privilege. |
| Editorial review dashboard | **Operational** | Editor-facing overview and role-aware review portal for assigned peer-review work. |
| Bidirectional OJS review writeback | **Configuration-dependent / validated** | Signed review writeback returns submitted review data to OJS. Reviewer launch scopes are least-privilege, and the two-round OJS review protocol is documented and exercised against the OJS 3.5 integration line. |
| Native OJS review forms | **Configuration-dependent / validated** | OJS review-form definitions can be imported into the reviewer workspace, rendered as Studio controls, localized safely and written back to OJS with the submitted review. Server handling keeps provider markup opaque and client rendering extracts text safely. |
| External/OJS review assignments | **Configuration-dependent** | OJS-connected author, editor and reviewer workflows and external assignment context are implemented when the OJS integration is configured. |
| OJS manuscript launch/import | **Configuration-dependent** | Signed launch assertions, manuscript/file retrieval and structured import of metadata and manuscript content from OJS. |
| OJS 3.5 interoperability | **Validated integration line** | PKP/OJS 3.5 compatibility is documented and exercised in native end-to-end author, editor and double-anonymous reviewer workflows, including assigned files, review forms, corrections, separated feedback and signed writeback. Cross-version regression remains ongoing release work. |
| OMP manuscript/study launch and review | **Configuration-dependent / validated** | Signed launch assertions map monographs and publications into Studio while reviewer access is restricted to the assigned study. Author, editor and double-anonymous reviewer flows cover assigned files, review forms, corrections, separated feedback and signed writeback. |
| OMP 3.5 interoperability | **Validated integration line** | The deployable OMP plugin and Studio integration are exercised end to end against OMP 3.5. Wider cross-version regression and production hardening remain ongoing release work. |
| DOCX structural import | **Operational** | Headings, inline semantics, list inheritance, footnotes/endnotes, references, structured tables and semantic index fields are handled. Large imports use deferred editor mounting and imported DOCX files open directly as OMI manuscripts. |
| Dynamic indexes and lists | **Operational** | Imported Word index fields are represented semantically rather than as stale page-number text. Index occurrences navigate to document locations; unresolved occurrence controls are suppressed. Name-index import normalizes letter/number boundaries and filters Arabic-number page-reference noise while retaining name-relevant Roman numerals. |
| Local spelling | **Operational** | Persisted local spellcheck follows manuscript language through the platform/browser spellchecking layer. |
| Grammar and style proofreading | **Configuration-dependent** | Opt-in advanced checking can use LanguageTool-compatible and configured AI language services. Issues are shown in the manuscript and suggestions are explicitly applied by the user. |
| Translation execution | **Configuration-dependent** | Structured DeepL translation operates on selection/block/section/manuscript scopes while preserving inline semantics and excluding citations, code, equations and bibliography records from unsafe flattening. Language variants can be stored separately. |
| AI integration agents | **Configuration-dependent** | Provider-neutral language editor, metadata assistant, summarizer and citation-checker agents return suggestions through scoped server-side execution. External transmission of review-confidential content requires explicit permission. |
| Integration audit and extension registry | **Operational foundation / configuration-dependent execution** | Integration execution records operation metadata/digests without storing manuscript text or secrets. Extension manifests support version compatibility, permissions, capabilities and HTTPS-only external endpoints. |
| Portable OMI export | **Operational** | Portable `.omi.zip` and OMI JSON outputs are available as first-class interchange forms. |
| Scholarly/publishing exports | **Operational** | JATS XML, semantic offline HTML package, DOCX, EPUB, PDF, IDML, XPress Tags, FrameMaker MIF, Scribus SLA and LaTeX are represented in the current export layer. Semantic index fields can be exported back to DOCX. |
| Cross-platform export delivery | **Operational** | Hosted Studio uses browser downloads; installed Tauri clients use native save/document-provider dialogs and binary writes for supported export targets. Mobile clients expose a platform-appropriate subset rather than desktop-only publishing choices. |
| Publisher profiles | **Operational** | Publisher profile, export stylesheet and print stylesheet handling are separated from manuscript semantics. |
| Device-aware storage mode | **Operational on installed clients** | Studio keeps a per-user, per-device “own device” trust preference. Own devices can retain normal native working paths; newly seen/shared devices default to a restricted mode that does not retain local working paths. |
| Profile cloud connections | **Operational / provider-dependent** | Direct WebDAV/Nextcloud credentials are encrypted server-side and scoped to the signed-in user, so profile cloud connections can follow the account across devices. Future OAuth cloud connections use the same profile-scoped model. |
| Portable storage on shared devices | **Operational on installed clients** | Shared-device mode still permits explicit one-off open/save to removable or portable locations without keeping the selected path as the current working file. |
| Locally synchronized folders | **Operational on desktop** | OneDrive, SharePoint, Google Drive, Dropbox, Nextcloud, iCloud Drive and other desktop-synchronized folders are treated as connection methods of their actual provider. Studio writes portable OMI files locally while the provider client performs authentication/synchronization. |
| Android native document workflow | **Operational beta** | Android uses the system Documents / Storage Access Framework picker for opening, Save, Save As, portable `.omi.zip` backup and supported export destinations instead of broad shared-storage permissions. Document lifecycle and close/reopen behavior remain part of focused beta regression testing. |
| iOS/iPadOS native Files workflow | **Validated native target** | iPhone/iPad uses the Apple Files / UIDocumentPicker workflow with security-scoped document access for opening/saving OMI files and mobile-relevant export destinations. Public distribution still requires Apple signing/provisioning and device validation. |
| WebDAV / Nextcloud direct storage | **Configuration-dependent** | Direct WebDAV/Nextcloud connections support encrypted server-side credentials, connection testing, portable backup upload, restore and deletion. |
| Integrations catalogue | **Operational** | Provider registry, catalogue UI, status client, declared authentication modes and execution surfaces are present. |
| Windows desktop application | **Operational beta** | Tauri 2 Windows application, EXE/MSI packaging, native authentication, local-file access and native save flows are implemented. |
| Linux and macOS packaging | **Operational build targets** | Release automation defines Linux AppImage/DEB and macOS Intel/Apple Silicon DMG targets. Platform signing/notarization remains separate release-hardening work. |
| Android application | **Operational beta** | A universal Android APK is produced by the shared Tauri 2 release workflow. Server-backed auth, OIDC/ORCID native return handling, responsive navigation, native Documents/SAF file handling, export delivery and OMI branding are part of the shared client line. |
| iOS / iPadOS application | **Validated native target** | Tauri iOS project generation and the Apple Silicon iPhone/iPad simulator build succeed in CI, including native Files integration and shared mobile authentication/export code. Public TestFlight/App Store distribution still requires Apple Developer signing, provisioning, Universal Link association and physical-device validation. |
| Desktop update flow | **Operational** | Update notification and installer flow is implemented in the desktop application and updater artifacts are produced by the release configuration. |
| Cross-platform release automation | **Operational** | GitHub Actions produces Windows, Linux, macOS and Android artifacts from the shared source tree and runs an iOS/iPadOS simulator smoke build. A manual signed Apple release workflow is prepared for App Store Connect once Apple credentials are configured. |
| Release dependency reproducibility | **Operational** | JavaScript and Rust dependency graphs are lockfile-controlled; CI uses reproducible install paths including `npm ci` for the server. |
| Application branding | **Operational** | OMI Studio branding and generated native icon assets are used across the application shell and release packaging, including Android and the generated iOS/iPadOS target. |
| Security hardening | **Operational baseline** | Server-side rate limiting, SSRF restrictions, OIDC state/nonce/PKCE and issuer validation, restricted secret persistence, hashed reset/Admin-API tokens, integration/admin auditing, safer import/export escaping and automated security scanning are incorporated into the current development line. OJS review-form rendering has additional markup/text isolation hardening. |
| Windows code signing | **Application submitted / pending** | Public code-signing and privacy policies are published and the SignPath Foundation open-source application has been prepared/submitted. Windows installers remain unsigned until acceptance and production signing integration. |

## Cross-platform architecture

Studio has a concrete shared-client architecture rather than separate web and native product lines. React/TypeScript, the OMI manuscript model, editor behavior, authentication flows, peer review, integrations and import/export logic are shared. Tauri 2 supplies native packaging and platform capabilities for desktop and mobile clients.

The responsive UI intentionally differs by form factor: desktop can expose multi-document tabs, a persistent document outline and multi-panel editing, while mobile uses compact navigation, drawers, touch-oriented controls and platform-native file pickers. This is a presentation difference, not a separate manuscript model.

The iOS/iPadOS target uses the same shared mobile client. Apple-specific work is confined to native packaging, Files/UIDocumentPicker document access, application metadata, signing/provisioning and Universal Link association.

## Architecture boundaries

### Local-first manuscript ownership

The native application can keep manuscripts in storage chosen by the author. A manuscript does not need to become proprietary server state merely because server-backed identity, collaboration or integrations are enabled.

Installed Studio clients distinguish a trusted personal device from a shared/foreign device. On an own device, normal local/system-storage working paths can be retained. On a shared device, Studio prefers profile-scoped cloud connections and does not retain the selected local path; one-off portable/removable storage remains available.

### Server-backed identity and services

Accounts, password recovery, connected identities, federated sign-in, collaboration, peer review, direct cloud connectors, institution administration and publishing-system integrations use the Studio API and PostgreSQL-backed services. Authentication identity is kept distinct from scholarly contributor identity and from institution membership. These features depend on the deployment being correctly configured and migrated.

### Institutional administration boundary

Institution membership (`MEMBER` / `ADMIN` / `OWNER`) and OMI central administration (`ADMIN` / `OWNER`) are separate authorization planes. Neither grants manuscript/review/editorial-content access by itself. Institution machine API credentials are bound to one institution and explicit scopes, and cannot alter owner roles.

See [Institutional and Central Administration](../integrations/institutional-administration.md).

### External integrations

OMI separates manuscript semantics from provider-specific authentication and transport. OJS, OMP, cloud storage, ORCID, OIDC identity providers, translation services and AI agents therefore connect through integration layers rather than becoming part of the core document model.

### Publishing-system authority

For connected OJS and OMP workflows, the publishing system remains authoritative for submission workflow state, assignments, rounds and editorial decisions. Studio acts as the structured authoring and review workspace and exchanges information through defined application endpoints rather than direct database coupling.

The current OJS and OMP integrations are bidirectional for review work: Studio can consume role-scoped launch context, assigned files and native review-form definitions, and can return signed review submissions, corrections and separated author/editor feedback through the integration endpoint. OMP additionally preserves monograph/publication/study mapping and restricts reviewers to their assigned study. This does not transfer workflow authority from OJS or OMP to Studio.

## Release and distribution

`0.1.0-beta.3` is the current Studio beta release line. GitHub Actions produces release artifacts from the shared source tree for Windows, Linux, macOS and Android. The public Studio download page exposes browser access and the available native packages, including the Android universal APK.

iOS/iPadOS currently has a successful CI simulator build rather than a public IPA. The Apple distribution path is prepared but deliberately separated from simulator validation: public/device builds require the real Apple Development Team ID, distribution certificate, provisioning profile and final `apple-app-site-association` configuration before TestFlight/App Store publication can be claimed.

See [Open Manuscript Studio on iOS and iPadOS](../foundations/ios-ipados-studio.md).

## Beta validation focus

The beta line shifts the release gate from “is the primary workflow implemented?” to “does it remain reliable across realistic documents, platforms, roles and failure conditions?”. Current validation priorities are:

1. manuscript creation, opening, editing, saving, explicit closing, session restoration and reopening without data loss;
2. large and structurally complex DOCX imports, including notes, tables, lists, fields and dynamic indexes;
3. representative structured export paths on web and native clients;
4. OJS and OMP manuscript round-trip and role-aware author/editor/reviewer workflows, including assigned-file scoping, multi-round review, native review forms and signed writeback;
5. double-blind peer review without identity leakage and with least-privilege integration scopes;
6. Android Documents/SAF lifecycle behavior and responsive mobile navigation;
7. iOS/iPadOS Files/UIDocumentPicker behavior once signed physical-device testing is available;
8. institution/central administration without privilege leakage into manuscript content;
9. understandable user-facing recovery for network, authentication, migration, import/export and integration failures.

Configuration-dependent integrations do not need to be universally available for the beta line, provided their maturity is clearly identified and they do not compromise the stable core workflows.

## Remaining beta hardening work

- complete focused Windows and Android regression passes, especially native document open/close/save/session-restoration behavior;
- continue stress-testing large and structurally unusual DOCX manuscripts and improve graceful recovery for unsupported Word constructs;
- exercise password reset, OIDC linking/unlinking and cross-device session behavior against production-like mail/provider configuration;
- run migration and authorization regression tests for institution membership, central administration and institution Admin API credentials;
- continue OJS 3.5 round-trip, multi-round review and cross-version interoperability testing;
- continue OMP 3.5 cross-version interoperability, deployment and recovery hardening;
- strengthen recovery behavior for interrupted network, cloud and synchronization operations;
- replace remaining technical/raw error surfaces with actionable user-facing messages;
- integrate Windows production code signing if/when the SignPath Foundation application is accepted;
- continue macOS signing/notarization work;
- configure Apple Developer signing/provisioning, production Universal Link association and TestFlight/device validation before claiming public iOS/iPadOS distribution;
- continue store-oriented Android distribution work;
- develop conformance suites mapping implementation behaviour directly to normative OMI requirements;
- establish release-level compatibility guarantees for supported import/export targets.

The presence of a feature in this implementation snapshot must not be interpreted as formal conformance with an OMI specification unless a corresponding conformance class and evidence are published separately.

---
title: Studio outbound security and acceptance checkpoint — 2026-11-02
sidebar_label: Security acceptance checkpoint
---

# Outbound security and acceptance — 2026-11-02

This checkpoint refines the five Studio 1.0 baseline documents against Studio main `7c4b2826e7b6a2d718f45fced917e9cfab4d42a9`. It records merged implementation, compatibility and evidence ownership. It does not promote a Draft specification, declare universal SSRF protection, waive a release gate or change ordinary manuscript editing.

## Verified implementation and dependency direction

| Boundary | Actual contract / owner | Consequence |
|---|---|---|
| API service / Plesk | Retain the existing shared non-root API identity. The optional `omi-studio-api-egress-shared-uid.conf` applies IP filtering only to its systemd service cgroup. | Other Plesk pools are not governed by this filter. A UID-wide firewall requires a dedicated UID and separate approval. This topology does not isolate processes that already share the UID at the filesystem/process boundary. |
| Host IP policy | Deny selected private, metadata and reserved ranges; localhost and public Internet remain permitted. | It is not an external destination allowlist or complete SSRF protection. Untrusted HTTP must not use the localhost exception intended for database/proxy traffic. |
| Application HTTP | `connectionPinnedHttp.ts` checks all A/AAAA answers in the socket lookup, rejects any nonpublic answer, preserves TLS hostname/SNI, and uses fresh connections. | WebDAV, PKP, configured publication/AI, OIDC/ORCID/JWKS and Office callsites reuse this adapter. Audit remaining independent HTTP/OAuth helpers separately. No implied manuscript-access grant. |
| Identity metadata | `oidcMetadataHttp.ts` binds discovery issuer; validates endpoints; pins token/UserInfo/JWKS requests; bounds bodies. | Public HTTPS required in production, no redirects; private institutional IdPs need a separately designed scoped policy. Do not weaken global checks or infer scholarly identity from this transport. |
| Office callback | `callbackUrl.ts` binds the source to the exact configured HTTPS origin, including its effective port; transport rejects private targets and redirects. | A matching configured custom HTTPS port is permitted by the validator. A different port/origin is rejected. Local Docker/loopback callback downloads are unsupported. Existing session/key/capability, CAS and DOCX limits remain. |
| PDF execution | Separate worker identity, AF_UNIX ACL, private network/mounts and finite resource limits. Shared `pdfSubprocess.ts` terminates POSIX process groups at timeout/parent exit. | `/tmp` needs `mode=1777`; `TasksMax=512` includes threads. Escaped sessions and Windows direct-child fallback require distinct assessment. HTTP transport and PDF sandbox are separate controls. |

OMI models, schemas, container generations, identity/review authority and OJS/OMP wire protocols are unchanged. External Office/OIDC deployments using private addresses or redirects require explicit compatibility review before rollout. Keep a matched secure rollback pair; do not restore unrestricted fetch or unisolated PDF fallback.

## Issue status and release evidence are different records

GitHub status observed on 2026-11-02: [#765](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765) closed on 2026-11-01 at 17:02:52 UTC; [#774](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774) closed at 15:35:19 UTC. Do not describe them as currently open, automatically reopen them, or infer all acceptance evidence from closure.

| Evidence | Verified scope | Remaining reconciliation / owner |
|---|---|---|
| #774 operator results | [Distinct/same-owner jobs](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774#issuecomment-6559798888): two distinct jobs passed, same-owner 503/200, `pids.peak=349`, `TasksMax=512`, max events 0. [Idle sample](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/774#issuecomment-6559820812): only worker main process remains. Earlier records report namespace/filesystem/ACL and sequential render/import observations. | Owner links the final controlled timeout/recovery acceptance, tested deployed SHA and environment to the candidate receipt. Normal completion is not a forced-timeout test. Do not discard accepted results or request disruptive production retests merely for screenshots. |
| #765 host record | [Staged-policy comment](https://github.com/open-manuscript-initiative/open-manuscript-studio/issues/765#issuecomment-6560592698) documents the original dedicated-UID plan; #822 later implements the shared-UID topology. | Operator records effective service-cgroup policy, IPv4/IPv6 negative results and positive provider regression references for the actual deployment. Include residual localhost/public egress and remaining helper inventory. A stale pre-#822 comment is not the final acceptance receipt. |
| Source regression | 22 focused tests passed on the reviewed source: runtime evidence, shared-UID/pinning, outbound transport, Office callbacks and OIDC/JWKS. These use synthetic data/mocks and reused installed dependencies. | CI independently reruns on the candidate with its lockfiles. Passing local tests do not prove host installation, real IdP/Office compatibility or independent conformance. |
| E02 publication | `aggregate-rc-evidence.mjs` / `rc-evidence.mjs` require reviewed SHA, prior build/file hashes, workflow runs and every manual gate. `host-egress`, `host-pdf-sandbox`, security review and owner go/no-go remain required. | Release owner supplies the existing receipt and evidence references for the exact candidate. Missing/unmapped evidence blocks RC publication regardless of issue state. Private evidence may be access-controlled HTTPS references; no private manuscripts, filenames/paths, credentials or raw host inventories in Git/CI. |

Source status, GitHub issue status, operator observations and release receipts must remain explicit fields in the acceptance record. This document supplies no invented host result and does not close outstanding test obligations by editing prose.

## ADR refinements and dependency-aware follow-up

- **ADR-012/014/017:** use two-layer outbound control with scoped application transport; keep account, scholarly identity, review authorization and credentials separate. Alternatives: shared-UID firewall (unsafe for this topology), public-IP filter alone (leaves localhost), a broker (possible future control). Revisit for private IdP/Office support, proxies, new helpers or deployment topology.
- **ADR-016/017:** preserve separate PDF worker and finite cgroup limits; retain process-group cleanup. Revisit on escaped process sessions, Windows/native promotion, worker pooling or multiple hosts.
- **ADR-019:** issue closure is workflow state, not an exact-candidate attestation. Keep the E02 workflow inventory and manual receipt unchanged. Revisit on release-gate or evidence-contract changes.
- **C12/C13:** characterize public HTTPS/no-redirect and configured-origin compatibility; inventory remaining transports, then adapt each with negative and real-provider tests. Do not broaden permissions to preserve an unsupported topology.
- **D / E02:** operator reconciles existing host evidence first, fills only identified gaps in staging/approved maintenance, then release owner binds it to candidate SHA/artifacts. No new subsystem or database migration is required.

Implementation decisions and operational follow-up: [Studio ADR-031](https://github.com/open-manuscript-initiative/open-manuscript-studio/blob/main/docs/architecture/adr-031-outbound-security-and-acceptance.md).

## Exact implementation sources

- [Shared-UID service policy, #822](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/0ad079914db439cca808f306b6cb67d3a2332b4e)
- [Common pinned transport](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/3381c87f33c789bd42db1196432b51dbe217fb6e)
- [OIDC transport adoption](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/df4910066e78054e181b5d1e694c8ecf202a0051)
- [Exact Office origin](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/f98c6e494266ec58354cb55866eaec10805df9ef)
- [PDF process-group cleanup, #819](https://github.com/open-manuscript-initiative/open-manuscript-studio/commit/dfeae517d64d42d6ce06508828d1d7a631009b37)

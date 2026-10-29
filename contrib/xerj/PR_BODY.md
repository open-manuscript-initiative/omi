# corpus: add OMI scholarly publishing reference

## Domain and purpose

An agent implementing **interoperable scholarly publishing** would query this corpus for authoritative Open Manuscript Initiative precedents: manuscript and scholarly-object models, persistent anchors and annotations, authorship and metadata, citations, peer-review workflows, portable OMI interchange and file-format specifications, and OJS/OMP integration profiles.

## Provenance

- Source: https://github.com/open-manuscript-initiative/omi
- Manifest: `tools/xerj-code/hub/omi-scholarly-publishing.json`
- Backlog: `WRITE` / Lane A / `candidate` / pinned
- Licence: MIT (© 2026 Open Manuscript Initiative Contributors), `adapt-with-attribution`
- Source pin: **REPLACE_WITH_GENERATED_SHA**
- Files: **REPLACE_WITH_GENERATED_FILE_COUNT**
- Bytes: **REPLACE_WITH_GENERATED_BYTE_COUNT**
- Human licence reviewer: **REPLACE_WITH_REVIEWER**

This corpus excludes the GPL-3.0 OJS and OMP plugins, which would require separate approach-only reviews. It also does not duplicate the separately listed Studio contribution.

## Validation

- [ ] Source `LICENSE` inspected at pinned SHA by the named human reviewer
- [ ] Manifest generated via `xerj corpus add`, including measured files/bytes
- [ ] `python3 tools/xerj-code/hub/validate_hub.py` passes
- [ ] `cd engine && cargo test --profile ci-test -p xerj-common xccode::manifest` passes
- [ ] No private data, binary pack, secret or signing key added

**AI assistance disclosure:** The proposal and the manifest-generation script were initially prepared with an AI assistant. The named human reviewer independently checked the licence and submitted the pull request.

## Questions an agent could ask

- How does OMI represent a portable scholarly document and its citations?
- Which anchors and annotations survive manuscript interchange?
- How does the OMI review model represent editorial decisions and revisions?
- How are OJS and OMP integration contracts described in the OMI specifications?

A XERJ corpus is a source-pinned technical reference, not an independent quality certification.

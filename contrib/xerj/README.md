# XERJ Corpus Hub contribution: OMI scholarly publishing

This folder prepares a **reference corpus (Lane A)** for the [XERJ Corpus Hub](https://hub.xerj.org/contribute). It does not submit a PR or confer recognition.

**Corpus:** `omi-scholarly-publishing`  
**Repository:** https://github.com/open-manuscript-initiative/omi  
**Domain:** interoperable scholarly writing, peer review, publication and preservation.

Use case: an AI agent implementing portable scholarly documents can retrieve OMI's document and scholarly-object models, persistent anchors, metadata, citation and review semantics, OMI file-format specifications, and OJS/OMP integration profiles.

This initial contribution contains **only** the MIT-licensed OMI specification/documentation repository. The separately GPL-3.0-licensed OJS/OMP plugins must be evaluated as separate, **approach-only** corpora. Studio already has a different XERJ contributor listing.

## 1. Simple option: XERJ's GitHub sign-in

At https://hub.xerj.org/add sign in with GitHub, inspect permissions and select `open-manuscript-initiative/omi` if organization-owned repositories are available to your XERJ identity. Use the domain description above. This action must be completed by the account owner, not an assistant.

## 2. Reproducible pull-request option

Requires Git, Python 3.11+, the reviewed `xerj` CLI, a personal fork of `xerj-org/xerj`, and a **human** licence review. Use a development computer or isolated environment, not the production VPS.

Fork https://github.com/xerj-org/xerj, then:

```bash
git clone --branch corpus-hub https://github.com/xerj-org/xerj.git xerj-corpus-hub
cd xerj-corpus-hub
git checkout -b corpus/omi-scholarly-publishing
git remote add personal https://github.com/YOUR_GITHUB_USERNAME/xerj.git
```

**Personally verify** the MIT notice, © 2026 Open Manuscript Initiative Contributors, in the OMI repository's [LICENSE](https://github.com/open-manuscript-initiative/omi/blob/main/LICENSE). Review it again at the exact pinned SHA before signing the submitted PR. Do not use the human-review flag without checking the licence.

From the XERJ feature-branch checkout, run the script from your cloned OMI repository:

```bash
python3 /path/to/omi/contrib/xerj/prepare_submission.py \
  --xerj-repo . --reviewer @YOUR_GITHUB_USERNAME --license-checked
```

The script invokes `xerj corpus add`, reads XERJ's **real** full commit SHA, file count and byte count, adds a human-attested MIT review, creates `tools/xerj-code/hub/omi-scholarly-publishing.json`, and inserts one candidate in `tools/xerj-code/hub/backlog/backlog-100.json`. It never makes up corpus statistics or submits changes remotely.

Inspect the resulting manifest and check the `LICENSE` at `https://github.com/open-manuscript-initiative/omi/blob/<PIN_SHA>/LICENSE` before continuing.

```bash
python3 tools/xerj-code/hub/validate_hub.py
cd engine && cargo test --profile ci-test -p xerj-common xccode::manifest
cd ..
git diff --check
git diff --stat
git add tools/xerj-code/hub/omi-scholarly-publishing.json \
        tools/xerj-code/hub/backlog/backlog-100.json
git commit -m "corpus: add OMI scholarly publishing reference"
git push -u personal corpus/omi-scholarly-publishing
```

Open a PR **to `xerj-org/xerj:corpus-hub`, not `main`**, with [PR_BODY.md](PR_BODY.md). Replace its placeholders with the measured values. Disclose AI assistance and the human reviewer. XERJ's maintainers control acceptance, licence approval and live publication.

**Source of record:** [XERJ CONTRIBUTING.md](https://github.com/xerj-org/xerj/blob/corpus-hub/tools/xerj-code/hub/CONTRIBUTING.md).

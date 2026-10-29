#!/usr/bin/env python3
"""Prepare an OMI corpus manifest on a clean XERJ corpus-hub feature branch.

Requires git, xerj, Python 3.11+ and a human MIT licence review.
This does not contact XERJ to submit a PR.
"""
import argparse
import datetime
import json
import os
from pathlib import Path
import re
import shutil
import subprocess

SLUG = "omi-scholarly-publishing"
SOURCE = "https://github.com/open-manuscript-initiative/omi"
DOMAIN = (
    "An agent implementing interoperable scholarly publishing queries this corpus "
    "for OMI manuscript and scholarly-object models, stable annotations, "
    "metadata and citations, peer-review semantics, the portable OMI file "
    "format, and OJS/OMP integration specifications."
)


def command(*args, cwd=None):
    return subprocess.run(args, cwd=cwd, text=True, capture_output=True,
                          check=True).stdout.strip()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--xerj-repo", type=Path, required=True)
    parser.add_argument("--reviewer", required=True,
                        help="GitHub handle of the HUMAN who reviewed LICENSE, e.g. @vargaijanos")
    parser.add_argument("--license-checked", action="store_true",
                        help="Human confirmation that the pinned OMI licence is MIT")
    args = parser.parse_args()
    if not args.license_checked:
        parser.error("Read the MIT LICENSE yourself before passing --license-checked")
    if not re.fullmatch(r"@[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})", args.reviewer):
        parser.error("--reviewer must be a GitHub @handle")
    for tool in ("git", "xerj"):
        if not shutil.which(tool):
            parser.error("Required executable missing: " + tool)

    root = args.xerj_repo.resolve()
    hub = root / "tools/xerj-code/hub"
    backlog = hub / "backlog/backlog-100.json"
    target = hub / (SLUG + ".json")
    if not (hub / "CONTRIBUTING.md").is_file() or not backlog.is_file():
        parser.error("Not a checkout of the XERJ corpus-hub registry")
    branch = command("git", "branch", "--show-current", cwd=root)
    if branch in ("", "main", "corpus-hub"):
        parser.error("Create a feature branch from corpus-hub first")
    if command("git", "status", "--porcelain", cwd=root):
        parser.error("Start with a clean XERJ checkout")
    if target.exists():
        parser.error("Corpus manifest already exists: " + str(target))

    current = backlog.read_text(encoding="utf-8")
    data = json.loads(current)
    if any(x.get("slug") == SLUG for x in data["corpora"]):
        parser.error("Corpus already exists in XERJ backlog")
    if "WRITE" not in data["cats"] or "candidate" not in data["statuses"]:
        parser.error("XERJ backlog schema has changed")
    section = re.search(r'"corpora"\s*:\s*\[', current)
    if section is None:
        parser.error("Could not locate backlog corpora array")

    # XERJ itself generates actual SHAs, file counts and byte counts.
    subprocess.run(["xerj", "corpus", "add", SLUG, SOURCE], check=True)
    home = Path(os.environ.get("XERJ_CODE_HOME", "~/.xerj-code")).expanduser()
    generated = home / "corpora" / SLUG / "corpus.json"
    if not generated.is_file():
        parser.error("XERJ manifest not created: " + str(generated))
    manifest = json.loads(generated.read_text(encoding="utf-8"))
    repos = manifest.get("repos")
    if manifest.get("corpus") != SLUG or not isinstance(repos, list) or len(repos) != 1:
        parser.error("Unexpected generated manifest format")
    source = repos[0]
    url = str(source.get("url", "")).removesuffix(".git").rstrip("/")
    if url.lower() != SOURCE.lower():
        parser.error("Unexpected repository URL in generated manifest")
    sha = source.get("sha")
    if not isinstance(sha, str) or not re.fullmatch(r"[0-9a-f]{40}", sha):
        parser.error("Missing full pinned commit SHA")
    files, byte_count = source.get("files"), source.get("bytes")
    if not isinstance(files, int) or files <= 0 or not isinstance(byte_count, int) or byte_count <= 0:
        parser.error("Actual file/byte counts missing; do not invent them")

    source["licence"] = "MIT"
    source["review"] = {
        "spdx": "MIT",
        "use": "adapt-with-attribution",
        "by": args.reviewer,
        "at": datetime.datetime.now(datetime.timezone.utc).date().isoformat(),
        "note": "Human-checked MIT LICENSE (c) 2026 Open Manuscript Initiative Contributors; retain licence and attribution.",
    }
    row = {
        "cat": "WRITE", "domain": DOMAIN, "lane": "A", "refresh": "pinned",
        "slug": SLUG,
        "sources": [{"licence_hint": "MIT; human review in manifest",
                     "url": "see hub/" + SLUG + ".json"}],
        "status": "candidate",
        "tags": {"region": "GLOBAL",
                 "topics": ["scholarly-publishing", "open-science",
                            "interoperability", "manuscript"]},
    }
    # Minimize the diff: append only one new entry, preserving the rest of the backlog.
    insertion = "\n    " + json.dumps(row, ensure_ascii=False, indent=2).replace("\n", "\n    ") + ","
    revised = current[:section.end()] + insertion + current[section.end():]
    assert any(r.get("slug") == SLUG for r in json.loads(revised)["corpora"])
    target.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    backlog.write_text(revised, encoding="utf-8")
    print("Prepared: " + str(target.relative_to(root)))
    print("Updated: " + str(backlog.relative_to(root)))
    print("Pinned SHA: {} | files: {} | bytes: {}".format(sha, files, byte_count))
    print("Validate: python3 tools/xerj-code/hub/validate_hub.py")


if __name__ == "__main__":
    main()

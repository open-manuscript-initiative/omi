# Examples

Example manuscripts, publication packages and reference files.

## OMI-SPEC-320 file-format fixtures

Versioned OMI-SPEC-320 Draft fixtures are published from
[`static/examples/omi-spec-320/0.2.0`](../static/examples/omi-spec-320/0.2.0).
The manifest records expected validity, diagnostic codes, and the normative
requirement identifiers exercised by each case. The current corpus is an
initial review set; it does not cover every normative requirement or constitute
an OMI 1.0 approval.

Run the same reference validator used by CI with:

```bash
npm run test:file-format
```

The runner validates structure against the canonical Draft 2020-12 schema,
detects duplicate JSON member names, and applies selected semantic checks. The
[conformance profile and pre-1.0 release gates](../docs/specifications/file-format-conformance.md)
describe current coverage and remaining work.

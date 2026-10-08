# Examples

Example manuscripts, publication packages and reference files.

## OMI-SPEC-320 file-format fixtures

The versioned OMI-SPEC-320 Draft fixtures are published from
[`static/examples/omi-spec-320/0.2.0`](../static/examples/omi-spec-320/0.2.0).
The manifest records each fixture's expected validity and stable diagnostic
codes. The corpus is the initial reviewable conformance set for the Draft; it
does not yet cover every normative requirement or constitute an OMI 1.0
approval.

Run the same reference validator used by CI with:

```bash
npm run test:file-format
```

The runner validates structure against the canonical Draft 2020-12 schema and
applies semantic checks that JSON Schema cannot express. The full
[conformance profile, coverage matrix, and pre-1.0 release gates](../docs/specifications/file-format-conformance.md)
describe what the current corpus proves and what remains open.

# Examples

Example manuscripts, publication packages and reference files.

## OMI-SPEC-320 file-format fixtures

The versioned OMI-SPEC-320 Draft fixtures are published from
[`static/examples/omi-spec-320/0.2.0`](../static/examples/omi-spec-320/0.2.0).
Their `manifest.json` records the expected validity and diagnostic codes for
each document.

Run the structural and semantic reference checks with:

```bash
npm run test:file-format
```

The runner uses the canonical Draft 2020-12 schema at
[`static/schemas/omi-manuscript-0.2.schema.json`](../static/schemas/omi-manuscript-0.2.schema.json)
and adds the referential checks that JSON Schema cannot express.

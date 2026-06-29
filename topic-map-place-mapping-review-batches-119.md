# Topic map place mapping review - batch 119

Batch 119 fixes the audit test workflow import path.

## Change

Updated `.github/workflows/python-audit-tests.yml` so the test step runs with:

```yaml
env:
  PYTHONPATH: .
```

The test command remains:

```bash
python -m unittest discover -s tests -p "test_*.py"
```

## Reason

The audit helper tests import modules from `scripts/`. In GitHub Actions, unittest discovery may not always place the repository root on `sys.path` in the way these imports need. Setting `PYTHONPATH=.` makes the repository root explicit without adding package files or third-party dependencies.

## Verification

The `Python audit tests` workflow should now be able to import:

- `scripts.audit_topic_map_clusters`
- `scripts.audit_topic_map_specificity_candidates`

A passing workflow only verifies the audit helper behavior. It does not replace reviewing fresh topic-map outputs after the next build.

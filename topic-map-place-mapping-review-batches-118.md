# Topic map place mapping review - batch 118

Batch 118 adds lightweight regression tests for the post-build audit helpers.

## Change

Added `tests/test_topic_map_audit_helpers.py`.

The tests cover:

- ASCII specificity terms must match token boundaries.
- ASCII specificity terms should not match inside another word.
- Non-ASCII terms can still use substring matching.
- broad GeoJSON features with a more specific candidate term are reported.
- low-count generic broad cluster matches are still reported below the normal cluster threshold.

Added `.github/workflows/python-audit-tests.yml`.

The workflow runs:

```bash
python -m unittest discover -s tests -p "test_*.py"
```

It runs on manual dispatch, pull requests, and pushes that touch the audit scripts, tests, or the workflow itself.

## Purpose

Recent batches added cluster auditing, specificity candidate auditing, ranking, and token-aware matching. These helpers are now part of the build verification path, so small regressions would make fresh `game-all` output harder to trust. The tests keep the most important behavior fixed without adding third-party dependencies.

## Verification

The next relevant push or manual workflow run should execute `Python audit tests`. Passing tests mean the audit helper behavior is intact; they do not replace reviewing the fresh `game-all` outputs.

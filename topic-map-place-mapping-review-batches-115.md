# Topic map place mapping review - batch 115

Batch 115 adds a post-build specificity-candidate audit.

## Change

Added `scripts/audit_topic_map_specificity_candidates.py` and wired it into `.github/workflows/build-rss-topic-maps.yml`.

The script scans generated GeoJSON and reports broad map resolutions whose article title also contains a more specific known place, company, city, district, event, or site term from the place dictionaries.

The workflow now writes:

- `specificity-audit.log`
- `output/topic-maps/*-specificity-candidates.json`

These are included in the normal RSS topic-map artifacts and private generated-data commit.

## Purpose

This catches cases where a broad fallback may have beaten a more concrete rule even if the issue does not appear as a large cluster and even if the matched text is not one of the generic broad phrases tracked by the cluster audit.

## Verification

After the next build, inspect results in this order:

1. `place-rule-audit.log`
2. `output/topic-maps/game-all-clusters.json`
3. `output/topic-maps/game-all-specificity-candidates.json`
4. `docs/topic-maps/game-all.geojson`
5. `docs/topic-maps/game-all-unresolved.json`

Candidate entries are not automatically wrong. They are review targets where the article title contains a more specific known term while the current resolution is broad.

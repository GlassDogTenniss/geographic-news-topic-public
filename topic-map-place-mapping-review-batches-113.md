# Topic map place mapping review - batch 113

Batch 113 updates the main RSS topic-map build workflow so place-rule validation runs in the same path as map generation.

## Change

`.github/workflows/build-rss-topic-maps.yml` now runs the place-rule audit immediately after merging supplemental dictionaries:

```bash
python scripts/audit_topic_map_place_rules.py --data-dir data | tee place-rule-audit.log
```

The log is also written to the GitHub step summary, uploaded with the map artifacts, and included in the generated private map-data commit when present.

## Purpose

The build workflow now checks the merged dictionary state that is actually used by `scripts/build_rss_topic_maps.py`. This matters because later numbered supplemental files override earlier entries by `id` during merge.

## Verification

After the next topic-map build, review these files in order:

1. `place-rule-audit.log`
2. `output/topic-maps/game-all-clusters.json`
3. `docs/topic-maps/game-all.geojson`
4. `docs/topic-maps/game-all-unresolved.json`

The first priority is to confirm that batch 111 overrides are present in the merged dictionary and that clusters using generic matched text are easy to identify.

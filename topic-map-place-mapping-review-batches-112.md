# Topic map place mapping review - batch 112

Continuation of the `game-all` place-mapping cleanup after batch 111.

## Scope

Batch 112 strengthens post-build cluster auditing. The goal is to make broad fallback overmatch visible in generated outputs, especially when an article is resolved through a generic `matched_text` such as `global gaming` rather than a concrete site, city, event, company, or region phrase.

## Changes

Updated `scripts/audit_topic_map_clusters.py` to report:

- `generic_match_count`
- `generic_match_articles`
- `needs_review = true` when a cluster contains generic broad matched text

The generic match list includes:

- `global gaming`
- `global games`
- `global video game industry`
- `global video game market`
- `gaming industry`
- `games industry`
- `video game industry`
- `gaming market`
- `market report`
- `gaming report`
- `game culture`
- `regional games`
- related broad fallback phrases

## Reason

The stale `game-all` output showed articles resolving to the China developers topic through the standalone phrase `global gaming`. That problem was corrected in batch 111, but future broad fallback entries can reproduce the same class of error. Cluster audit should therefore flag the symptom in output, not only the dictionary shape before build.

## Next verification

After the next `game-all` build, inspect `output/topic-maps/game-all-clusters.json` and prioritize clusters where:

- `generic_match_count > 0`
- `needs_review = true`
- a broad rule id appears with unrelated article titles

Expected result after batch 111:

- `observed_chinese_developers_global_gaming_202606` should not receive Xsolla, Bain, South Africa, or other non-China articles solely through `global gaming`.
- broad fallback clusters may still exist, but they should be clearly marked for review if they depend on generic matched text.

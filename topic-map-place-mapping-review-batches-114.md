# Topic map place mapping review - batch 114

Batch 114 closes a gap in post-build cluster auditing.

## Change

`scripts/audit_topic_map_clusters.py` now reports generic broad matched-text groups even when their cluster size is below the ordinary `--min-count` threshold.

New behavior:

- ordinary clusters are still controlled by `--min-count`
- groups with generic broad `matched_text` are included even when `count` is 1 or 2
- these entries include `below_min_count: true`
- the summary line reports `low_count_generic`
- `--skip-low-count-generic` can restore the previous behavior

## Reason

The previous cluster audit was good at finding large broad clusters, but a concrete site/city/company rule can still lose to a broad fallback in one or two articles. Those cases are important during `game-all` cleanup because they indicate rule-ranking or keyword-specificity problems even if they do not form a large cluster.

## Verification

After the next build, inspect `output/topic-maps/game-all-clusters.json` for:

- `below_min_count: true`
- `generic_match_count > 0`
- broad `rule_id` values attached to articles that mention a concrete company, event, city, district, or site

These should be treated as targeted correction candidates, not as reasons to add more broad fallback rules.

# Topic map place mapping review - batch 116

Batch 116 improves the specificity-candidate audit output so fresh build results are easier to triage.

## Change

Updated `scripts/audit_topic_map_specificity_candidates.py`.

The output now includes:

- `review_priority`
- `current_place_type`
- `current_place_label`
- `current_score`
- candidate `score`
- candidate `score_delta`
- candidate `best_matched_term`

The script also sorts findings by `review_priority` and prints the top review targets to stdout.

## Purpose

The previous output listed candidates, but it did not make the review order explicit. The new ranking favors cases where a broad current resolution has a much more precise candidate rule in the title, especially exact site, venue, district, city, or company-site terms.

## Verification

After the next build, inspect:

- `specificity-audit.log` for the top printed candidates
- `output/topic-maps/game-all-specificity-candidates.json` for full details

High `review_priority` does not mean the mapping is automatically wrong. It means the article should be checked before adding or strengthening any broad fallback rule.

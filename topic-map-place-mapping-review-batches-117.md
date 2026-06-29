# Topic map place mapping review - batch 117

Batch 117 reduces false positives in the specificity-candidate audit.

## Change

Updated `scripts/audit_topic_map_specificity_candidates.py` so term matching is token-aware for terms containing ASCII letters or digits.

Behavior:

- ASCII/alphanumeric terms must match with non-alphanumeric boundaries.
- Non-ASCII terms, including Japanese names, still use normalized substring matching.

## Reason

The specificity audit is intended to surface cases where a broad map resolution may have beaten a more concrete place rule. Plain substring matching can create noisy candidates when an English term appears inside another word. Token-aware matching keeps the audit useful without removing Japanese and other non-ASCII partial matching behavior.

## Verification

After the next build, review `output/topic-maps/game-all-specificity-candidates.json` as before. A smaller and cleaner candidate set is expected, especially for English company, city, event, and site names.

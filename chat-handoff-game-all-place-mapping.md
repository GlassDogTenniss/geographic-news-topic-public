# Chat handoff: game-all place mapping continuation

This file is a handoff note for continuing the `game-all` RSS topic-map place-mapping cleanup in a new chat.

## Repository

- Source/private repository: `GlassDogTenniss/geographic-news-topic`
- Public repository: `GlassDogTenniss/geographic-news-topic-public`
- Main feed id: `game-all`

## User instructions and working style

- Respond in Japanese.
- Keep progress summaries compact.
- Do not ask for routine confirmations.
- If information is not fully determined, make conservative assumptions and proceed.
- Do not invent exact street addresses.
- Prefer country, region, multi-region, city, or district-level mapping unless an exact site is already supported.
- Avoid extending broad fallback rules from stale unresolved output unless there is no better source.

## Current project goal

Improve topic-map place resolution for `game-all` RSS articles.

The mapping uses JSON dictionaries under `data/`. Articles are resolved by title/summary keyword and known-place matching. The build script is:

- `scripts/build_rss_topic_maps.py`

Important behavior:

- `location_precision` must be one of the known precision values used by the builder.
- Exact, venue, city, district, and other more specific entries should beat broad fallback entries.
- Broad fallback entries should stay low priority.
- The workflow merges supplemental `data/unresolved_known_places_N.json` files into `data/unresolved_known_places_15.json` before building topic maps.

## Important builder constraints

Known `location_precision` values:

- `exact_site`
- `building`
- `venue`
- `event_site`
- `district`
- `city_district`
- `country_city`
- `city`
- `municipality`
- `state`
- `prefecture`
- `province`
- `admin_area`
- `country`
- `union_region`
- `multi_region`
- `region`
- `continent_region`

Broad fallback-like entries should normally use low `priority`, especially when the id contains:

- `fallback`
- `supplement`
- `terminal`
- `legacy`
- `old_`

## Recent work completed

Large dictionary pass:

- Added `data/unresolved_known_places_49.json` through `data/unresolved_known_places_108.json`.
- Added `data/unresolved_known_places_110.json`.
- `data/unresolved_known_places_109.json` was not created during the large pass.
- The unresolved snapshot used for many of those batches is stale. Do not keep extending it blindly.

Review notes created:

- `docs/topic-map-place-mapping-review-batches-53-60.md`
- `docs/topic-map-place-mapping-review-batches-61-65.md`
- `docs/topic-map-place-mapping-review-batches-66-70.md`
- `docs/topic-map-place-mapping-review-batches-71-75.md`
- `docs/topic-map-place-mapping-review-batches-76-80.md`
- `docs/topic-map-place-mapping-review-batches-81-85.md`
- `docs/topic-map-place-mapping-review-batches-86-90.md`
- `docs/topic-map-place-mapping-review-batches-91-95.md`
- `docs/topic-map-place-mapping-review-batches-96-100.md`
- `docs/topic-map-place-mapping-review-batches-101-105.md`
- `docs/topic-map-place-mapping-review-batches-106-110.md`

Index and verification docs:

- `docs/topic-map-place-mapping-review-index.md`
- `docs/topic-map-place-mapping-post-batch-verification.md`

Scripts added:

- `scripts/audit_topic_map_place_rules.py`
  - audits missing fields, unsupported precision values, duplicate ids, numeric fields, and broad fallback priority issues.
- `scripts/merge_observed_place_dictionaries.py`
  - summarizes or performs supplemental dictionary merging.
  - supports `--dry-run`.

Workflow added:

- `.github/workflows/audit-topic-map-place-rules.yml`
  - manual workflow.
  - runs merge dry-run.
  - runs place-rule audit.
  - uploads `place-rule-merge.log` and `place-rule-audit.log`.

Important caveat:

- The main build workflow `.github/workflows/build-rss-topic-maps.yml` still contains its inline merge block. It was not replaced with the new merge script because replacing the full workflow was blocked during the previous chat.
- The audit workflow is independent and safe to run first.

## Current generated output is stale

The old unresolved output used during the mapping pass had this approximate state:

- file: `docs/topic-maps/game-all-unresolved.json`
- sha at the time: `8a46f8f3cfc05d09da63134a8e98382e3a771cd5`
- created_at: `2026-06-29T04:02:01.386147+00:00`
- stats: fetched 953, filtered 865, resolved 181, unresolved 684
- loaded data only reflected older merged dictionaries, not the full new batch pass.

Therefore the next meaningful step is verification against fresh outputs.

## Recommended next steps

1. Run the manual audit workflow:

   - Workflow: `Audit topic map place rules`
   - Expected result: `errors=0`
   - Warnings are acceptable only if they refer to intentionally broad, low-priority entries.

2. If audit errors appear:

   - Fix unsupported `location_precision` first.
   - Fix duplicate ids second.
   - Fix missing fields or non-numeric `lat`, `lon`, `confidence`.
   - Re-run audit.

3. Run the main topic-map workflow:

   - Workflow: `Build RSS topic maps`
   - `feed_id`: `game-all`
   - `limit`: blank
   - `suggest_candidates`: `false`

4. Inspect fresh outputs:

   - `docs/topic-maps/game-all.geojson`
   - `output/topic-maps/game-all-clusters.json`
   - `docs/topic-maps/game-all-unresolved.json`

5. Check for overmatching:

   - Broad fallback ids should not win against exact site, city, district, company, or event rules.
   - If broad fallback entries overmatch, reduce their `priority`, narrow their `keywords`, or remove the broadest entries.

6. If unresolved remains high:

   - Add new dictionary batches from the fresh unresolved output.
   - Do not continue from the stale old snapshot.
   - Use new batch numbers after 110. Since 109 is absent, either leave it absent or create it only if a concrete source-specific batch is needed.

## Priority entries to verify after fresh build

Specific entries should not be overridden by broad fallbacks:

- IO Interactive Copenhagen
- 34BigThings Torino
- Valve Bellevue
- Microsoft / Xbox Redmond
- Ubisoft Saint-Mande
- The Pokemon Company Roppongi
- Rocksteady London
- Quantic Dream Paris
- Tamatem Amman
- Wizards of the Coast Renton
- HoYoverse / miHoYo Xuhui
- Ubisoft Philippines / BGC Taguig
- LEVEL5 comcept Osaka

Broad groups that require review:

- India market and salary items
- Philippines market and culture items
- Africa games market and culture items
- Southeast Asia industry items
- old mobile-launch fallback entries
- terminal low-priority fallback entries

## Useful commands

Local audit:

```bash
python scripts/audit_topic_map_place_rules.py --data-dir data
```

Merge dry-run:

```bash
python scripts/merge_observed_place_dictionaries.py --data-dir data --dry-run
```

Actual merge, only if intentionally updating the base file locally:

```bash
python scripts/merge_observed_place_dictionaries.py --data-dir data
```

Build only `game-all` locally:

```bash
python scripts/build_rss_topic_maps.py --data-dir data --docs-dir docs --output-dir output --feed-id game-all --fail-on-empty-data
```

## Prompt for the next chat

Use this prompt in a new chat:

```text
以下のリポジトリに、前チャットからの引き継ぎメモがあります。

リポジトリ:
GlassDogTenniss/geographic-news-topic

引き継ぎファイル:
docs/chat-handoff-game-all-place-mapping.md

このファイルを読んで、game-all の topic-map place mapping 作業を続けてください。

方針:
- 日本語で返答してください。
- 確認は不要です。
- 未確定部分は妥当な仮定を置いて進めてください。
- まずは監査 workflow / 監査スクリプト / fresh workflow output の確認から進めてください。
- 古い unresolved snapshot を前提に broad fallback を増やし続けないでください。
- exact site / city / district / event / company など具体ルールが broad fallback に負けていないかを重点確認してください。
- 必要があれば GitHub connector を使ってリポジトリ内のファイルを読み、修正をコミットしてください。
```

## One-sentence current state

The large batch-mapping pass is complete enough; the next useful work is audit, fresh build verification, and then targeted corrections based on the new `game-all` outputs.

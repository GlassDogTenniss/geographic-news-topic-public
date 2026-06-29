# Topic map place mapping review index

This index points to the review notes for the large `game-all` place-mapping cleanup.

## Main review notes

- `docs/topic-map-place-mapping-review-2026-06-29.md`
  - initial review note
  - batches 44-52
  - workflow verification instructions

- `docs/topic-map-place-mapping-review-batches-53-60.md`
  - broad market, platform, event, game-origin, company-strategy, and city-level topics

- `docs/topic-map-place-mapping-review-batches-61-65.md`
  - Japanese studio/mobile launch, investment, regulation, regional market, and showcase topics

- `docs/topic-map-place-mapping-review-batches-66-70.md`
  - Japanese mobile launches, studio transitions, Southeast Asia / Philippines topics, and fallback patterns

- `docs/topic-map-place-mapping-review-batches-71-75.md`
  - Ukraine/Eastern Europe, India, Southeast Asia, Philippines, Japanese mobile releases, and European review topics

- `docs/topic-map-place-mapping-review-batches-76-80.md`
  - global market reports, African industry/culture, India studio/industry, Eastern Europe/Russia media, South Africa/Malaysia/Philippines, and broad regional fallback patterns

- `docs/topic-map-place-mapping-review-batches-81-85.md`
  - Europe policy/industry, Australia-Southeast Asia engagement, Eastern Europe funding, India market, Philippines startup/indie, Indonesia localization, and regional culture fallbacks

- `docs/topic-map-place-mapping-review-batches-86-90.md`
  - Japanese launch/studio collaboration, Asia regulation/culture, Indonesia support, Southeast Asia platform-market, Eastern Europe investment, and legacy fallbacks

- `docs/topic-map-place-mapping-review-batches-91-95.md`
  - 2017-2019 legacy items: African mobile/developer stories, Southeast Asia market, Epic/Capcom operations, Cameroon/Philippines/Singapore workforce/platform, Japanese mobile preregistration, and Osaka studio-base items

- `docs/topic-map-place-mapping-review-batches-96-100.md`
  - 2015-2017 legacy items: Japanese mobile preregistration, overseas indie studio commentary, ASEAN/Africa/Philippines/Malaysia/Singapore culture and industry, launch articles, and studio incident items

- `docs/topic-map-place-mapping-review-batches-101-105.md`
  - terminal unresolved snapshot: Philippines policy/market, 2014 Japan mobile/indie studio, India/Philippines legacy business, hardware/platform fallbacks, and terminal low-priority fallbacks

- `docs/topic-map-place-mapping-review-batches-106-110.md`
  - final old regional development, Japan mobile launch supplements, regional culture supplements, and final low-priority notes

- `docs/topic-map-place-mapping-review-batches-111.md`
  - targeted override for `global gaming` overmatch and high-risk broad fallback priority reduction

## Verification note

- `docs/topic-map-place-mapping-post-batch-verification.md`
  - dictionary audit command
  - audit workflow
  - merge dry-run
  - workflow inputs
  - post-run checks
  - priority review targets

## Helpers

- `.github/workflows/audit-topic-map-place-rules.yml`
  - manual audit workflow

- `scripts/audit_topic_map_place_rules.py`
  - validates place dictionaries

- `scripts/merge_observed_place_dictionaries.py`
  - summarizes or performs supplemental dictionary merge

## Current caveats

- `data/unresolved_known_places_109.json` was not created in the large pass.
- The next source of truth should be a fresh workflow output, not the old unresolved snapshot used for batches 49-108 and 110.

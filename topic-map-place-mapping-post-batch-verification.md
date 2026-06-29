# Topic map place mapping post-batch verification

This note covers the large `game-all` place-mapping pass that added batches 49-108 and 110.

## Purpose

The recent batches add many conservative mappings for company, event, market, launch, culture, policy, and regional-industry articles. The main risk is not missing an exact address. The main risk is a broad low-priority entry winning over a later, more specific entry.

## Inputs for the next topic-map workflow run

Use the topic-map workflow with:

- `feed_id`: `game-all`
- `limit`: blank
- `suggest_candidates`: `false`

## Pre-run dictionary audit

Run the dedicated audit workflow first:

- workflow: `Audit topic map place rules`
- file: `.github/workflows/audit-topic-map-place-rules.yml`

The audit workflow also runs a dry-run merge summary with:

```bash
python scripts/merge_observed_place_dictionaries.py --data-dir data --dry-run
```

This mirrors the merge concept used by the topic-map workflow: supplemental `data/unresolved_known_places_N.json` files are ordered by number and later ids override earlier ids.

The same audit can also be run locally:

```bash
python scripts/audit_topic_map_place_rules.py --data-dir data
```

Expected:

- `errors=0`
- warnings are acceptable only when they refer to intentionally broad, low-priority entries

The audit checks:

- required fields
- known `location_precision` values
- numeric latitude, longitude, and confidence
- duplicate rule ids across dictionary files
- broad fallback-like entries with unexpectedly high priority

## Post-run output checks

After the topic-map workflow finishes, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

1. `game-all-unresolved.json` should drop substantially from the pre-pass snapshot.
2. New resolved entries should use known precision values only:
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
3. Very broad ids containing `fallback`, `supplement`, `terminal`, or `legacy` should appear only for articles that have no more specific company, city, event, or country rule.
4. No broad fallback should replace previously precise entries such as known company offices, event sites, district-level studio areas, or city-level studio entries.

## Priority review targets

Check these groups first:

- exact-site entries added before the broad pass:
  - IO Interactive Copenhagen
  - 34BigThings Torino
  - Valve Bellevue
  - Microsoft / Xbox Redmond
  - Ubisoft Saint-Mande
  - The Pokemon Company Roppongi
- city or district entries:
  - Rocksteady London
  - Quantic Dream Paris
  - Tamatem Amman
  - Wizards of the Coast Renton
  - HoYoverse / miHoYo Xuhui
  - Ubisoft Philippines / BGC Taguig
  - LEVEL5 comcept Osaka
- broad topic entries:
  - India market and salary items
  - Philippines market and culture items
  - Africa games market and culture items
  - Southeast Asia industry items
  - old mobile-launch fallback entries

## Expected follow-up after verification

If unresolved remains high, add the next dictionary batches from the new unresolved output rather than extending broad fallback rules from the old snapshot.

If broad fallbacks overmatch, lower their `priority`, reduce their `keywords`, or remove the broadest entries.

If exact or city entries do not win against broad entries, inspect ranking with:

- `location_precision`
- `place_type`
- `priority`
- `matched_text`
- `match_source`

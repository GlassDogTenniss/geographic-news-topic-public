# Topic map place mapping maintenance notes

This note is the working checklist for maintaining game topic map place mappings. Read this file before adding more `data/unresolved_known_places_*.json` files.

## Current objective

Improve `game-all` topic map location quality without creating false precision.

The current work is no longer just reducing unresolved count. The priority order is:

1. Correct bad or overly coarse mappings already added.
2. Preserve country-prefixed labels in the UI.
3. Avoid broad country labels that absorb unrelated articles.
4. Resolve remaining unresolved articles only when the geographic subject is clear.
5. After each batch, run `Build RSS topic maps` for `game-all` and inspect clusters before continuing.

## Operating rule

Do not use a low-precision location when a named company, institution, venue, or office can be stably identified.

Use the most precise stable level that is justified:

- official venue / address / building: use `venue`, `street_address`, `building`, or `building_floor`
- stable headquarters campus or office area: use `campus_address`, `headquarters_city`, `headquarters_area`, `district`, or `office_area`
- policy, regulation, market, industry, awards, or regional showcase: use `country_*`, `region_*`, `continent_*`, or `multi_region_*`
- article only says a country or region and gives no stable subject site: keep it as a topic, not a fake address

If the article names a company and the company has a stable public headquarters or known game division site, prefer that over `country_company_topic` or `company_area`.

## Common failure that must be avoided

The earlier bad pattern was:

- see article subject such as Sega Sammy, Microsoft, Blizzard, Take-Two, KRAFTON
- avoid address because of caution
- place it at Tokyo / US / Korea / company area

This is too coarse when the subject is a named corporation with a stable headquarters or site.

The corrected pattern is:

- Sega Sammy / Rovio acquisition article: SEGA SAMMY Holdings at Sumitomo Fudosan Osaki Garden Tower
- Microsoft / Xbox corporate articles: One Microsoft Way, Redmond campus
- Blizzard legal article: 1 Blizzard Way, Irvine
- Take-Two annual report: 1133 Avenue of the Americas, New York
- Ubisoft restructuring: Saint-Mandé headquarters city at minimum, not Paris representative point
- KRAFTON Subnautica bonus: Seoul / Gangnam at minimum, not Korea country point

## Previously added important correction files

Recent override files and their purpose:

- `data/unresolved_known_places_33.json`: preserve country prefixes for visible game list labels
- `data/unresolved_known_places_34.json`: preserve more country prefixes for visible game list labels
- `data/unresolved_known_places_35.json`: fix Netherlands label for Valve / Steam claim
- `data/unresolved_known_places_36.json`: first broad batch of remaining unresolved corporate / market items
- `data/unresolved_known_places_37.json`: corporate and policy topic batch
- `data/unresolved_known_places_38.json`: additional company and country topic batch
- `data/unresolved_known_places_39.json`: refine Sega Sammy / Rovio acquisition to Osaki Garden Tower
- `data/unresolved_known_places_40.json`: refine named company topics with known headquarters or more precise sites

Later files override earlier entries by identical `id`, because the workflow merges `data/unresolved_known_places_15.json` plus supplemental `16+` dictionaries in numeric order.

## Current known follow-up targets

Review these before adding new unresolved items:

### Need further precision check

These were intentionally left less precise, but should be checked before continuing unresolved-count work:

- `observed_newzoo_ceo_transition_amsterdam_202606`
  - current: Amsterdam company area
  - check: whether a stable official office address can be used

- `observed_appsflyer_investment_san_francisco_202606`
  - current: San Francisco company area
  - check: whether official current headquarters address is stable enough

- `observed_hooded_horse_bar_publishing_dallas_202606`
  - current: Dallas publisher area
  - check: whether public company site/address exists; otherwise keep Dallas area

- `observed_pokemon_champions_mobile_tokyo_202606`
  - current: Tokyo company area for The Pokémon Company
  - check: whether this should use The Pokémon Company office address or remain as product revenue topic

- `observed_star_citizen_crowdfunding_company_topic_202605`
  - current: US country topic
  - check: whether it should be Cloud Imperium Games / CIG site; do not guess without confirming subject

- `observed_ea_ai_and_advertising_platform_202606`
  - current after file 40: Redwood City headquarters city
  - check: if exact EA headquarters street address should be used

- `observed_ubisoft_restructuring_studio_closures_paris_202606`
  - current after file 40: Saint-Mandé headquarters city
  - check: if exact Ubisoft HQ address should be used

- `observed_krafton_subnautica_bonus_south_korea_202605`
  - current after file 40: Seoul / Gangnam district
  - check: if exact KRAFTON HQ building/address should be used

- `observed_hasbro_live_service_strategy_us_202605`
  - current after file 40: Renton game/digital division city
  - check carefully because Hasbro headquarters and games/digital operations may differ

### Topic-level items that probably should stay broad

These should not be forced into a company office unless the article clearly has a site actor:

- TIGA board appointment: UK industry body topic may be better than office address
- UKIE social-media/game policy: UK policy topic may be better than office address
- BAFTA Student Awards: UK awards topic may be better than office address
- Afro Game Showcase: Africa showcase topic unless organizer/site is clearly relevant
- Nintendo Switch 2 Japan sales restrictions: Japan market policy, not Nintendo HQ by default
- Philippines GoreBox temporary ban: Philippines regulatory policy, not necessarily CICC office
- Chinese developers global gaming: China industry topic, not one company
- Serpent's Gaze Swedish indie article: country game-origin topic until developer/studio is identified

## How to inspect before each batch

Use these generated files after running workflow:

- `docs/topic-maps/game-all-unresolved.json`
- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`

Read the unresolved file in chunks and pick only entries whose geographic subject can be justified from title/summary or from confirmed external source.

For cluster quality, inspect:

- labels that start with company names instead of country/region names
- clusters where a generic keyword such as `gamescom`, `Kuala Lumpur`, `Turin`, `miHoYo`, `CD Projekt`, or company name alone pulls unrelated articles
- site clusters with unexpectedly high counts
- country labels that absorb many unrelated articles

## Workflow procedure

When asking the user to run the workflow:

- GitHub Actions → `Build RSS topic maps`
- `feed_id`: `game-all`
- `limit`: blank
- `suggest_candidates`: `false`

After the workflow run, inspect `game-all-clusters.json` and `game-all.geojson` before adding more dictionaries.

## File naming convention

Add new correction batches as:

`data/unresolved_known_places_<next number>.json`

Use the same `id` as an earlier entry to override it. Use a new `id` only for genuinely new observed patterns.

## Entry quality checklist

Before committing any entry, check:

1. Does the `place_label` start with a country or region prefix?
2. Is `sort_place_label` identical or sortable in the same country-prefixed form?
3. Are `names` and `keywords` specific enough to avoid overmatching unrelated articles?
4. Is `place_type` consistent with the article subject?
5. Is `location_precision` honest?
6. If a specific named company is present, did you check whether a stable HQ/site should be used?
7. If the article is policy/market/award/showcase/regulation, did you avoid forcing it to an office address unnecessarily?
8. Does the reason explain why the chosen location is the subject location, not merely a related company address?

## Why the work shifted

The earlier batches reduced unresolved count but created a precision inconsistency: some named companies were mapped only to country/city-level topics even when a stable headquarters or site was available.

From now on, unresolved-count reduction is secondary. First correct coarse named-entity mappings, then continue resolving unresolved articles.

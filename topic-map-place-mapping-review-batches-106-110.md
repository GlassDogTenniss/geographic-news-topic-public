# Topic map place mapping review - batches 106-110

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 106-110 handle final old unresolved material and low-priority supplements for old regional, launch, culture, and market articles. These rules are intentionally broad and low-priority so that specific company, site, city, country, and event rules remain dominant.

## Batch 106

Old regional development topics:

- Old regional game-development article: `region`
- Old regional game-development fallback: `multi_region`

Expected: old regional development articles should not map to media locations.

## Batch 107

Old Japan launch supplements:

- Old Japan mobile launch supplement A: `country`
- Old Japan mobile launch supplement B: `country`

Expected: old Japan mobile launch articles should remain low-priority Japan launch-market items.

## Batch 108

Old regional culture supplements:

- Africa game-culture supplement: `continent_region`
- Southeast Asia game-culture supplement: `region`
- Philippines game-culture supplement: `country`

Expected: regional culture items should resolve conservatively by region or country.

## Batch 109

Old market article supplements:

- Old India games market supplement: `country`
- Old Philippines games market supplement: `country`
- Old multi-region games market supplement: `multi_region`

Expected: old market items should resolve as country or multi-region market topics without requiring exact addresses.

## Batch 110

Final low-priority mapping notes:

- Final low-priority regional industry note: `multi_region`
- Final low-priority regional culture note: `multi_region`

Expected: these entries should stay below specific company, site, city, country, and event rules.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 106-110 should cover remaining old regional development, Japan mobile launch, regional culture, and old market items.
- Very broad fallback entries should not override specific company/site/event rules.
- No guessed street-address pins should be introduced.

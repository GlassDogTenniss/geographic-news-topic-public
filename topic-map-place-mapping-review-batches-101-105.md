# Topic map place mapping review - batches 101-105

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 101-105 handle the terminal part of the current unresolved snapshot: Philippines policy and market stories, 2014 Japan mobile/indie-studio items, India/Philippines legacy game-business items, broad hardware/platform fallbacks, and terminal low-priority fallbacks for old RSS articles.

## Batch 101

Philippines policy, market, and player-eligibility topics:

- Bam Aquino gaming policy interview: `country`
- Esports player-eligibility article: `multi_region`
- Foreign gaming firms eyeing the Philippines: `country`
- Philippines policy/market legacy fallback: `country`

Expected: policy and market stories should resolve at country or broad policy scope, not media office locations.

## Batch 102

2014 Japan mobile and indie-studio topics:

- Sword Art Online mobile preregistration: `country`
- Gone Home programmer new-studio item: `multi_region`
- Japan 2014 mobile preregistration fallback: `country`
- Legacy indie new-studio fallback: `multi_region`

Expected: launch and indie-studio items should not require guessed office addresses.

## Batch 103

India acquisition and Philippines advergaming topics:

- Games2win / Backyard Game FactorRy acquisition: `country`
- Philippines advergaming market article: `country`
- Philippines gaming-firm leisure venture: `country`
- India/Philippines legacy game-business fallback: `multi_region`

Expected: acquisition and business items should remain country or broad market/operations topics unless a precise site is confirmed.

## Batch 104

Legacy hardware and business fallbacks:

- Hardware platform legacy article fallback: `multi_region`
- Games business legacy article fallback: `multi_region`
- Games market legacy article fallback: `multi_region`
- Miscellaneous games industry fallback: `multi_region`

Expected: these low-priority rules should only catch otherwise-unresolved legacy business, market, or platform articles.

## Batch 105

Terminal legacy fallback topics:

- Terminal Japan mobile launch fallback: `country`
- Terminal regional game-culture fallback: `multi_region`
- Terminal regional studio article fallback: `multi_region`
- Terminal unresolved legacy fallback: `multi_region`

Expected: these terminal fallbacks should stay below specific company, site, city, country, and event rules.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 101-105 should reduce the terminal unresolved legacy items in the current snapshot.
- Very broad fallbacks should not override specific company/site/event rules.
- No guessed street-address pins should be introduced.

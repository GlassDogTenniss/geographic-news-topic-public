# Topic map place mapping review - batches 91-95

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 91-95 handle legacy unresolved items from 2017-2019, including African mobile/developer industry stories, Southeast Asia market stories, Epic/Capcom operations, Cameroon/Philippines/Singapore workforce/platform stories, Japanese mobile preregistration articles, and Osaka studio-base articles.

## Batch 91

Africa and Southeast Asia legacy industry topics:

- South Africa developers taking a game from dorm room to world: `country`
- Africa mobile gaming boom: `continent_region`
- Level Up KL 2018 / Southeast Asia games market: `country`
- Africa mobile/developer legacy fallback: `continent_region`

Expected: Africa and Southeast Asia legacy market/developer items should resolve by region or country, not by media office location.

## Batch 92

Epic, Capcom, and Japanese studio legacy topics:

- Epic Games $1.25B investment: `country`
- Capcom Vancouver studio closure: `city`
- RockShot Japan access-restricted launch: `multi_region`
- Legacy company investment/closure fallback: `multi_region`

Expected: investment, closure, and access-restricted launch items should not be promoted to guessed street addresses.

## Batch 93

Cameroon, Philippines, and Singapore legacy topics:

- Cameroon gaming entrepreneurship: `country`
- Filipinos behind a major video-game company: `country`
- Singapore Sea games/financial services expansion: `country`
- Legacy workforce/platform fallback: `multi_region`

Expected: workforce and platform-company stories should resolve by country/region without invented offices.

## Batch 94

Japanese mobile launch and South Africa industry topics:

- Derby Stallion Masters PC preregistration: `country`
- Knives Out Japan release/preregistration topic: `country`
- South Africa gaming industry overview: `country`
- Southeast Asia gaming growth: `region`

Expected: preregistration and regional industry stories should map to market scope rather than company offices.

## Batch 95

Character mobile and Osaka studio topics:

- SAO Memory Defrag preregistration: `country`
- Haikyu Donpisha Match preregistration: `country`
- Puchiguru Love Live preregistration: `country`
- LEVEL5 comcept Osaka development base: `city`

Expected: mobile preregistration articles should remain Japan launch-market items; the Osaka studio-base article should resolve to city level, not a guessed address.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 91-95 should reduce legacy launch, workforce, market, platform, and studio-base unresolved items.
- Fallback entries should not override more specific company/site/event rules.
- No guessed street-address pins should be introduced.

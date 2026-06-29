# Topic map place mapping review - batches 86-90

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 86-90 handle older unresolved Japanese launch/studio-collaboration articles, Asia regulation and culture stories, Indonesia studio-funding items, Southeast Asia platform-market stories, Eastern Europe investment items, and low-priority legacy fallback patterns.

## Batch 86

Japan game launch and studio-participation topics:

- Dragon Quest 12 / Orca co-development: `country`
- SIE / Shuhei Yoshida indie-games discourse: `country`
- Shin Hokuto Musou mobile preregistration: `country`
- Japanese major-game co-development fallback: `country`

Expected: Japanese co-development and mobile preregistration items should resolve at country level unless a precise operational site is necessary.

## Batch 87

Asia regulation and game-industry history topics:

- China/Singapore/South Korea gaming regulation discourse: `multi_region`
- India gaming and esports history: `country`
- Asian American game-developer representation: `country`
- Asia / Asian diaspora gaming policy-culture fallback: `multi_region`

Expected: cross-border policy and culture stories should not map to media or company office addresses.

## Batch 88

Indonesia studio-fund and Southeast Asia platform-market topics:

- Agate Skylab Fund / Indonesian game studios: `country`
- Southeast Asia super-app gaming business: `region`
- Indonesia game-studio support fallback: `country`
- Southeast Asia platform games market fallback: `region`

Expected: studio support and platform-market articles should resolve at country or regional scope.

## Batch 89

Board-games and Eastern Europe investment topics:

- Global board-games market report: `multi_region`
- Scopely / The Games Fund / Eastern Europe investment: `region`
- Global games-adjacent market report fallback: `multi_region`
- Eastern Europe games investment fallback: `region`

Expected: market-report and investment stories should not map to source, publisher, or investor headquarters.

## Batch 90

Broad Japan, Asia, and platform-market fallbacks:

- Japan mobile preregistration legacy fallback: `country`
- India gaming/esports history fallback: `country`
- Asian developer representation fallback: `multi_region`
- Regional games platform-market legacy fallback: `multi_region`

Expected: broad fallbacks should only catch otherwise-unresolved legacy items and stay below specific company/site/event rules.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 86-90 should reduce older Japanese launch, Asia policy/culture, Indonesia support, Southeast Asia platform-market, and Eastern Europe investment unresolved items.
- Fallback entries should not override more specific company/site/event rules.
- No guessed street-address pins should be introduced.

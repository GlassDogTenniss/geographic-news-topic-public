# Topic map place mapping review - batches 81-85

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 81-85 handle older unresolved Europe policy/industry articles, Australia-Southeast Asia engagement, Eastern Europe studio funding, India market articles, Philippines startup and indie-game stories, Indonesia localization, and broad regional policy/culture fallback patterns.

## Batch 81

Europe and Australia/Southeast Asia policy topics:

- Europe games industry current situation/issues/prospects: `region`
- Australia-Southeast Asia games-sector engagement: `multi_region`
- Zakazane / Eastern Europe studio funding: `region`
- Hungary portrayal in video games: `country`

Expected: policy and cultural representation items should not map to media or institution office addresses.

## Batch 82

India market and Capcom topics:

- Capcom India game-sales forecast: `country`
- Indian gaming industry / next-generation entertainment: `country`
- India games market sales fallback: `country`
- India international publisher market-interest fallback: `country`

Expected: India market stories should map to India as a market, not to publisher headquarters.

## Batch 83

Philippines startup and indie-games topics:

- Gamer Points ad-based earning startup: `country`
- Upcoming Filipino games / local devs: `country`
- Pinoy indie games / education: `country`
- Philippines startup and indie-games fallback: `country`

Expected: Philippines startup, indie, and local-dev articles should resolve at country level unless a precise studio site is confirmed.

## Batch 84

Indonesia and Southeast Asia localization topics:

- Game companies localizing into Indonesian: `country`
- Southeast Asia / Australia games engagement: `region`
- Indonesia localization fallback: `country`
- Southeast Asia policy engagement fallback: `region`

Expected: localization and regional engagement items should resolve as market/policy topics rather than company-office pins.

## Batch 85

Regional industry and culture fallbacks:

- Europe games industry policy fallback: `region`
- Eastern Europe studio funding fallback: `region`
- Country portrayal in games fallback: `multi_region`
- Regional games policy and market fallback: `multi_region`

Expected: these fallback entries should remain lower priority than specific company, country, city, or event rules.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 81-85 should reduce older regional policy, market, localization, startup, and culture unresolved items.
- Fallback entries should not override more specific company/site/event rules.
- No guessed street-address pins should be introduced.

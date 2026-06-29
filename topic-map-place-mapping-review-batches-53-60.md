# Topic map place mapping review - batches 53-60

Continuation of `docs/topic-map-place-mapping-review-2026-06-29.md`.

## Scope

Batches 53-60 process unresolved `game-all` articles that can be placed safely as broad market, platform, event, game-origin, company-strategy, or city-level topics. These batches intentionally avoid guessing street addresses.

## Batch 53

Roundup and platform-market topics:

- Week in Mobile Games Podcast: `multi_region`
- Philippines video-game public-discourse item: `country`
- Valve hardware-pricing opinion: `city`
- Global video game market report: `multi_region`

Expected: podcast and market-report items should not remain unresolved only because they do not have a single company address.

## Batch 54

Event and regional-ecosystem topics:

- EVO 2026 results / fighting game news: `multi_region`
- GamesConnect AFRICA / gamescom dev scholarships: `continent_region`
- Chinese market strategy for Western games companies: `country`
- SGF launch-strategy opinion: `multi_region`

Expected: event/market-strategy articles should not be forced onto guessed venues or author/company offices.

## Batch 55

Platform and company-strategy topics:

- Skybound video game strategy: `country`
- Epic / Valve Steam label policy item: `country`
- PlayStation PC strategy: `country`
- Roblox brand integrations: `country`

Expected: multi-company or platform-policy items should remain country/platform-strategy topics rather than office-address points.

## Batch 56

Game success, review, and preview-origin topics:

- RV There Yet? sales-success story: `multi_region`
- No. 10: Full Confidence UK/US chart reaction: `multi_region`
- Moto Rush Reborn South Africa review context: `country`
- Granblue Fantasy Relink SGF preview: `multi_region`

Expected: game performance/review/preview articles should not be assigned to developer addresses without stronger evidence.

## Batch 57

Mobile and web-game market topics:

- Fortnite iOS global comeback: `multi_region`
- Mobile-to-browser games report: `multi_region`
- Monopoly Go Chat engagement: `multi_region`
- MobyGames careers platform: `multi_region`

Expected: global product-metric and labor-platform stories should be market/platform topics, not company-office locations.

## Batch 58

Finance, investment, grant, and hardware-market topics:

- Chess.com growth investment: `multi_region`
- Reactional Music / European Innovation Council grant: `region`
- Mobile games DTC / Google fee topic: `multi_region`
- Apple hardware-pricing / memory-cost topic: `country`

Expected: funding and platform-fee articles should be placed at investment/market scope, not guessed office addresses.

## Batch 59

Studio-operations and developer-policy topics:

- Queen Digital Entertainment business-status item: `country`
- Godot contribution-policy item: `multi_region`
- Pocketpair generative-technology stance: `city`
- Vampire Survivors / Fortnite collaboration review: `multi_region`

Expected: policy and studio-operations stories should not be promoted to exact-site without address confirmation.

## Batch 60

Franchise-remake and app-ecosystem topics:

- Persona 4 Revival / Atlus: `city`
- Crystal Dynamics / Tomb Raider remake: `country`
- Brawl Stars / Adidas collaboration: `multi_region`
- Meccha Chameleon sales topic: `multi_region`

Expected: franchise and brand-collaboration articles should be stable as company/country or multi-region topics unless a specific studio address is confirmed.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 53-60 should reduce unresolved items for broad market/platform/event/game-origin articles.
- Newly resolved items should use score-table precision values such as `country`, `city`, `region`, `multi_region`, or `continent_region`.
- None of these batches should create guessed street-address pins.

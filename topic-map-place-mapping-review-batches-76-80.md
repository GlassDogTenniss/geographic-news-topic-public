# Topic map place mapping review - batches 76-80

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 76-80 handle older unresolved market reports, African games-industry and culture stories, India studio/industry items, Eastern Europe/Russia media topics, South Africa/Malaysia/Philippines regional items, and low-priority regional fallback patterns.

## Batch 76

Global and African games-industry topics:

- Global game industry growth to $250B: `multi_region`
- Bain Gaming Report 2025: `multi_region`
- Africa game history and storytelling: `continent_region`
- Africa games industry / major tech firms: `continent_region`

Expected: market and continental industry stories should not map to media or consultancy office locations.

## Batch 77

India studio and industry topics:

- Indian support studio for AAA games: `country`
- India homegrown AAA challenge: `country`
- India Pavilion at Gamescom 2024: `country`
- India games industry fallback: `country`

Expected: India industry and showcase stories should resolve at country level unless a precise studio site is confirmed.

## Batch 78

Europe and Eastern Europe media topics:

- Kremlin/computer-games disinformation topic: `country`
- Tarsier Studios / REANIMAL gamescom interview: `country`
- Eastern Europe/global games market report fallback: `region`
- European gamescom studio interview fallback: `region`

Expected: media, interview, and disinformation topics should not require guessed street addresses.

## Batch 79

South Africa, Malaysia, and Philippines topics:

- South Africa games workforce: `country`
- Malaysia role in Southeast Asia games growth: `country`
- Until Then / Philippines setting and story: `country`
- South Africa games industry fallback: `country`

Expected: regional workforce, industry, and setting articles should resolve at country level.

## Batch 80

Broad fallback topics:

- Global games market reports: `multi_region`
- Africa games industry/culture: `continent_region`
- Southeast Asia games industry: `region`
- Regional game-origin/local-story items: `multi_region`

Expected: broad fallbacks should only catch otherwise-unresolved items and should remain lower priority than exact company, city, or event rules.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 76-80 should reduce older market-report, regional-industry, and game-origin unresolved items.
- Fallback entries should not override more specific company/site/event rules.
- No guessed street-address pins should be introduced.

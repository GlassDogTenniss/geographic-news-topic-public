# Topic map place mapping review - batches 71-75

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 71-75 handle older unresolved articles around Ukraine/Eastern Europe, India new-studio items, Southeast Asia and Philippines game-origin stories, Japanese mobile releases, European studio/review items, and low-priority regional fallback patterns.

## Batch 71

Ukraine, India, Southeast Asia, and Philippines origin topics:

- Ukraine gaming legacy: `country`
- Tara Gaming / India new studio: `country`
- Agni / Kriegsfront Southeast Asian style: `region`
- Polychroma Games Philippines interview: `country`

Expected: origin and interview stories should resolve at country/region level without guessed studio addresses.

## Batch 72

Japanese mobile-title and overseas launch topics:

- Stella Idol Project / DMM preregistration: `country`
- Persona 5: The Phantom X release broadcast: `country`
- Blue Protocol: Star Resonance overseas launch: `multi_region`
- Japanese mobile-title launch fallback: `country`

Expected: preregistration and release-date articles should map as launch-market topics, not company offices.

## Batch 73

European studio and review topics:

- Larian / Baldur's Gate 3 next-game statement: `country`
- Mandragora review: `region`
- Eastern Europe game-studio fallback: `region`
- European game-review fallback: `region`

Expected: review and commentary articles should not require exact studio sites.

## Batch 74

Asia mobile and studio-origin fallbacks:

- India new game-studio fallback: `country`
- Philippines studio interview fallback: `country`
- Southeast Asia game-culture fallback: `region`
- Japan-origin overseas launch fallback: `multi_region`

Expected: broad regional fallbacks should remain low-priority and not override specific entries.

## Batch 75

Broad Eastern Europe and Asia game-origin topics:

- Eastern Europe / Ukraine games legacy fallback: `region`
- Japan character mobile RPG fallback: `country`
- Asia game-origin culture fallback: `region`
- Global mobile launch fallback: `multi_region`

Expected: broad fallback entries should only catch otherwise-unresolved items and should not create guessed street-address pins.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 71-75 should reduce unresolved older regional origin, launch, review, and interview items.
- Broad fallback rules should remain lower priority than precise studio/company/event rules.
- No guessed street-address pins should be introduced.

# Topic map place mapping review - batches 66-70

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 66-70 focus on older unresolved items around Japanese mobile launches, Japanese/overseas studio transitions, Southeast Asia and Philippines game-origin topics, and broad fallback topics for Japanese launch/restructuring articles.

## Batch 66

Japan mobile and RPG launch topics:

- Gintama mobile / NextNinja preregistration: `country`
- Gagharv Trilogy mobile domestic service: `country`
- Kimino Tonari ni Suwaru Hoshi app launch: `country`
- Knights of Fiona / Japanese VR RPG studio topic: `country`

Expected: app launch and preregistration articles should resolve as Japan launch-market items unless a precise studio site is confirmed.

## Batch 67

Studio-transition and development-discourse topics:

- Expedition 33 indie/AA discourse: `country`
- Cities: Skylines II Finnish studio transition: `country`
- Square Enix restructuring / QA automation: `country`
- South Africa local game stories profile: `country`

Expected: discourse and restructuring articles should not become guessed street-address pins.

## Batch 68

Southeast Asia and Philippines game-origin topics:

- Filipino animal-shelter game: `country`
- Southeast Asia games industry growth: `region`
- Indonesia green game business: `country`
- Philippines indie games topic: `country`

Expected: regional game-origin and industry-growth stories should resolve at country or regional scope.

## Batch 69

Franchise/studio classification and transition topics:

- Expedition 33 indie/AA classification: `multi_region`
- Square Enix overseas closure / QA reform: `multi_region`
- Cities: Skylines II partnership transition: `multi_region`
- Japanese VR RPG studio origin: `country`

Expected: broad classification or multi-location transition stories should stay broad unless a specific operational site is required.

## Batch 70

Fallback topics for repeated Japanese RSS patterns:

- Japan smartphone game preregistration / launch roundup: `country`
- South Africa local game culture profiles: `country`
- Japan indie game announcement fallback: `country`
- Japan game company restructuring fallback: `country`

Expected: these low-priority fallback rules should catch otherwise-unresolved repeated article patterns without outranking more specific rules.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 66-70 should reduce older Japanese mobile-launch, studio-transition, and regional culture unresolved items.
- Fallback rules in Batch 70 should not override specific company/site rules.
- No guessed street-address pins should be introduced.

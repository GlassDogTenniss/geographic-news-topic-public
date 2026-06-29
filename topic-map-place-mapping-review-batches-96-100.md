# Topic map place mapping review - batches 96-100

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 96-100 handle the oldest unresolved items in the current snapshot, including Japanese mobile preregistration articles, overseas indie-studio commentary, ASEAN/Africa/Philippines/Malaysia/Singapore culture and industry items, 2016-2015 launch articles, and legacy studio-incident items.

## Batch 96

2017 Japan launch and indie-studio topics:

- Danmachi mobile preregistration: `country`
- Invader Studios fan-game-to-studio transition: `region`
- Game on in ASEAN: `region`
- Overseas indie studios / Nintendo Switch opinion: `multi_region`

Expected: launch, platform-opinion, and developer-transition stories should not require guessed office addresses.

## Batch 97

Africa, Philippines, Malaysia, and Singapore culture topics:

- African video games taking on the world: `continent_region`
- Pinoy VR game / Filipino mythology: `country`
- Malaysia as Southeast Asia gaming hub: `country`
- Singapore gaming scene / GameStart Asia: `country`

Expected: culture and ecosystem stories should resolve at country or regional scope.

## Batch 98

2016 Japan mobile and TGS Philippines topics:

- Ensemble Girls mobile launch: `country`
- Filipino developers at Tokyo Game Show 2016: `country`
- Eastern European game-culture discourse: `region`
- South African accents in games: `country`

Expected: showcase and cultural-representation stories should not map to media or guessed studio locations.

## Batch 99

2016 studio and launch legacy topics:

- Kansen Shoujo mobile preregistration: `country`
- Raiders of the Broken Planet release-rumor topic: `multi_region`
- Ubisoft Philippines opening: `country`
- Invader Studios new-horror development: `region`

Expected: these should resolve as launch, studio-opening, or regional studio topics without inventing street addresses.

## Batch 100

2015 mobile and studio-incident legacy topics:

- HunieCam Studio overseas indie release: `multi_region`
- Metal Max Fireworks preregistration: `country`
- Digital Extremes / Warframe leak incident: `country`
- Legacy mobile and indie release fallback: `multi_region`

Expected: very old launch and studio-incident items should resolve conservatively and remain lower priority than exact site rules.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 96-100 should reduce the oldest mobile-launch, indie-studio, regional-culture, and studio-incident unresolved items.
- Fallback entries should not override more specific company/site/event rules.
- No guessed street-address pins should be introduced.

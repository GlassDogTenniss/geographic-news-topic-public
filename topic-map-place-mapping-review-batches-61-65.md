# Topic map place mapping review - batches 61-65

Continuation of the `game-all` place-mapping cleanup.

## Scope

Batches 61-65 continue processing unresolved articles as platform policy, distribution, Japanese studio/mobile launch, investment, regulation, regional market, and showcase topics. These batches avoid exact-site claims unless the generated title itself gives enough location specificity.

## Batch 61

Already present before this pass:

- Fortnite App Store return with Australia exception: `multi_region`
- California online-game shutdown bill: `state`
- Google Play commission reduction: `country`
- Unity Asset Store / Chinese developers removal topic: `country`

Expected: platform distribution and policy stories should resolve as platform/regulatory regions rather than company-office pins.

## Batch 62

Japanese studio and mobile-launch topics:

- DRECOM CREATORS STUDIO: `city`
- hololive Dreams global preregistration: `multi_region`
- Majo to Hyakkihei mobile preregistration: `country`
- HYPERFIGHT 2 / studio joh: `country`

Expected: mobile launch and indie studio items should not require guessed street addresses.

## Batch 63

Investment, legal/business commentary, and engine-platform topics:

- Origin Lab AI training data funding: `country`
- Hasbro video-game investment strategy: `country`
- Take-Two / Borderlands production-cost commentary: `country`
- Unreal Engine 5.8 preview: `country`

Expected: finance and platform-tech stories should map at company-country or market scope unless a specific operational site is required.

## Batch 64

Regulation and regional market topics:

- PEGI rating update: `region`
- Southeast Asia games market growth: `region`
- Female gamers market-gap article: `multi_region`
- Xsolla / Digital Dragons regional item: `country`

Expected: regulatory and regional market articles should not be assigned to individual company offices.

## Batch 65

Studio funding, event-talk, showcase, and investment topics:

- Nagoshi Studio funding reports: `country`
- GDC 2026 new-studio talk: `multi_region`
- Women-led studio / Latin America game showcase: `multi_region`
- Saudi Arabia / Capcom share purchase: `country`

Expected: funding and showcase items should remain country or multi-region topics unless an exact studio or venue is explicitly confirmed.

## Next verification

After the next `game-all` workflow run, inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Batches 61-65 should reduce unresolved policy, market, mobile-launch, and studio-funding items.
- Newly resolved items should use known precision values: `state`, `country`, `city`, `region`, or `multi_region`.
- No guessed street-address pins should be introduced.

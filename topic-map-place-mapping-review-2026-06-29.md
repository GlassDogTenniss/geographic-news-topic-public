# Topic map place mapping review - 2026-06-29

Follow-up note for `docs/topic-map-place-mapping-maintenance.md`.

## Reviewed targets after file 41

### Newzoo

Keep current mapping for now:

- `observed_newzoo_ceo_transition_amsterdam_202606`
- `オランダ-アムステルダム-Newzoo`
- precision: `company_area`

Newzoo is Amsterdam-based, but a stable street address was not confirmed in this pass.

### Hooded Horse

Keep current mapping for now:

- `observed_hooded_horse_bar_publishing_dallas_202606`
- `米国-テキサス州-ダラス-Hooded Horse`
- precision: `publisher_area`

Hooded Horse is Dallas-based, but a stable public street address was not confirmed in this pass.

### KRAFTON

Keep current mapping for now:

- `observed_krafton_subnautica_bonus_south_korea_202605`
- `韓国-ソウル特別市-江南区-KRAFTON`
- precision: `district`

KRAFTON is confirmed as Gangnam District, Seoul. Exact building-level address was not confirmed strongly enough in this pass.

### Hasbro / Wizards & Digital

Keep current mapping for now:

- `observed_hasbro_live_service_strategy_us_202605`
- `米国-ワシントン州-レントン-Hasbroゲーム/デジタル部門`
- precision: `division_city`

Hasbro corporate HQ and games/digital operations differ. Renton remains the better game-division precision level for now.

## Already refined in file 41

- The Pokémon Company: Roppongi Hills Mori Tower 8F
- Electronic Arts: Redwood Shores district
- Ubisoft: 2 Avenue Pasteur, Saint-Mandé
- AppsFlyer: 100 First Street as `street_address_candidate`
- Star Citizen / Cloud Imperium Games: Los Angeles company-city topic

## Batched overmatch fixes pending verification

These were fixed from the same generated output snapshot and should be verified together after the next workflow run:

- `observed_playstack_imc_sale_london_202606`
  - removed `Playstack` company-name-only match
  - expected: Triple-i Initiative roundup/event article should no longer map to Playstack's London address

- `observed_virtuos_kuala_lumpur_studio_202606`
  - removed `Virtuos` company-name-only match
  - expected: broad Virtuos/Southeast Asia company articles should not be forced onto the Kuala Lumpur studio rule

- `observed_avalanche_studios_just_cause_stockholm_202604`
  - removed `Avalanche Studios` company-name-only match
  - expected: articles about a co-founder's separate new studio should not map to Avalanche Studios Stockholm

- `observed_dont_nod_french_developer_202606`
  - removed `Don't Nod` / `Dontnod` company-name-only match
  - expected: multi-topic Patch Notes roundups should not map to Don't Nod's Paris 19e location only because the summary mentions the company

## Batch 44 pending verification

- `observed_ninja_theory_hellblade_closure_cambridge_202606`
  - narrowed Ninja Theory mapping to Ninja Theory-led articles
  - expected: Xbox multi-studio closure watch should not remain only on Ninja Theory Cambridge

- `observed_xbox_multi_studio_closure_watch_202606`
  - new multi-studio Xbox restructuring topic
  - expected: Compulsion / Double Fine / Ninja Theory shared risk article should map to Microsoft Gaming/Xbox restructuring topic

- `observed_nodding_heads_games_pune_202606`
  - narrowed Nodding Heads to Raji / studio-led articles
  - expected: India Games Showcase partnership articles should not map to Pune studio only

- `observed_india_games_showcase_partnership_202606`
  - new India Games Showcase topic
  - expected: NODWIN + Nodding Heads + Summer Game Fest partnership articles should map to India showcase topic

- `observed_newzoo_ceo_transition_amsterdam_202606` and `observed_newzoo_market_analysis_202606`
  - split Newzoo CEO transition from Newzoo market analysis
  - expected: CEO transition, global market report, and PC/console revenue forecast should not all collapse into the same company-personnel cluster

- `observed_pgc_nordics_helsinki_202606` and `observed_nordic_games_industry_state_of_play_202606`
  - split PGC Nordics event notices from Nordic games industry analysis
  - expected: Nordic industry article should not map to the Helsinki event area

## Batch 45 pending verification

- `observed_rocksteady_dc_multiplayer_london_202606`
  - narrowed to Batman Arkham / DC multiplayer context

- `observed_thatgamecompany_van_gogh_santa_monica_202606`
  - narrowed to 20-year journey / Jenova Chen context

- `observed_treyarch_studio_head_los_angeles_202606`
  - narrowed to studio-head transition context

- `observed_playerunknown_productions_restructure_amsterdam_202606`
  - clarified as Brendan Greene / PlayerUnknown Productions restructuring context

- `observed_hipster_whale_atari_acquisition_melbourne_202606`
  - narrowed to Atari acquisition / Crossy Road creator context

- `observed_nyamakop_relooted_south_africa_202606`
  - explicitly kept as South Africa studio-area-country mapping; do not invent a city or address without confirmation

## Batch 46 pending verification

- `observed_dont_nod_cash_warning_paris_202606`
  - removed `Don't Nod` company-name-only match from the cash-warning rule
  - expected: Patch Notes #57 should no longer map to Don't Nod Paris 19e

- `observed_patch_notes_57_multi_topic_202606`
  - new multi-region roundup topic
  - expected: Patch Notes #57 should map to multi-region roundup instead of any one mentioned company office

## Batch 47 pending verification

Precision normalization batch. This exists because `scripts/build_rss_topic_maps.py` scores only a limited set of `location_precision` values, so entries such as `street_address`, `campus_address`, `company_area`, `country_showcase_topic`, `region_industry_topic`, and `multi_region_topic` otherwise fall back to the default score.

- High-precision company/site entries normalized to `exact_site` or `building`:
  - Playstack / 56A Poland St
  - Valve / 10400 NE 4th St
  - Microsoft Gaming/Xbox / One Microsoft Way
  - Xbox multi-studio closure watch / One Microsoft Way
  - Blizzard / 1 Blizzard Way
  - Take-Two / 1133 Avenue of the Americas
  - Ubisoft / 2 Avenue Pasteur
  - The Pokémon Company / Roppongi Hills Mori Tower

- Broad or analytical topics normalized to score-table values:
  - India Games Showcase: `country`
  - Nordic games industry: `region`
  - Patch Notes #57: `multi_region`

Expected: precise site entries should no longer lose ranking priority merely because their previous precision label was not in `PRECISION_SCORES`; broad topic entries should remain broad and should not beat specific company/site entries accidentally.

## Batch 48 pending verification

Second precision normalization batch for remaining undefined labels in the latest generated `game-all` output.

- Studio / publisher / company area labels normalized mostly to `city`:
  - IO Interactive / Copenhagen
  - Rocksteady / London
  - Quantic Dream / Paris
  - MY.GAMES / Amsterdam
  - Tamatem Games / Amman
  - 34BigThings / Turin
  - Wizards of the Coast / Renton
  - Avalanche Studios / Stockholm
  - Ninja Theory / Cambridge
  - Newzoo CEO transition / Amsterdam
  - Newzoo market analysis / Amsterdam

- Event area labels normalized to `event_site`:
  - PGC Summit Bangkok
  - WN Istanbul
  - WN Growth Summit
  - PGC Nordics Helsinki

- Broad country / region topic labels normalized to score-table values:
  - Chinese developers global gaming: `country`
  - Filipino Horror Game Jam: `country`
  - Chinese cultural storytelling: `country`
  - US monthly game charts: `country`
  - GoreBox Philippines policy topic: `country`
  - Nyamakop / Relooted South Africa: `country`
  - Africa games market: `continent_region`

Expected: latest `game-all.geojson` should no longer contain these entries with undefined precision strings such as `studio_area`, `publisher_area`, `headquarters_area`, `event_area`, `country_*_topic`, or `continent_market_topic`.

## Batch 49 pending verification

Verified-location batch. This returns the maintenance process to source-backed place research rather than only precision normalization.

- Raised to exact-site because official address was found:
  - IO Interactive / Gammel Mønt 4, DK-1117 Copenhagen
  - 34BigThings / Via Gian Domenico Cassini 39, 10129 Torino

- Kept at city level because only city or non-address location was confirmed during this pass:
  - Rocksteady / London
  - Quantic Dream / Paris
  - Tamatem Games / Amman
  - Wizards of the Coast / Renton

Expected: exact-address entries should appear with `location_precision=exact_site`; city-retained entries should remain stable and should not be promoted to building/street precision without stronger official address evidence.

## Batch 50 pending verification

Market, awards, showcase, and stable-city batch. This avoids forcing articles onto company offices when the article is actually about an award, launch market, policy/topic region, or digital showcase.

- Kept as broad topic / market target:
  - BAFTA Student Awards: `country`
  - Hill Climb Racing 3 Germany soft launch: `country`
  - The Traitors: Anywhere UK/Ireland launch: `multi_region`
  - TIGA board appointment: `country`
  - Afro Game Showcase: `continent_region`

- Kept as studio-related but not exact-site:
  - Santa Ragione / Milan: `city`
  - Toys for Bob / Novato: `city`
  - HoYoverse / miHoYo / Xuhui Shanghai: `district`

Expected: these articles should remain tied to their target market / award / showcase / stable city or district, and should not be promoted to a guessed address or an unrelated company office.

## Batch 51 pending verification

Late-output market and company-topic stabilization batch.

- Kept as broad market / cultural / labor / startup topics:
  - India game developer salary market: `country`
  - India gaming startup market: `country`
  - Indian mythology / game storytelling topic: `country`

- Kept as company or legal topics without guessing street address:
  - Valve / Steam monopoly legal topic: `city`
  - Hipster Whale / Melbourne: `city`
  - Hooded Horse / Dallas: `city`
  - Embracer Group restructuring topic: `country`
  - Nyamakop / South Africa: `country`

Expected: these should not remain with undefined precision values such as `country_labor_market`, `country_startup_market`, `country_cultural_industry`, `headquarters_area`, `studio_area`, `publisher_area`, or `studio_area_country`.

## Public map UI pending verification

- `geographic-news-topic-public/index.html`
  - unresolved Kunlun placeholder markers now use a gray SVG icon
  - expected: only `unresolved_kunlun_placeholder` / `場所不明(崑崙山)` pins are gray; normal resolved pins remain Leaflet default markers

## Next workflow verification batch

This group is now large enough to justify one workflow run.

Use:

- `feed_id`: `game-all`
- `limit`: blank
- `suggest_candidates`: `false`

Then inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

Also open the public map and verify the Kunlun placeholder pin color.

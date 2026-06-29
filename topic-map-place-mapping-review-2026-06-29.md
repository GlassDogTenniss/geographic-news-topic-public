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

## Next workflow verification batch

Do not run workflow after a single small correction. Run it after this group has accumulated enough related fixes.

Use:

- `feed_id`: `game-all`
- `limit`: blank
- `suggest_candidates`: `false`

Then inspect:

- `docs/topic-maps/game-all.geojson`
- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all-unresolved.json`

# Topic map place mapping review - batch 111

Continuation of the `game-all` place-mapping cleanup after the handoff.

## Scope

Batch 111 is a targeted override batch for high-risk broad matching found while reviewing the stale `game-all` workflow output and the supplemental dictionaries.

## Changes

- `observed_chinese_developers_global_gaming_202606`
  - removed standalone `global gaming` from `names` and `keywords`
  - kept `Chinese developers gain ground in global gaming` and `Chinese game developers`
  - expected: articles that merely contain `global gaming`, such as market reports, education announcements, or South Africa items, should no longer resolve to the China developers topic.

- Broad fallback entries lowered to minimum priority:
  - `observed_global_games_market_report_fallback_202409`
  - `observed_africa_games_industry_fallback_202408`
  - `observed_southeast_asia_games_industry_fallback_202408`
  - `observed_regional_game_origin_story_fallback_202408`
  - `observed_legacy_hardware_platform_article_fallback_200903`
  - `observed_legacy_games_business_article_fallback_2012`
  - `observed_legacy_games_market_article_fallback_2014`
  - `observed_terminal_japan_mobile_launch_fallback`

These remain available as final catch rules, but should not outrank exact site, event, city, district, company, or more targeted country rules.

## Audit behavior update

The audit script now separates:

1. structural validation over all dictionary entries, and
2. broad-overmatch checks over effective merge results after later-file overrides.

Cross-file duplicate ids are treated as merge overrides. Duplicate ids within the same file remain audit errors.

## Next verification

After the next `game-all` build, inspect:

- `output/topic-maps/game-all-clusters.json`
- `docs/topic-maps/game-all.geojson`
- `docs/topic-maps/game-all-unresolved.json`

Primary checks:

- Xsolla / Bain / South Africa articles should not map to `observed_chinese_developers_global_gaming_202606` solely through `global gaming`.
- Broad fallback entries should only catch otherwise-unresolved legacy or generic market items.
- Specific entries such as IO Interactive, 34BigThings, Valve, Microsoft / Xbox, Ubisoft, The Pokemon Company, Rocksteady, Quantic Dream, Tamatem, Wizards of the Coast, HoYoverse / miHoYo, Ubisoft Philippines, and LEVEL5 comcept should still win over broad fallback entries.

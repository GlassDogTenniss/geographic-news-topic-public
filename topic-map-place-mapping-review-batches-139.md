# Topic map place mapping review - batch 139

Batch 139 changes the map display for broad or non-specific place resolutions.

## Updated file

Updated:

- `docs/index.html`

## Scope

The map now renders broad location pins in yellow.

Yellow is used when `location_precision` is country, state, prefecture, province, admin_area, region, multi_region, union_region, continent_region, or a country-level area variant such as studio_area_country, event_area_country, or publisher_area_country.

Yellow is also used when `place_type` ends with `_region`.

## Notes

Specific city, district, venue, office, headquarters, building, campus, and street-address pins continue to use the default marker.

The side list and popup also mark these items as `広域・複数地域`.

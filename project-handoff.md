# ニュース地図プロジェクト引き継ぎメモ

作成日: 2026-06-29

## 目的

`geographic-news` で進めていた場所ラベル正規化を、`geographic-news-topic` で小さく実験する。

既存プロジェクト:

- private/source: `GlassDogTenniss/geographic-news`
- public/pages/data: `GlassDogTenniss/geographic-news-public`
- 公開 UI: `https://glassdogtenniss.github.io/geographic-news-public/`

主な生成データ:

- `docs/latest.geojson`: 場所解決済みニュース
- `docs/latest-unresolved.json`: 場所未解決ニュース

## 場所データの役割分担

```text
representative_place
→ 地図上で代表地点として説明する名前
→ 施設名・本社名・会場名でもよい

geocode_query
→ 緯度経度を得るための検索クエリ
→ 英語住所や施設名でもよい

place_label / sort_place_label
→ 一覧・ソート・地域グルーピング用の地理ラベル
→ 原則として「国-州/県-市区町村-地区」など、住所・行政地名に寄せる
```

重要なのは、`place_label` に施設名を入れないこと。

```text
良くない:
Apple本社
米国-カリフォルニア州-クパチーノ-Apple本社
東京・羽田空港跡地

望ましい:
米国-カリフォルニア州-クパチーノ
日本-東京都-大田区-羽田空港
日本-神奈川県-川崎市-川崎区
```

施設名は `representative_place` に残す。  
一覧・色分け・国別表示に使う `place_label` は、地理的所属を表す。

## 直近の方針

`app/place_labels.py` で、施設名・本社名・会場名・跡地名を住所・行政地名へ寄せる。

元プロジェクトでの主要コミット:

```text
0d0ed44408f34213ffa7a89bf62fedf93ce0c6e6
Apply geographic place labels across dictionaries

f157605c5b19e99fab542cd5a9d6110775a25b9e
Normalize place labels to geographic address areas

0cef70ffe2fc14b67cfd500f9d5e191d26ef7716
Remove facility names from explicit place labels
```

明示 `place_label` があっても、末尾が施設名っぽい場合は、推定された地理ラベルを優先する。

対象語の例:

```text
本社
本部
事務局
研究所
会場
跡地
周辺
キャンパス
ガーデン
庁舎
ビル
```

## このリポジトリでの次の実験

1. `data/*.json` を全走査する。
2. 各エントリに対して `build_place_labels(entry)` を実行する。
3. `representative_place` / `geocode_query` / `current_label` / `built_label` / `inferred_label` を CSV / JSON に出す。
4. 施設名っぽい `place_label` や粗すぎる `place_label` を抽出する。
5. 人間が確認し、`ADDRESS_LABELS` または辞書側の `place_label` を修正する。

実行例:

```bash
python scripts/audit_place_labels.py \
  --data-dir data \
  --out-csv audit/place-label-audit.csv \
  --out-json audit/place-label-audit.json
```

## 崑崙山プレースホルダーについて

未解決ニュースは backend では `latest-unresolved.json` に残る。  
public UI 側では、未解決ニュースを仮地点として `場所不明(崑崙山)` に表示している。

```text
場所不明(崑崙山) は実際の解決地点ではない
Kunlun / 崑崙山 / China として扱わない
このラベルを根拠に中国ニュースとして解決しない
```

場所解決とは、`場所不明(崑崙山)` に仮置きされたニュースを、実際の代表地点へ移すこと。

## 注意

`place_label` は「地図上のピンの説明」ではない。  
ピンの説明は `representative_place` と `place_reason` が担う。

`place_label` は、ユーザーがニュース一覧を地域順に読んだり、国・地域ごとに色分けしたりするためのラベル。

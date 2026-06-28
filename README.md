# geographic-news-topic-public

`GlassDogTenniss/geographic-news-topic` の実験結果を公開するための GitHub Pages 用リポジトリです。

## 役割

このリポジトリは、生成済みデータと静的 UI だけを持ちます。

- `latest.geojson`: 地図上に表示する場所解決済みニュース
- `latest-unresolved.json`: 場所未解決ニュース
- `index.html` / `style.css` / `app.js`: 確認用の最小地図 UI

元データ処理・ラベル監査・場所解決ロジックは、private 側の `geographic-news-topic` に置きます。

## GitHub Pages

GitHub Pages を使う場合は、Repository Settings の Pages で次を選びます。

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

公開 URL は通常、次の形になります。

```text
https://glassdogtenniss.github.io/geographic-news-topic-public/
```

## データ更新

`latest.geojson` と `latest-unresolved.json` は、private 側の実験スクリプトまたは GitHub Actions から更新する想定です。

この public 側では、`place_label` を編集しません。`place_label` は生成結果として受け取るだけにします。

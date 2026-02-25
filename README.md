# webfrontkadai

好きなゲームをまとめて紹介するための Web アプリです。

デモサイト:
https://webfrontkadai-sigma.vercel.app/

## 🚀 主な機能

- ゲーム一覧表示
- ゲーム詳細ページ
- 同ジャンルの関連ゲーム表示
- スクリーンショットギャラリー
- 外部ストアリンク表示
- 公式サイトリンク
- CMSの「表示」ONのみ公開

## 🗺 ページ構成

| ページ         | 内容                       |
| -------------- | -------------------------- |
| app/           | トップページ（ゲーム一覧） |
| app/games/[id] | ゲーム詳細ページ           |

## 📁 ディレクトリ構成

app

・page.tsx --- トップページ

app/games/[id]

・page.tsx --- 詳細ページ

libs

・microcms.ts --- API接続

## 🛠 開発環境セットアップ

```bash
git clone https://github.com/itc-n25016/webfrontkadai
cd next/webfrontkadai
npm install
npm run dev
```

ブラウザで開く

```
http://localhost:3000
```

## 📦 使用技術

- Next.js
- TypeScript
- microCMS
- CSS Modules
- Vercel

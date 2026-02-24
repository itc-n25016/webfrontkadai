# 🎮 Game Library

好きなゲームをまとめて紹介するための Web アプリです。
microCMS を使ってゲーム情報を管理し、Next.js で表示しています。

デモサイト:
https://vercel.com/miyagi-keisukes-projects/webfrontkadai

## 📌 概要

このアプリは、自分の好きなゲームをコレクション形式で紹介するサイトです。
CMSからゲーム情報を追加するだけで、自動で一覧・詳細ページに反映されます。

## 🚀 主な機能

- ゲーム一覧表示
- ゲーム詳細ページ
- 同ジャンルの関連ゲーム表示
- スクリーンショットギャラリー
- 外部ストアリンク表示
- 公式サイトリンク
- CMSの「表示」ONのみ公開

## 🗺 ページ構成

| ページ      | 内容                       |
| ----------- | -------------------------- |
| /           | トップページ（ゲーム一覧） |
| /games/[id] | ゲーム詳細ページ           |

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

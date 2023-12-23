# Mincuru Sveltekit

## 前提条件

- VS Code
- Volta
- Git

## 依存関係解決

```sh
cd mincuru-sveltekit
npm install
```

## ビルド

すべてのappsとpackagesをビルドするには、次のコマンドを実行します。

```sh
cd mincuru-sveltekit
npm run build
```

## 開発サーバー起動

開発サーバーを起動するには、次のコマンドを実行します。

```sh
cd mincuru-sveltekit
npm run dev
```

## DBマイグレーション

```sh
cd mincuru-sveltekit
npm run migrate
```

## プロジェクト構成

- `apps/web`: SvelteKitフロントエンド
- `packages/database`: Prisma ORM
- `@repo/eslint-config`: `eslint` 設定
- `@repo/typescript-config`: `tsconfig.json` 共通設定

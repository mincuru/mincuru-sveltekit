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

## AWSへのデプロイ

```sh
cd mincuru-sveltekit
npm run cdk deploy -w apps/infra
# コンソール上に表示されるRdsSourceSecurityGroupIdとVpcPublicSubnetIdを、GitHubのSecretsに登録する。
# ECS Serviceのデプロイ中に対象ECRイメージが見つからないエラーが出るので、GitHub Actionsでdeploy jobを実行すると、その処理中にECSタスク定義が更新されて、cdk deployが成功する。
```

## プロジェクト構成

- `apps/web`: SvelteKitフロントエンド
- `packages/database`: Prisma ORM
- `@repo/eslint-config`: `eslint` 設定
- `@repo/typescript-config`: `tsconfig.json` 共通設定

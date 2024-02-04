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

## DB管理画面（Prisma Studio）の起動

```sh
cd mincuru-sveltekit
npm run db:studio -w packages/database
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

## TODO

- ~~GitHub ActionsでサブネットIDやセキュリティグループのIDを取得する~~
- ~~GitHub Actionsでcdk deployのデプロイ~~
- ~~環境に応じてcdk deploryのパラメータを切り替える~~
- ~~開発環境にdeployする際はSeed実行する~~
- ~~migrateとdeploy-webを並列実行する~~
- ~~マイグレーション時の警告を解消する~~
- ~~prisma studioの整備~~
- deploy時の警告を解消する
- ドキュメントサイトを作成する
- ドキュメントサイトをデプロイする
- ログ整備
- アラート整備
- Cognito整備
- 編集画面の作成
- クルマデータ投入バッチの作成
- apiのLambdaへのデプロイ

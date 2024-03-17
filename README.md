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

## 環境変数設定

`.env`ファイルを作成し、以下の環境変数を設定する。

```sh
cd monorepo-template
cp .env.example .env
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

## DBマイグレーション&シード

```sh
cd mincuru-sveltekit
npm run db:migrate
npm run db:seed
```

## DB管理画面（Prisma Studio）の起動

```sh
cd mincuru-sveltekit
npm run db:studio -w packages/database
```

## GitHub Actionsでのテストに必要なインフラのデプロイ

```sh
cd mincuru-sveltekit
npm run cdk -w apps/infra -- deploy TestStack -c environment=stg
```

## ECR手動作成

## ECRに最初のイメージを手動プッシュ

> github actionsでECSへのデプロイは、1.ECRにWebイメージプッシュ、2.サービス名を指定してTask定義をデプロイ、の2ステップで行う。
> そのため、最初のデプロイ時には、ECRにイメージを手動でプッシュし、その後、cdkでクラスター、サービス、Task定義（ECRを指定）をデプロイすることができる。

## アプリケーション実行に必要なインフラのデプロイ

```sh
cd mincuru-sveltekit
npm run cdk -w apps/infra -- deploy InfraStack -c environment=stg
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
- ~~Nodeを20にする~~
- ~~Auth.jsによるGoogle認証実装~~
- ~~Playwrightのテストを整備する~~
- ~~ログイン状態でアバターとヘッダメニューを表示する~~
- ~~ユーザーテーブルを作成し、お気に入り情報を保存する~~
- ~~Formを使うとUnit Testの難易度が上がる~~
  - ~~クライアントサイドのテスト時にFormをMock化が困難~~
  - ~~ComponentをホストするContainer\*クラスを大量作成する必要がある~~
- ~~cars画面の中央寄せを左寄せにする~~
- ~~apiのテストを整備する~~
- ~~apiテストのGitHub Actions組み込み~~
- ~~apiのLambdaへのデプロイ~~
- ~~作業状況~~
  - ~~apiコンテナイメージのビルドを実行（./scripts/1build-api.sh）~~
  - ~~api Lambda用ECR作成（./scripts/2create-repo-api.sh）~~
  - ~~api Lambda用ECRにイメージをプッシュ（./scripts/3push-api.sh）~~
  - ~~開発環境でcdk deployを行ってapi Lambdaを作成する（イメージはECRから取得）~~
  - ~~GitHubにコミットしてGitHub Actionsでapi Lambdaのデプロイを行う~~
  - ~~Lambdaにデプロイ後、テスト実行するとcars.moduleが見つからないエラーが出る。コンテナイメージを確認したところ、cars.moduleは./carsフォルダ配下ではなく、フラットなディレクトリにある。これが原因でLambdaが起動しないと思われる。これを解消する。~~
- ~~batchのサンプルコード作成~~
  - ~~フレームワークなし板~~
- ~~ログ整備~~
- サインアップ機能を実装する
- deploy時の警告を解消する
- ドキュメントサイトを作成する
- ドキュメントサイトをデプロイする
- アラート整備
- 編集画面の作成
- クルマデータ投入バッチの作成
- SideNavのメニューに件数表示
- Database Repository的なpackage作成(非NestJSプラグイン)
  - webとbatchからimportして利用
- APIクライアントの生成

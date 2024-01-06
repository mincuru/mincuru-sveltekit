# prisma database ORMの基本的な使い方

# 新しいマイグレーションを作成する

スキーマファイル(prisma/schema.prisma)変更後、以下のコマンドを実行する。

```
$ npx prisma migrate dev --name [変更内容を簡単に表現する文字列 in English]
```

`--name` を付け忘れても、自動的に名前を聞いてくる。

# ローカルDBを最新の状態に更新する

スキーマファイル(schema.prisma)取得後、以下のコマンドを実行する。

```
$ git pull
$ npx prisma migrate dev
```

# 初期レコードの作成

マイグレーション初回実行時に初期レコードを作成するには、 `prisma/seed.ts` ファイルに更新処理を記述する。

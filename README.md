# ナナメの学び路

通信制高校・サポート校・オルタナティブ教育の選び方を発信するブログです。
Astro（静的サイトジェネレーター）で作られており、Cloudflare Pages に無料でデプロイできます。

---

## 1. まずやること：編集しておきたい箇所

公開前に、以下の「仮の内容」を実際の情報に書き換えてください。

| ファイル | 内容 |
|---|---|
| `src/pages/contact.astro` | `your-email@example.com` を実際の連絡先メールアドレスに変更 |
| `src/pages/about.astro` | 運営者プロフィール（活動地域・経歴など）を実際の内容に変更 |
| `src/pages/privacy.astro` | ページ下部の「制定日」を記入 |
| 各記事内の `<div class="ad-box">` | `href="#"` を実際のアフィリエイトリンク（A8.net等の広告リンク）に差し替え |
| `astro.config.mjs` | 独自ドメインを取得したら `site` の値を変更 |

---

## 2. ローカルでの動作確認（パソコンで見た目を確認する）

事前に [Node.js](https://nodejs.org/)（18以上）をインストールしておいてください。

```bash
# 依存パッケージのインストール（最初の1回だけ）
npm install

# ローカルサーバーを起動（http://localhost:4321 で確認できます）
npm run dev
```

記事を追加・編集したら、ブラウザが自動で更新されます。

新しい記事を書くときは、`src/content/blog/` フォルダに新しい `.md` ファイルを追加してください。
既存の記事ファイル（例：`tsushinsei-koukou-toha.md`）をコピーして書き換えるのが簡単です。

---

## 3. 公開までの流れ（全体像）

1. GitHub（コードを保管するサービス）にアカウントを作る
2. このプロジェクトをGitHubの「リポジトリ」にアップロードする
3. Cloudflare（無料でサイトを公開できるサービス）にアカウントを作る
4. Cloudflare Pages と GitHub リポジトリを連携し、公開する

一度連携してしまえば、その後は記事を追加してGitHubに反映するだけで、サイトが自動的に更新されます。

---

## 4. GitHubアカウントを作る

1. [https://github.com/](https://github.com/) にアクセス
2. 「Sign up」から、メールアドレス・パスワード・ユーザー名を入力して登録
3. 表示される認証（パズルやメール確認コード）を完了する
4. 登録完了後、ログインした状態になればOK

---

## 5. このプロジェクトをGitHubにアップロードする

### 5-1. リポジトリを作成する

1. GitHubにログインした状態で、右上の「+」→「New repository」を選択
2. Repository name に `naname-manabimichi` などの名前を入力
3. 公開設定は「Public」のままでOK（Cloudflare Pagesの無料利用には影響しません）
4. 「Create repository」をクリック

### 5-2. コードをアップロードする（パソコンにGitが入っている場合）

ターミナル（またはコマンドプロンプト）で、このプロジェクトのフォルダに移動してから、以下を実行します。
`YOUR_USERNAME` の部分は、ご自身のGitHubユーザー名に置き換えてください。

```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/naname-manabimichi.git
git push -u origin main
```

初回はGitHubのユーザー名とパスワード（またはトークン）の入力を求められることがあります。
画面の指示に従って認証してください。

### 5-3. Gitを使わずアップロードしたい場合

GitHubのリポジトリ画面から「uploading an existing file」というリンクをクリックし、
このプロジェクトのフォルダ内のファイルをドラッグ＆ドロップでアップロードすることもできます
（ただし `node_modules` フォルダと `dist` フォルダはアップロード不要です）。

---

## 6. Cloudflareアカウントを作る

1. [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) にアクセス
2. メールアドレスとパスワードを入力して登録
3. 確認メールが届くのでリンクをクリックして認証を完了する

---

## 7. Cloudflare Pages でサイトを公開する

1. Cloudflareダッシュボードにログインし、左メニューから「Workers & Pages」を選択
2. 「Create application」→「Pages」タブ→「Connect to Git」を選択
3. GitHubアカウントとの連携を許可し、先ほど作成した `naname-manabimichi` リポジトリを選択
4. ビルド設定を以下のように入力します

   | 項目 | 値 |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

5. 「Save and Deploy」をクリック

数分待つと、`https://naname-manabimichi-xxx.pages.dev` のようなURLでサイトが公開されます。
これで、通信制高校サポート校運営の合間にも、スマホやパソコンから記事を追加していくだけでブログを更新できるようになります。

---

## 8. 記事を追加して更新する

記事を追加したら、以下のコマンドでGitHubに反映してください（GitHub連携をしていれば、自動で再デプロイされます）。

```bash
git add .
git commit -m "記事を追加"
git push
```

Gitに慣れていない場合は、GitHubのウェブ画面から直接ファイルを追加・編集することも可能です
（リポジトリ画面 →「Add file」→「Create new file」）。

---

## 9. 独自ドメインを取得したら

Cloudflareの「Workers & Pages」→対象のプロジェクト→「Custom domains」から、取得した独自ドメインを追加できます。
ドメインをまだCloudflareで管理していない場合は、先にドメインの登録・移管（ネームサーバーの変更）が必要です。
設定後は、`astro.config.mjs` 内の `site` の値も新しいドメインに書き換えてビルドし直してください。

---

## フォルダ構成

```
src/
  components/     ヘッダー・フッターなどの共通パーツ
  content/blog/   記事本体（Markdownファイル）
  layouts/        ページ全体のレイアウト
  pages/          各ページ（トップ、記事一覧、固定ページなど）
  styles/         全体のデザイン（CSS）
public/           favicon等、そのまま公開されるファイル
```

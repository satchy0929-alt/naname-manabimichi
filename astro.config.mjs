import { defineConfig } from 'astro/config';

// このブログは静的サイトとしてビルドし、Cloudflare Pages にそのままデプロイします。
// 独自ドメインを取得したら、下記の site を書き換えてください（サイトマップ・OGP等の絶対URLに使われます）。
export default defineConfig({
  site: 'https://naname-manabimichi.pages.dev',
  output: 'static',
});

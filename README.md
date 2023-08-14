## 紹介

こちらはgulpを使用した静的サイトジェネレーターです。  
効率的に静的サイトの作成を行うことができます。  
Tailwindcssを導入し、さらに快適に開発が行うことができます。

#### 効率化タスク

- HTMLのテンプレート化
- TypeScript / SASSの自動コンパイル
- 自動整形 / 自動リントチェック
- ファイルの自動コピー
- ブラウザの自動リロード
- Javascript / CSS / 画像の自動圧縮(Productionのみ)
- Tailwindcssの自動ビルド(new)

## 使用技術

- [gulp](https://gulpjs.com/)
- [ejs](https://ejs.co/)
- [TypeScript](https://www.typescriptlang.org/)
- [sass](https://sass-lang.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [webpack](https://webpack.js.org/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/)

## 開発手順

npm を使用しています

```bash
npm

// 開発用サーバー起動
npm start
// 本番用ビルド(JS/CSS/Imageの圧縮)
npm run prodcution

husky
// huskyの初期化
npm run prepare
// フックの作成
npm run husky
```

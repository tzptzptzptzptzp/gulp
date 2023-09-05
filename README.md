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

---

## Introduction

This is a static site generator using Gulp, designed to efficiently create static websites. It incorporates Tailwind CSS to enhance the development experience further.

#### Streamlined Tasks

- Templating for HTML
- Automatic compilation for TypeScript and SASS
- Auto-formatting and lint checking
- Automatic file copying
- Auto-reloading of the browser
- Auto-compression for JavaScript, CSS, and images (Production only)
- Automated Tailwind CSS builds (new)

## Technologies Used

- [Gulp](https://gulpjs.com/)
- [EJS](https://ejs.co/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)

## Development Procedures

We use npm for managing dependencies and running scripts. To get started:

```bash
npm install

// Start the development server
npm start
// Production build (minification of JS/CSS/Images)
npm run production

// Initialize Husky
npm run prepare
// Create Git hooks
npm run husky
```

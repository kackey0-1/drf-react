# React 
[React Reference](https://qiita.com/TsutomuNakamura/items/cb3b6109fb21730cd73f)

## 1 setup packages
```bash
npm init

......
package name: (react-tutorial) 
version: (1.0.0) 
description: 
entry point: (index.js) webpack.config.js    # <- "webpack.config.js" 入力(先にwebpack.config.js 作っておけばデフォルトで選択される)
test command: 
git repository: 
keywords: 
author: Your Name
license: (ISC) 
......

npm install --save-dev webpack webpack-cli webpack-dev-server
npm install -g webpack webpack-cli
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev react react-dom
```

## setup webpack.config.js
webpack.config.js ファイルを作成し、バンドリングルールを書く。
下記のようにwebpack.config.js を設定することで./src/js/client.js を起点にファイル内部のimport 構文を読み取りそれらソースコードをモジュールバンドリングしていくようになります。

## webpack server
webpack には開発用のweb サーバも用意されています。
開発用のweb サーバ(webpack-dev-server)を使うことでバンドリングと開発中のサービスの公開を同時に行うことができ、
開発中の作業効率を一段と引き上げますので覚えて損は無い機能です。

```bash
# webpack-dev-server
./node_modules/.bin/webpack-dev-server --content-base src --mode development
# webpack v4
webpack serve
```

## Flux

状態を管理を実現するための設計思想
非同期で通知がWebserverから送られてきた際に、状態をStoreする機能をもつ

- Actions
  - ユーザー操作
- Constants
- Dispatcher
  - Action から受け取った処理をDispatcher は複数の接続先、例えばDB や他API サーバ等にアクセスして必要なデータを処理したり、計算処理をする役割
  - 基本的にDispacherはシングルトンで動く
- Store
  - Dispatcher が処理した結果を蓄え、View がレンダリングするためのデータを格納する役割
- View
  - View の役割はStores のデータを検知し、そのデータをレンダリングして表示することで、View のインタフェースによってはユーザからのボタン等の操作により、新たなAction を発生させる役割


```
                  +-------------+
       +----------|  Actions    |<---------+
       |          +-------------+          |
       |                 .                 |
       |                 .                 |
       |          +-------------+          |
       |          |  Constants  |          |
       |          +-------------+          |
       |                 .                 |
       ▾                 .                 |
+-------------+   +-------------+   +------+------+
| Dispatcher  |-->|  Stores     |-->| View        |
+-------------+   +-------------+   +-------------+

```

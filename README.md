# 網頁切版直播班-小組專題 Vite 設定

## 使用說明
- 下載後記得用 `npm install` -安裝套件
- 用 `npm run dev` - 執行開發模式後就可開始寫code
- 所有新增頁面的html檔，請放置在 pages 內
- 所有新增頁面的scss檔，請放置在 assets/scss/pages 內，並記得在 assets/scss/all.scss 中import
- 所有新增layout的scss，請放置在 assets/scss/layout 內，並記得在 assets/scss/all.scss 中import
- 已拆出html的head部分於layout中，若有需要增加link，請直接加在 layout/htmlHead.ejs 中
- 新增頁面時，請記得include四個layout頁面。
- 需客製化bootstrap時，請從 node_modules/bootstrap/scss 
中複製出要客製化的檔案，放入 assets/scss/helpers 或 assets/scss/components 中，
並記得在 assets/scss/all.scss 中import


-----

## Node.js 版本
  - 專案的 Node.js 版本需為 v16 以上
  - 查看自己版本指令：`node -v`

## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm run deploy` - 自動化部署

## 資料夾結構
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - scss # SCSS 的樣式放置處

  - layout # ejs 模板放置處
  - pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項
- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能



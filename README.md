# 高德轉換器

Google Maps 連結轉高德地圖的小工具。

## 目前狀態

- 本地路徑：`G:\我的雲端硬碟\AI-Workspace\高德轉換器`
- GitHub repo：`dancil223-liu/google-to-amap`
- GitHub Pages：`https://dancil223-liu.github.io/google-to-amap/`
- 入口檔案：`index.html`

## 功能

- 貼上 Google Maps 完整連結後，解析地點名稱與座標。
- 支援手動輸入座標。
- 支援 iOS 捷徑用 URL hash 傳入展開後的 Google Maps 網址。
- 顯示「開啟高德導航」「在高德查看地圖」按鈕。
- 電腦版會用新分頁開高德網頁導航，不再使用 iPhone 專用的 `iosamap://`。
- 支援捷徑直開流程，優先產生 `iosamap://` 高德 APP 連結。
- 提供高德官方 URI `callnative=1` 備援連結，嘗試由官方網頁連結喚起 APP。
- 提供 `uri.amap.com` 網頁版備用連結。

## iPhone 使用方式

### 不用捷徑

1. Google Maps 裡按「分享」。
2. 選「複製連結」。
3. 回到工具頁按「貼上」。
4. 按「高德 APP 導航」或「官方連結開 APP」。

### 要做捷徑

1. 捷徑設定開啟「在分享表單中顯示」，接收 URL。
2. 新增「展開 URL」，輸入選「捷徑輸入」。
3. 新增「文字動作」，先貼 `https://dancil223-liu.github.io/google-to-amap/#`，再插入變數「展開的 URL」。
4. 新增「打開 URL」，輸入選上一個「文字」。不要直接打開 Google 的網址。

## 待確認

- iPhone 實測：`高德 APP 導航` 或 `官方連結開 APP` 哪一個最穩。
- 確認地點名稱與座標是否符合實際使用情境。

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
- 支援捷徑直開流程，優先產生 `iosamap://` 高德 APP 連結。
- 提供高德官方 URI `callnative=1` 備援連結，嘗試由官方網頁連結喚起 APP。
- 提供 `uri.amap.com` 網頁版備用連結。

## 待確認

- iPhone 實測：`高德 APP 導航` 或 `官方連結開 APP` 哪一個最穩。
- 確認地點名稱與座標是否符合實際使用情境。

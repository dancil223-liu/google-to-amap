# 高德轉換器 HANDOFF

## 專案定位

Google Maps 分享到高德地圖的 iPhone 捷徑實驗專案。

## 路徑

- 本地路徑：`G:\我的雲端硬碟\AI-Workspace\高德轉換器`
- Obsidian 日誌：`G:\我的雲端硬碟\secondbrain\開發日誌\高德轉換器.md`
- GitHub repo：`dancil223-liu/google-to-amap`

## 目前狀態

- 2026-05-27 原本做過 GitHub Pages 網頁轉換工具，但 iPhone 實測發現 Safari / 捷徑環境會擋網頁自動開高德 APP。
- 2026-05-28 已轉向純 iPhone 捷徑版，不再經過 GitHub Pages 網頁。
- 2026-05-29 使用者確認網頁版製作資料不用了，已刪除 `index.html` 與 `tests/` 網頁測試資料。
- 目前純捷徑版尚未完成穩定版。
- 已確認過的方向：`iosamap://viewMap` 可顯示部分地標；但若 Google 分享內容只有地址文字、沒有精準座標，捷徑猜座標會偏移。
- 下一個要測的是高德搜尋版：`iosamap://poi?sourceApplication=GoogleToAmap&name=整理後文字`，先不要帶 `lat` / `lon`。

## 已知踩坑

- 網頁版自動跳高德 APP 不穩，Safari / 捷徑環境容易擋掉。
- `lat` / `lon` 不能放整段網址。
- `poiname` 不要固定 `GoogleMaps`。
- 替換文字時，真正空格要按一次空白鍵，不是輸入「空白」兩個字。
- `等待 1 秒` 可降低 Google 短網址尚未展開完成導致的失敗。
- `dev=0` / `dev=1` 無法修正來源座標已經猜錯的問題。

## 下一步

1. 測「高德搜尋版」：只用地址 / 店名組 `iosamap://poi?sourceApplication=GoogleToAmap&name=...`。
2. 不帶 `lat` / `lon`，讓高德自己搜尋，避免錯座標跳到錯誤縣市。
3. 若搜尋版穩定，再整理成逐格 iPhone 捷徑教學。
4. 教學要使用 iPhone 捷徑中文動作名稱，並列可能別名，例如「分割文字 / 分開文字」、「取得清單中的項目 / 取得列表的項目」。

## 開工規則

從此資料夾開工時，只讀本檔、`AGENTS.md` / `CLAUDE.md`、對應 Obsidian 日誌與本 repo git 狀態，不掃其他專案。
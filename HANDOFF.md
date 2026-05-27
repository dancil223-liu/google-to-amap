# 高德轉換器 HANDOFF

## 專案定位

Google Maps 連結轉高德地圖的小工具，主要給 iPhone 捷徑流程使用。

## 路徑

- 本地路徑：`G:\我的雲端硬碟\AI-Workspace\高德轉換器`
- Obsidian 日誌：`G:\我的雲端硬碟\secondbrain\開發日誌\高德轉換器.md`
- GitHub repo：`dancil223-liu/google-to-amap`
- GitHub Pages：`https://dancil223-liu.github.io/google-to-amap/`

## 目前狀態

- `index.html` 已完成第一版。
- 已部署到 GitHub Pages。
- iOS 捷徑流程設計為 3 步驟：取得 URL → 展開 URL → 打開網頁工具。
- Safari 會擋 JS 自動開 APP，所以目前改成讓使用者手動點按鈕。
- 2026-05-27 已改造成雙路徑：`iosamap://` 高德 APP 直開 + 高德官方 URI `callnative=1` 備援。
- 新增 `tests/link-builder.test.cjs` 驗證高德連結格式。
- 2026-05-27 晚間修正電腦操作沒反應：非 iOS 會改開高德網頁版；頁面新增「解析」按鈕、電腦測試按鈕、iPhone 捷徑 4 步驟說明。

## 收工狀態（2026-05-27）

- 最新 commit：`09902c5 Improve iPhone Amap shortcut flow`
- Git 狀態：乾淨，已 push 到 GitHub Pages
- 線上測試網址：`https://dancil223-liu.github.io/google-to-amap/?v=09902c5`
- 已驗證：`node tests/link-builder.test.cjs` 通過；線上頁面已包含新版文字與 `callnative=1`

## 下一步

1. push 到 GitHub Pages 後，用電腦開新版網址測「貼連結 → 解析 → 高德網頁導航」。
2. 用 iPhone 建立捷徑：分享表單 → 取得捷徑輸入 → 展開 URL → 打開 `https://dancil223-liu.github.io/google-to-amap/#` + 展開後 URL。
3. iPhone 先測「高德 APP 導航」。
4. 不行再測「官方連結開 APP」。
5. 兩個都不行，再保留網頁版備援並回報手機畫面。

## 開工規則

從此資料夾開工時，只讀本檔、`AGENTS.md` / `CLAUDE.md`、對應 Obsidian 日誌與本 repo git 狀態，不掃其他專案。


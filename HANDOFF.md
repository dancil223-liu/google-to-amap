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

## 下一步

1. 用 iPhone 實測捷徑流程。
2. 先測「高德 APP 導航」，再測「官方連結開 APP」。
3. 若按鈕不穩，改測高德 Universal Link 或簡化成網頁版備援。

## 開工規則

從此資料夾開工時，只讀本檔、`AGENTS.md` / `CLAUDE.md`、對應 Obsidian 日誌與本 repo git 狀態，不掃其他專案。

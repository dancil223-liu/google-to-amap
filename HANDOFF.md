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
- 2026-05-27 再修正：電腦版「查看地圖 / 高德網頁導航」改用新分頁；手機說明改成「不用捷徑」優先，捷徑版改用「文字動作」組網址，避免打開回 Google Maps。
- 2026-05-27 捷徑 hash 頁新增自動嘗試開高德：進頁後 300ms 自動跳 `iosamap://navi`，失敗則保留「沒有跳？按這裡」大按鈕。

## 收工狀態（2026-05-27）

- 本輪功能 commit：`e31d0be Auto-open Amap from shortcut page`
- Git 狀態：功能修正已 push 到 GitHub Pages。
- 線上測試網址：`https://dancil223-liu.github.io/google-to-amap/?v=e31d0be`
- 已驗證：`node tests/link-builder.test.cjs` 通過；本機 HTTP 載入檢查通過；線上頁面已包含 `autoOpenShortcutTarget`、「正在嘗試打開高德」與手動備援按鈕。

## 下一步

1. push 到 GitHub Pages 後，用電腦開新版網址測「貼連結 → 解析 / 查看地圖 → 新分頁高德網頁」。
2. 手機先測不用捷徑：Google Maps 分享 → 複製連結 → 回工具頁貼上 → 高德 APP 導航。
3. 若要做捷徑：分享表單 → 展開 URL → 文字動作貼本站前綴並插入「展開的 URL」→ 打開上一個文字。
4. iPhone 先測「高德 APP 導航」。
5. 不行再測「官方連結開 APP」。
6. 兩個都不行，再保留網頁版備援並回報手機畫面。

## 開工規則

從此資料夾開工時，只讀本檔、`AGENTS.md` / `CLAUDE.md`、對應 Obsidian 日誌與本 repo git 狀態，不掃其他專案。


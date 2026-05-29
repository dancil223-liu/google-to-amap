# 高德轉換器 — Claude 專案規則

## 專案摘要

這是 Google Maps → 高德地圖的 iPhone 捷徑實驗專案。

- 本地路徑：`G:\我的雲端硬碟\AI-Workspace\高德轉換器`
- Obsidian 日誌：`G:\我的雲端硬碟\secondbrain\開發日誌\高德轉換器.md`
- GitHub repo：`dancil223-liu/google-to-amap`
- 狀態：網頁版已放棄，改走純 iPhone 捷徑，尚未完成穩定版。

## 小利開工

- 只讀本專案自己的 `HANDOFF.md`、`CLAUDE.md`、對應 Obsidian 日誌與 git 狀態。
- 不掃 `AI-Workspace` 裡其他專案。
- 執行時少講過程；每完成一項，短回報已完成、剩下什麼、建議下一步。

## 注意事項

- 不再維護 `index.html` / GitHub Pages 網頁轉換工具。
- 目前主要研究 iPhone 捷徑：Google Maps 分享資料整理後，組 `iosamap://` 打開高德 APP。
- 已知問題：部分 Google 分享連結只有地址文字，捷徑猜座標可能偏移。
- 下一步優先測 `iosamap://poi?sourceApplication=GoogleToAmap&name=...` 搜尋版，先不要帶 `lat` / `lon`。
- iPhone / 高德 APP 行為需要使用者實機確認。
- 不要 commit `.codex/`、`.claude/`、`.env`、`node_modules/`。
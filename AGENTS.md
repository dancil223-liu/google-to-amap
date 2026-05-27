# 高德轉換器 — Codex 專案規則

## 專案摘要

這是 Google Maps → 高德地圖轉換工具。

- 本地路徑：`G:\我的雲端硬碟\AI-Workspace\高德轉換器`
- Obsidian 日誌：`G:\我的雲端硬碟\secondbrain\開發日誌\高德轉換器.md`
- GitHub repo：`dancil223-liu/google-to-amap`
- GitHub Pages：`https://dancil223-liu.github.io/google-to-amap/`

## 小利開工

- 只讀本專案自己的 `HANDOFF.md`、`AGENTS.md`、對應 Obsidian 日誌與 git 狀態。
- 不掃 `AI-Workspace` 裡其他專案。
- 執行時少講過程；每完成一項，短回報已完成、剩下什麼、建議下一步。

## 注意事項

- 這是純前端單頁工具，入口是 `index.html`。
- 高德 APP 直開主路徑是 `iosamap://navi`；備援路徑是 `https://uri.amap.com/navigation?...&callnative=1`。
- 修改後至少用瀏覽器開本地頁面確認主要流程。
- 修改連結格式後要跑 `node tests/link-builder.test.cjs`。
- iPhone / Safari / 高德 APP 開啟行為需要實機確認。
- 不要 commit `.codex/`、`.claude/`、`.env`、`node_modules/`。

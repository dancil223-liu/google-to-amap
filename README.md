# 高德轉換器

Google Maps 分享到高德地圖的 iPhone 捷徑實驗專案。

## 目前狀態

- 已放棄網頁版工具，不再維護 GitHub Pages 轉換頁。
- 原本的 `index.html` 與網頁測試資料已刪除。
- 方向改為純 iPhone 捷徑：Google Maps 分享 → 捷徑整理網址 / 地址 / 座標 → 組 `iosamap://` → 打開高德 APP。
- 目前尚未完成穩定版；已知問題是部分 Google 分享連結只有地址文字，捷徑猜座標會偏移。

## 保留資料

- `HANDOFF.md`：目前進度與下一步。
- `AGENTS.md` / `CLAUDE.md`：專案規則。
- Obsidian 日誌：`G:\我的雲端硬碟\secondbrain\開發日誌\高德轉換器.md`

## 下一步

1. 先測高德搜尋版：`iosamap://poi?sourceApplication=GoogleToAmap&name=整理後文字`。
2. 不帶 `lat` / `lon`，避免使用錯誤座標。
3. 若搜尋版穩定，再整理成逐格 iPhone 捷徑教學。
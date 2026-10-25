# 捷道地圖支援與隱私權網站

提供繁體中文、簡體中文、英文、日文與韓文版本。入口頁面依瀏覽器偏好語言選擇版本，語言選單會保留目前頁面與段落。

- 支援頁面：https://avocet.github.io/MRT/support.html
- 隱私權政策：https://avocet.github.io/MRT/privacy.html
- 公開聯絡信箱：avocet@me.com

## 維護

修改 `scripts/content.mjs` 的五語內容，或 `scripts/site-config.json` 的聯絡信箱與更新日期，再執行：

```sh
node scripts/build.mjs
node scripts/check.mjs
```

將產生的 HTML 與來源一併 Commit、Push。網站為純靜態 HTML/CSS/JavaScript，不需安裝套件；GitHub Pages 使用 `main` 分支的根目錄。保留 `.nojekyll`。

所有語言都有完整 HTML 內容。網站不使用外部字型、分析腳本或 Cookie；語言選擇只反映於網址。隱私權內容依目前 App 的定位、裝置端語音辨識、MapKit、WeatherKit、TDX／台北捷運查詢、StoreKit、UserDefaults 與通知功能整理。新增服務或資料用途時應同步更新。

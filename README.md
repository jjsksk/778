產生一個全螢幕畫布，背景顏色為#dde5b6。擷取攝影機的影像，擷取攝影的影像正常顯示在視窗的中間，影像寬高為視窗大小的80%，請將程式碼寫在sketch.js
說明：
攝影機擷取：

使用 createCapture(VIDEO) 啟用攝影機。
使用 video.size() 設定攝影機影像的大小。
使用 video.hide() 隱藏原始攝影機影像，僅在畫布上繪製。
影像置中：

計算影像的置中位置 (width - imageWidth) / 2 和 (height - imageHeight) / 2。
使用 image(video, x, y, imageWidth, imageHeight) 將攝影機影像繪製到畫布上。
背景顏色：

在 draw() 中設定背景顏色為 #dde5b6。
動態調整：

當視窗大小改變時，使用 windowResized() 函數重新調整畫布大小。
注意事項：
瀏覽器可能會要求使用者授權攝影機存取權限。
如果攝影機無法啟用，請檢查是否有其他應用程式正在使用攝影機，或確認瀏覽器是否允許存取攝影機。
將此程式碼保存到 sketch.js，執行後即可實現全螢幕畫布並顯示攝影機影像。

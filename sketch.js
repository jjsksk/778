let video;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#dde5b6'); // 設定背景顏色

  // 啟用攝影機
  video = createCapture(VIDEO);
  video.size(windowWidth * 0.8, windowHeight * 0.8); // 設定攝影機影像大小
  video.hide(); // 隱藏原始攝影機影像（只顯示在畫布上）
}

function draw() {
  background('#dde5b6'); // 設定背景顏色

  if (video) {
    const imageWidth = width * 0.8;
    const imageHeight = height * 0.8;
    const x = (width - imageWidth) / 2;
    const y = (height - imageHeight) / 2;

    // 繪製攝影機影像
    image(video, x, y, imageWidth, imageHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}

let video;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#dde5b6'); // 設定背景顏色

  // 啟用攝影機
  video = createCapture(VIDEO);
  video.size(windowWidth * 0.8, windowHeight * 0.8); // 設定攝影機影像大小
  video.hide(); // 隱藏原始攝影機影像（只顯示在畫布上）

  // 建立與攝影機影像一樣大小的圖形
  graphics = createGraphics(video.width, video.height);
}

function draw() {
  background('#dde5b6'); // 設定背景顏色

  if (video) {
    const imageWidth = width * 0.8;
    const imageHeight = height * 0.8;
    const x = (width - imageWidth) / 2;
    const y = (height - imageHeight) / 2;

    // 左右翻轉攝影機影像
    push();
    translate(x + imageWidth, y); // 移動到影像的右邊
    scale(-1, 1); // 水平翻轉
    image(video, 0, 0, imageWidth, imageHeight);
    pop();

    // 在攝影機影像上方繪製圖形
    graphics.clear(); // 清除之前的內容
    graphics.background(0); // 設定背景顏色為黑色

    // 翻轉 graphics 的內容
    graphics.push();
    graphics.translate(graphics.width, 0); // 移動到右邊
    graphics.scale(-1, 1); // 水平翻轉

    // 每隔 20 單位繪製圓形
    for (let i = 0; i < graphics.width; i += 20) {
      for (let j = 0; j < graphics.height; j += 20) {
        const col = video.get(i, j); // 擷取攝影機影像相對位置的顏色
        graphics.fill(col);
        graphics.noStroke();
        graphics.ellipse(i, j, 15, 15); // 繪製圓形
      }
    }

    graphics.pop();

    // 將 graphics 繪製到畫布上
    push();
    translate(x + imageWidth, y); // 移動到影像的右邊
    scale(-1, 1); // 水平翻轉
    image(graphics, 0, 0, imageWidth, imageHeight);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}

//矩形
//左上角{"x":118,"y":1404,"color":-16761033,"colorString":"#003F37"}
//右下角{"x":269,"y":1443,"color":-16761033,"colorString":"#003F37"}
//识别上面区域的文本，并且打印出耗时多少毫秒

requestScreenCapture()
sleep(200)

var window = floaty.window(
    <frame gravity="center">
        <text id="text" textSize="16sp" textColor="#f44336" />
    </frame>
);

window.exitOnClose();

window.text.click(() => {
    window.setAdjustEnabled(!window.isAdjustEnabled());
});
var ms = 0
setInterval(() => {
    //对控件的操作需要在UI线程中执行
    ui.run(function () {
        ms ++
        window.text.setText(ms.toString());
    });
}, 10);








function internalApiForPaddleOcr(img) {
    // 指定是否用精简版模型, 速度较快, 默认为 true
    let useSlim = true;

    // CPU 线程数量, 实际好像没啥作用
    let cpuThreadNum = 8;

    let start = new Date();
   
    let results = ocr.paddle.detect(img, { useSlim, cpuThreadNum });

    // log(`识别结果: ${JSON.stringify(
    //     Array.from(results).map((result) => {
    //         return { label: result.label, confidence: result.confidence, bounds: result.bounds };
    //     }))}`);


    Array.from(results).map((result) => {
        parseInt(result.label)
        if (Math.abs(ms - parseInt(result.label))  > 10) {
            log(`识别到:${result.label} MS:${ms} 可信度：${result.confidence}`)
        }
        // log(`识别到:${result.label} MS:${ms} 可信度：${result.confidence}`)
    });


    // toastLog(`识别结束, 耗时: ${new Date() - start}ms`);
    // 回收图片
    img.recycle();
};



function func(x1, y1, x2, y2) {
    if (!x1) {
        x1 = 0
        y1 = 0
        x2 = device.width
        y2 = device.height
    }

    let start = new Date();
    var img = captureScreen()
    var w = x2 - x1
    var h = y2 - y1
    var clip = images.clip(img, x1, y1, w, h);
    // images.save(clip, "/sdcard/ocr.png");
    // clip = images.threshold(clip, 100, 255, "BINARY"); // 二值化
    let start2 = new Date();
    var clipTime = start2 - start
    internalApiForPaddleOcr(clip) 
    // toastLog(`截屏耗时: ${clipTime}ms 识图耗时: ${new Date() - start2}ms`);
}
setInterval(() => {
    func(30, 114, 177, 168)
}, 20)
// func()
// console.show();



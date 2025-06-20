//这个位置如果颜色是#F5C162（坐标取值，不要截图）,就点击 这个位置
//{ "x": 392, "y": 355, "color": -671390, "colorString": "#F5C162" }
//这个位置如果颜色是#F5C162（坐标取值，不要截图）,就点击 这个位置
//{ "x": 480, "y": 358, "color": -671390, "colorString": "#F5C162" }
//暂停100毫秒
// const CONFIG = {
//     ENABLE_LOOP: true,      // 是否启用循环检测
//     TARGET_COLOR: -671390,  // #F5C162的ARGB值
//     COLOR_TOLERANCE: 10,    // 颜色容差(0-255)
//     TARGETS: [
//         { x: 392, y: 355, name: '左侧按钮' },  // 带名称的检测点
//         { x: 480, y: 358, name: '右侧按钮' }
//     ],
//     CLICK_DELAY: 100,       // 点击后延迟(毫秒)
//     CHECK_INTERVAL: 500,    // 检测间隔(毫秒)
//     MAX_ERROR_COUNT: 3      // 最大连续错误次数
// };
// // 初始化屏幕捕获
// function initScreenCapture() {
//     if (!requestScreenCapture()) {
//         toast("请求截图权限失败");
//         exit();
//     }
//     return captureScreen();
// }

// // 颜色检测与点击逻辑
// function checkAndClickColor() {
//     const img = initScreenCapture();
//     let clicked = false;
//     let errorCount = 0;

//     // 遍历所有检测点
//     for (const target of CONFIG.TARGETS) {
//         try {
//             // 获取像素颜色并分解ARGB通道
//             const pixelColor = images.pixel(img, target.x, target.y);
//             const [a, r, g, b] = [
//                 (pixelColor >> 24) & 0xff,
//                 (pixelColor >> 16) & 0xff,
//                 (pixelColor >> 8) & 0xff,
//                 pixelColor & 0xff
//             ];

//             // 分解目标颜色通道
//             const targetColor = CONFIG.TARGET_COLOR;
//             const [ta, tr, tg, tb] = [
//                 (targetColor >> 24) & 0xff,
//                 (targetColor >> 16) & 0xff,
//                 (targetColor >> 8) & 0xff,
//                 targetColor & 0xff
//             ];

//             // 计算颜色差异(欧氏距离)并应用容差
//             const colorDiff = Math.sqrt(
//                 Math.pow(r - tr, 2) +
//                 Math.pow(g - tg, 2) +
//                 Math.pow(b - tb, 2)
//             );

//             if (colorDiff <= CONFIG.COLOR_TOLERANCE) {
//                 click(target.x, target.y);
//                 toast(`在${target.name}(${target.x},${target.y})检测到目标颜色并点击`);
//                 sleep(CONFIG.CLICK_DELAY);
//                 clicked = true;
//                 break; // 点击后退出循环
//             }
//         } catch (e) {
//             errorCount++;
//             console.error(`检测点${target.name}出错: ${e.message}`);
//             if (errorCount >= CONFIG.MAX_ERROR_COUNT) {
//                 throw new Error(`超过最大错误次数(${CONFIG.MAX_ERROR_COUNT})`);
//             }
//         }
//     }

//     img.recycle(); // 释放图像资源
//     return clicked;
// }

// // 主程序入口
// (function main() {
//     // 启动时显示配置信息
//     console.log("===== 颜色检测配置 ======");
//     console.log(`循环检测: ${CONFIG.ENABLE_LOOP ? '启用' : '禁用'}`);
//     console.log(`目标颜色: #${CONFIG.TARGET_COLOR.toString(16).slice(-6).toUpperCase()}`);
//     console.log(`颜色容差: ${CONFIG.COLOR_TOLERANCE}`);
//     console.log(`检测点数量: ${CONFIG.TARGETS.length}`);
//     console.log(`检测间隔: ${CONFIG.CHECK_INTERVAL}ms`);
//     console.log("=========================");
//     toast("颜色检测点击工具启动");
    
//     // 根据配置决定是否启用循环检测
//     if (CONFIG.ENABLE_LOOP) {
//         toast(`已启用循环检测，间隔${CONFIG.CHECK_INTERVAL}ms`);
//         let loopCount = 0;
//           let errorCount = 0; // 初始化错误计数器

//     // 使用setInterval实现稳定循环
//         const loopTimer = setInterval(() => {
//             try {
//                 loopCount++;
//                 const clicked = checkAndClickColor();
                
//                 // 调试信息：每10次循环显示一次状态
//                 if (loopCount % 10 === 0) {
//                     console.log(`循环检测第${loopCount}次，最近点击: ${clicked ? '成功' : '未检测到'}`);
//                 }
//             } catch (e) {
//                 console.error(`循环检测出错: ${e.message}`);
//                 toast(`检测出错: ${e.message}`);
                
//                 // 错误处理策略：连续出错3次则停止循环
//                 if (++errorCount >= 3) {
//                     clearInterval(loopTimer);
//                     toast("连续出错3次，已停止循环检测");
//                 }
//             }
//         }, CONFIG.CHECK_INTERVAL);
        
//         // 添加循环控制：长按音量减键停止脚本
//         events.observeKey();
//         events.onKeyDown(keys.volume_down, () => {
//             clearInterval(loopTimer);
//             toast("已停止循环检测");
//             exit();
//         });
//     } else {
//         // 单次检测模式
//         checkAndClickColor();
//     }
// })();

setInterval(() => {
    toast("检测");
    click(588, 355);
    sleep(30);
    click(480, 358);
}, 300)
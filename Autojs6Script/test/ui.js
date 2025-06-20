// Floating window demo, compatible with Auto.js 6

var color = "#009688";

// Define floating window layout
var window = floaty.window(
    <frame w="360" h="420" bg="#ffffff" elevation="8">
        <vertical id="mainContent" w="*" h="*">
            <horizontal bg="{{color}}" h="50">
                <button id="btnMenu" text="☰" w="50" h="40" layout_gravity="left|center_vertical" style="Widget.AppCompat.Button.Borderless.Colored"/>
                <text id="title" text="Floating Window Demo" textColor="#fff" textSize="18sp" layout_gravity="center_vertical" marginLeft="8"/>
                <button id="btnClose" text="Close" w="60" h="40" layout_gravity="right|center_vertical" style="Widget.AppCompat.Button.Borderless.Colored"/>
            </horizontal>
            <horizontal margin="10 0 10 0">
                <button id="btn1" text="Tab 1" layout_weight="1"/>
                <button id="btn2" text="Tab 2" layout_weight="1"/>
                <button id="btn3" text="Tab 3" layout_weight="1"/>
            </horizontal>
            <frame id="content" layout_weight="1" margin="0">
                <text id="pageText" text="Page 1 Content" textColor="black" textSize="16sp" gravity="center"/>
            </frame>
        </vertical>
        <vertical id="menuBar" w="0" h="*" bg="#ffffff" elevation="8" visibility="gone" gravity="left|top" clickable="true" layout_gravity="left|top" >
            <img w="90" h="120" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"/>
            <button id="menu1" text="  Option 1" textColor="black" textSize="15sp" drawableLeft="@drawable/ic_android_black_48dp" gravity="left|center_vertical"/>
            <button id="menu2" text="  Option 2" textColor="black" textSize="15sp" drawableLeft="@drawable/ic_settings_black_48dp" gravity="left|center_vertical"/>
            <button id="menu3" text="  Option 3" textColor="black" textSize="15sp" drawableLeft="@drawable/ic_favorite_black_48dp" gravity="left|center_vertical"/>
            <button id="menuExit" text="  Exit" textColor="black" textSize="15sp" drawableLeft="@drawable/ic_exit_to_app_black_48dp" gravity="left|center_vertical"/>
            <space layout_weight="1"/>
        </vertical>
        <img id="miniIcon" w="60" h="60" src="https://img.icons8.com/fluency/48/000000/circled-menu.png" visibility="gone" layout_gravity="left|center_vertical"/>
    </frame>
);

// Menu open/close logic
var menuOpen = false;
window.btnMenu.on("click", ()=>{
    if(menuOpen){
        window.menuBar.setVisibility(8); // GONE
        window.menuBar.attr("w", 0);
        menuOpen = false;
    }else{
        window.menuBar.setVisibility(0); // VISIBLE
        window.menuBar.attr("w", 110);
        menuOpen = true;
    }
});

// Hide menu when clicking content area
window.content.setOnTouchListener(function(view, event){
    if(menuOpen && event.getAction() == event.ACTION_DOWN){
        window.menuBar.setVisibility(8);
        window.menuBar.attr("w", 0);
        menuOpen = false;
    }
    return false;
});

// Menu button click events
window.menu1.on("click", ()=>{
    toast("Clicked: Option 1");
    window.menuBar.setVisibility(8);
    window.menuBar.attr("w", 0);
    menuOpen = false;
});
window.menu2.on("click", ()=>{
    toast("Clicked: Option 2");
    window.menuBar.setVisibility(8);
    window.menuBar.attr("w", 0);
    menuOpen = false;
});
window.menu3.on("click", ()=>{
    toast("Clicked: Option 3");
    window.menuBar.setVisibility(8);
    window.menuBar.attr("w", 0);
    menuOpen = false;
});
window.menuExit.on("click", ()=>{
    window.close();
});

// Close button event
window.btnClose.on("click", ()=>{
    // 隐藏主内容，显示小图标，缩小窗口
    window.mainContent.setVisibility(8);
    window.menuBar.setVisibility(8);
    window.miniIcon.setVisibility(0);
    window.setSize(80, 80);
});

// 小图标点击恢复
window.miniIcon.on("click", ()=>{
    window.mainContent.setVisibility(0);
    window.miniIcon.setVisibility(8);
    window.setSize(360, 420);
});

// 小图标拖动并吸边
let miniX = 0, miniY = 0, miniWinX, miniWinY;
window.miniIcon.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            miniX = event.getRawX();
            miniY = event.getRawY();
            miniWinX = window.getX();
            miniWinY = window.getY();
            return true;
        case event.ACTION_MOVE:
            let dx = event.getRawX() - miniX;
            let dy = event.getRawY() - miniY;
            window.setPosition(miniWinX + dx, miniWinY + dy);
            return true;
        case event.ACTION_UP:
            // 吸附到最近边缘
            let screenW = device.width;
            let screenH = device.height;
            let wx = window.getX();
            let wy = window.getY();
            let iconW = 80, iconH = 80;
            let toX = wx < (screenW - wx - iconW) ? 0 : screenW - iconW;
            let toY = Math.max(0, Math.min(wy, screenH - iconH));
            window.setPosition(toX, toY);
            return true;
    }
    return false;
});

// Tab button switch content
window.btn1.on("click", ()=>{
    window.pageText.setText("Page 1 Content");
    window.pageText.setTextColor(colors.parseColor("#000000"));
});
window.btn2.on("click", ()=>{
    window.pageText.setText("Page 2 Content");
    window.pageText.setTextColor(colors.parseColor("#FF0000"));
});
window.btn3.on("click", ()=>{
    window.pageText.setText("Page 3 Content");
    window.pageText.setTextColor(colors.parseColor("#00FF00"));
});

// Draggable
let x = 0, y = 0, windowX, windowY;
window.mainContent.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            return true;
        case event.ACTION_MOVE:
            let dx = event.getRawX() - x;
            let dy = event.getRawY() - y;
            window.setPosition(windowX + dx, windowY + dy);
            return true;
    }
    return false;
});

// Keep script running
sleep(1000000000);
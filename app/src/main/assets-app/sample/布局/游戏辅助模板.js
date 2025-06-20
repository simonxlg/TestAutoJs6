"ui";

// 定义主题颜色
var primaryColor = "#3F51B5";
var accentColor = "#FF4081";
var textColor = "#FFFFFF";
var backgroundColor = "#1E1E1E";
var cardColor = "#2D2D2D";

// 主界面布局
ui.layout(
    <drawer id="drawer">
        <vertical bg="#1E1E1E">
            <appbar bg="#3F51B5">
                <toolbar id="toolbar" title="游戏辅助大师"/>
            </appbar>
            <viewpager id="viewpager">
                {/* 主页标签页 */}
                <frame bg="#1E1E1E">
                    <vertical>
                        <text textSize="18sp" textColor="#FFFFFF" margin="16" textStyle="bold">功能面板</text>
                        <ScrollView>
                            <vertical margin="8">
                                {/* 自动点击区域 */}
                                <card w="*" h="auto" margin="8" bg="#2D2D2D" cornerRadius="8">
                                    <vertical padding="16">
                                        <text textSize="16sp" textColor="#FFFFFF" marginBottom="8">自动点击</text>
                                        <linear>
                                            <switch id="autoClickSwitch" checked="false"/>
                                            <text textSize="14sp" textColor="#FFFFFF" marginLeft="8">启用自动点击</text>
                                        </linear>
                                        <linear margin="8 0">
                                            <text textSize="14sp" textColor="#FFFFFF" w="80">点击间隔:</text>
                                            <input id="clickInterval" w="*" hint="毫秒" inputType="number" text="500"/>
                                        </linear>
                                        <button id="setClickPoint" text="设置点击位置" bg="#3F51B5" textColor="white" margin="8 0"/>
                                    </vertical>
                                </card>

                                {/* 自动滑动区域 */}
                                <card w="*" h="auto" margin="8" bg="#2D2D2D" cornerRadius="8">
                                    <vertical padding="16">
                                        <text textSize="16sp" textColor="#FFFFFF" marginBottom="8">自动滑动</text>
                                        <linear>
                                            <switch id="autoSwipeSwitch" checked="false"/>
                                            <text textSize="14sp" textColor="#FFFFFF" marginLeft="8">启用自动滑动</text>
                                        </linear>
                                        <linear margin="8 0">
                                            <text textSize="14sp" textColor="#FFFFFF" w="80">滑动时长:</text>
                                            <input id="swipeDuration" w="*" hint="毫秒" inputType="number" text="1000"/>
                                        </linear>
                                        <button id="setSwipeArea" text="设置滑动区域" bg="#3F51B5" textColor="white" margin="8 0"/>
                                    </vertical>
                                </card>

                                {/* 脚本管理区域 */}
                                <card w="*" h="auto" margin="8" bg="#2D2D2D" cornerRadius="8">
                                    <vertical padding="16">
                                        <text textSize="16sp" textColor="#FFFFFF" marginBottom="8">脚本管理</text>
                                        <list id="scriptList">
                                            <horizontal bg="#2D2D2D" w="*" padding="8">
                                                <text textColor="#FFFFFF" textSize="14sp" text="{{this.name}}" w="*"/>
                                                <button text="运行" bg="#FF4081" textColor="white" w="60"/>
                                            </horizontal>
                                        </list>
                                    </vertical>
                                </card>
                            </vertical>
                        </ScrollView>
                    </vertical>
                </frame>

                {/* 设置标签页 */}
                <frame bg="{backgroundColor}">
                    <vertical>
                        <text textSize="18sp" textColor="#FFFFFF" margin="16" textStyle="bold">设置</text>
                        <ScrollView>
                            <vertical margin="16">
                                <linear>
                                    <text textSize="16sp" textColor="#FFFFFF" w="120">悬浮窗</text>
                                    <switch id="floatWindowSwitch" checked="true"/>
                                </linear>
                                <linear margin="16 0">
                                    <text textSize="16sp" textColor="#FFFFFF" w="120">震动反馈</text>
                                    <switch id="vibrateSwitch" checked="true"/>
                                </linear>
                                <linear margin="16 0">
                                    <text textSize="16sp" textColor="#FFFFFF" w="120">音效提示</text>
                                    <switch id="soundSwitch" checked="false"/>
                                </linear>
                                <linear margin="16 0">
                                    <text textSize="16sp" textColor="#FFFFFF" w="120">主题颜色</text>
                                    <spinner id="themeSpinner" entries="蓝色,红色,绿色"/>
                                </linear>
                                <button id="saveSettings" text="保存设置" bg="#3F51B5" textColor="white" margin="16 0"/>
                            </vertical>
                        </ScrollView>
                    </vertical>
                </frame>

                {/* 关于标签页 */}
                <frame bg="{backgroundColor}">
                    <vertical align="center" padding="32">
                        <img w="120" h="120" src="https://i.imgur.com/5njV9Wb.png"/>
                        <text textSize="20sp" textColor="#FFFFFF" margin="16" textStyle="bold">游戏辅助大师</text>
                        <text textSize="14sp" textColor="#FFFFFF" margin="4">版本: 1.0.0</text>
                        <text textSize="14sp" textColor="#FFFFFF" margin="4">作者: AutoJs</text>
                        <button id="checkUpdate" text="检查更新" bg="{primaryColor}" textColor="white" margin="16"/>
                        <button id="aboutInfo" text="关于软件" bg="#2D2D2D" textColor="#FFFFFF"/>
                    </vertical>
                </frame>
            </viewpager>
        </vertical>

        {/* 侧边栏菜单 */}
        <vertical layout_gravity="left" bg="#2D2D2D" w="240">
            <img w="240" h="160" scaleType="fitXY" src="https://i.imgur.com/3FZ2vQH.jpg"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*" padding="12">
                    <img w="24" h="24" src="@drawable/ic_home_white_48dp" tint="#3F51B5"/>
                    <text textColor="#FFFFFF" textSize="15sp" text="主页" layout_gravity="center" marginLeft="16"/>
                </horizontal>
                <horizontal bg="?selectableItemBackground" w="*" padding="12">
                    <img w="24" h="24" src="@drawable/ic_settings_white_48dp" tint="#3F51B5"/>
                    <text textColor="#FFFFFF" textSize="15sp" text="设置" layout_gravity="center" marginLeft="16"/>
                </horizontal>
                <horizontal bg="?selectableItemBackground" w="*" padding="12">
                    <img w="24" h="24" src="@drawable/ic_info_white_48dp" tint="#3F51B5"/>
                    <text textColor="#FFFFFF" textSize="15sp" text="关于" layout_gravity="center" marginLeft="16"/>
                </horizontal>
                <horizontal bg="?selectableItemBackground" w="*" padding="12">
                    <img w="24" h="24" src="@drawable/ic_help_white_48dp" tint="{primaryColor}"/>
                    <text textColor="#FFFFFF" textSize="15sp" text="帮助" layout_gravity="center" marginLeft="16"/>
                </horizontal>
                <horizontal bg="?selectableItemBackground" w="*" padding="12">
                    <img w="24" h="24" src="@drawable/ic_exit_to_app_white_48dp" tint="#F44336"/>
                    <text textColor="#F44336" textSize="15sp" text="退出" layout_gravity="center" marginLeft="16"/>
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

// 设置视图分页器标题
ui.viewpager.setTitles(["功能", "设置", "关于"]);

// 让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

// 设置脚本列表数据
ui.scriptList.setDataSource([
    {name: "自动刷怪脚本"},
    {name: "自动采集脚本"},
    {name: "自动任务脚本"},
    {name: "自动战斗脚本"}
]);

// 侧边栏菜单项点击事件
ui.menu.on("item_click", (item, index) => {
    switch(index){
        case 0: // 主页
            ui.viewpager.setCurrentItem(0);
            ui.drawer.close();
            break;
        case 1: // 设置
            ui.viewpager.setCurrentItem(1);
            ui.drawer.close();
            break;
        case 2: // 关于
            ui.viewpager.setCurrentItem(2);
            ui.drawer.close();
            break;
        case 3: // 帮助
            alert("帮助", "使用说明:\n1. 开启辅助功能前请先授予权限\n2. 设置点击位置前请确保游戏已打开\n3. 脚本运行中请勿操作屏幕");
            break;
        case 4: // 退出
            ui.finish();
            break;
    }
});

// 按钮点击事件
ui.setClickPoint.on("click", () => {
    toast("请点击屏幕设置点击位置");
    // 这里可以添加设置点击位置的代码
});

ui.setSwipeArea.on("click", () => {
    toast("请在屏幕上划动设置滑动区域");
    // 这里可以添加设置滑动区域的代码
});

ui.saveSettings.on("click", () => {
    toast("设置已保存");
});

ui.checkUpdate.on("click", () => {
    toast("当前已是最新版本");
});

ui.aboutInfo.on("click", () => {
    alert("关于", "游戏辅助大师 v1.0.0\n一款功能强大的游戏辅助工具\n安全无毒，绿色环保");
});

// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("悬浮窗");
    menu.add("日志");
});

// 监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch(item.getTitle()){
        case "悬浮窗":
            toast("已显示悬浮窗");
            break;
        case "日志":
            toast("查看运行日志");
            break;
    }
    e.consumed = true;
});

// 设置状态栏颜色
ui.statusBarColor("#3F51B5");
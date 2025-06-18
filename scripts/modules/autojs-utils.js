module.exports = {
    greetingPrefix: 'Hello',
    test() {
        /* e.g. "Hello, AutoJs6 6.4.1" */
        toastLog(`${exports.greetingPrefix}, ${context.getString(R.strings.app_name)} ${app.autojs.versionName}`);

        //定时输出 hello
        setInterval(() => {
            toastLog('hello');
        }, 1000);

    },
};
// 主进程
const childProcess = require("child_process");

// 创建子进程
// fork函数 创建运行node命令的子进程
// silent属性控制子进程是否输出到主进程窗口
const forkProcess = childProcess.fork("./app5.js", {silent: true});

// 监听子进程回传的消息
forkProcess.on("message", (message) => {
    console.log(message);
});

// 向子进程发送消息
forkProcess.send("message from main process");




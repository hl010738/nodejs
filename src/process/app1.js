//  当前nodejs 的版本
console.log(process.version);

// 当前所有使用的模块的版本
console.log(process.versions);

//  当前nodejs 平台版本
console.log(process.platform);

// nodejs命令执行路径
console.log(process.execPath);

// 当前配置信息
console.log(process.config);

// 当前运行进程pid
console.log(process.pid);

// 当前操作系统架构
console.log(process.arch);

// 内存使用情况
console.log(process.memoryUsage());

// 当前的工作目录
console.log(process.cwd());

// 当前环境属性
console.log(process.env);

// 可以给env附加一个NODE_ENV属性
// 以标识当前开发环境 NODE_ENV名字为业界约定
process.env.NODE_ENV = "dev";
console.log(process.env.NODE_ENV);

// 执行时间
console.log(process.uptime())

// 监听node退出事件 process.exit(0);
process.on("exit", () => {
    console.log("exit")
});

// 监听 exit 退出之前 事件
process.on("beforeExit", () => {console.log("before exit")});

// 监听未捕获异常
process.on("uncaughtException", () => {console.log("uncaught exception")});

// 监听中断信号
process.on("SIGINT", () => console.log("receive signal"));
// 子进程执行linux命令
const childProcess = require("child_process");

// 开启一个子进程
// 开启子进程必须使用一个命令 ls -al ./
const lsChildProcess = childProcess.spawn("ls", ["al", "./"]);

// 子进程监听事件
// 将结果或者输出返回给stdout
lsChildProcess.stdout.on("data", (data) => {
    console.log(data.toString());
    console.log(`child process id is: ${lsChildProcess.pid}`)
});

// 子进程监听exit事件
lsChildProcess.on("exit", ((code, signal) => {
    console.log(code);
}))
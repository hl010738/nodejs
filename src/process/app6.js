const childProcess = require("child_process");

// 通过exec创建一个子进程并在命令行的shell中执行指定的命令
// exec方法带有一个回调函数可以拿到子进程的执行结果
childProcess.exec("node app7", (error, stdout, stderr) => {
    if (error){
        throw error;
    } else {
        console.log(stdout.toString());
    }
});
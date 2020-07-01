const childProcess = require("child_process");

// 使用execFile创建子线程
// 该函数的是exec的一个特化，只能执行文件
// 并且不会创建一个新的shell来执行
childProcess.execFile("node", ["app9"], (error, stdout, stderr) => {
    if (error){
        throw error;
    } else {
        console.log(stdout.toString());
    }
});



const fs = require("fs");

const func = () => {
    console.log("func invoked");
}

// 寻找下一个同步或者异步方法
// 执行之后，自动执行
process.nextTick(func);
const fs = require("fs");

// 写入文件 默认覆盖原来的内容
fs.writeFile("test.txt", "bbbb", (err => {
    if (err){
        console.log(err);
    } else {
        console.log("success");
    }
}));

// 写入文件 设置为追加内容
fs.writeFile("test.txt", "111111111", {flag: "a"}, (err => {
    if (err){
        console.log(err);
    } else {
        console.log("success");
    }
}));
const fs = require("fs");

// 追加内容到文件
fs.appendFile("a.txt", "ggggg", (err => {
    if (err){
        throw err;
    }
    console.log("success");
}));
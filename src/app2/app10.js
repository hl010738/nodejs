const fs = require("fs");

//检查文件是否存在
fs.access("a.txt", err => {
    if (err){
        throw err;
    }
    console.log("success");
});
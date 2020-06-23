const fs = require("fs");

//获取文件的绝对路径
fs.realpath("a.txt", (err, resolvedPath) => {
    if (err){
        throw err;
    }
    
    console.log(resolvedPath);
});
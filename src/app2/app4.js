const fs = require("fs");


// 删除文件
fs.unlink("test.txt", (err => {
    if (err){
        console.log(err);
    } else {
        console.log("unlink success");
    }
}));

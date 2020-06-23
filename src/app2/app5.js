const fs = require("fs");

// 重命名文件
fs.rename("b.txt", "a.txt", (err => {
    if (err){
        throw err;
    } else {
        fs.stat("a.txt", (error, info) => {
            if (error){
                console.log(error);
            } else {
                console.log(JSON.stringify(info));
            }
        });
    }
}));

// 查看文件信息 由于nodejs是异步执行代码，此段代码可能失败
/*
fs.stat("aaa.txt", (error, info) => {
    if (error){
        console.log(error);
    } else {
        console.log(JSON.stringify(info));
    }
});
 */

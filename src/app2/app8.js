const fs = require("fs");

// 创建目录 recursive 属性指定可以创建多层目录，并且如果目录已经存在不会报错
fs.mkdir("dir/home/aaa", {recursive: true}, err => {
    if (err){
        throw err;
    }

    console.log("success");
});
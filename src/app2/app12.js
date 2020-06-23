const fs = require("fs");

//删除目录，默认情况下目录必须为空，如果需要递归删除目录，需要设置recursive 为 true
fs.rmdir("dir", {recursive: true}, err => {
    if (err){
        throw err;
    }

});
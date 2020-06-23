//打开文件
const fs = require("fs");

fs.open("test.txt", "r+", (error, fd) => {
    if(error){
        console.log(error);
    } else {
        console.log("open success");
        fs.close(fd, (err => {
            if (err){
                console.log(err);
            } else {
                console.log("close success");
            }
        }));
    }
});
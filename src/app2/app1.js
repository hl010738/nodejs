//读取文件
const fs = require("fs");

// 异步读取
fs.readFile("test.txt", "utf8",  (error, data) => {
    if (error){
        console.log(error.message);
    } else {
        console.log(data);
    }
});

// 同步读取
try {
    const data = fs.readdirSync("test.txt", "utf8");
} catch (e) {
    console.log(e);
}

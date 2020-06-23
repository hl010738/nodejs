const fs = require("fs");

//文件流写入
const readStream = fs.createReadStream("a.txt", {encoding: "utf8"});
const writeStream = fs.createWriteStream("b.txt", {encoding: "utf-8"});

readStream.on("data", chunk => {
    writeStream.write(chunk, (error) => console.log(chunk));
});
const fs = require("fs");

//文件流读取
const readStream = fs.createReadStream("a.txt", {encoding: "utf8"});

readStream.on("open", fd => console.log(fd));

readStream.on("ready", () => console.log("ready"));

readStream.on("data", chunk => console.log(chunk));

readStream.on("end", () => console.log("end"));

readStream.on("close", () => console.log("close"));

readStream.on("error", err => console.log(err));
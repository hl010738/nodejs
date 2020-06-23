const path = require("path");

// 路径拼接
const output = path.join(__dirname, "dir", "app13.js");

//截取扩展名
const ext = path.extname(output);

console.log(output);

console.log(ext);
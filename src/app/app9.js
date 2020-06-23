const url = require("url");

const str = url.resolve("http://www.test.com", "order");

console.log(str);
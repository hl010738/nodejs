const url = require("url");

const urlString = "https://www.test.com?orderId=1234";

const obj = url.parse(urlString);

console.log(obj);
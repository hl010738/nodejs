const querystring = require("querystring");

const str = "name=zhangsan&city=beijing";

const obj = querystring.parse(str);

console.log(obj);
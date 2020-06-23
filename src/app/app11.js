const querystring = require("querystring");

const obj = {
    name: "123",
    address: "abc"
};

const str = querystring.stringify(obj);

console.log(str);
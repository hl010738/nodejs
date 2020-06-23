const url = require("url");

const obj = {
    "protocol": 'https:',
    "host": 'www.test.com',
    "port": "80",
    "search": '?orderId=1234',
    "query": 'orderId=1234',
    "path": '/',
};

const str = url.format(obj);
console.log(str);
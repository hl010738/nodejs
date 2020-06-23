const http = require("http");

let responseData = "";

http.request({"host": "localhost", "port": "3000", "method": "GET",
"path": "/login?username=aaa&password=bbbb"}, function (response) {
    response.on("data", function (chunk) {
        responseData += chunk;
    });

    response.on("end", function () {
        console.log(responseData);
    });
}).end();
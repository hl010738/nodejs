const http = require("http");
const server = new http.Server();

// request 事件 表示有客户端请求连接
server.on("request", function (request, response) {
    let data = "";

    // 请求的data 事件表示 客户端正在传输数据
    request.on("data", function (chunk) {
        console.log("data event")
        data += chunk;
    });


    // 请求的 end事件表示 客户端数据传输完毕
    request.on("end", function () {

        console.log("end event");

        let method = request.method;
        let headers = JSON.stringify(request.headers);
        let httpVersion = request.httpVersion;
        let requestUrl = request.url;

        response.writeHead(200, {'Content-Type': 'text/html'});

        let responseData = method + ", " + headers + ", " + httpVersion + ", " + requestUrl;
        response.end(responseData);
        response.end("Hello node js");
    });


});

server.listen(3000, function (){
    console.log("Node server start on port 3000");
});
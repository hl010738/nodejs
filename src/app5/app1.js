const http = require("http");

const server = http.createServer();

//设置最大监听器数量
// 当监听器数量超过最大监听器数量时，报错：Possible EventEmitter memory leak detected.
server.setMaxListeners(2);


// 对同一个事件 添加多个监听器
const fun1 = (request, response) => {
    if (request.url === "/") {
        response.end("end");
    }
}

const fun2 = function (request, response) {
    console.log("fun2");
}

server.on("request", fun1);
server.on("request", fun2);
//server.on("request", (request, response) => console.log("test"));

// 移除监听器
//server.off("request", fun1);

server.listen(3000, () => {
    console.log("server up");
});
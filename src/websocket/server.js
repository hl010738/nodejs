// websocket服务器
const http = require("http");
const socketIO = require("socket.io");
const fs = require("fs");

const server = http.createServer((request, response) => {
    response.writeHead(200, {contentType: "text/html"});

    if (request.url === "/"){
        fs.readFile("./client.html", "utf8", (error, data) => {
            if (error){
                console.log(error);
                return;
            } else {
                response.end(data.toString());
            }
        });
    } else {
        response.end("<html><body>Error</body></html>")
    }
});

server.listen(3000, "localhost");

// 将 http server 升级为 web socket
const socket = socketIO.listen(server);

socket.on("connection", (socket) => {
    console.log("connected");

    socket.on("message", (message) => {
        console.log("client message: " + message);
    });

    socket.on("disconnect", () => {
        console.log("disconnected");
    });

    socket.send("send from server");

    // 发送自定义事件event1
    socket.emit("event1", "event1 with data");

    // 响应自定义事件event2
    socket.on("event2", (message) => {
        console.log("message of event2: " + JSON.stringify(message));
    });

    socket.on("broadcastClient", (data) => {
        console.log(data);
        // 广播推送消息
        socket.broadcast.emit("broadcastServer", "broadcastServer data");
    });


});
const http = require("http");

const server = http.createServer();


server.on("request", (request, response) => {
    if (request.url === "/") {
        response.end("end");
    }
});


server.listen(3000, () => {
    console.log("server up");
});


// 先开始侦听
server.on("event1", (p1, p2, p3) => {
    console.log(p2);
});

// 再发送事件
server.emit("event1", "1", "2", "3");
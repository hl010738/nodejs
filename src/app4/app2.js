const net = require("net");

// 网络模块
const server = net.createServer((socket) => {
    console.log("client connected");
    console.log(socket);
});

server.listen(8888);

server.on("listening", () => {
    console.log("server listening");
});
const net = require("net");

// 限制连接数
const server = net.createServer((socket) => {
    console.log("client connected");

    server.maxConnections = 2;

    server.getConnections((error,  count) => {
        console.log("count: " + count);
    });
});

server.listen(3000, () => {
    console.log("server listening");
});
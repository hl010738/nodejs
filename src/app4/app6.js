const net = require("net");

// 接受客户端发送的数据
const server = net.createServer((socket) => {
    socket.on("data",(data) => {
        console.log(data.toString());
    })
});

server.listen(3000);
const net = require("net");

const server = net.createServer((socket) => {
    const address = server.address();
    const message = "server address is " + JSON.stringify(address);

    // 向客户端 会写信息
    socket.write(message, () => {
        const writeSize = socket.bytesWritten;
        console.log(message);
        console.log("written size is " + writeSize);
    });

    // 接受客户端消息
    socket.on("data", (data) => {
        console.log(data.toString());

        const readSize = socket.bytesRead; // 这个参数是socket已使用的byte数

        console.log("data size is " + readSize);
    });
});

server.listen(3000, () => {
    console.log("server up");
});









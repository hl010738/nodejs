const net = require("net");

// 网络模块
const server = net.createServer((socket) => {
    console.log("client connected");
});

server.listen(3000, () => {
    const address = server.address();

    console.log(address.port + ", " + address.family + ", " + address.address);
});

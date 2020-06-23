//UDP 服务器
const dgram = require("dgram");

const message = Buffer.from("message from server");

const socket = dgram.createSocket("udp4", (msg, info) => {// info是客户端的参数
    socket.send(message, 0, message.length, info.port, info.address, (error, bytes) => {
        if (error){
            throw error;
        }
        console.log("server has send message bytes: " + bytes);
    });
});

socket.bind(3000, "localhost", () => {
    console.log("server up");
});

socket.on("message", (msg, info) => {// info 是客户端的参数
    console.log("client message: " + msg);
});



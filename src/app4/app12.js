// UDP 客户端
const dgram = require("dgram");

const message = Buffer.from("message from client");

const socket = dgram.createSocket("udp4");

socket.send(message, 0, message.length, 3000, "localhost", (error, bytes) => {
    if (error){
        throw error;
    }

    console.log("client has sent bytes: " + bytes);
});

socket.on("message", (msg, info) => {
    const writeback = "write back from client";
    socket.send(writeback, 0, writeback.length, 3000, "localhost");
});
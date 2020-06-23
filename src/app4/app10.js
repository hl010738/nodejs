const net = require("net");

// TCP客户端
const client = new net.Socket();

client.connect(3000, "localhost", () => {
    console.log("connected");
    client.write("message from client");
});

client.on("data", (data) => {
    console.log("message from server: " + data.toString());
    client.write("write back from client");
});

client.on("end", () => {
    console.log("end");
});
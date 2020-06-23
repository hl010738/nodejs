const net = require("net");

// socket 客户端
const client = new net.Socket();

client.connect(3000, "localhost", () => {
   console.log("connected");
});
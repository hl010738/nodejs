const http = require('http');

//这种方式是使用时间监听的方式创建服务器
const server = new http.Server();

server.on('request', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello node js')
});

server.listen(3000, function (){
    console.log('Node server start on port 3000');
});
const http = require('http');

const server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello node js')
});

server.listen(3000, 'localhost');


server.on('listening', function(){
    console.log('Server is listenning');
});

server.on('connection', function(){
    console.log('Client is connected');
    server.close();
});

server.on('close', function () {
    console.log('Server is closed');
});

console.log('Node server start on port 3000');


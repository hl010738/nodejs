const http = require("http");
const querystring = require("querystring");
const url = require("url");

const userService = require("./UserService");

const server = new http.Server();

server.on("request", function (request, response) {
    let data = "";

    request.on("data", function (chunk) {
        data += chunk;
    });

    request.on("end", function () {
        const requestUrl = request.url;
        const requestMethod = request.method;
        if (requestUrl.includes("login") && requestMethod === "GET"){
            const param = url.parse(requestUrl);
            const queryParam = querystring.parse(param.query);

            userService.login(queryParam.username, queryParam.password);

            response.writeHead(200, "text/plain");
            response.end("username: " + queryParam.username + ", password: " + queryParam.password);

        }
    });
});

server.listen(3000, function () {
    console.log("Server start up");
});
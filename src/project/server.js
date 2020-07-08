// 模拟最底层的服务端
// 接收来自app 端的请求
// 实际项目上这里可以是其他语言编写

const Koa = require("koa");
const koa = new Koa();

koa.use(context => {
    context.response.type = "application/json";
    const responseBody = {
        result: {
            code: 200,
            description: "success"
        }, data: {
           username: "aaa",
           password: "bbb",
           tel: 1111111
        }
    }

    context.body = JSON.stringify(responseBody);
});

koa.listen(4000);
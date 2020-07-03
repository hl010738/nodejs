// KOA 创建web服务器
const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
    // ctx == context
    // ctx封装了request和response
    ctx.body = "Koa";

    //ctx.body 等价 ctx.response.body
    // ctx.resp, ctx.req 是原生node的response和request
    // ctx.response, ctx.request 是Koa封装的response和request
    // 建议使用Koa封装的request和response，而不是原生的.
});

app.listen(3000);




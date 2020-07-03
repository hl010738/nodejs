// Koa 洋葱模型 函数调用链
const Koa = require("koa");
const app = new Koa();

app.use(async function func1(ctx, next) {
    console.log("func1 start");
    // 这里会调用func2 并等待返回
    await next();
    console.log("func1 end");
});

app.use(async function func2(ctx, next) {
    console.log("func2 start");
    // 这里会调用func3 并等待返回
    await next();
    console.log("func2 end");
});

app.use(async function func3(ctx, next) {
    console.log("func3 start");
    // 这里后面已经没有需要调用的函数，直接返回
    await next();
    console.log("func3 end");
});


app.use(async (ctx) => {
    ctx.body = "Koa";
});

app.listen(3000);
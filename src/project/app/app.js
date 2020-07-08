const Koa = require("koa");
const path = require("path");
const combineRouters = require("koa-combine-routers");
const bodyParser = require("koa-bodyparser");
const koaStatic = require("koa-static");
const koaCompress = require("koa-compress");

const app = new Koa();

const userRouter = require("../router/userRouter");

// 使用koa compress
app.use(koaCompress({
    // 数据量超过2048字节则压缩
    threshold: 2048
}));

// 使用body parser
app.use(bodyParser());

// 使用koa static 导入文件
// 将dist目录映射到主目录
// 访问时路径无须指定dist
// localhost:3000/index.html
app.use(koaStatic(path.join(__dirname, "../dist")));

const oneRouter = combineRouters(
    // 如果有多个router，则逐个添加
    userRouter
)();

// 这里则不需要改动
// 如果没有使用combine router
// 则需要将router逐个use
app.use(oneRouter);

// 不在这里启动服务器
// 导出后在启动脚本中调用
module.exports = app;

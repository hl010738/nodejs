const Router = require("@koa/router");
const userRouter = new Router();
const userController = require("../controller/userController");
const userServerUrlMappingResolver = require("../config/server/userServerUrlMappingResolver");

// 路由映射
// 将客户端来的post请求login对应的路径映射到controller的login方法上
// 实际项目中这里可以添加多条映射信息
userRouter.post(userServerUrlMappingResolver.login, userController.login);


module.exports = userRouter;
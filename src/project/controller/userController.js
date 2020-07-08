const qs = require("qs");
const baseHttpClient = require("../common/baseHttpClient");
const userRequestUrlMappingResolver = require("../config/client/userRequestUrlMappingResolver");

/*
一般response的结构
    {
        result:{
            code: 200,
            description: success
        }, data {
            username: "aaa",
            password: "bbb",
            ...
        }
    }
 */

class UserController {
    async login(ctx){

        // 获取node中间件作为客户端向后端发送请求的url
        const requestUrl = userRequestUrlMappingResolver.login;

        console.log(ctx.request.body);

        const response = await baseHttpClient.doPostHttpRequest(ctx, requestUrl, JSON.stringify(ctx.request.body));

        const responseData = qs.parse(response.data);

        const responseDataCode = responseData.result.code;

        if (0 === responseDataCode){
            // login成功之后的处理
            ctx.body = responseData;
        } else {
            // 不成功的处理
            ctx.body = responseData;
        }
    }
}

module.exports = new UserController();
require("../app/app").listen(3000);

console.log("server up");

/*
    启动服务器可以直接运行这个文件

    也可以使用npm脚本：
        方法是在package.json文件的scripts中配置如下key-value语句：
        "startKoaServer": "node src/project/script/startup"
        在cmd中执行命令 npm run startKoaServer
        则系统会执行startKoaServer对应的脚本
 */
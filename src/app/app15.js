const dns = require("dns");

const str = "www.qq.com";

// 从域名解析数组
dns.resolve(str, function (error, address) {
   if (error){
       console.log(error);
       return;
   }

   console.log(address);
});
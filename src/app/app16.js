const dns = require("dns");

const str = "114.114.114.114";

// 从IP地址解析域名
dns.reverse(str, function (error, address) {
    if (error){
        console.log(error);
        return;
    }

    console.log(address);
})
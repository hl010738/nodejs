const module2 = {
    info: {name: "zhangsan", age: 20},
    func: function (input) {
        return input + 5;
    }
};

//这两个exports等价

// 这种导出方式可以自定义名字
//exports.mod2 = module2;

// 这种导出方式更加方便
// 这种方式适合整个模块导出
module.exports = module2;

// 导出类
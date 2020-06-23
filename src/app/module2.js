const module2 = {
    info: {name: "zhangsan", age: 20}, func: function (input) {
        return input + 5;
    }
};

//exports.mod2 = module2;
module.exports = module2;

// 导出类
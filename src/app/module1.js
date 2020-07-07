const info = {name: "zhangsan", age: 18};

const myFunction = function (age) {
    return age + 5;
};

// 自定义名称
// 这种导出方式适合逐个元素导出
exports.aaa = info;
exports.bbb = myFunction;
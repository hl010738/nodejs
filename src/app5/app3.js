//自定义事件 多参数回调函数
const event = require("events");
const emitter = new event.EventEmitter();

emitter.on("ee", function func1() {
    console.log("func1");
});

emitter.on("ee", function func2(p1, p2) {
    console.log(`func2: param1: ${p1}, param2: ${p2}`);
});

emitter.on("ee", function func3(...param) {
    const value = param.join(", ");
    console.log(`func3: ${value}`);
});

console.log(emitter.listeners("ee"));

emitter.emit("ee", "1", "2", "3");


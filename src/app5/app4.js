const event = require("events");
const emitter = new event.EventEmitter();

// newListener 是 nodejs 内置事件
// 当有某个listener加入到某个事件的侦听中时就会触发.
emitter.once("newListener", (event, listener) => {
    if (event === "ev"){
        emitter.on("ev", () => {
            console.log("aaaaaaaa");
        });
    }
});

emitter.on("ev", () => {
    console.log("on");
});

emitter.emit("ev");
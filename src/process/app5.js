// 子进程
[1, 2, 3, 4, 5].forEach(i => {
    console.log(i);
});

// 使用process对象监听主进程发送给子进程的消息
process.on("message", message => {
    console.log(message);

    // 向主进程回传消息
    process.send("message from child process");
});



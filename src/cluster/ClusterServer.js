const cluster = require("cluster");
const http = require("http");
const os = require("os");

// 当前系统的cpu进程数
const cpuCount = os.cpus().length;

// 由系统命令启动运行代码的进程为master进程
// 由fork创建的子进程为worker进程
if (cluster.isMaster){
    for (let i = 0; i < cpuCount; i++){
        // 根据CPU进程数创建子进程
        // 当fork创建是没有指定命令
        // 则每个子进程都要执行当前的文件中的所有代码
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {

        // 输出每一个子进程的pid
        console.log(worker.pid);
    });
} else {

    // 每个fork创建的子进程都会创建一个http服务器
    const httpServer = http.createServer((req, res) => {
        let data = "";

        req.on("data", chunk => data += chunk);

        req.on("end", () => {

            res.writeHead(200, {"Content-Type": "text/plain"});

            res.end(`${process.pid}`);
        });
    });

    // master-worker 模式下，每个fork子进程并不会实际监听3000端口
    // 3000端口实际上是由master进程监听
    // master进程接收到请求后，委派给一个worker子进程处理
    httpServer.listen(3000, () => console.log("Server up"));
}
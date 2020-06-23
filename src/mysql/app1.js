// 操作mysql
const mysql = require("mysql");
const uuid = require("uuid");

const connection = mysql.createConnection({host: "localhost", user: "root", password: "root", database: "test"});

connection.connect((error) => {
    if (error){
        throw error;
    } else {
        console.log("connected");
        // connection.end(); 正常关闭连接，等待全部语句执行完毕
        // connection.destroy(); 强制关闭连接，不会等待

        const userId = uuid.v1();
        const username = "aaa";
        const age = 20;
        const address = "bbb";

        // node 操作数据库的所有动作都使用query函数
        connection.query("insert into users set ?", {
            // node 会自动将数据库列名与参数的key自动匹配
            // 例如：username 就是列名
            id: userId,
            username: username,
            age: age,
            address: address
        }, (error, result) => {
            if (error){
                throw error;
            } else {
                console.log(result);

                connection.query("select * from users", (error, result) => {
                    if (error){
                        throw error;
                    } else {
                        console.log(result)
                        connection.end((error) => {
                            if (error){
                                throw error;
                            } else {
                                console.log("connection closed");
                            }
                        });
                    }
                })
            }
        });
    }
});
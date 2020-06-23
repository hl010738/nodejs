const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/mytest";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (error){
        throw error;
    } else {
        console.log("connected");

        //定义 模式
        const parentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            address: String
        });

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            address: String,
            married: Boolean,
            parent: parentSchema
        });

        // 注册数据模式
        mongoose.model("student", studentSchema);

        // 创建一个mongoose 数据类
        const Student = mongoose.model("student");

        // 创建一个实例并设置数据
        const student = new Student({
            name: "zhangsan",
            age: 20,
            address: "beijing",
            married: true,
            parent: {
                name: "ffff",
                age: 22,
                address: "shanghai"
            }
        });

        // 插入数据
        student.save((error) => {
            if (error) {
                throw error;
            } else {
                console.log("insert success");

                //查询
                Student.find({}, (error, data) => { // 查询所有记录
                    if (error){
                        throw error;
                    } else {
                        console.log(data);

                        // 遍历结果集
                        data.forEach(d => {
                            d.remove(); // 删除一条记录
                        });

                        mongoose.connection.close(); // 关闭链接
                    }
                });
            }
        });
    }
});
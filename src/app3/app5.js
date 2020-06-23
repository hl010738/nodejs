const b = Buffer.from("哈哈哈哈");

// 将buffer 转换为 json string
const jsonString = JSON.stringify(b);

console.log(jsonString);

// 将 json string 转换为 json object
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

// 将 json object 转换为 buffer
const buffer = Buffer.from(jsonObject);

console.log(buffer.toString());
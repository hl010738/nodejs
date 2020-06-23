// buffer拼接
const buffer1 = Buffer.from("aaa");
const buffer2 = Buffer.from("bbb");
const buffer3 = Buffer.from("你好");

const array = [buffer1, buffer2, buffer3];

const length = buffer1.length + buffer2.length + buffer3.length;

const result = Buffer.concat(array, length);

console.log(result.length);

console.log(result.toString());
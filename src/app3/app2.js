const buffer1 = Buffer.from("11111");
const buffer2 = Buffer.from("aaaa");

// buffer比较
const result = Buffer.compare(buffer1, buffer2);

console.log(result);
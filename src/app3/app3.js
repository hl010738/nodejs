const buffer = Buffer.alloc(3);

// buffer转换为字符串

buffer[0] = 65;
buffer[1] = 66;
buffer[2] = 67;

console.log(buffer.toString());
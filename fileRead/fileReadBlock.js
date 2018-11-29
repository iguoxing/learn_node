var fs = require("fs");
var fs = require("fs");

var data = fs.readFileSync('input.txt');

// 执行的文件命令
// node fileReadBlock.js
console.log(data.toString());
console.log("程序执行结束!");
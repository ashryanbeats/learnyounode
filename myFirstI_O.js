var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var splitStr = str.split("\n");
var len = splitStr.length - 1;


console.log(len);
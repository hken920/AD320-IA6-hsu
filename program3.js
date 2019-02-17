var fs = require('fs');
var input = fs.readFileSync(process.argv[2]);
var output = input.toString();

console.log(output.split("\n").length -1);

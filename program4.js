var fs = require('fs');
var input = process.argv[2];

function callback(err, data){
  var output = data.toString();
  console.log(output.split("\n").length -1);
}

fs.readFile(input, 'utf8', callback);

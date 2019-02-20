var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var fileType = "." + process.argv[3];

function output(file){
  if(path.extname(file) === fileType){
    console.log(file);
  }
}

function callback(err, list){
  list.forEach(output);
}

fs.readdir(file, callback);

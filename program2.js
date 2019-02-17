var sum = 0;
var len = Number(process.argv.length);

// console.log(sum + " " + len);

for(var i = 2; i < len; i++) {
 sum += (Number(process.argv[i]));
}

console.log(sum);

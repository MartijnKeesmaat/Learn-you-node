var fs = require('fs');
const filePath = process.argv[2];
let output = fs.readFileSync(filePath);
output = output.toString().split('\n')
console.log(output.length - 1);
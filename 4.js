var fs = require('fs');
const filePath = process.argv[2];

let output = fs.readdir(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});
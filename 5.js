// My solution, runs well, but doesn't pass the test
// const fs = require('fs');
// const dirPath = process.argv[2];
// const extension = process.argv[3];
// const re = /(?:\.([^.]+))?$/;

// let output = fs.readdir(dirPath, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data.filter(x => re.exec(x)[1] == extension));
// });


// Other solution
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3]) console.log(file)
  })
})
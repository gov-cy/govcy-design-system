//get a reference to the file system module
var fs = require('fs');

//get a reference to the uglify-js module
var UglifyJS = require('uglify-js');

//get a reference to the minified version of file-1.js, file-2.js and file-3.js
var result = UglifyJS.minify([
  fs.readFileSync("./build/js/main.js", "utf8"),
  fs.readFileSync('./build/js/app.js', "utf8")
]);

//view the output
console.log(result.code);

fs.writeFile('./dist/js/app.min.js', result.code, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('File was successfully saved..');
  }
}); 
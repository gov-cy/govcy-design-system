import fs from 'fs';

//get a reference to the uglify-js module
import  UglifyJS from 'uglify-js';

//get a reference to the minified version of js files
let result = UglifyJS.minify([
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
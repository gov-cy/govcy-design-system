const fs = require('fs');
const path = require('path');

const uglifyJS = require('uglify-js');
const fileNames = fs.readdirSync('./build/js');

let filesContents = fileNames.map(function (file) {
  return fs.readFileSync('./build/js/'+file, 'utf8');
})

let result = uglifyJS.minify(filesContents);

console.log(result.code);

fs.writeFile('./dist/js/app.min.js', result.code, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('File was successfully saved..');
  }
}); 
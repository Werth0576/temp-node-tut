const path = require('path');

console.log(path.sep);
//create constant path -> join. then each step in the file path is in quotes and seperated by commas.


const filePath = path.join('\content','subfolder','test.txt');

// console log the output

console.log(filePath);

//just grabs the base name

const base = path.basename(filePath)

console.log(base);


//path resolve gives us the absolute path to the file, on what ever machine i is running on.


const resolve = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(resolve);


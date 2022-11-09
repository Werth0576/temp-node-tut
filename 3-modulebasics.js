// Module

const names = require('./4-names')

console.log(names);
require ('./7-mind')

const sayHi = require('./5-utils');
//require requests from other files
const data = require('./6-alternative-flavors');
console.log(data);


sayHi('susan');
sayHi(names.john);
sayHi(names.peter); 

//every file in js is a module



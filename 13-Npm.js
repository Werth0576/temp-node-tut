// npn - global command, comes with node
// pm --version

//local dependecy - use it only in this particular project
//npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
//

// package.json - manifest file (stores important info about project/package)
// manual approach (creat package.json in te root, creat propertied etc)
//npm init (step by step, press enger to skip)
//npm init -y (everything default)

//insall the package
const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items)
//print result
console.log(newItems);



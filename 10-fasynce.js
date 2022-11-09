//asyncronousely - non blockin
// syncronousely - blocking

// different flavors of modules access.

// 4 methods.

const{readFileSync, writeFileSync} = require('fs');
// file path 1st ./ for current directory. full path initially after comma is encoding type .
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//read out

// creat new file. if the file is already thre it wlll re write, if it is not it will create the file/.

writeFileSync(
    './content/result-sync.txt',`Here is the result ${second} and also ${first}`,
    {flag: 'a'}
    );
//read file we just wrote to
console.log(`i'm done with this task`);
console.log(`im staring the next one`);




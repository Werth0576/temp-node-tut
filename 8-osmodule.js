// os module
// good for interacting wit operating system and servers

const os = require('os');
// os is built in,  does no requie ./

// info abou curent use

const usr = os.userInfo();
//get user upime in seconds only using console..log
console.log(`the system uptime is ${os.uptime}`);

//prints out const user info
console.log(usr);

const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
};
console.log(currentos);

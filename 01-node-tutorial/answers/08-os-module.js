const os = require('os') // this is a built in module - no '.' needed

// info about the current user
const user = os.userInfo()
console.log(user);

// method returns the system up time in seconds
console.log(os.uptime()/(3600*24));

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);
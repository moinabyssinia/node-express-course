// modules
// CommonJS, every file is module by default 
    // every file is a module in Node 
// Modules, encapsuslted code (only share minimum)

// start with './' when importing modules - unless 
// they are 2 or 3 folders up
const names = require('./04-names')
const func = require('./05-utils')

console.log(names);


func(names[0])
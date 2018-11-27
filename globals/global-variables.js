// GLOBAL variable in node.js is 'global', while in browser it is 'window'.
const path = require('path');

// Directory Name:
console.log(__dirname);
// The directory name of the current module. This is the same as the path.dirname() of the __filename
// console.log(path.dirname(__filename));


// File Name:
console.log(__filename);

// The file name of the current module. This is the resolved absolute path of the current module file.
// For a main program this is not necessarily the same as the file name used in the command line.
// Given two modules: a and b, where b is a dependency of a and there is a directory structure of:
// /Users/mjr/app/a.js
// /Users/mjr/app/node_modules/b/b.js
// References to __filename within b.js will return /Users/mjr/app/node_modules/b/b.js while references to __filename within a.js will return /Users/mjr/app/a.js.
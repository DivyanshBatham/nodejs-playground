// Importing fs (file system module), no need to do `npm install fs`
var fs = require('fs');

// Reading a File:

// Asynchronous File Read:
    // SYNTAX:
    // fs.readFile(path[, options], callback)
        // path <string> | <Buffer> | <URL> | <integer> filename or file descriptor</Buffer>
        // options <Object> | <string>
            // encoding <string> | <null> Default: null
            // flag <string> See support of file system flags. Default: 'r'.
        // callback <Function>
            // err <Error>
            // data <string> | <Buffer>

console.log("readFile [start]");
fs.readFile('file1.txt', 'utf8', (err, data) => {
    if (err) throw err; // or console.error(err);
    console.log(data);
})
console.log("readFile [end]");


// Synchronous File Read:
    // SYNTAX:
    // fs.readFileSync(path[, options])
        // path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
        // options <Object> | <string>
            // encoding <string> | <null> Default: null
            // flag <string> See support of file system flags. Default: 'r'.
        // Returns: <string> | <Buffer>

console.log("readFileSync [start]");

try {
    let fileContents = fs.readFileSync('file1.txt', 'utf8'); // readFileSync returns the string or buffer (contents of file)
    console.log(fileContents);
} catch(err) {
    // console.error(err); // This just logs the error to console and continues the execution.
    throw err; // This throws the error to console and stops the execution.
}

console.log("readFileSync [end]");

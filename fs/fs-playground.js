// Importing fs (file system module), no need to do `npm install fs`
var fs = require('fs');

// Writing in a File:

// Asynchronous File Write:
    // SYNTAX:
    // fs.writeFile(file, data[, options], callback)
        // file <string> | <Buffer> | <URL> | <integer> filename or file descriptor
        // data <string> | <Buffer> | <TypedArray> | <DataView>
        // options <Object> | <string>
            // encoding <string> | <null> Default: 'utf8'
            // mode <integer> Default: 0o666
            // flag <string> See support of file system flags. Default: 'w'.
        // callback <Function>
            // err <Error>

console.log("writeFile [start]");
fs.writeFile('file1.txt', 'utf8', (err, data) => {
    if (err) throw err; // or console.error(err);
    console.log(data);
})
console.log("writeFile [end]");


// Synchronous File Write:
    // SYNTAX:
    // fs.writeFileSync(path[, options])
        // path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
        // options <Object> | <string>
            // encoding <string> | <null> Default: null
            // flag <string> See support of file system flags. Default: 'r'.
        // Returns: <string> | <Buffer>

console.log("writeFileSync [start]");

try {
    let fileContents = fs.writeFileSync('file1.txt', 'utf8'); // writeFileSync returns the string or buffer (contents of file)
    console.log(fileContents);
} catch(err) {
    // console.error(err); // This just logs the error to console and continues the execution.
    throw err; // This throws the error to console and stops the execution.
}

console.log("writeFileSync [end]");

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

// let t = 0;
// const myWriteStream = fs.createWriteStream(__dirname + '/test.txt');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    let myReadStream = fs.createReadStream(__dirname + '/test.txt', 'utf8');

    // setInterval(() => {
    //     // myWriteStream.write(t);
    //     // myReadStream.pipe(res);
    //     // t++;
    //     console.log("Called");
    // }, 1000);
    
    myReadStream.on('data', (chunk)=> {
        res.write(chunk);
    })    
        // myReadStream.pipe(res);
})

server.listen(port, hostname, () => {
    console.log(`Server started on http://${hostname}:${port}`);
})
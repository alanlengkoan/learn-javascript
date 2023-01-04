const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.info(req.method);
//     console.info(req.url);

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     const reader = fs.createReadStream("./file/read.txt", "utf8");

//     // res.setHeader('Content-Type', 'text/html');
//     // const reader = fs.createReadStream("./file/index.html", "utf8");

//     reader.pipe(res);
// });


// server.listen(8001, 'localhost', () => {
//     console.info(`Server started`);
// });




// declare function callback for server
function serverCallback(req, res) {
    console.info(req.method);
    console.info(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const reader = fs.createReadStream("./http/file/read.txt", "utf8");

    reader.pipe(res);
}

http.createServer(serverCallback).listen(8001, 'localhost', () => {
     console.info(`Server started`);
});
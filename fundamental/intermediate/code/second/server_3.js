const http = require('http');

const server = http.createServer((request, response) => {
    const method = request.method;
    const url = request.url;

    console.info(method);
    console.info(url);

    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.end('Hello, World!');
});

const port = 8080;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
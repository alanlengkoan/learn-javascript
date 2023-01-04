const http = require('http');

const requestListener = function (request, response) {
    const { method } = request;
    const { url } = request;

    console.info(method);
    console.info(url);

    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.end('Hello, World!');
}

const server = http.createServer(requestListener);

const port = 8080;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
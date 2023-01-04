const http = require('http');

function requestListener(request, response) {
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);

    const method = request.method;
    const url = request.url;

    console.info(method);
    console.info(url);

    // curl -X GET http://localhost:8080
    if (method === 'GET') {
        response.end(`<h1>ini request ${request.method}</h1>`);
    }

    // curl -X POST http://localhost:8080
    if (method === 'POST') {
        response.end(`<h1>ini request ${request.method}</h1>`);
    }

    // curl -X PUT http://localhost:8080
    if (method === 'PUT') {
        response.end(`<h1>ini request ${request.method}</h1>`);
    }

    // curl -X DELETE http://localhost:8080
    if (method === 'DELETE') {
        response.end(`<h1>ini request ${request.method}</h1>`);
    }
}

const server = http.createServer(requestListener);

const port = 8080;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
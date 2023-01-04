const http = require('http');

function requestListener(request, response) {
    response.setHeader("Content-Type", "application/json");
    response.setHeader('X-Powered-By', 'NodeJS');

    const method = request.method;
    const url = request.url;

    if (url === '/') {
        // curl -X GET http://localhost:8080
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request.`,
            }));
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            // curl -X GET http://localhost:8080/about
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if (method === 'POST') {
            // curl -X POST -H "Content-Type: application/json" http://localhost:8080/about -d "{\"name\": \"Alan Lengkoan\"}"
            response.statusCode = 200;
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {
                    name
                } = JSON.parse(body);
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about.`,
                }));
            });
        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request.`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
}

const server = http.createServer(requestListener);

const port = 8080;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
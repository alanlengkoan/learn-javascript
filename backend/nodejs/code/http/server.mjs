import http from 'http';
import { dummyModule } from './json/dummy.mjs';

const server = http.createServer((req, res) => {
    console.info(req.method);
    console.info(req.url);

    if (req.method === 'POST') {
        res.on('data', (data) => {
            res.setHeader('Content-Type', 'application/json');
            res.write(data);
            res.end();
        });
    } else {

        switch (req.url) {
            case '/':
                res.write('halaman home');
                break;
            case '/alan':
                res.write('halaman alan');
                break;
            case '/data':
                res.write(JSON.stringify(dummyModule.data));
                break;

            default:
                break;
        }
        res.end();
    }
});


server.listen(8000, 'localhost', () => {
    console.info(`Server started`);
});
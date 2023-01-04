import cluster from 'cluster';
import http from 'http';
import os from 'os';
import process from 'process';

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.id} died`);
        cluster.fork();
    });
}

if (cluster.isWorker) {
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`hello world from worker ${process.pid}`);
        process.exit();
    });

    server.listen(8000);
    console.log(`Worker ${process.pid} started`);
}
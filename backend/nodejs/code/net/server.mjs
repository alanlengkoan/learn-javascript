import net from 'net';

const server = net.createServer((client) => {
    console.info(`Client connected`);

    client.on("data", (data) => {
        console.info(`Data received: ${data.toString()}`);

        client.write(`Congrats Hello: ${data.toString()}\r\n`);
    });
});

server.listen(3000, 'localhost', () => {
    console.info(`Server started`);
});
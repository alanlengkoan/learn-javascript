const Hapi = require('@hapi/hapi');
const myRoute = require('./routes');

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    server.route(myRoute);

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

init();
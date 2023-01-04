import https from 'https';

const username = 'alanlengkoan';

const options = {
    host: 'api.github.com',
    path: '/users/' + username + '/repos',
    method: 'GET',
    headers: {
        'user-agent': 'node.js'
    }
};

const req = https.request(options, (res) => {
    console.info('request completed!');
    console.info('statusCode:', res.statusCode);
    console.info('headers:', res.headers);

    let data = '';

    res.on('data', (d) => {
        data = data + d.toString();
    });

    res.on('end', (d) => {
        const body = JSON.parse(data);
        console.log(`id : ${body[0].id}`);
        console.log(`node_id : ${body[0].node_id}`);
        console.log(`name : ${body[0].name}`);
        console.log(`full_name : ${body[0].full_name}`);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
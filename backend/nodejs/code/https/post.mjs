import https from 'https';

const endPoint = 'https://hookb.in/xYzXGmP2Wrf0BYZ0JlB0';

const req = https.request(endPoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
}, (res) => {
    console.info('request completed!');
    console.info('statusCode:', res.statusCode);
    console.info('headers:', res.headers);

    res.on('data', (data) => {
        console.log(data.toString());
    });
});

const body = JSON.stringify({
    firstName: 'Alan',
    lastName: 'Lengkoan',
    age: 24
});

req.write(body);
req.end();
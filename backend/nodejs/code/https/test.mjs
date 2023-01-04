import https from 'https';

  var urlWakatime = 'https://wakatime.com/share/@alanlengkoan/20e9ebcc-0a44-4ef4-afc4-5fae1df3f56d.json'; ;

const req = https.request(urlWakatime, (res) => {
    console.info('request completed!');
    console.info('statusCode:', res.statusCode);
    console.info('headers:', res.headers);

    let data = '';

    res.on('data', (d) => {
        data = data + d.toString();
    });

    res.on('end', (d) => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
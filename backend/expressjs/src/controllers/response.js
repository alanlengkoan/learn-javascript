const statusCodeTest = (req, res) => {
    if (req.query.name) {
        res.status(200).send(`Hello ${req.query.name}`);
    } else {
        res.status(400).end();
    }
};

const responseHeaderTest = (req, res) => {
    res.set({
        'X-Powered-By': 'Express',
        'X-Author': 'Alan Lengkoan'
    }).end();
};

const responseBodyTest = (req, res) => {
   res.set('Content-Type', 'text/html').send('<h1>Hello World</h1>');
};

const responseRedirectTest = (req, res) => {
   res.redirect('https://alanlengkoan.com');
};

export {
    statusCodeTest,
    responseHeaderTest,
    responseBodyTest,
    responseRedirectTest
};
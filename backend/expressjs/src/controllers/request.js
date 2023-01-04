const requestTest = (req, res) => {
    res.send(`Hai`);
};

const queryParamTest = (req, res) => {
    if (req.query.lastName === undefined) {
        res.send(`Hello ${req.query.firstName}`);
    } else {
        res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
    }
};

const urlTest = (req, res) => {
    res.json({
        path: req.path,
        hostname: req.hostname,
        protocol: req.protocol,
        baseUrl: req.baseUrl,
        originalUrl: req.originalUrl,
        secure: req.secure,
    });
};

const headerTest = (req, res) => {
    const type = req.get("Accept");
    res.send(`Content-Type: ${type}`);
};

export {
    requestTest,
    queryParamTest,
    urlTest,
    headerTest
};
import express from "express";

import router from "./src/routes/routes.js";

const app = express();

// untuk routes
app.use(router);
const port = 3000;
const host = "localhost";

app.listen(port, host, () => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`);
});
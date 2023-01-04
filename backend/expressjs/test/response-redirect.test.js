import express from "express";
import request from "supertest";

// untuk import router
import router from "../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /response-redirect", async () => {
    const response = await request(app).get("/response-redirect");
   
    expect(response.status).toBe(302);
    expect(response.get('Location')).toBe('https://alanlengkoan.com');
});
import express from "express";
import request from "supertest";

// untuk import router
import router from "../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /response-body", async () => {
    const response = await request(app).get("/response-body");
   
    expect(response.get('Content-Type')).toContain('text/html');
    expect(response.text).toBe('<h1>Hello World</h1>');
});
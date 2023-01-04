import express from "express";
import request from "supertest";

// untuk import router
import router from "../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /status-code", async () => {
    const response = await request(app).get("/status-code").query({ name: "Alan Lengkoan" });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello Alan Lengkoan");

    const response2 = await request(app).get("/status-code");
    expect(response2.statusCode).toBe(400);
});
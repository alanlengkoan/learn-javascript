import express from "express";
import request from "supertest";

// untuk import router
import router from "../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /response-header", async () => {
    const response = await request(app).get("/response-header").query({ name: "Alan Lengkoan" });
    
    expect(response.get('X-Powered-By')).toBe('Express');
    expect(response.get('X-Author')).toBe('Alan Lengkoan');
});
import express from "express";
import request from "supertest";

// untuk import router
import router from "../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /header", async () => {
    const response = await request(app).get("/header").set("Accept", "plain/text");
    expect(response.text).toBe("Content-Type: plain/text");
});

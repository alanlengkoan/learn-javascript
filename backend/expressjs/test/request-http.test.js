import express from "express";
import request from "supertest";

// untuk import router
import router from "./../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /query?firstName=world", async () => {
    const response = await request(app).get("/query").query({ firstName: "world" });
    expect(response.text).toBe("Hello world");
});
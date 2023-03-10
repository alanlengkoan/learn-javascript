import express from "express";
import request from "supertest";

// untuk import router
import router from "../src/routes/routes.js";

const app = express();

app.use(router);

test("GET /query?firstName=Alan&lastName=Lengkoan", async () => {
    const response = await request(app).get("/query").query({ firstName: "Alan", lastName: "Lengkoan" });
    expect(response.text).toBe("Hello Alan Lengkoan");
});
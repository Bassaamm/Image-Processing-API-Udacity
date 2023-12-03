import request from "supertest";
import { app } from "../../index";
import fs from "fs";
import { randomInt } from "crypto";

describe("Testing main app routes", () => {
  it("GET /api should return Page not found because /api does not exist", async () => {
    const res = await request(app).get("/api");
    expect(res.status).toEqual(404);
  });

  it("GET / should return 200 because page exist ", async () => {
    const res = await request(app).get("/");
    expect(res.status).toEqual(200);
  });
});
describe("Test processing the image", () => {
  it("a new photo should be created when processing the image", async () => {
    const filename = "encenadaport";
    const width = randomInt(1000);
    const height = randomInt(1000);
    const callPath = `/api/img?filename=${filename}&width=${width}&height=${height}`;
    const resizedImagePath = `assets/thumb/${filename}-${width}-${height}.jpg`; // change this to your actual file path

    await request(app).get(callPath).expect(200);
    expect(fs.existsSync(resizedImagePath)).toBeTruthy();
  });
});

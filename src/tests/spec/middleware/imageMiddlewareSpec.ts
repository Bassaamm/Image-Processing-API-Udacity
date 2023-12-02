import request from "supertest";
import express, { Express } from "express";
import fs from "fs";
import { imageMiddleware } from "../../../middleware/imageMiddleware"; // replace with your actual file path

describe("Testing imageMiddlewasre", () => {
  let app: Express;
  let filename = "encenadaport";
  const width = 300;
  let height = 300;
  beforeEach(() => {
    app = express();
    app.use(imageMiddleware);
    app.get(
      `/api/img?filename=${filename}&width=${width}&height=${height}`,
      (req, res) => res.status(200).send("OK"),
    );
  });

  it("should return an error if the filename is not provided", async () => {
    const res = await request(app).get(
      `/api/img?width=${width}&height=${height}`,
    );
    expect(res.status).toBe(500);
  });

  it("should return an error if the numbers is not positive", async () => {
    height = -300;
    const res = await request(app).get(
      `/api/img?filename=${filename}&width=${width}&height=${height}`,
    );
    expect(res.status).toBe(500);
  });

  it("should return an error if the file does not exist", async () => {
    filename = "aaa";
    const res = await request(app).get(
      `/api/img?filename=${filename}&width=${width}&height=${height}`,
    );
    const find = fs.existsSync(`assets/full/${filename}.jpg`);
    expect(res.status).toBe(500);
    expect(find).toBeFalsy();
  });
});

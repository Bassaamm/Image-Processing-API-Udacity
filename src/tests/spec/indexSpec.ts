import supertest from "supertest";
import { app } from "../../index";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe("Testing main app routes", () => {
  it("GET /api should return Page not found because /api does not exist", async () => {
    const res = await request.get("/api");
    expect(res.status).toEqual(404);
  });

  it("GET / should return 200 because page exist ", async () => {
    const res = await request.get("/");
    expect(res.status).toEqual(200);
  });
});

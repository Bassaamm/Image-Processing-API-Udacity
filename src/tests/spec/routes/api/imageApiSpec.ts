import supertest from "supertest";
import { app } from "../../../../index";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

it("expecting a params from the request object", async () => {
  const res = request.get("/api");
  expect((await res).status).toEqual(404);
});

import request from "supertest";

import app from "../src/app";

// TODO: fix test from basic tests
describe("GET /api/v1/translate", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/v1/translate")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "API - 👋🌎🌍🌏",
        },
        done
      );
  });
});

import { setupApp } from "../../app";
import { Express } from "express";
import request from "supertest";

describe("Pokemon Routes", () => {
  let app: Express;

  beforeAll(async () => {
    app = await setupApp();
  });

  describe("GET /pokemon/:name/abilities", () => {
    test("Should return 200 and abilities sorted", async () => {
      await request(app)
        .get("/api/v1/pokemon/bulbasaur/abilities")
        .expect({ abilities: ["chlorophyll", "overgrow"] });
    });
  });
});

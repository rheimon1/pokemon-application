import express, { Express } from "express";
import pokemonRoutes from "./routes/v1/pokemon";
import cors from "cors";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  pokemonRoutes(app);
  return app;
};

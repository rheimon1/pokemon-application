import express, { Express } from "express";
import pokemonRoutes from "./routes/v1/pokemon";

export const setupApp = async (): Promise<Express> => {
  const app = express();
  app.use(express.json());
  pokemonRoutes(app);
  return app;
};

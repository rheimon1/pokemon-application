import { Request, Response, Express, Router } from "express";
import { makePokemonController } from "../../factories/controllers/pokemonControllerFactory";

export default (app: Express): void => {
  const router = Router();
  app.use("/api/v1", router);
  router.get("/pokemon/:name/abilities", (req: Request, res: Response) =>
    makePokemonController().getAbilitiesByName(req, res)
  );
};

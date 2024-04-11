import { PokemonController } from "../../controllers/PokemonController";
import { makePokemonService } from "../services/pokemonServiceFactory";

export const makePokemonController = (): PokemonController => {
  return new PokemonController(makePokemonService());
}
import { PokemonService } from "../../services/PokemonService";

export const makePokemonService = (): PokemonService => {
  return new PokemonService();
}
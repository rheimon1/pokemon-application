import { Request, Response } from "express";
import { PokemonService } from "../services/PokemonService";

export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  async getAbilitiesByName(req: Request, res: Response) {
    const { name } = req.params;
    try {
      const abilities = await this.pokemonService.getPokemonAbilitiesByName(
        name
      );
      return res.status(200).json({ abilities });
    } catch (error: any) {
      if (error.message === "Pokémon not found") {
        return res.status(404).json({ error: "Pokémon not found" });
      } else {
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  }
}

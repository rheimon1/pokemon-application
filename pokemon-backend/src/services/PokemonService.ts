import axios from "axios";
import { PokemonPokeAPI } from "../interfaces/pokemon";

export class PokemonService {
  async getPokemonAbilitiesByName(pokemonName: string): Promise<string[]> {
    try {
      const { data, status } = await axios.get<PokemonPokeAPI>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if (status === 200 && data.abilities && data.abilities.length > 0) {
        const abilities = data.abilities.map((ability) => ability.ability.name);
        const sortedAbilities = abilities.sort((a, b) => a.localeCompare(b));
        return sortedAbilities;
      }
      return [];
    } catch (error: any) {
      if (error?.response?.status === 404) {
        throw new Error("Pokémon not found");
      }
      console.error("Error fetching Pokémon abilities from PokeAPI:", error);
      throw new Error("Failed to fetch Pokémon abilities from PokeAPI");
    }
  }
}

export namespace PokemonService {
  export type GetPokemonAbilitiesByNameOutput = {
    success: boolean;
    data: string[];
  };
}

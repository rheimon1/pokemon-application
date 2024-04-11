import axios from "axios";
import { PokemonService } from "./PokemonService";

jest.mock("axios");

describe("Pokemon Service", () => {
  let sut: PokemonService;
  let fakeAxios: jest.Mocked<typeof axios>;

  beforeAll(() => {
    fakeAxios = axios as jest.Mocked<typeof axios>;
    fakeAxios.get.mockResolvedValue({
      status: 200,
      data: {
        abilities: [
          {
            ability: { name: "C" },
          },
          {
            ability: { name: "B" },
          },
          {
            ability: { name: "A" },
          },
        ],
      },
    });
  });

  beforeEach(() => {
    sut = new PokemonService();
  });

  describe("getPokemonAbilitiesByName", () => {
    let pokemonName = "any_pokemon_name";

    it("should call axios correctly", async () => {
      const pokemonName = "ANY_POKEMON_NAME";
      const result = await sut.getPokemonAbilitiesByName(pokemonName);

      expect(fakeAxios.get).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon/any_pokemon_name"
      );
      expect(fakeAxios.get).toHaveBeenCalledTimes(1);
      expect(result).toEqual(["A", "B", "C"]);
    });

    it("should return an empty array if pokemon has no abilities", async () => {
      fakeAxios.get.mockResolvedValueOnce({
        status: 200,
        data: {
          abilities: [],
        },
      });

      const result = await sut.getPokemonAbilitiesByName(pokemonName);

      expect(result).toEqual([]);
    });

    it("should throw if axios throws", async () => {
      fakeAxios.get.mockRejectedValueOnce('get_error');

      const promise = sut.getPokemonAbilitiesByName(pokemonName);

      await expect(promise).rejects.toThrow(
        "Failed to fetch Pokémon abilities from PokeAPI"
      );
    });

    it("should throw if axios returns 404", async () => {
      fakeAxios.get.mockRejectedValueOnce({ response: { status: 404 } } as any);

      const promise = sut.getPokemonAbilitiesByName(pokemonName);

      await expect(promise).rejects.toThrow("Pokémon not found");
    });
  });
});

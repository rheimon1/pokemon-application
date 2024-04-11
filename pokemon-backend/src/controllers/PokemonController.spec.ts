import { Request, Response } from "express";
import { PokemonService } from "../services/PokemonService";
import { PokemonController } from "./PokemonController";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { MockProxy, mock } from "jest-mock-extended";

describe("PokemonController", () => {
  let sut: PokemonController;
  let pokemonServiceSpy: MockProxy<PokemonService>;
  let req: Request;
  let res: Response;

  beforeEach(() => {
    pokemonServiceSpy = mock();
    pokemonServiceSpy.getPokemonAbilitiesByName.mockResolvedValue([
      "ability_a",
      "ability_b",
      "ability_c",
    ]);
    sut = new PokemonController(pokemonServiceSpy);
  });

  describe("getAbilitiesByName", () => {
    beforeAll(() => {
      req = getMockReq({
        params: {
          name: "any_name",
        },
      });
      res = getMockRes().res;
    });

    it("should call PokemonService with correct input", async () => {
      await sut.getAbilitiesByName(req, res);

      expect(pokemonServiceSpy.getPokemonAbilitiesByName).toHaveBeenCalledWith(
        "any_name"
      );
      expect(pokemonServiceSpy.getPokemonAbilitiesByName).toHaveBeenCalledTimes(
        1
      );
    });

    it("should return status code 200 and abilities ordered on success", async () => {
      await sut.getAbilitiesByName(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({
        abilities: ["ability_a", "ability_b", "ability_c"],
      });
      expect(res.json).toHaveBeenCalledTimes(1);
    });

    it('should return status code 404 if pokemon is not found', async () => {
      pokemonServiceSpy.getPokemonAbilitiesByName.mockRejectedValueOnce(new Error('Pokémon not found'))
      
      await sut.getAbilitiesByName(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.status).toHaveBeenCalledTimes(1);
    });

    it('should return status code 500 if service throws an error', async () => {
      pokemonServiceSpy.getPokemonAbilitiesByName.mockRejectedValueOnce(new Error());
      
      await sut.getAbilitiesByName(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status).toHaveBeenCalledTimes(1);
    });
  });
});

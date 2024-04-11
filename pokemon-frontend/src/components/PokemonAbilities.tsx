import React, { useState } from "react";
import axios from "axios";
import pokemonTitle from "../assets/images/pokemon_title.png";
import "./PokemonAbilities.css";

const PokemonAbilities: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [abilities, setAbilities] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const fetchAbilities = async () => {
    try {
      const response = await axios.get<{ abilities: string[] }>(
        `http://localhost:3000/api/v1/pokemon/${pokemonName}/abilities`
      );
      setAbilities(response.data.abilities);
      setError("");
      if (response.data?.abilities.length === 0) {
        setError("Nenhuma habilidade encontrada para o Pokemon");
      }
    } catch (error) {
      setError("Pokémon não encontrado");
      setAbilities([]);
    }
  };

  return (
    <>
      <div className="row mb-5">
        <img src={pokemonTitle} alt="pokemon-img" style={{  }} />
      </div>
      <div className="row mb-5">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            value={pokemonName}
            onChange={handleInputChange}
            placeholder="Digite o nome do Pokémon"
          />
        </div>
        <div className="col-2">
          <button className="btn btn-pokemon" onClick={fetchAbilities}>
            Buscar Habilidades
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {error && <p className="text-pokemon">{error}</p>}
          {abilities.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Habilidade</th>
                </tr>
              </thead>
              <tbody>
                {abilities.map((ability, index) => (
                  <tr key={"ability_" + index}>
                    <th scope="row">{index + 1}</th>
                    <td>{ability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonAbilities;

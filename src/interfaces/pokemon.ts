export interface PokemonPokeAPI {
  abilities: PokemonAbility[];
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

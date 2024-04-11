import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonAbilities from "./components/PokemonAbilities";

const App: React.FC = () => {
  return (
    <div className="container">
      <PokemonAbilities />
    </div>
  );
};

export default App;

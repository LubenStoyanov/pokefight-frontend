import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchPokemon,
        setSearchPokemon,
        currentPlayer,
        setCurrentPlayer,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

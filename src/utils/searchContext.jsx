import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [searchPokemon, setSearchPokemon] = useState("");

  return (
    <SearchContext.Provider value={{ searchPokemon, setSearchPokemon }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

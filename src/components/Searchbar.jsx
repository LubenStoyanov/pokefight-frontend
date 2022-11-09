import { Button, HStack, Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { SearchContext } from "../utils/searchContext";

export default function Searchbar() {
  // const searchContext = useContext(SearchContext);
  // const { searchPokemon, setSearchPokemon } = searchContext;
  // const handleOnchange = (e) => {
  //   // setSearchPokemon((p) => e.target.value);
  // };

  return (
    <div>
      <Form method="get" action="/select/pokemons">
        <HStack>
          <Input
            variant="outline"
            placeholder="Search your pokemon"
            // onChange={handleOnchange}
            name="query"
          />
          <Button type="submit">Search</Button>
        </HStack>
      </Form>
    </div>
  );
}

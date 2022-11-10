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
            fontFamily='ARCADECLASSIC'
            letterSpacing={2}
            // onChange={handleOnchange}
            name="query"
            borderColor="#FFCC00"
            borderWidth={3}
            color="#FFCC00"

          />
          <Button 
            type="submit"
            fontFamily='ARCADECLASSIC'
            letterSpacing={3}
            bg="#FFCC00"
            color="#0A285F"
            boxShadow='md'
            rounded='md'
            _hover={{
              background: "#D5A100",
              color: "#0A285F",
            }}
            _focus={{
              background: "#3c5aa6",
              color: "#fff"
            }}
          >Search</Button>
        </HStack>
      </Form>
    </div>
  );
}

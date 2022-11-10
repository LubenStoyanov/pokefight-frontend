import { Wrap, Image, Box, Heading, VStack, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getPokemons } from "../api/axios";
import { SearchContext } from "../utils/searchContext";

export async function loader({ params }) {
  try {
    const { type } = params;
    const pokemons = await getPokemons(type);
    return { pokemons };
  } catch (error) {
    console.error(error);
  }
}

export default function Pokemons() {
  const { pokemons } = useLoaderData();
  // const searchContext = useContext(SearchContext);
  // const { searchPokemon } = searchContext;

  // useEffect(() => {
  //   console.log(searchPokemon);
  // }, [searchPokemon]);
  return (
    <Wrap
      display="flex"
      justify="center"
      maxW="65%"
    >
      {pokemons.map((p) => (
        <Link
        to={`/select/pokemons/id/${p.id}`} 
        key={p.id}>
          <VStack 
          backgroundColor="#0075BE"
          border="solid"
          borderColor="#ffcc03"
          borderWidth="1px"
          borderRadius="15px"
          boxShadow="md"
          boxSize="300px"
          display="flex"
          justify="center">
            <Heading 
            p="5px"
            as="h2" size="md"
            fontFamily='ARCADECLASSIC'
            letterSpacing={3}
            color="#ffcc03">
              {p.name.english}
            </Heading>
            <Box boxSize="xs">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${p.id}.png`}
                 boxSize="150px"
              />
              <Button
              >Click</Button>
            </Box>
          </VStack>
        </Link>
      ))}
    </Wrap>
  );
}

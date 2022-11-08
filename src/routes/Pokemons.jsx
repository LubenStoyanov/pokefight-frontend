import { Wrap, Image, Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getPokemons } from "../api/axios";

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
  return (
    <Wrap>
      {pokemons.map((p) => (
        <Link to={`/pokemons/${p.id}`} key={p.id}>
          <VStack>
            <Heading as="h2" size="md">
              {p.name.english}
            </Heading>
            <Box boxSize="xs">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${p.id}.png`}
              />
            </Box>
          </VStack>
        </Link>
      ))}
    </Wrap>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Wrap, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { redirect, useLoaderData } from "react-router-dom";
import { getPokemonByName } from "../api/axios";
import capitalize from "../utils/capitalize";

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const name = url.searchParams.get("query");
    if (name.length === 0) return redirect("/select");
    const pokemons = await getPokemonByName(capitalize(name));

    if (!pokemons) return redirect("select");
    // return { pokemon };
    // return redirect(`/select/pokemons/id/${pokemon.id}`);
    return { pokemons };
  } catch (error) {
    console.error(error);
  }
}

export default function SearchByName() {
  const { pokemons } = useLoaderData();
  return (
    <Wrap display="flex" justify="center" maxW="65%">
      {pokemons.map((p) => (
        <Link to={`/select/pokemons/id/${p.id}`} key={p.id}>
          <VStack
            backgroundColor="#0075BE"
            border="solid"
            borderColor="#ffcc03"
            borderWidth="1px"
            borderRadius="15px"
            boxShadow="md"
            boxSize="300px"
            display="flex"
            justify="center"
          >
            <Heading
              p="5px"
              as="h2"
              size="md"
              fontFamily="ARCADECLASSIC"
              letterSpacing={3}
              color="#ffcc03"
            >
              {p.name.english}
            </Heading>
            <Box boxSize="xs">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${p.id}.png`}
                boxSize="150px"
              />
              <Button>Click</Button>
            </Box>
          </VStack>
        </Link>
      ))}
    </Wrap>
  );
}

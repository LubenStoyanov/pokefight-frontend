import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import {
  Button,
  Heading,
  Image,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Box,
} from "@chakra-ui/react";
import { getOnePokemon } from "../api/axios";

export async function loader({ params }) {
  try {
    const pokemon = await getOnePokemon(params.id);
    return { pokemon };
  } catch (error) {
    console.error(error);
  }
}

export default function Pokemon() {
  const { pokemon } = useLoaderData();
  // const types = pokemon.type.map(type => assignIconType(type))
  const baseStats = Object.entries(pokemon.base);
  return (
    <VStack width="100%">
      <Heading
        as="h2"
        fontFamily="ARCADECLASSIC"
        letterSpacing={3}
        color="#ffcc03"
      >
        {pokemon.name}
      </Heading>
      <Box
        display="flex"
        justifyContent="space-between"
        width="500px"
        h="300px"
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.imageId}.png`}
          boxSize="200px"
        />
        <HStack
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          fontFamily="ARCADECLASSIC"
          letterSpacing={3}
          color="#ffcc03"
        >
          {baseStats.map((stat) => (
            <Stat key={stat[0] + stat[1]}>
              <StatLabel>{stat[0]}</StatLabel>
              <StatNumber>{stat[1]}</StatNumber>
            </Stat>
          ))}
        </HStack>
      </Box>
      <Link to={`/fight/${pokemon.imageId}`}>
        <Button>Go fight!</Button>
      </Link>
      <Link to={`/race/${pokemon.imageId}`}>
        <Button>Go race!</Button>
      </Link>
    </VStack>
  );
}

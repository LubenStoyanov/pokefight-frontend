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
    <VStack>
      <Heading as="h1">{pokemon.name.english}</Heading>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        boxSize="200px"
      />
      <HStack>
        {baseStats.map((stat) => (
          <Stat key={stat[0] + stat[1]}>
            <StatLabel>{stat[0]}</StatLabel>
            <StatNumber>{stat[1]}</StatNumber>
          </Stat>
        ))}
      </HStack>
      <Link to={`/fight/${pokemon.id}`}>
        <Button>Go fight!</Button>
      </Link>
    </VStack>
  );
}

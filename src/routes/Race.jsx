import { AnimateKeyframes } from "react-simple-animate";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getOnePokemon, getOpponents } from "../api/axios";
import { useEffect } from "react";
import { Button, Image, Box, Flex } from "@chakra-ui/react";

export async function loader({ params }) {
  const amount = 5;
  try {
    const { id } = params;
    const pokemon = await getOnePokemon(id);
    const opponents = await getOpponents(amount);
    const pokemons = [pokemon, ...opponents];
    return { pokemons };
  } catch (error) {
    console.error(error);
  }
}

export default function Race() {
  const { pokemons } = useLoaderData();
  const [start, setStart] = useState(false);

  return (
    <Flex
      justifyContent="flex-start"
      backgroundImage="url('/icons/fight.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100vh"
    >
      <Box m="0" justifySelf="flex-start">
        {pokemons.map((p) => (
          <AnimateKeyframes
            key={p.imageId}
            play={start}
            iterationCount={1}
            // delay={3}
            duration={p.base.speed - 10}
            keyframes={[
              `transform: translateX(${screen.width}px)`,
              "transform: translateX(0px)",
            ]}
          >
            <Image
              boxSize="100px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${p.imageId}.png`}
            />
          </AnimateKeyframes>
        ))}
        <Button onClick={() => setStart((s) => !s)}>Start</Button>
      </Box>
    </Flex>
  );
}

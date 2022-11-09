import React, { useState } from "react";
import { Button, Image } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { getOnePokemon, getRandomPokemon } from "../api/axios";

export async function loader({ params }) {
  const { id } = params;
  const pokemon = await getOnePokemon(id);
  const randomPokemon = await getRandomPokemon();
  return { pokemon, randomPokemon };
}

export default function Fight() {
  const { pokemon, randomPokemon } = useLoaderData();
  const [healthPlayer, setHealthPlayer] = useState(0);
  const [healthComp, setHealthComp] = useState(0);
  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png`}
      />
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
      />
      <Button>Attack</Button>
    </div>
  );
}

import React, { useState } from "react";
import { Button, Image } from "@chakra-ui/react";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { getOnePokemon, getRandomPokemon } from "../api/axios";
import damage from "../utils/damage";

export async function loader({ params }) {
  const { id } = params;
  const pokemon = await getOnePokemon(id);
  const randomPokemon = await getRandomPokemon();
  return { pokemon, randomPokemon };
}

export default function Fight() {
  const { pokemon, randomPokemon } = useLoaderData();

  const navigate = useNavigate();

  const [healthPlayer, setHealthPlayer] = useState(pokemon.base["HP"]);
  const [healthComp, setHealthComp] = useState(randomPokemon.base["HP"]);
  const [turnPlayer, setTurnPlayer] = useState(true);

  const handleClick = () => {
    const damagePlayer = damage(
      pokemon.base["Attack"],
      randomPokemon.base["Defense"],
      pokemon.base["Speed"],
      randomPokemon.base["Speed"]
    );
    const damageComp = damage(
      randomPokemon.base["Attack"],
      pokemon.base["Defense"],
      randomPokemon.base["Speed"],
      pokemon.base["Speed"]
    );

    const newHealthComp = healthComp - damagePlayer;
    const newHealthPlayer = healthPlayer - damageComp;

    if (newHealthComp < 1) return navigate("/win");
    if (newHealthPlayer < 1) return navigate("/lose");

    turnPlayer
      ? setHealthComp((h) => (h = newHealthComp))
      : setHealthPlayer((h) => (h = newHealthPlayer));

    setTurnPlayer((t) => !t);
  };

  return (
    <div>
      <p>{healthComp < 0 ? 0 : healthComp}</p>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png`}
      />

      <p>{healthPlayer < 0 ? 0 : healthPlayer}</p>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
      />
      <Button onClick={handleClick}>Attack</Button>
    </div>
  );
}

// startBattle[x];
// processAttack(pokemonA, pokemonB, attack);
// checkWinningCondition;
// gameCanContinue;
// showWinningScreen;
// showLosingScreen;

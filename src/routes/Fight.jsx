import React, { useState } from "react";
import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getOnePokemon, getRandomPokemon } from "../api/axios";
import damage from "../utils/damage";
import { AnimateKeyframes } from "react-simple-animate";

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
  const [playerAttack, setPlayerAttack] = useState(false);
  const [compAttack, setComptAttack] = useState(false);
  const [dodge, setDodge] = useState(false);
  // const [damagePlayer, setDamagePlayer] = useState(false);
  // const [damagePlayer, setDamagePlayer] = useState(false);

  const handleClick = async () => {
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

    damageComp === 0 || damagePlayer === 0 ? setDodge((d) => true) : false;

    setTimeout(() => setDodge((d) => false), 1000);
    const newHealthComp = healthComp - damagePlayer;
    const newHealthPlayer = healthPlayer - damageComp;

    if (newHealthComp < 1) return navigate("/win");
    if (newHealthPlayer < 1) return navigate("/lose");

    setTimeout(
      () =>
        turnPlayer
          ? setHealthComp((h) => (h = newHealthComp))
          : setHealthPlayer((h) => (h = newHealthPlayer)),
      500
    );

    setTurnPlayer((t) => !t);
    turnPlayer
      ? setPlayerAttack((pa) => (pa = !pa))
      : setComptAttack((ca) => (ca = !ca));
  };

  return (
    <HStack>
      <VStack>
        <p>{healthComp < 0 ? 0 : healthComp}</p>
        <AnimateKeyframes
          play={compAttack}
          iterationCount={1}
          duration={0.5}
          delay={0.3}
          keyframes={[
            "transform: translateY(0px)",
            "transform: translateY(30px)",
            "transform: translateY(0px)",
          ]}
        >
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png`}
          />
        </AnimateKeyframes>

        <p>{healthPlayer < 0 ? 0 : healthPlayer}</p>
        <AnimateKeyframes
          play={playerAttack}
          iterationCount={1}
          duration={0.5}
          delay={0.3}
          keyframes={[
            "transform: translateY(0px)",
            "transform: translateY(-30px)",
            "transform: translateY(0px)",
          ]}
        >
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
          />
        </AnimateKeyframes>
        <Button onClick={handleClick}>Attack</Button>
      </VStack>
      <p style={{ visibility: dodge ? "visible" : "hidden" }}>Dodged</p>
    </HStack>
  );
}

// startBattle[x];
// processAttack(pokemonA, pokemonB, attack);
// checkWinningCondition;
// gameCanContinue;
// showWinningScreen;
// showLosingScreen;

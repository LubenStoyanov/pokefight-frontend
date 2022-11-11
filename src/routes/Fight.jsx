import React, { useState } from "react";

import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
import { redirect, useLoaderData, useNavigate, Link } from "react-router-dom";

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
  const [showDamage, setShowDamage] = useState(false);
  const [currentDamage, setCurrentDamage] = useState({ pl: true, d: 0 });

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
    console.log(damagePlayer, damageComp);

    turnPlayer
      ? setCurrentDamage((cd) => ({ pl: true, d: damagePlayer }))
      : setCurrentDamage((cd) => ({ pl: false, d: damageComp }));
    console.log(currentDamage);

    damageComp === 0 || damagePlayer === 0 ? setDodge((d) => true) : false;
    !dodge ? setShowDamage((d) => true) : false;

    setTimeout(() => setShowDamage((sd) => false), 1000);
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
    <HStack 
      backgroundImage="url('/icons/fight.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
/*       display="flex"
      alignItems="center" 
      justifyContent="center" 
      flexDirection="column" */
/*       backgroundColor="#37796C"
      opacity="0.8" */>
      <Box
      maxW="100%"
      height="100vh"
      display="flex"
      justifyContent="center" 
      >
      <VStack position="absolute">
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
            boxSize="10em"
            position= "absolute"
            left= "15em"
            top= "15em"
            
          
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
            boxSize="15em"
            position= "absolute"
            top= "15em"
            left= "-15em"
          />
        </AnimateKeyframes>
        <Button 
         onClick={handleClick}
          display="flex"
          // mt="55px"
          justifyContent="space-between"
          gap="8px"
          fontFamily='ARCADECLASSIC'
          letterSpacing={3}
          bg="#fff"
          color="#E54222"
          boxShadow='md'
          rounded='md'
          fontSize={20}
          borderRadius="100px"
          _hover={{
            background: " #CE2211",
            color:"#fff"
            }}
          _focus={{
              background: " #CE2211",
              color:"#fff"
            }} 
        ><Image src={"/icons/pokeball.svg"} 
        boxSize="0.9em"/>Attack</Button>
      </VStack>

      </Box>
  {/* <p>Dodged</p> */}

      <VStack>
        <p style={{ visibility: dodge ? "visible" : "hidden" }}>Dodged</p>
        <p style={{ visibility: showDamage ? "visible" : "hidden" }}>
          {currentDamage.d}
        </p>
      </VStack>

    </HStack>
  );
}

// startBattle[x];
// processAttack(pokemonA, pokemonB, attack);
// checkWinningCondition;
// gameCanContinue;
// showWinningScreen;
// showLosingScreen;

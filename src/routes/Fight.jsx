import React, { useState, useContext } from "react";

import { Box, Button, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import { redirect, useLoaderData, useNavigate, Link } from "react-router-dom";
import { SearchContext } from "../utils/searchContext";

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

  const [healthPlayer, setHealthPlayer] = useState(pokemon.base.hp);
  const [healthComp, setHealthComp] = useState(randomPokemon.base.hp);
  const [turnPlayer, setTurnPlayer] = useState(true);
  const [playerAttack, setPlayerAttack] = useState(false);
  const [compAttack, setComptAttack] = useState(false);
  const [dodge, setDodge] = useState(false);
  const [showDamage, setShowDamage] = useState(false);
  const [currentDamage, setCurrentDamage] = useState({ pl: true, d: 0 });
  const [handshake, setHandshake] = useState(true);
  const searchContext = useContext(SearchContext);
  const { currentPlayer } = searchContext;

  const handleClick = async () => {
    console.log(pokemon.base.hp);
    console.log(currentPlayer);
    if (handshake) {
      return setHandshake((h) => false);
    }
    const damagePlayer = damage(
      pokemon.base.hp,
      randomPokemon.base.defense,
      pokemon.base.speed,
      randomPokemon.base.speed
    );
    const damageComp = damage(
      randomPokemon.base.attack,
      pokemon.base.defense,
      randomPokemon.base.speed,
      pokemon.base.speed
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

    if (newHealthComp < 1) return navigate(`/win/${currentPlayer}`);
    if (newHealthPlayer < 1) return navigate(`/lose/${currentPlayer}`);

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
      opacity="0.8" */
    >
      <Box maxW="100%" height="100vh" display="flex" justifyContent="center">
        <HStack position="absolute">
          <Heading color="white">{healthComp < 0 ? 0 : healthComp} |</Heading>
          <AnimateKeyframes
            play={compAttack}
            iterationCount={1}
            duration={0.5}
            delay={0.3}
            keyframes={[
              "transform: translate(0px, 0px)",
              "transform: translate(-200px, 30px)",
              "transform: translate(0px)",
            ]}
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.imageId}.png`}
              boxSize="10em"
              position="absolute"
              left="15em"
              top="30em"
            />
          </AnimateKeyframes>

          <Heading color="white">
            {healthPlayer < 0 ? 0 : healthPlayer} |
          </Heading>
          <AnimateKeyframes
            play={playerAttack}
            iterationCount={1}
            duration={0.5}
            delay={0.3}
            keyframes={[
              "transform: translate(0px, 0px)",
              "transform: translate(200px, -30px)",
              "transform: translate(0px)",
            ]}
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.imageId}.png`}
              boxSize="15em"
              position="absolute"
              top="30em"
              left="-15em"
            />
          </AnimateKeyframes>
          <Button
            onClick={handleClick}
            display="flex"
            // mt="55px"
            justifyContent="space-between"
            gap="8px"
            fontFamily="ARCADECLASSIC"
            letterSpacing={3}
            bg="#fff"
            color="#E54222"
            boxShadow="md"
            rounded="md"
            fontSize={20}
            borderRadius="100px"
            _hover={{
              background: " #CE2211",
              color: "#fff",
            }}
            _focus={{
              background: " #CE2211",
              color: "#fff",
            }}
          >
            <Image src={"/icons/pokeball.svg"} boxSize="0.9em" />
            Attack
          </Button>
        </HStack>
      </Box>

      <VStack>
        <Heading
          color="white"
          style={{ visibility: dodge ? "visible" : "hidden" }}
        >
          Dodged
        </Heading>
        <Heading
          size="3xl"
          color="white"
          style={{ visibility: showDamage ? "visible" : "hidden" }}
        >
          {currentDamage.d}
        </Heading>
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

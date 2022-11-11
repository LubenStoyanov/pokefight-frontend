import { Container, Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";
import { getPlayers } from "../api/axios";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const players = await getPlayers();
    return { players };
  } catch (error) {
    console.error(error);
  }
}

export default function Leaderboard() {
  const { players } = useLoaderData();
  console.log(players);
  return (
    <Box bg="#0A285F" maxW="100%" minH="100vh">
      <Container>
        <Heading
          as="h1"
          fontFamily="Pokemon Solid"
          fontSize="4em"
          color="#ffcc03"
          letterSpacing={7}
          textShadow="2px 2px 4px #2a75bb"
        >
          Leaderboard
        </Heading>
        <VStack>
          {players.map((p) => (
            <>
              <Heading color="white">{p.username}</Heading>
              <Heading color="white">{p.wins / p.games}</Heading>
            </>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

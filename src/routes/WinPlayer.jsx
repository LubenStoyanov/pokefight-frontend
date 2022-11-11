import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import { updatePlayer } from "../api/axios";
import { redirect } from "react-router-dom";

export async function loader({ params }) {
  try {
    const { player } = params;
    await updatePlayer(player, true);

    return redirect("/select");
  } catch (error) {
    console.error(error);
  }
}

export default function WinPlayer() {
  return (
    <Center
      backgroundImage="url('/icons/fight.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100vh"
      color="white"
    >
      <Heading>You won! Play again</Heading>
    </Center>
  );
}

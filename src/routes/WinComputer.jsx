import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import { redirect } from "react-router-dom";
import { updatePlayer } from "../api/axios";

export async function loader({ params }) {
  try {
    const { player } = params;
    console.log(player);
    await updatePlayer(player, false);
    return redirect("/select");
  } catch (error) {
    console.error(error);
  }
}

export default function WinComputer() {
  return (
    <Center
      backgroundImage="url('/icons/fight.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100vh"
      color="white"
    >
      <Heading>Computer won! Try Again</Heading>
    </Center>
  );
}

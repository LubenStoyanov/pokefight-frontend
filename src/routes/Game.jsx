import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Game() {
  return (
    <div>
      <Heading>Pokéfight</Heading>
      <Link to={"/select"}>
        <Button>Start</Button>
      </Link>
    </div>
  );
}

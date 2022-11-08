import { Button, Wrap } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const pokeTypes = [
  "Fire",
  "Water",
  "Grass",
  "Flying",
  "Fighting",
  "Poison",
  "Electric",
  "Ground",
  "Rock",
  "Normal",
  "Psychic",
  "Ice",
  "Bug",
  "Ghost",
  "Steel",
  "Dragon",
  "Dark",
  "Fairy",
];

export default function TypeOptions() {
  return (
    <Wrap>
      {pokeTypes.map((type) => (
        <Link to={`/select/pokemons/${type}`} key={type}>
          <Button>{type}</Button>
        </Link>
      ))}
    </Wrap>
  );
}

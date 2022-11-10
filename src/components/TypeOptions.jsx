import { Button, Wrap, Image, Box } from "@chakra-ui/react";
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

const colorType = {
  "Fire": '#e25822',
  "Water": '#1e90ff',
  "Grass": '#228b22',
  "Flying": '#87ceeb',
  "Fighting": '#8b0000',
  "Poison": '#9370db',
  "Electric": '#ffd500',
  "Ground": '#ff8c00',
  "Rock": '#e6a378',
  "Normal": '#a3c3d6',
  "Psychic": '#cd5c5c',
  "Ghost": "#483d8b",
  "Bug": "#adff2f",
  "Steel": "#4d85ea",
  "Ice": "#7fffd4",
  "Dragon": "#0000ff",
  "Dark": "#708090",
  "Fairy": "#ff8da1"
}

export default function TypeOptions() {
  return (
    <Wrap
      display="flex"
      justify="center"
      maxW="65%">
      <Link to={`/select/pokemons/All`}>
        <Button
          fontFamily='ARCADECLASSIC'
          letterSpacing={3}
        >All</Button>
      </Link>
      {pokeTypes.map((type) => {
        const iconPath = "icons/poke_type/" + type.toLowerCase() + ".svg.png"
        return( 
        <Box >
          <Link
              to={`/select/pokemons/${type}`} 
              key={type}>
            <Button 
              color={colorType[type]} 
              fontFamily='ARCADECLASSIC'
              letterSpacing={3}
              >{type}<Image src={iconPath} 
              boxSize="30px"/></Button>
          </Link>
        </Box>
      )})}
    </Wrap>
  );
}

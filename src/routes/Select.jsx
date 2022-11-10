import { Button, Heading, Box } from "@chakra-ui/react";
import TypeOptions from "../components/TypeOptions";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import Searchbar from "../components/Searchbar";

export default function Select() {
  return (
    <div>
      <Box
      bg="#0A285F"
      maxW="100%"
      height="100vh"
      display="flex" 
      flexDirection="column"
      alignItems="center"
      gap={25}
      >
        <Heading
         as="h1"
         fontFamily="Pokemon Solid"
         fontSize='4em'
         color="#ffcc03"
         letterSpacing={7}
         textShadow="2px 2px 4px #2a75bb"
         mt={35}
         >
          Select
        </Heading>
        <Searchbar />
        <Link to={`/select/pokemons/All`}>
          <Button>All</Button>
        </Link>
        <TypeOptions />
        <Outlet />
      </Box>
    </div>
  );
}

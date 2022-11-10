import { Box, Button, Heading,  } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Game() {

  return (
    <div>
   <Box    
      maxW="100%"
      height="100vh"
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      flexDirection="column"
      rowGap={5}
      backgroundImage="url('icons/game.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat" 

      >
        <Heading
          fontFamily="Nabla"
          fontSize='4em'
        >Pokéfight</Heading>
        <Link to={"/select"}>
          <Button
            fontFamily="Orbitron"
            letterSpacing={3}
            bg="#FFE433"
            color="#1F2231"
            boxShadow='md'
            rounded='md'
            _hover={{
              background: "#01DEE6",
              color: "#1F2231",
            }}
            _focus={{
              background: "#01DEE6",
            }}
          >Start</Button>
        </Link>
      </Box>
    </div>
  );
}

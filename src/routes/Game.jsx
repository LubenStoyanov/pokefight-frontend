import { Box, Button, Heading } from "@chakra-ui/react";
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
          fontFamily="Pokemon Solid"
          fontSize="4em"
          color="#fff"
          letterSpacing={7}
          textShadow="2px 2px 4px #ff0000"
        >
          Pokéfight
        </Heading>
        <Link to={"/select"}>
          <Button
            fontFamily="ARCADECLASSIC"
            letterSpacing={3}
            bg="#ffcc03"
            color="#1F2231"
            boxShadow="md"
            rounded="md"
            mt={5}
            fontSize={20}
            _hover={{
              background: "#2a75bb",
              color: "#fff",
            }}
            _focus={{
              background: "#3c5aa6",
              color: "#fff",
            }}
          >
            Start
          </Button>
        </Link>
      </Box>
    </div>
  );
}

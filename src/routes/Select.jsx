import { Heading, Box, Button, Input, FormLabel } from "@chakra-ui/react";
import TypeOptions from "../components/TypeOptions";
import { Form, Link, Outlet, redirect } from "react-router-dom";
import React, { useState, useContext } from "react";
import Searchbar from "../components/Searchbar";
import { SearchContext } from "../utils/searchContext";

export async function action() {
  return redirect("/select");
}

export default function Select() {
  const searchContext = useContext(SearchContext);
  const { setCurrentPlayer } = searchContext;
  const handleSubmit = (e) => {
    setCurrentPlayer((n) => e.target.firstChild.value);
  };

  return (
    <div>
      <Box
        bg="#0A285F"
        maxW="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={25}
      >
        <Heading
          as="h1"
          fontFamily="Pokemon Solid"
          fontSize="4em"
          color="#ffcc03"
          letterSpacing={7}
          textShadow="2px 2px 4px #2a75bb"
          mt={35}
        >
          Select
        </Heading>
        <Link to={"/leaderboard"}>
          <Button>Leaderboard</Button>
        </Link>
        <Form method="post" onSubmit={handleSubmit} action="/select">
          <Input
            color="white"
            fontFamily="ARCADECLASSIC"
            letterSpacing={3}
            name="username"
          />
          <Heading color="white" fontFamily="ARCADECLASSIC" letterSpacing={3}>
            Enter your username
          </Heading>
        </Form>
        <Searchbar />
        <TypeOptions />
        <Outlet />
      </Box>
    </div>
  );
}

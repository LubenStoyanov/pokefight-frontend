import { Button, Heading } from "@chakra-ui/react";
import TypeOptions from "../components/TypeOptions";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import Searchbar from "../components/Searchbar";

export default function Select() {
  return (
    <div>
      <Heading as="h1">Select</Heading>
      <Link to={`/select/pokemons/All`}>
        <Button>All</Button>
      </Link>
      <Searchbar />
      <TypeOptions />
      <Outlet />
    </div>
  );
}

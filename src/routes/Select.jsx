import { Heading } from "@chakra-ui/react";
import TypeOptions from "../components/TypeOptions";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Select() {
  return (
    <div>
      <Heading as="h1">Select</Heading>
      <TypeOptions />
      <Outlet />
    </div>
  );
}

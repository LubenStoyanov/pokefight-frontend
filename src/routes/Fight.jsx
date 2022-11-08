import React from "react";
import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const { pokemon } = params;
  console.log(pokemon);
  return pokemon;
}

export default function Fight() {
  const pokemon = useLoaderData();
  console.log(pokemon);
  return <div>Fight</div>;
}

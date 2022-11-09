import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { getPokemonByName } from "../api/axios";
import capitalize from "../utils/capitalize";

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const name = url.searchParams.get("query");
    const pokemon = await getPokemonByName(capitalize(name));
    // return { pokemon };
    return redirect(`/select/pokemons/id/${pokemon.id}`);
  } catch (error) {
    console.error(error);
  }
}

export default function SearchByName() {
  const { pokemon } = useLoaderData();
  return <div>{pokemon.name.english}</div>;
}

import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getOnePokemon } from "../api/axios";

export async function loader({ params }) {
  try {
    const pokemon = await getOnePokemon(params.id);
    return { pokemon };
  } catch (error) {
    console.error(error);
  }
}
export default function Pokemon() {
  const { pokemon } = useLoaderData();
  return (
    <div>
      <Link to={`/pokemons/${pokemon.id}/name`}>{pokemon.name.english}</Link>
      <Link to={`/pokemons/${pokemon.id}/type`}>Type</Link>
      <Link to={`/pokemons/${pokemon.id}/base`}>Base Stats</Link>
    </div>
  );
}

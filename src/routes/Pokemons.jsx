import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getPokemons } from "../api/axios";

export async function loader({ params }) {
  try {
    const { type } = params;
    const pokemons = await getPokemons(type);
    console.log(pokemons, type);
    return { pokemons };
  } catch (error) {
    console.error(error);
  }
}

export default function Pokemons() {
  const { pokemons } = useLoaderData();
  console.log(pokemons);
  return (
    <div>
      {pokemons.map((p) => (
        <Link to={`/pokemons/${p.id}`} key={p.id}>
          {p.name.english}
        </Link>
      ))}
    </div>
  );
}

import axios from "axios";

export const getPokemons = (type) =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/type/${type}`)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const getOnePokemon = (id) =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/${id}`)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const getInfo = (id, info) =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/${id}/${info}`)
    .then((res) => res.data)
    .catch((error) => console.error(error));

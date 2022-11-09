import axios from "axios";

export const getPokemons = (type) =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/type/${type}`)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const getOnePokemon = (id) =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/onePokemon/${id}`)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const getRandomPokemon = () =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/random`)
    .then((res) => res.data)
    .catch((error) => console.error(error));

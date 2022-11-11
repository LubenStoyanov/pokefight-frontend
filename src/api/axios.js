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

export const getPokemonByName = (name) =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/name/${name}`)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const getOpponents = (amount) =>
  axios
    .get(import.meta.env.VITE_API_URL + `pokemons/race/${amount}`)
    .then((res) => res.data)
    .catch((error) => console.error);

export const getPlayers = () =>
  axios
    .get(import.meta.env.VITE_API_URL + "leaderboard")
    .then((res) => res.data)
    .catch((error) => console.error(error));

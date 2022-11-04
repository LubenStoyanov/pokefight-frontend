import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Game from "./routes/Game";
import Pokemons, { loader as pokemonsLoader } from "./routes/Pokemons";
import Pokemon, { loader as pokemonLoader } from "./routes/Pokemon";
import Error from "./routes/Error";
import Info, { loader as infoLoader } from "./routes/Info";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
    errorElement: <Error />,
  },
  {
    path: "/pokemons",
    element: <Pokemons />,
    loader: pokemonsLoader,
  },
  {
    path: "/pokemons/:id",
    element: <Pokemon />,
    loader: pokemonLoader,
  },
  {
    path: "/pokemons/:id/:info",
    element: <Info />,
    loader: infoLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

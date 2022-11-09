import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Game from "./routes/Game";
import Pokemons, { loader as pokemonsLoader } from "./routes/Pokemons";
import Pokemon, { loader as pokemonLoader } from "./routes/Pokemon";
import Error from "./routes/Error";
import "./index.css";
import Select from "./routes/Select";
import Fight, { loader as fightLoader } from "./routes/Fight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
    errorElement: <Error />,
  },
  {
    path: "/select",
    element: <Select />,
    children: [
      {
        path: "/select/pokemons/:type",
        element: <Pokemons />,
        loader: pokemonsLoader,
      },
    ],
  },
  {
    path: "/pokemons/:id",
    element: <Pokemon />,
    loader: pokemonLoader,
  },
  {
    path: "/fight/:id",
    element: <Fight />,
    loader: fightLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

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
import SearchContextProvider from "./utils/searchContext";
import WinPlayer from "./routes/WinPlayer";
import WinComputer from "./routes/WinComputer";
import SearchByName, { loader as nameLoader } from "./routes/SearchByName";

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
      {
        path: "/select/pokemons",
        element: <SearchByName />,
        loader: nameLoader,
      },
      {
        path: "/select/pokemons/id/:id",
        element: <Pokemon />,
        loader: pokemonLoader,
      },
    ],
  },

  {
    path: "/fight/:id",
    element: <Fight />,
    loader: fightLoader,
  },
  {
    path: "/win",
    element: <WinPlayer />,
  },
  {
    path: "/lose",
    element: <WinComputer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

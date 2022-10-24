import React from 'react';
import {ErrorPage, Todos, Game, Computer, ComputerPart} from '../views';
import App from "../App";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Todos />,
      },
      {
        path: "tic-tac-toe",
        element: <Game />,
      },
      {
        path: "computer",
        element: <Computer />,
      },
      {
        path: "computer/:part",
        element: <ComputerPart />,
      },
    ],
  },
]);

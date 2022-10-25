import React from 'react';
import App from "../App";
import {ErrorPage, Todos, Game, Computer, ComputerPart, Login} from '../views';
import {createBrowserRouter} from "react-router-dom";

export const PATH = {
  HOME: '/',
  GAME: 'tic-tac-toe',
  COMPUTER: 'computer',
  COMPUTER_PART: 'computer/:part',
  LOGIN: 'login',
}

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Todos />,
      },
      {
        path: PATH.GAME,
        element: <Game />,
      },
      {
        path: PATH.COMPUTER,
        element: <Computer />,
      },
      {
        path: PATH.COMPUTER_PART,
        element: <ComputerPart />,
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
]);

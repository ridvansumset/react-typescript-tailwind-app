import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game, ErrorPage, ComputerPart, ComputerParts } from './views';
import { Default, Computer } from "./layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Game />,
      },
    ],
  },
  {
    path: "/computer",
    element: <Computer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ComputerParts />,
      },
      {
        path: ":part",
        element: <ComputerPart />,
        // loader: partLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

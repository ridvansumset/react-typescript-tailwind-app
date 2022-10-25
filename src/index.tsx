import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import { Provider } from 'react-redux';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import './index.css';

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode></React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

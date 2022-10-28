import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import './index.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

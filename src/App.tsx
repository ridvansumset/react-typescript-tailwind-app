import React from 'react';
import {Outlet as RouterView} from 'react-router-dom';
import {Default} from './layouts';

export default function App() {
  // let isLoggedIn = true;
  // const Layout = isLoggedIn ? <Default /> : <Default />;

  return (
    <div>
      <Default>
        <RouterView />
      </Default>
    </div>
  );
}

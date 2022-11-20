import React from 'react';
import {Outlet as RouterView} from 'react-router-dom';
import {useAppSelector} from './store';
import {Main as MainLayout, Login as LoginLayout} from './layouts';
import {selectDarkMode} from './reducers/ui';
import {useInitApp} from './store/hooks';
import {Loading} from './components';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [isAppLoading, hasUser] = useInitApp();
  const darkMode = useAppSelector(selectDarkMode);

  return (
    <>
      {
        isAppLoading
          ? <Loading />
          : hasUser
            ? <MainLayout><RouterView /></MainLayout>
            : <LoginLayout><RouterView /></LoginLayout>
      }
      <ToastContainer theme={darkMode ? 'dark' : 'light'} />
    </>
  );
}

import React, {useEffect, useState} from 'react';
import {Outlet as RouterView, useNavigate, useLocation} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from './store';
import {ROUTES} from './router';
import {Default as DefaultLayout, Login as LoginLayout} from './layouts';
import {validateAccessToken} from './reducers/auth';
import {selectDarkMode} from './reducers/ui';
import {Loading} from './components';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const darkMode = useAppSelector(selectDarkMode);
  const navigate = useNavigate();
  const {pathname: currentRoute} = useLocation();
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    async function validateToken() {
      await dispatch(validateAccessToken());
      setIsAppLoading(false);
    }
    validateToken();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!user && currentRoute !== ROUTES.LOGIN && !isAppLoading) {
      navigate(ROUTES.LOGIN);
    } else if (user && currentRoute === ROUTES.LOGIN && !isAppLoading) {
      navigate(ROUTES.HOME);
    }
  }, [user, isAppLoading, currentRoute, navigate]);

  return (
    <>
      {
        isAppLoading
          ? <Loading />
          : user
            ? <DefaultLayout><RouterView /></DefaultLayout>
            : <LoginLayout><RouterView /></LoginLayout>
      }
      <ToastContainer theme={darkMode ? 'dark' : 'light'} />
    </>
  );
}

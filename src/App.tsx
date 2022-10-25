import React, {useEffect} from 'react';
import {Outlet as RouterView, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ROUTE_PATH} from './router';
import {Default as DefaultLayout, Login as LoginLayout} from './layouts';
import {useSelector} from 'react-redux';
import {
  authCheckTokenValidity,
  authSelectAccessToken,
  authSelectTokenValidity,
  authLogout,
} from './reducers';
import {Loading} from './components';


export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname: currentRoute} = useLocation();

  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const token = useSelector(authSelectAccessToken);
  const isTokenValid = useSelector(authSelectTokenValidity);

  useEffect(() => {
    if (token) {
      // @ts-ignore
      dispatch(authCheckTokenValidity());
    } else {
      dispatch(authLogout());
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const route = currentRoute.substring(1, currentRoute.length);

    if (isTokenValid === false && route !== ROUTE_PATH.LOGIN) {
      navigate(ROUTE_PATH.LOGIN);
    } else if (isTokenValid && route === ROUTE_PATH.LOGIN) {
      navigate(ROUTE_PATH.HOME);
    }
  }, [isTokenValid, currentRoute, navigate]);

  return (
    isLoading
      ? <Loading />
      : isTokenValid
        ? <DefaultLayout><RouterView /></DefaultLayout>
        : <LoginLayout><RouterView /></LoginLayout>
  );
}

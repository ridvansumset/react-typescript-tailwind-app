import React, {useEffect, useState} from 'react';
import {Outlet as RouterView, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ROUTE_PATH} from './router';
import {Default as DefaultLayout, Login as LoginLayout} from './layouts';
import {useSelector} from 'react-redux';
import {
  AUTH,
  AuthState,
  authGetUser,
  authLogout,
} from './reducers';
import {Loading} from './components';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let {pathname: currentRoute} = useLocation();
  currentRoute = currentRoute.substring(1, currentRoute.length);

  const {user, accessToken} = useSelector((store: { [AUTH]: AuthState }) => store[AUTH]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (accessToken) {
        // @ts-ignore
        await dispatch(authGetUser());
      } else {
        await dispatch(authLogout());
      }
      setIsLoading(false);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!user && currentRoute !== ROUTE_PATH.LOGIN) {
      navigate(ROUTE_PATH.LOGIN);
    } else if (user && currentRoute === ROUTE_PATH.LOGIN) {
      navigate(ROUTE_PATH.HOME);
    }
  }, [user, currentRoute, navigate]);

  return (
    isLoading
      ? <Loading />
      : user
        ? <DefaultLayout><RouterView /></DefaultLayout>
        : <LoginLayout><RouterView /></LoginLayout>
  );
}

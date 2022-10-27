import React, {useEffect, useState} from 'react';
import {Outlet as RouterView, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ROUTES} from './router';
import {Default as DefaultLayout, Login as LoginLayout} from './layouts';
import {useSelector} from 'react-redux';
import {AUTH, AuthState, validateAccessToken} from './reducers/auth';
import {Loading} from './components';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname: currentRoute} = useLocation();

  const user = useSelector((store: { [AUTH]: AuthState }) => store[AUTH].user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function validateToken() {
      // @ts-ignore react-redux bug
      await dispatch(validateAccessToken());
      setIsLoading(false);
    }
    validateToken();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!user && currentRoute !== ROUTES.LOGIN && !isLoading) {
      navigate(ROUTES.LOGIN);
    } else if (user && currentRoute === ROUTES.LOGIN && !isLoading) {
      navigate(ROUTES.HOME);
    }
  }, [user, isLoading, currentRoute, navigate]);

  return (
    isLoading
      ? <Loading />
      : user
        ? <DefaultLayout><RouterView /></DefaultLayout>
        : <LoginLayout><RouterView /></LoginLayout>
  );
}

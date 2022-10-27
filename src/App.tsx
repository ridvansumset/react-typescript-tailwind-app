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
  let {pathname: currentRoute} = useLocation();
  currentRoute = currentRoute.substring(1, currentRoute.length);

  const user = useSelector((store: { [AUTH]: AuthState }) => store[AUTH].user);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function validate() {
      setIsLoading(true);
      // @ts-ignore react-redux bug
      await dispatch(validateAccessToken());
      setIsLoading(false);
    }
    validate();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!user && currentRoute !== ROUTES.LOGIN) {
      navigate(ROUTES.LOGIN);
    } else if (user && currentRoute === ROUTES.LOGIN) {
      navigate(ROUTES.HOME);
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

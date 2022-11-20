import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {validateAccessToken} from '../reducers/auth';
import {ROUTES} from '../router';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// CUSTOM HOOKS
export const useInitApp = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
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
  }, [currentRoute, user, isAppLoading, navigate]);

  return [isAppLoading, user];
}

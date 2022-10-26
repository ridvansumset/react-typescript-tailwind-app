import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authLogin, authSelectIsLoading} from '../reducers';
import {BaseButton} from '../components';
import {BaseButtonSize} from '../constants';

export default function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectIsLoading);

  // @ts-ignore
  const login = () => dispatch(authLogin({username: 'rid1', password: 'supersecretpw'}));

  return (
    <div className="flex justify-center">
      <BaseButton
        size={BaseButtonSize.Large}
        disabled={isLoading}
        onClick={login}
      >
        Free Login
      </BaseButton>
    </div>
  )
}

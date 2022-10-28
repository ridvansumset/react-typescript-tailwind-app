import React from 'react';
import {useAppDispatch, useAppSelector} from '../store';
import {login, selectIsLoading} from '../reducers/auth';
import {BaseButton} from '../components';
import {BaseButtonSize} from '../constants';

export default function Login() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  // @ts-ignore react-redux bug: expected 0 arguments but got 1
  const handleClick = () => dispatch(login({username: 'rid1', password: 'supersecretpw'}));

  return (
    <div className="flex justify-center">
      <BaseButton
        size={BaseButtonSize.Large}
        disabled={isLoading}
        onClick={handleClick}
      >
        Free Login
      </BaseButton>
    </div>
  )
}

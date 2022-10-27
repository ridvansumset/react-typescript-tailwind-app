import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, selectIsLoading} from '../reducers/auth';
import {BaseButton} from '../components';
import {BaseButtonSize} from '../constants';

export default function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // @ts-ignore react-redux bug
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

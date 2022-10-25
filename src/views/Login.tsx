import React from 'react';
import {useDispatch} from 'react-redux';
import {authLogin} from '../reducers';
import {BaseButton} from '../components';
import {BaseButtonSize} from '../constants';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <BaseButton size={BaseButtonSize.Large} onClick={() => dispatch(authLogin('jwt'))}>
        Free Login
      </BaseButton>
    </div>
  )
}

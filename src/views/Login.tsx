import React, {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../store';
import {login, selectIsLoading} from '../reducers/auth';
import {BaseButton, BaseInput, LoadingMask} from '../components';
import {BaseButtonType} from '../constants';

export default function Login() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({username, password}));
  };

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-1/3 px-4 py-8 flex flex-col items-center bg-white dark:bg-slate-600
      border border-slate-400 rounded">
        <h2 className="base-txt-h2 text-center mb-4">
          Login to the panel
        </h2>

        <form onSubmit={handleLogin}>
          <BaseInput
            value={username}
            required
            disabled={isLoading}
            placeholder="Username"
            className="w-full mb-2"
            onChange={(val) => setUsername(val)}
          />

          <BaseInput
            value={password}
            required
            type="password"
            disabled={isLoading}
            placeholder="Password"
            className="w-full mb-4"
            onChange={(val) => setPassword(val)}
          />

          <LoadingMask isLoading={isLoading} text="Loading...">
            <BaseButton
              cssType={BaseButtonType.Primary}
              block
              type="submit"
            >
              Login
            </BaseButton>
          </LoadingMask>
        </form>
      </div>
    </div>
  )
}

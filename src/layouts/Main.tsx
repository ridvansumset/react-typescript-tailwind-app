import React from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../store';
import {logout} from '../reducers/auth';
import {selectDarkMode, updateDarkMode} from '../reducers/ui';
import {Size, BaseButtonType} from '../constants';
import {BaseButton, DarkModeButton} from '../components';

interface Props {
  children?: React.ReactElement;
}

export default function Main({children}: Props) {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-apple-web dark:bg-slate-800">
        <div className="flex justify-between py-4 mb-8 border-b border-b-black dark:border-b-white">
          <div className="pl-8">
            <Link to={''} className="base-txt">Home</Link>
            <span className="base-txt">{' '}|{' '}</span>
            <Link to={'tic-tac-toe'} className="base-txt">Tic Tac Toe</Link>
            <span className="base-txt">{' '}|{' '}</span>
            <Link to={'computer'} className="base-txt">Computer</Link>
          </div>

          <div className="flex items-center pr-8">
            <DarkModeButton
              className="mr-4"
              onChange={(isDark) => dispatch(updateDarkMode(isDark))}
            />

            <BaseButton
              size={Size.Small}
              cssType={BaseButtonType.Secondary}
              onClick={() => dispatch(logout())}
            >
              {'Logout'}
            </BaseButton>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1400px] px-8 md:px-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

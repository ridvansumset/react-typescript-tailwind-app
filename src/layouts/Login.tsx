import React from 'react';
import {DarkModeButton} from '../components';
import {useAppDispatch, useAppSelector} from '../store';
import {selectDarkMode, updateDarkMode} from '../reducers/ui';

interface Props {
  children: React.ReactElement;
}

export default function Default({children}: Props) {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-apple-web dark:bg-slate-800">
        <div className="flex justify-between py-4 mb-8 border-b border-b-black dark:border-b-white">
          <div className="pl-8">
            <h2 className="base-txt-h2">
              Login
            </h2>
          </div>

          <DarkModeButton
            className="pr-8"
            onChange={(isDark) => dispatch(updateDarkMode(isDark))}
          />
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

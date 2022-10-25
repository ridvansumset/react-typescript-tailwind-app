import React, {useState} from 'react';
import DarkModeButton from './DarkModeButton';

export default function Loading() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-900 min-h-screen">
        <h2 className="base-txt-h2 text-center pt-16 animate-bounce">
          Page Loading
        </h2>

        {/*no need to show DarkModeButton, it's imported only for its matchMedia query which runs on mount*/}
        <DarkModeButton className="invisible" onChange={(isDark) => setDark(isDark)} />
      </div>
    </div>
  );
}

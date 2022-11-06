import React, {useState} from 'react';
import DarkModeButton from './DarkModeButton';

export default function Loading() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-900 min-h-screen">
        <div className="flex flex-col items-center pt-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 mb-2 animate-spin">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>

          <h2 className="base-txt-h2 text-center">
            Initializing...
          </h2>
        </div>

        {/*no need to show DarkModeButton, it's imported only for its matchMedia query which runs on mount*/}
        <DarkModeButton className="invisible" onChange={(isDark) => setDark(isDark)} />
      </div>
    </div>
  );
}

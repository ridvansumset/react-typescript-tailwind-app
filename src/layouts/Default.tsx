import React, {useState, useEffect} from "react";
import {Link, Outlet} from 'react-router-dom';

export default function Default() {
  // const [location] = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!darkMode || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    // eslint-disable-next-line
  }, []);

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

          <div className="pr-8">
            <button className={'cursor-pointer'} onClick={() => setDarkMode(!darkMode)}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5 mr-1 pt-1">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>

                <span className="base-txt text-sm">{darkMode ? 'Light' : 'Dark'} Mode</span>
              </div>
            </button>
          </div>
        </div>

        <div className="w-full min-h-screen flex justify-center">
          <div className="w-full md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1400px] px-8 md:px-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

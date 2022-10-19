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
      <div className={'p-2 bg-white dark:bg-slate-800 h-screen'}>
        <div className="flex justify-between py-2 mx-4 border-b border-b-black dark:border-b-white">
          <div>
            <Link to={''} className="text-slate-900 dark:text-slate-300">Home</Link> |
            <Link to={'tic-tac-toe'} className="text-slate-900 dark:text-slate-300">{' '}Tic Tac Toe</Link> |
            <Link to={'computer'} className="text-slate-900 dark:text-slate-300">{' '}Computer</Link>
          </div>

          <div>
            <button className={'cursor-pointer'} onClick={() => setDarkMode(!darkMode)}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5 mr-1 pt-1">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>

                <span className="text-sm text-slate-900 dark:text-slate-300">Dark Mode</span>
              </div>
            </button>
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

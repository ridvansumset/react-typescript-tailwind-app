import React  from "react";
import { useState } from "react";
import './styles.css';

export default function Todos() {
  const [todos] = useState([
    { name: 'Init React app', isDone: true },
    { name: 'Use React hooks', isDone: true },
    { name: 'Add React-Router', isDone: true },
    { name: 'Use TypeScript', isDone: true },
    { name: 'Use Tailwind CSS', isDone: true },
    { name: 'Write tests', isDone: false },
  ]);

  const list = todos.map((todo, i) => {
      let classes = 'bg-gray-300 dark:bg-slate-900';

      switch (i) {
        case 0:
          classes += ' rounded-t-md border-b border-gray-400 dark:border-b-blue-200';
          break;
        case todos.length - 1:
          classes += ' rounded-b-md';
          break;
        default:
          classes += ' border-b border-gray-400 dark:border-b-blue-200';
          break;
      }

      return (
        <li key={`todo-${i}`} className={classes}>
          <div className="flex items-center text-lg text-slate-900 dark:text-slate-300 p-2">
            {
              todo.isDone
                ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-5 h-5 mr-1">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-5 h-5 mr-1">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                </svg>

            }
            {todo.name}
          </div>
        </li>
      )
    });

  return (
    <div className="my-4 mx-4">
      <h2 className="text-center mb-1 text-slate-900 dark:text-white text-base font-medium tracking-tight">
        {'TODO LIST'}
      </h2>

      <div className="border border-gray-400 dark:border-b-blue-200 rounded-lg">
        <ol className="p-0 rounded-lg">
          {list}
        </ol>
      </div>
    </div>
  );
}

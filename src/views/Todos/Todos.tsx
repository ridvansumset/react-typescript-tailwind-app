import React  from "react";
import { useState } from "react";
import './styles.css';

export default function Todos() {
  const [todos] = useState([
    { name: 'Init React app', isDone: true },
    { name: 'Use React hooks', isDone: true },
    { name: 'Add React-Router', isDone: true },
    { name: 'Use TypeScript', isDone: true },
    { name: 'Use Tailwind CSS', isDone: false },
    { name: 'Write tests', isDone: false },
  ]);

  return (
    <div>
      <ol>
        {todos.map((todo, i) => (
          <li
            key={`todo-${i}`}
            className={todo.isDone ? 'done-todo' : undefined}
          >
            {todo.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

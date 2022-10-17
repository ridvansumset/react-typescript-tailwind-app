import { useState } from "react";
import './styles.css';

export default function Todos(props) {
  const [todos] = useState([
    { name: 'Init React app', isDone: true },
    { name: 'Add router', isDone: true },
    { name: 'TypeScript', isDone: false },
    { name: 'Tailwind CSS', isDone: false },
    { name: 'Tests', isDone: false },
  ]);

  return (
    <div>
      <ol>
        {todos.map((todo, i) => (
          <li
            key={`todo-${i}`}
            className={todo.isDone ? 'done-todo' : null}
          >
            {todo.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

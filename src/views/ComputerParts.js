import { useState } from "react";
import { Link } from "react-router-dom";

export default function ComputerParts(props) {
  const [parts] = useState(['cpu', 'gpu']);

  return (
    <div>
      <ul>
        {parts.map((part, i) => (
          <li key={`part-${i}`}>
            <Link to={`${part}`}>
              {part}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

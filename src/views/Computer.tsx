import React  from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Computer() {
  const [parts] = useState(['cpu', 'gpu']);

  return (
    <div>
      <ul>
        {parts.map((part, i) => (
          <li key={`part-${i}`}>
            <Link to={`${part}`} replace={true}>
              {part}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

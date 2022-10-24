import React, {useState}  from "react";
import {Link} from "react-router-dom";

export default function Computer() {
  const [parts] = useState(['Motherboard', 'CPU', 'GPU', 'RAM']);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        {parts.map((part) => (
          <Link key={`${part}`} to={`${part}`} className="base-txt text-lg p-8 transition ease-in-out delay-150 bg-blue-500
          hover:-translate-y-1 hover:scale-10 hover:bg-indigo-500 duration-300">
            {part}
          </Link>
        ))}
      </div>
    </div>
  );
}

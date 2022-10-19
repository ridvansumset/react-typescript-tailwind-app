import React  from "react";
import { useState, useEffect } from "react";

interface Props {
  onClick: (a: number) => void,
  value: string | null,
}

export default function Square(props: Props) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log('NEW RENDER', clicked);
  }, [clicked]);

  function handleClick() {
    // @ts-ignore
    props.onClick();
    setClicked(true);
  }

  return (
    <button className="bg-white dark:bg-slate-900 border border-black dark:border-white text-xl dark:text-slate-300 font-bold text-center outline-none p-0 w-16 h-16" onClick={handleClick}>
      {props.value}
    </button>
  );
}

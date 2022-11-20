import React  from "react";

interface Props {
  onClick: () => void;
  value: string | null;
}

export default function Square({value, onClick}: Props) {
  return (
    <button
      className="bg-white dark:bg-slate-900 border border-black dark:border-white text-xl dark:text-slate-300 font-bold
      text-center outline-none p-0 w-16 h-16"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

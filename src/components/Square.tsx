import React  from 'react';

interface Props {
  value: string | null;
  onClick: () => void;
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

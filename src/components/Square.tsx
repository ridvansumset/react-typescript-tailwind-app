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
    <button className="square" onClick={handleClick}>
      {props.value}
    </button>
  );
}

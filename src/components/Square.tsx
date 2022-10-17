import React, { MouseEventHandler, MouseEvent } from "react";
import { useState, useEffect } from "react";

type Props = {
  onClick: MouseEventHandler,
  value: string,
}

export default function Square(props: Props) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log('NEW RENDER', clicked);
  }, [clicked]);

  function handleClick(e: MouseEvent) {
    props.onClick(e);
    setClicked(true);
  }

  return (
    <button className="square" onClick={handleClick}>
      {props.value}
    </button>
  );
}

import { useState, useEffect } from "react";

export default function Square(props) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log('NEW RENDER', clicked);
  }, [clicked]);

  function handleClick() {
    props.onClick();
    setClicked(true);
  }

  return (
    <button className="square" onClick={handleClick}>
      {props.value}
    </button>
  );
}

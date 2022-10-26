import React, {useEffect, useState} from "react";
import {BaseButtonSize as Size, BaseButtonType as Type} from '../../constants';
import './base-button.css';

interface Props {
  type?: Type,
  size?: Size,
  disabled?: boolean,
  onClick: (x: any) => void,
  children: JSX.Element[] | JSX.Element | string;
}

function BaseButton({type, size, disabled, onClick, children}: Props) {
  const sizeClass = {
    [Size.Small]: 'text-sm px-2 py-1',
    [Size.Medium]: 'text-md px-4 py-2',
    [Size.Large]: 'text-2xl px-8 py-4',
  }
  const typeClass = {
    [Type.Primary]: 'btn-primary',
    [Type.Secondary]: 'btn-secondary',
  }

  const initialClassName = `${sizeClass[size || Size.Medium]}`;
  const [className, setClassName] = useState(initialClassName);

  useEffect(() => {
    let cn = initialClassName;
    if (!disabled) {
      cn += ` ${typeClass[type || Type.Primary]}`;
    } else {
      cn += ' btn-disabled';
    }
    setClassName(cn);
    // eslint-disable-next-line
  }, [disabled]);

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default BaseButton;

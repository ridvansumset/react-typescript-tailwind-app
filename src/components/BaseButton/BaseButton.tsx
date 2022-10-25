import React from "react";
import {BaseButtonSize as Size, BaseButtonType as Type} from '../../constants';
import './base-button.css';

interface Props {
  type?: Type,
  size?: Size,
  onClick: (x: any) => void,
  children: JSX.Element[] | JSX.Element | string;
}

function BaseButton({type, size, onClick, children}: Props) {
  const sizeClass = {
    [Size.Small]: 'text-sm px-2 py-1',
    [Size.Medium]: 'text-md px-4 py-2',
    [Size.Large]: 'text-2xl px-8 py-4',
  }

  const typeClass = {
    [Type.Primary]: 'btn-primary',
    [Type.Secondary]: 'btn-secondary',
  }

  const className = `${sizeClass[size || Size.Medium]} ${typeClass[type || Type.Primary]}`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default BaseButton;

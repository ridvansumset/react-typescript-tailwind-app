import React, {useEffect, useState} from 'react';
import {Size, BaseButtonType as Type} from '../../constants';
import './base-button.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  cssType?: Type;
  size?: Size;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  children: JSX.Element[] | JSX.Element | string;
}

function BaseButton({cssType, size, disabled, block, className: propClassName, children, ...rest}: Props) {
  const sizeClass = {
    [Size.Small]: 'text-sm px-2 py-1',
    [Size.Medium]: 'text-md px-4 py-2',
    [Size.Large]: 'text-2xl px-8 py-4',
  }

  const initClassName = `${propClassName} ${sizeClass[size || Size.Medium]}`;
  const [className, setClassName] = useState(initClassName);

  useEffect(() => {
    let cn = initClassName;
    const typeClass = {
      [Type.Primary]: 'btn-primary',
      [Type.Secondary]: 'btn-secondary',
    };

    if (block) {
      cn += ' w-full';
    }

    if (!disabled) {
      cn += ` ${typeClass[cssType || Type.Primary]}`;
    } else {
      cn += ' btn-disabled';
    }

    setClassName(cn);
  }, [block, cssType, disabled, initClassName]);

  return (
    <button
      className={className}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default BaseButton;

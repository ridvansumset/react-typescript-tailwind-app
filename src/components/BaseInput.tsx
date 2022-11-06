import React, {useEffect, useState} from 'react';
import {Size} from '../constants';

interface Props {
  value: string | undefined,
  required: boolean,
  type?: string,
  disabled?: boolean,
  placeholder?: string,
  size?: Size,
  className?: string,
  onChange: (x: any) => void,
}

const BaseInput = ({value, required, type, size, disabled, placeholder, className: propClassName, onChange}: Props) => {
  const sizeClass = {
    [Size.Small]: 'text-sm px-2 py-1',
    [Size.Medium]: 'text-md px-4 py-2',
    [Size.Large]: 'text-2xl px-8 py-4',
  }

  const initialClassName = `bg-white dark:bg-slate-500 rounded border border-black dark:border-white
                            ${propClassName}
                            ${sizeClass[size || Size.Medium]}`;
  const [className, setClassName] = useState(initialClassName);

  useEffect(() => {
    let cn = initialClassName;
    if (disabled) {
      cn += ' hover:cursor-not-allowed';
    }
    setClassName(cn);
  }, [disabled, initialClassName]);

  return (
    <input
      value={value}
      required={required}
      type={type || 'text'}
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default BaseInput;

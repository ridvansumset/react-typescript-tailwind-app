import React from "react";
import {BaseButtonType as Type} from '../../constants';
import './base-button.css';

interface Props {
  type: Type,
  onClick: (x: any) => void,
  children: JSX.Element[] | JSX.Element | string;
}

const typeToClassName = {
  [Type.Primary]: 'btn-primary',
  [Type.Secondary]: 'btn-secondary',
}

function BaseButton(props: Props) {
    return (
      <button
        className={typeToClassName[props.type]}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
}

export default BaseButton;

import React from "react";
import {useNavigate, useParams} from 'react-router';
import {BaseButton} from '../components/';
import {BaseButtonType} from '../constants';

export default function ComputerPart() {
  const { part } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <BaseButton
        cssType={BaseButtonType.Secondary}
        onClick={() => navigate(-1)}
      >
        {'Go back'}
      </BaseButton>

      <div>{part}</div>
    </div>
  );
}

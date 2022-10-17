import React  from "react";
import { useParams, useNavigate } from 'react-router';

export default function ComputerPart() {
  const { part } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div>{part}</div>
    </>
  );
}

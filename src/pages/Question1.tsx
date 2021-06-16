import React from "react";
import { Link } from "react-router-dom";

import { usePointContext } from "contexts/PointProvider";

export const Question1: React.VFC = () => {
  const { point, setPoint } = usePointContext();
  return (
    <>
      <div>質問1</div>
      <p>{point}</p>
      <button onClick={() => setPoint(point + 1)}>+</button>
      <Link to="/q2">次の質問へ移動</Link>
    </>
  );
};

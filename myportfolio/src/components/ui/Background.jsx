import React from "react";
import Squares from "../Squares";
function Background() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
      />
    </div>
  );
}

export default Background;

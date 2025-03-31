import React from "react";

const TriangleStarPattern = () => {
  const size = 5;
  const pattern = [];

  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    pattern.push(row);
  }

  return (
    <div>
      <h3>Triangle Star Pattern</h3>
      <div>
        {pattern.map((row, index) => (
          <pre key={index}>{row}</pre> 
        ))}
      </div>
    </div>
  );
};

export default TriangleStarPattern;

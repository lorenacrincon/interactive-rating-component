import React from "react";

function Ranking() {
  const ranking = [1, 2, 3, 4, 5];
  return (
    <div className="ranking-container">
      {ranking.map((number, index) => (
        <button className="ranking-btn" key={index}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Ranking;

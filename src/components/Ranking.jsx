import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Ranking() {
  const ranking = [1, 2, 3, 4, 5];

  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = (number) => {
    setSelectedValue(number);
    console.log(number);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ranking-container">
        {ranking.map((number, index) => (
          <button
            className={`ranking-btn ${
              selectedValue === number ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleButtonClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button className="submit-btn" type="submit">
        SUBMIT
      </button>
    </form>
  );
}

export default Ranking;

import React, { useState } from "react";
import starIcon from "../assets/icon-star.svg";
import ilustration from "../assets/illustration-thank-you.svg";

function Ranking() {
  const ranking = [1, 2, 3, 4, 5];

  const [selectedValue, setSelectedValue] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRankingClick = (number) => {
    setSelectedValue(number);
    console.log(number);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <div className="grey-container" style={{ textAlign: "center" }}>
      <div className="container-content-thank">
        <div className="ilustration">
          <img src={ilustration} alt="ilustration Thank you" />
        </div>
        <div className="badge-container">
          <span className="bagde">You selected {selectedValue} out of 5</span>
        </div>
        <div>
          <h1>Thank You!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="grey-container">
      <div className="container-content">
        <div className="circle-icon">
          <img src={starIcon} alt="star" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="ranking-container">
          {ranking.map((number, index) => (
            <button
              className={`ranking-btn ${
                selectedValue === number ? "selected" : ""
              }`}
              type="button"
              key={index}
              onClick={() => handleRankingClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <button className="submit-btn" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default Ranking;

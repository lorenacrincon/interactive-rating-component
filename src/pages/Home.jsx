import React from "react";
import Ranking from "../components/Ranking";
import starIcon from "../assets/icon-star.svg";

function home() {
  return (
    <>
      <div className="grey-container">
        <div className="container-content">
          <div className="circle-icon">
            <img src={starIcon} alt="star" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <Ranking />
        </div>
      </div>
    </>
  );
}

export default home;

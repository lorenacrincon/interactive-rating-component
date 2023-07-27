import React from "react";
import ilustration from "../assets/illustration-thank-you.svg";

function ThankYou() {
  return (
    <>
      <div className="grey-container" style={{ textAlign: "center" }}>
        <div className="container-content-thank">
          <div className="ilustration">
            <img src={ilustration} alt="ilustration Thank you" />
          </div>
          <div className="badge-container">
            <span className="bagde">You selected 4 out of 5</span>
          </div>
          <div>
            <h1>Thank You!</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;

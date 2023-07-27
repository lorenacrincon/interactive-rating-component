import React from "react";
import { Link } from "react-router-dom";

function Submit() {
  return (
    <div>
      <Link to={"thank-you"} className="submit-btn">
        SUBMIT
      </Link>
    </div>
  );
}

export default Submit;

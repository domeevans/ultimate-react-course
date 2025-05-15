import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={7} onSetRating={setMovieRating} />
      <p>This move was rated {movieRating} start</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={3} />
    <StarRating maxRating={10} color="red" size={24} className="test" />
    <StarRating messages={["Terrible", "Bad", "Average", "Good", "Amazing"]} />
    <Test /> */}
  </React.StrictMode>
);

import React from "react";
import "../styles/homepage.css";
import background from "../images/background.jpg";

function Homepage() {
  return (
    <div className="home-container">
      <h1>Find the best sneakers at Sneaker Shop</h1>
      <img className="background" src={background} alt="" />
    </div>
  );
}

export default Homepage;

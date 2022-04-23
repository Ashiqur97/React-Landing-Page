import React from "react";
import "./HeroStyles.css";
import cyber from "../../assets/cyber.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1 className="blue">D4RKENC0D1NG</h1>
          <h3>LEARN LIKE NEVER LEARN BEFORE</h3>
          <div>
            <button>Learn More</button>
          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={cyber} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

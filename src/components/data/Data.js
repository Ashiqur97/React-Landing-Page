import React from "react";
import dark from "../../assets/dark.png";
import "./DataStyles.css";

const Data = () => {
  return (
    <div className="data">
      <div className="container">
        <div className="content">
          <h2>
            <span>About</span> Me
          </h2>
          <p>
            Hey, I am d4rk3nc0d1ng.I am also member of Paradoxical Hackers
            Squad. Bug Hunter,CTF Player, Web Developer.. I will Share a small
            guidline of Bug Hunting, web challenges ctf, cryptography, reverse
            engineering.I am very passoinate of my work
          </p>
          <div>
            <button>Download</button>
          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={dark} />
        </div>
      </div>
    </div>
  );
};

export default Data;

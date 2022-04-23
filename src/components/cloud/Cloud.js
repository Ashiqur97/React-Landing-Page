import React from "react";
import "./CloudStyles.css";
import cloud from "../../assets/cloud.png";

const Cloud = () => {
  return (
    <div className="cloud">
      <div className="container">
        <div className="content">
          <h2>
            <span>Forensic</span> Security
          </h2>
          <p>
            Ctf it's just a lot of pratice.Read a lot of blog and writteup.
            forensic has some use full tool.Autopsy,voladity,Aircrack-ng.
          </p>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={cloud} />
        </div>
      </div>
    </div>
  );
};

export default Cloud;

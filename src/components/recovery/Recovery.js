import React from "react";
import dark from "../../assets/dark.png";
import "./RecoveryStyles.css";

const Recovery = () => {
  return (
    <div className="recovery">
      <div className="container">
        <div className="content">
          <h4 className="blue">picoCTF</h4>
          <p>
            This is encoded with a Caesar cipher, in which every character is
            shifted a number of times in the alphabet. Simple plug the flag from
            the file into an online tool such as Cryptii and change the shifted
            value until the plain-text becomes a correct message.
          </p>

          <h4 className="blue">Hack the box</h4>
          <p>
            First download the pcap file then open wireshark and search the
            communication between 2 parties using mail and decrypt the code and
            Boom...
          </p>

          <div>
            <button>Resources</button>
          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={dark} />
        </div>
      </div>
    </div>
  );
};

export default Recovery;

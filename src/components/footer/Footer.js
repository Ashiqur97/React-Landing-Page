import React from "react";
import { SiDatabricks } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  FiMail,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiDribbble
} from "react-icons/fi";
import "./FooterStyles.css";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SiDatabricks className="icon" />
            <h2>D4rk3nc0d1ng.</h2>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Bug Hunting</p>
            <p>CTF</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Telegramme</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Bug Hunting</p>
            <p>Reversing Engineering</p>
            <p>Cryptography</p>
            <p>Web</p>
          </div>
          <div className="col">
            <h3>Group</h3>
            <p>Paradoxical Hackers Squad</p>
            <p>CTF</p>
            <p>Cloud</p>
          </div>
          <form>
            <h3>Contact Me</h3>
            <input type="email" placeholder="Enter email" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
              <FiDribbble className="social-icon" />
              <FiGithub className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

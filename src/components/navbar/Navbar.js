import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h3>D4rk3nc0d1ng</h3>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recovery">Cryptography</Link>
          </li>
          <li>
            <Link to="/cloud">Forensic</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button>Sign in</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

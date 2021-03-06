import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Github from "../Assets/github.png";
import LogoLong from "../Assets/logo-long.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src={LogoLong}
              alt="yeeunsong-logo"
              className="yeeunsong-logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="active"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experiences"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="active"
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/yeeunsong"
                target="_blank"
                title="Github"
                rel="noreferrer"
                className="nav-links"
              >
                <img src={Github} alt="github-logo" className="github-logo" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

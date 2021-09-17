/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { ReactComponent as Github } from "../../Assets/github.svg";
// import { ReactComponent as LogoLong } from "../../Assets/logo-long.svg";
import Github from "../../Assets/github.png";
import LogoLong from "../../Assets/logo-long.png";

import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="div-header">
        <div>
          <NavLink to="/">
            {/* <LogoLong className="div-svg" /> */}
            <img src={LogoLong} className="div-header-logo" />
          </NavLink>
        </div>
        <div className="div-header-menu">
          <NavLink to="/home">
            <h1 className="div-svg">Home</h1>
          </NavLink>
          <NavLink to="/projects">
            <h1 className="div-svg">Projects</h1>
          </NavLink>
          <NavLink to="/experiences">
            <h1 className="div-svg">Experiences</h1>
          </NavLink>
          <NavLink to="https://github.com/yeeunsong">
            {/* <Github className="div-svg" /> */}
            <img src={Github} className="div-svg" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;

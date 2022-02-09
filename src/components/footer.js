import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./css/navBar.css";

export const Footer = () => {
  return (
    <div id="footbar">
      <li id="navBarList">
        <div id="navContent">
          <Link to="/">
            <button className="navButton"></button>
          </Link>
        </div>
      </li>
    </div>
  );
};

export default Footer;

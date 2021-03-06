import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./css/navBar.css";

export const NavBar = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    props.setUser(undefined);
    navigate("/");
  };

  return (
    <div>
      <div id="pageBuffer" />
      <nav>
        <div className="navbar">
            <Link to="/">
            <img className="logo" src="./logoFinal.png" alt="logo"/>
            </Link>
          <li className="nav-links">
            <div>
              <Link to="/events">
                <button className="navButton"> EVENTS </button>
              </Link>
             
                <Link to="/footage">

                <button className="navButton"> FOOTAGE </button>
              </Link>
              <Link to="/locations">
                <button className="navButton"> LOCATIONS </button>
              </Link>
            </div>

            {props.user ? null : null}
            {props.user ? (
              <div>
                <Link to="/report">
                  <button className="navButton"> REPORT MANAGEMENT </button>
                </Link>
                <button className="navButton" onClick={() => logout()}>
                  LOGOUT
                </button>
              </div>
            ) : (
              <button className="navButton" onClick={() => props.setOpen(true)}>
                LOGIN / REGISTER
              </button>
            )}
          </li>
        </div>
      </nav>
    </div>
  );
};

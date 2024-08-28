import "./navbar.scss";
import brvb from "../../assets/images/brvb.jpg";
import highPerform from "../../assets/images/njhighperformance.webp";
import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function Navbar() {
  return (
    <>
      <div className="topsection navbar-section">
        <div className="container navbar-container">
          <div className="flex navbar-flex">
            <div className="logo">
              <Link to="/">
                <img className="img-logo" src={brvb} alt="brvb" />{" "}
              </Link>
            </div>
            <div className="name">
              <h1 className="schoolName">
                {" "}
                Bridgewater-Raritan Highschool Volleyball
              </h1>
            </div>
            <div className="camp">
              <a href="https://www.njhighperformancevolleyball.com/">
                <img className="img-high" src={highPerform} alt="highPerform" />{" "}
                {""}
              </a>
              <div className="dropmenu">
                <div
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <Hamburger />
                </div>
                <div className={open ? "menu open-menu" : "menu closed-menu"}>
                  <Link to="/">
                    <div className="link">HOME</div>
                  </Link>
                  <Link to="/Boys">
                    <div className="link"> BOYS</div>
                  </Link>
                  <Link to="/Girls">
                    <div className="link">GIRLS</div>
                  </Link>
                  <Link to="/Coaches">
                    <div className="link">COACHES</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Menu(props) {
  return (
    <div className="menu">
      <div className="menu-drop">{props.children}</div>
    </div>
  );
}

function MenuItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </div>
  );
}

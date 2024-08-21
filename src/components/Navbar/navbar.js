import "./navbar.scss";
import brvb from "../../assets/images/brvb.jpg";
import highPerform from "../../assets/images/njhighperformance.webp";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
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
            </div>
            <div className="dropmenu">
              <Menu>
                <MenuItem icon={<IoMenu />}>
                  <div className="Links">
                    <div className="Home">
                      <Link to="/">HOME</Link>
                    </div>
                    <div className="Boys">
                      <Link to="/Boys">BOYS</Link>
                    </div>
                    <div className="Girls">
                      <Link to="/Girls">GIRLS</Link>
                    </div>
                    <div className="Coaches">
                      <Link to="/Coaches">COACHES</Link>
                    </div>
                  </div>
                </MenuItem>
              </Menu>
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

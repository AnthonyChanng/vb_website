import "./navbar.scss";
import brvb from "../../assets/images/brvb.jpg";
import highPerform from "../../assets/images/njhighperformance.webp";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topsection navbar-section">
        <div className="navbar-container">
          <div className="flex navbar-flex">
            <div id="left-navbar">
              <div className="logo">
                <Link to="/">
                  <img className="img-logo" src={brvb} alt="brvb" />{" "}
                </Link>
              </div>
              <h1 className="school-name">
                Bridgewater-Raritan Highschool Volleyball
              </h1>
            </div>
            <div id="right-navbar">
              <a
                href="https://www.njhighperformancevolleyball.com/"
                target="_blank"
                rel="noreferrer"
                className="camp-logo"
              >
                <img className="img-high" src={highPerform} alt="highPerform" />
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

function Hamburger() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_429_11066)">
        <path
          d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
          stroke="#292929"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11066">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.000915527)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

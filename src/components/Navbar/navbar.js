import "./navbar.scss";
import brvb from "../../assets/images/brvb.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import hudl from "../../assets/images/hudl.jpg";
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
              <h1 className="h1"> Bridgewater-Raritan Highschool Volleyball</h1>
            </div>
            <div className="socials">
              <a
                className="instagram"
                href="https://www.instagram.com/brboysvolleyball/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="black"
                  className="icon"
                />
              </a>
              <div className="BRVBhudl">
                <a href="https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school/team/324160/boys-varsity-volleyball">
                  {" "}
                  <img className="img-hudl" src={hudl} alt="hudl" /> {""}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
